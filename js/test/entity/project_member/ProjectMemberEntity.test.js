
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


describe('ProjectMemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.ProjectMember()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"email","name":"email","req":false,"short":"The email of the team member that should be added to this project.","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"role","req":true,"short":"The project role of the member that will be added.","type":"`$STRING`","index$":2},{"active":true,"name":"uid","req":false,"short":"The ID of the team member that should be added to this project.","type":"`$STRING`","index$":3},{"active":true,"name":"username","req":false,"short":"The username of the team member that should be added to this project.","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"project_member","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"prj_pavWOn1iLObbXLRiwVvzmPrTWyTf","kind":"param","name":"id_or_name","orig":"id_or_name","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /v1/projects/{idOrName}/members","json":"{\"operationId\":\"addProjectMember\",\"parameters\":[{\"description\":\"The ID or name of the Project.\",\"in\":\"path\",\"name\":\"idOrName\",\"required\":true,\"schema\":{\"description\":\"The ID or name of the Project.\",\"example\":\"prj_pavWOn1iLObbXLRiwVvzmPrTWyTf\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"oneOf\":[{\"required\":[\"uid\"]},{\"required\":[\"username\"]},{\"required\":[\"email\"]}],\"properties\":{\"email\":{\"description\":\"The email of the team member that should be added to this project.\",\"example\":\"entity@example.com\",\"format\":\"email\",\"type\":\"string\"},\"role\":{\"description\":\"The project role of the member that will be added.\",\"enum\":[\"ADMIN\",\"PROJECT_VIEWER\",\"PROJECT_DEVELOPER\"],\"example\":\"ADMIN\",\"type\":\"string\"},\"uid\":{\"description\":\"The ID of the team member that should be added to this project.\",\"example\":\"ndlgr43fadlPyCtREAqxxdyFK\",\"maxLength\":256,\"type\":\"string\"},\"username\":{\"description\":\"The username of the team member that should be added to this project.\",\"example\":\"example\",\"maxLength\":256,\"type\":\"string\"}},\"required\":[\"role\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Responds with the project ID on success.\",\"properties\":{\"id\":{\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"}}},\"description\":\"Responds with the project ID on success.\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/projects/{idOrName}/members","rename":{"param":{"idOrName":"id_or_name"}},"segments":[{"lit":"v1"},{"lit":"projects"},{"var":"id_or_name"},{"lit":"members"}],"select":{"exist":["id_or_name","slug","team_id"]},"transform":{"req":{"email":"`reqdata.email`","role":"`reqdata.role`","uid":"`reqdata.uid`","username":"`reqdata.username`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"prj_pavWOn1iLObbXLRiwVvzmPrTWyTf","kind":"param","name":"id_or_name","orig":"id_or_name","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":20,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1540095775951,"kind":"query","name":"since","orig":"since","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":1540095775951,"kind":"query","name":"until","orig":"until","reqd":false,"type":"`$INTEGER`","index$":5}]},"contract":{"id":"GET /v1/projects/{idOrName}/members","json":"{\"operationId\":\"getProjectMembers\",\"parameters\":[{\"description\":\"The ID or name of the Project.\",\"in\":\"path\",\"name\":\"idOrName\",\"required\":true,\"schema\":{\"description\":\"The ID or name of the Project.\",\"example\":\"prj_pavWOn1iLObbXLRiwVvzmPrTWyTf\",\"type\":\"string\"}},{\"description\":\"Limit how many project members should be returned\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"description\":\"Limit how many project members should be returned\",\"example\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Timestamp in milliseconds to only include members added since then.\",\"in\":\"query\",\"name\":\"since\",\"required\":false,\"schema\":{\"description\":\"Timestamp in milliseconds to only include members added since then.\",\"example\":1540095775951,\"type\":\"integer\"}},{\"description\":\"Timestamp in milliseconds to only include members added until then.\",\"in\":\"query\",\"name\":\"until\",\"required\":false,\"schema\":{\"description\":\"Timestamp in milliseconds to only include members added until then.\",\"example\":1540095775951,\"type\":\"integer\"}},{\"description\":\"Search project members by their name, username, and email.\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"schema\":{\"description\":\"Search project members by their name, username, and email.\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"type\":\"object\"},{\"description\":\"Paginated list of members for the project.\",\"properties\":{\"members\":{\"items\":{\"properties\":{\"avatar\":{\"description\":\"ID of the file for the Avatar of this member.\",\"example\":\"123a6c5209bc3778245d011443644c8d27dc2c50\",\"type\":\"string\"},\"computedProjectRole\":{\"description\":\"Role of this user in the project.\",\"enum\":[\"ADMIN\",\"PROJECT_DEVELOPER\",\"PROJECT_GUEST\",\"PROJECT_VIEWER\"],\"example\":\"ADMIN\",\"type\":\"string\"},\"createdAt\":{\"description\":\"Timestamp in milliseconds when this member was added.\",\"example\":1588720733602,\"type\":\"number\"},\"email\":{\"description\":\"The email of this member.\",\"example\":\"jane.doe@example.com\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this user.\",\"example\":\"Jane Doe\",\"type\":\"string\"},\"role\":{\"description\":\"Role of this user in the project.\",\"enum\":[\"ADMIN\",\"PROJECT_DEVELOPER\",\"PROJECT_GUEST\",\"PROJECT_VIEWER\"],\"example\":\"ADMIN\",\"type\":\"string\"},\"teamRole\":{\"description\":\"The role of this user in the team.\",\"enum\":[\"BILLING\",\"CONTRIBUTOR\",\"DEVELOPER\",\"MEMBER\",\"OWNER\",\"SECURITY\",\"VIEWER\",\"VIEWER_FOR_PLUS\"],\"example\":\"CONTRIBUTOR\",\"type\":\"string\"},\"uid\":{\"description\":\"The ID of this user.\",\"example\":\"zTuNVUXEAvvnNN3IaqinkyMw\",\"type\":\"string\"},\"username\":{\"description\":\"The unique username of this user.\",\"example\":\"jane-doe\",\"type\":\"string\"}},\"required\":[\"computedProjectRole\",\"createdAt\",\"email\",\"role\",\"teamRole\",\"uid\",\"username\"],\"type\":\"object\"},\"type\":\"array\"},\"pagination\":{\"properties\":{\"count\":{\"description\":\"Amount of items in the current page.\",\"example\":20,\"type\":\"number\"},\"hasNext\":{\"enum\":[false,true],\"type\":\"boolean\"},\"next\":{\"description\":\"Timestamp that must be used to request the next page.\",\"example\":1540095775951,\"nullable\":true,\"type\":\"number\"},\"prev\":{\"description\":\"Timestamp that must be used to request the previous page.\",\"example\":1540095775951,\"nullable\":true,\"type\":\"number\"}},\"required\":[\"count\",\"hasNext\",\"next\",\"prev\"],\"type\":\"object\"}},\"required\":[\"members\",\"pagination\"],\"type\":\"object\"}]}}},\"description\":\"Paginated list of members for the project.\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/projects/{idOrName}/members","rename":{"param":{"idOrName":"id_or_name"}},"segments":[{"lit":"v1"},{"lit":"projects"},{"var":"id_or_name"},{"lit":"members"}],"select":{"exist":["id_or_name","limit","search","since","slug","team_id","until"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"ndlgr43fadlPyCtREAqxxdyFK","kind":"param","name":"id","orig":"uid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"prj_pavWOn1iLObbXLRiwVvzmPrTWyTf","kind":"param","name":"project_id","orig":"id_or_name","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /v1/projects/{idOrName}/members/{uid}","json":"{\"operationId\":\"removeProjectMember\",\"parameters\":[{\"description\":\"The ID or name of the Project.\",\"in\":\"path\",\"name\":\"idOrName\",\"required\":true,\"schema\":{\"description\":\"The ID or name of the Project.\",\"example\":\"prj_pavWOn1iLObbXLRiwVvzmPrTWyTf\",\"type\":\"string\"}},{\"description\":\"The user ID of the member.\",\"in\":\"path\",\"name\":\"uid\",\"required\":true,\"schema\":{\"description\":\"The user ID of the member.\",\"example\":\"ndlgr43fadlPyCtREAqxxdyFK\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v1/projects/{idOrName}/members/{uid}","rename":{"param":{"idOrName":"project_id","uid":"id"}},"segments":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"members"},{"var":"id"}],"select":{"exist":["id","project_id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["project"]]},"key$":"project_member","name__orig":"project_member","Name":"ProjectMember","name_":"project_member","name-":"project-member","NAME":"PROJECT_MEMBER","index$":49}, {"active":true,"entity":"project_member","key$":"BasicProjectMemberFlow","kind":"basic","name":"BasicProjectMemberFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"project_member_ref01"},"match":{"id_or_name":"id_or_name01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"project_member_ref01","srcdatavar":"project_member_ref01_data","suffix":"_dt0"},"match":{"id":"project_member01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_member_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"project_member_ref01","suffix":"_rm0"},"match":{"id":"project_member01","project_id":"project01"},"op":"remove","spec":[],"valid":[],"index$":2}]}, 'ProjectMember')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_member_ref01_ent = client.ProjectMember()
    let project_member_ref01_data = setup.data.new.project_member['project_member_ref01']
    project_member_ref01_data['id_or_name'] = setup.idmap['id_or_name01']
    project_member_ref01_data['project_id'] = setup.idmap['project01']

    project_member_ref01_data = (await project_member_ref01_ent.create(project_member_ref01_data)).data()
    assert(null != project_member_ref01_data.id)


    // LOAD
    const project_member_ref01_match_dt0 = {}
    project_member_ref01_match_dt0.id = project_member_ref01_data.id
    const project_member_ref01_data_dt0 = (await project_member_ref01_ent.load(project_member_ref01_match_dt0)).data()
    assert(project_member_ref01_data_dt0.id === project_member_ref01_data.id)


    // REMOVE
    const project_member_ref01_match_rm0 = {}
    project_member_ref01_match_rm0.id = project_member_ref01_data.id
    await project_member_ref01_ent.remove(project_member_ref01_match_rm0)
  

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/project_member/ProjectMemberTestData.json')

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
    ['project_member01','project_member02','project_member03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_PROJECT_MEMBER_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_PROJECT_MEMBER_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_PROJECT_MEMBER_ENTID']
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
  
