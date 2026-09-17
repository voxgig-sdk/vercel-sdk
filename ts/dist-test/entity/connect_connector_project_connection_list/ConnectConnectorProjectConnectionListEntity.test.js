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
(0, node_test_1.describe)('ConnectConnectorProjectConnectionListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.ConnectConnectorProjectConnectionList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'connect_connector_project_connection_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "connectorId", "req": true, "short": "Stable `scl_` connector ID, even when the request used a UID.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "createdAt", "req": true, "short": "Time when the project connection was created, in epoch milliseconds.", "type": "`$NUMBER`", "index$": 1 }, { "active": true, "name": "enabledEnvironments", "req": true, "short": "Environments where the connector is enabled for the project.", "type": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 1 }, "index$": 2 }, { "active": true, "name": "project", "req": true, "short": "Vercel project connected to the connector.", "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "updatedAt", "req": true, "short": "Time when the project connection was last updated, in epoch milliseconds.", "type": "`$NUMBER`", "index$": 4 }], "name": "connect_connector_project_connection_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "connector_id", "orig": "connector", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "cursor", "orig": "cursor", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 3 }] }, "contract": { "id": "GET /v2/connect/connectors/{connector}/projects", "json": "{\"operationId\":\"listConnectorProjectConnections\",\"parameters\":[{\"description\":\"Stable connector ID or URL-encoded team-scoped UID. Examples: `scl_abc123` or `slack%2Fmy-bot`.\",\"in\":\"path\",\"name\":\"connector\",\"required\":true,\"schema\":{\"description\":\"Stable connector ID or URL-encoded team-scoped UID. Examples: `scl_abc123` or `slack%2Fmy-bot`.\",\"type\":\"string\"}},{\"description\":\"Maximum number of project connections to return. Defaults to 50.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"description\":\"Maximum number of project connections to return. Defaults to 50.\",\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Cursor from `pagination.next` on the previous response.\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"description\":\"Cursor from `pagination.next` on the previous response.\",\"type\":\"string\"}},{\"description\":\"The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Page of projects connected to a connector.\",\"properties\":{\"pagination\":{\"description\":\"Cursor for the next page.\",\"properties\":{\"next\":{\"description\":\"Opaque value to pass as `cursor` on the next request.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"next\"],\"type\":\"object\"},\"projects\":{\"description\":\"Project connections in this page.\",\"items\":{\"description\":\"A connection between a connector and a Vercel project, including the environments where the connector is enabled.\",\"properties\":{\"connectorId\":{\"description\":\"Stable `scl_` connector ID, even when the request used a UID.\",\"type\":\"string\"},\"createdAt\":{\"description\":\"Time when the project connection was created, in epoch milliseconds.\",\"type\":\"number\"},\"enabledEnvironments\":{\"description\":\"Environments where the connector is enabled for the project.\",\"items\":{\"oneOf\":[{\"type\":\"string\"},{\"enum\":[\"development\",\"preview\",\"production\"],\"type\":\"string\"}]},\"type\":\"array\"},\"project\":{\"description\":\"Vercel project connected to the connector.\",\"properties\":{\"customEnvironments\":{\"description\":\"Custom environments available on the project. This list can include environments where the connector is not enabled.\",\"items\":{\"description\":\"Custom environments available on the project. This list can include environments where the connector is not enabled.\",\"properties\":{\"id\":{\"description\":\"Stable custom environment ID.\",\"type\":\"string\"},\"slug\":{\"description\":\"Current human-readable custom environment slug.\",\"type\":\"string\"}},\"required\":[\"id\",\"slug\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Same Vercel project ID as the connection's top-level `projectId`.\",\"type\":\"string\"},\"name\":{\"description\":\"Current Vercel project name.\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"updatedAt\":{\"description\":\"Time when the project connection was last updated, in epoch milliseconds.\",\"type\":\"number\"}},\"required\":[\"connectorId\",\"createdAt\",\"enabledEnvironments\",\"project\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"pagination\",\"projects\"],\"type\":\"object\"}}},\"description\":\"A page of project connections for the connector.\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"error\":{\"additionalProperties\":true,\"description\":\"Error details.\",\"properties\":{\"code\":{\"description\":\"Stable machine-readable error code.\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message.\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The request is not authorized.\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The requested resource was not found.\"},\"410\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The requested resource is no longer available.\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The request cannot be completed in the current state.\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v2/connect/connectors/{connector}/projects", "rename": { "param": { "connector": "connector_id" } }, "segments": [{ "lit": "v2" }, { "lit": "connect" }, { "lit": "connectors" }, { "var": "connector_id" }, { "lit": "projects" }], "select": { "exist": ["connector_id", "cursor", "limit", "slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["connector"]] }, "key$": "connect_connector_project_connection_list", "name__orig": "connect_connector_project_connection_list", "Name": "ConnectConnectorProjectConnectionList", "name_": "connect_connector_project_connection_list", "name-": "connect-connector-project-connection-list", "NAME": "CONNECT_CONNECTOR_PROJECT_CONNECTION_LIST", "index$": 19 }, { "active": true, "entity": "connect_connector_project_connection_list", "key$": "BasicConnectConnectorProjectConnectionListFlow", "kind": "basic", "name": "BasicConnectConnectorProjectConnectionListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "connector_id": "connector01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "connect_connector_project_connection_list_ref01" } }], "index$": 0 }] }, 'ConnectConnectorProjectConnectionList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let connect_connector_project_connection_list_ref01_data = Object.values(setup.data.existing.connect_connector_project_connection_list)[0];
        // LIST
        const connect_connector_project_connection_list_ref01_ent = client.ConnectConnectorProjectConnectionList();
        const connect_connector_project_connection_list_ref01_match = {};
        connect_connector_project_connection_list_ref01_match['connector_id'] = setup.idmap['connector01'];
        const connect_connector_project_connection_list_ref01_list = (await connect_connector_project_connection_list_ref01_ent.list(connect_connector_project_connection_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/connect_connector_project_connection_list/ConnectConnectorProjectConnectionListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['connect_connector_project_connection_list01', 'connect_connector_project_connection_list02', 'connect_connector_project_connection_list03', 'connector01', 'connector02', 'connector03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_CONNECT_CONNECTOR_PROJECT_CONNECTION_LIST_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_CONNECT_CONNECTOR_PROJECT_CONNECTION_LIST_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_CONNECT_CONNECTOR_PROJECT_CONNECTION_LIST_ENTID'];
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
//# sourceMappingURL=ConnectConnectorProjectConnectionListEntity.test.js.map