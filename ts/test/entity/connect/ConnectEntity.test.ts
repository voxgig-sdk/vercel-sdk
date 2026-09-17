

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


describe('ConnectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Connect()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VERCEL_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'connect.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"additionalParams","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"audience","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"authorizationDetails","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"authorizationId","req":false,"short":"Stable id correlating all tokens (including refreshes) back to the original authorization.","type":"`$STRING`","index$":3},{"active":true,"name":"claims","req":false,"short":"Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list.","type":"`$OBJECT`","index$":4},{"active":true,"name":"connector","req":true,"type":"`$OBJECT`","index$":5},{"active":true,"name":"deviceCode","req":false,"type":"`$BOOLEAN`","index$":6},{"active":true,"name":"displayName","req":true,"short":"Provider-facing display name when the connector type exposes one, falling back to the stored connector name.","type":"`$STRING`","index$":7},{"active":true,"name":"expiresAt","req":true,"type":"`$NUMBER`","index$":8},{"active":true,"name":"expiresInMs","req":false,"type":"`$NUMBER`","index$":9},{"active":true,"name":"externalSubject","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"id","req":true,"short":"Client id (e.g.","type":"`$STRING`","index$":11},{"active":true,"name":"installationId","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"metadata","req":false,"short":"Driver-specific metadata (e.g., botUserId for Slack).","type":"`$OBJECT`","index$":13},{"active":true,"name":"name","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one.","type":"`$STRING`","index$":14},{"active":true,"name":"prompt","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"resources","req":false,"type":"`$ARRAY`","index$":16},{"active":true,"name":"returnUrl","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"scopes","req":false,"type":"`$ARRAY`","index$":18},{"active":true,"name":"service","req":false,"short":"Resolved service id when known (e.g.","type":"`$STRING`","index$":19},{"active":true,"name":"serviceName","req":false,"short":"Curated display name of the resolved service (e.g.","type":"`$STRING`","index$":20},{"active":true,"name":"subject","req":false,"type":"`$ANY`","union":{"branches":5,"count":1,"depth":0},"index$":21},{"active":true,"name":"tenantId","req":false,"type":"`$STRING`","index$":22},{"active":true,"name":"token","req":true,"type":"`$STRING`","index$":23},{"active":true,"name":"tokenGroupId","req":false,"short":"Stable id that groups all tokens with the same parameters across refreshes.","type":"`$STRING`","index$":24},{"active":true,"name":"tokenId","req":true,"type":"`$STRING`","index$":25},{"active":true,"name":"type","req":true,"short":"Client type (e.g.","type":"`$STRING`","index$":26},{"active":true,"name":"uid","req":true,"short":"Client uid (e.g.","type":"`$STRING`","index$":27},{"active":true,"name":"validityBufferMs","req":false,"type":"`$NUMBER`","index$":28},{"active":true,"name":"webhook","req":false,"type":"`$STRING`","index$":29}],"id":{"field":"id","name":"id"},"name":"connect","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"connector","orig":"connector","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /v1/connect/authorize/{connector}","json":"{\"operationId\":\"createConnectorAuthorizationRequest\",\"parameters\":[{\"in\":\"path\",\"name\":\"connector\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"additionalParams\":{\"additionalProperties\":{\"type\":\"string\"},\"type\":\"object\"},\"audience\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"authorizationDetails\":{\"items\":{\"additionalProperties\":true,\"properties\":{\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"deviceCode\":{\"type\":\"boolean\"},\"expiresInMs\":{\"type\":\"number\"},\"installationId\":{\"type\":\"string\"},\"prompt\":{\"type\":\"string\"},\"resources\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"returnUrl\":{\"type\":\"string\"},\"scopes\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"subject\":{\"anyOf\":[{\"additionalProperties\":true,\"properties\":{\"type\":{\"enum\":[\"app\"],\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"type:app\",\"type\":\"object\"},{\"additionalProperties\":true,\"properties\":{\"id\":{\"type\":\"string\"},\"issuer\":{\"type\":\"string\"},\"type\":{\"enum\":[\"user\"],\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"type:user\",\"type\":\"object\"},{\"additionalProperties\":true,\"properties\":{\"additionalClaims\":{\"additionalProperties\":true,\"type\":\"object\"},\"aud\":{\"type\":\"string\"},\"iss\":{\"type\":\"string\"},\"sub\":{\"type\":\"string\"},\"type\":{\"enum\":[\"jwt-bearer\"],\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"type:jwt-bearer\",\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"token\":{\"type\":\"string\"},\"type\":{\"enum\":[\"token\"],\"type\":\"string\"}},\"required\":[\"type\",\"token\"],\"title\":\"type:token\",\"type\":\"object\"},{\"additionalProperties\":true,\"not\":{\"properties\":{\"type\":{\"enum\":[\"token\"],\"type\":\"string\"}},\"required\":[\"type\"]},\"properties\":{\"type\":{\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"type:other\",\"type\":\"object\"}]},\"validityBufferMs\":{\"type\":\"number\"},\"webhook\":{\"type\":\"string\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"connector\":{\"properties\":{\"displayName\":{\"description\":\"Provider-facing display name when the connector type exposes one, falling back to the stored connector name.\",\"type\":\"string\"},\"id\":{\"description\":\"Client id (e.g. `scl_…`).\",\"type\":\"string\"},\"name\":{\"description\":\"The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one.\",\"type\":\"string\"},\"service\":{\"description\":\"Resolved service id when known (e.g. `salesforce`), following the `stored.service ?? typeDef.service ?? stored.type` convention.\",\"type\":\"string\"},\"serviceName\":{\"description\":\"Curated display name of the resolved service (e.g. \\\"Salesforce\\\"), present when the service is a known service. Suited for end-user surfaces like \\\"Sign in with {serviceName}\\\".\",\"type\":\"string\"},\"type\":{\"description\":\"Client type (e.g. `oauth`, `salesforce`).\",\"type\":\"string\"},\"uid\":{\"description\":\"Client uid (e.g. `salesforce/my-org`).\",\"type\":\"string\"}},\"required\":[\"displayName\",\"id\",\"name\",\"type\",\"uid\"],\"type\":\"object\"},\"deviceCode\":{\"type\":\"string\"},\"expiresAt\":{\"type\":\"number\"},\"request\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"verifier\":{\"type\":\"string\"}},\"required\":[\"connector\",\"expiresAt\",\"request\",\"url\",\"verifier\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/connect/authorize/{connector}","segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"authorize"},{"var":"connector"}],"select":{"exist":["connector"]},"transform":{"req":"`reqdata`","res":"`body.connector`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"connector","orig":"connector","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /v1/connect/token/{connector}","json":"{\"operationId\":\"getConnectorToken\",\"parameters\":[{\"in\":\"path\",\"name\":\"connector\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"audience\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"authorizationDetails\":{\"items\":{\"additionalProperties\":true,\"properties\":{\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"installationId\":{\"type\":\"string\"},\"resources\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"scopes\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"subject\":{\"anyOf\":[{\"additionalProperties\":true,\"properties\":{\"type\":{\"enum\":[\"app\"],\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"type:app\",\"type\":\"object\"},{\"additionalProperties\":true,\"properties\":{\"id\":{\"type\":\"string\"},\"issuer\":{\"type\":\"string\"},\"type\":{\"enum\":[\"user\"],\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"type:user\",\"type\":\"object\"},{\"additionalProperties\":true,\"properties\":{\"additionalClaims\":{\"additionalProperties\":true,\"type\":\"object\"},\"aud\":{\"type\":\"string\"},\"iss\":{\"type\":\"string\"},\"sub\":{\"type\":\"string\"},\"type\":{\"enum\":[\"jwt-bearer\"],\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"type:jwt-bearer\",\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"token\":{\"type\":\"string\"},\"type\":{\"enum\":[\"token\"],\"type\":\"string\"}},\"required\":[\"type\",\"token\"],\"title\":\"type:token\",\"type\":\"object\"},{\"additionalProperties\":true,\"not\":{\"properties\":{\"type\":{\"enum\":[\"token\"],\"type\":\"string\"}},\"required\":[\"type\"]},\"properties\":{\"type\":{\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"type:other\",\"type\":\"object\"}]},\"validityBufferMs\":{\"type\":\"number\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"authorizationId\":{\"description\":\"Stable id correlating all tokens (including refreshes) back to the original authorization.\",\"type\":\"string\"},\"claims\":{\"additionalProperties\":true,\"description\":\"Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. Currently sourced from the OIDC id_token only.\",\"type\":\"object\"},\"connector\":{\"properties\":{\"id\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"uid\":{\"type\":\"string\"}},\"required\":[\"id\",\"type\",\"uid\"],\"type\":\"object\"},\"expiresAt\":{\"type\":\"number\"},\"externalSubject\":{\"type\":\"string\"},\"installationId\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":true,\"description\":\"Driver-specific metadata (e.g., botUserId for Slack).\",\"type\":\"object\"},\"name\":{\"type\":\"string\"},\"tenantId\":{\"type\":\"string\"},\"token\":{\"type\":\"string\"},\"tokenGroupId\":{\"description\":\"Stable id that groups all tokens with the same parameters across refreshes.\",\"type\":\"string\"},\"tokenId\":{\"type\":\"string\"}},\"required\":[\"connector\",\"expiresAt\",\"token\",\"tokenId\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"},\"422\":{\"description\":\"\"},\"429\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/connect/token/{connector}","segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"token"},{"var":"connector"}],"select":{"exist":["connector"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"connector_id","orig":"connector","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /v1/connect/connectors/{connector}/projects/{projectId}","json":"{\"operationId\":\"deleteConnectorProjectConnection\",\"parameters\":[{\"description\":\"Stable connector ID or URL-encoded team-scoped UID. Examples: `scl_abc123` or `slack%2Fmy-bot`.\",\"in\":\"path\",\"name\":\"connector\",\"required\":true,\"schema\":{\"description\":\"Stable connector ID or URL-encoded team-scoped UID. Examples: `scl_abc123` or `slack%2Fmy-bot`.\",\"type\":\"string\"}},{\"description\":\"Vercel project ID.\",\"in\":\"path\",\"name\":\"projectId\",\"required\":true,\"schema\":{\"description\":\"Vercel project ID.\",\"type\":\"string\"}},{\"description\":\"The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"The connector was disconnected from the project.\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"error\":{\"additionalProperties\":true,\"description\":\"Error details.\",\"properties\":{\"code\":{\"description\":\"Stable machine-readable error code.\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message.\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The request is not authorized.\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The requested resource was not found.\"},\"410\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The requested resource is no longer available.\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v1/connect/connectors/{connector}/projects/{projectId}","rename":{"param":{"connector":"connector_id","projectId":"project_id"}},"segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"connectors"},{"var":"connector_id"},{"lit":"projects"},{"var":"project_id"}],"select":{"exist":["connector_id","project_id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"connector","orig":"connector","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /v1/connect/connectors/{connector}","json":"{\"operationId\":\"deleteConnector\",\"parameters\":[{\"description\":\"Stable connector ID or URL-encoded team-scoped UID. Examples: `scl_abc123` or `slack%2Fmy-bot`.\",\"in\":\"path\",\"name\":\"connector\",\"required\":true,\"schema\":{\"description\":\"Stable connector ID or URL-encoded team-scoped UID. Examples: `scl_abc123` or `slack%2Fmy-bot`.\",\"type\":\"string\"}},{\"description\":\"The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"The connector, its project connections, and its installation records were deleted.\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"error\":{\"additionalProperties\":true,\"description\":\"Error details.\",\"properties\":{\"code\":{\"description\":\"Stable machine-readable error code.\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message.\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The request is not authorized.\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The requested resource was not found.\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The request conflicts with the current resource state.\"},\"410\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The requested resource is no longer available.\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"The request cannot be completed in the current state.\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error response returned by a Connect API operation.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"type\":\"object\"}}},\"description\":\"A dependency returned an invalid or unsuccessful response.\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v1/connect/connectors/{connector}","segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"connectors"},{"var":"connector"}],"select":{"exist":["connector","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["authorize"],["connector"],["token"],["connector","project"]]},"key$":"connect","name__orig":"connect","Name":"Connect","name_":"connect","name-":"connect","NAME":"CONNECT","index$":16}, {"active":true,"entity":"connect","key$":"BasicConnectFlow","kind":"basic","name":"BasicConnectFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"connect_ref01"},"match":{"connector":"connector01","connector_id":"connector01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"connect_ref01","suffix":"_rm0"},"match":{"id":"connect01"},"op":"remove","spec":[],"valid":[],"index$":1}]}, 'Connect')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const connect_ref01_ent = client.Connect()
    let connect_ref01_data = setup.data.new.connect['connect_ref01']
    connect_ref01_data['connector'] = setup.idmap['connector01']
    connect_ref01_data['connector_id'] = setup.idmap['connector01']

    connect_ref01_data = (await connect_ref01_ent.create(connect_ref01_data)).data()
    assert(null != connect_ref01_data.id)


    // REMOVE
    const connect_ref01_match_rm0: any = { id: connect_ref01_data.id }
    await connect_ref01_ent.remove(connect_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/connect/ConnectTestData.json')

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
    ['connect01','connect02','connect03','authorize01','authorize02','authorize03','connector01','connector02','connector03','token01','token02','token03','connector01','connector02','connector03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_CONNECT_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_CONNECT_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_CONNECT_ENTID']
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
  
