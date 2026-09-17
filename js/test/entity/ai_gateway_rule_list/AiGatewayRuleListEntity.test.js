
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


describe('AiGatewayRuleListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.AiGatewayRuleList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"action","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"createdAt","req":true,"type":"`$NUMBER`","index$":1},{"active":true,"name":"createdBy","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"deleted","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"enabled","req":true,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"match","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"ownerId","req":true,"type":"`$STRING`","index$":7},{"active":true,"name":"ruleId","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"type","req":true,"type":"`$STRING`","index$":9},{"active":true,"name":"updatedAt","req":true,"type":"`$NUMBER`","index$":10},{"active":true,"name":"updatedBy","req":false,"type":"`$STRING`","index$":11}],"name":"ai_gateway_rule_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"include_disabled","orig":"include_disabled","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /v1/ai-gateway/rules","json":"{\"operationId\":\"listAiGatewayRules\",\"parameters\":[{\"in\":\"query\",\"name\":\"includeDisabled\",\"schema\":{\"enum\":[\"true\",\"false\"],\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"rules\":{\"items\":{\"description\":\"Public response shape for AI Gateway routing rules. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.\",\"properties\":{\"action\":{\"properties\":{\"reason\":{\"type\":\"string\"},\"rewriteModel\":{\"type\":\"string\"}},\"type\":\"object\"},\"createdAt\":{\"type\":\"number\"},\"createdBy\":{\"type\":\"string\"},\"deleted\":{\"enum\":[false,true],\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"enabled\":{\"enum\":[false,true],\"type\":\"boolean\"},\"match\":{\"properties\":{\"model\":{\"type\":\"string\"}},\"type\":\"object\"},\"ownerId\":{\"type\":\"string\"},\"ruleId\":{\"type\":\"string\"},\"type\":{\"enum\":[\"deny\",\"rewrite\"],\"type\":\"string\"},\"updatedAt\":{\"type\":\"number\"},\"updatedBy\":{\"type\":\"string\"}},\"required\":[\"createdAt\",\"enabled\",\"ownerId\",\"ruleId\",\"type\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"rules\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/ai-gateway/rules","segments":[{"lit":"v1"},{"lit":"ai-gateway"},{"lit":"rules"}],"select":{"exist":["include_disabled","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body.rules`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"ai_gateway_rule_list","name__orig":"ai_gateway_rule_list","Name":"AiGatewayRuleList","name_":"ai_gateway_rule_list","name-":"ai-gateway-rule-list","NAME":"AI_GATEWAY_RULE_LIST","index$":3}, {"active":true,"entity":"ai_gateway_rule_list","key$":"BasicAiGatewayRuleListFlow","kind":"basic","name":"BasicAiGatewayRuleListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"ai_gateway_rule_list_ref01"}}],"index$":0}]}, 'AiGatewayRuleList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ai_gateway_rule_list_ref01_data = Object.values(setup.data.existing.ai_gateway_rule_list)[0]

    // LIST
    const ai_gateway_rule_list_ref01_ent = client.AiGatewayRuleList()
    const ai_gateway_rule_list_ref01_match = {}

    const ai_gateway_rule_list_ref01_list = (await ai_gateway_rule_list_ref01_ent.list(ai_gateway_rule_list_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/ai_gateway_rule_list/AiGatewayRuleListTestData.json')

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
    ['ai_gateway_rule_list01','ai_gateway_rule_list02','ai_gateway_rule_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_AI_GATEWAY_RULE_LIST_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_AI_GATEWAY_RULE_LIST_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_AI_GATEWAY_RULE_LIST_ENTID']
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
  
