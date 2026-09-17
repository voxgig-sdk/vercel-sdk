
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


describe('EdgeCacheEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.EdgeCache()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"edge_cache","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"project_id_or_name","orig":"project_id_or_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"POST /v1/edge-cache/dangerously-delete-by-src-images","json":"{\"operationId\":\"dangerouslyDeleteBySrcImages\",\"parameters\":[{\"in\":\"query\",\"name\":\"projectIdOrName\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"revalidationDeadlineSeconds\":{\"maximum\":31536000,\"minimum\":0,\"type\":\"integer\"},\"srcImages\":{\"items\":{\"type\":\"string\"},\"maxItems\":8,\"minItems\":1,\"type\":\"array\"}},\"required\":[\"srcImages\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/edge-cache/dangerously-delete-by-src-images","segments":[{"lit":"v1"},{"lit":"edge-cache"},{"lit":"dangerously-delete-by-src-images"}],"select":{"$action":"dangerously_delete_by_src_image","exist":["project_id_or_name","slug","team_id"]},"transform":{"req":{"revalidationDeadlineSeconds":"`reqdata.revalidation_deadline_second`","srcImages":"`reqdata.src_image`"},"res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"project_id_or_name","orig":"project_id_or_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"POST /v1/edge-cache/dangerously-delete-by-tags","json":"{\"operationId\":\"dangerouslyDeleteByTags\",\"parameters\":[{\"in\":\"query\",\"name\":\"projectIdOrName\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"revalidationDeadlineSeconds\":{\"maximum\":31536000,\"minimum\":0,\"type\":\"integer\"},\"tags\":{\"oneOf\":[{\"items\":{\"maxLength\":256,\"type\":\"string\"},\"maxItems\":16,\"minItems\":1,\"type\":\"array\"},{\"maxLength\":8196,\"type\":\"string\"}]},\"target\":{\"enum\":[\"production\",\"preview\"],\"type\":\"string\"}},\"required\":[\"tags\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/edge-cache/dangerously-delete-by-tags","segments":[{"lit":"v1"},{"lit":"edge-cache"},{"lit":"dangerously-delete-by-tags"}],"select":{"$action":"dangerously_delete_by_tag","exist":["project_id_or_name","slug","team_id"]},"transform":{"req":{"revalidationDeadlineSeconds":"`reqdata.revalidation_deadline_second`","tags":"`reqdata.tag`","target":"`reqdata.target`"},"res":"`body`"},"index$":1},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"project_id_or_name","orig":"project_id_or_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"POST /v1/edge-cache/invalidate-by-src-images","json":"{\"operationId\":\"invalidateBySrcImages\",\"parameters\":[{\"in\":\"query\",\"name\":\"projectIdOrName\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"srcImages\":{\"items\":{\"type\":\"string\"},\"maxItems\":8,\"minItems\":1,\"type\":\"array\"}},\"required\":[\"srcImages\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/edge-cache/invalidate-by-src-images","segments":[{"lit":"v1"},{"lit":"edge-cache"},{"lit":"invalidate-by-src-images"}],"select":{"$action":"invalidate_by_src_image","exist":["project_id_or_name","slug","team_id"]},"transform":{"req":{"srcImages":"`reqdata.src_image`"},"res":"`body`"},"index$":2},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"project_id_or_name","orig":"project_id_or_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"POST /v1/edge-cache/invalidate-by-tags","json":"{\"operationId\":\"invalidateByTags\",\"parameters\":[{\"in\":\"query\",\"name\":\"projectIdOrName\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"tags\":{\"oneOf\":[{\"items\":{\"maxLength\":256,\"type\":\"string\"},\"maxItems\":16,\"minItems\":1,\"type\":\"array\"},{\"maxLength\":8196,\"type\":\"string\"}]},\"target\":{\"enum\":[\"production\",\"preview\"],\"type\":\"string\"}},\"required\":[\"tags\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/edge-cache/invalidate-by-tags","segments":[{"lit":"v1"},{"lit":"edge-cache"},{"lit":"invalidate-by-tags"}],"select":{"$action":"invalidate_by_tag","exist":["project_id_or_name","slug","team_id"]},"transform":{"req":{"tags":"`reqdata.tag`","target":"`reqdata.target`"},"res":"`body`"},"index$":3}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"edge_cache","name__orig":"edge_cache","Name":"EdgeCache","name_":"edge_cache","name-":"edge-cache","NAME":"EDGE_CACHE","index$":27}, {"active":true,"entity":"edge_cache","key$":"BasicEdgeCacheFlow","kind":"basic","name":"BasicEdgeCacheFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"edge_cache_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'EdgeCache')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const edge_cache_ref01_ent = client.EdgeCache()
    let edge_cache_ref01_data = setup.data.new.edge_cache['edge_cache_ref01']

    edge_cache_ref01_data = (await edge_cache_ref01_ent.create(edge_cache_ref01_data)).data()
    assert(null != edge_cache_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/edge_cache/EdgeCacheTestData.json')

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
    ['edge_cache01','edge_cache02','edge_cache03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_EDGE_CACHE_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_EDGE_CACHE_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_EDGE_CACHE_ENTID']
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
  
