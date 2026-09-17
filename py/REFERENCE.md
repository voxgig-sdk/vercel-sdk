# Vercel Python SDK Reference

Complete API reference for the Vercel Python SDK.


## VercelSDK

### Constructor

```python
from vercel_sdk import VercelSDK

client = VercelSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VercelSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = VercelSDK.test()
```


### Instance Methods

#### `AccessGroup(data=None)`

Create a new `AccessGroupEntity` instance. Pass `None` for no initial data.

#### `AiGateway(data=None)`

Create a new `AiGatewayEntity` instance. Pass `None` for no initial data.

#### `AiGatewayRule(data=None)`

Create a new `AiGatewayRuleEntity` instance. Pass `None` for no initial data.

#### `AiGatewayRuleList(data=None)`

Create a new `AiGatewayRuleListEntity` instance. Pass `None` for no initial data.

#### `AiGatewayVirtualModelConfig(data=None)`

Create a new `AiGatewayVirtualModelConfigEntity` instance. Pass `None` for no initial data.

#### `AiGatewayVirtualModelConfigList(data=None)`

Create a new `AiGatewayVirtualModelConfigListEntity` instance. Pass `None` for no initial data.

#### `Alias(data=None)`

Create a new `AliasEntity` instance. Pass `None` for no initial data.

#### `ApiAiGateway(data=None)`

Create a new `ApiAiGatewayEntity` instance. Pass `None` for no initial data.

#### `ApiKey(data=None)`

Create a new `ApiKeyEntity` instance. Pass `None` for no initial data.

#### `Artifact(data=None)`

Create a new `ArtifactEntity` instance. Pass `None` for no initial data.

#### `Authentication(data=None)`

Create a new `AuthenticationEntity` instance. Pass `None` for no initial data.

#### `Billing(data=None)`

Create a new `BillingEntity` instance. Pass `None` for no initial data.

#### `BulkRedirect(data=None)`

Create a new `BulkRedirectEntity` instance. Pass `None` for no initial data.

#### `Cert(data=None)`

Create a new `CertEntity` instance. Pass `None` for no initial data.

#### `Check(data=None)`

Create a new `CheckEntity` instance. Pass `None` for no initial data.

#### `ChecksV2(data=None)`

Create a new `ChecksV2Entity` instance. Pass `None` for no initial data.

#### `Connect(data=None)`

Create a new `ConnectEntity` instance. Pass `None` for no initial data.

#### `ConnectConnector(data=None)`

Create a new `ConnectConnectorEntity` instance. Pass `None` for no initial data.

#### `ConnectConnectorList(data=None)`

Create a new `ConnectConnectorListEntity` instance. Pass `None` for no initial data.

#### `ConnectConnectorProjectConnectionList(data=None)`

Create a new `ConnectConnectorProjectConnectionListEntity` instance. Pass `None` for no initial data.

#### `ConnectProjectConnection(data=None)`

Create a new `ConnectProjectConnectionEntity` instance. Pass `None` for no initial data.

#### `ConnectProjectConnectorConnectionList(data=None)`

Create a new `ConnectProjectConnectorConnectionListEntity` instance. Pass `None` for no initial data.

#### `Deployment(data=None)`

Create a new `DeploymentEntity` instance. Pass `None` for no initial data.

#### `Dns(data=None)`

Create a new `DnsEntity` instance. Pass `None` for no initial data.

#### `Domain(data=None)`

Create a new `DomainEntity` instance. Pass `None` for no initial data.

#### `DomainsRegistrar(data=None)`

Create a new `DomainsRegistrarEntity` instance. Pass `None` for no initial data.

#### `Drain(data=None)`

Create a new `DrainEntity` instance. Pass `None` for no initial data.

#### `EdgeCache(data=None)`

Create a new `EdgeCacheEntity` instance. Pass `None` for no initial data.

#### `Env(data=None)`

Create a new `EnvEntity` instance. Pass `None` for no initial data.

#### `Environment(data=None)`

Create a new `EnvironmentEntity` instance. Pass `None` for no initial data.

#### `FeatureFlag(data=None)`

Create a new `FeatureFlagEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `Flag(data=None)`

Create a new `FlagEntity` instance. Pass `None` for no initial data.

#### `FlagsSdkKeyWithSecret(data=None)`

Create a new `FlagsSdkKeyWithSecretEntity` instance. Pass `None` for no initial data.

#### `GlobalConfig(data=None)`

Create a new `GlobalConfigEntity` instance. Pass `None` for no initial data.

#### `GlobalConfigItem(data=None)`

Create a new `GlobalConfigItemEntity` instance. Pass `None` for no initial data.

#### `GlobalConfigToken(data=None)`

Create a new `GlobalConfigTokenEntity` instance. Pass `None` for no initial data.

#### `Integration(data=None)`

Create a new `IntegrationEntity` instance. Pass `None` for no initial data.

#### `Kms(data=None)`

Create a new `KmsEntity` instance. Pass `None` for no initial data.

#### `ListEventType(data=None)`

Create a new `ListEventTypeEntity` instance. Pass `None` for no initial data.

#### `Log(data=None)`

Create a new `LogEntity` instance. Pass `None` for no initial data.

#### `LogDrain(data=None)`

Create a new `LogDrainEntity` instance. Pass `None` for no initial data.

#### `Marketplace(data=None)`

Create a new `MarketplaceEntity` instance. Pass `None` for no initial data.

#### `Microfrontend(data=None)`

Create a new `MicrofrontendEntity` instance. Pass `None` for no initial data.

#### `Network(data=None)`

Create a new `NetworkEntity` instance. Pass `None` for no initial data.

#### `Networking(data=None)`

Create a new `NetworkingEntity` instance. Pass `None` for no initial data.

#### `Observability(data=None)`

Create a new `ObservabilityEntity` instance. Pass `None` for no initial data.

#### `PrivateLinkEndpoint(data=None)`

Create a new `PrivateLinkEndpointEntity` instance. Pass `None` for no initial data.

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

#### `ProjectMember(data=None)`

Create a new `ProjectMemberEntity` instance. Pass `None` for no initial data.

#### `ProjectRoute(data=None)`

Create a new `ProjectRouteEntity` instance. Pass `None` for no initial data.

#### `Query(data=None)`

Create a new `QueryEntity` instance. Pass `None` for no initial data.

#### `Record(data=None)`

Create a new `RecordEntity` instance. Pass `None` for no initial data.

#### `RollingRelease(data=None)`

Create a new `RollingReleaseEntity` instance. Pass `None` for no initial data.

#### `Sandbox(data=None)`

Create a new `SandboxEntity` instance. Pass `None` for no initial data.

#### `Schema(data=None)`

Create a new `SchemaEntity` instance. Pass `None` for no initial data.

#### `Security(data=None)`

Create a new `SecurityEntity` instance. Pass `None` for no initial data.

#### `Segment(data=None)`

Create a new `SegmentEntity` instance. Pass `None` for no initial data.

#### `Storage(data=None)`

Create a new `StorageEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `TldName(data=None)`

Create a new `TldNameEntity` instance. Pass `None` for no initial data.

#### `Toggle(data=None)`

Create a new `ToggleEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `Vcr(data=None)`

Create a new `VcrEntity` instance. Pass `None` for no initial data.

#### `VcrImageList(data=None)`

Create a new `VcrImageListEntity` instance. Pass `None` for no initial data.

#### `VcrRepositoryList(data=None)`

Create a new `VcrRepositoryListEntity` instance. Pass `None` for no initial data.

#### `VcrRepositoryPermissionList(data=None)`

Create a new `VcrRepositoryPermissionListEntity` instance. Pass `None` for no initial data.

#### `WebAnalytics(data=None)`

Create a new `WebAnalyticsEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccessGroupEntity

