<?php
declare(strict_types=1);

// Vercel SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class VercelSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new VercelUtility();
        $this->_utility = $utility;

        $config = VercelConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = VercelHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = VercelHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!VercelFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, VercelFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return VercelUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = VercelHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = VercelHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = VercelHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new VercelSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new VercelError($op . "_allow",
                "VercelSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = VercelHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = VercelHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new VercelError("graphql_error",
                "VercelSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_access_group = null;

    // Canonical facade: $client->AccessGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->access_group()
    // resolves here too.
    public function AccessGroup($data = null)
    {
        require_once __DIR__ . '/entity/access_group_entity.php';
        if ($data === null) {
            if ($this->_access_group === null) {
                $this->_access_group = new AccessGroupEntity($this, null);
            }
            return $this->_access_group;
        }
        return new AccessGroupEntity($this, $data);
    }


    private $_ai_gateway = null;

    // Canonical facade: $client->AiGateway()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway()
    // resolves here too.
    public function AiGateway($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway === null) {
                $this->_ai_gateway = new AiGatewayEntity($this, null);
            }
            return $this->_ai_gateway;
        }
        return new AiGatewayEntity($this, $data);
    }


    private $_ai_gateway_rule = null;

    // Canonical facade: $client->AiGatewayRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_rule()
    // resolves here too.
    public function AiGatewayRule($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_rule_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_rule === null) {
                $this->_ai_gateway_rule = new AiGatewayRuleEntity($this, null);
            }
            return $this->_ai_gateway_rule;
        }
        return new AiGatewayRuleEntity($this, $data);
    }


    private $_ai_gateway_rule_list = null;

    // Canonical facade: $client->AiGatewayRuleList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_rule_list()
    // resolves here too.
    public function AiGatewayRuleList($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_rule_list_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_rule_list === null) {
                $this->_ai_gateway_rule_list = new AiGatewayRuleListEntity($this, null);
            }
            return $this->_ai_gateway_rule_list;
        }
        return new AiGatewayRuleListEntity($this, $data);
    }


    private $_ai_gateway_virtual_model_config = null;

    // Canonical facade: $client->AiGatewayVirtualModelConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_virtual_model_config()
    // resolves here too.
    public function AiGatewayVirtualModelConfig($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_virtual_model_config_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_virtual_model_config === null) {
                $this->_ai_gateway_virtual_model_config = new AiGatewayVirtualModelConfigEntity($this, null);
            }
            return $this->_ai_gateway_virtual_model_config;
        }
        return new AiGatewayVirtualModelConfigEntity($this, $data);
    }


    private $_ai_gateway_virtual_model_config_list = null;

    // Canonical facade: $client->AiGatewayVirtualModelConfigList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_virtual_model_config_list()
    // resolves here too.
    public function AiGatewayVirtualModelConfigList($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_virtual_model_config_list_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_virtual_model_config_list === null) {
                $this->_ai_gateway_virtual_model_config_list = new AiGatewayVirtualModelConfigListEntity($this, null);
            }
            return $this->_ai_gateway_virtual_model_config_list;
        }
        return new AiGatewayVirtualModelConfigListEntity($this, $data);
    }


    private $_alias = null;

    // Canonical facade: $client->Alias()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alias()
    // resolves here too.
    public function Alias($data = null)
    {
        require_once __DIR__ . '/entity/alias_entity.php';
        if ($data === null) {
            if ($this->_alias === null) {
                $this->_alias = new AliasEntity($this, null);
            }
            return $this->_alias;
        }
        return new AliasEntity($this, $data);
    }


    private $_api_ai_gateway = null;

    // Canonical facade: $client->ApiAiGateway()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_ai_gateway()
    // resolves here too.
    public function ApiAiGateway($data = null)
    {
        require_once __DIR__ . '/entity/api_ai_gateway_entity.php';
        if ($data === null) {
            if ($this->_api_ai_gateway === null) {
                $this->_api_ai_gateway = new ApiAiGatewayEntity($this, null);
            }
            return $this->_api_ai_gateway;
        }
        return new ApiAiGatewayEntity($this, $data);
    }


    private $_api_key = null;

    // Canonical facade: $client->ApiKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_key()
    // resolves here too.
    public function ApiKey($data = null)
    {
        require_once __DIR__ . '/entity/api_key_entity.php';
        if ($data === null) {
            if ($this->_api_key === null) {
                $this->_api_key = new ApiKeyEntity($this, null);
            }
            return $this->_api_key;
        }
        return new ApiKeyEntity($this, $data);
    }


    private $_artifact = null;

    // Canonical facade: $client->Artifact()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->artifact()
    // resolves here too.
    public function Artifact($data = null)
    {
        require_once __DIR__ . '/entity/artifact_entity.php';
        if ($data === null) {
            if ($this->_artifact === null) {
                $this->_artifact = new ArtifactEntity($this, null);
            }
            return $this->_artifact;
        }
        return new ArtifactEntity($this, $data);
    }


    private $_authentication = null;

    // Canonical facade: $client->Authentication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->authentication()
    // resolves here too.
    public function Authentication($data = null)
    {
        require_once __DIR__ . '/entity/authentication_entity.php';
        if ($data === null) {
            if ($this->_authentication === null) {
                $this->_authentication = new AuthenticationEntity($this, null);
            }
            return $this->_authentication;
        }
        return new AuthenticationEntity($this, $data);
    }


    private $_billing = null;

    // Canonical facade: $client->Billing()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billing()
    // resolves here too.
    public function Billing($data = null)
    {
        require_once __DIR__ . '/entity/billing_entity.php';
        if ($data === null) {
            if ($this->_billing === null) {
                $this->_billing = new BillingEntity($this, null);
            }
            return $this->_billing;
        }
        return new BillingEntity($this, $data);
    }


    private $_bulk_redirect = null;

    // Canonical facade: $client->BulkRedirect()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk_redirect()
    // resolves here too.
    public function BulkRedirect($data = null)
    {
        require_once __DIR__ . '/entity/bulk_redirect_entity.php';
        if ($data === null) {
            if ($this->_bulk_redirect === null) {
                $this->_bulk_redirect = new BulkRedirectEntity($this, null);
            }
            return $this->_bulk_redirect;
        }
        return new BulkRedirectEntity($this, $data);
    }


    private $_cert = null;

    // Canonical facade: $client->Cert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cert()
    // resolves here too.
    public function Cert($data = null)
    {
        require_once __DIR__ . '/entity/cert_entity.php';
        if ($data === null) {
            if ($this->_cert === null) {
                $this->_cert = new CertEntity($this, null);
            }
            return $this->_cert;
        }
        return new CertEntity($this, $data);
    }


    private $_check = null;

    // Canonical facade: $client->Check()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->check()
    // resolves here too.
    public function Check($data = null)
    {
        require_once __DIR__ . '/entity/check_entity.php';
        if ($data === null) {
            if ($this->_check === null) {
                $this->_check = new CheckEntity($this, null);
            }
            return $this->_check;
        }
        return new CheckEntity($this, $data);
    }


    private $_checks_v2 = null;

    // Canonical facade: $client->ChecksV2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->checks_v2()
    // resolves here too.
    public function ChecksV2($data = null)
    {
        require_once __DIR__ . '/entity/checks_v2_entity.php';
        if ($data === null) {
            if ($this->_checks_v2 === null) {
                $this->_checks_v2 = new ChecksV2Entity($this, null);
            }
            return $this->_checks_v2;
        }
        return new ChecksV2Entity($this, $data);
    }


    private $_connect = null;

    // Canonical facade: $client->Connect()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connect()
    // resolves here too.
    public function Connect($data = null)
    {
        require_once __DIR__ . '/entity/connect_entity.php';
        if ($data === null) {
            if ($this->_connect === null) {
                $this->_connect = new ConnectEntity($this, null);
            }
            return $this->_connect;
        }
        return new ConnectEntity($this, $data);
    }


    private $_connect_connector = null;

    // Canonical facade: $client->ConnectConnector()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connect_connector()
    // resolves here too.
    public function ConnectConnector($data = null)
    {
        require_once __DIR__ . '/entity/connect_connector_entity.php';
        if ($data === null) {
            if ($this->_connect_connector === null) {
                $this->_connect_connector = new ConnectConnectorEntity($this, null);
            }
            return $this->_connect_connector;
        }
        return new ConnectConnectorEntity($this, $data);
    }


    private $_connect_connector_list = null;

    // Canonical facade: $client->ConnectConnectorList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connect_connector_list()
    // resolves here too.
    public function ConnectConnectorList($data = null)
    {
        require_once __DIR__ . '/entity/connect_connector_list_entity.php';
        if ($data === null) {
            if ($this->_connect_connector_list === null) {
                $this->_connect_connector_list = new ConnectConnectorListEntity($this, null);
            }
            return $this->_connect_connector_list;
        }
        return new ConnectConnectorListEntity($this, $data);
    }


    private $_connect_connector_project_connection_list = null;

    // Canonical facade: $client->ConnectConnectorProjectConnectionList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connect_connector_project_connection_list()
    // resolves here too.
    public function ConnectConnectorProjectConnectionList($data = null)
    {
        require_once __DIR__ . '/entity/connect_connector_project_connection_list_entity.php';
        if ($data === null) {
            if ($this->_connect_connector_project_connection_list === null) {
                $this->_connect_connector_project_connection_list = new ConnectConnectorProjectConnectionListEntity($this, null);
            }
            return $this->_connect_connector_project_connection_list;
        }
        return new ConnectConnectorProjectConnectionListEntity($this, $data);
    }


    private $_connect_project_connection = null;

    // Canonical facade: $client->ConnectProjectConnection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connect_project_connection()
    // resolves here too.
    public function ConnectProjectConnection($data = null)
    {
        require_once __DIR__ . '/entity/connect_project_connection_entity.php';
        if ($data === null) {
            if ($this->_connect_project_connection === null) {
                $this->_connect_project_connection = new ConnectProjectConnectionEntity($this, null);
            }
            return $this->_connect_project_connection;
        }
        return new ConnectProjectConnectionEntity($this, $data);
    }


    private $_connect_project_connector_connection_list = null;

    // Canonical facade: $client->ConnectProjectConnectorConnectionList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connect_project_connector_connection_list()
    // resolves here too.
    public function ConnectProjectConnectorConnectionList($data = null)
    {
        require_once __DIR__ . '/entity/connect_project_connector_connection_list_entity.php';
        if ($data === null) {
            if ($this->_connect_project_connector_connection_list === null) {
                $this->_connect_project_connector_connection_list = new ConnectProjectConnectorConnectionListEntity($this, null);
            }
            return $this->_connect_project_connector_connection_list;
        }
        return new ConnectProjectConnectorConnectionListEntity($this, $data);
    }


    private $_deployment = null;

    // Canonical facade: $client->Deployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deployment()
    // resolves here too.
    public function Deployment($data = null)
    {
        require_once __DIR__ . '/entity/deployment_entity.php';
        if ($data === null) {
            if ($this->_deployment === null) {
                $this->_deployment = new DeploymentEntity($this, null);
            }
            return $this->_deployment;
        }
        return new DeploymentEntity($this, $data);
    }


    private $_dns = null;

    // Canonical facade: $client->Dns()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dns()
    // resolves here too.
    public function Dns($data = null)
    {
        require_once __DIR__ . '/entity/dns_entity.php';
        if ($data === null) {
            if ($this->_dns === null) {
                $this->_dns = new DnsEntity($this, null);
            }
            return $this->_dns;
        }
        return new DnsEntity($this, $data);
    }


    private $_domain = null;

    // Canonical facade: $client->Domain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain()
    // resolves here too.
    public function Domain($data = null)
    {
        require_once __DIR__ . '/entity/domain_entity.php';
        if ($data === null) {
            if ($this->_domain === null) {
                $this->_domain = new DomainEntity($this, null);
            }
            return $this->_domain;
        }
        return new DomainEntity($this, $data);
    }


    private $_domains_registrar = null;

    // Canonical facade: $client->DomainsRegistrar()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domains_registrar()
    // resolves here too.
    public function DomainsRegistrar($data = null)
    {
        require_once __DIR__ . '/entity/domains_registrar_entity.php';
        if ($data === null) {
            if ($this->_domains_registrar === null) {
                $this->_domains_registrar = new DomainsRegistrarEntity($this, null);
            }
            return $this->_domains_registrar;
        }
        return new DomainsRegistrarEntity($this, $data);
    }


    private $_drain = null;

    // Canonical facade: $client->Drain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->drain()
    // resolves here too.
    public function Drain($data = null)
    {
        require_once __DIR__ . '/entity/drain_entity.php';
        if ($data === null) {
            if ($this->_drain === null) {
                $this->_drain = new DrainEntity($this, null);
            }
            return $this->_drain;
        }
        return new DrainEntity($this, $data);
    }


    private $_edge_cache = null;

    // Canonical facade: $client->EdgeCache()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->edge_cache()
    // resolves here too.
    public function EdgeCache($data = null)
    {
        require_once __DIR__ . '/entity/edge_cache_entity.php';
        if ($data === null) {
            if ($this->_edge_cache === null) {
                $this->_edge_cache = new EdgeCacheEntity($this, null);
            }
            return $this->_edge_cache;
        }
        return new EdgeCacheEntity($this, $data);
    }


    private $_env = null;

    // Canonical facade: $client->Env()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->env()
    // resolves here too.
    public function Env($data = null)
    {
        require_once __DIR__ . '/entity/env_entity.php';
        if ($data === null) {
            if ($this->_env === null) {
                $this->_env = new EnvEntity($this, null);
            }
            return $this->_env;
        }
        return new EnvEntity($this, $data);
    }


    private $_environment = null;

    // Canonical facade: $client->Environment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment()
    // resolves here too.
    public function Environment($data = null)
    {
        require_once __DIR__ . '/entity/environment_entity.php';
        if ($data === null) {
            if ($this->_environment === null) {
                $this->_environment = new EnvironmentEntity($this, null);
            }
            return $this->_environment;
        }
        return new EnvironmentEntity($this, $data);
    }


    private $_feature_flag = null;

    // Canonical facade: $client->FeatureFlag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feature_flag()
    // resolves here too.
    public function FeatureFlag($data = null)
    {
        require_once __DIR__ . '/entity/feature_flag_entity.php';
        if ($data === null) {
            if ($this->_feature_flag === null) {
                $this->_feature_flag = new FeatureFlagEntity($this, null);
            }
            return $this->_feature_flag;
        }
        return new FeatureFlagEntity($this, $data);
    }


    private $_file = null;

    // Canonical facade: $client->File()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file()
    // resolves here too.
    public function File($data = null)
    {
        require_once __DIR__ . '/entity/file_entity.php';
        if ($data === null) {
            if ($this->_file === null) {
                $this->_file = new FileEntity($this, null);
            }
            return $this->_file;
        }
        return new FileEntity($this, $data);
    }


    private $_flag = null;

    // Canonical facade: $client->Flag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->flag()
    // resolves here too.
    public function Flag($data = null)
    {
        require_once __DIR__ . '/entity/flag_entity.php';
        if ($data === null) {
            if ($this->_flag === null) {
                $this->_flag = new FlagEntity($this, null);
            }
            return $this->_flag;
        }
        return new FlagEntity($this, $data);
    }


    private $_flags_sdk_key_with_secret = null;

    // Canonical facade: $client->FlagsSdkKeyWithSecret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->flags_sdk_key_with_secret()
    // resolves here too.
    public function FlagsSdkKeyWithSecret($data = null)
    {
        require_once __DIR__ . '/entity/flags_sdk_key_with_secret_entity.php';
        if ($data === null) {
            if ($this->_flags_sdk_key_with_secret === null) {
                $this->_flags_sdk_key_with_secret = new FlagsSdkKeyWithSecretEntity($this, null);
            }
            return $this->_flags_sdk_key_with_secret;
        }
        return new FlagsSdkKeyWithSecretEntity($this, $data);
    }


    private $_global_config = null;

    // Canonical facade: $client->GlobalConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->global_config()
    // resolves here too.
    public function GlobalConfig($data = null)
    {
        require_once __DIR__ . '/entity/global_config_entity.php';
        if ($data === null) {
            if ($this->_global_config === null) {
                $this->_global_config = new GlobalConfigEntity($this, null);
            }
            return $this->_global_config;
        }
        return new GlobalConfigEntity($this, $data);
    }


    private $_global_config_item = null;

    // Canonical facade: $client->GlobalConfigItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->global_config_item()
    // resolves here too.
    public function GlobalConfigItem($data = null)
    {
        require_once __DIR__ . '/entity/global_config_item_entity.php';
        if ($data === null) {
            if ($this->_global_config_item === null) {
                $this->_global_config_item = new GlobalConfigItemEntity($this, null);
            }
            return $this->_global_config_item;
        }
        return new GlobalConfigItemEntity($this, $data);
    }


    private $_global_config_token = null;

    // Canonical facade: $client->GlobalConfigToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->global_config_token()
    // resolves here too.
    public function GlobalConfigToken($data = null)
    {
        require_once __DIR__ . '/entity/global_config_token_entity.php';
        if ($data === null) {
            if ($this->_global_config_token === null) {
                $this->_global_config_token = new GlobalConfigTokenEntity($this, null);
            }
            return $this->_global_config_token;
        }
        return new GlobalConfigTokenEntity($this, $data);
    }


    private $_integration = null;

    // Canonical facade: $client->Integration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration()
    // resolves here too.
    public function Integration($data = null)
    {
        require_once __DIR__ . '/entity/integration_entity.php';
        if ($data === null) {
            if ($this->_integration === null) {
                $this->_integration = new IntegrationEntity($this, null);
            }
            return $this->_integration;
        }
        return new IntegrationEntity($this, $data);
    }


    private $_kms = null;

    // Canonical facade: $client->Kms()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->kms()
    // resolves here too.
    public function Kms($data = null)
    {
        require_once __DIR__ . '/entity/kms_entity.php';
        if ($data === null) {
            if ($this->_kms === null) {
                $this->_kms = new KmsEntity($this, null);
            }
            return $this->_kms;
        }
        return new KmsEntity($this, $data);
    }


    private $_list_event_type = null;

    // Canonical facade: $client->ListEventType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_event_type()
    // resolves here too.
    public function ListEventType($data = null)
    {
        require_once __DIR__ . '/entity/list_event_type_entity.php';
        if ($data === null) {
            if ($this->_list_event_type === null) {
                $this->_list_event_type = new ListEventTypeEntity($this, null);
            }
            return $this->_list_event_type;
        }
        return new ListEventTypeEntity($this, $data);
    }


    private $_log = null;

    // Canonical facade: $client->Log()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->log()
    // resolves here too.
    public function Log($data = null)
    {
        require_once __DIR__ . '/entity/log_entity.php';
        if ($data === null) {
            if ($this->_log === null) {
                $this->_log = new LogEntity($this, null);
            }
            return $this->_log;
        }
        return new LogEntity($this, $data);
    }


    private $_log_drain = null;

    // Canonical facade: $client->LogDrain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->log_drain()
    // resolves here too.
    public function LogDrain($data = null)
    {
        require_once __DIR__ . '/entity/log_drain_entity.php';
        if ($data === null) {
            if ($this->_log_drain === null) {
                $this->_log_drain = new LogDrainEntity($this, null);
            }
            return $this->_log_drain;
        }
        return new LogDrainEntity($this, $data);
    }


    private $_marketplace = null;

    // Canonical facade: $client->Marketplace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->marketplace()
    // resolves here too.
    public function Marketplace($data = null)
    {
        require_once __DIR__ . '/entity/marketplace_entity.php';
        if ($data === null) {
            if ($this->_marketplace === null) {
                $this->_marketplace = new MarketplaceEntity($this, null);
            }
            return $this->_marketplace;
        }
        return new MarketplaceEntity($this, $data);
    }


    private $_microfrontend = null;

    // Canonical facade: $client->Microfrontend()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->microfrontend()
    // resolves here too.
    public function Microfrontend($data = null)
    {
        require_once __DIR__ . '/entity/microfrontend_entity.php';
        if ($data === null) {
            if ($this->_microfrontend === null) {
                $this->_microfrontend = new MicrofrontendEntity($this, null);
            }
            return $this->_microfrontend;
        }
        return new MicrofrontendEntity($this, $data);
    }


    private $_network = null;

    // Canonical facade: $client->Network()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->network()
    // resolves here too.
    public function Network($data = null)
    {
        require_once __DIR__ . '/entity/network_entity.php';
        if ($data === null) {
            if ($this->_network === null) {
                $this->_network = new NetworkEntity($this, null);
            }
            return $this->_network;
        }
        return new NetworkEntity($this, $data);
    }


    private $_networking = null;

    // Canonical facade: $client->Networking()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->networking()
    // resolves here too.
    public function Networking($data = null)
    {
        require_once __DIR__ . '/entity/networking_entity.php';
        if ($data === null) {
            if ($this->_networking === null) {
                $this->_networking = new NetworkingEntity($this, null);
            }
            return $this->_networking;
        }
        return new NetworkingEntity($this, $data);
    }


    private $_observability = null;

    // Canonical facade: $client->Observability()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observability()
    // resolves here too.
    public function Observability($data = null)
    {
        require_once __DIR__ . '/entity/observability_entity.php';
        if ($data === null) {
            if ($this->_observability === null) {
                $this->_observability = new ObservabilityEntity($this, null);
            }
            return $this->_observability;
        }
        return new ObservabilityEntity($this, $data);
    }


    private $_private_link_endpoint = null;

    // Canonical facade: $client->PrivateLinkEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->private_link_endpoint()
    // resolves here too.
    public function PrivateLinkEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/private_link_endpoint_entity.php';
        if ($data === null) {
            if ($this->_private_link_endpoint === null) {
                $this->_private_link_endpoint = new PrivateLinkEndpointEntity($this, null);
            }
            return $this->_private_link_endpoint;
        }
        return new PrivateLinkEndpointEntity($this, $data);
    }


    private $_project = null;

    // Canonical facade: $client->Project()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project()
    // resolves here too.
    public function Project($data = null)
    {
        require_once __DIR__ . '/entity/project_entity.php';
        if ($data === null) {
            if ($this->_project === null) {
                $this->_project = new ProjectEntity($this, null);
            }
            return $this->_project;
        }
        return new ProjectEntity($this, $data);
    }


    private $_project_member = null;

    // Canonical facade: $client->ProjectMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_member()
    // resolves here too.
    public function ProjectMember($data = null)
    {
        require_once __DIR__ . '/entity/project_member_entity.php';
        if ($data === null) {
            if ($this->_project_member === null) {
                $this->_project_member = new ProjectMemberEntity($this, null);
            }
            return $this->_project_member;
        }
        return new ProjectMemberEntity($this, $data);
    }


    private $_project_route = null;

    // Canonical facade: $client->ProjectRoute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_route()
    // resolves here too.
    public function ProjectRoute($data = null)
    {
        require_once __DIR__ . '/entity/project_route_entity.php';
        if ($data === null) {
            if ($this->_project_route === null) {
                $this->_project_route = new ProjectRouteEntity($this, null);
            }
            return $this->_project_route;
        }
        return new ProjectRouteEntity($this, $data);
    }


    private $_query = null;

    // Canonical facade: $client->Query()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->query()
    // resolves here too.
    public function Query($data = null)
    {
        require_once __DIR__ . '/entity/query_entity.php';
        if ($data === null) {
            if ($this->_query === null) {
                $this->_query = new QueryEntity($this, null);
            }
            return $this->_query;
        }
        return new QueryEntity($this, $data);
    }


    private $_record = null;

    // Canonical facade: $client->Record()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->record()
    // resolves here too.
    public function Record($data = null)
    {
        require_once __DIR__ . '/entity/record_entity.php';
        if ($data === null) {
            if ($this->_record === null) {
                $this->_record = new RecordEntity($this, null);
            }
            return $this->_record;
        }
        return new RecordEntity($this, $data);
    }


    private $_rolling_release = null;

    // Canonical facade: $client->RollingRelease()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rolling_release()
    // resolves here too.
    public function RollingRelease($data = null)
    {
        require_once __DIR__ . '/entity/rolling_release_entity.php';
        if ($data === null) {
            if ($this->_rolling_release === null) {
                $this->_rolling_release = new RollingReleaseEntity($this, null);
            }
            return $this->_rolling_release;
        }
        return new RollingReleaseEntity($this, $data);
    }


    private $_sandbox = null;

    // Canonical facade: $client->Sandbox()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sandbox()
    // resolves here too.
    public function Sandbox($data = null)
    {
        require_once __DIR__ . '/entity/sandbox_entity.php';
        if ($data === null) {
            if ($this->_sandbox === null) {
                $this->_sandbox = new SandboxEntity($this, null);
            }
            return $this->_sandbox;
        }
        return new SandboxEntity($this, $data);
    }


    private $_schema = null;

    // Canonical facade: $client->Schema()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schema()
    // resolves here too.
    public function Schema($data = null)
    {
        require_once __DIR__ . '/entity/schema_entity.php';
        if ($data === null) {
            if ($this->_schema === null) {
                $this->_schema = new SchemaEntity($this, null);
            }
            return $this->_schema;
        }
        return new SchemaEntity($this, $data);
    }


    private $_security = null;

    // Canonical facade: $client->Security()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->security()
    // resolves here too.
    public function Security($data = null)
    {
        require_once __DIR__ . '/entity/security_entity.php';
        if ($data === null) {
            if ($this->_security === null) {
                $this->_security = new SecurityEntity($this, null);
            }
            return $this->_security;
        }
        return new SecurityEntity($this, $data);
    }


    private $_segment = null;

    // Canonical facade: $client->Segment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->segment()
    // resolves here too.
    public function Segment($data = null)
    {
        require_once __DIR__ . '/entity/segment_entity.php';
        if ($data === null) {
            if ($this->_segment === null) {
                $this->_segment = new SegmentEntity($this, null);
            }
            return $this->_segment;
        }
        return new SegmentEntity($this, $data);
    }


    private $_storage = null;

    // Canonical facade: $client->Storage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->storage()
    // resolves here too.
    public function Storage($data = null)
    {
        require_once __DIR__ . '/entity/storage_entity.php';
        if ($data === null) {
            if ($this->_storage === null) {
                $this->_storage = new StorageEntity($this, null);
            }
            return $this->_storage;
        }
        return new StorageEntity($this, $data);
    }


    private $_team = null;

    // Canonical facade: $client->Team()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team()
    // resolves here too.
    public function Team($data = null)
    {
        require_once __DIR__ . '/entity/team_entity.php';
        if ($data === null) {
            if ($this->_team === null) {
                $this->_team = new TeamEntity($this, null);
            }
            return $this->_team;
        }
        return new TeamEntity($this, $data);
    }


    private $_tld_name = null;

    // Canonical facade: $client->TldName()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tld_name()
    // resolves here too.
    public function TldName($data = null)
    {
        require_once __DIR__ . '/entity/tld_name_entity.php';
        if ($data === null) {
            if ($this->_tld_name === null) {
                $this->_tld_name = new TldNameEntity($this, null);
            }
            return $this->_tld_name;
        }
        return new TldNameEntity($this, $data);
    }


    private $_toggle = null;

    // Canonical facade: $client->Toggle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->toggle()
    // resolves here too.
    public function Toggle($data = null)
    {
        require_once __DIR__ . '/entity/toggle_entity.php';
        if ($data === null) {
            if ($this->_toggle === null) {
                $this->_toggle = new ToggleEntity($this, null);
            }
            return $this->_toggle;
        }
        return new ToggleEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_vcr = null;

    // Canonical facade: $client->Vcr()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vcr()
    // resolves here too.
    public function Vcr($data = null)
    {
        require_once __DIR__ . '/entity/vcr_entity.php';
        if ($data === null) {
            if ($this->_vcr === null) {
                $this->_vcr = new VcrEntity($this, null);
            }
            return $this->_vcr;
        }
        return new VcrEntity($this, $data);
    }


    private $_vcr_image_list = null;

    // Canonical facade: $client->VcrImageList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vcr_image_list()
    // resolves here too.
    public function VcrImageList($data = null)
    {
        require_once __DIR__ . '/entity/vcr_image_list_entity.php';
        if ($data === null) {
            if ($this->_vcr_image_list === null) {
                $this->_vcr_image_list = new VcrImageListEntity($this, null);
            }
            return $this->_vcr_image_list;
        }
        return new VcrImageListEntity($this, $data);
    }


    private $_vcr_repository_list = null;

    // Canonical facade: $client->VcrRepositoryList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vcr_repository_list()
    // resolves here too.
    public function VcrRepositoryList($data = null)
    {
        require_once __DIR__ . '/entity/vcr_repository_list_entity.php';
        if ($data === null) {
            if ($this->_vcr_repository_list === null) {
                $this->_vcr_repository_list = new VcrRepositoryListEntity($this, null);
            }
            return $this->_vcr_repository_list;
        }
        return new VcrRepositoryListEntity($this, $data);
    }


    private $_vcr_repository_permission_list = null;

    // Canonical facade: $client->VcrRepositoryPermissionList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vcr_repository_permission_list()
    // resolves here too.
    public function VcrRepositoryPermissionList($data = null)
    {
        require_once __DIR__ . '/entity/vcr_repository_permission_list_entity.php';
        if ($data === null) {
            if ($this->_vcr_repository_permission_list === null) {
                $this->_vcr_repository_permission_list = new VcrRepositoryPermissionListEntity($this, null);
            }
            return $this->_vcr_repository_permission_list;
        }
        return new VcrRepositoryPermissionListEntity($this, $data);
    }


    private $_web_analytics = null;

    // Canonical facade: $client->WebAnalytics()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->web_analytics()
    // resolves here too.
    public function WebAnalytics($data = null)
    {
        require_once __DIR__ . '/entity/web_analytics_entity.php';
        if ($data === null) {
            if ($this->_web_analytics === null) {
                $this->_web_analytics = new WebAnalyticsEntity($this, null);
            }
            return $this->_web_analytics;
        }
        return new WebAnalyticsEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new VercelSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
