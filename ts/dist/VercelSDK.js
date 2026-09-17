"use strict";
// Vercel Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.VercelSDK = exports.VercelEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccessGroupEntity_1 = require("./entity/AccessGroupEntity");
const AiGatewayEntity_1 = require("./entity/AiGatewayEntity");
const AiGatewayRuleEntity_1 = require("./entity/AiGatewayRuleEntity");
const AiGatewayRuleListEntity_1 = require("./entity/AiGatewayRuleListEntity");
const AiGatewayVirtualModelConfigEntity_1 = require("./entity/AiGatewayVirtualModelConfigEntity");
const AiGatewayVirtualModelConfigListEntity_1 = require("./entity/AiGatewayVirtualModelConfigListEntity");
const AliasEntity_1 = require("./entity/AliasEntity");
const ApiAiGatewayEntity_1 = require("./entity/ApiAiGatewayEntity");
const ApiKeyEntity_1 = require("./entity/ApiKeyEntity");
const ArtifactEntity_1 = require("./entity/ArtifactEntity");
const AuthenticationEntity_1 = require("./entity/AuthenticationEntity");
const BillingEntity_1 = require("./entity/BillingEntity");
const BulkRedirectEntity_1 = require("./entity/BulkRedirectEntity");
const CertEntity_1 = require("./entity/CertEntity");
const CheckEntity_1 = require("./entity/CheckEntity");
const ChecksV2Entity_1 = require("./entity/ChecksV2Entity");
const ConnectEntity_1 = require("./entity/ConnectEntity");
const ConnectConnectorEntity_1 = require("./entity/ConnectConnectorEntity");
const ConnectConnectorListEntity_1 = require("./entity/ConnectConnectorListEntity");
const ConnectConnectorProjectConnectionListEntity_1 = require("./entity/ConnectConnectorProjectConnectionListEntity");
const ConnectProjectConnectionEntity_1 = require("./entity/ConnectProjectConnectionEntity");
const ConnectProjectConnectorConnectionListEntity_1 = require("./entity/ConnectProjectConnectorConnectionListEntity");
const DeploymentEntity_1 = require("./entity/DeploymentEntity");
const DnsEntity_1 = require("./entity/DnsEntity");
const DomainEntity_1 = require("./entity/DomainEntity");
const DomainsRegistrarEntity_1 = require("./entity/DomainsRegistrarEntity");
const DrainEntity_1 = require("./entity/DrainEntity");
const EdgeCacheEntity_1 = require("./entity/EdgeCacheEntity");
const EnvEntity_1 = require("./entity/EnvEntity");
const EnvironmentEntity_1 = require("./entity/EnvironmentEntity");
const FeatureFlagEntity_1 = require("./entity/FeatureFlagEntity");
const FileEntity_1 = require("./entity/FileEntity");
const FlagEntity_1 = require("./entity/FlagEntity");
const FlagsSdkKeyWithSecretEntity_1 = require("./entity/FlagsSdkKeyWithSecretEntity");
const GlobalConfigEntity_1 = require("./entity/GlobalConfigEntity");
const GlobalConfigItemEntity_1 = require("./entity/GlobalConfigItemEntity");
const GlobalConfigTokenEntity_1 = require("./entity/GlobalConfigTokenEntity");
const IntegrationEntity_1 = require("./entity/IntegrationEntity");
const KmsEntity_1 = require("./entity/KmsEntity");
const ListEventTypeEntity_1 = require("./entity/ListEventTypeEntity");
const LogEntity_1 = require("./entity/LogEntity");
const LogDrainEntity_1 = require("./entity/LogDrainEntity");
const MarketplaceEntity_1 = require("./entity/MarketplaceEntity");
const MicrofrontendEntity_1 = require("./entity/MicrofrontendEntity");
const NetworkEntity_1 = require("./entity/NetworkEntity");
const NetworkingEntity_1 = require("./entity/NetworkingEntity");
const ObservabilityEntity_1 = require("./entity/ObservabilityEntity");
const PrivateLinkEndpointEntity_1 = require("./entity/PrivateLinkEndpointEntity");
const ProjectEntity_1 = require("./entity/ProjectEntity");
const ProjectMemberEntity_1 = require("./entity/ProjectMemberEntity");
const ProjectRouteEntity_1 = require("./entity/ProjectRouteEntity");
const QueryEntity_1 = require("./entity/QueryEntity");
const RecordEntity_1 = require("./entity/RecordEntity");
const RollingReleaseEntity_1 = require("./entity/RollingReleaseEntity");
const SandboxEntity_1 = require("./entity/SandboxEntity");
const SchemaEntity_1 = require("./entity/SchemaEntity");
const SecurityEntity_1 = require("./entity/SecurityEntity");
const SegmentEntity_1 = require("./entity/SegmentEntity");
const StorageEntity_1 = require("./entity/StorageEntity");
const TeamEntity_1 = require("./entity/TeamEntity");
const TldNameEntity_1 = require("./entity/TldNameEntity");
const ToggleEntity_1 = require("./entity/ToggleEntity");
const UserEntity_1 = require("./entity/UserEntity");
const VcrEntity_1 = require("./entity/VcrEntity");
const VcrImageListEntity_1 = require("./entity/VcrImageListEntity");
const VcrRepositoryListEntity_1 = require("./entity/VcrRepositoryListEntity");
const VcrRepositoryPermissionListEntity_1 = require("./entity/VcrRepositoryPermissionListEntity");
const WebAnalyticsEntity_1 = require("./entity/WebAnalyticsEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const VercelEntityBase_1 = require("./VercelEntityBase");
Object.defineProperty(exports, "VercelEntityBase", { enumerable: true, get: function () { return VercelEntityBase_1.VercelEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class VercelSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('VercelSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('VercelSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('VercelSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AccessGroup().list()` / `client.AccessGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccessGroup(entopts) {
        const self = this;
        return new AccessGroupEntity_1.AccessGroupEntity(self, entopts);
    }
    // Entity access: `client.AiGateway().list()` / `client.AiGateway().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGateway(entopts) {
        const self = this;
        return new AiGatewayEntity_1.AiGatewayEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayRule().list()` / `client.AiGatewayRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayRule(entopts) {
        const self = this;
        return new AiGatewayRuleEntity_1.AiGatewayRuleEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayRuleList().list()` / `client.AiGatewayRuleList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayRuleList(entopts) {
        const self = this;
        return new AiGatewayRuleListEntity_1.AiGatewayRuleListEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayVirtualModelConfig().list()` / `client.AiGatewayVirtualModelConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayVirtualModelConfig(entopts) {
        const self = this;
        return new AiGatewayVirtualModelConfigEntity_1.AiGatewayVirtualModelConfigEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayVirtualModelConfigList().list()` / `client.AiGatewayVirtualModelConfigList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayVirtualModelConfigList(entopts) {
        const self = this;
        return new AiGatewayVirtualModelConfigListEntity_1.AiGatewayVirtualModelConfigListEntity(self, entopts);
    }
    // Entity access: `client.Alias().list()` / `client.Alias().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Alias(entopts) {
        const self = this;
        return new AliasEntity_1.AliasEntity(self, entopts);
    }
    // Entity access: `client.ApiAiGateway().list()` / `client.ApiAiGateway().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiAiGateway(entopts) {
        const self = this;
        return new ApiAiGatewayEntity_1.ApiAiGatewayEntity(self, entopts);
    }
    // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiKey(entopts) {
        const self = this;
        return new ApiKeyEntity_1.ApiKeyEntity(self, entopts);
    }
    // Entity access: `client.Artifact().list()` / `client.Artifact().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Artifact(entopts) {
        const self = this;
        return new ArtifactEntity_1.ArtifactEntity(self, entopts);
    }
    // Entity access: `client.Authentication().list()` / `client.Authentication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Authentication(entopts) {
        const self = this;
        return new AuthenticationEntity_1.AuthenticationEntity(self, entopts);
    }
    // Entity access: `client.Billing().list()` / `client.Billing().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Billing(entopts) {
        const self = this;
        return new BillingEntity_1.BillingEntity(self, entopts);
    }
    // Entity access: `client.BulkRedirect().list()` / `client.BulkRedirect().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkRedirect(entopts) {
        const self = this;
        return new BulkRedirectEntity_1.BulkRedirectEntity(self, entopts);
    }
    // Entity access: `client.Cert().list()` / `client.Cert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cert(entopts) {
        const self = this;
        return new CertEntity_1.CertEntity(self, entopts);
    }
    // Entity access: `client.Check().list()` / `client.Check().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Check(entopts) {
        const self = this;
        return new CheckEntity_1.CheckEntity(self, entopts);
    }
    // Entity access: `client.ChecksV2().list()` / `client.ChecksV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChecksV2(entopts) {
        const self = this;
        return new ChecksV2Entity_1.ChecksV2Entity(self, entopts);
    }
    // Entity access: `client.Connect().list()` / `client.Connect().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Connect(entopts) {
        const self = this;
        return new ConnectEntity_1.ConnectEntity(self, entopts);
    }
    // Entity access: `client.ConnectConnector().list()` / `client.ConnectConnector().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConnectConnector(entopts) {
        const self = this;
        return new ConnectConnectorEntity_1.ConnectConnectorEntity(self, entopts);
    }
    // Entity access: `client.ConnectConnectorList().list()` / `client.ConnectConnectorList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConnectConnectorList(entopts) {
        const self = this;
        return new ConnectConnectorListEntity_1.ConnectConnectorListEntity(self, entopts);
    }
    // Entity access: `client.ConnectConnectorProjectConnectionList().list()` / `client.ConnectConnectorProjectConnectionList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConnectConnectorProjectConnectionList(entopts) {
        const self = this;
        return new ConnectConnectorProjectConnectionListEntity_1.ConnectConnectorProjectConnectionListEntity(self, entopts);
    }
    // Entity access: `client.ConnectProjectConnection().list()` / `client.ConnectProjectConnection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConnectProjectConnection(entopts) {
        const self = this;
        return new ConnectProjectConnectionEntity_1.ConnectProjectConnectionEntity(self, entopts);
    }
    // Entity access: `client.ConnectProjectConnectorConnectionList().list()` / `client.ConnectProjectConnectorConnectionList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConnectProjectConnectorConnectionList(entopts) {
        const self = this;
        return new ConnectProjectConnectorConnectionListEntity_1.ConnectProjectConnectorConnectionListEntity(self, entopts);
    }
    // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deployment(entopts) {
        const self = this;
        return new DeploymentEntity_1.DeploymentEntity(self, entopts);
    }
    // Entity access: `client.Dns().list()` / `client.Dns().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dns(entopts) {
        const self = this;
        return new DnsEntity_1.DnsEntity(self, entopts);
    }
    // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Domain(entopts) {
        const self = this;
        return new DomainEntity_1.DomainEntity(self, entopts);
    }
    // Entity access: `client.DomainsRegistrar().list()` / `client.DomainsRegistrar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DomainsRegistrar(entopts) {
        const self = this;
        return new DomainsRegistrarEntity_1.DomainsRegistrarEntity(self, entopts);
    }
    // Entity access: `client.Drain().list()` / `client.Drain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Drain(entopts) {
        const self = this;
        return new DrainEntity_1.DrainEntity(self, entopts);
    }
    // Entity access: `client.EdgeCache().list()` / `client.EdgeCache().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EdgeCache(entopts) {
        const self = this;
        return new EdgeCacheEntity_1.EdgeCacheEntity(self, entopts);
    }
    // Entity access: `client.Env().list()` / `client.Env().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Env(entopts) {
        const self = this;
        return new EnvEntity_1.EnvEntity(self, entopts);
    }
    // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Environment(entopts) {
        const self = this;
        return new EnvironmentEntity_1.EnvironmentEntity(self, entopts);
    }
    // Entity access: `client.FeatureFlag().list()` / `client.FeatureFlag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FeatureFlag(entopts) {
        const self = this;
        return new FeatureFlagEntity_1.FeatureFlagEntity(self, entopts);
    }
    // Entity access: `client.File().list()` / `client.File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    File(entopts) {
        const self = this;
        return new FileEntity_1.FileEntity(self, entopts);
    }
    // Entity access: `client.Flag().list()` / `client.Flag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Flag(entopts) {
        const self = this;
        return new FlagEntity_1.FlagEntity(self, entopts);
    }
    // Entity access: `client.FlagsSdkKeyWithSecret().list()` / `client.FlagsSdkKeyWithSecret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FlagsSdkKeyWithSecret(entopts) {
        const self = this;
        return new FlagsSdkKeyWithSecretEntity_1.FlagsSdkKeyWithSecretEntity(self, entopts);
    }
    // Entity access: `client.GlobalConfig().list()` / `client.GlobalConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GlobalConfig(entopts) {
        const self = this;
        return new GlobalConfigEntity_1.GlobalConfigEntity(self, entopts);
    }
    // Entity access: `client.GlobalConfigItem().list()` / `client.GlobalConfigItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GlobalConfigItem(entopts) {
        const self = this;
        return new GlobalConfigItemEntity_1.GlobalConfigItemEntity(self, entopts);
    }
    // Entity access: `client.GlobalConfigToken().list()` / `client.GlobalConfigToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GlobalConfigToken(entopts) {
        const self = this;
        return new GlobalConfigTokenEntity_1.GlobalConfigTokenEntity(self, entopts);
    }
    // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Integration(entopts) {
        const self = this;
        return new IntegrationEntity_1.IntegrationEntity(self, entopts);
    }
    // Entity access: `client.Kms().list()` / `client.Kms().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Kms(entopts) {
        const self = this;
        return new KmsEntity_1.KmsEntity(self, entopts);
    }
    // Entity access: `client.ListEventType().list()` / `client.ListEventType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListEventType(entopts) {
        const self = this;
        return new ListEventTypeEntity_1.ListEventTypeEntity(self, entopts);
    }
    // Entity access: `client.Log().list()` / `client.Log().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Log(entopts) {
        const self = this;
        return new LogEntity_1.LogEntity(self, entopts);
    }
    // Entity access: `client.LogDrain().list()` / `client.LogDrain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LogDrain(entopts) {
        const self = this;
        return new LogDrainEntity_1.LogDrainEntity(self, entopts);
    }
    // Entity access: `client.Marketplace().list()` / `client.Marketplace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Marketplace(entopts) {
        const self = this;
        return new MarketplaceEntity_1.MarketplaceEntity(self, entopts);
    }
    // Entity access: `client.Microfrontend().list()` / `client.Microfrontend().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Microfrontend(entopts) {
        const self = this;
        return new MicrofrontendEntity_1.MicrofrontendEntity(self, entopts);
    }
    // Entity access: `client.Network().list()` / `client.Network().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Network(entopts) {
        const self = this;
        return new NetworkEntity_1.NetworkEntity(self, entopts);
    }
    // Entity access: `client.Networking().list()` / `client.Networking().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Networking(entopts) {
        const self = this;
        return new NetworkingEntity_1.NetworkingEntity(self, entopts);
    }
    // Entity access: `client.Observability().list()` / `client.Observability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Observability(entopts) {
        const self = this;
        return new ObservabilityEntity_1.ObservabilityEntity(self, entopts);
    }
    // Entity access: `client.PrivateLinkEndpoint().list()` / `client.PrivateLinkEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PrivateLinkEndpoint(entopts) {
        const self = this;
        return new PrivateLinkEndpointEntity_1.PrivateLinkEndpointEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntity_1.ProjectEntity(self, entopts);
    }
    // Entity access: `client.ProjectMember().list()` / `client.ProjectMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectMember(entopts) {
        const self = this;
        return new ProjectMemberEntity_1.ProjectMemberEntity(self, entopts);
    }
    // Entity access: `client.ProjectRoute().list()` / `client.ProjectRoute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectRoute(entopts) {
        const self = this;
        return new ProjectRouteEntity_1.ProjectRouteEntity(self, entopts);
    }
    // Entity access: `client.Query().list()` / `client.Query().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Query(entopts) {
        const self = this;
        return new QueryEntity_1.QueryEntity(self, entopts);
    }
    // Entity access: `client.Record().list()` / `client.Record().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Record(entopts) {
        const self = this;
        return new RecordEntity_1.RecordEntity(self, entopts);
    }
    // Entity access: `client.RollingRelease().list()` / `client.RollingRelease().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RollingRelease(entopts) {
        const self = this;
        return new RollingReleaseEntity_1.RollingReleaseEntity(self, entopts);
    }
    // Entity access: `client.Sandbox().list()` / `client.Sandbox().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Sandbox(entopts) {
        const self = this;
        return new SandboxEntity_1.SandboxEntity(self, entopts);
    }
    // Entity access: `client.Schema().list()` / `client.Schema().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Schema(entopts) {
        const self = this;
        return new SchemaEntity_1.SchemaEntity(self, entopts);
    }
    // Entity access: `client.Security().list()` / `client.Security().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Security(entopts) {
        const self = this;
        return new SecurityEntity_1.SecurityEntity(self, entopts);
    }
    // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Segment(entopts) {
        const self = this;
        return new SegmentEntity_1.SegmentEntity(self, entopts);
    }
    // Entity access: `client.Storage().list()` / `client.Storage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Storage(entopts) {
        const self = this;
        return new StorageEntity_1.StorageEntity(self, entopts);
    }
    // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Team(entopts) {
        const self = this;
        return new TeamEntity_1.TeamEntity(self, entopts);
    }
    // Entity access: `client.TldName().list()` / `client.TldName().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TldName(entopts) {
        const self = this;
        return new TldNameEntity_1.TldNameEntity(self, entopts);
    }
    // Entity access: `client.Toggle().list()` / `client.Toggle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Toggle(entopts) {
        const self = this;
        return new ToggleEntity_1.ToggleEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.Vcr().list()` / `client.Vcr().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Vcr(entopts) {
        const self = this;
        return new VcrEntity_1.VcrEntity(self, entopts);
    }
    // Entity access: `client.VcrImageList().list()` / `client.VcrImageList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VcrImageList(entopts) {
        const self = this;
        return new VcrImageListEntity_1.VcrImageListEntity(self, entopts);
    }
    // Entity access: `client.VcrRepositoryList().list()` / `client.VcrRepositoryList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VcrRepositoryList(entopts) {
        const self = this;
        return new VcrRepositoryListEntity_1.VcrRepositoryListEntity(self, entopts);
    }
    // Entity access: `client.VcrRepositoryPermissionList().list()` / `client.VcrRepositoryPermissionList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VcrRepositoryPermissionList(entopts) {
        const self = this;
        return new VcrRepositoryPermissionListEntity_1.VcrRepositoryPermissionListEntity(self, entopts);
    }
    // Entity access: `client.WebAnalytics().list()` / `client.WebAnalytics().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebAnalytics(entopts) {
        const self = this;
        return new WebAnalyticsEntity_1.WebAnalyticsEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new VercelSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return VercelSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Vercel' };
    }
    toString() {
        return 'Vercel ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.VercelSDK = VercelSDK;
const SDK = VercelSDK;
exports.SDK = SDK;
//# sourceMappingURL=VercelSDK.js.map