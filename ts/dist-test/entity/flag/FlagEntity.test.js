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
(0, node_test_1.describe)('FlagEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.Flag();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'flag.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "createdAt", "req": true, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "createdBy", "req": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "environments", "req": true, "type": "`$OBJECT`", "union": { "branches": 5, "count": 5, "depth": 14 }, "index$": 3 }, { "active": true, "name": "id", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "kind", "req": true, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "maintainerIds", "req": false, "type": "`$ARRAY`", "index$": 6 }, { "active": true, "name": "metadata", "req": false, "type": "`$OBJECT`", "index$": 7 }, { "active": true, "name": "ownerId", "req": true, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "permanent", "req": false, "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "projectId", "req": true, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "revision", "req": true, "type": "`$NUMBER`", "index$": 11 }, { "active": true, "name": "seed", "req": true, "type": "`$NUMBER`", "index$": 12 }, { "active": true, "name": "slug", "req": true, "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "state", "req": true, "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "tags", "req": false, "type": "`$ARRAY`", "index$": 15 }, { "active": true, "name": "typeName", "req": true, "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "updatedAt", "req": true, "type": "`$NUMBER`", "index$": 17 }, { "active": true, "name": "updatedBy", "req": false, "type": "`$STRING`", "index$": 18 }, { "active": true, "name": "variants", "req": true, "type": "`$ARRAY`", "union": { "branches": 5, "count": 1, "depth": 3 }, "index$": 19 }], "id": { "field": "id", "name": "id" }, "name": "flag", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "flag_id_or_slug", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "project_id_or_name", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "if_match", "orig": "if_match", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "with_metadata", "orig": "with_metadata", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }] }, "contract": { "id": "GET /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}", "json": "{\"operationId\":\"getFlag\",\"parameters\":[{\"description\":\"The project id or name\",\"in\":\"path\",\"name\":\"projectIdOrName\",\"required\":true,\"schema\":{\"description\":\"The project id or name\",\"type\":\"string\"}},{\"description\":\"The flag id or name\",\"in\":\"path\",\"name\":\"flagIdOrSlug\",\"required\":true,\"schema\":{\"description\":\"The flag id or name\",\"type\":\"string\"}},{\"description\":\"Etag to match, can be used interchangeably with the `if-match` header\",\"in\":\"query\",\"name\":\"ifMatch\",\"required\":false,\"schema\":{\"description\":\"Etag to match, can be used interchangeably with the `if-match` header\",\"type\":\"string\"}},{\"description\":\"Whether to include metadata in the response\",\"in\":\"query\",\"name\":\"withMetadata\",\"required\":false,\"schema\":{\"description\":\"Whether to include metadata in the response\",\"type\":\"boolean\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"createdAt\":{\"type\":\"number\"},\"createdBy\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"environments\":{\"additionalProperties\":{\"properties\":{\"active\":{\"enum\":[false,true],\"type\":\"boolean\"},\"fallthrough\":{\"oneOf\":[{\"properties\":{\"type\":{\"enum\":[\"variant\"],\"type\":\"string\"},\"variantId\":{\"type\":\"string\"}},\"required\":[\"type\",\"variantId\"],\"type\":\"object\"},{\"properties\":{\"base\":{\"properties\":{\"attribute\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"type\":{\"enum\":[\"entity\"],\"type\":\"string\"}},\"required\":[\"attribute\",\"kind\",\"type\"],\"type\":\"object\"},\"defaultVariantId\":{\"type\":\"string\"},\"type\":{\"enum\":[\"split\"],\"type\":\"string\"},\"weights\":{\"additionalProperties\":{\"type\":\"number\"},\"type\":\"object\"}},\"required\":[\"base\",\"defaultVariantId\",\"type\",\"weights\"],\"type\":\"object\"},{\"properties\":{\"base\":{\"properties\":{\"attribute\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"type\":{\"enum\":[\"entity\"],\"type\":\"string\"}},\"required\":[\"attribute\",\"kind\",\"type\"],\"type\":\"object\"},\"defaultVariantId\":{\"type\":\"string\"},\"rollFromVariantId\":{\"type\":\"string\"},\"rollToVariantId\":{\"type\":\"string\"},\"slots\":{\"items\":{\"properties\":{\"durationMs\":{\"type\":\"number\"},\"promille\":{\"type\":\"number\"}},\"required\":[\"durationMs\",\"promille\"],\"type\":\"object\"},\"type\":\"array\"},\"startTimestamp\":{\"type\":\"number\"},\"type\":{\"enum\":[\"rollout\"],\"type\":\"string\"}},\"required\":[\"base\",\"defaultVariantId\",\"rollFromVariantId\",\"rollToVariantId\",\"slots\",\"startTimestamp\",\"type\"],\"type\":\"object\"},{\"properties\":{\"type\":{\"enum\":[\"experiment\"],\"type\":\"string\"}},\"required\":[\"type\"],\"type\":\"object\"}]},\"pausedOutcome\":{\"properties\":{\"type\":{\"enum\":[\"variant\"],\"type\":\"string\"},\"variantId\":{\"type\":\"string\"}},\"required\":[\"type\",\"variantId\"],\"type\":\"object\"},\"reuse\":{\"properties\":{\"active\":{\"enum\":[false,true],\"type\":\"boolean\"},\"environment\":{\"type\":\"string\"}},\"required\":[\"active\",\"environment\"],\"type\":\"object\"},\"revision\":{\"type\":\"number\"},\"rules\":{\"items\":{\"properties\":{\"conditions\":{\"items\":{\"properties\":{\"cmp\":{\"enum\":[\"!contains\",\"!endsWith\",\"!eq\",\"!ex\",\"!oneOf\",\"!regex\",\"!startsWith\",\"after\",\"before\",\"contains\",\"containsAllOf\",\"containsAnyOf\",\"containsNoneOf\",\"endsWith\",\"eq\",\"ex\",\"gt\",\"gte\",\"lt\",\"lte\",\"oneOf\",\"regex\",\"startsWith\"],\"type\":\"string\"},\"cmpOptions\":{\"properties\":{\"ignoreCase\":{\"enum\":[false,true],\"type\":\"boolean\"}},\"type\":\"object\"},\"lhs\":{\"oneOf\":[{\"properties\":{\"type\":{\"enum\":[\"segment\"],\"type\":\"string\"}},\"required\":[\"type\"],\"type\":\"object\"},{\"properties\":{\"attribute\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"type\":{\"enum\":[\"entity\"],\"type\":\"string\"}},\"required\":[\"attribute\",\"kind\",\"type\"],\"type\":\"object\"}]},\"rhs\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"number\"},{\"properties\":{\"items\":{\"items\":{\"oneOf\":[{\"properties\":{\"label\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"required\":[\"value\"],\"type\":\"object\"},{\"properties\":{\"label\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"required\":[\"value\"],\"type\":\"object\"}]},\"type\":\"array\"},\"type\":{\"enum\":[\"list\",\"list/inline\"],\"type\":\"string\"}},\"required\":[\"items\",\"type\"],\"type\":\"object\"},{\"properties\":{\"flags\":{\"type\":\"string\"},\"pattern\":{\"type\":\"string\"},\"type\":{\"enum\":[\"regex\"],\"type\":\"string\"}},\"required\":[\"flags\",\"pattern\",\"type\"],\"type\":\"object\"},{\"enum\":[false,true],\"type\":\"boolean\"}]}},\"required\":[\"cmp\",\"lhs\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"type\":\"string\"},\"outcome\":{\"oneOf\":[{\"properties\":{\"type\":{\"enum\":[\"variant\"],\"type\":\"string\"},\"variantId\":{\"type\":\"string\"}},\"required\":[\"type\",\"variantId\"],\"type\":\"object\"},{\"properties\":{\"base\":{\"properties\":{\"attribute\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"type\":{\"enum\":[\"entity\"],\"type\":\"string\"}},\"required\":[\"attribute\",\"kind\",\"type\"],\"type\":\"object\"},\"defaultVariantId\":{\"type\":\"string\"},\"type\":{\"enum\":[\"split\"],\"type\":\"string\"},\"weights\":{\"additionalProperties\":{\"type\":\"number\"},\"type\":\"object\"}},\"required\":[\"base\",\"defaultVariantId\",\"type\",\"weights\"],\"type\":\"object\"},{\"properties\":{\"base\":{\"properties\":{\"attribute\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"type\":{\"enum\":[\"entity\"],\"type\":\"string\"}},\"required\":[\"attribute\",\"kind\",\"type\"],\"type\":\"object\"},\"defaultVariantId\":{\"type\":\"string\"},\"rollFromVariantId\":{\"type\":\"string\"},\"rollToVariantId\":{\"type\":\"string\"},\"slots\":{\"items\":{\"properties\":{\"durationMs\":{\"type\":\"number\"},\"promille\":{\"type\":\"number\"}},\"required\":[\"durationMs\",\"promille\"],\"type\":\"object\"},\"type\":\"array\"},\"startTimestamp\":{\"type\":\"number\"},\"type\":{\"enum\":[\"rollout\"],\"type\":\"string\"}},\"required\":[\"base\",\"defaultVariantId\",\"rollFromVariantId\",\"rollToVariantId\",\"slots\",\"startTimestamp\",\"type\"],\"type\":\"object\"},{\"properties\":{\"type\":{\"enum\":[\"experiment\"],\"type\":\"string\"}},\"required\":[\"type\"],\"type\":\"object\"}]}},\"required\":[\"conditions\",\"id\",\"outcome\"],\"type\":\"object\"},\"type\":\"array\"},\"targets\":{\"additionalProperties\":{\"additionalProperties\":{\"additionalProperties\":{\"items\":{\"properties\":{\"note\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"required\":[\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"type\":\"object\"},\"type\":\"object\"},\"type\":\"object\"}},\"required\":[\"active\",\"fallthrough\",\"pausedOutcome\",\"rules\"],\"type\":\"object\"},\"type\":\"object\"},\"id\":{\"type\":\"string\"},\"kind\":{\"enum\":[\"boolean\",\"json\",\"number\",\"string\"],\"type\":\"string\"},\"maintainerIds\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"metadata\":{\"properties\":{\"creator\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"}},\"type\":\"object\"},\"ownerId\":{\"type\":\"string\"},\"permanent\":{\"enum\":[false,true],\"type\":\"boolean\"},\"projectId\":{\"type\":\"string\"},\"revision\":{\"type\":\"number\"},\"seed\":{\"type\":\"number\"},\"slug\":{\"type\":\"string\"},\"state\":{\"enum\":[\"active\",\"archived\"],\"type\":\"string\"},\"tags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"typeName\":{\"enum\":[\"flag\"],\"type\":\"string\"},\"updatedAt\":{\"type\":\"number\"},\"updatedBy\":{\"type\":\"string\"},\"variants\":{\"items\":{\"properties\":{\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"value\":{\"nullable\":true,\"oneOf\":[{\"type\":\"string\"},{\"type\":\"number\"},{\"additionalProperties\":true,\"type\":\"object\"},{\"items\":{},\"type\":\"array\"},{\"enum\":[false,true],\"type\":\"boolean\"}]}},\"required\":[\"id\",\"value\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"createdAt\",\"createdBy\",\"environments\",\"id\",\"kind\",\"ownerId\",\"projectId\",\"revision\",\"seed\",\"slug\",\"state\",\"typeName\",\"updatedAt\",\"variants\"],\"type\":\"object\"}}},\"description\":\"\"},\"304\":{\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}", "rename": { "param": { "flagIdOrSlug": "id", "projectIdOrName": "project_id" } }, "segments": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "feature-flags" }, { "lit": "flags" }, { "var": "id" }], "select": { "exist": ["id", "if_match", "project_id", "slug", "team_id", "with_metadata"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["project"]] }, "key$": "flag", "name__orig": "flag", "Name": "Flag", "name_": "flag", "name-": "flag", "NAME": "FLAG", "index$": 32 }, { "active": true, "entity": "flag", "key$": "BasicFlagFlow", "kind": "basic", "name": "BasicFlagFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "flag_ref01", "srcdatavar": "flag_ref01_data", "suffix": "_dt0" }, "match": { "id": "flag01", "project_id": "project01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-flag_ref01" } }], "index$": 0 }] }, 'Flag');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let flag_ref01_data = Object.values(setup.data.existing.flag)[0];
        // LOAD
        const flag_ref01_ent = client.Flag();
        const flag_ref01_match_dt0 = {};
        flag_ref01_match_dt0.id = flag_ref01_data.id;
        const flag_ref01_data_dt0 = (await flag_ref01_ent.load(flag_ref01_match_dt0)).data();
        (0, node_assert_1.default)(flag_ref01_data_dt0.id === flag_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/flag/FlagTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['flag01', 'flag02', 'flag03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_FLAG_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_FLAG_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_FLAG_ENTID'];
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
//# sourceMappingURL=FlagEntity.test.js.map