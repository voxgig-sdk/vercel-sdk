
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


describe('VcrRepositoryListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.VcrRepositoryList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"createdAt","req":true,"short":"ISO 8601 timestamp of when the repository was created.","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":true,"short":"Unique identifier of the repository.","type":"`$STRING`","index$":1},{"active":true,"name":"name","req":true,"short":"Name of the repository.","type":"`$STRING`","index$":2},{"active":true,"name":"projectId","req":true,"short":"Identifier of the project the repository belongs to.","type":"`$STRING`","index$":3},{"active":true,"name":"public","req":true,"short":"Whether the repository is public.","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"updatedAt","req":true,"short":"ISO 8601 timestamp of when the repository was last updated.","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"vcr_repository_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"project_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /v1/vcr/repository","json":"{\"operationId\":\"listRepositories\",\"parameters\":[{\"description\":\"Project ID or name (slug) within the authenticated team. IDs take precedence over names. Missing or empty values return HTTP 400.\",\"in\":\"query\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"description\":\"Project ID or name (slug) within the authenticated team. IDs take precedence over names. Missing or empty values return HTTP 400.\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Opaque pagination cursor returned by a previous list response.\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"description\":\"Opaque pagination cursor returned by a previous list response.\",\"maxLength\":1024,\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A paginated list of Vercel Container Registry repositories.\",\"properties\":{\"nextCursor\":{\"description\":\"Cursor to fetch the next page of results, when more are available.\",\"type\":\"string\"},\"repositories\":{\"items\":{\"description\":\"A Vercel Container Registry repository.\",\"properties\":{\"createdAt\":{\"description\":\"ISO 8601 timestamp of when the repository was created.\",\"example\":\"2026-06-30T10:00:00.000Z\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the repository.\",\"example\":\"repo_a1b2c3d4e5f6\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the repository.\",\"example\":\"my-app\",\"type\":\"string\"},\"projectId\":{\"description\":\"Identifier of the project the repository belongs to.\",\"example\":\"prj_a1b2c3d4e5f6\",\"type\":\"string\"},\"public\":{\"description\":\"Whether the repository is public. Images in public repositories can be pulled by anyone. Defaults to `false` (private).\",\"enum\":[false,true],\"example\":false,\"type\":\"boolean\"},\"updatedAt\":{\"description\":\"ISO 8601 timestamp of when the repository was last updated.\",\"example\":\"2026-06-30T10:00:00.000Z\",\"type\":\"string\"}},\"required\":[\"createdAt\",\"id\",\"name\",\"projectId\",\"public\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"repositories\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/vcr/repository","segments":[{"lit":"v1"},{"lit":"vcr"},{"lit":"repository"}],"select":{"exist":["cursor","limit","project_id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body.repositories`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"vcr_repository_list","name__orig":"vcr_repository_list","Name":"VcrRepositoryList","name_":"vcr_repository_list","name-":"vcr-repository-list","NAME":"VCR_REPOSITORY_LIST","index$":65}, {"active":true,"entity":"vcr_repository_list","key$":"BasicVcrRepositoryListFlow","kind":"basic","name":"BasicVcrRepositoryListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"vcr_repository_list_ref01"}}],"index$":0}]}, 'VcrRepositoryList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let vcr_repository_list_ref01_data = Object.values(setup.data.existing.vcr_repository_list)[0]

    // LIST
    const vcr_repository_list_ref01_ent = client.VcrRepositoryList()
    const vcr_repository_list_ref01_match = {}

    const vcr_repository_list_ref01_list = (await vcr_repository_list_ref01_ent.list(vcr_repository_list_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/vcr_repository_list/VcrRepositoryListTestData.json')

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
    ['vcr_repository_list01','vcr_repository_list02','vcr_repository_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_VCR_REPOSITORY_LIST_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_VCR_REPOSITORY_LIST_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_VCR_REPOSITORY_LIST_ENTID']
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
  
