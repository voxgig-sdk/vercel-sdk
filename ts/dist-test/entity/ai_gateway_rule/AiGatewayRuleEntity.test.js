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
(0, node_test_1.describe)('AiGatewayRuleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.AiGatewayRule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['create', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_gateway_rule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "action", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "createdAt", "req": true, "type": "`$NUMBER`", "index$": 1 }, { "active": true, "name": "createdBy", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "deleted", "req": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "enabled", "req": true, "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "match", "req": false, "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "ownerId", "req": true, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "ruleId", "req": true, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "type", "req": true, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "updatedAt", "req": true, "type": "`$NUMBER`", "index$": 10 }, { "active": true, "name": "updatedBy", "req": false, "type": "`$STRING`", "index$": 11 }], "name": "ai_gateway_rule", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "POST /v1/ai-gateway/rules", "json": "{\"operationId\":\"createAiGatewayRule\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Public response shape for AI Gateway routing rules. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.\",\"properties\":{\"action\":{\"properties\":{\"reason\":{\"type\":\"string\"},\"rewriteModel\":{\"type\":\"string\"}},\"type\":\"object\"},\"createdAt\":{\"type\":\"number\"},\"createdBy\":{\"type\":\"string\"},\"deleted\":{\"enum\":[false,true],\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"enabled\":{\"enum\":[false,true],\"type\":\"boolean\"},\"match\":{\"properties\":{\"model\":{\"type\":\"string\"}},\"type\":\"object\"},\"ownerId\":{\"type\":\"string\"},\"ruleId\":{\"type\":\"string\"},\"type\":{\"enum\":[\"deny\",\"rewrite\"],\"type\":\"string\"},\"updatedAt\":{\"type\":\"number\"},\"updatedBy\":{\"type\":\"string\"}},\"required\":[\"createdAt\",\"enabled\",\"ownerId\",\"ruleId\",\"type\",\"updatedAt\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/v1/ai-gateway/rules", "segments": [{ "lit": "v1" }, { "lit": "ai-gateway" }, { "lit": "rules" }], "select": { "exist": ["slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "PATCH /v1/ai-gateway/rules", "json": "{\"operationId\":\"updateAiGatewayRule\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Public response shape for AI Gateway routing rules. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.\",\"properties\":{\"action\":{\"properties\":{\"reason\":{\"type\":\"string\"},\"rewriteModel\":{\"type\":\"string\"}},\"type\":\"object\"},\"createdAt\":{\"type\":\"number\"},\"createdBy\":{\"type\":\"string\"},\"deleted\":{\"enum\":[false,true],\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"enabled\":{\"enum\":[false,true],\"type\":\"boolean\"},\"match\":{\"properties\":{\"model\":{\"type\":\"string\"}},\"type\":\"object\"},\"ownerId\":{\"type\":\"string\"},\"ruleId\":{\"type\":\"string\"},\"type\":{\"enum\":[\"deny\",\"rewrite\"],\"type\":\"string\"},\"updatedAt\":{\"type\":\"number\"},\"updatedBy\":{\"type\":\"string\"}},\"required\":[\"createdAt\",\"enabled\",\"ownerId\",\"ruleId\",\"type\",\"updatedAt\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/v1/ai-gateway/rules", "segments": [{ "lit": "v1" }, { "lit": "ai-gateway" }, { "lit": "rules" }], "select": { "exist": ["slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "ai_gateway_rule", "name__orig": "ai_gateway_rule", "Name": "AiGatewayRule", "name_": "ai_gateway_rule", "name-": "ai-gateway-rule", "NAME": "AI_GATEWAY_RULE", "index$": 2 }, { "active": true, "entity": "ai_gateway_rule", "key$": "BasicAiGatewayRuleFlow", "kind": "basic", "name": "BasicAiGatewayRuleFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "ai_gateway_rule_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "ai_gateway_rule_ref01", "srcdatavar": "ai_gateway_rule_ref01_data", "suffix": "_up0", "textfield": "createdBy" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_gateway_rule_ref01" } }], "valid": [], "index$": 1 }] }, 'AiGatewayRule');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_gateway_rule_ref01_ent = client.AiGatewayRule();
        let ai_gateway_rule_ref01_data = setup.data.new.ai_gateway_rule['ai_gateway_rule_ref01'];
        ai_gateway_rule_ref01_data = (await ai_gateway_rule_ref01_ent.create(ai_gateway_rule_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_gateway_rule_ref01_data);
        // UPDATE
        const ai_gateway_rule_ref01_data_up0 = {};
        const ai_gateway_rule_ref01_markdef_up0 = { name: 'createdBy', value: 'Mark01-ai_gateway_rule_ref01_' + setup.now };
        ai_gateway_rule_ref01_data_up0[ai_gateway_rule_ref01_markdef_up0.name] = ai_gateway_rule_ref01_markdef_up0.value;
        const ai_gateway_rule_ref01_resdata_up0 = (await ai_gateway_rule_ref01_ent.update(ai_gateway_rule_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != ai_gateway_rule_ref01_resdata_up0);
        (0, node_assert_1.default)(ai_gateway_rule_ref01_resdata_up0[ai_gateway_rule_ref01_markdef_up0.name] === ai_gateway_rule_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_gateway_rule/AiGatewayRuleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_gateway_rule01', 'ai_gateway_rule02', 'ai_gateway_rule03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_AI_GATEWAY_RULE_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_AI_GATEWAY_RULE_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_AI_GATEWAY_RULE_ENTID'];
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
//# sourceMappingURL=AiGatewayRuleEntity.test.js.map