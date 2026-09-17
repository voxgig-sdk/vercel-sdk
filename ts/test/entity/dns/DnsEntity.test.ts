

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


describe('DnsEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VERCEL_TEST_LIVE=TRUE.
  afterEach(liveDelay('VERCEL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VercelSDK.test()
    const ent = testsdk.Dns()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VERCEL_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dns.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"comment","req":false,"short":"A comment to add context on what this DNS record is for","type":"`$STRING`","index$":0},{"active":true,"name":"createdAt","req":false,"type":"`$NUMBER`","index$":1},{"active":true,"name":"creator","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"domain","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"https","req":true,"type":"`$OBJECT`","index$":4},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"mxPriority","req":false,"short":"The MX priority value of the DNS record","type":"`$INTEGER`","index$":6},{"active":true,"name":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The name of the DNS record","type":"`$STRING`","index$":7},{"active":true,"name":"recordType","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"srv","req":true,"type":"`$OBJECT`","index$":9},{"active":true,"name":"ttl","req":false,"short":"The Time to live (TTL) value of the DNS record","type":"`$NUMBER`","index$":10},{"active":true,"name":"type","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The type of record, it could be one of the valid DNS records.","type":"`$STRING`","index$":11},{"active":true,"name":"value","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The value of the DNS record","type":"`$STRING`","index$":12}],"id":{"field":"id","name":"id"},"name":"dns","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"example.com","kind":"param","name":"domain_id","orig":"domain","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /v2/domains/{domain}/records","json":"{\"operationId\":\"createRecord\",\"parameters\":[{\"description\":\"The domain used to create the DNS record.\",\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"schema\":{\"description\":\"The domain used to create the DNS record.\",\"example\":\"example.com\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"anyOf\":[{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"name\":{\"description\":\"A subdomain name or an empty string for the root domain.\",\"example\":\"subdomain\",\"type\":\"string\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `A`.\",\"enum\":[\"A\"],\"type\":\"string\"},\"value\":{\"description\":\"The record value must be a valid IPv4 address.\",\"example\":\"192.0.2.42\",\"format\":\"ipv4\",\"type\":\"string\"}},\"required\":[\"type\",\"value\",\"name\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"name\":{\"description\":\"A subdomain name or an empty string for the root domain.\",\"example\":\"subdomain\",\"type\":\"string\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `AAAA`.\",\"enum\":[\"AAAA\"],\"type\":\"string\"},\"value\":{\"description\":\"An AAAA record pointing to an IPv6 address.\",\"example\":\"2001:DB8::42\",\"format\":\"ipv6\",\"type\":\"string\"}},\"required\":[\"type\",\"value\",\"name\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"name\":{\"description\":\"A subdomain name or an empty string for the root domain.\",\"example\":\"subdomain\",\"type\":\"string\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `ALIAS`.\",\"enum\":[\"ALIAS\"],\"type\":\"string\"},\"value\":{\"description\":\"An ALIAS virtual record pointing to a hostname resolved to an A record on server side.\",\"example\":\"cname.vercel-dns.com\",\"type\":\"string\"}},\"required\":[\"type\",\"value\",\"name\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"name\":{\"description\":\"A subdomain name or an empty string for the root domain.\",\"example\":\"subdomain\",\"type\":\"string\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `CAA`.\",\"enum\":[\"CAA\"],\"type\":\"string\"},\"value\":{\"description\":\"A CAA record to specify which Certificate Authorities (CAs) are allowed to issue certificates for the domain.\",\"example\":\"0 issue \\\"letsencrypt.org\\\"\",\"type\":\"string\"}},\"required\":[\"type\",\"value\",\"name\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"name\":{\"description\":\"A subdomain name or an empty string for the root domain.\",\"example\":\"subdomain\",\"type\":\"string\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `CNAME`.\",\"enum\":[\"CNAME\"],\"type\":\"string\"},\"value\":{\"description\":\"A CNAME record mapping to another domain name.\",\"example\":\"cname.vercel-dns.com\",\"type\":\"string\"}},\"required\":[\"type\",\"name\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"mxPriority\":{\"example\":10,\"maximum\":65535,\"minimum\":0,\"type\":\"number\"},\"name\":{\"description\":\"A subdomain name or an empty string for the root domain.\",\"example\":\"subdomain\",\"type\":\"string\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `MX`.\",\"enum\":[\"MX\"],\"type\":\"string\"},\"value\":{\"description\":\"An MX record specifying the mail server responsible for accepting messages on behalf of the domain name.\",\"example\":\"10 mail.example.com.\",\"type\":\"string\"}},\"required\":[\"type\",\"value\",\"name\",\"mxPriority\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"srv\":{\"additionalProperties\":false,\"properties\":{\"port\":{\"anyOf\":[{\"example\":5000,\"maximum\":65535,\"minimum\":0,\"type\":\"number\"}],\"nullable\":true},\"priority\":{\"anyOf\":[{\"example\":10,\"maximum\":65535,\"minimum\":0,\"type\":\"number\"}],\"nullable\":true},\"target\":{\"example\":\"host.example.com\",\"type\":\"string\"},\"weight\":{\"anyOf\":[{\"example\":10,\"maximum\":65535,\"minimum\":0,\"type\":\"number\"}],\"nullable\":true}},\"required\":[\"weight\",\"port\",\"priority\",\"target\"],\"type\":\"object\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `SRV`.\",\"enum\":[\"SRV\"],\"type\":\"string\"}},\"required\":[\"type\",\"name\",\"srv\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `TXT`.\",\"enum\":[\"TXT\"],\"type\":\"string\"},\"value\":{\"description\":\"A TXT record containing arbitrary text.\",\"example\":\"hello\",\"type\":\"string\"}},\"required\":[\"type\",\"value\",\"name\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"name\":{\"description\":\"A subdomain name.\",\"example\":\"subdomain\",\"type\":\"string\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `NS`.\",\"enum\":[\"NS\"],\"type\":\"string\"},\"value\":{\"description\":\"An NS domain value.\",\"example\":\"ns1.example.com\",\"type\":\"string\"}},\"required\":[\"type\",\"name\"],\"type\":\"object\"},{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"https\":{\"additionalProperties\":false,\"properties\":{\"params\":{\"example\":\"alpn=h2,h3\",\"type\":\"string\"},\"priority\":{\"anyOf\":[{\"example\":10,\"maximum\":65535,\"minimum\":0,\"type\":\"number\"}],\"nullable\":true},\"target\":{\"example\":\"host.example.com\",\"type\":\"string\"}},\"required\":[\"priority\",\"target\"],\"type\":\"object\"},\"ttl\":{\"description\":\"The TTL value. Must be a number between 60 and 2147483647. Default value is 60.\",\"example\":60,\"maximum\":2147483647,\"minimum\":60,\"type\":\"number\"},\"type\":{\"description\":\"Must be of type `HTTPS`.\",\"enum\":[\"HTTPS\"],\"type\":\"string\"}},\"required\":[\"type\",\"name\",\"https\"],\"type\":\"object\"}],\"properties\":{\"type\":{\"description\":\"The type of record, it could be one of the valid DNS records.\",\"enum\":[\"A\",\"AAAA\",\"ALIAS\",\"CAA\",\"CNAME\",\"HTTPS\",\"MX\",\"SRV\",\"TXT\",\"NS\"],\"type\":\"string\"}},\"required\":[\"type\"]}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"uid\":{\"type\":\"string\"},\"updated\":{\"type\":\"number\"}},\"required\":[\"updated\"],\"type\":\"object\"},{\"properties\":{\"uid\":{\"description\":\"The id of the newly created DNS record\",\"example\":\"rec_V0fra8eEgQwEpFhYG2vTzC3K\",\"type\":\"string\"}},\"required\":[\"uid\"],\"type\":\"object\"}]}}},\"description\":\"Successful response showing the uid of the newly created DNS record.\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v2/domains/{domain}/records","rename":{"param":{"domain":"domain_id"}},"segments":[{"lit":"v2"},{"lit":"domains"},{"var":"domain_id"},{"lit":"records"}],"select":{"exist":["domain_id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"example.com","kind":"param","name":"domain_id","orig":"domain","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":20,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1609499532000,"kind":"query","name":"since","orig":"since","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":1612264332000,"kind":"query","name":"until","orig":"until","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /v5/domains/{domain}/records","json":"{\"operationId\":\"getRecords\",\"parameters\":[{\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"schema\":{\"example\":\"example.com\",\"type\":\"string\"}},{\"description\":\"Maximum number of records to list from a request.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"description\":\"Maximum number of records to list from a request.\",\"example\":20,\"type\":\"string\"}},{\"description\":\"Get records created after this JavaScript timestamp.\",\"in\":\"query\",\"name\":\"since\",\"required\":false,\"schema\":{\"description\":\"Get records created after this JavaScript timestamp.\",\"example\":1609499532000,\"type\":\"string\"}},{\"description\":\"Get records created before this JavaScript timestamp.\",\"in\":\"query\",\"name\":\"until\",\"required\":false,\"schema\":{\"description\":\"Get records created before this JavaScript timestamp.\",\"example\":1612264332000,\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"type\":\"string\"},{\"properties\":{\"records\":{\"items\":{\"properties\":{\"comment\":{\"type\":\"string\"},\"created\":{\"nullable\":true,\"type\":\"number\"},\"createdAt\":{\"nullable\":true,\"type\":\"number\"},\"creator\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"mxPriority\":{\"type\":\"number\"},\"name\":{\"type\":\"string\"},\"priority\":{\"type\":\"number\"},\"slug\":{\"type\":\"string\"},\"ttl\":{\"type\":\"number\"},\"type\":{\"enum\":[\"A\",\"AAAA\",\"ALIAS\",\"CAA\",\"CNAME\",\"HTTPS\",\"MX\",\"NS\",\"SRV\",\"TXT\"],\"type\":\"string\"},\"updated\":{\"nullable\":true,\"type\":\"number\"},\"updatedAt\":{\"nullable\":true,\"type\":\"number\"},\"value\":{\"type\":\"string\"}},\"required\":[\"created\",\"createdAt\",\"creator\",\"id\",\"name\",\"slug\",\"type\",\"updated\",\"updatedAt\",\"value\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"records\"],\"type\":\"object\"},{\"description\":\"Successful response retrieving a list of paginated DNS records.\",\"properties\":{\"pagination\":{\"description\":\"This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.\",\"properties\":{\"count\":{\"description\":\"Amount of items in the current page.\",\"example\":20,\"type\":\"number\"},\"next\":{\"description\":\"Timestamp that must be used to request the next page.\",\"example\":1540095775951,\"nullable\":true,\"type\":\"number\"},\"prev\":{\"description\":\"Timestamp that must be used to request the previous page.\",\"example\":1540095775951,\"nullable\":true,\"type\":\"number\"}},\"required\":[\"count\",\"next\",\"prev\"],\"type\":\"object\"},\"records\":{\"items\":{\"properties\":{\"comment\":{\"type\":\"string\"},\"created\":{\"nullable\":true,\"type\":\"number\"},\"createdAt\":{\"nullable\":true,\"type\":\"number\"},\"creator\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"mxPriority\":{\"type\":\"number\"},\"name\":{\"type\":\"string\"},\"priority\":{\"type\":\"number\"},\"slug\":{\"type\":\"string\"},\"ttl\":{\"type\":\"number\"},\"type\":{\"enum\":[\"A\",\"AAAA\",\"ALIAS\",\"CAA\",\"CNAME\",\"HTTPS\",\"MX\",\"NS\",\"SRV\",\"TXT\"],\"type\":\"string\"},\"updated\":{\"nullable\":true,\"type\":\"number\"},\"updatedAt\":{\"nullable\":true,\"type\":\"number\"},\"value\":{\"type\":\"string\"}},\"required\":[\"created\",\"createdAt\",\"creator\",\"id\",\"name\",\"slug\",\"type\",\"updated\",\"updatedAt\",\"value\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"pagination\",\"records\"],\"type\":\"object\"}]}}},\"description\":\"Successful response retrieving a list of paginated DNS records.\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v5/domains/{domain}/records","rename":{"param":{"domain":"domain_id"}},"segments":[{"lit":"v5"},{"lit":"domains"},{"var":"domain_id"},{"lit":"records"}],"select":{"exist":["domain_id","limit","since","slug","team_id","until"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"example.com","kind":"param","name":"domain_id","orig":"domain","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"rec_V0fra8eEgQwEpFhYG2vTzC3K","kind":"param","name":"record_id","orig":"record_id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /v2/domains/{domain}/records/{recordId}","json":"{\"operationId\":\"removeRecord\",\"parameters\":[{\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"schema\":{\"example\":\"example.com\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"recordId\",\"required\":true,\"schema\":{\"example\":\"rec_V0fra8eEgQwEpFhYG2vTzC3K\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"Successful response by removing the specified DNS record.\"},\"400\":{\"description\":\"One of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/v2/domains/{domain}/records/{recordId}","rename":{"param":{"domain":"domain_id","recordId":"record_id"}},"segments":[{"lit":"v2"},{"lit":"domains"},{"var":"domain_id"},{"lit":"records"},{"var":"record_id"}],"select":{"exist":["domain_id","record_id","slug","team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"rec_2qn7pzrx89yxy34vezpd31y9","kind":"param","name":"record_id","orig":"record_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-team-url-slug","kind":"query","name":"slug","orig":"slug","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"team_1a2b3c4d5e6f7g8h9i0j1k2l","kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"PATCH /v1/domains/records/{recordId}","json":"{\"operationId\":\"updateRecord\",\"parameters\":[{\"description\":\"The id of the DNS record\",\"in\":\"path\",\"name\":\"recordId\",\"required\":true,\"schema\":{\"description\":\"The id of the DNS record\",\"example\":\"rec_2qn7pzrx89yxy34vezpd31y9\",\"type\":\"string\"}},{\"description\":\"The Team identifier to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"teamId\",\"schema\":{\"example\":\"team_1a2b3c4d5e6f7g8h9i0j1k2l\",\"type\":\"string\"}},{\"description\":\"The Team slug to perform the request on behalf of.\",\"in\":\"query\",\"name\":\"slug\",\"schema\":{\"example\":\"my-team-url-slug\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"comment\":{\"description\":\"A comment to add context on what this DNS record is for\",\"example\":\"used to verify ownership of domain\",\"maxLength\":500,\"type\":\"string\"},\"https\":{\"additionalProperties\":false,\"nullable\":true,\"properties\":{\"params\":{\"description\":\"\",\"nullable\":true,\"type\":\"string\"},\"priority\":{\"description\":\"\",\"nullable\":true,\"type\":\"integer\"},\"target\":{\"description\":\"\",\"example\":\"example2.com.\",\"maxLength\":255,\"nullable\":true,\"type\":\"string\"}},\"required\":[\"priority\",\"target\"],\"type\":\"object\"},\"mxPriority\":{\"description\":\"The MX priority value of the DNS record\",\"nullable\":true,\"type\":\"integer\"},\"name\":{\"description\":\"The name of the DNS record\",\"example\":\"example-1\",\"nullable\":true,\"type\":\"string\"},\"srv\":{\"additionalProperties\":false,\"nullable\":true,\"properties\":{\"port\":{\"description\":\"\",\"nullable\":true,\"type\":\"integer\"},\"priority\":{\"description\":\"\",\"nullable\":true,\"type\":\"integer\"},\"target\":{\"description\":\"\",\"example\":\"example2.com.\",\"maxLength\":255,\"nullable\":true,\"type\":\"string\"},\"weight\":{\"description\":\"\",\"nullable\":true,\"type\":\"integer\"}},\"required\":[\"target\",\"weight\",\"port\",\"priority\"],\"type\":\"object\"},\"ttl\":{\"description\":\"The Time to live (TTL) value of the DNS record\",\"example\":\"60\",\"maximum\":2147483647,\"minimum\":60,\"nullable\":true,\"type\":\"integer\"},\"type\":{\"description\":\"The type of the DNS record\",\"enum\":[\"A\",\"AAAA\",\"ALIAS\",\"CAA\",\"CNAME\",\"HTTPS\",\"MX\",\"SRV\",\"TXT\",\"NS\",null],\"example\":\"A\",\"maxLength\":255,\"nullable\":true,\"type\":\"string\"},\"value\":{\"description\":\"The value of the DNS record\",\"example\":\"google.com\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"comment\":{\"type\":\"string\"},\"createdAt\":{\"nullable\":true,\"type\":\"number\"},\"creator\":{\"type\":\"string\"},\"domain\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"recordType\":{\"enum\":[\"A\",\"AAAA\",\"ALIAS\",\"CAA\",\"CNAME\",\"HTTPS\",\"MX\",\"NS\",\"SRV\",\"TXT\"],\"type\":\"string\"},\"ttl\":{\"type\":\"number\"},\"type\":{\"enum\":[\"record\",\"record-sys\"],\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"required\":[\"creator\",\"domain\",\"id\",\"name\",\"recordType\",\"type\",\"value\"],\"type\":\"object\"}}},\"description\":\"\"},\"400\":{\"description\":\"One of the provided values in the request body is invalid.\\nOne of the provided values in the request query is invalid.\"},\"401\":{\"description\":\"The request is not authorized.\"},\"402\":{\"description\":\"The account is missing a payment so payment method must be updated\"},\"403\":{\"description\":\"You do not have permission to access this resource.\"},\"404\":{\"description\":\"\"},\"409\":{\"description\":\"\"},\"410\":{\"description\":\"\"}},\"security\":[{\"bearerToken\":[]}],\"securitySchemes\":{\"bearerToken\":{\"description\":\"Default authentication mechanism\",\"scheme\":\"bearer\",\"type\":\"http\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://api.vercel.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.vercel.com/oauth/access_token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/v1/domains/records/{recordId}","rename":{"param":{"recordId":"record_id"}},"segments":[{"lit":"v1"},{"lit":"domains"},{"lit":"records"},{"var":"record_id"}],"select":{"exist":["record_id","slug","team_id"]},"transform":{"req":{"comment":"`reqdata.comment`","https":"`reqdata.http`","mxPriority":"`reqdata.mx_priority`","name":"`reqdata.name`","srv":"`reqdata.srv`","ttl":"`reqdata.ttl`","type":"`reqdata.type`","value":"`reqdata.value`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["domain"],["domain","record"]]},"key$":"dns","name__orig":"dns","Name":"Dns","name_":"dns","name-":"dns","NAME":"DNS","index$":23}, {"active":true,"entity":"dns","key$":"BasicDnsFlow","kind":"basic","name":"BasicDnsFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"dns_ref01"},"match":{"domain_id":"domain01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"dns_ref01","srcdatavar":"dns_ref01_data","suffix":"_up0","textfield":"comment"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dns_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"dns_ref01","srcdatavar":"dns_ref01_data","suffix":"_dt0"},"match":{"id":"dns01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dns_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"dns_ref01","suffix":"_rm0"},"match":{"domain_id":"domain01","id":"dns01"},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'Dns')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dns_ref01_ent = client.Dns()
    let dns_ref01_data = setup.data.new.dns['dns_ref01']
    dns_ref01_data['domain_id'] = setup.idmap['domain01']

    dns_ref01_data = (await dns_ref01_ent.create(dns_ref01_data)).data()
    assert(null != dns_ref01_data.id)


    // UPDATE
    const dns_ref01_data_up0: any = {}
    dns_ref01_data_up0.id = dns_ref01_data.id

    const dns_ref01_markdef_up0 = { name: 'comment', value: 'Mark01-dns_ref01_' + setup.now }
    ;(dns_ref01_data_up0 as any)[dns_ref01_markdef_up0.name] = dns_ref01_markdef_up0.value

    const dns_ref01_resdata_up0 = (await dns_ref01_ent.update(dns_ref01_data_up0)).data()
    assert(dns_ref01_resdata_up0.id === dns_ref01_data_up0.id)

    assert((dns_ref01_resdata_up0 as any)[dns_ref01_markdef_up0.name] === dns_ref01_markdef_up0.value)


    // LOAD
    const dns_ref01_match_dt0: any = {}
    dns_ref01_match_dt0.id = dns_ref01_data.id
    const dns_ref01_data_dt0 = (await dns_ref01_ent.load(dns_ref01_match_dt0)).data()
    assert(dns_ref01_data_dt0.id === dns_ref01_data.id)


    // REMOVE
    const dns_ref01_match_rm0: any = { id: dns_ref01_data.id }
    await dns_ref01_ent.remove(dns_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dns/DnsTestData.json')

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
    ['dns01','dns02','dns03','domain01','domain02','domain03','domain01','domain02','domain03','record01','record02','record03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VERCEL_TEST_DNS_ENTID': idmap,
    'VERCEL_TEST_LIVE': 'FALSE',
    'VERCEL_TEST_EXPLAIN': 'FALSE',
    'VERCEL_APIKEY': '',
  })

  idmap = env['VERCEL_TEST_DNS_ENTID']

  const live = 'TRUE' === env.VERCEL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VERCEL_TEST_DNS_ENTID']
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
  
