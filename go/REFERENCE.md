# Vercel Golang SDK Reference

Complete API reference for the Vercel Golang SDK.


## VercelSDK

### Constructor

```go
func NewVercelSDK(options map[string]any) *VercelSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *VercelSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *VercelSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AccessGroup(data map[string]any) VercelEntity`

Create a new `AccessGroup` entity instance. Pass `nil` for no initial data.

#### `AiGateway(data map[string]any) VercelEntity`

Create a new `AiGateway` entity instance. Pass `nil` for no initial data.

#### `AiGatewayRule(data map[string]any) VercelEntity`

Create a new `AiGatewayRule` entity instance. Pass `nil` for no initial data.

#### `AiGatewayRuleList(data map[string]any) VercelEntity`

Create a new `AiGatewayRuleList` entity instance. Pass `nil` for no initial data.

#### `AiGatewayVirtualModelConfig(data map[string]any) VercelEntity`

Create a new `AiGatewayVirtualModelConfig` entity instance. Pass `nil` for no initial data.

#### `AiGatewayVirtualModelConfigList(data map[string]any) VercelEntity`

Create a new `AiGatewayVirtualModelConfigList` entity instance. Pass `nil` for no initial data.

#### `Alias(data map[string]any) VercelEntity`

Create a new `Alias` entity instance. Pass `nil` for no initial data.

#### `ApiAiGateway(data map[string]any) VercelEntity`

Create a new `ApiAiGateway` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data map[string]any) VercelEntity`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `Artifact(data map[string]any) VercelEntity`

Create a new `Artifact` entity instance. Pass `nil` for no initial data.

#### `Authentication(data map[string]any) VercelEntity`

Create a new `Authentication` entity instance. Pass `nil` for no initial data.

#### `Billing(data map[string]any) VercelEntity`

Create a new `Billing` entity instance. Pass `nil` for no initial data.

#### `BulkRedirect(data map[string]any) VercelEntity`

Create a new `BulkRedirect` entity instance. Pass `nil` for no initial data.

#### `Cert(data map[string]any) VercelEntity`

Create a new `Cert` entity instance. Pass `nil` for no initial data.

#### `Check(data map[string]any) VercelEntity`

Create a new `Check` entity instance. Pass `nil` for no initial data.

#### `ChecksV2(data map[string]any) VercelEntity`

Create a new `ChecksV2` entity instance. Pass `nil` for no initial data.

#### `Connect(data map[string]any) VercelEntity`

Create a new `Connect` entity instance. Pass `nil` for no initial data.

#### `ConnectConnector(data map[string]any) VercelEntity`

Create a new `ConnectConnector` entity instance. Pass `nil` for no initial data.

#### `ConnectConnectorList(data map[string]any) VercelEntity`

Create a new `ConnectConnectorList` entity instance. Pass `nil` for no initial data.

#### `ConnectConnectorProjectConnectionList(data map[string]any) VercelEntity`

Create a new `ConnectConnectorProjectConnectionList` entity instance. Pass `nil` for no initial data.

#### `ConnectProjectConnection(data map[string]any) VercelEntity`

Create a new `ConnectProjectConnection` entity instance. Pass `nil` for no initial data.

#### `ConnectProjectConnectorConnectionList(data map[string]any) VercelEntity`

Create a new `ConnectProjectConnectorConnectionList` entity instance. Pass `nil` for no initial data.

#### `Deployment(data map[string]any) VercelEntity`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `Dns(data map[string]any) VercelEntity`

Create a new `Dns` entity instance. Pass `nil` for no initial data.

#### `Domain(data map[string]any) VercelEntity`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `DomainsRegistrar(data map[string]any) VercelEntity`

Create a new `DomainsRegistrar` entity instance. Pass `nil` for no initial data.

#### `Drain(data map[string]any) VercelEntity`

Create a new `Drain` entity instance. Pass `nil` for no initial data.

#### `EdgeCache(data map[string]any) VercelEntity`

Create a new `EdgeCache` entity instance. Pass `nil` for no initial data.

#### `Env(data map[string]any) VercelEntity`

Create a new `Env` entity instance. Pass `nil` for no initial data.

#### `Environment(data map[string]any) VercelEntity`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `FeatureFlag(data map[string]any) VercelEntity`

Create a new `FeatureFlag` entity instance. Pass `nil` for no initial data.

#### `File(data map[string]any) VercelEntity`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Flag(data map[string]any) VercelEntity`

Create a new `Flag` entity instance. Pass `nil` for no initial data.

#### `FlagsSdkKeyWithSecret(data map[string]any) VercelEntity`

Create a new `FlagsSdkKeyWithSecret` entity instance. Pass `nil` for no initial data.

#### `GlobalConfig(data map[string]any) VercelEntity`

Create a new `GlobalConfig` entity instance. Pass `nil` for no initial data.

#### `GlobalConfigItem(data map[string]any) VercelEntity`

Create a new `GlobalConfigItem` entity instance. Pass `nil` for no initial data.

#### `GlobalConfigToken(data map[string]any) VercelEntity`

Create a new `GlobalConfigToken` entity instance. Pass `nil` for no initial data.

#### `Integration(data map[string]any) VercelEntity`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Kms(data map[string]any) VercelEntity`

Create a new `Kms` entity instance. Pass `nil` for no initial data.

#### `ListEventType(data map[string]any) VercelEntity`

Create a new `ListEventType` entity instance. Pass `nil` for no initial data.

#### `Log(data map[string]any) VercelEntity`

Create a new `Log` entity instance. Pass `nil` for no initial data.

#### `LogDrain(data map[string]any) VercelEntity`

Create a new `LogDrain` entity instance. Pass `nil` for no initial data.

#### `Marketplace(data map[string]any) VercelEntity`

Create a new `Marketplace` entity instance. Pass `nil` for no initial data.

#### `Microfrontend(data map[string]any) VercelEntity`

Create a new `Microfrontend` entity instance. Pass `nil` for no initial data.

#### `Network(data map[string]any) VercelEntity`

Create a new `Network` entity instance. Pass `nil` for no initial data.

#### `Networking(data map[string]any) VercelEntity`

Create a new `Networking` entity instance. Pass `nil` for no initial data.

#### `Observability(data map[string]any) VercelEntity`

Create a new `Observability` entity instance. Pass `nil` for no initial data.

#### `PrivateLinkEndpoint(data map[string]any) VercelEntity`

Create a new `PrivateLinkEndpoint` entity instance. Pass `nil` for no initial data.

#### `Project(data map[string]any) VercelEntity`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectMember(data map[string]any) VercelEntity`

Create a new `ProjectMember` entity instance. Pass `nil` for no initial data.

#### `ProjectRoute(data map[string]any) VercelEntity`

Create a new `ProjectRoute` entity instance. Pass `nil` for no initial data.

#### `Query(data map[string]any) VercelEntity`

Create a new `Query` entity instance. Pass `nil` for no initial data.

#### `Record(data map[string]any) VercelEntity`

Create a new `Record` entity instance. Pass `nil` for no initial data.

#### `RollingRelease(data map[string]any) VercelEntity`

Create a new `RollingRelease` entity instance. Pass `nil` for no initial data.

#### `Sandbox(data map[string]any) VercelEntity`

Create a new `Sandbox` entity instance. Pass `nil` for no initial data.

#### `Schema(data map[string]any) VercelEntity`

Create a new `Schema` entity instance. Pass `nil` for no initial data.

#### `Security(data map[string]any) VercelEntity`

Create a new `Security` entity instance. Pass `nil` for no initial data.

#### `Segment(data map[string]any) VercelEntity`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `Storage(data map[string]any) VercelEntity`

Create a new `Storage` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) VercelEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TldName(data map[string]any) VercelEntity`

Create a new `TldName` entity instance. Pass `nil` for no initial data.

#### `Toggle(data map[string]any) VercelEntity`

Create a new `Toggle` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) VercelEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Vcr(data map[string]any) VercelEntity`

Create a new `Vcr` entity instance. Pass `nil` for no initial data.

#### `VcrImageList(data map[string]any) VercelEntity`

Create a new `VcrImageList` entity instance. Pass `nil` for no initial data.

#### `VcrRepositoryList(data map[string]any) VercelEntity`

Create a new `VcrRepositoryList` entity instance. Pass `nil` for no initial data.

#### `VcrRepositoryPermissionList(data map[string]any) VercelEntity`

Create a new `VcrRepositoryPermissionList` entity instance. Pass `nil` for no initial data.

#### `WebAnalytics(data map[string]any) VercelEntity`

Create a new `WebAnalytics` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) VercelEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccessGroupEntity

```go
accessGroup := client.AccessGroup(nil)
fmt.Println(accessGroup.GetName()) // "access_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessGroupId` | `string` | Yes | ID of the access group. |
| `createdAt` | `string` | Yes | Timestamp in milliseconds when the access group was created. |
| `entitlements` | `[]any` | No |  |
| `id` | `string` | No |  |
| `isDsyncManaged` | `bool` | Yes |  |
| `membersCount` | `float64` | Yes | Number of members in the access group. |
| `membersToAdd` | `[]any` | No | List of members to add to the access group. |
| `membersToRemove` | `[]any` | No | List of members to remove from the access group. |
| `name` | `string` | Yes | The name of this access group. |
| `projectId` | `string` | Yes |  |
| `projects` | `[]any` | No |  |
| `projectsCount` | `float64` | Yes | Number of projects in the access group. |
| `role` | `string` | Yes | The project role that will be added to this Access Group. |
| `teamId` | `string` | Yes | ID of the team that this access group belongs to. |
| `teamPermissions` | `[]any` | No | Permissions that the team has in the access group. |
| `teamRoles` | `[]any` | No | Roles that the team has in the access group. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AccessGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccessGroup(nil).Load(map[string]any{"id": "access_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AccessGroup(nil).Create(map[string]any{
    "id": "example_id",
    "accessGroupId": "example_accessGroupId",
    "createdAt": "example_createdAt",
    "isDsyncManaged": true,
    "membersCount": 1,
    "name": "example_name",
    "projectId": "example_projectId",
    "projectsCount": 1,
    "role": "example_role",
    "teamId": "example_teamId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccessGroup(nil).Update(map[string]any{
    "id": "access_group_id",
    "access_group_id": "access_group_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AccessGroup(nil).Remove(map[string]any{"id": "access_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccessGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayEntity

```go
aiGateway := client.AiGateway(nil)
fmt.Println(aiGateway.GetName()) // "ai_gateway"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGateway(nil).Remove(map[string]any{"rule_id": "rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayRuleEntity

```go
aiGatewayRule := client.AiGatewayRule(nil)
fmt.Println(aiGatewayRule.GetName()) // "ai_gateway_rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `map[string]any` | No |  |
| `createdAt` | `float64` | Yes |  |
| `createdBy` | `string` | No |  |
| `deleted` | `bool` | No |  |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `match` | `map[string]any` | No |  |
| `ownerId` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `float64` | Yes |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiGatewayRule(nil).Create(map[string]any{
    "createdAt": 1,
    "enabled": true,
    "ownerId": "example_ownerId",
    "ruleId": "example_ruleId",
    "type": "example_type",
    "updatedAt": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayRule(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayRuleListEntity

```go
aiGatewayRuleList := client.AiGatewayRuleList(nil)
fmt.Println(aiGatewayRuleList.GetName()) // "ai_gateway_rule_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `map[string]any` | No |  |
| `createdAt` | `float64` | Yes |  |
| `createdBy` | `string` | No |  |
| `deleted` | `bool` | No |  |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `match` | `map[string]any` | No |  |
| `ownerId` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `float64` | Yes |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayRuleList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayRuleListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayVirtualModelConfigEntity

```go
aiGatewayVirtualModelConfig := client.AiGatewayVirtualModelConfig(nil)
fmt.Println(aiGatewayVirtualModelConfig.GetName()) // "ai_gateway_virtual_model_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `bool` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `[]any` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | No | Use caching if available. |
| `createdAt` | `float64` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `string` | No | User or app id that created this VMC. |
| `deleted` | `bool` | Yes | Whether this VMC is soft-deleted. |
| `description` | `string` | No | Optional description for UI. |
| `disallowPromptTraining` | `bool` | No | Only use providers that will not train on your prompts. |
| `displayName` | `string` | No | Human-readable name for UI. |
| `has` | `[]any` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | No | Only use HIPAA-compliant providers. |
| `id` | `string` | No |  |
| `inferenceRegion` | `map[string]any` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `[]any` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `[]any` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `[]any` | No | Restrict routing to only these providers. |
| `providerOptions` | `map[string]any` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `[]any` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `map[string]any` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `[]any` | No | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | No | For kind=router: how to order candidates. |
| `serviceTier` | `string` | No | Service tier for providers that support it. |
| `sort` | `string` | No | Rank eligible providers by an attribute. |
| `speed` | `string` | No | Only use fastest providers with short timeouts. |
| `status` | `string` | Yes | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float64` | Yes | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | No | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Yes | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | No | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | No | Only use providers with zero data retention. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayVirtualModelConfig(nil).Load(map[string]any{"id": "ai_gateway_virtual_model_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiGatewayVirtualModelConfig(nil).Create(map[string]any{
    "createdAt": 1,
    "deleted": true,
    "kind": "example_kind",
    "ownerId": "example_ownerId",
    "status": "example_status",
    "updatedAt": 1,
    "virtualModelSlug": "example_virtualModelSlug",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayVirtualModelConfig(nil).Update(map[string]any{
    "id": "ai_gateway_virtual_model_config_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayVirtualModelConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayVirtualModelConfigListEntity

```go
aiGatewayVirtualModelConfigList := client.AiGatewayVirtualModelConfigList(nil)
fmt.Println(aiGatewayVirtualModelConfigList.GetName()) // "ai_gateway_virtual_model_config_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `bool` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `[]any` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | No | Use caching if available. |
| `createdAt` | `float64` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `string` | No | User or app id that created this VMC. |
| `deleted` | `bool` | Yes | Whether this VMC is soft-deleted. |
| `description` | `string` | No | Optional description for UI. |
| `disallowPromptTraining` | `bool` | No | Only use providers that will not train on your prompts. |
| `displayName` | `string` | No | Human-readable name for UI. |
| `has` | `[]any` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | No | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `map[string]any` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `[]any` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `[]any` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `[]any` | No | Restrict routing to only these providers. |
| `providerOptions` | `map[string]any` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `[]any` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `map[string]any` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `[]any` | No | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | No | For kind=router: how to order candidates. |
| `serviceTier` | `string` | No | Service tier for providers that support it. |
| `sort` | `string` | No | Rank eligible providers by an attribute. |
| `speed` | `string` | No | Only use fastest providers with short timeouts. |
| `status` | `string` | Yes | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float64` | Yes | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | No | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Yes | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | No | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | No | Only use providers with zero data retention. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayVirtualModelConfigList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayVirtualModelConfigListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AliasEntity

```go
alias := client.Alias(nil)
fmt.Println(alias.GetName()) // "alias"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | `string` | Yes | The date when the alias was created |
| `createdAt` | `float64` | No | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `map[string]any` | Yes | Information of the user who created the alias |
| `deletedAt` | `float64` | No | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `map[string]any` | Yes | A map with the deployment ID, URL and metadata |
| `deploymentId` | `string` | Yes | The deployment ID |
| `id` | `string` | No |  |
| `microfrontends` | `map[string]any` | Yes | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `string` | No | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `string` | Yes | The unique identifier of the project |
| `protectionBypass` | `map[string]any` | No | The protection bypass for the alias |
| `redirect` | `string` | No | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | `float64` | No | Status code to be used on redirect |
| `uid` | `string` | Yes | The unique identifier of the alias |
| `updatedAt` | `float64` | No | The date when the alias was updated in milliseconds since the UNIX epoch |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Alias(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Alias(nil).Load(map[string]any{"id": "alias_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Alias(nil).Create(map[string]any{
    "deployment_id": "example_deployment_id",
    "alias": "example_alias",
    "created": "example_created",
    "creator": map[string]any{},
    "deployment": map[string]any{},
    "deploymentId": "example_deploymentId",
    "microfrontends": map[string]any{},
    "projectId": "example_projectId",
    "uid": "example_uid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Alias(nil).Update(map[string]any{
    "id": "alias_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Alias(nil).Remove(map[string]any{"id": "alias_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AliasEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiAiGatewayEntity

```go
apiAiGateway := client.ApiAiGateway(nil)
fmt.Println(apiAiGateway.GetName()) // "api_ai_gateway"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiAiGateway(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ApiAiGateway(nil).Remove(map[string]any{"vmc_slug": "vmc_slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiAiGatewayEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiKeyEntity

```go
apiKey := client.ApiKey(nil)
fmt.Println(apiKey.GetName()) // "api_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `float64` | Yes | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `map[string]any` | Yes | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `float64` | Yes | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `string` | Yes | The ID of the user who created the API key. |
| `createdByAppId` | `string` | Yes | The ID of the app that created the API key, if any |
| `expiresAt` | `float64` | Yes | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `string` | Yes | The unique identifier of the API key. |
| `leakedAt` | `float64` | Yes | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `string` | Yes | URL where the API key was discovered as leaked. |
| `metadata` | `map[string]any` | No | Generic metadata attached to the API key. |
| `name` | `string` | Yes | The human-readable name of the API key. |
| `partialKey` | `string` | Yes | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `string` | Yes | The ID of the project that this API key grants access to. |
| `purpose` | `string` | Yes | The API key's purpose, i.e. |
| `quota` | `map[string]any` | Yes | AI Gateway quota associated with an API key. |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiKey(nil).Create(map[string]any{
    "activeAt": 1,
    "aiGatewayQuota": map[string]any{},
    "createdAt": 1,
    "createdBy": "example_createdBy",
    "createdByAppId": "example_createdByAppId",
    "expiresAt": 1,
    "id": "example_id",
    "leakedAt": 1,
    "leakedUrl": "example_leakedUrl",
    "name": "example_name",
    "partialKey": "example_partialKey",
    "projectId": "example_projectId",
    "purpose": "example_purpose",
    "quota": map[string]any{},
    "teamId": "example_teamId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ArtifactEntity

```go
artifact := client.Artifact(nil)
fmt.Println(artifact.GetName()) // "artifact"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hashes` | `[]any` | Yes | artifact hashes |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Artifact(nil).Load(map[string]any{"id": "artifact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Artifact(nil).Create(map[string]any{
    "hashes": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Artifact(nil).Update(map[string]any{
    "id": "artifact_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Artifact(nil).Remove(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthenticationEntity

```go
authentication := client.Authentication(nil)
fmt.Println(authentication.GetName()) // "authentication"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `float64` | Yes | Timestamp (in milliseconds) of when the token was most recently used. |
| `createdAt` | `float64` | Yes | Timestamp (in milliseconds) of when the token was created. |
| `expiresAt` | `float64` | No | Timestamp (in milliseconds) of when the token expires. |
| `id` | `string` | Yes | The unique identifier of the token. |
| `leakedAt` | `float64` | No | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | `string` | No | URL where the token was discovered as leaked. |
| `name` | `string` | Yes | The human-readable name of the token. |
| `origin` | `string` | No | The origin of how the token was created. |
| `prefix` | `string` | No | The token's prefix, for identification purposes. |
| `projectId` | `string` | No | The ID of the project to scope this token to |
| `revokedAt` | `float64` | No | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | `[]any` | No | The access scopes granted to the token. |
| `suffix` | `string` | No | The last few characters of the token, for identification purposes. |
| `type` | `string` | Yes | The type of the token. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Authentication(nil).Load(map[string]any{"token_id": "token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Authentication(nil).Create(map[string]any{
    "activeAt": 1,
    "createdAt": 1,
    "id": "example_id",
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Authentication(nil).Remove(map[string]any{"token_id": "token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillingEntity

```go
billing := client.Billing(nil)
fmt.Println(billing.GetName()) // "billing"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Billing(nil).Load(map[string]any{"from": "from", "to": "to"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Billing(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkRedirectEntity

```go
bulkRedirect := client.BulkRedirect(nil)
fmt.Println(bulkRedirect.GetName()) // "bulk_redirect"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | No | The staging link for previewing redirects in this version. |
| `createdBy` | `string` | Yes |  |
| `id` | `string` | Yes | The unique identifier for the version. |
| `isLive` | `bool` | No | Whether this version is currently live in production. |
| `isStaging` | `bool` | No | Whether this version has not been promoted to production yet and is not serving end users. |
| `key` | `string` | Yes | The key of the version. |
| `lastModified` | `float64` | Yes |  |
| `name` | `string` | No | Optional name for the version. |
| `overwrite` | `bool` | No |  |
| `projectId` | `string` | Yes |  |
| `redirect` | `map[string]any` | Yes | The redirect object to edit. |
| `redirectCount` | `float64` | No | The number of redirects in this version. |
| `redirects` | `[]any` | No |  |
| `restore` | `bool` | No | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BulkRedirect(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BulkRedirect(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BulkRedirect(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "createdBy": "example_createdBy",
    "id": "example_id",
    "key": "example_key",
    "lastModified": 1,
    "projectId": "example_projectId",
    "redirect": map[string]any{},
    "teamId": "example_teamId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BulkRedirect(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BulkRedirect(nil).Remove(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkRedirectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CertEntity

```go
cert := client.Cert(nil)
fmt.Println(cert.GetName()) // "cert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoRenew` | `bool` | Yes |  |
| `ca` | `string` | Yes | The certificate authority |
| `cert` | `string` | Yes | The certificate |
| `cns` | `[]any` | Yes | The common names the cert should be issued for |
| `createdAt` | `float64` | Yes |  |
| `expiresAt` | `float64` | Yes |  |
| `id` | `string` | Yes |  |
| `key` | `string` | Yes | The certificate key |
| `skipValidation` | `bool` | No | Skip validation of the certificate |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Cert(nil).Load(map[string]any{"id": "cert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Cert(nil).Create(map[string]any{
    "autoRenew": true,
    "ca": "example_ca",
    "cert": "example_cert",
    "cns": []any{},
    "createdAt": 1,
    "expiresAt": 1,
    "id": "example_id",
    "key": "example_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Cert(nil).Update(map[string]any{
    "id": "cert_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Cert(nil).Remove(map[string]any{"id": "cert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CheckEntity

```go
check := client.Check(nil)
fmt.Println(check.GetName()) // "check"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocking` | `bool` | Yes | Whether the check should block a deployment from succeeding |
| `blocks` | `string` | Yes |  |
| `completedAt` | `float64` | No |  |
| `conclusion` | `any` | No | The result of the check being run |
| `createdAt` | `float64` | Yes |  |
| `deletedAt` | `float64` | No |  |
| `detailsUrl` | `string` | No | URL to display for further details |
| `externalId` | `string` | No | An identifier that can be used as an external reference |
| `id` | `string` | Yes |  |
| `integrationId` | `string` | Yes |  |
| `isRerequestable` | `bool` | Yes |  |
| `metrics` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | The name of the check being created |
| `output` | `map[string]any` | No | The results of the check Run |
| `ownerId` | `string` | Yes |  |
| `path` | `string` | No | Path of the page that is being checked |
| `projectId` | `string` | Yes |  |
| `requires` | `string` | Yes |  |
| `rerequestable` | `bool` | No | Whether a user should be able to request for the check to be rerun if it fails |
| `source` | `any` | Yes |  |
| `sourceIntegrationConfigurationId` | `string` | No |  |
| `sourceKind` | `string` | Yes |  |
| `startedAt` | `float64` | No |  |
| `status` | `any` | No | The current status of the check |
| `targets` | `[]any` | Yes |  |
| `timeout` | `float64` | Yes |  |
| `updatedAt` | `float64` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Check(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Check(nil).Load(map[string]any{"id": "check_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Check(nil).Create(map[string]any{
    "deployment_id": "example_deployment_id",
    "blocking": true,
    "blocks": "example_blocks",
    "createdAt": 1,
    "id": "example_id",
    "integrationId": "example_integrationId",
    "isRerequestable": true,
    "metrics": map[string]any{},
    "name": "example_name",
    "ownerId": "example_ownerId",
    "projectId": "example_projectId",
    "requires": "example_requires",
    "source": "example_source",
    "sourceKind": "example_sourceKind",
    "targets": []any{},
    "timeout": 1,
    "updatedAt": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Check(nil).Update(map[string]any{
    "id": "check_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Check(nil).Remove(map[string]any{"id": "check_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CheckEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChecksV2Entity

```go
checksV2 := client.ChecksV2(nil)
fmt.Println(checksV2.GetName()) // "checks_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkId` | `string` | Yes |  |
| `completedAt` | `float64` | No |  |
| `conclusion` | `string` | No |  |
| `conclusionText` | `string` | No |  |
| `externalId` | `string` | No |  |
| `externalUrl` | `string` | No |  |
| `output` | `map[string]any` | No |  |
| `runs` | `[]any` | Yes |  |
| `status` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ChecksV2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ChecksV2(nil).Load(map[string]any{"check_run_id": "check_run_id", "deployment_id": "deployment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ChecksV2(nil).Create(map[string]any{
    "deployment_id": "example_deployment_id",
    "checkId": "example_checkId",
    "runs": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ChecksV2(nil).Update(map[string]any{
    "check_run_id": "check_run_id",
    "deployment_id": "deployment_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChecksV2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectEntity

```go
connect := client.Connect(nil)
fmt.Println(connect.GetName()) // "connect"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additionalParams` | `map[string]any` | No |  |
| `audience` | `[]any` | No |  |
| `authorizationDetails` | `[]any` | No |  |
| `authorizationId` | `string` | No | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `map[string]any` | No | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `map[string]any` | Yes |  |
| `deviceCode` | `bool` | No |  |
| `displayName` | `string` | Yes | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `float64` | Yes |  |
| `expiresInMs` | `float64` | No |  |
| `externalSubject` | `string` | No |  |
| `id` | `string` | Yes | Client id (e.g. |
| `installationId` | `string` | No |  |
| `metadata` | `map[string]any` | No | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `string` | Yes | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `string` | No |  |
| `resources` | `[]any` | No |  |
| `returnUrl` | `string` | No |  |
| `scopes` | `[]any` | No |  |
| `service` | `string` | No | Resolved service id when known (e.g. |
| `serviceName` | `string` | No | Curated display name of the resolved service (e.g. |
| `subject` | `any` | No |  |
| `tenantId` | `string` | No |  |
| `token` | `string` | Yes |  |
| `tokenGroupId` | `string` | No | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` | `string` | Yes |  |
| `type` | `string` | Yes | Client type (e.g. |
| `uid` | `string` | Yes | Client uid (e.g. |
| `validityBufferMs` | `float64` | No |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Connect(nil).Create(map[string]any{
    "connector": "example_connector",
    "displayName": "example_displayName",
    "expiresAt": 1,
    "id": "example_id",
    "name": "example_name",
    "token": "example_token",
    "tokenId": "example_tokenId",
    "type": "example_type",
    "uid": "example_uid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Connect(nil).Remove(map[string]any{"connector": "connector"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectConnectorEntity

```go
connectConnector := client.ConnectConnector(nil)
fmt.Println(connectConnector.GetName()) // "connect_connector"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `map[string]any` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | No | The connection method this connector was created from, when the create request named one. |
| `connector` | `map[string]any` | Yes | Updated connector. |
| `createdAt` | `float64` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `any` | No | Principal that created the connector. |
| `creationMode` | `string` | No | How the connector row was originally created. |
| `data` | `any` | Yes | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `string` | No | Installation used when a token request does not specify an installation. |
| `destinations` | `[]any` | Yes | Complete replacement set of trigger destinations. |
| `devsite` | `string` | No | Developer website for the connected service. |
| `displayName` | `string` | Yes | Human-readable connector name. |
| `docsite` | `string` | No | Developer documentation for the connected service. |
| `environments` | `[]any` | No | Environments for the project connection. |
| `events` | `[]any` | No | Known events this connector subscribes to (e.g. |
| `icon` | `string` | No | Connector branding icon. |
| `id` | `string` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `bool` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `map[string]any` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Yes | Connector name within the owning team. |
| `params` | `map[string]any` | No | Values for the selected connection method's template fields. |
| `projectId` | `string` | No | Project to connect during creation. |
| `reconsentNeeded` | `map[string]any` | Yes | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `string` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float64` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `bool` | No | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `string` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `map[string]any` | Yes | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `[]any` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `any` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `string` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `any` | No | Initial trigger destination. |
| `triggerDestinations` | `[]any` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `map[string]any` | Yes | Incoming trigger configuration for the connector. |
| `type` | `string` | Yes | Connector implementation type. |
| `typeIcon` | `string` | No | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Yes | Human-readable name of the connector type. |
| `uid` | `string` | Yes | Team-scoped UID. |
| `updatedAt` | `float64` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `any` | No | Principal that most recently updated the connector. |
| `userTokens` | `map[string]any` | Yes | User-token capabilities and known grants for the connector. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConnectConnector(nil).Load(map[string]any{"id": "connect_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConnectConnector(nil).Create(map[string]any{
    "appTokens": map[string]any{},
    "connector": map[string]any{},
    "createdAt": 1,
    "data": "example_data",
    "destinations": []any{},
    "displayName": "example_displayName",
    "id": "example_id",
    "name": "example_name",
    "reconsentNeeded": map[string]any{},
    "service": "example_service",
    "serviceSync": map[string]any{},
    "supportedSubjectTypes": []any{},
    "supportsIcon": "example_supportsIcon",
    "supportsInstallation": true,
    "supportsRevocation": true,
    "supportsTriggers": true,
    "triggers": map[string]any{},
    "type": "example_type",
    "typeName": "example_typeName",
    "uid": "example_uid",
    "updatedAt": 1,
    "userTokens": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ConnectConnector(nil).Update(map[string]any{
    "id": "connect_connector_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectConnectorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectConnectorListEntity

```go
connectConnectorList := client.ConnectConnectorList(nil)
fmt.Println(connectConnectorList.GetName()) // "connect_connector_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `map[string]any` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | No | The connection method this connector was created from, when the create request named one. |
| `createdAt` | `float64` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `any` | No | Principal that created the connector. |
| `creationMode` | `string` | No | How the connector row was originally created. |
| `defaultInstallationId` | `string` | No | Installation used when a token request does not specify an installation. |
| `devsite` | `string` | No | Developer website for the connected service. |
| `displayName` | `string` | Yes | Human-readable connector name. |
| `docsite` | `string` | No | Developer documentation for the connected service. |
| `events` | `[]any` | No | Known events this connector subscribes to (e.g. |
| `icon` | `string` | No | Connector branding icon. |
| `id` | `string` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `bool` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `map[string]any` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Yes | Connector name within the owning team. |
| `redirectUri` | `string` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float64` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `string` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `[]any` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `any` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `string` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `[]any` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `map[string]any` | Yes | Incoming trigger configuration for the connector. |
| `type` | `string` | Yes | Connector implementation type. |
| `typeIcon` | `string` | No | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Yes | Human-readable name of the connector type. |
| `uid` | `string` | Yes | Team-scoped UID. |
| `updatedAt` | `float64` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `any` | No | Principal that most recently updated the connector. |
| `userTokens` | `map[string]any` | Yes | User-token capabilities and known grants for the connector. |
| `website` | `string` | No | Public website for the connected service. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConnectConnectorList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectConnectorListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectConnectorProjectConnectionListEntity

```go
connectConnectorProjectConnectionList := client.ConnectConnectorProjectConnectionList(nil)
fmt.Println(connectConnectorProjectConnectionList.GetName()) // "connect_connector_project_connection_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float64` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `[]any` | Yes | Environments where the connector is enabled for the project. |
| `project` | `map[string]any` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float64` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConnectConnectorProjectConnectionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectConnectorProjectConnectionListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectProjectConnectionEntity

```go
connectProjectConnection := client.ConnectProjectConnection(nil)
fmt.Println(connectProjectConnection.GetName()) // "connect_project_connection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float64` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `[]any` | Yes | Environments where the connector is enabled for the project. |
| `environments` | `[]any` | Yes | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `map[string]any` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float64` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConnectProjectConnection(nil).Load(map[string]any{"connector_id": "connector_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConnectProjectConnection(nil).Create(map[string]any{
    "connector_id": "example_connector_id",
    "project_id": "example_project_id",
    "connectorId": "example_connectorId",
    "createdAt": 1,
    "enabledEnvironments": []any{},
    "environments": []any{},
    "project": map[string]any{},
    "updatedAt": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectProjectConnectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectProjectConnectorConnectionListEntity

```go
connectProjectConnectorConnectionList := client.ConnectProjectConnectorConnectionList(nil)
fmt.Println(connectProjectConnectorConnectionList.GetName()) // "connect_project_connector_connection_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float64` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `[]any` | Yes | Environments where the connector is enabled for the project. |
| `project` | `map[string]any` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float64` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConnectProjectConnectorConnectionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectProjectConnectorConnectionListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeploymentEntity

```go
deployment := client.Deployment(nil)
fmt.Println(deployment.GetName()) // "deployment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliasAssigned` | `any` | No |  |
| `aliasError` | `map[string]any` | Yes | An error object in case aliasing of the deployment failed. |
| `attribution` | `map[string]any` | No | Commit attribution metadata |
| `buildMachine` | `string` | No | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `float64` | No | Timestamp of when the deployment started building at. |
| `checks` | `map[string]any` | Yes | Detailed information about v2 deployment checks. |
| `checksConclusion` | `string` | No | Conclusion for checks |
| `checksState` | `string` | No | State of all registered checks |
| `connectBuildsEnabled` | `bool` | No | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `string` | No | The ID of Secure Compute network used for this deployment |
| `created` | `float64` | Yes | Timestamp of when the deployment got created. |
| `createdAt` | `float64` | Yes |  |
| `creator` | `map[string]any` | Yes | Metadata information of the deployment creator. |
| `customEnvironment` | `map[string]any` | Yes | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `string` | No | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `string` | No | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `float64` | No | Timestamp of when the deployment got deleted. |
| `deploymentId` | `string` | No | The ID of an existing deployment to redeploy. |
| `errorCode` | `string` | No | Error code when the deployment is in an error state. |
| `errorMessage` | `string` | No | Error message when the deployment is in an canceled or error state. |
| `expiration` | `float64` | No | The expiration configured by the project retention policy |
| `files` | `[]any` | No | The files to include in the deployment. |
| `gitAccessToken` | `string` | No | Available only to Vercel platform accounts. |
| `gitMetadata` | `map[string]any` | No | Populates initial git metadata for different git providers. |
| `gitSource` | `any` | No | Defines the Git Repository source to be deployed. |
| `id` | `string` | No |  |
| `inspectorUrl` | `string` | Yes | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `bool` | No | Deployment can be used for instant rollback |
| `manualProvisioning` | `map[string]any` | Yes |  |
| `meta` | `map[string]any` | No | An object containing the deployment's metadata. |
| `monorepoManager` | `string` | No | The monorepo manager that is being used for this deployment. |
| `name` | `string` | Yes | A string with the project name used in the deployment URL |
| `oomReport` | `string` | No | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `[]any` | No |  |
| `passiveConnectConfigurationId` | `string` | No | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `map[string]any` | Yes | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `bool` | No |  |
| `project` | `string` | No | The target project identifier in which the deployment will be created. |
| `projectId` | `string` | Yes | The project ID of the deployment |
| `projectSettings` | `map[string]any` | No | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `float64` | No | The expiration proposed to replace the existing expiration |
| `ready` | `float64` | No | Timestamp of when the deployment got ready. |
| `readyState` | `string` | Yes |  |
| `readySubstate` | `string` | No | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `map[string]any` | Yes | NSNB Blocked metadata |
| `softDeletedByRetention` | `bool` | No | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | `string` | No | The source of the deployment. |
| `state` | `string` | No | In which state is the deployment. |
| `status` | `string` | No |  |
| `statusText` | `string` | No |  |
| `statusUrl` | `string` | No |  |
| `target` | `string` | No | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | `string` | Yes | The type of the deployment. |
| `uid` | `string` | Yes | The unique identifier of the deployment. |
| `undeleted` | `float64` | No | Timestamp of when the deployment was undeleted. |
| `url` | `string` | Yes | The URL of the deployment. |
| `withLatestCommit` | `bool` | No | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Deployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Deployment(nil).Load(map[string]any{"id": "deployment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Deployment(nil).Create(map[string]any{
    "aliasError": map[string]any{},
    "checks": map[string]any{},
    "created": 1,
    "createdAt": 1,
    "creator": map[string]any{},
    "customEnvironment": map[string]any{},
    "inspectorUrl": "example_inspectorUrl",
    "manualProvisioning": map[string]any{},
    "name": "example_name",
    "platform": map[string]any{},
    "projectId": "example_projectId",
    "readyState": "example_readyState",
    "seatBlock": map[string]any{},
    "type": "example_type",
    "uid": "example_uid",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Deployment(nil).Update(map[string]any{
    "id": "deployment_id",
    "action": "action",
    "integration_id": "integration_id",
    "resource_id": "resource_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Deployment(nil).Remove(map[string]any{"id": "deployment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DnsEntity

```go
dns := client.Dns(nil)
fmt.Println(dns.GetName()) // "dns"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | A comment to add context on what this DNS record is for |
| `createdAt` | `float64` | No |  |
| `creator` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `https` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `mxPriority` | `int` | No | The MX priority value of the DNS record |
| `name` | `string` | Yes | The name of the DNS record |
| `recordType` | `string` | Yes |  |
| `srv` | `map[string]any` | Yes |  |
| `ttl` | `float64` | No | The Time to live (TTL) value of the DNS record |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Dns(nil).Load(map[string]any{"domain_id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Dns(nil).Create(map[string]any{
    "domain_id": "example_domain_id",
    "creator": "example_creator",
    "domain": "example_domain",
    "https": map[string]any{},
    "id": "example_id",
    "name": "example_name",
    "recordType": "example_recordType",
    "srv": map[string]any{},
    "type": "example_type",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Dns(nil).Update(map[string]any{
    "record_id": "record_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Dns(nil).Remove(map[string]any{"domain_id": "domain_id", "record_id": "record_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DnsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainEntity

```go
domain := client.Domain(nil)
fmt.Println(domain.GetName()) // "domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boughtAt` | `float64` | Yes | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `float64` | Yes | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `map[string]any` | Yes | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `[]any` | No | A list of custom nameservers for the domain to point to. |
| `echMode` | `string` | Yes | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `float64` | Yes | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `string` | Yes | The unique identifier of the domain. |
| `intendedNameservers` | `[]any` | Yes | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `string` | No | The domain operation to perform. |
| `name` | `string` | Yes | The domain name. |
| `nameservers` | `[]any` | Yes | A list of the current nameservers of the domain. |
| `renew` | `bool` | No | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `string` | Yes | The type of service the domain is handled by. |
| `suffix` | `bool` | Yes |  |
| `teamId` | `string` | Yes |  |
| `transferStartedAt` | `float64` | No | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `float64` | No | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `string` | Yes |  |
| `verified` | `bool` | Yes | If the domain has the ownership verified. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Domain(nil).Load(map[string]any{"id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Domain(nil).Create(map[string]any{
    "boughtAt": 1,
    "createdAt": 1,
    "creator": map[string]any{},
    "echMode": "example_echMode",
    "expiresAt": 1,
    "id": "example_id",
    "intendedNameservers": []any{},
    "name": "example_name",
    "nameservers": []any{},
    "serviceType": "example_serviceType",
    "suffix": true,
    "teamId": "example_teamId",
    "userId": "example_userId",
    "verified": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Domain(nil).Update(map[string]any{
    "id": "domain_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Domain(nil).Remove(map[string]any{"id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainsRegistrarEntity

```go
domainsRegistrar := client.DomainsRegistrar(nil)
fmt.Println(domainsRegistrar.GetName()) // "domains_registrar"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authCode` | `string` | Yes | The auth code for the domain. |
| `autoRenew` | `bool` | Yes | Whether the domain should be auto-renewed before it expires. |
| `available` | `bool` | Yes |  |
| `contactInformation` | `map[string]any` | Yes | The contact information for the domain. |
| `domains` | `[]any` | Yes | an array of at most 50 item(s) |
| `error` | `any` | No |  |
| `expectedPrice` | `float64` | Yes |  |
| `languageCode` | `string` | No | The language code for the domain. |
| `nameservers` | `[]any` | Yes |  |
| `orderId` | `string` | Yes | A valid order ID |
| `purchasePrice` | `any` | Yes |  |
| `renewalPrice` | `any` | Yes |  |
| `results` | `[]any` | Yes |  |
| `status` | `string` | Yes |  |
| `transferPrice` | `any` | Yes |  |
| `years` | `float64` | Yes | The number of years the returned price is for. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DomainsRegistrar(nil).Load(map[string]any{"order_id": "order_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DomainsRegistrar(nil).Create(map[string]any{
    "authCode": "example_authCode",
    "autoRenew": true,
    "available": true,
    "contactInformation": map[string]any{},
    "domains": []any{},
    "expectedPrice": 1,
    "nameservers": []any{},
    "orderId": "example_orderId",
    "purchasePrice": "example_purchasePrice",
    "renewalPrice": "example_renewalPrice",
    "results": []any{},
    "status": "example_status",
    "transferPrice": "example_transferPrice",
    "years": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DomainsRegistrar(nil).Update(map[string]any{
    "domain_id": "domain_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainsRegistrarEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DrainEntity

```go
drain := client.Drain(nil)
fmt.Println(drain.GetName()) // "drain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delivery` | `map[string]any` | No |  |
| `drains` | `any` | Yes |  |
| `filter` | `map[string]any` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `projectIds` | `[]any` | No |  |
| `projects` | `string` | Yes |  |
| `sampling` | `[]any` | No |  |
| `schemas` | `map[string]any` | Yes |  |
| `source` | `map[string]any` | No |  |
| `status` | `string` | No |  |
| `transforms` | `[]any` | No |  |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Drain(nil).Load(map[string]any{"id": "drain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Drain(nil).Create(map[string]any{
    "drains": "example_drains",
    "filter": map[string]any{},
    "name": "example_name",
    "projects": "example_projects",
    "schemas": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Drain(nil).Update(map[string]any{
    "id": "drain_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Drain(nil).Remove(map[string]any{"id": "drain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DrainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EdgeCacheEntity

```go
edgeCache := client.EdgeCache(nil)
fmt.Println(edgeCache.GetName()) // "edge_cache"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EdgeCache(nil).Create(map[string]any{
    "project_id_or_name": "example_project_id_or_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EdgeCacheEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvEntity

```go
env := client.Env(nil)
fmt.Println(env.GetName()) // "env"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applyToAllCustomEnvironments` | `bool` | No | whether or not this env varible applies to custom environments |
| `comment` | `string` | No | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `string` | No | The date when the Shared Env Var was created. |
| `createdAt` | `float64` | No | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `string` | No | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `[]any` | No | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `bool` | No | whether or not this env variable is decrypted |
| `deletedAt` | `float64` | No | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `string` | No | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `[]any` | Yes |  |
| `failed` | `[]any` | Yes |  |
| `id` | `string` | No | The unique identifier of the Shared Env Var. |
| `key` | `string` | No | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `string` | No | The last editor full name or username. |
| `ownerId` | `string` | No | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `[]any` | No | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `[]any` | Yes |  |
| `target` | `[]any` | No | environments this env variable targets |
| `type` | `string` | No | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `[]any` | Yes |  |
| `updatedAt` | `float64` | No | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `string` | No | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `map[string]any` | Yes | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Env(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Env(nil).Load(map[string]any{"id": "env_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Env(nil).Create(map[string]any{
    "evs": []any{},
    "failed": []any{},
    "securityIssues": []any{},
    "updated": []any{},
    "updates": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Env(nil).Update(map[string]any{
    "id": "env_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Env(nil).Remove(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentEntity

```go
environment := client.Environment(nil)
fmt.Println(environment.GetName()) // "environment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branchMatcher` | `map[string]any` | Yes | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `string` | No | Where to copy environment variables from. |
| `createdAt` | `float64` | Yes | Timestamp when the environment was created |
| `currentDeploymentAliases` | `[]any` | No | List of aliases for the current deployment |
| `description` | `string` | No | Optional description of the environment's purpose |
| `domains` | `[]any` | No | List of domains associated with this environment |
| `id` | `string` | Yes | Unique identifier for the custom environment (format: env_*) |
| `slug` | `string` | Yes | URL-friendly name of the environment |
| `type` | `string` | Yes | The type of environment (production, preview, or development) |
| `updatedAt` | `float64` | Yes | Timestamp when the environment was last updated |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Environment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Environment(nil).Load(map[string]any{"environment_slug_or_id": "environment_slug_or_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Environment(nil).Create(map[string]any{
    "id_or_name": "example_id_or_name",
    "branchMatcher": map[string]any{},
    "createdAt": 1,
    "id": "example_id",
    "type": "example_type",
    "updatedAt": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Environment(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Environment(nil).Remove(map[string]any{"environment_slug_or_id": "environment_slug_or_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureFlagEntity

```go
featureFlag := client.FeatureFlag(nil)
fmt.Println(featureFlag.GetName()) // "feature_flag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changedEnvironments` | `[]any` | Yes |  |
| `createdAt` | `float64` | Yes |  |
| `createdBy` | `string` | Yes | The user who created this patch |
| `data` | `map[string]any` | No | The data of the segment |
| `description` | `string` | No | A description of the flag |
| `environments` | `map[string]any` | Yes | The configuration for the flag in different environments |
| `flagId` | `string` | Yes |  |
| `flags` | `[]any` | Yes |  |
| `hint` | `string` | No |  |
| `id` | `string` | Yes |  |
| `kind` | `string` | Yes | The kind of flag |
| `label` | `string` | No |  |
| `maintainerIds` | `[]any` | No | The user ids of the maintainers of the flag |
| `message` | `string` | No | Additional message for this version |
| `metadata` | `map[string]any` | No |  |
| `operations` | `[]any` | No |  |
| `ownerId` | `string` | Yes |  |
| `pagination` | `map[string]any` | Yes |  |
| `permanent` | `bool` | No | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `string` | Yes |  |
| `revision` | `float64` | Yes |  |
| `seed` | `float64` | Yes | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `string` | Yes | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `string` | Yes |  |
| `status` | `map[string]any` | Yes |  |
| `tags` | `[]any` | No | Tags for categorizing the flag |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `float64` | Yes |  |
| `updatedBy` | `string` | No |  |
| `variants` | `[]any` | Yes | The variants of the flag |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.FeatureFlag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FeatureFlag(nil).Load(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.FeatureFlag(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.FeatureFlag(nil).Remove(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileEntity

```go
file := client.File(nil)
fmt.Println(file.GetName()) // "file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `[]any` | No | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `string` | No | The content-type of the file (only valid for the `file` type) |
| `mode` | `float64` | Yes | The file "mode" indicating file type and permissions. |
| `name` | `string` | Yes | The name of the file tree entry |
| `type` | `string` | Yes | String indicating the type of file tree entry. |
| `uid` | `string` | No | The unique identifier of the file (only valid for the `file` type) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FlagEntity

```go
flag := client.Flag(nil)
fmt.Println(flag.GetName()) // "flag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float64` | Yes |  |
| `createdBy` | `string` | Yes |  |
| `description` | `string` | No |  |
| `environments` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `kind` | `string` | Yes |  |
| `maintainerIds` | `[]any` | No |  |
| `metadata` | `map[string]any` | No |  |
| `ownerId` | `string` | Yes |  |
| `permanent` | `bool` | No |  |
| `projectId` | `string` | Yes |  |
| `revision` | `float64` | Yes |  |
| `seed` | `float64` | Yes |  |
| `slug` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `tags` | `[]any` | No |  |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `float64` | Yes |  |
| `updatedBy` | `string` | No |  |
| `variants` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Flag(nil).Load(map[string]any{"id": "flag_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FlagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FlagsSdkKeyWithSecretEntity

```go
flagsSdkKeyWithSecret := client.FlagsSdkKeyWithSecret(nil)
fmt.Println(flagsSdkKeyWithSecret.GetName()) // "flags_sdk_key_with_secret"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float64` | Yes |  |
| `createdBy` | `string` | Yes |  |
| `deletedAt` | `float64` | No |  |
| `environment` | `string` | Yes |  |
| `hashKey` | `string` | Yes |  |
| `keyValue` | `string` | Yes | Cleartext value of the SDK key. |
| `label` | `string` | No |  |
| `partialKeyValue` | `string` | Yes | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` | `string` | Yes |  |
| `sdkKeyType` | `string` | Yes |  |
| `tokenValue` | `string` | No | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` | `string` | Yes |  |
| `updatedAt` | `float64` | Yes |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.FlagsSdkKeyWithSecret(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FlagsSdkKeyWithSecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GlobalConfigEntity

```go
globalConfig := client.GlobalConfig(nil)
fmt.Println(globalConfig.GetName()) // "global_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float64` | Yes |  |
| `createdBy` | `string` | No | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` | `float64` | No |  |
| `digest` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `itemCount` | `float64` | Yes |  |
| `items` | `map[string]any` | No |  |
| `ownerId` | `string` | Yes |  |
| `purpose` | `any` | No |  |
| `schema` | `map[string]any` | No |  |
| `sizeInBytes` | `float64` | Yes |  |
| `slug` | `string` | Yes | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `float64` | No | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `map[string]any` | Yes | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GlobalConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GlobalConfig(nil).Load(map[string]any{"id": "global_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GlobalConfig(nil).Create(map[string]any{
    "createdAt": 1,
    "digest": "example_digest",
    "id": "example_id",
    "itemCount": 1,
    "ownerId": "example_ownerId",
    "sizeInBytes": 1,
    "transfer": map[string]any{},
    "updatedAt": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.GlobalConfig(nil).Update(map[string]any{
    "id": "global_config_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.GlobalConfig(nil).Remove(map[string]any{"id": "global_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GlobalConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GlobalConfigItemEntity

```go
globalConfigItem := client.GlobalConfigItem(nil)
fmt.Println(globalConfigItem.GetName()) // "global_config_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float64` | Yes |  |
| `description` | `string` | No |  |
| `edgeConfigId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `key` | `string` | Yes |  |
| `updatedAt` | `float64` | Yes |  |
| `value` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GlobalConfigItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GlobalConfigItem(nil).Load(map[string]any{"id": "global_config_item_id", "global_config_id": "global_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GlobalConfigItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GlobalConfigTokenEntity

```go
globalConfigToken := client.GlobalConfigToken(nil)
fmt.Println(globalConfigToken.GetName()) // "global_config_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float64` | Yes |  |
| `edgeConfigId` | `string` | Yes |  |
| `id` | `string` | Yes | This is not the token itself, but rather an id to identify the token by |
| `label` | `string` | Yes |  |
| `partialToken` | `string` | Yes | A partially-masked representation of the token, safe to display in UIs. |
| `token` | `string` | No | Deprecated: the full, plaintext token. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GlobalConfigToken(nil).Load(map[string]any{"id": "global_config_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GlobalConfigTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationEntity

```go
integration := client.Integration(nil)
fmt.Println(integration.GetName()) // "integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `string` | No |  |
| `description` | `string` | Yes |  |
| `details` | `[]any` | No |  |
| `disabled` | `bool` | No |  |
| `effectiveDate` | `string` | No |  |
| `envVarEnvironments` | `[]any` | No |  |
| `highlightedDetails` | `[]any` | No |  |
| `id` | `string` | Yes |  |
| `initialCharge` | `string` | No |  |
| `makeEnvVarsSensitive` | `bool` | No |  |
| `maximumAmount` | `string` | No |  |
| `maximumAmountAutoPurchasePerPeriod` | `string` | No |  |
| `metadataSchema` | `map[string]any` | Yes |  |
| `minimumAmount` | `string` | No |  |
| `name` | `string` | Yes |  |
| `paymentMethodRequired` | `bool` | Yes |  |
| `preauthorizationAmount` | `float64` | No |  |
| `primaryProtocol` | `string` | No |  |
| `projectId` | `string` | Yes |  |
| `protocols` | `map[string]any` | Yes |  |
| `quote` | `[]any` | No |  |
| `scope` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Integration(nil).Load(map[string]any{"id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Integration(nil).Create(map[string]any{
    "installation_id": "example_installation_id",
    "resource_id": "example_resource_id",
    "description": "example_description",
    "id": "example_id",
    "metadataSchema": map[string]any{},
    "name": "example_name",
    "paymentMethodRequired": true,
    "projectId": "example_projectId",
    "protocols": map[string]any{},
    "scope": "example_scope",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Integration(nil).Remove(map[string]any{"id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## KmsEntity

```go
kms := client.Kms(nil)
fmt.Println(kms.GetName()) // "kms"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activation` | `string` | No | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` | `string` | No |  |
| `algorithm` | `string` | Yes | Algorithm of the signing key. |
| `claims` | `map[string]any` | No | The claims to include in the token. |
| `claimsSchema` | `map[string]any` | No | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `string` | Yes |  |
| `environments` | `[]any` | Yes | The environments for the project grant policy. |
| `headers` | `map[string]any` | No | Additional headers to include in the token. |
| `id` | `string` | Yes |  |
| `importKey` | `string` | No | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `string` | No | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `string` | Yes | Key id of the signing key. |
| `key_ops` | `[]any` | No |  |
| `kid` | `string` | No |  |
| `kind` | `string` | Yes |  |
| `kty` | `string` | No |  |
| `managedBy` | `string` | No |  |
| `message` | `string` | Yes | Base64-encoded message to be signed. |
| `name` | `string` | Yes | The name of the issuer. |
| `origin` | `string` | Yes |  |
| `ownerId` | `string` | Yes |  |
| `policies` | `[]any` | Yes |  |
| `projectId` | `string` | Yes | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `float64` | No | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `any` | No | Deprecated. |
| `signature` | `string` | Yes | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `[]any` | Yes |  |
| `token` | `string` | Yes |  |
| `tokenClaims` | `map[string]any` | No | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `float64` | No | The time-to-live for the token, in seconds. |
| `updatedAt` | `string` | Yes |  |
| `use` | `string` | No |  |
| `x5c` | `[]any` | No | The X.509 certificate chain (RFC 7517 §4.7). |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Kms(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Kms(nil).Load(map[string]any{"issuer_id": "issuer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Kms(nil).Create(map[string]any{
    "issuer_id": "example_issuer_id",
    "algorithm": "example_algorithm",
    "createdAt": "example_createdAt",
    "environments": []any{},
    "id": "example_id",
    "keyId": "example_keyId",
    "kind": "example_kind",
    "message": "example_message",
    "name": "example_name",
    "origin": "example_origin",
    "ownerId": "example_ownerId",
    "policies": []any{},
    "projectId": "example_projectId",
    "signature": "example_signature",
    "signingKeys": []any{},
    "token": "example_token",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Kms(nil).Update(map[string]any{
    "issuer_id": "issuer_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Kms(nil).Remove(map[string]any{"issuer_id": "issuer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `KmsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListEventTypeEntity

```go
listEventType := client.ListEventType(nil)
fmt.Println(listEventType.GetName()) // "list_event_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `[]any` | Yes |  |
| `types` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListEventType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListEventTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogEntity

```go
log := client.Log(nil)
fmt.Println(log.GetName()) // "log"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Log(nil).Load(map[string]any{"deployment_id": "deployment_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogDrainEntity

```go
logDrain := client.LogDrain(nil)
fmt.Println(logDrain.GetName()) // "log_drain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `string` | No | The branch regexp of log drain |
| `clientId` | `string` | No | The oauth2 client application id that created this log drain |
| `configurationId` | `string` | No | The client configuration this log drain was created with |
| `createdAt` | `float64` | Yes | A timestamp that tells you when the log drain was created |
| `createdFrom` | `string` | Yes | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | `any` | Yes | The delivery log format |
| `environments` | `[]any` | No | The environment of log drain |
| `headers` | `map[string]any` | No | Headers to be sent together with the request |
| `id` | `string` | Yes | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `string` | No |  |
| `integrationIcon` | `string` | No |  |
| `integrationWebsite` | `string` | No |  |
| `name` | `string` | No | The custom name of this log drain. |
| `ownerId` | `string` | Yes | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `string` | No |  |
| `projectIds` | `[]any` | No | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `[]any` | No |  |
| `samplingRate` | `float64` | No | The sampling rate for this log drain. |
| `secret` | `string` | No | Custom secret of log drain |
| `source` | `any` | Yes |  |
| `sources` | `[]any` | Yes | The sources from which logs are currently being delivered to this log drain. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LogDrain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LogDrain(nil).Load(map[string]any{"id": "log_drain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogDrain(nil).Create(map[string]any{
    "createdAt": 1,
    "createdFrom": "example_createdFrom",
    "deliveryFormat": "example_deliveryFormat",
    "id": "example_id",
    "ownerId": "example_ownerId",
    "source": "example_source",
    "sources": []any{},
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LogDrain(nil).Remove(map[string]any{"id": "log_drain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogDrainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MarketplaceEntity

```go
marketplace := client.Marketplace(nil)
fmt.Println(marketplace.GetName()) // "marketplace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes |  |
| `already_revoked` | `bool` | Yes |  |
| `balances` | `[]any` | Yes |  |
| `billing` | `any` | Yes | Billing data (interim invoicing data). |
| `billingPlan` | `map[string]any` | Yes |  |
| `billingPlanId` | `string` | No | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `string` | No |  |
| `client_id` | `string` | No |  |
| `client_secret` | `string` | Yes |  |
| `created` | `string` | Yes | System creation date. |
| `createdAt` | `float64` | No |  |
| `data` | `map[string]any` | Yes |  |
| `description` | `string` | No |  |
| `discounts` | `[]any` | No | Invoice discounts. |
| `email` | `string` | Yes |  |
| `eod` | `string` | Yes | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `any` | Yes |  |
| `expires_in` | `float64` | Yes |  |
| `externalId` | `string` | No | Partner-supplied Invoice ID, if applicable. |
| `extras` | `map[string]any` | No |  |
| `final` | `bool` | No | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `string` | No |  |
| `id` | `string` | Yes | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `string` | Yes | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `string` | Yes | Invoice date. |
| `invoiceId` | `string` | Yes | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `string` | No | User-readable invoice number. |
| `isArchived` | `bool` | No |  |
| `items` | `[]any` | Yes | Invoice items. |
| `memo` | `string` | No | Additional memo for the invoice. |
| `metadata` | `map[string]any` | No | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `string` | Yes | The name of the resource as it is recorded in Vercel |
| `notification` | `map[string]any` | Yes | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `string` | Yes |  |
| `ownership` | `string` | No |  |
| `paidAt` | `string` | No | Moment the invoice was paid. |
| `partial` | `bool` | No | If true, will only update the provided secrets |
| `partnerId` | `string` | Yes | The ID provided by the partner for the given resource |
| `period` | `map[string]any` | Yes | Subscription period for this billing cycle. |
| `productId` | `string` | Yes | The ID of the product the resource is derived from |
| `protocolSettings` | `map[string]any` | No | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `string` | No | The reason for refund. |
| `refundTotal` | `string` | No | Refund amount. |
| `refundedAt` | `string` | No | Most recent moment the invoice was refunded. |
| `revoked` | `bool` | Yes |  |
| `role` | `string` | Yes | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `string` | Yes |  |
| `secrets` | `[]any` | Yes |  |
| `slug` | `string` | Yes |  |
| `state` | `string` | Yes | Invoice state. |
| `status` | `string` | No | The current status of the resource |
| `test` | `bool` | No | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | `string` | Yes | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` | `string` | Yes |  |
| `token_type` | `string` | Yes |  |
| `total` | `string` | Yes | Invoice total amount. |
| `updated` | `string` | Yes | System update date. |
| `updatedAt` | `float64` | No |  |
| `usage` | `[]any` | Yes |  |
| `userEmail` | `string` | No |  |
| `validationErrors` | `[]any` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Marketplace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Marketplace(nil).Load(map[string]any{"installation_id": "installation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Marketplace(nil).Create(map[string]any{
    "installation_id": "example_installation_id",
    "access_token": "example_access_token",
    "already_revoked": true,
    "balances": []any{},
    "billing": "example_billing",
    "billingPlan": map[string]any{},
    "client_secret": "example_client_secret",
    "created": "example_created",
    "data": map[string]any{},
    "email": "example_email",
    "eod": "example_eod",
    "event": "example_event",
    "expires_in": 1,
    "id": "example_id",
    "internalId": "example_internalId",
    "invoiceDate": "example_invoiceDate",
    "invoiceId": "example_invoiceId",
    "items": []any{},
    "name": "example_name",
    "notification": map[string]any{},
    "origin": "example_origin",
    "partnerId": "example_partnerId",
    "period": map[string]any{},
    "productId": "example_productId",
    "revoked": true,
    "role": "example_role",
    "scope": "example_scope",
    "secrets": []any{},
    "slug": "example_slug",
    "state": "example_state",
    "timestamp": "example_timestamp",
    "token": "example_token",
    "token_type": "example_token_type",
    "total": "example_total",
    "updated": "example_updated",
    "usage": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Marketplace(nil).Update(map[string]any{
    "installation_id": "installation_id",
    "resource_id": "resource_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Marketplace(nil).Remove(map[string]any{"installation_id": "installation_id", "resource_id": "resource_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MarketplaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MicrofrontendEntity

```go
microfrontend := client.Microfrontend(nil)
fmt.Println(microfrontend.GetName()) // "microfrontend"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `map[string]any` | Yes |  |
| `accountId` | `string` | Yes |  |
| `alias` | `[]any` | Yes |  |
| `analytics` | `map[string]any` | Yes |  |
| `applications` | `map[string]any` | Yes |  |
| `appliedCve55182Migration` | `bool` | No |  |
| `autoAssignCustomDomains` | `bool` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `bool` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `map[string]any` | No |  |
| `buildCommand` | `string` | No |  |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `concurrencyBucketName` | `string` | No |  |
| `connectBuildsEnabled` | `bool` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `[]any` | No |  |
| `createdAt` | `float64` | No |  |
| `creator` | `any` | No |  |
| `crons` | `map[string]any` | Yes |  |
| `customEnvironments` | `[]any` | No |  |
| `customerSupportCodeVisibility` | `bool` | No |  |
| `dataCache` | `map[string]any` | Yes |  |
| `defaultResourceConfig` | `map[string]any` | Yes |  |
| `deploymentExpiration` | `map[string]any` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `map[string]any` | No | Project shape. |
| `devCommand` | `string` | No |  |
| `directoryListing` | `bool` | Yes |  |
| `dismissedToasts` | `[]any` | No |  |
| `enableAffectedProjectsDeployments` | `bool` | No |  |
| `enableExternalRewriteCaching` | `bool` | No |  |
| `enablePreviewFeedback` | `bool` | No |  |
| `enableProductionFeedback` | `bool` | No |  |
| `env` | `[]any` | No |  |
| `expiration` | `any` | No |  |
| `features` | `map[string]any` | No |  |
| `framework` | `string` | No |  |
| `gitComments` | `map[string]any` | Yes |  |
| `gitForkProtection` | `bool` | No |  |
| `gitLFS` | `bool` | No |  |
| `gitProviderOptions` | `map[string]any` | Yes |  |
| `hasActiveBranches` | `bool` | No |  |
| `hasDeployments` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No |  |
| `internalRoutes` | `[]any` | No |  |
| `ipBuckets` | `[]any` | No |  |
| `jobs` | `map[string]any` | No |  |
| `lastAliasRequest` | `map[string]any` | Yes |  |
| `lastRollbackTarget` | `map[string]any` | No |  |
| `latestDeployments` | `[]any` | No |  |
| `link` | `string` | No |  |
| `live` | `bool` | No |  |
| `microfrontends` | `any` | No |  |
| `name` | `string` | Yes |  |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `map[string]any` | No |  |
| `options` | `map[string]any` | No | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `map[string]any` | Yes |  |
| `outputDirectory` | `string` | No |  |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `map[string]any` | Yes |  |
| `passwordProtection` | `map[string]any` | No |  |
| `paused` | `bool` | No |  |
| `permissions` | `map[string]any` | No |  |
| `productionDeploymentsFastLane` | `bool` | No |  |
| `protectedSourcemaps` | `bool` | No |  |
| `protectionBypass` | `map[string]any` | No |  |
| `protectionConfig` | `map[string]any` | No |  |
| `resourceConfig` | `map[string]any` | Yes |  |
| `rollbackDescription` | `map[string]any` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `map[string]any` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No |  |
| `sandbox` | `map[string]any` | No |  |
| `schema` | `string` | No | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `map[string]any` | No |  |
| `serverlessFunctionZeroConfigFailover` | `bool` | No |  |
| `services` | `[]any` | No |  |
| `skewProtectionAllowedDomains` | `[]any` | No |  |
| `skewProtectionBoundaryAt` | `float64` | No |  |
| `skewProtectionMaxAge` | `float64` | No |  |
| `skipGitConnectDuringLink` | `bool` | No |  |
| `sourceFilesOutsideRootDirectory` | `bool` | No |  |
| `speedInsights` | `map[string]any` | Yes |  |
| `ssoProtection` | `map[string]any` | Yes |  |
| `staticIps` | `map[string]any` | Yes |  |
| `targets` | `map[string]any` | No |  |
| `tier` | `string` | No |  |
| `tracing` | `map[string]any` | No |  |
| `transferCompletedAt` | `float64` | No |  |
| `transferStartedAt` | `float64` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `any` | No |  |
| `trustedSources` | `map[string]any` | No |  |
| `updatedAt` | `float64` | No |  |
| `usageStatus` | `map[string]any` | Yes |  |
| `v0` | `bool` | No |  |
| `v0Created` | `bool` | No |  |
| `version` | `string` | No | The version of the microfrontends config schema. |
| `webAnalytics` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Microfrontend(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Microfrontend(nil).Load(map[string]any{"project_id_or_name": "project_id_or_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Microfrontend(nil).Create(map[string]any{
    "abuse": map[string]any{},
    "accountId": "example_accountId",
    "alias": []any{},
    "analytics": map[string]any{},
    "applications": map[string]any{},
    "crons": map[string]any{},
    "dataCache": map[string]any{},
    "defaultResourceConfig": map[string]any{},
    "deploymentExpiration": map[string]any{},
    "directoryListing": true,
    "gitComments": map[string]any{},
    "gitProviderOptions": map[string]any{},
    "id": "example_id",
    "lastAliasRequest": map[string]any{},
    "name": "example_name",
    "nodeVersion": "example_nodeVersion",
    "optionsAllowlist": map[string]any{},
    "passport": map[string]any{},
    "resourceConfig": map[string]any{},
    "rollbackDescription": map[string]any{},
    "rollingRelease": map[string]any{},
    "speedInsights": map[string]any{},
    "ssoProtection": map[string]any{},
    "staticIps": map[string]any{},
    "usageStatus": map[string]any{},
    "webAnalytics": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MicrofrontendEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NetworkEntity

```go
network := client.Network(nil)
fmt.Println(network.GetName()) // "network"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsAccountId` | `string` | Yes | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | `[]any` | No | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `string` | Yes | The AWS Region in which the network exists. |
| `cidr` | `string` | Yes | The CIDR range of the Network. |
| `createdAt` | `float64` | Yes | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `[]any` | No |  |
| `hostedZones` | `map[string]any` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `string` | Yes | The unique identifier of the Network. |
| `name` | `string` | Yes | The name of the network. |
| `peeringConnections` | `map[string]any` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `map[string]any` | Yes | Metadata about any projects associated with the Network. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Network(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Network(nil).Load(map[string]any{"id": "network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Network(nil).Create(map[string]any{
    "awsAccountId": "example_awsAccountId",
    "awsRegion": "example_awsRegion",
    "cidr": "example_cidr",
    "createdAt": 1,
    "hostedZones": map[string]any{},
    "id": "example_id",
    "name": "example_name",
    "peeringConnections": map[string]any{},
    "projects": map[string]any{},
    "status": "example_status",
    "teamId": "example_teamId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Network(nil).Update(map[string]any{
    "id": "network_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Network(nil).Remove(map[string]any{"id": "network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NetworkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NetworkingEntity

```go
networking := client.Networking(nil)
fmt.Println(networking.GetName()) // "networking"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `builds` | `bool` | No | Whether to use Static IPs for builds. |
| `regions` | `[]any` | No |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Networking(nil).Update(map[string]any{
    "id_or_name": "id_or_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Networking(nil).Remove(map[string]any{"endpoint_id": "endpoint_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NetworkingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservabilityEntity

```go
observability := client.Observability(nil)
fmt.Println(observability.GetName()) // "observability"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disabled` | `bool` | Yes | Whether Observability Plus should be disabled for the project |
| `disabledAt` | `float64` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Observability(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Observability(nil).Update(map[string]any{
    "project_id_or_name": "project_id_or_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservabilityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PrivateLinkEndpointEntity

```go
privateLinkEndpoint := client.PrivateLinkEndpoint(nil)
fmt.Println(privateLinkEndpoint.GetName()) // "private_link_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsDnsEntries` | `[]any` | No | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `string` | Yes | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `float64` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `bool` | No | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `string` | Yes | The unique identifier of the PrivateLink endpoint. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `[]any` | No | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | `string` | Yes | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | `string` | Yes | The current state of the endpoint. |
| `statusMessage` | `string` | No | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | `string` | Yes | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | `float64` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PrivateLinkEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PrivateLinkEndpoint(nil).Load(map[string]any{"id": "private_link_endpoint_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PrivateLinkEndpoint(nil).Create(map[string]any{
    "awsServiceName": "example_awsServiceName",
    "createdAt": 1,
    "endpointId": "example_endpointId",
    "name": "example_name",
    "projectId": "example_projectId",
    "status": "example_status",
    "teamId": "example_teamId",
    "updatedAt": 1,
    "vercelRegion": "example_vercelRegion",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PrivateLinkEndpoint(nil).Update(map[string]any{
    "id": "private_link_endpoint_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PrivateLinkEndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectEntity

```go
project := client.Project(nil)
fmt.Println(project.GetName()) // "project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `map[string]any` | Yes |  |
| `acceptedPolicies` | `map[string]any` | No |  |
| `accountId` | `string` | Yes |  |
| `alias` | `[]any` | Yes |  |
| `analytics` | `map[string]any` | Yes |  |
| `apexName` | `string` | Yes |  |
| `appliedCve55182Migration` | `bool` | No |  |
| `autoAssignCustomDomains` | `bool` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `bool` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `map[string]any` | No |  |
| `buildCommand` | `string` | No | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `comment` | `string` | No | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `string` | No |  |
| `configurationId` | `string` | No |  |
| `connectBuildsEnabled` | `bool` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `[]any` | No | The list of connections from project environment to Secure Compute network |
| `contentHint` | `any` | No |  |
| `createdAt` | `float64` | No |  |
| `createdBy` | `string` | No |  |
| `creator` | `any` | No |  |
| `crons` | `map[string]any` | Yes |  |
| `customEnvironmentId` | `string` | No |  |
| `customEnvironmentIds` | `[]any` | No | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `[]any` | No |  |
| `customerSupportCodeVisibility` | `bool` | No | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `map[string]any` | Yes |  |
| `decrypted` | `bool` | No |  |
| `defaultResourceConfig` | `map[string]any` | Yes |  |
| `deploymentExpiration` | `map[string]any` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `map[string]any` | No | Project shape. |
| `devCommand` | `string` | No | The dev command for this project. |
| `directoryListing` | `bool` | Yes |  |
| `dismissedToasts` | `[]any` | No | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `string` | No |  |
| `edgeConfigTokenId` | `string` | No |  |
| `enableAffectedProjectsDeployments` | `bool` | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | No | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | No | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | No | Opt-in to production toolbar on the project level |
| `env` | `[]any` | No |  |
| `environmentVariables` | `[]any` | No | Collection of ENV Variables the Project will use |
| `expiration` | `any` | No |  |
| `features` | `map[string]any` | No |  |
| `framework` | `string` | No | The framework that is being used for this project. |
| `gitBranch` | `string` | No | Git branch to link the project domain |
| `gitComments` | `map[string]any` | Yes |  |
| `gitForkProtection` | `bool` | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | No | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `map[string]any` | Yes |  |
| `gitRepository` | `map[string]any` | Yes | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` | No |  |
| `hasDeployments` | `bool` | No |  |
| `hostname` | `string` | Yes | The deployment hostname to scope the trace session to. |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No | The install command for this project. |
| `integrations` | `[]any` | No |  |
| `internalContentHint` | `map[string]any` | Yes | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `[]any` | No |  |
| `ipBuckets` | `[]any` | No |  |
| `jobs` | `map[string]any` | No |  |
| `key` | `string` | Yes | The name of the environment variable |
| `lastAliasRequest` | `map[string]any` | Yes |  |
| `lastRollbackTarget` | `map[string]any` | No |  |
| `latestDeployments` | `[]any` | No |  |
| `legacyValue` | `string` | No | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `string` | No |  |
| `live` | `bool` | No |  |
| `microfrontends` | `any` | No |  |
| `name` | `string` | Yes | The desired name for the project |
| `newProjectName` | `string` | No | The desired name for the project |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `map[string]any` | No | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `map[string]any` | Yes | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | No | The output directory of the project. |
| `paidFeatures` | `map[string]any` | No |  |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `map[string]any` | Yes | Passport configuration for the project. |
| `passwordProtection` | `map[string]any` | No | Allows to protect project deployments with a password |
| `paused` | `bool` | No |  |
| `permissions` | `map[string]any` | No |  |
| `previewDeploymentSuffix` | `string` | No | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | No | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` | No |  |
| `projectId` | `string` | Yes | The unique target project identifier |
| `protectedSourcemaps` | `bool` | No | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `map[string]any` | No |  |
| `protectionConfig` | `map[string]any` | No |  |
| `publicSource` | `bool` | No | Deprecated. |
| `redirect` | `string` | No | Target destination domain for redirect |
| `redirectStatusCode` | `float64` | No | Status code for domain redirect |
| `resourceConfig` | `map[string]any` | Yes | Specifies resource override configuration for the project |
| `rollbackDescription` | `map[string]any` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `map[string]any` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `map[string]any` | No | Specifies the default region and failover regions for sandboxes created in the project |
| `security` | `map[string]any` | No |  |
| `serverlessFunctionRegion` | `string` | No | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `bool` | No | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `[]any` | No |  |
| `skewProtectionAllowedDomains` | `[]any` | No | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `float64` | No | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `float64` | No | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `bool` | No | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `bool` | No | Indicates if there are source files outside of the root directory |
| `speedInsights` | `map[string]any` | Yes |  |
| `ssoProtection` | `map[string]any` | Yes | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `map[string]any` | Yes | Manage Static IPs for this project |
| `sunsetSecretId` | `string` | No | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `any` | No | The target environment of the environment variable |
| `targets` | `map[string]any` | No |  |
| `tier` | `string` | No |  |
| `token` | `string` | Yes |  |
| `tracing` | `map[string]any` | No | Tracing configuration for this project |
| `transferCompletedAt` | `float64` | No |  |
| `transferStartedAt` | `float64` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `any` | No | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `map[string]any` | No | Deployment Protection Trusted Sources |
| `type` | `string` | Yes | The type of environment variable |
| `updatedAt` | `float64` | No |  |
| `updatedBy` | `string` | No |  |
| `usageStatus` | `map[string]any` | Yes |  |
| `v0` | `bool` | No |  |
| `v0Created` | `bool` | No |  |
| `value` | `string` | Yes | The value of the environment variable |
| `verification` | `[]any` | No | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `bool` | Yes | `true` if the domain is verified for use with the project. |
| `visibility` | `string` | No | User-facing config/secret model. |
| `webAnalytics` | `map[string]any` | Yes |  |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Project(nil).Load(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Project(nil).Create(map[string]any{
    "deployment_id": "example_deployment_id",
    "id": "example_id",
    "abuse": map[string]any{},
    "accountId": "example_accountId",
    "alias": []any{},
    "analytics": map[string]any{},
    "apexName": "example_apexName",
    "crons": map[string]any{},
    "dataCache": map[string]any{},
    "defaultResourceConfig": map[string]any{},
    "deploymentExpiration": map[string]any{},
    "directoryListing": true,
    "gitComments": map[string]any{},
    "gitProviderOptions": map[string]any{},
    "gitRepository": map[string]any{},
    "hostname": "example_hostname",
    "internalContentHint": map[string]any{},
    "key": "example_key",
    "lastAliasRequest": map[string]any{},
    "name": "example_name",
    "nodeVersion": "example_nodeVersion",
    "optionsAllowlist": map[string]any{},
    "passport": map[string]any{},
    "projectId": "example_projectId",
    "resourceConfig": map[string]any{},
    "rollbackDescription": map[string]any{},
    "rollingRelease": map[string]any{},
    "speedInsights": map[string]any{},
    "ssoProtection": map[string]any{},
    "staticIps": map[string]any{},
    "token": "example_token",
    "type": "example_type",
    "usageStatus": map[string]any{},
    "value": "example_value",
    "verified": true,
    "webAnalytics": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Project(nil).Update(map[string]any{
    "id": "project_id",
    "code": "code",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Project(nil).Remove(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectMemberEntity

```go
projectMember := client.ProjectMember(nil)
fmt.Println(projectMember.GetName()) // "project_member"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectMember(nil).Load(map[string]any{"id_or_name": "id_or_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectMember(nil).Create(map[string]any{
    "id_or_name": "example_id_or_name",
    "id": "example_id",
    "role": "example_role",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectMember(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectRouteEntity

```go
projectRoute := client.ProjectRoute(nil)
fmt.Println(projectRoute.GetName()) // "project_route"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actions` | `[]any` | Yes |  |
| `alias` | `string` | No | The staging alias for previewing this version. |
| `conditions` | `[]any` | No |  |
| `createdBy` | `string` | Yes | The user who created this version. |
| `currentRoute` | `map[string]any` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the version. |
| `isLive` | `bool` | No | Whether this version is currently live in production. |
| `isStaging` | `bool` | No | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `float64` | Yes | Timestamp of when this version was last modified. |
| `name` | `string` | Yes |  |
| `overwrite` | `bool` | No |  |
| `pathCondition` | `map[string]any` | Yes |  |
| `position` | `map[string]any` | No | Controls where the route is inserted. |
| `prompt` | `string` | Yes |  |
| `restore` | `bool` | No | If true, restores the staged route to the value in the production version. |
| `route` | `map[string]any` | Yes | The full route object to replace the existing route with |
| `routes` | `[]any` | No |  |
| `ruleCount` | `float64` | No | The number of routing rules in this version. |
| `s3Key` | `string` | Yes | The S3 key where the routing rules are stored. |
| `version` | `map[string]any` | Yes | A version of routing rules stored in S3. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectRoute(nil).Load(map[string]any{"id": "project_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectRoute(nil).Create(map[string]any{
    "id": "example_id",
    "action": "example_action",
    "actions": []any{},
    "createdBy": "example_createdBy",
    "currentRoute": map[string]any{},
    "description": "example_description",
    "lastModified": 1,
    "name": "example_name",
    "pathCondition": map[string]any{},
    "prompt": "example_prompt",
    "route": map[string]any{},
    "s3Key": "example_s3Key",
    "version": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectRoute(nil).Update(map[string]any{
    "id": "project_route_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectRoute(nil).Remove(map[string]any{"id": "project_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectRouteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QueryEntity

```go
query := client.Query(nil)
fmt.Println(query.GetName()) // "query"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregation` | `string` | No | Aggregation function to apply. |
| `bucketTimezone` | `string` | No | IANA timezone (e.g. |
| `endTime` | `string` | No | End timestamp |
| `filter` | `string` | No | Filter to apply to the query. |
| `granularity` | `map[string]any` | No | Time bucket size |
| `groupBy` | `[]any` | No | Dimensions to group results by. |
| `limit` | `float64` | No | Maximum number of results |
| `metric` | `string` | Yes | Metric id |
| `orderBy` | `string` | No | Rollup column to order grouped results by. |
| `orderDirection` | `string` | No | Direction to order grouped results by. |
| `scope` | `map[string]any` | Yes | Owner or project scope for the query |
| `startTime` | `string` | No | Start timestamp |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Query(nil).Create(map[string]any{
    "metric": "example_metric",
    "scope": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RecordEntity

```go
record := client.Record(nil)
fmt.Println(record.GetName()) // "record"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No |  |
| `createdAt` | `float64` | No |  |
| `creator` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `recordType` | `string` | Yes |  |
| `ttl` | `float64` | No |  |
| `type` | `string` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Record(nil).Load(map[string]any{"id": "record_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RecordEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RollingReleaseEntity

```go
rollingRelease := client.RollingRelease(nil)
fmt.Println(rollingRelease.GetName()) // "rolling_release"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeStage` | `map[string]any` | Yes | The currently active stage, null if the rollout is aborted |
| `advancementType` | `string` | Yes | The advancement type of the rolling release |
| `canaryDeployment` | `map[string]any` | Yes | The canary deployment being rolled out |
| `currentCanaryPercentage` | `float64` | No | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `map[string]any` | Yes | The current deployment receiving production traffic |
| `nextStage` | `map[string]any` | Yes | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `string` | Yes | The ID of a deployment queued for the next rolling release |
| `stages` | `[]any` | Yes | All stages configured for this rolling release |
| `startedAt` | `float64` | Yes | Unix timestamp in milliseconds when the rolling release started |
| `state` | `string` | Yes | The current state of the rolling release |
| `substate` | `string` | Yes | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `float64` | Yes | Unix timestamp in milliseconds when the rolling release was last updated |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RollingRelease(nil).Load(map[string]any{"id_or_name": "id_or_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RollingRelease(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "activeStage": map[string]any{},
    "advancementType": "example_advancementType",
    "canaryDeployment": map[string]any{},
    "currentDeployment": map[string]any{},
    "nextStage": map[string]any{},
    "queuedDeploymentId": "example_queuedDeploymentId",
    "stages": []any{},
    "startedAt": 1,
    "state": "example_state",
    "substate": "example_substate",
    "updatedAt": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RollingRelease(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.RollingRelease(nil).Remove(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RollingReleaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SandboxEntity

```go
sandbox := client.Sandbox(nil)
fmt.Println(sandbox.GetName()) // "sandbox"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `args` | `[]any` | Yes | The arguments of the command. |
| `command` | `string` | Yes | The executable or shell command to run. |
| `createdAt` | `float64` | Yes | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `string` | No | The method used to create the snapshot. |
| `currentSandboxName` | `string` | No | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `string` | No | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `string` | No | The snapshot ID to set as the current snapshot. |
| `cwd` | `string` | Yes | The current working directory of the command. |
| `durationMs` | `float64` | No | Duration of the command execution in milliseconds. |
| `env` | `map[string]any` | No | Additional environment variables to set for this command. |
| `exitCode` | `float64` | Yes | If the command did finish, the exit code. |
| `expiration` | `any` | No | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `float64` | No | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `[]any` | No | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `string` | Yes | The ID of the command. |
| `image` | `string` | No | Image to use for the sandbox. |
| `keepLastSnapshots` | `map[string]any` | Yes | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `float64` | Yes | The last time the snapshot was used (e.g. |
| `logs` | `bool` | No | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `float64` | Yes | The maximum drive size in bytes. |
| `memory` | `float64` | No | Memory allocated in MB. |
| `mounts` | `map[string]any` | No | List of drives to mount to the sandbox at the provided path. |
| `name` | `string` | Yes | The name of the command. |
| `networkId` | `string` | No | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `any` | No | Network policy configuration. |
| `parentId` | `string` | No | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `string` | Yes | The path of the directory to create. |
| `persistent` | `bool` | No | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `[]any` | No | List of ports to expose from the sandbox. |
| `projectId` | `string` | Yes | The project that owns the drive. |
| `recursive` | `bool` | No | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `string` | No | The region where the snapshot is stored. |
| `regions` | `[]any` | No | The regions where the snapshot is available. |
| `resources` | `map[string]any` | No | Resources to define the VM |
| `resumed` | `bool` | Yes |  |
| `routes` | `[]any` | Yes |  |
| `runtime` | `string` | No | The runtime environment for the sandbox. |
| `sandbox` | `map[string]any` | Yes | This object contains information related to a Vercel NamedSandbox. |
| `session` | `map[string]any` | Yes | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `string` | Yes | The ID of the session associated with the command. |
| `sizeBytes` | `float64` | Yes | The size of the snapshot in bytes. |
| `snapshotExpiration` | `any` | No | Default snapshot expiration time in milliseconds. |
| `source` | `any` | No | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `string` | Yes | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `float64` | Yes | When the command was started, in milliseconds since the epoch. |
| `status` | `string` | Yes | The status of the snapshot. |
| `statusUpdatedAt` | `float64` | Yes | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `bool` | No | Execute the command with root (superuser) privileges. |
| `tags` | `map[string]any` | No | Key-value tags to associate with the sandbox. |
| `timeout` | `int` | No | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `totalActiveCpuDurationMs` | `float64` | No | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `totalDurationMs` | `float64` | No | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `totalEgressBytes` | `float64` | No | Cumulative egress bytes across all sandbox runs. |
| `totalIngressBytes` | `float64` | No | Cumulative ingress bytes across all sandbox runs. |
| `updatedAt` | `float64` | Yes | The last time the snapshot was updated, in milliseconds since the epoch. |
| `vcpus` | `float64` | No | Number of virtual CPUs allocated. |
| `wait` | `bool` | No | If true, returns an ND-JSON stream that emits the command status when started and again when finished. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Sandbox(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Sandbox(nil).Load(map[string]any{"id": "sandbox_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Sandbox(nil).Create(map[string]any{
    "name": "example_name",
    "args": []any{},
    "command": "example_command",
    "createdAt": 1,
    "cwd": "example_cwd",
    "exitCode": 1,
    "id": "example_id",
    "keepLastSnapshots": map[string]any{},
    "lastUsedAt": 1,
    "maxSizeBytes": 1,
    "path": "example_path",
    "projectId": "example_projectId",
    "resumed": true,
    "routes": []any{},
    "sandbox": map[string]any{},
    "session": map[string]any{},
    "sessionId": "example_sessionId",
    "sizeBytes": 1,
    "sourceSessionId": "example_sourceSessionId",
    "startedAt": 1,
    "status": "example_status",
    "statusUpdatedAt": 1,
    "updatedAt": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Sandbox(nil).Update(map[string]any{
    "id": "sandbox_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Sandbox(nil).Remove(map[string]any{"id": "sandbox_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SandboxEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SchemaEntity

```go
schema := client.Schema(nil)
fmt.Println(schema.GetName()) // "schema"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregations` | `[]any` | Yes |  |
| `defaultAggregation` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dimensions` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `unit` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Schema(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Schema(nil).Load(map[string]any{"id": "schema_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SchemaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecurityEntity

```go
security := client.Security(nil)
fmt.Println(security.GetName()) // "security"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Action` | `string` | No |  |
| `ActorId` | `string` | No |  |
| `CreatedAt` | `string` | Yes |  |
| `DeletedAt` | `string` | No |  |
| `Domain` | `string` | Yes |  |
| `ExpiresAt` | `float64` | No |  |
| `Id` | `string` | Yes |  |
| `Ip` | `string` | Yes |  |
| `IsProjectRule` | `bool` | No |  |
| `Note` | `string` | No |  |
| `OwnerId` | `string` | Yes |  |
| `ProjectId` | `string` | No |  |
| `UpdatedAt` | `string` | Yes |  |
| `UpdatedAtHour` | `string` | Yes |  |
| `action` | `map[string]any` | Yes |  |
| `action_type` | `string` | Yes |  |
| `active` | `bool` | Yes |  |
| `allSources` | `bool` | No |  |
| `botIdEnabled` | `bool` | No |  |
| `changes` | `[]any` | Yes |  |
| `conditionGroup` | `[]any` | Yes |  |
| `conditions` | `[]any` | No |  |
| `count` | `float64` | Yes |  |
| `crs` | `map[string]any` | Yes | Custom Ruleset |
| `description` | `string` | No |  |
| `domain` | `string` | No |  |
| `endTime` | `string` | Yes |  |
| `firewallEnabled` | `bool` | Yes |  |
| `host` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ips` | `[]any` | Yes |  |
| `isActive` | `bool` | Yes |  |
| `logHeaders` | `any` | No |  |
| `managedRules` | `map[string]any` | No |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `ownerId` | `string` | Yes |  |
| `projectKey` | `string` | Yes |  |
| `projectScope` | `bool` | No | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `ruleName` | `string` | Yes |  |
| `rules` | `[]any` | Yes |  |
| `rulesets` | `any` | No |  |
| `sourceIp` | `string` | No |  |
| `startTime` | `string` | Yes |  |
| `ttl` | `float64` | No | Time to live in milliseconds |
| `updatedAt` | `string` | Yes |  |
| `version` | `float64` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Security(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Security(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Security(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "CreatedAt": "example_CreatedAt",
    "Domain": "example_Domain",
    "Id": "example_Id",
    "Ip": "example_Ip",
    "OwnerId": "example_OwnerId",
    "UpdatedAt": "example_UpdatedAt",
    "UpdatedAtHour": "example_UpdatedAtHour",
    "action": map[string]any{},
    "action_type": "example_action_type",
    "active": true,
    "changes": []any{},
    "conditionGroup": []any{},
    "count": 1,
    "crs": map[string]any{},
    "endTime": "example_endTime",
    "firewallEnabled": true,
    "host": "example_host",
    "id": "example_id",
    "ips": []any{},
    "isActive": true,
    "name": "example_name",
    "ownerId": "example_ownerId",
    "projectKey": "example_projectKey",
    "public_ip": "example_public_ip",
    "ruleId": "example_ruleId",
    "ruleName": "example_ruleName",
    "rules": []any{},
    "startTime": "example_startTime",
    "updatedAt": "example_updatedAt",
    "version": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Security(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Security(nil).Remove(map[string]any{"config_version": "config_version"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecurityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SegmentEntity

```go
segment := client.Segment(nil)
fmt.Println(segment.GetName()) // "segment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float64` | Yes |  |
| `createdBy` | `string` | No |  |
| `data` | `map[string]any` | Yes |  |
| `description` | `string` | No |  |
| `hint` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `projectId` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `float64` | Yes |  |
| `usedByFlags` | `[]any` | No |  |
| `usedBySegments` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Segment(nil).Load(map[string]any{"id": "segment_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StorageEntity

```go
storage := client.Storage(nil)
fmt.Println(storage.GetName()) // "storage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `count` | `float64` | Yes |  |
| `id` | `string` | No |  |
| `isTokenExpired` | `bool` | Yes |  |
| `kind` | `string` | No | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` | `string` | Yes |  |
| `projectFilter` | `map[string]any` | No |  |
| `projectId` | `string` | No | The project this store is scoped to. |
| `projectsMetadata` | `[]any` | Yes |  |
| `region` | `string` | Yes |  |
| `size` | `float64` | Yes |  |
| `status` | `string` | Yes |  |
| `totalConnectedProjects` | `float64` | No |  |
| `usageQuotaExceeded` | `bool` | Yes |  |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Storage(nil).Load(map[string]any{"id": "storage_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Storage(nil).Create(map[string]any{
    "count": 1,
    "isTokenExpired": true,
    "name": "example_name",
    "projectsMetadata": []any{},
    "region": "example_region",
    "size": 1,
    "status": "example_status",
    "usageQuotaExceeded": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Storage(nil).Remove(map[string]any{"id": "storage_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StorageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamEntity

```go
team := client.Team(nil)
fmt.Println(team.GetName()) // "team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessRequestedAt` | `float64` | Yes | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `float64` | No | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `float64` | No | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `map[string]any` | No | Attribution information for the session or current page |
| `avatar` | `string` | Yes | The ID of the file used as avatar for this Team. |
| `billing` | `map[string]any` | Yes | The team's billing plan. |
| `bitbucket` | `map[string]any` | Yes | Map of the connected Bitbucket account. |
| `confirmed` | `bool` | Yes | Current status of the membership. |
| `connect` | `map[string]any` | No |  |
| `createdAt` | `float64` | Yes | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `string` | Yes | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `map[string]any` | No | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `map[string]any` | No | Default deployment expiration settings for this team |
| `defaultPassport` | `map[string]any` | Yes | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `map[string]any` | No | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `map[string]any` | No | Default roles for the team. |
| `deploymentPolicy` | `map[string]any` | No | Composable deployment-time policy for the team. |
| `description` | `string` | Yes | A short description of the Team. |
| `disableHardAutoBlocks` | `any` | No |  |
| `disableRepositoryDispatchEvents` | `bool` | No | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | `string` | No | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | `string` | No | Controls who can request access to protected deployments. |
| `emailDomain` | `string` | No | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | `bool` | No | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | `string` | No | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | `string` | No | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | `string` | No | The new fallback environment for the microfrontends group. |
| `github` | `map[string]any` | Yes | Map of the connected GitHub account. |
| `gitlab` | `map[string]any` | Yes | Map of the connected GitLab account. |
| `hideIpAddresses` | `bool` | No | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `bool` | No | Indicates if IP addresses should be accessible in log drains |
| `id` | `string` | Yes | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `float64` | No | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `string` | No | Code that can be used to join this Team. |
| `ipBuckets` | `[]any` | No |  |
| `joinedFrom` | `map[string]any` | Yes | A map that describes the origin from where the user joined. |
| `membership` | `map[string]any` | Yes | The membership of the authenticated User in relation to the Team. |
| `name` | `string` | Yes | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `map[string]any` | Yes | NSNB configuration for the team. |
| `orgRootTeamId` | `string` | No | Best-effort ID of the organization’s root billing team. |
| `pagination` | `map[string]any` | Yes | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `string` | No | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `float64` | No | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `bool` | No | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `string` | No | The hostname that is current set as preview deployment suffix. |
| `projects` | `[]any` | No |  |
| `regenerateInviteCode` | `bool` | No | Create a new invite code and replace the current one. |
| `remoteCaching` | `map[string]any` | No | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `bool` | No | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `map[string]any` | No | Resource configuration for the team. |
| `role` | `string` | No | The role in the team of the member. |
| `saml` | `map[string]any` | Yes | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `string` | No | Sensitive environment variable policy for this team |
| `slug` | `string` | Yes | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `string` | Yes | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `map[string]any` | Yes | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `map[string]any` | Yes | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `map[string]any` | Yes | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `map[string]any` | Yes | When enabled, creating shareable links requires Owner role. |
| `teamName` | `string` | Yes | The name of the team. |
| `teamPermissions` | `[]any` | No | The team permissions to set for the member. |
| `teamSlug` | `string` | Yes | The slug of the team. |
| `teams` | `[]any` | Yes |  |
| `updatedAt` | `float64` | Yes | Timestamp (in milliseconds) of when the Team was last updated. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Team(nil).Create(map[string]any{
    "accessRequestedAt": 1,
    "avatar": "example_avatar",
    "billing": map[string]any{},
    "bitbucket": map[string]any{},
    "confirmed": true,
    "createdAt": 1,
    "creatorId": "example_creatorId",
    "defaultPassport": map[string]any{},
    "description": "example_description",
    "github": map[string]any{},
    "gitlab": map[string]any{},
    "id": "example_id",
    "joinedFrom": map[string]any{},
    "membership": map[string]any{},
    "name": "example_name",
    "nsnbConfig": map[string]any{},
    "pagination": map[string]any{},
    "saml": map[string]any{},
    "slug": "example_slug",
    "stagingPrefix": "example_stagingPrefix",
    "strictConnectors": map[string]any{},
    "strictDeploymentProtectionSettings": map[string]any{},
    "strictPasswordProtectionSettings": map[string]any{},
    "strictShareableLinks": map[string]any{},
    "teamName": "example_teamName",
    "teamSlug": "example_teamSlug",
    "teams": []any{},
    "updatedAt": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Team(nil).Update(map[string]any{
    "id": "team_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Team(nil).Remove(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TldNameEntity

```go
tldName := client.TldName(nil)
fmt.Println(tldName.GetName()) // "tld_name"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TldName(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TldNameEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ToggleEntity

```go
toggle := client.Toggle(nil)
fmt.Println(toggle.GetName()) // "toggle"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Toggle(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "value": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ToggleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `[]any` | No | The categories that group this event with related event types. |
| `createdAt` | `float64` | Yes | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `[]any` | Yes | A list of "entities" within the event `text`. |
| `id` | `string` | Yes | The unique identifier of the Event. |
| `payload` | `any` | No |  |
| `principal` | `any` | No |  |
| `principalId` | `string` | Yes | The ID of the principal who generated the event. |
| `requestId` | `string` | No |  |
| `sessionId` | `string` | No | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `string` | Yes | The human-readable text of the Event. |
| `tokenId` | `string` | No | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `string` | No | The type of the event. |
| `user` | `map[string]any` | Yes | Metadata for {@link userId}. |
| `userId` | `string` | No | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `[]any` | No | Metadata for {@link viaIds}. |
| `viaIds` | `[]any` | No | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.User(nil).Remove(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VcrEntity

```go
vcr := client.Vcr(nil)
fmt.Println(vcr.GetName()) // "vcr"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arch` | `string` | No | CPU architecture the manifest targets. |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the image was created. |
| `id` | `string` | Yes | Internal identifier of the image. |
| `imageId` | `string` | Yes | Internal identifier of the image the tag points at. |
| `kind` | `string` | Yes | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` | `[]any` | Yes |  |
| `manifestDigest` | `string` | Yes | SHA-256 digest of the image manifest. |
| `name` | `string` | Yes | Name of the repository. |
| `platform` | `string` | No | Operating system the manifest targets. |
| `projectId` | `string` | Yes | Identifier of the project the repository belongs to. |
| `public` | `bool` | Yes | Whether the repository is public. |
| `pushedBy` | `string` | No | Identifier of the actor that pushed the image. |
| `repositoryId` | `string` | Yes | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `float64` | Yes | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | Yes | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | `string` | Yes | The tag name. |
| `tags` | `[]any` | Yes | Tags pointing at this image's manifest. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Vcr(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Vcr(nil).Load(map[string]any{"id_or_name": "id_or_name", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Vcr(nil).Create(map[string]any{
    "id_or_name": "example_id_or_name",
    "project_id": "example_project_id",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "imageId": "example_imageId",
    "kind": "example_kind",
    "layers": []any{},
    "manifestDigest": "example_manifestDigest",
    "name": "example_name",
    "projectId": "example_projectId",
    "public": true,
    "repositoryId": "example_repositoryId",
    "sizeInBytes": 1,
    "status": "example_status",
    "tag": "example_tag",
    "tags": []any{},
    "teamId": "example_teamId",
    "teamSlug": "example_teamSlug",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Vcr(nil).Update(map[string]any{
    "project_slug": "project_slug",
    "repository_name": "repository_name",
    "team_slug": "team_slug",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Vcr(nil).Remove(map[string]any{"id_or_name": "id_or_name", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VcrEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VcrImageListEntity

```go
vcrImageList := client.VcrImageList(nil)
fmt.Println(vcrImageList.GetName()) // "vcr_image_list"
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
| `sizeInBytes` | `float64` | Yes | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | Yes | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | `[]any` | Yes | Tags pointing at this image's manifest. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VcrImageList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VcrImageListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VcrRepositoryListEntity

```go
vcrRepositoryList := client.VcrRepositoryList(nil)
fmt.Println(vcrRepositoryList.GetName()) // "vcr_repository_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the repository was created. |
| `id` | `string` | Yes | Unique identifier of the repository. |
| `name` | `string` | Yes | Name of the repository. |
| `projectId` | `string` | Yes | Identifier of the project the repository belongs to. |
| `public` | `bool` | Yes | Whether the repository is public. |
| `updatedAt` | `string` | Yes | ISO 8601 timestamp of when the repository was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VcrRepositoryList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VcrRepositoryListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VcrRepositoryPermissionListEntity

```go
vcrRepositoryPermissionList := client.VcrRepositoryPermissionList(nil)
fmt.Println(vcrRepositoryPermissionList.GetName()) // "vcr_repository_permission_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | `string` | Yes | Identifier of the repository the permission grants access to. |
| `teamId` | `string` | Yes | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Yes | Slug of the team that is granted access to the repository. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VcrRepositoryPermissionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VcrRepositoryPermissionListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebAnalyticsEntity

```go
webAnalytics := client.WebAnalytics(nil)
fmt.Println(webAnalytics.GetName()) // "web_analytics"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any` | Yes |  |
| `query` | `map[string]any` | Yes |  |
| `version` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebAnalytics(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebAnalyticsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alertRuleIds` | `[]any` | No |  |
| `createdAt` | `float64` | Yes | A number containing the date when the webhook was created in in milliseconds |
| `events` | `[]any` | Yes | The webhooks events |
| `id` | `string` | Yes | The webhook id |
| `ownerId` | `string` | Yes | The unique ID of the team the webhook belongs to |
| `projectIds` | `[]any` | No | The ID of the projects the webhook is associated with |
| `secret` | `string` | Yes | The webhook secret used to sign the payload |
| `updatedAt` | `float64` | Yes | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `string` | Yes | A string with the URL of the webhook |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "createdAt": 1,
    "events": []any{},
    "id": "example_id",
    "ownerId": "example_ownerId",
    "secret": "example_secret",
    "updatedAt": 1,
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewVercelSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

