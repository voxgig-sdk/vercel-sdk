package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/vercel-sdk/go/utility/struct"
)

type VercelSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewVercelSDK(options map[string]any) *VercelSDK {
	sdk := &VercelSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *VercelSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *VercelSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *VercelSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *VercelSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *VercelSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *VercelSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *VercelSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("VercelSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *VercelSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *VercelSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("VercelSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AccessGroup returns a AccessGroup entity bound to this client.
// Idiomatic usage: client.AccessGroup(nil).List(nil, nil) or
// client.AccessGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) AccessGroup(data map[string]any) VercelEntity {
	return NewAccessGroupEntityFunc(sdk, data)
}


// AiGateway returns a AiGateway entity bound to this client.
// Idiomatic usage: client.AiGateway(nil).List(nil, nil) or
// client.AiGateway(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) AiGateway(data map[string]any) VercelEntity {
	return NewAiGatewayEntityFunc(sdk, data)
}


// AiGatewayRule returns a AiGatewayRule entity bound to this client.
// Idiomatic usage: client.AiGatewayRule(nil).List(nil, nil) or
// client.AiGatewayRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) AiGatewayRule(data map[string]any) VercelEntity {
	return NewAiGatewayRuleEntityFunc(sdk, data)
}


// AiGatewayRuleList returns a AiGatewayRuleList entity bound to this client.
// Idiomatic usage: client.AiGatewayRuleList(nil).List(nil, nil) or
// client.AiGatewayRuleList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) AiGatewayRuleList(data map[string]any) VercelEntity {
	return NewAiGatewayRuleListEntityFunc(sdk, data)
}


// AiGatewayVirtualModelConfig returns a AiGatewayVirtualModelConfig entity bound to this client.
// Idiomatic usage: client.AiGatewayVirtualModelConfig(nil).List(nil, nil) or
// client.AiGatewayVirtualModelConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) AiGatewayVirtualModelConfig(data map[string]any) VercelEntity {
	return NewAiGatewayVirtualModelConfigEntityFunc(sdk, data)
}


// AiGatewayVirtualModelConfigList returns a AiGatewayVirtualModelConfigList entity bound to this client.
// Idiomatic usage: client.AiGatewayVirtualModelConfigList(nil).List(nil, nil) or
// client.AiGatewayVirtualModelConfigList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) AiGatewayVirtualModelConfigList(data map[string]any) VercelEntity {
	return NewAiGatewayVirtualModelConfigListEntityFunc(sdk, data)
}


// Alias returns a Alias entity bound to this client.
// Idiomatic usage: client.Alias(nil).List(nil, nil) or
// client.Alias(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Alias(data map[string]any) VercelEntity {
	return NewAliasEntityFunc(sdk, data)
}


// ApiAiGateway returns a ApiAiGateway entity bound to this client.
// Idiomatic usage: client.ApiAiGateway(nil).List(nil, nil) or
// client.ApiAiGateway(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ApiAiGateway(data map[string]any) VercelEntity {
	return NewApiAiGatewayEntityFunc(sdk, data)
}


// ApiKey returns a ApiKey entity bound to this client.
// Idiomatic usage: client.ApiKey(nil).List(nil, nil) or
// client.ApiKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ApiKey(data map[string]any) VercelEntity {
	return NewApiKeyEntityFunc(sdk, data)
}


// Artifact returns a Artifact entity bound to this client.
// Idiomatic usage: client.Artifact(nil).List(nil, nil) or
// client.Artifact(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Artifact(data map[string]any) VercelEntity {
	return NewArtifactEntityFunc(sdk, data)
}


// Authentication returns a Authentication entity bound to this client.
// Idiomatic usage: client.Authentication(nil).List(nil, nil) or
// client.Authentication(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Authentication(data map[string]any) VercelEntity {
	return NewAuthenticationEntityFunc(sdk, data)
}


