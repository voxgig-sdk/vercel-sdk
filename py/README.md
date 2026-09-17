# Vercel Python SDK



The Python SDK for the Vercel API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccessGroup()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/vercel-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from vercel_sdk import VercelSDK

client = VercelSDK({
    "apikey": os.environ.get("VERCEL_APIKEY"),
})
```

### 2. List accessgroup records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    accessgroups = client.AccessGroup().list({"id_or_name": "example"})
    for accessgroup in accessgroups:
        print(accessgroup)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an authentication

Authentication is nested under token, so provide the `token_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    authentication = client.Authentication().load({"token_id": "example_token_id"})
    print(authentication)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.AccessGroup().create({"id": "example_id", "accessGroupId": "example_accessGroupId", "createdAt": "example_createdAt", "isDsyncManaged": True, "membersCount": 1, "name": "example_name", "projectId": "example_projectId", "projectsCount": 1, "role": "example_role", "teamId": "example_teamId", "updatedAt": "example_updatedAt"})

# Update — the created record's id is a plain dict key
client.AccessGroup().update({"id": created.data_get()["id"], "access_group_id": "example_access_group_id", "project_id": "example_project_id"})

# Remove
client.AccessGroup().remove({"id": created.data_get()["id"]})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    bulkredirects = client.BulkRedirect().list()
    print(bulkredirects)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = VercelSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
bulkredirect = client.BulkRedirect().list()
# bulkredirect contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = VercelSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
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
cd py && pytest test/
```


## Reference

### VercelSDK

```python
from vercel_sdk import VercelSDK

client = VercelSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = VercelSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### VercelSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `AccessGroup` | `(data) -> AccessGroupEntity` | Create an AccessGroup entity instance. |
| `AiGateway` | `(data) -> AiGatewayEntity` | Create an AiGateway entity instance. |
| `AiGatewayRule` | `(data) -> AiGatewayRuleEntity` | Create an AiGatewayRule entity instance. |
| `AiGatewayRuleList` | `(data) -> AiGatewayRuleListEntity` | Create an AiGatewayRuleList entity instance. |
| `AiGatewayVirtualModelConfig` | `(data) -> AiGatewayVirtualModelConfigEntity` | Create an AiGatewayVirtualModelConfig entity instance. |
| `AiGatewayVirtualModelConfigList` | `(data) -> AiGatewayVirtualModelConfigListEntity` | Create an AiGatewayVirtualModelConfigList entity instance. |
| `Alias` | `(data) -> AliasEntity` | Create an Alias entity instance. |
| `ApiAiGateway` | `(data) -> ApiAiGatewayEntity` | Create an ApiAiGateway entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `Artifact` | `(data) -> ArtifactEntity` | Create an Artifact entity instance. |
| `Authentication` | `(data) -> AuthenticationEntity` | Create an Authentication entity instance. |
| `Billing` | `(data) -> BillingEntity` | Create a Billing entity instance. |
| `BulkRedirect` | `(data) -> BulkRedirectEntity` | Create a BulkRedirect entity instance. |
| `Cert` | `(data) -> CertEntity` | Create a Cert entity instance. |
| `Check` | `(data) -> CheckEntity` | Create a Check entity instance. |
| `ChecksV2` | `(data) -> ChecksV2Entity` | Create a ChecksV2 entity instance. |
| `Connect` | `(data) -> ConnectEntity` | Create a Connect entity instance. |
| `ConnectConnector` | `(data) -> ConnectConnectorEntity` | Create a ConnectConnector entity instance. |
| `ConnectConnectorList` | `(data) -> ConnectConnectorListEntity` | Create a ConnectConnectorList entity instance. |
| `ConnectConnectorProjectConnectionList` | `(data) -> ConnectConnectorProjectConnectionListEntity` | Create a ConnectConnectorProjectConnectionList entity instance. |
| `ConnectProjectConnection` | `(data) -> ConnectProjectConnectionEntity` | Create a ConnectProjectConnection entity instance. |
| `ConnectProjectConnectorConnectionList` | `(data) -> ConnectProjectConnectorConnectionListEntity` | Create a ConnectProjectConnectorConnectionList entity instance. |
| `Deployment` | `(data) -> DeploymentEntity` | Create a Deployment entity instance. |
| `Dns` | `(data) -> DnsEntity` | Create a Dns entity instance. |
| `Domain` | `(data) -> DomainEntity` | Create a Domain entity instance. |
| `DomainsRegistrar` | `(data) -> DomainsRegistrarEntity` | Create a DomainsRegistrar entity instance. |
| `Drain` | `(data) -> DrainEntity` | Create a Drain entity instance. |
| `EdgeCache` | `(data) -> EdgeCacheEntity` | Create an EdgeCache entity instance. |
| `Env` | `(data) -> EnvEntity` | Create an Env entity instance. |
| `Environment` | `(data) -> EnvironmentEntity` | Create an Environment entity instance. |
| `FeatureFlag` | `(data) -> FeatureFlagEntity` | Create a FeatureFlag entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `Flag` | `(data) -> FlagEntity` | Create a Flag entity instance. |
| `FlagsSdkKeyWithSecret` | `(data) -> FlagsSdkKeyWithSecretEntity` | Create a FlagsSdkKeyWithSecret entity instance. |
| `GlobalConfig` | `(data) -> GlobalConfigEntity` | Create a GlobalConfig entity instance. |
| `GlobalConfigItem` | `(data) -> GlobalConfigItemEntity` | Create a GlobalConfigItem entity instance. |
| `GlobalConfigToken` | `(data) -> GlobalConfigTokenEntity` | Create a GlobalConfigToken entity instance. |
| `Integration` | `(data) -> IntegrationEntity` | Create an Integration entity instance. |
| `Kms` | `(data) -> KmsEntity` | Create a Kms entity instance. |
| `ListEventType` | `(data) -> ListEventTypeEntity` | Create a ListEventType entity instance. |
| `Log` | `(data) -> LogEntity` | Create a Log entity instance. |
| `LogDrain` | `(data) -> LogDrainEntity` | Create a LogDrain entity instance. |
| `Marketplace` | `(data) -> MarketplaceEntity` | Create a Marketplace entity instance. |
| `Microfrontend` | `(data) -> MicrofrontendEntity` | Create a Microfrontend entity instance. |
| `Network` | `(data) -> NetworkEntity` | Create a Network entity instance. |
| `Networking` | `(data) -> NetworkingEntity` | Create a Networking entity instance. |
| `Observability` | `(data) -> ObservabilityEntity` | Create an Observability entity instance. |
| `PrivateLinkEndpoint` | `(data) -> PrivateLinkEndpointEntity` | Create a PrivateLinkEndpoint entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |
| `ProjectMember` | `(data) -> ProjectMemberEntity` | Create a ProjectMember entity instance. |
| `ProjectRoute` | `(data) -> ProjectRouteEntity` | Create a ProjectRoute entity instance. |
| `Query` | `(data) -> QueryEntity` | Create a Query entity instance. |
| `Record` | `(data) -> RecordEntity` | Create a Record entity instance. |
| `RollingRelease` | `(data) -> RollingReleaseEntity` | Create a RollingRelease entity instance. |
| `Sandbox` | `(data) -> SandboxEntity` | Create a Sandbox entity instance. |
| `Schema` | `(data) -> SchemaEntity` | Create a Schema entity instance. |
| `Security` | `(data) -> SecurityEntity` | Create a Security entity instance. |
| `Segment` | `(data) -> SegmentEntity` | Create a Segment entity instance. |
| `Storage` | `(data) -> StorageEntity` | Create a Storage entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `TldName` | `(data) -> TldNameEntity` | Create a TldName entity instance. |
| `Toggle` | `(data) -> ToggleEntity` | Create a Toggle entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `Vcr` | `(data) -> VcrEntity` | Create a Vcr entity instance. |
| `VcrImageList` | `(data) -> VcrImageListEntity` | Create a VcrImageList entity instance. |
| `VcrRepositoryList` | `(data) -> VcrRepositoryListEntity` | Create a VcrRepositoryList entity instance. |
| `VcrRepositoryPermissionList` | `(data) -> VcrRepositoryPermissionListEntity` | Create a VcrRepositoryPermissionList entity instance. |
| `WebAnalytics` | `(data) -> WebAnalyticsEntity` | Create a WebAnalytics entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Operations: Create, List, Load, Remove, Update.

API path: `/v1/access-groups/{accessGroupIdOrName}/projects`

#### AiGateway

| Field | Description |
| --- | --- |

Operations: Remove.

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

Operations: Create, Update.

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

Operations: List.

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

Operations: Create, Load, Update.

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

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

API path: `/v2/deployments/{id}/aliases`

#### ApiAiGateway

| Field | Description |
| --- | --- |

Operations: Load, Remove.

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

Operations: Create.

API path: `/api-keys`

#### Artifact

| Field | Description |
| --- | --- |
| `hashes` | artifact hashes |
| `id` |  |

Operations: Create, Load, Remove, Update.

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

Operations: Create, Load, Remove.

API path: `/v3/user/tokens`

#### Billing

| Field | Description |
| --- | --- |

Operations: Create, Load.

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

Operations: Create, List, Load, Patch, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, List, Load, Update.

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

Operations: Create, Remove.

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

Operations: Create, Load, Update.

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

Operations: List.

API path: `/v2/connect/connectors`

#### ConnectConnectorProjectConnectionList

| Field | Description |
| --- | --- |
| `connectorId` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | Environments where the connector is enabled for the project. |
| `project` | Vercel project connected to the connector. |
| `updatedAt` | Time when the project connection was last updated, in epoch milliseconds. |

Operations: List.

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

Operations: Create, Load.

API path: `/v1/connect/connectors/{connector}/projects/{projectId}`

#### ConnectProjectConnectorConnectionList

| Field | Description |
| --- | --- |
| `connectorId` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | Environments where the connector is enabled for the project. |
| `project` | Vercel project connected to the connector. |
| `updatedAt` | Time when the project connection was last updated, in epoch milliseconds. |

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, Load, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, Load, Update.

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

Operations: Create, Load, Remove, Update.

API path: `/v1/drains`

#### EdgeCache

| Field | Description |
| --- | --- |

Operations: Create.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: List, Load, Patch, Remove, Update.

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

Operations: List.

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

Operations: Load.

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

Operations: Update.

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

Operations: Create, List, Load, Patch, Remove, Update.

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

Operations: List, Load.

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

Operations: Load.

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

Operations: Create, List, Load, Remove.

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

Operations: Create, List, Load, Remove, Update.

API path: `/v1/kms/issuers/{issuerId}/keys/{keyId}/activate`

#### ListEventType

| Field | Description |
| --- | --- |
| `categories` |  |
| `types` |  |

Operations: List.

API path: `/v1/events/types`

#### Log

| Field | Description |
| --- | --- |

Operations: Load.

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

Operations: Create, List, Load, Remove.

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

Operations: Create, List, Load, Patch, Remove, Update.

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

Operations: Create, List, Load.

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

