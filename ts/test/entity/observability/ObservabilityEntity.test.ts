

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


describe('ObservabilityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Observability()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VERCEL_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'observability.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"disabled","req":true,"short":"Whether Observability Plus should be disabled for the project","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"disabledAt","op":{"list":{"req":true,"type":"`$NUMBER`"}},"req":false,"type":"`$NUMBER`","index$":1},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"observability","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v1/observability/manage/configuration/projects","json":"{\"operationId\":\"getObservabilityConfigurationProjects\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"disabledProjects\":{\"items\":{\"properties\":{\"disabledAt\":{\"type\":\"number\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"required\":[\"disabledAt\",\"id\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"disabledProjects\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/observability/manage/configuration/projects","segments":[{"lit":"v1"},{"lit":"observability"},{"lit":"manage"},{"lit":"configuration"},{"lit":"projects"}],"select":{"exist":["slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body.disabledProjects`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id_or_name","orig":"project_id_or_name","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"PUT /v1/observability/manage/configuration/projects/{projectIdOrName}","json":"{\"operationId\":\"updateObservabilityConfigurationProject\",\"parameters\":[{\"description\":\"The ID or name of the project to update\",\"in\":\"path\",\"name\":\"projectIdOrName\",\"required\":true,\"schema\":{\"description\":\"The ID or name of the project to update\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"disabled\":{\"description\":\"Whether Observability Plus should be disabled for the project\",\"type\":\"boolean\"}},\"required\":[\"disabled\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"disabledAt\":{\"type\":\"number\"},\"id\":{\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"429\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/v1/observability/manage/configuration/projects/{projectIdOrName}","rename":{"param":{"projectIdOrName":"project_id_or_name"}},"segments":[{"lit":"v1"},{"lit":"observability"},{"lit":"manage"},{"lit":"configuration"},{"lit":"projects"},{"var":"project_id_or_name"}],"select":{"exist":["project_id_or_name","slug","team_id"]},"transform":{"req":{"disabled":"`reqdata.disabled`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"]]},"key$":"observability","name__orig":"observability","Name":"Observability","name_":"observability","name-":"observability","NAME":"OBSERVABILITY","index$":46}, {"active":true,"entity":"observability","key$":"BasicObservabilityFlow","kind":"basic","name":"BasicObservabilityFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"observability_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"observability_ref01","srcdatavar":"observability_ref01_data","suffix":"_up0","textfield":"name"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-observability_ref01"}}],"valid":[],"index$":1}]}, 'Observability')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let observability_ref01_data = Object.values(setup.data.existing.observability)[0] as any

    // LIST
    const observability_ref01_ent = client.Observability()
    const observability_ref01_match: any = {}

    const observability_ref01_list = (await observability_ref01_ent.list(observability_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const observability_ref01_data_up0: any = {}
    observability_ref01_data_up0.id = observability_ref01_data.id

    const observability_ref01_markdef_up0 = { name: 'name', value: 'Mark01-observability_ref01_' + setup.now }
    ;(observability_ref01_data_up0 as any)[observability_ref01_markdef_up0.name] = observability_ref01_markdef_up0.value

    const observability_ref01_resdata_up0 = (await observability_ref01_ent.update(observability_ref01_data_up0)).data()
    assert(observability_ref01_resdata_up0.id === observability_ref01_data_up0.id)

    assert((observability_ref01_resdata_up0 as any)[observability_ref01_markdef_up0.name] === observability_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/observability/ObservabilityTestData.json')

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
    ['observability01','observability02','observability03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_OBSERVABILITY_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_OBSERVABILITY_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_OBSERVABILITY_ENTID']
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
  
