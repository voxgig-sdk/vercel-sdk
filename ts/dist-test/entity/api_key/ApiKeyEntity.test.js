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
(0, node_test_1.describe)('ApiKeyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.ApiKey();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_key.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "activeAt", "req": true, "short": "Timestamp (in milliseconds) of when the API key was most recently used.", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "aiGatewayQuota", "req": true, "short": "Optional AI Gateway quota configuration for the API key.", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "createdAt", "req": true, "short": "Timestamp (in milliseconds) of when the API key was created.", "type": "`$NUMBER`", "index$": 2 }, { "active": true, "name": "createdBy", "req": true, "short": "The ID of the user who created the API key.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "createdByAppId", "req": true, "short": "The ID of the app that created the API key, if any", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "expiresAt", "op": { "create": { "req": false, "type": "`$NUMBER`" } }, "req": true, "short": "Timestamp (in milliseconds) of when the API key expires.", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the API key.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "leakedAt", "req": true, "short": "Timestamp (in milliseconds) of when the API key was marked as leaked.", "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "leakedUrl", "req": true, "short": "URL where the API key was discovered as leaked.", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "metadata", "req": false, "short": "Generic metadata attached to the API key.", "type": "`$OBJECT`", "index$": 9 }, { "active": true, "name": "name", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The human-readable name of the API key.", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "partialKey", "req": true, "short": "The last few characters of the API key string, for helping identify the API key.", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "projectId", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The ID of the project that this API key grants access to.", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "purpose", "req": true, "short": "The API key's purpose, i.e.", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "quota", "req": true, "short": "AI Gateway quota associated with an API key.", "type": "`$OBJECT`", "union": { "branches": 4, "count": 1, "depth": 2 }, "index$": 14 }, { "active": true, "name": "teamId", "req": true, "short": "The ID of the team that the API key grants access to.", "type": "`$STRING`", "index$": 15 }], "id": { "field": "id", "name": "id" }, "name": "api_key", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api-keys", "json": "{\"operationId\":\"createApiKeys\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"aiGatewayQuota\":{\"description\":\"Optional AI Gateway quota configuration for the API key.\",\"properties\":{\"alertThresholds\":{\"description\":\"Spend percentages (a subset of [50, 75, 100]) at which to send a spend alert.\",\"items\":{\"enum\":[50,75,100],\"type\":\"number\"},\"type\":\"array\"},\"includeByokInQuota\":{\"default\":false,\"description\":\"Whether to include BYOK (Bring Your Own Key) usage in the quota.\",\"type\":\"boolean\"},\"limitAmount\":{\"description\":\"The quota limit amount.\",\"minimum\":1,\"type\":\"number\"},\"refreshPeriod\":{\"default\":\"none\",\"description\":\"How often the quota refreshes.\",\"enum\":[\"daily\",\"weekly\",\"monthly\",\"none\"],\"type\":\"string\"}},\"required\":[\"limitAmount\"],\"type\":\"object\"},\"expiresAt\":{\"description\":\"The API key's expiration, expressed as a UNIX timestamp in milliseconds.\",\"type\":\"number\"},\"metadata\":{\"additionalProperties\":true,\"description\":\"Optional generic metadata for the API key. The accepted shape depends on the key's `purpose` and is validated on creation; for `ai-gateway` keys this accepts `environment`.\",\"type\":\"object\"},\"name\":{\"description\":\"An optional name for the API key.\",\"example\":\"API Key for App 123\",\"type\":\"string\"},\"projectId\":{\"description\":\"An optional project to restrict the API key to.\",\"example\":\"prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB\",\"type\":\"string\"},\"purpose\":{\"description\":\"The API key's purpose, which restricts how it can be used.\",\"type\":\"string\"}},\"required\":[\"purpose\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"apiKey\":{\"description\":\"Information about the newly created API key.\",\"properties\":{\"activeAt\":{\"description\":\"Timestamp (in milliseconds) of when the API key was most recently used.\",\"example\":1632816536002,\"type\":\"number\"},\"createdAt\":{\"description\":\"Timestamp (in milliseconds) of when the API key was created.\",\"example\":1632816536002,\"type\":\"number\"},\"createdBy\":{\"description\":\"The ID of the user who created the API key.\",\"example\":\"ZspSRT4ljIEEmMHgoDwKWDei\",\"type\":\"string\"},\"createdByAppId\":{\"description\":\"The ID of the app that created the API key, if any\",\"nullable\":true,\"type\":\"string\"},\"expiresAt\":{\"description\":\"Timestamp (in milliseconds) of when the API key expires.\",\"example\":1632816536002,\"nullable\":true,\"type\":\"number\"},\"id\":{\"description\":\"The unique identifier of the API key.\",\"example\":\"5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391\",\"type\":\"string\"},\"leakedAt\":{\"description\":\"Timestamp (in milliseconds) of when the API key was marked as leaked.\",\"example\":1632816536002,\"nullable\":true,\"type\":\"number\"},\"leakedUrl\":{\"description\":\"URL where the API key was discovered as leaked.\",\"nullable\":true,\"type\":\"string\"},\"metadata\":{\"description\":\"Generic metadata attached to the API key.\\n\\nThe accepted shape depends on the key's `purpose` and is validated when the key is created. For `ai-gateway` keys this carries `environment` and `spendAttribution`.\",\"patternProperties\":{},\"type\":\"object\"},\"name\":{\"description\":\"The human-readable name of the API key.\",\"example\":\"API Key for AI Gateway\",\"type\":\"string\"},\"partialKey\":{\"description\":\"The last few characters of the API key string, for helping identify the API key.\",\"example\":\"t7V\",\"type\":\"string\"},\"projectId\":{\"description\":\"The ID of the project that this API key grants access to.\\n\\nWhen this is unset, the API key grants access to all projects in the team.\",\"example\":\"prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB\",\"nullable\":true,\"type\":\"string\"},\"purpose\":{\"description\":\"The API key's purpose, i.e. what resources it can be used with.\",\"example\":\"ai-gateway\",\"type\":\"string\"},\"quota\":{\"description\":\"AI Gateway quota associated with an API key.\",\"properties\":{\"active\":{\"description\":\"Whether the quota is currently active.\",\"type\":\"boolean\"},\"alertThresholds\":{\"description\":\"Spend percentages (a subset of [50, 75, 100]) at which to send a spend alert. Empty or undefined disables alerts.\",\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"archived\":{\"description\":\"Whether the quota has been archived.\",\"type\":\"boolean\"},\"createdAt\":{\"description\":\"Timestamp (in milliseconds) of when the quota was created.\",\"type\":\"number\"},\"currentByokSpend\":{\"description\":\"The current BYOK spend (tracked separately).\",\"type\":\"number\"},\"currentSpend\":{\"description\":\"The current amount spent against the quota.\",\"type\":\"number\"},\"includeByokInQuota\":{\"description\":\"Whether BYOK (Bring Your Own Key) spend counts against the quota.\",\"type\":\"boolean\"},\"limitAmount\":{\"description\":\"The quota limit amount.\",\"type\":\"number\"},\"quotaEntityId\":{\"description\":\"The unique identifier for the quota.\",\"type\":\"string\"},\"refreshPeriod\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"string\"},{\"type\":\"string\"},{\"type\":\"string\"}],\"description\":\"How often the quota refreshes.\"},\"updatedAt\":{\"description\":\"Timestamp (in milliseconds) of when the quota was last updated.\",\"type\":\"number\"}},\"required\":[\"quotaEntityId\",\"limitAmount\",\"currentSpend\",\"currentByokSpend\",\"includeByokInQuota\",\"refreshPeriod\",\"active\",\"archived\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"},\"teamId\":{\"description\":\"The ID of the team that the API key grants access to.\",\"example\":\"team_123a6c5209bc3778245d011443644c8d27dc2c50\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"partialKey\",\"teamId\",\"purpose\",\"projectId\",\"expiresAt\",\"activeAt\",\"createdAt\",\"createdBy\",\"leakedAt\",\"leakedUrl\",\"createdByAppId\"],\"type\":\"object\"},\"apiKeyString\":{\"description\":\"The API key's actual value. This value is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe!\",\"example\":\"uRKJSTt0L4RaSkiMj41QTkxM\",\"type\":\"string\"}},\"required\":[\"apiKeyString\",\"apiKey\"],\"type\":\"object\"}}},\"description\":\"Successfully created an API key.\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"The request is not authorized.\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"You do not have permission to access this resource.\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"limit\":{\"type\":\"number\"},\"message\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"required\":[\"code\",\"name\",\"message\",\"limit\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api-keys", "segments": [{ "lit": "api-keys" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.apiKey`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "api_key", "name__orig": "api_key", "Name": "ApiKey", "name_": "api_key", "name-": "api-key", "NAME": "API_KEY", "index$": 8 }, { "active": true, "entity": "api_key", "key$": "BasicApiKeyFlow", "kind": "basic", "name": "BasicApiKeyFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_key_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'ApiKey');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_key_ref01_ent = client.ApiKey();
        let api_key_ref01_data = setup.data.new.api_key['api_key_ref01'];
        api_key_ref01_data = (await api_key_ref01_ent.create(api_key_ref01_data)).data();
        (0, node_assert_1.default)(null != api_key_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_key/ApiKeyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_key01', 'api_key02', 'api_key03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_API_KEY_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_API_KEY_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_API_KEY_ENTID'];
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
//# sourceMappingURL=ApiKeyEntity.test.js.map