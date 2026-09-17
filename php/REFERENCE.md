# Vercel PHP SDK Reference

Complete API reference for the Vercel PHP SDK.


## VercelSDK

### Constructor

```php
require_once __DIR__ . '/vercel_sdk.php';

$client = new VercelSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VercelSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = VercelSDK::test();
```


### Instance Methods

#### `AccessGroup($data = null)`

Create a new `AccessGroupEntity` instance. Pass `null` for no initial data.

#### `AiGateway($data = null)`

Create a new `AiGatewayEntity` instance. Pass `null` for no initial data.

#### `AiGatewayRule($data = null)`

Create a new `AiGatewayRuleEntity` instance. Pass `null` for no initial data.

#### `AiGatewayRuleList($data = null)`

Create a new `AiGatewayRuleListEntity` instance. Pass `null` for no initial data.

#### `AiGatewayVirtualModelConfig($data = null)`

Create a new `AiGatewayVirtualModelConfigEntity` instance. Pass `null` for no initial data.

#### `AiGatewayVirtualModelConfigList($data = null)`

Create a new `AiGatewayVirtualModelConfigListEntity` instance. Pass `null` for no initial data.

#### `Alias($data = null)`

Create a new `AliasEntity` instance. Pass `null` for no initial data.

#### `ApiAiGateway($data = null)`

Create a new `ApiAiGatewayEntity` instance. Pass `null` for no initial data.

#### `ApiKey($data = null)`

Create a new `ApiKeyEntity` instance. Pass `null` for no initial data.

#### `Artifact($data = null)`

Create a new `ArtifactEntity` instance. Pass `null` for no initial data.

#### `Authentication($data = null)`

Create a new `AuthenticationEntity` instance. Pass `null` for no initial data.

#### `Billing($data = null)`

Create a new `BillingEntity` instance. Pass `null` for no initial data.

#### `BulkRedirect($data = null)`

Create a new `BulkRedirectEntity` instance. Pass `null` for no initial data.

#### `Cert($data = null)`

Create a new `CertEntity` instance. Pass `null` for no initial data.

#### `Check($data = null)`

Create a new `CheckEntity` instance. Pass `null` for no initial data.

#### `ChecksV2($data = null)`

Create a new `ChecksV2Entity` instance. Pass `null` for no initial data.

#### `Connect($data = null)`

Create a new `ConnectEntity` instance. Pass `null` for no initial data.

#### `ConnectConnector($data = null)`

Create a new `ConnectConnectorEntity` instance. Pass `null` for no initial data.

#### `ConnectConnectorList($data = null)`

Create a new `ConnectConnectorListEntity` instance. Pass `null` for no initial data.

#### `ConnectConnectorProjectConnectionList($data = null)`

Create a new `ConnectConnectorProjectConnectionListEntity` instance. Pass `null` for no initial data.

#### `ConnectProjectConnection($data = null)`

Create a new `ConnectProjectConnectionEntity` instance. Pass `null` for no initial data.

#### `ConnectProjectConnectorConnectionList($data = null)`

Create a new `ConnectProjectConnectorConnectionListEntity` instance. Pass `null` for no initial data.

#### `Deployment($data = null)`

Create a new `DeploymentEntity` instance. Pass `null` for no initial data.

#### `Dns($data = null)`

Create a new `DnsEntity` instance. Pass `null` for no initial data.

#### `Domain($data = null)`

Create a new `DomainEntity` instance. Pass `null` for no initial data.

#### `DomainsRegistrar($data = null)`

Create a new `DomainsRegistrarEntity` instance. Pass `null` for no initial data.

#### `Drain($data = null)`

Create a new `DrainEntity` instance. Pass `null` for no initial data.

#### `EdgeCache($data = null)`

Create a new `EdgeCacheEntity` instance. Pass `null` for no initial data.

#### `Env($data = null)`

Create a new `EnvEntity` instance. Pass `null` for no initial data.

#### `Environment($data = null)`

Create a new `EnvironmentEntity` instance. Pass `null` for no initial data.

#### `FeatureFlag($data = null)`

Create a new `FeatureFlagEntity` instance. Pass `null` for no initial data.

#### `File($data = null)`

Create a new `FileEntity` instance. Pass `null` for no initial data.

#### `Flag($data = null)`

Create a new `FlagEntity` instance. Pass `null` for no initial data.

#### `FlagsSdkKeyWithSecret($data = null)`

Create a new `FlagsSdkKeyWithSecretEntity` instance. Pass `null` for no initial data.

#### `GlobalConfig($data = null)`

Create a new `GlobalConfigEntity` instance. Pass `null` for no initial data.

#### `GlobalConfigItem($data = null)`

Create a new `GlobalConfigItemEntity` instance. Pass `null` for no initial data.

#### `GlobalConfigToken($data = null)`

Create a new `GlobalConfigTokenEntity` instance. Pass `null` for no initial data.

#### `Integration($data = null)`

Create a new `IntegrationEntity` instance. Pass `null` for no initial data.

#### `Kms($data = null)`

Create a new `KmsEntity` instance. Pass `null` for no initial data.

#### `ListEventType($data = null)`

Create a new `ListEventTypeEntity` instance. Pass `null` for no initial data.

#### `Log($data = null)`

Create a new `LogEntity` instance. Pass `null` for no initial data.

#### `LogDrain($data = null)`

Create a new `LogDrainEntity` instance. Pass `null` for no initial data.

#### `Marketplace($data = null)`

Create a new `MarketplaceEntity` instance. Pass `null` for no initial data.

#### `Microfrontend($data = null)`

Create a new `MicrofrontendEntity` instance. Pass `null` for no initial data.

#### `Network($data = null)`

Create a new `NetworkEntity` instance. Pass `null` for no initial data.

#### `Networking($data = null)`

Create a new `NetworkingEntity` instance. Pass `null` for no initial data.

#### `Observability($data = null)`

Create a new `ObservabilityEntity` instance. Pass `null` for no initial data.

#### `PrivateLinkEndpoint($data = null)`

Create a new `PrivateLinkEndpointEntity` instance. Pass `null` for no initial data.

#### `Project($data = null)`

Create a new `ProjectEntity` instance. Pass `null` for no initial data.

#### `ProjectMember($data = null)`

Create a new `ProjectMemberEntity` instance. Pass `null` for no initial data.

#### `ProjectRoute($data = null)`

Create a new `ProjectRouteEntity` instance. Pass `null` for no initial data.

#### `Query($data = null)`

Create a new `QueryEntity` instance. Pass `null` for no initial data.

#### `Record($data = null)`

Create a new `RecordEntity` instance. Pass `null` for no initial data.

#### `RollingRelease($data = null)`

Create a new `RollingReleaseEntity` instance. Pass `null` for no initial data.

#### `Sandbox($data = null)`

Create a new `SandboxEntity` instance. Pass `null` for no initial data.

#### `Schema($data = null)`

Create a new `SchemaEntity` instance. Pass `null` for no initial data.

#### `Security($data = null)`

Create a new `SecurityEntity` instance. Pass `null` for no initial data.

#### `Segment($data = null)`

Create a new `SegmentEntity` instance. Pass `null` for no initial data.

#### `Storage($data = null)`

Create a new `StorageEntity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `TldName($data = null)`

Create a new `TldNameEntity` instance. Pass `null` for no initial data.

#### `Toggle($data = null)`

Create a new `ToggleEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `Vcr($data = null)`

Create a new `VcrEntity` instance. Pass `null` for no initial data.

#### `VcrImageList($data = null)`

Create a new `VcrImageListEntity` instance. Pass `null` for no initial data.

#### `VcrRepositoryList($data = null)`

Create a new `VcrRepositoryListEntity` instance. Pass `null` for no initial data.

#### `VcrRepositoryPermissionList($data = null)`

Create a new `VcrRepositoryPermissionListEntity` instance. Pass `null` for no initial data.

#### `WebAnalytics($data = null)`

Create a new `WebAnalyticsEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): VercelUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccessGroupEntity

```php
$access_group = $client->AccessGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessGroupId` | `string` | Yes | ID of the access group. |
| `createdAt` | `string` | Yes | Timestamp in milliseconds when the access group was created. |
| `entitlements` | `array` | No |  |
| `id` | `string` | No |  |
| `isDsyncManaged` | `bool` | Yes |  |
| `membersCount` | `float` | Yes | Number of members in the access group. |
| `membersToAdd` | `array` | No | List of members to add to the access group. |
| `membersToRemove` | `array` | No | List of members to remove from the access group. |
| `name` | `string` | Yes | The name of this access group. |
| `projectId` | `string` | Yes |  |
| `projects` | `array` | No |  |
| `projectsCount` | `float` | Yes | Number of projects in the access group. |
| `role` | `string` | Yes | The project role that will be added to this Access Group. |
| `teamId` | `string` | Yes | ID of the team that this access group belongs to. |
| `teamPermissions` | `array` | No | Permissions that the team has in the access group. |
| `teamRoles` | `array` | No | Roles that the team has in the access group. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AccessGroup()->create([
  "id" => null, // string
  "accessGroupId" => null, // string
  "createdAt" => null, // string
  "isDsyncManaged" => null, // bool
  "membersCount" => null, // float
  "name" => null, // string
  "projectId" => null, // string
  "projectsCount" => null, // float
  "role" => null, // string
  "teamId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AccessGroup()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AccessGroup()->load(["id" => "access_group_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AccessGroup()->remove(["id" => "access_group_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AccessGroup()->update([
  "id" => "access_group_id",
  "access_group_id" => "access_group_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccessGroupEntity`

