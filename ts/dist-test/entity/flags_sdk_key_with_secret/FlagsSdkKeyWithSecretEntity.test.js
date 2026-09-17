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
(0, node_test_1.describe)('FlagsSdkKeyWithSecretEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.FlagsSdkKeyWithSecret();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'flags_sdk_key_with_secret.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "createdAt", "req": true, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "createdBy", "req": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "deletedAt", "req": false, "type": "`$NUMBER`", "index$": 2 }, { "active": true, "name": "environment", "req": true, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "hashKey", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "keyValue", "req": true, "short": "Cleartext value of the SDK key.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "label", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "partialKeyValue", "req": true, "short": "Partially-masked representation of the SDK key value, safe to display in UIs.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "projectId", "req": true, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "sdkKeyType", "req": true, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "tokenValue", "req": false, "short": "Cleartext value of the Global Config token, when the project has a Global Config connection.", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "type", "req": true, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "updatedAt", "req": true, "type": "`$NUMBER`", "index$": 12 }], "name": "flags_sdk_key_with_secret", "op": { "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "project_id_or_name", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "PUT /v1/projects/{projectIdOrName}/feature-flags/sdk-keys", "json": "{\"operationId\":\"createSdkKey\",\"parameters\":[{\"description\":\"The project id or name\",\"in\":\"path\",\"name\":\"projectIdOrName\",\"required\":true,\"schema\":{\"description\":\"The project id or name\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"environment\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"sdkKeyType\":{\"enum\":[\"server\",\"mobile\",\"client\"],\"type\":\"string\"}},\"required\":[\"sdkKeyType\",\"environment\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Representation of a Flags SDK key returned by CREATE. Includes cleartext secrets (`keyValue`, `tokenValue`, `connectionString`) which are only ever disclosed once, on creation.\",\"properties\":{\"createdAt\":{\"type\":\"number\"},\"createdBy\":{\"type\":\"string\"},\"deletedAt\":{\"type\":\"number\"},\"environment\":{\"type\":\"string\"},\"hashKey\":{\"type\":\"string\"},\"keyValue\":{\"description\":\"Cleartext value of the SDK key.\",\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"partialKeyValue\":{\"description\":\"Partially-masked representation of the SDK key value, safe to display in UIs. The value is the `vf_<type>_` prefix followed by the first 3 characters of the secret portion and a fixed 8-character `*` mask (e.g. `vf_server_abc********`).\",\"type\":\"string\"},\"projectId\":{\"type\":\"string\"},\"tokenValue\":{\"description\":\"Cleartext value of the Global Config token, when the project has a Global Config connection.\",\"type\":\"string\"},\"type\":{\"enum\":[\"client\",\"mobile\",\"server\"],\"type\":\"string\"},\"updatedAt\":{\"type\":\"number\"}},\"required\":[\"createdAt\",\"createdBy\",\"environment\",\"hashKey\",\"keyValue\",\"partialKeyValue\",\"projectId\",\"type\",\"updatedAt\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/v1/projects/{projectIdOrName}/feature-flags/sdk-keys", "rename": { "param": { "projectIdOrName": "project_id" } }, "segments": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "feature-flags" }, { "lit": "sdk-keys" }], "select": { "exist": ["project_id", "slug", "team_id"] }, "transform": { "req": { "environment": "`reqdata.environment`", "label": "`reqdata.label`", "sdkKeyType": "`reqdata.sdk_key_type`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["project"]] }, "key$": "flags_sdk_key_with_secret", "name__orig": "flags_sdk_key_with_secret", "Name": "FlagsSdkKeyWithSecret", "name_": "flags_sdk_key_with_secret", "name-": "flags-sdk-key-with-secret", "NAME": "FLAGS_SDK_KEY_WITH_SECRET", "index$": 33 }, { "active": true, "entity": "flags_sdk_key_with_secret", "key$": "BasicFlagsSdkKeyWithSecretFlow", "kind": "basic", "name": "BasicFlagsSdkKeyWithSecretFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "flags_sdk_key_with_secret_ref01", "srcdatavar": "flags_sdk_key_with_secret_ref01_data", "suffix": "_up0", "textfield": "createdBy" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-flags_sdk_key_with_secret_ref01" } }], "valid": [], "index$": 0 }] }, 'FlagsSdkKeyWithSecret');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let flags_sdk_key_with_secret_ref01_data = Object.values(setup.data.existing.flags_sdk_key_with_secret)[0];
        // UPDATE
        const flags_sdk_key_with_secret_ref01_ent = client.FlagsSdkKeyWithSecret();
        const flags_sdk_key_with_secret_ref01_data_up0 = {};
        const flags_sdk_key_with_secret_ref01_markdef_up0 = { name: 'createdBy', value: 'Mark01-flags_sdk_key_with_secret_ref01_' + setup.now };
        flags_sdk_key_with_secret_ref01_data_up0[flags_sdk_key_with_secret_ref01_markdef_up0.name] = flags_sdk_key_with_secret_ref01_markdef_up0.value;
        const flags_sdk_key_with_secret_ref01_resdata_up0 = (await flags_sdk_key_with_secret_ref01_ent.update(flags_sdk_key_with_secret_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != flags_sdk_key_with_secret_ref01_resdata_up0);
        (0, node_assert_1.default)(flags_sdk_key_with_secret_ref01_resdata_up0[flags_sdk_key_with_secret_ref01_markdef_up0.name] === flags_sdk_key_with_secret_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/flags_sdk_key_with_secret/FlagsSdkKeyWithSecretTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['flags_sdk_key_with_secret01', 'flags_sdk_key_with_secret02', 'flags_sdk_key_with_secret03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_FLAGS_SDK_KEY_WITH_SECRET_ENTID'];
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
//# sourceMappingURL=FlagsSdkKeyWithSecretEntity.test.js.map