Operations: Create, List, Load, Remove, Update.

API path: `/v1/connect/networks`

#### Networking

| Field | Description |
| --- | --- |
| `builds` | Whether to use Static IPs for builds. |
| `regions` |  |

Operations: Remove, Update.

API path: `/v1/networking/privatelink/endpoints/{endpointId}`

#### Observability

| Field | Description |
| --- | --- |
| `disabled` | Whether Observability Plus should be disabled for the project |
| `disabledAt` |  |
| `id` |  |
| `name` |  |

Operations: List, Update.

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

Operations: Create, List, Load, Update.

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

Operations: Create, Load, Patch, Remove, Update.

API path: `/v1/projects/{projectId}/rollback/{deploymentId}`

#### ProjectMember

| Field | Description |
| --- | --- |
| `email` | The email of the team member that should be added to this project. |
| `id` |  |
| `role` | The project role of the member that will be added. |
| `uid` | The ID of the team member that should be added to this project. |
| `username` | The username of the team member that should be added to this project. |

Operations: Create, Load, Remove.

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

Operations: Create, List, Load, Patch, Remove, Update.

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

Operations: Create.

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

Operations: Load.

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

Operations: Create, Load, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: List, Load.

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

Operations: Create, List, Load, Patch, Remove, Update.

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

Operations: Load.

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

Operations: Create, Load, Remove.

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

Operations: Create, List, Load, Remove, Update.

API path: `/v1/teams/{teamId}/dsync-roles`

#### TldName

| Field | Description |
| --- | --- |

Operations: List.

API path: `/v1/registrar/tlds/supported`

#### Toggle

| Field | Description |
| --- | --- |
| `value` |  |

Operations: Create.

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

Operations: List, Load, Remove.

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

Operations: Create, List, Load, Patch, Remove, Update.

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

Operations: List.

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

Operations: List.

API path: `/v1/vcr/repository`

#### VcrRepositoryPermissionList

| Field | Description |
| --- | --- |
| `createdAt` | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | Identifier of the repository the permission grants access to. |
| `teamId` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | Slug of the team that is granted access to the repository. |

Operations: List.

API path: `/v1/vcr/repository/{idOrName}/permissions`

#### WebAnalytics

| Field | Description |
| --- | --- |
| `data` |  |
| `query` |  |
| `version` |  |

Operations: Load.

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

Operations: Create, Load, Remove.

API path: `/v1/webhooks`



## Entities


### AccessGroup

Create an instance: `access_group = client.AccessGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessGroupId` | `str` | ID of the access group. |
| `createdAt` | `str` | Timestamp in milliseconds when the access group was created. |
| `entitlements` | `list` |  |
| `id` | `str` |  |
| `isDsyncManaged` | `bool` |  |
| `membersCount` | `float` | Number of members in the access group. |
| `membersToAdd` | `list` | List of members to add to the access group. |
| `membersToRemove` | `list` | List of members to remove from the access group. |
| `name` | `str` | The name of this access group. |
| `projectId` | `str` |  |
| `projects` | `list` |  |
| `projectsCount` | `float` | Number of projects in the access group. |
| `role` | `str` | The project role that will be added to this Access Group. |
| `teamId` | `str` | ID of the team that this access group belongs to. |
| `teamPermissions` | `list` | Permissions that the team has in the access group. |
| `teamRoles` | `list` | Roles that the team has in the access group. |
| `updatedAt` | `str` | Timestamp in milliseconds when the access group was last updated. |

#### Example: Load

```python
access_group = client.AccessGroup().load({"id": "access_group_id"})
```

#### Example: List

```python
access_groups = client.AccessGroup().list({"id_or_name": "example"})
```

#### Example: Create

```python
access_group = client.AccessGroup().create({
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


### AiGateway

Create an instance: `ai_gateway = client.AiGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AiGatewayRule

Create an instance: `ai_gateway_rule = client.AiGatewayRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `dict` |  |
| `createdAt` | `float` |  |
| `createdBy` | `str` |  |
| `deleted` | `bool` |  |
| `description` | `str` |  |
| `enabled` | `bool` |  |
| `match` | `dict` |  |
| `ownerId` | `str` |  |
| `ruleId` | `str` |  |
| `type` | `str` |  |
| `updatedAt` | `float` |  |
| `updatedBy` | `str` |  |

#### Example: Create

```python
ai_gateway_rule = client.AiGatewayRule().create({
    "createdAt": 1,  # float
    "enabled": True,  # bool
    "ownerId": "example_ownerId",  # str
    "ruleId": "example_ruleId",  # str
    "type": "example_type",  # str
    "updatedAt": 1,  # float
})
```


### AiGatewayRuleList

Create an instance: `ai_gateway_rule_list = client.AiGatewayRuleList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `dict` |  |
| `createdAt` | `float` |  |
| `createdBy` | `str` |  |
| `deleted` | `bool` |  |
| `description` | `str` |  |
| `enabled` | `bool` |  |
| `match` | `dict` |  |
| `ownerId` | `str` |  |
| `ruleId` | `str` |  |
| `type` | `str` |  |
| `updatedAt` | `float` |  |
| `updatedBy` | `str` |  |

#### Example: List

```python
ai_gateway_rule_lists = client.AiGatewayRuleList().list()
```


### AiGatewayVirtualModelConfig

