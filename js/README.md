# Vercel JavaScript SDK



The JavaScript SDK for the Vercel API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AccessGroup()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install vercel
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { VercelSDK } = require('@voxgig-sdk/vercel-js')

const client = new VercelSDK({
  apikey: process.env.VERCEL_APIKEY,
})
```

### Load an AccessGroup

```js
const access_group = await client.AccessGroup().load({ id: 'access_group_id' })
console.log(access_group)
```

### List AccessGroup Records

```js
const access_groups = await client.AccessGroup().list({ id_or_name: "example" })
for (const access_group of access_groups) {
  console.log(access_group)
}
```

### Create a AccessGroup

```js
const created = await client.AccessGroup().create({
  id: 'example_id',
  accessGroupId: 'example_accessGroupId',
  createdAt: 'example_createdAt',
  isDsyncManaged: true,
  membersCount: 1,
  name: 'example_name',
  projectId: 'example_projectId',
  projectsCount: 1,
  role: 'example_role',
  teamId: 'example_teamId',
  updatedAt: 'example_updatedAt',
})
console.log(created)
```

### Update a AccessGroup

```js
const updated = await client.AccessGroup().update({
  id: 'access_group_id',
  access_group_id: 'example_access_group_id',
  project_id: 'example_project_id',
})
console.log(updated)
```

### Remove a AccessGroup

```js
await client.AccessGroup().remove({ id: 'access_group_id' })
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const bulkredirects = await client.BulkRedirect().list()
  console.log(bulkredirects)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = VercelSDK.test()

const bulkredirect = await client.BulkRedirect().list()
// bulkredirect is the entity, populated with mock response data
// — call bulkredirect.data() for the record itself
console.log(bulkredirect)
```

You can also use the instance method:

```js
const client = new VercelSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.BulkRedirect()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new VercelSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
VERCEL_TEST_LIVE=TRUE
VERCEL_APIKEY=<your-key>
```

Then run:

```bash
cd js && npm test
```


## Reference

### VercelSDK

#### Constructor

```js
new VercelSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AccessGroup(data?)` | `AccessGroupEntity` | Create an AccessGroup entity instance. |
| `AiGateway(data?)` | `AiGatewayEntity` | Create an AiGateway entity instance. |
| `AiGatewayRule(data?)` | `AiGatewayRuleEntity` | Create an AiGatewayRule entity instance. |
| `AiGatewayRuleList(data?)` | `AiGatewayRuleListEntity` | Create an AiGatewayRuleList entity instance. |
| `AiGatewayVirtualModelConfig(data?)` | `AiGatewayVirtualModelConfigEntity` | Create an AiGatewayVirtualModelConfig entity instance. |
| `AiGatewayVirtualModelConfigList(data?)` | `AiGatewayVirtualModelConfigListEntity` | Create an AiGatewayVirtualModelConfigList entity instance. |
| `Alias(data?)` | `AliasEntity` | Create an Alias entity instance. |
| `ApiAiGateway(data?)` | `ApiAiGatewayEntity` | Create an ApiAiGateway entity instance. |
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `Artifact(data?)` | `ArtifactEntity` | Create an Artifact entity instance. |
| `Authentication(data?)` | `AuthenticationEntity` | Create an Authentication entity instance. |
| `Billing(data?)` | `BillingEntity` | Create a Billing entity instance. |
| `BulkRedirect(data?)` | `BulkRedirectEntity` | Create a BulkRedirect entity instance. |
| `Cert(data?)` | `CertEntity` | Create a Cert entity instance. |
| `Check(data?)` | `CheckEntity` | Create a Check entity instance. |
| `ChecksV2(data?)` | `ChecksV2Entity` | Create a ChecksV2 entity instance. |
| `Connect(data?)` | `ConnectEntity` | Create a Connect entity instance. |
| `ConnectConnector(data?)` | `ConnectConnectorEntity` | Create a ConnectConnector entity instance. |
| `ConnectConnectorList(data?)` | `ConnectConnectorListEntity` | Create a ConnectConnectorList entity instance. |
| `ConnectConnectorProjectConnectionList(data?)` | `ConnectConnectorProjectConnectionListEntity` | Create a ConnectConnectorProjectConnectionList entity instance. |
| `ConnectProjectConnection(data?)` | `ConnectProjectConnectionEntity` | Create a ConnectProjectConnection entity instance. |
| `ConnectProjectConnectorConnectionList(data?)` | `ConnectProjectConnectorConnectionListEntity` | Create a ConnectProjectConnectorConnectionList entity instance. |
| `Deployment(data?)` | `DeploymentEntity` | Create a Deployment entity instance. |
| `Dns(data?)` | `DnsEntity` | Create a Dns entity instance. |
| `Domain(data?)` | `DomainEntity` | Create a Domain entity instance. |
| `DomainsRegistrar(data?)` | `DomainsRegistrarEntity` | Create a DomainsRegistrar entity instance. |
| `Drain(data?)` | `DrainEntity` | Create a Drain entity instance. |
| `EdgeCache(data?)` | `EdgeCacheEntity` | Create an EdgeCache entity instance. |
| `Env(data?)` | `EnvEntity` | Create an Env entity instance. |
| `Environment(data?)` | `EnvironmentEntity` | Create an Environment entity instance. |
| `FeatureFlag(data?)` | `FeatureFlagEntity` | Create a FeatureFlag entity instance. |
| `File(data?)` | `FileEntity` | Create a File entity instance. |
| `Flag(data?)` | `FlagEntity` | Create a Flag entity instance. |
| `FlagsSdkKeyWithSecret(data?)` | `FlagsSdkKeyWithSecretEntity` | Create a FlagsSdkKeyWithSecret entity instance. |
| `GlobalConfig(data?)` | `GlobalConfigEntity` | Create a GlobalConfig entity instance. |
| `GlobalConfigItem(data?)` | `GlobalConfigItemEntity` | Create a GlobalConfigItem entity instance. |
| `GlobalConfigToken(data?)` | `GlobalConfigTokenEntity` | Create a GlobalConfigToken entity instance. |
| `Integration(data?)` | `IntegrationEntity` | Create an Integration entity instance. |
| `Kms(data?)` | `KmsEntity` | Create a Kms entity instance. |
| `ListEventType(data?)` | `ListEventTypeEntity` | Create a ListEventType entity instance. |
| `Log(data?)` | `LogEntity` | Create a Log entity instance. |
| `LogDrain(data?)` | `LogDrainEntity` | Create a LogDrain entity instance. |
| `Marketplace(data?)` | `MarketplaceEntity` | Create a Marketplace entity instance. |
| `Microfrontend(data?)` | `MicrofrontendEntity` | Create a Microfrontend entity instance. |
| `Network(data?)` | `NetworkEntity` | Create a Network entity instance. |
| `Networking(data?)` | `NetworkingEntity` | Create a Networking entity instance. |
| `Observability(data?)` | `ObservabilityEntity` | Create an Observability entity instance. |
| `PrivateLinkEndpoint(data?)` | `PrivateLinkEndpointEntity` | Create a PrivateLinkEndpoint entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `ProjectMember(data?)` | `ProjectMemberEntity` | Create a ProjectMember entity instance. |
| `ProjectRoute(data?)` | `ProjectRouteEntity` | Create a ProjectRoute entity instance. |
| `Query(data?)` | `QueryEntity` | Create a Query entity instance. |
| `Record(data?)` | `RecordEntity` | Create a Record entity instance. |
| `RollingRelease(data?)` | `RollingReleaseEntity` | Create a RollingRelease entity instance. |
| `Sandbox(data?)` | `SandboxEntity` | Create a Sandbox entity instance. |
| `Schema(data?)` | `SchemaEntity` | Create a Schema entity instance. |
| `Security(data?)` | `SecurityEntity` | Create a Security entity instance. |
| `Segment(data?)` | `SegmentEntity` | Create a Segment entity instance. |
| `Storage(data?)` | `StorageEntity` | Create a Storage entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `TldName(data?)` | `TldNameEntity` | Create a TldName entity instance. |
| `Toggle(data?)` | `ToggleEntity` | Create a Toggle entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `Vcr(data?)` | `VcrEntity` | Create a Vcr entity instance. |
| `VcrImageList(data?)` | `VcrImageListEntity` | Create a VcrImageList entity instance. |
| `VcrRepositoryList(data?)` | `VcrRepositoryListEntity` | Create a VcrRepositoryList entity instance. |
| `VcrRepositoryPermissionList(data?)` | `VcrRepositoryPermissionListEntity` | Create a VcrRepositoryPermissionList entity instance. |
| `WebAnalytics(data?)` | `WebAnalyticsEntity` | Create a WebAnalytics entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `tester(testopts?, sdkopts?)` | `VercelSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `VercelSDK.test(testopts?, sdkopts?)` | `VercelSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): VercelSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

### Entities

#### AccessGroup

| Field | Description |
| --- | --- |
| `accessGroupId` | ID of the access group. |
| `createdAt` | Timestamp in milliseconds when the access group was created. |
| `entitlements` |  |
| `id` |  |
| `isDsyncManaged` |  |
| `membersCount` | Number of members in the access group. |
| `membersToAdd` | List of members to add to the access group. |
| `membersToRemove` | List of members to remove from the access group. |
| `name` | The name of this access group. |
| `projectId` |  |
| `projects` |  |
| `projectsCount` | Number of projects in the access group. |
| `role` | The project role that will be added to this Access Group. |
| `teamId` | ID of the team that this access group belongs to. |
| `teamPermissions` | Permissions that the team has in the access group. |
| `teamRoles` | Roles that the team has in the access group. |
| `updatedAt` | Timestamp in milliseconds when the access group was last updated. |

Operations: create, list, load, remove, update.

API path: `/v1/access-groups/{accessGroupIdOrName}/projects`

#### AiGateway

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/v1/ai-gateway/rules`

#### AiGatewayRule

| Field | Description |
| --- | --- |
| `action` |  |
| `createdAt` |  |
| `createdBy` |  |
| `deleted` |  |
| `description` |  |
| `enabled` |  |
| `match` |  |
| `ownerId` |  |
| `ruleId` |  |
| `type` |  |
| `updatedAt` |  |
| `updatedBy` |  |

Operations: create, update.

API path: `/v1/ai-gateway/rules`

#### AiGatewayRuleList

| Field | Description |
| --- | --- |
| `action` |  |
| `createdAt` |  |
| `createdBy` |  |
| `deleted` |  |
| `description` |  |
| `enabled` |  |
| `match` |  |
| `ownerId` |  |
| `ruleId` |  |
| `type` |  |
| `updatedAt` |  |
| `updatedBy` |  |

Operations: list.

API path: `/v1/ai-gateway/rules`

#### AiGatewayVirtualModelConfig

