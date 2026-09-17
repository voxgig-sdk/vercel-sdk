# Vercel Lua SDK Reference

Complete API reference for the Vercel Lua SDK.


## VercelSDK

### Constructor

```lua
local sdk = require("vercel_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AccessGroup(data)`

Create a new `AccessGroup` entity instance. Pass `nil` for no initial data.

#### `AiGateway(data)`

Create a new `AiGateway` entity instance. Pass `nil` for no initial data.

#### `AiGatewayRule(data)`

Create a new `AiGatewayRule` entity instance. Pass `nil` for no initial data.

#### `AiGatewayRuleList(data)`

Create a new `AiGatewayRuleList` entity instance. Pass `nil` for no initial data.

#### `AiGatewayVirtualModelConfig(data)`

Create a new `AiGatewayVirtualModelConfig` entity instance. Pass `nil` for no initial data.

#### `AiGatewayVirtualModelConfigList(data)`

Create a new `AiGatewayVirtualModelConfigList` entity instance. Pass `nil` for no initial data.

#### `Alias(data)`

Create a new `Alias` entity instance. Pass `nil` for no initial data.

#### `ApiAiGateway(data)`

Create a new `ApiAiGateway` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `Artifact(data)`

Create a new `Artifact` entity instance. Pass `nil` for no initial data.

#### `Authentication(data)`

Create a new `Authentication` entity instance. Pass `nil` for no initial data.

#### `Billing(data)`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `BulkRedirect(data)`

Create a new `BulkRedirect` entity instance. Pass `nil` for no initial data.

#### `Cert(data)`

Create a new `Cert` entity instance. Pass `nil` for no initial data.

#### `Check(data)`

Create a new `Check` entity instance. Pass `nil` for no initial data.

#### `ChecksV2(data)`

Create a new `ChecksV2` entity instance. Pass `nil` for no initial data.

#### `Connect(data)`

Create a new `Connect` entity instance. Pass `nil` for no initial data.

#### `ConnectConnector(data)`

Create a new `ConnectConnector` entity instance. Pass `nil` for no initial data.

#### `ConnectConnectorList(data)`

Create a new `ConnectConnectorList` entity instance. Pass `nil` for no initial data.

#### `ConnectConnectorProjectConnectionList(data)`

Create a new `ConnectConnectorProjectConnectionList` entity instance. Pass `nil` for no initial data.

#### `ConnectProjectConnection(data)`

Create a new `ConnectProjectConnection` entity instance. Pass `nil` for no initial data.

#### `ConnectProjectConnectorConnectionList(data)`

Create a new `ConnectProjectConnectorConnectionList` entity instance. Pass `nil` for no initial data.

#### `Deployment(data)`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `Dns(data)`

Create a new `Dns` entity instance. Pass `nil` for no initial data.

#### `Domain(data)`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `DomainsRegistrar(data)`

Create a new `DomainsRegistrar` entity instance. Pass `nil` for no initial data.

#### `Drain(data)`

Create a new `Drain` entity instance. Pass `nil` for no initial data.

#### `EdgeCache(data)`

Create a new `EdgeCache` entity instance. Pass `nil` for no initial data.

#### `Env(data)`

Create a new `Env` entity instance. Pass `nil` for no initial data.

#### `Environment(data)`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `FeatureFlag(data)`

Create a new `FeatureFlag` entity instance. Pass `nil` for no initial data.

#### `File(data)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Flag(data)`

Create a new `Flag` entity instance. Pass `nil` for no initial data.

#### `FlagsSdkKeyWithSecret(data)`

Create a new `FlagsSdkKeyWithSecret` entity instance. Pass `nil` for no initial data.

#### `GlobalConfig(data)`

Create a new `GlobalConfig` entity instance. Pass `nil` for no initial data.

#### `GlobalConfigItem(data)`

Create a new `GlobalConfigItem` entity instance. Pass `nil` for no initial data.

#### `GlobalConfigToken(data)`

Create a new `GlobalConfigToken` entity instance. Pass `nil` for no initial data.

#### `Integration(data)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Kms(data)`

Create a new `Kms` entity instance. Pass `nil` for no initial data.

#### `ListEventType(data)`

Create a new `ListEventType` entity instance. Pass `nil` for no initial data.

#### `Log(data)`

Create a new `Log` entity instance. Pass `nil` for no initial data.

#### `LogDrain(data)`

Create a new `LogDrain` entity instance. Pass `nil` for no initial data.

#### `Marketplace(data)`

Create a new `Marketplace` entity instance. Pass `nil` for no initial data.

#### `Microfrontend(data)`

Create a new `Microfrontend` entity instance. Pass `nil` for no initial data.

#### `Network(data)`

Create a new `Network` entity instance. Pass `nil` for no initial data.

#### `Networking(data)`

Create a new `Networking` entity instance. Pass `nil` for no initial data.

#### `Observability(data)`

Create a new `Observability` entity instance. Pass `nil` for no initial data.

#### `PrivateLinkEndpoint(data)`

Create a new `PrivateLinkEndpoint` entity instance. Pass `nil` for no initial data.

#### `Project(data)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectMember(data)`

Create a new `ProjectMember` entity instance. Pass `nil` for no initial data.

#### `ProjectRoute(data)`

Create a new `ProjectRoute` entity instance. Pass `nil` for no initial data.

#### `Query(data)`

Create a new `Query` entity instance. Pass `nil` for no initial data.

#### `Record(data)`

Create a new `Record` entity instance. Pass `nil` for no initial data.

#### `RollingRelease(data)`

Create a new `RollingRelease` entity instance. Pass `nil` for no initial data.

#### `Sandbox(data)`

Create a new `Sandbox` entity instance. Pass `nil` for no initial data.

#### `Schema(data)`

Create a new `Schema` entity instance. Pass `nil` for no initial data.

#### `Security(data)`

Create a new `Security` entity instance. Pass `nil` for no initial data.

#### `Segment(data)`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `Storage(data)`

Create a new `Storage` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TldName(data)`

Create a new `TldName` entity instance. Pass `nil` for no initial data.

#### `Toggle(data)`

Create a new `Toggle` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Vcr(data)`

Create a new `Vcr` entity instance. Pass `nil` for no initial data.

#### `VcrImageList(data)`

Create a new `VcrImageList` entity instance. Pass `nil` for no initial data.

#### `VcrRepositoryList(data)`

Create a new `VcrRepositoryList` entity instance. Pass `nil` for no initial data.

#### `VcrRepositoryPermissionList(data)`

Create a new `VcrRepositoryPermissionList` entity instance. Pass `nil` for no initial data.

#### `WebAnalytics(data)`

Create a new `WebAnalytics` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccessGroupEntity

