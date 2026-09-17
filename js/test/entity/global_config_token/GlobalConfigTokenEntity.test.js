
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { VercelSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('GlobalConfigTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.GlobalConfigToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"createdAt","req":true,"type":"`$NUMBER`","index$":0},{"active":true,"name":"edgeConfigId","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":true,"short":"This is not the token itself, but rather an id to identify the token by","type":"`$STRING`","index$":2},{"active":true,"name":"label","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"partialToken","req":true,"short":"A partially-masked representation of the token, safe to display in UIs.","type":"`$STRING`","index$":4},{"active":true,"name":"token","req":false,"short":"Deprecated: the full, plaintext token.","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"global_config_token","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"global_config_id","orig":"edge_config_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"token","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v1/global-config/{edgeConfigId}/token/{token}","json":"{\"operationId\":\"getEdgeConfigToken\",\"parameters\":[{\"in\":\"path\",\"name\":\"edgeConfigId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The Global Config.\",\"properties\":{\"createdAt\":{\"type\":\"number\"},\"edgeConfigId\":{\"type\":\"string\"},\"id\":{\"description\":\"This is not the token itself, but rather an id to identify the token by\",\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"partialToken\":{\"description\":\"A partially-masked representation of the token, safe to display in UIs. The format is the first 3 characters of the token followed by a fixed 8-character `*` mask (e.g. `550e8400-e29b-41d4-a716-446655440000` → `550********`). The mask length is intentionally fixed (not proportional to the original token length) to avoid leaking the token length. Prefer this field for display/reference in UIs and logs. The full, plaintext token is only disclosed once at creation time via `POST /v1/edge-config/:edgeConfigId/token`; use `id` to reference a token in subsequent calls (e.g. when deleting).\",\"type\":\"string\"},\"token\":{\"description\":\"Deprecated: the full, plaintext token. - Returned once by `POST /v1/edge-config/:edgeConfigId/token` (create). - Still returned by `GET /v1/edge-config/:edgeConfigId/token/:token` (detail) for backwards compatibility, but scheduled for removal. - **Not** returned by `GET /v1/edge-config/:edgeConfigId/tokens` (list); use `partialToken` for display and `id` to reference tokens. Do not rely on this field being present on read operations. Prefer `partialToken` for display and `id` for references.\",\"type\":\"string\"}},\"required\":[\"createdAt\",\"edgeConfigId\",\"id\",\"label\",\"partialToken\"],\"type\":\"object\"}}},\"description\":\"The Global Config.\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/global-config/{edgeConfigId}/token/{token}","rename":{"param":{"edgeConfigId":"global_config_id","token":"id"}},"segments":[{"lit":"v1"},{"lit":"global-config"},{"var":"global_config_id"},{"lit":"token"},{"var":"id"}],"select":{"exist":["global_config_id","id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"edge_config_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v1/global-config/{edgeConfigId}/tokens","json":"{\"operationId\":\"getEdgeConfigTokens\",\"parameters\":[{\"in\":\"path\",\"name\":\"edgeConfigId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The Global Config.\",\"properties\":{\"createdAt\":{\"type\":\"number\"},\"edgeConfigId\":{\"type\":\"string\"},\"id\":{\"description\":\"This is not the token itself, but rather an id to identify the token by\",\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"partialToken\":{\"description\":\"A partially-masked representation of the token, safe to display in UIs. The format is the first 3 characters of the token followed by a fixed 8-character `*` mask (e.g. `550e8400-e29b-41d4-a716-446655440000` → `550********`). The mask length is intentionally fixed (not proportional to the original token length) to avoid leaking the token length. Prefer this field for display/reference in UIs and logs. The full, plaintext token is only disclosed once at creation time via `POST /v1/edge-config/:edgeConfigId/token`; use `id` to reference a token in subsequent calls (e.g. when deleting).\",\"type\":\"string\"},\"token\":{\"description\":\"Deprecated: the full, plaintext token. - Returned once by `POST /v1/edge-config/:edgeConfigId/token` (create). - Still returned by `GET /v1/edge-config/:edgeConfigId/token/:token` (detail) for backwards compatibility, but scheduled for removal. - **Not** returned by `GET /v1/edge-config/:edgeConfigId/tokens` (list); use `partialToken` for display and `id` to reference tokens. Do not rely on this field being present on read operations. Prefer `partialToken` for display and `id` for references.\",\"type\":\"string\"}},\"required\":[\"createdAt\",\"edgeConfigId\",\"id\",\"label\",\"partialToken\"],\"type\":\"object\"}}},\"description\":\"The Global Config.\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/global-config/{edgeConfigId}/tokens","rename":{"param":{"edgeConfigId":"id"}},"segments":[{"lit":"v1"},{"lit":"global-config"},{"var":"id"},{"lit":"tokens"}],"select":{"exist":["id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["global_config"]]},"key$":"global_config_token","name__orig":"global_config_token","Name":"GlobalConfigToken","name_":"global_config_token","name-":"global-config-token","NAME":"GLOBAL_CONFIG_TOKEN","index$":36}, {"active":true,"entity":"global_config_token","key$":"BasicGlobalConfigTokenFlow","kind":"basic","name":"BasicGlobalConfigTokenFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"global_config_token_ref01","srcdatavar":"global_config_token_ref01_data","suffix":"_dt0"},"match":{"id":"global_config_token01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-global_config_token_ref01"}}],"index$":0}]}, 'GlobalConfigToken')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let global_config_token_ref01_data = Object.values(setup.data.existing.global_config_token)[0]

    // LOAD
    const global_config_token_ref01_ent = client.GlobalConfigToken()
    const global_config_token_ref01_match_dt0 = {}
    global_config_token_ref01_match_dt0.id = global_config_token_ref01_data.id
    const global_config_token_ref01_data_dt0 = (await global_config_token_ref01_ent.load(global_config_token_ref01_match_dt0)).data()
    assert(global_config_token_ref01_data_dt0.id === global_config_token_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/global_config_token/GlobalConfigTokenTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = VercelSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['global_config_token01','global_config_token02','global_config_token03','global_config01','global_config02','global_config03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_GLOBAL_CONFIG_TOKEN_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_GLOBAL_CONFIG_TOKEN_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_GLOBAL_CONFIG_TOKEN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new VercelSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.VERCEL_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
