# Vercel TypeScript SDK Reference

Complete API reference for the Vercel TypeScript SDK.


## VercelSDK

### Constructor

```ts
new VercelSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VercelSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = VercelSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `VercelSDK` instance in test mode.


### Instance Methods

#### `AccessGroup(data?: object)`

Create a new `AccessGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccessGroupEntity` instance.

#### `AiGateway(data?: object)`

Create a new `AiGateway` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayEntity` instance.

#### `AiGatewayRule(data?: object)`

Create a new `AiGatewayRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayRuleEntity` instance.

#### `AiGatewayRuleList(data?: object)`

Create a new `AiGatewayRuleList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayRuleListEntity` instance.

#### `AiGatewayVirtualModelConfig(data?: object)`

Create a new `AiGatewayVirtualModelConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayVirtualModelConfigEntity` instance.

#### `AiGatewayVirtualModelConfigList(data?: object)`

Create a new `AiGatewayVirtualModelConfigList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayVirtualModelConfigListEntity` instance.

#### `Alias(data?: object)`

Create a new `Alias` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AliasEntity` instance.

#### `ApiAiGateway(data?: object)`

Create a new `ApiAiGateway` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiAiGatewayEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `Artifact(data?: object)`

Create a new `Artifact` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArtifactEntity` instance.

#### `Authentication(data?: object)`

Create a new `Authentication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthenticationEntity` instance.

#### `Billing(data?: object)`

Create a new `Billing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillingEntity` instance.

#### `BulkRedirect(data?: object)`

Create a new `BulkRedirect` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkRedirectEntity` instance.

#### `Cert(data?: object)`

Create a new `Cert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CertEntity` instance.

#### `Check(data?: object)`

Create a new `Check` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CheckEntity` instance.

#### `ChecksV2(data?: object)`

Create a new `ChecksV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChecksV2Entity` instance.

#### `Connect(data?: object)`

Create a new `Connect` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectEntity` instance.

#### `ConnectConnector(data?: object)`

Create a new `ConnectConnector` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectConnectorEntity` instance.

#### `ConnectConnectorList(data?: object)`

Create a new `ConnectConnectorList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectConnectorListEntity` instance.

#### `ConnectConnectorProjectConnectionList(data?: object)`

Create a new `ConnectConnectorProjectConnectionList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectConnectorProjectConnectionListEntity` instance.

#### `ConnectProjectConnection(data?: object)`

Create a new `ConnectProjectConnection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectProjectConnectionEntity` instance.

#### `ConnectProjectConnectorConnectionList(data?: object)`

Create a new `ConnectProjectConnectorConnectionList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectProjectConnectorConnectionListEntity` instance.

#### `Deployment(data?: object)`

Create a new `Deployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentEntity` instance.

#### `Dns(data?: object)`

Create a new `Dns` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DnsEntity` instance.

#### `Domain(data?: object)`

Create a new `Domain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainEntity` instance.

#### `DomainsRegistrar(data?: object)`

Create a new `DomainsRegistrar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainsRegistrarEntity` instance.

#### `Drain(data?: object)`

Create a new `Drain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DrainEntity` instance.

#### `EdgeCache(data?: object)`

Create a new `EdgeCache` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EdgeCacheEntity` instance.

#### `Env(data?: object)`

Create a new `Env` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvEntity` instance.

#### `Environment(data?: object)`

Create a new `Environment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentEntity` instance.

#### `FeatureFlag(data?: object)`

Create a new `FeatureFlag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureFlagEntity` instance.

#### `File(data?: object)`

Create a new `File` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileEntity` instance.

#### `Flag(data?: object)`

Create a new `Flag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FlagEntity` instance.

#### `FlagsSdkKeyWithSecret(data?: object)`

Create a new `FlagsSdkKeyWithSecret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FlagsSdkKeyWithSecretEntity` instance.

#### `GlobalConfig(data?: object)`

Create a new `GlobalConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GlobalConfigEntity` instance.

#### `GlobalConfigItem(data?: object)`

Create a new `GlobalConfigItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GlobalConfigItemEntity` instance.

#### `GlobalConfigToken(data?: object)`

Create a new `GlobalConfigToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GlobalConfigTokenEntity` instance.

#### `Integration(data?: object)`

Create a new `Integration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationEntity` instance.

#### `Kms(data?: object)`

Create a new `Kms` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KmsEntity` instance.

#### `ListEventType(data?: object)`

Create a new `ListEventType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListEventTypeEntity` instance.

#### `Log(data?: object)`

Create a new `Log` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogEntity` instance.

#### `LogDrain(data?: object)`

Create a new `LogDrain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogDrainEntity` instance.

#### `Marketplace(data?: object)`

Create a new `Marketplace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MarketplaceEntity` instance.

#### `Microfrontend(data?: object)`

Create a new `Microfrontend` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MicrofrontendEntity` instance.

#### `Network(data?: object)`

Create a new `Network` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkEntity` instance.

#### `Networking(data?: object)`

Create a new `Networking` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkingEntity` instance.

#### `Observability(data?: object)`

Create a new `Observability` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservabilityEntity` instance.

#### `PrivateLinkEndpoint(data?: object)`

Create a new `PrivateLinkEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrivateLinkEndpointEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `ProjectMember(data?: object)`

Create a new `ProjectMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectMemberEntity` instance.

#### `ProjectRoute(data?: object)`

Create a new `ProjectRoute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectRouteEntity` instance.

#### `Query(data?: object)`

Create a new `Query` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QueryEntity` instance.

#### `Record(data?: object)`

Create a new `Record` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecordEntity` instance.

#### `RollingRelease(data?: object)`

Create a new `RollingRelease` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RollingReleaseEntity` instance.

#### `Sandbox(data?: object)`

Create a new `Sandbox` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SandboxEntity` instance.

#### `Schema(data?: object)`

Create a new `Schema` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SchemaEntity` instance.

#### `Security(data?: object)`

Create a new `Security` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecurityEntity` instance.

#### `Segment(data?: object)`

Create a new `Segment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SegmentEntity` instance.

#### `Storage(data?: object)`

Create a new `Storage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StorageEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `TldName(data?: object)`

Create a new `TldName` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TldNameEntity` instance.

#### `Toggle(data?: object)`

Create a new `Toggle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ToggleEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `Vcr(data?: object)`

