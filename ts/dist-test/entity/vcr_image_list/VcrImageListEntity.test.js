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
(0, node_test_1.describe)('VcrImageListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.VcrImageList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'vcr_image_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "arch", "req": false, "short": "CPU architecture the manifest targets.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "createdAt", "req": true, "short": "ISO 8601 timestamp of when the image was created.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": true, "short": "Internal identifier of the image.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "kind", "req": true, "short": "Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "manifestDigest", "req": true, "short": "SHA-256 digest of the image manifest.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "platform", "req": false, "short": "Operating system the manifest targets.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "pushedBy", "req": false, "short": "Identifier of the actor that pushed the image.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "repositoryId", "req": true, "short": "Identifier of the repository the image belongs to.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "sizeInBytes", "req": true, "short": "Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry.", "type": "`$NUMBER`", "index$": 8 }, { "active": true, "name": "status", "req": true, "short": "VHS-readiness status, or `null` for a multi-platform index.", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "tags", "req": true, "short": "Tags pointing at this image's manifest.", "type": "`$ARRAY`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "vcr_image_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id_or_name", "orig": "id_or_name", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "cursor", "orig": "cursor", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "project_id", "orig": "project_id", "reqd": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "kind": "query", "name": "untagged", "orig": "untagged", "reqd": false, "type": "`$BOOLEAN`", "index$": 5 }] }, "contract": { "id": "GET /v1/vcr/repository/{idOrName}/images", "json": "{\"operationId\":\"listRepositoryImages\",\"parameters\":[{\"description\":\"Project ID or name (slug) within the authenticated team. IDs take precedence over names. Missing or empty values return HTTP 400.\",\"in\":\"query\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"description\":\"Project ID or name (slug) within the authenticated team. IDs take precedence over names. Missing or empty values return HTTP 400.\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"idOrName\",\"required\":true,\"schema\":{\"maxLength\":255,\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Opaque pagination cursor returned by a previous list response.\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"description\":\"Opaque pagination cursor returned by a previous list response.\",\"maxLength\":1024,\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"untagged\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A paginated list of images for a repository.\",\"properties\":{\"images\":{\"items\":{\"description\":\"An image enriched with its tags and VHS-readiness status, as returned when listing a repository's images.\",\"properties\":{\"arch\":{\"description\":\"CPU architecture the manifest targets. Only present for single-platform manifests.\",\"example\":\"amd64\",\"type\":\"string\"},\"createdAt\":{\"description\":\"ISO 8601 timestamp of when the image was created.\",\"example\":\"2026-06-30T10:00:00.000Z\",\"type\":\"string\"},\"id\":{\"description\":\"Internal identifier of the image.\",\"example\":\"img_a1b2c3d4e5f6\",\"type\":\"string\"},\"kind\":{\"description\":\"Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation.\",\"enum\":[\"attestation\",\"index\",\"manifest\"],\"type\":\"string\"},\"manifestDigest\":{\"description\":\"SHA-256 digest of the image manifest.\",\"example\":\"sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c\",\"type\":\"string\"},\"platform\":{\"description\":\"Operating system the manifest targets. Only present for single-platform manifests.\",\"example\":\"linux\",\"type\":\"string\"},\"pushedBy\":{\"description\":\"Identifier of the actor that pushed the image.\",\"type\":\"string\"},\"repositoryId\":{\"description\":\"Identifier of the repository the image belongs to.\",\"example\":\"repo_a1b2c3d4e5f6\",\"type\":\"string\"},\"sizeInBytes\":{\"description\":\"Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry.\",\"type\":\"number\"},\"status\":{\"description\":\"VHS-readiness status, or `null` for a multi-platform index.\",\"enum\":[\"preparing\",\"ready\",\"unoptimized\",null],\"nullable\":true,\"type\":\"string\"},\"tags\":{\"description\":\"Tags pointing at this image's manifest.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"createdAt\",\"id\",\"kind\",\"manifestDigest\",\"repositoryId\",\"sizeInBytes\",\"status\",\"tags\"],\"type\":\"object\"},\"type\":\"array\"},\"nextCursor\":{\"description\":\"Cursor to fetch the next page of results, when more are available.\",\"type\":\"string\"}},\"required\":[\"images\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/vcr/repository/{idOrName}/images", "rename": { "param": { "idOrName": "id_or_name" } }, "segments": [{ "lit": "v1" }, { "lit": "vcr" }, { "lit": "repository" }, { "var": "id_or_name" }, { "lit": "images" }], "select": { "exist": ["cursor", "id_or_name", "limit", "project_id", "slug", "team_id", "untagged"] }, "transform": { "req": "`reqdata`", "res": "`body.images`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["repository"]] }, "key$": "vcr_image_list", "name__orig": "vcr_image_list", "Name": "VcrImageList", "name_": "vcr_image_list", "name-": "vcr-image-list", "NAME": "VCR_IMAGE_LIST", "index$": 64 }, { "active": true, "entity": "vcr_image_list", "key$": "BasicVcrImageListFlow", "kind": "basic", "name": "BasicVcrImageListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "id_or_name": "id_or_name01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "vcr_image_list_ref01" } }], "index$": 0 }] }, 'VcrImageList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let vcr_image_list_ref01_data = Object.values(setup.data.existing.vcr_image_list)[0];
        // LIST
        const vcr_image_list_ref01_ent = client.VcrImageList();
        const vcr_image_list_ref01_match = {};
        vcr_image_list_ref01_match['id_or_name'] = setup.idmap['id_or_name01'];
        const vcr_image_list_ref01_list = (await vcr_image_list_ref01_ent.list(vcr_image_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/vcr_image_list/VcrImageListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['vcr_image_list01', 'vcr_image_list02', 'vcr_image_list03', 'repository01', 'repository02', 'repository03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_VCR_IMAGE_LIST_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_VCR_IMAGE_LIST_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_VCR_IMAGE_LIST_ENTID'];
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
//# sourceMappingURL=VcrImageListEntity.test.js.map