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
(0, node_test_1.describe)('NetworkingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.Networking();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'networking.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "builds", "req": false, "short": "Whether to use Static IPs for builds.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "regions", "req": false, "type": "`$ARRAY`", "index$": 1 }], "name": "networking", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "ple_a1b2c3d4e5f6g7h8", "kind": "param", "name": "endpoint_id", "orig": "endpoint_id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "prj_a1b2c3d4e5f6g7h8", "kind": "query", "name": "project_id", "orig": "project_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "DELETE /v1/networking/privatelink/endpoints/{endpointId}", "json": "{\"operationId\":\"deletePrivateLinkEndpoint\",\"parameters\":[{\"description\":\"The project ID the PrivateLink endpoint belongs to.\",\"in\":\"query\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"description\":\"The project ID the PrivateLink endpoint belongs to.\",\"example\":\"prj_a1b2c3d4e5f6g7h8\",\"type\":\"string\"}},{\"description\":\"The unique identifier of the PrivateLink endpoint.\",\"in\":\"path\",\"name\":\"endpointId\",\"required\":true,\"schema\":{\"description\":\"The unique identifier of the PrivateLink endpoint.\",\"example\":\"ple_a1b2c3d4e5f6g7h8\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"content\":{\"application/json\":{\"schema\":{\"nullable\":true}}},\"description\":\"The PrivateLink endpoint was deleted.\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/v1/networking/privatelink/endpoints/{endpointId}", "rename": { "param": { "endpointId": "endpoint_id" } }, "segments": [{ "lit": "v1" }, { "lit": "networking" }, { "lit": "privatelink" }, { "lit": "endpoints" }, { "var": "endpoint_id" }], "select": { "exist": ["endpoint_id", "project_id", "slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id_or_name", "orig": "id_or_name", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "PATCH /v1/projects/{idOrName}/shared-connect-links", "json": "{\"operationId\":\"updateStaticIps\",\"parameters\":[{\"description\":\"The unique project identifier or the project name\",\"in\":\"path\",\"name\":\"idOrName\",\"required\":true,\"schema\":{\"description\":\"The unique project identifier or the project name\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"anyOf\":[{\"required\":[\"builds\"]},{\"required\":[\"regions\"]}],\"properties\":{\"builds\":{\"description\":\"Whether to use Static IPs for builds.\",\"type\":\"boolean\"},\"regions\":{\"items\":{\"description\":\"The region in which to enable Static IPs.\",\"example\":\"iad1\",\"maxLength\":4,\"type\":\"string\"},\"maxItems\":3,\"minItems\":0,\"type\":\"array\",\"uniqueItems\":true}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"aws\":{\"properties\":{\"securityGroupId\":{\"type\":\"string\"},\"subnetIds\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"subnetIds\"],\"type\":\"object\"},\"buildsEnabled\":{\"enum\":[false,true],\"type\":\"boolean\"},\"connectConfigurationId\":{\"type\":\"string\"},\"createdAt\":{\"type\":\"number\"},\"dc\":{\"type\":\"string\"},\"envId\":{\"oneOf\":[{\"type\":\"string\"},{\"enum\":[\"preview\",\"production\"],\"type\":\"string\"}]},\"passive\":{\"enum\":[false,true],\"type\":\"boolean\"},\"updatedAt\":{\"type\":\"number\"}},\"required\":[\"buildsEnabled\",\"connectConfigurationId\",\"createdAt\",\"envId\",\"passive\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/v1/projects/{idOrName}/shared-connect-links", "rename": { "param": { "idOrName": "id_or_name" } }, "segments": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "id_or_name" }, { "lit": "shared-connect-links" }], "select": { "exist": ["id_or_name", "slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["endpoint"], ["project"]] }, "key$": "networking", "name__orig": "networking", "Name": "Networking", "name_": "networking", "name-": "networking", "NAME": "NETWORKING", "index$": 45 }, { "active": true, "entity": "networking", "key$": "BasicNetworkingFlow", "kind": "basic", "name": "BasicNetworkingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "networking_ref01", "srcdatavar": "networking_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-networking_ref01" } }], "valid": [], "index$": 0 }] }, 'Networking');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let networking_ref01_data = Object.values(setup.data.existing.networking)[0];
        // UPDATE
        const networking_ref01_ent = client.Networking();
        const networking_ref01_data_up0 = {};
        const networking_ref01_resdata_up0 = (await networking_ref01_ent.update(networking_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != networking_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/networking/NetworkingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['networking01', 'networking02', 'networking03', 'endpoint01', 'endpoint02', 'endpoint03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_NETWORKING_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_NETWORKING_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_NETWORKING_ENTID'];
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
//# sourceMappingURL=NetworkingEntity.test.js.map