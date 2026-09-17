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
(0, node_test_1.describe)('CertEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VERCEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VercelSDK.test();
        const ent = testsdk.Cert();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VERCEL_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cert.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "autoRenew", "req": true, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "ca", "req": true, "short": "The certificate authority", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "cert", "req": true, "short": "The certificate", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "cns", "op": { "create": { "req": false, "type": "`$ARRAY`" } }, "req": true, "short": "The common names the cert should be issued for", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "createdAt", "req": true, "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "expiresAt", "req": true, "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "id", "req": true, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "key", "req": true, "short": "The certificate key", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "skipValidation", "req": false, "short": "Skip validation of the certificate", "type": "`$BOOLEAN`", "index$": 8 }], "id": { "field": "id", "name": "id" }, "name": "cert", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "POST /v8/certs", "json": "{\"operationId\":\"issueCert\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"cns\":{\"description\":\"The common names the cert should be issued for\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"autoRenew\":{\"enum\":[false,true],\"type\":\"boolean\"},\"cns\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"createdAt\":{\"type\":\"number\"},\"expiresAt\":{\"type\":\"number\"},\"id\":{\"type\":\"string\"}},\"required\":[\"autoRenew\",\"cns\",\"createdAt\",\"expiresAt\",\"id\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"449\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/v8/certs", "segments": [{ "lit": "v8" }, { "lit": "certs" }], "select": { "exist": ["slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /v8/certs", "json": "{\"operationId\":\"getCerts\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"certs\":{\"items\":{\"properties\":{\"autoRenew\":{\"enum\":[false,true],\"type\":\"boolean\"},\"cns\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"createdAt\":{\"type\":\"number\"},\"expiresAt\":{\"type\":\"number\"},\"id\":{\"type\":\"string\"}},\"required\":[\"autoRenew\",\"cns\",\"createdAt\",\"expiresAt\",\"id\"],\"type\":\"object\"},\"type\":\"array\"},\"pagination\":{\"description\":\"This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.\",\"properties\":{\"count\":{\"description\":\"Amount of items in the current page.\",\"example\":20,\"type\":\"number\"},\"next\":{\"description\":\"Timestamp that must be used to request the next page.\",\"example\":1540095775951,\"nullable\":true,\"type\":\"number\"},\"prev\":{\"description\":\"Timestamp that must be used to request the previous page.\",\"example\":1540095775951,\"nullable\":true,\"type\":\"number\"}},\"required\":[\"count\",\"next\",\"prev\"],\"type\":\"object\"}},\"required\":[\"certs\",\"pagination\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v8/certs", "segments": [{ "lit": "v8" }, { "lit": "certs" }], "select": { "exist": ["slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /v8/certs/{id}", "json": "{\"operationId\":\"getCertById\",\"parameters\":[{\"description\":\"The cert id\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The cert id\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"autoRenew\":{\"enum\":[false,true],\"type\":\"boolean\"},\"cns\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"createdAt\":{\"type\":\"number\"},\"expiresAt\":{\"type\":\"number\"},\"id\":{\"type\":\"string\"}},\"required\":[\"autoRenew\",\"cns\",\"createdAt\",\"expiresAt\",\"id\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v8/certs/{id}", "segments": [{ "lit": "v8" }, { "lit": "certs" }, { "var": "id" }], "select": { "exist": ["id", "slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /v8/certs/{id}", "json": "{\"operationId\":\"removeCert\",\"parameters\":[{\"description\":\"The cert id to remove\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The cert id to remove\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/v8/certs/{id}", "segments": [{ "lit": "v8" }, { "lit": "certs" }, { "var": "id" }], "select": { "exist": ["id", "slug", "team_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "my-team-url-slug", "kind": "query", "name": "slug", "orig": "slug", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "team_1a2b3c4d5e6f7g8h9i0j1k2l", "kind": "query", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "PUT /v8/certs", "json": "{\"operationId\":\"uploadCert\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"ca\":{\"description\":\"The certificate authority\",\"type\":\"string\"},\"cert\":{\"description\":\"The certificate\",\"type\":\"string\"},\"key\":{\"description\":\"The certificate key\",\"type\":\"string\"},\"skipValidation\":{\"description\":\"Skip validation of the certificate\",\"type\":\"boolean\"}},\"required\":[\"ca\",\"key\",\"cert\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"autoRenew\":{\"enum\":[false,true],\"type\":\"boolean\"},\"cns\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"createdAt\":{\"type\":\"number\"},\"expiresAt\":{\"type\":\"number\"},\"id\":{\"type\":\"string\"}},\"required\":[\"autoRenew\",\"cns\",\"createdAt\",\"expiresAt\",\"id\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"This feature is only available for Enterprise customers.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/v8/certs", "segments": [{ "lit": "v8" }, { "lit": "certs" }], "select": { "exist": ["slug", "team_id"] }, "transform": { "req": { "cert": "`reqdata`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "cert", "name__orig": "cert", "Name": "Cert", "name_": "cert", "name-": "cert", "NAME": "CERT", "index$": 13 }, { "active": true, "entity": "cert", "key$": "BasicCertFlow", "kind": "basic", "name": "BasicCertFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "cert_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "cert_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "cert_ref01", "srcdatavar": "cert_ref01_data", "suffix": "_up0", "textfield": "ca" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cert_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "cert_ref01", "srcdatavar": "cert_ref01_data", "suffix": "_dt0" }, "match": { "id": "cert01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cert_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "cert_ref01", "suffix": "_rm0" }, "match": { "id": "cert01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "cert_ref01" } }], "index$": 5 }] }, 'Cert');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const cert_ref01_ent = client.Cert();
        let cert_ref01_data = setup.data.new.cert['cert_ref01'];
        cert_ref01_data = (await cert_ref01_ent.create(cert_ref01_data)).data();
        (0, node_assert_1.default)(null != cert_ref01_data.id);
        // LIST
        const cert_ref01_match = {};
        const cert_ref01_list = (await cert_ref01_ent.list(cert_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(cert_ref01_list, { id: cert_ref01_data.id })));
        // UPDATE
        const cert_ref01_data_up0 = {};
        cert_ref01_data_up0.id = cert_ref01_data.id;
        const cert_ref01_markdef_up0 = { name: 'ca', value: 'Mark01-cert_ref01_' + setup.now };
        cert_ref01_data_up0[cert_ref01_markdef_up0.name] = cert_ref01_markdef_up0.value;
        const cert_ref01_resdata_up0 = (await cert_ref01_ent.update(cert_ref01_data_up0)).data();
        (0, node_assert_1.default)(cert_ref01_resdata_up0.id === cert_ref01_data_up0.id);
        (0, node_assert_1.default)(cert_ref01_resdata_up0[cert_ref01_markdef_up0.name] === cert_ref01_markdef_up0.value);
        // LOAD
        const cert_ref01_match_dt0 = {};
        cert_ref01_match_dt0.id = cert_ref01_data.id;
        const cert_ref01_data_dt0 = (await cert_ref01_ent.load(cert_ref01_match_dt0)).data();
        (0, node_assert_1.default)(cert_ref01_data_dt0.id === cert_ref01_data.id);
        // REMOVE
        const cert_ref01_match_rm0 = { id: cert_ref01_data.id };
        await cert_ref01_ent.remove(cert_ref01_match_rm0);
        // LIST
        const cert_ref01_match_rt0 = {};
        const cert_ref01_list_rt0 = (await cert_ref01_ent.list(cert_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(cert_ref01_list_rt0, { id: cert_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cert/CertTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VercelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cert01', 'cert02', 'cert03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VERCEL_TEST_CERT_ENTID': idmap,
        'VERCEL_TEST_LIVE': 'FALSE',
        'VERCEL_TEST_EXPLAIN': 'FALSE',
        'VERCEL_APIKEY': '',
    });
    idmap = env['VERCEL_TEST_CERT_ENTID'];
    const live = 'TRUE' === env.VERCEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VERCEL_TEST_CERT_ENTID'];
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
//# sourceMappingURL=CertEntity.test.js.map