// Billing returns a Billing entity bound to this client.
// Idiomatic usage: client.Billing(nil).List(nil, nil) or
// client.Billing(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Billing(data map[string]any) VercelEntity {
	return NewBillingEntityFunc(sdk, data)
}


// BulkRedirect returns a BulkRedirect entity bound to this client.
// Idiomatic usage: client.BulkRedirect(nil).List(nil, nil) or
// client.BulkRedirect(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) BulkRedirect(data map[string]any) VercelEntity {
	return NewBulkRedirectEntityFunc(sdk, data)
}


// Cert returns a Cert entity bound to this client.
// Idiomatic usage: client.Cert(nil).List(nil, nil) or
// client.Cert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Cert(data map[string]any) VercelEntity {
	return NewCertEntityFunc(sdk, data)
}


// Check returns a Check entity bound to this client.
// Idiomatic usage: client.Check(nil).List(nil, nil) or
// client.Check(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Check(data map[string]any) VercelEntity {
	return NewCheckEntityFunc(sdk, data)
}


// ChecksV2 returns a ChecksV2 entity bound to this client.
// Idiomatic usage: client.ChecksV2(nil).List(nil, nil) or
// client.ChecksV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ChecksV2(data map[string]any) VercelEntity {
	return NewChecksV2EntityFunc(sdk, data)
}


// Connect returns a Connect entity bound to this client.
// Idiomatic usage: client.Connect(nil).List(nil, nil) or
// client.Connect(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Connect(data map[string]any) VercelEntity {
	return NewConnectEntityFunc(sdk, data)
}


// ConnectConnector returns a ConnectConnector entity bound to this client.
// Idiomatic usage: client.ConnectConnector(nil).List(nil, nil) or
// client.ConnectConnector(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ConnectConnector(data map[string]any) VercelEntity {
	return NewConnectConnectorEntityFunc(sdk, data)
}


// ConnectConnectorList returns a ConnectConnectorList entity bound to this client.
// Idiomatic usage: client.ConnectConnectorList(nil).List(nil, nil) or
// client.ConnectConnectorList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ConnectConnectorList(data map[string]any) VercelEntity {
	return NewConnectConnectorListEntityFunc(sdk, data)
}


// ConnectConnectorProjectConnectionList returns a ConnectConnectorProjectConnectionList entity bound to this client.
// Idiomatic usage: client.ConnectConnectorProjectConnectionList(nil).List(nil, nil) or
// client.ConnectConnectorProjectConnectionList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ConnectConnectorProjectConnectionList(data map[string]any) VercelEntity {
	return NewConnectConnectorProjectConnectionListEntityFunc(sdk, data)
}


// ConnectProjectConnection returns a ConnectProjectConnection entity bound to this client.
// Idiomatic usage: client.ConnectProjectConnection(nil).List(nil, nil) or
// client.ConnectProjectConnection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ConnectProjectConnection(data map[string]any) VercelEntity {
	return NewConnectProjectConnectionEntityFunc(sdk, data)
}


// ConnectProjectConnectorConnectionList returns a ConnectProjectConnectorConnectionList entity bound to this client.
// Idiomatic usage: client.ConnectProjectConnectorConnectionList(nil).List(nil, nil) or
// client.ConnectProjectConnectorConnectionList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ConnectProjectConnectorConnectionList(data map[string]any) VercelEntity {
	return NewConnectProjectConnectorConnectionListEntityFunc(sdk, data)
}


// Deployment returns a Deployment entity bound to this client.
// Idiomatic usage: client.Deployment(nil).List(nil, nil) or
// client.Deployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Deployment(data map[string]any) VercelEntity {
	return NewDeploymentEntityFunc(sdk, data)
}


// Dns returns a Dns entity bound to this client.
// Idiomatic usage: client.Dns(nil).List(nil, nil) or
// client.Dns(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Dns(data map[string]any) VercelEntity {
	return NewDnsEntityFunc(sdk, data)
}