Create a new `AccessGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayEntity

```php
$ai_gateway = $client->AiGateway();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGateway()->remove(["rule_id" => "rule_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayEntity`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayRuleEntity

```php
$ai_gateway_rule = $client->AiGatewayRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `array` | No |  |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `string` | No |  |
| `deleted` | `bool` | No |  |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `match` | `array` | No |  |
| `ownerId` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayRule()->create([
  "createdAt" => null, // float
  "enabled" => null, // bool
  "ownerId" => null, // string
  "ruleId" => null, // string
  "type" => null, // string
  "updatedAt" => null, // float
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayRule()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayRuleEntity`

Create a new `AiGatewayRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayRuleListEntity

```php
$ai_gateway_rule_list = $client->AiGatewayRuleList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `array` | No |  |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `string` | No |  |
| `deleted` | `bool` | No |  |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `match` | `array` | No |  |
| `ownerId` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayRuleList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayRuleListEntity`

Create a new `AiGatewayRuleListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayVirtualModelConfigEntity

```php
$ai_gateway_virtual_model_config = $client->AiGatewayVirtualModelConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `bool` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `array` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | No | Use caching if available. |
| `createdAt` | `float` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `string` | No | User or app id that created this VMC. |
| `deleted` | `bool` | Yes | Whether this VMC is soft-deleted. |
| `description` | `string` | No | Optional description for UI. |
| `disallowPromptTraining` | `bool` | No | Only use providers that will not train on your prompts. |
| `displayName` | `string` | No | Human-readable name for UI. |
| `has` | `array` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | No | Only use HIPAA-compliant providers. |
| `id` | `string` | No |  |
| `inferenceRegion` | `array` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `array` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `array` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `array` | No | Restrict routing to only these providers. |
| `providerOptions` | `array` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `array` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `array` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `array` | No | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | No | For kind=router: how to order candidates. |
| `serviceTier` | `string` | No | Service tier for providers that support it. |
| `sort` | `string` | No | Rank eligible providers by an attribute. |
| `speed` | `string` | No | Only use fastest providers with short timeouts. |
| `status` | `string` | Yes | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float` | Yes | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | No | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Yes | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | No | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | No | Only use providers with zero data retention. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayVirtualModelConfig()->create([
  "createdAt" => null, // float
  "deleted" => null, // bool
  "kind" => null, // string
  "ownerId" => null, // string
  "status" => null, // string
  "updatedAt" => null, // float
  "virtualModelSlug" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayVirtualModelConfig()->load(["id" => "ai_gateway_virtual_model_config_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayVirtualModelConfig()->update([
  "id" => "ai_gateway_virtual_model_config_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayVirtualModelConfigEntity`

Create a new `AiGatewayVirtualModelConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayVirtualModelConfigListEntity

```php
$ai_gateway_virtual_model_config_list = $client->AiGatewayVirtualModelConfigList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `bool` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `array` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | No | Use caching if available. |
| `createdAt` | `float` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `string` | No | User or app id that created this VMC. |
| `deleted` | `bool` | Yes | Whether this VMC is soft-deleted. |
| `description` | `string` | No | Optional description for UI. |
| `disallowPromptTraining` | `bool` | No | Only use providers that will not train on your prompts. |
| `displayName` | `string` | No | Human-readable name for UI. |
| `has` | `array` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | No | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `array` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `array` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `array` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `array` | No | Restrict routing to only these providers. |
| `providerOptions` | `array` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `array` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `array` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `array` | No | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | No | For kind=router: how to order candidates. |
| `serviceTier` | `string` | No | Service tier for providers that support it. |
| `sort` | `string` | No | Rank eligible providers by an attribute. |
| `speed` | `string` | No | Only use fastest providers with short timeouts. |
| `status` | `string` | Yes | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float` | Yes | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | No | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Yes | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | No | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | No | Only use providers with zero data retention. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayVirtualModelConfigList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayVirtualModelConfigListEntity`

Create a new `AiGatewayVirtualModelConfigListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AliasEntity

```php
$alias = $client->Alias();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | `string` | Yes | The date when the alias was created |
| `createdAt` | `float` | No | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `array` | Yes | Information of the user who created the alias |
| `deletedAt` | `float` | No | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `array` | Yes | A map with the deployment ID, URL and metadata |
| `deploymentId` | `string` | Yes | The deployment ID |
| `id` | `string` | No |  |
| `microfrontends` | `array` | Yes | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `string` | No | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `string` | Yes | The unique identifier of the project |
| `protectionBypass` | `array` | No | The protection bypass for the alias |
| `redirect` | `string` | No | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | `float` | No | Status code to be used on redirect |
| `uid` | `string` | Yes | The unique identifier of the alias |
| `updatedAt` | `float` | No | The date when the alias was updated in milliseconds since the UNIX epoch |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Alias()->create([
  "deployment_id" => null, // string
  "alias" => null, // string
  "created" => null, // string
  "creator" => null, // array
  "deployment" => null, // array
  "deploymentId" => null, // string
  "microfrontends" => null, // array
  "projectId" => null, // string
  "uid" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Alias()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Alias()->load(["id" => "alias_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Alias()->remove(["id" => "alias_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Alias()->update([
  "id" => "alias_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AliasEntity`

Create a new `AliasEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiAiGatewayEntity

```php
$api_ai_gateway = $client->ApiAiGateway();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiAiGateway()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ApiAiGateway()->remove(["vmc_slug" => "vmc_slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiAiGatewayEntity`

Create a new `ApiAiGatewayEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiKeyEntity

```php
$api_key = $client->ApiKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `float` | Yes | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `array` | Yes | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `float` | Yes | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `string` | Yes | The ID of the user who created the API key. |
| `createdByAppId` | `string` | Yes | The ID of the app that created the API key, if any |
| `expiresAt` | `float` | Yes | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `string` | Yes | The unique identifier of the API key. |
| `leakedAt` | `float` | Yes | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `string` | Yes | URL where the API key was discovered as leaked. |
| `metadata` | `array` | No | Generic metadata attached to the API key. |
| `name` | `string` | Yes | The human-readable name of the API key. |
| `partialKey` | `string` | Yes | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `string` | Yes | The ID of the project that this API key grants access to. |
| `purpose` | `string` | Yes | The API key's purpose, i.e. |
| `quota` | `array` | Yes | AI Gateway quota associated with an API key. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiKey()->create([
  "activeAt" => null, // float
  "aiGatewayQuota" => null, // array
  "createdAt" => null, // float
  "createdBy" => null, // string
  "createdByAppId" => null, // string
  "expiresAt" => null, // float
  "id" => null, // string
  "leakedAt" => null, // float
  "leakedUrl" => null, // string
  "name" => null, // string
  "partialKey" => null, // string
  "projectId" => null, // string
  "purpose" => null, // string
  "quota" => null, // array
  "teamId" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiKeyEntity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ArtifactEntity

```php
$artifact = $client->Artifact();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hashes` | `array` | Yes | artifact hashes |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Artifact()->create([
  "hashes" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Artifact()->load(["id" => "artifact_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Artifact()->remove();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Artifact()->update([
  "id" => "artifact_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArtifactEntity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthenticationEntity

```php
$authentication = $client->Authentication();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `float` | Yes | Timestamp (in milliseconds) of when the token was most recently used. |
| `createdAt` | `float` | Yes | Timestamp (in milliseconds) of when the token was created. |
| `expiresAt` | `float` | No | Timestamp (in milliseconds) of when the token expires. |
| `id` | `string` | Yes | The unique identifier of the token. |
| `leakedAt` | `float` | No | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | `string` | No | URL where the token was discovered as leaked. |
| `name` | `string` | Yes | The human-readable name of the token. |
| `origin` | `string` | No | The origin of how the token was created. |
| `prefix` | `string` | No | The token's prefix, for identification purposes. |
| `projectId` | `string` | No | The ID of the project to scope this token to |
| `revokedAt` | `float` | No | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | `array` | No | The access scopes granted to the token. |
| `suffix` | `string` | No | The last few characters of the token, for identification purposes. |
| `type` | `string` | Yes | The type of the token. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Authentication()->create([
  "activeAt" => null, // float
  "createdAt" => null, // float
  "id" => null, // string
  "name" => null, // string
  "type" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Authentication()->load(["token_id" => "token_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Authentication()->remove(["token_id" => "token_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthenticationEntity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillingEntity

```php
$billing = $client->Billing();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Billing()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Billing()->load(["from" => "from", "to" => "to"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillingEntity`

Create a new `BillingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkRedirectEntity

```php
$bulk_redirect = $client->BulkRedirect();
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
| `lastModified` | `float` | Yes |  |
| `name` | `string` | No | Optional name for the version. |
| `overwrite` | `bool` | No |  |
| `projectId` | `string` | Yes |  |
| `redirect` | `array` | Yes | The redirect object to edit. |
| `redirectCount` | `float` | No | The number of redirects in this version. |
| `redirects` | `array` | No |  |
| `restore` | `bool` | No | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BulkRedirect()->create([
  "project_id" => null, // string
  "createdBy" => null, // string
  "id" => null, // string
  "key" => null, // string
  "lastModified" => null, // float
  "projectId" => null, // string
  "redirect" => null, // array
  "teamId" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BulkRedirect()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BulkRedirect()->load(["project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BulkRedirect()->remove(["project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BulkRedirect()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkRedirectEntity`

Create a new `BulkRedirectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CertEntity

```php
$cert = $client->Cert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoRenew` | `bool` | Yes |  |
| `ca` | `string` | Yes | The certificate authority |
| `cert` | `string` | Yes | The certificate |
| `cns` | `array` | Yes | The common names the cert should be issued for |
| `createdAt` | `float` | Yes |  |
| `expiresAt` | `float` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Cert()->create([
  "autoRenew" => null, // bool
  "ca" => null, // string
  "cert" => null, // string
  "cns" => null, // array
  "createdAt" => null, // float
  "expiresAt" => null, // float
  "id" => null, // string
  "key" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cert()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Cert()->load(["id" => "cert_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Cert()->remove(["id" => "cert_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Cert()->update([
  "id" => "cert_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CertEntity`

Create a new `CertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CheckEntity

```php
$check = $client->Check();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocking` | `bool` | Yes | Whether the check should block a deployment from succeeding |
| `blocks` | `string` | Yes |  |
| `completedAt` | `float` | No |  |
| `conclusion` | `mixed` | No | The result of the check being run |
| `createdAt` | `float` | Yes |  |
| `deletedAt` | `float` | No |  |
| `detailsUrl` | `string` | No | URL to display for further details |
| `externalId` | `string` | No | An identifier that can be used as an external reference |
| `id` | `string` | Yes |  |
| `integrationId` | `string` | Yes |  |
| `isRerequestable` | `bool` | Yes |  |
| `metrics` | `array` | Yes |  |
| `name` | `string` | Yes | The name of the check being created |
| `output` | `array` | No | The results of the check Run |
| `ownerId` | `string` | Yes |  |
| `path` | `string` | No | Path of the page that is being checked |
| `projectId` | `string` | Yes |  |
| `requires` | `string` | Yes |  |
| `rerequestable` | `bool` | No | Whether a user should be able to request for the check to be rerun if it fails |
| `source` | `mixed` | Yes |  |
| `sourceIntegrationConfigurationId` | `string` | No |  |
| `sourceKind` | `string` | Yes |  |
| `startedAt` | `float` | No |  |
| `status` | `mixed` | No | The current status of the check |
| `targets` | `array` | Yes |  |
| `timeout` | `float` | Yes |  |
| `updatedAt` | `float` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Check()->create([
  "deployment_id" => null, // string
  "blocking" => null, // bool
  "blocks" => null, // string
  "createdAt" => null, // float
  "id" => null, // string
  "integrationId" => null, // string
  "isRerequestable" => null, // bool
  "metrics" => null, // array
  "name" => null, // string
  "ownerId" => null, // string
  "projectId" => null, // string
  "requires" => null, // string
  "source" => null, // mixed
  "sourceKind" => null, // string
  "targets" => null, // array
  "timeout" => null, // float
  "updatedAt" => null, // float
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Check()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Check()->load(["id" => "check_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Check()->remove(["id" => "check_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Check()->update([
  "id" => "check_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CheckEntity`

Create a new `CheckEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChecksV2Entity

```php
$checks_v2 = $client->ChecksV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkId` | `string` | Yes |  |
| `completedAt` | `float` | No |  |
| `conclusion` | `string` | No |  |
| `conclusionText` | `string` | No |  |
| `externalId` | `string` | No |  |
| `externalUrl` | `string` | No |  |
| `output` | `array` | No |  |
| `runs` | `array` | Yes |  |
| `status` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ChecksV2()->create([
  "deployment_id" => null, // string
  "checkId" => null, // string
  "runs" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ChecksV2()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ChecksV2()->load(["check_run_id" => "check_run_id", "deployment_id" => "deployment_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ChecksV2()->update([
  "check_run_id" => "check_run_id",
  "deployment_id" => "deployment_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChecksV2Entity`

Create a new `ChecksV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectEntity

```php
$connect = $client->Connect();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additionalParams` | `array` | No |  |
| `audience` | `array` | No |  |
| `authorizationDetails` | `array` | No |  |
| `authorizationId` | `string` | No | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `array` | No | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `array` | Yes |  |
| `deviceCode` | `bool` | No |  |
| `displayName` | `string` | Yes | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `float` | Yes |  |
| `expiresInMs` | `float` | No |  |
| `externalSubject` | `string` | No |  |
| `id` | `string` | Yes | Client id (e.g. |
| `installationId` | `string` | No |  |
| `metadata` | `array` | No | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `string` | Yes | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `string` | No |  |
| `resources` | `array` | No |  |
| `returnUrl` | `string` | No |  |
| `scopes` | `array` | No |  |
| `service` | `string` | No | Resolved service id when known (e.g. |
| `serviceName` | `string` | No | Curated display name of the resolved service (e.g. |
| `subject` | `mixed` | No |  |
| `tenantId` | `string` | No |  |
| `token` | `string` | Yes |  |
| `tokenGroupId` | `string` | No | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` | `string` | Yes |  |
| `type` | `string` | Yes | Client type (e.g. |
| `uid` | `string` | Yes | Client uid (e.g. |
| `validityBufferMs` | `float` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Connect()->create([
  "connector" => null, // string
  "displayName" => null, // string
  "expiresAt" => null, // float
  "id" => null, // string
  "name" => null, // string
  "token" => null, // string
  "tokenId" => null, // string
  "type" => null, // string
  "uid" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Connect()->remove(["connector" => "connector"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectEntity`

Create a new `ConnectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectConnectorEntity

```php
$connect_connector = $client->ConnectConnector();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `array` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | No | The connection method this connector was created from, when the create request named one. |
| `connector` | `array` | Yes | Updated connector. |
| `createdAt` | `float` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `mixed` | No | Principal that created the connector. |
| `creationMode` | `string` | No | How the connector row was originally created. |
| `data` | `mixed` | Yes | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `string` | No | Installation used when a token request does not specify an installation. |
| `destinations` | `array` | Yes | Complete replacement set of trigger destinations. |
| `devsite` | `string` | No | Developer website for the connected service. |
| `displayName` | `string` | Yes | Human-readable connector name. |
| `docsite` | `string` | No | Developer documentation for the connected service. |
| `environments` | `array` | No | Environments for the project connection. |
| `events` | `array` | No | Known events this connector subscribes to (e.g. |
| `icon` | `string` | No | Connector branding icon. |
| `id` | `string` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `bool` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `array` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Yes | Connector name within the owning team. |
| `params` | `array` | No | Values for the selected connection method's template fields. |
| `projectId` | `string` | No | Project to connect during creation. |
| `reconsentNeeded` | `array` | Yes | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `string` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `bool` | No | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `string` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `array` | Yes | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `array` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `mixed` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `string` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `mixed` | No | Initial trigger destination. |
| `triggerDestinations` | `array` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `array` | Yes | Incoming trigger configuration for the connector. |
| `type` | `string` | Yes | Connector implementation type. |
| `typeIcon` | `string` | No | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Yes | Human-readable name of the connector type. |
| `uid` | `string` | Yes | Team-scoped UID. |
| `updatedAt` | `float` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `mixed` | No | Principal that most recently updated the connector. |
| `userTokens` | `array` | Yes | User-token capabilities and known grants for the connector. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConnectConnector()->create([
  "appTokens" => null, // array
  "connector" => null, // array
  "createdAt" => null, // float
  "data" => null, // mixed
  "destinations" => null, // array
  "displayName" => null, // string
  "id" => null, // string
  "name" => null, // string
  "reconsentNeeded" => null, // array
  "service" => null, // string
  "serviceSync" => null, // array
  "supportedSubjectTypes" => null, // array
  "supportsIcon" => null, // mixed
  "supportsInstallation" => null, // bool
  "supportsRevocation" => null, // bool
  "supportsTriggers" => null, // bool
  "triggers" => null, // array
  "type" => null, // string
  "typeName" => null, // string
  "uid" => null, // string
  "updatedAt" => null, // float
  "userTokens" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConnectConnector()->load(["id" => "connect_connector_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ConnectConnector()->update([
  "id" => "connect_connector_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectConnectorEntity`

Create a new `ConnectConnectorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectConnectorListEntity

```php
$connect_connector_list = $client->ConnectConnectorList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `array` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | No | The connection method this connector was created from, when the create request named one. |
| `createdAt` | `float` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `mixed` | No | Principal that created the connector. |
| `creationMode` | `string` | No | How the connector row was originally created. |
| `defaultInstallationId` | `string` | No | Installation used when a token request does not specify an installation. |
| `devsite` | `string` | No | Developer website for the connected service. |
| `displayName` | `string` | Yes | Human-readable connector name. |
| `docsite` | `string` | No | Developer documentation for the connected service. |
| `events` | `array` | No | Known events this connector subscribes to (e.g. |
| `icon` | `string` | No | Connector branding icon. |
| `id` | `string` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `bool` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `array` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Yes | Connector name within the owning team. |
| `redirectUri` | `string` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `string` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `array` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `mixed` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `string` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `array` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `array` | Yes | Incoming trigger configuration for the connector. |
| `type` | `string` | Yes | Connector implementation type. |
| `typeIcon` | `string` | No | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Yes | Human-readable name of the connector type. |
| `uid` | `string` | Yes | Team-scoped UID. |
| `updatedAt` | `float` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `mixed` | No | Principal that most recently updated the connector. |
| `userTokens` | `array` | Yes | User-token capabilities and known grants for the connector. |
| `website` | `string` | No | Public website for the connected service. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConnectConnectorList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectConnectorListEntity`

Create a new `ConnectConnectorListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectConnectorProjectConnectionListEntity

```php
$connect_connector_project_connection_list = $client->ConnectConnectorProjectConnectionList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `array` | Yes | Environments where the connector is enabled for the project. |
| `project` | `array` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConnectConnectorProjectConnectionList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectConnectorProjectConnectionListEntity`

Create a new `ConnectConnectorProjectConnectionListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectProjectConnectionEntity

```php
$connect_project_connection = $client->ConnectProjectConnection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `array` | Yes | Environments where the connector is enabled for the project. |
| `environments` | `array` | Yes | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `array` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConnectProjectConnection()->create([
  "connector_id" => null, // string
  "project_id" => null, // string
  "connectorId" => null, // string
  "createdAt" => null, // float
  "enabledEnvironments" => null, // array
  "environments" => null, // array
  "project" => null, // array
  "updatedAt" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConnectProjectConnection()->load(["connector_id" => "connector_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectProjectConnectionEntity`

Create a new `ConnectProjectConnectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectProjectConnectorConnectionListEntity

```php
$connect_project_connector_connection_list = $client->ConnectProjectConnectorConnectionList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `string` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `array` | Yes | Environments where the connector is enabled for the project. |
| `project` | `array` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConnectProjectConnectorConnectionList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectProjectConnectorConnectionListEntity`

Create a new `ConnectProjectConnectorConnectionListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeploymentEntity

```php
$deployment = $client->Deployment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliasAssigned` | `mixed` | No |  |
| `aliasError` | `array` | Yes | An error object in case aliasing of the deployment failed. |
| `attribution` | `array` | No | Commit attribution metadata |
| `buildMachine` | `string` | No | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `float` | No | Timestamp of when the deployment started building at. |
| `checks` | `array` | Yes | Detailed information about v2 deployment checks. |
| `checksConclusion` | `string` | No | Conclusion for checks |
| `checksState` | `string` | No | State of all registered checks |
| `connectBuildsEnabled` | `bool` | No | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `string` | No | The ID of Secure Compute network used for this deployment |
| `created` | `float` | Yes | Timestamp of when the deployment got created. |
| `createdAt` | `float` | Yes |  |
| `creator` | `array` | Yes | Metadata information of the deployment creator. |
| `customEnvironment` | `array` | Yes | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `string` | No | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `string` | No | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `float` | No | Timestamp of when the deployment got deleted. |
| `deploymentId` | `string` | No | The ID of an existing deployment to redeploy. |
| `errorCode` | `string` | No | Error code when the deployment is in an error state. |
| `errorMessage` | `string` | No | Error message when the deployment is in an canceled or error state. |
| `expiration` | `float` | No | The expiration configured by the project retention policy |
| `files` | `array` | No | The files to include in the deployment. |
| `gitAccessToken` | `string` | No | Available only to Vercel platform accounts. |
| `gitMetadata` | `array` | No | Populates initial git metadata for different git providers. |
| `gitSource` | `mixed` | No | Defines the Git Repository source to be deployed. |
| `id` | `string` | No |  |
| `inspectorUrl` | `string` | Yes | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `bool` | No | Deployment can be used for instant rollback |
| `manualProvisioning` | `array` | Yes |  |
| `meta` | `array` | No | An object containing the deployment's metadata. |
| `monorepoManager` | `string` | No | The monorepo manager that is being used for this deployment. |
| `name` | `string` | Yes | A string with the project name used in the deployment URL |
| `oomReport` | `string` | No | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `array` | No |  |
| `passiveConnectConfigurationId` | `string` | No | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `array` | Yes | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `bool` | No |  |
| `project` | `string` | No | The target project identifier in which the deployment will be created. |
| `projectId` | `string` | Yes | The project ID of the deployment |
| `projectSettings` | `array` | No | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `float` | No | The expiration proposed to replace the existing expiration |
| `ready` | `float` | No | Timestamp of when the deployment got ready. |
| `readyState` | `string` | Yes |  |
| `readySubstate` | `string` | No | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `array` | Yes | NSNB Blocked metadata |
| `softDeletedByRetention` | `bool` | No | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | `string` | No | The source of the deployment. |
| `state` | `string` | No | In which state is the deployment. |
| `status` | `string` | No |  |
| `statusText` | `string` | No |  |
| `statusUrl` | `string` | No |  |
| `target` | `string` | No | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | `string` | Yes | The type of the deployment. |
| `uid` | `string` | Yes | The unique identifier of the deployment. |
| `undeleted` | `float` | No | Timestamp of when the deployment was undeleted. |
| `url` | `string` | Yes | The URL of the deployment. |
| `withLatestCommit` | `bool` | No | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Deployment()->create([
  "aliasError" => null, // array
  "checks" => null, // array
  "created" => null, // float
  "createdAt" => null, // float
  "creator" => null, // array
  "customEnvironment" => null, // array
  "inspectorUrl" => null, // string
  "manualProvisioning" => null, // array
  "name" => null, // string
  "platform" => null, // array
  "projectId" => null, // string
  "readyState" => null, // string
  "seatBlock" => null, // array
  "type" => null, // string
  "uid" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Deployment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Deployment()->load(["id" => "deployment_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Deployment()->remove(["id" => "deployment_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Deployment()->update([
  "id" => "deployment_id",
  "action" => "action",
  "integration_id" => "integration_id",
  "resource_id" => "resource_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeploymentEntity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DnsEntity

```php
$dns = $client->Dns();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | A comment to add context on what this DNS record is for |
| `createdAt` | `float` | No |  |
| `creator` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `https` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `mxPriority` | `int` | No | The MX priority value of the DNS record |
| `name` | `string` | Yes | The name of the DNS record |
| `recordType` | `string` | Yes |  |
| `srv` | `array` | Yes |  |
| `ttl` | `float` | No | The Time to live (TTL) value of the DNS record |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Dns()->create([
  "domain_id" => null, // string
  "creator" => null, // string
  "domain" => null, // string
  "https" => null, // array
  "id" => null, // string
  "name" => null, // string
  "recordType" => null, // string
  "srv" => null, // array
  "type" => null, // string
  "value" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dns()->load(["domain_id" => "domain_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Dns()->remove(["domain_id" => "domain_id", "record_id" => "record_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Dns()->update([
  "record_id" => "record_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DnsEntity`

Create a new `DnsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainEntity

```php
$domain = $client->Domain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boughtAt` | `float` | Yes | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `float` | Yes | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `array` | Yes | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `array` | No | A list of custom nameservers for the domain to point to. |
| `echMode` | `string` | Yes | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `float` | Yes | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `string` | Yes | The unique identifier of the domain. |
| `intendedNameservers` | `array` | Yes | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `string` | No | The domain operation to perform. |
| `name` | `string` | Yes | The domain name. |
| `nameservers` | `array` | Yes | A list of the current nameservers of the domain. |
| `renew` | `bool` | No | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `string` | Yes | The type of service the domain is handled by. |
| `suffix` | `bool` | Yes |  |
| `teamId` | `string` | Yes |  |
| `transferStartedAt` | `float` | No | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `float` | No | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `string` | Yes |  |
| `verified` | `bool` | Yes | If the domain has the ownership verified. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Domain()->create([
  "boughtAt" => null, // float
  "createdAt" => null, // float
  "creator" => null, // array
  "echMode" => null, // string
  "expiresAt" => null, // float
  "id" => null, // string
  "intendedNameservers" => null, // array
  "name" => null, // string
  "nameservers" => null, // array
  "serviceType" => null, // string
  "suffix" => null, // bool
  "teamId" => null, // string
  "userId" => null, // string
  "verified" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Domain()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Domain()->load(["id" => "domain_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Domain()->remove(["id" => "domain_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Domain()->update([
  "id" => "domain_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainEntity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainsRegistrarEntity

```php
$domains_registrar = $client->DomainsRegistrar();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authCode` | `string` | Yes | The auth code for the domain. |
| `autoRenew` | `bool` | Yes | Whether the domain should be auto-renewed before it expires. |
| `available` | `bool` | Yes |  |
| `contactInformation` | `array` | Yes | The contact information for the domain. |
| `domains` | `array` | Yes | an array of at most 50 item(s) |
| `error` | `mixed` | No |  |
| `expectedPrice` | `float` | Yes |  |
| `languageCode` | `string` | No | The language code for the domain. |
| `nameservers` | `array` | Yes |  |
| `orderId` | `string` | Yes | A valid order ID |
| `purchasePrice` | `mixed` | Yes |  |
| `renewalPrice` | `mixed` | Yes |  |
| `results` | `array` | Yes |  |
| `status` | `string` | Yes |  |
| `transferPrice` | `mixed` | Yes |  |
| `years` | `float` | Yes | The number of years the returned price is for. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DomainsRegistrar()->create([
  "authCode" => null, // string
  "autoRenew" => null, // bool
  "available" => null, // bool
  "contactInformation" => null, // array
  "domains" => null, // array
  "expectedPrice" => null, // float
  "nameservers" => null, // array
  "orderId" => null, // string
  "purchasePrice" => null, // mixed
  "renewalPrice" => null, // mixed
  "results" => null, // array
  "status" => null, // string
  "transferPrice" => null, // mixed
  "years" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DomainsRegistrar()->load(["order_id" => "order_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DomainsRegistrar()->update([
  "domain_id" => "domain_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainsRegistrarEntity`

Create a new `DomainsRegistrarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DrainEntity

```php
$drain = $client->Drain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delivery` | `array` | No |  |
| `drains` | `mixed` | Yes |  |
| `filter` | `array` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `projectIds` | `array` | No |  |
| `projects` | `string` | Yes |  |
| `sampling` | `array` | No |  |
| `schemas` | `array` | Yes |  |
| `source` | `array` | No |  |
| `status` | `string` | No |  |
| `transforms` | `array` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Drain()->create([
  "drains" => null, // mixed
  "filter" => null, // array
  "name" => null, // string
  "projects" => null, // string
  "schemas" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Drain()->load(["id" => "drain_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Drain()->remove(["id" => "drain_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Drain()->update([
  "id" => "drain_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DrainEntity`

Create a new `DrainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EdgeCacheEntity

```php
$edge_cache = $client->EdgeCache();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EdgeCache()->create([
  "project_id_or_name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EdgeCacheEntity`

Create a new `EdgeCacheEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvEntity

```php
$env = $client->Env();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applyToAllCustomEnvironments` | `bool` | No | whether or not this env varible applies to custom environments |
| `comment` | `string` | No | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `string` | No | The date when the Shared Env Var was created. |
| `createdAt` | `float` | No | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `string` | No | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `array` | No | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `bool` | No | whether or not this env variable is decrypted |
| `deletedAt` | `float` | No | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `string` | No | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `array` | Yes |  |
| `failed` | `array` | Yes |  |
| `id` | `string` | No | The unique identifier of the Shared Env Var. |
| `key` | `string` | No | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `string` | No | The last editor full name or username. |
| `ownerId` | `string` | No | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `array` | No | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `array` | Yes |  |
| `target` | `array` | No | environments this env variable targets |
| `type` | `string` | No | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `array` | Yes |  |
| `updatedAt` | `float` | No | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `string` | No | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `array` | Yes | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Env()->create([
  "evs" => null, // array
  "failed" => null, // array
  "securityIssues" => null, // array
  "updated" => null, // array
  "updates" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Env()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Env()->load(["id" => "env_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Env()->remove();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Env()->update([
  "id" => "env_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvEntity`

Create a new `EnvEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentEntity

```php
$environment = $client->Environment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branchMatcher` | `array` | Yes | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `string` | No | Where to copy environment variables from. |
| `createdAt` | `float` | Yes | Timestamp when the environment was created |
| `currentDeploymentAliases` | `array` | No | List of aliases for the current deployment |
| `description` | `string` | No | Optional description of the environment's purpose |
| `domains` | `array` | No | List of domains associated with this environment |
| `id` | `string` | Yes | Unique identifier for the custom environment (format: env_*) |
| `slug` | `string` | Yes | URL-friendly name of the environment |
| `type` | `string` | Yes | The type of environment (production, preview, or development) |
| `updatedAt` | `float` | Yes | Timestamp when the environment was last updated |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Environment()->create([
  "id_or_name" => null, // string
  "branchMatcher" => null, // array
  "createdAt" => null, // float
  "id" => null, // string
  "type" => null, // string
  "updatedAt" => null, // float
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Environment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Environment()->load(["environment_slug_or_id" => "environment_slug_or_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Environment()->remove(["environment_slug_or_id" => "environment_slug_or_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Environment()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentEntity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureFlagEntity

```php
$feature_flag = $client->FeatureFlag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changedEnvironments` | `array` | Yes |  |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `string` | Yes | The user who created this patch |
| `data` | `array` | No | The data of the segment |
| `description` | `string` | No | A description of the flag |
| `environments` | `array` | Yes | The configuration for the flag in different environments |
| `flagId` | `string` | Yes |  |
| `flags` | `array` | Yes |  |
| `hint` | `string` | No |  |
| `id` | `string` | Yes |  |
| `kind` | `string` | Yes | The kind of flag |
| `label` | `string` | No |  |
| `maintainerIds` | `array` | No | The user ids of the maintainers of the flag |
| `message` | `string` | No | Additional message for this version |
| `metadata` | `array` | No |  |
| `operations` | `array` | No |  |
| `ownerId` | `string` | Yes |  |
| `pagination` | `array` | Yes |  |
| `permanent` | `bool` | No | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `string` | Yes |  |
| `revision` | `float` | Yes |  |
| `seed` | `float` | Yes | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `string` | Yes | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `string` | Yes |  |
| `status` | `array` | Yes |  |
| `tags` | `array` | No | Tags for categorizing the flag |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `updatedBy` | `string` | No |  |
| `variants` | `array` | Yes | The variants of the flag |

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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->FeatureFlag()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FeatureFlag()->load(["team_id" => "team_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->FeatureFlag()->remove(["project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->FeatureFlag()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureFlagEntity`

Create a new `FeatureFlagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileEntity

```php
$file = $client->File();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `array` | No | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `string` | No | The content-type of the file (only valid for the `file` type) |
| `mode` | `float` | Yes | The file "mode" indicating file type and permissions. |
| `name` | `string` | Yes | The name of the file tree entry |
| `type` | `string` | Yes | String indicating the type of file tree entry. |
| `uid` | `string` | No | The unique identifier of the file (only valid for the `file` type) |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->File()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileEntity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FlagEntity

```php
$flag = $client->Flag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `string` | Yes |  |
| `description` | `string` | No |  |
| `environments` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `kind` | `string` | Yes |  |
| `maintainerIds` | `array` | No |  |
| `metadata` | `array` | No |  |
| `ownerId` | `string` | Yes |  |
| `permanent` | `bool` | No |  |
| `projectId` | `string` | Yes |  |
| `revision` | `float` | Yes |  |
| `seed` | `float` | Yes |  |
| `slug` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `tags` | `array` | No |  |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `updatedBy` | `string` | No |  |
| `variants` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Flag()->load(["id" => "flag_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FlagEntity`

Create a new `FlagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FlagsSdkKeyWithSecretEntity

```php
$flags_sdk_key_with_secret = $client->FlagsSdkKeyWithSecret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `string` | Yes |  |
| `deletedAt` | `float` | No |  |
| `environment` | `string` | Yes |  |
| `hashKey` | `string` | Yes |  |
| `keyValue` | `string` | Yes | Cleartext value of the SDK key. |
| `label` | `string` | No |  |
| `partialKeyValue` | `string` | Yes | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` | `string` | Yes |  |
| `sdkKeyType` | `string` | Yes |  |
| `tokenValue` | `string` | No | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` | `string` | Yes |  |
| `updatedAt` | `float` | Yes |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->FlagsSdkKeyWithSecret()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FlagsSdkKeyWithSecretEntity`

Create a new `FlagsSdkKeyWithSecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GlobalConfigEntity

```php
$global_config = $client->GlobalConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `string` | No | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` | `float` | No |  |
| `digest` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `itemCount` | `float` | Yes |  |
| `items` | `array` | No |  |
| `ownerId` | `string` | Yes |  |
| `purpose` | `mixed` | No |  |
| `schema` | `array` | No |  |
| `sizeInBytes` | `float` | Yes |  |
| `slug` | `string` | Yes | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `float` | No | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `array` | Yes | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `float` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GlobalConfig()->create([
  "createdAt" => null, // float
  "digest" => null, // string
  "id" => null, // string
  "itemCount" => null, // float
  "ownerId" => null, // string
  "sizeInBytes" => null, // float
  "transfer" => null, // array
  "updatedAt" => null, // float
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GlobalConfig()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GlobalConfig()->load(["id" => "global_config_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->GlobalConfig()->remove(["id" => "global_config_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->GlobalConfig()->update([
  "id" => "global_config_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GlobalConfigEntity`

Create a new `GlobalConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GlobalConfigItemEntity

```php
$global_config_item = $client->GlobalConfigItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `description` | `string` | No |  |
| `edgeConfigId` | `string` | Yes |  |
| `id` | `string` | No |  |
| `key` | `string` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `value` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GlobalConfigItem()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GlobalConfigItem()->load(["id" => "global_config_item_id", "global_config_id" => "global_config_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GlobalConfigItemEntity`

Create a new `GlobalConfigItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GlobalConfigTokenEntity

```php
$global_config_token = $client->GlobalConfigToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `edgeConfigId` | `string` | Yes |  |
| `id` | `string` | Yes | This is not the token itself, but rather an id to identify the token by |
| `label` | `string` | Yes |  |
| `partialToken` | `string` | Yes | A partially-masked representation of the token, safe to display in UIs. |
| `token` | `string` | No | Deprecated: the full, plaintext token. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GlobalConfigToken()->load(["id" => "global_config_token_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GlobalConfigTokenEntity`

Create a new `GlobalConfigTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationEntity

```php
$integration = $client->Integration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `string` | No |  |
| `description` | `string` | Yes |  |
| `details` | `array` | No |  |
| `disabled` | `bool` | No |  |
| `effectiveDate` | `string` | No |  |
| `envVarEnvironments` | `array` | No |  |
| `highlightedDetails` | `array` | No |  |
| `id` | `string` | Yes |  |
| `initialCharge` | `string` | No |  |
| `makeEnvVarsSensitive` | `bool` | No |  |
| `maximumAmount` | `string` | No |  |
| `maximumAmountAutoPurchasePerPeriod` | `string` | No |  |
| `metadataSchema` | `array` | Yes |  |
| `minimumAmount` | `string` | No |  |
| `name` | `string` | Yes |  |
| `paymentMethodRequired` | `bool` | Yes |  |
| `preauthorizationAmount` | `float` | No |  |
| `primaryProtocol` | `string` | No |  |
| `projectId` | `string` | Yes |  |
| `protocols` | `array` | Yes |  |
| `quote` | `array` | No |  |
| `scope` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Integration()->create([
  "installation_id" => null, // string
  "resource_id" => null, // string
  "description" => null, // string
  "id" => null, // string
  "metadataSchema" => null, // array
  "name" => null, // string
  "paymentMethodRequired" => null, // bool
  "projectId" => null, // string
  "protocols" => null, // array
  "scope" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Integration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->load(["id" => "integration_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->remove(["id" => "integration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationEntity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## KmsEntity

```php
$kms = $client->Kms();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activation` | `string` | No | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` | `string` | No |  |
| `algorithm` | `string` | Yes | Algorithm of the signing key. |
| `claims` | `array` | No | The claims to include in the token. |
| `claimsSchema` | `array` | No | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `string` | Yes |  |
| `environments` | `array` | Yes | The environments for the project grant policy. |
| `headers` | `array` | No | Additional headers to include in the token. |
| `id` | `string` | Yes |  |
| `importKey` | `string` | No | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `string` | No | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `string` | Yes | Key id of the signing key. |
| `key_ops` | `array` | No |  |
| `kid` | `string` | No |  |
| `kind` | `string` | Yes |  |
| `kty` | `string` | No |  |
| `managedBy` | `string` | No |  |
| `message` | `string` | Yes | Base64-encoded message to be signed. |
| `name` | `string` | Yes | The name of the issuer. |
| `origin` | `string` | Yes |  |
| `ownerId` | `string` | Yes |  |
| `policies` | `array` | Yes |  |
| `projectId` | `string` | Yes | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `float` | No | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `mixed` | No | Deprecated. |
| `signature` | `string` | Yes | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `array` | Yes |  |
| `token` | `string` | Yes |  |
| `tokenClaims` | `array` | No | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `float` | No | The time-to-live for the token, in seconds. |
| `updatedAt` | `string` | Yes |  |
| `use` | `string` | No |  |
| `x5c` | `array` | No | The X.509 certificate chain (RFC 7517 §4.7). |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Kms()->create([
  "issuer_id" => null, // string
  "algorithm" => null, // string
  "createdAt" => null, // string
  "environments" => null, // array
  "id" => null, // string
  "keyId" => null, // string
  "kind" => null, // string
  "message" => null, // string
  "name" => null, // string
  "origin" => null, // string
  "ownerId" => null, // string
  "policies" => null, // array
  "projectId" => null, // string
  "signature" => null, // string
  "signingKeys" => null, // array
  "token" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Kms()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Kms()->load(["issuer_id" => "issuer_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Kms()->remove(["issuer_id" => "issuer_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Kms()->update([
  "issuer_id" => "issuer_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): KmsEntity`

Create a new `KmsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListEventTypeEntity

```php
$list_event_type = $client->ListEventType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `array` | Yes |  |
| `types` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListEventType()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListEventTypeEntity`

Create a new `ListEventTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogEntity

```php
$log = $client->Log();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Log()->load(["deployment_id" => "deployment_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogEntity`

Create a new `LogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogDrainEntity

```php
$log_drain = $client->LogDrain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `string` | No | The branch regexp of log drain |
| `clientId` | `string` | No | The oauth2 client application id that created this log drain |
| `configurationId` | `string` | No | The client configuration this log drain was created with |
| `createdAt` | `float` | Yes | A timestamp that tells you when the log drain was created |
| `createdFrom` | `string` | Yes | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | `mixed` | Yes | The delivery log format |
| `environments` | `array` | No | The environment of log drain |
| `headers` | `array` | No | Headers to be sent together with the request |
| `id` | `string` | Yes | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `string` | No |  |
| `integrationIcon` | `string` | No |  |
| `integrationWebsite` | `string` | No |  |
| `name` | `string` | No | The custom name of this log drain. |
| `ownerId` | `string` | Yes | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `string` | No |  |
| `projectIds` | `array` | No | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `array` | No |  |
| `samplingRate` | `float` | No | The sampling rate for this log drain. |
| `secret` | `string` | No | Custom secret of log drain |
| `source` | `mixed` | Yes |  |
| `sources` | `array` | Yes | The sources from which logs are currently being delivered to this log drain. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogDrain()->create([
  "createdAt" => null, // float
  "createdFrom" => null, // string
  "deliveryFormat" => null, // mixed
  "id" => null, // string
  "ownerId" => null, // string
  "source" => null, // mixed
  "sources" => null, // array
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LogDrain()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LogDrain()->load(["id" => "log_drain_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LogDrain()->remove(["id" => "log_drain_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogDrainEntity`

Create a new `LogDrainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MarketplaceEntity

```php
$marketplace = $client->Marketplace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes |  |
| `already_revoked` | `bool` | Yes |  |
| `balances` | `array` | Yes |  |
| `billing` | `mixed` | Yes | Billing data (interim invoicing data). |
| `billingPlan` | `array` | Yes |  |
| `billingPlanId` | `string` | No | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `string` | No |  |
| `client_id` | `string` | No |  |
| `client_secret` | `string` | Yes |  |
| `created` | `string` | Yes | System creation date. |
| `createdAt` | `float` | No |  |
| `data` | `array` | Yes |  |
| `description` | `string` | No |  |
| `discounts` | `array` | No | Invoice discounts. |
| `email` | `string` | Yes |  |
| `eod` | `string` | Yes | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `mixed` | Yes |  |
| `expires_in` | `float` | Yes |  |
| `externalId` | `string` | No | Partner-supplied Invoice ID, if applicable. |
| `extras` | `array` | No |  |
| `final` | `bool` | No | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `string` | No |  |
| `id` | `string` | Yes | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `string` | Yes | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `string` | Yes | Invoice date. |
| `invoiceId` | `string` | Yes | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `string` | No | User-readable invoice number. |
| `isArchived` | `bool` | No |  |
| `items` | `array` | Yes | Invoice items. |
| `memo` | `string` | No | Additional memo for the invoice. |
| `metadata` | `array` | No | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `string` | Yes | The name of the resource as it is recorded in Vercel |
| `notification` | `array` | Yes | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `string` | Yes |  |
| `ownership` | `string` | No |  |
| `paidAt` | `string` | No | Moment the invoice was paid. |
| `partial` | `bool` | No | If true, will only update the provided secrets |
| `partnerId` | `string` | Yes | The ID provided by the partner for the given resource |
| `period` | `array` | Yes | Subscription period for this billing cycle. |
| `productId` | `string` | Yes | The ID of the product the resource is derived from |
| `protocolSettings` | `array` | No | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `string` | No | The reason for refund. |
| `refundTotal` | `string` | No | Refund amount. |
| `refundedAt` | `string` | No | Most recent moment the invoice was refunded. |
| `revoked` | `bool` | Yes |  |
| `role` | `string` | Yes | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `string` | Yes |  |
| `secrets` | `array` | Yes |  |
| `slug` | `string` | Yes |  |
| `state` | `string` | Yes | Invoice state. |
| `status` | `string` | No | The current status of the resource |
| `test` | `bool` | No | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | `string` | Yes | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` | `string` | Yes |  |
| `token_type` | `string` | Yes |  |
| `total` | `string` | Yes | Invoice total amount. |
| `updated` | `string` | Yes | System update date. |
| `updatedAt` | `float` | No |  |
| `usage` | `array` | Yes |  |
| `userEmail` | `string` | No |  |
| `validationErrors` | `array` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Marketplace()->create([
  "installation_id" => null, // string
  "access_token" => null, // string
  "already_revoked" => null, // bool
  "balances" => null, // array
  "billing" => null, // mixed
  "billingPlan" => null, // array
  "client_secret" => null, // string
  "created" => null, // string
  "data" => null, // array
  "email" => null, // string
  "eod" => null, // string
  "event" => null, // mixed
  "expires_in" => null, // float
  "id" => null, // string
  "internalId" => null, // string
  "invoiceDate" => null, // string
  "invoiceId" => null, // string
  "items" => null, // array
  "name" => null, // string
  "notification" => null, // array
  "origin" => null, // string
  "partnerId" => null, // string
  "period" => null, // array
  "productId" => null, // string
  "revoked" => null, // bool
  "role" => null, // string
  "scope" => null, // string
  "secrets" => null, // array
  "slug" => null, // string
  "state" => null, // string
  "timestamp" => null, // string
  "token" => null, // string
  "token_type" => null, // string
  "total" => null, // string
  "updated" => null, // string
  "usage" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Marketplace()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Marketplace()->load(["installation_id" => "installation_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Marketplace()->remove(["installation_id" => "installation_id", "resource_id" => "resource_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Marketplace()->update([
  "installation_id" => "installation_id",
  "resource_id" => "resource_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MarketplaceEntity`

Create a new `MarketplaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MicrofrontendEntity

```php
$microfrontend = $client->Microfrontend();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `array` | Yes |  |
| `accountId` | `string` | Yes |  |
| `alias` | `array` | Yes |  |
| `analytics` | `array` | Yes |  |
| `applications` | `array` | Yes |  |
| `appliedCve55182Migration` | `bool` | No |  |
| `autoAssignCustomDomains` | `bool` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `bool` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `array` | No |  |
| `buildCommand` | `string` | No |  |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `concurrencyBucketName` | `string` | No |  |
| `connectBuildsEnabled` | `bool` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `array` | No |  |
| `createdAt` | `float` | No |  |
| `creator` | `mixed` | No |  |
| `crons` | `array` | Yes |  |
| `customEnvironments` | `array` | No |  |
| `customerSupportCodeVisibility` | `bool` | No |  |
| `dataCache` | `array` | Yes |  |
| `defaultResourceConfig` | `array` | Yes |  |
| `deploymentExpiration` | `array` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `array` | No | Project shape. |
| `devCommand` | `string` | No |  |
| `directoryListing` | `bool` | Yes |  |
| `dismissedToasts` | `array` | No |  |
| `enableAffectedProjectsDeployments` | `bool` | No |  |
| `enableExternalRewriteCaching` | `bool` | No |  |
| `enablePreviewFeedback` | `bool` | No |  |
| `enableProductionFeedback` | `bool` | No |  |
| `env` | `array` | No |  |
| `expiration` | `mixed` | No |  |
| `features` | `array` | No |  |
| `framework` | `string` | No |  |
| `gitComments` | `array` | Yes |  |
| `gitForkProtection` | `bool` | No |  |
| `gitLFS` | `bool` | No |  |
| `gitProviderOptions` | `array` | Yes |  |
| `hasActiveBranches` | `bool` | No |  |
| `hasDeployments` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No |  |
| `internalRoutes` | `array` | No |  |
| `ipBuckets` | `array` | No |  |
| `jobs` | `array` | No |  |
| `lastAliasRequest` | `array` | Yes |  |
| `lastRollbackTarget` | `array` | No |  |
| `latestDeployments` | `array` | No |  |
| `link` | `string` | No |  |
| `live` | `bool` | No |  |
| `microfrontends` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `array` | No |  |
| `options` | `array` | No | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `array` | Yes |  |
| `outputDirectory` | `string` | No |  |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `array` | Yes |  |
| `passwordProtection` | `array` | No |  |
| `paused` | `bool` | No |  |
| `permissions` | `array` | No |  |
| `productionDeploymentsFastLane` | `bool` | No |  |
| `protectedSourcemaps` | `bool` | No |  |
| `protectionBypass` | `array` | No |  |
| `protectionConfig` | `array` | No |  |
| `resourceConfig` | `array` | Yes |  |
| `rollbackDescription` | `array` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `array` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No |  |
| `sandbox` | `array` | No |  |
| `schema` | `string` | No | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `array` | No |  |
| `serverlessFunctionZeroConfigFailover` | `bool` | No |  |
| `services` | `array` | No |  |
| `skewProtectionAllowedDomains` | `array` | No |  |
| `skewProtectionBoundaryAt` | `float` | No |  |
| `skewProtectionMaxAge` | `float` | No |  |
| `skipGitConnectDuringLink` | `bool` | No |  |
| `sourceFilesOutsideRootDirectory` | `bool` | No |  |
| `speedInsights` | `array` | Yes |  |
| `ssoProtection` | `array` | Yes |  |
| `staticIps` | `array` | Yes |  |
| `targets` | `array` | No |  |
| `tier` | `string` | No |  |
| `tracing` | `array` | No |  |
| `transferCompletedAt` | `float` | No |  |
| `transferStartedAt` | `float` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `mixed` | No |  |
| `trustedSources` | `array` | No |  |
| `updatedAt` | `float` | No |  |
| `usageStatus` | `array` | Yes |  |
| `v0` | `bool` | No |  |
| `v0Created` | `bool` | No |  |
| `version` | `string` | No | The version of the microfrontends config schema. |
| `webAnalytics` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Microfrontend()->create([
  "abuse" => null, // array
  "accountId" => null, // string
  "alias" => null, // array
  "analytics" => null, // array
  "applications" => null, // array
  "crons" => null, // array
  "dataCache" => null, // array
  "defaultResourceConfig" => null, // array
  "deploymentExpiration" => null, // array
  "directoryListing" => null, // bool
  "gitComments" => null, // array
  "gitProviderOptions" => null, // array
  "id" => null, // string
  "lastAliasRequest" => null, // array
  "name" => null, // string
  "nodeVersion" => null, // string
  "optionsAllowlist" => null, // array
  "passport" => null, // array
  "resourceConfig" => null, // array
  "rollbackDescription" => null, // array
  "rollingRelease" => null, // array
  "speedInsights" => null, // array
  "ssoProtection" => null, // array
  "staticIps" => null, // array
  "usageStatus" => null, // array
  "webAnalytics" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Microfrontend()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Microfrontend()->load(["project_id_or_name" => "project_id_or_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MicrofrontendEntity`

Create a new `MicrofrontendEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NetworkEntity

```php
$network = $client->Network();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsAccountId` | `string` | Yes | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | `array` | No | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `string` | Yes | The AWS Region in which the network exists. |
| `cidr` | `string` | Yes | The CIDR range of the Network. |
| `createdAt` | `float` | Yes | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `array` | No |  |
| `hostedZones` | `array` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `string` | Yes | The unique identifier of the Network. |
| `name` | `string` | Yes | The name of the network. |
| `peeringConnections` | `array` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `array` | Yes | Metadata about any projects associated with the Network. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Network()->create([
  "awsAccountId" => null, // string
  "awsRegion" => null, // string
  "cidr" => null, // string
  "createdAt" => null, // float
  "hostedZones" => null, // array
  "id" => null, // string
  "name" => null, // string
  "peeringConnections" => null, // array
  "projects" => null, // array
  "status" => null, // string
  "teamId" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Network()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Network()->load(["id" => "network_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Network()->remove(["id" => "network_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Network()->update([
  "id" => "network_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NetworkEntity`

Create a new `NetworkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NetworkingEntity

```php
$networking = $client->Networking();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `builds` | `bool` | No | Whether to use Static IPs for builds. |
| `regions` | `array` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Networking()->remove(["endpoint_id" => "endpoint_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Networking()->update([
  "id_or_name" => "id_or_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NetworkingEntity`

Create a new `NetworkingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservabilityEntity

```php
$observability = $client->Observability();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disabled` | `bool` | Yes | Whether Observability Plus should be disabled for the project |
| `disabledAt` | `float` | No |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Observability()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Observability()->update([
  "project_id_or_name" => "project_id_or_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservabilityEntity`

Create a new `ObservabilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PrivateLinkEndpointEntity

```php
$private_link_endpoint = $client->PrivateLinkEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsDnsEntries` | `array` | No | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `string` | Yes | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `float` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `bool` | No | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `string` | Yes | The unique identifier of the PrivateLink endpoint. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `array` | No | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | `string` | Yes | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | `string` | Yes | The current state of the endpoint. |
| `statusMessage` | `string` | No | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | `string` | Yes | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | `float` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PrivateLinkEndpoint()->create([
  "awsServiceName" => null, // string
  "createdAt" => null, // float
  "endpointId" => null, // string
  "name" => null, // string
  "projectId" => null, // string
  "status" => null, // string
  "teamId" => null, // string
  "updatedAt" => null, // float
  "vercelRegion" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PrivateLinkEndpoint()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PrivateLinkEndpoint()->load(["id" => "private_link_endpoint_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PrivateLinkEndpoint()->update([
  "id" => "private_link_endpoint_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PrivateLinkEndpointEntity`

Create a new `PrivateLinkEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntity

```php
$project = $client->Project();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `array` | Yes |  |
| `acceptedPolicies` | `array` | No |  |
| `accountId` | `string` | Yes |  |
| `alias` | `array` | Yes |  |
| `analytics` | `array` | Yes |  |
| `apexName` | `string` | Yes |  |
| `appliedCve55182Migration` | `bool` | No |  |
| `autoAssignCustomDomains` | `bool` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `bool` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `array` | No |  |
| `buildCommand` | `string` | No | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `comment` | `string` | No | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `string` | No |  |
| `configurationId` | `string` | No |  |
| `connectBuildsEnabled` | `bool` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `array` | No | The list of connections from project environment to Secure Compute network |
| `contentHint` | `mixed` | No |  |
| `createdAt` | `float` | No |  |
| `createdBy` | `string` | No |  |
| `creator` | `mixed` | No |  |
| `crons` | `array` | Yes |  |
| `customEnvironmentId` | `string` | No |  |
| `customEnvironmentIds` | `array` | No | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `array` | No |  |
| `customerSupportCodeVisibility` | `bool` | No | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `array` | Yes |  |
| `decrypted` | `bool` | No |  |
| `defaultResourceConfig` | `array` | Yes |  |
| `deploymentExpiration` | `array` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `array` | No | Project shape. |
| `devCommand` | `string` | No | The dev command for this project. |
| `directoryListing` | `bool` | Yes |  |
| `dismissedToasts` | `array` | No | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `string` | No |  |
| `edgeConfigTokenId` | `string` | No |  |
| `enableAffectedProjectsDeployments` | `bool` | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | No | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | No | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | No | Opt-in to production toolbar on the project level |
| `env` | `array` | No |  |
| `environmentVariables` | `array` | No | Collection of ENV Variables the Project will use |
| `expiration` | `mixed` | No |  |
| `features` | `array` | No |  |
| `framework` | `string` | No | The framework that is being used for this project. |
| `gitBranch` | `string` | No | Git branch to link the project domain |
| `gitComments` | `array` | Yes |  |
| `gitForkProtection` | `bool` | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | No | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `array` | Yes |  |
| `gitRepository` | `array` | Yes | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` | No |  |
| `hasDeployments` | `bool` | No |  |
| `hostname` | `string` | Yes | The deployment hostname to scope the trace session to. |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No | The install command for this project. |
| `integrations` | `array` | No |  |
| `internalContentHint` | `array` | Yes | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `array` | No |  |
| `ipBuckets` | `array` | No |  |
| `jobs` | `array` | No |  |
| `key` | `string` | Yes | The name of the environment variable |
| `lastAliasRequest` | `array` | Yes |  |
| `lastRollbackTarget` | `array` | No |  |
| `latestDeployments` | `array` | No |  |
| `legacyValue` | `string` | No | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `string` | No |  |
| `live` | `bool` | No |  |
| `microfrontends` | `mixed` | No |  |
| `name` | `string` | Yes | The desired name for the project |
| `newProjectName` | `string` | No | The desired name for the project |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `array` | No | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `array` | Yes | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | No | The output directory of the project. |
| `paidFeatures` | `array` | No |  |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `array` | Yes | Passport configuration for the project. |
| `passwordProtection` | `array` | No | Allows to protect project deployments with a password |
| `paused` | `bool` | No |  |
| `permissions` | `array` | No |  |
| `previewDeploymentSuffix` | `string` | No | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | No | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` | No |  |
| `projectId` | `string` | Yes | The unique target project identifier |
| `protectedSourcemaps` | `bool` | No | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `array` | No |  |
| `protectionConfig` | `array` | No |  |
| `publicSource` | `bool` | No | Deprecated. |
| `redirect` | `string` | No | Target destination domain for redirect |
| `redirectStatusCode` | `float` | No | Status code for domain redirect |
| `resourceConfig` | `array` | Yes | Specifies resource override configuration for the project |
| `rollbackDescription` | `array` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `array` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `array` | No | Specifies the default region and failover regions for sandboxes created in the project |
| `security` | `array` | No |  |
| `serverlessFunctionRegion` | `string` | No | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `bool` | No | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `array` | No |  |
| `skewProtectionAllowedDomains` | `array` | No | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `float` | No | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `float` | No | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `bool` | No | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `bool` | No | Indicates if there are source files outside of the root directory |
| `speedInsights` | `array` | Yes |  |
| `ssoProtection` | `array` | Yes | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `array` | Yes | Manage Static IPs for this project |
| `sunsetSecretId` | `string` | No | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `mixed` | No | The target environment of the environment variable |
| `targets` | `array` | No |  |
| `tier` | `string` | No |  |
| `token` | `string` | Yes |  |
| `tracing` | `array` | No | Tracing configuration for this project |
| `transferCompletedAt` | `float` | No |  |
| `transferStartedAt` | `float` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `mixed` | No | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `array` | No | Deployment Protection Trusted Sources |
| `type` | `string` | Yes | The type of environment variable |
| `updatedAt` | `float` | No |  |
| `updatedBy` | `string` | No |  |
| `usageStatus` | `array` | Yes |  |
| `v0` | `bool` | No |  |
| `v0Created` | `bool` | No |  |
| `value` | `string` | Yes | The value of the environment variable |
| `verification` | `array` | No | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `bool` | Yes | `true` if the domain is verified for use with the project. |
| `visibility` | `string` | No | User-facing config/secret model. |
| `webAnalytics` | `array` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Project()->create([
  "deployment_id" => null, // string
  "id" => null, // string
  "abuse" => null, // array
  "accountId" => null, // string
  "alias" => null, // array
  "analytics" => null, // array
  "apexName" => null, // string
  "crons" => null, // array
  "dataCache" => null, // array
  "defaultResourceConfig" => null, // array
  "deploymentExpiration" => null, // array
  "directoryListing" => null, // bool
  "gitComments" => null, // array
  "gitProviderOptions" => null, // array
  "gitRepository" => null, // array
  "hostname" => null, // string
  "internalContentHint" => null, // array
  "key" => null, // string
  "lastAliasRequest" => null, // array
  "name" => null, // string
  "nodeVersion" => null, // string
  "optionsAllowlist" => null, // array
  "passport" => null, // array
  "projectId" => null, // string
  "resourceConfig" => null, // array
  "rollbackDescription" => null, // array
  "rollingRelease" => null, // array
  "speedInsights" => null, // array
  "ssoProtection" => null, // array
  "staticIps" => null, // array
  "token" => null, // string
  "type" => null, // string
  "usageStatus" => null, // array
  "value" => null, // string
  "verified" => null, // bool
  "webAnalytics" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->load(["id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->remove(["id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Project()->update([
  "id" => "project_id",
  "code" => "code",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectMemberEntity

```php
$project_member = $client->ProjectMember();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectMember()->create([
  "id_or_name" => null, // string
  "id" => null, // string
  "role" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectMember()->load(["id_or_name" => "id_or_name"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectMember()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectMemberEntity`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectRouteEntity

```php
$project_route = $client->ProjectRoute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `actions` | `array` | Yes |  |
| `alias` | `string` | No | The staging alias for previewing this version. |
| `conditions` | `array` | No |  |
| `createdBy` | `string` | Yes | The user who created this version. |
| `currentRoute` | `array` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the version. |
| `isLive` | `bool` | No | Whether this version is currently live in production. |
| `isStaging` | `bool` | No | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `float` | Yes | Timestamp of when this version was last modified. |
| `name` | `string` | Yes |  |
| `overwrite` | `bool` | No |  |
| `pathCondition` | `array` | Yes |  |
| `position` | `array` | No | Controls where the route is inserted. |
| `prompt` | `string` | Yes |  |
| `restore` | `bool` | No | If true, restores the staged route to the value in the production version. |
| `route` | `array` | Yes | The full route object to replace the existing route with |
| `routes` | `array` | No |  |
| `ruleCount` | `float` | No | The number of routing rules in this version. |
| `s3Key` | `string` | Yes | The S3 key where the routing rules are stored. |
| `version` | `array` | Yes | A version of routing rules stored in S3. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectRoute()->create([
  "id" => null, // string
  "action" => null, // string
  "actions" => null, // array
  "createdBy" => null, // string
  "currentRoute" => null, // array
  "description" => null, // string
  "lastModified" => null, // float
  "name" => null, // string
  "pathCondition" => null, // array
  "prompt" => null, // string
  "route" => null, // array
  "s3Key" => null, // string
  "version" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectRoute()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectRoute()->load(["id" => "project_route_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectRoute()->remove(["id" => "project_route_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectRoute()->update([
  "id" => "project_route_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectRouteEntity`

Create a new `ProjectRouteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QueryEntity

```php
$query = $client->Query();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregation` | `string` | No | Aggregation function to apply. |
| `bucketTimezone` | `string` | No | IANA timezone (e.g. |
| `endTime` | `string` | No | End timestamp |
| `filter` | `string` | No | Filter to apply to the query. |
| `granularity` | `array` | No | Time bucket size |
| `groupBy` | `array` | No | Dimensions to group results by. |
| `limit` | `float` | No | Maximum number of results |
| `metric` | `string` | Yes | Metric id |
| `orderBy` | `string` | No | Rollup column to order grouped results by. |
| `orderDirection` | `string` | No | Direction to order grouped results by. |
| `scope` | `array` | Yes | Owner or project scope for the query |
| `startTime` | `string` | No | Start timestamp |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Query()->create([
  "metric" => null, // string
  "scope" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QueryEntity`

Create a new `QueryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RecordEntity

```php
$record = $client->Record();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No |  |
| `createdAt` | `float` | No |  |
| `creator` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `recordType` | `string` | Yes |  |
| `ttl` | `float` | No |  |
| `type` | `string` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Record()->load(["id" => "record_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RecordEntity`

Create a new `RecordEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RollingReleaseEntity

```php
$rolling_release = $client->RollingRelease();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeStage` | `array` | Yes | The currently active stage, null if the rollout is aborted |
| `advancementType` | `string` | Yes | The advancement type of the rolling release |
| `canaryDeployment` | `array` | Yes | The canary deployment being rolled out |
| `currentCanaryPercentage` | `float` | No | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `array` | Yes | The current deployment receiving production traffic |
| `nextStage` | `array` | Yes | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `string` | Yes | The ID of a deployment queued for the next rolling release |
| `stages` | `array` | Yes | All stages configured for this rolling release |
| `startedAt` | `float` | Yes | Unix timestamp in milliseconds when the rolling release started |
| `state` | `string` | Yes | The current state of the rolling release |
| `substate` | `string` | Yes | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `float` | Yes | Unix timestamp in milliseconds when the rolling release was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RollingRelease()->create([
  "project_id" => null, // string
  "activeStage" => null, // array
  "advancementType" => null, // string
  "canaryDeployment" => null, // array
  "currentDeployment" => null, // array
  "nextStage" => null, // array
  "queuedDeploymentId" => null, // string
  "stages" => null, // array
  "startedAt" => null, // float
  "state" => null, // string
  "substate" => null, // string
  "updatedAt" => null, // float
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RollingRelease()->load(["id_or_name" => "id_or_name"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->RollingRelease()->remove(["project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RollingRelease()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RollingReleaseEntity`

Create a new `RollingReleaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SandboxEntity

```php
$sandbox = $client->Sandbox();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `args` | `array` | Yes | The arguments of the command. |
| `command` | `string` | Yes | The executable or shell command to run. |
| `createdAt` | `float` | Yes | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `string` | No | The method used to create the snapshot. |
| `currentSandboxName` | `string` | No | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `string` | No | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `string` | No | The snapshot ID to set as the current snapshot. |
| `cwd` | `string` | Yes | The current working directory of the command. |
| `durationMs` | `float` | No | Duration of the command execution in milliseconds. |
| `env` | `array` | No | Additional environment variables to set for this command. |
| `exitCode` | `float` | Yes | If the command did finish, the exit code. |
| `expiration` | `mixed` | No | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `float` | No | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `array` | No | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `string` | Yes | The ID of the command. |
| `image` | `string` | No | Image to use for the sandbox. |
| `keepLastSnapshots` | `array` | Yes | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `float` | Yes | The last time the snapshot was used (e.g. |
| `logs` | `bool` | No | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `float` | Yes | The maximum drive size in bytes. |
| `memory` | `float` | No | Memory allocated in MB. |
| `mounts` | `array` | No | List of drives to mount to the sandbox at the provided path. |
| `name` | `string` | Yes | The name of the command. |
| `networkId` | `string` | No | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `mixed` | No | Network policy configuration. |
| `parentId` | `string` | No | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `string` | Yes | The path of the directory to create. |
| `persistent` | `bool` | No | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `array` | No | List of ports to expose from the sandbox. |
| `projectId` | `string` | Yes | The project that owns the drive. |
| `recursive` | `bool` | No | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `string` | No | The region where the snapshot is stored. |
| `regions` | `array` | No | The regions where the snapshot is available. |
| `resources` | `array` | No | Resources to define the VM |
| `resumed` | `bool` | Yes |  |
| `routes` | `array` | Yes |  |
| `runtime` | `string` | No | The runtime environment for the sandbox. |
| `sandbox` | `array` | Yes | This object contains information related to a Vercel NamedSandbox. |
| `session` | `array` | Yes | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `string` | Yes | The ID of the session associated with the command. |
| `sizeBytes` | `float` | Yes | The size of the snapshot in bytes. |
| `snapshotExpiration` | `mixed` | No | Default snapshot expiration time in milliseconds. |
| `source` | `mixed` | No | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `string` | Yes | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `float` | Yes | When the command was started, in milliseconds since the epoch. |
| `status` | `string` | Yes | The status of the snapshot. |
| `statusUpdatedAt` | `float` | Yes | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `bool` | No | Execute the command with root (superuser) privileges. |
| `tags` | `array` | No | Key-value tags to associate with the sandbox. |
| `timeout` | `int` | No | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `totalActiveCpuDurationMs` | `float` | No | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `totalDurationMs` | `float` | No | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `totalEgressBytes` | `float` | No | Cumulative egress bytes across all sandbox runs. |
| `totalIngressBytes` | `float` | No | Cumulative ingress bytes across all sandbox runs. |
| `updatedAt` | `float` | Yes | The last time the snapshot was updated, in milliseconds since the epoch. |
| `vcpus` | `float` | No | Number of virtual CPUs allocated. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Sandbox()->create([
  "name" => null, // string
  "args" => null, // array
  "command" => null, // string
  "createdAt" => null, // float
  "cwd" => null, // string
  "exitCode" => null, // float
  "id" => null, // string
  "keepLastSnapshots" => null, // array
  "lastUsedAt" => null, // float
  "maxSizeBytes" => null, // float
  "path" => null, // string
  "projectId" => null, // string
  "resumed" => null, // bool
  "routes" => null, // array
  "sandbox" => null, // array
  "session" => null, // array
  "sessionId" => null, // string
  "sizeBytes" => null, // float
  "sourceSessionId" => null, // string
  "startedAt" => null, // float
  "status" => null, // string
  "statusUpdatedAt" => null, // float
  "updatedAt" => null, // float
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Sandbox()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Sandbox()->load(["id" => "sandbox_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Sandbox()->remove(["id" => "sandbox_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Sandbox()->update([
  "id" => "sandbox_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SandboxEntity`

Create a new `SandboxEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SchemaEntity

```php
$schema = $client->Schema();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregations` | `array` | Yes |  |
| `defaultAggregation` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dimensions` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `unit` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Schema()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Schema()->load(["id" => "schema_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SchemaEntity`

Create a new `SchemaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecurityEntity

```php
$security = $client->Security();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Action` | `string` | No |  |
| `ActorId` | `string` | No |  |
| `CreatedAt` | `string` | Yes |  |
| `DeletedAt` | `string` | No |  |
| `Domain` | `string` | Yes |  |
| `ExpiresAt` | `float` | No |  |
| `Id` | `string` | Yes |  |
| `Ip` | `string` | Yes |  |
| `IsProjectRule` | `bool` | No |  |
| `Note` | `string` | No |  |
| `OwnerId` | `string` | Yes |  |
| `ProjectId` | `string` | No |  |
| `UpdatedAt` | `string` | Yes |  |
| `UpdatedAtHour` | `string` | Yes |  |
| `action` | `array` | Yes |  |
| `action_type` | `string` | Yes |  |
| `active` | `bool` | Yes |  |
| `allSources` | `bool` | No |  |
| `botIdEnabled` | `bool` | No |  |
| `changes` | `array` | Yes |  |
| `conditionGroup` | `array` | Yes |  |
| `conditions` | `array` | No |  |
| `count` | `float` | Yes |  |
| `crs` | `array` | Yes | Custom Ruleset |
| `description` | `string` | No |  |
| `domain` | `string` | No |  |
| `endTime` | `string` | Yes |  |
| `firewallEnabled` | `bool` | Yes |  |
| `host` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ips` | `array` | Yes |  |
| `isActive` | `bool` | Yes |  |
| `logHeaders` | `mixed` | No |  |
| `managedRules` | `array` | No |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `ownerId` | `string` | Yes |  |
| `projectKey` | `string` | Yes |  |
| `projectScope` | `bool` | No | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `string` | Yes |  |
| `ruleId` | `string` | Yes |  |
| `ruleName` | `string` | Yes |  |
| `rules` | `array` | Yes |  |
| `rulesets` | `mixed` | No |  |
| `sourceIp` | `string` | No |  |
| `startTime` | `string` | Yes |  |
| `ttl` | `float` | No | Time to live in milliseconds |
| `updatedAt` | `string` | Yes |  |
| `version` | `float` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Security()->create([
  "project_id" => null, // string
  "CreatedAt" => null, // string
  "Domain" => null, // string
  "Id" => null, // string
  "Ip" => null, // string
  "OwnerId" => null, // string
  "UpdatedAt" => null, // string
  "UpdatedAtHour" => null, // string
  "action" => null, // array
  "action_type" => null, // string
  "active" => null, // bool
  "changes" => null, // array
  "conditionGroup" => null, // array
  "count" => null, // float
  "crs" => null, // array
  "endTime" => null, // string
  "firewallEnabled" => null, // bool
  "host" => null, // string
  "id" => null, // string
  "ips" => null, // array
  "isActive" => null, // bool
  "name" => null, // string
  "ownerId" => null, // string
  "projectKey" => null, // string
  "public_ip" => null, // string
  "ruleId" => null, // string
  "ruleName" => null, // string
  "rules" => null, // array
  "startTime" => null, // string
  "updatedAt" => null, // string
  "version" => null, // float
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Security()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Security()->load(["project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Security()->remove(["config_version" => "config_version"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Security()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecurityEntity`

Create a new `SecurityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SegmentEntity

```php
$segment = $client->Segment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `string` | No |  |
| `data` | `array` | Yes |  |
| `description` | `string` | No |  |
| `hint` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `metadata` | `array` | No |  |
| `projectId` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `typeName` | `string` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `usedByFlags` | `array` | No |  |
| `usedBySegments` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Segment()->load(["id" => "segment_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SegmentEntity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StorageEntity

```php
$storage = $client->Storage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `count` | `float` | Yes |  |
| `id` | `string` | No |  |
| `isTokenExpired` | `bool` | Yes |  |
| `kind` | `string` | No | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` | `string` | Yes |  |
| `projectFilter` | `array` | No |  |
| `projectId` | `string` | No | The project this store is scoped to. |
| `projectsMetadata` | `array` | Yes |  |
| `region` | `string` | Yes |  |
| `size` | `float` | Yes |  |
| `status` | `string` | Yes |  |
| `totalConnectedProjects` | `float` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Storage()->create([
  "count" => null, // float
  "isTokenExpired" => null, // bool
  "name" => null, // string
  "projectsMetadata" => null, // array
  "region" => null, // string
  "size" => null, // float
  "status" => null, // string
  "usageQuotaExceeded" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Storage()->load(["id" => "storage_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Storage()->remove(["id" => "storage_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StorageEntity`

Create a new `StorageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessRequestedAt` | `float` | Yes | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `float` | No | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `float` | No | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `array` | No | Attribution information for the session or current page |
| `avatar` | `string` | Yes | The ID of the file used as avatar for this Team. |
| `billing` | `array` | Yes | The team's billing plan. |
| `bitbucket` | `array` | Yes | Map of the connected Bitbucket account. |
| `confirmed` | `bool` | Yes | Current status of the membership. |
| `connect` | `array` | No |  |
| `createdAt` | `float` | Yes | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `string` | Yes | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `array` | No | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `array` | No | Default deployment expiration settings for this team |
| `defaultPassport` | `array` | Yes | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `array` | No | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `array` | No | Default roles for the team. |
| `deploymentPolicy` | `array` | No | Composable deployment-time policy for the team. |
| `description` | `string` | Yes | A short description of the Team. |
| `disableHardAutoBlocks` | `mixed` | No |  |
| `disableRepositoryDispatchEvents` | `bool` | No | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | `string` | No | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | `string` | No | Controls who can request access to protected deployments. |
| `emailDomain` | `string` | No | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | `bool` | No | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | `string` | No | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | `string` | No | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | `string` | No | The new fallback environment for the microfrontends group. |
| `github` | `array` | Yes | Map of the connected GitHub account. |
| `gitlab` | `array` | Yes | Map of the connected GitLab account. |
| `hideIpAddresses` | `bool` | No | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `bool` | No | Indicates if IP addresses should be accessible in log drains |
| `id` | `string` | Yes | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `float` | No | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `string` | No | Code that can be used to join this Team. |
| `ipBuckets` | `array` | No |  |
| `joinedFrom` | `array` | Yes | A map that describes the origin from where the user joined. |
| `membership` | `array` | Yes | The membership of the authenticated User in relation to the Team. |
| `name` | `string` | Yes | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `array` | Yes | NSNB configuration for the team. |
| `orgRootTeamId` | `string` | No | Best-effort ID of the organization’s root billing team. |
| `pagination` | `array` | Yes | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `string` | No | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `float` | No | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `bool` | No | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `string` | No | The hostname that is current set as preview deployment suffix. |
| `projects` | `array` | No |  |
| `regenerateInviteCode` | `bool` | No | Create a new invite code and replace the current one. |
| `remoteCaching` | `array` | No | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `bool` | No | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `array` | No | Resource configuration for the team. |
| `role` | `string` | No | The role in the team of the member. |
| `saml` | `array` | Yes | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `string` | No | Sensitive environment variable policy for this team |
| `slug` | `string` | Yes | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `string` | Yes | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `array` | Yes | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `array` | Yes | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `array` | Yes | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `array` | Yes | When enabled, creating shareable links requires Owner role. |
| `teamName` | `string` | Yes | The name of the team. |
| `teamPermissions` | `array` | No | The team permissions to set for the member. |
| `teamSlug` | `string` | Yes | The slug of the team. |
| `teams` | `array` | Yes |  |
| `updatedAt` | `float` | Yes | Timestamp (in milliseconds) of when the Team was last updated. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Team()->create([
  "accessRequestedAt" => null, // float
  "avatar" => null, // string
  "billing" => null, // array
  "bitbucket" => null, // array
  "confirmed" => null, // bool
  "createdAt" => null, // float
  "creatorId" => null, // string
  "defaultPassport" => null, // array
  "description" => null, // string
  "github" => null, // array
  "gitlab" => null, // array
  "id" => null, // string
  "joinedFrom" => null, // array
  "membership" => null, // array
  "name" => null, // string
  "nsnbConfig" => null, // array
  "pagination" => null, // array
  "saml" => null, // array
  "slug" => null, // string
  "stagingPrefix" => null, // string
  "strictConnectors" => null, // array
  "strictDeploymentProtectionSettings" => null, // array
  "strictPasswordProtectionSettings" => null, // array
  "strictShareableLinks" => null, // array
  "teamName" => null, // string
  "teamSlug" => null, // string
  "teams" => null, // array
  "updatedAt" => null, // float
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Team()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->load(["id" => "team_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->remove(["id" => "team_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Team()->update([
  "id" => "team_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TldNameEntity

```php
$tld_name = $client->TldName();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TldName()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TldNameEntity`

Create a new `TldNameEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ToggleEntity

```php
$toggle = $client->Toggle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Toggle()->create([
  "project_id" => null, // string
  "value" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ToggleEntity`

Create a new `ToggleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `array` | No | The categories that group this event with related event types. |
| `createdAt` | `float` | Yes | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `array` | Yes | A list of "entities" within the event `text`. |
| `id` | `string` | Yes | The unique identifier of the Event. |
| `payload` | `mixed` | No |  |
| `principal` | `mixed` | No |  |
| `principalId` | `string` | Yes | The ID of the principal who generated the event. |
| `requestId` | `string` | No |  |
| `sessionId` | `string` | No | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `string` | Yes | The human-readable text of the Event. |
| `tokenId` | `string` | No | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `string` | No | The type of the event. |
| `user` | `array` | Yes | Metadata for {@link userId}. |
| `userId` | `string` | No | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `array` | No | Metadata for {@link viaIds}. |
| `viaIds` | `array` | No | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->User()->load(["id" => "user_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->User()->remove(["id" => "user_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VcrEntity

```php
$vcr = $client->Vcr();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arch` | `string` | No | CPU architecture the manifest targets. |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the image was created. |
| `id` | `string` | Yes | Internal identifier of the image. |
| `imageId` | `string` | Yes | Internal identifier of the image the tag points at. |
| `kind` | `string` | Yes | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` | `array` | Yes |  |
| `manifestDigest` | `string` | Yes | SHA-256 digest of the image manifest. |
| `name` | `string` | Yes | Name of the repository. |
| `platform` | `string` | No | Operating system the manifest targets. |
| `projectId` | `string` | Yes | Identifier of the project the repository belongs to. |
| `public` | `bool` | Yes | Whether the repository is public. |
| `pushedBy` | `string` | No | Identifier of the actor that pushed the image. |
| `repositoryId` | `string` | Yes | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `float` | Yes | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | Yes | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | `string` | Yes | The tag name. |
| `tags` | `array` | Yes | Tags pointing at this image's manifest. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Vcr()->create([
  "id_or_name" => null, // string
  "project_id" => null, // string
  "createdAt" => null, // string
  "id" => null, // string
  "imageId" => null, // string
  "kind" => null, // string
  "layers" => null, // array
  "manifestDigest" => null, // string
  "name" => null, // string
  "projectId" => null, // string
  "public" => null, // bool
  "repositoryId" => null, // string
  "sizeInBytes" => null, // float
  "status" => null, // string
  "tag" => null, // string
  "tags" => null, // array
  "teamId" => null, // string
  "teamSlug" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Vcr()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Vcr()->load(["id_or_name" => "id_or_name", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Vcr()->remove(["id_or_name" => "id_or_name", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Vcr()->update([
  "project_slug" => "project_slug",
  "repository_name" => "repository_name",
  "team_slug" => "team_slug",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VcrEntity`

Create a new `VcrEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VcrImageListEntity

```php
$vcr_image_list = $client->VcrImageList();
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
| `sizeInBytes` | `float` | Yes | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | Yes | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | `array` | Yes | Tags pointing at this image's manifest. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VcrImageList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VcrImageListEntity`

Create a new `VcrImageListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VcrRepositoryListEntity

```php
$vcr_repository_list = $client->VcrRepositoryList();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VcrRepositoryList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VcrRepositoryListEntity`

Create a new `VcrRepositoryListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VcrRepositoryPermissionListEntity

```php
$vcr_repository_permission_list = $client->VcrRepositoryPermissionList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | `string` | Yes | Identifier of the repository the permission grants access to. |
| `teamId` | `string` | Yes | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Yes | Slug of the team that is granted access to the repository. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VcrRepositoryPermissionList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VcrRepositoryPermissionListEntity`

Create a new `VcrRepositoryPermissionListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebAnalyticsEntity

```php
$web_analytics = $client->WebAnalytics();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `mixed` | Yes |  |
| `query` | `array` | Yes |  |
| `version` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebAnalytics()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebAnalyticsEntity`

Create a new `WebAnalyticsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alertRuleIds` | `array` | No |  |
| `createdAt` | `float` | Yes | A number containing the date when the webhook was created in in milliseconds |
| `events` | `array` | Yes | The webhooks events |
| `id` | `string` | Yes | The webhook id |
| `ownerId` | `string` | Yes | The unique ID of the team the webhook belongs to |
| `projectIds` | `array` | No | The ID of the projects the webhook is associated with |
| `secret` | `string` | Yes | The webhook secret used to sign the payload |
| `updatedAt` | `float` | Yes | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `string` | Yes | A string with the URL of the webhook |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
  "createdAt" => null, // float
  "events" => null, // array
  "id" => null, // string
  "ownerId" => null, // string
  "secret" => null, // string
  "updatedAt" => null, // float
  "url" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->load(["id" => "webhook_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["id" => "webhook_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new VercelSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

