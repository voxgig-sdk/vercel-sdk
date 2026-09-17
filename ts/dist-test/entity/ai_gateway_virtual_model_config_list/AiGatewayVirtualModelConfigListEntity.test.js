"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AiGatewayVirtualModelConfigListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.AiGatewayVirtualModelConfigList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_gateway_virtual_model_config_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "allowFallbackFromFast", "req": false, "short": "Allow fallback from fast to standard providers on failure.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "baseUrl", "req": false, "short": "For kind=relay: URL the gateway forwards requests to as a transparent proxy.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "byokCredentialIds", "req": false, "short": "BYOK credential IDs allowed for this VMC.", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "caching", "req": false, "short": "Use caching if available.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "createdAt", "req": true, "short": "Creation timestamp (epoch ms).", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "createdBy", "req": false, "short": "User or app id that created this VMC.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "deleted", "req": true, "short": "Whether this VMC is soft-deleted.", "type": "`$BOOLEAN`", "index$": 6 }, { "active": true, "name": "description", "req": false, "short": "Optional description for UI.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "disallowPromptTraining", "req": false, "short": "Only use providers that will not train on your prompts.", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "displayName", "req": false, "short": "Human-readable name for UI.", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "has", "req": false, "short": "Limit providers to those with these features.", "type": "`$ARRAY`", "index$": 10 }, { "active": true, "name": "hipaaCompliant", "req": false, "short": "Only use HIPAA-compliant providers.", "type": "`$BOOLEAN`", "index$": 11 }, { "active": true, "name": "inferenceRegion", "req": false, "short": "Region pinned on the VMC for system-credential routing (alias/router only).", "type": "`$OBJECT`", "index$": 12 }, { "active": true, "name": "instanceId", "req": false, "short": "The concrete model-provider instance this VMC resolves to.", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "kind", "req": true, "short": "VMC kind: alias, relay, or router.", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "modelSlug", "req": false, "short": "Canonical model slug this VMC maps to (e.g.", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "models", "req": false, "short": "For kind=router: ordered candidates, model slugs or router references.", "type": "`$ARRAY`", "index$": 16 }, { "active": true, "name": "observabilityTags", "req": false, "short": "Observability tags attached to requests through this VMC.", "type": "`$ARRAY`", "index$": 17 }, { "active": true, "name": "ownerId", "req": true, "short": "Team (owner) that owns this VMC.", "type": "`$STRING`", "index$": 18 }, { "active": true, "name": "providerOnly", "req": false, "short": "Restrict routing to only these providers.", "type": "`$ARRAY`", "index$": 19 }, { "active": true, "name": "providerOptions", "req": false, "short": "Arbitrary per-provider AI SDK options, keyed by gateway provider slug.", "type": "`$OBJECT`", "index$": 20 }, { "active": true, "name": "providerOrder", "req": false, "short": "Ordered list of providers to try as fallbacks on failure.", "type": "`$ARRAY`", "index$": 21 }, { "active": true, "name": "providerTimeouts", "req": false, "short": "Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials.", "type": "`$OBJECT`", "index$": 22 }, { "active": true, "name": "requires", "req": false, "short": "For kind=router: capability tags a candidate must have.", "type": "`$ARRAY`", "index$": 23 }, { "active": true, "name": "selector", "req": false, "short": "For kind=router: how to order candidates.", "type": "`$STRING`", "index$": 24 }, { "active": true, "name": "serviceTier", "req": false, "short": "Service tier for providers that support it.", "type": "`$STRING`", "index$": 25 }, { "active": true, "name": "sort", "req": false, "short": "Rank eligible providers by an attribute.", "type": "`$STRING`", "index$": 26 }, { "active": true, "name": "speed", "req": false, "short": "Only use fastest providers with short timeouts.", "type": "`$STRING`", "index$": 27 }, { "active": true, "name": "status", "req": true, "short": "UI lifecycle status: draft, active, or archived.", "type": "`$STRING`", "index$": 28 }, { "active": true, "name": "updatedAt", "req": true, "short": "Last update timestamp (epoch ms).", "type": "`$NUMBER`", "index$": 29 }, { "active": true, "name": "updatedBy", "req": false, "short": "User or app id that last updated this VMC.", "type": "`$STRING`", "index$": 30 }, { "active": true, "name": "virtualModelSlug", "req": true, "short": "Client-facing alias used as the model slug in Gateway calls.", "type": "`$STRING`", "index$": 31 }, { "active": true, "name": "visibility", "req": false, "short": "Visibility in listings: public, internal, or stealth.", "type": "`$STRING`", "index$": 32 }, { "active": true, "name": "zeroDataRetention", "req": false, "short": "Only use providers with zero data retention.", "type": "`$BOOLEAN`", "index$": 33 }], "name": "ai_gateway_virtual_model_config_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "cursor", "orig": "cursor", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "owner_id", "orig": "owner_id", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 4 }] }, "contract": { "id": "GET /v1/ai-gateway/virtual-model-configs/list", "json": "{\"operationId\":\"listAiGatewayVirtualModelConfigs\",\"parameters\":[{\"in\":\"query\",\"name\":\"ownerId\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"cursor\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"cursor\":{\"description\":\"Cursor for the next page, or null when no more pages remain.\",\"nullable\":true,\"type\":\"string\"},\"virtualModelConfigs\":{\"description\":\"The page of VMCs.\",\"items\":{\"description\":\"Public response shape for virtual model configs. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.\",\"properties\":{\"allowFallbackFromFast\":{\"description\":\"Allow fallback from fast to standard providers on failure.\",\"enum\":[false,true],\"type\":\"boolean\"},\"baseUrl\":{\"description\":\"For kind=relay: URL the gateway forwards requests to as a transparent proxy.\",\"type\":\"string\"},\"byokCredentialIds\":{\"description\":\"BYOK credential IDs allowed for this VMC.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"caching\":{\"description\":\"Use caching if available.\",\"enum\":[\"auto\"],\"type\":\"string\"},\"createdAt\":{\"description\":\"Creation timestamp (epoch ms).\",\"type\":\"number\"},\"createdBy\":{\"description\":\"User or app id that created this VMC.\",\"type\":\"string\"},\"deleted\":{\"description\":\"Whether this VMC is soft-deleted.\",\"enum\":[false,true],\"type\":\"boolean\"},\"description\":{\"description\":\"Optional description for UI.\",\"type\":\"string\"},\"disallowPromptTraining\":{\"description\":\"Only use providers that will not train on your prompts.\",\"enum\":[false,true],\"type\":\"boolean\"},\"displayName\":{\"description\":\"Human-readable name for UI.\",\"type\":\"string\"},\"has\":{\"description\":\"Limit providers to those with these features.\",\"items\":{\"description\":\"Limit providers to those with these features.\",\"enum\":[\"implicit-caching\",\"vision\"],\"type\":\"string\"},\"type\":\"array\"},\"hipaaCompliant\":{\"description\":\"Only use HIPAA-compliant providers.\",\"enum\":[false,true],\"type\":\"boolean\"},\"inferenceRegion\":{\"description\":\"Region pinned on the VMC for system-credential routing (alias/router only).\",\"properties\":{\"geoRegion\":{\"description\":\"Geo zone (e.g. \\\"us\\\", \\\"eu\\\").\",\"type\":\"string\"},\"providerRegion\":{\"description\":\"Provider-specific region identifier.\",\"type\":\"string\"},\"providers\":{\"additionalProperties\":{\"description\":\"Per-provider region overrides keyed by provider slug.\",\"nullable\":true,\"properties\":{\"geoRegion\":{\"description\":\"Geo zone (e.g. \\\"us\\\", \\\"eu\\\").\",\"type\":\"string\"},\"providerRegion\":{\"description\":\"Provider-specific region identifier.\",\"type\":\"string\"},\"scope\":{\"description\":\"Pin scope: `specific` (one provider region), `zone` (geo zone), or `global`.\",\"enum\":[\"global\",\"specific\",\"zone\"],\"type\":\"string\"}},\"type\":\"object\"},\"description\":\"Per-provider region overrides keyed by provider slug.\",\"type\":\"object\"},\"scope\":{\"description\":\"Pin scope: `specific` (one provider region), `zone` (geo zone), or `global`.\",\"enum\":[\"global\",\"specific\",\"zone\"],\"type\":\"string\"}},\"type\":\"object\"},\"instanceId\":{\"description\":\"The concrete model-provider instance this VMC resolves to.\",\"type\":\"string\"},\"kind\":{\"description\":\"VMC kind: alias, relay, or router.\",\"type\":\"string\"},\"modelSlug\":{\"description\":\"Canonical model slug this VMC maps to (e.g. \\\"creator/model\\\"). Not used by kind=router.\",\"type\":\"string\"},\"models\":{\"description\":\"For kind=router: ordered candidates, model slugs or router references. Otherwise: fallback models.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"observabilityTags\":{\"description\":\"Observability tags attached to requests through this VMC.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"ownerId\":{\"description\":\"Team (owner) that owns this VMC.\",\"type\":\"string\"},\"providerOnly\":{\"description\":\"Restrict routing to only these providers.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"providerOptions\":{\"additionalProperties\":{\"additionalProperties\":true,\"description\":\"Arbitrary per-provider AI SDK options, keyed by gateway provider slug.\",\"type\":\"object\"},\"description\":\"Arbitrary per-provider AI SDK options, keyed by gateway provider slug.\",\"type\":\"object\"},\"providerOrder\":{\"description\":\"Ordered list of providers to try as fallbacks on failure.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"providerTimeouts\":{\"description\":\"Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials.\",\"properties\":{\"byok\":{\"additionalProperties\":{\"type\":\"number\"},\"type\":\"object\"}},\"type\":\"object\"},\"requires\":{\"description\":\"For kind=router: capability tags a candidate must have.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"selector\":{\"description\":\"For kind=router: how to order candidates.\",\"enum\":[\"cost\",\"priority\",\"tps\",\"ttft\"],\"type\":\"string\"},\"serviceTier\":{\"description\":\"Service tier for providers that support it.\",\"enum\":[\"fast\",\"flex\",\"priority\"],\"type\":\"string\"},\"sort\":{\"description\":\"Rank eligible providers by an attribute.\",\"enum\":[\"cost\",\"latency\",\"price\",\"throughput\",\"tps\",\"ttft\"],\"type\":\"string\"},\"speed\":{\"description\":\"Only use fastest providers with short timeouts.\",\"enum\":[\"fast\"],\"type\":\"string\"},\"status\":{\"description\":\"UI lifecycle status: draft, active, or archived.\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update timestamp (epoch ms).\",\"type\":\"number\"},\"updatedBy\":{\"description\":\"User or app id that last updated this VMC.\",\"type\":\"string\"},\"virtualModelSlug\":{\"description\":\"Client-facing alias used as the model slug in Gateway calls.\",\"type\":\"string\"},\"visibility\":{\"description\":\"Visibility in listings: public, internal, or stealth.\",\"type\":\"string\"},\"zeroDataRetention\":{\"description\":\"Only use providers with zero data retention.\",\"enum\":[false,true],\"type\":\"boolean\"}},\"required\":[\"createdAt\",\"deleted\",\"kind\",\"ownerId\",\"status\",\"updatedAt\",\"virtualModelSlug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"cursor\",\"virtualModelConfigs\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ai-gateway/virtual-model-configs/list", "segments": [{ "lit": "v1" }, { "lit": "ai-gateway" }, { "lit": "virtual-model-configs" }, { "lit": "list" }], "select": { "exist": ["cursor", "limit", "owner_id", "slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body.virtualModelConfigs`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "ai_gateway_virtual_model_config_list", "name__orig": "ai_gateway_virtual_model_config_list", "Name": "AiGatewayVirtualModelConfigList", "name_": "ai_gateway_virtual_model_config_list", "name-": "ai-gateway-virtual-model-config-list", "NAME": "AI_GATEWAY_VIRTUAL_MODEL_CONFIG_LIST", "index$": 5 }, { "active": true, "entity": "ai_gateway_virtual_model_config_list", "key$": "BasicAiGatewayVirtualModelConfigListFlow", "kind": "basic", "name": "BasicAiGatewayVirtualModelConfigListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "ai_gateway_virtual_model_config_list_ref01" } }], "index$": 0 }] }, 'AiGatewayVirtualModelConfigList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ai_gateway_virtual_model_config_list_ref01_data = Object.values(setup.data.existing.ai_gateway_virtual_model_config_list)[0];
        // LIST
        const ai_gateway_virtual_model_config_list_ref01_ent = client.AiGatewayVirtualModelConfigList();
        const ai_gateway_virtual_model_config_list_ref01_match = {};
        const ai_gateway_virtual_model_config_list_ref01_list = (await ai_gateway_virtual_model_config_list_ref01_ent.list(ai_gateway_virtual_model_config_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_gateway_virtual_model_config_list/AiGatewayVirtualModelConfigListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_gateway_virtual_model_config_list01', 'ai_gateway_virtual_model_config_list02', 'ai_gateway_virtual_model_config_list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_AI_GATEWAY_VIRTUAL_MODEL_CONFIG_LIST_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_AI_GATEWAY_VIRTUAL_MODEL_CONFIG_LIST_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_AI_GATEWAY_VIRTUAL_MODEL_CONFIG_LIST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.VercelSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.VERCEL_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.VERCEL_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=AiGatewayVirtualModelConfigListEntity.test.js.map