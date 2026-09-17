
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


describe('NetworkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Network()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"awsAccountId","req":true,"short":"The ID of the AWS Account in which the network exists.","type":"`$STRING`","index$":0},{"active":true,"name":"awsAvailabilityZoneIds","req":false,"short":"The IDs of the AWS Availability Zones in which the network exists, if specified during creation.","type":"`$ARRAY`","index$":1},{"active":true,"name":"awsRegion","req":true,"short":"The AWS Region in which the network exists.","type":"`$STRING`","index$":2},{"active":true,"name":"cidr","req":true,"short":"The CIDR range of the Network.","type":"`$STRING`","index$":3},{"active":true,"name":"createdAt","req":true,"short":"The date at which the Network was created, represented as a UNIX timestamp since EPOCH.","type":"`$NUMBER`","index$":4},{"active":true,"name":"egressIpAddresses","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"hostedZones","req":true,"short":"Metadata about any AWS Route53 Hosted Zones associated with the Network.","type":"`$OBJECT`","index$":6},{"active":true,"name":"id","req":true,"short":"The unique identifier of the Network.","type":"`$STRING`","index$":7},{"active":true,"name":"name","req":true,"short":"The name of the network.","type":"`$STRING`","index$":8},{"active":true,"name":"peeringConnections","req":true,"short":"Metadata about any AWS Route53 Hosted Zones associated with the Network.","type":"`$OBJECT`","index$":9},{"active":true,"name":"projects","req":true,"short":"Metadata about any projects associated with the Network.","type":"`$OBJECT`","index$":10},{"active":true,"name":"region","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The Vercel region in which the Network exists.","type":"`$STRING`","index$":11},{"active":true,"name":"status","req":true,"short":"The status of the Network.","type":"`$STRING`","index$":12},{"active":true,"name":"teamId","req":true,"short":"The unique identifier of the Team that owns the Network.","type":"`$STRING`","index$":13},{"active":true,"name":"vpcId","req":false,"short":"The ID of the VPC which hosts the network.","type":"`$STRING`","index$":14}],"id":{"field":"id","name":"id"},"name":"network","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /v1/connect/networks","json":"{\"operationId\":\"createNetwork\",\"parameters\":[{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"awsAvailabilityZoneIds\":{\"items\":{\"description\":\"An AWS Availability Zone ID to use for the network\",\"example\":\"use1-az1\",\"type\":\"string\"},\"maxItems\":2,\"minItems\":2,\"type\":\"array\"},\"cidr\":{\"description\":\"The CIDR block of the network\",\"example\":\"192.168.0.0/16\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the network\",\"maxLength\":255,\"type\":\"string\"},\"region\":{\"description\":\"The region where the network will be created\",\"example\":\"iad1\",\"type\":\"string\"}},\"required\":[\"cidr\",\"name\",\"region\"],\"type\":\"object\"}}}},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"awsAccountId\":{\"description\":\"The ID of the AWS Account in which the network exists.\",\"type\":\"string\"},\"awsAvailabilityZoneIds\":{\"description\":\"The IDs of the AWS Availability Zones in which the network exists, if specified during creation.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"awsRegion\":{\"description\":\"The AWS Region in which the network exists.\",\"type\":\"string\"},\"cidr\":{\"description\":\"The CIDR range of the Network.\",\"type\":\"string\"},\"createdAt\":{\"description\":\"The date at which the Network was created, represented as a UNIX timestamp since EPOCH.\",\"type\":\"number\"},\"egressIpAddresses\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"hostedZones\":{\"description\":\"Metadata about any AWS Route53 Hosted Zones associated with the Network.\",\"properties\":{\"count\":{\"description\":\"The number of AWS Route53 Hosted Zones associated with the Network.\",\"type\":\"number\"}},\"required\":[\"count\"],\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier of the Network.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the network.\",\"type\":\"string\"},\"peeringConnections\":{\"description\":\"Metadata about any AWS Route53 Hosted Zones associated with the Network.\",\"properties\":{\"count\":{\"description\":\"The number of AWS Route53 Hosted Zones associated with the Network.\",\"type\":\"number\"}},\"required\":[\"count\"],\"type\":\"object\"},\"projects\":{\"description\":\"Metadata about any projects associated with the Network.\",\"properties\":{\"count\":{\"type\":\"number\"},\"ids\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"count\",\"ids\"],\"type\":\"object\"},\"region\":{\"description\":\"The Vercel region in which the Network exists.\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the Network.\",\"enum\":[\"create_in_progress\",\"delete_in_progress\",\"error\",\"ready\"],\"type\":\"string\"},\"teamId\":{\"description\":\"The unique identifier of the Team that owns the Network.\",\"type\":\"string\"},\"vpcId\":{\"description\":\"The ID of the VPC which hosts the network.\",\"type\":\"string\"}},\"required\":[\"awsAccountId\",\"awsRegion\",\"cidr\",\"createdAt\",\"id\",\"name\",\"status\",\"teamId\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/connect/networks","segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"networks"}],"select":{"exist":["slug","team_id"]},"transform":{"req":{"awsAvailabilityZoneIds":"`reqdata.aws_availability_zone_id`","cidr":"`reqdata.cidr`","name":"`reqdata.name`","region":"`reqdata.region`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":true,"kind":"query","name":"include_hosted_zone","orig":"include_hosted_zone","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":true,"kind":"query","name":"include_peering_connection","orig":"include_peering_connection","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":true,"kind":"query","name":"include_project","orig":"include_project","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /v1/connect/networks","json":"{\"operationId\":\"listNetworks\",\"parameters\":[{\"description\":\"Whether to include Hosted Zones in the response\",\"in\":\"query\",\"name\":\"includeHostedZones\",\"schema\":{\"default\":true,\"description\":\"Whether to include Hosted Zones in the response\",\"type\":\"boolean\"}},{\"description\":\"Whether to include VPC Peering connections in the response\",\"in\":\"query\",\"name\":\"includePeeringConnections\",\"schema\":{\"default\":true,\"description\":\"Whether to include VPC Peering connections in the response\",\"type\":\"boolean\"}},{\"description\":\"Whether to include projects in the response\",\"in\":\"query\",\"name\":\"includeProjects\",\"schema\":{\"default\":true,\"description\":\"Whether to include projects in the response\",\"type\":\"boolean\"}},{\"description\":\"The query to use as a filter for returned networks\",\"in\":\"query\",\"name\":\"search\",\"schema\":{\"description\":\"The query to use as a filter for returned networks\",\"maxLength\":255,\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"awsAccountId\":{\"description\":\"The ID of the AWS Account in which the network exists.\",\"type\":\"string\"},\"awsAvailabilityZoneIds\":{\"description\":\"The IDs of the AWS Availability Zones in which the network exists, if specified during creation.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"awsRegion\":{\"description\":\"The AWS Region in which the network exists.\",\"type\":\"string\"},\"cidr\":{\"description\":\"The CIDR range of the Network.\",\"type\":\"string\"},\"createdAt\":{\"description\":\"The date at which the Network was created, represented as a UNIX timestamp since EPOCH.\",\"type\":\"number\"},\"egressIpAddresses\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"hostedZones\":{\"description\":\"Metadata about any AWS Route53 Hosted Zones associated with the Network.\",\"properties\":{\"count\":{\"description\":\"The number of AWS Route53 Hosted Zones associated with the Network.\",\"type\":\"number\"}},\"required\":[\"count\"],\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier of the Network.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the network.\",\"type\":\"string\"},\"peeringConnections\":{\"description\":\"Metadata about any AWS Route53 Hosted Zones associated with the Network.\",\"properties\":{\"count\":{\"description\":\"The number of AWS Route53 Hosted Zones associated with the Network.\",\"type\":\"number\"}},\"required\":[\"count\"],\"type\":\"object\"},\"projects\":{\"description\":\"Metadata about any projects associated with the Network.\",\"properties\":{\"count\":{\"type\":\"number\"},\"ids\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"count\",\"ids\"],\"type\":\"object\"},\"region\":{\"description\":\"The Vercel region in which the Network exists.\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the Network.\",\"enum\":[\"create_in_progress\",\"delete_in_progress\",\"error\",\"ready\"],\"type\":\"string\"},\"teamId\":{\"description\":\"The unique identifier of the Team that owns the Network.\",\"type\":\"string\"},\"vpcId\":{\"description\":\"The ID of the VPC which hosts the network.\",\"type\":\"string\"}},\"required\":[\"awsAccountId\",\"awsRegion\",\"cidr\",\"createdAt\",\"id\",\"name\",\"status\",\"teamId\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/connect/networks","segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"networks"}],"select":{"exist":["include_hosted_zone","include_peering_connection","include_project","search","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"uzrmorq7bn05z-fz","kind":"param","name":"id","orig":"network_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v1/connect/networks/{networkId}","json":"{\"operationId\":\"readNetwork\",\"parameters\":[{\"description\":\"The unique identifier of the Secure Compute network\",\"in\":\"path\",\"name\":\"networkId\",\"required\":true,\"schema\":{\"description\":\"The unique identifier of the Secure Compute network\",\"example\":\"uzrmorq7bn05z-fz\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"awsAccountId\":{\"description\":\"The ID of the AWS Account in which the network exists.\",\"type\":\"string\"},\"awsAvailabilityZoneIds\":{\"description\":\"The IDs of the AWS Availability Zones in which the network exists, if specified during creation.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"awsRegion\":{\"description\":\"The AWS Region in which the network exists.\",\"type\":\"string\"},\"cidr\":{\"description\":\"The CIDR range of the Network.\",\"type\":\"string\"},\"createdAt\":{\"description\":\"The date at which the Network was created, represented as a UNIX timestamp since EPOCH.\",\"type\":\"number\"},\"egressIpAddresses\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"hostedZones\":{\"description\":\"Metadata about any AWS Route53 Hosted Zones associated with the Network.\",\"properties\":{\"count\":{\"description\":\"The number of AWS Route53 Hosted Zones associated with the Network.\",\"type\":\"number\"}},\"required\":[\"count\"],\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier of the Network.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the network.\",\"type\":\"string\"},\"peeringConnections\":{\"description\":\"Metadata about any AWS Route53 Hosted Zones associated with the Network.\",\"properties\":{\"count\":{\"description\":\"The number of AWS Route53 Hosted Zones associated with the Network.\",\"type\":\"number\"}},\"required\":[\"count\"],\"type\":\"object\"},\"projects\":{\"description\":\"Metadata about any projects associated with the Network.\",\"properties\":{\"count\":{\"type\":\"number\"},\"ids\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"count\",\"ids\"],\"type\":\"object\"},\"region\":{\"description\":\"The Vercel region in which the Network exists.\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the Network.\",\"enum\":[\"create_in_progress\",\"delete_in_progress\",\"error\",\"ready\"],\"type\":\"string\"},\"teamId\":{\"description\":\"The unique identifier of the Team that owns the Network.\",\"type\":\"string\"},\"vpcId\":{\"description\":\"The ID of the VPC which hosts the network.\",\"type\":\"string\"}},\"required\":[\"awsAccountId\",\"awsRegion\",\"cidr\",\"createdAt\",\"id\",\"name\",\"status\",\"teamId\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/connect/networks/{networkId}","rename":{"param":{"networkId":"id"}},"segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"networks"},{"var":"id"}],"select":{"exist":["id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"uzrmorq7bn05z-fz","kind":"param","name":"id","orig":"network_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /v1/connect/networks/{networkId}","json":"{\"operationId\":\"deleteNetwork\",\"parameters\":[{\"description\":\"The ID of the network to delete\",\"in\":\"path\",\"name\":\"networkId\",\"required\":true,\"schema\":{\"description\":\"The ID of the network to delete\",\"example\":\"uzrmorq7bn05z-fz\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v1/connect/networks/{networkId}","rename":{"param":{"networkId":"id"}},"segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"networks"},{"var":"id"}],"select":{"exist":["id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"uzrmorq7bn05z-fz","kind":"param","name":"id","orig":"network_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"PATCH /v1/connect/networks/{networkId}","json":"{\"operationId\":\"updateNetwork\",\"parameters\":[{\"description\":\"The unique identifier of the Secure Compute network\",\"in\":\"path\",\"name\":\"networkId\",\"required\":true,\"schema\":{\"description\":\"The unique identifier of the Secure Compute network\",\"example\":\"uzrmorq7bn05z-fz\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"name\":{\"description\":\"The name of the Secure Compute network\",\"maxLength\":255,\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"awsAccountId\":{\"description\":\"The ID of the AWS Account in which the network exists.\",\"type\":\"string\"},\"awsAvailabilityZoneIds\":{\"description\":\"The IDs of the AWS Availability Zones in which the network exists, if specified during creation.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"awsRegion\":{\"description\":\"The AWS Region in which the network exists.\",\"type\":\"string\"},\"cidr\":{\"description\":\"The CIDR range of the Network.\",\"type\":\"string\"},\"createdAt\":{\"description\":\"The date at which the Network was created, represented as a UNIX timestamp since EPOCH.\",\"type\":\"number\"},\"egressIpAddresses\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"hostedZones\":{\"description\":\"Metadata about any AWS Route53 Hosted Zones associated with the Network.\",\"properties\":{\"count\":{\"description\":\"The number of AWS Route53 Hosted Zones associated with the Network.\",\"type\":\"number\"}},\"required\":[\"count\"],\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier of the Network.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the network.\",\"type\":\"string\"},\"peeringConnections\":{\"description\":\"Metadata about any AWS Route53 Hosted Zones associated with the Network.\",\"properties\":{\"count\":{\"description\":\"The number of AWS Route53 Hosted Zones associated with the Network.\",\"type\":\"number\"}},\"required\":[\"count\"],\"type\":\"object\"},\"projects\":{\"description\":\"Metadata about any projects associated with the Network.\",\"properties\":{\"count\":{\"type\":\"number\"},\"ids\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"count\",\"ids\"],\"type\":\"object\"},\"region\":{\"description\":\"The Vercel region in which the Network exists.\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the Network.\",\"enum\":[\"create_in_progress\",\"delete_in_progress\",\"error\",\"ready\"],\"type\":\"string\"},\"teamId\":{\"description\":\"The unique identifier of the Team that owns the Network.\",\"type\":\"string\"},\"vpcId\":{\"description\":\"The ID of the VPC which hosts the network.\",\"type\":\"string\"}},\"required\":[\"awsAccountId\",\"awsRegion\",\"cidr\",\"createdAt\",\"id\",\"name\",\"status\",\"teamId\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/v1/connect/networks/{networkId}","rename":{"param":{"networkId":"id"}},"segments":[{"lit":"v1"},{"lit":"connect"},{"lit":"networks"},{"var":"id"}],"select":{"exist":["id","slug","team_id"]},"transform":{"req":{"name":"`reqdata.name`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"network","name__orig":"network","Name":"Network","name_":"network","name-":"network","NAME":"NETWORK","index$":44}, {"active":true,"entity":"network","key$":"BasicNetworkFlow","kind":"basic","name":"BasicNetworkFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"network_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"network_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"network_ref01","srcdatavar":"network_ref01_data","suffix":"_up0","textfield":"awsAccountId"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-network_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"network_ref01","srcdatavar":"network_ref01_data","suffix":"_dt0"},"match":{"id":"network01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-network_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"network_ref01","suffix":"_rm0"},"match":{"id":"network01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"network_ref01"}}],"index$":5}]}, 'Network')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const network_ref01_ent = client.Network()
    let network_ref01_data = setup.data.new.network['network_ref01']

    network_ref01_data = (await network_ref01_ent.create(network_ref01_data)).data()
    assert(null != network_ref01_data.id)


    // LIST
    const network_ref01_match = {}

    const network_ref01_list = (await network_ref01_ent.list(network_ref01_match)).map((e) => e.data())

    assert(!isempty(select(network_ref01_list, { id: network_ref01_data.id })))


    // UPDATE
    const network_ref01_data_up0 = {}
    network_ref01_data_up0.id = network_ref01_data.id

    const network_ref01_markdef_up0 = { name: 'awsAccountId', value: 'Mark01-network_ref01_' + setup.now }
    network_ref01_data_up0 [network_ref01_markdef_up0.name] = network_ref01_markdef_up0.value

    const network_ref01_resdata_up0 = (await network_ref01_ent.update(network_ref01_data_up0)).data()
    assert(network_ref01_resdata_up0.id === network_ref01_data_up0.id)

    assert(network_ref01_resdata_up0[network_ref01_markdef_up0.name] === network_ref01_markdef_up0.value)


    // LOAD
    const network_ref01_match_dt0 = {}
    network_ref01_match_dt0.id = network_ref01_data.id
    const network_ref01_data_dt0 = (await network_ref01_ent.load(network_ref01_match_dt0)).data()
    assert(network_ref01_data_dt0.id === network_ref01_data.id)


    // REMOVE
    const network_ref01_match_rm0 = {}
    network_ref01_match_rm0.id = network_ref01_data.id
    await network_ref01_ent.remove(network_ref01_match_rm0)
  

    // LIST
    const network_ref01_match_rt0 = {}

    const network_ref01_list_rt0 = (await network_ref01_ent.list(network_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(network_ref01_list_rt0, { id: network_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/network/NetworkTestData.json')

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
    ['network01','network02','network03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_NETWORK_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_NETWORK_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_NETWORK_ENTID']
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
  