// Domain returns a Domain entity bound to this client.
// Idiomatic usage: client.Domain(nil).List(nil, nil) or
// client.Domain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Domain(data map[string]any) VercelEntity {
	return NewDomainEntityFunc(sdk, data)
}


// DomainsRegistrar returns a DomainsRegistrar entity bound to this client.
// Idiomatic usage: client.DomainsRegistrar(nil).List(nil, nil) or
// client.DomainsRegistrar(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) DomainsRegistrar(data map[string]any) VercelEntity {
	return NewDomainsRegistrarEntityFunc(sdk, data)
}


// Drain returns a Drain entity bound to this client.
// Idiomatic usage: client.Drain(nil).List(nil, nil) or
// client.Drain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Drain(data map[string]any) VercelEntity {
	return NewDrainEntityFunc(sdk, data)
}


// EdgeCache returns a EdgeCache entity bound to this client.
// Idiomatic usage: client.EdgeCache(nil).List(nil, nil) or
// client.EdgeCache(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) EdgeCache(data map[string]any) VercelEntity {
	return NewEdgeCacheEntityFunc(sdk, data)
}


// Env returns a Env entity bound to this client.
// Idiomatic usage: client.Env(nil).List(nil, nil) or
// client.Env(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Env(data map[string]any) VercelEntity {
	return NewEnvEntityFunc(sdk, data)
}


// Environment returns a Environment entity bound to this client.
// Idiomatic usage: client.Environment(nil).List(nil, nil) or
// client.Environment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Environment(data map[string]any) VercelEntity {
	return NewEnvironmentEntityFunc(sdk, data)
}


// FeatureFlag returns a FeatureFlag entity bound to this client.
// Idiomatic usage: client.FeatureFlag(nil).List(nil, nil) or
// client.FeatureFlag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) FeatureFlag(data map[string]any) VercelEntity {
	return NewFeatureFlagEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) File(data map[string]any) VercelEntity {
	return NewFileEntityFunc(sdk, data)
}


// Flag returns a Flag entity bound to this client.
// Idiomatic usage: client.Flag(nil).List(nil, nil) or
// client.Flag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Flag(data map[string]any) VercelEntity {
	return NewFlagEntityFunc(sdk, data)
}


// FlagsSdkKeyWithSecret returns a FlagsSdkKeyWithSecret entity bound to this client.
// Idiomatic usage: client.FlagsSdkKeyWithSecret(nil).List(nil, nil) or
// client.FlagsSdkKeyWithSecret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) FlagsSdkKeyWithSecret(data map[string]any) VercelEntity {
	return NewFlagsSdkKeyWithSecretEntityFunc(sdk, data)
}


// GlobalConfig returns a GlobalConfig entity bound to this client.
// Idiomatic usage: client.GlobalConfig(nil).List(nil, nil) or
// client.GlobalConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) GlobalConfig(data map[string]any) VercelEntity {
	return NewGlobalConfigEntityFunc(sdk, data)
}


// GlobalConfigItem returns a GlobalConfigItem entity bound to this client.
// Idiomatic usage: client.GlobalConfigItem(nil).List(nil, nil) or
// client.GlobalConfigItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) GlobalConfigItem(data map[string]any) VercelEntity {
	return NewGlobalConfigItemEntityFunc(sdk, data)
}


// GlobalConfigToken returns a GlobalConfigToken entity bound to this client.
// Idiomatic usage: client.GlobalConfigToken(nil).List(nil, nil) or
// client.GlobalConfigToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) GlobalConfigToken(data map[string]any) VercelEntity {
	return NewGlobalConfigTokenEntityFunc(sdk, data)
}


// Integration returns a Integration entity bound to this client.
// Idiomatic usage: client.Integration(nil).List(nil, nil) or
// client.Integration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Integration(data map[string]any) VercelEntity {
	return NewIntegrationEntityFunc(sdk, data)
}


// Kms returns a Kms entity bound to this client.
// Idiomatic usage: client.Kms(nil).List(nil, nil) or
// client.Kms(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Kms(data map[string]any) VercelEntity {
	return NewKmsEntityFunc(sdk, data)
}


