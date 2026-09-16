# Vercel Golang SDK



The Golang SDK for the Vercel API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Project(nil)` — each with the same small set of operations (`Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/vercel-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/vercel-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/vercel-sdk/go=../vercel-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/vercel-sdk/go"
)

func main() {
    client := sdk.NewVercelSDK(map[string]any{
        "apikey": os.Getenv("VERCEL_APIKEY"),
    })

    // Load a single project — the value is the loaded record.
    project, err := client.Project(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(project)

    // Create a project.
    created, err := client.Project(nil).Create(map[string]any{"abuse": map[string]any{}, "accountId": "example_accountId", "alias": []any{}, "analytics": map[string]any{}, "crons": map[string]any{}, "dataCache": map[string]any{}, "defaultResourceConfig": map[string]any{}, "deploymentExpiration": map[string]any{}, "directoryListing": true, "gitComments": map[string]any{}, "gitProviderOptions": map[string]any{}, "gitRepository": map[string]any{}, "id": "example_id", "lastAliasRequest": map[string]any{}, "name": "example_name", "nodeVersion": "example_nodeVersion", "optionsAllowlist": map[string]any{}, "passport": map[string]any{}, "resourceConfig": map[string]any{}, "rollbackDescription": map[string]any{}, "rollingRelease": map[string]any{}, "speedInsights": map[string]any{}, "ssoProtection": map[string]any{}, "staticIps": map[string]any{}, "usageStatus": map[string]any{}, "webAnalytics": map[string]any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a project.
    updated, err := client.Project(nil).Update(map[string]any{"id": "example_id", "slug": "example_slug", "team_id": "example_team_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a project.
    removed, err := client.Project(nil).Remove(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
project, err := client.Project(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = project
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

project, err := client.Project(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(project) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewVercelSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewVercelSDK

```go
func NewVercelSDK(options map[string]any) *VercelSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *VercelSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### VercelSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Project` | `(data map[string]any) VercelEntity` | Create a Project entity instance. |

### Entity interface (VercelEntity)

All entities implement the `VercelEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    project, err := client.Project(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // project is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Project

| Field | Description |
| --- | --- |
| `"abuse"` |  |
| `"accountId"` |  |
| `"alias"` |  |
| `"analytics"` |  |
| `"appliedCve55182Migration"` |  |
| `"autoAssignCustomDomains"` |  |
| `"autoAssignCustomDomainsUpdatedBy"` |  |
| `"autoExposeSystemEnvs"` |  |
| `"avatar"` |  |
| `"blobs"` |  |
| `"buildCommand"` | The build command for this project. |
| `"commandForIgnoringBuildStep"` |  |
| `"concurrencyBucketName"` |  |
| `"connectBuildsEnabled"` |  |
| `"connectConfigurationId"` |  |
| `"connectConfigurations"` | The list of connections from project environment to Secure Compute network |
| `"createdAt"` |  |
| `"creator"` |  |
| `"crons"` |  |
| `"customEnvironments"` |  |
| `"customerSupportCodeVisibility"` | Specifies whether customer support can see git source for a deployment |
| `"dataCache"` |  |
| `"defaultResourceConfig"` |  |
| `"deploymentExpiration"` | Retention policies for deployments. |
| `"deploymentPolicy"` | Project shape. |
| `"devCommand"` | The dev command for this project. |
| `"directoryListing"` |  |
| `"dismissedToasts"` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `"enableAffectedProjectsDeployments"` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `"enableExternalRewriteCaching"` | Specifies whether external rewrite caching is enabled for this project. |
| `"enablePreviewFeedback"` | Opt-in to preview toolbar on the project level |
| `"enableProductionFeedback"` | Opt-in to production toolbar on the project level |
| `"env"` |  |
| `"environmentVariables"` | Collection of ENV Variables the Project will use |
| `"expiration"` |  |
| `"features"` |  |
| `"framework"` | The framework that is being used for this project. |
| `"gitComments"` |  |
| `"gitForkProtection"` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `"gitLFS"` | Specifies whether Git LFS is enabled for this project. |
| `"gitProviderOptions"` |  |
| `"gitRepository"` | The Git Repository that will be connected to the project. |
| `"hasActiveBranches"` |  |
| `"hasDeployments"` |  |
| `"id"` |  |
| `"installCommand"` | The install command for this project. |
| `"integrations"` |  |
| `"internalRoutes"` |  |
| `"ipBuckets"` |  |
| `"jobs"` |  |
| `"lastAliasRequest"` |  |
| `"lastRollbackTarget"` |  |
| `"latestDeployments"` |  |
| `"link"` |  |
| `"live"` |  |
| `"microfrontends"` |  |
| `"name"` | The desired name for the project |
| `"nodeVersion"` |  |
| `"oidcTokenConfig"` | OpenID Connect JSON Web Token generation configuration. |
| `"optionsAllowlist"` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `"outputDirectory"` | The output directory of the project. |
| `"passiveConnectConfigurationId"` |  |
| `"passport"` | Passport configuration for the project. |
| `"passwordProtection"` | Allows to protect project deployments with a password |
| `"paused"` |  |
| `"permissions"` |  |
| `"previewDeploymentSuffix"` | Custom domain suffix for preview deployments. |
| `"previewDeploymentsDisabled"` | Specifies whether preview deployments are disabled for this project. |
| `"productionDeploymentsFastLane"` |  |
| `"protectedSourcemaps"` | Specifies whether sourcemaps are protected and require authentication to access. |
| `"protectionBypass"` |  |
| `"protectionConfig"` |  |
| `"publicSource"` | Deprecated. |
| `"resourceConfig"` | Specifies resource override configuration for the project |
| `"rollbackDescription"` | Description of why a project was rolled back, and by whom. |
| `"rollingRelease"` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `"rootDirectory"` | The name of a directory or relative path to the source code of your project. |
| `"sandbox"` |  |
| `"security"` |  |
| `"serverlessFunctionRegion"` | The region to deploy Serverless Functions in this project |
| `"serverlessFunctionZeroConfigFailover"` | Specifies whether Zero Config Failover is enabled for this project. |
| `"services"` |  |
| `"skewProtectionAllowedDomains"` | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `"skewProtectionBoundaryAt"` | Deployments created before this absolute datetime have Skew Protection disabled. |
| `"skewProtectionMaxAge"` | Deployments created before this rolling window have Skew Protection disabled. |
| `"skipGitConnectDuringLink"` | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `"sourceFilesOutsideRootDirectory"` | Indicates if there are source files outside of the root directory |
| `"speedInsights"` |  |
| `"ssoProtection"` | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `"staticIps"` | Manage Static IPs for this project |
| `"targets"` |  |
| `"tier"` |  |
| `"tracing"` | Tracing configuration for this project |
| `"transferCompletedAt"` |  |
| `"transferStartedAt"` |  |
| `"transferToAccountId"` |  |
| `"transferredFromAccountId"` |  |
| `"trustedIps"` | Restricts access to deployments based on the incoming request IP address |
| `"trustedSources"` | Deployment Protection Trusted Sources |
| `"updatedAt"` |  |
| `"usageStatus"` |  |
| `"v0"` |  |
| `"v0Created"` |  |
| `"webAnalytics"` |  |

Operations: Create, Load, Remove, Update.

API path: `/v11/projects`



## Entities


### Project

Create an instance: `project := client.Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abuse` | `map[string]any` |  |
| `accountId` | `string` |  |
| `alias` | `[]any` |  |
| `analytics` | `map[string]any` |  |
| `appliedCve55182Migration` | `bool` |  |
| `autoAssignCustomDomains` | `bool` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `bool` |  |
| `avatar` | `string` |  |
| `blobs` | `map[string]any` |  |
| `buildCommand` | `string` | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` |  |
| `concurrencyBucketName` | `string` |  |
| `connectBuildsEnabled` | `bool` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `[]any` | The list of connections from project environment to Secure Compute network |
| `createdAt` | `float64` |  |
| `creator` | `any` |  |
| `crons` | `map[string]any` |  |
| `customEnvironments` | `[]any` |  |
| `customerSupportCodeVisibility` | `bool` | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `map[string]any` |  |
| `defaultResourceConfig` | `map[string]any` |  |
| `deploymentExpiration` | `map[string]any` | Retention policies for deployments. |
| `deploymentPolicy` | `map[string]any` | Project shape. |
| `devCommand` | `string` | The dev command for this project. |
| `directoryListing` | `bool` |  |
| `dismissedToasts` | `[]any` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `enableAffectedProjectsDeployments` | `bool` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | Opt-in to production toolbar on the project level |
| `env` | `[]any` |  |
| `environmentVariables` | `[]any` | Collection of ENV Variables the Project will use |
| `expiration` | `any` |  |
| `features` | `map[string]any` |  |
| `framework` | `string` | The framework that is being used for this project. |
| `gitComments` | `map[string]any` |  |
| `gitForkProtection` | `bool` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `map[string]any` |  |
| `gitRepository` | `map[string]any` | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` |  |
| `hasDeployments` | `bool` |  |
| `id` | `string` |  |
| `installCommand` | `string` | The install command for this project. |
| `integrations` | `[]any` |  |
| `internalRoutes` | `[]any` |  |
| `ipBuckets` | `[]any` |  |
| `jobs` | `map[string]any` |  |
| `lastAliasRequest` | `map[string]any` |  |
| `lastRollbackTarget` | `map[string]any` |  |
| `latestDeployments` | `[]any` |  |
| `link` | `string` |  |
| `live` | `bool` |  |
| `microfrontends` | `any` |  |
| `name` | `string` | The desired name for the project |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `map[string]any` | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `map[string]any` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | The output directory of the project. |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `map[string]any` | Passport configuration for the project. |
| `passwordProtection` | `map[string]any` | Allows to protect project deployments with a password |
| `paused` | `bool` |  |
| `permissions` | `map[string]any` |  |
| `previewDeploymentSuffix` | `string` | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` |  |
| `protectedSourcemaps` | `bool` | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `map[string]any` |  |
| `protectionConfig` | `map[string]any` |  |
| `publicSource` | `bool` | Deprecated. |
| `resourceConfig` | `map[string]any` | Specifies resource override configuration for the project |
| `rollbackDescription` | `map[string]any` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `map[string]any` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `map[string]any` |  |
| `security` | `map[string]any` |  |
| `serverlessFunctionRegion` | `string` | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `bool` | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `[]any` |  |
| `skewProtectionAllowedDomains` | `[]any` | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `float64` | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `float64` | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `bool` | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `bool` | Indicates if there are source files outside of the root directory |
| `speedInsights` | `map[string]any` |  |
| `ssoProtection` | `map[string]any` | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `map[string]any` | Manage Static IPs for this project |
| `targets` | `map[string]any` |  |
| `tier` | `string` |  |
| `tracing` | `map[string]any` | Tracing configuration for this project |
| `transferCompletedAt` | `float64` |  |
| `transferStartedAt` | `float64` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `any` | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `map[string]any` | Deployment Protection Trusted Sources |
| `updatedAt` | `float64` |  |
| `usageStatus` | `map[string]any` |  |
| `v0` | `bool` |  |
| `v0Created` | `bool` |  |
| `webAnalytics` | `map[string]any` |  |

#### Example: Load

```go
project, err := client.Project(nil).Load(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(project) // the loaded record
```

#### Example: Create

```go
result, err := client.Project(nil).Create(map[string]any{
    "abuse": map[string]any{},
    "accountId": "example_accountId",
    "alias": []any{},
    "analytics": map[string]any{},
    "crons": map[string]any{},
    "dataCache": map[string]any{},
    "defaultResourceConfig": map[string]any{},
    "deploymentExpiration": map[string]any{},
    "directoryListing": true,
    "gitComments": map[string]any{},
    "gitProviderOptions": map[string]any{},
    "gitRepository": map[string]any{},
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/vercel-sdk/go/
├── vercel.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/vercel-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
project := client.Project(nil)
project.Load(map[string]any{"id": "example_id"}, nil)

// project.Data() now returns the project data from the last load
// project.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
