

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { VercelSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SchemaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Schema()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VERCEL_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'schema.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"aggregations","req":true,"type":"`$ARRAY`","index$":0},{"active":true,"name":"defaultAggregation","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"description","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"dimensions","req":true,"type":"`$ARRAY`","index$":3},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"unit","req":true,"type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"schema","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v2/observability/schema","json":"{\"operationId\":\"getObservabilitySchema\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"metrics\":{\"items\":{\"properties\":{\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"}},\"required\":[\"description\",\"id\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"metrics\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/observability/schema","segments":[{"lit":"v2"},{"lit":"observability"},{"lit":"schema"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.metrics`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"metric_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v2/observability/schema/{metricId}","json":"{\"operationId\":\"getObservabilitySchemaByMetricId\",\"parameters\":[{\"in\":\"path\",\"name\":\"metricId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"aggregations\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"defaultAggregation\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"dimensions\":{\"items\":{\"properties\":{\"description\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"required\":[\"label\",\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"type\":\"string\"},\"unit\":{\"type\":\"string\"}},\"required\":[\"aggregations\",\"defaultAggregation\",\"description\",\"dimensions\",\"id\",\"unit\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v2/observability/schema/{metricId}","rename":{"param":{"metricId":"id"}},"segments":[{"lit":"v2"},{"lit":"observability"},{"lit":"schema"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"schema","name__orig":"schema","Name":"Schema","name_":"schema","name-":"schema","NAME":"SCHEMA","index$":55}, {"active":true,"entity":"schema","key$":"BasicSchemaFlow","kind":"basic","name":"BasicSchemaFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"schema_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"schema_ref01","srcdatavar":"schema_ref01_data","suffix":"_dt0"},"match":{"id":"schema01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schema_ref01"}}],"index$":1}]}, 'Schema')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let schema_ref01_data = Object.values(setup.data.existing.schema)[0] as any

    // LIST
    const schema_ref01_ent = client.Schema()
    const schema_ref01_match: any = {}

    const schema_ref01_list = (await schema_ref01_ent.list(schema_ref01_match)).map((e: any) => e.data())


    // LOAD
    const schema_ref01_match_dt0: any = {}
    schema_ref01_match_dt0.id = schema_ref01_data.id
    const schema_ref01_data_dt0 = (await schema_ref01_ent.load(schema_ref01_match_dt0)).data()
    assert(schema_ref01_data_dt0.id === schema_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/schema/SchemaTestData.json')

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
    ['schema01','schema02','schema03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_SCHEMA_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_SCHEMA_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_SCHEMA_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