```lua
local access_group = client:AccessGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessGroupId` | `string` | Yes | ID of the access group. |
| `createdAt` | `string` | Yes | Timestamp in milliseconds when the access group was created. |
| `entitlements` | `table` | No |  |
| `id` | `string` | No |  |
| `isDsyncManaged` | `boolean` | Yes |  |
| `membersCount` | `number` | Yes | Number of members in the access group. |
| `membersToAdd` | `table` | No | List of members to add to the access group. |
| `membersToRemove` | `table` | No | List of members to remove from the access group. |
| `name` | `string` | Yes | The name of this access group. |
| `projectId` | `string` | Yes |  |
| `projects` | `table` | No |  |
| `projectsCount` | `number` | Yes | Number of projects in the access group. |
| `role` | `string` | Yes | The project role that will be added to this Access Group. |
| `teamId` | `string` | Yes | ID of the team that this access group belongs to. |
| `teamPermissions` | `table` | No | Permissions that the team has in the access group. |
| `teamRoles` | `table` | No | Roles that the team has in the access group. |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AccessGroup():create({
  id = --[[ string ]],
  accessGroupId = --[[ string ]],
  createdAt = --[[ string ]],
  isDsyncManaged = --[[ boolean ]],
  membersCount = --[[ number ]],
  name = --[[ string ]],
  projectId = --[[ string ]],
  projectsCount = --[[ number ]],
  role = --[[ string ]],
  teamId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AccessGroup():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AccessGroup():load({ id = "access_group_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AccessGroup():remove({ id = "access_group_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AccessGroup():update({
  id = "access_group_id",
  access_group_id = "access_group_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayEntity

```lua
local ai_gateway = client:AiGateway(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGateway():remove({ rule_id = "rule_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayRuleEntity

```lua
local ai_gateway_rule = client:AiGatewayRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `table` | No |  |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | No |  |
| `deleted` | `boolean` | No |  |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `match` | `table` | No |  |
| `ownerId` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayRule():create({
  createdAt = --[[ number ]],
  enabled = --[[ boolean ]],
  ownerId = --[[ string ]],
  ruleId = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ number ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayRule():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayRuleListEntity

```lua
local ai_gateway_rule_list = client:AiGatewayRuleList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `table` | No |  |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | No |  |
| `deleted` | `boolean` | No |  |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `match` | `table` | No |  |
| `ownerId` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayRuleList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayRuleListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayVirtualModelConfigEntity

```lua
local ai_gateway_virtual_model_config = client:AiGatewayVirtualModelConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `boolean` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `table` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | No | Use caching if available. |
| `createdAt` | `number` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `string` | No | User or app id that created this VMC. |
| `deleted` | `boolean` | Yes | Whether this VMC is soft-deleted. |
| `description` | `string` | No | Optional description for UI. |
| `disallowPromptTraining` | `boolean` | No | Only use providers that will not train on your prompts. |
| `displayName` | `string` | No | Human-readable name for UI. |
| `has` | `table` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `boolean` | No | Only use HIPAA-compliant providers. |
| `id` | `string` | No |  |
| `inferenceRegion` | `table` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `table` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `table` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `table` | No | Restrict routing to only these providers. |
| `providerOptions` | `table` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `table` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `table` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `table` | No | For kind=router: capability tags a candidate must have. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayVirtualModelConfig():create({
  createdAt = --[[ number ]],
  deleted = --[[ boolean ]],
  kind = --[[ string ]],
  ownerId = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ number ]],
  virtualModelSlug = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayVirtualModelConfig():load({ id = "ai_gateway_virtual_model_config_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayVirtualModelConfig():update({
  id = "ai_gateway_virtual_model_config_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayVirtualModelConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayVirtualModelConfigListEntity

```lua
local ai_gateway_virtual_model_config_list = client:AiGatewayVirtualModelConfigList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `boolean` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `table` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | No | Use caching if available. |
| `createdAt` | `number` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `string` | No | User or app id that created this VMC. |
| `deleted` | `boolean` | Yes | Whether this VMC is soft-deleted. |
| `description` | `string` | No | Optional description for UI. |
| `disallowPromptTraining` | `boolean` | No | Only use providers that will not train on your prompts. |
| `displayName` | `string` | No | Human-readable name for UI. |
| `has` | `table` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `boolean` | No | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `table` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `table` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `table` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `table` | No | Restrict routing to only these providers. |
| `providerOptions` | `table` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `table` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `table` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `table` | No | For kind=router: capability tags a candidate must have. |
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayVirtualModelConfigList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayVirtualModelConfigListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AliasEntity

```lua
local alias = client:Alias(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | `string` | Yes | The date when the alias was created |
| `createdAt` | `number` | No | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `table` | Yes | Information of the user who created the alias |
| `deletedAt` | `number` | No | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `table` | Yes | A map with the deployment ID, URL and metadata |
| `deploymentId` | `string` | Yes | The deployment ID |
| `id` | `string` | No |  |
| `microfrontends` | `table` | Yes | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `string` | No | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `string` | Yes | The unique identifier of the project |
| `protectionBypass` | `table` | No | The protection bypass for the alias |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Alias():create({
  deployment_id = --[[ string ]],
  alias = --[[ string ]],
  created = --[[ string ]],
  creator = --[[ table ]],
  deployment = --[[ table ]],
  deploymentId = --[[ string ]],
  microfrontends = --[[ table ]],
  projectId = --[[ string ]],
  uid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Alias():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Alias():load({ id = "alias_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Alias():remove({ id = "alias_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Alias():update({
  id = "alias_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AliasEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiAiGatewayEntity

```lua
local api_ai_gateway = client:ApiAiGateway(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiAiGateway():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ApiAiGateway():remove({ vmc_slug = "vmc_slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiAiGatewayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiKeyEntity

```lua
local api_key = client:ApiKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `number` | Yes | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `table` | Yes | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `number` | Yes | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `string` | Yes | The ID of the user who created the API key. |
| `createdByAppId` | `string` | Yes | The ID of the app that created the API key, if any |
| `expiresAt` | `number` | Yes | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `string` | Yes | The unique identifier of the API key. |
| `leakedAt` | `number` | Yes | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `string` | Yes | URL where the API key was discovered as leaked. |
| `metadata` | `table` | No | Generic metadata attached to the API key. |
| `name` | `string` | Yes | The human-readable name of the API key. |
| `partialKey` | `string` | Yes | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `string` | Yes | The ID of the project that this API key grants access to. |
| `purpose` | `string` | Yes | The API key's purpose, i.e. |
| `quota` | `table` | Yes | AI Gateway quota associated with an API key. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiKey():create({
  activeAt = --[[ number ]],
  aiGatewayQuota = --[[ table ]],
  createdAt = --[[ number ]],
  createdBy = --[[ string ]],
  createdByAppId = --[[ string ]],
  expiresAt = --[[ number ]],
  id = --[[ string ]],
  leakedAt = --[[ number ]],
  leakedUrl = --[[ string ]],
  name = --[[ string ]],
  partialKey = --[[ string ]],
  projectId = --[[ string ]],
  purpose = --[[ string ]],
  quota = --[[ table ]],
  teamId = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ArtifactEntity

```lua
local artifact = client:Artifact(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hashes` | `table` | Yes | artifact hashes |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Artifact():create({
  hashes = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Artifact():load({ id = "artifact_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Artifact():remove()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Artifact():update({
  id = "artifact_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthenticationEntity

```lua
local authentication = client:Authentication(nil)
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
| `scopes` | `table` | No | The access scopes granted to the token. |
| `suffix` | `string` | No | The last few characters of the token, for identification purposes. |
| `type` | `string` | Yes | The type of the token. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Authentication():create({
  activeAt = --[[ number ]],
  createdAt = --[[ number ]],
  id = --[[ string ]],
  name = --[[ string ]],
  type = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Authentication():load({ token_id = "token_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Authentication():remove({ token_id = "token_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillingEntity

```lua
local billing = client:Billing(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Billing():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Billing():load({ from = "from", to = "to" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkRedirectEntity

```lua
local bulk_redirect = client:BulkRedirect(nil)
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
| `redirect` | `table` | Yes | The redirect object to edit. |
| `redirectCount` | `number` | No | The number of redirects in this version. |
| `redirects` | `table` | No |  |
| `restore` | `boolean` | No | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BulkRedirect():create({
  project_id = --[[ string ]],
  createdBy = --[[ string ]],
  id = --[[ string ]],
  key = --[[ string ]],
  lastModified = --[[ number ]],
  projectId = --[[ string ]],
  redirect = --[[ table ]],
  teamId = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BulkRedirect():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BulkRedirect():load({ project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BulkRedirect():remove({ project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BulkRedirect():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkRedirectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CertEntity

```lua
local cert = client:Cert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoRenew` | `boolean` | Yes |  |
| `ca` | `string` | Yes | The certificate authority |
| `cert` | `string` | Yes | The certificate |
| `cns` | `table` | Yes | The common names the cert should be issued for |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Cert():create({
  autoRenew = --[[ boolean ]],
  ca = --[[ string ]],
  cert = --[[ string ]],
  cns = --[[ table ]],
  createdAt = --[[ number ]],
  expiresAt = --[[ number ]],
  id = --[[ string ]],
  key = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cert():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Cert():load({ id = "cert_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Cert():remove({ id = "cert_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Cert():update({
  id = "cert_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CheckEntity

```lua
local check = client:Check(nil)
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
| `metrics` | `table` | Yes |  |
| `name` | `string` | Yes | The name of the check being created |
| `output` | `table` | No | The results of the check Run |
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
| `targets` | `table` | Yes |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Check():create({
  deployment_id = --[[ string ]],
  blocking = --[[ boolean ]],
  blocks = --[[ string ]],
  createdAt = --[[ number ]],
  id = --[[ string ]],
  integrationId = --[[ string ]],
  isRerequestable = --[[ boolean ]],
  metrics = --[[ table ]],
  name = --[[ string ]],
  ownerId = --[[ string ]],
  projectId = --[[ string ]],
  requires = --[[ string ]],
  source = --[[ any ]],
  sourceKind = --[[ string ]],
  targets = --[[ table ]],
  timeout = --[[ number ]],
  updatedAt = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Check():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Check():load({ id = "check_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Check():remove({ id = "check_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Check():update({
  id = "check_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChecksV2Entity

```lua
local checks_v2 = client:ChecksV2(nil)
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
| `output` | `table` | No |  |
| `runs` | `table` | Yes |  |
| `status` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ChecksV2():create({
  deployment_id = --[[ string ]],
  checkId = --[[ string ]],
  runs = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ChecksV2():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ChecksV2():load({ check_run_id = "check_run_id", deployment_id = "deployment_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ChecksV2():update({
  check_run_id = "check_run_id",
  deployment_id = "deployment_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChecksV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectEntity

```lua
local connect = client:Connect(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additionalParams` | `table` | No |  |
| `audience` | `table` | No |  |
| `authorizationDetails` | `table` | No |  |
| `authorizationId` | `string` | No | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `table` | No | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `table` | Yes |  |
| `deviceCode` | `boolean` | No |  |
| `displayName` | `string` | Yes | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `number` | Yes |  |
| `expiresInMs` | `number` | No |  |
| `externalSubject` | `string` | No |  |
| `id` | `string` | Yes | Client id (e.g. |
| `installationId` | `string` | No |  |
| `metadata` | `table` | No | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `string` | Yes | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `string` | No |  |
| `resources` | `table` | No |  |
| `returnUrl` | `string` | No |  |
| `scopes` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Connect():create({
  connector = --[[ string ]],
  displayName = --[[ string ]],
  expiresAt = --[[ number ]],
  id = --[[ string ]],
  name = --[[ string ]],
  token = --[[ string ]],
  tokenId = --[[ string ]],
  type = --[[ string ]],
  uid = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Connect():remove({ connector = "connector" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectConnectorEntity

```lua
local connect_connector = client:ConnectConnector(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `table` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | No | The connection method this connector was created from, when the create request named one. |
| `connector` | `table` | Yes | Updated connector. |
| `createdAt` | `number` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `any` | No | Principal that created the connector. |
| `creationMode` | `string` | No | How the connector row was originally created. |
| `data` | `any` | Yes | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `string` | No | Installation used when a token request does not specify an installation. |
| `destinations` | `table` | Yes | Complete replacement set of trigger destinations. |
| `devsite` | `string` | No | Developer website for the connected service. |
| `displayName` | `string` | Yes | Human-readable connector name. |
| `docsite` | `string` | No | Developer documentation for the connected service. |
| `environments` | `table` | No | Environments for the project connection. |
| `events` | `table` | No | Known events this connector subscribes to (e.g. |
| `icon` | `string` | No | Connector branding icon. |
| `id` | `string` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `boolean` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `table` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Yes | Connector name within the owning team. |
| `params` | `table` | No | Values for the selected connection method's template fields. |
| `projectId` | `string` | No | Project to connect during creation. |
| `reconsentNeeded` | `table` | Yes | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `string` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `number` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `boolean` | No | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `string` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `table` | Yes | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `table` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `any` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `boolean` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `boolean` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `boolean` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `string` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `any` | No | Initial trigger destination. |
| `triggerDestinations` | `table` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `table` | Yes | Incoming trigger configuration for the connector. |
| `type` | `string` | Yes | Connector implementation type. |
| `typeIcon` | `string` | No | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Yes | Human-readable name of the connector type. |
| `uid` | `string` | Yes | Team-scoped UID. |
| `updatedAt` | `number` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `any` | No | Principal that most recently updated the connector. |
| `userTokens` | `table` | Yes | User-token capabilities and known grants for the connector. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConnectConnector():create({
  appTokens = --[[ table ]],
  connector = --[[ table ]],
  createdAt = --[[ number ]],
  data = --[[ any ]],
  destinations = --[[ table ]],
  displayName = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  reconsentNeeded = --[[ table ]],
  service = --[[ string ]],
  serviceSync = --[[ table ]],
  supportedSubjectTypes = --[[ table ]],
  supportsIcon = --[[ any ]],
  supportsInstallation = --[[ boolean ]],
  supportsRevocation = --[[ boolean ]],
  supportsTriggers = --[[ boolean ]],
  triggers = --[[ table ]],
  type = --[[ string ]],
  typeName = --[[ string ]],
  uid = --[[ string ]],
  updatedAt = --[[ number ]],
  userTokens = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConnectConnector():load({ id = "connect_connector_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ConnectConnector():update({
  id = "connect_connector_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectConnectorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectConnectorListEntity

```lua
local connect_connector_list = client:ConnectConnectorList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `table` | Yes | App-token capabilities and known grants for the connector. |
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
| `events` | `table` | No | Known events this connector subscribes to (e.g. |
| `icon` | `string` | No | Connector branding icon. |
| `id` | `string` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `boolean` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `table` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Yes | Connector name within the owning team. |
| `redirectUri` | `string` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `number` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `string` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `table` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `any` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `boolean` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `boolean` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `boolean` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `string` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `table` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `table` | Yes | Incoming trigger configuration for the connector. |
| `type` | `string` | Yes | Connector implementation type. |
| `typeIcon` | `string` | No | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Yes | Human-readable name of the connector type. |
| `uid` | `string` | Yes | Team-scoped UID. |
| `updatedAt` | `number` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `any` | No | Principal that most recently updated the connector. |
| `userTokens` | `table` | Yes | User-token capabilities and known grants for the connector. |
| `website` | `string` | No | Public website for the connected service. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConnectConnectorList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectConnectorListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectConnectorProjectConnectionListEntity

```lua
local connect_connector_project_connection_list = client:ConnectConnectorProjectConnectionList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `table` | Yes | Environments where the connector is enabled for the project. |
| `project` | `table` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `number` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConnectConnectorProjectConnectionList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectConnectorProjectConnectionListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectProjectConnectionEntity

```lua
local connect_project_connection = client:ConnectProjectConnection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `table` | Yes | Environments where the connector is enabled for the project. |
| `environments` | `table` | Yes | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `table` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `number` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConnectProjectConnection():create({
  connector_id = --[[ string ]],
  project_id = --[[ string ]],
  connectorId = --[[ string ]],
  createdAt = --[[ number ]],
  enabledEnvironments = --[[ table ]],
  environments = --[[ table ]],
  project = --[[ table ]],
  updatedAt = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConnectProjectConnection():load({ connector_id = "connector_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectProjectConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectProjectConnectorConnectionListEntity

```lua
local connect_project_connector_connection_list = client:ConnectProjectConnectorConnectionList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `number` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `table` | Yes | Environments where the connector is enabled for the project. |
| `project` | `table` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `number` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConnectProjectConnectorConnectionList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectProjectConnectorConnectionListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeploymentEntity

```lua
local deployment = client:Deployment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliasAssigned` | `any` | No |  |
| `aliasError` | `table` | Yes | An error object in case aliasing of the deployment failed. |
| `attribution` | `table` | No | Commit attribution metadata |
| `buildMachine` | `string` | No | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `number` | No | Timestamp of when the deployment started building at. |
| `checks` | `table` | Yes | Detailed information about v2 deployment checks. |
| `checksConclusion` | `string` | No | Conclusion for checks |
| `checksState` | `string` | No | State of all registered checks |
| `connectBuildsEnabled` | `boolean` | No | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `string` | No | The ID of Secure Compute network used for this deployment |
| `created` | `number` | Yes | Timestamp of when the deployment got created. |
| `createdAt` | `number` | Yes |  |
| `creator` | `table` | Yes | Metadata information of the deployment creator. |
| `customEnvironment` | `table` | Yes | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `string` | No | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `string` | No | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `number` | No | Timestamp of when the deployment got deleted. |
| `deploymentId` | `string` | No | The ID of an existing deployment to redeploy. |
| `errorCode` | `string` | No | Error code when the deployment is in an error state. |
| `errorMessage` | `string` | No | Error message when the deployment is in an canceled or error state. |
| `expiration` | `number` | No | The expiration configured by the project retention policy |
| `files` | `table` | No | The files to include in the deployment. |
| `gitAccessToken` | `string` | No | Available only to Vercel platform accounts. |
| `gitMetadata` | `table` | No | Populates initial git metadata for different git providers. |
| `gitSource` | `any` | No | Defines the Git Repository source to be deployed. |
| `id` | `string` | No |  |
| `inspectorUrl` | `string` | Yes | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `boolean` | No | Deployment can be used for instant rollback |
| `manualProvisioning` | `table` | Yes |  |
| `meta` | `table` | No | An object containing the deployment's metadata. |
| `monorepoManager` | `string` | No | The monorepo manager that is being used for this deployment. |
| `name` | `string` | Yes | A string with the project name used in the deployment URL |
| `oomReport` | `string` | No | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `table` | No |  |
| `passiveConnectConfigurationId` | `string` | No | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `table` | Yes | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `boolean` | No |  |
| `project` | `string` | No | The target project identifier in which the deployment will be created. |
| `projectId` | `string` | Yes | The project ID of the deployment |
| `projectSettings` | `table` | No | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `number` | No | The expiration proposed to replace the existing expiration |
| `ready` | `number` | No | Timestamp of when the deployment got ready. |
| `readyState` | `string` | Yes |  |
| `readySubstate` | `string` | No | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `table` | Yes | NSNB Blocked metadata |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Deployment():create({
  aliasError = --[[ table ]],
  checks = --[[ table ]],
  created = --[[ number ]],
  createdAt = --[[ number ]],
  creator = --[[ table ]],
  customEnvironment = --[[ table ]],
  inspectorUrl = --[[ string ]],
  manualProvisioning = --[[ table ]],
  name = --[[ string ]],
  platform = --[[ table ]],
  projectId = --[[ string ]],
  readyState = --[[ string ]],
  seatBlock = --[[ table ]],
  type = --[[ string ]],
  uid = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Deployment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Deployment():load({ id = "deployment_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Deployment():remove({ id = "deployment_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Deployment():update({
  id = "deployment_id",
  action = "action",
  integration_id = "integration_id",
  resource_id = "resource_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DnsEntity

```lua
local dns = client:Dns(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | A comment to add context on what this DNS record is for |
| `createdAt` | `number` | No |  |
| `creator` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `https` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `mxPriority` | `number` | No | The MX priority value of the DNS record |
| `name` | `string` | Yes | The name of the DNS record |
| `recordType` | `string` | Yes |  |
| `srv` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Dns():create({
  domain_id = --[[ string ]],
  creator = --[[ string ]],
  domain = --[[ string ]],
  https = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  recordType = --[[ string ]],
  srv = --[[ table ]],
  type = --[[ string ]],
  value = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dns():load({ domain_id = "domain_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Dns():remove({ domain_id = "domain_id", record_id = "record_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Dns():update({
  record_id = "record_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainEntity

```lua
local domain = client:Domain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boughtAt` | `number` | Yes | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `number` | Yes | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `table` | Yes | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `table` | No | A list of custom nameservers for the domain to point to. |
| `echMode` | `string` | Yes | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `number` | Yes | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `string` | Yes | The unique identifier of the domain. |
| `intendedNameservers` | `table` | Yes | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `string` | No | The domain operation to perform. |
| `name` | `string` | Yes | The domain name. |
| `nameservers` | `table` | Yes | A list of the current nameservers of the domain. |
| `renew` | `boolean` | No | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `string` | Yes | The type of service the domain is handled by. |
| `suffix` | `boolean` | Yes |  |
| `teamId` | `string` | Yes |  |
| `transferStartedAt` | `number` | No | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `number` | No | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `string` | Yes |  |
| `verified` | `boolean` | Yes | If the domain has the ownership verified. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Domain():create({
  boughtAt = --[[ number ]],
  createdAt = --[[ number ]],
  creator = --[[ table ]],
  echMode = --[[ string ]],
  expiresAt = --[[ number ]],
  id = --[[ string ]],
  intendedNameservers = --[[ table ]],
  name = --[[ string ]],
  nameservers = --[[ table ]],
  serviceType = --[[ string ]],
  suffix = --[[ boolean ]],
  teamId = --[[ string ]],
  userId = --[[ string ]],
  verified = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Domain():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Domain():load({ id = "domain_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Domain():remove({ id = "domain_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Domain():update({
  id = "domain_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainsRegistrarEntity

```lua
local domains_registrar = client:DomainsRegistrar(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authCode` | `string` | Yes | The auth code for the domain. |
| `autoRenew` | `boolean` | Yes | Whether the domain should be auto-renewed before it expires. |
| `available` | `boolean` | Yes |  |
| `contactInformation` | `table` | Yes | The contact information for the domain. |
| `domains` | `table` | Yes | an array of at most 50 item(s) |
| `error` | `any` | No |  |
| `expectedPrice` | `number` | Yes |  |
| `languageCode` | `string` | No | The language code for the domain. |
| `nameservers` | `table` | Yes |  |
| `orderId` | `string` | Yes | A valid order ID |
| `purchasePrice` | `any` | Yes |  |
| `renewalPrice` | `any` | Yes |  |
| `results` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DomainsRegistrar():create({
  authCode = --[[ string ]],
  autoRenew = --[[ boolean ]],
  available = --[[ boolean ]],
  contactInformation = --[[ table ]],
  domains = --[[ table ]],
  expectedPrice = --[[ number ]],
  nameservers = --[[ table ]],
  orderId = --[[ string ]],
  purchasePrice = --[[ any ]],
  renewalPrice = --[[ any ]],
  results = --[[ table ]],
  status = --[[ string ]],
  transferPrice = --[[ any ]],
  years = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DomainsRegistrar():load({ order_id = "order_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DomainsRegistrar():update({
  domain_id = "domain_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainsRegistrarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DrainEntity

```lua
local drain = client:Drain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delivery` | `table` | No |  |
| `drains` | `any` | Yes |  |
| `filter` | `table` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `projectIds` | `table` | No |  |
| `projects` | `string` | Yes |  |
| `sampling` | `table` | No |  |
| `schemas` | `table` | Yes |  |
| `source` | `table` | No |  |
| `status` | `string` | No |  |
| `transforms` | `table` | No |  |

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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Drain():create({
  drains = --[[ any ]],
  filter = --[[ table ]],
  name = --[[ string ]],
  projects = --[[ string ]],
  schemas = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Drain():load({ id = "drain_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Drain():remove({ id = "drain_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Drain():update({
  id = "drain_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DrainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EdgeCacheEntity

```lua
local edge_cache = client:EdgeCache(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EdgeCache():create({
  project_id_or_name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EdgeCacheEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvEntity

```lua
local env = client:Env(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applyToAllCustomEnvironments` | `boolean` | No | whether or not this env varible applies to custom environments |
| `comment` | `string` | No | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `string` | No | The date when the Shared Env Var was created. |
| `createdAt` | `number` | No | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `string` | No | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `table` | No | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `boolean` | No | whether or not this env variable is decrypted |
| `deletedAt` | `number` | No | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `string` | No | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `table` | Yes |  |
| `failed` | `table` | Yes |  |
| `id` | `string` | No | The unique identifier of the Shared Env Var. |
| `key` | `string` | No | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `string` | No | The last editor full name or username. |
| `ownerId` | `string` | No | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `table` | No | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `table` | Yes |  |
| `target` | `table` | No | environments this env variable targets |
| `type` | `string` | No | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `table` | Yes |  |
| `updatedAt` | `number` | No | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `string` | No | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `table` | Yes | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Env():create({
  evs = --[[ table ]],
  failed = --[[ table ]],
  securityIssues = --[[ table ]],
  updated = --[[ table ]],
  updates = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Env():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Env():load({ id = "env_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Env():remove()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Env():update({
  id = "env_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentEntity

```lua
local environment = client:Environment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branchMatcher` | `table` | Yes | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `string` | No | Where to copy environment variables from. |
| `createdAt` | `number` | Yes | Timestamp when the environment was created |
| `currentDeploymentAliases` | `table` | No | List of aliases for the current deployment |
| `description` | `string` | No | Optional description of the environment's purpose |
| `domains` | `table` | No | List of domains associated with this environment |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Environment():create({
  id_or_name = --[[ string ]],
  branchMatcher = --[[ table ]],
  createdAt = --[[ number ]],
  id = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Environment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Environment():load({ environment_slug_or_id = "environment_slug_or_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Environment():remove({ environment_slug_or_id = "environment_slug_or_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Environment():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureFlagEntity

```lua
local feature_flag = client:FeatureFlag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changedEnvironments` | `table` | Yes |  |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | Yes | The user who created this patch |
| `data` | `table` | No | The data of the segment |
| `description` | `string` | No | A description of the flag |
| `environments` | `table` | Yes | The configuration for the flag in different environments |
| `flagId` | `string` | Yes |  |
| `flags` | `table` | Yes |  |
| `hint` | `string` | No |  |
| `id` | `string` | Yes |  |
| `kind` | `string` | Yes | The kind of flag |
| `label` | `string` | No |  |
| `maintainerIds` | `table` | No | The user ids of the maintainers of the flag |
| `message` | `string` | No | Additional message for this version |
| `metadata` | `table` | No |  |
| `operations` | `table` | No |  |
| `ownerId` | `string` | Yes |  |
| `pagination` | `table` | Yes |  |
| `permanent` | `boolean` | No | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `string` | Yes |  |
| `revision` | `number` | Yes |  |
| `seed` | `number` | Yes | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `string` | Yes | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `string` | Yes |  |
| `status` | `table` | Yes |  |
| `tags` | `table` | No | Tags for categorizing the flag |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `updatedBy` | `string` | No |  |
| `variants` | `table` | Yes | The variants of the flag |

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

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:FeatureFlag():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FeatureFlag():load({ team_id = "team_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:FeatureFlag():remove({ project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:FeatureFlag():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileEntity

```lua
local file = client:File(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `table` | No | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `string` | No | The content-type of the file (only valid for the `file` type) |
| `mode` | `number` | Yes | The file "mode" indicating file type and permissions. |
| `name` | `string` | Yes | The name of the file tree entry |
| `type` | `string` | Yes | String indicating the type of file tree entry. |
| `uid` | `string` | No | The unique identifier of the file (only valid for the `file` type) |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:File():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FlagEntity

```lua
local flag = client:Flag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | Yes |  |
| `description` | `string` | No |  |
| `environments` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `kind` | `string` | Yes |  |
| `maintainerIds` | `table` | No |  |
| `metadata` | `table` | No |  |
| `ownerId` | `string` | Yes |  |
| `permanent` | `boolean` | No |  |
| `projectId` | `string` | Yes |  |
| `revision` | `number` | Yes |  |
| `seed` | `number` | Yes |  |
| `slug` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `tags` | `table` | No |  |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `updatedBy` | `string` | No |  |
| `variants` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Flag():load({ id = "flag_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FlagsSdkKeyWithSecretEntity

```lua
local flags_sdk_key_with_secret = client:FlagsSdkKeyWithSecret(nil)
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

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:FlagsSdkKeyWithSecret():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagsSdkKeyWithSecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GlobalConfigEntity

```lua
local global_config = client:GlobalConfig(nil)
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
| `items` | `table` | No |  |
| `ownerId` | `string` | Yes |  |
| `purpose` | `any` | No |  |
| `schema` | `table` | No |  |
| `sizeInBytes` | `number` | Yes |  |
| `slug` | `string` | Yes | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `number` | No | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `table` | Yes | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GlobalConfig():create({
  createdAt = --[[ number ]],
  digest = --[[ string ]],
  id = --[[ string ]],
  itemCount = --[[ number ]],
  ownerId = --[[ string ]],
  sizeInBytes = --[[ number ]],
  transfer = --[[ table ]],
  updatedAt = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GlobalConfig():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GlobalConfig():load({ id = "global_config_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:GlobalConfig():remove({ id = "global_config_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:GlobalConfig():update({
  id = "global_config_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GlobalConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GlobalConfigItemEntity

```lua
local global_config_item = client:GlobalConfigItem(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GlobalConfigItem():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GlobalConfigItem():load({ id = "global_config_item_id", global_config_id = "global_config_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GlobalConfigItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GlobalConfigTokenEntity

```lua
local global_config_token = client:GlobalConfigToken(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GlobalConfigToken():load({ id = "global_config_token_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GlobalConfigTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationEntity

```lua
local integration = client:Integration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `string` | No |  |
| `description` | `string` | Yes |  |
| `details` | `table` | No |  |
| `disabled` | `boolean` | No |  |
| `effectiveDate` | `string` | No |  |
| `envVarEnvironments` | `table` | No |  |
| `highlightedDetails` | `table` | No |  |
| `id` | `string` | Yes |  |
| `initialCharge` | `string` | No |  |
| `makeEnvVarsSensitive` | `boolean` | No |  |
| `maximumAmount` | `string` | No |  |
| `maximumAmountAutoPurchasePerPeriod` | `string` | No |  |
| `metadataSchema` | `table` | Yes |  |
| `minimumAmount` | `string` | No |  |
| `name` | `string` | Yes |  |
| `paymentMethodRequired` | `boolean` | Yes |  |
| `preauthorizationAmount` | `number` | No |  |
| `primaryProtocol` | `string` | No |  |
| `projectId` | `string` | Yes |  |
| `protocols` | `table` | Yes |  |
| `quote` | `table` | No |  |
| `scope` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Integration():create({
  installation_id = --[[ string ]],
  resource_id = --[[ string ]],
  description = --[[ string ]],
  id = --[[ string ]],
  metadataSchema = --[[ table ]],
  name = --[[ string ]],
  paymentMethodRequired = --[[ boolean ]],
  projectId = --[[ string ]],
  protocols = --[[ table ]],
  scope = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Integration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Integration():load({ id = "integration_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Integration():remove({ id = "integration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## KmsEntity

```lua
local kms = client:Kms(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activation` | `string` | No | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` | `string` | No |  |
| `algorithm` | `string` | Yes | Algorithm of the signing key. |
| `claims` | `table` | No | The claims to include in the token. |
| `claimsSchema` | `table` | No | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `string` | Yes |  |
| `environments` | `table` | Yes | The environments for the project grant policy. |
| `headers` | `table` | No | Additional headers to include in the token. |
| `id` | `string` | Yes |  |
| `importKey` | `string` | No | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `string` | No | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `string` | Yes | Key id of the signing key. |
| `key_ops` | `table` | No |  |
| `kid` | `string` | No |  |
| `kind` | `string` | Yes |  |
| `kty` | `string` | No |  |
| `managedBy` | `string` | No |  |
| `message` | `string` | Yes | Base64-encoded message to be signed. |
| `name` | `string` | Yes | The name of the issuer. |
| `origin` | `string` | Yes |  |
| `ownerId` | `string` | Yes |  |
| `policies` | `table` | Yes |  |
| `projectId` | `string` | Yes | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `number` | No | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `any` | No | Deprecated. |
| `signature` | `string` | Yes | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `table` | Yes |  |
| `token` | `string` | Yes |  |
| `tokenClaims` | `table` | No | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `number` | No | The time-to-live for the token, in seconds. |
| `updatedAt` | `string` | Yes |  |
| `use` | `string` | No |  |
| `x5c` | `table` | No | The X.509 certificate chain (RFC 7517 §4.7). |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Kms():create({
  issuer_id = --[[ string ]],
  algorithm = --[[ string ]],
  createdAt = --[[ string ]],
  environments = --[[ table ]],
  id = --[[ string ]],
  keyId = --[[ string ]],
  kind = --[[ string ]],
  message = --[[ string ]],
  name = --[[ string ]],
  origin = --[[ string ]],
  ownerId = --[[ string ]],
  policies = --[[ table ]],
  projectId = --[[ string ]],
  signature = --[[ string ]],
  signingKeys = --[[ table ]],
  token = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Kms():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Kms():load({ issuer_id = "issuer_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Kms():remove({ issuer_id = "issuer_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Kms():update({
  issuer_id = "issuer_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KmsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListEventTypeEntity

```lua
local list_event_type = client:ListEventType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `table` | Yes |  |
| `types` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListEventType():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListEventTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogEntity

```lua
local log = client:Log(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Log():load({ deployment_id = "deployment_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogDrainEntity

```lua
local log_drain = client:LogDrain(nil)
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
| `environments` | `table` | No | The environment of log drain |
| `headers` | `table` | No | Headers to be sent together with the request |
| `id` | `string` | Yes | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `string` | No |  |
| `integrationIcon` | `string` | No |  |
| `integrationWebsite` | `string` | No |  |
| `name` | `string` | No | The custom name of this log drain. |
| `ownerId` | `string` | Yes | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `string` | No |  |
| `projectIds` | `table` | No | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `table` | No |  |
| `samplingRate` | `number` | No | The sampling rate for this log drain. |
| `secret` | `string` | No | Custom secret of log drain |
| `source` | `any` | Yes |  |
| `sources` | `table` | Yes | The sources from which logs are currently being delivered to this log drain. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogDrain():create({
  createdAt = --[[ number ]],
  createdFrom = --[[ string ]],
  deliveryFormat = --[[ any ]],
  id = --[[ string ]],
  ownerId = --[[ string ]],
  source = --[[ any ]],
  sources = --[[ table ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LogDrain():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LogDrain():load({ id = "log_drain_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LogDrain():remove({ id = "log_drain_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogDrainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MarketplaceEntity

```lua
local marketplace = client:Marketplace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes |  |
| `already_revoked` | `boolean` | Yes |  |
| `balances` | `table` | Yes |  |
| `billing` | `any` | Yes | Billing data (interim invoicing data). |
| `billingPlan` | `table` | Yes |  |
| `billingPlanId` | `string` | No | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `string` | No |  |
| `client_id` | `string` | No |  |
| `client_secret` | `string` | Yes |  |
| `created` | `string` | Yes | System creation date. |
| `createdAt` | `number` | No |  |
| `data` | `table` | Yes |  |
| `description` | `string` | No |  |
| `discounts` | `table` | No | Invoice discounts. |
| `email` | `string` | Yes |  |
| `eod` | `string` | Yes | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `any` | Yes |  |
| `expires_in` | `number` | Yes |  |
| `externalId` | `string` | No | Partner-supplied Invoice ID, if applicable. |
| `extras` | `table` | No |  |
| `final` | `boolean` | No | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `string` | No |  |
| `id` | `string` | Yes | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `string` | Yes | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `string` | Yes | Invoice date. |
| `invoiceId` | `string` | Yes | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `string` | No | User-readable invoice number. |
| `isArchived` | `boolean` | No |  |
| `items` | `table` | Yes | Invoice items. |
| `memo` | `string` | No | Additional memo for the invoice. |
| `metadata` | `table` | No | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `string` | Yes | The name of the resource as it is recorded in Vercel |
| `notification` | `table` | Yes | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `string` | Yes |  |
| `ownership` | `string` | No |  |
| `paidAt` | `string` | No | Moment the invoice was paid. |
| `partial` | `boolean` | No | If true, will only update the provided secrets |
| `partnerId` | `string` | Yes | The ID provided by the partner for the given resource |
| `period` | `table` | Yes | Subscription period for this billing cycle. |
| `productId` | `string` | Yes | The ID of the product the resource is derived from |
| `protocolSettings` | `table` | No | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `string` | No | The reason for refund. |
| `refundTotal` | `string` | No | Refund amount. |
| `refundedAt` | `string` | No | Most recent moment the invoice was refunded. |
| `revoked` | `boolean` | Yes |  |
| `role` | `string` | Yes | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `string` | Yes |  |
| `secrets` | `table` | Yes |  |
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
| `usage` | `table` | Yes |  |
| `userEmail` | `string` | No |  |
| `validationErrors` | `table` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Marketplace():create({
  installation_id = --[[ string ]],
  access_token = --[[ string ]],
  already_revoked = --[[ boolean ]],
  balances = --[[ table ]],
  billing = --[[ any ]],
  billingPlan = --[[ table ]],
  client_secret = --[[ string ]],
  created = --[[ string ]],
  data = --[[ table ]],
  email = --[[ string ]],
  eod = --[[ string ]],
  event = --[[ any ]],
  expires_in = --[[ number ]],
  id = --[[ string ]],
  internalId = --[[ string ]],
  invoiceDate = --[[ string ]],
  invoiceId = --[[ string ]],
  items = --[[ table ]],
  name = --[[ string ]],
  notification = --[[ table ]],
  origin = --[[ string ]],
  partnerId = --[[ string ]],
  period = --[[ table ]],
  productId = --[[ string ]],
  revoked = --[[ boolean ]],
  role = --[[ string ]],
  scope = --[[ string ]],
  secrets = --[[ table ]],
  slug = --[[ string ]],
  state = --[[ string ]],
  timestamp = --[[ string ]],
  token = --[[ string ]],
  token_type = --[[ string ]],
  total = --[[ string ]],
  updated = --[[ string ]],
  usage = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Marketplace():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Marketplace():load({ installation_id = "installation_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Marketplace():remove({ installation_id = "installation_id", resource_id = "resource_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Marketplace():update({
  installation_id = "installation_id",
  resource_id = "resource_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarketplaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MicrofrontendEntity

```lua
local microfrontend = client:Microfrontend(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `table` | Yes |  |
| `accountId` | `string` | Yes |  |
| `alias` | `table` | Yes |  |
| `analytics` | `table` | Yes |  |
| `applications` | `table` | Yes |  |
| `appliedCve55182Migration` | `boolean` | No |  |
| `autoAssignCustomDomains` | `boolean` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `boolean` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `table` | No |  |
| `buildCommand` | `string` | No |  |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `concurrencyBucketName` | `string` | No |  |
| `connectBuildsEnabled` | `boolean` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `table` | No |  |
| `createdAt` | `number` | No |  |
| `creator` | `any` | No |  |
| `crons` | `table` | Yes |  |
| `customEnvironments` | `table` | No |  |
| `customerSupportCodeVisibility` | `boolean` | No |  |
| `dataCache` | `table` | Yes |  |
| `defaultResourceConfig` | `table` | Yes |  |
| `deploymentExpiration` | `table` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `table` | No | Project shape. |
| `devCommand` | `string` | No |  |
| `directoryListing` | `boolean` | Yes |  |
| `dismissedToasts` | `table` | No |  |
| `enableAffectedProjectsDeployments` | `boolean` | No |  |
| `enableExternalRewriteCaching` | `boolean` | No |  |
| `enablePreviewFeedback` | `boolean` | No |  |
| `enableProductionFeedback` | `boolean` | No |  |
| `env` | `table` | No |  |
| `expiration` | `any` | No |  |
| `features` | `table` | No |  |
| `framework` | `string` | No |  |
| `gitComments` | `table` | Yes |  |
| `gitForkProtection` | `boolean` | No |  |
| `gitLFS` | `boolean` | No |  |
| `gitProviderOptions` | `table` | Yes |  |
| `hasActiveBranches` | `boolean` | No |  |
| `hasDeployments` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No |  |
| `internalRoutes` | `table` | No |  |
| `ipBuckets` | `table` | No |  |
| `jobs` | `table` | No |  |
| `lastAliasRequest` | `table` | Yes |  |
| `lastRollbackTarget` | `table` | No |  |
| `latestDeployments` | `table` | No |  |
| `link` | `string` | No |  |
| `live` | `boolean` | No |  |
| `microfrontends` | `any` | No |  |
| `name` | `string` | Yes |  |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `table` | No |  |
| `options` | `table` | No | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `table` | Yes |  |
| `outputDirectory` | `string` | No |  |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `table` | Yes |  |
| `passwordProtection` | `table` | No |  |
| `paused` | `boolean` | No |  |
| `permissions` | `table` | No |  |
| `productionDeploymentsFastLane` | `boolean` | No |  |
| `protectedSourcemaps` | `boolean` | No |  |
| `protectionBypass` | `table` | No |  |
| `protectionConfig` | `table` | No |  |
| `resourceConfig` | `table` | Yes |  |
| `rollbackDescription` | `table` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `table` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No |  |
| `sandbox` | `table` | No |  |
| `schema` | `string` | No | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `table` | No |  |
| `serverlessFunctionZeroConfigFailover` | `boolean` | No |  |
| `services` | `table` | No |  |
| `skewProtectionAllowedDomains` | `table` | No |  |
| `skewProtectionBoundaryAt` | `number` | No |  |
| `skewProtectionMaxAge` | `number` | No |  |
| `skipGitConnectDuringLink` | `boolean` | No |  |
| `sourceFilesOutsideRootDirectory` | `boolean` | No |  |
| `speedInsights` | `table` | Yes |  |
| `ssoProtection` | `table` | Yes |  |
| `staticIps` | `table` | Yes |  |
| `targets` | `table` | No |  |
| `tier` | `string` | No |  |
| `tracing` | `table` | No |  |
| `transferCompletedAt` | `number` | No |  |
| `transferStartedAt` | `number` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `any` | No |  |
| `trustedSources` | `table` | No |  |
| `updatedAt` | `number` | No |  |
| `usageStatus` | `table` | Yes |  |
| `v0` | `boolean` | No |  |
| `v0Created` | `boolean` | No |  |
| `version` | `string` | No | The version of the microfrontends config schema. |
| `webAnalytics` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Microfrontend():create({
  abuse = --[[ table ]],
  accountId = --[[ string ]],
  alias = --[[ table ]],
  analytics = --[[ table ]],
  applications = --[[ table ]],
  crons = --[[ table ]],
  dataCache = --[[ table ]],
  defaultResourceConfig = --[[ table ]],
  deploymentExpiration = --[[ table ]],
  directoryListing = --[[ boolean ]],
  gitComments = --[[ table ]],
  gitProviderOptions = --[[ table ]],
  id = --[[ string ]],
  lastAliasRequest = --[[ table ]],
  name = --[[ string ]],
  nodeVersion = --[[ string ]],
  optionsAllowlist = --[[ table ]],
  passport = --[[ table ]],
  resourceConfig = --[[ table ]],
  rollbackDescription = --[[ table ]],
  rollingRelease = --[[ table ]],
  speedInsights = --[[ table ]],
  ssoProtection = --[[ table ]],
  staticIps = --[[ table ]],
  usageStatus = --[[ table ]],
  webAnalytics = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Microfrontend():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Microfrontend():load({ project_id_or_name = "project_id_or_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MicrofrontendEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NetworkEntity

```lua
local network = client:Network(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsAccountId` | `string` | Yes | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | `table` | No | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `string` | Yes | The AWS Region in which the network exists. |
| `cidr` | `string` | Yes | The CIDR range of the Network. |
| `createdAt` | `number` | Yes | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `table` | No |  |
| `hostedZones` | `table` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `string` | Yes | The unique identifier of the Network. |
| `name` | `string` | Yes | The name of the network. |
| `peeringConnections` | `table` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `table` | Yes | Metadata about any projects associated with the Network. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Network():create({
  awsAccountId = --[[ string ]],
  awsRegion = --[[ string ]],
  cidr = --[[ string ]],
  createdAt = --[[ number ]],
  hostedZones = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  peeringConnections = --[[ table ]],
  projects = --[[ table ]],
  status = --[[ string ]],
  teamId = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Network():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Network():load({ id = "network_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Network():remove({ id = "network_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Network():update({
  id = "network_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NetworkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NetworkingEntity

```lua
local networking = client:Networking(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `builds` | `boolean` | No | Whether to use Static IPs for builds. |
| `regions` | `table` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Networking():remove({ endpoint_id = "endpoint_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Networking():update({
  id_or_name = "id_or_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NetworkingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservabilityEntity

```lua
local observability = client:Observability(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Observability():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Observability():update({
  project_id_or_name = "project_id_or_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservabilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PrivateLinkEndpointEntity

```lua
local private_link_endpoint = client:PrivateLinkEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsDnsEntries` | `table` | No | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `string` | Yes | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `number` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `boolean` | No | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `string` | Yes | The unique identifier of the PrivateLink endpoint. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `table` | No | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PrivateLinkEndpoint():create({
  awsServiceName = --[[ string ]],
  createdAt = --[[ number ]],
  endpointId = --[[ string ]],
  name = --[[ string ]],
  projectId = --[[ string ]],
  status = --[[ string ]],
  teamId = --[[ string ]],
  updatedAt = --[[ number ]],
  vercelRegion = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PrivateLinkEndpoint():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PrivateLinkEndpoint():load({ id = "private_link_endpoint_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PrivateLinkEndpoint():update({
  id = "private_link_endpoint_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrivateLinkEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectEntity

```lua
local project = client:Project(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `table` | Yes |  |
| `acceptedPolicies` | `table` | No |  |
| `accountId` | `string` | Yes |  |
| `alias` | `table` | Yes |  |
| `analytics` | `table` | Yes |  |
| `apexName` | `string` | Yes |  |
| `appliedCve55182Migration` | `boolean` | No |  |
| `autoAssignCustomDomains` | `boolean` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `boolean` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `table` | No |  |
| `buildCommand` | `string` | No | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `comment` | `string` | No | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `string` | No |  |
| `configurationId` | `string` | No |  |
| `connectBuildsEnabled` | `boolean` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `table` | No | The list of connections from project environment to Secure Compute network |
| `contentHint` | `any` | No |  |
| `createdAt` | `number` | No |  |
| `createdBy` | `string` | No |  |
| `creator` | `any` | No |  |
| `crons` | `table` | Yes |  |
| `customEnvironmentId` | `string` | No |  |
| `customEnvironmentIds` | `table` | No | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `table` | No |  |
| `customerSupportCodeVisibility` | `boolean` | No | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `table` | Yes |  |
| `decrypted` | `boolean` | No |  |
| `defaultResourceConfig` | `table` | Yes |  |
| `deploymentExpiration` | `table` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `table` | No | Project shape. |
| `devCommand` | `string` | No | The dev command for this project. |
| `directoryListing` | `boolean` | Yes |  |
| `dismissedToasts` | `table` | No | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `string` | No |  |
| `edgeConfigTokenId` | `string` | No |  |
| `enableAffectedProjectsDeployments` | `boolean` | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `boolean` | No | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `boolean` | No | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `boolean` | No | Opt-in to production toolbar on the project level |
| `env` | `table` | No |  |
| `environmentVariables` | `table` | No | Collection of ENV Variables the Project will use |
| `expiration` | `any` | No |  |
| `features` | `table` | No |  |
| `framework` | `string` | No | The framework that is being used for this project. |
| `gitBranch` | `string` | No | Git branch to link the project domain |
| `gitComments` | `table` | Yes |  |
| `gitForkProtection` | `boolean` | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `boolean` | No | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `table` | Yes |  |
| `gitRepository` | `table` | Yes | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `boolean` | No |  |
| `hasDeployments` | `boolean` | No |  |
| `hostname` | `string` | Yes | The deployment hostname to scope the trace session to. |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No | The install command for this project. |
| `integrations` | `table` | No |  |
| `internalContentHint` | `table` | Yes | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `table` | No |  |
| `ipBuckets` | `table` | No |  |
| `jobs` | `table` | No |  |
| `key` | `string` | Yes | The name of the environment variable |
| `lastAliasRequest` | `table` | Yes |  |
| `lastRollbackTarget` | `table` | No |  |
| `latestDeployments` | `table` | No |  |
| `legacyValue` | `string` | No | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `string` | No |  |
| `live` | `boolean` | No |  |
| `microfrontends` | `any` | No |  |
| `name` | `string` | Yes | The desired name for the project |
| `newProjectName` | `string` | No | The desired name for the project |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `table` | No | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `table` | Yes | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | No | The output directory of the project. |
| `paidFeatures` | `table` | No |  |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `table` | Yes | Passport configuration for the project. |
| `passwordProtection` | `table` | No | Allows to protect project deployments with a password |
| `paused` | `boolean` | No |  |
| `permissions` | `table` | No |  |
| `previewDeploymentSuffix` | `string` | No | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `boolean` | No | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `boolean` | No |  |
| `projectId` | `string` | Yes | The unique target project identifier |
| `protectedSourcemaps` | `boolean` | No | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `table` | No |  |
| `protectionConfig` | `table` | No |  |
| `publicSource` | `boolean` | No | Deprecated. |
| `redirect` | `string` | No | Target destination domain for redirect |
| `redirectStatusCode` | `number` | No | Status code for domain redirect |
| `resourceConfig` | `table` | Yes | Specifies resource override configuration for the project |
| `rollbackDescription` | `table` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `table` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `table` | No | Specifies the default region and failover regions for sandboxes created in the project |
| `security` | `table` | No |  |
| `serverlessFunctionRegion` | `string` | No | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `boolean` | No | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `table` | No |  |
| `skewProtectionAllowedDomains` | `table` | No | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `number` | No | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `number` | No | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `boolean` | No | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `boolean` | No | Indicates if there are source files outside of the root directory |
| `speedInsights` | `table` | Yes |  |
| `ssoProtection` | `table` | Yes | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `table` | Yes | Manage Static IPs for this project |
| `sunsetSecretId` | `string` | No | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `any` | No | The target environment of the environment variable |
| `targets` | `table` | No |  |
| `tier` | `string` | No |  |
| `token` | `string` | Yes |  |
| `tracing` | `table` | No | Tracing configuration for this project |
| `transferCompletedAt` | `number` | No |  |
| `transferStartedAt` | `number` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `any` | No | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `table` | No | Deployment Protection Trusted Sources |
| `type` | `string` | Yes | The type of environment variable |
| `updatedAt` | `number` | No |  |
| `updatedBy` | `string` | No |  |
| `usageStatus` | `table` | Yes |  |
| `v0` | `boolean` | No |  |
| `v0Created` | `boolean` | No |  |
| `value` | `string` | Yes | The value of the environment variable |
| `verification` | `table` | No | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `boolean` | Yes | `true` if the domain is verified for use with the project. |
| `visibility` | `string` | No | User-facing config/secret model. |
| `webAnalytics` | `table` | Yes |  |

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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Project():create({
  deployment_id = --[[ string ]],
  id = --[[ string ]],
  abuse = --[[ table ]],
  accountId = --[[ string ]],
  alias = --[[ table ]],
  analytics = --[[ table ]],
  apexName = --[[ string ]],
  crons = --[[ table ]],
  dataCache = --[[ table ]],
  defaultResourceConfig = --[[ table ]],
  deploymentExpiration = --[[ table ]],
  directoryListing = --[[ boolean ]],
  gitComments = --[[ table ]],
  gitProviderOptions = --[[ table ]],
  gitRepository = --[[ table ]],
  hostname = --[[ string ]],
  internalContentHint = --[[ table ]],
  key = --[[ string ]],
  lastAliasRequest = --[[ table ]],
  name = --[[ string ]],
  nodeVersion = --[[ string ]],
  optionsAllowlist = --[[ table ]],
  passport = --[[ table ]],
  projectId = --[[ string ]],
  resourceConfig = --[[ table ]],
  rollbackDescription = --[[ table ]],
  rollingRelease = --[[ table ]],
  speedInsights = --[[ table ]],
  ssoProtection = --[[ table ]],
  staticIps = --[[ table ]],
  token = --[[ string ]],
  type = --[[ string ]],
  usageStatus = --[[ table ]],
  value = --[[ string ]],
  verified = --[[ boolean ]],
  webAnalytics = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Project():load({ id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Project():remove({ id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Project():update({
  id = "project_id",
  code = "code",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectMemberEntity

```lua
local project_member = client:ProjectMember(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectMember():create({
  id_or_name = --[[ string ]],
  id = --[[ string ]],
  role = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectMember():load({ id_or_name = "id_or_name" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectMember():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectRouteEntity

```lua
local project_route = client:ProjectRoute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actions` | `table` | Yes |  |
| `alias` | `string` | No | The staging alias for previewing this version. |
| `conditions` | `table` | No |  |
| `createdBy` | `string` | Yes | The user who created this version. |
| `currentRoute` | `table` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the version. |
| `isLive` | `boolean` | No | Whether this version is currently live in production. |
| `isStaging` | `boolean` | No | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `number` | Yes | Timestamp of when this version was last modified. |
| `name` | `string` | Yes |  |
| `overwrite` | `boolean` | No |  |
| `pathCondition` | `table` | Yes |  |
| `position` | `table` | No | Controls where the route is inserted. |
| `prompt` | `string` | Yes |  |
| `restore` | `boolean` | No | If true, restores the staged route to the value in the production version. |
| `route` | `table` | Yes | The full route object to replace the existing route with |
| `routes` | `table` | No |  |
| `ruleCount` | `number` | No | The number of routing rules in this version. |
| `s3Key` | `string` | Yes | The S3 key where the routing rules are stored. |
| `version` | `table` | Yes | A version of routing rules stored in S3. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectRoute():create({
  id = --[[ string ]],
  action = --[[ string ]],
  actions = --[[ table ]],
  createdBy = --[[ string ]],
  currentRoute = --[[ table ]],
  description = --[[ string ]],
  lastModified = --[[ number ]],
  name = --[[ string ]],
  pathCondition = --[[ table ]],
  prompt = --[[ string ]],
  route = --[[ table ]],
  s3Key = --[[ string ]],
  version = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectRoute():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectRoute():load({ id = "project_route_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectRoute():remove({ id = "project_route_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectRoute():update({
  id = "project_route_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectRouteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QueryEntity

```lua
local query = client:Query(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregation` | `string` | No | Aggregation function to apply. |
| `bucketTimezone` | `string` | No | IANA timezone (e.g. |
| `endTime` | `string` | No | End timestamp |
| `filter` | `string` | No | Filter to apply to the query. |
| `granularity` | `table` | No | Time bucket size |
| `groupBy` | `table` | No | Dimensions to group results by. |
| `limit` | `number` | No | Maximum number of results |
| `metric` | `string` | Yes | Metric id |
| `orderBy` | `string` | No | Rollup column to order grouped results by. |
| `orderDirection` | `string` | No | Direction to order grouped results by. |
| `scope` | `table` | Yes | Owner or project scope for the query |
| `startTime` | `string` | No | Start timestamp |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Query():create({
  metric = --[[ string ]],
  scope = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RecordEntity

```lua
local record = client:Record(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Record():load({ id = "record_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecordEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RollingReleaseEntity

```lua
local rolling_release = client:RollingRelease(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeStage` | `table` | Yes | The currently active stage, null if the rollout is aborted |
| `advancementType` | `string` | Yes | The advancement type of the rolling release |
| `canaryDeployment` | `table` | Yes | The canary deployment being rolled out |
| `currentCanaryPercentage` | `number` | No | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `table` | Yes | The current deployment receiving production traffic |
| `nextStage` | `table` | Yes | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `string` | Yes | The ID of a deployment queued for the next rolling release |
| `stages` | `table` | Yes | All stages configured for this rolling release |
| `startedAt` | `number` | Yes | Unix timestamp in milliseconds when the rolling release started |
| `state` | `string` | Yes | The current state of the rolling release |
| `substate` | `string` | Yes | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `number` | Yes | Unix timestamp in milliseconds when the rolling release was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RollingRelease():create({
  project_id = --[[ string ]],
  activeStage = --[[ table ]],
  advancementType = --[[ string ]],
  canaryDeployment = --[[ table ]],
  currentDeployment = --[[ table ]],
  nextStage = --[[ table ]],
  queuedDeploymentId = --[[ string ]],
  stages = --[[ table ]],
  startedAt = --[[ number ]],
  state = --[[ string ]],
  substate = --[[ string ]],
  updatedAt = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RollingRelease():load({ id_or_name = "id_or_name" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:RollingRelease():remove({ project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RollingRelease():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RollingReleaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SandboxEntity

```lua
local sandbox = client:Sandbox(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `args` | `table` | Yes | The arguments of the command. |
| `command` | `string` | Yes | The executable or shell command to run. |
| `createdAt` | `number` | Yes | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `string` | No | The method used to create the snapshot. |
| `currentSandboxName` | `string` | No | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `string` | No | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `string` | No | The snapshot ID to set as the current snapshot. |
| `cwd` | `string` | Yes | The current working directory of the command. |
| `durationMs` | `number` | No | Duration of the command execution in milliseconds. |
| `env` | `table` | No | Additional environment variables to set for this command. |
| `exitCode` | `number` | Yes | If the command did finish, the exit code. |
| `expiration` | `any` | No | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `number` | No | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `table` | No | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `string` | Yes | The ID of the command. |
| `image` | `string` | No | Image to use for the sandbox. |
| `keepLastSnapshots` | `table` | Yes | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `number` | Yes | The last time the snapshot was used (e.g. |
| `logs` | `boolean` | No | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `number` | Yes | The maximum drive size in bytes. |
| `memory` | `number` | No | Memory allocated in MB. |
| `mounts` | `table` | No | List of drives to mount to the sandbox at the provided path. |
| `name` | `string` | Yes | The name of the command. |
| `networkId` | `string` | No | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `any` | No | Network policy configuration. |
| `parentId` | `string` | No | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `string` | Yes | The path of the directory to create. |
| `persistent` | `boolean` | No | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `table` | No | List of ports to expose from the sandbox. |
| `projectId` | `string` | Yes | The project that owns the drive. |
| `recursive` | `boolean` | No | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `string` | No | The region where the snapshot is stored. |
| `regions` | `table` | No | The regions where the snapshot is available. |
| `resources` | `table` | No | Resources to define the VM |
| `resumed` | `boolean` | Yes |  |
| `routes` | `table` | Yes |  |
| `runtime` | `string` | No | The runtime environment for the sandbox. |
| `sandbox` | `table` | Yes | This object contains information related to a Vercel NamedSandbox. |
| `session` | `table` | Yes | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `string` | Yes | The ID of the session associated with the command. |
| `sizeBytes` | `number` | Yes | The size of the snapshot in bytes. |
| `snapshotExpiration` | `any` | No | Default snapshot expiration time in milliseconds. |
| `source` | `any` | No | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `string` | Yes | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `number` | Yes | When the command was started, in milliseconds since the epoch. |
| `status` | `string` | Yes | The status of the snapshot. |
| `statusUpdatedAt` | `number` | Yes | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `boolean` | No | Execute the command with root (superuser) privileges. |
| `tags` | `table` | No | Key-value tags to associate with the sandbox. |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Sandbox():create({
  name = --[[ string ]],
  args = --[[ table ]],
  command = --[[ string ]],
  createdAt = --[[ number ]],
  cwd = --[[ string ]],
  exitCode = --[[ number ]],
  id = --[[ string ]],
  keepLastSnapshots = --[[ table ]],
  lastUsedAt = --[[ number ]],
  maxSizeBytes = --[[ number ]],
  path = --[[ string ]],
  projectId = --[[ string ]],
  resumed = --[[ boolean ]],
  routes = --[[ table ]],
  sandbox = --[[ table ]],
  session = --[[ table ]],
  sessionId = --[[ string ]],
  sizeBytes = --[[ number ]],
  sourceSessionId = --[[ string ]],
  startedAt = --[[ number ]],
  status = --[[ string ]],
  statusUpdatedAt = --[[ number ]],
  updatedAt = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Sandbox():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Sandbox():load({ id = "sandbox_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Sandbox():remove({ id = "sandbox_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Sandbox():update({
  id = "sandbox_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SandboxEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SchemaEntity

```lua
local schema = client:Schema(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregations` | `table` | Yes |  |
| `defaultAggregation` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dimensions` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `unit` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Schema():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Schema():load({ id = "schema_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SchemaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecurityEntity

```lua
local security = client:Security(nil)
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
| `action` | `table` | Yes |  |
| `action_type` | `string` | Yes |  |
| `active` | `boolean` | Yes |  |
| `allSources` | `boolean` | No |  |
| `botIdEnabled` | `boolean` | No |  |
| `changes` | `table` | Yes |  |
| `conditionGroup` | `table` | Yes |  |
| `conditions` | `table` | No |  |
| `count` | `number` | Yes |  |
| `crs` | `table` | Yes | Custom Ruleset |
| `description` | `string` | No |  |
| `domain` | `string` | No |  |
| `endTime` | `string` | Yes |  |
| `firewallEnabled` | `boolean` | Yes |  |
| `host` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ips` | `table` | Yes |  |
| `isActive` | `boolean` | Yes |  |
| `logHeaders` | `any` | No |  |
| `managedRules` | `table` | No |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `ownerId` | `string` | Yes |  |
| `projectKey` | `string` | Yes |  |
| `projectScope` | `boolean` | No | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `ruleName` | `string` | Yes |  |
| `rules` | `table` | Yes |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Security():create({
  project_id = --[[ string ]],
  CreatedAt = --[[ string ]],
  Domain = --[[ string ]],
  Id = --[[ string ]],
  Ip = --[[ string ]],
  OwnerId = --[[ string ]],
  UpdatedAt = --[[ string ]],
  UpdatedAtHour = --[[ string ]],
  action = --[[ table ]],
  action_type = --[[ string ]],
  active = --[[ boolean ]],
  changes = --[[ table ]],
  conditionGroup = --[[ table ]],
  count = --[[ number ]],
  crs = --[[ table ]],
  endTime = --[[ string ]],
  firewallEnabled = --[[ boolean ]],
  host = --[[ string ]],
  id = --[[ string ]],
  ips = --[[ table ]],
  isActive = --[[ boolean ]],
  name = --[[ string ]],
  ownerId = --[[ string ]],
  projectKey = --[[ string ]],
  public_ip = --[[ string ]],
  ruleId = --[[ string ]],
  ruleName = --[[ string ]],
  rules = --[[ table ]],
  startTime = --[[ string ]],
  updatedAt = --[[ string ]],
  version = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Security():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Security():load({ project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Security():remove({ config_version = "config_version" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Security():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecurityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SegmentEntity

```lua
local segment = client:Segment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | Yes |  |
| `createdBy` | `string` | No |  |
| `data` | `table` | Yes |  |
| `description` | `string` | No |  |
| `hint` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `metadata` | `table` | No |  |
| `projectId` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `number` | Yes |  |
| `usedByFlags` | `table` | No |  |
| `usedBySegments` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Segment():load({ id = "segment_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StorageEntity

```lua
local storage = client:Storage(nil)
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
| `projectFilter` | `table` | No |  |
| `projectId` | `string` | No | The project this store is scoped to. |
| `projectsMetadata` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Storage():create({
  count = --[[ number ]],
  isTokenExpired = --[[ boolean ]],
  name = --[[ string ]],
  projectsMetadata = --[[ table ]],
  region = --[[ string ]],
  size = --[[ number ]],
  status = --[[ string ]],
  usageQuotaExceeded = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Storage():load({ id = "storage_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Storage():remove({ id = "storage_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StorageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamEntity

```lua
local team = client:Team(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessRequestedAt` | `number` | Yes | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `number` | No | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `number` | No | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `table` | No | Attribution information for the session or current page |
| `avatar` | `string` | Yes | The ID of the file used as avatar for this Team. |
| `billing` | `table` | Yes | The team's billing plan. |
| `bitbucket` | `table` | Yes | Map of the connected Bitbucket account. |
| `confirmed` | `boolean` | Yes | Current status of the membership. |
| `connect` | `table` | No |  |
| `createdAt` | `number` | Yes | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `string` | Yes | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `table` | No | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `table` | No | Default deployment expiration settings for this team |
| `defaultPassport` | `table` | Yes | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `table` | No | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `table` | No | Default roles for the team. |
| `deploymentPolicy` | `table` | No | Composable deployment-time policy for the team. |
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
| `github` | `table` | Yes | Map of the connected GitHub account. |
| `gitlab` | `table` | Yes | Map of the connected GitLab account. |
| `hideIpAddresses` | `boolean` | No | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `boolean` | No | Indicates if IP addresses should be accessible in log drains |
| `id` | `string` | Yes | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `number` | No | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `string` | No | Code that can be used to join this Team. |
| `ipBuckets` | `table` | No |  |
| `joinedFrom` | `table` | Yes | A map that describes the origin from where the user joined. |
| `membership` | `table` | Yes | The membership of the authenticated User in relation to the Team. |
| `name` | `string` | Yes | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `table` | Yes | NSNB configuration for the team. |
| `orgRootTeamId` | `string` | No | Best-effort ID of the organization’s root billing team. |
| `pagination` | `table` | Yes | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `string` | No | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `number` | No | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `boolean` | No | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `string` | No | The hostname that is current set as preview deployment suffix. |
| `projects` | `table` | No |  |
| `regenerateInviteCode` | `boolean` | No | Create a new invite code and replace the current one. |
| `remoteCaching` | `table` | No | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `boolean` | No | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `table` | No | Resource configuration for the team. |
| `role` | `string` | No | The role in the team of the member. |
| `saml` | `table` | Yes | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `string` | No | Sensitive environment variable policy for this team |
| `slug` | `string` | Yes | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `string` | Yes | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `table` | Yes | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `table` | Yes | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `table` | Yes | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `table` | Yes | When enabled, creating shareable links requires Owner role. |
| `teamName` | `string` | Yes | The name of the team. |
| `teamPermissions` | `table` | No | The team permissions to set for the member. |
| `teamSlug` | `string` | Yes | The slug of the team. |
| `teams` | `table` | Yes |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Team():create({
  accessRequestedAt = --[[ number ]],
  avatar = --[[ string ]],
  billing = --[[ table ]],
  bitbucket = --[[ table ]],
  confirmed = --[[ boolean ]],
  createdAt = --[[ number ]],
  creatorId = --[[ string ]],
  defaultPassport = --[[ table ]],
  description = --[[ string ]],
  github = --[[ table ]],
  gitlab = --[[ table ]],
  id = --[[ string ]],
  joinedFrom = --[[ table ]],
  membership = --[[ table ]],
  name = --[[ string ]],
  nsnbConfig = --[[ table ]],
  pagination = --[[ table ]],
  saml = --[[ table ]],
  slug = --[[ string ]],
  stagingPrefix = --[[ string ]],
  strictConnectors = --[[ table ]],
  strictDeploymentProtectionSettings = --[[ table ]],
  strictPasswordProtectionSettings = --[[ table ]],
  strictShareableLinks = --[[ table ]],
  teamName = --[[ string ]],
  teamSlug = --[[ string ]],
  teams = --[[ table ]],
  updatedAt = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Team():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Team():load({ id = "team_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Team():remove({ id = "team_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Team():update({
  id = "team_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TldNameEntity

```lua
local tld_name = client:TldName(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TldName():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TldNameEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ToggleEntity

```lua
local toggle = client:Toggle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Toggle():create({
  project_id = --[[ string ]],
  value = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ToggleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `table` | No | The categories that group this event with related event types. |
| `createdAt` | `number` | Yes | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `table` | Yes | A list of "entities" within the event `text`. |
| `id` | `string` | Yes | The unique identifier of the Event. |
| `payload` | `any` | No |  |
| `principal` | `any` | No |  |
| `principalId` | `string` | Yes | The ID of the principal who generated the event. |
| `requestId` | `string` | No |  |
| `sessionId` | `string` | No | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `string` | Yes | The human-readable text of the Event. |
| `tokenId` | `string` | No | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `string` | No | The type of the event. |
| `user` | `table` | Yes | Metadata for {@link userId}. |
| `userId` | `string` | No | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `table` | No | Metadata for {@link viaIds}. |
| `viaIds` | `table` | No | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:User():load({ id = "user_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:User():remove({ id = "user_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VcrEntity

```lua
local vcr = client:Vcr(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arch` | `string` | No | CPU architecture the manifest targets. |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the image was created. |
| `id` | `string` | Yes | Internal identifier of the image. |
| `imageId` | `string` | Yes | Internal identifier of the image the tag points at. |
| `kind` | `string` | Yes | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` | `table` | Yes |  |
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
| `tags` | `table` | Yes | Tags pointing at this image's manifest. |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Vcr():create({
  id_or_name = --[[ string ]],
  project_id = --[[ string ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  imageId = --[[ string ]],
  kind = --[[ string ]],
  layers = --[[ table ]],
  manifestDigest = --[[ string ]],
  name = --[[ string ]],
  projectId = --[[ string ]],
  public = --[[ boolean ]],
  repositoryId = --[[ string ]],
  sizeInBytes = --[[ number ]],
  status = --[[ string ]],
  tag = --[[ string ]],
  tags = --[[ table ]],
  teamId = --[[ string ]],
  teamSlug = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Vcr():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Vcr():load({ id_or_name = "id_or_name", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Vcr():remove({ id_or_name = "id_or_name", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Vcr():update({
  project_slug = "project_slug",
  repository_name = "repository_name",
  team_slug = "team_slug",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VcrEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VcrImageListEntity

```lua
local vcr_image_list = client:VcrImageList(nil)
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
| `tags` | `table` | Yes | Tags pointing at this image's manifest. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VcrImageList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VcrImageListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VcrRepositoryListEntity

```lua
local vcr_repository_list = client:VcrRepositoryList(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VcrRepositoryList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VcrRepositoryListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VcrRepositoryPermissionListEntity

```lua
local vcr_repository_permission_list = client:VcrRepositoryPermissionList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | `string` | Yes | Identifier of the repository the permission grants access to. |
| `teamId` | `string` | Yes | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Yes | Slug of the team that is granted access to the repository. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VcrRepositoryPermissionList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VcrRepositoryPermissionListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebAnalyticsEntity

```lua
local web_analytics = client:WebAnalytics(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any` | Yes |  |
| `query` | `table` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebAnalytics():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebAnalyticsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alertRuleIds` | `table` | No |  |
| `createdAt` | `number` | Yes | A number containing the date when the webhook was created in in milliseconds |
| `events` | `table` | Yes | The webhooks events |
| `id` | `string` | Yes | The webhook id |
| `ownerId` | `string` | Yes | The unique ID of the team the webhook belongs to |
| `projectIds` | `table` | No | The ID of the projects the webhook is associated with |
| `secret` | `string` | Yes | The webhook secret used to sign the payload |
| `updatedAt` | `number` | Yes | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `string` | Yes | A string with the URL of the webhook |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
  createdAt = --[[ number ]],
  events = --[[ table ]],
  id = --[[ string ]],
  ownerId = --[[ string ]],
  secret = --[[ string ]],
  updatedAt = --[[ number ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Webhook():load({ id = "webhook_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ id = "webhook_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
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

