
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


describe('ToggleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Toggle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"value","req":true,"type":"`$BOOLEAN`","index$":0}],"name":"toggle","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"project_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /speed-insights/toggle","json":"{\"operationId\":\"createSpeedInsightsToggle\",\"parameters\":[{\"in\":\"query\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"value\":{\"type\":\"boolean\"}},\"required\":[\"value\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"value\":{\"enum\":[false,true],\"type\":\"boolean\"}},\"required\":[\"value\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/speed-insights/toggle","segments":[{"lit":"speed-insights"},{"lit":"toggle"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"project_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /web/insights/toggle","json":"{\"operationId\":\"createWebInsightsToggle\",\"parameters\":[{\"in\":\"query\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"value\":{\"type\":\"boolean\"}},\"required\":[\"value\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"value\":{\"enum\":[false,true],\"type\":\"boolean\"}},\"required\":[\"value\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/web/insights/toggle","segments":[{"lit":"web"},{"lit":"insights"},{"lit":"toggle"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"toggle","name__orig":"toggle","Name":"Toggle","name_":"toggle","name-":"toggle","NAME":"TOGGLE","index$":61}, {"active":true,"entity":"toggle","key$":"BasicToggleFlow","kind":"basic","name":"BasicToggleFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"toggle_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Toggle')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const toggle_ref01_ent = client.Toggle()
    let toggle_ref01_data = setup.data.new.toggle['toggle_ref01']

    toggle_ref01_data = (await toggle_ref01_ent.create(toggle_ref01_data)).data()
    assert(null != toggle_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/toggle/ToggleTestData.json')

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
    ['toggle01','toggle02','toggle03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_TOGGLE_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_TOGGLE_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_TOGGLE_ENTID']
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
  
