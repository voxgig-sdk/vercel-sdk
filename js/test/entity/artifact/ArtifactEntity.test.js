
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


describe('ArtifactEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Artifact()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"hashes","req":true,"short":"artifact hashes","type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1}],"id":{"field":"id","name":"id"},"name":"artifact","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"VERCEL","kind":"header","name":"x_artifact_client_ci","orig":"x_artifact_client_ci","reqd":false,"type":"`$STRING`"},{"active":true,"example":0,"kind":"header","name":"x_artifact_client_interactive","orig":"x_artifact_client_interactive","reqd":false,"type":"`$INTEGER`"}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`"},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"POST /v8/artifacts/events","json":"{\"operationId\":\"recordEvents\",\"parameters\":[{\"description\":\"The continuous integration or delivery environment where this artifact is downloaded.\",\"in\":\"header\",\"name\":\"x-artifact-client-ci\",\"schema\":{\"description\":\"The continuous integration or delivery environment where this artifact is downloaded.\",\"example\":\"VERCEL\",\"maxLength\":50,\"type\":\"string\"}},{\"description\":\"1 if the client is an interactive shell. Otherwise 0\",\"in\":\"header\",\"name\":\"x-artifact-client-interactive\",\"schema\":{\"description\":\"1 if the client is an interactive shell. Otherwise 0\",\"example\":0,\"maximum\":1,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"properties\":{\"duration\":{\"description\":\"The time taken to generate the artifact. This should be sent as a body parameter on `HIT` events.\",\"example\":400,\"type\":\"number\"},\"event\":{\"description\":\"One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.\",\"enum\":[\"HIT\",\"MISS\"],\"type\":\"string\"},\"hash\":{\"description\":\"The artifact hash\",\"example\":\"12HKQaOmR5t5Uy6vdcQsNIiZgHGB\",\"type\":\"string\"},\"sessionId\":{\"description\":\"A UUID (universally unique identifer) for the session that generated this event.\",\"type\":\"string\"},\"source\":{\"description\":\"One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.\",\"enum\":[\"LOCAL\",\"REMOTE\"],\"type\":\"string\"}},\"required\":[\"sessionId\",\"source\",\"hash\",\"event\"],\"type\":\"object\"},\"type\":\"array\"}}},\"required\":true},\"responses\":{\"200\":{\"description\":\"Success. Event recorded.\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the headers is invalid\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\\nYou do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v8/artifacts/events","segments":[{"lit":"v8"},{"lit":"artifacts"},{"lit":"events"}],"select":{"$action":"event","exist":["slug","team_id","x_artifact_client_ci","x_artifact_client_interactive"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /v8/artifacts","json":"{\"operationId\":\"artifactQuery\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"hashes\":{\"description\":\"artifact hashes\",\"example\":[\"12HKQaOmR5t5Uy6vdcQsNIiZgHGB\",\"34HKQaOmR5t5Uy6vasdasdasdasd\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"hashes\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":{\"nullable\":true,\"oneOf\":[{\"properties\":{\"dirtyHash\":{\"type\":\"string\"},\"sha\":{\"type\":\"string\"},\"size\":{\"type\":\"number\"},\"tag\":{\"type\":\"string\"},\"taskDurationMs\":{\"type\":\"number\"}},\"required\":[\"size\",\"taskDurationMs\"],\"type\":\"object\"},{\"properties\":{\"error\":{\"properties\":{\"message\":{\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}]},\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\\nYou do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v8/artifacts","segments":[{"lit":"v8"},{"lit":"artifacts"}],"select":{"exist":["slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"VERCEL","kind":"header","name":"x_artifact_client_ci","orig":"x_artifact_client_ci","reqd":false,"type":"`$STRING`"},{"active":true,"example":0,"kind":"header","name":"x_artifact_client_interactive","orig":"x_artifact_client_interactive","reqd":false,"type":"`$INTEGER`"}],"params":[{"active":true,"example":"12HKQaOmR5t5Uy6vdcQsNIiZgHGB","kind":"param","name":"id","orig":"hash","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v8/artifacts/{hash}","json":"{\"operationId\":\"downloadArtifact\",\"parameters\":[{\"description\":\"The continuous integration or delivery environment where this artifact is downloaded.\",\"in\":\"header\",\"name\":\"x-artifact-client-ci\",\"schema\":{\"description\":\"The continuous integration or delivery environment where this artifact is downloaded.\",\"example\":\"VERCEL\",\"maxLength\":50,\"type\":\"string\"}},{\"description\":\"1 if the client is an interactive shell. Otherwise 0\",\"in\":\"header\",\"name\":\"x-artifact-client-interactive\",\"schema\":{\"description\":\"1 if the client is an interactive shell. Otherwise 0\",\"example\":0,\"maximum\":1,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"The artifact hash\",\"in\":\"path\",\"name\":\"hash\",\"required\":true,\"schema\":{\"description\":\"The artifact hash\",\"example\":\"12HKQaOmR5t5Uy6vdcQsNIiZgHGB\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"An octet stream response that will be piped to the response stream.\",\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"The artifact was found and is downloaded as a stream. Content-Length should be verified.\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\\nOne of the provided values in the headers is invalid\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\\nYou do not have permission to access this resource.\"},\"404\":{\"description\":\"The artifact was not found\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v8/artifacts/{hash}","rename":{"param":{"hash":"id"}},"segments":[{"lit":"v8"},{"lit":"artifacts"},{"var":"id"}],"select":{"exist":["id","slug","team_id","x_artifact_client_ci","x_artifact_client_interactive"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`"},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /v8/artifacts/status","json":"{\"operationId\":\"status\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"status\":{\"type\":\"string\"}},\"required\":[\"status\"],\"type\":\"object\"},{\"properties\":{\"status\":{\"enum\":[\"disabled\",\"enabled\",\"over_limit\",\"paused\"],\"type\":\"string\"}},\"required\":[\"status\"],\"type\":\"object\"}]}}},\"description\":\"\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v8/artifacts/status","segments":[{"lit":"v8"},{"lit":"artifacts"},{"lit":"status"}],"select":{"$action":"status","exist":["slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /v8/artifacts","json":"{\"operationId\":\"deleteAllArtifacts\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"deletedCount\":{\"type\":\"number\"}},\"required\":[\"deletedCount\"],\"type\":\"object\"}}},\"description\":\"Success. All cache artifacts for the account were deleted.\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v8/artifacts","segments":[{"lit":"v8"},{"lit":"artifacts"}],"select":{"exist":["slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"content_length","orig":"content_length","reqd":true,"type":"`$NUMBER`"},{"active":true,"example":"VERCEL","kind":"header","name":"x_artifact_client_ci","orig":"x_artifact_client_ci","reqd":false,"type":"`$STRING`"},{"active":true,"example":0,"kind":"header","name":"x_artifact_client_interactive","orig":"x_artifact_client_interactive","reqd":false,"type":"`$INTEGER`"},{"active":true,"kind":"header","name":"x_artifact_dirty_hash","orig":"x_artifact_dirty_hash","reqd":false,"type":"`$STRING`"},{"active":true,"example":400,"kind":"header","name":"x_artifact_duration","orig":"x_artifact_duration","reqd":false,"type":"`$NUMBER`"},{"active":true,"kind":"header","name":"x_artifact_sha","orig":"x_artifact_sha","reqd":false,"type":"`$STRING`"},{"active":true,"example":"Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ=","kind":"header","name":"x_artifact_tag","orig":"x_artifact_tag","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"12HKQaOmR5t5Uy6vdcQsNIiZgHGB","kind":"param","name":"id","orig":"hash","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"PUT /v8/artifacts/{hash}","json":"{\"operationId\":\"uploadArtifact\",\"parameters\":[{\"description\":\"The artifact size in bytes\",\"in\":\"header\",\"name\":\"Content-Length\",\"required\":true,\"schema\":{\"description\":\"The artifact size in bytes\",\"type\":\"number\"}},{\"description\":\"The time taken to generate the uploaded artifact in milliseconds.\",\"in\":\"header\",\"name\":\"x-artifact-duration\",\"required\":false,\"schema\":{\"description\":\"The time taken to generate the uploaded artifact in milliseconds.\",\"example\":400,\"type\":\"number\"}},{\"description\":\"The continuous integration or delivery environment where this artifact was generated.\",\"in\":\"header\",\"name\":\"x-artifact-client-ci\",\"required\":false,\"schema\":{\"description\":\"The continuous integration or delivery environment where this artifact was generated.\",\"example\":\"VERCEL\",\"maxLength\":50,\"type\":\"string\"}},{\"description\":\"1 if the client is an interactive shell. Otherwise 0\",\"in\":\"header\",\"name\":\"x-artifact-client-interactive\",\"required\":false,\"schema\":{\"description\":\"1 if the client is an interactive shell. Otherwise 0\",\"example\":0,\"maximum\":1,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`\",\"in\":\"header\",\"name\":\"x-artifact-tag\",\"required\":false,\"schema\":{\"description\":\"The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`\",\"example\":\"Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ=\",\"maxLength\":600,\"type\":\"string\"}},{\"description\":\"The SHA of the source control revision that generated this artifact.\",\"in\":\"header\",\"name\":\"x-artifact-sha\",\"required\":false,\"schema\":{\"description\":\"The SHA of the source control revision that generated this artifact.\",\"maxLength\":200,\"type\":\"string\"}},{\"description\":\"A hash representing uncommitted changes in the working directory when this artifact was generated.\",\"in\":\"header\",\"name\":\"x-artifact-dirty-hash\",\"required\":false,\"schema\":{\"description\":\"A hash representing uncommitted changes in the working directory when this artifact was generated.\",\"maxLength\":200,\"type\":\"string\"}},{\"description\":\"The artifact hash\",\"in\":\"path\",\"name\":\"hash\",\"required\":true,\"schema\":{\"description\":\"The artifact hash\",\"example\":\"12HKQaOmR5t5Uy6vdcQsNIiZgHGB\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/octet-stream\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"required\":true},\"responses\":{\"202\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"urls\":{\"description\":\"Array of URLs where the artifact was updated\",\"example\":[\"https://api.vercel.com/v2/now/artifact/12HKQaOmR5t5Uy6vdcQsNIiZgHGB\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"urls\"],\"type\":\"object\"}}},\"description\":\"File successfully uploaded\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\\nOne of the provided values in the headers is invalid\\nFile size is not valid\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\\nYou do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/v8/artifacts/{hash}","rename":{"param":{"hash":"id"}},"segments":[{"lit":"v8"},{"lit":"artifacts"},{"var":"id"}],"select":{"exist":["content_length","id","slug","team_id","x_artifact_client_ci","x_artifact_client_interactive","x_artifact_dirty_hash","x_artifact_duration","x_artifact_sha","x_artifact_tag"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"artifact","name__orig":"artifact","Name":"Artifact","name_":"artifact","name-":"artifact","NAME":"ARTIFACT","index$":9}, {"active":true,"entity":"artifact","key$":"BasicArtifactFlow","kind":"basic","name":"BasicArtifactFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"artifact_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"artifact_ref01","srcdatavar":"artifact_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-artifact_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"artifact_ref01","srcdatavar":"artifact_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-artifact_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"artifact_ref01","suffix":"_rm0"},"match":{},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'Artifact')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const artifact_ref01_ent = client.Artifact()
    let artifact_ref01_data = setup.data.new.artifact['artifact_ref01']

    artifact_ref01_data = (await artifact_ref01_ent.create(artifact_ref01_data)).data()
    assert(null != artifact_ref01_data.id)


    // UPDATE
    const artifact_ref01_data_up0 = {}
    artifact_ref01_data_up0.id = artifact_ref01_data.id

    const artifact_ref01_resdata_up0 = (await artifact_ref01_ent.update(artifact_ref01_data_up0)).data()
    assert(artifact_ref01_resdata_up0.id === artifact_ref01_data_up0.id)


    // LOAD
    const artifact_ref01_match_dt0 = {}
    artifact_ref01_match_dt0.id = artifact_ref01_data.id
    const artifact_ref01_data_dt0 = (await artifact_ref01_ent.load(artifact_ref01_match_dt0)).data()
    assert(artifact_ref01_data_dt0.id === artifact_ref01_data.id)


    // REMOVE
    const artifact_ref01_match_rm0 = {}
    artifact_ref01_match_rm0.id = artifact_ref01_data.id
    await artifact_ref01_ent.remove(artifact_ref01_match_rm0)
  

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/artifact/ArtifactTestData.json')

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
    ['artifact01','artifact02','artifact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_ARTIFACT_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_ARTIFACT_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_ARTIFACT_ENTID']
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
  
