
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


describe('RecordEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Record()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"comment","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"createdAt","req":false,"type":"`$NUMBER`","index$":1},{"active":true,"name":"creator","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"domain","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"recordType","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"ttl","req":false,"type":"`$NUMBER`","index$":7},{"active":true,"name":"type","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"value","req":true,"type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"record","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"record_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /domains/records/{recordId}","json":"{\"operationId\":\"getDomainsRecordsByRecordId\",\"parameters\":[{\"description\":\"The unique ID of the DNS record\",\"in\":\"path\",\"name\":\"recordId\",\"required\":true,\"schema\":{\"description\":\"The unique ID of the DNS record\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"comment\":{\"type\":\"string\"},\"createdAt\":{\"nullable\":true,\"type\":\"number\"},\"creator\":{\"type\":\"string\"},\"domain\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"recordType\":{\"enum\":[\"A\",\"AAAA\",\"ALIAS\",\"CAA\",\"CNAME\",\"HTTPS\",\"MX\",\"NS\",\"SRV\",\"TXT\"],\"type\":\"string\"},\"ttl\":{\"type\":\"number\"},\"type\":{\"enum\":[\"A\",\"AAAA\",\"ALIAS\",\"CAA\",\"CNAME\",\"HTTPS\",\"MX\",\"NS\",\"SRV\",\"TXT\"],\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"required\":[\"creator\",\"domain\",\"id\",\"name\",\"recordType\",\"type\",\"value\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/domains/records/{recordId}","rename":{"param":{"recordId":"id"}},"segments":[{"lit":"domains"},{"lit":"records"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"record","name__orig":"record","Name":"Record","name_":"record","name-":"record","NAME":"RECORD","index$":52}, {"active":true,"entity":"record","key$":"BasicRecordFlow","kind":"basic","name":"BasicRecordFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"record_ref01","srcdatavar":"record_ref01_data","suffix":"_dt0"},"match":{"id":"record01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-record_ref01"}}],"index$":0}]}, 'Record')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let record_ref01_data = Object.values(setup.data.existing.record)[0]

    // LOAD
    const record_ref01_ent = client.Record()
    const record_ref01_match_dt0 = {}
    record_ref01_match_dt0.id = record_ref01_data.id
    const record_ref01_data_dt0 = (await record_ref01_ent.load(record_ref01_match_dt0)).data()
    assert(record_ref01_data_dt0.id === record_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/record/RecordTestData.json')

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
    ['record01','record02','record03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_RECORD_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_RECORD_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_RECORD_ENTID']
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
  