// ListEventType returns a ListEventType entity bound to this client.
// Idiomatic usage: client.ListEventType(nil).List(nil, nil) or
// client.ListEventType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ListEventType(data map[string]any) VercelEntity {
	return NewListEventTypeEntityFunc(sdk, data)
}


// Log returns a Log entity bound to this client.
// Idiomatic usage: client.Log(nil).List(nil, nil) or
// client.Log(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Log(data map[string]any) VercelEntity {
	return NewLogEntityFunc(sdk, data)
}


// LogDrain returns a LogDrain entity bound to this client.
// Idiomatic usage: client.LogDrain(nil).List(nil, nil) or
// client.LogDrain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) LogDrain(data map[string]any) VercelEntity {
	return NewLogDrainEntityFunc(sdk, data)
}


// Marketplace returns a Marketplace entity bound to this client.
// Idiomatic usage: client.Marketplace(nil).List(nil, nil) or
// client.Marketplace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Marketplace(data map[string]any) VercelEntity {
	return NewMarketplaceEntityFunc(sdk, data)
}


// Microfrontend returns a Microfrontend entity bound to this client.
// Idiomatic usage: client.Microfrontend(nil).List(nil, nil) or
// client.Microfrontend(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Microfrontend(data map[string]any) VercelEntity {
	return NewMicrofrontendEntityFunc(sdk, data)
}


// Network returns a Network entity bound to this client.
// Idiomatic usage: client.Network(nil).List(nil, nil) or
// client.Network(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Network(data map[string]any) VercelEntity {
	return NewNetworkEntityFunc(sdk, data)
}


// Networking returns a Networking entity bound to this client.
// Idiomatic usage: client.Networking(nil).List(nil, nil) or
// client.Networking(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Networking(data map[string]any) VercelEntity {
	return NewNetworkingEntityFunc(sdk, data)
}


// Observability returns a Observability entity bound to this client.
// Idiomatic usage: client.Observability(nil).List(nil, nil) or
// client.Observability(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Observability(data map[string]any) VercelEntity {
	return NewObservabilityEntityFunc(sdk, data)
}


// PrivateLinkEndpoint returns a PrivateLinkEndpoint entity bound to this client.
// Idiomatic usage: client.PrivateLinkEndpoint(nil).List(nil, nil) or
// client.PrivateLinkEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) PrivateLinkEndpoint(data map[string]any) VercelEntity {
	return NewPrivateLinkEndpointEntityFunc(sdk, data)
}


// Project returns a Project entity bound to this client.
// Idiomatic usage: client.Project(nil).List(nil, nil) or
// client.Project(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Project(data map[string]any) VercelEntity {
	return NewProjectEntityFunc(sdk, data)
}


// ProjectMember returns a ProjectMember entity bound to this client.
// Idiomatic usage: client.ProjectMember(nil).List(nil, nil) or
// client.ProjectMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ProjectMember(data map[string]any) VercelEntity {
	return NewProjectMemberEntityFunc(sdk, data)
}


// ProjectRoute returns a ProjectRoute entity bound to this client.
// Idiomatic usage: client.ProjectRoute(nil).List(nil, nil) or
// client.ProjectRoute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) ProjectRoute(data map[string]any) VercelEntity {
	return NewProjectRouteEntityFunc(sdk, data)
}


// Query returns a Query entity bound to this client.
// Idiomatic usage: client.Query(nil).List(nil, nil) or
// client.Query(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Query(data map[string]any) VercelEntity {
	return NewQueryEntityFunc(sdk, data)
}


// Record returns a Record entity bound to this client.
// Idiomatic usage: client.Record(nil).List(nil, nil) or
// client.Record(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Record(data map[string]any) VercelEntity {
	return NewRecordEntityFunc(sdk, data)
}


