
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


describe('FileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.File()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"children","req":false,"short":"The list of children files of the directory (only valid for the `directory` type)","type":"`$ARRAY`","index$":0},{"active":true,"name":"contentType","req":false,"short":"The content-type of the file (only valid for the `file` type)","type":"`$STRING`","index$":1},{"active":true,"name":"mode","req":true,"short":"The file \"mode\" indicating file type and permissions.","type":"`$NUMBER`","index$":2},{"active":true,"name":"name","req":true,"short":"The name of the file tree entry","type":"`$STRING`","index$":3},{"active":true,"name":"type","req":true,"short":"String indicating the type of file tree entry.","type":"`$STRING`","index$":4},{"active":true,"name":"uid","req":false,"short":"The unique identifier of the file (only valid for the `file` type)","type":"`$STRING`","index$":5}],"name":"file","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"deployment_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v6/deployments/{id}/files","json":"{\"operationId\":\"listDeploymentFiles\",\"parameters\":[{\"description\":\"The unique deployment identifier\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The unique deployment identifier\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"description\":\"A deployment file tree entry\",\"properties\":{\"children\":{\"description\":\"The list of children files of the directory (only valid for the `directory` type)\",\"items\":{\"description\":\"A deployment file tree entry\",\"properties\":\"[Circular *paths./v6/deployments/{id}/files.get.responses.200.content.application/json.schema.items.properties]\",\"required\":[\"mode\",\"name\",\"type\"],\"type\":\"object\"},\"type\":\"array\"},\"contentType\":{\"description\":\"The content-type of the file (only valid for the `file` type)\",\"example\":\"application/json\",\"type\":\"string\"},\"mode\":{\"description\":\"The file \\\"mode\\\" indicating file type and permissions.\",\"type\":\"number\"},\"name\":{\"description\":\"The name of the file tree entry\",\"example\":\"my-file.json\",\"type\":\"string\"},\"type\":{\"description\":\"String indicating the type of file tree entry.\",\"enum\":[\"directory\",\"file\",\"invalid\",\"lambda\",\"middleware\",\"symlink\"],\"example\":\"file\",\"type\":\"string\"},\"uid\":{\"description\":\"The unique identifier of the file (only valid for the `file` type)\",\"example\":\"2d4aad419917f15b1146e9e03ddc9bb31747e4d0\",\"type\":\"string\"}},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/items/properties/children/items/required\"},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Retrieved the file tree successfully\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"File tree not found\\nDeployment not found\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v6/deployments/{id}/files","rename":{"param":{"id":"deployment_id"}},"segments":[{"lit":"v6"},{"lit":"deployments"},{"var":"deployment_id"},{"lit":"files"}],"select":{"exist":["deployment_id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["deployment"]]},"key$":"file","name__orig":"file","Name":"File","name_":"file","name-":"file","NAME":"FILE","index$":31}, {"active":true,"entity":"file","key$":"BasicFileFlow","kind":"basic","name":"BasicFileFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"deployment_id":"deployment01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"file_ref01"}}],"index$":0}]}, 'File')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let file_ref01_data = Object.values(setup.data.existing.file)[0]

    // LIST
    const file_ref01_ent = client.File()
    const file_ref01_match = {}
    file_ref01_match['deployment_id'] = setup.idmap['deployment01']

    const file_ref01_list = (await file_ref01_ent.list(file_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/file/FileTestData.json')

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
    ['file01','file02','file03','deployment01','deployment02','deployment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_FILE_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_FILE_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_FILE_ENTID']
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
  
