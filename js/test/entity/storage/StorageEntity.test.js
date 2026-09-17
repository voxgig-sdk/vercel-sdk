
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


describe('StorageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Storage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"access","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"count","req":true,"type":"`$NUMBER`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"isTokenExpired","req":true,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"kind","req":false,"short":"A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs.","type":"`$STRING`","index$":4},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"projectFilter","req":false,"type":"`$OBJECT`","union":{"branches":2,"count":1,"depth":4},"index$":6},{"active":true,"name":"projectId","req":false,"short":"The project this store is scoped to.","type":"`$STRING`","index$":7},{"active":true,"name":"projectsMetadata","req":true,"type":"`$ARRAY`","index$":8},{"active":true,"name":"region","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"type":"`$STRING`","index$":9},{"active":true,"name":"size","req":true,"type":"`$NUMBER`","index$":10},{"active":true,"name":"status","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"totalConnectedProjects","req":false,"type":"`$NUMBER`","index$":12},{"active":true,"name":"usageQuotaExceeded","req":true,"type":"`$BOOLEAN`","index$":13}],"id":{"field":"id","name":"id"},"name":"storage","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /storage/stores/blob","json":"{\"operationId\":\"createStorageStoresBlob\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"access\":{\"default\":\"public\",\"enum\":[\"public\",\"private\"],\"type\":\"string\"},\"name\":{\"maxLength\":70,\"type\":\"string\"},\"projectId\":{\"maxLength\":50,\"type\":\"string\"},\"region\":{\"enum\":[\"arn1\",\"bom1\",\"cdg1\",\"cle1\",\"cpt1\",\"dub1\",\"dxb1\",\"fra1\",\"gru1\",\"hkg1\",\"hnd1\",\"iad1\",\"icn1\",\"kix1\",\"lhr1\",\"pdx1\",\"sfo1\",\"sin1\",\"syd1\",\"yul1\"],\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"store\":{\"nullable\":true,\"properties\":{\"access\":{\"enum\":[\"private\",\"public\"],\"type\":\"string\"},\"count\":{\"type\":\"number\"},\"isTokenExpired\":{\"enum\":[false,true],\"type\":\"boolean\"},\"kind\":{\"description\":\"A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. Undefined for legacy stores.\",\"enum\":[\"project-default\",\"user-created\"],\"type\":\"string\"},\"projectFilter\":{\"properties\":{\"git\":{\"properties\":{\"owners\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"providers\":{\"oneOf\":[{\"items\":{\"enum\":[\"bitbucket\",\"github\",\"gitlab\"],\"type\":\"string\"},\"type\":\"array\"},{\"enum\":[\"*\"],\"type\":\"string\"}]},\"repos\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"providers\"],\"type\":\"object\"}},\"type\":\"object\"},\"projectId\":{\"description\":\"The project this store is scoped to. Set for project-default stores and user-created stores with enforced project association.\",\"type\":\"string\"},\"projectsMetadata\":{\"items\":{\"properties\":{\"deployments\":{\"properties\":{\"actions\":{\"items\":{\"properties\":{\"environments\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"slug\":{\"type\":\"string\"}},\"required\":[\"environments\",\"slug\"],\"type\":\"object\"},\"type\":\"array\"},\"required\":{\"enum\":[false,true],\"type\":\"boolean\"}},\"required\":[\"actions\",\"required\"],\"type\":\"object\"},\"envVarPrefix\":{\"nullable\":true,\"type\":\"string\"},\"environmentVariables\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"environments\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"framework\":{\"enum\":[\"actix-web\",\"angular\",\"ash\",\"astro\",\"axum\",\"blitzjs\",\"brunch\",\"bun\",\"container\",\"create-react-app\",\"django\",\"docusaurus\",\"docusaurus-2\",\"dojo\",\"eleventy\",\"elysia\",\"ember\",\"eve\",\"express\",\"factory-eve\",\"fastapi\",\"fasthtml\",\"fastify\",\"flask\",\"gatsby\",\"go\",\"gridsome\",\"h3\",\"hexo\",\"hono\",\"hugo\",\"hydrogen\",\"ionic-angular\",\"ionic-react\",\"jekyll\",\"koa\",\"mastra\",\"middleman\",\"nestjs\",\"nextjs\",\"nitro\",\"node\",\"nuxtjs\",\"parcel\",\"polymer\",\"preact\",\"python\",\"react-router\",\"redwoodjs\",\"remix\",\"ruby\",\"rust\",\"saber\",\"sanity\",\"sanity-v2\",\"sapper\",\"scully\",\"services\",\"solidstart\",\"solidstart-1\",\"stencil\",\"storybook\",\"svelte\",\"sveltekit\",\"sveltekit-1\",\"tanstack-start\",\"tanstack-start-lovable\",\"umijs\",\"vite\",\"vitepress\",\"vue\",\"vuepress\",\"xmcp\",\"zola\",null],\"nullable\":true,\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"latestDeployment\":{\"type\":\"string\"},\"makeEnvVarsSensitive\":{\"enum\":[false,true],\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"projectId\":{\"type\":\"string\"}},\"required\":[\"envVarPrefix\",\"environmentVariables\",\"environments\",\"id\",\"name\",\"projectId\"],\"type\":\"object\"},\"type\":\"array\"},\"region\":{\"enum\":[\"arn1\",\"bom1\",\"cdg1\",\"cle1\",\"cpt1\",\"dub1\",\"dxb1\",\"fra1\",\"gru1\",\"hkg1\",\"hnd1\",\"iad1\",\"icn1\",\"kix1\",\"lhr1\",\"pdx1\",\"sfo1\",\"sin1\",\"syd1\",\"yul1\"],\"type\":\"string\"},\"size\":{\"type\":\"number\"},\"status\":{\"enum\":[\"available\",\"error\",\"initializing\",\"limits-exceeded-suspended\",\"limits-exceeded-suspended-store-count\",\"onboarding\",\"suspended\",\"uninstalled\",null],\"nullable\":true,\"type\":\"string\"},\"totalConnectedProjects\":{\"type\":\"number\"},\"usageQuotaExceeded\":{\"enum\":[false,true],\"type\":\"boolean\"}},\"required\":[\"count\",\"isTokenExpired\",\"projectsMetadata\",\"region\",\"size\",\"status\",\"usageQuotaExceeded\"],\"type\":\"object\"}},\"required\":[\"store\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"429\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/storage/stores/blob","segments":[{"lit":"storage"},{"lit":"stores"},{"lit":"blob"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.store`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"include_guide","orig":"include_guide","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"skip_metadata","orig":"skip_metadata","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"GET /storage/stores/{id}","json":"{\"operationId\":\"getStorageStoresById\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"skip-metadata\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"in\":\"query\",\"name\":\"include-guides\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"store\":{\"properties\":{\"projectFilter\":{\"properties\":{\"git\":{\"properties\":{\"owners\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"providers\":{\"oneOf\":[{\"items\":{\"enum\":[\"bitbucket\",\"github\",\"gitlab\"],\"type\":\"string\"},\"type\":\"array\"},{\"enum\":[\"*\"],\"type\":\"string\"}]},\"repos\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"providers\"],\"type\":\"object\"}},\"type\":\"object\"},\"projectsMetadata\":{\"items\":{\"properties\":{\"deployments\":{\"properties\":{\"actions\":{\"items\":{\"properties\":{\"environments\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"slug\":{\"type\":\"string\"}},\"required\":[\"environments\",\"slug\"],\"type\":\"object\"},\"type\":\"array\"},\"required\":{\"enum\":[false,true],\"type\":\"boolean\"}},\"required\":[\"actions\",\"required\"],\"type\":\"object\"},\"envVarPrefix\":{\"nullable\":true,\"type\":\"string\"},\"environmentVariables\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"environments\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"framework\":{\"enum\":[\"actix-web\",\"angular\",\"ash\",\"astro\",\"axum\",\"blitzjs\",\"brunch\",\"bun\",\"container\",\"create-react-app\",\"django\",\"docusaurus\",\"docusaurus-2\",\"dojo\",\"eleventy\",\"elysia\",\"ember\",\"eve\",\"express\",\"factory-eve\",\"fastapi\",\"fasthtml\",\"fastify\",\"flask\",\"gatsby\",\"go\",\"gridsome\",\"h3\",\"hexo\",\"hono\",\"hugo\",\"hydrogen\",\"ionic-angular\",\"ionic-react\",\"jekyll\",\"koa\",\"mastra\",\"middleman\",\"nestjs\",\"nextjs\",\"nitro\",\"node\",\"nuxtjs\",\"parcel\",\"polymer\",\"preact\",\"python\",\"react-router\",\"redwoodjs\",\"remix\",\"ruby\",\"rust\",\"saber\",\"sanity\",\"sanity-v2\",\"sapper\",\"scully\",\"services\",\"solidstart\",\"solidstart-1\",\"stencil\",\"storybook\",\"svelte\",\"sveltekit\",\"sveltekit-1\",\"tanstack-start\",\"tanstack-start-lovable\",\"umijs\",\"vite\",\"vitepress\",\"vue\",\"vuepress\",\"xmcp\",\"zola\",null],\"nullable\":true,\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"latestDeployment\":{\"type\":\"string\"},\"makeEnvVarsSensitive\":{\"enum\":[false,true],\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"projectId\":{\"type\":\"string\"}},\"required\":[\"envVarPrefix\",\"environmentVariables\",\"environments\",\"id\",\"name\",\"projectId\"],\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"enum\":[\"available\",\"error\",\"initializing\",\"limits-exceeded-suspended\",\"limits-exceeded-suspended-store-count\",\"onboarding\",\"suspended\",\"uninstalled\",null],\"nullable\":true,\"type\":\"string\"},\"totalConnectedProjects\":{\"type\":\"number\"},\"usageQuotaExceeded\":{\"enum\":[false,true],\"type\":\"boolean\"}},\"required\":[\"projectsMetadata\",\"status\",\"usageQuotaExceeded\"],\"type\":\"object\"}},\"required\":[\"store\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/storage/stores/{id}","segments":[{"lit":"storage"},{"lit":"stores"},{"var":"id"}],"select":{"exist":["id","include_guide","skip_metadata"]},"transform":{"req":"`reqdata`","res":"`body.store`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /storage/stores/blob/{id}","json":"{\"operationId\":\"deleteStorageStoresBlobById\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/storage/stores/blob/{id}","segments":[{"lit":"storage"},{"lit":"stores"},{"lit":"blob"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"storage","name__orig":"storage","Name":"Storage","name_":"storage","name-":"storage","NAME":"STORAGE","index$":58}, {"active":true,"entity":"storage","key$":"BasicStorageFlow","kind":"basic","name":"BasicStorageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"storage_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"storage_ref01","srcdatavar":"storage_ref01_data","suffix":"_dt0"},"match":{"id":"storage01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-storage_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"storage_ref01","suffix":"_rm0"},"match":{"id":"storage01"},"op":"remove","spec":[],"valid":[],"index$":2}]}, 'Storage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const storage_ref01_ent = client.Storage()
    let storage_ref01_data = setup.data.new.storage['storage_ref01']

    storage_ref01_data = (await storage_ref01_ent.create(storage_ref01_data)).data()
    assert(null != storage_ref01_data.id)


    // LOAD
    const storage_ref01_match_dt0 = {}
    storage_ref01_match_dt0.id = storage_ref01_data.id
    const storage_ref01_data_dt0 = (await storage_ref01_ent.load(storage_ref01_match_dt0)).data()
    assert(storage_ref01_data_dt0.id === storage_ref01_data.id)


    // REMOVE
    const storage_ref01_match_rm0 = {}
    storage_ref01_match_rm0.id = storage_ref01_data.id
    await storage_ref01_ent.remove(storage_ref01_match_rm0)
  

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/storage/StorageTestData.json')

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
    ['storage01','storage02','storage03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_STORAGE_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_STORAGE_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_STORAGE_ENTID']
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
  
