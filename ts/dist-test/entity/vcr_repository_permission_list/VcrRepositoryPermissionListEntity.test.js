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
(0, node_test_1.describe)('VcrRepositoryPermissionListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.VcrRepositoryPermissionList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'vcr_repository_permission_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "createdAt", "req": true, "short": "ISO 8601 timestamp of when the permission was created.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "repositoryId", "req": true, "short": "Identifier of the repository the permission grants access to.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "teamId", "req": true, "short": "Identifier of the team that is granted access to the repository.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "teamSlug", "req": true, "short": "Slug of the team that is granted access to the repository.", "type": "`$STRING`", "index$": 3 }], "name": "vcr_repository_permission_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id_or_name", "orig": "id_or_name", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "cursor", "orig": "cursor", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "project_id", "orig": "project_id", "reqd": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 4 }] }, "contract": { "id": "GET /v1/vcr/repository/{idOrName}/permissions", "json": "{\"operationId\":\"listRepositoryPermissions\",\"parameters\":[{\"description\":\"Project ID or name (slug) within the authenticated team. IDs take precedence over names. Missing or empty values return HTTP 400.\",\"in\":\"query\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"description\":\"Project ID or name (slug) within the authenticated team. IDs take precedence over names. Missing or empty values return HTTP 400.\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"idOrName\",\"required\":true,\"schema\":{\"maxLength\":255,\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Opaque pagination cursor returned by a previous list response.\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"description\":\"Opaque pagination cursor returned by a previous list response.\",\"maxLength\":1024,\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A paginated list of Vercel Container Registry repository permissions.\",\"properties\":{\"nextCursor\":{\"description\":\"Cursor to fetch the next page of results, when more are available.\",\"type\":\"string\"},\"permissions\":{\"items\":{\"description\":\"A team's access grant to a Vercel Container Registry repository.\",\"properties\":{\"createdAt\":{\"description\":\"ISO 8601 timestamp of when the permission was created.\",\"example\":\"2026-06-30T10:00:00.000Z\",\"type\":\"string\"},\"repositoryId\":{\"description\":\"Identifier of the repository the permission grants access to.\",\"example\":\"repo_a1b2c3d4e5f6\",\"type\":\"string\"},\"teamId\":{\"description\":\"Identifier of the team that is granted access to the repository.\",\"example\":\"team_a1b2c3d4e5f6\",\"type\":\"string\"},\"teamSlug\":{\"description\":\"Slug of the team that is granted access to the repository.\",\"example\":\"my-team\",\"type\":\"string\"}},\"required\":[\"createdAt\",\"repositoryId\",\"teamId\",\"teamSlug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"permissions\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/vcr/repository/{idOrName}/permissions", "rename": { "param": { "idOrName": "id_or_name" } }, "segments": [{ "lit": "v1" }, { "lit": "vcr" }, { "lit": "repository" }, { "var": "id_or_name" }, { "lit": "permissions" }], "select": { "exist": ["cursor", "id_or_name", "limit", "project_id", "slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body.permissions`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["repository"]] }, "key$": "vcr_repository_permission_list", "name__orig": "vcr_repository_permission_list", "Name": "VcrRepositoryPermissionList", "name_": "vcr_repository_permission_list", "name-": "vcr-repository-permission-list", "NAME": "VCR_REPOSITORY_PERMISSION_LIST", "index$": 66 }, { "active": true, "entity": "vcr_repository_permission_list", "key$": "BasicVcrRepositoryPermissionListFlow", "kind": "basic", "name": "BasicVcrRepositoryPermissionListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "id_or_name": "id_or_name01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "vcr_repository_permission_list_ref01" } }], "index$": 0 }] }, 'VcrRepositoryPermissionList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let vcr_repository_permission_list_ref01_data = Object.values(setup.data.existing.vcr_repository_permission_list)[0];
        // LIST
        const vcr_repository_permission_list_ref01_ent = client.VcrRepositoryPermissionList();
        const vcr_repository_permission_list_ref01_match = {};
        vcr_repository_permission_list_ref01_match['id_or_name'] = setup.idmap['id_or_name01'];
        const vcr_repository_permission_list_ref01_list = (await vcr_repository_permission_list_ref01_ent.list(vcr_repository_permission_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/vcr_repository_permission_list/VcrRepositoryPermissionListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['vcr_repository_permission_list01', 'vcr_repository_permission_list02', 'vcr_repository_permission_list03', 'repository01', 'repository02', 'repository03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_VCR_REPOSITORY_PERMISSION_LIST_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_VCR_REPOSITORY_PERMISSION_LIST_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_VCR_REPOSITORY_PERMISSION_LIST_ENTID'];
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
//# sourceMappingURL=VcrRepositoryPermissionListEntity.test.js.map