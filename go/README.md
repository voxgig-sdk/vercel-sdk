# Vercel Golang SDK



The Golang SDK for the Vercel API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AccessGroup(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

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

    // List accessGroup records — the value is the array of records itself.
    accessGroups, err := client.AccessGroup(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range accessGroups.([]any) {
        fmt.Println(item)
    }

    // Load a single accessGroup — the value is the loaded record.
    accessGroup, err := client.AccessGroup(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(accessGroup)

    // Create a accessGroup.
    created, err := client.AccessGroup(nil).Create(map[string]any{"id": "example_id", "accessGroupId": "example_accessGroupId", "createdAt": "example_createdAt", "isDsyncManaged": true, "membersCount": 1, "name": "example_name", "projectId": "example_projectId", "projectsCount": 1, "role": "example_role", "teamId": "example_teamId", "updatedAt": "example_updatedAt"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a accessGroup.
    updated, err := client.AccessGroup(nil).Update(map[string]any{"id": "example_id", "access_group_id": "example_access_group_id", "project_id": "example_project_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a accessGroup.
    removed, err := client.AccessGroup(nil).Remove(map[string]any{"id": "example_id"}, nil)
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
bulkredirects, err := client.BulkRedirect(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = bulkredirects
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

bulkRedirect, err := client.BulkRedirect(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(bulkRedirect) // the returned mock data
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
| `AccessGroup` | `(data map[string]any) VercelEntity` | Create an AccessGroup entity instance. |
| `AiGateway` | `(data map[string]any) VercelEntity` | Create an AiGateway entity instance. |
| `AiGatewayRule` | `(data map[string]any) VercelEntity` | Create an AiGatewayRule entity instance. |
| `AiGatewayRuleList` | `(data map[string]any) VercelEntity` | Create an AiGatewayRuleList entity instance. |
| `AiGatewayVirtualModelConfig` | `(data map[string]any) VercelEntity` | Create an AiGatewayVirtualModelConfig entity instance. |
| `AiGatewayVirtualModelConfigList` | `(data map[string]any) VercelEntity` | Create an AiGatewayVirtualModelConfigList entity instance. |
| `Alias` | `(data map[string]any) VercelEntity` | Create an Alias entity instance. |
| `ApiAiGateway` | `(data map[string]any) VercelEntity` | Create an ApiAiGateway entity instance. |
| `ApiKey` | `(data map[string]any) VercelEntity` | Create an ApiKey entity instance. |
| `Artifact` | `(data map[string]any) VercelEntity` | Create an Artifact entity instance. |
| `Authentication` | `(data map[string]any) VercelEntity` | Create an Authentication entity instance. |
| `Billing` | `(data map[string]any) VercelEntity` | Create a Billing entity instance. |
| `BulkRedirect` | `(data map[string]any) VercelEntity` | Create a BulkRedirect entity instance. |
| `Cert` | `(data map[string]any) VercelEntity` | Create a Cert entity instance. |
| `Check` | `(data map[string]any) VercelEntity` | Create a Check entity instance. |
| `ChecksV2` | `(data map[string]any) VercelEntity` | Create a ChecksV2 entity instance. |
| `Connect` | `(data map[string]any) VercelEntity` | Create a Connect entity instance. |
| `ConnectConnector` | `(data map[string]any) VercelEntity` | Create a ConnectConnector entity instance. |
| `ConnectConnectorList` | `(data map[string]any) VercelEntity` | Create a ConnectConnectorList entity instance. |
| `ConnectConnectorProjectConnectionList` | `(data map[string]any) VercelEntity` | Create a ConnectConnectorProjectConnectionList entity instance. |
| `ConnectProjectConnection` | `(data map[string]any) VercelEntity` | Create a ConnectProjectConnection entity instance. |
| `ConnectProjectConnectorConnectionList` | `(data map[string]any) VercelEntity` | Create a ConnectProjectConnectorConnectionList entity instance. |
| `Deployment` | `(data map[string]any) VercelEntity` | Create a Deployment entity instance. |
| `Dns` | `(data map[string]any) VercelEntity` | Create a Dns entity instance. |
| `Domain` | `(data map[string]any) VercelEntity` | Create a Domain entity instance. |
| `DomainsRegistrar` | `(data map[string]any) VercelEntity` | Create a DomainsRegistrar entity instance. |
| `Drain` | `(data map[string]any) VercelEntity` | Create a Drain entity instance. |
| `EdgeCache` | `(data map[string]any) VercelEntity` | Create an EdgeCache entity instance. |
| `Env` | `(data map[string]any) VercelEntity` | Create an Env entity instance. |
| `Environment` | `(data map[string]any) VercelEntity` | Create an Environment entity instance. |
| `FeatureFlag` | `(data map[string]any) VercelEntity` | Create a FeatureFlag entity instance. |
| `File` | `(data map[string]any) VercelEntity` | Create a File entity instance. |
| `Flag` | `(data map[string]any) VercelEntity` | Create a Flag entity instance. |
| `FlagsSdkKeyWithSecret` | `(data map[string]any) VercelEntity` | Create a FlagsSdkKeyWithSecret entity instance. |
| `GlobalConfig` | `(data map[string]any) VercelEntity` | Create a GlobalConfig entity instance. |
| `GlobalConfigItem` | `(data map[string]any) VercelEntity` | Create a GlobalConfigItem entity instance. |
| `GlobalConfigToken` | `(data map[string]any) VercelEntity` | Create a GlobalConfigToken entity instance. |
| `Integration` | `(data map[string]any) VercelEntity` | Create an Integration entity instance. |
| `Kms` | `(data map[string]any) VercelEntity` | Create a Kms entity instance. |
| `ListEventType` | `(data map[string]any) VercelEntity` | Create a ListEventType entity instance. |
| `Log` | `(data map[string]any) VercelEntity` | Create a Log entity instance. |
| `LogDrain` | `(data map[string]any) VercelEntity` | Create a LogDrain entity instance. |
| `Marketplace` | `(data map[string]any) VercelEntity` | Create a Marketplace entity instance. |
| `Microfrontend` | `(data map[string]any) VercelEntity` | Create a Microfrontend entity instance. |
| `Network` | `(data map[string]any) VercelEntity` | Create a Network entity instance. |
| `Networking` | `(data map[string]any) VercelEntity` | Create a Networking entity instance. |
| `Observability` | `(data map[string]any) VercelEntity` | Create an Observability entity instance. |
| `PrivateLinkEndpoint` | `(data map[string]any) VercelEntity` | Create a PrivateLinkEndpoint entity instance. |
| `Project` | `(data map[string]any) VercelEntity` | Create a Project entity instance. |
| `ProjectMember` | `(data map[string]any) VercelEntity` | Create a ProjectMember entity instance. |
| `ProjectRoute` | `(data map[string]any) VercelEntity` | Create a ProjectRoute entity instance. |
| `Query` | `(data map[string]any) VercelEntity` | Create a Query entity instance. |
| `Record` | `(data map[string]any) VercelEntity` | Create a Record entity instance. |
| `RollingRelease` | `(data map[string]any) VercelEntity` | Create a RollingRelease entity instance. |
| `Sandbox` | `(data map[string]any) VercelEntity` | Create a Sandbox entity instance. |
| `Schema` | `(data map[string]any) VercelEntity` | Create a Schema entity instance. |
| `Security` | `(data map[string]any) VercelEntity` | Create a Security entity instance. |
| `Segment` | `(data map[string]any) VercelEntity` | Create a Segment entity instance. |
| `Storage` | `(data map[string]any) VercelEntity` | Create a Storage entity instance. |
| `Team` | `(data map[string]any) VercelEntity` | Create a Team entity instance. |
| `TldName` | `(data map[string]any) VercelEntity` | Create a TldName entity instance. |
| `Toggle` | `(data map[string]any) VercelEntity` | Create a Toggle entity instance. |
| `User` | `(data map[string]any) VercelEntity` | Create an User entity instance. |
| `Vcr` | `(data map[string]any) VercelEntity` | Create a Vcr entity instance. |
| `VcrImageList` | `(data map[string]any) VercelEntity` | Create a VcrImageList entity instance. |
| `VcrRepositoryList` | `(data map[string]any) VercelEntity` | Create a VcrRepositoryList entity instance. |
| `VcrRepositoryPermissionList` | `(data map[string]any) VercelEntity` | Create a VcrRepositoryPermissionList entity instance. |
| `WebAnalytics` | `(data map[string]any) VercelEntity` | Create a WebAnalytics entity instance. |
| `Webhook` | `(data map[string]any) VercelEntity` | Create a Webhook entity instance. |

### Entity interface (VercelEntity)

All entities implement the `VercelEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
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
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    accessGroup, err := client.AccessGroup(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // accessGroup is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AccessGroup

| Field | Description |
| --- | --- |
| `"accessGroupId"` | ID of the access group. |
| `"createdAt"` | Timestamp in milliseconds when the access group was created. |
| `"entitlements"` |  |
| `"id"` |  |
| `"isDsyncManaged"` |  |
| `"membersCount"` | Number of members in the access group. |
| `"membersToAdd"` | List of members to add to the access group. |
| `"membersToRemove"` | List of members to remove from the access group. |
| `"name"` | The name of this access group. |
| `"projectId"` |  |
| `"projects"` |  |
| `"projectsCount"` | Number of projects in the access group. |
| `"role"` | The project role that will be added to this Access Group. |
| `"teamId"` | ID of the team that this access group belongs to. |
| `"teamPermissions"` | Permissions that the team has in the access group. |
| `"teamRoles"` | Roles that the team has in the access group. |
| `"updatedAt"` | Timestamp in milliseconds when the access group was last updated. |

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
| `"action"` |  |
| `"createdAt"` |  |
| `"createdBy"` |  |
| `"deleted"` |  |
| `"description"` |  |
| `"enabled"` |  |
| `"match"` |  |
| `"ownerId"` |  |
| `"ruleId"` |  |
| `"type"` |  |
| `"updatedAt"` |  |
| `"updatedBy"` |  |

Operations: Create, Update.

API path: `/v1/ai-gateway/rules`

#### AiGatewayRuleList

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"createdAt"` |  |
| `"createdBy"` |  |
| `"deleted"` |  |
| `"description"` |  |
| `"enabled"` |  |
| `"match"` |  |
| `"ownerId"` |  |
| `"ruleId"` |  |
| `"type"` |  |
| `"updatedAt"` |  |
| `"updatedBy"` |  |

Operations: List.

API path: `/v1/ai-gateway/rules`

#### AiGatewayVirtualModelConfig

| Field | Description |
| --- | --- |
| `"allowFallbackFromFast"` | Allow fallback from fast to standard providers on failure. |
| `"baseUrl"` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `"byokCredentialIds"` | BYOK credential IDs allowed for this VMC. |
| `"caching"` | Use caching if available. |
| `"createdAt"` | Creation timestamp (epoch ms). |
| `"createdBy"` | User or app id that created this VMC. |
| `"deleted"` | Whether this VMC is soft-deleted. |
| `"description"` | Optional description for UI. |
| `"disallowPromptTraining"` | Only use providers that will not train on your prompts. |
| `"displayName"` | Human-readable name for UI. |
| `"has"` | Limit providers to those with these features. |
| `"hipaaCompliant"` | Only use HIPAA-compliant providers. |
| `"id"` |  |
| `"inferenceRegion"` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `"instanceId"` | The concrete model-provider instance this VMC resolves to. |
| `"kind"` | VMC kind: alias, relay, or router. |
| `"modelSlug"` | Canonical model slug this VMC maps to (e.g. |
| `"models"` | For kind=router: ordered candidates, model slugs or router references. |
| `"observabilityTags"` | Observability tags attached to requests through this VMC. |
| `"ownerId"` | Team (owner) that owns this VMC. |
| `"providerOnly"` | Restrict routing to only these providers. |
| `"providerOptions"` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `"providerOrder"` | Ordered list of providers to try as fallbacks on failure. |
| `"providerTimeouts"` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `"requires"` | For kind=router: capability tags a candidate must have. |
| `"selector"` | For kind=router: how to order candidates. |
| `"serviceTier"` | Service tier for providers that support it. |
| `"sort"` | Rank eligible providers by an attribute. |
| `"speed"` | Only use fastest providers with short timeouts. |
| `"status"` | UI lifecycle status: draft, active, or archived. |
| `"updatedAt"` | Last update timestamp (epoch ms). |
| `"updatedBy"` | User or app id that last updated this VMC. |
| `"virtualModelSlug"` | Client-facing alias used as the model slug in Gateway calls. |
| `"visibility"` | Visibility in listings: public, internal, or stealth. |
| `"zeroDataRetention"` | Only use providers with zero data retention. |

Operations: Create, Load, Update.

API path: `/v1/ai-gateway/virtual-model-configs`

#### AiGatewayVirtualModelConfigList

| Field | Description |
| --- | --- |
| `"allowFallbackFromFast"` | Allow fallback from fast to standard providers on failure. |
| `"baseUrl"` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `"byokCredentialIds"` | BYOK credential IDs allowed for this VMC. |
| `"caching"` | Use caching if available. |
| `"createdAt"` | Creation timestamp (epoch ms). |
| `"createdBy"` | User or app id that created this VMC. |
| `"deleted"` | Whether this VMC is soft-deleted. |
| `"description"` | Optional description for UI. |
| `"disallowPromptTraining"` | Only use providers that will not train on your prompts. |
| `"displayName"` | Human-readable name for UI. |
| `"has"` | Limit providers to those with these features. |
| `"hipaaCompliant"` | Only use HIPAA-compliant providers. |
| `"inferenceRegion"` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `"instanceId"` | The concrete model-provider instance this VMC resolves to. |
| `"kind"` | VMC kind: alias, relay, or router. |
| `"modelSlug"` | Canonical model slug this VMC maps to (e.g. |
| `"models"` | For kind=router: ordered candidates, model slugs or router references. |
| `"observabilityTags"` | Observability tags attached to requests through this VMC. |
| `"ownerId"` | Team (owner) that owns this VMC. |
| `"providerOnly"` | Restrict routing to only these providers. |
| `"providerOptions"` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `"providerOrder"` | Ordered list of providers to try as fallbacks on failure. |
| `"providerTimeouts"` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `"requires"` | For kind=router: capability tags a candidate must have. |
| `"selector"` | For kind=router: how to order candidates. |
| `"serviceTier"` | Service tier for providers that support it. |
| `"sort"` | Rank eligible providers by an attribute. |
| `"speed"` | Only use fastest providers with short timeouts. |
| `"status"` | UI lifecycle status: draft, active, or archived. |
| `"updatedAt"` | Last update timestamp (epoch ms). |
| `"updatedBy"` | User or app id that last updated this VMC. |
| `"virtualModelSlug"` | Client-facing alias used as the model slug in Gateway calls. |
| `"visibility"` | Visibility in listings: public, internal, or stealth. |
| `"zeroDataRetention"` | Only use providers with zero data retention. |

Operations: List.

API path: `/v1/ai-gateway/virtual-model-configs/list`

#### Alias

| Field | Description |
| --- | --- |
| `"alias"` | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `"created"` | The date when the alias was created |
| `"createdAt"` | The date when the alias was created in milliseconds since the UNIX epoch |
| `"creator"` | Information of the user who created the alias |
| `"deletedAt"` | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `"deployment"` | A map with the deployment ID, URL and metadata |
| `"deploymentId"` | The deployment ID |
| `"id"` |  |
| `"microfrontends"` | The microfrontends for the alias including the routing configuration |
| `"oldDeploymentId"` | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `"projectId"` | The unique identifier of the project |
| `"protectionBypass"` | The protection bypass for the alias |
| `"redirect"` | Target destination domain for redirect when the alias is a redirect |
| `"redirectStatusCode"` | Status code to be used on redirect |
| `"uid"` | The unique identifier of the alias |
| `"updatedAt"` | The date when the alias was updated in milliseconds since the UNIX epoch |

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
| `"activeAt"` | Timestamp (in milliseconds) of when the API key was most recently used. |
| `"aiGatewayQuota"` | Optional AI Gateway quota configuration for the API key. |
| `"createdAt"` | Timestamp (in milliseconds) of when the API key was created. |
| `"createdBy"` | The ID of the user who created the API key. |
| `"createdByAppId"` | The ID of the app that created the API key, if any |
| `"expiresAt"` | Timestamp (in milliseconds) of when the API key expires. |
| `"id"` | The unique identifier of the API key. |
| `"leakedAt"` | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `"leakedUrl"` | URL where the API key was discovered as leaked. |
| `"metadata"` | Generic metadata attached to the API key. |
| `"name"` | The human-readable name of the API key. |
| `"partialKey"` | The last few characters of the API key string, for helping identify the API key. |
| `"projectId"` | The ID of the project that this API key grants access to. |
| `"purpose"` | The API key's purpose, i.e. |
| `"quota"` | AI Gateway quota associated with an API key. |
| `"teamId"` | The ID of the team that the API key grants access to. |

Operations: Create.

API path: `/api-keys`

#### Artifact

| Field | Description |
| --- | --- |
| `"hashes"` | artifact hashes |
| `"id"` |  |

Operations: Create, Load, Remove, Update.

API path: `/v8/artifacts/events`

#### Authentication

| Field | Description |
| --- | --- |
| `"activeAt"` | Timestamp (in milliseconds) of when the token was most recently used. |
| `"createdAt"` | Timestamp (in milliseconds) of when the token was created. |
| `"expiresAt"` | Timestamp (in milliseconds) of when the token expires. |
| `"id"` | The unique identifier of the token. |
| `"leakedAt"` | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `"leakedUrl"` | URL where the token was discovered as leaked. |
| `"name"` | The human-readable name of the token. |
| `"origin"` | The origin of how the token was created. |
| `"prefix"` | The token's prefix, for identification purposes. |
| `"projectId"` | The ID of the project to scope this token to |
| `"revokedAt"` | Timestamp (in milliseconds) of when the token was revoked. |
| `"scopes"` | The access scopes granted to the token. |
| `"suffix"` | The last few characters of the token, for identification purposes. |
| `"type"` | The type of the token. |

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
| `"alias"` | The staging link for previewing redirects in this version. |
| `"createdBy"` |  |
| `"id"` | The unique identifier for the version. |
| `"isLive"` | Whether this version is currently live in production. |
| `"isStaging"` | Whether this version has not been promoted to production yet and is not serving end users. |
| `"key"` | The key of the version. |
| `"lastModified"` |  |
| `"name"` | Optional name for the version. |
| `"overwrite"` |  |
| `"projectId"` |  |
| `"redirect"` | The redirect object to edit. |
| `"redirectCount"` | The number of redirects in this version. |
| `"redirects"` |  |
| `"restore"` | If true, restores the redirect from the latest production version to staging. |
| `"teamId"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/v1/bulk-redirects/restore`

#### Cert

| Field | Description |
| --- | --- |
| `"autoRenew"` |  |
| `"ca"` | The certificate authority |
| `"cert"` | The certificate |
| `"cns"` | The common names the cert should be issued for |
| `"createdAt"` |  |
| `"expiresAt"` |  |
| `"id"` |  |
| `"key"` | The certificate key |
| `"skipValidation"` | Skip validation of the certificate |

Operations: Create, List, Load, Remove, Update.

API path: `/v8/certs`

#### Check

| Field | Description |
| --- | --- |
| `"blocking"` | Whether the check should block a deployment from succeeding |
| `"blocks"` |  |
| `"completedAt"` |  |
| `"conclusion"` | The result of the check being run |
| `"createdAt"` |  |
| `"deletedAt"` |  |
| `"detailsUrl"` | URL to display for further details |
| `"externalId"` | An identifier that can be used as an external reference |
| `"id"` |  |
| `"integrationId"` |  |
| `"isRerequestable"` |  |
| `"metrics"` |  |
| `"name"` | The name of the check being created |
| `"output"` | The results of the check Run |
| `"ownerId"` |  |
| `"path"` | Path of the page that is being checked |
| `"projectId"` |  |
| `"requires"` |  |
| `"rerequestable"` | Whether a user should be able to request for the check to be rerun if it fails |
| `"source"` |  |
| `"sourceIntegrationConfigurationId"` |  |
| `"sourceKind"` |  |
| `"startedAt"` |  |
| `"status"` | The current status of the check |
| `"targets"` |  |
| `"timeout"` |  |
| `"updatedAt"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/deployments/{deploymentId}/checks/{checkId}/rerequest`

#### ChecksV2

| Field | Description |
| --- | --- |
| `"checkId"` |  |
| `"completedAt"` |  |
| `"conclusion"` |  |
| `"conclusionText"` |  |
| `"externalId"` |  |
| `"externalUrl"` |  |
| `"output"` |  |
| `"runs"` |  |
| `"status"` |  |

Operations: Create, List, Load, Update.

API path: `/v2/deployments/{deploymentId}/check-runs`

#### Connect

| Field | Description |
| --- | --- |
| `"additionalParams"` |  |
| `"audience"` |  |
| `"authorizationDetails"` |  |
| `"authorizationId"` | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `"claims"` | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `"connector"` |  |
| `"deviceCode"` |  |
| `"displayName"` | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `"expiresAt"` |  |
| `"expiresInMs"` |  |
| `"externalSubject"` |  |
| `"id"` | Client id (e.g. |
| `"installationId"` |  |
| `"metadata"` | Driver-specific metadata (e.g., botUserId for Slack). |
| `"name"` | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `"prompt"` |  |
| `"resources"` |  |
| `"returnUrl"` |  |
| `"scopes"` |  |
| `"service"` | Resolved service id when known (e.g. |
| `"serviceName"` | Curated display name of the resolved service (e.g. |
| `"subject"` |  |
| `"tenantId"` |  |
| `"token"` |  |
| `"tokenGroupId"` | Stable id that groups all tokens with the same parameters across refreshes. |
| `"tokenId"` |  |
| `"type"` | Client type (e.g. |
| `"uid"` | Client uid (e.g. |
| `"validityBufferMs"` |  |
| `"webhook"` |  |

Operations: Create, Remove.

API path: `/v1/connect/authorize/{connector}`

#### ConnectConnector

| Field | Description |
| --- | --- |
| `"accentColor"` | Hex accent color (e.g., `#000000`) for branding. |
| `"appTokens"` | App-token capabilities and known grants for the connector. |
| `"backgroundColor"` | Hex background color (e.g., `#000000`) for branding. |
| `"clientUrl"` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `"connectionMethod"` | The connection method this connector was created from, when the create request named one. |
| `"connector"` | Updated connector. |
| `"createdAt"` | Creation time in epoch milliseconds. |
| `"createdBy"` | Principal that created the connector. |
| `"creationMode"` | How the connector row was originally created. |
| `"data"` | Provider configuration for the selected connector type or connection method. |
| `"defaultInstallationId"` | Installation used when a token request does not specify an installation. |
| `"destinations"` | Complete replacement set of trigger destinations. |
| `"devsite"` | Developer website for the connected service. |
| `"displayName"` | Human-readable connector name. |
| `"docsite"` | Developer documentation for the connected service. |
| `"environments"` | Environments for the project connection. |
| `"events"` | Known events this connector subscribes to (e.g. |
| `"icon"` | Connector branding icon. |
| `"id"` | Stable `scl_` connector ID. |
| `"knownStale"` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `"managed"` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `"name"` | Connector name within the owning team. |
| `"params"` | Values for the selected connection method's template fields. |
| `"projectId"` | Project to connect during creation. |
| `"reconsentNeeded"` | Present when affected users must authorize the connector's new permissions. |
| `"redirectUri"` | Redirect URI registered with the third-party service for this connector, if any. |
| `"reinstallAt"` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `"reinstallNeeded"` | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `"service"` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `"serviceSync"` | Result of synchronizing the change with the external service. |
| `"supportedSubjectTypes"` | Token subject types supported by the connector. |
| `"supportsIcon"` | Whether the connector icon can propagate to the provider. |
| `"supportsInstallation"` | Whether the connector supports an installation flow. |
| `"supportsRevocation"` | Whether Connect can revoke tokens for this connector. |
| `"supportsTriggers"` | Whether this connector type supports trigger webhooks. |
| `"target"` | Which of the service's products/surfaces this connector points at. |
| `"triggerDestination"` | Initial trigger destination. |
| `"triggerDestinations"` | Destinations that incoming triggers should be forwarded to. |
| `"triggers"` | Incoming trigger configuration for the connector. |
| `"type"` | Connector implementation type. |
| `"typeIcon"` | Icon identifier supplied by the connector type. |
| `"typeName"` | Human-readable name of the connector type. |
| `"uid"` | Team-scoped UID. |
| `"updatedAt"` | Last update time in epoch milliseconds. |
| `"updatedBy"` | Principal that most recently updated the connector. |
| `"userTokens"` | User-token capabilities and known grants for the connector. |
| `"website"` | Public website for the connected service. |

Operations: Create, Load, Update.

API path: `/v1/connect/connectors`

#### ConnectConnectorList

| Field | Description |
| --- | --- |
| `"accentColor"` | Hex accent color (e.g., `#000000`) for branding. |
| `"appTokens"` | App-token capabilities and known grants for the connector. |
| `"backgroundColor"` | Hex background color (e.g., `#000000`) for branding. |
| `"clientUrl"` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `"connectionMethod"` | The connection method this connector was created from, when the create request named one. |
| `"createdAt"` | Creation time in epoch milliseconds. |
| `"createdBy"` | Principal that created the connector. |
| `"creationMode"` | How the connector row was originally created. |
| `"defaultInstallationId"` | Installation used when a token request does not specify an installation. |
| `"devsite"` | Developer website for the connected service. |
| `"displayName"` | Human-readable connector name. |
| `"docsite"` | Developer documentation for the connected service. |
| `"events"` | Known events this connector subscribes to (e.g. |
| `"icon"` | Connector branding icon. |
| `"id"` | Stable `scl_` connector ID. |
| `"knownStale"` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `"managed"` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `"name"` | Connector name within the owning team. |
| `"redirectUri"` | Redirect URI registered with the third-party service for this connector, if any. |
| `"reinstallAt"` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `"service"` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `"supportedSubjectTypes"` | Token subject types supported by the connector. |
| `"supportsIcon"` | Whether the connector icon can propagate to the provider. |
| `"supportsInstallation"` | Whether the connector supports an installation flow. |
| `"supportsRevocation"` | Whether Connect can revoke tokens for this connector. |
| `"supportsTriggers"` | Whether this connector type supports trigger webhooks. |
| `"target"` | Which of the service's products/surfaces this connector points at. |
| `"triggerDestinations"` | Destinations that incoming triggers should be forwarded to. |
| `"triggers"` | Incoming trigger configuration for the connector. |
| `"type"` | Connector implementation type. |
| `"typeIcon"` | Icon identifier supplied by the connector type. |
| `"typeName"` | Human-readable name of the connector type. |
| `"uid"` | Team-scoped UID. |
| `"updatedAt"` | Last update time in epoch milliseconds. |
| `"updatedBy"` | Principal that most recently updated the connector. |
| `"userTokens"` | User-token capabilities and known grants for the connector. |
| `"website"` | Public website for the connected service. |

Operations: List.

API path: `/v2/connect/connectors`

#### ConnectConnectorProjectConnectionList

| Field | Description |
| --- | --- |
| `"connectorId"` | Stable `scl_` connector ID, even when the request used a UID. |
| `"createdAt"` | Time when the project connection was created, in epoch milliseconds. |
| `"enabledEnvironments"` | Environments where the connector is enabled for the project. |
| `"project"` | Vercel project connected to the connector. |
| `"updatedAt"` | Time when the project connection was last updated, in epoch milliseconds. |

Operations: List.

API path: `/v2/connect/connectors/{connector}/projects`

#### ConnectProjectConnection

| Field | Description |
| --- | --- |
| `"connectorId"` | Stable `scl_` connector ID, even when the request used a UID. |
| `"createdAt"` | Time when the project connection was created, in epoch milliseconds. |
| `"enabledEnvironments"` | Environments where the connector is enabled for the project. |
| `"environments"` | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `"project"` | Vercel project connected to the connector. |
| `"updatedAt"` | Time when the project connection was last updated, in epoch milliseconds. |

Operations: Create, Load.

API path: `/v1/connect/connectors/{connector}/projects/{projectId}`

#### ConnectProjectConnectorConnectionList

| Field | Description |
| --- | --- |
| `"connectorId"` | Stable `scl_` connector ID, even when the request used a UID. |
| `"createdAt"` | Time when the project connection was created, in epoch milliseconds. |
| `"enabledEnvironments"` | Environments where the connector is enabled for the project. |
| `"project"` | Vercel project connected to the connector. |
| `"updatedAt"` | Time when the project connection was last updated, in epoch milliseconds. |

Operations: List.

API path: `/v2/connect/projects/{projectId}/connectors`

#### Deployment

| Field | Description |
| --- | --- |
| `"aliasAssigned"` |  |
| `"aliasError"` | An error object in case aliasing of the deployment failed. |
| `"attribution"` | Commit attribution metadata |
| `"buildMachine"` | Selects a custom build machine for this deployment without changing project settings. |
| `"buildingAt"` | Timestamp of when the deployment started building at. |
| `"checks"` | Detailed information about v2 deployment checks. |
| `"checksConclusion"` | Conclusion for checks |
| `"checksState"` | State of all registered checks |
| `"connectBuildsEnabled"` | The flag saying if Secure Compute network is used for builds |
| `"connectConfigurationId"` | The ID of Secure Compute network used for this deployment |
| `"created"` | Timestamp of when the deployment got created. |
| `"createdAt"` |  |
| `"creator"` | Metadata information of the deployment creator. |
| `"customEnvironment"` | The custom environment used for this deployment, if any |
| `"customEnvironmentSlugOrId"` | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `"defaultRoute"` | The default route that should be used for screenshots and links if configured with microfrontends. |
| `"deleted"` | Timestamp of when the deployment got deleted. |
| `"deploymentId"` | The ID of an existing deployment to redeploy. |
| `"errorCode"` | Error code when the deployment is in an error state. |
| `"errorMessage"` | Error message when the deployment is in an canceled or error state. |
| `"expiration"` | The expiration configured by the project retention policy |
| `"files"` | The files to include in the deployment. |
| `"gitAccessToken"` | Available only to Vercel platform accounts. |
| `"gitMetadata"` | Populates initial git metadata for different git providers. |
| `"gitSource"` | Defines the Git Repository source to be deployed. |
| `"id"` |  |
| `"inspectorUrl"` | Vercel URL to inspect the deployment. |
| `"isRollbackCandidate"` | Deployment can be used for instant rollback |
| `"manualProvisioning"` |  |
| `"meta"` | An object containing the deployment's metadata. |
| `"monorepoManager"` | The monorepo manager that is being used for this deployment. |
| `"name"` | A string with the project name used in the deployment URL |
| `"oomReport"` | Indicates if the deployment encountered an out-of-memory error. |
| `"outcomes"` |  |
| `"passiveConnectConfigurationId"` | The ID of Secure Compute network used for this deployment's passive functions |
| `"platform"` | Metadata about the source platform that triggered the deployment. |
| `"prebuilt"` |  |
| `"project"` | The target project identifier in which the deployment will be created. |
| `"projectId"` | The project ID of the deployment |
| `"projectSettings"` | Project settings that will be applied to the deployment. |
| `"proposedExpiration"` | The expiration proposed to replace the existing expiration |
| `"ready"` | Timestamp of when the deployment got ready. |
| `"readyState"` |  |
| `"readySubstate"` | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `"seatBlock"` | NSNB Blocked metadata |
| `"softDeletedByRetention"` | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `"source"` | The source of the deployment. |
| `"state"` | In which state is the deployment. |
| `"status"` |  |
| `"statusText"` |  |
| `"statusUrl"` |  |
| `"target"` | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `"type"` | The type of the deployment. |
| `"uid"` | The unique identifier of the deployment. |
| `"undeleted"` | Timestamp of when the deployment was undeleted. |
| `"url"` | The URL of the deployment. |
| `"withLatestCommit"` | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/files`

#### Dns

| Field | Description |
| --- | --- |
| `"comment"` | A comment to add context on what this DNS record is for |
| `"createdAt"` |  |
| `"creator"` |  |
| `"domain"` |  |
| `"https"` |  |
| `"id"` |  |
| `"mxPriority"` | The MX priority value of the DNS record |
| `"name"` | The name of the DNS record |
| `"recordType"` |  |
| `"srv"` |  |
| `"ttl"` | The Time to live (TTL) value of the DNS record |
| `"type"` | The type of record, it could be one of the valid DNS records. |
| `"value"` | The value of the DNS record |

Operations: Create, Load, Remove, Update.

API path: `/v2/domains/{domain}/records`

#### Domain

| Field | Description |
| --- | --- |
| `"boughtAt"` | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `"createdAt"` | Timestamp in milliseconds when the domain was created in the registry. |
| `"creator"` | An object containing information of the domain creator, including the user's id, username, and email. |
| `"customNameservers"` | A list of custom nameservers for the domain to point to. |
| `"echMode"` | Whether the domain is enrolled in Encrypted Client Hello. |
| `"expiresAt"` | Timestamp in milliseconds at which the domain is set to expire. |
| `"id"` | The unique identifier of the domain. |
| `"intendedNameservers"` | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `"method"` | The domain operation to perform. |
| `"name"` | The domain name. |
| `"nameservers"` | A list of the current nameservers of the domain. |
| `"renew"` | Indicates whether the domain is set to automatically renew. |
| `"serviceType"` | The type of service the domain is handled by. |
| `"suffix"` |  |
| `"teamId"` |  |
| `"transferStartedAt"` | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `"transferredAt"` | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `"userId"` |  |
| `"verified"` | If the domain has the ownership verified. |

Operations: Create, List, Load, Remove, Update.

API path: `/v9/domains/{domain}/claim`

#### DomainsRegistrar

| Field | Description |
| --- | --- |
| `"authCode"` | The auth code for the domain. |
| `"autoRenew"` | Whether the domain should be auto-renewed before it expires. |
| `"available"` |  |
| `"contactInformation"` | The contact information for the domain. |
| `"domains"` | an array of at most 50 item(s) |
| `"error"` |  |
| `"expectedPrice"` |  |
| `"languageCode"` | The language code for the domain. |
| `"nameservers"` |  |
| `"orderId"` | A valid order ID |
| `"purchasePrice"` |  |
| `"renewalPrice"` |  |
| `"results"` |  |
| `"status"` |  |
| `"transferPrice"` |  |
| `"years"` | The number of years the returned price is for. |

Operations: Create, Load, Update.

API path: `/v1/registrar/domains/{domain}/buy`

#### Drain

| Field | Description |
| --- | --- |
| `"delivery"` |  |
| `"drains"` |  |
| `"filter"` |  |
| `"id"` |  |
| `"name"` |  |
| `"projectIds"` |  |
| `"projects"` |  |
| `"sampling"` |  |
| `"schemas"` |  |
| `"source"` |  |
| `"status"` |  |
| `"transforms"` |  |

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
| `"applyToAllCustomEnvironments"` | whether or not this env varible applies to custom environments |
| `"comment"` | A user provided comment that describes what this Shared Env Var is for. |
| `"created"` | The date when the Shared Env Var was created. |
| `"createdAt"` | Timestamp for when the Shared Env Var was created. |
| `"createdBy"` | The unique identifier of the user who created the Shared Env Var. |
| `"customEnvironmentIds"` | The custom environment IDs that this Shared Env Var is scoped to. |
| `"decrypted"` | whether or not this env variable is decrypted |
| `"deletedAt"` | Timestamp for when the Shared Env Var was (soft) deleted. |
| `"deletedBy"` | The unique identifier of the user who deleted the Shared Env Var. |
| `"evs"` |  |
| `"failed"` |  |
| `"id"` | The unique identifier of the Shared Env Var. |
| `"key"` | The name of the Shared Env Var. |
| `"lastEditedByDisplayName"` | The last editor full name or username. |
| `"ownerId"` | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `"projectId"` | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `"securityIssues"` |  |
| `"target"` | environments this env variable targets |
| `"type"` | The type of this cosmos doc instance, if blank, assume secret. |
| `"updated"` |  |
| `"updatedAt"` | Timestamp for when the Shared Env Var was last updated. |
| `"updatedBy"` | The unique identifier of the user who last updated the Shared Env Var. |
| `"updates"` | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
| `"value"` | The value of the Shared Env Var. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/env`

#### Environment

| Field | Description |
| --- | --- |
| `"branchMatcher"` | Configuration for matching git branches to this environment |
| `"copyEnvVarsFrom"` | Where to copy environment variables from. |
| `"createdAt"` | Timestamp when the environment was created |
| `"currentDeploymentAliases"` | List of aliases for the current deployment |
| `"description"` | Optional description of the environment's purpose |
| `"domains"` | List of domains associated with this environment |
| `"id"` | Unique identifier for the custom environment (format: env_*) |
| `"slug"` | URL-friendly name of the environment |
| `"type"` | The type of environment (production, preview, or development) |
| `"updatedAt"` | Timestamp when the environment was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v9/projects/{idOrName}/custom-environments`

#### FeatureFlag

| Field | Description |
| --- | --- |
| `"changedEnvironments"` |  |
| `"createdAt"` |  |
| `"createdBy"` | The user who created this patch |
| `"data"` | The data of the segment |
| `"description"` | A description of the flag |
| `"environments"` | The configuration for the flag in different environments |
| `"flagId"` |  |
| `"flags"` |  |
| `"hint"` |  |
| `"id"` |  |
| `"kind"` | The kind of flag |
| `"label"` |  |
| `"maintainerIds"` | The user ids of the maintainers of the flag |
| `"message"` | Additional message for this version |
| `"metadata"` |  |
| `"operations"` |  |
| `"ownerId"` |  |
| `"pagination"` |  |
| `"permanent"` | Whether this flag is marked as permanent, indicating it should not be removed |
| `"projectId"` |  |
| `"revision"` |  |
| `"seed"` | A random seed to prevent split points in different flags from having the same targets |
| `"slug"` | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `"state"` |  |
| `"status"` |  |
| `"tags"` | Tags for categorizing the flag |
| `"typeName"` |  |
| `"updatedAt"` |  |
| `"updatedBy"` |  |
| `"variants"` | The variants of the flag |

Operations: List, Load, Patch, Remove, Update.

API path: `/v2/teams/{teamId}/feature-flags/flags`

#### File

| Field | Description |
| --- | --- |
| `"children"` | The list of children files of the directory (only valid for the `directory` type) |
| `"contentType"` | The content-type of the file (only valid for the `file` type) |
| `"mode"` | The file "mode" indicating file type and permissions. |
| `"name"` | The name of the file tree entry |
| `"type"` | String indicating the type of file tree entry. |
| `"uid"` | The unique identifier of the file (only valid for the `file` type) |

Operations: List.

API path: `/v6/deployments/{id}/files`

#### Flag

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"createdBy"` |  |
| `"description"` |  |
| `"environments"` |  |
| `"id"` |  |
| `"kind"` |  |
| `"maintainerIds"` |  |
| `"metadata"` |  |
| `"ownerId"` |  |
| `"permanent"` |  |
| `"projectId"` |  |
| `"revision"` |  |
| `"seed"` |  |
| `"slug"` |  |
| `"state"` |  |
| `"tags"` |  |
| `"typeName"` |  |
| `"updatedAt"` |  |
| `"updatedBy"` |  |
| `"variants"` |  |

Operations: Load.

API path: `/v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}`

#### FlagsSdkKeyWithSecret

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"createdBy"` |  |
| `"deletedAt"` |  |
| `"environment"` |  |
| `"hashKey"` |  |
| `"keyValue"` | Cleartext value of the SDK key. |
| `"label"` |  |
| `"partialKeyValue"` | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `"projectId"` |  |
| `"sdkKeyType"` |  |
| `"tokenValue"` | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `"type"` |  |
| `"updatedAt"` |  |

Operations: Update.

API path: `/v1/projects/{projectIdOrName}/feature-flags/sdk-keys`

#### GlobalConfig

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"createdBy"` | The ID of the user who created the Global Config, optional because it is not always set. |
| `"deletedAt"` |  |
| `"digest"` |  |
| `"id"` |  |
| `"itemCount"` |  |
| `"items"` |  |
| `"ownerId"` |  |
| `"purpose"` |  |
| `"schema"` |  |
| `"sizeInBytes"` |  |
| `"slug"` | Name for the Global Config Names are not unique. |
| `"syncedToDynamoAt"` | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `"transfer"` | Keeps track of the current state of the Global Config while it gets transferred. |
| `"updatedAt"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}/restore`

#### GlobalConfigItem

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"description"` |  |
| `"edgeConfigId"` |  |
| `"id"` |  |
| `"key"` |  |
| `"updatedAt"` |  |
| `"value"` |  |

Operations: List, Load.

API path: `/v1/global-config/{edgeConfigId}/items`

#### GlobalConfigToken

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"edgeConfigId"` |  |
| `"id"` | This is not the token itself, but rather an id to identify the token by |
| `"label"` |  |
| `"partialToken"` | A partially-masked representation of the token, safe to display in UIs. |
| `"token"` | Deprecated: the full, plaintext token. |

Operations: Load.

API path: `/v1/global-config/{edgeConfigId}/token/{token}`

#### Integration

| Field | Description |
| --- | --- |
| `"cost"` |  |
| `"description"` |  |
| `"details"` |  |
| `"disabled"` |  |
| `"effectiveDate"` |  |
| `"envVarEnvironments"` |  |
| `"highlightedDetails"` |  |
| `"id"` |  |
| `"initialCharge"` |  |
| `"makeEnvVarsSensitive"` |  |
| `"maximumAmount"` |  |
| `"maximumAmountAutoPurchasePerPeriod"` |  |
| `"metadataSchema"` |  |
| `"minimumAmount"` |  |
| `"name"` |  |
| `"paymentMethodRequired"` |  |
| `"preauthorizationAmount"` |  |
| `"primaryProtocol"` |  |
| `"projectId"` |  |
| `"protocols"` |  |
| `"quote"` |  |
| `"scope"` |  |
| `"slug"` |  |
| `"type"` |  |

Operations: Create, List, Load, Remove.

API path: `/v1/integrations/installations/{integrationConfigurationId}/resources/{resourceId}/connections`

#### Kms

| Field | Description |
| --- | --- |
| `"activation"` | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `"alg"` |  |
| `"algorithm"` | Algorithm of the signing key. |
| `"claims"` | The claims to include in the token. |
| `"claimsSchema"` | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `"createdAt"` |  |
| `"environments"` | The environments for the project grant policy. |
| `"headers"` | Additional headers to include in the token. |
| `"id"` |  |
| `"importKey"` | The PEM-encoded private key to use for the issuer. |
| `"importKeyId"` | The key id to use as the imported key's JWT/JWKS `kid`. |
| `"keyId"` | Key id of the signing key. |
| `"key_ops"` |  |
| `"kid"` |  |
| `"kind"` |  |
| `"kty"` |  |
| `"managedBy"` |  |
| `"message"` | Base64-encoded message to be signed. |
| `"name"` | The name of the issuer. |
| `"origin"` |  |
| `"ownerId"` |  |
| `"policies"` |  |
| `"projectId"` | The project ID for the project grant policy. |
| `"revokePreviousAfterHours"` | How many hours after activation the previously-active key should stop being used. |
| `"revokePreviousAt"` | Deprecated. |
| `"signature"` | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `"signingKeys"` |  |
| `"token"` |  |
| `"tokenClaims"` | The claims that KMS should include in signed JWTs for this policy. |
| `"ttl"` | The time-to-live for the token, in seconds. |
| `"updatedAt"` |  |
| `"use"` |  |
| `"x5c"` | The X.509 certificate chain (RFC 7517 §4.7). |
| `"x5tS256"` | The base64url SHA-256 thumbprint of the DER certificate in `x5c[0]` (RFC 7517 §4.9). |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/kms/issuers/{issuerId}/keys/{keyId}/activate`

#### ListEventType

| Field | Description |
| --- | --- |
| `"categories"` |  |
| `"types"` |  |

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
| `"branch"` | The branch regexp of log drain |
| `"clientId"` | The oauth2 client application id that created this log drain |
| `"configurationId"` | The client configuration this log drain was created with |
| `"createdAt"` | A timestamp that tells you when the log drain was created |
| `"createdFrom"` | Whether the log drain was created by an integration or by a user |
| `"deliveryFormat"` | The delivery log format |
| `"environments"` | The environment of log drain |
| `"headers"` | Headers to be sent together with the request |
| `"id"` | The unique identifier of the log drain. |
| `"integrationConfigurationUri"` |  |
| `"integrationIcon"` |  |
| `"integrationWebsite"` |  |
| `"name"` | The custom name of this log drain. |
| `"ownerId"` | The identifier of the team or user whose events will trigger the log drain |
| `"projectId"` |  |
| `"projectIds"` | The identifier of the projects this log drain is associated with |
| `"projectsMetadata"` |  |
| `"samplingRate"` | The sampling rate for this log drain. |
| `"secret"` | Custom secret of log drain |
| `"source"` |  |
| `"sources"` | The sources from which logs are currently being delivered to this log drain. |
| `"url"` | The log drain url |

Operations: Create, List, Load, Remove.

API path: `/v1/log-drains`

#### Marketplace

| Field | Description |
| --- | --- |
| `"access_token"` |  |
| `"already_revoked"` |  |
| `"balances"` |  |
| `"billing"` | Billing data (interim invoicing data). |
| `"billingPlan"` |  |
| `"billingPlanId"` | The ID of the billing plan the resource is subscribed to, if applicable |
| `"category"` |  |
| `"client_id"` |  |
| `"client_secret"` |  |
| `"created"` | System creation date. |
| `"createdAt"` |  |
| `"data"` |  |
| `"description"` |  |
| `"discounts"` | Invoice discounts. |
| `"email"` |  |
| `"eod"` | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `"event"` |  |
| `"expires_in"` |  |
| `"externalId"` | Partner-supplied Invoice ID, if applicable. |
| `"extras"` |  |
| `"final"` | Set this to `true` if this is the final invoice for the installation. |
| `"globalUserId"` |  |
| `"id"` | The ID provided by the 3rd party provider for the given resource |
| `"internalId"` | The ID assigned by Vercel for the given resource |
| `"invoiceDate"` | Invoice date. |
| `"invoiceId"` | Vercel Marketplace Invoice ID. |
| `"invoiceNumber"` | User-readable invoice number. |
| `"isArchived"` |  |
| `"items"` | Invoice items. |
| `"memo"` | Additional memo for the invoice. |
| `"metadata"` | The configured metadata for the resource as defined by its product's Metadata Schema |
| `"name"` | The name of the resource as it is recorded in Vercel |
| `"notification"` | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `"origin"` |  |
| `"ownership"` |  |
| `"paidAt"` | Moment the invoice was paid. |
| `"partial"` | If true, will only update the provided secrets |
| `"partnerId"` | The ID provided by the partner for the given resource |
| `"period"` | Subscription period for this billing cycle. |
| `"productId"` | The ID of the product the resource is derived from |
| `"protocolSettings"` | Any settings provided for the resource to support its product's protocols |
| `"refundReason"` | The reason for refund. |
| `"refundTotal"` | Refund amount. |
| `"refundedAt"` | Most recent moment the invoice was refunded. |
| `"revoked"` |  |
| `"role"` | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `"scope"` |  |
| `"secrets"` |  |
| `"slug"` |  |
| `"state"` | Invoice state. |
| `"status"` | The current status of the resource |
| `"test"` | Whether the invoice is in the testmode (no real transaction created). |
| `"timestamp"` | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `"token"` |  |
| `"token_type"` |  |
| `"total"` | Invoice total amount. |
| `"updated"` | System update date. |
| `"updatedAt"` |  |
| `"usage"` |  |
| `"userEmail"` |  |
| `"validationErrors"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}/actions`

#### Microfrontend

| Field | Description |
| --- | --- |
| `"abuse"` |  |
| `"accountId"` |  |
| `"alias"` |  |
| `"analytics"` |  |
| `"applications"` |  |
| `"appliedCve55182Migration"` |  |
| `"autoAssignCustomDomains"` |  |
| `"autoAssignCustomDomainsUpdatedBy"` |  |
| `"autoExposeSystemEnvs"` |  |
| `"avatar"` |  |
| `"blobs"` |  |
| `"buildCommand"` |  |
| `"commandForIgnoringBuildStep"` |  |
| `"concurrencyBucketName"` |  |
| `"connectBuildsEnabled"` |  |
| `"connectConfigurationId"` |  |
| `"connectConfigurations"` |  |
| `"createdAt"` |  |
| `"creator"` |  |
| `"crons"` |  |
| `"customEnvironments"` |  |
| `"customerSupportCodeVisibility"` |  |
| `"dataCache"` |  |
| `"defaultResourceConfig"` |  |
| `"deploymentExpiration"` | Retention policies for deployments. |
| `"deploymentPolicy"` | Project shape. |
| `"devCommand"` |  |
| `"directoryListing"` |  |
| `"dismissedToasts"` |  |
| `"enableAffectedProjectsDeployments"` |  |
| `"enableExternalRewriteCaching"` |  |
| `"enablePreviewFeedback"` |  |
| `"enableProductionFeedback"` |  |
| `"env"` |  |
| `"expiration"` |  |
| `"features"` |  |
| `"framework"` |  |
| `"gitComments"` |  |
| `"gitForkProtection"` |  |
| `"gitLFS"` |  |
| `"gitProviderOptions"` |  |
| `"hasActiveBranches"` |  |
| `"hasDeployments"` |  |
| `"id"` |  |
| `"installCommand"` |  |
| `"internalRoutes"` |  |
| `"ipBuckets"` |  |
| `"jobs"` |  |
| `"lastAliasRequest"` |  |
| `"lastRollbackTarget"` |  |
| `"latestDeployments"` |  |
| `"link"` |  |
| `"live"` |  |
| `"microfrontends"` |  |
| `"name"` |  |
| `"nodeVersion"` |  |
| `"oidcTokenConfig"` |  |
| `"options"` | Optional configuration options for the microfrontend. |
| `"optionsAllowlist"` |  |
| `"outputDirectory"` |  |
| `"passiveConnectConfigurationId"` |  |
| `"passport"` |  |
| `"passwordProtection"` |  |
| `"paused"` |  |
| `"permissions"` |  |
| `"productionDeploymentsFastLane"` |  |
| `"protectedSourcemaps"` |  |
| `"protectionBypass"` |  |
| `"protectionConfig"` |  |
| `"resourceConfig"` |  |
| `"rollbackDescription"` | Description of why a project was rolled back, and by whom. |
| `"rollingRelease"` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `"rootDirectory"` |  |
| `"sandbox"` |  |
| `"schema"` | See https://openapi.vercel.sh/microfrontends.json. |
| `"security"` |  |
| `"serverlessFunctionZeroConfigFailover"` |  |
| `"services"` |  |
| `"skewProtectionAllowedDomains"` |  |
| `"skewProtectionBoundaryAt"` |  |
| `"skewProtectionMaxAge"` |  |
| `"skipGitConnectDuringLink"` |  |
| `"sourceFilesOutsideRootDirectory"` |  |
| `"speedInsights"` |  |
| `"ssoProtection"` |  |
| `"staticIps"` |  |
| `"targets"` |  |
| `"tier"` |  |
| `"tracing"` |  |
| `"transferCompletedAt"` |  |
| `"transferStartedAt"` |  |
| `"transferToAccountId"` |  |
| `"transferredFromAccountId"` |  |
| `"trustedIps"` |  |
| `"trustedSources"` |  |
| `"updatedAt"` |  |
| `"usageStatus"` |  |
| `"v0"` |  |
| `"v0Created"` |  |
| `"version"` | The version of the microfrontends config schema. |
| `"webAnalytics"` |  |

Operations: Create, List, Load.

API path: `/v1/microfrontends/group`

#### Network

| Field | Description |
| --- | --- |
| `"awsAccountId"` | The ID of the AWS Account in which the network exists. |
| `"awsAvailabilityZoneIds"` | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `"awsRegion"` | The AWS Region in which the network exists. |
| `"cidr"` | The CIDR range of the Network. |
| `"createdAt"` | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `"egressIpAddresses"` |  |
| `"hostedZones"` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `"id"` | The unique identifier of the Network. |
| `"name"` | The name of the network. |
| `"peeringConnections"` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `"projects"` | Metadata about any projects associated with the Network. |
| `"region"` | The Vercel region in which the Network exists. |
| `"status"` | The status of the Network. |
| `"teamId"` | The unique identifier of the Team that owns the Network. |
| `"vpcId"` | The ID of the VPC which hosts the network. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/connect/networks`

#### Networking

| Field | Description |
| --- | --- |
| `"builds"` | Whether to use Static IPs for builds. |
| `"regions"` |  |

Operations: Remove, Update.

API path: `/v1/networking/privatelink/endpoints/{endpointId}`

#### Observability

| Field | Description |
| --- | --- |
| `"disabled"` | Whether Observability Plus should be disabled for the project |
| `"disabledAt"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: List, Update.

API path: `/v1/observability/manage/configuration/projects`

#### PrivateLinkEndpoint

| Field | Description |
| --- | --- |
| `"awsDnsEntries"` | The regional DNS names assigned to the endpoint by AWS. |
| `"awsServiceName"` | The AWS VPC endpoint service the endpoint connects to. |
| `"createdAt"` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `"enablePrivateDns"` | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `"endpointId"` | The unique identifier of the PrivateLink endpoint. |
| `"id"` |  |
| `"name"` | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `"privateDnsNames"` | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `"projectId"` | The identifier of the project the PrivateLink endpoint belongs to. |
| `"status"` | The current state of the endpoint. |
| `"statusMessage"` | A human-readable explanation of why the endpoint could not be provisioned. |
| `"teamId"` | The identifier of the team that owns the PrivateLink endpoint. |
| `"updatedAt"` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
| `"vercelRegion"` | The Vercel region the endpoint is provisioned in. |
| `"vpcEndpointId"` | The identifier of the underlying AWS VPC endpoint. |

Operations: Create, List, Load, Update.

API path: `/v1/networking/privatelink/endpoints`

#### Project

| Field | Description |
| --- | --- |
| `"abuse"` |  |
| `"acceptedPolicies"` |  |
| `"accountId"` |  |
| `"alias"` |  |
| `"analytics"` |  |
| `"apexName"` |  |
| `"appliedCve55182Migration"` |  |
| `"autoAssignCustomDomains"` |  |
| `"autoAssignCustomDomainsUpdatedBy"` |  |
| `"autoExposeSystemEnvs"` |  |
| `"avatar"` |  |
| `"blobs"` |  |
| `"buildCommand"` | The build command for this project. |
| `"commandForIgnoringBuildStep"` |  |
| `"comment"` | A comment to add context on what this env var is for |
| `"concurrencyBucketName"` |  |
| `"configurationId"` |  |
| `"connectBuildsEnabled"` |  |
| `"connectConfigurationId"` |  |
| `"connectConfigurations"` | The list of connections from project environment to Secure Compute network |
| `"contentHint"` |  |
| `"createdAt"` |  |
| `"createdBy"` |  |
| `"creator"` |  |
| `"crons"` |  |
| `"customEnvironmentId"` |  |
| `"customEnvironmentIds"` | The custom environments that the environment variable should be synced to |
| `"customEnvironments"` |  |
| `"customerSupportCodeVisibility"` | Specifies whether customer support can see git source for a deployment |
| `"dataCache"` |  |
| `"decrypted"` |  |
| `"defaultResourceConfig"` |  |
| `"deploymentExpiration"` | Retention policies for deployments. |
| `"deploymentPolicy"` | Project shape. |
| `"devCommand"` | The dev command for this project. |
| `"directoryListing"` |  |
| `"dismissedToasts"` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `"edgeConfigId"` |  |
| `"edgeConfigTokenId"` |  |
| `"enableAffectedProjectsDeployments"` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `"enableExternalRewriteCaching"` | Specifies whether external rewrite caching is enabled for this project. |
| `"enablePreviewFeedback"` | Opt-in to preview toolbar on the project level |
| `"enableProductionFeedback"` | Opt-in to production toolbar on the project level |
| `"env"` |  |
| `"environmentVariables"` | Collection of ENV Variables the Project will use |
| `"expiration"` |  |
| `"features"` |  |
| `"framework"` | The framework that is being used for this project. |
| `"gitBranch"` | Git branch to link the project domain |
| `"gitComments"` |  |
| `"gitForkProtection"` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `"gitLFS"` | Specifies whether Git LFS is enabled for this project. |
| `"gitProviderOptions"` |  |
| `"gitRepository"` | The Git Repository that will be connected to the project. |
| `"hasActiveBranches"` |  |
| `"hasDeployments"` |  |
| `"hostname"` | The deployment hostname to scope the trace session to. |
| `"id"` |  |
| `"installCommand"` | The install command for this project. |
| `"integrations"` |  |
| `"internalContentHint"` | Similar to `contentHints`, but should not be exposed to the user. |
| `"internalRoutes"` |  |
| `"ipBuckets"` |  |
| `"jobs"` |  |
| `"key"` | The name of the environment variable |
| `"lastAliasRequest"` |  |
| `"lastRollbackTarget"` |  |
| `"latestDeployments"` |  |
| `"legacyValue"` | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `"link"` |  |
| `"live"` |  |
| `"microfrontends"` |  |
| `"name"` | The desired name for the project |
| `"newProjectName"` | The desired name for the project |
| `"nodeVersion"` |  |
| `"oidcTokenConfig"` | OpenID Connect JSON Web Token generation configuration. |
| `"optionsAllowlist"` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `"outputDirectory"` | The output directory of the project. |
| `"paidFeatures"` |  |
| `"passiveConnectConfigurationId"` |  |
| `"passport"` | Passport configuration for the project. |
| `"passwordProtection"` | Allows to protect project deployments with a password |
| `"paused"` |  |
| `"permissions"` |  |
| `"previewDeploymentSuffix"` | Custom domain suffix for preview deployments. |
| `"previewDeploymentsDisabled"` | Specifies whether preview deployments are disabled for this project. |
| `"productionDeploymentsFastLane"` |  |
| `"projectId"` | The unique target project identifier |
| `"protectedSourcemaps"` | Specifies whether sourcemaps are protected and require authentication to access. |
| `"protectionBypass"` |  |
| `"protectionConfig"` |  |
| `"publicSource"` | Deprecated. |
| `"redirect"` | Target destination domain for redirect |
| `"redirectStatusCode"` | Status code for domain redirect |
| `"resourceConfig"` | Specifies resource override configuration for the project |
| `"rollbackDescription"` | Description of why a project was rolled back, and by whom. |
| `"rollingRelease"` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `"rootDirectory"` | The name of a directory or relative path to the source code of your project. |
| `"sandbox"` | Specifies the default region and failover regions for sandboxes created in the project |
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
| `"sunsetSecretId"` | This is used to identify variables that have been migrated from type secret to sensitive. |
| `"target"` | The target environment of the environment variable |
| `"targets"` |  |
| `"tier"` |  |
| `"token"` |  |
| `"tracing"` | Tracing configuration for this project |
| `"transferCompletedAt"` |  |
| `"transferStartedAt"` |  |
| `"transferToAccountId"` |  |
| `"transferredFromAccountId"` |  |
| `"trustedIps"` | Restricts access to deployments based on the incoming request IP address |
| `"trustedSources"` | Deployment Protection Trusted Sources |
| `"type"` | The type of environment variable |
| `"updatedAt"` |  |
| `"updatedBy"` |  |
| `"usageStatus"` |  |
| `"v0"` |  |
| `"v0Created"` |  |
| `"value"` | The value of the environment variable |
| `"verification"` | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `"verified"` | `true` if the domain is verified for use with the project. |
| `"visibility"` | User-facing config/secret model. |
| `"webAnalytics"` |  |

Operations: Create, Load, Patch, Remove, Update.

API path: `/v1/projects/{projectId}/rollback/{deploymentId}`

#### ProjectMember

| Field | Description |
| --- | --- |
| `"email"` | The email of the team member that should be added to this project. |
| `"id"` |  |
| `"role"` | The project role of the member that will be added. |
| `"uid"` | The ID of the team member that should be added to this project. |
| `"username"` | The username of the team member that should be added to this project. |

Operations: Create, Load, Remove.

API path: `/v1/projects/{idOrName}/members`

#### ProjectRoute

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"actions"` |  |
| `"alias"` | The staging alias for previewing this version. |
| `"conditions"` |  |
| `"createdBy"` | The user who created this version. |
| `"currentRoute"` |  |
| `"description"` |  |
| `"id"` | Unique identifier for the version. |
| `"isLive"` | Whether this version is currently live in production. |
| `"isStaging"` | Whether this version is staged and not yet promoted to production. |
| `"lastModified"` | Timestamp of when this version was last modified. |
| `"name"` |  |
| `"overwrite"` |  |
| `"pathCondition"` |  |
| `"position"` | Controls where the route is inserted. |
| `"prompt"` |  |
| `"restore"` | If true, restores the staged route to the value in the production version. |
| `"route"` | The full route object to replace the existing route with |
| `"routes"` |  |
| `"ruleCount"` | The number of routing rules in this version. |
| `"s3Key"` | The S3 key where the routing rules are stored. |
| `"version"` | A version of routing rules stored in S3. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/v1/projects/{projectId}/routes`

#### Query

| Field | Description |
| --- | --- |
| `"aggregation"` | Aggregation function to apply. |
| `"bucketTimezone"` | IANA timezone (e.g. |
| `"endTime"` | End timestamp |
| `"filter"` | Filter to apply to the query. |
| `"granularity"` | Time bucket size |
| `"groupBy"` | Dimensions to group results by. |
| `"limit"` | Maximum number of results |
| `"metric"` | Metric id |
| `"orderBy"` | Rollup column to order grouped results by. |
| `"orderDirection"` | Direction to order grouped results by. |
| `"scope"` | Owner or project scope for the query |
| `"startTime"` | Start timestamp |

Operations: Create.

API path: `/v2/observability/query`

#### Record

| Field | Description |
| --- | --- |
| `"comment"` |  |
| `"createdAt"` |  |
| `"creator"` |  |
| `"domain"` |  |
| `"id"` |  |
| `"name"` |  |
| `"recordType"` |  |
| `"ttl"` |  |
| `"type"` |  |
| `"value"` |  |

Operations: Load.

API path: `/domains/records/{recordId}`

#### RollingRelease

| Field | Description |
| --- | --- |
| `"activeStage"` | The currently active stage, null if the rollout is aborted |
| `"advancementType"` | The advancement type of the rolling release |
| `"canaryDeployment"` | The canary deployment being rolled out |
| `"currentCanaryPercentage"` | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `"currentDeployment"` | The current deployment receiving production traffic |
| `"nextStage"` | The next stage to be activated, null if not in ACTIVE state |
| `"queuedDeploymentId"` | The ID of a deployment queued for the next rolling release |
| `"stages"` | All stages configured for this rolling release |
| `"startedAt"` | Unix timestamp in milliseconds when the rolling release started |
| `"state"` | The current state of the rolling release |
| `"substate"` | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `"updatedAt"` | Unix timestamp in milliseconds when the rolling release was last updated |

Operations: Create, Load, Remove, Update.

API path: `/v1/projects/{idOrName}/rolling-release/approve-stage`

#### Sandbox

| Field | Description |
| --- | --- |
| `"args"` | The arguments of the command. |
| `"command"` | The executable or shell command to run. |
| `"createdAt"` | The time when the snapshot was created, in milliseconds since the epoch. |
| `"creationMethod"` | The method used to create the snapshot. |
| `"currentSandboxName"` | Current sandbox name the drive is attached to, if any. |
| `"currentSessionId"` | Current session ID the drive is attached to, if any. |
| `"currentSnapshotId"` | The snapshot ID to set as the current snapshot. |
| `"cwd"` | The current working directory of the command. |
| `"durationMs"` | Duration of the command execution in milliseconds. |
| `"env"` | Additional environment variables to set for this command. |
| `"exitCode"` | If the command did finish, the exit code. |
| `"expiration"` | The number of milliseconds after which the snapshot will expire and be deleted. |
| `"expiresAt"` | The time when the snapshot will expire, in milliseconds since the epoch. |
| `"failoverRegions"` | The regions the sandbox falls back to when it cannot be created in `region`. |
| `"id"` | The ID of the command. |
| `"image"` | Image to use for the sandbox. |
| `"keepLastSnapshots"` | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `"lastUsedAt"` | The last time the snapshot was used (e.g. |
| `"logs"` | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `"maxSizeBytes"` | The maximum drive size in bytes. |
| `"memory"` | Memory allocated in MB. |
| `"mounts"` | List of drives to mount to the sandbox at the provided path. |
| `"name"` | The name of the command. |
| `"networkId"` | The Connect network id for the target Secure Compute private network. |
| `"networkPolicy"` | Network policy configuration. |
| `"parentId"` | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `"path"` | The path of the directory to create. |
| `"persistent"` | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `"ports"` | List of ports to expose from the sandbox. |
| `"projectId"` | The project that owns the drive. |
| `"recursive"` | If true, creates parent directories as needed (like `mkdir -p`). |
| `"region"` | The region where the snapshot is stored. |
| `"regions"` | The regions where the snapshot is available. |
| `"resources"` | Resources to define the VM |
| `"resumed"` |  |
| `"routes"` |  |
| `"runtime"` | The runtime environment for the sandbox. |
| `"sandbox"` | This object contains information related to a Vercel NamedSandbox. |
| `"session"` | This object contains information related to a Vercel Sandbox Session. |
| `"sessionId"` | The ID of the session associated with the command. |
| `"sizeBytes"` | The size of the snapshot in bytes. |
| `"snapshotExpiration"` | Default snapshot expiration time in milliseconds. |
| `"source"` | The source from which to initialize the sandbox filesystem. |
| `"sourceSessionId"` | The unique identifier of the session from which the snapshot was created. |
| `"startedAt"` | When the command was started, in milliseconds since the epoch. |
| `"status"` | The status of the snapshot. |
| `"statusUpdatedAt"` | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `"sudo"` | Execute the command with root (superuser) privileges. |
| `"tags"` | Key-value tags to associate with the sandbox. |
| `"timeout"` | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `"totalActiveCpuDurationMs"` | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `"totalDurationMs"` | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `"totalEgressBytes"` | Cumulative egress bytes across all sandbox runs. |
| `"totalIngressBytes"` | Cumulative ingress bytes across all sandbox runs. |
| `"updatedAt"` | The last time the snapshot was updated, in milliseconds since the epoch. |
| `"vcpus"` | Number of virtual CPUs allocated. |
| `"wait"` | If true, returns an ND-JSON stream that emits the command status when started and again when finished. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/sandboxes/sessions/{sessionId}/cmd`

#### Schema

| Field | Description |
| --- | --- |
| `"aggregations"` |  |
| `"defaultAggregation"` |  |
| `"description"` |  |
| `"dimensions"` |  |
| `"id"` |  |
| `"unit"` |  |

Operations: List, Load.

API path: `/v2/observability/schema`

#### Security

| Field | Description |
| --- | --- |
| `"Action"` |  |
| `"ActorId"` |  |
| `"CreatedAt"` |  |
| `"DeletedAt"` |  |
| `"Domain"` |  |
| `"ExpiresAt"` |  |
| `"Id"` |  |
| `"Ip"` |  |
| `"IsProjectRule"` |  |
| `"Note"` |  |
| `"OwnerId"` |  |
| `"ProjectId"` |  |
| `"UpdatedAt"` |  |
| `"UpdatedAtHour"` |  |
| `"action"` |  |
| `"action_type"` |  |
| `"active"` |  |
| `"allSources"` |  |
| `"botIdEnabled"` |  |
| `"changes"` |  |
| `"conditionGroup"` |  |
| `"conditions"` |  |
| `"count"` |  |
| `"crs"` | Custom Ruleset |
| `"description"` |  |
| `"domain"` |  |
| `"endTime"` |  |
| `"firewallEnabled"` |  |
| `"host"` |  |
| `"id"` |  |
| `"ips"` |  |
| `"isActive"` |  |
| `"logHeaders"` |  |
| `"managedRules"` |  |
| `"name"` |  |
| `"note"` |  |
| `"ownerId"` |  |
| `"projectKey"` |  |
| `"projectScope"` | If the specified bypass will apply to all domains for a project. |
| `"public_ip"` |  |
| `"ruleId"` |  |
| `"ruleName"` |  |
| `"rules"` |  |
| `"rulesets"` |  |
| `"sourceIp"` |  |
| `"startTime"` |  |
| `"ttl"` | Time to live in milliseconds |
| `"updatedAt"` |  |
| `"version"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/v1/security/firewall/bypass`

#### Segment

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"createdBy"` |  |
| `"data"` |  |
| `"description"` |  |
| `"hint"` |  |
| `"id"` |  |
| `"label"` |  |
| `"metadata"` |  |
| `"projectId"` |  |
| `"slug"` |  |
| `"typeName"` |  |
| `"updatedAt"` |  |
| `"usedByFlags"` |  |
| `"usedBySegments"` |  |

Operations: Load.

API path: `/v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}`

#### Storage

| Field | Description |
| --- | --- |
| `"access"` |  |
| `"count"` |  |
| `"id"` |  |
| `"isTokenExpired"` |  |
| `"kind"` | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `"name"` |  |
| `"projectFilter"` |  |
| `"projectId"` | The project this store is scoped to. |
| `"projectsMetadata"` |  |
| `"region"` |  |
| `"size"` |  |
| `"status"` |  |
| `"totalConnectedProjects"` |  |
| `"usageQuotaExceeded"` |  |

Operations: Create, Load, Remove.

API path: `/storage/stores/blob`

#### Team

| Field | Description |
| --- | --- |
| `"accessRequestedAt"` | Timestamp in milliseconds when the user requested access to the team. |
| `"apiKeysInvalidatedAt"` | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `"appTokensInvalidatedAt"` | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `"attribution"` | Attribution information for the session or current page |
| `"avatar"` | The ID of the file used as avatar for this Team. |
| `"billing"` | The team's billing plan. |
| `"bitbucket"` | Map of the connected Bitbucket account. |
| `"confirmed"` | Current status of the membership. |
| `"connect"` |  |
| `"createdAt"` | UNIX timestamp (in milliseconds) when the Team was created. |
| `"creatorId"` | The ID of the user who created the Team. |
| `"defaultDeploymentProtection"` | Default deployment protection for this team null indicates protection is disabled |
| `"defaultExpirationSettings"` | Default deployment expiration settings for this team |
| `"defaultPassport"` | Default Passport configuration for new projects in this team. |
| `"defaultProjectJobs"` | Default job configuration applied to new projects created in this team. |
| `"defaultRoles"` | Default roles for the team. |
| `"deploymentPolicy"` | Composable deployment-time policy for the team. |
| `"description"` | A short description of the Team. |
| `"disableHardAutoBlocks"` |  |
| `"disableRepositoryDispatchEvents"` | Default for projects in the team. |
| `"disjunctiveProductionSecretPolicy"` | Require production secrets to use a different value than preview or development. |
| `"dpAccessRequestsMode"` | Controls who can request access to protected deployments. |
| `"emailDomain"` | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `"enablePolyrepoBranchRouting"` | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `"enablePreviewFeedback"` | Whether toolbar is enabled on preview deployments |
| `"enableProductionFeedback"` | Whether toolbar is enabled on production deployments |
| `"fallbackEnvironment"` | The new fallback environment for the microfrontends group. |
| `"github"` | Map of the connected GitHub account. |
| `"gitlab"` | Map of the connected GitLab account. |
| `"hideIpAddresses"` | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `"hideIpAddressesInLogDrains"` | Indicates if IP addresses should be accessible in log drains |
| `"id"` | The Team's unique identifier. |
| `"integrationTokensInvalidatedAt"` | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `"inviteCode"` | Code that can be used to join this Team. |
| `"ipBuckets"` |  |
| `"joinedFrom"` | A map that describes the origin from where the user joined. |
| `"membership"` | The membership of the authenticated User in relation to the Team. |
| `"name"` | Name associated with the Team account, or `null` if none has been provided. |
| `"nsnbConfig"` | NSNB configuration for the team. |
| `"orgRootTeamId"` | Best-effort ID of the organization’s root billing team. |
| `"pagination"` | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `"parentId"` | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `"personalAccessTokensInvalidatedAt"` | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `"platform"` | Whether the team is a platform team. |
| `"previewDeploymentSuffix"` | The hostname that is current set as preview deployment suffix. |
| `"projects"` |  |
| `"regenerateInviteCode"` | Create a new invite code and replace the current one. |
| `"remoteCaching"` | Is remote caching enabled for this team |
| `"requireVerifiedCommits"` | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `"resourceConfig"` | Resource configuration for the team. |
| `"role"` | The role in the team of the member. |
| `"saml"` | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `"sensitiveEnvironmentVariablePolicy"` | Sensitive environment variable policy for this team |
| `"slug"` | The Team's slug, which is unique across the Vercel platform. |
| `"stagingPrefix"` | The prefix that is prepended to automatic aliases. |
| `"strictConnectors"` | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `"strictDeploymentProtectionSettings"` | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `"strictPasswordProtectionSettings"` | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `"strictShareableLinks"` | When enabled, creating shareable links requires Owner role. |
| `"teamName"` | The name of the team. |
| `"teamPermissions"` | The team permissions to set for the member. |
| `"teamSlug"` | The slug of the team. |
| `"teams"` |  |
| `"updatedAt"` | Timestamp (in milliseconds) of when the Team was last updated. |

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
| `"value"` |  |

Operations: Create.

API path: `/speed-insights/toggle`

#### User

| Field | Description |
| --- | --- |
| `"categories"` | The categories that group this event with related event types. |
| `"createdAt"` | Timestamp (in milliseconds) of when the event was generated. |
| `"entities"` | A list of "entities" within the event `text`. |
| `"id"` | The unique identifier of the Event. |
| `"payload"` |  |
| `"principal"` |  |
| `"principalId"` | The ID of the principal who generated the event. |
| `"requestId"` |  |
| `"sessionId"` | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `"text"` | The human-readable text of the Event. |
| `"tokenId"` | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `"type"` | The type of the event. |
| `"user"` | Metadata for {@link userId}. |
| `"userId"` | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `"via"` | Metadata for {@link viaIds}. |
| `"viaIds"` | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

Operations: List, Load, Remove.

API path: `/v3/events`

#### Vcr

| Field | Description |
| --- | --- |
| `"arch"` | CPU architecture the manifest targets. |
| `"createdAt"` | ISO 8601 timestamp of when the image was created. |
| `"id"` | Internal identifier of the image. |
| `"imageId"` | Internal identifier of the image the tag points at. |
| `"kind"` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `"layers"` |  |
| `"manifestDigest"` | SHA-256 digest of the image manifest. |
| `"name"` | Name of the repository. |
| `"platform"` | Operating system the manifest targets. |
| `"projectId"` | Identifier of the project the repository belongs to. |
| `"public"` | Whether the repository is public. |
| `"pushedBy"` | Identifier of the actor that pushed the image. |
| `"repositoryId"` | Identifier of the repository the image belongs to. |
| `"sizeInBytes"` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `"status"` | VHS-readiness status, or `null` for a multi-platform index. |
| `"tag"` | The tag name. |
| `"tags"` | Tags pointing at this image's manifest. |
| `"teamId"` | Identifier of the team that is granted access to the repository. |
| `"teamSlug"` | Slug of the team that is granted access to the repository. |
| `"updatedAt"` | ISO 8601 timestamp of when the tag was last updated. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/`

#### VcrImageList

| Field | Description |
| --- | --- |
| `"arch"` | CPU architecture the manifest targets. |
| `"createdAt"` | ISO 8601 timestamp of when the image was created. |
| `"id"` | Internal identifier of the image. |
| `"kind"` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `"manifestDigest"` | SHA-256 digest of the image manifest. |
| `"platform"` | Operating system the manifest targets. |
| `"pushedBy"` | Identifier of the actor that pushed the image. |
| `"repositoryId"` | Identifier of the repository the image belongs to. |
| `"sizeInBytes"` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `"status"` | VHS-readiness status, or `null` for a multi-platform index. |
| `"tags"` | Tags pointing at this image's manifest. |

Operations: List.

API path: `/v1/vcr/repository/{idOrName}/images`

#### VcrRepositoryList

| Field | Description |
| --- | --- |
| `"createdAt"` | ISO 8601 timestamp of when the repository was created. |
| `"id"` | Unique identifier of the repository. |
| `"name"` | Name of the repository. |
| `"projectId"` | Identifier of the project the repository belongs to. |
| `"public"` | Whether the repository is public. |
| `"updatedAt"` | ISO 8601 timestamp of when the repository was last updated. |

Operations: List.

API path: `/v1/vcr/repository`

#### VcrRepositoryPermissionList

| Field | Description |
| --- | --- |
| `"createdAt"` | ISO 8601 timestamp of when the permission was created. |
| `"repositoryId"` | Identifier of the repository the permission grants access to. |
| `"teamId"` | Identifier of the team that is granted access to the repository. |
| `"teamSlug"` | Slug of the team that is granted access to the repository. |

Operations: List.

API path: `/v1/vcr/repository/{idOrName}/permissions`

#### WebAnalytics

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"query"` |  |
| `"version"` |  |

Operations: Load.

API path: `/v1/query/web-analytics/events/aggregate`

#### Webhook

| Field | Description |
| --- | --- |
| `"alertRuleIds"` |  |
| `"createdAt"` | A number containing the date when the webhook was created in in milliseconds |
| `"events"` | The webhooks events |
| `"id"` | The webhook id |
| `"ownerId"` | The unique ID of the team the webhook belongs to |
| `"projectIds"` | The ID of the projects the webhook is associated with |
| `"secret"` | The webhook secret used to sign the payload |
| `"updatedAt"` | A number containing the date when the webhook was updated in in milliseconds |
| `"url"` | A string with the URL of the webhook |

Operations: Create, Load, Remove.

API path: `/v1/webhooks`



## Entities


### AccessGroup

Create an instance: `accessGroup := client.AccessGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessGroupId` | `string` | ID of the access group. |
| `createdAt` | `string` | Timestamp in milliseconds when the access group was created. |
| `entitlements` | `[]any` |  |
| `id` | `string` |  |
| `isDsyncManaged` | `bool` |  |
| `membersCount` | `float64` | Number of members in the access group. |
| `membersToAdd` | `[]any` | List of members to add to the access group. |
| `membersToRemove` | `[]any` | List of members to remove from the access group. |
| `name` | `string` | The name of this access group. |
| `projectId` | `string` |  |
| `projects` | `[]any` |  |
| `projectsCount` | `float64` | Number of projects in the access group. |
| `role` | `string` | The project role that will be added to this Access Group. |
| `teamId` | `string` | ID of the team that this access group belongs to. |
| `teamPermissions` | `[]any` | Permissions that the team has in the access group. |
| `teamRoles` | `[]any` | Roles that the team has in the access group. |
| `updatedAt` | `string` | Timestamp in milliseconds when the access group was last updated. |

#### Example: Load

```go
accessGroup, err := client.AccessGroup(nil).Load(map[string]any{"id": "access_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(accessGroup) // the loaded record
```

#### Example: List

```go
accessGroups, err := client.AccessGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accessGroups) // the array of records
```

#### Example: Create

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


### AiGateway

Create an instance: `aiGateway := client.AiGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### AiGatewayRule

Create an instance: `aiGatewayRule := client.AiGatewayRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `map[string]any` |  |
| `createdAt` | `float64` |  |
| `createdBy` | `string` |  |
| `deleted` | `bool` |  |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `match` | `map[string]any` |  |
| `ownerId` | `string` |  |
| `ruleId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `float64` |  |
| `updatedBy` | `string` |  |

#### Example: Create

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


### AiGatewayRuleList

Create an instance: `aiGatewayRuleList := client.AiGatewayRuleList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `map[string]any` |  |
| `createdAt` | `float64` |  |
| `createdBy` | `string` |  |
| `deleted` | `bool` |  |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `match` | `map[string]any` |  |
| `ownerId` | `string` |  |
| `ruleId` | `string` |  |
| `type` | `string` |  |
| `updatedAt` | `float64` |  |
| `updatedBy` | `string` |  |

#### Example: List

```go
aiGatewayRuleLists, err := client.AiGatewayRuleList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayRuleLists) // the array of records
```


### AiGatewayVirtualModelConfig

Create an instance: `aiGatewayVirtualModelConfig := client.AiGatewayVirtualModelConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowFallbackFromFast` | `bool` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `[]any` | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | Use caching if available. |
| `createdAt` | `float64` | Creation timestamp (epoch ms). |
| `createdBy` | `string` | User or app id that created this VMC. |
| `deleted` | `bool` | Whether this VMC is soft-deleted. |
| `description` | `string` | Optional description for UI. |
| `disallowPromptTraining` | `bool` | Only use providers that will not train on your prompts. |
| `displayName` | `string` | Human-readable name for UI. |
| `has` | `[]any` | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | Only use HIPAA-compliant providers. |
| `id` | `string` |  |
| `inferenceRegion` | `map[string]any` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | Canonical model slug this VMC maps to (e.g. |
| `models` | `[]any` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `[]any` | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Team (owner) that owns this VMC. |
| `providerOnly` | `[]any` | Restrict routing to only these providers. |
| `providerOptions` | `map[string]any` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `[]any` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `map[string]any` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `[]any` | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | For kind=router: how to order candidates. |
| `serviceTier` | `string` | Service tier for providers that support it. |
| `sort` | `string` | Rank eligible providers by an attribute. |
| `speed` | `string` | Only use fastest providers with short timeouts. |
| `status` | `string` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float64` | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | Only use providers with zero data retention. |

#### Example: Load

```go
aiGatewayVirtualModelConfig, err := client.AiGatewayVirtualModelConfig(nil).Load(map[string]any{"id": "ai_gateway_virtual_model_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayVirtualModelConfig) // the loaded record
```

#### Example: Create

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


### AiGatewayVirtualModelConfigList

Create an instance: `aiGatewayVirtualModelConfigList := client.AiGatewayVirtualModelConfigList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowFallbackFromFast` | `bool` | Allow fallback from fast to standard providers on failure. |
| `baseUrl` | `string` | For kind=relay: URL the gateway forwards requests to as a transparent proxy. |
| `byokCredentialIds` | `[]any` | BYOK credential IDs allowed for this VMC. |
| `caching` | `string` | Use caching if available. |
| `createdAt` | `float64` | Creation timestamp (epoch ms). |
| `createdBy` | `string` | User or app id that created this VMC. |
| `deleted` | `bool` | Whether this VMC is soft-deleted. |
| `description` | `string` | Optional description for UI. |
| `disallowPromptTraining` | `bool` | Only use providers that will not train on your prompts. |
| `displayName` | `string` | Human-readable name for UI. |
| `has` | `[]any` | Limit providers to those with these features. |
| `hipaaCompliant` | `bool` | Only use HIPAA-compliant providers. |
| `inferenceRegion` | `map[string]any` | Region pinned on the VMC for system-credential routing (alias/router only). |
| `instanceId` | `string` | The concrete model-provider instance this VMC resolves to. |
| `kind` | `string` | VMC kind: alias, relay, or router. |
| `modelSlug` | `string` | Canonical model slug this VMC maps to (e.g. |
| `models` | `[]any` | For kind=router: ordered candidates, model slugs or router references. |
| `observabilityTags` | `[]any` | Observability tags attached to requests through this VMC. |
| `ownerId` | `string` | Team (owner) that owns this VMC. |
| `providerOnly` | `[]any` | Restrict routing to only these providers. |
| `providerOptions` | `map[string]any` | Arbitrary per-provider AI SDK options, keyed by gateway provider slug. |
| `providerOrder` | `[]any` | Ordered list of providers to try as fallbacks on failure. |
| `providerTimeouts` | `map[string]any` | Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. |
| `requires` | `[]any` | For kind=router: capability tags a candidate must have. |
| `selector` | `string` | For kind=router: how to order candidates. |
| `serviceTier` | `string` | Service tier for providers that support it. |
| `sort` | `string` | Rank eligible providers by an attribute. |
| `speed` | `string` | Only use fastest providers with short timeouts. |
| `status` | `string` | UI lifecycle status: draft, active, or archived. |
| `updatedAt` | `float64` | Last update timestamp (epoch ms). |
| `updatedBy` | `string` | User or app id that last updated this VMC. |
| `virtualModelSlug` | `string` | Client-facing alias used as the model slug in Gateway calls. |
| `visibility` | `string` | Visibility in listings: public, internal, or stealth. |
| `zeroDataRetention` | `bool` | Only use providers with zero data retention. |

#### Example: List

```go
aiGatewayVirtualModelConfigLists, err := client.AiGatewayVirtualModelConfigList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayVirtualModelConfigLists) // the array of records
```


### Alias

Create an instance: `alias := client.Alias(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The alias name, it could be a `.vercel.app` subdomain or a custom domain |
| `created` | `string` | The date when the alias was created |
| `createdAt` | `float64` | The date when the alias was created in milliseconds since the UNIX epoch |
| `creator` | `map[string]any` | Information of the user who created the alias |
| `deletedAt` | `float64` | The date when the alias was deleted in milliseconds since the UNIX epoch |
| `deployment` | `map[string]any` | A map with the deployment ID, URL and metadata |
| `deploymentId` | `string` | The deployment ID |
| `id` | `string` |  |
| `microfrontends` | `map[string]any` | The microfrontends for the alias including the routing configuration |
| `oldDeploymentId` | `string` | The unique identifier of the previously aliased deployment, only received when the alias was used before |
| `projectId` | `string` | The unique identifier of the project |
| `protectionBypass` | `map[string]any` | The protection bypass for the alias |
| `redirect` | `string` | Target destination domain for redirect when the alias is a redirect |
| `redirectStatusCode` | `float64` | Status code to be used on redirect |
| `uid` | `string` | The unique identifier of the alias |
| `updatedAt` | `float64` | The date when the alias was updated in milliseconds since the UNIX epoch |

#### Example: Load

```go
alias, err := client.Alias(nil).Load(map[string]any{"id": "alias_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alias) // the loaded record
```

#### Example: List

```go
aliass, err := client.Alias(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aliass) // the array of records
```

#### Example: Create

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


### ApiAiGateway

Create an instance: `apiAiGateway := client.ApiAiGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
apiAiGateway, err := client.ApiAiGateway(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiAiGateway) // the loaded record
```


### ApiKey

Create an instance: `apiKey := client.ApiKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeAt` | `float64` | Timestamp (in milliseconds) of when the API key was most recently used. |
| `aiGatewayQuota` | `map[string]any` | Optional AI Gateway quota configuration for the API key. |
| `createdAt` | `float64` | Timestamp (in milliseconds) of when the API key was created. |
| `createdBy` | `string` | The ID of the user who created the API key. |
| `createdByAppId` | `string` | The ID of the app that created the API key, if any |
| `expiresAt` | `float64` | Timestamp (in milliseconds) of when the API key expires. |
| `id` | `string` | The unique identifier of the API key. |
| `leakedAt` | `float64` | Timestamp (in milliseconds) of when the API key was marked as leaked. |
| `leakedUrl` | `string` | URL where the API key was discovered as leaked. |
| `metadata` | `map[string]any` | Generic metadata attached to the API key. |
| `name` | `string` | The human-readable name of the API key. |
| `partialKey` | `string` | The last few characters of the API key string, for helping identify the API key. |
| `projectId` | `string` | The ID of the project that this API key grants access to. |
| `purpose` | `string` | The API key's purpose, i.e. |
| `quota` | `map[string]any` | AI Gateway quota associated with an API key. |
| `teamId` | `string` | The ID of the team that the API key grants access to. |

#### Example: Create

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


### Artifact

Create an instance: `artifact := client.Artifact(nil)`

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
| `hashes` | `[]any` | artifact hashes |
| `id` | `string` |  |

#### Example: Load

```go
artifact, err := client.Artifact(nil).Load(map[string]any{"id": "artifact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(artifact) // the loaded record
```

#### Example: Create

```go
result, err := client.Artifact(nil).Create(map[string]any{
    "hashes": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Authentication

Create an instance: `authentication := client.Authentication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeAt` | `float64` | Timestamp (in milliseconds) of when the token was most recently used. |
| `createdAt` | `float64` | Timestamp (in milliseconds) of when the token was created. |
| `expiresAt` | `float64` | Timestamp (in milliseconds) of when the token expires. |
| `id` | `string` | The unique identifier of the token. |
| `leakedAt` | `float64` | Timestamp (in milliseconds) of when the token was marked as leaked. |
| `leakedUrl` | `string` | URL where the token was discovered as leaked. |
| `name` | `string` | The human-readable name of the token. |
| `origin` | `string` | The origin of how the token was created. |
| `prefix` | `string` | The token's prefix, for identification purposes. |
| `projectId` | `string` | The ID of the project to scope this token to |
| `revokedAt` | `float64` | Timestamp (in milliseconds) of when the token was revoked. |
| `scopes` | `[]any` | The access scopes granted to the token. |
| `suffix` | `string` | The last few characters of the token, for identification purposes. |
| `type` | `string` | The type of the token. |

#### Example: Load

```go
authentication, err := client.Authentication(nil).Load(map[string]any{"token_id": "token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(authentication) // the loaded record
```

#### Example: Create

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


### Billing

Create an instance: `billing := client.Billing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
billing, err := client.Billing(nil).Load(map[string]any{"from": "from", "to": "to"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billing) // the loaded record
```

#### Example: Create

```go
result, err := client.Billing(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BulkRedirect

Create an instance: `bulkRedirect := client.BulkRedirect(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The staging link for previewing redirects in this version. |
| `createdBy` | `string` |  |
| `id` | `string` | The unique identifier for the version. |
| `isLive` | `bool` | Whether this version is currently live in production. |
| `isStaging` | `bool` | Whether this version has not been promoted to production yet and is not serving end users. |
| `key` | `string` | The key of the version. |
| `lastModified` | `float64` |  |
| `name` | `string` | Optional name for the version. |
| `overwrite` | `bool` |  |
| `projectId` | `string` |  |
| `redirect` | `map[string]any` | The redirect object to edit. |
| `redirectCount` | `float64` | The number of redirects in this version. |
| `redirects` | `[]any` |  |
| `restore` | `bool` | If true, restores the redirect from the latest production version to staging. |
| `teamId` | `string` |  |

#### Example: Load

```go
bulkRedirect, err := client.BulkRedirect(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(bulkRedirect) // the loaded record
```

#### Example: List

```go
bulkRedirects, err := client.BulkRedirect(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(bulkRedirects) // the array of records
```

#### Example: Create

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


### Cert

Create an instance: `cert := client.Cert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoRenew` | `bool` |  |
| `ca` | `string` | The certificate authority |
| `cert` | `string` | The certificate |
| `cns` | `[]any` | The common names the cert should be issued for |
| `createdAt` | `float64` |  |
| `expiresAt` | `float64` |  |
| `id` | `string` |  |
| `key` | `string` | The certificate key |
| `skipValidation` | `bool` | Skip validation of the certificate |

#### Example: Load

```go
cert, err := client.Cert(nil).Load(map[string]any{"id": "cert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cert) // the loaded record
```

#### Example: List

```go
certs, err := client.Cert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(certs) // the array of records
```

#### Example: Create

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


### Check

Create an instance: `check := client.Check(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocking` | `bool` | Whether the check should block a deployment from succeeding |
| `blocks` | `string` |  |
| `completedAt` | `float64` |  |
| `conclusion` | `any` | The result of the check being run |
| `createdAt` | `float64` |  |
| `deletedAt` | `float64` |  |
| `detailsUrl` | `string` | URL to display for further details |
| `externalId` | `string` | An identifier that can be used as an external reference |
| `id` | `string` |  |
| `integrationId` | `string` |  |
| `isRerequestable` | `bool` |  |
| `metrics` | `map[string]any` |  |
| `name` | `string` | The name of the check being created |
| `output` | `map[string]any` | The results of the check Run |
| `ownerId` | `string` |  |
| `path` | `string` | Path of the page that is being checked |
| `projectId` | `string` |  |
| `requires` | `string` |  |
| `rerequestable` | `bool` | Whether a user should be able to request for the check to be rerun if it fails |
| `source` | `any` |  |
| `sourceIntegrationConfigurationId` | `string` |  |
| `sourceKind` | `string` |  |
| `startedAt` | `float64` |  |
| `status` | `any` | The current status of the check |
| `targets` | `[]any` |  |
| `timeout` | `float64` |  |
| `updatedAt` | `float64` |  |

#### Example: Load

```go
check, err := client.Check(nil).Load(map[string]any{"id": "check_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(check) // the loaded record
```

#### Example: List

```go
checks, err := client.Check(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(checks) // the array of records
```

#### Example: Create

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


### ChecksV2

Create an instance: `checksV2 := client.ChecksV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checkId` | `string` |  |
| `completedAt` | `float64` |  |
| `conclusion` | `string` |  |
| `conclusionText` | `string` |  |
| `externalId` | `string` |  |
| `externalUrl` | `string` |  |
| `output` | `map[string]any` |  |
| `runs` | `[]any` |  |
| `status` | `string` |  |

#### Example: Load

```go
checksV2, err := client.ChecksV2(nil).Load(map[string]any{"check_run_id": "check_run_id", "deployment_id": "deployment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(checksV2) // the loaded record
```

#### Example: List

```go
checksV2s, err := client.ChecksV2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(checksV2s) // the array of records
```

#### Example: Create

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


### Connect

Create an instance: `connect := client.Connect(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additionalParams` | `map[string]any` |  |
| `audience` | `[]any` |  |
| `authorizationDetails` | `[]any` |  |
| `authorizationId` | `string` | Stable id correlating all tokens (including refreshes) back to the original authorization. |
| `claims` | `map[string]any` | Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. |
| `connector` | `map[string]any` |  |
| `deviceCode` | `bool` |  |
| `displayName` | `string` | Provider-facing display name when the connector type exposes one, falling back to the stored connector name. |
| `expiresAt` | `float64` |  |
| `expiresInMs` | `float64` |  |
| `externalSubject` | `string` |  |
| `id` | `string` | Client id (e.g. |
| `installationId` | `string` |  |
| `metadata` | `map[string]any` | Driver-specific metadata (e.g., botUserId for Slack). |
| `name` | `string` | The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one. |
| `prompt` | `string` |  |
| `resources` | `[]any` |  |
| `returnUrl` | `string` |  |
| `scopes` | `[]any` |  |
| `service` | `string` | Resolved service id when known (e.g. |
| `serviceName` | `string` | Curated display name of the resolved service (e.g. |
| `subject` | `any` |  |
| `tenantId` | `string` |  |
| `token` | `string` |  |
| `tokenGroupId` | `string` | Stable id that groups all tokens with the same parameters across refreshes. |
| `tokenId` | `string` |  |
| `type` | `string` | Client type (e.g. |
| `uid` | `string` | Client uid (e.g. |
| `validityBufferMs` | `float64` |  |
| `webhook` | `string` |  |

#### Example: Create

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


### ConnectConnector

Create an instance: `connectConnector := client.ConnectConnector(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `string` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `map[string]any` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | The connection method this connector was created from, when the create request named one. |
| `connector` | `map[string]any` | Updated connector. |
| `createdAt` | `float64` | Creation time in epoch milliseconds. |
| `createdBy` | `any` | Principal that created the connector. |
| `creationMode` | `string` | How the connector row was originally created. |
| `data` | `any` | Provider configuration for the selected connector type or connection method. |
| `defaultInstallationId` | `string` | Installation used when a token request does not specify an installation. |
| `destinations` | `[]any` | Complete replacement set of trigger destinations. |
| `devsite` | `string` | Developer website for the connected service. |
| `displayName` | `string` | Human-readable connector name. |
| `docsite` | `string` | Developer documentation for the connected service. |
| `environments` | `[]any` | Environments for the project connection. |
| `events` | `[]any` | Known events this connector subscribes to (e.g. |
| `icon` | `string` | Connector branding icon. |
| `id` | `string` | Stable `scl_` connector ID. |
| `knownStale` | `bool` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `map[string]any` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Connector name within the owning team. |
| `params` | `map[string]any` | Values for the selected connection method's template fields. |
| `projectId` | `string` | Project to connect during creation. |
| `reconsentNeeded` | `map[string]any` | Present when affected users must authorize the connector's new permissions. |
| `redirectUri` | `string` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float64` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `reinstallNeeded` | `bool` | When true, prompt a team owner or administrator to reinstall the connector before relying on the change. |
| `service` | `string` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `serviceSync` | `map[string]any` | Result of synchronizing the change with the external service. |
| `supportedSubjectTypes` | `[]any` | Token subject types supported by the connector. |
| `supportsIcon` | `any` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Whether this connector type supports trigger webhooks. |
| `target` | `string` | Which of the service's products/surfaces this connector points at. |
| `triggerDestination` | `any` | Initial trigger destination. |
| `triggerDestinations` | `[]any` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `map[string]any` | Incoming trigger configuration for the connector. |
| `type` | `string` | Connector implementation type. |
| `typeIcon` | `string` | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Human-readable name of the connector type. |
| `uid` | `string` | Team-scoped UID. |
| `updatedAt` | `float64` | Last update time in epoch milliseconds. |
| `updatedBy` | `any` | Principal that most recently updated the connector. |
| `userTokens` | `map[string]any` | User-token capabilities and known grants for the connector. |
| `website` | `string` | Public website for the connected service. |

#### Example: Load

```go
connectConnector, err := client.ConnectConnector(nil).Load(map[string]any{"id": "connect_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(connectConnector) // the loaded record
```

#### Example: Create

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


### ConnectConnectorList

Create an instance: `connectConnectorList := client.ConnectConnectorList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `string` | Hex accent color (e.g., `#000000`) for branding. |
| `appTokens` | `map[string]any` | App-token capabilities and known grants for the connector. |
| `backgroundColor` | `string` | Hex background color (e.g., `#000000`) for branding. |
| `clientUrl` | `string` | Provider-side URL for viewing or managing the resource represented by the connector. |
| `connectionMethod` | `string` | The connection method this connector was created from, when the create request named one. |
| `createdAt` | `float64` | Creation time in epoch milliseconds. |
| `createdBy` | `any` | Principal that created the connector. |
| `creationMode` | `string` | How the connector row was originally created. |
| `defaultInstallationId` | `string` | Installation used when a token request does not specify an installation. |
| `devsite` | `string` | Developer website for the connected service. |
| `displayName` | `string` | Human-readable connector name. |
| `docsite` | `string` | Developer documentation for the connected service. |
| `events` | `[]any` | Known events this connector subscribes to (e.g. |
| `icon` | `string` | Connector branding icon. |
| `id` | `string` | Stable `scl_` connector ID. |
| `knownStale` | `bool` | Whether the connector is known to have been edited since the app package it publishes to the provider was last built, so that package no longer matches it. |
| `managed` | `map[string]any` | Managed connector metadata exposed without leaking the manager connector or installation identifiers. |
| `name` | `string` | Connector name within the owning team. |
| `redirectUri` | `string` | Redirect URI registered with the third-party service for this connector, if any. |
| `reinstallAt` | `float64` | Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. |
| `service` | `string` | Best-effort identifier of the third-party service this connector represents, independent of `type`. |
| `supportedSubjectTypes` | `[]any` | Token subject types supported by the connector. |
| `supportsIcon` | `any` | Whether the connector icon can propagate to the provider. |
| `supportsInstallation` | `bool` | Whether the connector supports an installation flow. |
| `supportsRevocation` | `bool` | Whether Connect can revoke tokens for this connector. |
| `supportsTriggers` | `bool` | Whether this connector type supports trigger webhooks. |
| `target` | `string` | Which of the service's products/surfaces this connector points at. |
| `triggerDestinations` | `[]any` | Destinations that incoming triggers should be forwarded to. |
| `triggers` | `map[string]any` | Incoming trigger configuration for the connector. |
| `type` | `string` | Connector implementation type. |
| `typeIcon` | `string` | Icon identifier supplied by the connector type. |
| `typeName` | `string` | Human-readable name of the connector type. |
| `uid` | `string` | Team-scoped UID. |
| `updatedAt` | `float64` | Last update time in epoch milliseconds. |
| `updatedBy` | `any` | Principal that most recently updated the connector. |
| `userTokens` | `map[string]any` | User-token capabilities and known grants for the connector. |
| `website` | `string` | Public website for the connected service. |

#### Example: List

```go
connectConnectorLists, err := client.ConnectConnectorList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(connectConnectorLists) // the array of records
```


### ConnectConnectorProjectConnectionList

Create an instance: `connectConnectorProjectConnectionList := client.ConnectConnectorProjectConnectionList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float64` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `[]any` | Environments where the connector is enabled for the project. |
| `project` | `map[string]any` | Vercel project connected to the connector. |
| `updatedAt` | `float64` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: List

```go
connectConnectorProjectConnectionLists, err := client.ConnectConnectorProjectConnectionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(connectConnectorProjectConnectionLists) // the array of records
```


### ConnectProjectConnection

Create an instance: `connectProjectConnection := client.ConnectProjectConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float64` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `[]any` | Environments where the connector is enabled for the project. |
| `environments` | `[]any` | One or more built-in environment names or stable custom environment IDs that belong to the project. |
| `project` | `map[string]any` | Vercel project connected to the connector. |
| `updatedAt` | `float64` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: Load

```go
connectProjectConnection, err := client.ConnectProjectConnection(nil).Load(map[string]any{"connector_id": "connector_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(connectProjectConnection) // the loaded record
```

#### Example: Create

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


### ConnectProjectConnectorConnectionList

Create an instance: `connectProjectConnectorConnectionList := client.ConnectProjectConnectorConnectionList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectorId` | `string` | Stable `scl_` connector ID, even when the request used a UID. |
| `createdAt` | `float64` | Time when the project connection was created, in epoch milliseconds. |
| `enabledEnvironments` | `[]any` | Environments where the connector is enabled for the project. |
| `project` | `map[string]any` | Vercel project connected to the connector. |
| `updatedAt` | `float64` | Time when the project connection was last updated, in epoch milliseconds. |

#### Example: List

```go
connectProjectConnectorConnectionLists, err := client.ConnectProjectConnectorConnectionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(connectProjectConnectorConnectionLists) // the array of records
```


### Deployment

Create an instance: `deployment := client.Deployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aliasAssigned` | `any` |  |
| `aliasError` | `map[string]any` | An error object in case aliasing of the deployment failed. |
| `attribution` | `map[string]any` | Commit attribution metadata |
| `buildMachine` | `string` | Selects a custom build machine for this deployment without changing project settings. |
| `buildingAt` | `float64` | Timestamp of when the deployment started building at. |
| `checks` | `map[string]any` | Detailed information about v2 deployment checks. |
| `checksConclusion` | `string` | Conclusion for checks |
| `checksState` | `string` | State of all registered checks |
| `connectBuildsEnabled` | `bool` | The flag saying if Secure Compute network is used for builds |
| `connectConfigurationId` | `string` | The ID of Secure Compute network used for this deployment |
| `created` | `float64` | Timestamp of when the deployment got created. |
| `createdAt` | `float64` |  |
| `creator` | `map[string]any` | Metadata information of the deployment creator. |
| `customEnvironment` | `map[string]any` | The custom environment used for this deployment, if any |
| `customEnvironmentSlugOrId` | `string` | The slug or ID of a custom environment to deploy to, overriding the default target environment. |
| `defaultRoute` | `string` | The default route that should be used for screenshots and links if configured with microfrontends. |
| `deleted` | `float64` | Timestamp of when the deployment got deleted. |
| `deploymentId` | `string` | The ID of an existing deployment to redeploy. |
| `errorCode` | `string` | Error code when the deployment is in an error state. |
| `errorMessage` | `string` | Error message when the deployment is in an canceled or error state. |
| `expiration` | `float64` | The expiration configured by the project retention policy |
| `files` | `[]any` | The files to include in the deployment. |
| `gitAccessToken` | `string` | Available only to Vercel platform accounts. |
| `gitMetadata` | `map[string]any` | Populates initial git metadata for different git providers. |
| `gitSource` | `any` | Defines the Git Repository source to be deployed. |
| `id` | `string` |  |
| `inspectorUrl` | `string` | Vercel URL to inspect the deployment. |
| `isRollbackCandidate` | `bool` | Deployment can be used for instant rollback |
| `manualProvisioning` | `map[string]any` |  |
| `meta` | `map[string]any` | An object containing the deployment's metadata. |
| `monorepoManager` | `string` | The monorepo manager that is being used for this deployment. |
| `name` | `string` | A string with the project name used in the deployment URL |
| `oomReport` | `string` | Indicates if the deployment encountered an out-of-memory error. |
| `outcomes` | `[]any` |  |
| `passiveConnectConfigurationId` | `string` | The ID of Secure Compute network used for this deployment's passive functions |
| `platform` | `map[string]any` | Metadata about the source platform that triggered the deployment. |
| `prebuilt` | `bool` |  |
| `project` | `string` | The target project identifier in which the deployment will be created. |
| `projectId` | `string` | The project ID of the deployment |
| `projectSettings` | `map[string]any` | Project settings that will be applied to the deployment. |
| `proposedExpiration` | `float64` | The expiration proposed to replace the existing expiration |
| `ready` | `float64` | Timestamp of when the deployment got ready. |
| `readyState` | `string` |  |
| `readySubstate` | `string` | Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has… |
| `seatBlock` | `map[string]any` | NSNB Blocked metadata |
| `softDeletedByRetention` | `bool` | Optional flag to indicate if the deployment was soft deleted by retention policy. |
| `source` | `string` | The source of the deployment. |
| `state` | `string` | In which state is the deployment. |
| `status` | `string` |  |
| `statusText` | `string` |  |
| `statusUrl` | `string` |  |
| `target` | `string` | Either not defined, `staging`, `production`, or a custom environment identifier. |
| `type` | `string` | The type of the deployment. |
| `uid` | `string` | The unique identifier of the deployment. |
| `undeleted` | `float64` | Timestamp of when the deployment was undeleted. |
| `url` | `string` | The URL of the deployment. |
| `withLatestCommit` | `bool` | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |

#### Example: Load

```go
deployment, err := client.Deployment(nil).Load(map[string]any{"id": "deployment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deployment) // the loaded record
```

#### Example: List

```go
deployments, err := client.Deployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deployments) // the array of records
```

#### Example: Create

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


### Dns

Create an instance: `dns := client.Dns(nil)`

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
| `comment` | `string` | A comment to add context on what this DNS record is for |
| `createdAt` | `float64` |  |
| `creator` | `string` |  |
| `domain` | `string` |  |
| `https` | `map[string]any` |  |
| `id` | `string` |  |
| `mxPriority` | `int` | The MX priority value of the DNS record |
| `name` | `string` | The name of the DNS record |
| `recordType` | `string` |  |
| `srv` | `map[string]any` |  |
| `ttl` | `float64` | The Time to live (TTL) value of the DNS record |
| `type` | `string` | The type of record, it could be one of the valid DNS records. |
| `value` | `string` | The value of the DNS record |

#### Example: Load

```go
dns, err := client.Dns(nil).Load(map[string]any{"domain_id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dns) // the loaded record
```

#### Example: Create

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


### Domain

Create an instance: `domain := client.Domain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `boughtAt` | `float64` | If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. |
| `createdAt` | `float64` | Timestamp in milliseconds when the domain was created in the registry. |
| `creator` | `map[string]any` | An object containing information of the domain creator, including the user's id, username, and email. |
| `customNameservers` | `[]any` | A list of custom nameservers for the domain to point to. |
| `echMode` | `string` | Whether the domain is enrolled in Encrypted Client Hello. |
| `expiresAt` | `float64` | Timestamp in milliseconds at which the domain is set to expire. |
| `id` | `string` | The unique identifier of the domain. |
| `intendedNameservers` | `[]any` | A list of the intended nameservers for the domain to point to Vercel DNS. |
| `method` | `string` | The domain operation to perform. |
| `name` | `string` | The domain name. |
| `nameservers` | `[]any` | A list of the current nameservers of the domain. |
| `renew` | `bool` | Indicates whether the domain is set to automatically renew. |
| `serviceType` | `string` | The type of service the domain is handled by. |
| `suffix` | `bool` |  |
| `teamId` | `string` |  |
| `transferStartedAt` | `float64` | If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. |
| `transferredAt` | `float64` | Timestamp in milliseconds at which the domain was successfully transferred into Vercel. |
| `userId` | `string` |  |
| `verified` | `bool` | If the domain has the ownership verified. |

#### Example: Load

```go
domain, err := client.Domain(nil).Load(map[string]any{"id": "domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(domain) // the loaded record
```

#### Example: List

```go
domains, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(domains) // the array of records
```

#### Example: Create

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


### DomainsRegistrar

Create an instance: `domainsRegistrar := client.DomainsRegistrar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authCode` | `string` | The auth code for the domain. |
| `autoRenew` | `bool` | Whether the domain should be auto-renewed before it expires. |
| `available` | `bool` |  |
| `contactInformation` | `map[string]any` | The contact information for the domain. |
| `domains` | `[]any` | an array of at most 50 item(s) |
| `error` | `any` |  |
| `expectedPrice` | `float64` |  |
| `languageCode` | `string` | The language code for the domain. |
| `nameservers` | `[]any` |  |
| `orderId` | `string` | A valid order ID |
| `purchasePrice` | `any` |  |
| `renewalPrice` | `any` |  |
| `results` | `[]any` |  |
| `status` | `string` |  |
| `transferPrice` | `any` |  |
| `years` | `float64` | The number of years the returned price is for. |

#### Example: Load

```go
domainsRegistrar, err := client.DomainsRegistrar(nil).Load(map[string]any{"order_id": "order_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(domainsRegistrar) // the loaded record
```

#### Example: Create

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


### Drain

Create an instance: `drain := client.Drain(nil)`

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
| `delivery` | `map[string]any` |  |
| `drains` | `any` |  |
| `filter` | `map[string]any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `projectIds` | `[]any` |  |
| `projects` | `string` |  |
| `sampling` | `[]any` |  |
| `schemas` | `map[string]any` |  |
| `source` | `map[string]any` |  |
| `status` | `string` |  |
| `transforms` | `[]any` |  |

#### Example: Load

```go
drain, err := client.Drain(nil).Load(map[string]any{"id": "drain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(drain) // the loaded record
```

#### Example: Create

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


### EdgeCache

Create an instance: `edgeCache := client.EdgeCache(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.EdgeCache(nil).Create(map[string]any{
    "project_id_or_name": "example_project_id_or_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Env

Create an instance: `env := client.Env(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `applyToAllCustomEnvironments` | `bool` | whether or not this env varible applies to custom environments |
| `comment` | `string` | A user provided comment that describes what this Shared Env Var is for. |
| `created` | `string` | The date when the Shared Env Var was created. |
| `createdAt` | `float64` | Timestamp for when the Shared Env Var was created. |
| `createdBy` | `string` | The unique identifier of the user who created the Shared Env Var. |
| `customEnvironmentIds` | `[]any` | The custom environment IDs that this Shared Env Var is scoped to. |
| `decrypted` | `bool` | whether or not this env variable is decrypted |
| `deletedAt` | `float64` | Timestamp for when the Shared Env Var was (soft) deleted. |
| `deletedBy` | `string` | The unique identifier of the user who deleted the Shared Env Var. |
| `evs` | `[]any` |  |
| `failed` | `[]any` |  |
| `id` | `string` | The unique identifier of the Shared Env Var. |
| `key` | `string` | The name of the Shared Env Var. |
| `lastEditedByDisplayName` | `string` | The last editor full name or username. |
| `ownerId` | `string` | The unique identifier of the owner (team) the Shared Env Var was created for. |
| `projectId` | `[]any` | The unique identifiers of the projects which the Shared Env Var is linked to. |
| `securityIssues` | `[]any` |  |
| `target` | `[]any` | environments this env variable targets |
| `type` | `string` | The type of this cosmos doc instance, if blank, assume secret. |
| `updated` | `[]any` |  |
| `updatedAt` | `float64` | Timestamp for when the Shared Env Var was last updated. |
| `updatedBy` | `string` | The unique identifier of the user who last updated the Shared Env Var. |
| `updates` | `map[string]any` | An object where each key is an environment variable ID (not the key name) and the value is the update to apply |
| `value` | `string` | The value of the Shared Env Var. |

#### Example: Load

```go
env, err := client.Env(nil).Load(map[string]any{"id": "env_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(env) // the loaded record
```

#### Example: List

```go
envs, err := client.Env(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(envs) // the array of records
```

#### Example: Create

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


### Environment

Create an instance: `environment := client.Environment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branchMatcher` | `map[string]any` | Configuration for matching git branches to this environment |
| `copyEnvVarsFrom` | `string` | Where to copy environment variables from. |
| `createdAt` | `float64` | Timestamp when the environment was created |
| `currentDeploymentAliases` | `[]any` | List of aliases for the current deployment |
| `description` | `string` | Optional description of the environment's purpose |
| `domains` | `[]any` | List of domains associated with this environment |
| `id` | `string` | Unique identifier for the custom environment (format: env_*) |
| `slug` | `string` | URL-friendly name of the environment |
| `type` | `string` | The type of environment (production, preview, or development) |
| `updatedAt` | `float64` | Timestamp when the environment was last updated |

#### Example: Load

```go
environment, err := client.Environment(nil).Load(map[string]any{"environment_slug_or_id": "environment_slug_or_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(environment) // the loaded record
```

#### Example: List

```go
environments, err := client.Environment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(environments) // the array of records
```

#### Example: Create

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


### FeatureFlag

Create an instance: `featureFlag := client.FeatureFlag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changedEnvironments` | `[]any` |  |
| `createdAt` | `float64` |  |
| `createdBy` | `string` | The user who created this patch |
| `data` | `map[string]any` | The data of the segment |
| `description` | `string` | A description of the flag |
| `environments` | `map[string]any` | The configuration for the flag in different environments |
| `flagId` | `string` |  |
| `flags` | `[]any` |  |
| `hint` | `string` |  |
| `id` | `string` |  |
| `kind` | `string` | The kind of flag |
| `label` | `string` |  |
| `maintainerIds` | `[]any` | The user ids of the maintainers of the flag |
| `message` | `string` | Additional message for this version |
| `metadata` | `map[string]any` |  |
| `operations` | `[]any` |  |
| `ownerId` | `string` |  |
| `pagination` | `map[string]any` |  |
| `permanent` | `bool` | Whether this flag is marked as permanent, indicating it should not be removed |
| `projectId` | `string` |  |
| `revision` | `float64` |  |
| `seed` | `float64` | A random seed to prevent split points in different flags from having the same targets |
| `slug` | `string` | A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores |
| `state` | `string` |  |
| `status` | `map[string]any` |  |
| `tags` | `[]any` | Tags for categorizing the flag |
| `typeName` | `string` |  |
| `updatedAt` | `float64` |  |
| `updatedBy` | `string` |  |
| `variants` | `[]any` | The variants of the flag |

#### Example: Load

```go
featureFlag, err := client.FeatureFlag(nil).Load(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(featureFlag) // the loaded record
```

#### Example: List

```go
featureFlags, err := client.FeatureFlag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(featureFlags) // the array of records
```


### File

Create an instance: `file := client.File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `children` | `[]any` | The list of children files of the directory (only valid for the `directory` type) |
| `contentType` | `string` | The content-type of the file (only valid for the `file` type) |
| `mode` | `float64` | The file "mode" indicating file type and permissions. |
| `name` | `string` | The name of the file tree entry |
| `type` | `string` | String indicating the type of file tree entry. |
| `uid` | `string` | The unique identifier of the file (only valid for the `file` type) |

#### Example: List

```go
files, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(files) // the array of records
```


### Flag

Create an instance: `flag := client.Flag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float64` |  |
| `createdBy` | `string` |  |
| `description` | `string` |  |
| `environments` | `map[string]any` |  |
| `id` | `string` |  |
| `kind` | `string` |  |
| `maintainerIds` | `[]any` |  |
| `metadata` | `map[string]any` |  |
| `ownerId` | `string` |  |
| `permanent` | `bool` |  |
| `projectId` | `string` |  |
| `revision` | `float64` |  |
| `seed` | `float64` |  |
| `slug` | `string` |  |
| `state` | `string` |  |
| `tags` | `[]any` |  |
| `typeName` | `string` |  |
| `updatedAt` | `float64` |  |
| `updatedBy` | `string` |  |
| `variants` | `[]any` |  |

#### Example: Load

```go
flag, err := client.Flag(nil).Load(map[string]any{"id": "flag_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(flag) // the loaded record
```


### FlagsSdkKeyWithSecret

Create an instance: `flagsSdkKeyWithSecret := client.FlagsSdkKeyWithSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float64` |  |
| `createdBy` | `string` |  |
| `deletedAt` | `float64` |  |
| `environment` | `string` |  |
| `hashKey` | `string` |  |
| `keyValue` | `string` | Cleartext value of the SDK key. |
| `label` | `string` |  |
| `partialKeyValue` | `string` | Partially-masked representation of the SDK key value, safe to display in UIs. |
| `projectId` | `string` |  |
| `sdkKeyType` | `string` |  |
| `tokenValue` | `string` | Cleartext value of the Global Config token, when the project has a Global Config connection. |
| `type` | `string` |  |
| `updatedAt` | `float64` |  |


### GlobalConfig

Create an instance: `globalConfig := client.GlobalConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float64` |  |
| `createdBy` | `string` | The ID of the user who created the Global Config, optional because it is not always set. |
| `deletedAt` | `float64` |  |
| `digest` | `string` |  |
| `id` | `string` |  |
| `itemCount` | `float64` |  |
| `items` | `map[string]any` |  |
| `ownerId` | `string` |  |
| `purpose` | `any` |  |
| `schema` | `map[string]any` |  |
| `sizeInBytes` | `float64` |  |
| `slug` | `string` | Name for the Global Config Names are not unique. |
| `syncedToDynamoAt` | `float64` | Timestamp of when the Global Config was synced to DynamoDB initially. |
| `transfer` | `map[string]any` | Keeps track of the current state of the Global Config while it gets transferred. |
| `updatedAt` | `float64` |  |

#### Example: Load

```go
globalConfig, err := client.GlobalConfig(nil).Load(map[string]any{"id": "global_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(globalConfig) // the loaded record
```

#### Example: List

```go
globalConfigs, err := client.GlobalConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(globalConfigs) // the array of records
```

#### Example: Create

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


### GlobalConfigItem

Create an instance: `globalConfigItem := client.GlobalConfigItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float64` |  |
| `description` | `string` |  |
| `edgeConfigId` | `string` |  |
| `id` | `string` |  |
| `key` | `string` |  |
| `updatedAt` | `float64` |  |
| `value` | `any` |  |

#### Example: Load

```go
globalConfigItem, err := client.GlobalConfigItem(nil).Load(map[string]any{"id": "global_config_item_id", "global_config_id": "global_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(globalConfigItem) // the loaded record
```

#### Example: List

```go
globalConfigItems, err := client.GlobalConfigItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(globalConfigItems) // the array of records
```


### GlobalConfigToken

Create an instance: `globalConfigToken := client.GlobalConfigToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float64` |  |
| `edgeConfigId` | `string` |  |
| `id` | `string` | This is not the token itself, but rather an id to identify the token by |
| `label` | `string` |  |
| `partialToken` | `string` | A partially-masked representation of the token, safe to display in UIs. |
| `token` | `string` | Deprecated: the full, plaintext token. |

#### Example: Load

```go
globalConfigToken, err := client.GlobalConfigToken(nil).Load(map[string]any{"id": "global_config_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(globalConfigToken) // the loaded record
```


### Integration

Create an instance: `integration := client.Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cost` | `string` |  |
| `description` | `string` |  |
| `details` | `[]any` |  |
| `disabled` | `bool` |  |
| `effectiveDate` | `string` |  |
| `envVarEnvironments` | `[]any` |  |
| `highlightedDetails` | `[]any` |  |
| `id` | `string` |  |
| `initialCharge` | `string` |  |
| `makeEnvVarsSensitive` | `bool` |  |
| `maximumAmount` | `string` |  |
| `maximumAmountAutoPurchasePerPeriod` | `string` |  |
| `metadataSchema` | `map[string]any` |  |
| `minimumAmount` | `string` |  |
| `name` | `string` |  |
| `paymentMethodRequired` | `bool` |  |
| `preauthorizationAmount` | `float64` |  |
| `primaryProtocol` | `string` |  |
| `projectId` | `string` |  |
| `protocols` | `map[string]any` |  |
| `quote` | `[]any` |  |
| `scope` | `string` |  |
| `slug` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```go
integration, err := client.Integration(nil).Load(map[string]any{"id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(integration) // the loaded record
```

#### Example: List

```go
integrations, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrations) // the array of records
```

#### Example: Create

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


### Kms

Create an instance: `kms := client.Kms(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activation` | `string` | Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. |
| `alg` | `string` |  |
| `algorithm` | `string` | Algorithm of the signing key. |
| `claims` | `map[string]any` | The claims to include in the token. |
| `claimsSchema` | `map[string]any` | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. |
| `createdAt` | `string` |  |
| `environments` | `[]any` | The environments for the project grant policy. |
| `headers` | `map[string]any` | Additional headers to include in the token. |
| `id` | `string` |  |
| `importKey` | `string` | The PEM-encoded private key to use for the issuer. |
| `importKeyId` | `string` | The key id to use as the imported key's JWT/JWKS `kid`. |
| `keyId` | `string` | Key id of the signing key. |
| `key_ops` | `[]any` |  |
| `kid` | `string` |  |
| `kind` | `string` |  |
| `kty` | `string` |  |
| `managedBy` | `string` |  |
| `message` | `string` | Base64-encoded message to be signed. |
| `name` | `string` | The name of the issuer. |
| `origin` | `string` |  |
| `ownerId` | `string` |  |
| `policies` | `[]any` |  |
| `projectId` | `string` | The project ID for the project grant policy. |
| `revokePreviousAfterHours` | `float64` | How many hours after activation the previously-active key should stop being used. |
| `revokePreviousAt` | `any` | Deprecated. |
| `signature` | `string` | Standard-base64 encoding of the raw signature over the decoded message bytes. |
| `signingKeys` | `[]any` |  |
| `token` | `string` |  |
| `tokenClaims` | `map[string]any` | The claims that KMS should include in signed JWTs for this policy. |
| `ttl` | `float64` | The time-to-live for the token, in seconds. |
| `updatedAt` | `string` |  |
| `use` | `string` |  |
| `x5c` | `[]any` | The X.509 certificate chain (RFC 7517 §4.7). |
| `x5tS256` | `string` | The base64url SHA-256 thumbprint of the DER certificate in `x5c[0]` (RFC 7517 §4.9). |

#### Example: Load

```go
kms, err := client.Kms(nil).Load(map[string]any{"issuer_id": "issuer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(kms) // the loaded record
```

#### Example: List

```go
kmss, err := client.Kms(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(kmss) // the array of records
```

#### Example: Create

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


### ListEventType

Create an instance: `listEventType := client.ListEventType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `[]any` |  |
| `types` | `[]any` |  |

#### Example: List

```go
listEventTypes, err := client.ListEventType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listEventTypes) // the array of records
```


### Log

Create an instance: `log := client.Log(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
log, err := client.Log(nil).Load(map[string]any{"deployment_id": "deployment_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(log) // the loaded record
```


### LogDrain

Create an instance: `logDrain := client.LogDrain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `string` | The branch regexp of log drain |
| `clientId` | `string` | The oauth2 client application id that created this log drain |
| `configurationId` | `string` | The client configuration this log drain was created with |
| `createdAt` | `float64` | A timestamp that tells you when the log drain was created |
| `createdFrom` | `string` | Whether the log drain was created by an integration or by a user |
| `deliveryFormat` | `any` | The delivery log format |
| `environments` | `[]any` | The environment of log drain |
| `headers` | `map[string]any` | Headers to be sent together with the request |
| `id` | `string` | The unique identifier of the log drain. |
| `integrationConfigurationUri` | `string` |  |
| `integrationIcon` | `string` |  |
| `integrationWebsite` | `string` |  |
| `name` | `string` | The custom name of this log drain. |
| `ownerId` | `string` | The identifier of the team or user whose events will trigger the log drain |
| `projectId` | `string` |  |
| `projectIds` | `[]any` | The identifier of the projects this log drain is associated with |
| `projectsMetadata` | `[]any` |  |
| `samplingRate` | `float64` | The sampling rate for this log drain. |
| `secret` | `string` | Custom secret of log drain |
| `source` | `any` |  |
| `sources` | `[]any` | The sources from which logs are currently being delivered to this log drain. |
| `url` | `string` | The log drain url |

#### Example: Load

```go
logDrain, err := client.LogDrain(nil).Load(map[string]any{"id": "log_drain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(logDrain) // the loaded record
```

#### Example: List

```go
logDrains, err := client.LogDrain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(logDrains) // the array of records
```

#### Example: Create

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


### Marketplace

Create an instance: `marketplace := client.Marketplace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` |  |
| `already_revoked` | `bool` |  |
| `balances` | `[]any` |  |
| `billing` | `any` | Billing data (interim invoicing data). |
| `billingPlan` | `map[string]any` |  |
| `billingPlanId` | `string` | The ID of the billing plan the resource is subscribed to, if applicable |
| `category` | `string` |  |
| `client_id` | `string` |  |
| `client_secret` | `string` |  |
| `created` | `string` | System creation date. |
| `createdAt` | `float64` |  |
| `data` | `map[string]any` |  |
| `description` | `string` |  |
| `discounts` | `[]any` | Invoice discounts. |
| `email` | `string` |  |
| `eod` | `string` | End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. |
| `event` | `any` |  |
| `expires_in` | `float64` |  |
| `externalId` | `string` | Partner-supplied Invoice ID, if applicable. |
| `extras` | `map[string]any` |  |
| `final` | `bool` | Set this to `true` if this is the final invoice for the installation. |
| `globalUserId` | `string` |  |
| `id` | `string` | The ID provided by the 3rd party provider for the given resource |
| `internalId` | `string` | The ID assigned by Vercel for the given resource |
| `invoiceDate` | `string` | Invoice date. |
| `invoiceId` | `string` | Vercel Marketplace Invoice ID. |
| `invoiceNumber` | `string` | User-readable invoice number. |
| `isArchived` | `bool` |  |
| `items` | `[]any` | Invoice items. |
| `memo` | `string` | Additional memo for the invoice. |
| `metadata` | `map[string]any` | The configured metadata for the resource as defined by its product's Metadata Schema |
| `name` | `string` | The name of the resource as it is recorded in Vercel |
| `notification` | `map[string]any` | The notification, if set, displayed to the user when viewing the resource in Vercel |
| `origin` | `string` |  |
| `ownership` | `string` |  |
| `paidAt` | `string` | Moment the invoice was paid. |
| `partial` | `bool` | If true, will only update the provided secrets |
| `partnerId` | `string` | The ID provided by the partner for the given resource |
| `period` | `map[string]any` | Subscription period for this billing cycle. |
| `productId` | `string` | The ID of the product the resource is derived from |
| `protocolSettings` | `map[string]any` | Any settings provided for the resource to support its product's protocols |
| `refundReason` | `string` | The reason for refund. |
| `refundTotal` | `string` | Refund amount. |
| `refundedAt` | `string` | Most recent moment the invoice was refunded. |
| `revoked` | `bool` |  |
| `role` | `string` | "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles." |
| `scope` | `string` |  |
| `secrets` | `[]any` |  |
| `slug` | `string` |  |
| `state` | `string` | Invoice state. |
| `status` | `string` | The current status of the resource |
| `test` | `bool` | Whether the invoice is in the testmode (no real transaction created). |
| `timestamp` | `string` | Server time of your integration, used to determine the most recent data for race conditions & updates. |
| `token` | `string` |  |
| `token_type` | `string` |  |
| `total` | `string` | Invoice total amount. |
| `updated` | `string` | System update date. |
| `updatedAt` | `float64` |  |
| `usage` | `[]any` |  |
| `userEmail` | `string` |  |
| `validationErrors` | `[]any` |  |

#### Example: Load

```go
marketplace, err := client.Marketplace(nil).Load(map[string]any{"installation_id": "installation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(marketplace) // the loaded record
```

#### Example: List

```go
marketplaces, err := client.Marketplace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(marketplaces) // the array of records
```

#### Example: Create

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


### Microfrontend

Create an instance: `microfrontend := client.Microfrontend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abuse` | `map[string]any` |  |
| `accountId` | `string` |  |
| `alias` | `[]any` |  |
| `analytics` | `map[string]any` |  |
| `applications` | `map[string]any` |  |
| `appliedCve55182Migration` | `bool` |  |
| `autoAssignCustomDomains` | `bool` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `bool` |  |
| `avatar` | `string` |  |
| `blobs` | `map[string]any` |  |
| `buildCommand` | `string` |  |
| `commandForIgnoringBuildStep` | `string` |  |
| `concurrencyBucketName` | `string` |  |
| `connectBuildsEnabled` | `bool` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `[]any` |  |
| `createdAt` | `float64` |  |
| `creator` | `any` |  |
| `crons` | `map[string]any` |  |
| `customEnvironments` | `[]any` |  |
| `customerSupportCodeVisibility` | `bool` |  |
| `dataCache` | `map[string]any` |  |
| `defaultResourceConfig` | `map[string]any` |  |
| `deploymentExpiration` | `map[string]any` | Retention policies for deployments. |
| `deploymentPolicy` | `map[string]any` | Project shape. |
| `devCommand` | `string` |  |
| `directoryListing` | `bool` |  |
| `dismissedToasts` | `[]any` |  |
| `enableAffectedProjectsDeployments` | `bool` |  |
| `enableExternalRewriteCaching` | `bool` |  |
| `enablePreviewFeedback` | `bool` |  |
| `enableProductionFeedback` | `bool` |  |
| `env` | `[]any` |  |
| `expiration` | `any` |  |
| `features` | `map[string]any` |  |
| `framework` | `string` |  |
| `gitComments` | `map[string]any` |  |
| `gitForkProtection` | `bool` |  |
| `gitLFS` | `bool` |  |
| `gitProviderOptions` | `map[string]any` |  |
| `hasActiveBranches` | `bool` |  |
| `hasDeployments` | `bool` |  |
| `id` | `string` |  |
| `installCommand` | `string` |  |
| `internalRoutes` | `[]any` |  |
| `ipBuckets` | `[]any` |  |
| `jobs` | `map[string]any` |  |
| `lastAliasRequest` | `map[string]any` |  |
| `lastRollbackTarget` | `map[string]any` |  |
| `latestDeployments` | `[]any` |  |
| `link` | `string` |  |
| `live` | `bool` |  |
| `microfrontends` | `any` |  |
| `name` | `string` |  |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `map[string]any` |  |
| `options` | `map[string]any` | Optional configuration options for the microfrontend. |
| `optionsAllowlist` | `map[string]any` |  |
| `outputDirectory` | `string` |  |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `map[string]any` |  |
| `passwordProtection` | `map[string]any` |  |
| `paused` | `bool` |  |
| `permissions` | `map[string]any` |  |
| `productionDeploymentsFastLane` | `bool` |  |
| `protectedSourcemaps` | `bool` |  |
| `protectionBypass` | `map[string]any` |  |
| `protectionConfig` | `map[string]any` |  |
| `resourceConfig` | `map[string]any` |  |
| `rollbackDescription` | `map[string]any` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `map[string]any` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` |  |
| `sandbox` | `map[string]any` |  |
| `schema` | `string` | See https://openapi.vercel.sh/microfrontends.json. |
| `security` | `map[string]any` |  |
| `serverlessFunctionZeroConfigFailover` | `bool` |  |
| `services` | `[]any` |  |
| `skewProtectionAllowedDomains` | `[]any` |  |
| `skewProtectionBoundaryAt` | `float64` |  |
| `skewProtectionMaxAge` | `float64` |  |
| `skipGitConnectDuringLink` | `bool` |  |
| `sourceFilesOutsideRootDirectory` | `bool` |  |
| `speedInsights` | `map[string]any` |  |
| `ssoProtection` | `map[string]any` |  |
| `staticIps` | `map[string]any` |  |
| `targets` | `map[string]any` |  |
| `tier` | `string` |  |
| `tracing` | `map[string]any` |  |
| `transferCompletedAt` | `float64` |  |
| `transferStartedAt` | `float64` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `any` |  |
| `trustedSources` | `map[string]any` |  |
| `updatedAt` | `float64` |  |
| `usageStatus` | `map[string]any` |  |
| `v0` | `bool` |  |
| `v0Created` | `bool` |  |
| `version` | `string` | The version of the microfrontends config schema. |
| `webAnalytics` | `map[string]any` |  |

#### Example: Load

```go
microfrontend, err := client.Microfrontend(nil).Load(map[string]any{"project_id_or_name": "project_id_or_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(microfrontend) // the loaded record
```

#### Example: List

```go
microfrontends, err := client.Microfrontend(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(microfrontends) // the array of records
```

#### Example: Create

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


### Network

Create an instance: `network := client.Network(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awsAccountId` | `string` | The ID of the AWS Account in which the network exists. |
| `awsAvailabilityZoneIds` | `[]any` | The IDs of the AWS Availability Zones in which the network exists, if specified during creation. |
| `awsRegion` | `string` | The AWS Region in which the network exists. |
| `cidr` | `string` | The CIDR range of the Network. |
| `createdAt` | `float64` | The date at which the Network was created, represented as a UNIX timestamp since EPOCH. |
| `egressIpAddresses` | `[]any` |  |
| `hostedZones` | `map[string]any` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `id` | `string` | The unique identifier of the Network. |
| `name` | `string` | The name of the network. |
| `peeringConnections` | `map[string]any` | Metadata about any AWS Route53 Hosted Zones associated with the Network. |
| `projects` | `map[string]any` | Metadata about any projects associated with the Network. |
| `region` | `string` | The Vercel region in which the Network exists. |
| `status` | `string` | The status of the Network. |
| `teamId` | `string` | The unique identifier of the Team that owns the Network. |
| `vpcId` | `string` | The ID of the VPC which hosts the network. |

#### Example: Load

```go
network, err := client.Network(nil).Load(map[string]any{"id": "network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(network) // the loaded record
```

#### Example: List

```go
networks, err := client.Network(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(networks) // the array of records
```

#### Example: Create

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


### Networking

Create an instance: `networking := client.Networking(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `builds` | `bool` | Whether to use Static IPs for builds. |
| `regions` | `[]any` |  |


### Observability

Create an instance: `observability := client.Observability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disabled` | `bool` | Whether Observability Plus should be disabled for the project |
| `disabledAt` | `float64` |  |
| `id` | `string` |  |
| `name` | `string` |  |

#### Example: List

```go
observabilitys, err := client.Observability(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(observabilitys) // the array of records
```


### PrivateLinkEndpoint

Create an instance: `privateLinkEndpoint := client.PrivateLinkEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awsDnsEntries` | `[]any` | The regional DNS names assigned to the endpoint by AWS. |
| `awsServiceName` | `string` | The AWS VPC endpoint service the endpoint connects to. |
| `createdAt` | `float64` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. |
| `enablePrivateDns` | `bool` | Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`. |
| `endpointId` | `string` | The unique identifier of the PrivateLink endpoint. |
| `id` | `string` |  |
| `name` | `string` | The name of the PrivateLink endpoint, shown in the Vercel dashboard. |
| `privateDnsNames` | `[]any` | The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. |
| `projectId` | `string` | The identifier of the project the PrivateLink endpoint belongs to. |
| `status` | `string` | The current state of the endpoint. |
| `statusMessage` | `string` | A human-readable explanation of why the endpoint could not be provisioned. |
| `teamId` | `string` | The identifier of the team that owns the PrivateLink endpoint. |
| `updatedAt` | `float64` | Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. |
| `vercelRegion` | `string` | The Vercel region the endpoint is provisioned in. |
| `vpcEndpointId` | `string` | The identifier of the underlying AWS VPC endpoint. |

#### Example: Load

```go
privateLinkEndpoint, err := client.PrivateLinkEndpoint(nil).Load(map[string]any{"id": "private_link_endpoint_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(privateLinkEndpoint) // the loaded record
```

#### Example: List

```go
privateLinkEndpoints, err := client.PrivateLinkEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(privateLinkEndpoints) // the array of records
```

#### Example: Create

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
| `acceptedPolicies` | `map[string]any` |  |
| `accountId` | `string` |  |
| `alias` | `[]any` |  |
| `analytics` | `map[string]any` |  |
| `apexName` | `string` |  |
| `appliedCve55182Migration` | `bool` |  |
| `autoAssignCustomDomains` | `bool` |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` |  |
| `autoExposeSystemEnvs` | `bool` |  |
| `avatar` | `string` |  |
| `blobs` | `map[string]any` |  |
| `buildCommand` | `string` | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` |  |
| `comment` | `string` | A comment to add context on what this env var is for |
| `concurrencyBucketName` | `string` |  |
| `configurationId` | `string` |  |
| `connectBuildsEnabled` | `bool` |  |
| `connectConfigurationId` | `string` |  |
| `connectConfigurations` | `[]any` | The list of connections from project environment to Secure Compute network |
| `contentHint` | `any` |  |
| `createdAt` | `float64` |  |
| `createdBy` | `string` |  |
| `creator` | `any` |  |
| `crons` | `map[string]any` |  |
| `customEnvironmentId` | `string` |  |
| `customEnvironmentIds` | `[]any` | The custom environments that the environment variable should be synced to |
| `customEnvironments` | `[]any` |  |
| `customerSupportCodeVisibility` | `bool` | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `map[string]any` |  |
| `decrypted` | `bool` |  |
| `defaultResourceConfig` | `map[string]any` |  |
| `deploymentExpiration` | `map[string]any` | Retention policies for deployments. |
| `deploymentPolicy` | `map[string]any` | Project shape. |
| `devCommand` | `string` | The dev command for this project. |
| `directoryListing` | `bool` |  |
| `dismissedToasts` | `[]any` | An array of objects representing a Dismissed Toast in regards to a Project. |
| `edgeConfigId` | `string` |  |
| `edgeConfigTokenId` | `string` |  |
| `enableAffectedProjectsDeployments` | `bool` | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | Opt-in to production toolbar on the project level |
| `env` | `[]any` |  |
| `environmentVariables` | `[]any` | Collection of ENV Variables the Project will use |
| `expiration` | `any` |  |
| `features` | `map[string]any` |  |
| `framework` | `string` | The framework that is being used for this project. |
| `gitBranch` | `string` | Git branch to link the project domain |
| `gitComments` | `map[string]any` |  |
| `gitForkProtection` | `bool` | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `map[string]any` |  |
| `gitRepository` | `map[string]any` | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` |  |
| `hasDeployments` | `bool` |  |
| `hostname` | `string` | The deployment hostname to scope the trace session to. |
| `id` | `string` |  |
| `installCommand` | `string` | The install command for this project. |
| `integrations` | `[]any` |  |
| `internalContentHint` | `map[string]any` | Similar to `contentHints`, but should not be exposed to the user. |
| `internalRoutes` | `[]any` |  |
| `ipBuckets` | `[]any` |  |
| `jobs` | `map[string]any` |  |
| `key` | `string` | The name of the environment variable |
| `lastAliasRequest` | `map[string]any` |  |
| `lastRollbackTarget` | `map[string]any` |  |
| `latestDeployments` | `[]any` |  |
| `legacyValue` | `string` | Legacy now-encryption ciphertext, present after migration swaps value/vsmValue |
| `link` | `string` |  |
| `live` | `bool` |  |
| `microfrontends` | `any` |  |
| `name` | `string` | The desired name for the project |
| `newProjectName` | `string` | The desired name for the project |
| `nodeVersion` | `string` |  |
| `oidcTokenConfig` | `map[string]any` | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `map[string]any` | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | The output directory of the project. |
| `paidFeatures` | `map[string]any` |  |
| `passiveConnectConfigurationId` | `string` |  |
| `passport` | `map[string]any` | Passport configuration for the project. |
| `passwordProtection` | `map[string]any` | Allows to protect project deployments with a password |
| `paused` | `bool` |  |
| `permissions` | `map[string]any` |  |
| `previewDeploymentSuffix` | `string` | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` |  |
| `projectId` | `string` | The unique target project identifier |
| `protectedSourcemaps` | `bool` | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `map[string]any` |  |
| `protectionConfig` | `map[string]any` |  |
| `publicSource` | `bool` | Deprecated. |
| `redirect` | `string` | Target destination domain for redirect |
| `redirectStatusCode` | `float64` | Status code for domain redirect |
| `resourceConfig` | `map[string]any` | Specifies resource override configuration for the project |
| `rollbackDescription` | `map[string]any` | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `map[string]any` | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `map[string]any` | Specifies the default region and failover regions for sandboxes created in the project |
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
| `sunsetSecretId` | `string` | This is used to identify variables that have been migrated from type secret to sensitive. |
| `target` | `any` | The target environment of the environment variable |
| `targets` | `map[string]any` |  |
| `tier` | `string` |  |
| `token` | `string` |  |
| `tracing` | `map[string]any` | Tracing configuration for this project |
| `transferCompletedAt` | `float64` |  |
| `transferStartedAt` | `float64` |  |
| `transferToAccountId` | `string` |  |
| `transferredFromAccountId` | `string` |  |
| `trustedIps` | `any` | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `map[string]any` | Deployment Protection Trusted Sources |
| `type` | `string` | The type of environment variable |
| `updatedAt` | `float64` |  |
| `updatedBy` | `string` |  |
| `usageStatus` | `map[string]any` |  |
| `v0` | `bool` |  |
| `v0Created` | `bool` |  |
| `value` | `string` | The value of the environment variable |
| `verification` | `[]any` | A list of verification challenges, one of which must be completed to verify the domain for use on the project. |
| `verified` | `bool` | `true` if the domain is verified for use with the project. |
| `visibility` | `string` | User-facing config/secret model. |
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


### ProjectMember

Create an instance: `projectMember := client.ProjectMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email of the team member that should be added to this project. |
| `id` | `string` |  |
| `role` | `string` | The project role of the member that will be added. |
| `uid` | `string` | The ID of the team member that should be added to this project. |
| `username` | `string` | The username of the team member that should be added to this project. |

#### Example: Load

```go
projectMember, err := client.ProjectMember(nil).Load(map[string]any{"id_or_name": "id_or_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectMember) // the loaded record
```

#### Example: Create

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


### ProjectRoute

Create an instance: `projectRoute := client.ProjectRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `actions` | `[]any` |  |
| `alias` | `string` | The staging alias for previewing this version. |
| `conditions` | `[]any` |  |
| `createdBy` | `string` | The user who created this version. |
| `currentRoute` | `map[string]any` |  |
| `description` | `string` |  |
| `id` | `string` | Unique identifier for the version. |
| `isLive` | `bool` | Whether this version is currently live in production. |
| `isStaging` | `bool` | Whether this version is staged and not yet promoted to production. |
| `lastModified` | `float64` | Timestamp of when this version was last modified. |
| `name` | `string` |  |
| `overwrite` | `bool` |  |
| `pathCondition` | `map[string]any` |  |
| `position` | `map[string]any` | Controls where the route is inserted. |
| `prompt` | `string` |  |
| `restore` | `bool` | If true, restores the staged route to the value in the production version. |
| `route` | `map[string]any` | The full route object to replace the existing route with |
| `routes` | `[]any` |  |
| `ruleCount` | `float64` | The number of routing rules in this version. |
| `s3Key` | `string` | The S3 key where the routing rules are stored. |
| `version` | `map[string]any` | A version of routing rules stored in S3. |

#### Example: Load

```go
projectRoute, err := client.ProjectRoute(nil).Load(map[string]any{"id": "project_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectRoute) // the loaded record
```

#### Example: List

```go
projectRoutes, err := client.ProjectRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectRoutes) // the array of records
```

#### Example: Create

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


### Query

Create an instance: `query := client.Query(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregation` | `string` | Aggregation function to apply. |
| `bucketTimezone` | `string` | IANA timezone (e.g. |
| `endTime` | `string` | End timestamp |
| `filter` | `string` | Filter to apply to the query. |
| `granularity` | `map[string]any` | Time bucket size |
| `groupBy` | `[]any` | Dimensions to group results by. |
| `limit` | `float64` | Maximum number of results |
| `metric` | `string` | Metric id |
| `orderBy` | `string` | Rollup column to order grouped results by. |
| `orderDirection` | `string` | Direction to order grouped results by. |
| `scope` | `map[string]any` | Owner or project scope for the query |
| `startTime` | `string` | Start timestamp |

#### Example: Create

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


### Record

Create an instance: `record := client.Record(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` |  |
| `createdAt` | `float64` |  |
| `creator` | `string` |  |
| `domain` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `recordType` | `string` |  |
| `ttl` | `float64` |  |
| `type` | `string` |  |
| `value` | `string` |  |

#### Example: Load

```go
record, err := client.Record(nil).Load(map[string]any{"id": "record_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(record) // the loaded record
```


### RollingRelease

Create an instance: `rollingRelease := client.RollingRelease(nil)`

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
| `activeStage` | `map[string]any` | The currently active stage, null if the rollout is aborted |
| `advancementType` | `string` | The advancement type of the rolling release |
| `canaryDeployment` | `map[string]any` | The canary deployment being rolled out |
| `currentCanaryPercentage` | `float64` | When set (for example while {@link substate} is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. |
| `currentDeployment` | `map[string]any` | The current deployment receiving production traffic |
| `nextStage` | `map[string]any` | The next stage to be activated, null if not in ACTIVE state |
| `queuedDeploymentId` | `string` | The ID of a deployment queued for the next rolling release |
| `stages` | `[]any` | All stages configured for this rolling release |
| `startedAt` | `float64` | Unix timestamp in milliseconds when the rolling release started |
| `state` | `string` | The current state of the rolling release |
| `substate` | `string` | When set to `PAUSED`, the rollout is frozen at the current percentage until continued. |
| `updatedAt` | `float64` | Unix timestamp in milliseconds when the rolling release was last updated |

#### Example: Load

```go
rollingRelease, err := client.RollingRelease(nil).Load(map[string]any{"id_or_name": "id_or_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rollingRelease) // the loaded record
```

#### Example: Create

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


### Sandbox

Create an instance: `sandbox := client.Sandbox(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `args` | `[]any` | The arguments of the command. |
| `command` | `string` | The executable or shell command to run. |
| `createdAt` | `float64` | The time when the snapshot was created, in milliseconds since the epoch. |
| `creationMethod` | `string` | The method used to create the snapshot. |
| `currentSandboxName` | `string` | Current sandbox name the drive is attached to, if any. |
| `currentSessionId` | `string` | Current session ID the drive is attached to, if any. |
| `currentSnapshotId` | `string` | The snapshot ID to set as the current snapshot. |
| `cwd` | `string` | The current working directory of the command. |
| `durationMs` | `float64` | Duration of the command execution in milliseconds. |
| `env` | `map[string]any` | Additional environment variables to set for this command. |
| `exitCode` | `float64` | If the command did finish, the exit code. |
| `expiration` | `any` | The number of milliseconds after which the snapshot will expire and be deleted. |
| `expiresAt` | `float64` | The time when the snapshot will expire, in milliseconds since the epoch. |
| `failoverRegions` | `[]any` | The regions the sandbox falls back to when it cannot be created in `region`. |
| `id` | `string` | The ID of the command. |
| `image` | `string` | Image to use for the sandbox. |
| `keepLastSnapshots` | `map[string]any` | Protect the N most recent snapshots with different expiration/deletion behavior. |
| `lastUsedAt` | `float64` | The last time the snapshot was used (e.g. |
| `logs` | `bool` | If true, stream the logs of the command execution in real-time via ND-JSON. |
| `maxSizeBytes` | `float64` | The maximum drive size in bytes. |
| `memory` | `float64` | Memory allocated in MB. |
| `mounts` | `map[string]any` | List of drives to mount to the sandbox at the provided path. |
| `name` | `string` | The name of the command. |
| `networkId` | `string` | The Connect network id for the target Secure Compute private network. |
| `networkPolicy` | `any` | Network policy configuration. |
| `parentId` | `string` | The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. |
| `path` | `string` | The path of the directory to create. |
| `persistent` | `bool` | Whether the sandbox persists its state across restarts via automatic snapshots. |
| `ports` | `[]any` | List of ports to expose from the sandbox. |
| `projectId` | `string` | The project that owns the drive. |
| `recursive` | `bool` | If true, creates parent directories as needed (like `mkdir -p`). |
| `region` | `string` | The region where the snapshot is stored. |
| `regions` | `[]any` | The regions where the snapshot is available. |
| `resources` | `map[string]any` | Resources to define the VM |
| `resumed` | `bool` |  |
| `routes` | `[]any` |  |
| `runtime` | `string` | The runtime environment for the sandbox. |
| `sandbox` | `map[string]any` | This object contains information related to a Vercel NamedSandbox. |
| `session` | `map[string]any` | This object contains information related to a Vercel Sandbox Session. |
| `sessionId` | `string` | The ID of the session associated with the command. |
| `sizeBytes` | `float64` | The size of the snapshot in bytes. |
| `snapshotExpiration` | `any` | Default snapshot expiration time in milliseconds. |
| `source` | `any` | The source from which to initialize the sandbox filesystem. |
| `sourceSessionId` | `string` | The unique identifier of the session from which the snapshot was created. |
| `startedAt` | `float64` | When the command was started, in milliseconds since the epoch. |
| `status` | `string` | The status of the snapshot. |
| `statusUpdatedAt` | `float64` | The time when the sandbox status was last updated, in milliseconds since the epoch. |
| `sudo` | `bool` | Execute the command with root (superuser) privileges. |
| `tags` | `map[string]any` | Key-value tags to associate with the sandbox. |
| `timeout` | `int` | Maximum duration in milliseconds the command may run before it is killed with SIGKILL, up to 5 hours. |
| `totalActiveCpuDurationMs` | `float64` | Cumulative active CPU duration in milliseconds across all sandbox runs. |
| `totalDurationMs` | `float64` | Cumulative wall-clock duration in milliseconds across all sandbox runs. |
| `totalEgressBytes` | `float64` | Cumulative egress bytes across all sandbox runs. |
| `totalIngressBytes` | `float64` | Cumulative ingress bytes across all sandbox runs. |
| `updatedAt` | `float64` | The last time the snapshot was updated, in milliseconds since the epoch. |
| `vcpus` | `float64` | Number of virtual CPUs allocated. |
| `wait` | `bool` | If true, returns an ND-JSON stream that emits the command status when started and again when finished. |

#### Example: Load

```go
sandbox, err := client.Sandbox(nil).Load(map[string]any{"id": "sandbox_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sandbox) // the loaded record
```

#### Example: List

```go
sandboxs, err := client.Sandbox(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sandboxs) // the array of records
```

#### Example: Create

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


### Schema

Create an instance: `schema := client.Schema(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregations` | `[]any` |  |
| `defaultAggregation` | `string` |  |
| `description` | `string` |  |
| `dimensions` | `[]any` |  |
| `id` | `string` |  |
| `unit` | `string` |  |

#### Example: Load

```go
schema, err := client.Schema(nil).Load(map[string]any{"id": "schema_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(schema) // the loaded record
```

#### Example: List

```go
schemas, err := client.Schema(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(schemas) // the array of records
```


### Security

Create an instance: `security := client.Security(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `Action` | `string` |  |
| `ActorId` | `string` |  |
| `CreatedAt` | `string` |  |
| `DeletedAt` | `string` |  |
| `Domain` | `string` |  |
| `ExpiresAt` | `float64` |  |
| `Id` | `string` |  |
| `Ip` | `string` |  |
| `IsProjectRule` | `bool` |  |
| `Note` | `string` |  |
| `OwnerId` | `string` |  |
| `ProjectId` | `string` |  |
| `UpdatedAt` | `string` |  |
| `UpdatedAtHour` | `string` |  |
| `action` | `map[string]any` |  |
| `action_type` | `string` |  |
| `active` | `bool` |  |
| `allSources` | `bool` |  |
| `botIdEnabled` | `bool` |  |
| `changes` | `[]any` |  |
| `conditionGroup` | `[]any` |  |
| `conditions` | `[]any` |  |
| `count` | `float64` |  |
| `crs` | `map[string]any` | Custom Ruleset |
| `description` | `string` |  |
| `domain` | `string` |  |
| `endTime` | `string` |  |
| `firewallEnabled` | `bool` |  |
| `host` | `string` |  |
| `id` | `string` |  |
| `ips` | `[]any` |  |
| `isActive` | `bool` |  |
| `logHeaders` | `any` |  |
| `managedRules` | `map[string]any` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `ownerId` | `string` |  |
| `projectKey` | `string` |  |
| `projectScope` | `bool` | If the specified bypass will apply to all domains for a project. |
| `public_ip` | `string` |  |
| `ruleId` | `string` |  |
| `ruleName` | `string` |  |
| `rules` | `[]any` |  |
| `rulesets` | `any` |  |
| `sourceIp` | `string` |  |
| `startTime` | `string` |  |
| `ttl` | `float64` | Time to live in milliseconds |
| `updatedAt` | `string` |  |
| `version` | `float64` |  |

#### Example: Load

```go
security, err := client.Security(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(security) // the loaded record
```

#### Example: List

```go
securitys, err := client.Security(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(securitys) // the array of records
```

#### Example: Create

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


### Segment

Create an instance: `segment := client.Segment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `float64` |  |
| `createdBy` | `string` |  |
| `data` | `map[string]any` |  |
| `description` | `string` |  |
| `hint` | `string` |  |
| `id` | `string` |  |
| `label` | `string` |  |
| `metadata` | `map[string]any` |  |
| `projectId` | `string` |  |
| `slug` | `string` |  |
| `typeName` | `string` |  |
| `updatedAt` | `float64` |  |
| `usedByFlags` | `[]any` |  |
| `usedBySegments` | `[]any` |  |

#### Example: Load

```go
segment, err := client.Segment(nil).Load(map[string]any{"id": "segment_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(segment) // the loaded record
```


### Storage

Create an instance: `storage := client.Storage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `count` | `float64` |  |
| `id` | `string` |  |
| `isTokenExpired` | `bool` |  |
| `kind` | `string` | A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. |
| `name` | `string` |  |
| `projectFilter` | `map[string]any` |  |
| `projectId` | `string` | The project this store is scoped to. |
| `projectsMetadata` | `[]any` |  |
| `region` | `string` |  |
| `size` | `float64` |  |
| `status` | `string` |  |
| `totalConnectedProjects` | `float64` |  |
| `usageQuotaExceeded` | `bool` |  |

#### Example: Load

```go
storage, err := client.Storage(nil).Load(map[string]any{"id": "storage_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(storage) // the loaded record
```

#### Example: Create

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


### Team

Create an instance: `team := client.Team(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accessRequestedAt` | `float64` | Timestamp in milliseconds when the user requested access to the team. |
| `apiKeysInvalidatedAt` | `float64` | Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. |
| `appTokensInvalidatedAt` | `float64` | Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. |
| `attribution` | `map[string]any` | Attribution information for the session or current page |
| `avatar` | `string` | The ID of the file used as avatar for this Team. |
| `billing` | `map[string]any` | The team's billing plan. |
| `bitbucket` | `map[string]any` | Map of the connected Bitbucket account. |
| `confirmed` | `bool` | Current status of the membership. |
| `connect` | `map[string]any` |  |
| `createdAt` | `float64` | UNIX timestamp (in milliseconds) when the Team was created. |
| `creatorId` | `string` | The ID of the user who created the Team. |
| `defaultDeploymentProtection` | `map[string]any` | Default deployment protection for this team null indicates protection is disabled |
| `defaultExpirationSettings` | `map[string]any` | Default deployment expiration settings for this team |
| `defaultPassport` | `map[string]any` | Default Passport configuration for new projects in this team. |
| `defaultProjectJobs` | `map[string]any` | Default job configuration applied to new projects created in this team. |
| `defaultRoles` | `map[string]any` | Default roles for the team. |
| `deploymentPolicy` | `map[string]any` | Composable deployment-time policy for the team. |
| `description` | `string` | A short description of the Team. |
| `disableHardAutoBlocks` | `any` |  |
| `disableRepositoryDispatchEvents` | `bool` | Default for projects in the team. |
| `disjunctiveProductionSecretPolicy` | `string` | Require production secrets to use a different value than preview or development. |
| `dpAccessRequestsMode` | `string` | Controls who can request access to protected deployments. |
| `emailDomain` | `string` | Hostname that'll be matched with emails on sign-up to automatically join the Team. |
| `enablePolyrepoBranchRouting` | `bool` | Whether Preview Deployments can link to branches with the same name in other Git repositories. |
| `enablePreviewFeedback` | `string` | Whether toolbar is enabled on preview deployments |
| `enableProductionFeedback` | `string` | Whether toolbar is enabled on production deployments |
| `fallbackEnvironment` | `string` | The new fallback environment for the microfrontends group. |
| `github` | `map[string]any` | Map of the connected GitHub account. |
| `gitlab` | `map[string]any` | Map of the connected GitLab account. |
| `hideIpAddresses` | `bool` | Indicates if IP addresses should be accessible in observability (o11y) tooling |
| `hideIpAddressesInLogDrains` | `bool` | Indicates if IP addresses should be accessible in log drains |
| `id` | `string` | The Team's unique identifier. |
| `integrationTokensInvalidatedAt` | `float64` | Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. |
| `inviteCode` | `string` | Code that can be used to join this Team. |
| `ipBuckets` | `[]any` |  |
| `joinedFrom` | `map[string]any` | A map that describes the origin from where the user joined. |
| `membership` | `map[string]any` | The membership of the authenticated User in relation to the Team. |
| `name` | `string` | Name associated with the Team account, or `null` if none has been provided. |
| `nsnbConfig` | `map[string]any` | NSNB configuration for the team. |
| `orgRootTeamId` | `string` | Best-effort ID of the organization’s root billing team. |
| `pagination` | `map[string]any` | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `parentId` | `string` | The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). |
| `personalAccessTokensInvalidatedAt` | `float64` | Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. |
| `platform` | `bool` | Whether the team is a platform team. |
| `previewDeploymentSuffix` | `string` | The hostname that is current set as preview deployment suffix. |
| `projects` | `[]any` |  |
| `regenerateInviteCode` | `bool` | Create a new invite code and replace the current one. |
| `remoteCaching` | `map[string]any` | Is remote caching enabled for this team |
| `requireVerifiedCommits` | `bool` | When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. |
| `resourceConfig` | `map[string]any` | Resource configuration for the team. |
| `role` | `string` | The role in the team of the member. |
| `saml` | `map[string]any` | When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP). |
| `sensitiveEnvironmentVariablePolicy` | `string` | Sensitive environment variable policy for this team |
| `slug` | `string` | The Team's slug, which is unique across the Vercel platform. |
| `stagingPrefix` | `string` | The prefix that is prepended to automatic aliases. |
| `strictConnectors` | `map[string]any` | When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. |
| `strictDeploymentProtectionSettings` | `map[string]any` | When enabled, deployment protection settings require stricter permissions (owner-only). |
| `strictPasswordProtectionSettings` | `map[string]any` | When enabled, adding, changing, or removing project password protection requires Owner role. |
| `strictShareableLinks` | `map[string]any` | When enabled, creating shareable links requires Owner role. |
| `teamName` | `string` | The name of the team. |
| `teamPermissions` | `[]any` | The team permissions to set for the member. |
| `teamSlug` | `string` | The slug of the team. |
| `teams` | `[]any` |  |
| `updatedAt` | `float64` | Timestamp (in milliseconds) of when the Team was last updated. |

#### Example: Load

```go
team, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(team) // the loaded record
```

#### Example: List

```go
teams, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teams) // the array of records
```

#### Example: Create

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


### TldName

Create an instance: `tldName := client.TldName(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
tldNames, err := client.TldName(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tldNames) // the array of records
```


### Toggle

Create an instance: `toggle := client.Toggle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `value` | `bool` |  |

#### Example: Create

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


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `[]any` | The categories that group this event with related event types. |
| `createdAt` | `float64` | Timestamp (in milliseconds) of when the event was generated. |
| `entities` | `[]any` | A list of "entities" within the event `text`. |
| `id` | `string` | The unique identifier of the Event. |
| `payload` | `any` |  |
| `principal` | `any` |  |
| `principalId` | `string` | The ID of the principal who generated the event. |
| `requestId` | `string` |  |
| `sessionId` | `string` | The ID of the session that the principal's token belongs to, when it belongs to one. |
| `text` | `string` | The human-readable text of the Event. |
| `tokenId` | `string` | The public ID of the token that the principal authenticated with, when the request behind this event carried one. |
| `type` | `string` | The type of the event. |
| `user` | `map[string]any` | Metadata for {@link userId}. |
| `userId` | `string` | When the principal who generated the event is a user, this is their ID; otherwise, it is empty. |
| `via` | `[]any` | Metadata for {@link viaIds}. |
| `viaIds` | `[]any` | If the principal delegated its authority (for example, a user delegating to an app), then this array contains the ID of the current actor. |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user) // the loaded record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```


### Vcr

Create an instance: `vcr := client.Vcr(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `arch` | `string` | CPU architecture the manifest targets. |
| `createdAt` | `string` | ISO 8601 timestamp of when the image was created. |
| `id` | `string` | Internal identifier of the image. |
| `imageId` | `string` | Internal identifier of the image the tag points at. |
| `kind` | `string` | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |
| `layers` | `[]any` |  |
| `manifestDigest` | `string` | SHA-256 digest of the image manifest. |
| `name` | `string` | Name of the repository. |
| `platform` | `string` | Operating system the manifest targets. |
| `projectId` | `string` | Identifier of the project the repository belongs to. |
| `public` | `bool` | Whether the repository is public. |
| `pushedBy` | `string` | Identifier of the actor that pushed the image. |
| `repositoryId` | `string` | Identifier of the repository the image belongs to. |
| `sizeInBytes` | `float64` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | VHS-readiness status, or `null` for a multi-platform index. |
| `tag` | `string` | The tag name. |
| `tags` | `[]any` | Tags pointing at this image's manifest. |
| `teamId` | `string` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Slug of the team that is granted access to the repository. |
| `updatedAt` | `string` | ISO 8601 timestamp of when the tag was last updated. |

#### Example: Load

```go
vcr, err := client.Vcr(nil).Load(map[string]any{"id_or_name": "id_or_name", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(vcr) // the loaded record
```

#### Example: List

```go
vcrs, err := client.Vcr(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(vcrs) // the array of records
```

#### Example: Create

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


### VcrImageList

Create an instance: `vcrImageList := client.VcrImageList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `sizeInBytes` | `float64` | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. |
| `status` | `string` | VHS-readiness status, or `null` for a multi-platform index. |
| `tags` | `[]any` | Tags pointing at this image's manifest. |

#### Example: List

```go
vcrImageLists, err := client.VcrImageList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(vcrImageLists) // the array of records
```


### VcrRepositoryList

Create an instance: `vcrRepositoryList := client.VcrRepositoryList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
vcrRepositoryLists, err := client.VcrRepositoryList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(vcrRepositoryLists) // the array of records
```


### VcrRepositoryPermissionList

Create an instance: `vcrRepositoryPermissionList := client.VcrRepositoryPermissionList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | ISO 8601 timestamp of when the permission was created. |
| `repositoryId` | `string` | Identifier of the repository the permission grants access to. |
| `teamId` | `string` | Identifier of the team that is granted access to the repository. |
| `teamSlug` | `string` | Slug of the team that is granted access to the repository. |

#### Example: List

```go
vcrRepositoryPermissionLists, err := client.VcrRepositoryPermissionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(vcrRepositoryPermissionLists) // the array of records
```


### WebAnalytics

Create an instance: `webAnalytics := client.WebAnalytics(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any` |  |
| `query` | `map[string]any` |  |
| `version` | `float64` |  |

#### Example: Load

```go
webAnalytics, err := client.WebAnalytics(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webAnalytics) // the loaded record
```


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alertRuleIds` | `[]any` |  |
| `createdAt` | `float64` | A number containing the date when the webhook was created in in milliseconds |
| `events` | `[]any` | The webhooks events |
| `id` | `string` | The webhook id |
| `ownerId` | `string` | The unique ID of the team the webhook belongs to |
| `projectIds` | `[]any` | The ID of the projects the webhook is associated with |
| `secret` | `string` | The webhook secret used to sign the payload |
| `updatedAt` | `float64` | A number containing the date when the webhook was updated in in milliseconds |
| `url` | `string` | A string with the URL of the webhook |

#### Example: Load

```go
webhook, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhook) // the loaded record
```

#### Example: Create

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

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
bulkredirect := client.BulkRedirect(nil)
bulkredirect.List(nil, nil)

// bulkredirect.Data() now returns the bulkredirect data from the last list
// bulkredirect.Match() returns the last match criteria
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
