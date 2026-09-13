# Vercel PHP SDK



The PHP SDK for the Vercel API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Project()` — with named operations (`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

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

### 3. Load a project

```php
try {
    // load() returns the ENTITY — call data_get() for the Project record (throws on error).
    $project = $client->Project()->load(["id" => "example_id"]);
    print_r($project);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Project record.
$created = $client->Project()->create(["abuse" => [], "accountId" => "example_accountId", "alias" => [], "analytics" => [], "crons" => [], "dataCache" => [], "defaultResourceConfig" => [], "deploymentExpiration" => [], "directoryListing" => true, "gitComments" => [], "gitProviderOptions" => [], "gitRepository" => [], "id" => "example_id", "lastAliasRequest" => [], "name" => "example_name", "nodeVersion" => "example_nodeVersion", "optionsAllowlist" => [], "passport" => [], "resourceConfig" => [], "rollbackDescription" => [], "rollingRelease" => [], "speedInsights" => [], "ssoProtection" => [], "staticIps" => [], "usageStatus" => [], "webAnalytics" => []]);

// Update — index the record via data_get() ($created->data_get()["id"]).
$client->Project()->update(["id" => $created->data_get()["id"], "slug" => "example_slug", "team_id" => "example_team_id"]);

// Remove
$client->Project()->remove(["id" => $created->data_get()["id"]]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $project = $client->Project()->load(["id" => "example_id"]);
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
    "entity" => ["project" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$project = $client->Project()->load(["id" => "test01"]);
print_r($project);
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
| `Project` | `($data): ProjectEntity` | Create a Project entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
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

#### Project

| Field | Description |
| --- | --- |
| `abuse` |  |
| `accountId` |  |
| `alias` |  |
| `analytics` |  |
| `appliedCve55182Migration` |  |
| `autoAssignCustomDomains` |  |
| `autoAssignCustomDomainsUpdatedBy` |  |
| `autoExposeSystemEnvs` |  |
| `avatar` |  |
| `blobs` |  |
| `buildCommand` | The build command for this project. |
| `commandForIgnoringBuildStep` |  |
| `concurrencyBucketName` |  |
| `connectBuildsEnabled` |  |
| `connectConfigurationId` |  |
| `connectConfigurations` | The list of connections from project environment to Secure Compute network |
| `createdAt` |  |
| `creator` |  |
| `crons` |  |
| `customEnvironments` |  |
| `customerSupportCodeVisibility` | Specifies whether customer support can see git source for a deployment |
| `dataCache` |  |
| `defaultResourceConfig` |  |
| `deploymentExpiration` | Retention policies for deployments. |
| `deploymentPolicy` | Project shape. |
| `devCommand` | The dev command for this project. |
| `directoryListing` |  |
| `dismissedToasts` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `enableAffectedProjectsDeployments` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | Opt-in to production toolbar on the project level |
| `env` |  |
| `environmentVariables` | Collection of ENV Variables the Project will use |
| `expiration` |  |
| `features` |  |
| `framework` | The framework that is being used for this project. |
| `gitComments` |  |
| `gitForkProtection` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` |  |
| `gitRepository` | The Git Repository that will be connected to the project. |
| `hasActiveBranches` |  |
| `hasDeployments` |  |
| `id` |  |
| `installCommand` | The install command for this project. |
| `integrations` |  |
| `internalRoutes` |  |
| `ipBuckets` |  |
| `jobs` |  |
| `lastAliasRequest` |  |
| `lastRollbackTarget` |  |
| `latestDeployments` |  |
| `link` |  |
| `live` |  |
| `microfrontends` |  |
| `name` | The desired name for the project |
| `nodeVersion` |  |
| `oidcTokenConfig` | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | The output directory of the project. |
| `passiveConnectConfigurationId` |  |
| `passport` | Passport configuration for the project. |
| `passwordProtection` | Allows to protect project deployments with a password |
| `paused` |  |
| `permissions` |  |
| `previewDeploymentSuffix` | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` |  |
| `protectedSourcemaps` | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` |  |
| `protectionConfig` |  |
| `publicSource` | Deprecated. |
| `resourceConfig` | Specifies resource override configuration for the project |
| `rollbackDescription` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | The name of a directory or relative path to the source code of your project. |
| `sandbox` |  |
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
| `targets` |  |
| `tier` |  |
| `tracing` | Tracing configuration for this project |
| `transferCompletedAt` |  |
| `transferStartedAt` |  |
| `transferToAccountId` |  |
| `transferredFromAccountId` |  |
| `trustedIps` | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | Deployment Protection Trusted Sources |
| `updatedAt` |  |
| `usageStatus` |  |
| `v0` |  |
| `v0Created` |  |
| `webAnalytics` |  |