```python
access_group = client.AccessGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessGroupId` | `str` | Yes | ID of the access group. |
| `createdAt` | `str` | Yes | Timestamp in milliseconds when the access group was created. |
| `entitlements` | `list` | No |  |
| `id` | `str` | No |  |
| `isDsyncManaged` | `bool` | Yes |  |
| `membersCount` | `float` | Yes | Number of members in the access group. |
| `membersToAdd` | `list` | No | List of members to add to the access group. |
| `membersToRemove` | `list` | No | List of members to remove from the access group. |
| `name` | `str` | Yes | The name of this access group. |
| `projectId` | `str` | Yes |  |
| `projects` | `list` | No |  |
| `projectsCount` | `float` | Yes | Number of projects in the access group. |
| `role` | `str` | Yes | The project role that will be added to this Access Group. |
| `teamId` | `str` | Yes | ID of the team that this access group belongs to. |
| `teamPermissions` | `list` | No | Permissions that the team has in the access group. |
| `teamRoles` | `list` | No | Roles that the team has in the access group. |
| `updatedAt` | `str` | Yes | Timestamp in milliseconds when the access group was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AccessGroup().create({
    "id": "example_id",  # str
    "accessGroupId": "example_accessGroupId",  # str
    "createdAt": "example_createdAt",  # str
    "isDsyncManaged": True,  # bool
    "membersCount": 1,  # float
    "name": "example_name",  # str
    "projectId": "example_projectId",  # str
    "projectsCount": 1,  # float
    "role": "example_role",  # str
    "teamId": "example_teamId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AccessGroup().list({"id_or_name": "example"})
for access_group in results:
    print(access_group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AccessGroup().load({"id": "access_group_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AccessGroup().remove({"id": "access_group_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AccessGroup().update({
    "id": "access_group_id",
    "access_group_id": "access_group_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayEntity

```python
ai_gateway = client.AiGateway()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGateway().remove({"rule_id": "rule_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayRuleEntity

```python
ai_gateway_rule = client.AiGatewayRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `dict` | No |  |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `str` | No |  |
| `deleted` | `bool` | No |  |
| `description` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `match` | `dict` | No |  |
| `ownerId` | `str` | Yes |  |
| `ruleId` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `updatedBy` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayRule().create({
    "createdAt": 1,  # float
    "enabled": True,  # bool
    "ownerId": "example_ownerId",  # str
    "ruleId": "example_ruleId",  # str
    "type": "example_type",  # str
    "updatedAt": 1,  # float
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayRule().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayRuleListEntity

```python
ai_gateway_rule_list = client.AiGatewayRuleList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `dict` | No |  |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `str` | No |  |
| `deleted` | `bool` | No |  |
| `description` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `match` | `dict` | No |  |
| `ownerId` | `str` | Yes |  |
| `ruleId` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `updatedBy` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayRuleList().list()
for ai_gateway_rule_list in results:
    print(ai_gateway_rule_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayRuleListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayVirtualModelConfigEntity

```python
ai_gateway_virtual_model_config = client.AiGatewayVirtualModelConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `bool` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `str` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `list` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `str` | No | Use caching if available. |
| `createdAt` | `float` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `str` | No | User or app id that created this VMC. |
| `deleted` | `bool` | Yes | Whether this VMC is soft-deleted. |
| `description` | `str` | No | Optional description for UI. |
| `disallowPromptTraining` | `bool` | No | Only use providers that will not train on your prompts. |
| `displayName` | `str` | No | Human-readable name for UI. |
| `has` | `list` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | No | Only use HIPAA-compliant providers. |
| `id` | `str` | No |  |
| `inferenceRegion` | `dict` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `str` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `str` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `str` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `list` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `list` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `str` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `list` | No | Restrict routing to only these providers. |
| `providerOptions` | `dict` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `list` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `dict` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `list` | No | For kind=router: capability tags a candidate must have. |
| `selector` | `str` | No | For kind=router: how to order candidates. |
| `serviceTier` | `str` | No | Service tier for providers that support it. |
| `sort` | `str` | No | Rank eligible providers by an attribute. |
| `speed` | `str` | No | Only use fastest providers with short timeouts. |
| `status` | `str` | Yes | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float` | Yes | Last update timestamp (epoch ms). |
| `updatedBy` | `str` | No | User or app id that last updated this VMC. |
| `virtualModelSlug` | `str` | Yes | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `str` | No | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | No | Only use providers with zero data retention. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayVirtualModelConfig().create({
    "createdAt": 1,  # float
    "deleted": True,  # bool
    "kind": "example_kind",  # str
    "ownerId": "example_ownerId",  # str
    "status": "example_status",  # str
    "updatedAt": 1,  # float
    "virtualModelSlug": "example_virtualModelSlug",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayVirtualModelConfig().load({"id": "ai_gateway_virtual_model_config_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayVirtualModelConfig().update({
    "id": "ai_gateway_virtual_model_config_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayVirtualModelConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayVirtualModelConfigListEntity

```python
ai_gateway_virtual_model_config_list = client.AiGatewayVirtualModelConfigList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowFallbackFromFast` | `bool` | No | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `str` | No | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `list` | No | BYOK credential IDs allowed for this VMC. |
| `caching` | `str` | No | Use caching if available. |
| `createdAt` | `float` | Yes | Creation timestamp (epoch ms). |
| `createdBy` | `str` | No | User or app id that created this VMC. |
| `deleted` | `bool` | Yes | Whether this VMC is soft-deleted. |
| `description` | `str` | No | Optional description for UI. |
| `disallowPromptTraining` | `bool` | No | Only use providers that will not train on your prompts. |
| `displayName` | `str` | No | Human-readable name for UI. |
| `has` | `list` | No | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | No | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `dict` | No | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `str` | No | The concrete model-provider instance this VMC resolves to. |
| `kind` | `str` | Yes | VMC kind: alias, relay, or router. |
| `modelSlug` | `str` | No | Canonical model slug this VMC maps to (e.g. |
| `models` | `list` | No | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `list` | No | Observability tags attached to requests through this VMC. |
| `ownerId` | `str` | Yes | Team (owner) that owns this VMC. |
| `providerOnly` | `list` | No | Restrict routing to only these providers. |
| `providerOptions` | `dict` | No | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `list` | No | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `dict` | No | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `list` | No | For kind=router: capability tags a candidate must have. |
| `selector` | `str` | No | For kind=router: how to order candidates. |
| `serviceTier` | `str` | No | Service tier for providers that support it. |
| `sort` | `str` | No | Rank eligible providers by an attribute. |
| `speed` | `str` | No | Only use fastest providers with short timeouts. |
| `status` | `str` | Yes | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float` | Yes | Last update timestamp (epoch ms). |
| `updatedBy` | `str` | No | User or app id that last updated this VMC. |
| `virtualModelSlug` | `str` | Yes | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `str` | No | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | No | Only use providers with zero data retention. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayVirtualModelConfigList().list()
for ai_gateway_virtual_model_config_list in results:
    print(ai_gateway_virtual_model_config_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayVirtualModelConfigListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AliasEntity

```python
alias = client.Alias()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `str` | Yes | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | `str` | Yes | The date when the alias was created |
| `createdAt` | `float` | No | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `dict` | Yes | Information of the user who created the alias |
| `deletedAt` | `float` | No | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `dict` | Yes | A map with the deployment ID, URL and metadata |
| `deploymentId` | `str` | Yes | The deployment ID |
| `id` | `str` | No |  |
| `microfrontends` | `dict` | Yes | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `str` | No | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `str` | Yes | The unique identifier of the project |
| `protectionBypass` | `dict` | No | The protection bypass for the alias |
| `redirect` | `str` | No | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | `float` | No | Status code to be used on redirect |
| `uid` | `str` | Yes | The unique identifier of the alias |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Alias().create({
    "deployment_id": "example_deployment_id",  # str
    "alias": "example_alias",  # str
    "created": "example_created",  # str
    "creator": {},  # dict
    "deployment": {},  # dict
    "deploymentId": "example_deploymentId",  # str
    "microfrontends": {},  # dict
    "projectId": "example_projectId",  # str
    "uid": "example_uid",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Alias().list()
for alias in results:
    print(alias)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Alias().load({"id": "alias_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Alias().remove({"id": "alias_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Alias().update({
    "id": "alias_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AliasEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiAiGatewayEntity

```python
api_ai_gateway = client.ApiAiGateway()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiAiGateway().load()
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ApiAiGateway().remove({"vmc_slug": "vmc_slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiAiGatewayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiKeyEntity

```python
api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `float` | Yes | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `dict` | Yes | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `float` | Yes | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `str` | Yes | The ID of the user who created the API key. |
| `createdByAppId` | `str` | Yes | The ID of the app that created the API key, if any |
| `expiresAt` | `float` | Yes | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `str` | Yes | The unique identifier of the API key. |
| `leakedAt` | `float` | Yes | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `str` | Yes | URL where the API key was discovered as leaked. |
| `metadata` | `dict` | No | Generic metadata attached to the API key. |
| `name` | `str` | Yes | The human-readable name of the API key. |
| `partialKey` | `str` | Yes | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `str` | Yes | The ID of the project that this API key grants access to. |
| `purpose` | `str` | Yes | The API key's purpose, i.e. |
| `quota` | `dict` | Yes | AI Gateway quota associated with an API key. |
| `teamId` | `str` | Yes | The ID of the team that the API key grants access to. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiKey().create({
    "activeAt": 1,  # float
    "aiGatewayQuota": {},  # dict
    "createdAt": 1,  # float
    "createdBy": "example_createdBy",  # str
    "createdByAppId": "example_createdByAppId",  # str
    "expiresAt": 1,  # float
    "id": "example_id",  # str
    "leakedAt": 1,  # float
    "leakedUrl": "example_leakedUrl",  # str
    "name": "example_name",  # str
    "partialKey": "example_partialKey",  # str
    "projectId": "example_projectId",  # str
    "purpose": "example_purpose",  # str
    "quota": {},  # dict
    "teamId": "example_teamId",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ArtifactEntity

```python
artifact = client.Artifact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hashes` | `list` | Yes | artifact hashes |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Artifact().create({
    "hashes": [],  # list
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Artifact().load({"id": "artifact_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Artifact().remove()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Artifact().update({
    "id": "artifact_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArtifactEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthenticationEntity

```python
authentication = client.Authentication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeAt` | `float` | Yes | Timestamp (in milliseconds) of when the token was most recently used. |
| `createdAt` | `float` | Yes | Timestamp (in milliseconds) of when the token was created. |
| `expiresAt` | `float` | No | Timestamp (in milliseconds) of when the token expires. |
| `id` | `str` | Yes | The unique identifier of the token. |
| `leakedAt` | `float` | No | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | `str` | No | URL where the token was discovered as leaked. |
| `name` | `str` | Yes | The human-readable name of the token. |
| `origin` | `str` | No | The origin of how the token was created. |
| `prefix` | `str` | No | The token's prefix, for identification purposes. |
| `projectId` | `str` | No | The ID of the project to scope this token to |
| `revokedAt` | `float` | No | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | `list` | No | The access scopes granted to the token. |
| `suffix` | `str` | No | The last few characters of the token, for identification purposes. |
| `type` | `str` | Yes | The type of the token. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Authentication().create({
    "activeAt": 1,  # float
    "createdAt": 1,  # float
    "id": "example_id",  # str
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Authentication().load({"token_id": "token_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Authentication().remove({"token_id": "token_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillingEntity

```python
billing = client.Billing()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Billing().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Billing().load({"from": "from", "to": "to"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkRedirectEntity

```python
bulk_redirect = client.BulkRedirect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `str` | No | The staging link for previewing redirects in this version. |
| `createdBy` | `str` | Yes |  |
| `id` | `str` | Yes | The unique identifier for the version. |
| `isLive` | `bool` | No | Whether this version is currently live in production. |
| `isStaging` | `bool` | No | Whether this version has not been promoted to production yet and is not serving end users. |
| `key` | `str` | Yes | The key of the version. |
| `lastModified` | `float` | Yes |  |
| `name` | `str` | No | Optional name for the version. |
| `overwrite` | `bool` | No |  |
| `projectId` | `str` | Yes |  |
| `redirect` | `dict` | Yes | The redirect object to edit. |
| `redirectCount` | `float` | No | The number of redirects in this version. |
| `redirects` | `list` | No |  |
| `restore` | `bool` | No | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BulkRedirect().create({
    "project_id": "example_project_id",  # str
    "createdBy": "example_createdBy",  # str
    "id": "example_id",  # str
    "key": "example_key",  # str
    "lastModified": 1,  # float
    "projectId": "example_projectId",  # str
    "redirect": {},  # dict
    "teamId": "example_teamId",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BulkRedirect().list({"project_id": "example"})
for bulk_redirect in results:
    print(bulk_redirect)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BulkRedirect().load({"project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BulkRedirect().remove({"project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BulkRedirect().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkRedirectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CertEntity

```python
cert = client.Cert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoRenew` | `bool` | Yes |  |
| `ca` | `str` | Yes | The certificate authority |
| `cert` | `str` | Yes | The certificate |
| `cns` | `list` | Yes | The common names the cert should be issued for |
| `createdAt` | `float` | Yes |  |
| `expiresAt` | `float` | Yes |  |
| `id` | `str` | Yes |  |
| `key` | `str` | Yes | The certificate key |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Cert().create({
    "autoRenew": True,  # bool
    "ca": "example_ca",  # str
    "cert": "example_cert",  # str
    "cns": [],  # list
    "createdAt": 1,  # float
    "expiresAt": 1,  # float
    "id": "example_id",  # str
    "key": "example_key",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cert().list()
for cert in results:
    print(cert)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Cert().load({"id": "cert_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Cert().remove({"id": "cert_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Cert().update({
    "id": "cert_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CheckEntity

```python
check = client.Check()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocking` | `bool` | Yes | Whether the check should block a deployment from succeeding |
| `blocks` | `str` | Yes |  |
| `completedAt` | `float` | No |  |
| `conclusion` | `Any` | No | The result of the check being run |
| `createdAt` | `float` | Yes |  |
| `deletedAt` | `float` | No |  |
| `detailsUrl` | `str` | No | URL to display for further details |
| `externalId` | `str` | No | An identifier that can be used as an external reference |
| `id` | `str` | Yes |  |
| `integrationId` | `str` | Yes |  |
| `isRerequestable` | `bool` | Yes |  |
| `metrics` | `dict` | Yes |  |
| `name` | `str` | Yes | The name of the check being created |
| `output` | `dict` | No | The results of the check Run |
| `ownerId` | `str` | Yes |  |
| `path` | `str` | No | Path of the page that is being checked |
| `projectId` | `str` | Yes |  |
| `requires` | `str` | Yes |  |
| `rerequestable` | `bool` | No | Whether a user should be able to request for the check to be rerun if it fails |
| `source` | `Any` | Yes |  |
| `sourceIntegrationConfigurationId` | `str` | No |  |
| `sourceKind` | `str` | Yes |  |
| `startedAt` | `float` | No |  |
| `status` | `Any` | No | The current status of the check |
| `targets` | `list` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Check().create({
    "deployment_id": "example_deployment_id",  # str
    "blocking": True,  # bool
    "blocks": "example_blocks",  # str
    "createdAt": 1,  # float
    "id": "example_id",  # str
    "integrationId": "example_integrationId",  # str
    "isRerequestable": True,  # bool
    "metrics": {},  # dict
    "name": "example_name",  # str
    "ownerId": "example_ownerId",  # str
    "projectId": "example_projectId",  # str
    "requires": "example_requires",  # str
    "source": "example_source",  # Any
    "sourceKind": "example_sourceKind",  # str
    "targets": [],  # list
    "timeout": 1,  # float
    "updatedAt": 1,  # float
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Check().list({"project_id_or_name": "example"})
for check in results:
    print(check)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Check().load({"id": "check_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Check().remove({"id": "check_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Check().update({
    "id": "check_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChecksV2Entity

```python
checks_v2 = client.ChecksV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkId` | `str` | Yes |  |
| `completedAt` | `float` | No |  |
| `conclusion` | `str` | No |  |
| `conclusionText` | `str` | No |  |
| `externalId` | `str` | No |  |
| `externalUrl` | `str` | No |  |
| `output` | `dict` | No |  |
| `runs` | `list` | Yes |  |
| `status` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ChecksV2().create({
    "deployment_id": "example_deployment_id",  # str
    "checkId": "example_checkId",  # str
    "runs": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ChecksV2().list({"deployment_id": "example"})
for checks_v2 in results:
    print(checks_v2)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ChecksV2().load({"check_run_id": "check_run_id", "deployment_id": "deployment_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ChecksV2().update({
    "check_run_id": "check_run_id",
    "deployment_id": "deployment_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChecksV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectEntity

```python
connect = client.Connect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additionalParams` | `dict` | No |  |
| `audience` | `list` | No |  |
| `authorizationDetails` | `list` | No |  |
| `authorizationId` | `str` | No | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `dict` | No | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `dict` | Yes |  |
| `deviceCode` | `bool` | No |  |
| `displayName` | `str` | Yes | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `float` | Yes |  |
| `expiresInMs` | `float` | No |  |
| `externalSubject` | `str` | No |  |
| `id` | `str` | Yes | Client id (e.g. |
| `installationId` | `str` | No |  |
| `metadata` | `dict` | No | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `str` | Yes | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `str` | No |  |
| `resources` | `list` | No |  |
| `returnUrl` | `str` | No |  |
| `scopes` | `list` | No |  |
| `service` | `str` | No | Resolved service id when known (e.g. |
| `serviceName` | `str` | No | Curated display name of the resolved service (e.g. |
| `subject` | `Any` | No |  |
| `tenantId` | `str` | No |  |
| `token` | `str` | Yes |  |
| `tokenGroupId` | `str` | No | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` | `str` | Yes |  |
| `type` | `str` | Yes | Client type (e.g. |
| `uid` | `str` | Yes | Client uid (e.g. |
| `validityBufferMs` | `float` | No |  |
| `webhook` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Connect().create({
    "connector": "example_connector",  # str
    "displayName": "example_displayName",  # str
    "expiresAt": 1,  # float
    "id": "example_id",  # str
    "name": "example_name",  # str
    "token": "example_token",  # str
    "tokenId": "example_tokenId",  # str
    "type": "example_type",  # str
    "uid": "example_uid",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Connect().remove({"connector": "connector"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectConnectorEntity

```python
connect_connector = client.ConnectConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `str` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `dict` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `str` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `str` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `str` | No | The connection method this connector was created from, when the create request named one. |
| `connector` | `dict` | Yes | Updated connector. |
| `createdAt` | `float` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `Any` | No | Principal that created the connector. |
| `creationMode` | `str` | No | How the connector row was originally created. |
| `data` | `Any` | Yes | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `str` | No | Installation used when a token request does not specify an installation. |
| `destinations` | `list` | Yes | Complete replacement set of trigger destinations. |
| `devsite` | `str` | No | Developer website for the connected service. |
| `displayName` | `str` | Yes | Human-readable connector name. |
| `docsite` | `str` | No | Developer documentation for the connected service. |
| `environments` | `list` | No | Environments for the project connection. |
| `events` | `list` | No | Known events this connector subscribes to (e.g. |
| `icon` | `str` | No | Connector branding icon. |
| `id` | `str` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `bool` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `dict` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `str` | Yes | Connector name within the owning team. |
| `params` | `dict` | No | Values for the selected connection method's template fields. |
| `projectId` | `str` | No | Project to connect during creation. |
| `reconsentNeeded` | `dict` | Yes | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `str` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `bool` | No | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `str` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `dict` | Yes | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `list` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `Any` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `str` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `Any` | No | Initial trigger destination. |
| `triggerDestinations` | `list` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `dict` | Yes | Incoming trigger configuration for the connector. |
| `type` | `str` | Yes | Connector implementation type. |
| `typeIcon` | `str` | No | Icon identifier supplied by the connector type. |
| `typeName` | `str` | Yes | Human-readable name of the connector type. |
| `uid` | `str` | Yes | Team-scoped UID. |
| `updatedAt` | `float` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `Any` | No | Principal that most recently updated the connector. |
| `userTokens` | `dict` | Yes | User-token capabilities and known grants for the connector. |
| `website` | `str` | No | Public website for the connected service. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConnectConnector().create({
    "appTokens": {},  # dict
    "connector": {},  # dict
    "createdAt": 1,  # float
    "data": "example_data",  # Any
    "destinations": [],  # list
    "displayName": "example_displayName",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "reconsentNeeded": {},  # dict
    "service": "example_service",  # str
    "serviceSync": {},  # dict
    "supportedSubjectTypes": [],  # list
    "supportsIcon": "example_supportsIcon",  # Any
    "supportsInstallation": True,  # bool
    "supportsRevocation": True,  # bool
    "supportsTriggers": True,  # bool
    "triggers": {},  # dict
    "type": "example_type",  # str
    "typeName": "example_typeName",  # str
    "uid": "example_uid",  # str
    "updatedAt": 1,  # float
    "userTokens": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConnectConnector().load({"id": "connect_connector_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ConnectConnector().update({
    "id": "connect_connector_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectConnectorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectConnectorListEntity

```python
connect_connector_list = client.ConnectConnectorList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `str` | No | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `dict` | Yes | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `str` | No | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `str` | No | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `str` | No | The connection method this connector was created from, when the create request named one. |
| `createdAt` | `float` | Yes | Creation time in epoch milliseconds. |
| `createdBy` | `Any` | No | Principal that created the connector. |
| `creationMode` | `str` | No | How the connector row was originally created. |
| `defaultInstallationId` | `str` | No | Installation used when a token request does not specify an installation. |
| `devsite` | `str` | No | Developer website for the connected service. |
| `displayName` | `str` | Yes | Human-readable connector name. |
| `docsite` | `str` | No | Developer documentation for the connected service. |
| `events` | `list` | No | Known events this connector subscribes to (e.g. |
| `icon` | `str` | No | Connector branding icon. |
| `id` | `str` | Yes | Stable `scl_` connector ID. |
| `knownStale` | `bool` | No | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `dict` | No | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `str` | Yes | Connector name within the owning team. |
| `redirectUri` | `str` | No | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float` | No | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `str` | Yes | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `list` | Yes | Token subject types supported by the connector. |
| `supportsIcon` | `Any` | Yes | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Yes | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Yes | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Yes | Whether this connector type supports trigger webhooks. |
| `target` | `str` | No | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `list` | No | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `dict` | Yes | Incoming trigger configuration for the connector. |
| `type` | `str` | Yes | Connector implementation type. |
| `typeIcon` | `str` | No | Icon identifier supplied by the connector type. |
| `typeName` | `str` | Yes | Human-readable name of the connector type. |
| `uid` | `str` | Yes | Team-scoped UID. |
| `updatedAt` | `float` | Yes | Last update time in epoch milliseconds. |
| `updatedBy` | `Any` | No | Principal that most recently updated the connector. |
| `userTokens` | `dict` | Yes | User-token capabilities and known grants for the connector. |
| `website` | `str` | No | Public website for the connected service. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConnectConnectorList().list()
for connect_connector_list in results:
    print(connect_connector_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectConnectorListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectConnectorProjectConnectionListEntity

```python
connect_connector_project_connection_list = client.ConnectConnectorProjectConnectionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `str` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `list` | Yes | Environments where the connector is enabled for the project. |
| `project` | `dict` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConnectConnectorProjectConnectionList().list({"connector_id": "example"})
for connect_connector_project_connection_list in results:
    print(connect_connector_project_connection_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectConnectorProjectConnectionListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectProjectConnectionEntity

```python
connect_project_connection = client.ConnectProjectConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `str` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `list` | Yes | Environments where the connector is enabled for the project. |
| `environments` | `list` | Yes | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `dict` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConnectProjectConnection().create({
    "connector_id": "example_connector_id",  # str
    "project_id": "example_project_id",  # str
    "connectorId": "example_connectorId",  # str
    "createdAt": 1,  # float
    "enabledEnvironments": [],  # list
    "environments": [],  # list
    "project": {},  # dict
    "updatedAt": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConnectProjectConnection().load({"connector_id": "connector_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectProjectConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectProjectConnectorConnectionListEntity

```python
connect_project_connector_connection_list = client.ConnectProjectConnectorConnectionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectorId` | `str` | Yes | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Yes | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `list` | Yes | Environments where the connector is enabled for the project. |
| `project` | `dict` | Yes | Vercel project connected to the connector. |
| `updatedAt` | `float` | Yes | Time when the project connection was last updated, in epoch milliseconds. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConnectProjectConnectorConnectionList().list({"project_id": "example"})
for connect_project_connector_connection_list in results:
    print(connect_project_connector_connection_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectProjectConnectorConnectionListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeploymentEntity

```python
deployment = client.Deployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliasAssigned` | `Any` | No |  |
| `aliasError` | `dict` | Yes | An error object in case aliasing of the deployment failed. |
| `attribution` | `dict` | No | Commit attribution metadata |
| `buildMachine` | `str` | No | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `float` | No | Timestamp of when the deployment started building at. |
| `checks` | `dict` | Yes | Detailed information about v2 deployment checks. |
| `checksConclusion` | `str` | No | Conclusion for checks |
| `checksState` | `str` | No | State of all registered checks |
| `connectBuildsEnabled` | `bool` | No | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `str` | No | The ID of Secure Compute network used for this deployment |
| `created` | `float` | Yes | Timestamp of when the deployment got created. |
| `createdAt` | `float` | Yes |  |
| `creator` | `dict` | Yes | Metadata information of the deployment creator. |
| `customEnvironment` | `dict` | Yes | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `str` | No | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `str` | No | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `float` | No | Timestamp of when the deployment got deleted. |
| `deploymentId` | `str` | No | The ID of an existing deployment to redeploy. |
| `errorCode` | `str` | No | Error code when the deployment is in an error state. |
| `errorMessage` | `str` | No | Error message when the deployment is in an canceled or error state. |
| `expiration` | `float` | No | The expiration configured by the project retention policy |
| `files` | `list` | No | The files to include in the deployment. |
| `gitAccessToken` | `str` | No | Available only to Vercel platform accounts. |
| `gitMetadata` | `dict` | No | Populates initial git metadata for different git providers. |
| `gitSource` | `Any` | No | Defines the Git Repository source to be deployed. |
| `id` | `str` | No |  |
| `inspectorUrl` | `str` | Yes | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `bool` | No | Deployment can be used for instant rollback |
| `manualProvisioning` | `dict` | Yes |  |
| `meta` | `dict` | No | An object containing the deployment's metadata. |
| `monorepoManager` | `str` | No | The monorepo manager that is being used for this deployment. |
| `name` | `str` | Yes | A string with the project name used in the deployment URL |
| `oomReport` | `str` | No | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `list` | No |  |
| `passiveConnectConfigurationId` | `str` | No | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `dict` | Yes | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `bool` | No |  |
| `project` | `str` | No | The target project identifier in which the deployment will be created. |
| `projectId` | `str` | Yes | The project ID of the deployment |
| `projectSettings` | `dict` | No | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `float` | No | The expiration proposed to replace the existing expiration |
| `ready` | `float` | No | Timestamp of when the deployment got ready. |
| `readyState` | `str` | Yes |  |
| `readySubstate` | `str` | No | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `dict` | Yes | NSNB Blocked metadata |
| `softDeletedByRetention` | `bool` | No | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | `str` | No | The source of the deployment. |
| `state` | `str` | No | In which state is the deployment. |
| `status` | `str` | No |  |
| `statusText` | `str` | No |  |
| `statusUrl` | `str` | No |  |
| `target` | `str` | No | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | `str` | Yes | The type of the deployment. |
| `uid` | `str` | Yes | The unique identifier of the deployment. |
| `undeleted` | `float` | No | Timestamp of when the deployment was undeleted. |
| `url` | `str` | Yes | The URL of the deployment. |
| `withLatestCommit` | `bool` | No | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Deployment().create({
    "aliasError": {},  # dict
    "checks": {},  # dict
    "created": 1,  # float
    "createdAt": 1,  # float
    "creator": {},  # dict
    "customEnvironment": {},  # dict
    "inspectorUrl": "example_inspectorUrl",  # str
    "manualProvisioning": {},  # dict
    "name": "example_name",  # str
    "platform": {},  # dict
    "projectId": "example_projectId",  # str
    "readyState": "example_readyState",  # str
    "seatBlock": {},  # dict
    "type": "example_type",  # str
    "uid": "example_uid",  # str
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Deployment().list()
for deployment in results:
    print(deployment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Deployment().load({"id": "deployment_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Deployment().remove({"id": "deployment_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Deployment().update({
    "id": "deployment_id",
    "action": "action",
    "integration_id": "integration_id",
    "resource_id": "resource_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DnsEntity

```python
dns = client.Dns()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No | A comment to add context on what this DNS record is for |
| `createdAt` | `float` | No |  |
| `creator` | `str` | Yes |  |
| `domain` | `str` | Yes |  |
| `https` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `mxPriority` | `int` | No | The MX priority value of the DNS record |
| `name` | `str` | Yes | The name of the DNS record |
| `recordType` | `str` | Yes |  |
| `srv` | `dict` | Yes |  |
| `ttl` | `float` | No | The Time to live (TTL) value of the DNS record |
| `type` | `str` | Yes | The type of record, it could be one of the valid DNS records. |
| `value` | `str` | Yes | The value of the DNS record |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Dns().create({
    "domain_id": "example_domain_id",  # str
    "creator": "example_creator",  # str
    "domain": "example_domain",  # str
    "https": {},  # dict
    "id": "example_id",  # str
    "name": "example_name",  # str
    "recordType": "example_recordType",  # str
    "srv": {},  # dict
    "type": "example_type",  # str
    "value": "example_value",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Dns().load({"domain_id": "domain_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Dns().remove({"domain_id": "domain_id", "record_id": "record_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Dns().update({
    "record_id": "record_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainEntity

```python
domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boughtAt` | `float` | Yes | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `float` | Yes | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `dict` | Yes | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `list` | No | A list of custom nameservers for the domain to point to. |
| `echMode` | `str` | Yes | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `float` | Yes | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `str` | Yes | The unique identifier of the domain. |
| `intendedNameservers` | `list` | Yes | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `str` | No | The domain operation to perform. |
| `name` | `str` | Yes | The domain name. |
| `nameservers` | `list` | Yes | A list of the current nameservers of the domain. |
| `renew` | `bool` | No | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `str` | Yes | The type of service the domain is handled by. |
| `suffix` | `bool` | Yes |  |
| `teamId` | `str` | Yes |  |
| `transferStartedAt` | `float` | No | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `float` | No | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `str` | Yes |  |
| `verified` | `bool` | Yes | If the domain has the ownership verified. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Domain().create({
    "boughtAt": 1,  # float
    "createdAt": 1,  # float
    "creator": {},  # dict
    "echMode": "example_echMode",  # str
    "expiresAt": 1,  # float
    "id": "example_id",  # str
    "intendedNameservers": [],  # list
    "name": "example_name",  # str
    "nameservers": [],  # list
    "serviceType": "example_serviceType",  # str
    "suffix": True,  # bool
    "teamId": "example_teamId",  # str
    "userId": "example_userId",  # str
    "verified": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Domain().list()
for domain in results:
    print(domain)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Domain().load({"id": "domain_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Domain().remove({"id": "domain_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Domain().update({
    "id": "domain_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainsRegistrarEntity

```python
domains_registrar = client.DomainsRegistrar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authCode` | `str` | Yes | The auth code for the domain. |
| `autoRenew` | `bool` | Yes | Whether the domain should be auto-renewed before it expires. |
| `available` | `bool` | Yes |  |
| `contactInformation` | `dict` | Yes | The contact information for the domain. |
| `domains` | `list` | Yes | an array of at most 50 item(s) |
| `error` | `Any` | No |  |
| `expectedPrice` | `float` | Yes |  |
| `languageCode` | `str` | No | The language code for the domain. |
| `nameservers` | `list` | Yes |  |
| `orderId` | `str` | Yes | A valid order ID |
| `purchasePrice` | `Any` | Yes |  |
| `renewalPrice` | `Any` | Yes |  |
| `results` | `list` | Yes |  |
| `status` | `str` | Yes |  |
| `transferPrice` | `Any` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DomainsRegistrar().create({
    "authCode": "example_authCode",  # str
    "autoRenew": True,  # bool
    "available": True,  # bool
    "contactInformation": {},  # dict
    "domains": [],  # list
    "expectedPrice": 1,  # float
    "nameservers": [],  # list
    "orderId": "example_orderId",  # str
    "purchasePrice": "example_purchasePrice",  # Any
    "renewalPrice": "example_renewalPrice",  # Any
    "results": [],  # list
    "status": "example_status",  # str
    "transferPrice": "example_transferPrice",  # Any
    "years": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DomainsRegistrar().load({"order_id": "order_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DomainsRegistrar().update({
    "domain_id": "domain_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainsRegistrarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DrainEntity

```python
drain = client.Drain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `delivery` | `dict` | No |  |
| `drains` | `Any` | Yes |  |
| `filter` | `dict` | Yes |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `projectIds` | `list` | No |  |
| `projects` | `str` | Yes |  |
| `sampling` | `list` | No |  |
| `schemas` | `dict` | Yes |  |
| `source` | `dict` | No |  |
| `status` | `str` | No |  |
| `transforms` | `list` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Drain().create({
    "drains": "example_drains",  # Any
    "filter": {},  # dict
    "name": "example_name",  # str
    "projects": "example_projects",  # str
    "schemas": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Drain().load({"id": "drain_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Drain().remove({"id": "drain_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Drain().update({
    "id": "drain_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DrainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EdgeCacheEntity

```python
edge_cache = client.EdgeCache()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EdgeCache().create({
    "project_id_or_name": "example_project_id_or_name",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EdgeCacheEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvEntity

```python
env = client.Env()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applyToAllCustomEnvironments` | `bool` | No | whether or not this env varible applies to custom environments |
| `comment` | `str` | No | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `str` | No | The date when the Shared Env Var was created. |
| `createdAt` | `float` | No | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `str` | No | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `list` | No | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `bool` | No | whether or not this env variable is decrypted |
| `deletedAt` | `float` | No | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `str` | No | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `list` | Yes |  |
| `failed` | `list` | Yes |  |
| `id` | `str` | No | The unique identifier of the Shared Env Var. |
| `key` | `str` | No | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `str` | No | The last editor full name or username. |
| `ownerId` | `str` | No | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `list` | No | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `list` | Yes |  |
| `target` | `list` | No | environments this env variable targets |
| `type` | `str` | No | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `list` | Yes |  |
| `updatedAt` | `float` | No | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `str` | No | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `dict` | Yes | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
| `value` | `str` | No | The value of the Shared Env Var. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Env().create({
    "evs": [],  # list
    "failed": [],  # list
    "securityIssues": [],  # list
    "updated": [],  # list
    "updates": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Env().list()
for env in results:
    print(env)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Env().load({"id": "env_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Env().remove()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Env().update({
    "id": "env_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentEntity

```python
environment = client.Environment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branchMatcher` | `dict` | Yes | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `str` | No | Where to copy environment variables from. |
| `createdAt` | `float` | Yes | Timestamp when the environment was created |
| `currentDeploymentAliases` | `list` | No | List of aliases for the current deployment |
| `description` | `str` | No | Optional description of the environment's purpose |
| `domains` | `list` | No | List of domains associated with this environment |
| `id` | `str` | Yes | Unique identifier for the custom environment (format: env_*) |
| `slug` | `str` | Yes | URL-friendly name of the environment |
| `type` | `str` | Yes | The type of environment (production, preview, or development) |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Environment().create({
    "id_or_name": "example_id_or_name",  # str
    "branchMatcher": {},  # dict
    "createdAt": 1,  # float
    "id": "example_id",  # str
    "type": "example_type",  # str
    "updatedAt": 1,  # float
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Environment().list({"id_or_name": "example"})
for environment in results:
    print(environment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Environment().load({"environment_slug_or_id": "environment_slug_or_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Environment().remove({"environment_slug_or_id": "environment_slug_or_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Environment().update({
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureFlagEntity

```python
feature_flag = client.FeatureFlag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changedEnvironments` | `list` | Yes |  |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `str` | Yes | The user who created this patch |
| `data` | `dict` | No | The data of the segment |
| `description` | `str` | No | A description of the flag |
| `environments` | `dict` | Yes | The configuration for the flag in different environments |
| `flagId` | `str` | Yes |  |
| `flags` | `list` | Yes |  |
| `hint` | `str` | No |  |
| `id` | `str` | Yes |  |
| `kind` | `str` | Yes | The kind of flag |
| `label` | `str` | No |  |
| `maintainerIds` | `list` | No | The user ids of the maintainers of the flag |
| `message` | `str` | No | Additional message for this version |
| `metadata` | `dict` | No |  |
| `operations` | `list` | No |  |
| `ownerId` | `str` | Yes |  |
| `pagination` | `dict` | Yes |  |
| `permanent` | `bool` | No | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `str` | Yes |  |
| `revision` | `float` | Yes |  |
| `seed` | `float` | Yes | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `str` | Yes | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `str` | Yes |  |
| `status` | `dict` | Yes |  |
| `tags` | `list` | No | Tags for categorizing the flag |
| `typeName` | `str` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `updatedBy` | `str` | No |  |
| `variants` | `list` | Yes | The variants of the flag |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.FeatureFlag().list({"deployment_id": "example"})
for feature_flag in results:
    print(feature_flag)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FeatureFlag().load({"team_id": "team_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.FeatureFlag().remove({"project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.FeatureFlag().update({
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureFlagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileEntity

```python
file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `children` | `list` | No | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `str` | No | The content-type of the file (only valid for the `file` type) |
| `mode` | `float` | Yes | The file "mode" indicating file type and permissions. |
| `name` | `str` | Yes | The name of the file tree entry |
| `type` | `str` | Yes | String indicating the type of file tree entry. |
| `uid` | `str` | No | The unique identifier of the file (only valid for the `file` type) |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.File().list({"deployment_id": "example"})
for file in results:
    print(file)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FlagEntity

```python
flag = client.Flag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `str` | Yes |  |
| `description` | `str` | No |  |
| `environments` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `kind` | `str` | Yes |  |
| `maintainerIds` | `list` | No |  |
| `metadata` | `dict` | No |  |
| `ownerId` | `str` | Yes |  |
| `permanent` | `bool` | No |  |
| `projectId` | `str` | Yes |  |
| `revision` | `float` | Yes |  |
| `seed` | `float` | Yes |  |
| `slug` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `tags` | `list` | No |  |
| `typeName` | `str` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `updatedBy` | `str` | No |  |
| `variants` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Flag().load({"id": "flag_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FlagsSdkKeyWithSecretEntity

```python
flags_sdk_key_with_secret = client.FlagsSdkKeyWithSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `str` | Yes |  |
| `deletedAt` | `float` | No |  |
| `environment` | `str` | Yes |  |
| `hashKey` | `str` | Yes |  |
| `keyValue` | `str` | Yes | Cleartext value of the SDK key. |
| `label` | `str` | No |  |
| `partialKeyValue` | `str` | Yes | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` | `str` | Yes |  |
| `sdkKeyType` | `str` | Yes |  |
| `tokenValue` | `str` | No | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` | `str` | Yes |  |
| `updatedAt` | `float` | Yes |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.FlagsSdkKeyWithSecret().update({
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FlagsSdkKeyWithSecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GlobalConfigEntity

```python
global_config = client.GlobalConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `str` | No | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` | `float` | No |  |
| `digest` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `itemCount` | `float` | Yes |  |
| `items` | `dict` | No |  |
| `ownerId` | `str` | Yes |  |
| `purpose` | `Any` | No |  |
| `schema` | `dict` | No |  |
| `sizeInBytes` | `float` | Yes |  |
| `slug` | `str` | Yes | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `float` | No | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `dict` | Yes | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `float` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GlobalConfig().create({
    "createdAt": 1,  # float
    "digest": "example_digest",  # str
    "id": "example_id",  # str
    "itemCount": 1,  # float
    "ownerId": "example_ownerId",  # str
    "sizeInBytes": 1,  # float
    "transfer": {},  # dict
    "updatedAt": 1,  # float
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GlobalConfig().list({"id": "example_id"})
for global_config in results:
    print(global_config)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GlobalConfig().load({"id": "global_config_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.GlobalConfig().remove({"id": "global_config_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.GlobalConfig().update({
    "id": "global_config_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GlobalConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GlobalConfigItemEntity

```python
global_config_item = client.GlobalConfigItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `description` | `str` | No |  |
| `edgeConfigId` | `str` | Yes |  |
| `id` | `str` | No |  |
| `key` | `str` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `value` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GlobalConfigItem().list({"id": "example_id"})
for global_config_item in results:
    print(global_config_item)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GlobalConfigItem().load({"id": "global_config_item_id", "global_config_id": "global_config_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GlobalConfigItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GlobalConfigTokenEntity

```python
global_config_token = client.GlobalConfigToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `edgeConfigId` | `str` | Yes |  |
| `id` | `str` | Yes | This is not the token itself, but rather an id to identify the token by |
| `label` | `str` | Yes |  |
| `partialToken` | `str` | Yes | A partially-masked representation of the token, safe to display in UIs. |
| `token` | `str` | No | Deprecated: the full, plaintext token. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GlobalConfigToken().load({"id": "global_config_token_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GlobalConfigTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationEntity

```python
integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `str` | No |  |
| `description` | `str` | Yes |  |
| `details` | `list` | No |  |
| `disabled` | `bool` | No |  |
| `effectiveDate` | `str` | No |  |
| `envVarEnvironments` | `list` | No |  |
| `highlightedDetails` | `list` | No |  |
| `id` | `str` | Yes |  |
| `initialCharge` | `str` | No |  |
| `makeEnvVarsSensitive` | `bool` | No |  |
| `maximumAmount` | `str` | No |  |
| `maximumAmountAutoPurchasePerPeriod` | `str` | No |  |
| `metadataSchema` | `dict` | Yes |  |
| `minimumAmount` | `str` | No |  |
| `name` | `str` | Yes |  |
| `paymentMethodRequired` | `bool` | Yes |  |
| `preauthorizationAmount` | `float` | No |  |
| `primaryProtocol` | `str` | No |  |
| `projectId` | `str` | Yes |  |
| `protocols` | `dict` | Yes |  |
| `quote` | `list` | No |  |
| `scope` | `str` | Yes |  |
| `slug` | `str` | Yes |  |
| `type` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Integration().create({
    "installation_id": "example_installation_id",  # str
    "resource_id": "example_resource_id",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "metadataSchema": {},  # dict
    "name": "example_name",  # str
    "paymentMethodRequired": True,  # bool
    "projectId": "example_projectId",  # str
    "protocols": {},  # dict
    "scope": "example_scope",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Integration().list({"configuration_id": "example"})
for integration in results:
    print(integration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Integration().load({"id": "integration_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Integration().remove({"id": "integration_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## KmsEntity

```python
kms = client.Kms()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activation` | `str` | No | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` | `str` | No |  |
| `algorithm` | `str` | Yes | Algorithm of the signing key. |
| `claims` | `dict` | No | The claims to include in the token. |
| `claimsSchema` | `dict` | No | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `str` | Yes |  |
| `environments` | `list` | Yes | The environments for the project grant policy. |
| `headers` | `dict` | No | Additional headers to include in the token. |
| `id` | `str` | Yes |  |
| `importKey` | `str` | No | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `str` | No | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `str` | Yes | Key id of the signing key. |
| `key_ops` | `list` | No |  |
| `kid` | `str` | No |  |
| `kind` | `str` | Yes |  |
| `kty` | `str` | No |  |
| `managedBy` | `str` | No |  |
| `message` | `str` | Yes | Base64-encoded message to be signed. |
| `name` | `str` | Yes | The name of the issuer. |
| `origin` | `str` | Yes |  |
| `ownerId` | `str` | Yes |  |
| `policies` | `list` | Yes |  |
| `projectId` | `str` | Yes | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `float` | No | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `Any` | No | Deprecated. |
| `signature` | `str` | Yes | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `list` | Yes |  |
| `token` | `str` | Yes |  |
| `tokenClaims` | `dict` | No | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `float` | No | The time-to-live for the token, in seconds. |
| `updatedAt` | `str` | Yes |  |
| `use` | `str` | No |  |
| `x5c` | `list` | No | The X.509 certificate chain (RFC 7517 §4.7). |
| `x5tS256` | `str` | No | The base64url SHA-256 thumbprint of the DER certificate in `x5c[0]` (RFC 7517 §4.9). |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Kms().create({
    "issuer_id": "example_issuer_id",  # str
    "algorithm": "example_algorithm",  # str
    "createdAt": "example_createdAt",  # str
    "environments": [],  # list
    "id": "example_id",  # str
    "keyId": "example_keyId",  # str
    "kind": "example_kind",  # str
    "message": "example_message",  # str
    "name": "example_name",  # str
    "origin": "example_origin",  # str
    "ownerId": "example_ownerId",  # str
    "policies": [],  # list
    "projectId": "example_projectId",  # str
    "signature": "example_signature",  # str
    "signingKeys": [],  # list
    "token": "example_token",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Kms().list()
for kms in results:
    print(kms)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Kms().load({"issuer_id": "issuer_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Kms().remove({"issuer_id": "issuer_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Kms().update({
    "issuer_id": "issuer_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KmsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListEventTypeEntity

```python
list_event_type = client.ListEventType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `list` | Yes |  |
| `types` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListEventType().list()
for list_event_type in results:
    print(list_event_type)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListEventTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogEntity

```python
log = client.Log()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Log().load({"deployment_id": "deployment_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogDrainEntity

```python
log_drain = client.LogDrain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `str` | No | The branch regexp of log drain |
| `clientId` | `str` | No | The oauth2 client application id that created this log drain |
| `configurationId` | `str` | No | The client configuration this log drain was created with |
| `createdAt` | `float` | Yes | A timestamp that tells you when the log drain was created |
| `createdFrom` | `str` | Yes | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | `Any` | Yes | The delivery log format |
| `environments` | `list` | No | The environment of log drain |
| `headers` | `dict` | No | Headers to be sent together with the request |
| `id` | `str` | Yes | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `str` | No |  |
| `integrationIcon` | `str` | No |  |
| `integrationWebsite` | `str` | No |  |
| `name` | `str` | No | The custom name of this log drain. |
| `ownerId` | `str` | Yes | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `str` | No |  |
| `projectIds` | `list` | No | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `list` | No |  |
| `samplingRate` | `float` | No | The sampling rate for this log drain. |
| `secret` | `str` | No | Custom secret of log drain |
| `source` | `Any` | Yes |  |
| `sources` | `list` | Yes | The sources from which logs are currently being delivered to this log drain. |
| `url` | `str` | Yes | The log drain url |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogDrain().create({
    "createdAt": 1,  # float
    "createdFrom": "example_createdFrom",  # str
    "deliveryFormat": "example_deliveryFormat",  # Any
    "id": "example_id",  # str
    "ownerId": "example_ownerId",  # str
    "source": "example_source",  # Any
    "sources": [],  # list
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LogDrain().list()
for log_drain in results:
    print(log_drain)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LogDrain().load({"id": "log_drain_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LogDrain().remove({"id": "log_drain_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogDrainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MarketplaceEntity

```python
marketplace = client.Marketplace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `str` | Yes |  |
| `already_revoked` | `bool` | Yes |  |
| `balances` | `list` | Yes |  |
| `billing` | `Any` | Yes | Billing data (interim invoicing data). |
| `billingPlan` | `dict` | Yes |  |
| `billingPlanId` | `str` | No | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `str` | No |  |
| `client_id` | `str` | No |  |
| `client_secret` | `str` | Yes |  |
| `created` | `str` | Yes | System creation date. |
| `createdAt` | `float` | No |  |
| `data` | `dict` | Yes |  |
| `description` | `str` | No |  |
| `discounts` | `list` | No | Invoice discounts. |
| `email` | `str` | Yes |  |
| `eod` | `str` | Yes | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `Any` | Yes |  |
| `expires_in` | `float` | Yes |  |
| `externalId` | `str` | No | Partner-supplied Invoice ID, if applicable. |
| `extras` | `dict` | No |  |
| `final` | `bool` | No | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `str` | No |  |
| `id` | `str` | Yes | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `str` | Yes | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `str` | Yes | Invoice date. |
| `invoiceId` | `str` | Yes | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `str` | No | User-readable invoice number. |
| `isArchived` | `bool` | No |  |
| `items` | `list` | Yes | Invoice items. |
| `memo` | `str` | No | Additional memo for the invoice. |
| `metadata` | `dict` | No | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `str` | Yes | The name of the resource as it is recorded in Vercel |
| `notification` | `dict` | Yes | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `str` | Yes |  |
| `ownership` | `str` | No |  |
| `paidAt` | `str` | No | Moment the invoice was paid. |
| `partial` | `bool` | No | If true, will only update the provided secrets |
| `partnerId` | `str` | Yes | The ID provided by the partner for the given resource |
| `period` | `dict` | Yes | Subscription period for this billing cycle. |
| `productId` | `str` | Yes | The ID of the product the resource is derived from |
| `protocolSettings` | `dict` | No | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `str` | No | The reason for refund. |
| `refundTotal` | `str` | No | Refund amount. |
| `refundedAt` | `str` | No | Most recent moment the invoice was refunded. |
| `revoked` | `bool` | Yes |  |
| `role` | `str` | Yes | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `str` | Yes |  |
| `secrets` | `list` | Yes |  |
| `slug` | `str` | Yes |  |
| `state` | `str` | Yes | Invoice state. |
| `status` | `str` | No | The current status of the resource |
| `test` | `bool` | No | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | `str` | Yes | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` | `str` | Yes |  |
| `token_type` | `str` | Yes |  |
| `total` | `str` | Yes | Invoice total amount. |
| `updated` | `str` | Yes | System update date. |
| `updatedAt` | `float` | No |  |
| `usage` | `list` | Yes |  |
| `userEmail` | `str` | No |  |
| `validationErrors` | `list` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Marketplace().create({
    "installation_id": "example_installation_id",  # str
    "access_token": "example_access_token",  # str
    "already_revoked": True,  # bool
    "balances": [],  # list
    "billing": "example_billing",  # Any
    "billingPlan": {},  # dict
    "client_secret": "example_client_secret",  # str
    "created": "example_created",  # str
    "data": {},  # dict
    "email": "example_email",  # str
    "eod": "example_eod",  # str
    "event": "example_event",  # Any
    "expires_in": 1,  # float
    "id": "example_id",  # str
    "internalId": "example_internalId",  # str
    "invoiceDate": "example_invoiceDate",  # str
    "invoiceId": "example_invoiceId",  # str
    "items": [],  # list
    "name": "example_name",  # str
    "notification": {},  # dict
    "origin": "example_origin",  # str
    "partnerId": "example_partnerId",  # str
    "period": {},  # dict
    "productId": "example_productId",  # str
    "revoked": True,  # bool
    "role": "example_role",  # str
    "scope": "example_scope",  # str
    "secrets": [],  # list
    "slug": "example_slug",  # str
    "state": "example_state",  # str
    "timestamp": "example_timestamp",  # str
    "token": "example_token",  # str
    "token_type": "example_token_type",  # str
    "total": "example_total",  # str
    "updated": "example_updated",  # str
    "usage": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Marketplace().list({"installation_id": "example"})
for marketplace in results:
    print(marketplace)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Marketplace().load({"installation_id": "installation_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Marketplace().remove({"installation_id": "installation_id", "resource_id": "resource_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Marketplace().update({
    "installation_id": "installation_id",
    "resource_id": "resource_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarketplaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MicrofrontendEntity

```python
microfrontend = client.Microfrontend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `dict` | Yes |  |
| `accountId` | `str` | Yes |  |
| `alias` | `list` | Yes |  |
| `analytics` | `dict` | Yes |  |
| `applications` | `dict` | Yes |  |
| `appliedCve55182Migration` | `bool` | No |  |
| `autoAssignCustomDomains` | `bool` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `str` | No |  |
| `autoExposeSystemEnvs` | `bool` | No |  |
| `avatar` | `str` | No |  |
| `blobs` | `dict` | No |  |
| `buildCommand` | `str` | No |  |
| `commandForIgnoringBuildStep` | `str` | No |  |
| `concurrencyBucketName` | `str` | No |  |
| `connectBuildsEnabled` | `bool` | No |  |
| `connectConfigurationId` | `str` | No |  |
| `connectConfigurations` | `list` | No |  |
| `createdAt` | `float` | No |  |
| `creator` | `Any` | No |  |
| `crons` | `dict` | Yes |  |
| `customEnvironments` | `list` | No |  |
| `customerSupportCodeVisibility` | `bool` | No |  |
| `dataCache` | `dict` | Yes |  |
| `defaultResourceConfig` | `dict` | Yes |  |
| `deploymentExpiration` | `dict` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `dict` | No | Project shape. |
| `devCommand` | `str` | No |  |
| `directoryListing` | `bool` | Yes |  |
| `dismissedToasts` | `list` | No |  |
| `enableAffectedProjectsDeployments` | `bool` | No |  |
| `enableExternalRewriteCaching` | `bool` | No |  |
| `enablePreviewFeedback` | `bool` | No |  |
| `enableProductionFeedback` | `bool` | No |  |
| `env` | `list` | No |  |
| `expiration` | `Any` | No |  |
| `features` | `dict` | No |  |
| `framework` | `str` | No |  |
| `gitComments` | `dict` | Yes |  |
| `gitForkProtection` | `bool` | No |  |
| `gitLFS` | `bool` | No |  |
| `gitProviderOptions` | `dict` | Yes |  |
| `hasActiveBranches` | `bool` | No |  |
| `hasDeployments` | `bool` | No |  |
| `id` | `str` | Yes |  |
| `installCommand` | `str` | No |  |
| `internalRoutes` | `list` | No |  |
| `ipBuckets` | `list` | No |  |
| `jobs` | `dict` | No |  |
| `lastAliasRequest` | `dict` | Yes |  |
| `lastRollbackTarget` | `dict` | No |  |
| `latestDeployments` | `list` | No |  |
| `link` | `str` | No |  |
| `live` | `bool` | No |  |
| `microfrontends` | `Any` | No |  |
| `name` | `str` | Yes |  |
| `nodeVersion` | `str` | Yes |  |
| `oidcTokenConfig` | `dict` | No |  |
| `options` | `dict` | No | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `dict` | Yes |  |
| `outputDirectory` | `str` | No |  |
| `passiveConnectConfigurationId` | `str` | No |  |
| `passport` | `dict` | Yes |  |
| `passwordProtection` | `dict` | No |  |
| `paused` | `bool` | No |  |
| `permissions` | `dict` | No |  |
| `productionDeploymentsFastLane` | `bool` | No |  |
| `protectedSourcemaps` | `bool` | No |  |
| `protectionBypass` | `dict` | No |  |
| `protectionConfig` | `dict` | No |  |
| `resourceConfig` | `dict` | Yes |  |
| `rollbackDescription` | `dict` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `dict` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `str` | No |  |
| `sandbox` | `dict` | No |  |
| `schema` | `str` | No | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `dict` | No |  |
| `serverlessFunctionZeroConfigFailover` | `bool` | No |  |
| `services` | `list` | No |  |
| `skewProtectionAllowedDomains` | `list` | No |  |
| `skewProtectionBoundaryAt` | `float` | No |  |
| `skewProtectionMaxAge` | `float` | No |  |
| `skipGitConnectDuringLink` | `bool` | No |  |
| `sourceFilesOutsideRootDirectory` | `bool` | No |  |
| `speedInsights` | `dict` | Yes |  |
| `ssoProtection` | `dict` | Yes |  |
| `staticIps` | `dict` | Yes |  |
| `targets` | `dict` | No |  |
| `tier` | `str` | No |  |
| `tracing` | `dict` | No |  |
| `transferCompletedAt` | `float` | No |  |
| `transferStartedAt` | `float` | No |  |
| `transferToAccountId` | `str` | No |  |
| `transferredFromAccountId` | `str` | No |  |
| `trustedIps` | `Any` | No |  |
| `trustedSources` | `dict` | No |  |
| `updatedAt` | `float` | No |  |
| `usageStatus` | `dict` | Yes |  |
| `v0` | `bool` | No |  |
| `v0Created` | `bool` | No |  |
| `version` | `str` | No | The version of the microfrontends config schema. |
| `webAnalytics` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Microfrontend().create({
    "abuse": {},  # dict
    "accountId": "example_accountId",  # str
    "alias": [],  # list
    "analytics": {},  # dict
    "applications": {},  # dict
    "crons": {},  # dict
    "dataCache": {},  # dict
    "defaultResourceConfig": {},  # dict
    "deploymentExpiration": {},  # dict
    "directoryListing": True,  # bool
    "gitComments": {},  # dict
    "gitProviderOptions": {},  # dict
    "id": "example_id",  # str
    "lastAliasRequest": {},  # dict
    "name": "example_name",  # str
    "nodeVersion": "example_nodeVersion",  # str
    "optionsAllowlist": {},  # dict
    "passport": {},  # dict
    "resourceConfig": {},  # dict
    "rollbackDescription": {},  # dict
    "rollingRelease": {},  # dict
    "speedInsights": {},  # dict
    "ssoProtection": {},  # dict
    "staticIps": {},  # dict
    "usageStatus": {},  # dict
    "webAnalytics": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Microfrontend().list({"group_id": "example"})
for microfrontend in results:
    print(microfrontend)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Microfrontend().load({"project_id_or_name": "project_id_or_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MicrofrontendEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NetworkEntity

```python
network = client.Network()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsAccountId` | `str` | Yes | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | `list` | No | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `str` | Yes | The AWS Region in which the network exists. |
| `cidr` | `str` | Yes | The CIDR range of the Network. |
| `createdAt` | `float` | Yes | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `list` | No |  |
| `hostedZones` | `dict` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `str` | Yes | The unique identifier of the Network. |
| `name` | `str` | Yes | The name of the network. |
| `peeringConnections` | `dict` | Yes | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `dict` | Yes | Metadata about any projects associated with the Network. |
| `region` | `str` | No | The Vercel region in which the Network exists. |
| `status` | `str` | Yes | The status of the Network. |
| `teamId` | `str` | Yes | The unique identifier of the Team that owns the Network. |
| `vpcId` | `str` | No | The ID of the VPC which hosts the network. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Network().create({
    "awsAccountId": "example_awsAccountId",  # str
    "awsRegion": "example_awsRegion",  # str
    "cidr": "example_cidr",  # str
    "createdAt": 1,  # float
    "hostedZones": {},  # dict
    "id": "example_id",  # str
    "name": "example_name",  # str
    "peeringConnections": {},  # dict
    "projects": {},  # dict
    "status": "example_status",  # str
    "teamId": "example_teamId",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Network().list()
for network in results:
    print(network)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Network().load({"id": "network_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Network().remove({"id": "network_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Network().update({
    "id": "network_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NetworkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NetworkingEntity

```python
networking = client.Networking()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `builds` | `bool` | No | Whether to use Static IPs for builds. |
| `regions` | `list` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Networking().remove({"endpoint_id": "endpoint_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Networking().update({
    "id_or_name": "id_or_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NetworkingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservabilityEntity

```python
observability = client.Observability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disabled` | `bool` | Yes | Whether Observability Plus should be disabled for the project |
| `disabledAt` | `float` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | No |  |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `disabled` | - | - |
| `disabledAt` | Yes | - |
| `id` | - | - |
| `name` | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Observability().list()
for observability in results:
    print(observability)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Observability().update({
    "project_id_or_name": "project_id_or_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservabilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PrivateLinkEndpointEntity

```python
private_link_endpoint = client.PrivateLinkEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awsDnsEntries` | `list` | No | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `str` | Yes | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `float` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `bool` | No | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `str` | Yes | The unique identifier of the PrivateLink endpoint. |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `list` | No | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | `str` | Yes | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | `str` | Yes | The current state of the endpoint. |
| `statusMessage` | `str` | No | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | `str` | Yes | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | `float` | Yes | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
| `vercelRegion` | `str` | Yes | The Vercel region the endpoint is provisioned in. |
| `vpcEndpointId` | `str` | No | The identifier of the underlying AWS VPC endpoint. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PrivateLinkEndpoint().create({
    "awsServiceName": "example_awsServiceName",  # str
    "createdAt": 1,  # float
    "endpointId": "example_endpointId",  # str
    "name": "example_name",  # str
    "projectId": "example_projectId",  # str
    "status": "example_status",  # str
    "teamId": "example_teamId",  # str
    "updatedAt": 1,  # float
    "vercelRegion": "example_vercelRegion",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PrivateLinkEndpoint().list({"project_id": "example"})
for private_link_endpoint in results:
    print(private_link_endpoint)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PrivateLinkEndpoint().load({"id": "private_link_endpoint_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PrivateLinkEndpoint().update({
    "id": "private_link_endpoint_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrivateLinkEndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `dict` | Yes |  |
| `acceptedPolicies` | `dict` | No |  |
| `accountId` | `str` | Yes |  |
| `alias` | `list` | Yes |  |
| `analytics` | `dict` | Yes |  |
| `apexName` | `str` | Yes |  |
| `appliedCve55182Migration` | `bool` | No |  |
| `autoAssignCustomDomains` | `bool` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `str` | No |  |
| `autoExposeSystemEnvs` | `bool` | No |  |
| `avatar` | `str` | No |  |
| `blobs` | `dict` | No |  |
| `buildCommand` | `str` | No | The build command for this project. |
| `commandForIgnoringBuildStep` | `str` | No |  |
| `comment` | `str` | No | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `str` | No |  |
| `configurationId` | `str` | No |  |
| `connectBuildsEnabled` | `bool` | No |  |
| `connectConfigurationId` | `str` | No |  |
| `connectConfigurations` | `list` | No | The list of connections from project environment to Secure Compute network |
| `contentHint` | `Any` | No |  |
| `createdAt` | `float` | No |  |
| `createdBy` | `str` | No |  |
| `creator` | `Any` | No |  |
| `crons` | `dict` | Yes |  |
| `customEnvironmentId` | `str` | No |  |
| `customEnvironmentIds` | `list` | No | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `list` | No |  |
| `customerSupportCodeVisibility` | `bool` | No | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `dict` | Yes |  |
| `decrypted` | `bool` | No |  |
| `defaultResourceConfig` | `dict` | Yes |  |
| `deploymentExpiration` | `dict` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `dict` | No | Project shape. |
| `devCommand` | `str` | No | The dev command for this project. |
| `directoryListing` | `bool` | Yes |  |
| `dismissedToasts` | `list` | No | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `str` | No |  |
| `edgeConfigTokenId` | `str` | No |  |
| `enableAffectedProjectsDeployments` | `bool` | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | No | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | No | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | No | Opt-in to production toolbar on the project level |
| `env` | `list` | No |  |
| `environmentVariables` | `list` | No | Collection of ENV Variables the Project will use |
| `expiration` | `Any` | No |  |
| `features` | `dict` | No |  |
| `framework` | `str` | No | The framework that is being used for this project. |
| `gitBranch` | `str` | No | Git branch to link the project domain |
| `gitComments` | `dict` | Yes |  |
| `gitForkProtection` | `bool` | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | No | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `dict` | Yes |  |
| `gitRepository` | `dict` | Yes | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` | No |  |
| `hasDeployments` | `bool` | No |  |
| `hostname` | `str` | Yes | The deployment hostname to scope the trace session to. |
| `id` | `str` | Yes |  |
| `installCommand` | `str` | No | The install command for this project. |
| `integrations` | `list` | No |  |
| `internalContentHint` | `dict` | Yes | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `list` | No |  |
| `ipBuckets` | `list` | No |  |
| `jobs` | `dict` | No |  |
| `key` | `str` | Yes | The name of the environment variable |
| `lastAliasRequest` | `dict` | Yes |  |
| `lastRollbackTarget` | `dict` | No |  |
| `latestDeployments` | `list` | No |  |
| `legacyValue` | `str` | No | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `str` | No |  |
| `live` | `bool` | No |  |
| `microfrontends` | `Any` | No |  |
| `name` | `str` | Yes | The desired name for the project |
| `newProjectName` | `str` | No | The desired name for the project |
| `nodeVersion` | `str` | Yes |  |
| `oidcTokenConfig` | `dict` | No | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `dict` | Yes | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `str` | No | The output directory of the project. |
| `paidFeatures` | `dict` | No |  |
| `passiveConnectConfigurationId` | `str` | No |  |
| `passport` | `dict` | Yes | Passport configuration for the project. |
| `passwordProtection` | `dict` | No | Allows to protect project deployments with a password |
| `paused` | `bool` | No |  |
| `permissions` | `dict` | No |  |
| `previewDeploymentSuffix` | `str` | No | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | No | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` | No |  |
| `projectId` | `str` | Yes | The unique target project identifier |
| `protectedSourcemaps` | `bool` | No | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `dict` | No |  |
| `protectionConfig` | `dict` | No |  |
| `publicSource` | `bool` | No | Deprecated. |
| `redirect` | `str` | No | Target destination domain for redirect |
| `redirectStatusCode` | `float` | No | Status code for domain redirect |
| `resourceConfig` | `dict` | Yes | Specifies resource override configuration for the project |
| `rollbackDescription` | `dict` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `dict` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `str` | No | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `dict` | No | Specifies the default region and failover regions for sandboxes created in the project |
| `security` | `dict` | No |  |
| `serverlessFunctionRegion` | `str` | No | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `bool` | No | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `list` | No |  |
| `skewProtectionAllowedDomains` | `list` | No | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `float` | No | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `float` | No | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `bool` | No | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `bool` | No | Indicates if there are source files outside of the root directory |
| `speedInsights` | `dict` | Yes |  |
| `ssoProtection` | `dict` | Yes | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `dict` | Yes | Manage Static IPs for this project |
| `sunsetSecretId` | `str` | No | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `Any` | No | The target environment of the environment variable |
| `targets` | `dict` | No |  |
| `tier` | `str` | No |  |
| `token` | `str` | Yes |  |
| `tracing` | `dict` | No | Tracing configuration for this project |
| `transferCompletedAt` | `float` | No |  |
| `transferStartedAt` | `float` | No |  |
| `transferToAccountId` | `str` | No |  |
| `transferredFromAccountId` | `str` | No |  |
| `trustedIps` | `Any` | No | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `dict` | No | Deployment Protection Trusted Sources |
| `type` | `str` | Yes | The type of environment variable |
| `updatedAt` | `float` | No |  |
| `updatedBy` | `str` | No |  |
| `usageStatus` | `dict` | Yes |  |
| `v0` | `bool` | No |  |
| `v0Created` | `bool` | No |  |
| `value` | `str` | Yes | The value of the environment variable |
| `verification` | `list` | No | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `bool` | Yes | `true` if the domain is verified for use with the project. |
| `visibility` | `str` | No | User-facing config/secret model. |
| `webAnalytics` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
    "deployment_id": "example_deployment_id",  # str
    "id": "example_id",  # str
    "abuse": {},  # dict
    "accountId": "example_accountId",  # str
    "alias": [],  # list
    "analytics": {},  # dict
    "apexName": "example_apexName",  # str
    "crons": {},  # dict
    "dataCache": {},  # dict
    "defaultResourceConfig": {},  # dict
    "deploymentExpiration": {},  # dict
    "directoryListing": True,  # bool
    "gitComments": {},  # dict
    "gitProviderOptions": {},  # dict
    "gitRepository": {},  # dict
    "hostname": "example_hostname",  # str
    "internalContentHint": {},  # dict
    "key": "example_key",  # str
    "lastAliasRequest": {},  # dict
    "name": "example_name",  # str
    "nodeVersion": "example_nodeVersion",  # str
    "optionsAllowlist": {},  # dict
    "passport": {},  # dict
    "projectId": "example_projectId",  # str
    "resourceConfig": {},  # dict
    "rollbackDescription": {},  # dict
    "rollingRelease": {},  # dict
    "speedInsights": {},  # dict
    "ssoProtection": {},  # dict
    "staticIps": {},  # dict
    "token": "example_token",  # str
    "type": "example_type",  # str
    "usageStatus": {},  # dict
    "value": "example_value",  # str
    "verified": True,  # bool
    "webAnalytics": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Project().load({"id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Project().remove({"id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Project().update({
    "id": "project_id",
    "code": "code",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectMemberEntity

```python
project_member = client.ProjectMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No | The email of the team member that should be added to this project. |
| `id` | `str` | Yes |  |
| `role` | `str` | Yes | The project role of the member that will be added. |
| `uid` | `str` | No | The ID of the team member that should be added to this project. |
| `username` | `str` | No | The username of the team member that should be added to this project. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectMember().create({
    "id_or_name": "example_id_or_name",  # str
    "id": "example_id",  # str
    "role": "example_role",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectMember().load({"id_or_name": "id_or_name"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectMember().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectRouteEntity

```python
project_route = client.ProjectRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `actions` | `list` | Yes |  |
| `alias` | `str` | No | The staging alias for previewing this version. |
| `conditions` | `list` | No |  |
| `createdBy` | `str` | Yes | The user who created this version. |
| `currentRoute` | `dict` | Yes |  |
| `description` | `str` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the version. |
| `isLive` | `bool` | No | Whether this version is currently live in production. |
| `isStaging` | `bool` | No | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `float` | Yes | Timestamp of when this version was last modified. |
| `name` | `str` | Yes |  |
| `overwrite` | `bool` | No |  |
| `pathCondition` | `dict` | Yes |  |
| `position` | `dict` | No | Controls where the route is inserted. |
| `prompt` | `str` | Yes |  |
| `restore` | `bool` | No | If true, restores the staged route to the value in the production version. |
| `route` | `dict` | Yes | The full route object to replace the existing route with |
| `routes` | `list` | No |  |
| `ruleCount` | `float` | No | The number of routing rules in this version. |
| `s3Key` | `str` | Yes | The S3 key where the routing rules are stored. |
| `version` | `dict` | Yes | A version of routing rules stored in S3. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectRoute().create({
    "id": "example_id",  # str
    "action": "example_action",  # str
    "actions": [],  # list
    "createdBy": "example_createdBy",  # str
    "currentRoute": {},  # dict
    "description": "example_description",  # str
    "lastModified": 1,  # float
    "name": "example_name",  # str
    "pathCondition": {},  # dict
    "prompt": "example_prompt",  # str
    "route": {},  # dict
    "s3Key": "example_s3Key",  # str
    "version": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectRoute().list({"project_id": "example"})
for project_route in results:
    print(project_route)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectRoute().load({"id": "project_route_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectRoute().remove({"id": "project_route_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectRoute().update({
    "id": "project_route_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectRouteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QueryEntity

```python
query = client.Query()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregation` | `str` | No | Aggregation function to apply. |
| `bucketTimezone` | `str` | No | IANA timezone (e.g. |
| `endTime` | `str` | No | End timestamp |
| `filter` | `str` | No | Filter to apply to the query. |
| `granularity` | `dict` | No | Time bucket size |
| `groupBy` | `list` | No | Dimensions to group results by. |
| `limit` | `float` | No | Maximum number of results |
| `metric` | `str` | Yes | Metric id |
| `orderBy` | `str` | No | Rollup column to order grouped results by. |
| `orderDirection` | `str` | No | Direction to order grouped results by. |
| `scope` | `dict` | Yes | Owner or project scope for the query |
| `startTime` | `str` | No | Start timestamp |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Query().create({
    "metric": "example_metric",  # str
    "scope": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RecordEntity

```python
record = client.Record()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No |  |
| `createdAt` | `float` | No |  |
| `creator` | `str` | Yes |  |
| `domain` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `recordType` | `str` | Yes |  |
| `ttl` | `float` | No |  |
| `type` | `str` | Yes |  |
| `value` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Record().load({"id": "record_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecordEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RollingReleaseEntity

```python
rolling_release = client.RollingRelease()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeStage` | `dict` | Yes | The currently active stage, null if the rollout is aborted |
| `advancementType` | `str` | Yes | The advancement type of the rolling release |
| `canaryDeployment` | `dict` | Yes | The canary deployment being rolled out |
| `currentCanaryPercentage` | `float` | No | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `dict` | Yes | The current deployment receiving production traffic |
| `nextStage` | `dict` | Yes | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `str` | Yes | The ID of a deployment queued for the next rolling release |
| `stages` | `list` | Yes | All stages configured for this rolling release |
| `startedAt` | `float` | Yes | Unix timestamp in milliseconds when the rolling release started |
| `state` | `str` | Yes | The current state of the rolling release |
| `substate` | `str` | Yes | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `float` | Yes | Unix timestamp in milliseconds when the rolling release was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RollingRelease().create({
    "project_id": "example_project_id",  # str
    "activeStage": {},  # dict
    "advancementType": "example_advancementType",  # str
    "canaryDeployment": {},  # dict
    "currentDeployment": {},  # dict
    "nextStage": {},  # dict
    "queuedDeploymentId": "example_queuedDeploymentId",  # str
    "stages": [],  # list
    "startedAt": 1,  # float
    "state": "example_state",  # str
    "substate": "example_substate",  # str
    "updatedAt": 1,  # float
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RollingRelease().load({"id_or_name": "id_or_name"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RollingRelease().remove({"project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RollingRelease().update({
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RollingReleaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SandboxEntity

```python
sandbox = client.Sandbox()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `args` | `list` | Yes | The arguments of the command. |
| `command` | `str` | Yes | The executable or shell command to run. |
| `createdAt` | `float` | Yes | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `str` | No | The method used to create the snapshot. |
| `currentSandboxName` | `str` | No | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `str` | No | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `str` | No | The snapshot ID to set as the current snapshot. |
| `cwd` | `str` | Yes | The current working directory of the command. |
| `durationMs` | `float` | No | Duration of the command execution in milliseconds. |
| `env` | `dict` | No | Additional environment variables to set for this command. |
| `exitCode` | `float` | Yes | If the command did finish, the exit code. |
| `expiration` | `Any` | No | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `float` | No | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `list` | No | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `str` | Yes | The ID of the command. |
| `image` | `str` | No | Image to use for the sandbox. |
| `keepLastSnapshots` | `dict` | Yes | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `float` | Yes | The last time the snapshot was used (e.g. |
| `logs` | `bool` | No | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `float` | Yes | The maximum drive size in bytes. |
| `memory` | `float` | No | Memory allocated in MB. |
| `mounts` | `dict` | No | List of drives to mount to the sandbox at the provided path. |
| `name` | `str` | Yes | The name of the command. |
| `networkId` | `str` | No | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `Any` | No | Network policy configuration. |
| `parentId` | `str` | No | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `str` | Yes | The path of the directory to create. |
| `persistent` | `bool` | No | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `list` | No | List of ports to expose from the sandbox. |
| `projectId` | `str` | Yes | The project that owns the drive. |
| `recursive` | `bool` | No | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `str` | No | The region where the snapshot is stored. |
| `regions` | `list` | No | The regions where the snapshot is available. |
| `resources` | `dict` | No | Resources to define the VM |
| `resumed` | `bool` | Yes |  |
| `routes` | `list` | Yes |  |
| `runtime` | `str` | No | The runtime environment for the sandbox. |
| `sandbox` | `dict` | Yes | This object contains information related to a Vercel NamedSandbox. |
| `session` | `dict` | Yes | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `str` | Yes | The ID of the session associated with the command. |
| `sizeBytes` | `float` | Yes | The size of the snapshot in bytes. |
| `snapshotExpiration` | `Any` | No | Default snapshot expiration time in milliseconds. |
| `source` | `Any` | No | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `str` | Yes | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `float` | Yes | When the command was started, in milliseconds since the epoch. |
| `status` | `str` | Yes | The status of the snapshot. |
| `statusUpdatedAt` | `float` | Yes | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `bool` | No | Execute the command with root (superuser) privileges. |
| `tags` | `dict` | No | Key-value tags to associate with the sandbox. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Sandbox().create({
    "name": "example_name",  # str
    "args": [],  # list
    "command": "example_command",  # str
    "createdAt": 1,  # float
    "cwd": "example_cwd",  # str
    "exitCode": 1,  # float
    "id": "example_id",  # str
    "keepLastSnapshots": {},  # dict
    "lastUsedAt": 1,  # float
    "maxSizeBytes": 1,  # float
    "path": "example_path",  # str
    "projectId": "example_projectId",  # str
    "resumed": True,  # bool
    "routes": [],  # list
    "sandbox": {},  # dict
    "session": {},  # dict
    "sessionId": "example_sessionId",  # str
    "sizeBytes": 1,  # float
    "sourceSessionId": "example_sourceSessionId",  # str
    "startedAt": 1,  # float
    "status": "example_status",  # str
    "statusUpdatedAt": 1,  # float
    "updatedAt": 1,  # float
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Sandbox().list()
for sandbox in results:
    print(sandbox)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Sandbox().load({"id": "sandbox_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Sandbox().remove({"id": "sandbox_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Sandbox().update({
    "id": "sandbox_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SandboxEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SchemaEntity

```python
schema = client.Schema()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregations` | `list` | Yes |  |
| `defaultAggregation` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `dimensions` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `unit` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Schema().list()
for schema in results:
    print(schema)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Schema().load({"id": "schema_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SchemaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecurityEntity

```python
security = client.Security()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Action` | `str` | No |  |
| `ActorId` | `str` | No |  |
| `CreatedAt` | `str` | Yes |  |
| `DeletedAt` | `str` | No |  |
| `Domain` | `str` | Yes |  |
| `ExpiresAt` | `float` | No |  |
| `Id` | `str` | Yes |  |
| `Ip` | `str` | Yes |  |
| `IsProjectRule` | `bool` | No |  |
| `Note` | `str` | No |  |
| `OwnerId` | `str` | Yes |  |
| `ProjectId` | `str` | No |  |
| `UpdatedAt` | `str` | Yes |  |
| `UpdatedAtHour` | `str` | Yes |  |
| `action` | `dict` | Yes |  |
| `action_type` | `str` | Yes |  |
| `active` | `bool` | Yes |  |
| `allSources` | `bool` | No |  |
| `botIdEnabled` | `bool` | No |  |
| `changes` | `list` | Yes |  |
| `conditionGroup` | `list` | Yes |  |
| `conditions` | `list` | No |  |
| `count` | `float` | Yes |  |
| `crs` | `dict` | Yes | Custom Ruleset |
| `description` | `str` | No |  |
| `domain` | `str` | No |  |
| `endTime` | `str` | Yes |  |
| `firewallEnabled` | `bool` | Yes |  |
| `host` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `ips` | `list` | Yes |  |
| `isActive` | `bool` | Yes |  |
| `logHeaders` | `Any` | No |  |
| `managedRules` | `dict` | No |  |
| `name` | `str` | Yes |  |
| `note` | `str` | No |  |
| `ownerId` | `str` | Yes |  |
| `projectKey` | `str` | Yes |  |
| `projectScope` | `bool` | No | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `str` | Yes |  |
| `ruleId` | `str` | Yes |  |
| `ruleName` | `str` | Yes |  |
| `rules` | `list` | Yes |  |
| `rulesets` | `Any` | No |  |
| `sourceIp` | `str` | No |  |
| `startTime` | `str` | Yes |  |
| `ttl` | `float` | No | Time to live in milliseconds |
| `updatedAt` | `str` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Security().create({
    "project_id": "example_project_id",  # str
    "CreatedAt": "example_CreatedAt",  # str
    "Domain": "example_Domain",  # str
    "Id": "example_Id",  # str
    "Ip": "example_Ip",  # str
    "OwnerId": "example_OwnerId",  # str
    "UpdatedAt": "example_UpdatedAt",  # str
    "UpdatedAtHour": "example_UpdatedAtHour",  # str
    "action": {},  # dict
    "action_type": "example_action_type",  # str
    "active": True,  # bool
    "changes": [],  # list
    "conditionGroup": [],  # list
    "count": 1,  # float
    "crs": {},  # dict
    "endTime": "example_endTime",  # str
    "firewallEnabled": True,  # bool
    "host": "example_host",  # str
    "id": "example_id",  # str
    "ips": [],  # list
    "isActive": True,  # bool
    "name": "example_name",  # str
    "ownerId": "example_ownerId",  # str
    "projectKey": "example_projectKey",  # str
    "public_ip": "example_public_ip",  # str
    "ruleId": "example_ruleId",  # str
    "ruleName": "example_ruleName",  # str
    "rules": [],  # list
    "startTime": "example_startTime",  # str
    "updatedAt": "example_updatedAt",  # str
    "version": 1,  # float
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Security().list({"project_id": "example"})
for security in results:
    print(security)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Security().load({"project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Security().remove({"config_version": "config_version"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Security().update({
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecurityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SegmentEntity

```python
segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `float` | Yes |  |
| `createdBy` | `str` | No |  |
| `data` | `dict` | Yes |  |
| `description` | `str` | No |  |
| `hint` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `label` | `str` | Yes |  |
| `metadata` | `dict` | No |  |
| `projectId` | `str` | Yes |  |
| `slug` | `str` | Yes |  |
| `typeName` | `str` | Yes |  |
| `updatedAt` | `float` | Yes |  |
| `usedByFlags` | `list` | No |  |
| `usedBySegments` | `list` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Segment().load({"id": "segment_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StorageEntity

```python
storage = client.Storage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `str` | No |  |
| `count` | `float` | Yes |  |
| `id` | `str` | No |  |
| `isTokenExpired` | `bool` | Yes |  |
| `kind` | `str` | No | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` | `str` | Yes |  |
| `projectFilter` | `dict` | No |  |
| `projectId` | `str` | No | The project this store is scoped to. |
| `projectsMetadata` | `list` | Yes |  |
| `region` | `str` | Yes |  |
| `size` | `float` | Yes |  |
| `status` | `str` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Storage().create({
    "count": 1,  # float
    "isTokenExpired": True,  # bool
    "name": "example_name",  # str
    "projectsMetadata": [],  # list
    "region": "example_region",  # str
    "size": 1,  # float
    "status": "example_status",  # str
    "usageQuotaExceeded": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Storage().load({"id": "storage_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Storage().remove({"id": "storage_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StorageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamEntity

```python
team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accessRequestedAt` | `float` | Yes | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `float` | No | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `float` | No | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `dict` | No | Attribution information for the session or current page |
| `avatar` | `str` | Yes | The ID of the file used as avatar for this Team. |
| `billing` | `dict` | Yes | The team's billing plan. |
| `bitbucket` | `dict` | Yes | Map of the connected Bitbucket account. |
| `confirmed` | `bool` | Yes | Current status of the membership. |
| `connect` | `dict` | No |  |
| `createdAt` | `float` | Yes | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `str` | Yes | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `dict` | No | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `dict` | No | Default deployment expiration settings for this team |
| `defaultPassport` | `dict` | Yes | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `dict` | No | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `dict` | No | Default roles for the team. |
| `deploymentPolicy` | `dict` | No | Composable deployment-time policy for the team. |
| `description` | `str` | Yes | A short description of the Team. |
| `disableHardAutoBlocks` | `Any` | No |  |
| `disableRepositoryDispatchEvents` | `bool` | No | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | `str` | No | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | `str` | No | Controls who can request access to protected deployments. |
| `emailDomain` | `str` | No | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | `bool` | No | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | `str` | No | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | `str` | No | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | `str` | No | The new fallback environment for the microfrontends group. |
| `github` | `dict` | Yes | Map of the connected GitHub account. |
| `gitlab` | `dict` | Yes | Map of the connected GitLab account. |
| `hideIpAddresses` | `bool` | No | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `bool` | No | Indicates if IP addresses should be accessible in log drains |
| `id` | `str` | Yes | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `float` | No | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `str` | No | Code that can be used to join this Team. |
| `ipBuckets` | `list` | No |  |
| `joinedFrom` | `dict` | Yes | A map that describes the origin from where the user joined. |
| `membership` | `dict` | Yes | The membership of the authenticated User in relation to the Team. |
| `name` | `str` | Yes | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `dict` | Yes | NSNB configuration for the team. |
| `orgRootTeamId` | `str` | No | Best-effort ID of the organization’s root billing team. |
| `pagination` | `dict` | Yes | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `str` | No | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `float` | No | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `bool` | No | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `str` | No | The hostname that is current set as preview deployment suffix. |
| `projects` | `list` | No |  |
| `regenerateInviteCode` | `bool` | No | Create a new invite code and replace the current one. |
| `remoteCaching` | `dict` | No | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `bool` | No | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `dict` | No | Resource configuration for the team. |
| `role` | `str` | No | The role in the team of the member. |
| `saml` | `dict` | Yes | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `str` | No | Sensitive environment variable policy for this team |
| `slug` | `str` | Yes | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `str` | Yes | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `dict` | Yes | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `dict` | Yes | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `dict` | Yes | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `dict` | Yes | When enabled, creating shareable links requires Owner role. |
| `teamName` | `str` | Yes | The name of the team. |
| `teamPermissions` | `list` | No | The team permissions to set for the member. |
| `teamSlug` | `str` | Yes | The slug of the team. |
| `teams` | `list` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Team().create({
    "accessRequestedAt": 1,  # float
    "avatar": "example_avatar",  # str
    "billing": {},  # dict
    "bitbucket": {},  # dict
    "confirmed": True,  # bool
    "createdAt": 1,  # float
    "creatorId": "example_creatorId",  # str
    "defaultPassport": {},  # dict
    "description": "example_description",  # str
    "github": {},  # dict
    "gitlab": {},  # dict
    "id": "example_id",  # str
    "joinedFrom": {},  # dict
    "membership": {},  # dict
    "name": "example_name",  # str
    "nsnbConfig": {},  # dict
    "pagination": {},  # dict
    "saml": {},  # dict
    "slug": "example_slug",  # str
    "stagingPrefix": "example_stagingPrefix",  # str
    "strictConnectors": {},  # dict
    "strictDeploymentProtectionSettings": {},  # dict
    "strictPasswordProtectionSettings": {},  # dict
    "strictShareableLinks": {},  # dict
    "teamName": "example_teamName",  # str
    "teamSlug": "example_teamSlug",  # str
    "teams": [],  # list
    "updatedAt": 1,  # float
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Team().list()
for team in results:
    print(team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Team().load({"id": "team_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Team().remove({"id": "team_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Team().update({
    "id": "team_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TldNameEntity

```python
tld_name = client.TldName()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TldName().list()
for tld_name in results:
    print(tld_name)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TldNameEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ToggleEntity

```python
toggle = client.Toggle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Toggle().create({
    "project_id": "example_project_id",  # str
    "value": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ToggleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `list` | No | The categories that group this event with related event types. |
| `createdAt` | `float` | Yes | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `list` | Yes | A list of "entities" within the event `text`. |
| `id` | `str` | Yes | The unique identifier of the Event. |
| `payload` | `Any` | No |  |
| `principal` | `Any` | No |  |
| `principalId` | `str` | Yes | The ID of the principal who generated the event. |
| `requestId` | `str` | No |  |
| `sessionId` | `str` | No | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `str` | Yes | The human-readable text of the Event. |
| `tokenId` | `str` | No | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `str` | No | The type of the event. |
| `user` | `dict` | Yes | Metadata for {@link userId}. |
| `userId` | `str` | No | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `list` | No | Metadata for {@link viaIds}. |
| `viaIds` | `list` | No | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.User().load({"id": "user_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.User().remove({"id": "user_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VcrEntity

```python
vcr = client.Vcr()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arch` | `str` | No | CPU architecture the manifest targets. |
| `createdAt` | `str` | Yes | ISO 8601 timestamp of when the image was created. |
| `id` | `str` | Yes | Internal identifier of the image. |
| `imageId` | `str` | Yes | Internal identifier of the image the tag points at. |
| `kind` | `str` | Yes | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` | `list` | Yes |  |
| `manifestDigest` | `str` | Yes | SHA-256 digest of the image manifest. |
| `name` | `str` | Yes | Name of the repository. |
| `platform` | `str` | No | Operating system the manifest targets. |
| `projectId` | `str` | Yes | Identifier of the project the repository belongs to. |
| `public` | `bool` | Yes | Whether the repository is public. |
| `pushedBy` | `str` | No | Identifier of the actor that pushed the image. |
| `repositoryId` | `str` | Yes | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `float` | Yes | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `str` | Yes | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | `str` | Yes | The tag name. |
| `tags` | `list` | Yes | Tags pointing at this image's manifest. |
| `teamId` | `str` | Yes | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `str` | Yes | Slug of the team that is granted access to the repository. |
| `updatedAt` | `str` | Yes | ISO 8601 timestamp of when the tag was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Vcr().create({
    "id_or_name": "example_id_or_name",  # str
    "project_id": "example_project_id",  # str
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "imageId": "example_imageId",  # str
    "kind": "example_kind",  # str
    "layers": [],  # list
    "manifestDigest": "example_manifestDigest",  # str
    "name": "example_name",  # str
    "projectId": "example_projectId",  # str
    "public": True,  # bool
    "repositoryId": "example_repositoryId",  # str
    "sizeInBytes": 1,  # float
    "status": "example_status",  # str
    "tag": "example_tag",  # str
    "tags": [],  # list
    "teamId": "example_teamId",  # str
    "teamSlug": "example_teamSlug",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Vcr().list({"id_or_name": "example", "project_id": "example"})
for vcr in results:
    print(vcr)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Vcr().load({"id_or_name": "id_or_name", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Vcr().remove({"id_or_name": "id_or_name", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Vcr().update({
    "project_slug": "project_slug",
    "repository_name": "repository_name",
    "team_slug": "team_slug",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VcrEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VcrImageListEntity

```python
vcr_image_list = client.VcrImageList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arch` | `str` | No | CPU architecture the manifest targets. |
| `createdAt` | `str` | Yes | ISO 8601 timestamp of when the image was created. |
| `id` | `str` | Yes | Internal identifier of the image. |
| `kind` | `str` | Yes | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `manifestDigest` | `str` | Yes | SHA-256 digest of the image manifest. |
| `platform` | `str` | No | Operating system the manifest targets. |
| `pushedBy` | `str` | No | Identifier of the actor that pushed the image. |
| `repositoryId` | `str` | Yes | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `float` | Yes | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `str` | Yes | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | `list` | Yes | Tags pointing at this image's manifest. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VcrImageList().list({"id_or_name": "example", "project_id": "example"})
for vcr_image_list in results:
    print(vcr_image_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VcrImageListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VcrRepositoryListEntity

```python
vcr_repository_list = client.VcrRepositoryList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | ISO 8601 timestamp of when the repository was created. |
| `id` | `str` | Yes | Unique identifier of the repository. |
| `name` | `str` | Yes | Name of the repository. |
| `projectId` | `str` | Yes | Identifier of the project the repository belongs to. |
| `public` | `bool` | Yes | Whether the repository is public. |
| `updatedAt` | `str` | Yes | ISO 8601 timestamp of when the repository was last updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VcrRepositoryList().list({"project_id": "example"})
for vcr_repository_list in results:
    print(vcr_repository_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VcrRepositoryListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VcrRepositoryPermissionListEntity

```python
vcr_repository_permission_list = client.VcrRepositoryPermissionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | `str` | Yes | Identifier of the repository the permission grants access to. |
| `teamId` | `str` | Yes | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `str` | Yes | Slug of the team that is granted access to the repository. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VcrRepositoryPermissionList().list({"id_or_name": "example", "project_id": "example"})
for vcr_repository_permission_list in results:
    print(vcr_repository_permission_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VcrRepositoryPermissionListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebAnalyticsEntity

```python
web_analytics = client.WebAnalytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Any` | Yes |  |
| `query` | `dict` | Yes |  |
| `version` | `float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebAnalytics().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebAnalyticsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alertRuleIds` | `list` | No |  |
| `createdAt` | `float` | Yes | A number containing the date when the webhook was created in in milliseconds |
| `events` | `list` | Yes | The webhooks events |
| `id` | `str` | Yes | The webhook id |
| `ownerId` | `str` | Yes | The unique ID of the team the webhook belongs to |
| `projectIds` | `list` | No | The ID of the projects the webhook is associated with |
| `secret` | `str` | Yes | The webhook secret used to sign the payload |
| `updatedAt` | `float` | Yes | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `str` | Yes | A string with the URL of the webhook |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
    "createdAt": 1,  # float
    "events": [],  # list
    "id": "example_id",  # str
    "ownerId": "example_ownerId",  # str
    "secret": "example_secret",  # str
    "updatedAt": 1,  # float
    "url": "example_url",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Webhook().load({"id": "webhook_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"id": "webhook_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = VercelSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

