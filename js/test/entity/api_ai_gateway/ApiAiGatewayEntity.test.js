
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


describe('ApiAiGatewayEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.ApiAiGateway()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_ai_gateway","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"owner_id","orig":"owner_id","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"virtual_model_slug","orig":"virtual_model_slug","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /v1/ai-gateway/virtual-model-configs","json":"{\"operationId\":\"getAiGatewayVirtualModelConfig\",\"parameters\":[{\"in\":\"query\",\"name\":\"ownerId\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"virtualModelSlug\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"cursor\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"description\":\"Public response shape for virtual model configs. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.\",\"properties\":{\"allowFallbackFromFast\":{\"description\":\"Allow fallback from fast to standard providers on failure.\",\"enum\":[false,true],\"type\":\"boolean\"},\"baseUrl\":{\"description\":\"For kind=relay: URL the gateway forwards requests to as a transparent proxy.\",\"type\":\"string\"},\"byokCredentialIds\":{\"description\":\"BYOK credential IDs allowed for this VMC.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"caching\":{\"description\":\"Use caching if available.\",\"enum\":[\"auto\"],\"type\":\"string\"},\"createdAt\":{\"description\":\"Creation timestamp (epoch ms).\",\"type\":\"number\"},\"createdBy\":{\"description\":\"User or app id that created this VMC.\",\"type\":\"string\"},\"deleted\":{\"description\":\"Whether this VMC is soft-deleted.\",\"enum\":[false,true],\"type\":\"boolean\"},\"description\":{\"description\":\"Optional description for UI.\",\"type\":\"string\"},\"disallowPromptTraining\":{\"description\":\"Only use providers that will not train on your prompts.\",\"enum\":[false,true],\"type\":\"boolean\"},\"displayName\":{\"description\":\"Human-readable name for UI.\",\"type\":\"string\"},\"has\":{\"description\":\"Limit providers to those with these features.\",\"items\":{\"description\":\"Limit providers to those with these features.\",\"enum\":[\"implicit-caching\",\"vision\"],\"type\":\"string\"},\"type\":\"array\"},\"hipaaCompliant\":{\"description\":\"Only use HIPAA-compliant providers.\",\"enum\":[false,true],\"type\":\"boolean\"},\"inferenceRegion\":{\"description\":\"Region pinned on the VMC for system-credential routing (alias/router only).\",\"properties\":{\"geoRegion\":{\"description\":\"Geo zone (e.g. \\\"us\\\", \\\"eu\\\").\",\"type\":\"string\"},\"providerRegion\":{\"description\":\"Provider-specific region identifier.\",\"type\":\"string\"},\"providers\":{\"additionalProperties\":{\"description\":\"Per-provider region overrides keyed by provider slug.\",\"nullable\":true,\"properties\":{\"geoRegion\":{\"description\":\"Geo zone (e.g. \\\"us\\\", \\\"eu\\\").\",\"type\":\"string\"},\"providerRegion\":{\"description\":\"Provider-specific region identifier.\",\"type\":\"string\"},\"scope\":{\"description\":\"Pin scope: `specific` (one provider region), `zone` (geo zone), or `global`.\",\"enum\":[\"global\",\"specific\",\"zone\"],\"type\":\"string\"}},\"type\":\"object\"},\"description\":\"Per-provider region overrides keyed by provider slug.\",\"type\":\"object\"},\"scope\":{\"description\":\"Pin scope: `specific` (one provider region), `zone` (geo zone), or `global`.\",\"enum\":[\"global\",\"specific\",\"zone\"],\"type\":\"string\"}},\"type\":\"object\"},\"instanceId\":{\"description\":\"The concrete model-provider instance this VMC resolves to.\",\"type\":\"string\"},\"kind\":{\"description\":\"VMC kind: alias, relay, or router.\",\"type\":\"string\"},\"modelSlug\":{\"description\":\"Canonical model slug this VMC maps to (e.g. \\\"creator/model\\\"). Not used by kind=router.\",\"type\":\"string\"},\"models\":{\"description\":\"For kind=router: ordered candidates, model slugs or router references. Otherwise: fallback models.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"observabilityTags\":{\"description\":\"Observability tags attached to requests through this VMC.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"ownerId\":{\"description\":\"Team (owner) that owns this VMC.\",\"type\":\"string\"},\"providerOnly\":{\"description\":\"Restrict routing to only these providers.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"providerOptions\":{\"additionalProperties\":{\"additionalProperties\":true,\"description\":\"Arbitrary per-provider AI SDK options, keyed by gateway provider slug.\",\"type\":\"object\"},\"description\":\"Arbitrary per-provider AI SDK options, keyed by gateway provider slug.\",\"type\":\"object\"},\"providerOrder\":{\"description\":\"Ordered list of providers to try as fallbacks on failure.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"providerTimeouts\":{\"description\":\"Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials.\",\"properties\":{\"byok\":{\"additionalProperties\":{\"type\":\"number\"},\"type\":\"object\"}},\"type\":\"object\"},\"requires\":{\"description\":\"For kind=router: capability tags a candidate must have.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"selector\":{\"description\":\"For kind=router: how to order candidates.\",\"enum\":[\"cost\",\"priority\",\"tps\",\"ttft\"],\"type\":\"string\"},\"serviceTier\":{\"description\":\"Service tier for providers that support it.\",\"enum\":[\"fast\",\"flex\",\"priority\"],\"type\":\"string\"},\"sort\":{\"description\":\"Rank eligible providers by an attribute.\",\"enum\":[\"cost\",\"latency\",\"price\",\"throughput\",\"tps\",\"ttft\"],\"type\":\"string\"},\"speed\":{\"description\":\"Only use fastest providers with short timeouts.\",\"enum\":[\"fast\"],\"type\":\"string\"},\"status\":{\"description\":\"UI lifecycle status: draft, active, or archived.\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update timestamp (epoch ms).\",\"type\":\"number\"},\"updatedBy\":{\"description\":\"User or app id that last updated this VMC.\",\"type\":\"string\"},\"virtualModelSlug\":{\"description\":\"Client-facing alias used as the model slug in Gateway calls.\",\"type\":\"string\"},\"visibility\":{\"description\":\"Visibility in listings: public, internal, or stealth.\",\"type\":\"string\"},\"zeroDataRetention\":{\"description\":\"Only use providers with zero data retention.\",\"enum\":[false,true],\"type\":\"boolean\"}},\"required\":[\"createdAt\",\"deleted\",\"kind\",\"ownerId\",\"status\",\"updatedAt\",\"virtualModelSlug\"],\"type\":\"object\"},{\"properties\":{\"cursor\":{\"description\":\"Cursor for the next page, or null when no more pages remain.\",\"nullable\":true,\"type\":\"string\"},\"virtualModelConfigs\":{\"description\":\"The page of VMCs.\",\"items\":{\"description\":\"Public response shape for virtual model configs. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.\",\"properties\":{\"allowFallbackFromFast\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/allowFallbackFromFast\"},\"baseUrl\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/baseUrl\"},\"byokCredentialIds\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/byokCredentialIds\"},\"caching\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/caching\"},\"createdAt\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/createdAt\"},\"createdBy\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/createdBy\"},\"deleted\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/deleted\"},\"description\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/description\"},\"disallowPromptTraining\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/disallowPromptTraining\"},\"displayName\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/displayName\"},\"has\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/has\"},\"hipaaCompliant\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/hipaaCompliant\"},\"inferenceRegion\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/inferenceRegion\"},\"instanceId\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/instanceId\"},\"kind\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/kind\"},\"modelSlug\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/modelSlug\"},\"models\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/models\"},\"observabilityTags\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/observabilityTags\"},\"ownerId\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/ownerId\"},\"providerOnly\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/providerOnly\"},\"providerOptions\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/providerOptions\"},\"providerOrder\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/providerOrder\"},\"providerTimeouts\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/providerTimeouts\"},\"requires\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/requires\"},\"selector\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/selector\"},\"serviceTier\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/serviceTier\"},\"sort\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/sort\"},\"speed\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/speed\"},\"status\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/status\"},\"updatedAt\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/updatedAt\"},\"updatedBy\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/updatedBy\"},\"virtualModelSlug\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/virtualModelSlug\"},\"visibility\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/visibility\"},\"zeroDataRetention\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/properties/zeroDataRetention\"}},\"required\":[\"createdAt\",\"deleted\",\"kind\",\"ownerId\",\"status\",\"updatedAt\",\"virtualModelSlug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"cursor\",\"virtualModelConfigs\"],\"type\":\"object\"}]}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/ai-gateway/virtual-model-configs","segments":[{"lit":"v1"},{"lit":"ai-gateway"},{"lit":"virtual-model-configs"}],"select":{"exist":["cursor","limit","owner_id","slug","team_id","virtual_model_slug"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"acting_ip","orig":"acting_ip","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"acting_user_agent","orig":"acting_user_agent","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"owner_id","orig":"owner_id","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"updated_by","orig":"updated_by","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"virtual_model_slug","orig":"virtual_model_slug","reqd":true,"type":"`$STRING`","index$":6}]},"contract":{"id":"DELETE /v1/ai-gateway/virtual-model-configs","json":"{\"operationId\":\"deleteAiGatewayVirtualModelConfig\",\"parameters\":[{\"in\":\"query\",\"name\":\"ownerId\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"virtualModelSlug\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"updatedBy\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"actingIp\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"actingUserAgent\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"content\":{\"application/json\":{\"schema\":{\"nullable\":true}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v1/ai-gateway/virtual-model-configs","segments":[{"lit":"v1"},{"lit":"ai-gateway"},{"lit":"virtual-model-configs"}],"select":{"exist":["acting_ip","acting_user_agent","owner_id","slug","team_id","updated_by","virtual_model_slug"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"vmc_slug","orig":"vmc_slug","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"acting_ip","orig":"acting_ip","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"acting_user_agent","orig":"acting_user_agent","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"owner_id","orig":"owner_id","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"updated_by","orig":"updated_by","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"DELETE /v1/ai-gateway/virtual-model-configs/{vmcSlug}","json":"{\"operationId\":\"deleteAiGatewayVirtualModelConfigBySlug\",\"parameters\":[{\"in\":\"query\",\"name\":\"ownerId\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"vmcSlug\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"updatedBy\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"actingIp\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"actingUserAgent\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"content\":{\"application/json\":{\"schema\":{\"nullable\":true}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"500\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v1/ai-gateway/virtual-model-configs/{vmcSlug}","rename":{"param":{"vmcSlug":"vmc_slug"}},"segments":[{"lit":"v1"},{"lit":"ai-gateway"},{"lit":"virtual-model-configs"},{"var":"vmc_slug"}],"select":{"exist":["acting_ip","acting_user_agent","owner_id","slug","team_id","updated_by","vmc_slug"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["virtual_model_config"]]},"key$":"api_ai_gateway","name__orig":"api_ai_gateway","Name":"ApiAiGateway","name_":"api_ai_gateway","name-":"api-ai-gateway","NAME":"API_AI_GATEWAY","index$":7}, {"active":true,"entity":"api_ai_gateway","key$":"BasicApiAiGatewayFlow","kind":"basic","name":"BasicApiAiGatewayFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_ai_gateway_ref01","srcdatavar":"api_ai_gateway_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_ai_gateway_ref01"}}],"index$":0}]}, 'ApiAiGateway')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_ai_gateway_ref01_data = Object.values(setup.data.existing.api_ai_gateway)[0]

    // LOAD
    const api_ai_gateway_ref01_ent = client.ApiAiGateway()
    const api_ai_gateway_ref01_match_dt0 = {}
    const api_ai_gateway_ref01_data_dt0 = (await api_ai_gateway_ref01_ent.load(api_ai_gateway_ref01_match_dt0)).data()
    assert(null != api_ai_gateway_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/api_ai_gateway/ApiAiGatewayTestData.json')

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
    ['api_ai_gateway01','api_ai_gateway02','api_ai_gateway03','virtual_model_config01','virtual_model_config02','virtual_model_config03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_API_AI_GATEWAY_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_API_AI_GATEWAY_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_API_AI_GATEWAY_ENTID']
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
  
