
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


describe('TldNameEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.TldName()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"tld_name","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/registrar/tlds/supported","json":"{\"operationId\":\"getSupportedTlds\",\"parameters\":[{\"in\":\"query\",\"name\":\"teamId\",\"required\":false,\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A list of the TLDs supported by Vercel.\",\"items\":{\"description\":\"A valid TLD name\",\"type\":\"string\"},\"type\":\"array\"}}},\"description\":\"A list of the TLDs supported by Vercel.\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"The request did not match the expected schema\",\"properties\":{\"issues\":{\"items\":{\"additionalProperties\":false,\"description\":\"Represents an error encountered while parsing a value to match the schema\",\"properties\":{\"message\":{\"description\":\"A descriptive message explaining the issue\",\"type\":\"string\"},\"path\":{\"description\":\"The path to the property where the issue occurred\",\"items\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"number\"},{\"additionalProperties\":false,\"description\":\"an object to be decoded into a globally shared symbol\",\"properties\":{\"_tag\":{\"enum\":[\"symbol\"],\"type\":\"string\"},\"key\":{\"type\":\"string\"}},\"required\":[\"_tag\",\"key\"],\"type\":\"object\"}]},\"type\":\"array\"}},\"required\":[\"path\",\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"required\":[\"issues\",\"message\"],\"type\":\"object\"}}},\"description\":\"There was something wrong with the request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"enum\":[\"unauthorized\"],\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"reason\":{\"type\":\"string\"},\"status\":{\"enum\":[401],\"type\":\"number\"}},\"required\":[\"status\",\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"enum\":[\"not_authorized_for_scope\"],\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"status\":{\"enum\":[403],\"type\":\"number\"}},\"required\":[\"status\",\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"NotAuthorizedForScope\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"enum\":[\"too_many_requests\"],\"type\":\"string\"},\"limit\":{\"additionalProperties\":false,\"properties\":{\"remaining\":{\"type\":\"number\"},\"reset\":{\"type\":\"number\"},\"total\":{\"type\":\"number\"}},\"required\":[\"total\",\"remaining\",\"reset\"],\"type\":\"object\"},\"message\":{\"type\":\"string\"},\"retryAfter\":{\"additionalProperties\":false,\"properties\":{\"str\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"required\":[\"value\",\"str\"],\"type\":\"object\"},\"status\":{\"enum\":[429],\"type\":\"number\"}},\"required\":[\"status\",\"code\",\"message\",\"retryAfter\",\"limit\"],\"type\":\"object\"}}},\"description\":\"TooManyRequests\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"enum\":[\"internal_server_error\"],\"type\":\"string\"},\"message\":{\"type\":\"string\"},\"status\":{\"enum\":[500],\"type\":\"number\"}},\"required\":[\"status\",\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"InternalServerError\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/registrar/tlds/supported","segments":[{"lit":"v1"},{"lit":"registrar"},{"lit":"tlds"},{"lit":"supported"}],"select":{"exist":["team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tld_name","name__orig":"tld_name","Name":"TldName","name_":"tld_name","name-":"tld-name","NAME":"TLD_NAME","index$":60}, {"active":true,"entity":"tld_name","key$":"BasicTldNameFlow","kind":"basic","name":"BasicTldNameFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"tld_name_ref01"}}],"index$":0}]}, 'TldName')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tld_name_ref01_data = Object.values(setup.data.existing.tld_name)[0]

    // LIST
    const tld_name_ref01_ent = client.TldName()
    const tld_name_ref01_match = {}

    const tld_name_ref01_list = (await tld_name_ref01_ent.list(tld_name_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/tld_name/TldNameTestData.json')

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
    ['tld_name01','tld_name02','tld_name03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_TLD_NAME_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_TLD_NAME_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_TLD_NAME_ENTID']
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
  