| Field | Description |
| --- | --- |
| `allowFallbackFromFast` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | BYOK credential IDs allowed for this VMC. |
| `caching` | Use caching if available. |
| `createdAt` | Creation timestamp (epoch ms). |
| `createdBy` | User or app id that created this VMC. |
| `deleted` | Whether this VMC is soft-deleted. |
| `description` | Optional description for UI. |
| `disallowPromptTraining` | Only use providers that will not train on your prompts. |
| `displayName` | Human-readable name for UI. |
| `has` | Limit providers to those with these features. |
| `hipaaCompliant` | Only use HIPAA-compliant providers. |
| `id` |  |
| `inferenceRegion` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | The concrete model-provider instance this VMC resolves to. |
| `kind` | VMC kind: alias, relay, or router. |
| `modelSlug` | Canonical model slug this VMC maps to (e.g. |
| `models` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | Observability tags attached to requests through this VMC. |
| `ownerId` | Team (owner) that owns this VMC. |
| `providerOnly` | Restrict routing to only these providers. |
| `providerOptions` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | For kind=router: capability tags a candidate must have. |
| `selector` | For kind=router: how to order candidates. |
| `serviceTier` | Service tier for providers that support it. |
| `sort` | Rank eligible providers by an attribute. |
| `speed` | Only use fastest providers with short timeouts. |
| `status` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | Last update timestamp (epoch ms). |
| `updatedBy` | User or app id that last updated this VMC. |
| `virtualModelSlug` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | Only use providers with zero data retention. |

Operations: create, load, update.

API path: `/v1/ai-gateway/virtual-model-configs`

#### AiGatewayVirtualModelConfigList

| Field | Description |
| --- | --- |
| `allowFallbackFromFast` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | BYOK credential IDs allowed for this VMC. |
| `caching` | Use caching if available. |
| `createdAt` | Creation timestamp (epoch ms). |
| `createdBy` | User or app id that created this VMC. |
| `deleted` | Whether this VMC is soft-deleted. |
| `description` | Optional description for UI. |
| `disallowPromptTraining` | Only use providers that will not train on your prompts. |
| `displayName` | Human-readable name for UI. |
| `has` | Limit providers to those with these features. |
| `hipaaCompliant` | Only use HIPAA-compliant providers. |
| `inferenceRegion` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | The concrete model-provider instance this VMC resolves to. |
| `kind` | VMC kind: alias, relay, or router. |
| `modelSlug` | Canonical model slug this VMC maps to (e.g. |
| `models` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | Observability tags attached to requests through this VMC. |
| `ownerId` | Team (owner) that owns this VMC. |
| `providerOnly` | Restrict routing to only these providers. |
| `providerOptions` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | For kind=router: capability tags a candidate must have. |
| `selector` | For kind=router: how to order candidates. |
| `serviceTier` | Service tier for providers that support it. |
| `sort` | Rank eligible providers by an attribute. |
| `speed` | Only use fastest providers with short timeouts. |
| `status` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | Last update timestamp (epoch ms). |
| `updatedBy` | User or app id that last updated this VMC. |
| `virtualModelSlug` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | Only use providers with zero data retention. |

Operations: list.

API path: `/v1/ai-gateway/virtual-model-configs/list`

#### Alias

| Field | Description |
| --- | --- |
| `alias` | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | The date when the alias was created |
| `createdAt` | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | Information of the user who created the alias |
| `deletedAt` | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | A map with the deployment ID, URL and metadata |
| `deploymentId` | The deployment ID |
| `id` |  |
| `microfrontends` | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | The unique identifier of the project |
| `protectionBypass` | The protection bypass for the alias |
| `redirect` | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | Status code to be used on redirect |
| `uid` | The unique identifier of the alias |
| `updatedAt` | The date when the alias was updated in milliseconds since the UNIX epoch |

Operations: create, list, load, remove, update.

API path: `/v2/deployments/{id}/aliases`

#### ApiAiGateway

| Field | Description |
| --- | --- |

Operations: load, remove.

API path: `/v1/ai-gateway/virtual-model-configs`

#### ApiKey

| Field | Description |
| --- | --- |
| `activeAt` | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | The ID of the user who created the API key. |
| `createdByAppId` | The ID of the app that created the API key, if any |
| `expiresAt` | Timestamp (in milliseconds) of when the API key expires. |
| `id` | The unique identifier of the API key. |
| `leakedAt` | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | URL where the API key was discovered as leaked. |
| `metadata` | Generic metadata attached to the API key. |
| `name` | The human-readable name of the API key. |
| `partialKey` | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | The ID of the project that this API key grants access to. |
| `purpose` | The API key's purpose, i.e. |
| `quota` | AI Gateway quota associated with an API key. |
| `teamId` | The ID of the team that the API key grants access to. |

Operations: create.

API path: `/api-keys`

#### Artifact

| Field | Description |
| --- | --- |
| `hashes` | artifact hashes |
| `id` |  |

Operations: create, load, remove, update.

API path: `/v8/artifacts/events`

#### Authentication

| Field | Description |
| --- | --- |
| `activeAt` | Timestamp (in milliseconds) of when the token was most recently used. |
| `createdAt` | Timestamp (in milliseconds) of when the token was created. |
| `expiresAt` | Timestamp (in milliseconds) of when the token expires. |
| `id` | The unique identifier of the token. |
| `leakedAt` | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | URL where the token was discovered as leaked. |
| `name` | The human-readable name of the token. |
| `origin` | The origin of how the token was created. |
| `prefix` | The token's prefix, for identification purposes. |
| `projectId` | The ID of the project to scope this token to |
| `revokedAt` | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | The access scopes granted to the token. |
| `suffix` | The last few characters of the token, for identification purposes. |
| `type` | The type of the token. |

Operations: create, load, remove.

API path: `/v3/user/tokens`

#### Billing

| Field | Description |
| --- | --- |

Operations: create, load.

API path: `/v1/billing/buy`

#### BulkRedirect

| Field | Description |
| --- | --- |
| `alias` | The staging link for previewing redirects in this version. |
| `createdBy` |  |
| `id` | The unique identifier for the version. |
| `isLive` | Whether this version is currently live in production. |
| `isStaging` | Whether this version has not been promoted to production yet and is not serving end users. |
| `key` | The key of the version. |
| `lastModified` |  |
| `name` | Optional name for the version. |
| `overwrite` |  |
| `projectId` |  |
| `redirect` | The redirect object to edit. |
| `redirectCount` | The number of redirects in this version. |
| `redirects` |  |
| `restore` | If true, restores the redirect from the latest production version to staging. |
| `teamId` |  |

Operations: create, list, load, patch, remove, update.

API path: `/v1/bulk-redirects/restore`

#### Cert

| Field | Description |
| --- | --- |
| `autoRenew` |  |
| `ca` | The certificate authority |
| `cert` | The certificate |
| `cns` | The common names the cert should be issued for |
| `createdAt` |  |
| `expiresAt` |  |
| `id` |  |
| `key` | The certificate key |
| `skipValidation` | Skip validation of the certificate |

Operations: create, list, load, remove, update.

API path: `/v8/certs`

#### Check

| Field | Description |
| --- | --- |
| `blocking` | Whether the check should block a deployment from succeeding |
| `blocks` |  |
| `completedAt` |  |
| `conclusion` | The result of the check being run |
| `createdAt` |  |
| `deletedAt` |  |
| `detailsUrl` | URL to display for further details |
| `externalId` | An identifier that can be used as an external reference |
| `id` |  |
| `integrationId` |  |
| `isRerequestable` |  |
| `metrics` |  |
| `name` | The name of the check being created |
| `output` | The results of the check Run |
| `ownerId` |  |
| `path` | Path of the page that is being checked |
| `projectId` |  |
| `requires` |  |
| `rerequestable` | Whether a user should be able to request for the check to be rerun if it fails |
| `source` |  |
| `sourceIntegrationConfigurationId` |  |
| `sourceKind` |  |
| `startedAt` |  |
| `status` | The current status of the check |
| `targets` |  |
| `timeout` |  |
| `updatedAt` |  |

Operations: create, list, load, remove, update.

API path: `/v1/deployments/{deploymentId}/checks/{checkId}/rerequest`

#### ChecksV2

| Field | Description |
| --- | --- |
| `checkId` |  |
| `completedAt` |  |
| `conclusion` |  |
| `conclusionText` |  |
| `externalId` |  |
| `externalUrl` |  |
| `output` |  |
| `runs` |  |
| `status` |  |

Operations: create, list, load, update.

API path: `/v2/deployments/{deploymentId}/check-runs`

#### Connect

| Field | Description |
| --- | --- |
| `additionalParams` |  |
| `audience` |  |
| `authorizationDetails` |  |
| `authorizationId` | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` |  |
| `deviceCode` |  |
| `displayName` | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` |  |
| `expiresInMs` |  |
| `externalSubject` |  |
| `id` | Client id (e.g. |
| `installationId` |  |
| `metadata` | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` |  |
| `resources` |  |
| `returnUrl` |  |
| `scopes` |  |
| `service` | Resolved service id when known (e.g. |
| `serviceName` | Curated display name of the resolved service (e.g. |
| `subject` |  |
| `tenantId` |  |
| `token` |  |
| `tokenGroupId` | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` |  |
| `type` | Client type (e.g. |
| `uid` | Client uid (e.g. |
| `validityBufferMs` |  |
| `webhook` |  |

Operations: create, remove.

API path: `/v1/connect/authorize/{connector}`

#### ConnectConnector

| Field | Description |
| --- | --- |
| `accentColor` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | The connection method this connector was created from, when the create request named one. |
| `connector` | Updated connector. |
| `createdAt` | Creation time in epoch milliseconds. |
| `createdBy` | Principal that created the connector. |
| `creationMode` | How the connector row was originally created. |
| `data` | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | Installation used when a token request does not specify an installation. |
| `destinations` | Complete replacement set of trigger destinations. |
| `devsite` | Developer website for the connected service. |
| `displayName` | Human-readable connector name. |
| `docsite` | Developer documentation for the connected service. |
| `environments` | Environments for the project connection. |
| `events` | Known events this connector subscribes to (e.g. |
| `icon` | Connector branding icon. |
| `id` | Stable `scl_` connector ID. |
| `knownStale` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | Connector name within the owning team. |
| `params` | Values for the selected connection method's template fields. |
| `projectId` | Project to connect during creation. |
| `reconsentNeeded` | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | Token subject types supported by the connector. |
| `supportsIcon` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | Whether the connector supports an installation flow. |
| `supportsRevocation` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | Whether this connector type supports trigger webhooks. |
| `target` | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | Initial trigger destination. |
| `triggerDestinations` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | Incoming trigger configuration for the connector. |
| `type` | Connector implementation type. |
| `typeIcon` | Icon identifier supplied by the connector type. |
| `typeName` | Human-readable name of the connector type. |
| `uid` | Team-scoped UID. |
| `updatedAt` | Last update time in epoch milliseconds. |
| `updatedBy` | Principal that most recently updated the connector. |
| `userTokens` | User-token capabilities and known grants for the connector. |
| `website` | Public website for the connected service. |

Operations: create, load, update.

API path: `/v1/connect/connectors`

#### ConnectConnectorList

| Field | Description |
| --- | --- |
| `accentColor` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | The connection method this connector was created from, when the create request named one. |
| `createdAt` | Creation time in epoch milliseconds. |
| `createdBy` | Principal that created the connector. |
| `creationMode` | How the connector row was originally created. |
| `defaultInstallationId` | Installation used when a token request does not specify an installation. |
| `devsite` | Developer website for the connected service. |
| `displayName` | Human-readable connector name. |
| `docsite` | Developer documentation for the connected service. |
| `events` | Known events this connector subscribes to (e.g. |
| `icon` | Connector branding icon. |
| `id` | Stable `scl_` connector ID. |
| `knownStale` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | Connector name within the owning team. |
| `redirectUri` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | Token subject types supported by the connector. |
| `supportsIcon` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | Whether the connector supports an installation flow. |
| `supportsRevocation` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | Whether this connector type supports trigger webhooks. |
| `target` | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | Incoming trigger configuration for the connector. |
| `type` | Connector implementation type. |
| `typeIcon` | Icon identifier supplied by the connector type. |
| `typeName` | Human-readable name of the connector type. |
| `uid` | Team-scoped UID. |
| `updatedAt` | Last update time in epoch milliseconds. |
| `updatedBy` | Principal that most recently updated the connector. |
| `userTokens` | User-token capabilities and known grants for the connector. |
| `website` | Public website for the connected service. |

Operations: list.

API path: `/v2/connect/connectors`

#### ConnectConnectorProjectConnectionList

| Field | Description |
| --- | --- |
| `connectorId` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | Environments where the connector is enabled for the project. |
| `project` | Vercel project connected to the connector. |
| `updatedAt` | Time when the project connection was last updated, in epoch milliseconds. |

Operations: list.

API path: `/v2/connect/connectors/{connector}/projects`

#### ConnectProjectConnection

| Field | Description |
| --- | --- |
| `connectorId` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | Environments where the connector is enabled for the project. |
| `environments` | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | Vercel project connected to the connector. |
| `updatedAt` | Time when the project connection was last updated, in epoch milliseconds. |

Operations: create, load.

API path: `/v1/connect/connectors/{connector}/projects/{projectId}`

#### ConnectProjectConnectorConnectionList

| Field | Description |
| --- | --- |
| `connectorId` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | Environments where the connector is enabled for the project. |
| `project` | Vercel project connected to the connector. |
| `updatedAt` | Time when the project connection was last updated, in epoch milliseconds. |

Operations: list.

API path: `/v2/connect/projects/{projectId}/connectors`

#### Deployment

| Field | Description |
| --- | --- |
| `aliasAssigned` |  |
| `aliasError` | An error object in case aliasing of the deployment failed. |
| `attribution` | Commit attribution metadata |
| `buildMachine` | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | Timestamp of when the deployment started building at. |
| `checks` | Detailed information about v2 deployment checks. |
| `checksConclusion` | Conclusion for checks |
| `checksState` | State of all registered checks |
| `connectBuildsEnabled` | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | The ID of Secure Compute network used for this deployment |
| `created` | Timestamp of when the deployment got created. |
| `createdAt` |  |
| `creator` | Metadata information of the deployment creator. |
| `customEnvironment` | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | Timestamp of when the deployment got deleted. |
| `deploymentId` | The ID of an existing deployment to redeploy. |
| `errorCode` | Error code when the deployment is in an error state. |
| `errorMessage` | Error message when the deployment is in an canceled or error state. |
| `expiration` | The expiration configured by the project retention policy |
| `files` | The files to include in the deployment. |
| `gitAccessToken` | Available only to Vercel platform accounts. |
| `gitMetadata` | Populates initial git metadata for different git providers. |
| `gitSource` | Defines the Git Repository source to be deployed. |
| `id` |  |
| `inspectorUrl` | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | Deployment can be used for instant rollback |
| `manualProvisioning` |  |
| `meta` | An object containing the deployment's metadata. |
| `monorepoManager` | The monorepo manager that is being used for this deployment. |
| `name` | A string with the project name used in the deployment URL |
| `oomReport` | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` |  |
| `passiveConnectConfigurationId` | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | Metadata about the source platform that triggered the deployment. |
| `prebuilt` |  |
| `project` | The target project identifier in which the deployment will be created. |
| `projectId` | The project ID of the deployment |
| `projectSettings` | Project settings that will be applied to the deployment. |
| `proposedExpiration` | The expiration proposed to replace the existing expiration |
| `ready` | Timestamp of when the deployment got ready. |
| `readyState` |  |
| `readySubstate` | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | NSNB Blocked metadata |
| `softDeletedByRetention` | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | The source of the deployment. |
| `state` | In which state is the deployment. |
| `status` |  |
| `statusText` |  |
| `statusUrl` |  |
| `target` | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | The type of the deployment. |
| `uid` | The unique identifier of the deployment. |
| `undeleted` | Timestamp of when the deployment was undeleted. |
| `url` | The URL of the deployment. |
| `withLatestCommit` | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

Operations: create, list, load, remove, update.

API path: `/v2/files`

#### Dns

| Field | Description |
| --- | --- |
| `comment` | A comment to add context on what this DNS record is for |
| `createdAt` |  |
| `creator` |  |
| `domain` |  |
| `https` |  |
| `id` |  |
| `mxPriority` | The MX priority value of the DNS record |
| `name` | The name of the DNS record |
| `recordType` |  |
| `srv` |  |
| `ttl` | The Time to live (TTL) value of the DNS record |
| `type` | The type of record, it could be one of the valid DNS records. |
| `value` | The value of the DNS record |

Operations: create, load, remove, update.

API path: `/v2/domains/{domain}/records`

#### Domain

| Field | Description |
| --- | --- |
| `boughtAt` | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | A list of custom nameservers for the domain to point to. |
| `echMode` | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | The unique identifier of the domain. |
| `intendedNameservers` | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | The domain operation to perform. |
| `name` | The domain name. |
| `nameservers` | A list of the current nameservers of the domain. |
| `renew` | Indicates whether the domain is set to automatically renew. |
| `serviceType` | The type of service the domain is handled by. |
| `suffix` |  |
| `teamId` |  |
| `transferStartedAt` | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` |  |
| `verified` | If the domain has the ownership verified. |

Operations: create, list, load, remove, update.

API path: `/v9/domains/{domain}/claim`

#### DomainsRegistrar

| Field | Description |
| --- | --- |
| `authCode` | The auth code for the domain. |
| `autoRenew` | Whether the domain should be auto-renewed before it expires. |
| `available` |  |
| `contactInformation` | The contact information for the domain. |
| `domains` | an array of at most 50 item(s) |
| `error` |  |
| `expectedPrice` |  |
| `languageCode` | The language code for the domain. |
| `nameservers` |  |
| `orderId` | A valid order ID |
| `purchasePrice` |  |
| `renewalPrice` |  |
| `results` |  |
| `status` |  |
| `transferPrice` |  |
| `years` | The number of years the returned price is for. |

Operations: create, load, update.

API path: `/v1/registrar/domains/{domain}/buy`

#### Drain

| Field | Description |
| --- | --- |
| `delivery` |  |
| `drains` |  |
| `filter` |  |
| `id` |  |
| `name` |  |
| `projectIds` |  |
| `projects` |  |
| `sampling` |  |
| `schemas` |  |
| `source` |  |
| `status` |  |
| `transforms` |  |

Operations: create, load, remove, update.

API path: `/v1/drains`

#### EdgeCache

| Field | Description |
| --- | --- |

Operations: create.

API path: `/v1/edge-cache/dangerously-delete-by-src-images`

#### Env

| Field | Description |
| --- | --- |
| `applyToAllCustomEnvironments` | whether or not this env varible applies to custom environments |
| `comment` | A user provided comment that describes what this Shared Env Var is for. |
| `created` | The date when the Shared Env Var was created. |
| `createdAt` | Timestamp for when the Shared Env Var was created. |
| `createdBy` | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | whether or not this env variable is decrypted |
| `deletedAt` | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` |  |
| `failed` |  |
| `id` | The unique identifier of the Shared Env Var. |
| `key` | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | The last editor full name or username. |
| `ownerId` | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` |  |
| `target` | environments this env variable targets |
| `type` | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` |  |
| `updatedAt` | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
| `value` | The value of the Shared Env Var. |

Operations: create, list, load, remove, update.

API path: `/v1/env`

#### Environment

| Field | Description |
| --- | --- |
| `branchMatcher` | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | Where to copy environment variables from. |
| `createdAt` | Timestamp when the environment was created |
| `currentDeploymentAliases` | List of aliases for the current deployment |
| `description` | Optional description of the environment's purpose |
| `domains` | List of domains associated with this environment |
| `id` | Unique identifier for the custom environment (format: env_*) |
| `slug` | URL-friendly name of the environment |
| `type` | The type of environment (production, preview, or development) |
| `updatedAt` | Timestamp when the environment was last updated |

Operations: create, list, load, remove, update.

API path: `/v9/projects/{idOrName}/custom-environments`

#### FeatureFlag

| Field | Description |
| --- | --- |
| `changedEnvironments` |  |
| `createdAt` |  |
| `createdBy` | The user who created this patch |
| `data` | The data of the segment |
| `description` | A description of the flag |
| `environments` | The configuration for the flag in different environments |
| `flagId` |  |
| `flags` |  |
| `hint` |  |
| `id` |  |
| `kind` | The kind of flag |
| `label` |  |
| `maintainerIds` | The user ids of the maintainers of the flag |
| `message` | Additional message for this version |
| `metadata` |  |
| `operations` |  |
| `ownerId` |  |
| `pagination` |  |
| `permanent` | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` |  |
| `revision` |  |
| `seed` | A random seed to prevent split points in different flags from having the same targets |
| `slug` | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` |  |
| `status` |  |
| `tags` | Tags for categorizing the flag |
| `typeName` |  |
| `updatedAt` |  |
| `updatedBy` |  |
| `variants` | The variants of the flag |

Operations: list, load, patch, remove, update.

API path: `/v2/teams/{teamId}/feature-flags/flags`

#### File

| Field | Description |
| --- | --- |
| `children` | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | The content-type of the file (only valid for the `file` type) |
| `mode` | The file "mode" indicating file type and permissions. |
| `name` | The name of the file tree entry |
| `type` | String indicating the type of file tree entry. |
| `uid` | The unique identifier of the file (only valid for the `file` type) |

Operations: list.

API path: `/v6/deployments/{id}/files`

#### Flag

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `createdBy` |  |
| `description` |  |
| `environments` |  |
| `id` |  |
| `kind` |  |
| `maintainerIds` |  |
| `metadata` |  |
| `ownerId` |  |
| `permanent` |  |
| `projectId` |  |
| `revision` |  |
| `seed` |  |
| `slug` |  |
| `state` |  |
| `tags` |  |
| `typeName` |  |
| `updatedAt` |  |
| `updatedBy` |  |
| `variants` |  |

Operations: load.

API path: `/v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}`

#### FlagsSdkKeyWithSecret

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `createdBy` |  |
| `deletedAt` |  |
| `environment` |  |
| `hashKey` |  |
| `keyValue` | Cleartext value of the SDK key. |
| `label` |  |
| `partialKeyValue` | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` |  |
| `sdkKeyType` |  |
| `tokenValue` | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` |  |
| `updatedAt` |  |

Operations: update.

API path: `/v1/projects/{projectIdOrName}/feature-flags/sdk-keys`

#### GlobalConfig

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `createdBy` | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` |  |
| `digest` |  |
| `id` |  |
| `itemCount` |  |
| `items` |  |
| `ownerId` |  |
| `purpose` |  |
| `schema` |  |
| `sizeInBytes` |  |
| `slug` | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` |  |

Operations: create, list, load, patch, remove, update.

API path: `/v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}/restore`

#### GlobalConfigItem

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `description` |  |
| `edgeConfigId` |  |
| `id` |  |
| `key` |  |
| `updatedAt` |  |
| `value` |  |

Operations: list, load.

API path: `/v1/global-config/{edgeConfigId}/items`

#### GlobalConfigToken

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `edgeConfigId` |  |
| `id` | This is not the token itself, but rather an id to identify the token by |
| `label` |  |
| `partialToken` | A partially-masked representation of the token, safe to display in UIs. |
| `token` | Deprecated: the full, plaintext token. |

Operations: load.

API path: `/v1/global-config/{edgeConfigId}/token/{token}`

#### Integration

| Field | Description |
| --- | --- |
| `cost` |  |
| `description` |  |
| `details` |  |
| `disabled` |  |
| `effectiveDate` |  |
| `envVarEnvironments` |  |
| `highlightedDetails` |  |
| `id` |  |
| `initialCharge` |  |
| `makeEnvVarsSensitive` |  |
| `maximumAmount` |  |
| `maximumAmountAutoPurchasePerPeriod` |  |
| `metadataSchema` |  |
| `minimumAmount` |  |
| `name` |  |
| `paymentMethodRequired` |  |
| `preauthorizationAmount` |  |
| `primaryProtocol` |  |
| `projectId` |  |
| `protocols` |  |
| `quote` |  |
| `scope` |  |
| `slug` |  |
| `type` |  |

Operations: create, list, load, remove.

API path: `/v1/integrations/installations/{integrationConfigurationId}/resources/{resourceId}/connections`

#### Kms

| Field | Description |
| --- | --- |
| `activation` | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` |  |
| `algorithm` | Algorithm of the signing key. |
| `claims` | The claims to include in the token. |
| `claimsSchema` | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` |  |
| `environments` | The environments for the project grant policy. |
| `headers` | Additional headers to include in the token. |
| `id` |  |
| `importKey` | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | Key id of the signing key. |
| `key_ops` |  |
| `kid` |  |
| `kind` |  |
| `kty` |  |
| `managedBy` |  |
| `message` | Base64-encoded message to be signed. |
| `name` | The name of the issuer. |
| `origin` |  |
| `ownerId` |  |
| `policies` |  |
| `projectId` | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | Deprecated. |
| `signature` | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` |  |
| `token` |  |
| `tokenClaims` | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | The time-to-live for the token, in seconds. |
| `updatedAt` |  |
| `use` |  |
| `x5c` | The X.509 certificate chain (RFC 7517 §4.7). |
| `x5tS256` | The base64url SHA-256 thumbprint of the DER certificate in `x5c[0]` (RFC 7517 §4.9). |

Operations: create, list, load, remove, update.

API path: `/v1/kms/issuers/{issuerId}/keys/{keyId}/activate`

#### ListEventType

| Field | Description |
| --- | --- |
| `categories` |  |
| `types` |  |

Operations: list.

API path: `/v1/events/types`

#### Log

| Field | Description |
| --- | --- |

Operations: load.

API path: `/v1/projects/{projectId}/deployments/{deploymentId}/runtime-logs`

#### LogDrain

| Field | Description |
| --- | --- |
| `branch` | The branch regexp of log drain |
| `clientId` | The oauth2 client application id that created this log drain |
| `configurationId` | The client configuration this log drain was created with |
| `createdAt` | A timestamp that tells you when the log drain was created |
| `createdFrom` | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | The delivery log format |
| `environments` | The environment of log drain |
| `headers` | Headers to be sent together with the request |
| `id` | The unique identifier of the log drain. |
| `integrationConfigurationUri` |  |
| `integrationIcon` |  |
| `integrationWebsite` |  |
| `name` | The custom name of this log drain. |
| `ownerId` | The identifier of the team or user whose events will trigger the log drain |
| `projectId` |  |
| `projectIds` | The identifier of the projects this log drain is associated with |
| `projectsMetadata` |  |
| `samplingRate` | The sampling rate for this log drain. |
| `secret` | Custom secret of log drain |
| `source` |  |
| `sources` | The sources from which logs are currently being delivered to this log drain. |
| `url` | The log drain url |

Operations: create, list, load, remove.

API path: `/v1/log-drains`

#### Marketplace

| Field | Description |
| --- | --- |
| `access_token` |  |
| `already_revoked` |  |
| `balances` |  |
| `billing` | Billing data (interim invoicing data). |
| `billingPlan` |  |
| `billingPlanId` | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` |  |
| `client_id` |  |
| `client_secret` |  |
| `created` | System creation date. |
| `createdAt` |  |
| `data` |  |
| `description` |  |
| `discounts` | Invoice discounts. |
| `email` |  |
| `eod` | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` |  |
| `expires_in` |  |
| `externalId` | Partner-supplied Invoice ID, if applicable. |
| `extras` |  |
| `final` | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` |  |
| `id` | The ID provided by the 3rd party provider for the given resource |
| `internalId` | The ID assigned by Vercel for the given resource |
| `invoiceDate` | Invoice date. |
| `invoiceId` | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | User-readable invoice number. |
| `isArchived` |  |
| `items` | Invoice items. |
| `memo` | Additional memo for the invoice. |
| `metadata` | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | The name of the resource as it is recorded in Vercel |
| `notification` | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` |  |
| `ownership` |  |
| `paidAt` | Moment the invoice was paid. |
| `partial` | If true, will only update the provided secrets |
| `partnerId` | The ID provided by the partner for the given resource |
| `period` | Subscription period for this billing cycle. |
| `productId` | The ID of the product the resource is derived from |
| `protocolSettings` | Any settings provided for the resource to support its product's protocols |
| `refundReason` | The reason for refund. |
| `refundTotal` | Refund amount. |
| `refundedAt` | Most recent moment the invoice was refunded. |
| `revoked` |  |
| `role` | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` |  |
| `secrets` |  |
| `slug` |  |
| `state` | Invoice state. |
| `status` | The current status of the resource |
| `test` | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` |  |
| `token_type` |  |
| `total` | Invoice total amount. |
| `updated` | System update date. |
| `updatedAt` |  |
| `usage` |  |
| `userEmail` |  |
| `validationErrors` |  |

Operations: create, list, load, patch, remove, update.

API path: `/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}/actions`

#### Microfrontend

| Field | Description |
| --- | --- |
| `abuse` |  |
| `accountId` |  |
| `alias` |  |
| `analytics` |  |
| `applications` |  |
| `appliedCve55182Migration` |  |
| `autoAssignCustomDomains` |  |
| `autoAssignCustomDomainsUpdatedBy` |  |
| `autoExposeSystemEnvs` |  |
| `avatar` |  |
| `blobs` |  |
| `buildCommand` |  |
| `commandForIgnoringBuildStep` |  |
| `concurrencyBucketName` |  |
| `connectBuildsEnabled` |  |
| `connectConfigurationId` |  |
| `connectConfigurations` |  |
| `createdAt` |  |
| `creator` |  |
| `crons` |  |
| `customEnvironments` |  |
| `customerSupportCodeVisibility` |  |
| `dataCache` |  |
| `defaultResourceConfig` |  |
| `deploymentExpiration` | Retention policies for deployments. |
| `deploymentPolicy` | Project shape. |
| `devCommand` |  |
| `directoryListing` |  |
| `dismissedToasts` |  |
| `enableAffectedProjectsDeployments` |  |
| `enableExternalRewriteCaching` |  |
| `enablePreviewFeedback` |  |
| `enableProductionFeedback` |  |
| `env` |  |
| `expiration` |  |
| `features` |  |
| `framework` |  |
| `gitComments` |  |
| `gitForkProtection` |  |
| `gitLFS` |  |
| `gitProviderOptions` |  |
| `hasActiveBranches` |  |
| `hasDeployments` |  |
| `id` |  |
| `installCommand` |  |
| `internalRoutes` |  |
| `ipBuckets` |  |
| `jobs` |  |
| `lastAliasRequest` |  |
| `lastRollbackTarget` |  |
| `latestDeployments` |  |
| `link` |  |
| `live` |  |
| `microfrontends` |  |
| `name` |  |
| `nodeVersion` |  |
| `oidcTokenConfig` |  |
| `options` | Optional configuration options for the microfrontend. |
| `optionsAllowlist` |  |
| `outputDirectory` |  |
| `passiveConnectConfigurationId` |  |
| `passport` |  |
| `passwordProtection` |  |
| `paused` |  |
| `permissions` |  |
| `productionDeploymentsFastLane` |  |
| `protectedSourcemaps` |  |
| `protectionBypass` |  |
| `protectionConfig` |  |
| `resourceConfig` |  |
| `rollbackDescription` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` |  |
| `sandbox` |  |
| `schema` | See https://openapi.vercel.sh/microfrontends.json. |
| `security` |  |
| `serverlessFunctionZeroConfigFailover` |  |
| `services` |  |
| `skewProtectionAllowedDomains` |  |
| `skewProtectionBoundaryAt` |  |
| `skewProtectionMaxAge` |  |
| `skipGitConnectDuringLink` |  |
| `sourceFilesOutsideRootDirectory` |  |
| `speedInsights` |  |
| `ssoProtection` |  |
| `staticIps` |  |
| `targets` |  |
| `tier` |  |
| `tracing` |  |
| `transferCompletedAt` |  |
| `transferStartedAt` |  |
| `transferToAccountId` |  |
| `transferredFromAccountId` |  |
| `trustedIps` |  |
| `trustedSources` |  |
| `updatedAt` |  |
| `usageStatus` |  |
| `v0` |  |
| `v0Created` |  |
| `version` | The version of the microfrontends config schema. |
| `webAnalytics` |  |

Operations: create, list, load.

API path: `/v1/microfrontends/group`

#### Network

| Field | Description |
| --- | --- |
| `awsAccountId` | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | The AWS Region in which the network exists. |
| `cidr` | The CIDR range of the Network. |
| `createdAt` | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` |  |
| `hostedZones` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | The unique identifier of the Network. |
| `name` | The name of the network. |
| `peeringConnections` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | Metadata about any projects associated with the Network. |
| `region` | The Vercel region in which the Network exists. |
| `status` | The status of the Network. |
| `teamId` | The unique identifier of the Team that owns the Network. |
| `vpcId` | The ID of the VPC which hosts the network. |

Operations: create, list, load, remove, update.

API path: `/v1/connect/networks`

#### Networking

| Field | Description |
| --- | --- |
| `builds` | Whether to use Static IPs for builds. |
| `regions` |  |

Operations: remove, update.

API path: `/v1/networking/privatelink/endpoints/{endpointId}`

#### Observability

| Field | Description |
| --- | --- |
| `disabled` | Whether Observability Plus should be disabled for the project |
| `disabledAt` |  |
| `id` |  |
| `name` |  |

Operations: list, update.

API path: `/v1/observability/manage/configuration/projects`

#### PrivateLinkEndpoint

| Field | Description |
| --- | --- |
| `awsDnsEntries` | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | The unique identifier of the PrivateLink endpoint. |
| `id` |  |
| `name` | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | The current state of the endpoint. |
| `statusMessage` | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
| `vercelRegion` | The Vercel region the endpoint is provisioned in. |
| `vpcEndpointId` | The identifier of the underlying AWS VPC endpoint. |

Operations: create, list, load, update.

API path: `/v1/networking/privatelink/endpoints`

#### Project

| Field | Description |
| --- | --- |
| `abuse` |  |
| `acceptedPolicies` |  |
| `accountId` |  |
| `alias` |  |
| `analytics` |  |
| `apexName` |  |
| `appliedCve55182Migration` |  |
| `autoAssignCustomDomains` |  |
| `autoAssignCustomDomainsUpdatedBy` |  |
| `autoExposeSystemEnvs` |  |
| `avatar` |  |
| `blobs` |  |
| `buildCommand` | The build command for this project. |
| `commandForIgnoringBuildStep` |  |
| `comment` | A comment to add context on what this env var is for |
| `concurrencyBucketName` |  |
| `configurationId` |  |
| `connectBuildsEnabled` |  |
| `connectConfigurationId` |  |
| `connectConfigurations` | The list of connections from project environment to Secure Compute network |
| `contentHint` |  |
| `createdAt` |  |
| `createdBy` |  |
| `creator` |  |
| `crons` |  |
| `customEnvironmentId` |  |
| `customEnvironmentIds` | The custom environments that the environment variable should be synced to |
| `customEnvironments` |  |
| `customerSupportCodeVisibility` | Specifies whether customer support can see git source for a deployment |
| `dataCache` |  |
| `decrypted` |  |
| `defaultResourceConfig` |  |
| `deploymentExpiration` | Retention policies for deployments. |
| `deploymentPolicy` | Project shape. |
| `devCommand` | The dev command for this project. |
| `directoryListing` |  |
| `dismissedToasts` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` |  |
| `edgeConfigTokenId` |  |
| `enableAffectedProjectsDeployments` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | Opt-in to production toolbar on the project level |
| `env` |  |
| `environmentVariables` | Collection of ENV Variables the Project will use |
| `expiration` |  |
| `features` |  |
| `framework` | The framework that is being used for this project. |
| `gitBranch` | Git branch to link the project domain |
| `gitComments` |  |
| `gitForkProtection` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` |  |
| `gitRepository` | The Git Repository that will be connected to the project. |
| `hasActiveBranches` |  |
| `hasDeployments` |  |
| `hostname` | The deployment hostname to scope the trace session to. |
| `id` |  |
| `installCommand` | The install command for this project. |
| `integrations` |  |
| `internalContentHint` | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` |  |
| `ipBuckets` |  |
| `jobs` |  |
| `key` | The name of the environment variable |
| `lastAliasRequest` |  |
| `lastRollbackTarget` |  |
| `latestDeployments` |  |
| `legacyValue` | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` |  |
| `live` |  |
| `microfrontends` |  |
| `name` | The desired name for the project |
| `newProjectName` | The desired name for the project |
| `nodeVersion` |  |
| `oidcTokenConfig` | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | The output directory of the project. |
| `paidFeatures` |  |
| `passiveConnectConfigurationId` |  |
| `passport` | Passport configuration for the project. |
| `passwordProtection` | Allows to protect project deployments with a password |
| `paused` |  |
| `permissions` |  |
| `previewDeploymentSuffix` | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` |  |
| `projectId` | The unique target project identifier |
| `protectedSourcemaps` | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` |  |
| `protectionConfig` |  |
| `publicSource` | Deprecated. |
| `redirect` | Target destination domain for redirect |
| `redirectStatusCode` | Status code for domain redirect |
| `resourceConfig` | Specifies resource override configuration for the project |
| `rollbackDescription` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | The name of a directory or relative path to the source code of your project. |
| `sandbox` | Specifies the default region and failover regions for sandboxes created in the project |
| `security` |  |
| `serverlessFunctionRegion` | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | Specifies whether Zero Config Failover is enabled for this project. |
| `services` |  |
| `skewProtectionAllowedDomains` | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | Indicates if there are source files outside of the root directory |
| `speedInsights` |  |
| `ssoProtection` | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | Manage Static IPs for this project |
| `sunsetSecretId` | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | The target environment of the environment variable |
| `targets` |  |
| `tier` |  |
| `token` |  |
| `tracing` | Tracing configuration for this project |
| `transferCompletedAt` |  |
| `transferStartedAt` |  |
| `transferToAccountId` |  |
| `transferredFromAccountId` |  |
| `trustedIps` | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | Deployment Protection Trusted Sources |
| `type` | The type of environment variable |
| `updatedAt` |  |
| `updatedBy` |  |
| `usageStatus` |  |
| `v0` |  |
| `v0Created` |  |
| `value` | The value of the environment variable |
| `verification` | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `true` if the domain is verified for use with the project. |
| `visibility` | User-facing config/secret model. |
| `webAnalytics` |  |

Operations: create, load, patch, remove, update.

API path: `/v1/projects/{projectId}/rollback/{deploymentId}`

#### ProjectMember

| Field | Description |
| --- | --- |
| `email` | The email of the team member that should be added to this project. |
| `id` |  |
| `role` | The project role of the member that will be added. |
| `uid` | The ID of the team member that should be added to this project. |
| `username` | The username of the team member that should be added to this project. |

Operations: create, load, remove.

API path: `/v1/projects/{idOrName}/members`

#### ProjectRoute

| Field | Description |
| --- | --- |
| `action` |  |
| `actions` |  |
| `alias` | The staging alias for previewing this version. |
| `conditions` |  |
| `createdBy` | The user who created this version. |
| `currentRoute` |  |
| `description` |  |
| `id` | Unique identifier for the version. |
| `isLive` | Whether this version is currently live in production. |
| `isStaging` | Whether this version is staged and not yet promoted to production. |
| `lastModified` | Timestamp of when this version was last modified. |
| `name` |  |
| `overwrite` |  |
| `pathCondition` |  |
| `position` | Controls where the route is inserted. |
| `prompt` |  |
| `restore` | If true, restores the staged route to the value in the production version. |
| `route` | The full route object to replace the existing route with |
| `routes` |  |
| `ruleCount` | The number of routing rules in this version. |
| `s3Key` | The S3 key where the routing rules are stored. |
| `version` | A version of routing rules stored in S3. |

Operations: create, list, load, patch, remove, update.

API path: `/v1/projects/{projectId}/routes`

#### Query

| Field | Description |
| --- | --- |
| `aggregation` | Aggregation function to apply. |
| `bucketTimezone` | IANA timezone (e.g. |
| `endTime` | End timestamp |
| `filter` | Filter to apply to the query. |
| `granularity` | Time bucket size |
| `groupBy` | Dimensions to group results by. |
| `limit` | Maximum number of results |
| `metric` | Metric id |
| `orderBy` | Rollup column to order grouped results by. |
| `orderDirection` | Direction to order grouped results by. |
| `scope` | Owner or project scope for the query |
| `startTime` | Start timestamp |

Operations: create.

API path: `/v2/observability/query`

#### Record

| Field | Description |
| --- | --- |
| `comment` |  |
| `createdAt` |  |
| `creator` |  |
| `domain` |  |
| `id` |  |
| `name` |  |
| `recordType` |  |
| `ttl` |  |
| `type` |  |
| `value` |  |

Operations: load.

API path: `/domains/records/{recordId}`

#### RollingRelease

| Field | Description |
| --- | --- |
| `activeStage` | The currently active stage, null if the rollout is aborted |
| `advancementType` | The advancement type of the rolling release |
| `canaryDeployment` | The canary deployment being rolled out |
| `currentCanaryPercentage` | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | The current deployment receiving production traffic |
| `nextStage` | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | The ID of a deployment queued for the next rolling release |
| `stages` | All stages configured for this rolling release |
| `startedAt` | Unix timestamp in milliseconds when the rolling release started |
| `state` | The current state of the rolling release |
| `substate` | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | Unix timestamp in milliseconds when the rolling release was last updated |

Operations: create, load, remove, update.

API path: `/v1/projects/{idOrName}/rolling-release/approve-stage`

#### Sandbox

| Field | Description |
| --- | --- |
| `args` | The arguments of the command. |
| `command` | The executable or shell command to run. |
| `createdAt` | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | The method used to create the snapshot. |
| `currentSandboxName` | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | The snapshot ID to set as the current snapshot. |
| `cwd` | The current working directory of the command. |
| `durationMs` | Duration of the command execution in milliseconds. |
| `env` | Additional environment variables to set for this command. |
| `exitCode` | If the command did finish, the exit code. |
| `expiration` | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | The ID of the command. |
| `image` | Image to use for the sandbox. |
| `keepLastSnapshots` | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | The last time the snapshot was used (e.g. |
| `logs` | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | The maximum drive size in bytes. |
| `memory` | Memory allocated in MB. |
| `mounts` | List of drives to mount to the sandbox at the provided path. |
| `name` | The name of the command. |
| `networkId` | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | Network policy configuration. |
| `parentId` | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | The path of the directory to create. |
| `persistent` | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | List of ports to expose from the sandbox. |
| `projectId` | The project that owns the drive. |
| `recursive` | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | The region where the snapshot is stored. |
| `regions` | The regions where the snapshot is available. |
| `resources` | Resources to define the VM |
| `resumed` |  |
| `routes` |  |
| `runtime` | The runtime environment for the sandbox. |
| `sandbox` | This object contains information related to a Vercel NamedSandbox. |
| `session` | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | The ID of the session associated with the command. |
| `sizeBytes` | The size of the snapshot in bytes. |
| `snapshotExpiration` | Default snapshot expiration time in milliseconds. |
| `source` | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | When the command was started, in milliseconds since the epoch. |
| `status` | The status of the snapshot. |
| `statusUpdatedAt` | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | Execute the command with root (superuser) privileges. |
| `tags` | Key-value tags to associate with the sandbox. |
| `timeout` | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `totalActiveCpuDurationMs` | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `totalDurationMs` | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `totalEgressBytes` | Cumulative egress bytes across all sandbox runs. |
| `totalIngressBytes` | Cumulative ingress bytes across all sandbox runs. |
| `updatedAt` | The last time the snapshot was updated, in milliseconds since the epoch. |
| `vcpus` | Number of virtual CPUs allocated. |
| `wait` | If true, returns an ND-JSON stream that emits the command status when started and again when finished. |

Operations: create, list, load, remove, update.

API path: `/v2/sandboxes/sessions/{sessionId}/cmd`

#### Schema

| Field | Description |
| --- | --- |
| `aggregations` |  |
| `defaultAggregation` |  |
| `description` |  |
| `dimensions` |  |
| `id` |  |
| `unit` |  |

Operations: list, load.

API path: `/v2/observability/schema`

#### Security

| Field | Description |
| --- | --- |
| `Action` |  |
| `ActorId` |  |
| `CreatedAt` |  |
| `DeletedAt` |  |
| `Domain` |  |
| `ExpiresAt` |  |
| `Id` |  |
| `Ip` |  |
| `IsProjectRule` |  |
| `Note` |  |
| `OwnerId` |  |
| `ProjectId` |  |
| `UpdatedAt` |  |
| `UpdatedAtHour` |  |
| `action` |  |
| `action_type` |  |
| `active` |  |
| `allSources` |  |
| `botIdEnabled` |  |
| `changes` |  |
| `conditionGroup` |  |
| `conditions` |  |
| `count` |  |
| `crs` | Custom Ruleset |
| `description` |  |
| `domain` |  |
| `endTime` |  |
| `firewallEnabled` |  |
| `host` |  |
| `id` |  |
| `ips` |  |
| `isActive` |  |
| `logHeaders` |  |
| `managedRules` |  |
| `name` |  |
| `note` |  |
| `ownerId` |  |
| `projectKey` |  |
| `projectScope` | If the specified bypass will apply to all domains for a project. |
| `public_ip` |  |
| `ruleId` |  |
| `ruleName` |  |
| `rules` |  |
| `rulesets` |  |
| `sourceIp` |  |
| `startTime` |  |
| `ttl` | Time to live in milliseconds |
| `updatedAt` |  |
| `version` |  |

Operations: create, list, load, patch, remove, update.

API path: `/v1/security/firewall/bypass`

#### Segment

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `createdBy` |  |
| `data` |  |
| `description` |  |
| `hint` |  |
| `id` |  |
| `label` |  |
| `metadata` |  |
| `projectId` |  |
| `slug` |  |
| `typeName` |  |
| `updatedAt` |  |
| `usedByFlags` |  |
| `usedBySegments` |  |

Operations: load.

API path: `/v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}`

#### Storage

| Field | Description |
| --- | --- |
| `access` |  |
| `count` |  |
| `id` |  |
| `isTokenExpired` |  |
| `kind` | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` |  |
| `projectFilter` |  |
| `projectId` | The project this store is scoped to. |
| `projectsMetadata` |  |
| `region` |  |
| `size` |  |
| `status` |  |
| `totalConnectedProjects` |  |
| `usageQuotaExceeded` |  |

Operations: create, load, remove.

API path: `/storage/stores/blob`

#### Team

| Field | Description |
| --- | --- |
| `accessRequestedAt` | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | Attribution information for the session or current page |
| `avatar` | The ID of the file used as avatar for this Team. |
| `billing` | The team's billing plan. |
| `bitbucket` | Map of the connected Bitbucket account. |
| `confirmed` | Current status of the membership. |
| `connect` |  |
| `createdAt` | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | Default deployment expiration settings for this team |
| `defaultPassport` | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | Default roles for the team. |
| `deploymentPolicy` | Composable deployment-time policy for the team. |
| `description` | A short description of the Team. |
| `disableHardAutoBlocks` |  |
| `disableRepositoryDispatchEvents` | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | Controls who can request access to protected deployments. |
| `emailDomain` | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | The new fallback environment for the microfrontends group. |
| `github` | Map of the connected GitHub account. |
| `gitlab` | Map of the connected GitLab account. |
| `hideIpAddresses` | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | Indicates if IP addresses should be accessible in log drains |
| `id` | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | Code that can be used to join this Team. |
| `ipBuckets` |  |
| `joinedFrom` | A map that describes the origin from where the user joined. |
| `membership` | The membership of the authenticated User in relation to the Team. |
| `name` | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | NSNB configuration for the team. |
| `orgRootTeamId` | Best-effort ID of the organization’s root billing team. |
| `pagination` | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | Whether the team is a platform team. |
| `previewDeploymentSuffix` | The hostname that is current set as preview deployment suffix. |
| `projects` |  |
| `regenerateInviteCode` | Create a new invite code and replace the current one. |
| `remoteCaching` | Is remote caching enabled for this team |
| `requireVerifiedCommits` | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | Resource configuration for the team. |
| `role` | The role in the team of the member. |
| `saml` | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | Sensitive environment variable policy for this team |
| `slug` | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | When enabled, creating shareable links requires Owner role. |
| `teamName` | The name of the team. |
| `teamPermissions` | The team permissions to set for the member. |
| `teamSlug` | The slug of the team. |
| `teams` |  |
| `updatedAt` | Timestamp (in milliseconds) of when the Team was last updated. |

Operations: create, list, load, remove, update.

API path: `/v1/teams/{teamId}/dsync-roles`

#### TldName

| Field | Description |
| --- | --- |

Operations: list.

API path: `/v1/registrar/tlds/supported`

#### Toggle

| Field | Description |
| --- | --- |
| `value` |  |

Operations: create.

API path: `/speed-insights/toggle`

#### User

| Field | Description |
| --- | --- |
| `categories` | The categories that group this event with related event types. |
| `createdAt` | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | A list of "entities" within the event `text`. |
| `id` | The unique identifier of the Event. |
| `payload` |  |
| `principal` |  |
| `principalId` | The ID of the principal who generated the event. |
| `requestId` |  |
| `sessionId` | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | The human-readable text of the Event. |
| `tokenId` | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | The type of the event. |
| `user` | Metadata for {@link userId}. |
| `userId` | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | Metadata for {@link viaIds}. |
| `viaIds` | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

Operations: list, load, remove.

API path: `/v3/events`

#### Vcr

| Field | Description |
| --- | --- |
| `arch` | CPU architecture the manifest targets. |
| `createdAt` | ISO 8601 timestamp of when the image was created. |
| `id` | Internal identifier of the image. |
| `imageId` | Internal identifier of the image the tag points at. |
| `kind` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` |  |
| `manifestDigest` | SHA-256 digest of the image manifest. |
| `name` | Name of the repository. |
| `platform` | Operating system the manifest targets. |
| `projectId` | Identifier of the project the repository belongs to. |
| `public` | Whether the repository is public. |
| `pushedBy` | Identifier of the actor that pushed the image. |
| `repositoryId` | Identifier of the repository the image belongs to. |
| `sizeInBytes` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | The tag name. |
| `tags` | Tags pointing at this image's manifest. |
| `teamId` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | Slug of the team that is granted access to the repository. |
| `updatedAt` | ISO 8601 timestamp of when the tag was last updated. |

Operations: create, list, load, patch, remove, update.

API path: `/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/`

#### VcrImageList

| Field | Description |
| --- | --- |
| `arch` | CPU architecture the manifest targets. |
| `createdAt` | ISO 8601 timestamp of when the image was created. |
| `id` | Internal identifier of the image. |
| `kind` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `manifestDigest` | SHA-256 digest of the image manifest. |
| `platform` | Operating system the manifest targets. |
| `pushedBy` | Identifier of the actor that pushed the image. |
| `repositoryId` | Identifier of the repository the image belongs to. |
| `sizeInBytes` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | Tags pointing at this image's manifest. |

Operations: list.

API path: `/v1/vcr/repository/{idOrName}/images`

#### VcrRepositoryList

| Field | Description |
| --- | --- |
| `createdAt` | ISO 8601 timestamp of when the repository was created. |
| `id` | Unique identifier of the repository. |
| `name` | Name of the repository. |
| `projectId` | Identifier of the project the repository belongs to. |
| `public` | Whether the repository is public. |
| `updatedAt` | ISO 8601 timestamp of when the repository was last updated. |

Operations: list.

API path: `/v1/vcr/repository`

#### VcrRepositoryPermissionList

| Field | Description |
| --- | --- |
| `createdAt` | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | Identifier of the repository the permission grants access to. |
| `teamId` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | Slug of the team that is granted access to the repository. |

Operations: list.

API path: `/v1/vcr/repository/{idOrName}/permissions`

#### WebAnalytics

| Field | Description |
| --- | --- |
| `data` |  |
| `query` |  |
| `version` |  |

Operations: load.

API path: `/v1/query/web-analytics/events/aggregate`

#### Webhook

| Field | Description |
| --- | --- |
| `alertRuleIds` |  |
| `createdAt` | A number containing the date when the webhook was created in in milliseconds |
| `events` | The webhooks events |
| `id` | The webhook id |
| `ownerId` | The unique ID of the team the webhook belongs to |
| `projectIds` | The ID of the projects the webhook is associated with |
| `secret` | The webhook secret used to sign the payload |
| `updatedAt` | A number containing the date when the webhook was updated in in milliseconds |
| `url` | A string with the URL of the webhook |

Operations: create, load, remove.

API path: `/v1/webhooks`



## Entities


### AccessGroup

Create an instance: `const access_group = client.AccessGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessGroupId` | `string` | ID of the access group. |
| `createdAt` | `string` | Timestamp in milliseconds when the access group was created. |
| `entitlements` | `Array` |  |
| `id` | `string` |  |
| `isDsyncManaged` | `boolean` |  |
| `membersCount` | `number` | Number of members in the access group. |
| `membersToAdd` | `Array` | List of members to add to the access group. |
| `membersToRemove` | `Array` | List of members to remove from the access group. |
| `name` | `string` | The name of this access group. |
| `projectId` | `string` |  |
| `projects` | `Array` |  |
| `projectsCount` | `number` | Number of projects in the access group. |
| `role` | `string` | The project role that will be added to this Access Group. |
| `teamId` | `string` | ID of the team that this access group belongs to. |
| `teamPermissions` | `Array` | Permissions that the team has in the access group. |
| `teamRoles` | `Array` | Roles that the team has in the access group. |
| `updatedAt` | `string` | Timestamp in milliseconds when the access group was last updated. |

#### Example: Load

```ts
const access_group = await client.AccessGroup().load({ id: 'access_group_id' })
```

#### Example: List

```ts
const access_groups = await client.AccessGroup().list({ id_or_name: "example" })
```

#### Example: Create

```ts
const access_group = await client.AccessGroup().create({
  id: 'example_id',
  accessGroupId: 'example_accessGroupId',
  createdAt: 'example_createdAt',
  isDsyncManaged: true,
  membersCount: 1,
  name: 'example_name',
  projectId: 'example_projectId',
  projectsCount: 1,
  role: 'example_role',
  teamId: 'example_teamId',
  updatedAt: 'example_updatedAt',
})
```


### AiGateway

Create an instance: `const ai_gateway = client.AiGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AiGatewayRule

Create an instance: `const ai_gateway_rule = client.AiGatewayRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `Object` |  |
| `createdAt` | `number` |  |
| `createdBy` | `string` |  |
| `deleted` | `boolean` |  |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `match` | `Object` |  |
| `ownerId` | `string` |  |
| `ruleId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `number` |  |
| `updatedBy` | `string` |  |

#### Example: Create

```ts
const ai_gateway_rule = await client.AiGatewayRule().create({
  createdAt: 1,
  enabled: true,
  ownerId: 'example_ownerId',
  ruleId: 'example_ruleId',
  type: 'example_type',
  updatedAt: 1,
})
```


### AiGatewayRuleList

Create an instance: `const ai_gateway_rule_list = client.AiGatewayRuleList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `Object` |  |
| `createdAt` | `number` |  |
| `createdBy` | `string` |  |
| `deleted` | `boolean` |  |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `match` | `Object` |  |
| `ownerId` | `string` |  |
| `ruleId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `number` |  |
| `updatedBy` | `string` |  |

#### Example: List

```ts
const ai_gateway_rule_lists = await client.AiGatewayRuleList().list()
```


### AiGatewayVirtualModelConfig

Create an instance: `const ai_gateway_virtual_model_config = client.AiGatewayVirtualModelConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowFallbackFromFast` | `boolean` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `Array` | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | Use caching if available. |
| `createdAt` | `number` | Creation timestamp (epoch ms). |
| `createdBy` | `string` | User or app id that created this VMC. |
| `deleted` | `boolean` | Whether this VMC is soft-deleted. |
| `description` | `string` | Optional description for UI. |
| `disallowPromptTraining` | `boolean` | Only use providers that will not train on your prompts. |
| `displayName` | `string` | Human-readable name for UI. |
| `has` | `Array` | Limit providers to those with these features. |
| `hipaaCompliant` | `boolean` | Only use HIPAA-compliant providers. |
| `id` | `string` |  |
| `inferenceRegion` | `Object` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | Canonical model slug this VMC maps to (e.g. |
| `models` | `Array` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `Array` | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Team (owner) that owns this VMC. |
| `providerOnly` | `Array` | Restrict routing to only these providers. |
| `providerOptions` | `Object` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `Array` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `Object` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `Array` | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | For kind=router: how to order candidates. |
| `serviceTier` | `string` | Service tier for providers that support it. |
| `sort` | `string` | Rank eligible providers by an attribute. |
| `speed` | `string` | Only use fastest providers with short timeouts. |
| `status` | `string` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `number` | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `boolean` | Only use providers with zero data retention. |

#### Example: Load

```ts
const ai_gateway_virtual_model_config = await client.AiGatewayVirtualModelConfig().load({ id: 'ai_gateway_virtual_model_config_id' })
```

#### Example: Create

```ts
const ai_gateway_virtual_model_config = await client.AiGatewayVirtualModelConfig().create({
  createdAt: 1,
  deleted: true,
  kind: 'example_kind',
  ownerId: 'example_ownerId',
  status: 'example_status',
  updatedAt: 1,
  virtualModelSlug: 'example_virtualModelSlug',
})
```


### AiGatewayVirtualModelConfigList

Create an instance: `const ai_gateway_virtual_model_config_list = client.AiGatewayVirtualModelConfigList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowFallbackFromFast` | `boolean` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `Array` | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | Use caching if available. |
| `createdAt` | `number` | Creation timestamp (epoch ms). |
| `createdBy` | `string` | User or app id that created this VMC. |
| `deleted` | `boolean` | Whether this VMC is soft-deleted. |
| `description` | `string` | Optional description for UI. |
| `disallowPromptTraining` | `boolean` | Only use providers that will not train on your prompts. |
| `displayName` | `string` | Human-readable name for UI. |
| `has` | `Array` | Limit providers to those with these features. |
| `hipaaCompliant` | `boolean` | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `Object` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | Canonical model slug this VMC maps to (e.g. |
| `models` | `Array` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `Array` | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Team (owner) that owns this VMC. |
| `providerOnly` | `Array` | Restrict routing to only these providers. |
| `providerOptions` | `Object` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `Array` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `Object` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `Array` | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | For kind=router: how to order candidates. |
| `serviceTier` | `string` | Service tier for providers that support it. |
| `sort` | `string` | Rank eligible providers by an attribute. |
| `speed` | `string` | Only use fastest providers with short timeouts. |
| `status` | `string` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `number` | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `boolean` | Only use providers with zero data retention. |

#### Example: List

```ts
const ai_gateway_virtual_model_config_lists = await client.AiGatewayVirtualModelConfigList().list()
```


### Alias

Create an instance: `const alias = client.Alias()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | `string` | The date when the alias was created |
| `createdAt` | `number` | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `Object` | Information of the user who created the alias |
| `deletedAt` | `number` | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `Object` | A map with the deployment ID, URL and metadata |
| `deploymentId` | `string` | The deployment ID |
| `id` | `string` |  |
| `microfrontends` | `Object` | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `string` | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `string` | The unique identifier of the project |
| `protectionBypass` | `Object` | The protection bypass for the alias |
| `redirect` | `string` | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | `number` | Status code to be used on redirect |
| `uid` | `string` | The unique identifier of the alias |
| `updatedAt` | `number` | The date when the alias was updated in milliseconds since the UNIX epoch |

#### Example: Load

```ts
const alias = await client.Alias().load({ id: 'alias_id' })
```

#### Example: List

```ts
const aliass = await client.Alias().list()
```

#### Example: Create

```ts
const alias = await client.Alias().create({
  deployment_id: 'example_deployment_id',
  alias: 'example_alias',
  created: 'example_created',
  creator: {},
  deployment: {},
  deploymentId: 'example_deploymentId',
  microfrontends: {},
  projectId: 'example_projectId',
  uid: 'example_uid',
})
```


### ApiAiGateway

Create an instance: `const api_ai_gateway = client.ApiAiGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ts
const api_ai_gateway = await client.ApiAiGateway().load()
```


### ApiKey

Create an instance: `const api_key = client.ApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeAt` | `number` | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `Object` | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `number` | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `string` | The ID of the user who created the API key. |
| `createdByAppId` | `string` | The ID of the app that created the API key, if any |
| `expiresAt` | `number` | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `string` | The unique identifier of the API key. |
| `leakedAt` | `number` | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `string` | URL where the API key was discovered as leaked. |
| `metadata` | `Object` | Generic metadata attached to the API key. |
| `name` | `string` | The human-readable name of the API key. |
| `partialKey` | `string` | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `string` | The ID of the project that this API key grants access to. |
| `purpose` | `string` | The API key's purpose, i.e. |
| `quota` | `Object` | AI Gateway quota associated with an API key. |
| `teamId` | `string` | The ID of the team that the API key grants access to. |

#### Example: Create

```ts
const api_key = await client.ApiKey().create({
  activeAt: 1,
  aiGatewayQuota: {},
  createdAt: 1,
  createdBy: 'example_createdBy',
  createdByAppId: 'example_createdByAppId',
  expiresAt: 1,
  id: 'example_id',
  leakedAt: 1,
  leakedUrl: 'example_leakedUrl',
  name: 'example_name',
  partialKey: 'example_partialKey',
  projectId: 'example_projectId',
  purpose: 'example_purpose',
  quota: {},
  teamId: 'example_teamId',
})
```


### Artifact

Create an instance: `const artifact = client.Artifact()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hashes` | `Array` | artifact hashes |
| `id` | `string` |  |

#### Example: Load

```ts
const artifact = await client.Artifact().load({ id: 'artifact_id' })
```

#### Example: Create

```ts
const artifact = await client.Artifact().create({
  hashes: [],
})
```


### Authentication

Create an instance: `const authentication = client.Authentication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeAt` | `number` | Timestamp (in milliseconds) of when the token was most recently used. |
| `createdAt` | `number` | Timestamp (in milliseconds) of when the token was created. |
| `expiresAt` | `number` | Timestamp (in milliseconds) of when the token expires. |
| `id` | `string` | The unique identifier of the token. |
| `leakedAt` | `number` | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | `string` | URL where the token was discovered as leaked. |
| `name` | `string` | The human-readable name of the token. |
| `origin` | `string` | The origin of how the token was created. |
| `prefix` | `string` | The token's prefix, for identification purposes. |
| `projectId` | `string` | The ID of the project to scope this token to |
| `revokedAt` | `number` | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | `Array` | The access scopes granted to the token. |
| `suffix` | `string` | The last few characters of the token, for identification purposes. |
| `type` | `string` | The type of the token. |

#### Example: Load

```ts
const authentication = await client.Authentication().load({ token_id: 'token_id' })
```

#### Example: Create

```ts
const authentication = await client.Authentication().create({
  activeAt: 1,
  createdAt: 1,
  id: 'example_id',
  name: 'example_name',
  type: 'example_type',
})
```


### Billing

Create an instance: `const billing = client.Billing()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const billing = await client.Billing().load({ from: 'from', to: 'to' })
```

#### Example: Create

```ts
const billing = await client.Billing().create({
})
```


### BulkRedirect

Create an instance: `const bulk_redirect = client.BulkRedirect()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The staging link for previewing redirects in this version. |
| `createdBy` | `string` |  |
| `id` | `string` | The unique identifier for the version. |
| `isLive` | `boolean` | Whether this version is currently live in production. |
| `isStaging` | `boolean` | Whether this version has not been promoted to production yet and is not serving end users. |
| `key` | `string` | The key of the version. |
| `lastModified` | `number` |  |
| `name` | `string` | Optional name for the version. |
| `overwrite` | `boolean` |  |
| `projectId` | `string` |  |
| `redirect` | `Object` | The redirect object to edit. |
| `redirectCount` | `number` | The number of redirects in this version. |
| `redirects` | `Array` |  |
| `restore` | `boolean` | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `string` |  |

#### Example: Load

```ts
const bulk_redirect = await client.BulkRedirect().load({ project_id: 'project_id' })
```

#### Example: List

```ts
const bulk_redirects = await client.BulkRedirect().list({ project_id: "example" })
```

#### Example: Create

```ts
const bulk_redirect = await client.BulkRedirect().create({
  project_id: 'example_project_id',
  createdBy: 'example_createdBy',
  id: 'example_id',
  key: 'example_key',
  lastModified: 1,
  projectId: 'example_projectId',
  redirect: {},
  teamId: 'example_teamId',
})
```


### Cert

Create an instance: `const cert = client.Cert()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoRenew` | `boolean` |  |
| `ca` | `string` | The certificate authority |
| `cert` | `string` | The certificate |
| `cns` | `Array` | The common names the cert should be issued for |
| `createdAt` | `number` |  |
| `expiresAt` | `number` |  |
| `id` | `string` |  |
| `key` | `string` | The certificate key |
| `skipValidation` | `boolean` | Skip validation of the certificate |

#### Example: Load

```ts
const cert = await client.Cert().load({ id: 'cert_id' })
```

#### Example: List

```ts
const certs = await client.Cert().list()
```

#### Example: Create

```ts
const cert = await client.Cert().create({
  autoRenew: true,
  ca: 'example_ca',
  cert: 'example_cert',
  cns: [],
  createdAt: 1,
  expiresAt: 1,
  id: 'example_id',
  key: 'example_key',
})
```


### Check

Create an instance: `const check = client.Check()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocking` | `boolean` | Whether the check should block a deployment from succeeding |
| `blocks` | `string` |  |
| `completedAt` | `number` |  |
| `conclusion` | `*` | The result of the check being run |
| `createdAt` | `number` |  |
| `deletedAt` | `number` |  |
| `detailsUrl` | `string` | URL to display for further details |
| `externalId` | `string` | An identifier that can be used as an external reference |
| `id` | `string` |  |
| `integrationId` | `string` |  |
| `isRerequestable` | `boolean` |  |
| `metrics` | `Object` |  |
| `name` | `string` | The name of the check being created |
| `output` | `Object` | The results of the check Run |
| `ownerId` | `string` |  |
| `path` | `string` | Path of the page that is being checked |
| `projectId` | `string` |  |
| `requires` | `string` |  |
| `rerequestable` | `boolean` | Whether a user should be able to request for the check to be rerun if it fails |
| `source` | `*` |  |
| `sourceIntegrationConfigurationId` | `string` |  |
| `sourceKind` | `string` |  |
| `startedAt` | `number` |  |
| `status` | `*` | The current status of the check |
| `targets` | `Array` |  |
| `timeout` | `number` |  |
| `updatedAt` | `number` |  |

#### Example: Load

```ts
const check = await client.Check().load({ id: 'check_id' })
```

#### Example: List

```ts
const checks = await client.Check().list({ project_id_or_name: "example" })
```

#### Example: Create

```ts
const check = await client.Check().create({
  deployment_id: 'example_deployment_id',
  blocking: true,
  blocks: 'example_blocks',
  createdAt: 1,
  id: 'example_id',
  integrationId: 'example_integrationId',
  isRerequestable: true,
  metrics: {},
  name: 'example_name',
  ownerId: 'example_ownerId',
  projectId: 'example_projectId',
  requires: 'example_requires',
  source: 'example_source',
  sourceKind: 'example_sourceKind',
  targets: [],
  timeout: 1,
  updatedAt: 1,
})
```


### ChecksV2

Create an instance: `const checks_v2 = client.ChecksV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checkId` | `string` |  |
| `completedAt` | `number` |  |
| `conclusion` | `string` |  |
| `conclusionText` | `string` |  |
| `externalId` | `string` |  |
| `externalUrl` | `string` |  |
| `output` | `Object` |  |
| `runs` | `Array` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const checks_v2 = await client.ChecksV2().load({ check_run_id: 'check_run_id', deployment_id: 'deployment_id' })
```

#### Example: List

```ts
const checks_v2s = await client.ChecksV2().list({ deployment_id: "example" })
```

#### Example: Create

```ts
const checks_v2 = await client.ChecksV2().create({
  deployment_id: 'example_deployment_id',
  checkId: 'example_checkId',
  runs: [],
})
```


### Connect

Create an instance: `const connect = client.Connect()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additionalParams` | `Object` |  |
| `audience` | `Array` |  |
| `authorizationDetails` | `Array` |  |
| `authorizationId` | `string` | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `Object` | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `Object` |  |
| `deviceCode` | `boolean` |  |
| `displayName` | `string` | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `number` |  |
| `expiresInMs` | `number` |  |
| `externalSubject` | `string` |  |
| `id` | `string` | Client id (e.g. |
| `installationId` | `string` |  |
| `metadata` | `Object` | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `string` | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `string` |  |
| `resources` | `Array` |  |
| `returnUrl` | `string` |  |
| `scopes` | `Array` |  |
| `service` | `string` | Resolved service id when known (e.g. |
| `serviceName` | `string` | Curated display name of the resolved service (e.g. |
| `subject` | `*` |  |
| `tenantId` | `string` |  |
| `token` | `string` |  |
| `tokenGroupId` | `string` | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` | `string` |  |
| `type` | `string` | Client type (e.g. |
| `uid` | `string` | Client uid (e.g. |
| `validityBufferMs` | `number` |  |
| `webhook` | `string` |  |

#### Example: Create

```ts
const connect = await client.Connect().create({
  connector: 'example_connector',
  displayName: 'example_displayName',
  expiresAt: 1,
  id: 'example_id',
  name: 'example_name',
  token: 'example_token',
  tokenId: 'example_tokenId',
  type: 'example_type',
  uid: 'example_uid',
})
```


### ConnectConnector

Create an instance: `const connect_connector = client.ConnectConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `string` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `Object` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | The connection method this connector was created from, when the create request named one. |
| `connector` | `Object` | Updated connector. |
| `createdAt` | `number` | Creation time in epoch milliseconds. |
| `createdBy` | `*` | Principal that created the connector. |
| `creationMode` | `string` | How the connector row was originally created. |
| `data` | `*` | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `string` | Installation used when a token request does not specify an installation. |
| `destinations` | `Array` | Complete replacement set of trigger destinations. |
| `devsite` | `string` | Developer website for the connected service. |
| `displayName` | `string` | Human-readable connector name. |
| `docsite` | `string` | Developer documentation for the connected service. |
| `environments` | `Array` | Environments for the project connection. |
| `events` | `Array` | Known events this connector subscribes to (e.g. |
| `icon` | `string` | Connector branding icon. |
| `id` | `string` | Stable `scl_` connector ID. |
| `knownStale` | `boolean` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `Object` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Connector name within the owning team. |
| `params` | `Object` | Values for the selected connection method's template fields. |
| `projectId` | `string` | Project to connect during creation. |
| `reconsentNeeded` | `Object` | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `string` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `number` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `boolean` | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `string` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `Object` | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `Array` | Token subject types supported by the connector. |
| `supportsIcon` | `*` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `boolean` | Whether the connector supports an installation flow. |
| `supportsRevocation` | `boolean` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `boolean` | Whether this connector type supports trigger webhooks. |
| `target` | `string` | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `*` | Initial trigger destination. |
| `triggerDestinations` | `Array` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `Object` | Incoming trigger configuration for the connector. |
| `type` | `string` | Connector implementation type. |
| `typeIcon` | `string` | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Human-readable name of the connector type. |
| `uid` | `string` | Team-scoped UID. |
| `updatedAt` | `number` | Last update time in epoch milliseconds. |
| `updatedBy` | `*` | Principal that most recently updated the connector. |
| `userTokens` | `Object` | User-token capabilities and known grants for the connector. |
| `website` | `string` | Public website for the connected service. |

#### Example: Load

```ts
const connect_connector = await client.ConnectConnector().load({ id: 'connect_connector_id' })
```

#### Example: Create

```ts
const connect_connector = await client.ConnectConnector().create({
  appTokens: {},
  connector: {},
  createdAt: 1,
  data: 'example_data',
  destinations: [],
  displayName: 'example_displayName',
  id: 'example_id',
  name: 'example_name',
  reconsentNeeded: {},
  service: 'example_service',
  serviceSync: {},
  supportedSubjectTypes: [],
  supportsIcon: 'example_supportsIcon',
  supportsInstallation: true,
  supportsRevocation: true,
  supportsTriggers: true,
  triggers: {},
  type: 'example_type',
  typeName: 'example_typeName',
  uid: 'example_uid',
  updatedAt: 1,
  userTokens: {},
})
```


### ConnectConnectorList

Create an instance: `const connect_connector_list = client.ConnectConnectorList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `string` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `Object` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | The connection method this connector was created from, when the create request named one. |
| `createdAt` | `number` | Creation time in epoch milliseconds. |
| `createdBy` | `*` | Principal that created the connector. |
| `creationMode` | `string` | How the connector row was originally created. |
| `defaultInstallationId` | `string` | Installation used when a token request does not specify an installation. |
| `devsite` | `string` | Developer website for the connected service. |
| `displayName` | `string` | Human-readable connector name. |
| `docsite` | `string` | Developer documentation for the connected service. |
| `events` | `Array` | Known events this connector subscribes to (e.g. |
| `icon` | `string` | Connector branding icon. |
| `id` | `string` | Stable `scl_` connector ID. |
| `knownStale` | `boolean` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `Object` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Connector name within the owning team. |
| `redirectUri` | `string` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `number` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `string` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `Array` | Token subject types supported by the connector. |
| `supportsIcon` | `*` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `boolean` | Whether the connector supports an installation flow. |
| `supportsRevocation` | `boolean` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `boolean` | Whether this connector type supports trigger webhooks. |
| `target` | `string` | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `Array` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `Object` | Incoming trigger configuration for the connector. |
| `type` | `string` | Connector implementation type. |
| `typeIcon` | `string` | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Human-readable name of the connector type. |
| `uid` | `string` | Team-scoped UID. |
| `updatedAt` | `number` | Last update time in epoch milliseconds. |
| `updatedBy` | `*` | Principal that most recently updated the connector. |
| `userTokens` | `Object` | User-token capabilities and known grants for the connector. |
| `website` | `string` | Public website for the connected service. |

#### Example: List

```ts
const connect_connector_lists = await client.ConnectConnectorList().list()
```


### ConnectConnectorProjectConnectionList

Create an instance: `const connect_connector_project_connection_list = client.ConnectConnectorProjectConnectionList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `Array` | Environments where the connector is enabled for the project. |
| `project` | `Object` | Vercel project connected to the connector. |
| `updatedAt` | `number` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: List

```ts
const connect_connector_project_connection_lists = await client.ConnectConnectorProjectConnectionList().list({ connector_id: "example" })
```


### ConnectProjectConnection

Create an instance: `const connect_project_connection = client.ConnectProjectConnection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `Array` | Environments where the connector is enabled for the project. |
| `environments` | `Array` | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `Object` | Vercel project connected to the connector. |
| `updatedAt` | `number` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: Load

```ts
const connect_project_connection = await client.ConnectProjectConnection().load({ connector_id: 'connector_id', project_id: 'project_id' })
```

#### Example: Create

```ts
const connect_project_connection = await client.ConnectProjectConnection().create({
  connector_id: 'example_connector_id',
  project_id: 'example_project_id',
  connectorId: 'example_connectorId',
  createdAt: 1,
  enabledEnvironments: [],
  environments: [],
  project: {},
  updatedAt: 1,
})
```


### ConnectProjectConnectorConnectionList

Create an instance: `const connect_project_connector_connection_list = client.ConnectProjectConnectorConnectionList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `Array` | Environments where the connector is enabled for the project. |
| `project` | `Object` | Vercel project connected to the connector. |
| `updatedAt` | `number` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: List

```ts
const connect_project_connector_connection_lists = await client.ConnectProjectConnectorConnectionList().list({ project_id: "example" })
```


### Deployment

Create an instance: `const deployment = client.Deployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aliasAssigned` | `*` |  |
| `aliasError` | `Object` | An error object in case aliasing of the deployment failed. |
| `attribution` | `Object` | Commit attribution metadata |
| `buildMachine` | `string` | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `number` | Timestamp of when the deployment started building at. |
| `checks` | `Object` | Detailed information about v2 deployment checks. |
| `checksConclusion` | `string` | Conclusion for checks |
| `checksState` | `string` | State of all registered checks |
| `connectBuildsEnabled` | `boolean` | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `string` | The ID of Secure Compute network used for this deployment |
| `created` | `number` | Timestamp of when the deployment got created. |
| `createdAt` | `number` |  |
| `creator` | `Object` | Metadata information of the deployment creator. |
| `customEnvironment` | `Object` | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `string` | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `string` | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `number` | Timestamp of when the deployment got deleted. |
| `deploymentId` | `string` | The ID of an existing deployment to redeploy. |
| `errorCode` | `string` | Error code when the deployment is in an error state. |
| `errorMessage` | `string` | Error message when the deployment is in an canceled or error state. |
| `expiration` | `number` | The expiration configured by the project retention policy |
| `files` | `Array` | The files to include in the deployment. |
| `gitAccessToken` | `string` | Available only to Vercel platform accounts. |
| `gitMetadata` | `Object` | Populates initial git metadata for different git providers. |
| `gitSource` | `*` | Defines the Git Repository source to be deployed. |
| `id` | `string` |  |
| `inspectorUrl` | `string` | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `boolean` | Deployment can be used for instant rollback |
| `manualProvisioning` | `Object` |  |
| `meta` | `Object` | An object containing the deployment's metadata. |
| `monorepoManager` | `string` | The monorepo manager that is being used for this deployment. |
| `name` | `string` | A string with the project name used in the deployment URL |
| `oomReport` | `string` | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `Array` |  |
| `passiveConnectConfigurationId` | `string` | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `Object` | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `boolean` |  |
| `project` | `string` | The target project identifier in which the deployment will be created. |
| `projectId` | `string` | The project ID of the deployment |
| `projectSettings` | `Object` | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `number` | The expiration proposed to replace the existing expiration |
| `ready` | `number` | Timestamp of when the deployment got ready. |
| `readyState` | `string` |  |
| `readySubstate` | `string` | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `Object` | NSNB Blocked metadata |
| `softDeletedByRetention` | `boolean` | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | `string` | The source of the deployment. |
| `state` | `string` | In which state is the deployment. |
| `status` | `string` |  |
| `statusText` | `string` |  |
| `statusUrl` | `string` |  |
| `target` | `string` | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | `string` | The type of the deployment. |
| `uid` | `string` | The unique identifier of the deployment. |
| `undeleted` | `number` | Timestamp of when the deployment was undeleted. |
| `url` | `string` | The URL of the deployment. |
| `withLatestCommit` | `boolean` | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

#### Example: Load

```ts
const deployment = await client.Deployment().load({ id: 'deployment_id' })
```

#### Example: List

```ts
const deployments = await client.Deployment().list()
```

#### Example: Create

```ts
const deployment = await client.Deployment().create({
  aliasError: {},
  checks: {},
  created: 1,
  createdAt: 1,
  creator: {},
  customEnvironment: {},
  inspectorUrl: 'example_inspectorUrl',
  manualProvisioning: {},
  name: 'example_name',
  platform: {},
  projectId: 'example_projectId',
  readyState: 'example_readyState',
  seatBlock: {},
  type: 'example_type',
  uid: 'example_uid',
  url: 'example_url',
})
```


### Dns

Create an instance: `const dns = client.Dns()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | A comment to add context on what this DNS record is for |
| `createdAt` | `number` |  |
| `creator` | `string` |  |
| `domain` | `string` |  |
| `https` | `Object` |  |
| `id` | `string` |  |
| `mxPriority` | `number` | The MX priority value of the DNS record |
| `name` | `string` | The name of the DNS record |
| `recordType` | `string` |  |
| `srv` | `Object` |  |
| `ttl` | `number` | The Time to live (TTL) value of the DNS record |
| `type` | `string` | The type of record, it could be one of the valid DNS records. |
| `value` | `string` | The value of the DNS record |

#### Example: Load

```ts
const dns = await client.Dns().load({ domain_id: 'domain_id' })
```

#### Example: Create

```ts
const dns = await client.Dns().create({
  domain_id: 'example_domain_id',
  creator: 'example_creator',
  domain: 'example_domain',
  https: {},
  id: 'example_id',
  name: 'example_name',
  recordType: 'example_recordType',
  srv: {},
  type: 'example_type',
  value: 'example_value',
})
```


### Domain

Create an instance: `const domain = client.Domain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `boughtAt` | `number` | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `number` | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `Object` | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `Array` | A list of custom nameservers for the domain to point to. |
| `echMode` | `string` | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `number` | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `string` | The unique identifier of the domain. |
| `intendedNameservers` | `Array` | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `string` | The domain operation to perform. |
| `name` | `string` | The domain name. |
| `nameservers` | `Array` | A list of the current nameservers of the domain. |
| `renew` | `boolean` | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `string` | The type of service the domain is handled by. |
| `suffix` | `boolean` |  |
| `teamId` | `string` |  |
| `transferStartedAt` | `number` | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `number` | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `string` |  |
| `verified` | `boolean` | If the domain has the ownership verified. |

#### Example: Load

```ts
const domain = await client.Domain().load({ id: 'domain_id' })
```

#### Example: List

```ts
const domains = await client.Domain().list()
```

#### Example: Create

```ts
const domain = await client.Domain().create({
  boughtAt: 1,
  createdAt: 1,
  creator: {},
  echMode: 'example_echMode',
  expiresAt: 1,
  id: 'example_id',
  intendedNameservers: [],
  name: 'example_name',
  nameservers: [],
  serviceType: 'example_serviceType',
  suffix: true,
  teamId: 'example_teamId',
  userId: 'example_userId',
  verified: true,
})
```


### DomainsRegistrar

Create an instance: `const domains_registrar = client.DomainsRegistrar()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authCode` | `string` | The auth code for the domain. |
| `autoRenew` | `boolean` | Whether the domain should be auto-renewed before it expires. |
| `available` | `boolean` |  |
| `contactInformation` | `Object` | The contact information for the domain. |
| `domains` | `Array` | an array of at most 50 item(s) |
| `error` | `*` |  |
| `expectedPrice` | `number` |  |
| `languageCode` | `string` | The language code for the domain. |
| `nameservers` | `Array` |  |
| `orderId` | `string` | A valid order ID |
| `purchasePrice` | `*` |  |
| `renewalPrice` | `*` |  |
| `results` | `Array` |  |
| `status` | `string` |  |
| `transferPrice` | `*` |  |
| `years` | `number` | The number of years the returned price is for. |

#### Example: Load

```ts
const domains_registrar = await client.DomainsRegistrar().load({ order_id: 'order_id' })
```

#### Example: Create

```ts
const domains_registrar = await client.DomainsRegistrar().create({
  authCode: 'example_authCode',
  autoRenew: true,
  available: true,
  contactInformation: {},
  domains: [],
  expectedPrice: 1,
  nameservers: [],
  orderId: 'example_orderId',
  purchasePrice: 'example_purchasePrice',
  renewalPrice: 'example_renewalPrice',
  results: [],
  status: 'example_status',
  transferPrice: 'example_transferPrice',
  years: 1,
})
```


### Drain

Create an instance: `const drain = client.Drain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delivery` | `Object` |  |
| `drains` | `*` |  |
| `filter` | `Object` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `projectIds` | `Array` |  |
| `projects` | `string` |  |
| `sampling` | `Array` |  |
| `schemas` | `Object` |  |
| `source` | `Object` |  |
| `status` | `string` |  |
| `transforms` | `Array` |  |

#### Example: Load

```ts
const drain = await client.Drain().load({ id: 'drain_id' })
```

#### Example: Create

```ts
const drain = await client.Drain().create({
  drains: 'example_drains',
  filter: {},
  name: 'example_name',
  projects: 'example_projects',
  schemas: {},
})
```


### EdgeCache

Create an instance: `const edge_cache = client.EdgeCache()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const edge_cache = await client.EdgeCache().create({
  project_id_or_name: 'example_project_id_or_name',
})
```


### Env

Create an instance: `const env = client.Env()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `applyToAllCustomEnvironments` | `boolean` | whether or not this env varible applies to custom environments |
| `comment` | `string` | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `string` | The date when the Shared Env Var was created. |
| `createdAt` | `number` | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `string` | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `Array` | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `boolean` | whether or not this env variable is decrypted |
| `deletedAt` | `number` | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `string` | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `Array` |  |
| `failed` | `Array` |  |
| `id` | `string` | The unique identifier of the Shared Env Var. |
| `key` | `string` | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `string` | The last editor full name or username. |
| `ownerId` | `string` | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `Array` | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `Array` |  |
| `target` | `Array` | environments this env variable targets |
| `type` | `string` | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `Array` |  |
| `updatedAt` | `number` | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `string` | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `Object` | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
| `value` | `string` | The value of the Shared Env Var. |

#### Example: Load

```ts
const env = await client.Env().load({ id: 'env_id' })
```

#### Example: List

```ts
const envs = await client.Env().list()
```

#### Example: Create

```ts
const env = await client.Env().create({
  evs: [],
  failed: [],
  securityIssues: [],
  updated: [],
  updates: {},
})
```


### Environment

Create an instance: `const environment = client.Environment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branchMatcher` | `Object` | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `string` | Where to copy environment variables from. |
| `createdAt` | `number` | Timestamp when the environment was created |
| `currentDeploymentAliases` | `Array` | List of aliases for the current deployment |
| `description` | `string` | Optional description of the environment's purpose |
| `domains` | `Array` | List of domains associated with this environment |
| `id` | `string` | Unique identifier for the custom environment (format: env_*) |
| `slug` | `string` | URL-friendly name of the environment |
| `type` | `string` | The type of environment (production, preview, or development) |
| `updatedAt` | `number` | Timestamp when the environment was last updated |

#### Example: Load

```ts
const environment = await client.Environment().load({ environment_slug_or_id: 'environment_slug_or_id', project_id: 'project_id' })
```

#### Example: List

```ts
const environments = await client.Environment().list({ id_or_name: "example" })
```

#### Example: Create

```ts
const environment = await client.Environment().create({
  id_or_name: 'example_id_or_name',
  branchMatcher: {},
  createdAt: 1,
  id: 'example_id',
  type: 'example_type',
  updatedAt: 1,
})
```


### FeatureFlag

Create an instance: `const feature_flag = client.FeatureFlag()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changedEnvironments` | `Array` |  |
| `createdAt` | `number` |  |
| `createdBy` | `string` | The user who created this patch |
| `data` | `Object` | The data of the segment |
| `description` | `string` | A description of the flag |
| `environments` | `Object` | The configuration for the flag in different environments |
| `flagId` | `string` |  |
| `flags` | `Array` |  |
| `hint` | `string` |  |
| `id` | `string` |  |
| `kind` | `string` | The kind of flag |
| `label` | `string` |  |
| `maintainerIds` | `Array` | The user ids of the maintainers of the flag |
| `message` | `string` | Additional message for this version |
| `metadata` | `Object` |  |
| `operations` | `Array` |  |
| `ownerId` | `string` |  |
| `pagination` | `Object` |  |
| `permanent` | `boolean` | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `string` |  |
| `revision` | `number` |  |
| `seed` | `number` | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `string` | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `string` |  |
| `status` | `Object` |  |
| `tags` | `Array` | Tags for categorizing the flag |
| `typeName` | `string` |  |
| `updatedAt` | `number` |  |
| `updatedBy` | `string` |  |
| `variants` | `Array` | The variants of the flag |

#### Example: Load

```ts
const feature_flag = await client.FeatureFlag().load({ team_id: 'team_id' })
```

#### Example: List

```ts
const feature_flags = await client.FeatureFlag().list({ deployment_id: "example" })
```


### File

Create an instance: `const file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `Array` | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `string` | The content-type of the file (only valid for the `file` type) |
| `mode` | `number` | The file "mode" indicating file type and permissions. |
| `name` | `string` | The name of the file tree entry |
| `type` | `string` | String indicating the type of file tree entry. |
| `uid` | `string` | The unique identifier of the file (only valid for the `file` type) |

#### Example: List

```ts
const files = await client.File().list({ deployment_id: "example" })
```


### Flag

Create an instance: `const flag = client.Flag()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `number` |  |
| `createdBy` | `string` |  |
| `description` | `string` |  |
| `environments` | `Object` |  |
| `id` | `string` |  |
| `kind` | `string` |  |
| `maintainerIds` | `Array` |  |
| `metadata` | `Object` |  |
| `ownerId` | `string` |  |
| `permanent` | `boolean` |  |
| `projectId` | `string` |  |
| `revision` | `number` |  |
| `seed` | `number` |  |
| `slug` | `string` |  |
| `state` | `string` |  |
| `tags` | `Array` |  |
| `typeName` | `string` |  |
| `updatedAt` | `number` |  |
| `updatedBy` | `string` |  |
| `variants` | `Array` |  |

#### Example: Load

```ts
const flag = await client.Flag().load({ id: 'flag_id', project_id: 'project_id' })
```


### FlagsSdkKeyWithSecret

Create an instance: `const flags_sdk_key_with_secret = client.FlagsSdkKeyWithSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `number` |  |
| `createdBy` | `string` |  |
| `deletedAt` | `number` |  |
| `environment` | `string` |  |
| `hashKey` | `string` |  |
| `keyValue` | `string` | Cleartext value of the SDK key. |
| `label` | `string` |  |
| `partialKeyValue` | `string` | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` | `string` |  |
| `sdkKeyType` | `string` |  |
| `tokenValue` | `string` | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` | `string` |  |
| `updatedAt` | `number` |  |


### GlobalConfig

Create an instance: `const global_config = client.GlobalConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `number` |  |
| `createdBy` | `string` | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` | `number` |  |
| `digest` | `string` |  |
| `id` | `string` |  |
| `itemCount` | `number` |  |
| `items` | `Object` |  |
| `ownerId` | `string` |  |
| `purpose` | `*` |  |
| `schema` | `Object` |  |
| `sizeInBytes` | `number` |  |
| `slug` | `string` | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `number` | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `Object` | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `number` |  |

#### Example: Load

```ts
const global_config = await client.GlobalConfig().load({ id: 'global_config_id' })
```

#### Example: List

```ts
const global_configs = await client.GlobalConfig().list({ id: "example_id" })
```

#### Example: Create

```ts
const global_config = await client.GlobalConfig().create({
  createdAt: 1,
  digest: 'example_digest',
  id: 'example_id',
  itemCount: 1,
  ownerId: 'example_ownerId',
  sizeInBytes: 1,
  transfer: {},
  updatedAt: 1,
})
```


### GlobalConfigItem

Create an instance: `const global_config_item = client.GlobalConfigItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `number` |  |
| `description` | `string` |  |
| `edgeConfigId` | `string` |  |
| `id` | `string` |  |
| `key` | `string` |  |
| `updatedAt` | `number` |  |
| `value` | `*` |  |

#### Example: Load

```ts
const global_config_item = await client.GlobalConfigItem().load({ id: 'global_config_item_id', global_config_id: 'global_config_id' })
```

#### Example: List

```ts
const global_config_items = await client.GlobalConfigItem().list({ id: "example_id" })
```


### GlobalConfigToken

Create an instance: `const global_config_token = client.GlobalConfigToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `number` |  |
| `edgeConfigId` | `string` |  |
| `id` | `string` | This is not the token itself, but rather an id to identify the token by |
| `label` | `string` |  |
| `partialToken` | `string` | A partially-masked representation of the token, safe to display in UIs. |
| `token` | `string` | Deprecated: the full, plaintext token. |

#### Example: Load

```ts
const global_config_token = await client.GlobalConfigToken().load({ id: 'global_config_token_id' })
```


### Integration

Create an instance: `const integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cost` | `string` |  |
| `description` | `string` |  |
| `details` | `Array` |  |
| `disabled` | `boolean` |  |
| `effectiveDate` | `string` |  |
| `envVarEnvironments` | `Array` |  |
| `highlightedDetails` | `Array` |  |
| `id` | `string` |  |
| `initialCharge` | `string` |  |
| `makeEnvVarsSensitive` | `boolean` |  |
| `maximumAmount` | `string` |  |
| `maximumAmountAutoPurchasePerPeriod` | `string` |  |
| `metadataSchema` | `Object` |  |
| `minimumAmount` | `string` |  |
| `name` | `string` |  |
| `paymentMethodRequired` | `boolean` |  |
| `preauthorizationAmount` | `number` |  |
| `primaryProtocol` | `string` |  |
| `projectId` | `string` |  |
| `protocols` | `Object` |  |
| `quote` | `Array` |  |
| `scope` | `string` |  |
| `slug` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const integration = await client.Integration().load({ id: 'integration_id' })
```

#### Example: List

```ts
const integrations = await client.Integration().list({ configuration_id: "example" })
```

#### Example: Create

```ts
const integration = await client.Integration().create({
  installation_id: 'example_installation_id',
  resource_id: 'example_resource_id',
  description: 'example_description',
  id: 'example_id',
  metadataSchema: {},
  name: 'example_name',
  paymentMethodRequired: true,
  projectId: 'example_projectId',
  protocols: {},
  scope: 'example_scope',
  type: 'example_type',
})
```


### Kms

Create an instance: `const kms = client.Kms()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activation` | `string` | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` | `string` |  |
| `algorithm` | `string` | Algorithm of the signing key. |
| `claims` | `Object` | The claims to include in the token. |
| `claimsSchema` | `Object` | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `string` |  |
| `environments` | `Array` | The environments for the project grant policy. |
| `headers` | `Object` | Additional headers to include in the token. |
| `id` | `string` |  |
| `importKey` | `string` | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `string` | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `string` | Key id of the signing key. |
| `key_ops` | `Array` |  |
| `kid` | `string` |  |
| `kind` | `string` |  |
| `kty` | `string` |  |
| `managedBy` | `string` |  |
| `message` | `string` | Base64-encoded message to be signed. |
| `name` | `string` | The name of the issuer. |
| `origin` | `string` |  |
| `ownerId` | `string` |  |
| `policies` | `Array` |  |
| `projectId` | `string` | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `number` | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `*` | Deprecated. |
| `signature` | `string` | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `Array` |  |
| `token` | `string` |  |
| `tokenClaims` | `Object` | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `number` | The time-to-live for the token, in seconds. |
| `updatedAt` | `string` |  |
| `use` | `string` |  |
| `x5c` | `Array` | The X.509 certificate chain (RFC 7517 §4.7). |
| `x5tS256` | `string` | The base64url SHA-256 thumbprint of the DER certificate in `x5c[0]` (RFC 7517 §4.9). |

#### Example: Load

```ts
const kms = await client.Kms().load({ issuer_id: 'issuer_id' })
```

#### Example: List

```ts
const kmss = await client.Kms().list()
```

#### Example: Create

```ts
const kms = await client.Kms().create({
  issuer_id: 'example_issuer_id',
  algorithm: 'example_algorithm',
  createdAt: 'example_createdAt',
  environments: [],
  id: 'example_id',
  keyId: 'example_keyId',
  kind: 'example_kind',
  message: 'example_message',
  name: 'example_name',
  origin: 'example_origin',
  ownerId: 'example_ownerId',
  policies: [],
  projectId: 'example_projectId',
  signature: 'example_signature',
  signingKeys: [],
  token: 'example_token',
  updatedAt: 'example_updatedAt',
})
```


### ListEventType

Create an instance: `const list_event_type = client.ListEventType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `Array` |  |
| `types` | `Array` |  |

#### Example: List

```ts
const list_event_types = await client.ListEventType().list()
```


### Log

Create an instance: `const log = client.Log()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const log = await client.Log().load({ deployment_id: 'deployment_id', project_id: 'project_id' })
```


### LogDrain

Create an instance: `const log_drain = client.LogDrain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `string` | The branch regexp of log drain |
| `clientId` | `string` | The oauth2 client application id that created this log drain |
| `configurationId` | `string` | The client configuration this log drain was created with |
| `createdAt` | `number` | A timestamp that tells you when the log drain was created |
| `createdFrom` | `string` | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | `*` | The delivery log format |
| `environments` | `Array` | The environment of log drain |
| `headers` | `Object` | Headers to be sent together with the request |
| `id` | `string` | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `string` |  |
| `integrationIcon` | `string` |  |
| `integrationWebsite` | `string` |  |
| `name` | `string` | The custom name of this log drain. |
| `ownerId` | `string` | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `string` |  |
| `projectIds` | `Array` | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `Array` |  |
| `samplingRate` | `number` | The sampling rate for this log drain. |
| `secret` | `string` | Custom secret of log drain |
| `source` | `*` |  |
| `sources` | `Array` | The sources from which logs are currently being delivered to this log drain. |
| `url` | `string` | The log drain url |

#### Example: Load

```ts
const log_drain = await client.LogDrain().load({ id: 'log_drain_id' })
```

#### Example: List

```ts
const log_drains = await client.LogDrain().list()
```

#### Example: Create

```ts
const log_drain = await client.LogDrain().create({
  createdAt: 1,
  createdFrom: 'example_createdFrom',
  deliveryFormat: 'example_deliveryFormat',
  id: 'example_id',
  ownerId: 'example_ownerId',
  source: 'example_source',
  sources: [],
  url: 'example_url',
})
```


### Marketplace

Create an instance: `const marketplace = client.Marketplace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` |  |
| `already_revoked` | `boolean` |  |
| `balances` | `Array` |  |
| `billing` | `*` | Billing data (interim invoicing data). |
| `billingPlan` | `Object` |  |
| `billingPlanId` | `string` | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `string` |  |
| `client_id` | `string` |  |
| `client_secret` | `string` |  |
| `created` | `string` | System creation date. |
| `createdAt` | `number` |  |
| `data` | `Object` |  |
| `description` | `string` |  |
| `discounts` | `Array` | Invoice discounts. |
| `email` | `string` |  |
| `eod` | `string` | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `*` |  |
| `expires_in` | `number` |  |
| `externalId` | `string` | Partner-supplied Invoice ID, if applicable. |
| `extras` | `Object` |  |
| `final` | `boolean` | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `string` |  |
| `id` | `string` | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `string` | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `string` | Invoice date. |
| `invoiceId` | `string` | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `string` | User-readable invoice number. |
| `isArchived` | `boolean` |  |
| `items` | `Array` | Invoice items. |
| `memo` | `string` | Additional memo for the invoice. |
| `metadata` | `Object` | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `string` | The name of the resource as it is recorded in Vercel |
| `notification` | `Object` | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `string` |  |
| `ownership` | `string` |  |
| `paidAt` | `string` | Moment the invoice was paid. |
| `partial` | `boolean` | If true, will only update the provided secrets |
| `partnerId` | `string` | The ID provided by the partner for the given resource |
| `period` | `Object` | Subscription period for this billing cycle. |
| `productId` | `string` | The ID of the product the resource is derived from |
| `protocolSettings` | `Object` | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `string` | The reason for refund. |
| `refundTotal` | `string` | Refund amount. |
| `refundedAt` | `string` | Most recent moment the invoice was refunded. |
| `revoked` | `boolean` |  |
| `role` | `string` | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `string` |  |
| `secrets` | `Array` |  |
| `slug` | `string` |  |
| `state` | `string` | Invoice state. |
| `status` | `string` | The current status of the resource |
| `test` | `boolean` | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | `string` | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` | `string` |  |
| `token_type` | `string` |  |
| `total` | `string` | Invoice total amount. |
| `updated` | `string` | System update date. |
| `updatedAt` | `number` |  |
| `usage` | `Array` |  |
| `userEmail` | `string` |  |
| `validationErrors` | `Array` |  |

#### Example: Load

```ts
const marketplace = await client.Marketplace().load({ installation_id: 'installation_id' })
```

#### Example: List

```ts
const marketplaces = await client.Marketplace().list({ installation_id: "example" })
```

#### Example: Create

```ts
const marketplace = await client.Marketplace().create({
  installation_id: 'example_installation_id',
  access_token: 'example_access_token',
  already_revoked: true,
  balances: [],
  billing: 'example_billing',
  billingPlan: {},
  client_secret: 'example_client_secret',
  created: 'example_created',
  data: {},
  email: 'example_email',
  eod: 'example_eod',
  event: 'example_event',
  expires_in: 1,
  id: 'example_id',
  internalId: 'example_internalId',
  invoiceDate: 'example_invoiceDate',
  invoiceId: 'example_invoiceId',
  items: [],
  name: 'example_name',
  notification: {},
  origin: 'example_origin',
  partnerId: 'example_partnerId',
  period: {},
  productId: 'example_productId',
  revoked: true,
  role: 'example_role',
  scope: 'example_scope',
  secrets: [],
  slug: 'example_slug',
  state: 'example_state',
  timestamp: 'example_timestamp',
  token: 'example_token',
  token_type: 'example_token_type',
  total: 'example_total',
  updated: 'example_updated',
  usage: [],
})
```


### Microfrontend

Create an instance: `const microfrontend = client.Microfrontend()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abuse` | `Object` |  |
| `accountId` | `string` |  |
| `alias` | `Array` |  |
| `analytics` | `Object` |  |
| `applications` | `Object` |  |
| `appliedCve55182Migration` | `boolean` |  |
| `autoAssignCustomDomains` | `boolean` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `boolean` |  |
| `avatar` | `string` |  |
| `blobs` | `Object` |  |
| `buildCommand` | `string` |  |
| `commandForIgnoringBuildStep` | `string` |  |
| `concurrencyBucketName` | `string` |  |
| `connectBuildsEnabled` | `boolean` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `Array` |  |
| `createdAt` | `number` |  |
| `creator` | `*` |  |
| `crons` | `Object` |  |
| `customEnvironments` | `Array` |  |
| `customerSupportCodeVisibility` | `boolean` |  |
| `dataCache` | `Object` |  |
| `defaultResourceConfig` | `Object` |  |
| `deploymentExpiration` | `Object` | Retention policies for deployments. |
| `deploymentPolicy` | `Object` | Project shape. |
| `devCommand` | `string` |  |
| `directoryListing` | `boolean` |  |
| `dismissedToasts` | `Array` |  |
| `enableAffectedProjectsDeployments` | `boolean` |  |
| `enableExternalRewriteCaching` | `boolean` |  |
| `enablePreviewFeedback` | `boolean` |  |
| `enableProductionFeedback` | `boolean` |  |
| `env` | `Array` |  |
| `expiration` | `*` |  |
| `features` | `Object` |  |
| `framework` | `string` |  |
| `gitComments` | `Object` |  |
| `gitForkProtection` | `boolean` |  |
| `gitLFS` | `boolean` |  |
| `gitProviderOptions` | `Object` |  |
| `hasActiveBranches` | `boolean` |  |
| `hasDeployments` | `boolean` |  |
| `id` | `string` |  |
| `installCommand` | `string` |  |
| `internalRoutes` | `Array` |  |
| `ipBuckets` | `Array` |  |
| `jobs` | `Object` |  |
| `lastAliasRequest` | `Object` |  |
| `lastRollbackTarget` | `Object` |  |
| `latestDeployments` | `Array` |  |
| `link` | `string` |  |
| `live` | `boolean` |  |
| `microfrontends` | `*` |  |
| `name` | `string` |  |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `Object` |  |
| `options` | `Object` | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `Object` |  |
| `outputDirectory` | `string` |  |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `Object` |  |
| `passwordProtection` | `Object` |  |
| `paused` | `boolean` |  |
| `permissions` | `Object` |  |
| `productionDeploymentsFastLane` | `boolean` |  |
| `protectedSourcemaps` | `boolean` |  |
| `protectionBypass` | `Object` |  |
| `protectionConfig` | `Object` |  |
| `resourceConfig` | `Object` |  |
| `rollbackDescription` | `Object` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `Object` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` |  |
| `sandbox` | `Object` |  |
| `schema` | `string` | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `Object` |  |
| `serverlessFunctionZeroConfigFailover` | `boolean` |  |
| `services` | `Array` |  |
| `skewProtectionAllowedDomains` | `Array` |  |
| `skewProtectionBoundaryAt` | `number` |  |
| `skewProtectionMaxAge` | `number` |  |
| `skipGitConnectDuringLink` | `boolean` |  |
| `sourceFilesOutsideRootDirectory` | `boolean` |  |
| `speedInsights` | `Object` |  |
| `ssoProtection` | `Object` |  |
| `staticIps` | `Object` |  |
| `targets` | `Object` |  |
| `tier` | `string` |  |
| `tracing` | `Object` |  |
| `transferCompletedAt` | `number` |  |
| `transferStartedAt` | `number` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `*` |  |
| `trustedSources` | `Object` |  |
| `updatedAt` | `number` |  |
| `usageStatus` | `Object` |  |
| `v0` | `boolean` |  |
| `v0Created` | `boolean` |  |
| `version` | `string` | The version of the microfrontends config schema. |
| `webAnalytics` | `Object` |  |

#### Example: Load

```ts
const microfrontend = await client.Microfrontend().load({ project_id_or_name: 'project_id_or_name' })
```

#### Example: List

```ts
const microfrontends = await client.Microfrontend().list({ group_id: "example" })
```

#### Example: Create

```ts
const microfrontend = await client.Microfrontend().create({
  abuse: {},
  accountId: 'example_accountId',
  alias: [],
  analytics: {},
  applications: {},
  crons: {},
  dataCache: {},
  defaultResourceConfig: {},
  deploymentExpiration: {},
  directoryListing: true,
  gitComments: {},
  gitProviderOptions: {},
  id: 'example_id',
  lastAliasRequest: {},
  name: 'example_name',
  nodeVersion: 'example_nodeVersion',
  optionsAllowlist: {},
  passport: {},
  resourceConfig: {},
  rollbackDescription: {},
  rollingRelease: {},
  speedInsights: {},
  ssoProtection: {},
  staticIps: {},
  usageStatus: {},
  webAnalytics: {},
})
```


### Network

Create an instance: `const network = client.Network()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awsAccountId` | `string` | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | `Array` | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `string` | The AWS Region in which the network exists. |
| `cidr` | `string` | The CIDR range of the Network. |
| `createdAt` | `number` | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `Array` |  |
| `hostedZones` | `Object` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `string` | The unique identifier of the Network. |
| `name` | `string` | The name of the network. |
| `peeringConnections` | `Object` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `Object` | Metadata about any projects associated with the Network. |
| `region` | `string` | The Vercel region in which the Network exists. |
| `status` | `string` | The status of the Network. |
| `teamId` | `string` | The unique identifier of the Team that owns the Network. |
| `vpcId` | `string` | The ID of the VPC which hosts the network. |

#### Example: Load

```ts
const network = await client.Network().load({ id: 'network_id' })
```

#### Example: List

```ts
const networks = await client.Network().list()
```

#### Example: Create

```ts
const network = await client.Network().create({
  awsAccountId: 'example_awsAccountId',
  awsRegion: 'example_awsRegion',
  cidr: 'example_cidr',
  createdAt: 1,
  hostedZones: {},
  id: 'example_id',
  name: 'example_name',
  peeringConnections: {},
  projects: {},
  status: 'example_status',
  teamId: 'example_teamId',
})
```


### Networking

Create an instance: `const networking = client.Networking()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `builds` | `boolean` | Whether to use Static IPs for builds. |
| `regions` | `Array` |  |


### Observability

Create an instance: `const observability = client.Observability()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disabled` | `boolean` | Whether Observability Plus should be disabled for the project |
| `disabledAt` | `number` |  |
| `id` | `string` |  |
| `name` | `string` |  |

#### Example: List

```ts
const observabilitys = await client.Observability().list()
```


### PrivateLinkEndpoint

Create an instance: `const private_link_endpoint = client.PrivateLinkEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awsDnsEntries` | `Array` | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `string` | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `number` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `boolean` | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `string` | The unique identifier of the PrivateLink endpoint. |
| `id` | `string` |  |
| `name` | `string` | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `Array` | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | `string` | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | `string` | The current state of the endpoint. |
| `statusMessage` | `string` | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | `string` | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | `number` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
| `vercelRegion` | `string` | The Vercel region the endpoint is provisioned in. |
| `vpcEndpointId` | `string` | The identifier of the underlying AWS VPC endpoint. |

#### Example: Load

```ts
const private_link_endpoint = await client.PrivateLinkEndpoint().load({ id: 'private_link_endpoint_id', project_id: 'project_id' })
```

#### Example: List

```ts
const private_link_endpoints = await client.PrivateLinkEndpoint().list({ project_id: "example" })
```

#### Example: Create

```ts
const private_link_endpoint = await client.PrivateLinkEndpoint().create({
  awsServiceName: 'example_awsServiceName',
  createdAt: 1,
  endpointId: 'example_endpointId',
  name: 'example_name',
  projectId: 'example_projectId',
  status: 'example_status',
  teamId: 'example_teamId',
  updatedAt: 1,
  vercelRegion: 'example_vercelRegion',
})
```


### Project

Create an instance: `const project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abuse` | `Object` |  |
| `acceptedPolicies` | `Object` |  |
| `accountId` | `string` |  |
| `alias` | `Array` |  |
| `analytics` | `Object` |  |
| `apexName` | `string` |  |
| `appliedCve55182Migration` | `boolean` |  |
| `autoAssignCustomDomains` | `boolean` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `boolean` |  |
| `avatar` | `string` |  |
| `blobs` | `Object` |  |
| `buildCommand` | `string` | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` |  |
| `comment` | `string` | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `string` |  |
| `configurationId` | `string` |  |
| `connectBuildsEnabled` | `boolean` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `Array` | The list of connections from project environment to Secure Compute network |
| `contentHint` | `*` |  |
| `createdAt` | `number` |  |
| `createdBy` | `string` |  |
| `creator` | `*` |  |
| `crons` | `Object` |  |
| `customEnvironmentId` | `string` |  |
| `customEnvironmentIds` | `Array` | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `Array` |  |
| `customerSupportCodeVisibility` | `boolean` | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `Object` |  |
| `decrypted` | `boolean` |  |
| `defaultResourceConfig` | `Object` |  |
| `deploymentExpiration` | `Object` | Retention policies for deployments. |
| `deploymentPolicy` | `Object` | Project shape. |
| `devCommand` | `string` | The dev command for this project. |
| `directoryListing` | `boolean` |  |
| `dismissedToasts` | `Array` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `string` |  |
| `edgeConfigTokenId` | `string` |  |
| `enableAffectedProjectsDeployments` | `boolean` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `boolean` | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `boolean` | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `boolean` | Opt-in to production toolbar on the project level |
| `env` | `Array` |  |
| `environmentVariables` | `Array` | Collection of ENV Variables the Project will use |
| `expiration` | `*` |  |
| `features` | `Object` |  |
| `framework` | `string` | The framework that is being used for this project. |
| `gitBranch` | `string` | Git branch to link the project domain |
| `gitComments` | `Object` |  |
| `gitForkProtection` | `boolean` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `boolean` | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `Object` |  |
| `gitRepository` | `Object` | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `boolean` |  |
| `hasDeployments` | `boolean` |  |
| `hostname` | `string` | The deployment hostname to scope the trace session to. |
| `id` | `string` |  |
| `installCommand` | `string` | The install command for this project. |
| `integrations` | `Array` |  |
| `internalContentHint` | `Object` | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `Array` |  |
| `ipBuckets` | `Array` |  |
| `jobs` | `Object` |  |
| `key` | `string` | The name of the environment variable |
| `lastAliasRequest` | `Object` |  |
| `lastRollbackTarget` | `Object` |  |
| `latestDeployments` | `Array` |  |
| `legacyValue` | `string` | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `string` |  |
| `live` | `boolean` |  |
| `microfrontends` | `*` |  |
| `name` | `string` | The desired name for the project |
| `newProjectName` | `string` | The desired name for the project |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `Object` | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `Object` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | The output directory of the project. |
| `paidFeatures` | `Object` |  |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `Object` | Passport configuration for the project. |
| `passwordProtection` | `Object` | Allows to protect project deployments with a password |
| `paused` | `boolean` |  |
| `permissions` | `Object` |  |
| `previewDeploymentSuffix` | `string` | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `boolean` | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `boolean` |  |
| `projectId` | `string` | The unique target project identifier |
| `protectedSourcemaps` | `boolean` | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `Object` |  |
| `protectionConfig` | `Object` |  |
| `publicSource` | `boolean` | Deprecated. |
| `redirect` | `string` | Target destination domain for redirect |
| `redirectStatusCode` | `number` | Status code for domain redirect |
| `resourceConfig` | `Object` | Specifies resource override configuration for the project |
| `rollbackDescription` | `Object` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `Object` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `Object` | Specifies the default region and failover regions for sandboxes created in the project |
| `security` | `Object` |  |
| `serverlessFunctionRegion` | `string` | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `boolean` | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `Array` |  |
| `skewProtectionAllowedDomains` | `Array` | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `number` | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `number` | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `boolean` | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `boolean` | Indicates if there are source files outside of the root directory |
| `speedInsights` | `Object` |  |
| `ssoProtection` | `Object` | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `Object` | Manage Static IPs for this project |
| `sunsetSecretId` | `string` | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `*` | The target environment of the environment variable |
| `targets` | `Object` |  |
| `tier` | `string` |  |
| `token` | `string` |  |
| `tracing` | `Object` | Tracing configuration for this project |
| `transferCompletedAt` | `number` |  |
| `transferStartedAt` | `number` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `*` | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `Object` | Deployment Protection Trusted Sources |
| `type` | `string` | The type of environment variable |
| `updatedAt` | `number` |  |
| `updatedBy` | `string` |  |
| `usageStatus` | `Object` |  |
| `v0` | `boolean` |  |
| `v0Created` | `boolean` |  |
| `value` | `string` | The value of the environment variable |
| `verification` | `Array` | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `boolean` | `true` if the domain is verified for use with the project. |
| `visibility` | `string` | User-facing config/secret model. |
| `webAnalytics` | `Object` |  |

#### Example: Load

```ts
const project = await client.Project().load({ id: 'project_id' })
```

#### Example: Create

```ts
const project = await client.Project().create({
  deployment_id: 'example_deployment_id',
  id: 'example_id',
  abuse: {},
  accountId: 'example_accountId',
  alias: [],
  analytics: {},
  apexName: 'example_apexName',
  crons: {},
  dataCache: {},
  defaultResourceConfig: {},
  deploymentExpiration: {},
  directoryListing: true,
  gitComments: {},
  gitProviderOptions: {},
  gitRepository: {},
  hostname: 'example_hostname',
  internalContentHint: {},
  key: 'example_key',
  lastAliasRequest: {},
  name: 'example_name',
  nodeVersion: 'example_nodeVersion',
  optionsAllowlist: {},
  passport: {},
  projectId: 'example_projectId',
  resourceConfig: {},
  rollbackDescription: {},
  rollingRelease: {},
  speedInsights: {},
  ssoProtection: {},
  staticIps: {},
  token: 'example_token',
  type: 'example_type',
  usageStatus: {},
  value: 'example_value',
  verified: true,
  webAnalytics: {},
})
```


### ProjectMember

Create an instance: `const project_member = client.ProjectMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email of the team member that should be added to this project. |
| `id` | `string` |  |
| `role` | `string` | The project role of the member that will be added. |
| `uid` | `string` | The ID of the team member that should be added to this project. |
| `username` | `string` | The username of the team member that should be added to this project. |

#### Example: Load

```ts
const project_member = await client.ProjectMember().load({ id_or_name: 'id_or_name' })
```

#### Example: Create

```ts
const project_member = await client.ProjectMember().create({
  id_or_name: 'example_id_or_name',
  id: 'example_id',
  role: 'example_role',
})
```


### ProjectRoute

Create an instance: `const project_route = client.ProjectRoute()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `actions` | `Array` |  |
| `alias` | `string` | The staging alias for previewing this version. |
| `conditions` | `Array` |  |
| `createdBy` | `string` | The user who created this version. |
| `currentRoute` | `Object` |  |
| `description` | `string` |  |
| `id` | `string` | Unique identifier for the version. |
| `isLive` | `boolean` | Whether this version is currently live in production. |
| `isStaging` | `boolean` | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `number` | Timestamp of when this version was last modified. |
| `name` | `string` |  |
| `overwrite` | `boolean` |  |
| `pathCondition` | `Object` |  |
| `position` | `Object` | Controls where the route is inserted. |
| `prompt` | `string` |  |
| `restore` | `boolean` | If true, restores the staged route to the value in the production version. |
| `route` | `Object` | The full route object to replace the existing route with |
| `routes` | `Array` |  |
| `ruleCount` | `number` | The number of routing rules in this version. |
| `s3Key` | `string` | The S3 key where the routing rules are stored. |
| `version` | `Object` | A version of routing rules stored in S3. |

#### Example: Load

```ts
const project_route = await client.ProjectRoute().load({ id: 'project_route_id' })
```

#### Example: List

```ts
const project_routes = await client.ProjectRoute().list({ project_id: "example" })
```

#### Example: Create

```ts
const project_route = await client.ProjectRoute().create({
  id: 'example_id',
  action: 'example_action',
  actions: [],
  createdBy: 'example_createdBy',
  currentRoute: {},
  description: 'example_description',
  lastModified: 1,
  name: 'example_name',
  pathCondition: {},
  prompt: 'example_prompt',
  route: {},
  s3Key: 'example_s3Key',
  version: {},
})
```


### Query

Create an instance: `const query = client.Query()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregation` | `string` | Aggregation function to apply. |
| `bucketTimezone` | `string` | IANA timezone (e.g. |
| `endTime` | `string` | End timestamp |
| `filter` | `string` | Filter to apply to the query. |
| `granularity` | `Object` | Time bucket size |
| `groupBy` | `Array` | Dimensions to group results by. |
| `limit` | `number` | Maximum number of results |
| `metric` | `string` | Metric id |
| `orderBy` | `string` | Rollup column to order grouped results by. |
| `orderDirection` | `string` | Direction to order grouped results by. |
| `scope` | `Object` | Owner or project scope for the query |
| `startTime` | `string` | Start timestamp |

#### Example: Create

```ts
const query = await client.Query().create({
  metric: 'example_metric',
  scope: {},
})
```


### Record

Create an instance: `const record = client.Record()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` |  |
| `createdAt` | `number` |  |
| `creator` | `string` |  |
| `domain` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `recordType` | `string` |  |
| `ttl` | `number` |  |
| `type` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```ts
const record = await client.Record().load({ id: 'record_id' })
```


### RollingRelease

Create an instance: `const rolling_release = client.RollingRelease()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeStage` | `Object` | The currently active stage, null if the rollout is aborted |
| `advancementType` | `string` | The advancement type of the rolling release |
| `canaryDeployment` | `Object` | The canary deployment being rolled out |
| `currentCanaryPercentage` | `number` | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `Object` | The current deployment receiving production traffic |
| `nextStage` | `Object` | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `string` | The ID of a deployment queued for the next rolling release |
| `stages` | `Array` | All stages configured for this rolling release |
| `startedAt` | `number` | Unix timestamp in milliseconds when the rolling release started |
| `state` | `string` | The current state of the rolling release |
| `substate` | `string` | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `number` | Unix timestamp in milliseconds when the rolling release was last updated |

#### Example: Load

```ts
const rolling_release = await client.RollingRelease().load({ id_or_name: 'id_or_name' })
```

#### Example: Create

```ts
const rolling_release = await client.RollingRelease().create({
  project_id: 'example_project_id',
  activeStage: {},
  advancementType: 'example_advancementType',
  canaryDeployment: {},
  currentDeployment: {},
  nextStage: {},
  queuedDeploymentId: 'example_queuedDeploymentId',
  stages: [],
  startedAt: 1,
  state: 'example_state',
  substate: 'example_substate',
  updatedAt: 1,
})
```


### Sandbox

Create an instance: `const sandbox = client.Sandbox()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `args` | `Array` | The arguments of the command. |
| `command` | `string` | The executable or shell command to run. |
| `createdAt` | `number` | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `string` | The method used to create the snapshot. |
| `currentSandboxName` | `string` | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `string` | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `string` | The snapshot ID to set as the current snapshot. |
| `cwd` | `string` | The current working directory of the command. |
| `durationMs` | `number` | Duration of the command execution in milliseconds. |
| `env` | `Object` | Additional environment variables to set for this command. |
| `exitCode` | `number` | If the command did finish, the exit code. |
| `expiration` | `*` | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `number` | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `Array` | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `string` | The ID of the command. |
| `image` | `string` | Image to use for the sandbox. |
| `keepLastSnapshots` | `Object` | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `number` | The last time the snapshot was used (e.g. |
| `logs` | `boolean` | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `number` | The maximum drive size in bytes. |
| `memory` | `number` | Memory allocated in MB. |
| `mounts` | `Object` | List of drives to mount to the sandbox at the provided path. |
| `name` | `string` | The name of the command. |
| `networkId` | `string` | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `*` | Network policy configuration. |
| `parentId` | `string` | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `string` | The path of the directory to create. |
| `persistent` | `boolean` | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `Array` | List of ports to expose from the sandbox. |
| `projectId` | `string` | The project that owns the drive. |
| `recursive` | `boolean` | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `string` | The region where the snapshot is stored. |
| `regions` | `Array` | The regions where the snapshot is available. |
| `resources` | `Object` | Resources to define the VM |
| `resumed` | `boolean` |  |
| `routes` | `Array` |  |
| `runtime` | `string` | The runtime environment for the sandbox. |
| `sandbox` | `Object` | This object contains information related to a Vercel NamedSandbox. |
| `session` | `Object` | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `string` | The ID of the session associated with the command. |
| `sizeBytes` | `number` | The size of the snapshot in bytes. |
| `snapshotExpiration` | `*` | Default snapshot expiration time in milliseconds. |
| `source` | `*` | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `string` | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `number` | When the command was started, in milliseconds since the epoch. |
| `status` | `string` | The status of the snapshot. |
| `statusUpdatedAt` | `number` | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `boolean` | Execute the command with root (superuser) privileges. |
| `tags` | `Object` | Key-value tags to associate with the sandbox. |
| `timeout` | `number` | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `totalActiveCpuDurationMs` | `number` | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `totalDurationMs` | `number` | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `totalEgressBytes` | `number` | Cumulative egress bytes across all sandbox runs. |
| `totalIngressBytes` | `number` | Cumulative ingress bytes across all sandbox runs. |
| `updatedAt` | `number` | The last time the snapshot was updated, in milliseconds since the epoch. |
| `vcpus` | `number` | Number of virtual CPUs allocated. |
| `wait` | `boolean` | If true, returns an ND-JSON stream that emits the command status when started and again when finished. |

#### Example: Load

```ts
const sandbox = await client.Sandbox().load({ id: 'sandbox_id' })
```

#### Example: List

```ts
const sandboxs = await client.Sandbox().list()
```

#### Example: Create

```ts
const sandbox = await client.Sandbox().create({
  name: 'example_name',
  args: [],
  command: 'example_command',
  createdAt: 1,
  cwd: 'example_cwd',
  exitCode: 1,
  id: 'example_id',
  keepLastSnapshots: {},
  lastUsedAt: 1,
  maxSizeBytes: 1,
  path: 'example_path',
  projectId: 'example_projectId',
  resumed: true,
  routes: [],
  sandbox: {},
  session: {},
  sessionId: 'example_sessionId',
  sizeBytes: 1,
  sourceSessionId: 'example_sourceSessionId',
  startedAt: 1,
  status: 'example_status',
  statusUpdatedAt: 1,
  updatedAt: 1,
})
```


### Schema

Create an instance: `const schema = client.Schema()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregations` | `Array` |  |
| `defaultAggregation` | `string` |  |
| `description` | `string` |  |
| `dimensions` | `Array` |  |
| `id` | `string` |  |
| `unit` | `string` |  |

#### Example: Load

```ts
const schema = await client.Schema().load({ id: 'schema_id' })
```

#### Example: List

```ts
const schemas = await client.Schema().list()
```


### Security

Create an instance: `const security = client.Security()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `Action` | `string` |  |
| `ActorId` | `string` |  |
| `CreatedAt` | `string` |  |
| `DeletedAt` | `string` |  |
| `Domain` | `string` |  |
| `ExpiresAt` | `number` |  |
| `Id` | `string` |  |
| `Ip` | `string` |  |
| `IsProjectRule` | `boolean` |  |
| `Note` | `string` |  |
| `OwnerId` | `string` |  |
| `ProjectId` | `string` |  |
| `UpdatedAt` | `string` |  |
| `UpdatedAtHour` | `string` |  |
| `action` | `Object` |  |
| `action_type` | `string` |  |
| `active` | `boolean` |  |
| `allSources` | `boolean` |  |
| `botIdEnabled` | `boolean` |  |
| `changes` | `Array` |  |
| `conditionGroup` | `Array` |  |
| `conditions` | `Array` |  |
| `count` | `number` |  |
| `crs` | `Object` | Custom Ruleset |
| `description` | `string` |  |
| `domain` | `string` |  |
| `endTime` | `string` |  |
| `firewallEnabled` | `boolean` |  |
| `host` | `string` |  |
| `id` | `string` |  |
| `ips` | `Array` |  |
| `isActive` | `boolean` |  |
| `logHeaders` | `*` |  |
| `managedRules` | `Object` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `ownerId` | `string` |  |
| `projectKey` | `string` |  |
| `projectScope` | `boolean` | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `string` |  |
| `ruleId` | `string` |  |
| `ruleName` | `string` |  |
| `rules` | `Array` |  |
| `rulesets` | `*` |  |
| `sourceIp` | `string` |  |
| `startTime` | `string` |  |
| `ttl` | `number` | Time to live in milliseconds |
| `updatedAt` | `string` |  |
| `version` | `number` |  |

#### Example: Load

```ts
const security = await client.Security().load({ project_id: 'project_id' })
```

#### Example: List

```ts
const securitys = await client.Security().list({ project_id: "example" })
```

#### Example: Create

```ts
const security = await client.Security().create({
  project_id: 'example_project_id',
  CreatedAt: 'example_CreatedAt',
  Domain: 'example_Domain',
  Id: 'example_Id',
  Ip: 'example_Ip',
  OwnerId: 'example_OwnerId',
  UpdatedAt: 'example_UpdatedAt',
  UpdatedAtHour: 'example_UpdatedAtHour',
  action: {},
  action_type: 'example_action_type',
  active: true,
  changes: [],
  conditionGroup: [],
  count: 1,
  crs: {},
  endTime: 'example_endTime',
  firewallEnabled: true,
  host: 'example_host',
  id: 'example_id',
  ips: [],
  isActive: true,
  name: 'example_name',
  ownerId: 'example_ownerId',
  projectKey: 'example_projectKey',
  public_ip: 'example_public_ip',
  ruleId: 'example_ruleId',
  ruleName: 'example_ruleName',
  rules: [],
  startTime: 'example_startTime',
  updatedAt: 'example_updatedAt',
  version: 1,
})
```


### Segment

Create an instance: `const segment = client.Segment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `number` |  |
| `createdBy` | `string` |  |
| `data` | `Object` |  |
| `description` | `string` |  |
| `hint` | `string` |  |
| `id` | `string` |  |
| `label` | `string` |  |
| `metadata` | `Object` |  |
| `projectId` | `string` |  |
| `slug` | `string` |  |
| `typeName` | `string` |  |
| `updatedAt` | `number` |  |
| `usedByFlags` | `Array` |  |
| `usedBySegments` | `Array` |  |

#### Example: Load

```ts
const segment = await client.Segment().load({ id: 'segment_id', project_id: 'project_id' })
```


### Storage

Create an instance: `const storage = client.Storage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `count` | `number` |  |
| `id` | `string` |  |
| `isTokenExpired` | `boolean` |  |
| `kind` | `string` | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` | `string` |  |
| `projectFilter` | `Object` |  |
| `projectId` | `string` | The project this store is scoped to. |
| `projectsMetadata` | `Array` |  |
| `region` | `string` |  |
| `size` | `number` |  |
| `status` | `string` |  |
| `totalConnectedProjects` | `number` |  |
| `usageQuotaExceeded` | `boolean` |  |

#### Example: Load

```ts
const storage = await client.Storage().load({ id: 'storage_id' })
```

#### Example: Create

```ts
const storage = await client.Storage().create({
  count: 1,
  isTokenExpired: true,
  name: 'example_name',
  projectsMetadata: [],
  region: 'example_region',
  size: 1,
  status: 'example_status',
  usageQuotaExceeded: true,
})
```


### Team

Create an instance: `const team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessRequestedAt` | `number` | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `number` | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `number` | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `Object` | Attribution information for the session or current page |
| `avatar` | `string` | The ID of the file used as avatar for this Team. |
| `billing` | `Object` | The team's billing plan. |
| `bitbucket` | `Object` | Map of the connected Bitbucket account. |
| `confirmed` | `boolean` | Current status of the membership. |
| `connect` | `Object` |  |
| `createdAt` | `number` | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `string` | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `Object` | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `Object` | Default deployment expiration settings for this team |
| `defaultPassport` | `Object` | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `Object` | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `Object` | Default roles for the team. |
| `deploymentPolicy` | `Object` | Composable deployment-time policy for the team. |
| `description` | `string` | A short description of the Team. |
| `disableHardAutoBlocks` | `*` |  |
| `disableRepositoryDispatchEvents` | `boolean` | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | `string` | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | `string` | Controls who can request access to protected deployments. |
| `emailDomain` | `string` | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | `boolean` | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | `string` | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | `string` | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | `string` | The new fallback environment for the microfrontends group. |
| `github` | `Object` | Map of the connected GitHub account. |
| `gitlab` | `Object` | Map of the connected GitLab account. |
| `hideIpAddresses` | `boolean` | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `boolean` | Indicates if IP addresses should be accessible in log drains |
| `id` | `string` | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `number` | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `string` | Code that can be used to join this Team. |
| `ipBuckets` | `Array` |  |
| `joinedFrom` | `Object` | A map that describes the origin from where the user joined. |
| `membership` | `Object` | The membership of the authenticated User in relation to the Team. |
| `name` | `string` | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `Object` | NSNB configuration for the team. |
| `orgRootTeamId` | `string` | Best-effort ID of the organization’s root billing team. |
| `pagination` | `Object` | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `string` | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `number` | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `boolean` | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `string` | The hostname that is current set as preview deployment suffix. |
| `projects` | `Array` |  |
| `regenerateInviteCode` | `boolean` | Create a new invite code and replace the current one. |
| `remoteCaching` | `Object` | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `boolean` | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `Object` | Resource configuration for the team. |
| `role` | `string` | The role in the team of the member. |
| `saml` | `Object` | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `string` | Sensitive environment variable policy for this team |
| `slug` | `string` | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `string` | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `Object` | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `Object` | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `Object` | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `Object` | When enabled, creating shareable links requires Owner role. |
| `teamName` | `string` | The name of the team. |
| `teamPermissions` | `Array` | The team permissions to set for the member. |
| `teamSlug` | `string` | The slug of the team. |
| `teams` | `Array` |  |
| `updatedAt` | `number` | Timestamp (in milliseconds) of when the Team was last updated. |

#### Example: Load

```ts
const team = await client.Team().load({ id: 'team_id' })
```

#### Example: List

```ts
const teams = await client.Team().list()
```

#### Example: Create

```ts
const team = await client.Team().create({
  accessRequestedAt: 1,
  avatar: 'example_avatar',
  billing: {},
  bitbucket: {},
  confirmed: true,
  createdAt: 1,
  creatorId: 'example_creatorId',
  defaultPassport: {},
  description: 'example_description',
  github: {},
  gitlab: {},
  id: 'example_id',
  joinedFrom: {},
  membership: {},
  name: 'example_name',
  nsnbConfig: {},
  pagination: {},
  saml: {},
  slug: 'example_slug',
  stagingPrefix: 'example_stagingPrefix',
  strictConnectors: {},
  strictDeploymentProtectionSettings: {},
  strictPasswordProtectionSettings: {},
  strictShareableLinks: {},
  teamName: 'example_teamName',
  teamSlug: 'example_teamSlug',
  teams: [],
  updatedAt: 1,
})
```


### TldName

Create an instance: `const tld_name = client.TldName()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const tld_names = await client.TldName().list()
```


### Toggle

Create an instance: `const toggle = client.Toggle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `value` | `boolean` |  |

#### Example: Create

```ts
const toggle = await client.Toggle().create({
  project_id: 'example_project_id',
  value: true,
})
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `Array` | The categories that group this event with related event types. |
| `createdAt` | `number` | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `Array` | A list of "entities" within the event `text`. |
| `id` | `string` | The unique identifier of the Event. |
| `payload` | `*` |  |
| `principal` | `*` |  |
| `principalId` | `string` | The ID of the principal who generated the event. |
| `requestId` | `string` |  |
| `sessionId` | `string` | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `string` | The human-readable text of the Event. |
| `tokenId` | `string` | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `string` | The type of the event. |
| `user` | `Object` | Metadata for {@link userId}. |
| `userId` | `string` | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `Array` | Metadata for {@link viaIds}. |
| `viaIds` | `Array` | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

#### Example: Load

```ts
const user = await client.User().load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.User().list()
```


### Vcr

Create an instance: `const vcr = client.Vcr()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arch` | `string` | CPU architecture the manifest targets. |
| `createdAt` | `string` | ISO 8601 timestamp of when the image was created. |
| `id` | `string` | Internal identifier of the image. |
| `imageId` | `string` | Internal identifier of the image the tag points at. |
| `kind` | `string` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` | `Array` |  |
| `manifestDigest` | `string` | SHA-256 digest of the image manifest. |
| `name` | `string` | Name of the repository. |
| `platform` | `string` | Operating system the manifest targets. |
| `projectId` | `string` | Identifier of the project the repository belongs to. |
| `public` | `boolean` | Whether the repository is public. |
| `pushedBy` | `string` | Identifier of the actor that pushed the image. |
| `repositoryId` | `string` | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `number` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | `string` | The tag name. |
| `tags` | `Array` | Tags pointing at this image's manifest. |
| `teamId` | `string` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Slug of the team that is granted access to the repository. |
| `updatedAt` | `string` | ISO 8601 timestamp of when the tag was last updated. |

#### Example: Load

```ts
const vcr = await client.Vcr().load({ id_or_name: 'id_or_name', project_id: 'project_id' })
```

#### Example: List

```ts
const vcrs = await client.Vcr().list({ id_or_name: "example", project_id: "example" })
```

#### Example: Create

```ts
const vcr = await client.Vcr().create({
  id_or_name: 'example_id_or_name',
  project_id: 'example_project_id',
  createdAt: 'example_createdAt',
  id: 'example_id',
  imageId: 'example_imageId',
  kind: 'example_kind',
  layers: [],
  manifestDigest: 'example_manifestDigest',
  name: 'example_name',
  projectId: 'example_projectId',
  public: true,
  repositoryId: 'example_repositoryId',
  sizeInBytes: 1,
  status: 'example_status',
  tag: 'example_tag',
  tags: [],
  teamId: 'example_teamId',
  teamSlug: 'example_teamSlug',
  updatedAt: 'example_updatedAt',
})
```


### VcrImageList

Create an instance: `const vcr_image_list = client.VcrImageList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arch` | `string` | CPU architecture the manifest targets. |
| `createdAt` | `string` | ISO 8601 timestamp of when the image was created. |
| `id` | `string` | Internal identifier of the image. |
| `kind` | `string` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `manifestDigest` | `string` | SHA-256 digest of the image manifest. |
| `platform` | `string` | Operating system the manifest targets. |
| `pushedBy` | `string` | Identifier of the actor that pushed the image. |
| `repositoryId` | `string` | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `number` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | `Array` | Tags pointing at this image's manifest. |

#### Example: List

```ts
const vcr_image_lists = await client.VcrImageList().list({ id_or_name: "example", project_id: "example" })
```


### VcrRepositoryList

Create an instance: `const vcr_repository_list = client.VcrRepositoryList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | ISO 8601 timestamp of when the repository was created. |
| `id` | `string` | Unique identifier of the repository. |
| `name` | `string` | Name of the repository. |
| `projectId` | `string` | Identifier of the project the repository belongs to. |
| `public` | `boolean` | Whether the repository is public. |
| `updatedAt` | `string` | ISO 8601 timestamp of when the repository was last updated. |

#### Example: List

```ts
const vcr_repository_lists = await client.VcrRepositoryList().list({ project_id: "example" })
```


### VcrRepositoryPermissionList

Create an instance: `const vcr_repository_permission_list = client.VcrRepositoryPermissionList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | `string` | Identifier of the repository the permission grants access to. |
| `teamId` | `string` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Slug of the team that is granted access to the repository. |

#### Example: List

```ts
const vcr_repository_permission_lists = await client.VcrRepositoryPermissionList().list({ id_or_name: "example", project_id: "example" })
```


### WebAnalytics

Create an instance: `const web_analytics = client.WebAnalytics()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `*` |  |
| `query` | `Object` |  |
| `version` | `number` |  |

#### Example: Load

```ts
const web_analytics = await client.WebAnalytics().load({ project_id: 'project_id' })
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alertRuleIds` | `Array` |  |
| `createdAt` | `number` | A number containing the date when the webhook was created in in milliseconds |
| `events` | `Array` | The webhooks events |
| `id` | `string` | The webhook id |
| `ownerId` | `string` | The unique ID of the team the webhook belongs to |
| `projectIds` | `Array` | The ID of the projects the webhook is associated with |
| `secret` | `string` | The webhook secret used to sign the payload |
| `updatedAt` | `number` | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `string` | A string with the URL of the webhook |

#### Example: Load

```ts
const webhook = await client.Webhook().load({ id: 'webhook_id' })
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
  createdAt: 1,
  events: [],
  id: 'example_id',
  ownerId: 'example_ownerId',
  secret: 'example_secret',
  updatedAt: 1,
  url: 'example_url',
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

46 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `user` | `payload` | 460 | 11 levels |
| `microfrontend` | `env` | 17 | 3 levels |
| `project` | `contentHint` | 17 | 0 levels |
| `project` | `env` | 17 | 3 levels |
| `connect_connector` | `data` | 12 | 0 levels |
| `integration` | `metadataSchema` | 12 | 12 levels |
| `domains_registrar` | `domains` | 10 | 7 levels |
| `deployment` | `gitSource` | 9 | 4 levels |
| `microfrontend` | `link` | 8 | 0 levels |
| `project` | `link` | 8 | 0 levels |
| `domains_registrar` | `error` | 6 | 2 levels |
| `checks_v2` | `runs` | 5 | 9 levels |
| `connect` | `subject` | 5 | 0 levels |
| `drain` | `drains` | 5 | 9 levels |
| `feature_flag` | `data` | 5 | 13 levels |
| `feature_flag` | `environments` | 5 | 14 levels |
| `feature_flag` | `variants` | 5 | 3 levels |
| `flag` | `environments` | 5 | 14 levels |
| `flag` | `variants` | 5 | 3 levels |
| `global_config_item` | `value` | 5 | 0 levels |
| `marketplace` | `metadata` | 5 | 1 level |
| `segment` | `data` | 5 | 13 levels |
| `alias` | `protectionBypass` | 4 | 1 level |
| `api_key` | `quota` | 4 | 2 levels |
| `microfrontend` | `abuse` | 4 | 12 levels |
| `microfrontend` | `creator` | 4 | 4 levels |
| `microfrontend` | `dismissedToasts` | 4 | 7 levels |
| `project` | `abuse` | 4 | 12 levels |
| `project` | `creator` | 4 | 4 levels |
| `project` | `dismissedToasts` | 4 | 7 levels |
| `user` | `principal` | 4 | 0 levels |
| `user` | `via` | 4 | 1 level |
| `vcr` | `layers` | 4 | 1 level |
| `alias` | `microfrontends` | 3 | 2 levels |
| `check` | `source` | 3 | 0 levels |
| `connect_connector` | `destinations` | 3 | 1 level |
| `connect_connector` | `triggerDestination` | 3 | 0 levels |
| `drain` | `delivery` | 3 | 0 levels |
| `drain` | `source` | 3 | 2 levels |
| `microfrontend` | `microfrontends` | 3 | 0 levels |
| `project` | `microfrontends` | 3 | 0 levels |
| `sandbox` | `source` | 3 | 0 levels |
| `security` | `conditionGroup` | 3 | 6 levels |
| `security` | `conditions` | 3 | 9 levels |
| `security` | `rules` | 3 | 11 levels |
| `security` | `rulesets` | 3 | 11 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
vercel/
├── src/
│   ├── VercelSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { VercelSDK } = require('@voxgig-sdk/vercel-js')
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const bulkredirect = client.BulkRedirect()
await bulkredirect.list()

// bulkredirect.data() now returns the bulkredirect data from the last `list`
// bulkredirect.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