Operations: Create, Load, Remove, Update.

API path: `/v11/projects`



## Entities


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
| `accountId` | `string` |  |
| `alias` | `array` |  |
| `analytics` | `array` |  |
| `appliedCve55182Migration` | `bool` |  |
| `autoAssignCustomDomains` | `bool` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `bool` |  |
| `avatar` | `string` |  |
| `blobs` | `array` |  |
| `buildCommand` | `string` | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` |  |
| `concurrencyBucketName` | `string` |  |
| `connectBuildsEnabled` | `bool` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `array` | The list of connections from project environment to Secure Compute network |
| `createdAt` | `float` |  |
| `creator` | `mixed` |  |
| `crons` | `array` |  |
| `customEnvironments` | `array` |  |
| `customerSupportCodeVisibility` | `bool` | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `array` |  |
| `defaultResourceConfig` | `array` |  |
| `deploymentExpiration` | `array` | Retention policies for deployments. |
| `deploymentPolicy` | `array` | Project shape. |
| `devCommand` | `string` | The dev command for this project. |
| `directoryListing` | `bool` |  |
| `dismissedToasts` | `array` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `enableAffectedProjectsDeployments` | `bool` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | Opt-in to production toolbar on the project level |
| `env` | `array` |  |
| `environmentVariables` | `array` | Collection of ENV Variables the Project will use |
| `expiration` | `mixed` |  |
| `features` | `array` |  |
| `framework` | `string` | The framework that is being used for this project. |
| `gitComments` | `array` |  |
| `gitForkProtection` | `bool` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `array` |  |
| `gitRepository` | `array` | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` |  |
| `hasDeployments` | `bool` |  |
| `id` | `string` |  |
| `installCommand` | `string` | The install command for this project. |
| `integrations` | `array` |  |
| `internalRoutes` | `array` |  |
| `ipBuckets` | `array` |  |
| `jobs` | `array` |  |
| `lastAliasRequest` | `array` |  |
| `lastRollbackTarget` | `array` |  |
| `latestDeployments` | `array` |  |
| `link` | `string` |  |
| `live` | `bool` |  |
| `microfrontends` | `mixed` |  |
| `name` | `string` | The desired name for the project |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `array` | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `array` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | The output directory of the project. |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `array` | Passport configuration for the project. |
| `passwordProtection` | `array` | Allows to protect project deployments with a password |
| `paused` | `bool` |  |
| `permissions` | `array` |  |
| `previewDeploymentSuffix` | `string` | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` |  |
| `protectedSourcemaps` | `bool` | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `array` |  |
| `protectionConfig` | `array` |  |
| `publicSource` | `bool` | Deprecated. |
| `resourceConfig` | `array` | Specifies resource override configuration for the project |
| `rollbackDescription` | `array` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `array` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `array` |  |
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
| `targets` | `array` |  |
| `tier` | `string` |  |
| `tracing` | `array` | Tracing configuration for this project |
| `transferCompletedAt` | `float` |  |
| `transferStartedAt` | `float` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `mixed` | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `array` | Deployment Protection Trusted Sources |
| `updatedAt` | `float` |  |
| `usageStatus` | `array` |  |
| `v0` | `bool` |  |
| `v0Created` | `bool` |  |
| `webAnalytics` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Project record (throws on error).
$project = $client->Project()->load(["id" => "project_id"]);
```

#### Example: Create

```php
$project = $client->Project()->create([
    "abuse" => null, // array
    "accountId" => null, // string
    "alias" => null, // array
    "analytics" => null, // array
    "crons" => null, // array
    "dataCache" => null, // array
    "defaultResourceConfig" => null, // array
    "deploymentExpiration" => null, // array
    "directoryListing" => null, // bool
    "gitComments" => null, // array
    "gitProviderOptions" => null, // array
    "gitRepository" => null, // array
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

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

6 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `project` | `env` | 17 | 3 levels |
| `project` | `link` | 7 | 0 levels |
| `project` | `abuse` | 4 | 12 levels |
| `project` | `creator` | 4 | 4 levels |
| `project` | `dismissedToasts` | 4 | 7 levels |
| `project` | `microfrontends` | 3 | 0 levels |

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

- **TestFeature**: In-memory mock transport for testing without a live server

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$project = $client->Project();
$project->load(["id" => "example_id"]);

// $project->data_get() now returns the project data from the last load
// $project->match_get() returns the last match criteria
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
