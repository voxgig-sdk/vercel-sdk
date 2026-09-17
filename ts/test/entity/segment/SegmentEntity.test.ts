

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


describe('SegmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Segment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VERCEL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'segment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"createdAt","req":true,"type":"`$NUMBER`","index$":0},{"active":true,"name":"createdBy","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"data","req":true,"type":"`$OBJECT`","union":{"branches":5,"count":4,"depth":13},"index$":2},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"hint","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"label","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"metadata","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"projectId","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"slug","req":true,"type":"`$STRING`","index$":9},{"active":true,"name":"typeName","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"updatedAt","req":true,"type":"`$NUMBER`","index$":11},{"active":true,"name":"usedByFlags","req":false,"type":"`$ARRAY`","index$":12},{"active":true,"name":"usedBySegments","req":false,"type":"`$ARRAY`","index$":13}],"id":{"field":"id","name":"id"},"name":"segment","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"segment_id_or_slug","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"project_id_or_name","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":false,"kind":"query","name":"with_metadata","orig":"with_metadata","reqd":false,"type":"`$BOOLEAN`","index$":2}]},"contract":{"id":"GET /v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}","json":"{\"operationId\":\"getFlagSegment\",\"parameters\":[{\"description\":\"The project id or name\",\"in\":\"path\",\"name\":\"projectIdOrName\",\"required\":true,\"schema\":{\"description\":\"The project id or name\",\"type\":\"string\"}},{\"description\":\"The segment slug\",\"in\":\"path\",\"name\":\"segmentIdOrSlug\",\"required\":true,\"schema\":{\"description\":\"The segment slug\",\"type\":\"string\"}},{\"description\":\"Whether to include metadata\",\"in\":\"query\",\"name\":\"withMetadata\",\"required\":false,\"schema\":{\"default\":false,\"description\":\"Whether to include metadata\",\"type\":\"boolean\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"createdAt\":{\"type\":\"number\"},\"createdBy\":{\"type\":\"string\"},\"data\":{\"properties\":{\"exclude\":{\"additionalProperties\":{\"additionalProperties\":{\"items\":{\"properties\":{\"note\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"required\":[\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"type\":\"object\"},\"type\":\"object\"},\"include\":{\"additionalProperties\":{\"additionalProperties\":{\"items\":{\"properties\":{\"note\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"required\":[\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"type\":\"object\"},\"type\":\"object\"},\"rules\":{\"items\":{\"properties\":{\"conditions\":{\"items\":{\"properties\":{\"cmp\":{\"enum\":[\"!contains\",\"!endsWith\",\"!eq\",\"!ex\",\"!oneOf\",\"!regex\",\"!startsWith\",\"after\",\"before\",\"contains\",\"containsAllOf\",\"containsAnyOf\",\"containsNoneOf\",\"endsWith\",\"eq\",\"ex\",\"gt\",\"gte\",\"lt\",\"lte\",\"oneOf\",\"regex\",\"startsWith\"],\"type\":\"string\"},\"cmpOptions\":{\"properties\":{\"ignoreCase\":{\"enum\":[false,true],\"type\":\"boolean\"}},\"type\":\"object\"},\"lhs\":{\"oneOf\":[{\"properties\":{\"type\":{\"enum\":[\"segment\"],\"type\":\"string\"}},\"required\":[\"type\"],\"type\":\"object\"},{\"properties\":{\"attribute\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"type\":{\"enum\":[\"entity\"],\"type\":\"string\"}},\"required\":[\"attribute\",\"kind\",\"type\"],\"type\":\"object\"}]},\"rhs\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"number\"},{\"properties\":{\"items\":{\"items\":{\"oneOf\":[{\"properties\":{\"label\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"required\":[\"value\"],\"type\":\"object\"},{\"properties\":{\"label\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"required\":[\"value\"],\"type\":\"object\"}]},\"type\":\"array\"},\"type\":{\"enum\":[\"list\",\"list/inline\"],\"type\":\"string\"}},\"required\":[\"items\",\"type\"],\"type\":\"object\"},{\"properties\":{\"flags\":{\"type\":\"string\"},\"pattern\":{\"type\":\"string\"},\"type\":{\"enum\":[\"regex\"],\"type\":\"string\"}},\"required\":[\"flags\",\"pattern\",\"type\"],\"type\":\"object\"},{\"enum\":[false,true],\"type\":\"boolean\"}]}},\"required\":[\"cmp\",\"lhs\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"type\":\"string\"},\"outcome\":{\"oneOf\":[{\"properties\":{\"type\":{\"enum\":[\"all\"],\"type\":\"string\"}},\"required\":[\"type\"],\"type\":\"object\"},{\"properties\":{\"base\":{\"properties\":{\"attribute\":{\"type\":\"string\"},\"kind\":{\"type\":\"string\"},\"type\":{\"enum\":[\"entity\"],\"type\":\"string\"}},\"required\":[\"attribute\",\"kind\",\"type\"],\"type\":\"object\"},\"passPromille\":{\"type\":\"number\"},\"type\":{\"enum\":[\"split\"],\"type\":\"string\"}},\"required\":[\"base\",\"passPromille\",\"type\"],\"type\":\"object\"}]}},\"required\":[\"conditions\",\"id\",\"outcome\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"description\":{\"type\":\"string\"},\"hint\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"metadata\":{\"properties\":{\"creator\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"}},\"type\":\"object\"},\"projectId\":{\"type\":\"string\"},\"slug\":{\"type\":\"string\"},\"typeName\":{\"enum\":[\"segment\"],\"type\":\"string\"},\"updatedAt\":{\"type\":\"number\"},\"usedByFlags\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"usedBySegments\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"createdAt\",\"data\",\"hint\",\"id\",\"label\",\"projectId\",\"slug\",\"typeName\",\"updatedAt\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}","rename":{"param":{"projectIdOrName":"project_id","segmentIdOrSlug":"id"}},"segments":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"feature-flags"},{"lit":"segments"},{"var":"id"}],"select":{"exist":["id","project_id","slug","team_id","with_metadata"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project"]]},"key$":"segment","name__orig":"segment","Name":"Segment","name_":"segment","name-":"segment","NAME":"SEGMENT","index$":57}, {"active":true,"entity":"segment","key$":"BasicSegmentFlow","kind":"basic","name":"BasicSegmentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"segment_ref01","srcdatavar":"segment_ref01_data","suffix":"_dt0"},"match":{"id":"segment01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-segment_ref01"}}],"index$":0}]}, 'Segment')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let segment_ref01_data = Object.values(setup.data.existing.segment)[0] as any

    // LOAD
    const segment_ref01_ent = client.Segment()
    const segment_ref01_match_dt0: any = {}
    segment_ref01_match_dt0.id = segment_ref01_data.id
    const segment_ref01_data_dt0 = (await segment_ref01_ent.load(segment_ref01_match_dt0)).data()
    assert(segment_ref01_data_dt0.id === segment_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/segment/SegmentTestData.json')

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
    ['segment01','segment02','segment03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_SEGMENT_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_SEGMENT_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_SEGMENT_ENTID']
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
  
