

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


describe('QueryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Query()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VERCEL_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'query.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"aggregation","req":false,"short":"Aggregation function to apply.","type":"`$STRING`","index$":0},{"active":true,"name":"bucketTimezone","req":false,"short":"IANA timezone (e.g.","type":"`$STRING`","index$":1},{"active":true,"name":"endTime","req":false,"short":"End timestamp","type":"`$STRING`","index$":2},{"active":true,"name":"filter","req":false,"short":"Filter to apply to the query.","type":"`$STRING`","index$":3},{"active":true,"name":"granularity","req":false,"short":"Time bucket size","type":"`$OBJECT`","index$":4},{"active":true,"name":"groupBy","req":false,"short":"Dimensions to group results by.","type":"`$ARRAY`","index$":5},{"active":true,"name":"limit","req":false,"short":"Maximum number of results","type":"`$NUMBER`","index$":6},{"active":true,"name":"metric","req":true,"short":"Metric id","type":"`$STRING`","index$":7},{"active":true,"name":"orderBy","req":false,"short":"Rollup column to order grouped results by.","type":"`$STRING`","index$":8},{"active":true,"name":"orderDirection","req":false,"short":"Direction to order grouped results by.","type":"`$STRING`","index$":9},{"active":true,"name":"scope","req":true,"short":"Owner or project scope for the query","type":"`$OBJECT`","index$":10},{"active":true,"name":"startTime","req":false,"short":"Start timestamp","type":"`$STRING`","index$":11}],"name":"query","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /v2/observability/query","json":"{\"operationId\":\"createObservabilityQuery\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":true,\"properties\":{\"aggregation\":{\"description\":\"Aggregation function to apply. Some aggregations require a dimension: use <agg>/<dimension>, for example unique/visitor_id.\",\"type\":\"string\"},\"bucketTimezone\":{\"description\":\"IANA timezone (e.g. Europe/Paris) used only to align calendar buckets (1d/1mo) to that zone's day/month boundaries. startTime/endTime and all output timestamps are always UTC. No effect on sub-day granularities.\",\"type\":\"string\"},\"endTime\":{\"description\":\"End timestamp\",\"type\":\"string\"},\"filter\":{\"description\":\"Filter to apply to the query. JSON dimensions support nested refs, for example event_data/checkout_step eq 'payment'. Nested keys containing characters that OData cannot parse as an identifier, such as '-', spaces, quotes, or '/', must be wrapped in single quotes (escape embedded single quotes by doubling them), for example flags/'enable-comments-view' eq true or event_data/'some property''s/value' eq true.\",\"type\":\"string\"},\"granularity\":{\"description\":\"Time bucket size\",\"type\":\"object\"},\"groupBy\":{\"description\":\"Dimensions to group results by. JSON dimensions support nested refs, for example event_data/checkout_step. Nested keys containing characters that OData cannot parse as an identifier, such as '-', spaces, quotes, or '/', must be wrapped in single quotes (escape embedded single quotes by doubling them), for example flags/'enable-comments-view' or event_data/'some property''s/value'.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"limit\":{\"description\":\"Maximum number of results\",\"type\":\"number\"},\"metric\":{\"description\":\"Metric id\",\"type\":\"string\"},\"orderBy\":{\"description\":\"Rollup column to order grouped results by. Use the generated rollup key for the requested metric and aggregation. Defaults to the query engine count rollup.\",\"type\":\"string\"},\"orderDirection\":{\"description\":\"Direction to order grouped results by. Defaults to desc.\",\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"scope\":{\"description\":\"Owner or project scope for the query\",\"type\":\"object\"},\"startTime\":{\"description\":\"Start timestamp\",\"type\":\"string\"}},\"required\":[\"metric\",\"scope\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"408\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"413\":{\"description\":\"\"},\"422\":{\"description\":\"\"},\"500\":{\"description\":\"\"},\"503\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/observability/query","segments":[{"lit":"v2"},{"lit":"observability"},{"lit":"query"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"query","name__orig":"query","Name":"Query","name_":"query","name-":"query","NAME":"QUERY","index$":51}, {"active":true,"entity":"query","key$":"BasicQueryFlow","kind":"basic","name":"BasicQueryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"query_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Query')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const query_ref01_ent = client.Query()
    let query_ref01_data = setup.data.new.query['query_ref01']

    query_ref01_data = (await query_ref01_ent.create(query_ref01_data)).data()
    assert(null != query_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/query/QueryTestData.json')

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
    ['query01','query02','query03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_QUERY_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_QUERY_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_QUERY_ENTID']
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
  