// RollingRelease returns a RollingRelease entity bound to this client.
// Idiomatic usage: client.RollingRelease(nil).List(nil, nil) or
// client.RollingRelease(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) RollingRelease(data map[string]any) VercelEntity {
	return NewRollingReleaseEntityFunc(sdk, data)
}


// Sandbox returns a Sandbox entity bound to this client.
// Idiomatic usage: client.Sandbox(nil).List(nil, nil) or
// client.Sandbox(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Sandbox(data map[string]any) VercelEntity {
	return NewSandboxEntityFunc(sdk, data)
}


// Schema returns a Schema entity bound to this client.
// Idiomatic usage: client.Schema(nil).List(nil, nil) or
// client.Schema(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Schema(data map[string]any) VercelEntity {
	return NewSchemaEntityFunc(sdk, data)
}


// Security returns a Security entity bound to this client.
// Idiomatic usage: client.Security(nil).List(nil, nil) or
// client.Security(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Security(data map[string]any) VercelEntity {
	return NewSecurityEntityFunc(sdk, data)
}


// Segment returns a Segment entity bound to this client.
// Idiomatic usage: client.Segment(nil).List(nil, nil) or
// client.Segment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Segment(data map[string]any) VercelEntity {
	return NewSegmentEntityFunc(sdk, data)
}


// Storage returns a Storage entity bound to this client.
// Idiomatic usage: client.Storage(nil).List(nil, nil) or
// client.Storage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Storage(data map[string]any) VercelEntity {
	return NewStorageEntityFunc(sdk, data)
}


// Team returns a Team entity bound to this client.
// Idiomatic usage: client.Team(nil).List(nil, nil) or
// client.Team(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Team(data map[string]any) VercelEntity {
	return NewTeamEntityFunc(sdk, data)
}


// TldName returns a TldName entity bound to this client.
// Idiomatic usage: client.TldName(nil).List(nil, nil) or
// client.TldName(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) TldName(data map[string]any) VercelEntity {
	return NewTldNameEntityFunc(sdk, data)
}


// Toggle returns a Toggle entity bound to this client.
// Idiomatic usage: client.Toggle(nil).List(nil, nil) or
// client.Toggle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Toggle(data map[string]any) VercelEntity {
	return NewToggleEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) User(data map[string]any) VercelEntity {
	return NewUserEntityFunc(sdk, data)
}


// Vcr returns a Vcr entity bound to this client.
// Idiomatic usage: client.Vcr(nil).List(nil, nil) or
// client.Vcr(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Vcr(data map[string]any) VercelEntity {
	return NewVcrEntityFunc(sdk, data)
}


// VcrImageList returns a VcrImageList entity bound to this client.
// Idiomatic usage: client.VcrImageList(nil).List(nil, nil) or
// client.VcrImageList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) VcrImageList(data map[string]any) VercelEntity {
	return NewVcrImageListEntityFunc(sdk, data)
}


// VcrRepositoryList returns a VcrRepositoryList entity bound to this client.
// Idiomatic usage: client.VcrRepositoryList(nil).List(nil, nil) or
// client.VcrRepositoryList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) VcrRepositoryList(data map[string]any) VercelEntity {
	return NewVcrRepositoryListEntityFunc(sdk, data)
}


// VcrRepositoryPermissionList returns a VcrRepositoryPermissionList entity bound to this client.
// Idiomatic usage: client.VcrRepositoryPermissionList(nil).List(nil, nil) or
// client.VcrRepositoryPermissionList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) VcrRepositoryPermissionList(data map[string]any) VercelEntity {
	return NewVcrRepositoryPermissionListEntityFunc(sdk, data)
}


// WebAnalytics returns a WebAnalytics entity bound to this client.
// Idiomatic usage: client.WebAnalytics(nil).List(nil, nil) or
// client.WebAnalytics(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) WebAnalytics(data map[string]any) VercelEntity {
	return NewWebAnalyticsEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VercelSDK) Webhook(data map[string]any) VercelEntity {
	return NewWebhookEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *VercelSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewVercelSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