Create an instance: `ai_gateway_virtual_model_config = client.AiGatewayVirtualModelConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowFallbackFromFast` | `bool` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `str` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `list` | BYOK credential IDs allowed for this VMC. |
| `caching` | `str` | Use caching if available. |
| `createdAt` | `float` | Creation timestamp (epoch ms). |
| `createdBy` | `str` | User or app id that created this VMC. |
| `deleted` | `bool` | Whether this VMC is soft-deleted. |
| `description` | `str` | Optional description for UI. |
| `disallowPromptTraining` | `bool` | Only use providers that will not train on your prompts. |
| `displayName` | `str` | Human-readable name for UI. |
| `has` | `list` | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | Only use HIPAA-compliant providers. |
| `id` | `str` |  |
| `inferenceRegion` | `dict` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `str` | The concrete model-provider instance this VMC resolves to. |
| `kind` | `str` | VMC kind: alias, relay, or router. |
| `modelSlug` | `str` | Canonical model slug this VMC maps to (e.g. |
| `models` | `list` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `list` | Observability tags attached to requests through this VMC. |
| `ownerId` | `str` | Team (owner) that owns this VMC. |
| `providerOnly` | `list` | Restrict routing to only these providers. |
| `providerOptions` | `dict` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `list` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `dict` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `list` | For kind=router: capability tags a candidate must have. |
| `selector` | `str` | For kind=router: how to order candidates. |
| `serviceTier` | `str` | Service tier for providers that support it. |
| `sort` | `str` | Rank eligible providers by an attribute. |
| `speed` | `str` | Only use fastest providers with short timeouts. |
| `status` | `str` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float` | Last update timestamp (epoch ms). |
| `updatedBy` | `str` | User or app id that last updated this VMC. |
| `virtualModelSlug` | `str` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `str` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | Only use providers with zero data retention. |

#### Example: Load

```python
ai_gateway_virtual_model_config = client.AiGatewayVirtualModelConfig().load({"id": "ai_gateway_virtual_model_config_id"})
```

#### Example: Create

```python
ai_gateway_virtual_model_config = client.AiGatewayVirtualModelConfig().create({
    "createdAt": 1,  # float
    "deleted": True,  # bool
    "kind": "example_kind",  # str
    "ownerId": "example_ownerId",  # str
    "status": "example_status",  # str
    "updatedAt": 1,  # float
    "virtualModelSlug": "example_virtualModelSlug",  # str
})
```


### AiGatewayVirtualModelConfigList

Create an instance: `ai_gateway_virtual_model_config_list = client.AiGatewayVirtualModelConfigList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowFallbackFromFast` | `bool` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `str` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `list` | BYOK credential IDs allowed for this VMC. |
| `caching` | `str` | Use caching if available. |
| `createdAt` | `float` | Creation timestamp (epoch ms). |
| `createdBy` | `str` | User or app id that created this VMC. |
| `deleted` | `bool` | Whether this VMC is soft-deleted. |
| `description` | `str` | Optional description for UI. |
| `disallowPromptTraining` | `bool` | Only use providers that will not train on your prompts. |
| `displayName` | `str` | Human-readable name for UI. |
| `has` | `list` | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `dict` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `str` | The concrete model-provider instance this VMC resolves to. |
| `kind` | `str` | VMC kind: alias, relay, or router. |
| `modelSlug` | `str` | Canonical model slug this VMC maps to (e.g. |
| `models` | `list` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `list` | Observability tags attached to requests through this VMC. |
| `ownerId` | `str` | Team (owner) that owns this VMC. |
| `providerOnly` | `list` | Restrict routing to only these providers. |
| `providerOptions` | `dict` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `list` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `dict` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `list` | For kind=router: capability tags a candidate must have. |
| `selector` | `str` | For kind=router: how to order candidates. |
| `serviceTier` | `str` | Service tier for providers that support it. |
| `sort` | `str` | Rank eligible providers by an attribute. |
| `speed` | `str` | Only use fastest providers with short timeouts. |
| `status` | `str` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float` | Last update timestamp (epoch ms). |
| `updatedBy` | `str` | User or app id that last updated this VMC. |
| `virtualModelSlug` | `str` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `str` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | Only use providers with zero data retention. |

#### Example: List

```python
ai_gateway_virtual_model_config_lists = client.AiGatewayVirtualModelConfigList().list()
```


### Alias

Create an instance: `alias = client.Alias()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `str` | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | `str` | The date when the alias was created |
| `createdAt` | `float` | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `dict` | Information of the user who created the alias |
| `deletedAt` | `float` | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `dict` | A map with the deployment ID, URL and metadata |
| `deploymentId` | `str` | The deployment ID |
| `id` | `str` |  |
| `microfrontends` | `dict` | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `str` | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `str` | The unique identifier of the project |
| `protectionBypass` | `dict` | The protection bypass for the alias |
| `redirect` | `str` | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | `float` | Status code to be used on redirect |
| `uid` | `str` | The unique identifier of the alias |
| `updatedAt` | `float` | The date when the alias was updated in milliseconds since the UNIX epoch |

#### Example: Load

```python
alias = client.Alias().load({"id": "alias_id"})
```

#### Example: List

```python
aliass = client.Alias().list()
```

#### Example: Create

```python
alias = client.Alias().create({
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


### ApiAiGateway

Create an instance: `api_ai_gateway = client.ApiAiGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```python
api_ai_gateway = client.ApiAiGateway().load()
```


### ApiKey

Create an instance: `api_key = client.ApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeAt` | `float` | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `dict` | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `float` | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `str` | The ID of the user who created the API key. |
| `createdByAppId` | `str` | The ID of the app that created the API key, if any |
| `expiresAt` | `float` | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `str` | The unique identifier of the API key. |
| `leakedAt` | `float` | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `str` | URL where the API key was discovered as leaked. |
| `metadata` | `dict` | Generic metadata attached to the API key. |
| `name` | `str` | The human-readable name of the API key. |
| `partialKey` | `str` | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `str` | The ID of the project that this API key grants access to. |
| `purpose` | `str` | The API key's purpose, i.e. |
| `quota` | `dict` | AI Gateway quota associated with an API key. |
| `teamId` | `str` | The ID of the team that the API key grants access to. |

#### Example: Create

```python
api_key = client.ApiKey().create({
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


### Artifact

Create an instance: `artifact = client.Artifact()`

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
| `hashes` | `list` | artifact hashes |
| `id` | `str` |  |

#### Example: Load

```python
artifact = client.Artifact().load({"id": "artifact_id"})
```

#### Example: Create

```python
artifact = client.Artifact().create({
    "hashes": [],  # list
})
```


### Authentication

Create an instance: `authentication = client.Authentication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeAt` | `float` | Timestamp (in milliseconds) of when the token was most recently used. |
| `createdAt` | `float` | Timestamp (in milliseconds) of when the token was created. |
| `expiresAt` | `float` | Timestamp (in milliseconds) of when the token expires. |
| `id` | `str` | The unique identifier of the token. |
| `leakedAt` | `float` | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | `str` | URL where the token was discovered as leaked. |
| `name` | `str` | The human-readable name of the token. |
| `origin` | `str` | The origin of how the token was created. |
| `prefix` | `str` | The token's prefix, for identification purposes. |
| `projectId` | `str` | The ID of the project to scope this token to |
| `revokedAt` | `float` | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | `list` | The access scopes granted to the token. |
| `suffix` | `str` | The last few characters of the token, for identification purposes. |
| `type` | `str` | The type of the token. |

#### Example: Load

```python
authentication = client.Authentication().load({"token_id": "token_id"})
```

#### Example: Create

```python
authentication = client.Authentication().create({
    "activeAt": 1,  # float
    "createdAt": 1,  # float
    "id": "example_id",  # str
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```


### Billing

Create an instance: `billing = client.Billing()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
billing = client.Billing().load({"from": "from", "to": "to"})
```

#### Example: Create

```python
billing = client.Billing().create({
})
```


### BulkRedirect

Create an instance: `bulk_redirect = client.BulkRedirect()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `str` | The staging link for previewing redirects in this version. |
| `createdBy` | `str` |  |
| `id` | `str` | The unique identifier for the version. |
| `isLive` | `bool` | Whether this version is currently live in production. |
| `isStaging` | `bool` | Whether this version has not been promoted to production yet and is not serving end users. |
| `key` | `str` | The key of the version. |
| `lastModified` | `float` |  |
| `name` | `str` | Optional name for the version. |
| `overwrite` | `bool` |  |
| `projectId` | `str` |  |
| `redirect` | `dict` | The redirect object to edit. |
| `redirectCount` | `float` | The number of redirects in this version. |
| `redirects` | `list` |  |
| `restore` | `bool` | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `str` |  |

#### Example: Load

```python
bulk_redirect = client.BulkRedirect().load({"project_id": "project_id"})
```

#### Example: List

```python
bulk_redirects = client.BulkRedirect().list({"project_id": "example"})
```

#### Example: Create

```python
bulk_redirect = client.BulkRedirect().create({
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


### Cert

Create an instance: `cert = client.Cert()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoRenew` | `bool` |  |
| `ca` | `str` | The certificate authority |
| `cert` | `str` | The certificate |
| `cns` | `list` | The common names the cert should be issued for |
| `createdAt` | `float` |  |
| `expiresAt` | `float` |  |
| `id` | `str` |  |
| `key` | `str` | The certificate key |
| `skipValidation` | `bool` | Skip validation of the certificate |

#### Example: Load

```python
cert = client.Cert().load({"id": "cert_id"})
```

#### Example: List

```python
certs = client.Cert().list()
```

#### Example: Create

```python
cert = client.Cert().create({
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


### Check

Create an instance: `check = client.Check()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocking` | `bool` | Whether the check should block a deployment from succeeding |
| `blocks` | `str` |  |
| `completedAt` | `float` |  |
| `conclusion` | `Any` | The result of the check being run |
| `createdAt` | `float` |  |
| `deletedAt` | `float` |  |
| `detailsUrl` | `str` | URL to display for further details |
| `externalId` | `str` | An identifier that can be used as an external reference |
| `id` | `str` |  |
| `integrationId` | `str` |  |
| `isRerequestable` | `bool` |  |
| `metrics` | `dict` |  |
| `name` | `str` | The name of the check being created |
| `output` | `dict` | The results of the check Run |
| `ownerId` | `str` |  |
| `path` | `str` | Path of the page that is being checked |
| `projectId` | `str` |  |
| `requires` | `str` |  |
| `rerequestable` | `bool` | Whether a user should be able to request for the check to be rerun if it fails |
| `source` | `Any` |  |
| `sourceIntegrationConfigurationId` | `str` |  |
| `sourceKind` | `str` |  |
| `startedAt` | `float` |  |
| `status` | `Any` | The current status of the check |
| `targets` | `list` |  |
| `timeout` | `float` |  |
| `updatedAt` | `float` |  |

#### Example: Load

```python
check = client.Check().load({"id": "check_id"})
```

#### Example: List

```python
checks = client.Check().list({"project_id_or_name": "example"})
```

#### Example: Create

```python
check = client.Check().create({
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


### ChecksV2

Create an instance: `checks_v2 = client.ChecksV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checkId` | `str` |  |
| `completedAt` | `float` |  |
| `conclusion` | `str` |  |
| `conclusionText` | `str` |  |
| `externalId` | `str` |  |
| `externalUrl` | `str` |  |
| `output` | `dict` |  |
| `runs` | `list` |  |
| `status` | `str` |  |

#### Example: Load

```python
checks_v2 = client.ChecksV2().load({"check_run_id": "check_run_id", "deployment_id": "deployment_id"})
```

#### Example: List

```python
checks_v2s = client.ChecksV2().list({"deployment_id": "example"})
```

#### Example: Create

```python
checks_v2 = client.ChecksV2().create({
    "deployment_id": "example_deployment_id",  # str
    "checkId": "example_checkId",  # str
    "runs": [],  # list
})
```


### Connect

Create an instance: `connect = client.Connect()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additionalParams` | `dict` |  |
| `audience` | `list` |  |
| `authorizationDetails` | `list` |  |
| `authorizationId` | `str` | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `dict` | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `dict` |  |
| `deviceCode` | `bool` |  |
| `displayName` | `str` | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `float` |  |
| `expiresInMs` | `float` |  |
| `externalSubject` | `str` |  |
| `id` | `str` | Client id (e.g. |
| `installationId` | `str` |  |
| `metadata` | `dict` | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `str` | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `str` |  |
| `resources` | `list` |  |
| `returnUrl` | `str` |  |
| `scopes` | `list` |  |
| `service` | `str` | Resolved service id when known (e.g. |
| `serviceName` | `str` | Curated display name of the resolved service (e.g. |
| `subject` | `Any` |  |
| `tenantId` | `str` |  |
| `token` | `str` |  |
| `tokenGroupId` | `str` | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` | `str` |  |
| `type` | `str` | Client type (e.g. |
| `uid` | `str` | Client uid (e.g. |
| `validityBufferMs` | `float` |  |
| `webhook` | `str` |  |

#### Example: Create

```python
connect = client.Connect().create({
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


### ConnectConnector

Create an instance: `connect_connector = client.ConnectConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `str` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `dict` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `str` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `str` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `str` | The connection method this connector was created from, when the create request named one. |
| `connector` | `dict` | Updated connector. |
| `createdAt` | `float` | Creation time in epoch milliseconds. |
| `createdBy` | `Any` | Principal that created the connector. |
| `creationMode` | `str` | How the connector row was originally created. |
| `data` | `Any` | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `str` | Installation used when a token request does not specify an installation. |
| `destinations` | `list` | Complete replacement set of trigger destinations. |
| `devsite` | `str` | Developer website for the connected service. |
| `displayName` | `str` | Human-readable connector name. |
| `docsite` | `str` | Developer documentation for the connected service. |
| `environments` | `list` | Environments for the project connection. |
| `events` | `list` | Known events this connector subscribes to (e.g. |
| `icon` | `str` | Connector branding icon. |
| `id` | `str` | Stable `scl_` connector ID. |
| `knownStale` | `bool` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `dict` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `str` | Connector name within the owning team. |
| `params` | `dict` | Values for the selected connection method's template fields. |
| `projectId` | `str` | Project to connect during creation. |
| `reconsentNeeded` | `dict` | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `str` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `bool` | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `str` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `dict` | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `list` | Token subject types supported by the connector. |
| `supportsIcon` | `Any` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Whether this connector type supports trigger webhooks. |
| `target` | `str` | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `Any` | Initial trigger destination. |
| `triggerDestinations` | `list` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `dict` | Incoming trigger configuration for the connector. |
| `type` | `str` | Connector implementation type. |
| `typeIcon` | `str` | Icon identifier supplied by the connector type. |
| `typeName` | `str` | Human-readable name of the connector type. |
| `uid` | `str` | Team-scoped UID. |
| `updatedAt` | `float` | Last update time in epoch milliseconds. |
| `updatedBy` | `Any` | Principal that most recently updated the connector. |
| `userTokens` | `dict` | User-token capabilities and known grants for the connector. |
| `website` | `str` | Public website for the connected service. |

#### Example: Load

```python
connect_connector = client.ConnectConnector().load({"id": "connect_connector_id"})
```

#### Example: Create

```python
connect_connector = client.ConnectConnector().create({
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


### ConnectConnectorList

Create an instance: `connect_connector_list = client.ConnectConnectorList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `str` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `dict` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `str` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `str` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `str` | The connection method this connector was created from, when the create request named one. |
| `createdAt` | `float` | Creation time in epoch milliseconds. |
| `createdBy` | `Any` | Principal that created the connector. |
| `creationMode` | `str` | How the connector row was originally created. |
| `defaultInstallationId` | `str` | Installation used when a token request does not specify an installation. |
| `devsite` | `str` | Developer website for the connected service. |
| `displayName` | `str` | Human-readable connector name. |
| `docsite` | `str` | Developer documentation for the connected service. |
| `events` | `list` | Known events this connector subscribes to (e.g. |
| `icon` | `str` | Connector branding icon. |
| `id` | `str` | Stable `scl_` connector ID. |
| `knownStale` | `bool` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `dict` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `str` | Connector name within the owning team. |
| `redirectUri` | `str` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `str` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `list` | Token subject types supported by the connector. |
| `supportsIcon` | `Any` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Whether this connector type supports trigger webhooks. |
| `target` | `str` | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `list` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `dict` | Incoming trigger configuration for the connector. |
| `type` | `str` | Connector implementation type. |
| `typeIcon` | `str` | Icon identifier supplied by the connector type. |
| `typeName` | `str` | Human-readable name of the connector type. |
| `uid` | `str` | Team-scoped UID. |
| `updatedAt` | `float` | Last update time in epoch milliseconds. |
| `updatedBy` | `Any` | Principal that most recently updated the connector. |
| `userTokens` | `dict` | User-token capabilities and known grants for the connector. |
| `website` | `str` | Public website for the connected service. |

#### Example: List

```python
connect_connector_lists = client.ConnectConnectorList().list()
```


### ConnectConnectorProjectConnectionList

Create an instance: `connect_connector_project_connection_list = client.ConnectConnectorProjectConnectionList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `str` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `list` | Environments where the connector is enabled for the project. |
| `project` | `dict` | Vercel project connected to the connector. |
| `updatedAt` | `float` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: List

```python
connect_connector_project_connection_lists = client.ConnectConnectorProjectConnectionList().list({"connector_id": "example"})
```


### ConnectProjectConnection

Create an instance: `connect_project_connection = client.ConnectProjectConnection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `str` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `list` | Environments where the connector is enabled for the project. |
| `environments` | `list` | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `dict` | Vercel project connected to the connector. |
| `updatedAt` | `float` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: Load

```python
connect_project_connection = client.ConnectProjectConnection().load({"connector_id": "connector_id", "project_id": "project_id"})
```

#### Example: Create

```python
connect_project_connection = client.ConnectProjectConnection().create({
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


### ConnectProjectConnectorConnectionList

Create an instance: `connect_project_connector_connection_list = client.ConnectProjectConnectorConnectionList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `str` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `list` | Environments where the connector is enabled for the project. |
| `project` | `dict` | Vercel project connected to the connector. |
| `updatedAt` | `float` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: List

```python
connect_project_connector_connection_lists = client.ConnectProjectConnectorConnectionList().list({"project_id": "example"})
```


### Deployment

Create an instance: `deployment = client.Deployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aliasAssigned` | `Any` |  |
| `aliasError` | `dict` | An error object in case aliasing of the deployment failed. |
| `attribution` | `dict` | Commit attribution metadata |
| `buildMachine` | `str` | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `float` | Timestamp of when the deployment started building at. |
| `checks` | `dict` | Detailed information about v2 deployment checks. |
| `checksConclusion` | `str` | Conclusion for checks |
| `checksState` | `str` | State of all registered checks |
| `connectBuildsEnabled` | `bool` | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `str` | The ID of Secure Compute network used for this deployment |
| `created` | `float` | Timestamp of when the deployment got created. |
| `createdAt` | `float` |  |
| `creator` | `dict` | Metadata information of the deployment creator. |
| `customEnvironment` | `dict` | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `str` | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `str` | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `float` | Timestamp of when the deployment got deleted. |
| `deploymentId` | `str` | The ID of an existing deployment to redeploy. |
| `errorCode` | `str` | Error code when the deployment is in an error state. |
| `errorMessage` | `str` | Error message when the deployment is in an canceled or error state. |
| `expiration` | `float` | The expiration configured by the project retention policy |
| `files` | `list` | The files to include in the deployment. |
| `gitAccessToken` | `str` | Available only to Vercel platform accounts. |
| `gitMetadata` | `dict` | Populates initial git metadata for different git providers. |
| `gitSource` | `Any` | Defines the Git Repository source to be deployed. |
| `id` | `str` |  |
| `inspectorUrl` | `str` | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `bool` | Deployment can be used for instant rollback |
| `manualProvisioning` | `dict` |  |
| `meta` | `dict` | An object containing the deployment's metadata. |
| `monorepoManager` | `str` | The monorepo manager that is being used for this deployment. |
| `name` | `str` | A string with the project name used in the deployment URL |
| `oomReport` | `str` | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `list` |  |
| `passiveConnectConfigurationId` | `str` | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `dict` | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `bool` |  |
| `project` | `str` | The target project identifier in which the deployment will be created. |
| `projectId` | `str` | The project ID of the deployment |
| `projectSettings` | `dict` | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `float` | The expiration proposed to replace the existing expiration |
| `ready` | `float` | Timestamp of when the deployment got ready. |
| `readyState` | `str` |  |
| `readySubstate` | `str` | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `dict` | NSNB Blocked metadata |
| `softDeletedByRetention` | `bool` | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | `str` | The source of the deployment. |
| `state` | `str` | In which state is the deployment. |
| `status` | `str` |  |
| `statusText` | `str` |  |
| `statusUrl` | `str` |  |
| `target` | `str` | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | `str` | The type of the deployment. |
| `uid` | `str` | The unique identifier of the deployment. |
| `undeleted` | `float` | Timestamp of when the deployment was undeleted. |
| `url` | `str` | The URL of the deployment. |
| `withLatestCommit` | `bool` | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

#### Example: Load

```python
deployment = client.Deployment().load({"id": "deployment_id"})
```

#### Example: List

```python
deployments = client.Deployment().list()
```

#### Example: Create

```python
deployment = client.Deployment().create({
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


### Dns

Create an instance: `dns = client.Dns()`

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
| `comment` | `str` | A comment to add context on what this DNS record is for |
| `createdAt` | `float` |  |
| `creator` | `str` |  |
| `domain` | `str` |  |
| `https` | `dict` |  |
| `id` | `str` |  |
| `mxPriority` | `int` | The MX priority value of the DNS record |
| `name` | `str` | The name of the DNS record |
| `recordType` | `str` |  |
| `srv` | `dict` |  |
| `ttl` | `float` | The Time to live (TTL) value of the DNS record |
| `type` | `str` | The type of record, it could be one of the valid DNS records. |
| `value` | `str` | The value of the DNS record |

#### Example: Load

```python
dns = client.Dns().load({"domain_id": "domain_id"})
```

#### Example: Create

```python
dns = client.Dns().create({
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


### Domain

Create an instance: `domain = client.Domain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `boughtAt` | `float` | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `float` | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `dict` | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `list` | A list of custom nameservers for the domain to point to. |
| `echMode` | `str` | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `float` | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `str` | The unique identifier of the domain. |
| `intendedNameservers` | `list` | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `str` | The domain operation to perform. |
| `name` | `str` | The domain name. |
| `nameservers` | `list` | A list of the current nameservers of the domain. |
| `renew` | `bool` | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `str` | The type of service the domain is handled by. |
| `suffix` | `bool` |  |
| `teamId` | `str` |  |
| `transferStartedAt` | `float` | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `float` | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `str` |  |
| `verified` | `bool` | If the domain has the ownership verified. |

#### Example: Load

```python
domain = client.Domain().load({"id": "domain_id"})
```

#### Example: List

```python
domains = client.Domain().list()
```

#### Example: Create

```python
domain = client.Domain().create({
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


### DomainsRegistrar

Create an instance: `domains_registrar = client.DomainsRegistrar()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authCode` | `str` | The auth code for the domain. |
| `autoRenew` | `bool` | Whether the domain should be auto-renewed before it expires. |
| `available` | `bool` |  |
| `contactInformation` | `dict` | The contact information for the domain. |
| `domains` | `list` | an array of at most 50 item(s) |
| `error` | `Any` |  |
| `expectedPrice` | `float` |  |
| `languageCode` | `str` | The language code for the domain. |
| `nameservers` | `list` |  |
| `orderId` | `str` | A valid order ID |
| `purchasePrice` | `Any` |  |
| `renewalPrice` | `Any` |  |
| `results` | `list` |  |
| `status` | `str` |  |
| `transferPrice` | `Any` |  |
| `years` | `float` | The number of years the returned price is for. |

#### Example: Load

```python
domains_registrar = client.DomainsRegistrar().load({"order_id": "order_id"})
```

#### Example: Create

```python
domains_registrar = client.DomainsRegistrar().create({
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


### Drain

Create an instance: `drain = client.Drain()`

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
| `delivery` | `dict` |  |
| `drains` | `Any` |  |
| `filter` | `dict` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `projectIds` | `list` |  |
| `projects` | `str` |  |
| `sampling` | `list` |  |
| `schemas` | `dict` |  |
| `source` | `dict` |  |
| `status` | `str` |  |
| `transforms` | `list` |  |

#### Example: Load

```python
drain = client.Drain().load({"id": "drain_id"})
```

#### Example: Create

```python
drain = client.Drain().create({
    "drains": "example_drains",  # Any
    "filter": {},  # dict
    "name": "example_name",  # str
    "projects": "example_projects",  # str
    "schemas": {},  # dict
})
```


### EdgeCache

Create an instance: `edge_cache = client.EdgeCache()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
edge_cache = client.EdgeCache().create({
    "project_id_or_name": "example_project_id_or_name",  # str
})
```


### Env

Create an instance: `env = client.Env()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `applyToAllCustomEnvironments` | `bool` | whether or not this env varible applies to custom environments |
| `comment` | `str` | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `str` | The date when the Shared Env Var was created. |
| `createdAt` | `float` | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `str` | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `list` | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `bool` | whether or not this env variable is decrypted |
| `deletedAt` | `float` | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `str` | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `list` |  |
| `failed` | `list` |  |
| `id` | `str` | The unique identifier of the Shared Env Var. |
| `key` | `str` | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `str` | The last editor full name or username. |
| `ownerId` | `str` | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `list` | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `list` |  |
| `target` | `list` | environments this env variable targets |
| `type` | `str` | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `list` |  |
| `updatedAt` | `float` | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `str` | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `dict` | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
| `value` | `str` | The value of the Shared Env Var. |

#### Example: Load

```python
env = client.Env().load({"id": "env_id"})
```

#### Example: List

```python
envs = client.Env().list()
```

#### Example: Create

```python
env = client.Env().create({
    "evs": [],  # list
    "failed": [],  # list
    "securityIssues": [],  # list
    "updated": [],  # list
    "updates": {},  # dict
})
```


### Environment

Create an instance: `environment = client.Environment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branchMatcher` | `dict` | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `str` | Where to copy environment variables from. |
| `createdAt` | `float` | Timestamp when the environment was created |
| `currentDeploymentAliases` | `list` | List of aliases for the current deployment |
| `description` | `str` | Optional description of the environment's purpose |
| `domains` | `list` | List of domains associated with this environment |
| `id` | `str` | Unique identifier for the custom environment (format: env_*) |
| `slug` | `str` | URL-friendly name of the environment |
| `type` | `str` | The type of environment (production, preview, or development) |
| `updatedAt` | `float` | Timestamp when the environment was last updated |

#### Example: Load

```python
environment = client.Environment().load({"environment_slug_or_id": "environment_slug_or_id", "project_id": "project_id"})
```

#### Example: List

```python
environments = client.Environment().list({"id_or_name": "example"})
```

#### Example: Create

```python
environment = client.Environment().create({
    "id_or_name": "example_id_or_name",  # str
    "branchMatcher": {},  # dict
    "createdAt": 1,  # float
    "id": "example_id",  # str
    "type": "example_type",  # str
    "updatedAt": 1,  # float
})
```


### FeatureFlag

Create an instance: `feature_flag = client.FeatureFlag()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changedEnvironments` | `list` |  |
| `createdAt` | `float` |  |
| `createdBy` | `str` | The user who created this patch |
| `data` | `dict` | The data of the segment |
| `description` | `str` | A description of the flag |
| `environments` | `dict` | The configuration for the flag in different environments |
| `flagId` | `str` |  |
| `flags` | `list` |  |
| `hint` | `str` |  |
| `id` | `str` |  |
| `kind` | `str` | The kind of flag |
| `label` | `str` |  |
| `maintainerIds` | `list` | The user ids of the maintainers of the flag |
| `message` | `str` | Additional message for this version |
| `metadata` | `dict` |  |
| `operations` | `list` |  |
| `ownerId` | `str` |  |
| `pagination` | `dict` |  |
| `permanent` | `bool` | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `str` |  |
| `revision` | `float` |  |
| `seed` | `float` | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `str` | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `str` |  |
| `status` | `dict` |  |
| `tags` | `list` | Tags for categorizing the flag |
| `typeName` | `str` |  |
| `updatedAt` | `float` |  |
| `updatedBy` | `str` |  |
| `variants` | `list` | The variants of the flag |

#### Example: Load

```python
feature_flag = client.FeatureFlag().load({"team_id": "team_id"})
```

#### Example: List

```python
feature_flags = client.FeatureFlag().list({"deployment_id": "example"})
```


### File

Create an instance: `file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `list` | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `str` | The content-type of the file (only valid for the `file` type) |
| `mode` | `float` | The file "mode" indicating file type and permissions. |
| `name` | `str` | The name of the file tree entry |
| `type` | `str` | String indicating the type of file tree entry. |
| `uid` | `str` | The unique identifier of the file (only valid for the `file` type) |

#### Example: List

```python
files = client.File().list({"deployment_id": "example"})
```


### Flag

Create an instance: `flag = client.Flag()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `createdBy` | `str` |  |
| `description` | `str` |  |
| `environments` | `dict` |  |
| `id` | `str` |  |
| `kind` | `str` |  |
| `maintainerIds` | `list` |  |
| `metadata` | `dict` |  |
| `ownerId` | `str` |  |
| `permanent` | `bool` |  |
| `projectId` | `str` |  |
| `revision` | `float` |  |
| `seed` | `float` |  |
| `slug` | `str` |  |
| `state` | `str` |  |
| `tags` | `list` |  |
| `typeName` | `str` |  |
| `updatedAt` | `float` |  |
| `updatedBy` | `str` |  |
| `variants` | `list` |  |

#### Example: Load

```python
flag = client.Flag().load({"id": "flag_id", "project_id": "project_id"})
```


### FlagsSdkKeyWithSecret

Create an instance: `flags_sdk_key_with_secret = client.FlagsSdkKeyWithSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `createdBy` | `str` |  |
| `deletedAt` | `float` |  |
| `environment` | `str` |  |
| `hashKey` | `str` |  |
| `keyValue` | `str` | Cleartext value of the SDK key. |
| `label` | `str` |  |
| `partialKeyValue` | `str` | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` | `str` |  |
| `sdkKeyType` | `str` |  |
| `tokenValue` | `str` | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` | `str` |  |
| `updatedAt` | `float` |  |


### GlobalConfig

Create an instance: `global_config = client.GlobalConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `createdBy` | `str` | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` | `float` |  |
| `digest` | `str` |  |
| `id` | `str` |  |
| `itemCount` | `float` |  |
| `items` | `dict` |  |
| `ownerId` | `str` |  |
| `purpose` | `Any` |  |
| `schema` | `dict` |  |
| `sizeInBytes` | `float` |  |
| `slug` | `str` | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `float` | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `dict` | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `float` |  |

#### Example: Load

```python
global_config = client.GlobalConfig().load({"id": "global_config_id"})
```

#### Example: List

```python
global_configs = client.GlobalConfig().list({"id": "example_id"})
```

#### Example: Create

```python
global_config = client.GlobalConfig().create({
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


### GlobalConfigItem

Create an instance: `global_config_item = client.GlobalConfigItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `description` | `str` |  |
| `edgeConfigId` | `str` |  |
| `id` | `str` |  |
| `key` | `str` |  |
| `updatedAt` | `float` |  |
| `value` | `Any` |  |

#### Example: Load

```python
global_config_item = client.GlobalConfigItem().load({"id": "global_config_item_id", "global_config_id": "global_config_id"})
```

#### Example: List

```python
global_config_items = client.GlobalConfigItem().list({"id": "example_id"})
```


### GlobalConfigToken

Create an instance: `global_config_token = client.GlobalConfigToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `edgeConfigId` | `str` |  |
| `id` | `str` | This is not the token itself, but rather an id to identify the token by |
| `label` | `str` |  |
| `partialToken` | `str` | A partially-masked representation of the token, safe to display in UIs. |
| `token` | `str` | Deprecated: the full, plaintext token. |

#### Example: Load

```python
global_config_token = client.GlobalConfigToken().load({"id": "global_config_token_id"})
```


### Integration

Create an instance: `integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cost` | `str` |  |
| `description` | `str` |  |
| `details` | `list` |  |
| `disabled` | `bool` |  |
| `effectiveDate` | `str` |  |
| `envVarEnvironments` | `list` |  |
| `highlightedDetails` | `list` |  |
| `id` | `str` |  |
| `initialCharge` | `str` |  |
| `makeEnvVarsSensitive` | `bool` |  |
| `maximumAmount` | `str` |  |
| `maximumAmountAutoPurchasePerPeriod` | `str` |  |
| `metadataSchema` | `dict` |  |
| `minimumAmount` | `str` |  |
| `name` | `str` |  |
| `paymentMethodRequired` | `bool` |  |
| `preauthorizationAmount` | `float` |  |
| `primaryProtocol` | `str` |  |
| `projectId` | `str` |  |
| `protocols` | `dict` |  |
| `quote` | `list` |  |
| `scope` | `str` |  |
| `slug` | `str` |  |
| `type` | `str` |  |

#### Example: Load

```python
integration = client.Integration().load({"id": "integration_id"})
```

#### Example: List

```python
integrations = client.Integration().list({"configuration_id": "example"})
```

#### Example: Create

```python
integration = client.Integration().create({
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


### Kms

Create an instance: `kms = client.Kms()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activation` | `str` | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` | `str` |  |
| `algorithm` | `str` | Algorithm of the signing key. |
| `claims` | `dict` | The claims to include in the token. |
| `claimsSchema` | `dict` | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `str` |  |
| `environments` | `list` | The environments for the project grant policy. |
| `headers` | `dict` | Additional headers to include in the token. |
| `id` | `str` |  |
| `importKey` | `str` | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `str` | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `str` | Key id of the signing key. |
| `key_ops` | `list` |  |
| `kid` | `str` |  |
| `kind` | `str` |  |
| `kty` | `str` |  |
| `managedBy` | `str` |  |
| `message` | `str` | Base64-encoded message to be signed. |
| `name` | `str` | The name of the issuer. |
| `origin` | `str` |  |
| `ownerId` | `str` |  |
| `policies` | `list` |  |
| `projectId` | `str` | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `float` | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `Any` | Deprecated. |
| `signature` | `str` | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `list` |  |
| `token` | `str` |  |
| `tokenClaims` | `dict` | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `float` | The time-to-live for the token, in seconds. |
| `updatedAt` | `str` |  |
| `use` | `str` |  |
| `x5c` | `list` | The X.509 certificate chain (RFC 7517 §4.7). |
| `x5tS256` | `str` | The base64url SHA-256 thumbprint of the DER certificate in `x5c[0]` (RFC 7517 §4.9). |

#### Example: Load

```python
kms = client.Kms().load({"issuer_id": "issuer_id"})
```

#### Example: List

```python
kmss = client.Kms().list()
```

#### Example: Create

```python
kms = client.Kms().create({
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


### ListEventType

Create an instance: `list_event_type = client.ListEventType()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `list` |  |
| `types` | `list` |  |

#### Example: List

```python
list_event_types = client.ListEventType().list()
```


### Log

Create an instance: `log = client.Log()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
log = client.Log().load({"deployment_id": "deployment_id", "project_id": "project_id"})
```


### LogDrain

Create an instance: `log_drain = client.LogDrain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `str` | The branch regexp of log drain |
| `clientId` | `str` | The oauth2 client application id that created this log drain |
| `configurationId` | `str` | The client configuration this log drain was created with |
| `createdAt` | `float` | A timestamp that tells you when the log drain was created |
| `createdFrom` | `str` | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | `Any` | The delivery log format |
| `environments` | `list` | The environment of log drain |
| `headers` | `dict` | Headers to be sent together with the request |
| `id` | `str` | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `str` |  |
| `integrationIcon` | `str` |  |
| `integrationWebsite` | `str` |  |
| `name` | `str` | The custom name of this log drain. |
| `ownerId` | `str` | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `str` |  |
| `projectIds` | `list` | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `list` |  |
| `samplingRate` | `float` | The sampling rate for this log drain. |
| `secret` | `str` | Custom secret of log drain |
| `source` | `Any` |  |
| `sources` | `list` | The sources from which logs are currently being delivered to this log drain. |
| `url` | `str` | The log drain url |

#### Example: Load

```python
log_drain = client.LogDrain().load({"id": "log_drain_id"})
```

#### Example: List

```python
log_drains = client.LogDrain().list()
```

#### Example: Create

```python
log_drain = client.LogDrain().create({
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


### Marketplace

Create an instance: `marketplace = client.Marketplace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `str` |  |
| `already_revoked` | `bool` |  |
| `balances` | `list` |  |
| `billing` | `Any` | Billing data (interim invoicing data). |
| `billingPlan` | `dict` |  |
| `billingPlanId` | `str` | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `str` |  |
| `client_id` | `str` |  |
| `client_secret` | `str` |  |
| `created` | `str` | System creation date. |
| `createdAt` | `float` |  |
| `data` | `dict` |  |
| `description` | `str` |  |
| `discounts` | `list` | Invoice discounts. |
| `email` | `str` |  |
| `eod` | `str` | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `Any` |  |
| `expires_in` | `float` |  |
| `externalId` | `str` | Partner-supplied Invoice ID, if applicable. |
| `extras` | `dict` |  |
| `final` | `bool` | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `str` |  |
| `id` | `str` | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `str` | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `str` | Invoice date. |
| `invoiceId` | `str` | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `str` | User-readable invoice number. |
| `isArchived` | `bool` |  |
| `items` | `list` | Invoice items. |
| `memo` | `str` | Additional memo for the invoice. |
| `metadata` | `dict` | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `str` | The name of the resource as it is recorded in Vercel |
| `notification` | `dict` | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `str` |  |
| `ownership` | `str` |  |
| `paidAt` | `str` | Moment the invoice was paid. |
| `partial` | `bool` | If true, will only update the provided secrets |
| `partnerId` | `str` | The ID provided by the partner for the given resource |
| `period` | `dict` | Subscription period for this billing cycle. |
| `productId` | `str` | The ID of the product the resource is derived from |
| `protocolSettings` | `dict` | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `str` | The reason for refund. |
| `refundTotal` | `str` | Refund amount. |
| `refundedAt` | `str` | Most recent moment the invoice was refunded. |
| `revoked` | `bool` |  |
| `role` | `str` | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `str` |  |
| `secrets` | `list` |  |
| `slug` | `str` |  |
| `state` | `str` | Invoice state. |
| `status` | `str` | The current status of the resource |
| `test` | `bool` | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | `str` | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` | `str` |  |
| `token_type` | `str` |  |
| `total` | `str` | Invoice total amount. |
| `updated` | `str` | System update date. |
| `updatedAt` | `float` |  |
| `usage` | `list` |  |
| `userEmail` | `str` |  |
| `validationErrors` | `list` |  |

#### Example: Load

```python
marketplace = client.Marketplace().load({"installation_id": "installation_id"})
```

#### Example: List

```python
marketplaces = client.Marketplace().list({"installation_id": "example"})
```

#### Example: Create

```python
marketplace = client.Marketplace().create({
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


### Microfrontend

Create an instance: `microfrontend = client.Microfrontend()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abuse` | `dict` |  |
| `accountId` | `str` |  |
| `alias` | `list` |  |
| `analytics` | `dict` |  |
| `applications` | `dict` |  |
| `appliedCve55182Migration` | `bool` |  |
| `autoAssignCustomDomains` | `bool` |  |
| `autoAssignCustomDomainsUpdatedBy` | `str` |  |
| `autoExposeSystemEnvs` | `bool` |  |
| `avatar` | `str` |  |
| `blobs` | `dict` |  |
| `buildCommand` | `str` |  |
| `commandForIgnoringBuildStep` | `str` |  |
| `concurrencyBucketName` | `str` |  |
| `connectBuildsEnabled` | `bool` |  |
| `connectConfigurationId` | `str` |  |
| `connectConfigurations` | `list` |  |
| `createdAt` | `float` |  |
| `creator` | `Any` |  |
| `crons` | `dict` |  |
| `customEnvironments` | `list` |  |
| `customerSupportCodeVisibility` | `bool` |  |
| `dataCache` | `dict` |  |
| `defaultResourceConfig` | `dict` |  |
| `deploymentExpiration` | `dict` | Retention policies for deployments. |
| `deploymentPolicy` | `dict` | Project shape. |
| `devCommand` | `str` |  |
| `directoryListing` | `bool` |  |
| `dismissedToasts` | `list` |  |
| `enableAffectedProjectsDeployments` | `bool` |  |
| `enableExternalRewriteCaching` | `bool` |  |
| `enablePreviewFeedback` | `bool` |  |
| `enableProductionFeedback` | `bool` |  |
| `env` | `list` |  |
| `expiration` | `Any` |  |
| `features` | `dict` |  |
| `framework` | `str` |  |
| `gitComments` | `dict` |  |
| `gitForkProtection` | `bool` |  |
| `gitLFS` | `bool` |  |
| `gitProviderOptions` | `dict` |  |
| `hasActiveBranches` | `bool` |  |
| `hasDeployments` | `bool` |  |
| `id` | `str` |  |
| `installCommand` | `str` |  |
| `internalRoutes` | `list` |  |
| `ipBuckets` | `list` |  |
| `jobs` | `dict` |  |
| `lastAliasRequest` | `dict` |  |
| `lastRollbackTarget` | `dict` |  |
| `latestDeployments` | `list` |  |
| `link` | `str` |  |
| `live` | `bool` |  |
| `microfrontends` | `Any` |  |
| `name` | `str` |  |
| `nodeVersion` | `str` |  |
| `oidcTokenConfig` | `dict` |  |
| `options` | `dict` | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `dict` |  |
| `outputDirectory` | `str` |  |
| `passiveConnectConfigurationId` | `str` |  |
| `passport` | `dict` |  |
| `passwordProtection` | `dict` |  |
| `paused` | `bool` |  |
| `permissions` | `dict` |  |
| `productionDeploymentsFastLane` | `bool` |  |
| `protectedSourcemaps` | `bool` |  |
| `protectionBypass` | `dict` |  |
| `protectionConfig` | `dict` |  |
| `resourceConfig` | `dict` |  |
| `rollbackDescription` | `dict` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `dict` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `str` |  |
| `sandbox` | `dict` |  |
| `schema` | `str` | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `dict` |  |
| `serverlessFunctionZeroConfigFailover` | `bool` |  |
| `services` | `list` |  |
| `skewProtectionAllowedDomains` | `list` |  |
| `skewProtectionBoundaryAt` | `float` |  |
| `skewProtectionMaxAge` | `float` |  |
| `skipGitConnectDuringLink` | `bool` |  |
| `sourceFilesOutsideRootDirectory` | `bool` |  |
| `speedInsights` | `dict` |  |
| `ssoProtection` | `dict` |  |
| `staticIps` | `dict` |  |
| `targets` | `dict` |  |
| `tier` | `str` |  |
| `tracing` | `dict` |  |
| `transferCompletedAt` | `float` |  |
| `transferStartedAt` | `float` |  |
| `transferToAccountId` | `str` |  |
| `transferredFromAccountId` | `str` |  |
| `trustedIps` | `Any` |  |
| `trustedSources` | `dict` |  |
| `updatedAt` | `float` |  |
| `usageStatus` | `dict` |  |
| `v0` | `bool` |  |
| `v0Created` | `bool` |  |
| `version` | `str` | The version of the microfrontends config schema. |
| `webAnalytics` | `dict` |  |

#### Example: Load

```python
microfrontend = client.Microfrontend().load({"project_id_or_name": "project_id_or_name"})
```

#### Example: List

```python
microfrontends = client.Microfrontend().list({"group_id": "example"})
```

#### Example: Create

```python
microfrontend = client.Microfrontend().create({
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


### Network

Create an instance: `network = client.Network()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awsAccountId` | `str` | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | `list` | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `str` | The AWS Region in which the network exists. |
| `cidr` | `str` | The CIDR range of the Network. |
| `createdAt` | `float` | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `list` |  |
| `hostedZones` | `dict` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `str` | The unique identifier of the Network. |
| `name` | `str` | The name of the network. |
| `peeringConnections` | `dict` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `dict` | Metadata about any projects associated with the Network. |
| `region` | `str` | The Vercel region in which the Network exists. |
| `status` | `str` | The status of the Network. |
| `teamId` | `str` | The unique identifier of the Team that owns the Network. |
| `vpcId` | `str` | The ID of the VPC which hosts the network. |

#### Example: Load

```python
network = client.Network().load({"id": "network_id"})
```

#### Example: List

```python
networks = client.Network().list()
```

#### Example: Create

```python
network = client.Network().create({
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


### Networking

Create an instance: `networking = client.Networking()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `builds` | `bool` | Whether to use Static IPs for builds. |
| `regions` | `list` |  |


### Observability

Create an instance: `observability = client.Observability()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disabled` | `bool` | Whether Observability Plus should be disabled for the project |
| `disabledAt` | `float` |  |
| `id` | `str` |  |
| `name` | `str` |  |

#### Example: List

```python
observabilitys = client.Observability().list()
```


### PrivateLinkEndpoint

Create an instance: `private_link_endpoint = client.PrivateLinkEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awsDnsEntries` | `list` | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `str` | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `float` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `bool` | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `str` | The unique identifier of the PrivateLink endpoint. |
| `id` | `str` |  |
| `name` | `str` | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `list` | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | `str` | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | `str` | The current state of the endpoint. |
| `statusMessage` | `str` | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | `str` | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | `float` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
| `vercelRegion` | `str` | The Vercel region the endpoint is provisioned in. |
| `vpcEndpointId` | `str` | The identifier of the underlying AWS VPC endpoint. |

#### Example: Load

```python
private_link_endpoint = client.PrivateLinkEndpoint().load({"id": "private_link_endpoint_id", "project_id": "project_id"})
```

#### Example: List

```python
private_link_endpoints = client.PrivateLinkEndpoint().list({"project_id": "example"})
```

#### Example: Create

```python
private_link_endpoint = client.PrivateLinkEndpoint().create({
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


### Project

Create an instance: `project = client.Project()`

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
| `abuse` | `dict` |  |
| `acceptedPolicies` | `dict` |  |
| `accountId` | `str` |  |
| `alias` | `list` |  |
| `analytics` | `dict` |  |
| `apexName` | `str` |  |
| `appliedCve55182Migration` | `bool` |  |
| `autoAssignCustomDomains` | `bool` |  |
| `autoAssignCustomDomainsUpdatedBy` | `str` |  |
| `autoExposeSystemEnvs` | `bool` |  |
| `avatar` | `str` |  |
| `blobs` | `dict` |  |
| `buildCommand` | `str` | The build command for this project. |
| `commandForIgnoringBuildStep` | `str` |  |
| `comment` | `str` | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `str` |  |
| `configurationId` | `str` |  |
| `connectBuildsEnabled` | `bool` |  |
| `connectConfigurationId` | `str` |  |
| `connectConfigurations` | `list` | The list of connections from project environment to Secure Compute network |
| `contentHint` | `Any` |  |
| `createdAt` | `float` |  |
| `createdBy` | `str` |  |
| `creator` | `Any` |  |
| `crons` | `dict` |  |
| `customEnvironmentId` | `str` |  |
| `customEnvironmentIds` | `list` | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `list` |  |
| `customerSupportCodeVisibility` | `bool` | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `dict` |  |
| `decrypted` | `bool` |  |
| `defaultResourceConfig` | `dict` |  |
| `deploymentExpiration` | `dict` | Retention policies for deployments. |
| `deploymentPolicy` | `dict` | Project shape. |
| `devCommand` | `str` | The dev command for this project. |
| `directoryListing` | `bool` |  |
| `dismissedToasts` | `list` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `str` |  |
| `edgeConfigTokenId` | `str` |  |
| `enableAffectedProjectsDeployments` | `bool` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | Opt-in to production toolbar on the project level |
| `env` | `list` |  |
| `environmentVariables` | `list` | Collection of ENV Variables the Project will use |
| `expiration` | `Any` |  |
| `features` | `dict` |  |
| `framework` | `str` | The framework that is being used for this project. |
| `gitBranch` | `str` | Git branch to link the project domain |
| `gitComments` | `dict` |  |
| `gitForkProtection` | `bool` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `dict` |  |
| `gitRepository` | `dict` | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` |  |
| `hasDeployments` | `bool` |  |
| `hostname` | `str` | The deployment hostname to scope the trace session to. |
| `id` | `str` |  |
| `installCommand` | `str` | The install command for this project. |
| `integrations` | `list` |  |
| `internalContentHint` | `dict` | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `list` |  |
| `ipBuckets` | `list` |  |
| `jobs` | `dict` |  |
| `key` | `str` | The name of the environment variable |
| `lastAliasRequest` | `dict` |  |
| `lastRollbackTarget` | `dict` |  |
| `latestDeployments` | `list` |  |
| `legacyValue` | `str` | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `str` |  |
| `live` | `bool` |  |
| `microfrontends` | `Any` |  |
| `name` | `str` | The desired name for the project |
| `newProjectName` | `str` | The desired name for the project |
| `nodeVersion` | `str` |  |
| `oidcTokenConfig` | `dict` | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `dict` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `str` | The output directory of the project. |
| `paidFeatures` | `dict` |  |
| `passiveConnectConfigurationId` | `str` |  |
| `passport` | `dict` | Passport configuration for the project. |
| `passwordProtection` | `dict` | Allows to protect project deployments with a password |
| `paused` | `bool` |  |
| `permissions` | `dict` |  |
| `previewDeploymentSuffix` | `str` | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` |  |
| `projectId` | `str` | The unique target project identifier |
| `protectedSourcemaps` | `bool` | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `dict` |  |
| `protectionConfig` | `dict` |  |
| `publicSource` | `bool` | Deprecated. |
| `redirect` | `str` | Target destination domain for redirect |
| `redirectStatusCode` | `float` | Status code for domain redirect |
| `resourceConfig` | `dict` | Specifies resource override configuration for the project |
| `rollbackDescription` | `dict` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `dict` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `str` | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `dict` | Specifies the default region and failover regions for sandboxes created in the project |
| `security` | `dict` |  |
| `serverlessFunctionRegion` | `str` | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `bool` | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `list` |  |
| `skewProtectionAllowedDomains` | `list` | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `float` | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `float` | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `bool` | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `bool` | Indicates if there are source files outside of the root directory |
| `speedInsights` | `dict` |  |
| `ssoProtection` | `dict` | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `dict` | Manage Static IPs for this project |
| `sunsetSecretId` | `str` | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `Any` | The target environment of the environment variable |
| `targets` | `dict` |  |
| `tier` | `str` |  |
| `token` | `str` |  |
| `tracing` | `dict` | Tracing configuration for this project |
| `transferCompletedAt` | `float` |  |
| `transferStartedAt` | `float` |  |
| `transferToAccountId` | `str` |  |
| `transferredFromAccountId` | `str` |  |
| `trustedIps` | `Any` | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `dict` | Deployment Protection Trusted Sources |
| `type` | `str` | The type of environment variable |
| `updatedAt` | `float` |  |
| `updatedBy` | `str` |  |
| `usageStatus` | `dict` |  |
| `v0` | `bool` |  |
| `v0Created` | `bool` |  |
| `value` | `str` | The value of the environment variable |
| `verification` | `list` | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `bool` | `true` if the domain is verified for use with the project. |
| `visibility` | `str` | User-facing config/secret model. |
| `webAnalytics` | `dict` |  |

#### Example: Load

```python
project = client.Project().load({"id": "project_id"})
```

#### Example: Create

```python
project = client.Project().create({
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


### ProjectMember

Create an instance: `project_member = client.ProjectMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | The email of the team member that should be added to this project. |
| `id` | `str` |  |
| `role` | `str` | The project role of the member that will be added. |
| `uid` | `str` | The ID of the team member that should be added to this project. |
| `username` | `str` | The username of the team member that should be added to this project. |

#### Example: Load

```python
project_member = client.ProjectMember().load({"id_or_name": "id_or_name"})
```

#### Example: Create

```python
project_member = client.ProjectMember().create({
    "id_or_name": "example_id_or_name",  # str
    "id": "example_id",  # str
    "role": "example_role",  # str
})
```


### ProjectRoute

Create an instance: `project_route = client.ProjectRoute()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `actions` | `list` |  |
| `alias` | `str` | The staging alias for previewing this version. |
| `conditions` | `list` |  |
| `createdBy` | `str` | The user who created this version. |
| `currentRoute` | `dict` |  |
| `description` | `str` |  |
| `id` | `str` | Unique identifier for the version. |
| `isLive` | `bool` | Whether this version is currently live in production. |
| `isStaging` | `bool` | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `float` | Timestamp of when this version was last modified. |
| `name` | `str` |  |
| `overwrite` | `bool` |  |
| `pathCondition` | `dict` |  |
| `position` | `dict` | Controls where the route is inserted. |
| `prompt` | `str` |  |
| `restore` | `bool` | If true, restores the staged route to the value in the production version. |
| `route` | `dict` | The full route object to replace the existing route with |
| `routes` | `list` |  |
| `ruleCount` | `float` | The number of routing rules in this version. |
| `s3Key` | `str` | The S3 key where the routing rules are stored. |
| `version` | `dict` | A version of routing rules stored in S3. |

#### Example: Load

```python
project_route = client.ProjectRoute().load({"id": "project_route_id"})
```

#### Example: List

```python
project_routes = client.ProjectRoute().list({"project_id": "example"})
```

#### Example: Create

```python
project_route = client.ProjectRoute().create({
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


### Query

Create an instance: `query = client.Query()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregation` | `str` | Aggregation function to apply. |
| `bucketTimezone` | `str` | IANA timezone (e.g. |
| `endTime` | `str` | End timestamp |
| `filter` | `str` | Filter to apply to the query. |
| `granularity` | `dict` | Time bucket size |
| `groupBy` | `list` | Dimensions to group results by. |
| `limit` | `float` | Maximum number of results |
| `metric` | `str` | Metric id |
| `orderBy` | `str` | Rollup column to order grouped results by. |
| `orderDirection` | `str` | Direction to order grouped results by. |
| `scope` | `dict` | Owner or project scope for the query |
| `startTime` | `str` | Start timestamp |

#### Example: Create

```python
query = client.Query().create({
    "metric": "example_metric",  # str
    "scope": {},  # dict
})
```


### Record

Create an instance: `record = client.Record()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `str` |  |
| `createdAt` | `float` |  |
| `creator` | `str` |  |
| `domain` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `recordType` | `str` |  |
| `ttl` | `float` |  |
| `type` | `str` |  |
| `value` | `str` |  |

#### Example: Load

```python
record = client.Record().load({"id": "record_id"})
```


### RollingRelease

Create an instance: `rolling_release = client.RollingRelease()`

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
| `activeStage` | `dict` | The currently active stage, null if the rollout is aborted |
| `advancementType` | `str` | The advancement type of the rolling release |
| `canaryDeployment` | `dict` | The canary deployment being rolled out |
| `currentCanaryPercentage` | `float` | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `dict` | The current deployment receiving production traffic |
| `nextStage` | `dict` | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `str` | The ID of a deployment queued for the next rolling release |
| `stages` | `list` | All stages configured for this rolling release |
| `startedAt` | `float` | Unix timestamp in milliseconds when the rolling release started |
| `state` | `str` | The current state of the rolling release |
| `substate` | `str` | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `float` | Unix timestamp in milliseconds when the rolling release was last updated |

#### Example: Load

```python
rolling_release = client.RollingRelease().load({"id_or_name": "id_or_name"})
```

#### Example: Create

```python
rolling_release = client.RollingRelease().create({
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


### Sandbox

Create an instance: `sandbox = client.Sandbox()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `args` | `list` | The arguments of the command. |
| `command` | `str` | The executable or shell command to run. |
| `createdAt` | `float` | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `str` | The method used to create the snapshot. |
| `currentSandboxName` | `str` | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `str` | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `str` | The snapshot ID to set as the current snapshot. |
| `cwd` | `str` | The current working directory of the command. |
| `durationMs` | `float` | Duration of the command execution in milliseconds. |
| `env` | `dict` | Additional environment variables to set for this command. |
| `exitCode` | `float` | If the command did finish, the exit code. |
| `expiration` | `Any` | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `float` | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `list` | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `str` | The ID of the command. |
| `image` | `str` | Image to use for the sandbox. |
| `keepLastSnapshots` | `dict` | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `float` | The last time the snapshot was used (e.g. |
| `logs` | `bool` | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `float` | The maximum drive size in bytes. |
| `memory` | `float` | Memory allocated in MB. |
| `mounts` | `dict` | List of drives to mount to the sandbox at the provided path. |
| `name` | `str` | The name of the command. |
| `networkId` | `str` | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `Any` | Network policy configuration. |
| `parentId` | `str` | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `str` | The path of the directory to create. |
| `persistent` | `bool` | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `list` | List of ports to expose from the sandbox. |
| `projectId` | `str` | The project that owns the drive. |
| `recursive` | `bool` | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `str` | The region where the snapshot is stored. |
| `regions` | `list` | The regions where the snapshot is available. |
| `resources` | `dict` | Resources to define the VM |
| `resumed` | `bool` |  |
| `routes` | `list` |  |
| `runtime` | `str` | The runtime environment for the sandbox. |
| `sandbox` | `dict` | This object contains information related to a Vercel NamedSandbox. |
| `session` | `dict` | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `str` | The ID of the session associated with the command. |
| `sizeBytes` | `float` | The size of the snapshot in bytes. |
| `snapshotExpiration` | `Any` | Default snapshot expiration time in milliseconds. |
| `source` | `Any` | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `str` | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `float` | When the command was started, in milliseconds since the epoch. |
| `status` | `str` | The status of the snapshot. |
| `statusUpdatedAt` | `float` | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `bool` | Execute the command with root (superuser) privileges. |
| `tags` | `dict` | Key-value tags to associate with the sandbox. |
| `timeout` | `int` | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `totalActiveCpuDurationMs` | `float` | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `totalDurationMs` | `float` | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `totalEgressBytes` | `float` | Cumulative egress bytes across all sandbox runs. |
| `totalIngressBytes` | `float` | Cumulative ingress bytes across all sandbox runs. |
| `updatedAt` | `float` | The last time the snapshot was updated, in milliseconds since the epoch. |
| `vcpus` | `float` | Number of virtual CPUs allocated. |
| `wait` | `bool` | If true, returns an ND-JSON stream that emits the command status when started and again when finished. |

#### Example: Load

```python
sandbox = client.Sandbox().load({"id": "sandbox_id"})
```

#### Example: List

```python
sandboxs = client.Sandbox().list()
```

#### Example: Create

```python
sandbox = client.Sandbox().create({
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


### Schema

Create an instance: `schema = client.Schema()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregations` | `list` |  |
| `defaultAggregation` | `str` |  |
| `description` | `str` |  |
| `dimensions` | `list` |  |
| `id` | `str` |  |
| `unit` | `str` |  |

#### Example: Load

```python
schema = client.Schema().load({"id": "schema_id"})
```

#### Example: List

```python
schemas = client.Schema().list()
```


### Security

Create an instance: `security = client.Security()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `Action` | `str` |  |
| `ActorId` | `str` |  |
| `CreatedAt` | `str` |  |
| `DeletedAt` | `str` |  |
| `Domain` | `str` |  |
| `ExpiresAt` | `float` |  |
| `Id` | `str` |  |
| `Ip` | `str` |  |
| `IsProjectRule` | `bool` |  |
| `Note` | `str` |  |
| `OwnerId` | `str` |  |
| `ProjectId` | `str` |  |
| `UpdatedAt` | `str` |  |
| `UpdatedAtHour` | `str` |  |
| `action` | `dict` |  |
| `action_type` | `str` |  |
| `active` | `bool` |  |
| `allSources` | `bool` |  |
| `botIdEnabled` | `bool` |  |
| `changes` | `list` |  |
| `conditionGroup` | `list` |  |
| `conditions` | `list` |  |
| `count` | `float` |  |
| `crs` | `dict` | Custom Ruleset |
| `description` | `str` |  |
| `domain` | `str` |  |
| `endTime` | `str` |  |
| `firewallEnabled` | `bool` |  |
| `host` | `str` |  |
| `id` | `str` |  |
| `ips` | `list` |  |
| `isActive` | `bool` |  |
| `logHeaders` | `Any` |  |
| `managedRules` | `dict` |  |
| `name` | `str` |  |
| `note` | `str` |  |
| `ownerId` | `str` |  |
| `projectKey` | `str` |  |
| `projectScope` | `bool` | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `str` |  |
| `ruleId` | `str` |  |
| `ruleName` | `str` |  |
| `rules` | `list` |  |
| `rulesets` | `Any` |  |
| `sourceIp` | `str` |  |
| `startTime` | `str` |  |
| `ttl` | `float` | Time to live in milliseconds |
| `updatedAt` | `str` |  |
| `version` | `float` |  |

#### Example: Load

```python
security = client.Security().load({"project_id": "project_id"})
```

#### Example: List

```python
securitys = client.Security().list({"project_id": "example"})
```

#### Example: Create

```python
security = client.Security().create({
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


### Segment

Create an instance: `segment = client.Segment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `createdBy` | `str` |  |
| `data` | `dict` |  |
| `description` | `str` |  |
| `hint` | `str` |  |
| `id` | `str` |  |
| `label` | `str` |  |
| `metadata` | `dict` |  |
| `projectId` | `str` |  |
| `slug` | `str` |  |
| `typeName` | `str` |  |
| `updatedAt` | `float` |  |
| `usedByFlags` | `list` |  |
| `usedBySegments` | `list` |  |

#### Example: Load

```python
segment = client.Segment().load({"id": "segment_id", "project_id": "project_id"})
```


### Storage

Create an instance: `storage = client.Storage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `str` |  |
| `count` | `float` |  |
| `id` | `str` |  |
| `isTokenExpired` | `bool` |  |
| `kind` | `str` | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` | `str` |  |
| `projectFilter` | `dict` |  |
| `projectId` | `str` | The project this store is scoped to. |
| `projectsMetadata` | `list` |  |
| `region` | `str` |  |
| `size` | `float` |  |
| `status` | `str` |  |
| `totalConnectedProjects` | `float` |  |
| `usageQuotaExceeded` | `bool` |  |

#### Example: Load

```python
storage = client.Storage().load({"id": "storage_id"})
```

#### Example: Create

```python
storage = client.Storage().create({
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


### Team

Create an instance: `team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessRequestedAt` | `float` | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `float` | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `float` | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `dict` | Attribution information for the session or current page |
| `avatar` | `str` | The ID of the file used as avatar for this Team. |
| `billing` | `dict` | The team's billing plan. |
| `bitbucket` | `dict` | Map of the connected Bitbucket account. |
| `confirmed` | `bool` | Current status of the membership. |
| `connect` | `dict` |  |
| `createdAt` | `float` | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `str` | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `dict` | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `dict` | Default deployment expiration settings for this team |
| `defaultPassport` | `dict` | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `dict` | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `dict` | Default roles for the team. |
| `deploymentPolicy` | `dict` | Composable deployment-time policy for the team. |
| `description` | `str` | A short description of the Team. |
| `disableHardAutoBlocks` | `Any` |  |
| `disableRepositoryDispatchEvents` | `bool` | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | `str` | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | `str` | Controls who can request access to protected deployments. |
| `emailDomain` | `str` | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | `bool` | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | `str` | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | `str` | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | `str` | The new fallback environment for the microfrontends group. |
| `github` | `dict` | Map of the connected GitHub account. |
| `gitlab` | `dict` | Map of the connected GitLab account. |
| `hideIpAddresses` | `bool` | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `bool` | Indicates if IP addresses should be accessible in log drains |
| `id` | `str` | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `float` | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `str` | Code that can be used to join this Team. |
| `ipBuckets` | `list` |  |
| `joinedFrom` | `dict` | A map that describes the origin from where the user joined. |
| `membership` | `dict` | The membership of the authenticated User in relation to the Team. |
| `name` | `str` | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `dict` | NSNB configuration for the team. |
| `orgRootTeamId` | `str` | Best-effort ID of the organization’s root billing team. |
| `pagination` | `dict` | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `str` | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `float` | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `bool` | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `str` | The hostname that is current set as preview deployment suffix. |
| `projects` | `list` |  |
| `regenerateInviteCode` | `bool` | Create a new invite code and replace the current one. |
| `remoteCaching` | `dict` | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `bool` | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `dict` | Resource configuration for the team. |
| `role` | `str` | The role in the team of the member. |
| `saml` | `dict` | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `str` | Sensitive environment variable policy for this team |
| `slug` | `str` | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `str` | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `dict` | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `dict` | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `dict` | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `dict` | When enabled, creating shareable links requires Owner role. |
| `teamName` | `str` | The name of the team. |
| `teamPermissions` | `list` | The team permissions to set for the member. |
| `teamSlug` | `str` | The slug of the team. |
| `teams` | `list` |  |
| `updatedAt` | `float` | Timestamp (in milliseconds) of when the Team was last updated. |

#### Example: Load

```python
team = client.Team().load({"id": "team_id"})
```

#### Example: List

```python
teams = client.Team().list()
```

#### Example: Create

```python
team = client.Team().create({
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


### TldName

Create an instance: `tld_name = client.TldName()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
tld_names = client.TldName().list()
```


### Toggle

Create an instance: `toggle = client.Toggle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `value` | `bool` |  |

#### Example: Create

```python
toggle = client.Toggle().create({
    "project_id": "example_project_id",  # str
    "value": True,  # bool
})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `list` | The categories that group this event with related event types. |
| `createdAt` | `float` | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `list` | A list of "entities" within the event `text`. |
| `id` | `str` | The unique identifier of the Event. |
| `payload` | `Any` |  |
| `principal` | `Any` |  |
| `principalId` | `str` | The ID of the principal who generated the event. |
| `requestId` | `str` |  |
| `sessionId` | `str` | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `str` | The human-readable text of the Event. |
| `tokenId` | `str` | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `str` | The type of the event. |
| `user` | `dict` | Metadata for {@link userId}. |
| `userId` | `str` | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `list` | Metadata for {@link viaIds}. |
| `viaIds` | `list` | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

#### Example: Load

```python
user = client.User().load({"id": "user_id"})
```

#### Example: List

```python
users = client.User().list()
```


### Vcr

Create an instance: `vcr = client.Vcr()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arch` | `str` | CPU architecture the manifest targets. |
| `createdAt` | `str` | ISO 8601 timestamp of when the image was created. |
| `id` | `str` | Internal identifier of the image. |
| `imageId` | `str` | Internal identifier of the image the tag points at. |
| `kind` | `str` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` | `list` |  |
| `manifestDigest` | `str` | SHA-256 digest of the image manifest. |
| `name` | `str` | Name of the repository. |
| `platform` | `str` | Operating system the manifest targets. |
| `projectId` | `str` | Identifier of the project the repository belongs to. |
| `public` | `bool` | Whether the repository is public. |
| `pushedBy` | `str` | Identifier of the actor that pushed the image. |
| `repositoryId` | `str` | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `float` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `str` | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | `str` | The tag name. |
| `tags` | `list` | Tags pointing at this image's manifest. |
| `teamId` | `str` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `str` | Slug of the team that is granted access to the repository. |
| `updatedAt` | `str` | ISO 8601 timestamp of when the tag was last updated. |

#### Example: Load

```python
vcr = client.Vcr().load({"id_or_name": "id_or_name", "project_id": "project_id"})
```

#### Example: List

```python
vcrs = client.Vcr().list({"id_or_name": "example", "project_id": "example"})
```

#### Example: Create

```python
vcr = client.Vcr().create({
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


### VcrImageList

Create an instance: `vcr_image_list = client.VcrImageList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arch` | `str` | CPU architecture the manifest targets. |
| `createdAt` | `str` | ISO 8601 timestamp of when the image was created. |
| `id` | `str` | Internal identifier of the image. |
| `kind` | `str` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `manifestDigest` | `str` | SHA-256 digest of the image manifest. |
| `platform` | `str` | Operating system the manifest targets. |
| `pushedBy` | `str` | Identifier of the actor that pushed the image. |
| `repositoryId` | `str` | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `float` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `str` | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | `list` | Tags pointing at this image's manifest. |

#### Example: List

```python
vcr_image_lists = client.VcrImageList().list({"id_or_name": "example", "project_id": "example"})
```


### VcrRepositoryList

Create an instance: `vcr_repository_list = client.VcrRepositoryList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | ISO 8601 timestamp of when the repository was created. |
| `id` | `str` | Unique identifier of the repository. |
| `name` | `str` | Name of the repository. |
| `projectId` | `str` | Identifier of the project the repository belongs to. |
| `public` | `bool` | Whether the repository is public. |
| `updatedAt` | `str` | ISO 8601 timestamp of when the repository was last updated. |

#### Example: List

```python
vcr_repository_lists = client.VcrRepositoryList().list({"project_id": "example"})
```


### VcrRepositoryPermissionList

Create an instance: `vcr_repository_permission_list = client.VcrRepositoryPermissionList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | `str` | Identifier of the repository the permission grants access to. |
| `teamId` | `str` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `str` | Slug of the team that is granted access to the repository. |

#### Example: List

```python
vcr_repository_permission_lists = client.VcrRepositoryPermissionList().list({"id_or_name": "example", "project_id": "example"})
```


### WebAnalytics

Create an instance: `web_analytics = client.WebAnalytics()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Any` |  |
| `query` | `dict` |  |
| `version` | `float` |  |

#### Example: Load

```python
web_analytics = client.WebAnalytics().load({"project_id": "project_id"})
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alertRuleIds` | `list` |  |
| `createdAt` | `float` | A number containing the date when the webhook was created in in milliseconds |
| `events` | `list` | The webhooks events |
| `id` | `str` | The webhook id |
| `ownerId` | `str` | The unique ID of the team the webhook belongs to |
| `projectIds` | `list` | The ID of the projects the webhook is associated with |
| `secret` | `str` | The webhook secret used to sign the payload |
| `updatedAt` | `float` | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `str` | A string with the URL of the webhook |

#### Example: Load

```python
webhook = client.Webhook().load({"id": "webhook_id"})
```

#### Example: Create

```python
webhook = client.Webhook().create({
    "createdAt": 1,  # float
    "events": [],  # list
    "id": "example_id",  # str
    "ownerId": "example_ownerId",  # str
    "secret": "example_secret",  # str
    "updatedAt": 1,  # float
    "url": "example_url",  # str
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── vercel_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`vercel_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
bulkredirect = client.BulkRedirect()
bulkredirect.list()

# bulkredirect.data_get() now returns the bulkredirect data from the last list
# bulkredirect.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