Create a new `Vcr` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VcrEntity` instance.

#### `VcrImageList(data?: object)`

Create a new `VcrImageList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VcrImageListEntity` instance.

#### `VcrRepositoryList(data?: object)`

Create a new `VcrRepositoryList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VcrRepositoryListEntity` instance.

#### `VcrRepositoryPermissionList(data?: object)`

Create a new `VcrRepositoryPermissionList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VcrRepositoryPermissionListEntity` instance.

#### `WebAnalytics(data?: object)`

Create a new `WebAnalytics` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebAnalyticsEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `VercelSDK.test()`.

**Returns:** `VercelSDK` instance in test mode.


---

## AccessGroupEntity

```ts
const access_group = client.AccessGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessGroupId` | `string` | Yes | ID of the access group. |
| `createdAt` | `string` | Yes | Timestamp in milliseconds when the access group was created. |
| `entitlements` | `any[]` | No |  |
| `id` | `string` | No |  |
| `isDsyncManaged` | `boolean` | Yes |  |
| `membersCount` | `number` | Yes | Number of members in the access group. |
| `membersToAdd` | `any[]` | No | List of members to add to the access group. |
| `membersToRemove` | `any[]` | No | List of members to remove from the access group. |
| `name` | `string` | Yes | The name of this access group. |
| `projectId` | `string` | Yes |  |
| `projects` | `any[]` | No |  |
| `projectsCount` | `number` | Yes | Number of projects in the access group. |
| `role` | `string` | Yes | The project role that will be added to this Access Group. |
| `teamId` | `string` | Yes | ID of the team that this access group belongs to. |
| `teamPermissions` | `any[]` | No | Permissions that the team has in the access group. |
| `teamRoles` | `any[]` | No | Roles that the team has in the access group. |
| `updatedAt` | `string` | Yes | Timestamp in milliseconds when the access group was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `accessGroupId` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `entitlements` | - | - | Yes | - | - |
| `id` | - | - | - | - | - |
| `isDsyncManaged` | - | - | - | - | - |
| `membersCount` | - | - | - | - | - |
| `membersToAdd` | - | - | - | - | - |
| `membersToRemove` | - | - | - | - | - |
| `name` | - | - | Yes | - | - |
| `projectId` | - | - | - | - | - |
| `projects` | - | - | - | - | - |
| `projectsCount` | - | - | - | - | - |
| `role` | - | - | - | - | - |
| `teamId` | - | - | - | - | - |
| `teamPermissions` | - | - | - | - | - |
| `teamRoles` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `project` | `/v1/access-groups/{accessGroupIdOrName}/projects` | `client.AccessGroup().create({ $action: 'project', ... })` |
| `member` | `/v1/access-groups/{idOrName}/members` | `client.AccessGroup().list({ $action: 'member', ... })` |
| `project` | `/v1/access-groups/{idOrName}/projects` | `client.AccessGroup().list({ $action: 'project', ... })` |

An action returns that action's OWN response, which is not necessarily a
AccessGroup record — check the API definition for its shape.

```ts
const result = await client.AccessGroup().create({
  $action: 'project',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccessGroup().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AccessGroup().list({ id_or_name: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccessGroup().load({ id: 'access_group_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccessGroup().remove({ id: 'access_group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccessGroup().update({
  id: 'access_group_id',
  access_group_id: 'access_group_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccessGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayEntity

```ts
const ai_gateway = client.AiGateway()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `rule` | `/v1/ai-gateway/rules` | `client.AiGateway().remove({ $action: 'rule', ... })` |

An action returns that action's OWN response, which is not necessarily a
AiGateway record — check the API definition for its shape.

```ts
const result = await client.AiGateway().remove({
  $action: 'rule',
  /* ...the action's own arguments */
})
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGateway().remove({ rule_id: 'rule_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayRuleEntity

```ts
const ai_gateway_rule = client.AiGatewayRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `Record<string, any>` | No |  |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | No |  |
| `deleted` | `boolean` | No |  |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `match` | `Record<string, any>` | No |  |
| `ownerId` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayRule().create({
  createdAt: 1,
  enabled: true,
  ownerId: 'example_ownerId',
  ruleId: 'example_ruleId',
  type: 'example_type',
  updatedAt: 1,
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayRule().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayRuleListEntity

```ts
const ai_gateway_rule_list = client.AiGatewayRuleList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `Record<string, any>` | No |  |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | No |  |
| `deleted` | `boolean` | No |  |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `match` | `Record<string, any>` | No |  |
| `ownerId` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayRuleList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayRuleListEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayVirtualModelConfigEntity

```ts
const ai_gateway_virtual_model_config = client.AiGatewayVirtualModelConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `boolean` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `any[]` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | No | Use caching if available. |
| `createdAt` | `number` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `string` | No | User or app id that created this VMC. |
| `deleted` | `boolean` | Yes | Whether this VMC is soft-deleted. |
| `description` | `string` | No | Optional description for UI. |
| `disallowPromptTraining` | `boolean` | No | Only use providers that will not train on your prompts. |
| `displayName` | `string` | No | Human-readable name for UI. |
| `has` | `any[]` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `boolean` | No | Only use HIPAA-compliant providers. |
| `id` | `string` | No |  |
| `inferenceRegion` | `Record<string, any>` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `any[]` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `any[]` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `any[]` | No | Restrict routing to only these providers. |
| `providerOptions` | `Record<string, any>` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `any[]` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `Record<string, any>` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `any[]` | No | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | No | For kind=router: how to order candidates. |
| `serviceTier` | `string` | No | Service tier for providers that support it. |
| `sort` | `string` | No | Rank eligible providers by an attribute. |
| `speed` | `string` | No | Only use fastest providers with short timeouts. |
| `status` | `string` | Yes | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `number` | Yes | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | No | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Yes | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | No | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `boolean` | No | Only use providers with zero data retention. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayVirtualModelConfig().create({
  createdAt: 1,
  deleted: true,
  kind: 'example_kind',
  ownerId: 'example_ownerId',
  status: 'example_status',
  updatedAt: 1,
  virtualModelSlug: 'example_virtualModelSlug',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayVirtualModelConfig().load({ id: 'ai_gateway_virtual_model_config_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayVirtualModelConfig().update({
  id: 'ai_gateway_virtual_model_config_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayVirtualModelConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayVirtualModelConfigListEntity

```ts
const ai_gateway_virtual_model_config_list = client.AiGatewayVirtualModelConfigList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `boolean` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `any[]` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | No | Use caching if available. |
| `createdAt` | `number` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `string` | No | User or app id that created this VMC. |
| `deleted` | `boolean` | Yes | Whether this VMC is soft-deleted. |
| `description` | `string` | No | Optional description for UI. |
| `disallowPromptTraining` | `boolean` | No | Only use providers that will not train on your prompts. |
| `displayName` | `string` | No | Human-readable name for UI. |
| `has` | `any[]` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `boolean` | No | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `Record<string, any>` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `any[]` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `any[]` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `any[]` | No | Restrict routing to only these providers. |
| `providerOptions` | `Record<string, any>` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `any[]` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `Record<string, any>` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `any[]` | No | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | No | For kind=router: how to order candidates. |
| `serviceTier` | `string` | No | Service tier for providers that support it. |
| `sort` | `string` | No | Rank eligible providers by an attribute. |
| `speed` | `string` | No | Only use fastest providers with short timeouts. |
| `status` | `string` | Yes | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `number` | Yes | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | No | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Yes | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | No | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `boolean` | No | Only use providers with zero data retention. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayVirtualModelConfigList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayVirtualModelConfigListEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AliasEntity

```ts
const alias = client.Alias()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | `string` | Yes | The date when the alias was created |
| `createdAt` | `number` | No | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `Record<string, any>` | Yes | Information of the user who created the alias |
| `deletedAt` | `number` | No | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `Record<string, any>` | Yes | A map with the deployment ID, URL and metadata |
| `deploymentId` | `string` | Yes | The deployment ID |
| `id` | `string` | No |  |
| `microfrontends` | `Record<string, any>` | Yes | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `string` | No | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `string` | Yes | The unique identifier of the project |
| `protectionBypass` | `Record<string, any>` | No | The protection bypass for the alias |
| `redirect` | `string` | No | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | `number` | No | Status code to be used on redirect |
| `uid` | `string` | Yes | The unique identifier of the alias |
| `updatedAt` | `number` | No | The date when the alias was updated in milliseconds since the UNIX epoch |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `alias` | - | - | Yes | - | - |
| `created` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `creator` | - | - | - | - | - |
| `deletedAt` | - | - | - | - | - |
| `deployment` | - | - | - | - | - |
| `deploymentId` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `microfrontends` | - | - | - | - | - |
| `oldDeploymentId` | - | - | - | - | - |
| `projectId` | - | - | - | - | - |
| `protectionBypass` | - | - | - | - | - |
| `redirect` | - | - | - | - | - |
| `redirectStatusCode` | - | - | - | - | - |
| `uid` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `protection_bypass` | `/aliases/{id}/protection-bypass` | `client.Alias().update({ $action: 'protection_bypass', ... })` |

An action returns that action's OWN response, which is not necessarily a
Alias record — check the API definition for its shape.

```ts
const result = await client.Alias().update({
  $action: 'protection_bypass',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Alias().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Alias().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Alias().load({ id: 'alias_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Alias().remove({ id: 'alias_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Alias().update({
  id: 'alias_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AliasEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiAiGatewayEntity

```ts
const api_ai_gateway = client.ApiAiGateway()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiAiGateway().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiAiGateway().remove({ vmc_slug: 'vmc_slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiAiGatewayEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `number` | Yes | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `Record<string, any>` | Yes | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `number` | Yes | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `string` | Yes | The ID of the user who created the API key. |
| `createdByAppId` | `string` | Yes | The ID of the app that created the API key, if any |
| `expiresAt` | `number` | Yes | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `string` | Yes | The unique identifier of the API key. |
| `leakedAt` | `number` | Yes | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `string` | Yes | URL where the API key was discovered as leaked. |
| `metadata` | `Record<string, any>` | No | Generic metadata attached to the API key. |
| `name` | `string` | Yes | The human-readable name of the API key. |
| `partialKey` | `string` | Yes | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `string` | Yes | The ID of the project that this API key grants access to. |
| `purpose` | `string` | Yes | The API key's purpose, i.e. |
| `quota` | `Record<string, any>` | Yes | AI Gateway quota associated with an API key. |
| `teamId` | `string` | Yes | The ID of the team that the API key grants access to. |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `activeAt` | - |
| `aiGatewayQuota` | - |
| `createdAt` | - |
| `createdBy` | - |
| `createdByAppId` | - |
| `expiresAt` | Yes |
| `id` | - |
| `leakedAt` | - |
| `leakedUrl` | - |
| `metadata` | - |
| `name` | Yes |
| `partialKey` | - |
| `projectId` | Yes |
| `purpose` | - |
| `quota` | - |
| `teamId` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiKey().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ArtifactEntity

```ts
const artifact = client.Artifact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hashes` | `any[]` | Yes | artifact hashes |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `event` | `/v8/artifacts/events` | `client.Artifact().create({ $action: 'event', ... })` |
| `status` | `/v8/artifacts/status` | `client.Artifact().load({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
Artifact record — check the API definition for its shape.

```ts
const result = await client.Artifact().create({
  $action: 'event',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Artifact().create({
  hashes: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Artifact().load({ id: 'artifact_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Artifact().remove()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Artifact().update({
  id: 'artifact_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthenticationEntity

```ts
const authentication = client.Authentication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `number` | Yes | Timestamp (in milliseconds) of when the token was most recently used. |
| `createdAt` | `number` | Yes | Timestamp (in milliseconds) of when the token was created. |
| `expiresAt` | `number` | No | Timestamp (in milliseconds) of when the token expires. |
| `id` | `string` | Yes | The unique identifier of the token. |
| `leakedAt` | `number` | No | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | `string` | No | URL where the token was discovered as leaked. |
| `name` | `string` | Yes | The human-readable name of the token. |
| `origin` | `string` | No | The origin of how the token was created. |
| `prefix` | `string` | No | The token's prefix, for identification purposes. |
| `projectId` | `string` | No | The ID of the project to scope this token to |
| `revokedAt` | `number` | No | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | `any[]` | No | The access scopes granted to the token. |
| `suffix` | `string` | No | The last few characters of the token, for identification purposes. |
| `type` | `string` | Yes | The type of the token. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Authentication().create({
  activeAt: 1,
  createdAt: 1,
  id: 'example_id',
  name: 'example_name',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Authentication().load({ token_id: 'token_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Authentication().remove({ token_id: 'token_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillingEntity

```ts
const billing = client.Billing()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `buy` | `/v1/billing/buy` | `client.Billing().create({ $action: 'buy', ... })` |
| `charge` | `/v1/billing/charges` | `client.Billing().load({ $action: 'charge', ... })` |
| `contract_commitment` | `/v1/billing/contract-commitments` | `client.Billing().load({ $action: 'contract_commitment', ... })` |

An action returns that action's OWN response, which is not necessarily a
Billing record — check the API definition for its shape.

```ts
const result = await client.Billing().create({
  $action: 'buy',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Billing().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Billing().load({ from: 'from', to: 'to' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillingEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkRedirectEntity

```ts
const bulk_redirect = client.BulkRedirect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | No | The staging link for previewing redirects in this version. |
| `createdBy` | `string` | Yes |  |
| `id` | `string` | Yes | The unique identifier for the version. |
| `isLive` | `boolean` | No | Whether this version is currently live in production. |
| `isStaging` | `boolean` | No | Whether this version has not been promoted to production yet and is not serving end users. |
| `key` | `string` | Yes | The key of the version. |
| `lastModified` | `number` | Yes |  |
| `name` | `string` | No | Optional name for the version. |
| `overwrite` | `boolean` | No |  |
| `projectId` | `string` | Yes |  |
| `redirect` | `Record<string, any>` | Yes | The redirect object to edit. |
| `redirectCount` | `number` | No | The number of redirects in this version. |
| `redirects` | `any[]` | No |  |
| `restore` | `boolean` | No | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `/v1/bulk-redirects/restore` | `client.BulkRedirect().create({ $action: 'restore', ... })` |
| `version` | `/v1/bulk-redirects/versions` | `client.BulkRedirect().create({ $action: 'version', ... })` |
| `version` | `/v1/bulk-redirects/versions` | `client.BulkRedirect().list({ $action: 'version', ... })` |

An action returns that action's OWN response, which is not necessarily a
BulkRedirect record — check the API definition for its shape.

```ts
const result = await client.BulkRedirect().create({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkRedirect().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BulkRedirect().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BulkRedirect().load({ project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BulkRedirect().remove({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BulkRedirect().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkRedirectEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CertEntity

```ts
const cert = client.Cert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoRenew` | `boolean` | Yes |  |
| `ca` | `string` | Yes | The certificate authority |
| `cert` | `string` | Yes | The certificate |
| `cns` | `any[]` | Yes | The common names the cert should be issued for |
| `createdAt` | `number` | Yes |  |
| `expiresAt` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `key` | `string` | Yes | The certificate key |
| `skipValidation` | `boolean` | No | Skip validation of the certificate |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `autoRenew` | - | - | - | - | - |
| `ca` | - | - | - | - | - |
| `cert` | - | - | - | - | - |
| `cns` | - | - | Yes | - | - |
| `createdAt` | - | - | - | - | - |
| `expiresAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `key` | - | - | - | - | - |
| `skipValidation` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Cert().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cert().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Cert().load({ id: 'cert_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Cert().remove({ id: 'cert_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Cert().update({
  id: 'cert_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CertEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CheckEntity

```ts
const check = client.Check()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocking` | `boolean` | Yes | Whether the check should block a deployment from succeeding |
| `blocks` | `string` | Yes |  |
| `completedAt` | `number` | No |  |
| `conclusion` | `any` | No | The result of the check being run |
| `createdAt` | `number` | Yes |  |
| `deletedAt` | `number` | No |  |
| `detailsUrl` | `string` | No | URL to display for further details |
| `externalId` | `string` | No | An identifier that can be used as an external reference |
| `id` | `string` | Yes |  |
| `integrationId` | `string` | Yes |  |
| `isRerequestable` | `boolean` | Yes |  |
| `metrics` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes | The name of the check being created |
| `output` | `Record<string, any>` | No | The results of the check Run |
| `ownerId` | `string` | Yes |  |
| `path` | `string` | No | Path of the page that is being checked |
| `projectId` | `string` | Yes |  |
| `requires` | `string` | Yes |  |
| `rerequestable` | `boolean` | No | Whether a user should be able to request for the check to be rerun if it fails |
| `source` | `any` | Yes |  |
| `sourceIntegrationConfigurationId` | `string` | No |  |
| `sourceKind` | `string` | Yes |  |
| `startedAt` | `number` | No |  |
| `status` | `any` | No | The current status of the check |
| `targets` | `any[]` | Yes |  |
| `timeout` | `number` | Yes |  |
| `updatedAt` | `number` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `blocking` | - | - | - | - | - |
| `blocks` | - | - | Yes | Yes | - |
| `completedAt` | - | - | - | - | - |
| `conclusion` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `deletedAt` | - | - | - | - | - |
| `detailsUrl` | - | - | - | - | - |
| `externalId` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `integrationId` | - | - | - | - | - |
| `isRerequestable` | - | - | Yes | Yes | - |
| `metrics` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `output` | - | - | - | - | - |
| `ownerId` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `projectId` | - | - | - | - | - |
| `requires` | - | - | - | Yes | - |
| `rerequestable` | - | Yes | - | - | - |
| `source` | - | - | Yes | - | - |
| `sourceIntegrationConfigurationId` | - | - | - | - | - |
| `sourceKind` | - | - | - | - | - |
| `startedAt` | - | - | - | - | - |
| `status` | - | Yes | - | - | - |
| `targets` | - | - | Yes | Yes | - |
| `timeout` | - | - | Yes | Yes | - |
| `updatedAt` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `rerequest` | `/v1/deployments/{deploymentId}/checks/{checkId}/rerequest` | `client.Check().create({ $action: 'rerequest', ... })` |

An action returns that action's OWN response, which is not necessarily a
Check record — check the API definition for its shape.

```ts
const result = await client.Check().create({
  $action: 'rerequest',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Check().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Check().list({ project_id_or_name: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Check().load({ id: 'check_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Check().remove({ id: 'check_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Check().update({
  id: 'check_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CheckEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChecksV2Entity

```ts
const checks_v2 = client.ChecksV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkId` | `string` | Yes |  |
| `completedAt` | `number` | No |  |
| `conclusion` | `string` | No |  |
| `conclusionText` | `string` | No |  |
| `externalId` | `string` | No |  |
| `externalUrl` | `string` | No |  |
| `output` | `Record<string, any>` | No |  |
| `runs` | `any[]` | Yes |  |
| `status` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ChecksV2().create({
  deployment_id: 'example_deployment_id',
  checkId: 'example_checkId',
  runs: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ChecksV2().list({ deployment_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ChecksV2().load({ check_run_id: 'check_run_id', deployment_id: 'deployment_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ChecksV2().update({
  check_run_id: 'check_run_id',
  deployment_id: 'deployment_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChecksV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectEntity

```ts
const connect = client.Connect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additionalParams` | `Record<string, any>` | No |  |
| `audience` | `any[]` | No |  |
| `authorizationDetails` | `any[]` | No |  |
| `authorizationId` | `string` | No | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `Record<string, any>` | No | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `Record<string, any>` | Yes |  |
| `deviceCode` | `boolean` | No |  |
| `displayName` | `string` | Yes | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `number` | Yes |  |
| `expiresInMs` | `number` | No |  |
| `externalSubject` | `string` | No |  |
| `id` | `string` | Yes | Client id (e.g. |
| `installationId` | `string` | No |  |
| `metadata` | `Record<string, any>` | No | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `string` | Yes | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `string` | No |  |
| `resources` | `any[]` | No |  |
| `returnUrl` | `string` | No |  |
| `scopes` | `any[]` | No |  |
| `service` | `string` | No | Resolved service id when known (e.g. |
| `serviceName` | `string` | No | Curated display name of the resolved service (e.g. |
| `subject` | `any` | No |  |
| `tenantId` | `string` | No |  |
| `token` | `string` | Yes |  |
| `tokenGroupId` | `string` | No | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` | `string` | Yes |  |
| `type` | `string` | Yes | Client type (e.g. |
| `uid` | `string` | Yes | Client uid (e.g. |
| `validityBufferMs` | `number` | No |  |
| `webhook` | `string` | No |  |

### Field Usage by Operation

| Field | create | remove |
| --- | --- | --- |
| `additionalParams` | - | - |
| `audience` | - | - |
| `authorizationDetails` | - | - |
| `authorizationId` | - | - |
| `claims` | - | - |
| `connector` | - | - |
| `deviceCode` | - | - |
| `displayName` | - | - |
| `expiresAt` | - | - |
| `expiresInMs` | - | - |
| `externalSubject` | - | - |
| `id` | - | - |
| `installationId` | - | - |
| `metadata` | - | - |
| `name` | Yes | - |
| `prompt` | - | - |
| `resources` | - | - |
| `returnUrl` | - | - |
| `scopes` | - | - |
| `service` | - | - |
| `serviceName` | - | - |
| `subject` | - | - |
| `tenantId` | - | - |
| `token` | - | - |
| `tokenGroupId` | - | - |
| `tokenId` | - | - |
| `type` | - | - |
| `uid` | - | - |
| `validityBufferMs` | - | - |
| `webhook` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Connect().create({
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

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Connect().remove({ connector: 'connector' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectConnectorEntity

```ts
const connect_connector = client.ConnectConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `Record<string, any>` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | No | The connection method this connector was created from, when the create request named one. |
| `connector` | `Record<string, any>` | Yes | Updated connector. |
| `createdAt` | `number` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `any` | No | Principal that created the connector. |
| `creationMode` | `string` | No | How the connector row was originally created. |
| `data` | `any` | Yes | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `string` | No | Installation used when a token request does not specify an installation. |
| `destinations` | `any[]` | Yes | Complete replacement set of trigger destinations. |
| `devsite` | `string` | No | Developer website for the connected service. |
| `displayName` | `string` | Yes | Human-readable connector name. |
| `docsite` | `string` | No | Developer documentation for the connected service. |
| `environments` | `any[]` | No | Environments for the project connection. |
| `events` | `any[]` | No | Known events this connector subscribes to (e.g. |
| `icon` | `string` | No | Connector branding icon. |
| `id` | `string` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `boolean` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `Record<string, any>` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Yes | Connector name within the owning team. |
| `params` | `Record<string, any>` | No | Values for the selected connection method's template fields. |
| `projectId` | `string` | No | Project to connect during creation. |
| `reconsentNeeded` | `Record<string, any>` | Yes | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `string` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `number` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `boolean` | No | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `string` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `Record<string, any>` | Yes | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `any[]` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `any` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `boolean` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `boolean` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `boolean` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `string` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `any` | No | Initial trigger destination. |
| `triggerDestinations` | `any[]` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `Record<string, any>` | Yes | Incoming trigger configuration for the connector. |
| `type` | `string` | Yes | Connector implementation type. |
| `typeIcon` | `string` | No | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Yes | Human-readable name of the connector type. |
| `uid` | `string` | Yes | Team-scoped UID. |
| `updatedAt` | `number` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `any` | No | Principal that most recently updated the connector. |
| `userTokens` | `Record<string, any>` | Yes | User-token capabilities and known grants for the connector. |
| `website` | `string` | No | Public website for the connected service. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `accentColor` | - | - | - |
| `appTokens` | - | - | - |
| `backgroundColor` | - | - | - |
| `clientUrl` | - | - | - |
| `connectionMethod` | - | - | - |
| `connector` | - | - | - |
| `createdAt` | - | - | - |
| `createdBy` | - | - | - |
| `creationMode` | - | - | - |
| `data` | - | - | Yes |
| `defaultInstallationId` | - | - | - |
| `destinations` | - | - | - |
| `devsite` | - | - | - |
| `displayName` | - | - | - |
| `docsite` | - | - | - |
| `environments` | - | - | - |
| `events` | - | - | - |
| `icon` | - | - | - |
| `id` | - | - | - |
| `knownStale` | - | - | - |
| `managed` | - | - | - |
| `name` | - | Yes | Yes |
| `params` | - | - | - |
| `projectId` | - | - | - |
| `reconsentNeeded` | - | - | - |
| `redirectUri` | - | - | - |
| `reinstallAt` | - | - | - |
| `reinstallNeeded` | - | - | - |
| `service` | - | Yes | - |
| `serviceSync` | - | - | - |
| `supportedSubjectTypes` | - | - | - |
| `supportsIcon` | - | - | - |
| `supportsInstallation` | - | - | - |
| `supportsRevocation` | - | - | - |
| `supportsTriggers` | - | - | - |
| `target` | - | - | - |
| `triggerDestination` | - | - | - |
| `triggerDestinations` | - | - | - |
| `triggers` | - | Yes | Yes |
| `type` | - | Yes | - |
| `typeIcon` | - | - | - |
| `typeName` | - | - | - |
| `uid` | - | Yes | Yes |
| `updatedAt` | - | - | - |
| `updatedBy` | - | - | - |
| `userTokens` | - | - | - |
| `website` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConnectConnector().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConnectConnector().load({ id: 'connect_connector_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ConnectConnector().update({
  id: 'connect_connector_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectConnectorEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectConnectorListEntity

```ts
const connect_connector_list = client.ConnectConnectorList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `Record<string, any>` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | No | The connection method this connector was created from, when the create request named one. |
| `createdAt` | `number` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `any` | No | Principal that created the connector. |
| `creationMode` | `string` | No | How the connector row was originally created. |
| `defaultInstallationId` | `string` | No | Installation used when a token request does not specify an installation. |
| `devsite` | `string` | No | Developer website for the connected service. |
| `displayName` | `string` | Yes | Human-readable connector name. |
| `docsite` | `string` | No | Developer documentation for the connected service. |
| `events` | `any[]` | No | Known events this connector subscribes to (e.g. |
| `icon` | `string` | No | Connector branding icon. |
| `id` | `string` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `boolean` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `Record<string, any>` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Yes | Connector name within the owning team. |
| `redirectUri` | `string` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `number` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `string` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `any[]` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `any` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `boolean` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `boolean` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `boolean` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `string` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `any[]` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `Record<string, any>` | Yes | Incoming trigger configuration for the connector. |
| `type` | `string` | Yes | Connector implementation type. |
| `typeIcon` | `string` | No | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Yes | Human-readable name of the connector type. |
| `uid` | `string` | Yes | Team-scoped UID. |
| `updatedAt` | `number` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `any` | No | Principal that most recently updated the connector. |
| `userTokens` | `Record<string, any>` | Yes | User-token capabilities and known grants for the connector. |
| `website` | `string` | No | Public website for the connected service. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConnectConnectorList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectConnectorListEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectConnectorProjectConnectionListEntity

```ts
const connect_connector_project_connection_list = client.ConnectConnectorProjectConnectionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `any[]` | Yes | Environments where the connector is enabled for the project. |
| `project` | `Record<string, any>` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `number` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConnectConnectorProjectConnectionList().list({ connector_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectConnectorProjectConnectionListEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectProjectConnectionEntity

```ts
const connect_project_connection = client.ConnectProjectConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `any[]` | Yes | Environments where the connector is enabled for the project. |
| `environments` | `any[]` | Yes | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `Record<string, any>` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `number` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConnectProjectConnection().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConnectProjectConnection().load({ connector_id: 'connector_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectProjectConnectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectProjectConnectorConnectionListEntity

```ts
const connect_project_connector_connection_list = client.ConnectProjectConnectorConnectionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `any[]` | Yes | Environments where the connector is enabled for the project. |
| `project` | `Record<string, any>` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `number` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConnectProjectConnectorConnectionList().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectProjectConnectorConnectionListEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentEntity

```ts
const deployment = client.Deployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliasAssigned` | `any` | No |  |
| `aliasError` | `Record<string, any>` | Yes | An error object in case aliasing of the deployment failed. |
| `attribution` | `Record<string, any>` | No | Commit attribution metadata |
| `buildMachine` | `string` | No | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `number` | No | Timestamp of when the deployment started building at. |
| `checks` | `Record<string, any>` | Yes | Detailed information about v2 deployment checks. |
| `checksConclusion` | `string` | No | Conclusion for checks |
| `checksState` | `string` | No | State of all registered checks |
| `connectBuildsEnabled` | `boolean` | No | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `string` | No | The ID of Secure Compute network used for this deployment |
| `created` | `number` | Yes | Timestamp of when the deployment got created. |
| `createdAt` | `number` | Yes |  |
| `creator` | `Record<string, any>` | Yes | Metadata information of the deployment creator. |
| `customEnvironment` | `Record<string, any>` | Yes | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `string` | No | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `string` | No | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `number` | No | Timestamp of when the deployment got deleted. |
| `deploymentId` | `string` | No | The ID of an existing deployment to redeploy. |
| `errorCode` | `string` | No | Error code when the deployment is in an error state. |
| `errorMessage` | `string` | No | Error message when the deployment is in an canceled or error state. |
| `expiration` | `number` | No | The expiration configured by the project retention policy |
| `files` | `any[]` | No | The files to include in the deployment. |
| `gitAccessToken` | `string` | No | Available only to Vercel platform accounts. |
| `gitMetadata` | `Record<string, any>` | No | Populates initial git metadata for different git providers. |
| `gitSource` | `any` | No | Defines the Git Repository source to be deployed. |
| `id` | `string` | No |  |
| `inspectorUrl` | `string` | Yes | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `boolean` | No | Deployment can be used for instant rollback |
| `manualProvisioning` | `Record<string, any>` | Yes |  |
| `meta` | `Record<string, any>` | No | An object containing the deployment's metadata. |
| `monorepoManager` | `string` | No | The monorepo manager that is being used for this deployment. |
| `name` | `string` | Yes | A string with the project name used in the deployment URL |
| `oomReport` | `string` | No | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `any[]` | No |  |
| `passiveConnectConfigurationId` | `string` | No | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `Record<string, any>` | Yes | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `boolean` | No |  |
| `project` | `string` | No | The target project identifier in which the deployment will be created. |
| `projectId` | `string` | Yes | The project ID of the deployment |
| `projectSettings` | `Record<string, any>` | No | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `number` | No | The expiration proposed to replace the existing expiration |
| `ready` | `number` | No | Timestamp of when the deployment got ready. |
| `readyState` | `string` | Yes |  |
| `readySubstate` | `string` | No | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `Record<string, any>` | Yes | NSNB Blocked metadata |
| `softDeletedByRetention` | `boolean` | No | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | `string` | No | The source of the deployment. |
| `state` | `string` | No | In which state is the deployment. |
| `status` | `string` | No |  |
| `statusText` | `string` | No |  |
| `statusUrl` | `string` | No |  |
| `target` | `string` | No | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | `string` | Yes | The type of the deployment. |
| `uid` | `string` | Yes | The unique identifier of the deployment. |
| `undeleted` | `number` | No | Timestamp of when the deployment was undeleted. |
| `url` | `string` | Yes | The URL of the deployment. |
| `withLatestCommit` | `boolean` | No | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `event` | `/v3/deployments/{idOrUrl}/events` | `client.Deployment().list({ $action: 'event', ... })` |
| `cancel` | `/v12/deployments/{id}/cancel` | `client.Deployment().update({ $action: 'cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
Deployment record — check the API definition for its shape.

```ts
const result = await client.Deployment().list({
  $action: 'event',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Deployment().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Deployment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Deployment().load({ id: 'deployment_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Deployment().remove({ id: 'deployment_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Deployment().update({
  id: 'deployment_id',
  action: 'action',
  integration_id: 'integration_id',
  resource_id: 'resource_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DnsEntity

```ts
const dns = client.Dns()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | A comment to add context on what this DNS record is for |
| `createdAt` | `number` | No |  |
| `creator` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `https` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes |  |
| `mxPriority` | `number` | No | The MX priority value of the DNS record |
| `name` | `string` | Yes | The name of the DNS record |
| `recordType` | `string` | Yes |  |
| `srv` | `Record<string, any>` | Yes |  |
| `ttl` | `number` | No | The Time to live (TTL) value of the DNS record |
| `type` | `string` | Yes | The type of record, it could be one of the valid DNS records. |
| `value` | `string` | Yes | The value of the DNS record |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `creator` | - | - | - | - |
| `domain` | - | - | - | - |
| `https` | - | - | - | - |
| `id` | - | - | - | - |
| `mxPriority` | - | - | - | - |
| `name` | - | - | Yes | - |
| `recordType` | - | - | - | - |
| `srv` | - | - | - | - |
| `ttl` | - | - | - | - |
| `type` | - | - | Yes | - |
| `value` | - | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Dns().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dns().load({ domain_id: 'domain_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Dns().remove({ domain_id: 'domain_id', record_id: 'record_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Dns().update({
  record_id: 'record_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DnsEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainEntity

```ts
const domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boughtAt` | `number` | Yes | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `number` | Yes | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `Record<string, any>` | Yes | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `any[]` | No | A list of custom nameservers for the domain to point to. |
| `echMode` | `string` | Yes | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `number` | Yes | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `string` | Yes | The unique identifier of the domain. |
| `intendedNameservers` | `any[]` | Yes | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `string` | No | The domain operation to perform. |
| `name` | `string` | Yes | The domain name. |
| `nameservers` | `any[]` | Yes | A list of the current nameservers of the domain. |
| `renew` | `boolean` | No | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `string` | Yes | The type of service the domain is handled by. |
| `suffix` | `boolean` | Yes |  |
| `teamId` | `string` | Yes |  |
| `transferStartedAt` | `number` | No | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `number` | No | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `string` | Yes |  |
| `verified` | `boolean` | Yes | If the domain has the ownership verified. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `claim` | `/v9/domains/{domain}/claim` | `client.Domain().create({ $action: 'claim', ... })` |
| `config` | `/v6/domains/{domain}/config` | `client.Domain().list({ $action: 'config', ... })` |
| `project_domain` | `/v1/domains/{domain}/project-domains` | `client.Domain().list({ $action: 'project_domain', ... })` |
| `verification` | `/v9/domains/{domain}/verification` | `client.Domain().load({ $action: 'verification', ... })` |
| `record` | `/domains/{domain}/records` | `client.Domain().update({ $action: 'record', ... })` |

An action returns that action's OWN response, which is not necessarily a
Domain record — check the API definition for its shape.

```ts
const result = await client.Domain().create({
  $action: 'claim',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Domain().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Domain().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Domain().load({ id: 'domain_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Domain().remove({ id: 'domain_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Domain().update({
  id: 'domain_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainsRegistrarEntity

```ts
const domains_registrar = client.DomainsRegistrar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authCode` | `string` | Yes | The auth code for the domain. |
| `autoRenew` | `boolean` | Yes | Whether the domain should be auto-renewed before it expires. |
| `available` | `boolean` | Yes |  |
| `contactInformation` | `Record<string, any>` | Yes | The contact information for the domain. |
| `domains` | `any[]` | Yes | an array of at most 50 item(s) |
| `error` | `any` | No |  |
| `expectedPrice` | `number` | Yes |  |
| `languageCode` | `string` | No | The language code for the domain. |
| `nameservers` | `any[]` | Yes |  |
| `orderId` | `string` | Yes | A valid order ID |
| `purchasePrice` | `any` | Yes |  |
| `renewalPrice` | `any` | Yes |  |
| `results` | `any[]` | Yes |  |
| `status` | `string` | Yes |  |
| `transferPrice` | `any` | Yes |  |
| `years` | `number` | Yes | The number of years the returned price is for. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `authCode` | - | - | - |
| `autoRenew` | - | - | - |
| `available` | - | - | - |
| `contactInformation` | - | - | - |
| `domains` | - | - | - |
| `error` | - | - | - |
| `expectedPrice` | - | - | - |
| `languageCode` | - | - | - |
| `nameservers` | - | - | - |
| `orderId` | - | - | - |
| `purchasePrice` | - | - | - |
| `renewalPrice` | - | - | - |
| `results` | - | - | - |
| `status` | - | - | - |
| `transferPrice` | - | - | - |
| `years` | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DomainsRegistrar().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DomainsRegistrar().load({ order_id: 'order_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DomainsRegistrar().update({
  domain_id: 'domain_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainsRegistrarEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DrainEntity

```ts
const drain = client.Drain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delivery` | `Record<string, any>` | No |  |
| `drains` | `any` | Yes |  |
| `filter` | `Record<string, any>` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `projectIds` | `any[]` | No |  |
| `projects` | `string` | Yes |  |
| `sampling` | `any[]` | No |  |
| `schemas` | `Record<string, any>` | Yes |  |
| `source` | `Record<string, any>` | No |  |
| `status` | `string` | No |  |
| `transforms` | `any[]` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `delivery` | - | - | - | - |
| `drains` | - | - | - | - |
| `filter` | - | - | Yes | - |
| `id` | - | - | - | - |
| `name` | - | - | Yes | - |
| `projectIds` | - | - | - | - |
| `projects` | - | - | Yes | - |
| `sampling` | - | - | - | - |
| `schemas` | - | - | Yes | - |
| `source` | - | - | - | - |
| `status` | - | - | - | - |
| `transforms` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `test` | `/v1/drains/test` | `client.Drain().create({ $action: 'test', ... })` |

An action returns that action's OWN response, which is not necessarily a
Drain record — check the API definition for its shape.

```ts
const result = await client.Drain().create({
  $action: 'test',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Drain().create({
  drains: 'example_drains',
  filter: {},
  name: 'example_name',
  projects: 'example_projects',
  schemas: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Drain().load({ id: 'drain_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Drain().remove({ id: 'drain_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Drain().update({
  id: 'drain_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DrainEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EdgeCacheEntity

```ts
const edge_cache = client.EdgeCache()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `dangerously_delete_by_src_image` | `/v1/edge-cache/dangerously-delete-by-src-images` | `client.EdgeCache().create({ $action: 'dangerously_delete_by_src_image', ... })` |
| `dangerously_delete_by_tag` | `/v1/edge-cache/dangerously-delete-by-tags` | `client.EdgeCache().create({ $action: 'dangerously_delete_by_tag', ... })` |
| `invalidate_by_src_image` | `/v1/edge-cache/invalidate-by-src-images` | `client.EdgeCache().create({ $action: 'invalidate_by_src_image', ... })` |
| `invalidate_by_tag` | `/v1/edge-cache/invalidate-by-tags` | `client.EdgeCache().create({ $action: 'invalidate_by_tag', ... })` |

An action returns that action's OWN response, which is not necessarily a
EdgeCache record — check the API definition for its shape.

```ts
const result = await client.EdgeCache().create({
  $action: 'dangerously_delete_by_src_image',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EdgeCache().create({
  project_id_or_name: 'example_project_id_or_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EdgeCacheEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvEntity

```ts
const env = client.Env()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applyToAllCustomEnvironments` | `boolean` | No | whether or not this env varible applies to custom environments |
| `comment` | `string` | No | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `string` | No | The date when the Shared Env Var was created. |
| `createdAt` | `number` | No | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `string` | No | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `any[]` | No | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `boolean` | No | whether or not this env variable is decrypted |
| `deletedAt` | `number` | No | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `string` | No | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `any[]` | Yes |  |
| `failed` | `any[]` | Yes |  |
| `id` | `string` | No | The unique identifier of the Shared Env Var. |
| `key` | `string` | No | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `string` | No | The last editor full name or username. |
| `ownerId` | `string` | No | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `any[]` | No | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `any[]` | Yes |  |
| `target` | `any[]` | No | environments this env variable targets |
| `type` | `string` | No | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `any[]` | Yes |  |
| `updatedAt` | `number` | No | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `string` | No | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `Record<string, any>` | Yes | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
| `value` | `string` | No | The value of the Shared Env Var. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `applyToAllCustomEnvironments` | - | - | - | - | - |
| `comment` | - | - | - | - | - |
| `created` | - | Yes | - | - | - |
| `createdAt` | - | - | - | - | - |
| `createdBy` | - | - | - | - | - |
| `customEnvironmentIds` | - | - | - | - | - |
| `decrypted` | - | Yes | - | - | - |
| `deletedAt` | - | - | - | - | - |
| `deletedBy` | - | - | - | - | - |
| `evs` | - | - | - | - | - |
| `failed` | - | - | - | - | - |
| `id` | - | Yes | - | - | - |
| `key` | - | Yes | - | - | - |
| `lastEditedByDisplayName` | - | - | - | - | - |
| `ownerId` | - | - | - | - | - |
| `projectId` | - | - | - | - | - |
| `securityIssues` | - | - | - | - | - |
| `target` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updated` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `updatedBy` | - | - | - | - | - |
| `updates` | - | - | - | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Env().create({
  evs: [],
  failed: [],
  securityIssues: [],
  updated: [],
  updates: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Env().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Env().load({ id: 'env_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Env().remove()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Env().update({
  id: 'env_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentEntity

```ts
const environment = client.Environment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branchMatcher` | `Record<string, any>` | Yes | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `string` | No | Where to copy environment variables from. |
| `createdAt` | `number` | Yes | Timestamp when the environment was created |
| `currentDeploymentAliases` | `any[]` | No | List of aliases for the current deployment |
| `description` | `string` | No | Optional description of the environment's purpose |
| `domains` | `any[]` | No | List of domains associated with this environment |
| `id` | `string` | Yes | Unique identifier for the custom environment (format: env_*) |
| `slug` | `string` | Yes | URL-friendly name of the environment |
| `type` | `string` | Yes | The type of environment (production, preview, or development) |
| `updatedAt` | `number` | Yes | Timestamp when the environment was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `branchMatcher` | - | - | - | - | - |
| `copyEnvVarsFrom` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `currentDeploymentAliases` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `domains` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `slug` | - | - | Yes | Yes | - |
| `type` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Environment().create({
  id_or_name: 'example_id_or_name',
  branchMatcher: {},
  createdAt: 1,
  id: 'example_id',
  type: 'example_type',
  updatedAt: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Environment().list({ id_or_name: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Environment().load({ environment_slug_or_id: 'environment_slug_or_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Environment().remove({ environment_slug_or_id: 'environment_slug_or_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Environment().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureFlagEntity

```ts
const feature_flag = client.FeatureFlag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changedEnvironments` | `any[]` | Yes |  |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | Yes | The user who created this patch |
| `data` | `Record<string, any>` | No | The data of the segment |
| `description` | `string` | No | A description of the flag |
| `environments` | `Record<string, any>` | Yes | The configuration for the flag in different environments |
| `flagId` | `string` | Yes |  |
| `flags` | `any[]` | Yes |  |
| `hint` | `string` | No |  |
| `id` | `string` | Yes |  |
| `kind` | `string` | Yes | The kind of flag |
| `label` | `string` | No |  |
| `maintainerIds` | `any[]` | No | The user ids of the maintainers of the flag |
| `message` | `string` | No | Additional message for this version |
| `metadata` | `Record<string, any>` | No |  |
| `operations` | `any[]` | No |  |
| `ownerId` | `string` | Yes |  |
| `pagination` | `Record<string, any>` | Yes |  |
| `permanent` | `boolean` | No | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `string` | Yes |  |
| `revision` | `number` | Yes |  |
| `seed` | `number` | Yes | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `string` | Yes | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `string` | Yes |  |
| `status` | `Record<string, any>` | Yes |  |
| `tags` | `any[]` | No | Tags for categorizing the flag |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `updatedBy` | `string` | No |  |
| `variants` | `any[]` | Yes | The variants of the flag |

### Field Usage by Operation

| Field | load | list | update | remove |
| --- | --- | --- | --- | --- |
| `changedEnvironments` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `createdBy` | - | Yes | - | - |
| `data` | - | Yes | - | - |
| `description` | - | - | - | - |
| `environments` | - | - | - | - |
| `flagId` | - | - | - | - |
| `flags` | - | - | - | - |
| `hint` | - | - | - | - |
| `id` | - | - | - | - |
| `kind` | - | - | - | - |
| `label` | - | - | - | - |
| `maintainerIds` | - | - | - | - |
| `message` | - | - | - | - |
| `metadata` | - | - | - | - |
| `operations` | - | - | - | - |
| `ownerId` | - | - | - | - |
| `pagination` | - | - | - | - |
| `permanent` | - | - | - | - |
| `projectId` | - | - | - | - |
| `revision` | - | - | - | - |
| `seed` | - | - | Yes | - |
| `slug` | - | - | - | - |
| `state` | - | - | Yes | - |
| `status` | - | - | - | - |
| `tags` | - | - | - | - |
| `typeName` | - | - | - | - |
| `updatedAt` | - | - | - | - |
| `updatedBy` | - | - | - | - |
| `variants` | - | - | Yes | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `sdk_key` | `/v1/projects/{projectIdOrName}/feature-flags/sdk-keys` | `client.FeatureFlag().list({ $action: 'sdk_key', ... })` |
| `segment` | `/v1/projects/{projectIdOrName}/feature-flags/segments` | `client.FeatureFlag().list({ $action: 'segment', ... })` |
| `setting` | `/v1/projects/{projectIdOrName}/feature-flags/settings` | `client.FeatureFlag().list({ $action: 'setting', ... })` |
| `setting` | `/v1/teams/{teamId}/feature-flags/settings` | `client.FeatureFlag().load({ $action: 'setting', ... })` |
| `setting` | `/v1/projects/{projectIdOrName}/feature-flags/settings` | `client.FeatureFlag().patch({ $action: 'setting', ... })` |
| `segment` | `/v1/projects/{projectIdOrName}/feature-flags/segments` | `client.FeatureFlag().update({ $action: 'segment', ... })` |

An action returns that action's OWN response, which is not necessarily a
FeatureFlag record — check the API definition for its shape.

```ts
const result = await client.FeatureFlag().list({
  $action: 'sdk_key',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.FeatureFlag().list({ deployment_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FeatureFlag().load({ team_id: 'team_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.FeatureFlag().remove({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.FeatureFlag().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileEntity

```ts
const file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `any[]` | No | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `string` | No | The content-type of the file (only valid for the `file` type) |
| `mode` | `number` | Yes | The file "mode" indicating file type and permissions. |
| `name` | `string` | Yes | The name of the file tree entry |
| `type` | `string` | Yes | String indicating the type of file tree entry. |
| `uid` | `string` | No | The unique identifier of the file (only valid for the `file` type) |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.File().list({ deployment_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FlagEntity

```ts
const flag = client.Flag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | Yes |  |
| `description` | `string` | No |  |
| `environments` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes |  |
| `kind` | `string` | Yes |  |
| `maintainerIds` | `any[]` | No |  |
| `metadata` | `Record<string, any>` | No |  |
| `ownerId` | `string` | Yes |  |
| `permanent` | `boolean` | No |  |
| `projectId` | `string` | Yes |  |
| `revision` | `number` | Yes |  |
| `seed` | `number` | Yes |  |
| `slug` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `tags` | `any[]` | No |  |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `updatedBy` | `string` | No |  |
| `variants` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Flag().load({ id: 'flag_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FlagEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FlagsSdkKeyWithSecretEntity

```ts
const flags_sdk_key_with_secret = client.FlagsSdkKeyWithSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | Yes |  |
| `deletedAt` | `number` | No |  |
| `environment` | `string` | Yes |  |
| `hashKey` | `string` | Yes |  |
| `keyValue` | `string` | Yes | Cleartext value of the SDK key. |
| `label` | `string` | No |  |
| `partialKeyValue` | `string` | Yes | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` | `string` | Yes |  |
| `sdkKeyType` | `string` | Yes |  |
| `tokenValue` | `string` | No | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.FlagsSdkKeyWithSecret().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FlagsSdkKeyWithSecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GlobalConfigEntity

```ts
const global_config = client.GlobalConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | No | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` | `number` | No |  |
| `digest` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `itemCount` | `number` | Yes |  |
| `items` | `Record<string, any>` | No |  |
| `ownerId` | `string` | Yes |  |
| `purpose` | `any` | No |  |
| `schema` | `Record<string, any>` | No |  |
| `sizeInBytes` | `number` | Yes |  |
| `slug` | `string` | Yes | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `number` | No | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `Record<string, any>` | Yes | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `number` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `/v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}/restore` | `client.GlobalConfig().create({ $action: 'restore', ... })` |
| `schema` | `/v1/global-config/{edgeConfigId}/schema` | `client.GlobalConfig().create({ $action: 'schema', ... })` |
| `token` | `/v1/global-config/{edgeConfigId}/token` | `client.GlobalConfig().create({ $action: 'token', ... })` |
| `backup` | `/v1/global-config/{edgeConfigId}/backups` | `client.GlobalConfig().list({ $action: 'backup', ... })` |
| `schema` | `/v1/global-config/{edgeConfigId}/schema` | `client.GlobalConfig().load({ $action: 'schema', ... })` |
| `item` | `/v1/global-config/{edgeConfigId}/items` | `client.GlobalConfig().patch({ $action: 'item', ... })` |
| `schema` | `/v1/global-config/{edgeConfigId}/schema` | `client.GlobalConfig().remove({ $action: 'schema', ... })` |
| `token` | `/v1/global-config/{edgeConfigId}/tokens` | `client.GlobalConfig().remove({ $action: 'token', ... })` |

An action returns that action's OWN response, which is not necessarily a
GlobalConfig record — check the API definition for its shape.

```ts
const result = await client.GlobalConfig().create({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GlobalConfig().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GlobalConfig().list({ id: "example_id" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GlobalConfig().load({ id: 'global_config_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.GlobalConfig().remove({ id: 'global_config_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.GlobalConfig().update({
  id: 'global_config_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GlobalConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GlobalConfigItemEntity

```ts
const global_config_item = client.GlobalConfigItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | Yes |  |
| `description` | `string` | No |  |
| `edgeConfigId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `key` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `value` | `any` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GlobalConfigItem().list({ id: "example_id" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GlobalConfigItem().load({ id: 'global_config_item_id', global_config_id: 'global_config_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GlobalConfigItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GlobalConfigTokenEntity

```ts
const global_config_token = client.GlobalConfigToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | Yes |  |
| `edgeConfigId` | `string` | Yes |  |
| `id` | `string` | Yes | This is not the token itself, but rather an id to identify the token by |
| `label` | `string` | Yes |  |
| `partialToken` | `string` | Yes | A partially-masked representation of the token, safe to display in UIs. |
| `token` | `string` | No | Deprecated: the full, plaintext token. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GlobalConfigToken().load({ id: 'global_config_token_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GlobalConfigTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationEntity

```ts
const integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `string` | No |  |
| `description` | `string` | Yes |  |
| `details` | `any[]` | No |  |
| `disabled` | `boolean` | No |  |
| `effectiveDate` | `string` | No |  |
| `envVarEnvironments` | `any[]` | No |  |
| `highlightedDetails` | `any[]` | No |  |
| `id` | `string` | Yes |  |
| `initialCharge` | `string` | No |  |
| `makeEnvVarsSensitive` | `boolean` | No |  |
| `maximumAmount` | `string` | No |  |
| `maximumAmountAutoPurchasePerPeriod` | `string` | No |  |
| `metadataSchema` | `Record<string, any>` | Yes |  |
| `minimumAmount` | `string` | No |  |
| `name` | `string` | Yes |  |
| `paymentMethodRequired` | `boolean` | Yes |  |
| `preauthorizationAmount` | `number` | No |  |
| `primaryProtocol` | `string` | No |  |
| `projectId` | `string` | Yes |  |
| `protocols` | `Record<string, any>` | Yes |  |
| `quote` | `any[]` | No |  |
| `scope` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `direct` | `/v1/storage/stores/integration/direct` | `client.Integration().create({ $action: 'direct', ... })` |
| `git_namespace` | `/v1/integrations/git-namespaces` | `client.Integration().list({ $action: 'git_namespace', ... })` |
| `configuration` | `/v1/integrations/configurations` | `client.Integration().load({ $action: 'configuration', ... })` |
| `search_repo` | `/v1/integrations/search-repo` | `client.Integration().load({ $action: 'search_repo', ... })` |

An action returns that action's OWN response, which is not necessarily a
Integration record — check the API definition for its shape.

```ts
const result = await client.Integration().create({
  $action: 'direct',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Integration().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Integration().list({ configuration_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Integration().load({ id: 'integration_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Integration().remove({ id: 'integration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KmsEntity

```ts
const kms = client.Kms()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activation` | `string` | No | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` | `string` | No |  |
| `algorithm` | `string` | Yes | Algorithm of the signing key. |
| `claims` | `Record<string, any>` | No | The claims to include in the token. |
| `claimsSchema` | `Record<string, any>` | No | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `string` | Yes |  |
| `environments` | `any[]` | Yes | The environments for the project grant policy. |
| `headers` | `Record<string, any>` | No | Additional headers to include in the token. |
| `id` | `string` | Yes |  |
| `importKey` | `string` | No | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `string` | No | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `string` | Yes | Key id of the signing key. |
| `key_ops` | `any[]` | No |  |
| `kid` | `string` | No |  |
| `kind` | `string` | Yes |  |
| `kty` | `string` | No |  |
| `managedBy` | `string` | No |  |
| `message` | `string` | Yes | Base64-encoded message to be signed. |
| `name` | `string` | Yes | The name of the issuer. |
| `origin` | `string` | Yes |  |
| `ownerId` | `string` | Yes |  |
| `policies` | `any[]` | Yes |  |
| `projectId` | `string` | Yes | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `number` | No | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `any` | No | Deprecated. |
| `signature` | `string` | Yes | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `any[]` | Yes |  |
| `token` | `string` | Yes |  |
| `tokenClaims` | `Record<string, any>` | No | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `number` | No | The time-to-live for the token, in seconds. |
| `updatedAt` | `string` | Yes |  |
| `use` | `string` | No |  |
| `x5c` | `any[]` | No | The X.509 certificate chain (RFC 7517 §4.7). |
| `x5tS256` | `string` | No | The base64url SHA-256 thumbprint of the DER certificate in `x5c[0]` (RFC 7517 §4.9). |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `activation` | - | - | - | - | - |
| `alg` | - | - | - | - | - |
| `algorithm` | - | - | - | - | - |
| `claims` | - | - | - | - | - |
| `claimsSchema` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `environments` | - | - | - | Yes | - |
| `headers` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `importKey` | - | - | - | - | - |
| `importKeyId` | - | - | - | - | - |
| `keyId` | - | - | - | - | - |
| `key_ops` | - | - | - | - | - |
| `kid` | - | - | - | - | - |
| `kind` | - | - | - | - | - |
| `kty` | - | - | - | - | - |
| `managedBy` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `origin` | - | - | - | - | - |
| `ownerId` | - | - | - | - | - |
| `policies` | - | - | - | - | - |
| `projectId` | - | - | - | - | - |
| `revokePreviousAfterHours` | - | - | - | - | - |
| `revokePreviousAt` | - | - | - | - | - |
| `signature` | - | - | - | - | - |
| `signingKeys` | - | - | - | - | - |
| `token` | - | - | - | - | - |
| `tokenClaims` | - | - | - | - | - |
| `ttl` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `use` | - | - | - | - | - |
| `x5c` | - | - | - | - | - |
| `x5tS256` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `issuer` | `/v1/kms/issuers` | `client.Kms().create({ $action: 'issuer', ... })` |
| `issuer` | `/v1/kms/issuers` | `client.Kms().list({ $action: 'issuer', ... })` |

An action returns that action's OWN response, which is not necessarily a
Kms record — check the API definition for its shape.

```ts
const result = await client.Kms().create({
  $action: 'issuer',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Kms().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Kms().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Kms().load({ issuer_id: 'issuer_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Kms().remove({ issuer_id: 'issuer_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Kms().update({
  issuer_id: 'issuer_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KmsEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListEventTypeEntity

```ts
const list_event_type = client.ListEventType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `any[]` | Yes |  |
| `types` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListEventType().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListEventTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogEntity

```ts
const log = client.Log()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Log().load({ deployment_id: 'deployment_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogDrainEntity

```ts
const log_drain = client.LogDrain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `string` | No | The branch regexp of log drain |
| `clientId` | `string` | No | The oauth2 client application id that created this log drain |
| `configurationId` | `string` | No | The client configuration this log drain was created with |
| `createdAt` | `number` | Yes | A timestamp that tells you when the log drain was created |
| `createdFrom` | `string` | Yes | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | `any` | Yes | The delivery log format |
| `environments` | `any[]` | No | The environment of log drain |
| `headers` | `Record<string, any>` | No | Headers to be sent together with the request |
| `id` | `string` | Yes | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `string` | No |  |
| `integrationIcon` | `string` | No |  |
| `integrationWebsite` | `string` | No |  |
| `name` | `string` | No | The custom name of this log drain. |
| `ownerId` | `string` | Yes | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `string` | No |  |
| `projectIds` | `any[]` | No | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `any[]` | No |  |
| `samplingRate` | `number` | No | The sampling rate for this log drain. |
| `secret` | `string` | No | Custom secret of log drain |
| `source` | `any` | Yes |  |
| `sources` | `any[]` | Yes | The sources from which logs are currently being delivered to this log drain. |
| `url` | `string` | Yes | The log drain url |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `branch` | - | - | - | - |
| `clientId` | - | - | - | - |
| `configurationId` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `createdFrom` | - | Yes | Yes | - |
| `deliveryFormat` | - | Yes | Yes | - |
| `environments` | - | - | - | - |
| `headers` | - | - | - | - |
| `id` | - | - | - | - |
| `integrationConfigurationUri` | - | - | - | - |
| `integrationIcon` | - | - | - | - |
| `integrationWebsite` | - | - | - | - |
| `name` | - | Yes | Yes | - |
| `ownerId` | - | - | - | - |
| `projectId` | - | - | - | - |
| `projectIds` | - | - | - | - |
| `projectsMetadata` | - | - | - | - |
| `samplingRate` | - | - | - | - |
| `secret` | - | - | - | - |
| `source` | - | - | - | - |
| `sources` | - | Yes | Yes | - |
| `url` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogDrain().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LogDrain().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LogDrain().load({ id: 'log_drain_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LogDrain().remove({ id: 'log_drain_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogDrainEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MarketplaceEntity

```ts
const marketplace = client.Marketplace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes |  |
| `already_revoked` | `boolean` | Yes |  |
| `balances` | `any[]` | Yes |  |
| `billing` | `any` | Yes | Billing data (interim invoicing data). |
| `billingPlan` | `Record<string, any>` | Yes |  |
| `billingPlanId` | `string` | No | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `string` | No |  |
| `client_id` | `string` | No |  |
| `client_secret` | `string` | Yes |  |
| `created` | `string` | Yes | System creation date. |
| `createdAt` | `number` | No |  |
| `data` | `Record<string, any>` | Yes |  |
| `description` | `string` | No |  |
| `discounts` | `any[]` | No | Invoice discounts. |
| `email` | `string` | Yes |  |
| `eod` | `string` | Yes | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `any` | Yes |  |
| `expires_in` | `number` | Yes |  |
| `externalId` | `string` | No | Partner-supplied Invoice ID, if applicable. |
| `extras` | `Record<string, any>` | No |  |
| `final` | `boolean` | No | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `string` | No |  |
| `id` | `string` | Yes | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `string` | Yes | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `string` | Yes | Invoice date. |
| `invoiceId` | `string` | Yes | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `string` | No | User-readable invoice number. |
| `isArchived` | `boolean` | No |  |
| `items` | `any[]` | Yes | Invoice items. |
| `memo` | `string` | No | Additional memo for the invoice. |
| `metadata` | `Record<string, any>` | No | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `string` | Yes | The name of the resource as it is recorded in Vercel |
| `notification` | `Record<string, any>` | Yes | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `string` | Yes |  |
| `ownership` | `string` | No |  |
| `paidAt` | `string` | No | Moment the invoice was paid. |
| `partial` | `boolean` | No | If true, will only update the provided secrets |
| `partnerId` | `string` | Yes | The ID provided by the partner for the given resource |
| `period` | `Record<string, any>` | Yes | Subscription period for this billing cycle. |
| `productId` | `string` | Yes | The ID of the product the resource is derived from |
| `protocolSettings` | `Record<string, any>` | No | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `string` | No | The reason for refund. |
| `refundTotal` | `string` | No | Refund amount. |
| `refundedAt` | `string` | No | Most recent moment the invoice was refunded. |
| `revoked` | `boolean` | Yes |  |
| `role` | `string` | Yes | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `string` | Yes |  |
| `secrets` | `any[]` | Yes |  |
| `slug` | `string` | Yes |  |
| `state` | `string` | Yes | Invoice state. |
| `status` | `string` | No | The current status of the resource |
| `test` | `boolean` | No | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | `string` | Yes | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` | `string` | Yes |  |
| `token_type` | `string` | Yes |  |
| `total` | `string` | Yes | Invoice total amount. |
| `updated` | `string` | Yes | System update date. |
| `updatedAt` | `number` | No |  |
| `usage` | `any[]` | Yes |  |
| `userEmail` | `string` | No |  |
| `validationErrors` | `any[]` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `access_token` | - | - | - | - | - |
| `already_revoked` | - | - | - | - | - |
| `balances` | - | - | - | - | - |
| `billing` | - | - | - | - | - |
| `billingPlan` | - | - | - | - | - |
| `billingPlanId` | - | - | - | - | - |
| `category` | - | - | - | - | - |
| `client_id` | - | - | - | - | - |
| `client_secret` | - | - | - | - | - |
| `created` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `data` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `discounts` | - | - | - | - | - |
| `email` | - | - | - | - | - |
| `eod` | - | - | - | - | - |
| `event` | - | - | - | - | - |
| `expires_in` | - | - | - | - | - |
| `externalId` | - | - | - | - | - |
| `extras` | - | - | - | - | - |
| `final` | - | - | - | - | - |
| `globalUserId` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `internalId` | - | - | - | - | - |
| `invoiceDate` | - | - | - | - | - |
| `invoiceId` | - | - | Yes | - | - |
| `invoiceNumber` | - | - | - | - | - |
| `isArchived` | - | - | - | - | - |
| `items` | - | - | - | - | - |
| `memo` | - | - | - | - | - |
| `metadata` | - | - | - | - | - |
| `name` | Yes | - | - | - | - |
| `notification` | - | - | - | - | - |
| `origin` | - | - | - | - | - |
| `ownership` | - | - | - | - | - |
| `paidAt` | - | - | - | - | - |
| `partial` | - | - | - | - | - |
| `partnerId` | - | - | - | - | - |
| `period` | - | - | - | - | - |
| `productId` | - | - | - | - | - |
| `protocolSettings` | - | - | - | - | - |
| `refundReason` | - | - | - | - | - |
| `refundTotal` | - | - | - | - | - |
| `refundedAt` | - | - | - | - | - |
| `revoked` | - | - | - | - | - |
| `role` | - | - | - | - | - |
| `scope` | - | - | - | - | - |
| `secrets` | - | - | - | Yes | - |
| `slug` | - | - | - | - | - |
| `state` | - | - | - | - | - |
| `status` | - | - | - | Yes | - |
| `test` | - | - | - | - | - |
| `timestamp` | - | - | - | - | - |
| `token` | - | - | - | - | - |
| `token_type` | - | - | - | - | - |
| `total` | - | - | - | - | - |
| `updated` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `usage` | - | - | - | - | - |
| `userEmail` | - | - | - | - | - |
| `validationErrors` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Marketplace().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Marketplace().list({ installation_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Marketplace().load({ installation_id: 'installation_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Marketplace().remove({ installation_id: 'installation_id', resource_id: 'resource_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Marketplace().update({
  installation_id: 'installation_id',
  resource_id: 'resource_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MarketplaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MicrofrontendEntity

```ts
const microfrontend = client.Microfrontend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `Record<string, any>` | Yes |  |
| `accountId` | `string` | Yes |  |
| `alias` | `any[]` | Yes |  |
| `analytics` | `Record<string, any>` | Yes |  |
| `applications` | `Record<string, any>` | Yes |  |
| `appliedCve55182Migration` | `boolean` | No |  |
| `autoAssignCustomDomains` | `boolean` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `boolean` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `Record<string, any>` | No |  |
| `buildCommand` | `string` | No |  |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `concurrencyBucketName` | `string` | No |  |
| `connectBuildsEnabled` | `boolean` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `any[]` | No |  |
| `createdAt` | `number` | No |  |
| `creator` | `any` | No |  |
| `crons` | `Record<string, any>` | Yes |  |
| `customEnvironments` | `any[]` | No |  |
| `customerSupportCodeVisibility` | `boolean` | No |  |
| `dataCache` | `Record<string, any>` | Yes |  |
| `defaultResourceConfig` | `Record<string, any>` | Yes |  |
| `deploymentExpiration` | `Record<string, any>` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `Record<string, any>` | No | Project shape. |
| `devCommand` | `string` | No |  |
| `directoryListing` | `boolean` | Yes |  |
| `dismissedToasts` | `any[]` | No |  |
| `enableAffectedProjectsDeployments` | `boolean` | No |  |
| `enableExternalRewriteCaching` | `boolean` | No |  |
| `enablePreviewFeedback` | `boolean` | No |  |
| `enableProductionFeedback` | `boolean` | No |  |
| `env` | `any[]` | No |  |
| `expiration` | `any` | No |  |
| `features` | `Record<string, any>` | No |  |
| `framework` | `string` | No |  |
| `gitComments` | `Record<string, any>` | Yes |  |
| `gitForkProtection` | `boolean` | No |  |
| `gitLFS` | `boolean` | No |  |
| `gitProviderOptions` | `Record<string, any>` | Yes |  |
| `hasActiveBranches` | `boolean` | No |  |
| `hasDeployments` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No |  |
| `internalRoutes` | `any[]` | No |  |
| `ipBuckets` | `any[]` | No |  |
| `jobs` | `Record<string, any>` | No |  |
| `lastAliasRequest` | `Record<string, any>` | Yes |  |
| `lastRollbackTarget` | `Record<string, any>` | No |  |
| `latestDeployments` | `any[]` | No |  |
| `link` | `string` | No |  |
| `live` | `boolean` | No |  |
| `microfrontends` | `any` | No |  |
| `name` | `string` | Yes |  |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `Record<string, any>` | No |  |
| `options` | `Record<string, any>` | No | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `Record<string, any>` | Yes |  |
| `outputDirectory` | `string` | No |  |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `Record<string, any>` | Yes |  |
| `passwordProtection` | `Record<string, any>` | No |  |
| `paused` | `boolean` | No |  |
| `permissions` | `Record<string, any>` | No |  |
| `productionDeploymentsFastLane` | `boolean` | No |  |
| `protectedSourcemaps` | `boolean` | No |  |
| `protectionBypass` | `Record<string, any>` | No |  |
| `protectionConfig` | `Record<string, any>` | No |  |
| `resourceConfig` | `Record<string, any>` | Yes |  |
| `rollbackDescription` | `Record<string, any>` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `Record<string, any>` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No |  |
| `sandbox` | `Record<string, any>` | No |  |
| `schema` | `string` | No | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `Record<string, any>` | No |  |
| `serverlessFunctionZeroConfigFailover` | `boolean` | No |  |
| `services` | `any[]` | No |  |
| `skewProtectionAllowedDomains` | `any[]` | No |  |
| `skewProtectionBoundaryAt` | `number` | No |  |
| `skewProtectionMaxAge` | `number` | No |  |
| `skipGitConnectDuringLink` | `boolean` | No |  |
| `sourceFilesOutsideRootDirectory` | `boolean` | No |  |
| `speedInsights` | `Record<string, any>` | Yes |  |
| `ssoProtection` | `Record<string, any>` | Yes |  |
| `staticIps` | `Record<string, any>` | Yes |  |
| `targets` | `Record<string, any>` | No |  |
| `tier` | `string` | No |  |
| `tracing` | `Record<string, any>` | No |  |
| `transferCompletedAt` | `number` | No |  |
| `transferStartedAt` | `number` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `any` | No |  |
| `trustedSources` | `Record<string, any>` | No |  |
| `updatedAt` | `number` | No |  |
| `usageStatus` | `Record<string, any>` | Yes |  |
| `v0` | `boolean` | No |  |
| `v0Created` | `boolean` | No |  |
| `version` | `string` | No | The version of the microfrontends config schema. |
| `webAnalytics` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `group` | `/v1/microfrontends/group` | `client.Microfrontend().create({ $action: 'group', ... })` |
| `config` | `/v1/microfrontends/{deploymentId}/config` | `client.Microfrontend().load({ $action: 'config', ... })` |
| `group` | `/v1/microfrontends/groups` | `client.Microfrontend().load({ $action: 'group', ... })` |

An action returns that action's OWN response, which is not necessarily a
Microfrontend record — check the API definition for its shape.

```ts
const result = await client.Microfrontend().create({
  $action: 'group',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Microfrontend().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Microfrontend().list({ group_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Microfrontend().load({ project_id_or_name: 'project_id_or_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MicrofrontendEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkEntity

```ts
const network = client.Network()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsAccountId` | `string` | Yes | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | `any[]` | No | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `string` | Yes | The AWS Region in which the network exists. |
| `cidr` | `string` | Yes | The CIDR range of the Network. |
| `createdAt` | `number` | Yes | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `any[]` | No |  |
| `hostedZones` | `Record<string, any>` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `string` | Yes | The unique identifier of the Network. |
| `name` | `string` | Yes | The name of the network. |
| `peeringConnections` | `Record<string, any>` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `Record<string, any>` | Yes | Metadata about any projects associated with the Network. |
| `region` | `string` | No | The Vercel region in which the Network exists. |
| `status` | `string` | Yes | The status of the Network. |
| `teamId` | `string` | Yes | The unique identifier of the Team that owns the Network. |
| `vpcId` | `string` | No | The ID of the VPC which hosts the network. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `awsAccountId` | - | - | - | - | - |
| `awsAvailabilityZoneIds` | - | - | - | - | - |
| `awsRegion` | - | - | - | - | - |
| `cidr` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `egressIpAddresses` | - | - | - | - | - |
| `hostedZones` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `peeringConnections` | - | - | - | - | - |
| `projects` | - | - | - | - | - |
| `region` | - | - | Yes | - | - |
| `status` | - | - | - | - | - |
| `teamId` | - | - | - | - | - |
| `vpcId` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Network().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Network().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Network().load({ id: 'network_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Network().remove({ id: 'network_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Network().update({
  id: 'network_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkingEntity

```ts
const networking = client.Networking()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `builds` | `boolean` | No | Whether to use Static IPs for builds. |
| `regions` | `any[]` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Networking().remove({ endpoint_id: 'endpoint_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Networking().update({
  id_or_name: 'id_or_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkingEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservabilityEntity

```ts
const observability = client.Observability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | Yes | Whether Observability Plus should be disabled for the project |
| `disabledAt` | `number` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | No |  |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `disabled` | - | - |
| `disabledAt` | Yes | - |
| `id` | - | - |
| `name` | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Observability().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Observability().update({
  project_id_or_name: 'project_id_or_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservabilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrivateLinkEndpointEntity

```ts
const private_link_endpoint = client.PrivateLinkEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsDnsEntries` | `any[]` | No | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `string` | Yes | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `number` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `boolean` | No | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `string` | Yes | The unique identifier of the PrivateLink endpoint. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `any[]` | No | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | `string` | Yes | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | `string` | Yes | The current state of the endpoint. |
| `statusMessage` | `string` | No | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | `string` | Yes | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | `number` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
| `vercelRegion` | `string` | Yes | The Vercel region the endpoint is provisioned in. |
| `vpcEndpointId` | `string` | No | The identifier of the underlying AWS VPC endpoint. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `awsDnsEntries` | - | - | - | - |
| `awsServiceName` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `enablePrivateDns` | - | - | - | - |
| `endpointId` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `privateDnsNames` | - | - | - | - |
| `projectId` | - | - | - | - |
| `status` | - | - | - | - |
| `statusMessage` | - | - | - | - |
| `teamId` | - | - | - | - |
| `updatedAt` | - | - | - | - |
| `vercelRegion` | - | - | - | - |
| `vpcEndpointId` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PrivateLinkEndpoint().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PrivateLinkEndpoint().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PrivateLinkEndpoint().load({ id: 'private_link_endpoint_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PrivateLinkEndpoint().update({
  id: 'private_link_endpoint_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrivateLinkEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `Record<string, any>` | Yes |  |
| `acceptedPolicies` | `Record<string, any>` | No |  |
| `accountId` | `string` | Yes |  |
| `alias` | `any[]` | Yes |  |
| `analytics` | `Record<string, any>` | Yes |  |
| `apexName` | `string` | Yes |  |
| `appliedCve55182Migration` | `boolean` | No |  |
| `autoAssignCustomDomains` | `boolean` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `boolean` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `Record<string, any>` | No |  |
| `buildCommand` | `string` | No | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `comment` | `string` | No | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `string` | No |  |
| `configurationId` | `string` | No |  |
| `connectBuildsEnabled` | `boolean` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `any[]` | No | The list of connections from project environment to Secure Compute network |
| `contentHint` | `any` | No |  |
| `createdAt` | `number` | No |  |
| `createdBy` | `string` | No |  |
| `creator` | `any` | No |  |
| `crons` | `Record<string, any>` | Yes |  |
| `customEnvironmentId` | `string` | No |  |
| `customEnvironmentIds` | `any[]` | No | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `any[]` | No |  |
| `customerSupportCodeVisibility` | `boolean` | No | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `Record<string, any>` | Yes |  |
| `decrypted` | `boolean` | No |  |
| `defaultResourceConfig` | `Record<string, any>` | Yes |  |
| `deploymentExpiration` | `Record<string, any>` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `Record<string, any>` | No | Project shape. |
| `devCommand` | `string` | No | The dev command for this project. |
| `directoryListing` | `boolean` | Yes |  |
| `dismissedToasts` | `any[]` | No | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `string` | No |  |
| `edgeConfigTokenId` | `string` | No |  |
| `enableAffectedProjectsDeployments` | `boolean` | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `boolean` | No | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `boolean` | No | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `boolean` | No | Opt-in to production toolbar on the project level |
| `env` | `any[]` | No |  |
| `environmentVariables` | `any[]` | No | Collection of ENV Variables the Project will use |
| `expiration` | `any` | No |  |
| `features` | `Record<string, any>` | No |  |
| `framework` | `string` | No | The framework that is being used for this project. |
| `gitBranch` | `string` | No | Git branch to link the project domain |
| `gitComments` | `Record<string, any>` | Yes |  |
| `gitForkProtection` | `boolean` | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `boolean` | No | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `Record<string, any>` | Yes |  |
| `gitRepository` | `Record<string, any>` | Yes | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `boolean` | No |  |
| `hasDeployments` | `boolean` | No |  |
| `hostname` | `string` | Yes | The deployment hostname to scope the trace session to. |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No | The install command for this project. |
| `integrations` | `any[]` | No |  |
| `internalContentHint` | `Record<string, any>` | Yes | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `any[]` | No |  |
| `ipBuckets` | `any[]` | No |  |
| `jobs` | `Record<string, any>` | No |  |
| `key` | `string` | Yes | The name of the environment variable |
| `lastAliasRequest` | `Record<string, any>` | Yes |  |
| `lastRollbackTarget` | `Record<string, any>` | No |  |
| `latestDeployments` | `any[]` | No |  |
| `legacyValue` | `string` | No | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `string` | No |  |
| `live` | `boolean` | No |  |
| `microfrontends` | `any` | No |  |
| `name` | `string` | Yes | The desired name for the project |
| `newProjectName` | `string` | No | The desired name for the project |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `Record<string, any>` | No | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `Record<string, any>` | Yes | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | No | The output directory of the project. |
| `paidFeatures` | `Record<string, any>` | No |  |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `Record<string, any>` | Yes | Passport configuration for the project. |
| `passwordProtection` | `Record<string, any>` | No | Allows to protect project deployments with a password |
| `paused` | `boolean` | No |  |
| `permissions` | `Record<string, any>` | No |  |
| `previewDeploymentSuffix` | `string` | No | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `boolean` | No | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `boolean` | No |  |
| `projectId` | `string` | Yes | The unique target project identifier |
| `protectedSourcemaps` | `boolean` | No | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `Record<string, any>` | No |  |
| `protectionConfig` | `Record<string, any>` | No |  |
| `publicSource` | `boolean` | No | Deprecated. |
| `redirect` | `string` | No | Target destination domain for redirect |
| `redirectStatusCode` | `number` | No | Status code for domain redirect |
| `resourceConfig` | `Record<string, any>` | Yes | Specifies resource override configuration for the project |
| `rollbackDescription` | `Record<string, any>` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `Record<string, any>` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `Record<string, any>` | No | Specifies the default region and failover regions for sandboxes created in the project |
| `security` | `Record<string, any>` | No |  |
| `serverlessFunctionRegion` | `string` | No | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `boolean` | No | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `any[]` | No |  |
| `skewProtectionAllowedDomains` | `any[]` | No | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `number` | No | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `number` | No | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `boolean` | No | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `boolean` | No | Indicates if there are source files outside of the root directory |
| `speedInsights` | `Record<string, any>` | Yes |  |
| `ssoProtection` | `Record<string, any>` | Yes | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `Record<string, any>` | Yes | Manage Static IPs for this project |
| `sunsetSecretId` | `string` | No | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `any` | No | The target environment of the environment variable |
| `targets` | `Record<string, any>` | No |  |
| `tier` | `string` | No |  |
| `token` | `string` | Yes |  |
| `tracing` | `Record<string, any>` | No | Tracing configuration for this project |
| `transferCompletedAt` | `number` | No |  |
| `transferStartedAt` | `number` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `any` | No | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `Record<string, any>` | No | Deployment Protection Trusted Sources |
| `type` | `string` | Yes | The type of environment variable |
| `updatedAt` | `number` | No |  |
| `updatedBy` | `string` | No |  |
| `usageStatus` | `Record<string, any>` | Yes |  |
| `v0` | `boolean` | No |  |
| `v0Created` | `boolean` | No |  |
| `value` | `string` | Yes | The value of the environment variable |
| `verification` | `any[]` | No | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `boolean` | Yes | `true` if the domain is verified for use with the project. |
| `visibility` | `string` | No | User-facing config/secret model. |
| `webAnalytics` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `abuse` | - | - | - | - |
| `acceptedPolicies` | - | - | - | - |
| `accountId` | - | - | - | - |
| `alias` | - | - | - | - |
| `analytics` | - | - | - | - |
| `apexName` | - | - | - | - |
| `appliedCve55182Migration` | - | - | - | - |
| `autoAssignCustomDomains` | - | - | - | - |
| `autoAssignCustomDomainsUpdatedBy` | - | - | - | - |
| `autoExposeSystemEnvs` | - | - | - | - |
| `avatar` | - | - | - | - |
| `blobs` | - | - | - | - |
| `buildCommand` | - | - | - | - |
| `commandForIgnoringBuildStep` | - | - | - | - |
| `comment` | - | - | - | - |
| `concurrencyBucketName` | - | - | - | - |
| `configurationId` | - | - | - | - |
| `connectBuildsEnabled` | - | - | - | - |
| `connectConfigurationId` | - | - | - | - |
| `connectConfigurations` | - | - | - | - |
| `contentHint` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `createdBy` | - | - | - | - |
| `creator` | - | - | - | - |
| `crons` | - | - | - | - |
| `customEnvironmentId` | - | - | - | - |
| `customEnvironmentIds` | - | - | - | - |
| `customEnvironments` | - | - | - | - |
| `customerSupportCodeVisibility` | - | - | - | - |
| `dataCache` | - | - | - | - |
| `decrypted` | - | - | - | - |
| `defaultResourceConfig` | - | - | - | - |
| `deploymentExpiration` | - | - | - | - |
| `deploymentPolicy` | - | - | - | - |
| `devCommand` | - | - | - | - |
| `directoryListing` | - | - | - | - |
| `dismissedToasts` | - | - | - | - |
| `edgeConfigId` | - | - | - | - |
| `edgeConfigTokenId` | - | - | - | - |
| `enableAffectedProjectsDeployments` | - | - | - | - |
| `enableExternalRewriteCaching` | - | - | - | - |
| `enablePreviewFeedback` | - | - | - | - |
| `enableProductionFeedback` | - | - | - | - |
| `env` | - | - | - | - |
| `environmentVariables` | - | - | - | - |
| `expiration` | - | - | - | - |
| `features` | - | - | - | - |
| `framework` | - | - | - | - |
| `gitBranch` | - | - | - | - |
| `gitComments` | - | - | - | - |
| `gitForkProtection` | - | - | - | - |
| `gitLFS` | - | - | - | - |
| `gitProviderOptions` | - | - | - | - |
| `gitRepository` | - | - | - | - |
| `hasActiveBranches` | - | - | - | - |
| `hasDeployments` | - | - | - | - |
| `hostname` | - | - | - | - |
| `id` | - | - | - | - |
| `installCommand` | - | - | - | - |
| `integrations` | - | - | - | - |
| `internalContentHint` | - | - | - | - |
| `internalRoutes` | - | - | - | - |
| `ipBuckets` | - | - | - | - |
| `jobs` | - | - | - | - |
| `key` | - | - | - | - |
| `lastAliasRequest` | - | - | - | - |
| `lastRollbackTarget` | - | - | - | - |
| `latestDeployments` | - | - | - | - |
| `legacyValue` | - | - | - | - |
| `link` | - | - | - | - |
| `live` | - | - | - | - |
| `microfrontends` | - | - | - | - |
| `name` | - | - | - | - |
| `newProjectName` | - | - | - | - |
| `nodeVersion` | - | - | - | - |
| `oidcTokenConfig` | - | - | - | - |
| `optionsAllowlist` | - | - | - | - |
| `outputDirectory` | - | - | - | - |
| `paidFeatures` | - | - | - | - |
| `passiveConnectConfigurationId` | - | - | - | - |
| `passport` | - | - | - | - |
| `passwordProtection` | - | - | - | - |
| `paused` | - | - | - | - |
| `permissions` | - | - | - | - |
| `previewDeploymentSuffix` | - | - | - | - |
| `previewDeploymentsDisabled` | - | - | - | - |
| `productionDeploymentsFastLane` | - | - | - | - |
| `projectId` | - | - | - | - |
| `protectedSourcemaps` | - | - | - | - |
| `protectionBypass` | - | - | - | - |
| `protectionConfig` | - | - | - | - |
| `publicSource` | - | - | - | - |
| `redirect` | - | - | - | - |
| `redirectStatusCode` | - | - | - | - |
| `resourceConfig` | - | Yes | - | - |
| `rollbackDescription` | - | - | - | - |
| `rollingRelease` | - | - | - | - |
| `rootDirectory` | - | - | - | - |
| `sandbox` | - | - | - | - |
| `security` | - | - | - | - |
| `serverlessFunctionRegion` | - | - | - | - |
| `serverlessFunctionZeroConfigFailover` | - | - | - | - |
| `services` | - | - | - | - |
| `skewProtectionAllowedDomains` | - | - | - | - |
| `skewProtectionBoundaryAt` | - | - | - | - |
| `skewProtectionMaxAge` | - | - | - | - |
| `skipGitConnectDuringLink` | - | - | - | - |
| `sourceFilesOutsideRootDirectory` | - | - | - | - |
| `speedInsights` | - | - | - | - |
| `ssoProtection` | - | - | - | - |
| `staticIps` | - | - | - | - |
| `sunsetSecretId` | - | - | - | - |
| `target` | - | - | - | - |
| `targets` | - | - | - | - |
| `tier` | - | - | - | - |
| `token` | - | - | - | - |
| `tracing` | - | - | - | - |
| `transferCompletedAt` | - | - | - | - |
| `transferStartedAt` | - | - | - | - |
| `transferToAccountId` | - | - | - | - |
| `transferredFromAccountId` | - | - | - | - |
| `trustedIps` | - | - | - | - |
| `trustedSources` | - | - | - | - |
| `type` | - | - | - | - |
| `updatedAt` | - | - | - | - |
| `updatedBy` | - | - | - | - |
| `usageStatus` | - | - | - | - |
| `v0` | - | - | - | - |
| `v0Created` | - | - | - | - |
| `value` | - | - | - | - |
| `verification` | - | - | - | - |
| `verified` | - | - | - | - |
| `visibility` | - | - | - | - |
| `webAnalytics` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `avatar` | `/v1/projects/{idOrName}/avatar` | `client.Project().create({ $action: 'avatar', ... })` |
| `domain` | `/v10/projects/{idOrName}/domains` | `client.Project().create({ $action: 'domain', ... })` |
| `env` | `/v10/projects/{idOrName}/env` | `client.Project().create({ $action: 'env', ... })` |
| `pause` | `/v1/projects/{projectId}/pause` | `client.Project().create({ $action: 'pause', ... })` |
| `token` | `/v1/projects/{idOrName}/token` | `client.Project().create({ $action: 'token', ... })` |
| `transfer_request` | `/projects/{idOrName}/transfer-request` | `client.Project().create({ $action: 'transfer_request', ... })` |
| `unpause` | `/v1/projects/{projectId}/unpause` | `client.Project().create({ $action: 'unpause', ... })` |
| `verify` | `/v9/projects/{idOrName}/domains/{domain}/verify` | `client.Project().create({ $action: 'verify', ... })` |
| `domain` | `/v9/projects/{idOrName}/domains` | `client.Project().load({ $action: 'domain', ... })` |
| `env` | `/v10/projects/{idOrName}/env` | `client.Project().load({ $action: 'env', ... })` |
| `promote_alias` | `/v1/projects/{projectId}/promote/aliases` | `client.Project().load({ $action: 'promote_alias', ... })` |
| `trace` | `/v1/projects/traces` | `client.Project().load({ $action: 'trace', ... })` |
| `microfrontend` | `/v1/projects/{projectId}/microfrontends` | `client.Project().patch({ $action: 'microfrontend', ... })` |
| `protection_bypass` | `/v1/projects/{idOrName}/protection-bypass` | `client.Project().patch({ $action: 'protection_bypass', ... })` |
| `update_description` | `/v1/projects/{projectId}/rollback/{deploymentId}/update-description` | `client.Project().patch({ $action: 'update_description', ... })` |
| `env` | `/v1/projects/{idOrName}/env` | `client.Project().remove({ $action: 'env', ... })` |

An action returns that action's OWN response, which is not necessarily a
Project record — check the API definition for its shape.

```ts
const result = await client.Project().create({
  $action: 'avatar',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Project().load({ id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 'project_id',
  code: 'code',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectMemberEntity

```ts
const project_member = client.ProjectMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No | The email of the team member that should be added to this project. |
| `id` | `string` | Yes |  |
| `role` | `string` | Yes | The project role of the member that will be added. |
| `uid` | `string` | No | The ID of the team member that should be added to this project. |
| `username` | `string` | No | The username of the team member that should be added to this project. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectMember().create({
  id_or_name: 'example_id_or_name',
  id: 'example_id',
  role: 'example_role',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectMember().load({ id_or_name: 'id_or_name' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectMember().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectRouteEntity

```ts
const project_route = client.ProjectRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actions` | `any[]` | Yes |  |
| `alias` | `string` | No | The staging alias for previewing this version. |
| `conditions` | `any[]` | No |  |
| `createdBy` | `string` | Yes | The user who created this version. |
| `currentRoute` | `Record<string, any>` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the version. |
| `isLive` | `boolean` | No | Whether this version is currently live in production. |
| `isStaging` | `boolean` | No | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `number` | Yes | Timestamp of when this version was last modified. |
| `name` | `string` | Yes |  |
| `overwrite` | `boolean` | No |  |
| `pathCondition` | `Record<string, any>` | Yes |  |
| `position` | `Record<string, any>` | No | Controls where the route is inserted. |
| `prompt` | `string` | Yes |  |
| `restore` | `boolean` | No | If true, restores the staged route to the value in the production version. |
| `route` | `Record<string, any>` | Yes | The full route object to replace the existing route with |
| `routes` | `any[]` | No |  |
| `ruleCount` | `number` | No | The number of routing rules in this version. |
| `s3Key` | `string` | Yes | The S3 key where the routing rules are stored. |
| `version` | `Record<string, any>` | Yes | A version of routing rules stored in S3. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectRoute().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectRoute().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectRoute().load({ id: 'project_route_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectRoute().remove({ id: 'project_route_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectRoute().update({
  id: 'project_route_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectRouteEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QueryEntity

```ts
const query = client.Query()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregation` | `string` | No | Aggregation function to apply. |
| `bucketTimezone` | `string` | No | IANA timezone (e.g. |
| `endTime` | `string` | No | End timestamp |
| `filter` | `string` | No | Filter to apply to the query. |
| `granularity` | `Record<string, any>` | No | Time bucket size |
| `groupBy` | `any[]` | No | Dimensions to group results by. |
| `limit` | `number` | No | Maximum number of results |
| `metric` | `string` | Yes | Metric id |
| `orderBy` | `string` | No | Rollup column to order grouped results by. |
| `orderDirection` | `string` | No | Direction to order grouped results by. |
| `scope` | `Record<string, any>` | Yes | Owner or project scope for the query |
| `startTime` | `string` | No | Start timestamp |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Query().create({
  metric: 'example_metric',
  scope: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RecordEntity

```ts
const record = client.Record()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No |  |
| `createdAt` | `number` | No |  |
| `creator` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `recordType` | `string` | Yes |  |
| `ttl` | `number` | No |  |
| `type` | `string` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Record().load({ id: 'record_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecordEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RollingReleaseEntity

```ts
const rolling_release = client.RollingRelease()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeStage` | `Record<string, any>` | Yes | The currently active stage, null if the rollout is aborted |
| `advancementType` | `string` | Yes | The advancement type of the rolling release |
| `canaryDeployment` | `Record<string, any>` | Yes | The canary deployment being rolled out |
| `currentCanaryPercentage` | `number` | No | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `Record<string, any>` | Yes | The current deployment receiving production traffic |
| `nextStage` | `Record<string, any>` | Yes | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `string` | Yes | The ID of a deployment queued for the next rolling release |
| `stages` | `any[]` | Yes | All stages configured for this rolling release |
| `startedAt` | `number` | Yes | Unix timestamp in milliseconds when the rolling release started |
| `state` | `string` | Yes | The current state of the rolling release |
| `substate` | `string` | Yes | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `number` | Yes | Unix timestamp in milliseconds when the rolling release was last updated |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `approve_stage` | `/v1/projects/{idOrName}/rolling-release/approve-stage` | `client.RollingRelease().create({ $action: 'approve_stage', ... })` |
| `complete` | `/v1/projects/{idOrName}/rolling-release/complete` | `client.RollingRelease().create({ $action: 'complete', ... })` |
| `start` | `/v1/projects/{idOrName}/rolling-release/start` | `client.RollingRelease().create({ $action: 'start', ... })` |
| `billing` | `/v1/projects/{idOrName}/rolling-release/billing` | `client.RollingRelease().load({ $action: 'billing', ... })` |
| `config` | `/v1/projects/{idOrName}/rolling-release/config` | `client.RollingRelease().load({ $action: 'config', ... })` |
| `config` | `/v1/projects/{idOrName}/rolling-release/config` | `client.RollingRelease().remove({ $action: 'config', ... })` |
| `config` | `/v1/projects/{idOrName}/rolling-release/config` | `client.RollingRelease().update({ $action: 'config', ... })` |

An action returns that action's OWN response, which is not necessarily a
RollingRelease record — check the API definition for its shape.

```ts
const result = await client.RollingRelease().create({
  $action: 'approve_stage',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RollingRelease().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RollingRelease().load({ id_or_name: 'id_or_name' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RollingRelease().remove({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RollingRelease().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RollingReleaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SandboxEntity

```ts
const sandbox = client.Sandbox()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `args` | `any[]` | Yes | The arguments of the command. |
| `command` | `string` | Yes | The executable or shell command to run. |
| `createdAt` | `number` | Yes | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `string` | No | The method used to create the snapshot. |
| `currentSandboxName` | `string` | No | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `string` | No | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `string` | No | The snapshot ID to set as the current snapshot. |
| `cwd` | `string` | Yes | The current working directory of the command. |
| `durationMs` | `number` | No | Duration of the command execution in milliseconds. |
| `env` | `Record<string, any>` | No | Additional environment variables to set for this command. |
| `exitCode` | `number` | Yes | If the command did finish, the exit code. |
| `expiration` | `any` | No | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `number` | No | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `any[]` | No | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `string` | Yes | The ID of the command. |
| `image` | `string` | No | Image to use for the sandbox. |
| `keepLastSnapshots` | `Record<string, any>` | Yes | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `number` | Yes | The last time the snapshot was used (e.g. |
| `logs` | `boolean` | No | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `number` | Yes | The maximum drive size in bytes. |
| `memory` | `number` | No | Memory allocated in MB. |
| `mounts` | `Record<string, any>` | No | List of drives to mount to the sandbox at the provided path. |
| `name` | `string` | Yes | The name of the command. |
| `networkId` | `string` | No | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `any` | No | Network policy configuration. |
| `parentId` | `string` | No | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `string` | Yes | The path of the directory to create. |
| `persistent` | `boolean` | No | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `any[]` | No | List of ports to expose from the sandbox. |
| `projectId` | `string` | Yes | The project that owns the drive. |
| `recursive` | `boolean` | No | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `string` | No | The region where the snapshot is stored. |
| `regions` | `any[]` | No | The regions where the snapshot is available. |
| `resources` | `Record<string, any>` | No | Resources to define the VM |
| `resumed` | `boolean` | Yes |  |
| `routes` | `any[]` | Yes |  |
| `runtime` | `string` | No | The runtime environment for the sandbox. |
| `sandbox` | `Record<string, any>` | Yes | This object contains information related to a Vercel NamedSandbox. |
| `session` | `Record<string, any>` | Yes | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `string` | Yes | The ID of the session associated with the command. |
| `sizeBytes` | `number` | Yes | The size of the snapshot in bytes. |
| `snapshotExpiration` | `any` | No | Default snapshot expiration time in milliseconds. |
| `source` | `any` | No | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `string` | Yes | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `number` | Yes | When the command was started, in milliseconds since the epoch. |
| `status` | `string` | Yes | The status of the snapshot. |
| `statusUpdatedAt` | `number` | Yes | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `boolean` | No | Execute the command with root (superuser) privileges. |
| `tags` | `Record<string, any>` | No | Key-value tags to associate with the sandbox. |
| `timeout` | `number` | No | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `totalActiveCpuDurationMs` | `number` | No | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `totalDurationMs` | `number` | No | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `totalEgressBytes` | `number` | No | Cumulative egress bytes across all sandbox runs. |
| `totalIngressBytes` | `number` | No | Cumulative ingress bytes across all sandbox runs. |
| `updatedAt` | `number` | Yes | The last time the snapshot was updated, in milliseconds since the epoch. |
| `vcpus` | `number` | No | Number of virtual CPUs allocated. |
| `wait` | `boolean` | No | If true, returns an ND-JSON stream that emits the command status when started and again when finished. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `args` | - | - | Yes | - | - |
| `command` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `creationMethod` | - | - | - | - | - |
| `currentSandboxName` | - | - | - | - | - |
| `currentSessionId` | - | Yes | - | - | - |
| `currentSnapshotId` | - | - | - | - | - |
| `cwd` | - | Yes | Yes | - | - |
| `durationMs` | - | - | - | - | - |
| `env` | - | - | - | - | - |
| `exitCode` | - | - | - | - | - |
| `expiration` | - | - | - | - | - |
| `expiresAt` | - | - | - | - | - |
| `failoverRegions` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `image` | - | - | - | - | - |
| `keepLastSnapshots` | - | - | Yes | Yes | - |
| `lastUsedAt` | - | - | - | - | - |
| `logs` | - | - | - | - | - |
| `maxSizeBytes` | - | - | Yes | - | - |
| `memory` | - | - | - | - | - |
| `mounts` | - | - | - | - | - |
| `name` | - | - | Yes | - | - |
| `networkId` | - | - | - | - | - |
| `networkPolicy` | - | Yes | - | - | - |
| `parentId` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `persistent` | - | Yes | - | - | - |
| `ports` | - | - | - | - | - |
| `projectId` | - | - | Yes | - | - |
| `recursive` | - | - | - | - | - |
| `region` | - | - | Yes | - | - |
| `regions` | - | - | - | - | - |
| `resources` | - | - | - | - | - |
| `resumed` | - | - | - | - | - |
| `routes` | - | - | - | - | - |
| `runtime` | - | - | - | - | - |
| `sandbox` | - | - | - | - | - |
| `session` | - | - | - | - | - |
| `sessionId` | - | - | - | - | - |
| `sizeBytes` | - | - | - | - | - |
| `snapshotExpiration` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `sourceSessionId` | - | - | - | - | - |
| `startedAt` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `statusUpdatedAt` | - | - | - | - | - |
| `sudo` | - | - | - | - | - |
| `tags` | - | - | - | - | - |
| `timeout` | - | - | - | - | - |
| `totalActiveCpuDurationMs` | - | - | - | - | - |
| `totalDurationMs` | - | - | - | - | - |
| `totalEgressBytes` | - | - | - | - | - |
| `totalIngressBytes` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `vcpus` | - | - | - | - | - |
| `wait` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `extend_timeout` | `/v2/sandboxes/sessions/{sessionId}/extend-timeout` | `client.Sandbox().create({ $action: 'extend_timeout', ... })` |
| `fork` | `/v2/sandboxes/{name}/fork` | `client.Sandbox().create({ $action: 'fork', ... })` |
| `fork` | `/v3/sandboxes/{name}/fork` | `client.Sandbox().create({ $action: 'fork', ... })` |
| `kill` | `/v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}/kill` | `client.Sandbox().create({ $action: 'kill', ... })` |
| `network_policy` | `/v2/sandboxes/sessions/{sessionId}/network-policy` | `client.Sandbox().create({ $action: 'network_policy', ... })` |
| `snapshot` | `/v2/sandboxes/sessions/{sessionId}/snapshot` | `client.Sandbox().create({ $action: 'snapshot', ... })` |
| `stop` | `/v2/sandboxes/sessions/{sessionId}/stop` | `client.Sandbox().create({ $action: 'stop', ... })` |
| `drif` | `/v2/sandboxes/drives` | `client.Sandbox().list({ $action: 'drif', ... })` |
| `session` | `/v2/sandboxes/sessions` | `client.Sandbox().load({ $action: 'session', ... })` |
| `snapshot` | `/v2/sandboxes/snapshots` | `client.Sandbox().load({ $action: 'snapshot', ... })` |

An action returns that action's OWN response, which is not necessarily a
Sandbox record — check the API definition for its shape.

```ts
const result = await client.Sandbox().create({
  $action: 'extend_timeout',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Sandbox().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Sandbox().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Sandbox().load({ id: 'sandbox_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Sandbox().remove({ id: 'sandbox_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Sandbox().update({
  id: 'sandbox_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SandboxEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SchemaEntity

```ts
const schema = client.Schema()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregations` | `any[]` | Yes |  |
| `defaultAggregation` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dimensions` | `any[]` | Yes |  |
| `id` | `string` | Yes |  |
| `unit` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Schema().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Schema().load({ id: 'schema_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SchemaEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecurityEntity

```ts
const security = client.Security()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Action` | `string` | No |  |
| `ActorId` | `string` | No |  |
| `CreatedAt` | `string` | Yes |  |
| `DeletedAt` | `string` | No |  |
| `Domain` | `string` | Yes |  |
| `ExpiresAt` | `number` | No |  |
| `Id` | `string` | Yes |  |
| `Ip` | `string` | Yes |  |
| `IsProjectRule` | `boolean` | No |  |
| `Note` | `string` | No |  |
| `OwnerId` | `string` | Yes |  |
| `ProjectId` | `string` | No |  |
| `UpdatedAt` | `string` | Yes |  |
| `UpdatedAtHour` | `string` | Yes |  |
| `action` | `Record<string, any>` | Yes |  |
| `action_type` | `string` | Yes |  |
| `active` | `boolean` | Yes |  |
| `allSources` | `boolean` | No |  |
| `botIdEnabled` | `boolean` | No |  |
| `changes` | `any[]` | Yes |  |
| `conditionGroup` | `any[]` | Yes |  |
| `conditions` | `any[]` | No |  |
| `count` | `number` | Yes |  |
| `crs` | `Record<string, any>` | Yes | Custom Ruleset |
| `description` | `string` | No |  |
| `domain` | `string` | No |  |
| `endTime` | `string` | Yes |  |
| `firewallEnabled` | `boolean` | Yes |  |
| `host` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ips` | `any[]` | Yes |  |
| `isActive` | `boolean` | Yes |  |
| `logHeaders` | `any` | No |  |
| `managedRules` | `Record<string, any>` | No |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `ownerId` | `string` | Yes |  |
| `projectKey` | `string` | Yes |  |
| `projectScope` | `boolean` | No | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `ruleName` | `string` | Yes |  |
| `rules` | `any[]` | Yes |  |
| `rulesets` | `any` | No |  |
| `sourceIp` | `string` | No |  |
| `startTime` | `string` | Yes |  |
| `ttl` | `number` | No | Time to live in milliseconds |
| `updatedAt` | `string` | Yes |  |
| `version` | `number` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `Action` | - | - | - | - | - |
| `ActorId` | - | - | - | - | - |
| `CreatedAt` | - | - | - | - | - |
| `DeletedAt` | - | - | - | - | - |
| `Domain` | - | - | - | - | - |
| `ExpiresAt` | - | - | - | - | - |
| `Id` | - | - | - | - | - |
| `Ip` | - | - | - | - | - |
| `IsProjectRule` | - | - | - | - | - |
| `Note` | - | - | - | - | - |
| `OwnerId` | - | - | - | - | - |
| `ProjectId` | - | - | - | - | - |
| `UpdatedAt` | - | - | - | - | - |
| `UpdatedAtHour` | - | - | - | - | - |
| `action` | - | - | - | - | - |
| `action_type` | - | - | - | - | - |
| `active` | - | - | - | - | - |
| `allSources` | - | - | - | - | - |
| `botIdEnabled` | - | - | - | - | - |
| `changes` | - | - | - | - | - |
| `conditionGroup` | - | - | - | - | - |
| `conditions` | - | - | - | - | - |
| `count` | - | - | - | - | - |
| `crs` | - | - | - | Yes | - |
| `description` | - | - | - | - | - |
| `domain` | - | - | - | - | - |
| `endTime` | - | - | - | - | - |
| `firewallEnabled` | - | - | - | - | - |
| `host` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `ips` | - | - | - | Yes | - |
| `isActive` | - | - | - | - | - |
| `logHeaders` | - | - | - | - | - |
| `managedRules` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `note` | - | - | - | - | - |
| `ownerId` | - | - | - | - | - |
| `projectKey` | - | - | - | - | - |
| `projectScope` | - | - | - | - | - |
| `public_ip` | - | - | - | - | - |
| `ruleId` | - | - | - | - | - |
| `ruleName` | - | - | - | - | - |
| `rules` | - | - | - | Yes | - |
| `rulesets` | - | - | - | - | - |
| `sourceIp` | - | - | - | - | - |
| `startTime` | - | - | - | - | - |
| `ttl` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `version` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `activate` | `/v1/security/firewall/config/{configVersion}/activate` | `client.Security().create({ $action: 'activate', ... })` |
| `attack_mode` | `/v1/security/attack-mode` | `client.Security().create({ $action: 'attack_mode', ... })` |

An action returns that action's OWN response, which is not necessarily a
Security record — check the API definition for its shape.

```ts
const result = await client.Security().create({
  $action: 'activate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Security().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Security().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Security().load({ project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Security().remove({ config_version: 'config_version' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Security().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecurityEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SegmentEntity

```ts
const segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | No |  |
| `data` | `Record<string, any>` | Yes |  |
| `description` | `string` | No |  |
| `hint` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `projectId` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `usedByFlags` | `any[]` | No |  |
| `usedBySegments` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Segment().load({ id: 'segment_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StorageEntity

```ts
const storage = client.Storage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `count` | `number` | Yes |  |
| `id` | `string` | No |  |
| `isTokenExpired` | `boolean` | Yes |  |
| `kind` | `string` | No | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` | `string` | Yes |  |
| `projectFilter` | `Record<string, any>` | No |  |
| `projectId` | `string` | No | The project this store is scoped to. |
| `projectsMetadata` | `any[]` | Yes |  |
| `region` | `string` | Yes |  |
| `size` | `number` | Yes |  |
| `status` | `string` | Yes |  |
| `totalConnectedProjects` | `number` | No |  |
| `usageQuotaExceeded` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | create | remove |
| --- | --- | --- | --- |
| `access` | - | - | - |
| `count` | - | - | - |
| `id` | - | - | - |
| `isTokenExpired` | - | - | - |
| `kind` | - | - | - |
| `name` | - | - | - |
| `projectFilter` | - | - | - |
| `projectId` | - | - | - |
| `projectsMetadata` | - | - | - |
| `region` | - | Yes | - |
| `size` | - | - | - |
| `status` | - | - | - |
| `totalConnectedProjects` | - | - | - |
| `usageQuotaExceeded` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Storage().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Storage().load({ id: 'storage_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Storage().remove({ id: 'storage_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StorageEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessRequestedAt` | `number` | Yes | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `number` | No | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `number` | No | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `Record<string, any>` | No | Attribution information for the session or current page |
| `avatar` | `string` | Yes | The ID of the file used as avatar for this Team. |
| `billing` | `Record<string, any>` | Yes | The team's billing plan. |
| `bitbucket` | `Record<string, any>` | Yes | Map of the connected Bitbucket account. |
| `confirmed` | `boolean` | Yes | Current status of the membership. |
| `connect` | `Record<string, any>` | No |  |
| `createdAt` | `number` | Yes | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `string` | Yes | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `Record<string, any>` | No | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `Record<string, any>` | No | Default deployment expiration settings for this team |
| `defaultPassport` | `Record<string, any>` | Yes | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `Record<string, any>` | No | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `Record<string, any>` | No | Default roles for the team. |
| `deploymentPolicy` | `Record<string, any>` | No | Composable deployment-time policy for the team. |
| `description` | `string` | Yes | A short description of the Team. |
| `disableHardAutoBlocks` | `any` | No |  |
| `disableRepositoryDispatchEvents` | `boolean` | No | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | `string` | No | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | `string` | No | Controls who can request access to protected deployments. |
| `emailDomain` | `string` | No | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | `boolean` | No | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | `string` | No | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | `string` | No | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | `string` | No | The new fallback environment for the microfrontends group. |
| `github` | `Record<string, any>` | Yes | Map of the connected GitHub account. |
| `gitlab` | `Record<string, any>` | Yes | Map of the connected GitLab account. |
| `hideIpAddresses` | `boolean` | No | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `boolean` | No | Indicates if IP addresses should be accessible in log drains |
| `id` | `string` | Yes | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `number` | No | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `string` | No | Code that can be used to join this Team. |
| `ipBuckets` | `any[]` | No |  |
| `joinedFrom` | `Record<string, any>` | Yes | A map that describes the origin from where the user joined. |
| `membership` | `Record<string, any>` | Yes | The membership of the authenticated User in relation to the Team. |
| `name` | `string` | Yes | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `Record<string, any>` | Yes | NSNB configuration for the team. |
| `orgRootTeamId` | `string` | No | Best-effort ID of the organization’s root billing team. |
| `pagination` | `Record<string, any>` | Yes | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `string` | No | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `number` | No | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `boolean` | No | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `string` | No | The hostname that is current set as preview deployment suffix. |
| `projects` | `any[]` | No |  |
| `regenerateInviteCode` | `boolean` | No | Create a new invite code and replace the current one. |
| `remoteCaching` | `Record<string, any>` | No | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `boolean` | No | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `Record<string, any>` | No | Resource configuration for the team. |
| `role` | `string` | No | The role in the team of the member. |
| `saml` | `Record<string, any>` | Yes | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `string` | No | Sensitive environment variable policy for this team |
| `slug` | `string` | Yes | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `string` | Yes | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `Record<string, any>` | Yes | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `Record<string, any>` | Yes | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `Record<string, any>` | Yes | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `Record<string, any>` | Yes | When enabled, creating shareable links requires Owner role. |
| `teamName` | `string` | Yes | The name of the team. |
| `teamPermissions` | `any[]` | No | The team permissions to set for the member. |
| `teamSlug` | `string` | Yes | The slug of the team. |
| `teams` | `any[]` | Yes |  |
| `updatedAt` | `number` | Yes | Timestamp (in milliseconds) of when the Team was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `accessRequestedAt` | - | - | - | - | - |
| `apiKeysInvalidatedAt` | - | - | - | - | - |
| `appTokensInvalidatedAt` | - | - | - | - | - |
| `attribution` | - | - | - | - | - |
| `avatar` | - | - | - | Yes | - |
| `billing` | - | - | - | - | - |
| `bitbucket` | - | - | - | - | - |
| `confirmed` | - | - | - | Yes | - |
| `connect` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `creatorId` | - | - | - | - | - |
| `defaultDeploymentProtection` | - | - | - | - | - |
| `defaultExpirationSettings` | - | - | - | - | - |
| `defaultPassport` | - | - | - | - | - |
| `defaultProjectJobs` | - | - | - | - | - |
| `defaultRoles` | - | - | - | - | - |
| `deploymentPolicy` | - | - | - | - | - |
| `description` | - | - | - | Yes | - |
| `disableHardAutoBlocks` | - | - | - | - | - |
| `disableRepositoryDispatchEvents` | - | - | - | - | - |
| `disjunctiveProductionSecretPolicy` | - | - | - | - | - |
| `dpAccessRequestsMode` | - | - | - | - | - |
| `emailDomain` | - | - | - | - | - |
| `enablePolyrepoBranchRouting` | - | - | - | - | - |
| `enablePreviewFeedback` | - | - | - | - | - |
| `enableProductionFeedback` | - | - | - | - | - |
| `fallbackEnvironment` | - | - | - | - | - |
| `github` | - | - | - | - | - |
| `gitlab` | - | - | - | - | - |
| `hideIpAddresses` | - | - | - | - | - |
| `hideIpAddressesInLogDrains` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `integrationTokensInvalidatedAt` | - | - | - | - | - |
| `inviteCode` | - | - | - | - | - |
| `ipBuckets` | - | - | - | - | - |
| `joinedFrom` | - | - | - | Yes | - |
| `membership` | - | - | - | - | - |
| `name` | - | - | Yes | Yes | - |
| `nsnbConfig` | - | - | - | Yes | - |
| `orgRootTeamId` | - | - | - | - | - |
| `pagination` | - | - | - | - | - |
| `parentId` | - | - | - | - | - |
| `personalAccessTokensInvalidatedAt` | - | - | - | - | - |
| `platform` | - | - | - | - | - |
| `previewDeploymentSuffix` | - | - | - | - | - |
| `projects` | - | - | - | - | - |
| `regenerateInviteCode` | - | - | - | - | - |
| `remoteCaching` | - | - | - | - | - |
| `requireVerifiedCommits` | - | - | - | - | - |
| `resourceConfig` | - | - | - | - | - |
| `role` | - | - | - | - | - |
| `saml` | - | - | - | Yes | - |
| `sensitiveEnvironmentVariablePolicy` | - | - | - | - | - |
| `slug` | - | - | - | Yes | - |
| `stagingPrefix` | - | - | - | - | - |
| `strictConnectors` | - | - | - | - | - |
| `strictDeploymentProtectionSettings` | - | - | - | - | - |
| `strictPasswordProtectionSettings` | - | - | - | - | - |
| `strictShareableLinks` | - | - | - | - | - |
| `teamName` | - | - | - | - | - |
| `teamPermissions` | - | - | - | - | - |
| `teamSlug` | - | - | - | - | - |
| `teams` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `dsync_role` | `/v1/teams/{teamId}/dsync-roles` | `client.Team().create({ $action: 'dsync_role', ... })` |
| `join` | `/v1/teams/{teamId}/members/teams/join` | `client.Team().create({ $action: 'join', ... })` |
| `member` | `/v2/teams/{teamId}/members` | `client.Team().create({ $action: 'member', ... })` |
| `request` | `/v1/teams/{teamId}/request` | `client.Team().create({ $action: 'request', ... })` |
| `member` | `/v3/teams/{teamId}/members` | `client.Team().list({ $action: 'member', ... })` |

An action returns that action's OWN response, which is not necessarily a
Team record — check the API definition for its shape.

```ts
const result = await client.Team().create({
  $action: 'dsync_role',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Team().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Team().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Team().load({ id: 'team_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Team().remove({ id: 'team_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Team().update({
  id: 'team_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TldNameEntity

```ts
const tld_name = client.TldName()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TldName().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TldNameEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ToggleEntity

```ts
const toggle = client.Toggle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Toggle().create({
  project_id: 'example_project_id',
  value: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ToggleEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `any[]` | No | The categories that group this event with related event types. |
| `createdAt` | `number` | Yes | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `any[]` | Yes | A list of "entities" within the event `text`. |
| `id` | `string` | Yes | The unique identifier of the Event. |
| `payload` | `any` | No |  |
| `principal` | `any` | No |  |
| `principalId` | `string` | Yes | The ID of the principal who generated the event. |
| `requestId` | `string` | No |  |
| `sessionId` | `string` | No | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `string` | Yes | The human-readable text of the Event. |
| `tokenId` | `string` | No | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `string` | No | The type of the event. |
| `user` | `Record<string, any>` | Yes | Metadata for {@link userId}. |
| `userId` | `string` | No | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `any[]` | No | Metadata for {@link viaIds}. |
| `viaIds` | `any[]` | No | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.User().load({ id: 'user_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.User().remove({ id: 'user_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VcrEntity

```ts
const vcr = client.Vcr()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arch` | `string` | No | CPU architecture the manifest targets. |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the image was created. |
| `id` | `string` | Yes | Internal identifier of the image. |
| `imageId` | `string` | Yes | Internal identifier of the image the tag points at. |
| `kind` | `string` | Yes | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` | `any[]` | Yes |  |
| `manifestDigest` | `string` | Yes | SHA-256 digest of the image manifest. |
| `name` | `string` | Yes | Name of the repository. |
| `platform` | `string` | No | Operating system the manifest targets. |
| `projectId` | `string` | Yes | Identifier of the project the repository belongs to. |
| `public` | `boolean` | Yes | Whether the repository is public. |
| `pushedBy` | `string` | No | Identifier of the actor that pushed the image. |
| `repositoryId` | `string` | Yes | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `number` | Yes | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | Yes | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | `string` | Yes | The tag name. |
| `tags` | `any[]` | Yes | Tags pointing at this image's manifest. |
| `teamId` | `string` | Yes | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Yes | Slug of the team that is granted access to the repository. |
| `updatedAt` | `string` | Yes | ISO 8601 timestamp of when the tag was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `arch` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `imageId` | - | - | - | - | - |
| `kind` | - | - | - | - | - |
| `layers` | - | - | - | - | - |
| `manifestDigest` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `platform` | - | - | - | - | - |
| `projectId` | - | - | - | - | - |
| `public` | - | - | - | - | - |
| `pushedBy` | - | - | - | - | - |
| `repositoryId` | - | - | - | - | - |
| `sizeInBytes` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `tag` | - | - | - | - | - |
| `tags` | - | - | - | - | - |
| `teamId` | - | - | Yes | - | - |
| `teamSlug` | - | - | Yes | - | - |
| `updatedAt` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `repository` | `/v1/vcr/repository` | `client.Vcr().create({ $action: 'repository', ... })` |

An action returns that action's OWN response, which is not necessarily a
Vcr record — check the API definition for its shape.

```ts
const result = await client.Vcr().create({
  $action: 'repository',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Vcr().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Vcr().list({ id_or_name: "example", project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Vcr().load({ id_or_name: 'id_or_name', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Vcr().remove({ id_or_name: 'id_or_name', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Vcr().update({
  project_slug: 'project_slug',
  repository_name: 'repository_name',
  team_slug: 'team_slug',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VcrEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VcrImageListEntity

```ts
const vcr_image_list = client.VcrImageList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arch` | `string` | No | CPU architecture the manifest targets. |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the image was created. |
| `id` | `string` | Yes | Internal identifier of the image. |
| `kind` | `string` | Yes | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `manifestDigest` | `string` | Yes | SHA-256 digest of the image manifest. |
| `platform` | `string` | No | Operating system the manifest targets. |
| `pushedBy` | `string` | No | Identifier of the actor that pushed the image. |
| `repositoryId` | `string` | Yes | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `number` | Yes | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | Yes | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | `any[]` | Yes | Tags pointing at this image's manifest. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VcrImageList().list({ id_or_name: "example", project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VcrImageListEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VcrRepositoryListEntity

```ts
const vcr_repository_list = client.VcrRepositoryList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the repository was created. |
| `id` | `string` | Yes | Unique identifier of the repository. |
| `name` | `string` | Yes | Name of the repository. |
| `projectId` | `string` | Yes | Identifier of the project the repository belongs to. |
| `public` | `boolean` | Yes | Whether the repository is public. |
| `updatedAt` | `string` | Yes | ISO 8601 timestamp of when the repository was last updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VcrRepositoryList().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VcrRepositoryListEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VcrRepositoryPermissionListEntity

```ts
const vcr_repository_permission_list = client.VcrRepositoryPermissionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | `string` | Yes | Identifier of the repository the permission grants access to. |
| `teamId` | `string` | Yes | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Yes | Slug of the team that is granted access to the repository. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VcrRepositoryPermissionList().list({ id_or_name: "example", project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VcrRepositoryPermissionListEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebAnalyticsEntity

```ts
const web_analytics = client.WebAnalytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any` | Yes |  |
| `query` | `Record<string, any>` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebAnalytics().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebAnalyticsEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alertRuleIds` | `any[]` | No |  |
| `createdAt` | `number` | Yes | A number containing the date when the webhook was created in in milliseconds |
| `events` | `any[]` | Yes | The webhooks events |
| `id` | `string` | Yes | The webhook id |
| `ownerId` | `string` | Yes | The unique ID of the team the webhook belongs to |
| `projectIds` | `any[]` | No | The ID of the projects the webhook is associated with |
| `secret` | `string` | Yes | The webhook secret used to sign the payload |
| `updatedAt` | `number` | Yes | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `string` | Yes | A string with the URL of the webhook |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
  createdAt: 1,
  events: [],
  id: 'example_id',
  ownerId: 'example_ownerId',
  secret: 'example_secret',
  updatedAt: 1,
  url: 'example_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Webhook().load({ id: 'webhook_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ id: 'webhook_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ts
const client = new VercelSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

