# Vercel PHP SDK



The PHP SDK for the Vercel API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->AccessGroup()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/vercel-sdk/releases](https://github.com/voxgig-sdk/vercel-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'vercel_sdk.php';

$client = new VercelSDK([
    "apikey" => getenv("VERCEL_APIKEY"),
]);
```

### 2. List accessgroup records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $accessgroups = $client->AccessGroup()->list();
    foreach ($accessgroups as $record) {
        $item = $record->data_get();
        echo $item["id"] . " " . $item["accessGroupId"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an authentication

Authentication is nested under token, so provide the `token_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Authentication record (throws on error).
    $authentication = $client->Authentication()->load(["token_id" => "example_token_id"]);
    print_r($authentication->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created AccessGroup record.
$created = $client->AccessGroup()->create(["id" => "example_id", "accessGroupId" => "example_accessGroupId", "createdAt" => "example_createdAt", "isDsyncManaged" => true, "membersCount" => 1, "name" => "example_name", "projectId" => "example_projectId", "projectsCount" => 1, "role" => "example_role", "teamId" => "example_teamId", "updatedAt" => "example_updatedAt"]);

// Update — index the record via data_get() ($created->data_get()["id"]).
$client->AccessGroup()->update(["id" => $created->data_get()["id"], "access_group_id" => "example_access_group_id", "project_id" => "example_project_id"]);

// Remove
$client->AccessGroup()->remove(["id" => $created->data_get()["id"]]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $bulkredirects = $client->BulkRedirect()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = VercelSDK::test([
    "entity" => ["network" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$network = $client->Network()->list();
print_r(array_map(fn($item) => $item->data_get(), $network));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new VercelSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
VERCEL_TEST_LIVE=TRUE
VERCEL_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### VercelSDK

```php
require_once 'vercel_sdk.php';
$client = new VercelSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = VercelSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### VercelSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `AccessGroup` | `($data): AccessGroupEntity` | Create an AccessGroup entity instance. |
| `AiGateway` | `($data): AiGatewayEntity` | Create an AiGateway entity instance. |
| `AiGatewayRule` | `($data): AiGatewayRuleEntity` | Create an AiGatewayRule entity instance. |
| `AiGatewayRuleList` | `($data): AiGatewayRuleListEntity` | Create an AiGatewayRuleList entity instance. |
| `AiGatewayVirtualModelConfig` | `($data): AiGatewayVirtualModelConfigEntity` | Create an AiGatewayVirtualModelConfig entity instance. |
| `AiGatewayVirtualModelConfigList` | `($data): AiGatewayVirtualModelConfigListEntity` | Create an AiGatewayVirtualModelConfigList entity instance. |
| `Alias` | `($data): AliasEntity` | Create an Alias entity instance. |
| `ApiAiGateway` | `($data): ApiAiGatewayEntity` | Create an ApiAiGateway entity instance. |
| `ApiKey` | `($data): ApiKeyEntity` | Create an ApiKey entity instance. |
| `Artifact` | `($data): ArtifactEntity` | Create an Artifact entity instance. |
| `Authentication` | `($data): AuthenticationEntity` | Create an Authentication entity instance. |
| `Billing` | `($data): BillingEntity` | Create a Billing entity instance. |
| `BulkRedirect` | `($data): BulkRedirectEntity` | Create a BulkRedirect entity instance. |
| `Cert` | `($data): CertEntity` | Create a Cert entity instance. |
| `Check` | `($data): CheckEntity` | Create a Check entity instance. |
| `ChecksV2` | `($data): ChecksV2Entity` | Create a ChecksV2 entity instance. |
| `Connect` | `($data): ConnectEntity` | Create a Connect entity instance. |
| `ConnectConnector` | `($data): ConnectConnectorEntity` | Create a ConnectConnector entity instance. |
| `ConnectConnectorList` | `($data): ConnectConnectorListEntity` | Create a ConnectConnectorList entity instance. |
| `ConnectConnectorProjectConnectionList` | `($data): ConnectConnectorProjectConnectionListEntity` | Create a ConnectConnectorProjectConnectionList entity instance. |
| `ConnectProjectConnection` | `($data): ConnectProjectConnectionEntity` | Create a ConnectProjectConnection entity instance. |
| `ConnectProjectConnectorConnectionList` | `($data): ConnectProjectConnectorConnectionListEntity` | Create a ConnectProjectConnectorConnectionList entity instance. |
| `Deployment` | `($data): DeploymentEntity` | Create a Deployment entity instance. |
| `Dns` | `($data): DnsEntity` | Create a Dns entity instance. |
| `Domain` | `($data): DomainEntity` | Create a Domain entity instance. |
| `DomainsRegistrar` | `($data): DomainsRegistrarEntity` | Create a DomainsRegistrar entity instance. |
| `Drain` | `($data): DrainEntity` | Create a Drain entity instance. |
| `EdgeCache` | `($data): EdgeCacheEntity` | Create an EdgeCache entity instance. |
| `Env` | `($data): EnvEntity` | Create an Env entity instance. |
| `Environment` | `($data): EnvironmentEntity` | Create an Environment entity instance. |
| `FeatureFlag` | `($data): FeatureFlagEntity` | Create a FeatureFlag entity instance. |
| `File` | `($data): FileEntity` | Create a File entity instance. |
| `Flag` | `($data): FlagEntity` | Create a Flag entity instance. |
| `FlagsSdkKeyWithSecret` | `($data): FlagsSdkKeyWithSecretEntity` | Create a FlagsSdkKeyWithSecret entity instance. |
| `GlobalConfig` | `($data): GlobalConfigEntity` | Create a GlobalConfig entity instance. |
| `GlobalConfigItem` | `($data): GlobalConfigItemEntity` | Create a GlobalConfigItem entity instance. |
| `GlobalConfigToken` | `($data): GlobalConfigTokenEntity` | Create a GlobalConfigToken entity instance. |
| `Integration` | `($data): IntegrationEntity` | Create an Integration entity instance. |
| `Kms` | `($data): KmsEntity` | Create a Kms entity instance. |
| `ListEventType` | `($data): ListEventTypeEntity` | Create a ListEventType entity instance. |
| `Log` | `($data): LogEntity` | Create a Log entity instance. |
| `LogDrain` | `($data): LogDrainEntity` | Create a LogDrain entity instance. |
| `Marketplace` | `($data): MarketplaceEntity` | Create a Marketplace entity instance. |
| `Microfrontend` | `($data): MicrofrontendEntity` | Create a Microfrontend entity instance. |
| `Network` | `($data): NetworkEntity` | Create a Network entity instance. |
| `Networking` | `($data): NetworkingEntity` | Create a Networking entity instance. |
| `Observability` | `($data): ObservabilityEntity` | Create an Observability entity instance. |
| `PrivateLinkEndpoint` | `($data): PrivateLinkEndpointEntity` | Create a PrivateLinkEndpoint entity instance. |
| `Project` | `($data): ProjectEntity` | Create a Project entity instance. |
| `ProjectMember` | `($data): ProjectMemberEntity` | Create a ProjectMember entity instance. |
| `ProjectRoute` | `($data): ProjectRouteEntity` | Create a ProjectRoute entity instance. |
| `Query` | `($data): QueryEntity` | Create a Query entity instance. |
| `Record` | `($data): RecordEntity` | Create a Record entity instance. |
| `RollingRelease` | `($data): RollingReleaseEntity` | Create a RollingRelease entity instance. |
| `Sandbox` | `($data): SandboxEntity` | Create a Sandbox entity instance. |
| `Schema` | `($data): SchemaEntity` | Create a Schema entity instance. |
| `Security` | `($data): SecurityEntity` | Create a Security entity instance. |
| `Segment` | `($data): SegmentEntity` | Create a Segment entity instance. |
| `Storage` | `($data): StorageEntity` | Create a Storage entity instance. |
| `Team` | `($data): TeamEntity` | Create a Team entity instance. |
| `TldName` | `($data): TldNameEntity` | Create a TldName entity instance. |
| `Toggle` | `($data): ToggleEntity` | Create a Toggle entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `Vcr` | `($data): VcrEntity` | Create a Vcr entity instance. |
| `VcrImageList` | `($data): VcrImageListEntity` | Create a VcrImageList entity instance. |
| `VcrRepositoryList` | `($data): VcrRepositoryListEntity` | Create a VcrRepositoryList entity instance. |
| `VcrRepositoryPermissionList` | `($data): VcrRepositoryPermissionListEntity` | Create a VcrRepositoryPermissionList entity instance. |
| `WebAnalytics` | `($data): WebAnalyticsEntity` | Create a WebAnalytics entity instance. |
| `Webhook` | `($data): WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$access_group = $client->AccessGroup();`

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
| `entitlements` | `array` |  |
| `id` | `string` |  |
| `isDsyncManaged` | `bool` |  |
| `membersCount` | `float` | Number of members in the access group. |
| `membersToAdd` | `array` | List of members to add to the access group. |
| `membersToRemove` | `array` | List of members to remove from the access group. |
| `name` | `string` | The name of this access group. |
| `projectId` | `string` |  |
| `projects` | `array` |  |
| `projectsCount` | `float` | Number of projects in the access group. |
| `role` | `string` | The project role that will be added to this Access Group. |
| `teamId` | `string` | ID of the team that this access group belongs to. |
| `teamPermissions` | `array` | Permissions that the team has in the access group. |
| `teamRoles` | `array` | Roles that the team has in the access group. |
| `updatedAt` | `string` | Timestamp in milliseconds when the access group was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AccessGroup record (throws on error).
$access_group = $client->AccessGroup()->load(["id" => "access_group_id"]);
```

#### Example: List

```php
// list() returns an array of AccessGroup records (throws on error).
$access_groups = $client->AccessGroup()->list();
```

#### Example: Create

```php
$access_group = $client->AccessGroup()->create([
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


### AiGateway

Create an instance: `$ai_gateway = $client->AiGateway();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AiGatewayRule

Create an instance: `$ai_gateway_rule = $client->AiGatewayRule();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `array` |  |
| `createdAt` | `float` |  |
| `createdBy` | `string` |  |
| `deleted` | `bool` |  |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `match` | `array` |  |
| `ownerId` | `string` |  |
| `ruleId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `float` |  |
| `updatedBy` | `string` |  |

#### Example: Create

```php
$ai_gateway_rule = $client->AiGatewayRule()->create([
    "createdAt" => null, // float
    "enabled" => null, // bool
    "ownerId" => null, // string
    "ruleId" => null, // string
    "type" => null, // string
    "updatedAt" => null, // float
]);
```


### AiGatewayRuleList

Create an instance: `$ai_gateway_rule_list = $client->AiGatewayRuleList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `array` |  |
| `createdAt` | `float` |  |
| `createdBy` | `string` |  |
| `deleted` | `bool` |  |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `match` | `array` |  |
| `ownerId` | `string` |  |
| `ruleId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `float` |  |
| `updatedBy` | `string` |  |

#### Example: List

```php
// list() returns an array of AiGatewayRuleList records (throws on error).
$ai_gateway_rule_lists = $client->AiGatewayRuleList()->list();
```


### AiGatewayVirtualModelConfig

Create an instance: `$ai_gateway_virtual_model_config = $client->AiGatewayVirtualModelConfig();`

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
| `baseUrl` | `string` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `array` | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | Use caching if available. |
| `createdAt` | `float` | Creation timestamp (epoch ms). |
| `createdBy` | `string` | User or app id that created this VMC. |
| `deleted` | `bool` | Whether this VMC is soft-deleted. |
| `description` | `string` | Optional description for UI. |
| `disallowPromptTraining` | `bool` | Only use providers that will not train on your prompts. |
| `displayName` | `string` | Human-readable name for UI. |
| `has` | `array` | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | Only use HIPAA-compliant providers. |
| `id` | `string` |  |
| `inferenceRegion` | `array` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | Canonical model slug this VMC maps to (e.g. |
| `models` | `array` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `array` | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Team (owner) that owns this VMC. |
| `providerOnly` | `array` | Restrict routing to only these providers. |
| `providerOptions` | `array` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `array` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `array` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `array` | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | For kind=router: how to order candidates. |
| `serviceTier` | `string` | Service tier for providers that support it. |
| `sort` | `string` | Rank eligible providers by an attribute. |
| `speed` | `string` | Only use fastest providers with short timeouts. |
| `status` | `string` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float` | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | Only use providers with zero data retention. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiGatewayVirtualModelConfig record (throws on error).
$ai_gateway_virtual_model_config = $client->AiGatewayVirtualModelConfig()->load(["id" => "ai_gateway_virtual_model_config_id"]);
```

#### Example: Create

```php
$ai_gateway_virtual_model_config = $client->AiGatewayVirtualModelConfig()->create([
    "createdAt" => null, // float
    "deleted" => null, // bool
    "kind" => null, // string
    "ownerId" => null, // string
    "status" => null, // string
    "updatedAt" => null, // float
    "virtualModelSlug" => null, // string
]);
```


### AiGatewayVirtualModelConfigList

Create an instance: `$ai_gateway_virtual_model_config_list = $client->AiGatewayVirtualModelConfigList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowFallbackFromFast` | `bool` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `array` | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | Use caching if available. |
| `createdAt` | `float` | Creation timestamp (epoch ms). |
| `createdBy` | `string` | User or app id that created this VMC. |
| `deleted` | `bool` | Whether this VMC is soft-deleted. |
| `description` | `string` | Optional description for UI. |
| `disallowPromptTraining` | `bool` | Only use providers that will not train on your prompts. |
| `displayName` | `string` | Human-readable name for UI. |
| `has` | `array` | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `array` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | Canonical model slug this VMC maps to (e.g. |
| `models` | `array` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `array` | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Team (owner) that owns this VMC. |
| `providerOnly` | `array` | Restrict routing to only these providers. |
| `providerOptions` | `array` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `array` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `array` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `array` | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | For kind=router: how to order candidates. |
| `serviceTier` | `string` | Service tier for providers that support it. |
| `sort` | `string` | Rank eligible providers by an attribute. |
| `speed` | `string` | Only use fastest providers with short timeouts. |
| `status` | `string` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float` | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | Only use providers with zero data retention. |

#### Example: List

```php
// list() returns an array of AiGatewayVirtualModelConfigList records (throws on error).
$ai_gateway_virtual_model_config_lists = $client->AiGatewayVirtualModelConfigList()->list();
```


### Alias

Create an instance: `$alias = $client->Alias();`

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
| `createdAt` | `float` | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `array` | Information of the user who created the alias |
| `deletedAt` | `float` | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `array` | A map with the deployment ID, URL and metadata |
| `deploymentId` | `string` | The deployment ID |
| `id` | `string` |  |
| `microfrontends` | `array` | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `string` | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `string` | The unique identifier of the project |
| `protectionBypass` | `array` | The protection bypass for the alias |
| `redirect` | `string` | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | `float` | Status code to be used on redirect |
| `uid` | `string` | The unique identifier of the alias |
| `updatedAt` | `float` | The date when the alias was updated in milliseconds since the UNIX epoch |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Alias record (throws on error).
$alias = $client->Alias()->load(["id" => "alias_id"]);
```

#### Example: List

```php
// list() returns an array of Alias records (throws on error).
$aliass = $client->Alias()->list();
```

#### Example: Create

```php
$alias = $client->Alias()->create([
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


### ApiAiGateway

Create an instance: `$api_ai_gateway = $client->ApiAiGateway();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ApiAiGateway record (throws on error).
$api_ai_gateway = $client->ApiAiGateway()->load();
```


### ApiKey

Create an instance: `$api_key = $client->ApiKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeAt` | `float` | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `array` | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `float` | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `string` | The ID of the user who created the API key. |
| `createdByAppId` | `string` | The ID of the app that created the API key, if any |
| `expiresAt` | `float` | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `string` | The unique identifier of the API key. |
| `leakedAt` | `float` | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `string` | URL where the API key was discovered as leaked. |
| `metadata` | `array` | Generic metadata attached to the API key. |
| `name` | `string` | The human-readable name of the API key. |
| `partialKey` | `string` | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `string` | The ID of the project that this API key grants access to. |
| `purpose` | `string` | The API key's purpose, i.e. |
| `quota` | `array` | AI Gateway quota associated with an API key. |
| `teamId` | `string` | The ID of the team that the API key grants access to. |

#### Example: Create

```php
$api_key = $client->ApiKey()->create([
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


### Artifact

Create an instance: `$artifact = $client->Artifact();`

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
| `hashes` | `array` | artifact hashes |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Artifact record (throws on error).
$artifact = $client->Artifact()->load(["id" => "artifact_id"]);
```

#### Example: Create

```php
$artifact = $client->Artifact()->create([
    "hashes" => null, // array
]);
```


### Authentication

Create an instance: `$authentication = $client->Authentication();`

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
| `id` | `string` | The unique identifier of the token. |
| `leakedAt` | `float` | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | `string` | URL where the token was discovered as leaked. |
| `name` | `string` | The human-readable name of the token. |
| `origin` | `string` | The origin of how the token was created. |
| `prefix` | `string` | The token's prefix, for identification purposes. |
| `projectId` | `string` | The ID of the project to scope this token to |
| `revokedAt` | `float` | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | `array` | The access scopes granted to the token. |
| `suffix` | `string` | The last few characters of the token, for identification purposes. |
| `type` | `string` | The type of the token. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Authentication record (throws on error).
$authentication = $client->Authentication()->load(["token_id" => "token_id"]);
```

#### Example: Create

```php
$authentication = $client->Authentication()->create([
    "activeAt" => null, // float
    "createdAt" => null, // float
    "id" => null, // string
    "name" => null, // string
    "type" => null, // string
]);
```


### Billing

Create an instance: `$billing = $client->Billing();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Billing record (throws on error).
$billing = $client->Billing()->load(["from" => "from", "to" => "to"]);
```

#### Example: Create

```php
$billing = $client->Billing()->create([
]);
```


### BulkRedirect

Create an instance: `$bulk_redirect = $client->BulkRedirect();`

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
| `isLive` | `bool` | Whether this version is currently live in production. |
| `isStaging` | `bool` | Whether this version has not been promoted to production yet and is not serving end users. |
| `key` | `string` | The key of the version. |
| `lastModified` | `float` |  |
| `name` | `string` | Optional name for the version. |
| `overwrite` | `bool` |  |
| `projectId` | `string` |  |
| `redirect` | `array` | The redirect object to edit. |
| `redirectCount` | `float` | The number of redirects in this version. |
| `redirects` | `array` |  |
| `restore` | `bool` | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BulkRedirect record (throws on error).
$bulk_redirect = $client->BulkRedirect()->load(["project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of BulkRedirect records (throws on error).
$bulk_redirects = $client->BulkRedirect()->list();
```

#### Example: Create

```php
$bulk_redirect = $client->BulkRedirect()->create([
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


### Cert

Create an instance: `$cert = $client->Cert();`

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
| `autoRenew` | `bool` |  |
| `ca` | `string` | The certificate authority |
| `cert` | `string` | The certificate |
| `cns` | `array` | The common names the cert should be issued for |
| `createdAt` | `float` |  |
| `expiresAt` | `float` |  |
| `id` | `string` |  |
| `key` | `string` | The certificate key |
| `skipValidation` | `bool` | Skip validation of the certificate |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Cert record (throws on error).
$cert = $client->Cert()->load(["id" => "cert_id"]);
```

#### Example: List

```php
// list() returns an array of Cert records (throws on error).
$certs = $client->Cert()->list();
```

#### Example: Create

```php
$cert = $client->Cert()->create([
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


### Check

Create an instance: `$check = $client->Check();`

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
| `blocking` | `bool` | Whether the check should block a deployment from succeeding |
| `blocks` | `string` |  |
| `completedAt` | `float` |  |
| `conclusion` | `mixed` | The result of the check being run |
| `createdAt` | `float` |  |
| `deletedAt` | `float` |  |
| `detailsUrl` | `string` | URL to display for further details |
| `externalId` | `string` | An identifier that can be used as an external reference |
| `id` | `string` |  |
| `integrationId` | `string` |  |
| `isRerequestable` | `bool` |  |
| `metrics` | `array` |  |
| `name` | `string` | The name of the check being created |
| `output` | `array` | The results of the check Run |
| `ownerId` | `string` |  |
| `path` | `string` | Path of the page that is being checked |
| `projectId` | `string` |  |
| `requires` | `string` |  |
| `rerequestable` | `bool` | Whether a user should be able to request for the check to be rerun if it fails |
| `source` | `mixed` |  |
| `sourceIntegrationConfigurationId` | `string` |  |
| `sourceKind` | `string` |  |
| `startedAt` | `float` |  |
| `status` | `mixed` | The current status of the check |
| `targets` | `array` |  |
| `timeout` | `float` |  |
| `updatedAt` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Check record (throws on error).
$check = $client->Check()->load(["id" => "check_id"]);
```

#### Example: List

```php
// list() returns an array of Check records (throws on error).
$checks = $client->Check()->list();
```

#### Example: Create

```php
$check = $client->Check()->create([
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


### ChecksV2

Create an instance: `$checks_v2 = $client->ChecksV2();`

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
| `completedAt` | `float` |  |
| `conclusion` | `string` |  |
| `conclusionText` | `string` |  |
| `externalId` | `string` |  |
| `externalUrl` | `string` |  |
| `output` | `array` |  |
| `runs` | `array` |  |
| `status` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ChecksV2 record (throws on error).
$checks_v2 = $client->ChecksV2()->load(["check_run_id" => "check_run_id", "deployment_id" => "deployment_id"]);
```

#### Example: List

```php
// list() returns an array of ChecksV2 records (throws on error).
$checks_v2s = $client->ChecksV2()->list();
```

#### Example: Create

```php
$checks_v2 = $client->ChecksV2()->create([
    "deployment_id" => null, // string
    "checkId" => null, // string
    "runs" => null, // array
]);
```


### Connect

Create an instance: `$connect = $client->Connect();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additionalParams` | `array` |  |
| `audience` | `array` |  |
| `authorizationDetails` | `array` |  |
| `authorizationId` | `string` | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `array` | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `array` |  |
| `deviceCode` | `bool` |  |
| `displayName` | `string` | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `float` |  |
| `expiresInMs` | `float` |  |
| `externalSubject` | `string` |  |
| `id` | `string` | Client id (e.g. |
| `installationId` | `string` |  |
| `metadata` | `array` | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `string` | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `string` |  |
| `resources` | `array` |  |
| `returnUrl` | `string` |  |
| `scopes` | `array` |  |
| `service` | `string` | Resolved service id when known (e.g. |
| `serviceName` | `string` | Curated display name of the resolved service (e.g. |
| `subject` | `mixed` |  |
| `tenantId` | `string` |  |
| `token` | `string` |  |
| `tokenGroupId` | `string` | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` | `string` |  |
| `type` | `string` | Client type (e.g. |
| `uid` | `string` | Client uid (e.g. |
| `validityBufferMs` | `float` |  |
| `webhook` | `string` |  |

#### Example: Create

```php
$connect = $client->Connect()->create([
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


### ConnectConnector

Create an instance: `$connect_connector = $client->ConnectConnector();`

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
| `appTokens` | `array` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | The connection method this connector was created from, when the create request named one. |
| `connector` | `array` | Updated connector. |
| `createdAt` | `float` | Creation time in epoch milliseconds. |
| `createdBy` | `mixed` | Principal that created the connector. |
| `creationMode` | `string` | How the connector row was originally created. |
| `data` | `mixed` | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `string` | Installation used when a token request does not specify an installation. |
| `destinations` | `array` | Complete replacement set of trigger destinations. |
| `devsite` | `string` | Developer website for the connected service. |
| `displayName` | `string` | Human-readable connector name. |
| `docsite` | `string` | Developer documentation for the connected service. |
| `environments` | `array` | Environments for the project connection. |
| `events` | `array` | Known events this connector subscribes to (e.g. |
| `icon` | `string` | Connector branding icon. |
| `id` | `string` | Stable `scl_` connector ID. |
| `knownStale` | `bool` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `array` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Connector name within the owning team. |
| `params` | `array` | Values for the selected connection method's template fields. |
| `projectId` | `string` | Project to connect during creation. |
| `reconsentNeeded` | `array` | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `string` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `bool` | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `string` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `array` | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `array` | Token subject types supported by the connector. |
| `supportsIcon` | `mixed` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Whether this connector type supports trigger webhooks. |
| `target` | `string` | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `mixed` | Initial trigger destination. |
| `triggerDestinations` | `array` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `array` | Incoming trigger configuration for the connector. |
| `type` | `string` | Connector implementation type. |
| `typeIcon` | `string` | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Human-readable name of the connector type. |
| `uid` | `string` | Team-scoped UID. |
| `updatedAt` | `float` | Last update time in epoch milliseconds. |
| `updatedBy` | `mixed` | Principal that most recently updated the connector. |
| `userTokens` | `array` | User-token capabilities and known grants for the connector. |
| `website` | `string` | Public website for the connected service. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ConnectConnector record (throws on error).
$connect_connector = $client->ConnectConnector()->load(["id" => "connect_connector_id"]);
```

#### Example: Create

```php
$connect_connector = $client->ConnectConnector()->create([
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


### ConnectConnectorList

Create an instance: `$connect_connector_list = $client->ConnectConnectorList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `string` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `array` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | The connection method this connector was created from, when the create request named one. |
| `createdAt` | `float` | Creation time in epoch milliseconds. |
| `createdBy` | `mixed` | Principal that created the connector. |
| `creationMode` | `string` | How the connector row was originally created. |
| `defaultInstallationId` | `string` | Installation used when a token request does not specify an installation. |
| `devsite` | `string` | Developer website for the connected service. |
| `displayName` | `string` | Human-readable connector name. |
| `docsite` | `string` | Developer documentation for the connected service. |
| `events` | `array` | Known events this connector subscribes to (e.g. |
| `icon` | `string` | Connector branding icon. |
| `id` | `string` | Stable `scl_` connector ID. |
| `knownStale` | `bool` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `array` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Connector name within the owning team. |
| `redirectUri` | `string` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `string` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `array` | Token subject types supported by the connector. |
| `supportsIcon` | `mixed` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Whether this connector type supports trigger webhooks. |
| `target` | `string` | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `array` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `array` | Incoming trigger configuration for the connector. |
| `type` | `string` | Connector implementation type. |
| `typeIcon` | `string` | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Human-readable name of the connector type. |
| `uid` | `string` | Team-scoped UID. |
| `updatedAt` | `float` | Last update time in epoch milliseconds. |
| `updatedBy` | `mixed` | Principal that most recently updated the connector. |
| `userTokens` | `array` | User-token capabilities and known grants for the connector. |
| `website` | `string` | Public website for the connected service. |

#### Example: List

```php
// list() returns an array of ConnectConnectorList records (throws on error).
$connect_connector_lists = $client->ConnectConnectorList()->list();
```


### ConnectConnectorProjectConnectionList

Create an instance: `$connect_connector_project_connection_list = $client->ConnectConnectorProjectConnectionList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `array` | Environments where the connector is enabled for the project. |
| `project` | `array` | Vercel project connected to the connector. |
| `updatedAt` | `float` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: List

```php
// list() returns an array of ConnectConnectorProjectConnectionList records (throws on error).
$connect_connector_project_connection_lists = $client->ConnectConnectorProjectConnectionList()->list();
```


### ConnectProjectConnection

Create an instance: `$connect_project_connection = $client->ConnectProjectConnection();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `array` | Environments where the connector is enabled for the project. |
| `environments` | `array` | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `array` | Vercel project connected to the connector. |
| `updatedAt` | `float` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ConnectProjectConnection record (throws on error).
$connect_project_connection = $client->ConnectProjectConnection()->load(["connector_id" => "connector_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$connect_project_connection = $client->ConnectProjectConnection()->create([
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


### ConnectProjectConnectorConnectionList

Create an instance: `$connect_project_connector_connection_list = $client->ConnectProjectConnectorConnectionList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `array` | Environments where the connector is enabled for the project. |
| `project` | `array` | Vercel project connected to the connector. |
| `updatedAt` | `float` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: List

```php
// list() returns an array of ConnectProjectConnectorConnectionList records (throws on error).
$connect_project_connector_connection_lists = $client->ConnectProjectConnectorConnectionList()->list();
```


### Deployment

Create an instance: `$deployment = $client->Deployment();`

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
| `aliasAssigned` | `mixed` |  |
| `aliasError` | `array` | An error object in case aliasing of the deployment failed. |
| `attribution` | `array` | Commit attribution metadata |
| `buildMachine` | `string` | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `float` | Timestamp of when the deployment started building at. |
| `checks` | `array` | Detailed information about v2 deployment checks. |
| `checksConclusion` | `string` | Conclusion for checks |
| `checksState` | `string` | State of all registered checks |
| `connectBuildsEnabled` | `bool` | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `string` | The ID of Secure Compute network used for this deployment |
| `created` | `float` | Timestamp of when the deployment got created. |
| `createdAt` | `float` |  |
| `creator` | `array` | Metadata information of the deployment creator. |
| `customEnvironment` | `array` | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `string` | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `string` | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `float` | Timestamp of when the deployment got deleted. |
| `deploymentId` | `string` | The ID of an existing deployment to redeploy. |
| `errorCode` | `string` | Error code when the deployment is in an error state. |
| `errorMessage` | `string` | Error message when the deployment is in an canceled or error state. |
| `expiration` | `float` | The expiration configured by the project retention policy |
| `files` | `array` | The files to include in the deployment. |
| `gitAccessToken` | `string` | Available only to Vercel platform accounts. |
| `gitMetadata` | `array` | Populates initial git metadata for different git providers. |
| `gitSource` | `mixed` | Defines the Git Repository source to be deployed. |
| `id` | `string` |  |
| `inspectorUrl` | `string` | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `bool` | Deployment can be used for instant rollback |
| `manualProvisioning` | `array` |  |
| `meta` | `array` | An object containing the deployment's metadata. |
| `monorepoManager` | `string` | The monorepo manager that is being used for this deployment. |
| `name` | `string` | A string with the project name used in the deployment URL |
| `oomReport` | `string` | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `array` |  |
| `passiveConnectConfigurationId` | `string` | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `array` | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `bool` |  |
| `project` | `string` | The target project identifier in which the deployment will be created. |
| `projectId` | `string` | The project ID of the deployment |
| `projectSettings` | `array` | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `float` | The expiration proposed to replace the existing expiration |
| `ready` | `float` | Timestamp of when the deployment got ready. |
| `readyState` | `string` |  |
| `readySubstate` | `string` | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `array` | NSNB Blocked metadata |
| `softDeletedByRetention` | `bool` | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | `string` | The source of the deployment. |
| `state` | `string` | In which state is the deployment. |
| `status` | `string` |  |
| `statusText` | `string` |  |
| `statusUrl` | `string` |  |
| `target` | `string` | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | `string` | The type of the deployment. |
| `uid` | `string` | The unique identifier of the deployment. |
| `undeleted` | `float` | Timestamp of when the deployment was undeleted. |
| `url` | `string` | The URL of the deployment. |
| `withLatestCommit` | `bool` | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Deployment record (throws on error).
$deployment = $client->Deployment()->load(["id" => "deployment_id"]);
```

#### Example: List

```php
// list() returns an array of Deployment records (throws on error).
$deployments = $client->Deployment()->list();
```

#### Example: Create

```php
$deployment = $client->Deployment()->create([
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


### Dns

Create an instance: `$dns = $client->Dns();`

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
| `createdAt` | `float` |  |
| `creator` | `string` |  |
| `domain` | `string` |  |
| `https` | `array` |  |
| `id` | `string` |  |
| `mxPriority` | `int` | The MX priority value of the DNS record |
| `name` | `string` | The name of the DNS record |
| `recordType` | `string` |  |
| `srv` | `array` |  |
| `ttl` | `float` | The Time to live (TTL) value of the DNS record |
| `type` | `string` | The type of record, it could be one of the valid DNS records. |
| `value` | `string` | The value of the DNS record |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Dns record (throws on error).
$dns = $client->Dns()->load(["domain_id" => "domain_id"]);
```

#### Example: Create

```php
$dns = $client->Dns()->create([
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


### Domain

Create an instance: `$domain = $client->Domain();`

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
| `boughtAt` | `float` | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `float` | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `array` | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `array` | A list of custom nameservers for the domain to point to. |
| `echMode` | `string` | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `float` | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `string` | The unique identifier of the domain. |
| `intendedNameservers` | `array` | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `string` | The domain operation to perform. |
| `name` | `string` | The domain name. |
| `nameservers` | `array` | A list of the current nameservers of the domain. |
| `renew` | `bool` | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `string` | The type of service the domain is handled by. |
| `suffix` | `bool` |  |
| `teamId` | `string` |  |
| `transferStartedAt` | `float` | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `float` | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `string` |  |
| `verified` | `bool` | If the domain has the ownership verified. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Domain record (throws on error).
$domain = $client->Domain()->load(["id" => "domain_id"]);
```

#### Example: List

```php
// list() returns an array of Domain records (throws on error).
$domains = $client->Domain()->list();
```

#### Example: Create

```php
$domain = $client->Domain()->create([
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


### DomainsRegistrar

Create an instance: `$domains_registrar = $client->DomainsRegistrar();`

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
| `autoRenew` | `bool` | Whether the domain should be auto-renewed before it expires. |
| `available` | `bool` |  |
| `contactInformation` | `array` | The contact information for the domain. |
| `domains` | `array` | an array of at most 50 item(s) |
| `error` | `mixed` |  |
| `expectedPrice` | `float` |  |
| `languageCode` | `string` | The language code for the domain. |
| `nameservers` | `array` |  |
| `orderId` | `string` | A valid order ID |
| `purchasePrice` | `mixed` |  |
| `renewalPrice` | `mixed` |  |
| `results` | `array` |  |
| `status` | `string` |  |
| `transferPrice` | `mixed` |  |
| `years` | `float` | The number of years the returned price is for. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DomainsRegistrar record (throws on error).
$domains_registrar = $client->DomainsRegistrar()->load(["order_id" => "order_id"]);
```

#### Example: Create

```php
$domains_registrar = $client->DomainsRegistrar()->create([
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


### Drain

Create an instance: `$drain = $client->Drain();`

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
| `delivery` | `array` |  |
| `drains` | `mixed` |  |
| `filter` | `array` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `projectIds` | `array` |  |
| `projects` | `string` |  |
| `sampling` | `array` |  |
| `schemas` | `array` |  |
| `source` | `array` |  |
| `status` | `string` |  |
| `transforms` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Drain record (throws on error).
$drain = $client->Drain()->load(["id" => "drain_id"]);
```

#### Example: Create

```php
$drain = $client->Drain()->create([
    "drains" => null, // mixed
    "filter" => null, // array
    "name" => null, // string
    "projects" => null, // string
    "schemas" => null, // array
]);
```


### EdgeCache

Create an instance: `$edge_cache = $client->EdgeCache();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$edge_cache = $client->EdgeCache()->create([
    "project_id_or_name" => null, // string
]);
```


### Env

Create an instance: `$env = $client->Env();`

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
| `applyToAllCustomEnvironments` | `bool` | whether or not this env varible applies to custom environments |
| `comment` | `string` | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `string` | The date when the Shared Env Var was created. |
| `createdAt` | `float` | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `string` | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `array` | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `bool` | whether or not this env variable is decrypted |
| `deletedAt` | `float` | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `string` | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `array` |  |
| `failed` | `array` |  |
| `id` | `string` | The unique identifier of the Shared Env Var. |
| `key` | `string` | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `string` | The last editor full name or username. |
| `ownerId` | `string` | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `array` | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `array` |  |
| `target` | `array` | environments this env variable targets |
| `type` | `string` | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `array` |  |
| `updatedAt` | `float` | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `string` | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `array` | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
| `value` | `string` | The value of the Shared Env Var. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Env record (throws on error).
$env = $client->Env()->load(["id" => "env_id"]);
```

#### Example: List

```php
// list() returns an array of Env records (throws on error).
$envs = $client->Env()->list();
```

#### Example: Create

```php
$env = $client->Env()->create([
    "evs" => null, // array
    "failed" => null, // array
    "securityIssues" => null, // array
    "updated" => null, // array
    "updates" => null, // array
]);
```


### Environment

Create an instance: `$environment = $client->Environment();`

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
| `branchMatcher` | `array` | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `string` | Where to copy environment variables from. |
| `createdAt` | `float` | Timestamp when the environment was created |
| `currentDeploymentAliases` | `array` | List of aliases for the current deployment |
| `description` | `string` | Optional description of the environment's purpose |
| `domains` | `array` | List of domains associated with this environment |
| `id` | `string` | Unique identifier for the custom environment (format: env_*) |
| `slug` | `string` | URL-friendly name of the environment |
| `type` | `string` | The type of environment (production, preview, or development) |
| `updatedAt` | `float` | Timestamp when the environment was last updated |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Environment record (throws on error).
$environment = $client->Environment()->load(["environment_slug_or_id" => "environment_slug_or_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Environment records (throws on error).
$environments = $client->Environment()->list();
```

#### Example: Create

```php
$environment = $client->Environment()->create([
    "id_or_name" => null, // string
    "branchMatcher" => null, // array
    "createdAt" => null, // float
    "id" => null, // string
    "type" => null, // string
    "updatedAt" => null, // float
]);
```


### FeatureFlag

Create an instance: `$feature_flag = $client->FeatureFlag();`

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
| `changedEnvironments` | `array` |  |
| `createdAt` | `float` |  |
| `createdBy` | `string` | The user who created this patch |
| `data` | `array` | The data of the segment |
| `description` | `string` | A description of the flag |
| `environments` | `array` | The configuration for the flag in different environments |
| `flagId` | `string` |  |
| `flags` | `array` |  |
| `hint` | `string` |  |
| `id` | `string` |  |
| `kind` | `string` | The kind of flag |
| `label` | `string` |  |
| `maintainerIds` | `array` | The user ids of the maintainers of the flag |
| `message` | `string` | Additional message for this version |
| `metadata` | `array` |  |
| `operations` | `array` |  |
| `ownerId` | `string` |  |
| `pagination` | `array` |  |
| `permanent` | `bool` | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `string` |  |
| `revision` | `float` |  |
| `seed` | `float` | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `string` | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `string` |  |
| `status` | `array` |  |
| `tags` | `array` | Tags for categorizing the flag |
| `typeName` | `string` |  |
| `updatedAt` | `float` |  |
| `updatedBy` | `string` |  |
| `variants` | `array` | The variants of the flag |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the FeatureFlag record (throws on error).
$feature_flag = $client->FeatureFlag()->load(["team_id" => "team_id"]);
```

#### Example: List

```php
// list() returns an array of FeatureFlag records (throws on error).
$feature_flags = $client->FeatureFlag()->list();
```


### File

Create an instance: `$file = $client->File();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `array` | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `string` | The content-type of the file (only valid for the `file` type) |
| `mode` | `float` | The file "mode" indicating file type and permissions. |
| `name` | `string` | The name of the file tree entry |
| `type` | `string` | String indicating the type of file tree entry. |
| `uid` | `string` | The unique identifier of the file (only valid for the `file` type) |

#### Example: List

```php
// list() returns an array of File records (throws on error).
$files = $client->File()->list();
```


### Flag

Create an instance: `$flag = $client->Flag();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `createdBy` | `string` |  |
| `description` | `string` |  |
| `environments` | `array` |  |
| `id` | `string` |  |
| `kind` | `string` |  |
| `maintainerIds` | `array` |  |
| `metadata` | `array` |  |
| `ownerId` | `string` |  |
| `permanent` | `bool` |  |
| `projectId` | `string` |  |
| `revision` | `float` |  |
| `seed` | `float` |  |
| `slug` | `string` |  |
| `state` | `string` |  |
| `tags` | `array` |  |
| `typeName` | `string` |  |
| `updatedAt` | `float` |  |
| `updatedBy` | `string` |  |
| `variants` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Flag record (throws on error).
$flag = $client->Flag()->load(["id" => "flag_id", "project_id" => "project_id"]);
```


### FlagsSdkKeyWithSecret

Create an instance: `$flags_sdk_key_with_secret = $client->FlagsSdkKeyWithSecret();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `createdBy` | `string` |  |
| `deletedAt` | `float` |  |
| `environment` | `string` |  |
| `hashKey` | `string` |  |
| `keyValue` | `string` | Cleartext value of the SDK key. |
| `label` | `string` |  |
| `partialKeyValue` | `string` | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` | `string` |  |
| `sdkKeyType` | `string` |  |
| `tokenValue` | `string` | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` | `string` |  |
| `updatedAt` | `float` |  |


### GlobalConfig

Create an instance: `$global_config = $client->GlobalConfig();`

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
| `createdAt` | `float` |  |
| `createdBy` | `string` | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` | `float` |  |
| `digest` | `string` |  |
| `id` | `string` |  |
| `itemCount` | `float` |  |
| `items` | `array` |  |
| `ownerId` | `string` |  |
| `purpose` | `mixed` |  |
| `schema` | `array` |  |
| `sizeInBytes` | `float` |  |
| `slug` | `string` | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `float` | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `array` | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GlobalConfig record (throws on error).
$global_config = $client->GlobalConfig()->load(["id" => "global_config_id"]);
```

#### Example: List

```php
// list() returns an array of GlobalConfig records (throws on error).
$global_configs = $client->GlobalConfig()->list();
```

#### Example: Create

```php
$global_config = $client->GlobalConfig()->create([
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


### GlobalConfigItem

Create an instance: `$global_config_item = $client->GlobalConfigItem();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `description` | `string` |  |
| `edgeConfigId` | `string` |  |
| `id` | `string` |  |
| `key` | `string` |  |
| `updatedAt` | `float` |  |
| `value` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GlobalConfigItem record (throws on error).
$global_config_item = $client->GlobalConfigItem()->load(["id" => "global_config_item_id", "global_config_id" => "global_config_id"]);
```

#### Example: List

```php
// list() returns an array of GlobalConfigItem records (throws on error).
$global_config_items = $client->GlobalConfigItem()->list();
```


### GlobalConfigToken

Create an instance: `$global_config_token = $client->GlobalConfigToken();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `edgeConfigId` | `string` |  |
| `id` | `string` | This is not the token itself, but rather an id to identify the token by |
| `label` | `string` |  |
| `partialToken` | `string` | A partially-masked representation of the token, safe to display in UIs. |
| `token` | `string` | Deprecated: the full, plaintext token. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GlobalConfigToken record (throws on error).
$global_config_token = $client->GlobalConfigToken()->load(["id" => "global_config_token_id"]);
```


### Integration

Create an instance: `$integration = $client->Integration();`

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
| `details` | `array` |  |
| `disabled` | `bool` |  |
| `effectiveDate` | `string` |  |
| `envVarEnvironments` | `array` |  |
| `highlightedDetails` | `array` |  |
| `id` | `string` |  |
| `initialCharge` | `string` |  |
| `makeEnvVarsSensitive` | `bool` |  |
| `maximumAmount` | `string` |  |
| `maximumAmountAutoPurchasePerPeriod` | `string` |  |
| `metadataSchema` | `array` |  |
| `minimumAmount` | `string` |  |
| `name` | `string` |  |
| `paymentMethodRequired` | `bool` |  |
| `preauthorizationAmount` | `float` |  |
| `primaryProtocol` | `string` |  |
| `projectId` | `string` |  |
| `protocols` | `array` |  |
| `quote` | `array` |  |
| `scope` | `string` |  |
| `slug` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Integration record (throws on error).
$integration = $client->Integration()->load(["id" => "integration_id"]);
```

#### Example: List

```php
// list() returns an array of Integration records (throws on error).
$integrations = $client->Integration()->list();
```

#### Example: Create

```php
$integration = $client->Integration()->create([
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


### Kms

Create an instance: `$kms = $client->Kms();`

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
| `claims` | `array` | The claims to include in the token. |
| `claimsSchema` | `array` | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `string` |  |
| `environments` | `array` | The environments for the project grant policy. |
| `headers` | `array` | Additional headers to include in the token. |
| `id` | `string` |  |
| `importKey` | `string` | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `string` | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `string` | Key id of the signing key. |
| `key_ops` | `array` |  |
| `kid` | `string` |  |
| `kind` | `string` |  |
| `kty` | `string` |  |
| `managedBy` | `string` |  |
| `message` | `string` | Base64-encoded message to be signed. |
| `name` | `string` | The name of the issuer. |
| `origin` | `string` |  |
| `ownerId` | `string` |  |
| `policies` | `array` |  |
| `projectId` | `string` | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `float` | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `mixed` | Deprecated. |
| `signature` | `string` | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `array` |  |
| `token` | `string` |  |
| `tokenClaims` | `array` | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `float` | The time-to-live for the token, in seconds. |
| `updatedAt` | `string` |  |
| `use` | `string` |  |
| `x5c` | `array` | The X.509 certificate chain (RFC 7517 §4.7). |
| `x5tS256` | `string` | The base64url SHA-256 thumbprint of the DER certificate in `x5c[0]` (RFC 7517 §4.9). |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Kms record (throws on error).
$kms = $client->Kms()->load(["issuer_id" => "issuer_id"]);
```

#### Example: List

```php
// list() returns an array of Kms records (throws on error).
$kmss = $client->Kms()->list();
```

#### Example: Create

```php
$kms = $client->Kms()->create([
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


### ListEventType

Create an instance: `$list_event_type = $client->ListEventType();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `array` |  |
| `types` | `array` |  |

#### Example: List

```php
// list() returns an array of ListEventType records (throws on error).
$list_event_types = $client->ListEventType()->list();
```


### Log

Create an instance: `$log = $client->Log();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Log record (throws on error).
$log = $client->Log()->load(["deployment_id" => "deployment_id", "project_id" => "project_id"]);
```


### LogDrain

Create an instance: `$log_drain = $client->LogDrain();`

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
| `createdAt` | `float` | A timestamp that tells you when the log drain was created |
| `createdFrom` | `string` | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | `mixed` | The delivery log format |
| `environments` | `array` | The environment of log drain |
| `headers` | `array` | Headers to be sent together with the request |
| `id` | `string` | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `string` |  |
| `integrationIcon` | `string` |  |
| `integrationWebsite` | `string` |  |
| `name` | `string` | The custom name of this log drain. |
| `ownerId` | `string` | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `string` |  |
| `projectIds` | `array` | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `array` |  |
| `samplingRate` | `float` | The sampling rate for this log drain. |
| `secret` | `string` | Custom secret of log drain |
| `source` | `mixed` |  |
| `sources` | `array` | The sources from which logs are currently being delivered to this log drain. |
| `url` | `string` | The log drain url |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LogDrain record (throws on error).
$log_drain = $client->LogDrain()->load(["id" => "log_drain_id"]);
```

#### Example: List

```php
// list() returns an array of LogDrain records (throws on error).
$log_drains = $client->LogDrain()->list();
```

#### Example: Create

```php
$log_drain = $client->LogDrain()->create([
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


### Marketplace

Create an instance: `$marketplace = $client->Marketplace();`

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
| `already_revoked` | `bool` |  |
| `balances` | `array` |  |
| `billing` | `mixed` | Billing data (interim invoicing data). |
| `billingPlan` | `array` |  |
| `billingPlanId` | `string` | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `string` |  |
| `client_id` | `string` |  |
| `client_secret` | `string` |  |
| `created` | `string` | System creation date. |
| `createdAt` | `float` |  |
| `data` | `array` |  |
| `description` | `string` |  |
| `discounts` | `array` | Invoice discounts. |
| `email` | `string` |  |
| `eod` | `string` | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `mixed` |  |
| `expires_in` | `float` |  |
| `externalId` | `string` | Partner-supplied Invoice ID, if applicable. |
| `extras` | `array` |  |
| `final` | `bool` | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `string` |  |
| `id` | `string` | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `string` | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `string` | Invoice date. |
| `invoiceId` | `string` | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `string` | User-readable invoice number. |
| `isArchived` | `bool` |  |
| `items` | `array` | Invoice items. |
| `memo` | `string` | Additional memo for the invoice. |
| `metadata` | `array` | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `string` | The name of the resource as it is recorded in Vercel |
| `notification` | `array` | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `string` |  |
| `ownership` | `string` |  |
| `paidAt` | `string` | Moment the invoice was paid. |
| `partial` | `bool` | If true, will only update the provided secrets |
| `partnerId` | `string` | The ID provided by the partner for the given resource |
| `period` | `array` | Subscription period for this billing cycle. |
| `productId` | `string` | The ID of the product the resource is derived from |
| `protocolSettings` | `array` | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `string` | The reason for refund. |
| `refundTotal` | `string` | Refund amount. |
| `refundedAt` | `string` | Most recent moment the invoice was refunded. |
| `revoked` | `bool` |  |
| `role` | `string` | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `string` |  |
| `secrets` | `array` |  |
| `slug` | `string` |  |
| `state` | `string` | Invoice state. |
| `status` | `string` | The current status of the resource |
| `test` | `bool` | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | `string` | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` | `string` |  |
| `token_type` | `string` |  |
| `total` | `string` | Invoice total amount. |
| `updated` | `string` | System update date. |
| `updatedAt` | `float` |  |
| `usage` | `array` |  |
| `userEmail` | `string` |  |
| `validationErrors` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Marketplace record (throws on error).
$marketplace = $client->Marketplace()->load(["installation_id" => "installation_id"]);
```

#### Example: List

```php
// list() returns an array of Marketplace records (throws on error).
$marketplaces = $client->Marketplace()->list();
```

#### Example: Create

```php
$marketplace = $client->Marketplace()->create([
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


### Microfrontend

Create an instance: `$microfrontend = $client->Microfrontend();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abuse` | `array` |  |
| `accountId` | `string` |  |
| `alias` | `array` |  |
| `analytics` | `array` |  |
| `applications` | `array` |  |
| `appliedCve55182Migration` | `bool` |  |
| `autoAssignCustomDomains` | `bool` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `bool` |  |
| `avatar` | `string` |  |
| `blobs` | `array` |  |
| `buildCommand` | `string` |  |
| `commandForIgnoringBuildStep` | `string` |  |
| `concurrencyBucketName` | `string` |  |
| `connectBuildsEnabled` | `bool` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `array` |  |
| `createdAt` | `float` |  |
| `creator` | `mixed` |  |
| `crons` | `array` |  |
| `customEnvironments` | `array` |  |
| `customerSupportCodeVisibility` | `bool` |  |
| `dataCache` | `array` |  |
| `defaultResourceConfig` | `array` |  |
| `deploymentExpiration` | `array` | Retention policies for deployments. |
| `deploymentPolicy` | `array` | Project shape. |
| `devCommand` | `string` |  |
| `directoryListing` | `bool` |  |
| `dismissedToasts` | `array` |  |
| `enableAffectedProjectsDeployments` | `bool` |  |
| `enableExternalRewriteCaching` | `bool` |  |
| `enablePreviewFeedback` | `bool` |  |
| `enableProductionFeedback` | `bool` |  |
| `env` | `array` |  |
| `expiration` | `mixed` |  |
| `features` | `array` |  |
| `framework` | `string` |  |
| `gitComments` | `array` |  |
| `gitForkProtection` | `bool` |  |
| `gitLFS` | `bool` |  |
| `gitProviderOptions` | `array` |  |
| `hasActiveBranches` | `bool` |  |
| `hasDeployments` | `bool` |  |
| `id` | `string` |  |
| `installCommand` | `string` |  |
| `internalRoutes` | `array` |  |
| `ipBuckets` | `array` |  |
| `jobs` | `array` |  |
| `lastAliasRequest` | `array` |  |
| `lastRollbackTarget` | `array` |  |
| `latestDeployments` | `array` |  |
| `link` | `string` |  |
| `live` | `bool` |  |
| `microfrontends` | `mixed` |  |
| `name` | `string` |  |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `array` |  |
| `options` | `array` | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `array` |  |
| `outputDirectory` | `string` |  |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `array` |  |
| `passwordProtection` | `array` |  |
| `paused` | `bool` |  |
| `permissions` | `array` |  |
| `productionDeploymentsFastLane` | `bool` |  |
| `protectedSourcemaps` | `bool` |  |
| `protectionBypass` | `array` |  |
| `protectionConfig` | `array` |  |
| `resourceConfig` | `array` |  |
| `rollbackDescription` | `array` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `array` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` |  |
| `sandbox` | `array` |  |
| `schema` | `string` | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `array` |  |
| `serverlessFunctionZeroConfigFailover` | `bool` |  |
| `services` | `array` |  |
| `skewProtectionAllowedDomains` | `array` |  |
| `skewProtectionBoundaryAt` | `float` |  |
| `skewProtectionMaxAge` | `float` |  |
| `skipGitConnectDuringLink` | `bool` |  |
| `sourceFilesOutsideRootDirectory` | `bool` |  |
| `speedInsights` | `array` |  |
| `ssoProtection` | `array` |  |
| `staticIps` | `array` |  |
| `targets` | `array` |  |
| `tier` | `string` |  |
| `tracing` | `array` |  |
| `transferCompletedAt` | `float` |  |
| `transferStartedAt` | `float` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `mixed` |  |
| `trustedSources` | `array` |  |
| `updatedAt` | `float` |  |
| `usageStatus` | `array` |  |
| `v0` | `bool` |  |
| `v0Created` | `bool` |  |
| `version` | `string` | The version of the microfrontends config schema. |
| `webAnalytics` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Microfrontend record (throws on error).
$microfrontend = $client->Microfrontend()->load(["project_id_or_name" => "project_id_or_name"]);
```

#### Example: List

```php
// list() returns an array of Microfrontend records (throws on error).
$microfrontends = $client->Microfrontend()->list();
```

#### Example: Create

```php
$microfrontend = $client->Microfrontend()->create([
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


### Network

Create an instance: `$network = $client->Network();`

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
| `awsAvailabilityZoneIds` | `array` | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `string` | The AWS Region in which the network exists. |
| `cidr` | `string` | The CIDR range of the Network. |
| `createdAt` | `float` | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `array` |  |
| `hostedZones` | `array` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `string` | The unique identifier of the Network. |
| `name` | `string` | The name of the network. |
| `peeringConnections` | `array` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `array` | Metadata about any projects associated with the Network. |
| `region` | `string` | The Vercel region in which the Network exists. |
| `status` | `string` | The status of the Network. |
| `teamId` | `string` | The unique identifier of the Team that owns the Network. |
| `vpcId` | `string` | The ID of the VPC which hosts the network. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Network record (throws on error).
$network = $client->Network()->load(["id" => "network_id"]);
```

#### Example: List

```php
// list() returns an array of Network records (throws on error).
$networks = $client->Network()->list();
```

#### Example: Create

```php
$network = $client->Network()->create([
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


### Networking

Create an instance: `$networking = $client->Networking();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `builds` | `bool` | Whether to use Static IPs for builds. |
| `regions` | `array` |  |


### Observability

Create an instance: `$observability = $client->Observability();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disabled` | `bool` | Whether Observability Plus should be disabled for the project |
| `disabledAt` | `float` |  |
| `id` | `string` |  |
| `name` | `string` |  |

#### Example: List

```php
// list() returns an array of Observability records (throws on error).
$observabilitys = $client->Observability()->list();
```


### PrivateLinkEndpoint

Create an instance: `$private_link_endpoint = $client->PrivateLinkEndpoint();`

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
| `awsDnsEntries` | `array` | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `string` | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `float` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `bool` | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `string` | The unique identifier of the PrivateLink endpoint. |
| `id` | `string` |  |
| `name` | `string` | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `array` | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | `string` | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | `string` | The current state of the endpoint. |
| `statusMessage` | `string` | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | `string` | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | `float` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
| `vercelRegion` | `string` | The Vercel region the endpoint is provisioned in. |
| `vpcEndpointId` | `string` | The identifier of the underlying AWS VPC endpoint. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PrivateLinkEndpoint record (throws on error).
$private_link_endpoint = $client->PrivateLinkEndpoint()->load(["id" => "private_link_endpoint_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of PrivateLinkEndpoint records (throws on error).
$private_link_endpoints = $client->PrivateLinkEndpoint()->list();
```

#### Example: Create

```php
$private_link_endpoint = $client->PrivateLinkEndpoint()->create([
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


### Project

Create an instance: `$project = $client->Project();`

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
| `abuse` | `array` |  |
| `acceptedPolicies` | `array` |  |
| `accountId` | `string` |  |
| `alias` | `array` |  |
| `analytics` | `array` |  |
| `apexName` | `string` |  |
| `appliedCve55182Migration` | `bool` |  |
| `autoAssignCustomDomains` | `bool` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `bool` |  |
| `avatar` | `string` |  |
| `blobs` | `array` |  |
| `buildCommand` | `string` | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` |  |
| `comment` | `string` | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `string` |  |
| `configurationId` | `string` |  |
| `connectBuildsEnabled` | `bool` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `array` | The list of connections from project environment to Secure Compute network |
| `contentHint` | `mixed` |  |
| `createdAt` | `float` |  |
| `createdBy` | `string` |  |
| `creator` | `mixed` |  |
| `crons` | `array` |  |
| `customEnvironmentId` | `string` |  |
| `customEnvironmentIds` | `array` | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `array` |  |
| `customerSupportCodeVisibility` | `bool` | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `array` |  |
| `decrypted` | `bool` |  |
| `defaultResourceConfig` | `array` |  |
| `deploymentExpiration` | `array` | Retention policies for deployments. |
| `deploymentPolicy` | `array` | Project shape. |
| `devCommand` | `string` | The dev command for this project. |
| `directoryListing` | `bool` |  |
| `dismissedToasts` | `array` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `string` |  |
| `edgeConfigTokenId` | `string` |  |
| `enableAffectedProjectsDeployments` | `bool` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | Opt-in to production toolbar on the project level |
| `env` | `array` |  |
| `environmentVariables` | `array` | Collection of ENV Variables the Project will use |
| `expiration` | `mixed` |  |
| `features` | `array` |  |
| `framework` | `string` | The framework that is being used for this project. |
| `gitBranch` | `string` | Git branch to link the project domain |
| `gitComments` | `array` |  |
| `gitForkProtection` | `bool` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `array` |  |
| `gitRepository` | `array` | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` |  |
| `hasDeployments` | `bool` |  |
| `hostname` | `string` | The deployment hostname to scope the trace session to. |
| `id` | `string` |  |
| `installCommand` | `string` | The install command for this project. |
| `integrations` | `array` |  |
| `internalContentHint` | `array` | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `array` |  |
| `ipBuckets` | `array` |  |
| `jobs` | `array` |  |
| `key` | `string` | The name of the environment variable |
| `lastAliasRequest` | `array` |  |
| `lastRollbackTarget` | `array` |  |
| `latestDeployments` | `array` |  |
| `legacyValue` | `string` | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `string` |  |
| `live` | `bool` |  |
| `microfrontends` | `mixed` |  |
| `name` | `string` | The desired name for the project |
| `newProjectName` | `string` | The desired name for the project |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `array` | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `array` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | The output directory of the project. |
| `paidFeatures` | `array` |  |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `array` | Passport configuration for the project. |
| `passwordProtection` | `array` | Allows to protect project deployments with a password |
| `paused` | `bool` |  |
| `permissions` | `array` |  |
| `previewDeploymentSuffix` | `string` | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` |  |
| `projectId` | `string` | The unique target project identifier |
| `protectedSourcemaps` | `bool` | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `array` |  |
| `protectionConfig` | `array` |  |
| `publicSource` | `bool` | Deprecated. |
| `redirect` | `string` | Target destination domain for redirect |
| `redirectStatusCode` | `float` | Status code for domain redirect |
| `resourceConfig` | `array` | Specifies resource override configuration for the project |
| `rollbackDescription` | `array` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `array` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `array` | Specifies the default region and failover regions for sandboxes created in the project |
| `security` | `array` |  |
| `serverlessFunctionRegion` | `string` | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `bool` | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `array` |  |
| `skewProtectionAllowedDomains` | `array` | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `float` | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `float` | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `bool` | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `bool` | Indicates if there are source files outside of the root directory |
| `speedInsights` | `array` |  |
| `ssoProtection` | `array` | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `array` | Manage Static IPs for this project |
| `sunsetSecretId` | `string` | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `mixed` | The target environment of the environment variable |
| `targets` | `array` |  |
| `tier` | `string` |  |
| `token` | `string` |  |
| `tracing` | `array` | Tracing configuration for this project |
| `transferCompletedAt` | `float` |  |
| `transferStartedAt` | `float` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `mixed` | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `array` | Deployment Protection Trusted Sources |
| `type` | `string` | The type of environment variable |
| `updatedAt` | `float` |  |
| `updatedBy` | `string` |  |
| `usageStatus` | `array` |  |
| `v0` | `bool` |  |
| `v0Created` | `bool` |  |
| `value` | `string` | The value of the environment variable |
| `verification` | `array` | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `bool` | `true` if the domain is verified for use with the project. |
| `visibility` | `string` | User-facing config/secret model. |
| `webAnalytics` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Project record (throws on error).
$project = $client->Project()->load(["id" => "project_id"]);
```

#### Example: Create

```php
$project = $client->Project()->create([
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


### ProjectMember

Create an instance: `$project_member = $client->ProjectMember();`

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

```php
// load() returns the ENTITY — call data_get() for the ProjectMember record (throws on error).
$project_member = $client->ProjectMember()->load(["id_or_name" => "id_or_name"]);
```

#### Example: Create

```php
$project_member = $client->ProjectMember()->create([
    "id_or_name" => null, // string
    "id" => null, // string
    "role" => null, // string
]);
```


### ProjectRoute

Create an instance: `$project_route = $client->ProjectRoute();`

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
| `actions` | `array` |  |
| `alias` | `string` | The staging alias for previewing this version. |
| `conditions` | `array` |  |
| `createdBy` | `string` | The user who created this version. |
| `currentRoute` | `array` |  |
| `description` | `string` |  |
| `id` | `string` | Unique identifier for the version. |
| `isLive` | `bool` | Whether this version is currently live in production. |
| `isStaging` | `bool` | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `float` | Timestamp of when this version was last modified. |
| `name` | `string` |  |
| `overwrite` | `bool` |  |
| `pathCondition` | `array` |  |
| `position` | `array` | Controls where the route is inserted. |
| `prompt` | `string` |  |
| `restore` | `bool` | If true, restores the staged route to the value in the production version. |
| `route` | `array` | The full route object to replace the existing route with |
| `routes` | `array` |  |
| `ruleCount` | `float` | The number of routing rules in this version. |
| `s3Key` | `string` | The S3 key where the routing rules are stored. |
| `version` | `array` | A version of routing rules stored in S3. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ProjectRoute record (throws on error).
$project_route = $client->ProjectRoute()->load(["id" => "project_route_id"]);
```

#### Example: List

```php
// list() returns an array of ProjectRoute records (throws on error).
$project_routes = $client->ProjectRoute()->list();
```

#### Example: Create

```php
$project_route = $client->ProjectRoute()->create([
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


### Query

Create an instance: `$query = $client->Query();`

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
| `granularity` | `array` | Time bucket size |
| `groupBy` | `array` | Dimensions to group results by. |
| `limit` | `float` | Maximum number of results |
| `metric` | `string` | Metric id |
| `orderBy` | `string` | Rollup column to order grouped results by. |
| `orderDirection` | `string` | Direction to order grouped results by. |
| `scope` | `array` | Owner or project scope for the query |
| `startTime` | `string` | Start timestamp |

#### Example: Create

```php
$query = $client->Query()->create([
    "metric" => null, // string
    "scope" => null, // array
]);
```


### Record

Create an instance: `$record = $client->Record();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` |  |
| `createdAt` | `float` |  |
| `creator` | `string` |  |
| `domain` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `recordType` | `string` |  |
| `ttl` | `float` |  |
| `type` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Record record (throws on error).
$record = $client->Record()->load(["id" => "record_id"]);
```


### RollingRelease

Create an instance: `$rolling_release = $client->RollingRelease();`

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
| `activeStage` | `array` | The currently active stage, null if the rollout is aborted |
| `advancementType` | `string` | The advancement type of the rolling release |
| `canaryDeployment` | `array` | The canary deployment being rolled out |
| `currentCanaryPercentage` | `float` | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `array` | The current deployment receiving production traffic |
| `nextStage` | `array` | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `string` | The ID of a deployment queued for the next rolling release |
| `stages` | `array` | All stages configured for this rolling release |
| `startedAt` | `float` | Unix timestamp in milliseconds when the rolling release started |
| `state` | `string` | The current state of the rolling release |
| `substate` | `string` | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `float` | Unix timestamp in milliseconds when the rolling release was last updated |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RollingRelease record (throws on error).
$rolling_release = $client->RollingRelease()->load(["id_or_name" => "id_or_name"]);
```

#### Example: Create

```php
$rolling_release = $client->RollingRelease()->create([
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


### Sandbox

Create an instance: `$sandbox = $client->Sandbox();`

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
| `args` | `array` | The arguments of the command. |
| `command` | `string` | The executable or shell command to run. |
| `createdAt` | `float` | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `string` | The method used to create the snapshot. |
| `currentSandboxName` | `string` | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `string` | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `string` | The snapshot ID to set as the current snapshot. |
| `cwd` | `string` | The current working directory of the command. |
| `durationMs` | `float` | Duration of the command execution in milliseconds. |
| `env` | `array` | Additional environment variables to set for this command. |
| `exitCode` | `float` | If the command did finish, the exit code. |
| `expiration` | `mixed` | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `float` | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `array` | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `string` | The ID of the command. |
| `image` | `string` | Image to use for the sandbox. |
| `keepLastSnapshots` | `array` | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `float` | The last time the snapshot was used (e.g. |
| `logs` | `bool` | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `float` | The maximum drive size in bytes. |
| `memory` | `float` | Memory allocated in MB. |
| `mounts` | `array` | List of drives to mount to the sandbox at the provided path. |
| `name` | `string` | The name of the command. |
| `networkId` | `string` | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `mixed` | Network policy configuration. |
| `parentId` | `string` | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `string` | The path of the directory to create. |
| `persistent` | `bool` | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `array` | List of ports to expose from the sandbox. |
| `projectId` | `string` | The project that owns the drive. |
| `recursive` | `bool` | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `string` | The region where the snapshot is stored. |
| `regions` | `array` | The regions where the snapshot is available. |
| `resources` | `array` | Resources to define the VM |
| `resumed` | `bool` |  |
| `routes` | `array` |  |
| `runtime` | `string` | The runtime environment for the sandbox. |
| `sandbox` | `array` | This object contains information related to a Vercel NamedSandbox. |
| `session` | `array` | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `string` | The ID of the session associated with the command. |
| `sizeBytes` | `float` | The size of the snapshot in bytes. |
| `snapshotExpiration` | `mixed` | Default snapshot expiration time in milliseconds. |
| `source` | `mixed` | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `string` | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `float` | When the command was started, in milliseconds since the epoch. |
| `status` | `string` | The status of the snapshot. |
| `statusUpdatedAt` | `float` | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `bool` | Execute the command with root (superuser) privileges. |
| `tags` | `array` | Key-value tags to associate with the sandbox. |
| `timeout` | `int` | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `totalActiveCpuDurationMs` | `float` | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `totalDurationMs` | `float` | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `totalEgressBytes` | `float` | Cumulative egress bytes across all sandbox runs. |
| `totalIngressBytes` | `float` | Cumulative ingress bytes across all sandbox runs. |
| `updatedAt` | `float` | The last time the snapshot was updated, in milliseconds since the epoch. |
| `vcpus` | `float` | Number of virtual CPUs allocated. |
| `wait` | `bool` | If true, returns an ND-JSON stream that emits the command status when started and again when finished. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Sandbox record (throws on error).
$sandbox = $client->Sandbox()->load(["id" => "sandbox_id"]);
```

#### Example: List

```php
// list() returns an array of Sandbox records (throws on error).
$sandboxs = $client->Sandbox()->list();
```

#### Example: Create

```php
$sandbox = $client->Sandbox()->create([
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


### Schema

Create an instance: `$schema = $client->Schema();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregations` | `array` |  |
| `defaultAggregation` | `string` |  |
| `description` | `string` |  |
| `dimensions` | `array` |  |
| `id` | `string` |  |
| `unit` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Schema record (throws on error).
$schema = $client->Schema()->load(["id" => "schema_id"]);
```

#### Example: List

```php
// list() returns an array of Schema records (throws on error).
$schemas = $client->Schema()->list();
```


### Security

Create an instance: `$security = $client->Security();`

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
| `ExpiresAt` | `float` |  |
| `Id` | `string` |  |
| `Ip` | `string` |  |
| `IsProjectRule` | `bool` |  |
| `Note` | `string` |  |
| `OwnerId` | `string` |  |
| `ProjectId` | `string` |  |
| `UpdatedAt` | `string` |  |
| `UpdatedAtHour` | `string` |  |
| `action` | `array` |  |
| `action_type` | `string` |  |
| `active` | `bool` |  |
| `allSources` | `bool` |  |
| `botIdEnabled` | `bool` |  |
| `changes` | `array` |  |
| `conditionGroup` | `array` |  |
| `conditions` | `array` |  |
| `count` | `float` |  |
| `crs` | `array` | Custom Ruleset |
| `description` | `string` |  |
| `domain` | `string` |  |
| `endTime` | `string` |  |
| `firewallEnabled` | `bool` |  |
| `host` | `string` |  |
| `id` | `string` |  |
| `ips` | `array` |  |
| `isActive` | `bool` |  |
| `logHeaders` | `mixed` |  |
| `managedRules` | `array` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `ownerId` | `string` |  |
| `projectKey` | `string` |  |
| `projectScope` | `bool` | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `string` |  |
| `ruleId` | `string` |  |
| `ruleName` | `string` |  |
| `rules` | `array` |  |
| `rulesets` | `mixed` |  |
| `sourceIp` | `string` |  |
| `startTime` | `string` |  |
| `ttl` | `float` | Time to live in milliseconds |
| `updatedAt` | `string` |  |
| `version` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Security record (throws on error).
$security = $client->Security()->load(["project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Security records (throws on error).
$securitys = $client->Security()->list();
```

#### Example: Create

```php
$security = $client->Security()->create([
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


### Segment

Create an instance: `$segment = $client->Segment();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float` |  |
| `createdBy` | `string` |  |
| `data` | `array` |  |
| `description` | `string` |  |
| `hint` | `string` |  |
| `id` | `string` |  |
| `label` | `string` |  |
| `metadata` | `array` |  |
| `projectId` | `string` |  |
| `slug` | `string` |  |
| `typeName` | `string` |  |
| `updatedAt` | `float` |  |
| `usedByFlags` | `array` |  |
| `usedBySegments` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Segment record (throws on error).
$segment = $client->Segment()->load(["id" => "segment_id", "project_id" => "project_id"]);
```


### Storage

Create an instance: `$storage = $client->Storage();`

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
| `count` | `float` |  |
| `id` | `string` |  |
| `isTokenExpired` | `bool` |  |
| `kind` | `string` | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` | `string` |  |
| `projectFilter` | `array` |  |
| `projectId` | `string` | The project this store is scoped to. |
| `projectsMetadata` | `array` |  |
| `region` | `string` |  |
| `size` | `float` |  |
| `status` | `string` |  |
| `totalConnectedProjects` | `float` |  |
| `usageQuotaExceeded` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Storage record (throws on error).
$storage = $client->Storage()->load(["id" => "storage_id"]);
```

#### Example: Create

```php
$storage = $client->Storage()->create([
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


### Team

Create an instance: `$team = $client->Team();`

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
| `accessRequestedAt` | `float` | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `float` | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `float` | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `array` | Attribution information for the session or current page |
| `avatar` | `string` | The ID of the file used as avatar for this Team. |
| `billing` | `array` | The team's billing plan. |
| `bitbucket` | `array` | Map of the connected Bitbucket account. |
| `confirmed` | `bool` | Current status of the membership. |
| `connect` | `array` |  |
| `createdAt` | `float` | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `string` | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `array` | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `array` | Default deployment expiration settings for this team |
| `defaultPassport` | `array` | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `array` | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `array` | Default roles for the team. |
| `deploymentPolicy` | `array` | Composable deployment-time policy for the team. |
| `description` | `string` | A short description of the Team. |
| `disableHardAutoBlocks` | `mixed` |  |
| `disableRepositoryDispatchEvents` | `bool` | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | `string` | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | `string` | Controls who can request access to protected deployments. |
| `emailDomain` | `string` | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | `bool` | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | `string` | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | `string` | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | `string` | The new fallback environment for the microfrontends group. |
| `github` | `array` | Map of the connected GitHub account. |
| `gitlab` | `array` | Map of the connected GitLab account. |
| `hideIpAddresses` | `bool` | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `bool` | Indicates if IP addresses should be accessible in log drains |
| `id` | `string` | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `float` | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `string` | Code that can be used to join this Team. |
| `ipBuckets` | `array` |  |
| `joinedFrom` | `array` | A map that describes the origin from where the user joined. |
| `membership` | `array` | The membership of the authenticated User in relation to the Team. |
| `name` | `string` | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `array` | NSNB configuration for the team. |
| `orgRootTeamId` | `string` | Best-effort ID of the organization’s root billing team. |
| `pagination` | `array` | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `string` | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `float` | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `bool` | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `string` | The hostname that is current set as preview deployment suffix. |
| `projects` | `array` |  |
| `regenerateInviteCode` | `bool` | Create a new invite code and replace the current one. |
| `remoteCaching` | `array` | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `bool` | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `array` | Resource configuration for the team. |
| `role` | `string` | The role in the team of the member. |
| `saml` | `array` | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `string` | Sensitive environment variable policy for this team |
| `slug` | `string` | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `string` | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `array` | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `array` | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `array` | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `array` | When enabled, creating shareable links requires Owner role. |
| `teamName` | `string` | The name of the team. |
| `teamPermissions` | `array` | The team permissions to set for the member. |
| `teamSlug` | `string` | The slug of the team. |
| `teams` | `array` |  |
| `updatedAt` | `float` | Timestamp (in milliseconds) of when the Team was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Team record (throws on error).
$team = $client->Team()->load(["id" => "team_id"]);
```

#### Example: List

```php
// list() returns an array of Team records (throws on error).
$teams = $client->Team()->list();
```

#### Example: Create

```php
$team = $client->Team()->create([
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


### TldName

Create an instance: `$tld_name = $client->TldName();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of TldName records (throws on error).
$tld_names = $client->TldName()->list();
```


### Toggle

Create an instance: `$toggle = $client->Toggle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `value` | `bool` |  |

#### Example: Create

```php
$toggle = $client->Toggle()->create([
    "project_id" => null, // string
    "value" => null, // bool
]);
```


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `array` | The categories that group this event with related event types. |
| `createdAt` | `float` | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `array` | A list of "entities" within the event `text`. |
| `id` | `string` | The unique identifier of the Event. |
| `payload` | `mixed` |  |
| `principal` | `mixed` |  |
| `principalId` | `string` | The ID of the principal who generated the event. |
| `requestId` | `string` |  |
| `sessionId` | `string` | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `string` | The human-readable text of the Event. |
| `tokenId` | `string` | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `string` | The type of the event. |
| `user` | `array` | Metadata for {@link userId}. |
| `userId` | `string` | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `array` | Metadata for {@link viaIds}. |
| `viaIds` | `array` | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the User record (throws on error).
$user = $client->User()->load(["id" => "user_id"]);
```

#### Example: List

```php
// list() returns an array of User records (throws on error).
$users = $client->User()->list();
```


### Vcr

Create an instance: `$vcr = $client->Vcr();`

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
| `layers` | `array` |  |
| `manifestDigest` | `string` | SHA-256 digest of the image manifest. |
| `name` | `string` | Name of the repository. |
| `platform` | `string` | Operating system the manifest targets. |
| `projectId` | `string` | Identifier of the project the repository belongs to. |
| `public` | `bool` | Whether the repository is public. |
| `pushedBy` | `string` | Identifier of the actor that pushed the image. |
| `repositoryId` | `string` | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `float` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | `string` | The tag name. |
| `tags` | `array` | Tags pointing at this image's manifest. |
| `teamId` | `string` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Slug of the team that is granted access to the repository. |
| `updatedAt` | `string` | ISO 8601 timestamp of when the tag was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Vcr record (throws on error).
$vcr = $client->Vcr()->load(["id_or_name" => "id_or_name", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Vcr records (throws on error).
$vcrs = $client->Vcr()->list();
```

#### Example: Create

```php
$vcr = $client->Vcr()->create([
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


### VcrImageList

Create an instance: `$vcr_image_list = $client->VcrImageList();`

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
| `sizeInBytes` | `float` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | `array` | Tags pointing at this image's manifest. |

#### Example: List

```php
// list() returns an array of VcrImageList records (throws on error).
$vcr_image_lists = $client->VcrImageList()->list();
```


### VcrRepositoryList

Create an instance: `$vcr_repository_list = $client->VcrRepositoryList();`

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
| `public` | `bool` | Whether the repository is public. |
| `updatedAt` | `string` | ISO 8601 timestamp of when the repository was last updated. |

#### Example: List

```php
// list() returns an array of VcrRepositoryList records (throws on error).
$vcr_repository_lists = $client->VcrRepositoryList()->list();
```


### VcrRepositoryPermissionList

Create an instance: `$vcr_repository_permission_list = $client->VcrRepositoryPermissionList();`

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

```php
// list() returns an array of VcrRepositoryPermissionList records (throws on error).
$vcr_repository_permission_lists = $client->VcrRepositoryPermissionList()->list();
```


### WebAnalytics

Create an instance: `$web_analytics = $client->WebAnalytics();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `mixed` |  |
| `query` | `array` |  |
| `version` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WebAnalytics record (throws on error).
$web_analytics = $client->WebAnalytics()->load(["project_id" => "project_id"]);
```


### Webhook

Create an instance: `$webhook = $client->Webhook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alertRuleIds` | `array` |  |
| `createdAt` | `float` | A number containing the date when the webhook was created in in milliseconds |
| `events` | `array` | The webhooks events |
| `id` | `string` | The webhook id |
| `ownerId` | `string` | The unique ID of the team the webhook belongs to |
| `projectIds` | `array` | The ID of the projects the webhook is associated with |
| `secret` | `string` | The webhook secret used to sign the payload |
| `updatedAt` | `float` | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `string` | A string with the URL of the webhook |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Webhook record (throws on error).
$webhook = $client->Webhook()->load(["id" => "webhook_id"]);
```

#### Example: Create

```php
$webhook = $client->Webhook()->create([
    "createdAt" => null, // float
    "events" => null, // array
    "id" => null, // string
    "ownerId" => null, // string
    "secret" => null, // string
    "updatedAt" => null, // float
    "url" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
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

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── vercel_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`vercel_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$bulkredirect = $client->BulkRedirect();
$bulkredirect->list();

// $bulkredirect->data_get() now returns the bulkredirect data from the last list
// $bulkredirect->match_get() returns the last match criteria
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
