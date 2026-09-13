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

#### `Project(data)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

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

## ProjectEntity

```lua
local project = client:Project(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `table` | Yes |  |
| `accountId` | `string` | Yes |  |
| `alias` | `table` | Yes |  |
| `analytics` | `table` | Yes |  |
| `appliedCve55182Migration` | `boolean` | No |  |
| `autoAssignCustomDomains` | `boolean` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `boolean` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `table` | No |  |
| `buildCommand` | `string` | No | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `concurrencyBucketName` | `string` | No |  |
| `connectBuildsEnabled` | `boolean` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `table` | No | The list of connections from project environment to Secure Compute network |
| `createdAt` | `number` | No |  |
| `creator` | `any` | No |  |
| `crons` | `table` | Yes |  |
| `customEnvironments` | `table` | No |  |
| `customerSupportCodeVisibility` | `boolean` | No | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `table` | Yes |  |
| `defaultResourceConfig` | `table` | Yes |  |
| `deploymentExpiration` | `table` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `table` | No | Project shape. |
| `devCommand` | `string` | No | The dev command for this project. |
| `directoryListing` | `boolean` | Yes |  |
| `dismissedToasts` | `table` | No | An array of objects representing a Dismissed Toast in regards to a Project. |
| `enableAffectedProjectsDeployments` | `boolean` | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `boolean` | No | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `boolean` | No | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `boolean` | No | Opt-in to production toolbar on the project level |
| `env` | `table` | No |  |
| `environmentVariables` | `table` | No | Collection of ENV Variables the Project will use |
| `expiration` | `any` | No |  |
| `features` | `table` | No |  |
| `framework` | `string` | No | The framework that is being used for this project. |
| `gitComments` | `table` | Yes |  |
| `gitForkProtection` | `boolean` | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `boolean` | No | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `table` | Yes |  |
| `gitRepository` | `table` | Yes | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `boolean` | No |  |
| `hasDeployments` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No | The install command for this project. |
| `integrations` | `table` | No |  |
| `internalRoutes` | `table` | No |  |
| `ipBuckets` | `table` | No |  |
| `jobs` | `table` | No |  |
| `lastAliasRequest` | `table` | Yes |  |
| `lastRollbackTarget` | `table` | No |  |
| `latestDeployments` | `table` | No |  |
| `link` | `string` | No |  |
| `live` | `boolean` | No |  |
| `microfrontends` | `any` | No |  |
| `name` | `string` | Yes | The desired name for the project |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `table` | No | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `table` | Yes | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | No | The output directory of the project. |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `table` | Yes | Passport configuration for the project. |
| `passwordProtection` | `table` | No | Allows to protect project deployments with a password |
| `paused` | `boolean` | No |  |
| `permissions` | `table` | No |  |
| `previewDeploymentSuffix` | `string` | No | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `boolean` | No | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `boolean` | No |  |
| `protectedSourcemaps` | `boolean` | No | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `table` | No |  |
| `protectionConfig` | `table` | No |  |
| `publicSource` | `boolean` | No | Deprecated. |
| `resourceConfig` | `table` | Yes | Specifies resource override configuration for the project |
| `rollbackDescription` | `table` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `table` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `table` | No |  |
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
| `targets` | `table` | No |  |
| `tier` | `string` | No |  |
| `tracing` | `table` | No | Tracing configuration for this project |
| `transferCompletedAt` | `number` | No |  |
| `transferStartedAt` | `number` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `any` | No | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `table` | No | Deployment Protection Trusted Sources |
| `updatedAt` | `number` | No |  |
| `usageStatus` | `table` | Yes |  |
| `v0` | `boolean` | No |  |
| `v0Created` | `boolean` | No |  |
| `webAnalytics` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `abuse` | - | - | - | - |
| `accountId` | - | - | - | - |
| `alias` | - | - | - | - |
| `analytics` | - | - | - | - |
| `appliedCve55182Migration` | - | - | - | - |
| `autoAssignCustomDomains` | - | - | - | - |
| `autoAssignCustomDomainsUpdatedBy` | - | - | - | - |
| `autoExposeSystemEnvs` | - | - | - | - |
| `avatar` | - | - | - | - |
| `blobs` | - | - | - | - |
| `buildCommand` | - | - | - | - |
| `commandForIgnoringBuildStep` | - | - | - | - |
| `concurrencyBucketName` | - | - | - | - |
| `connectBuildsEnabled` | - | - | - | - |
| `connectConfigurationId` | - | - | - | - |
| `connectConfigurations` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `creator` | - | - | - | - |
| `crons` | - | - | - | - |
| `customEnvironments` | - | - | - | - |
| `customerSupportCodeVisibility` | - | - | - | - |
| `dataCache` | - | - | - | - |
| `defaultResourceConfig` | - | - | - | - |
| `deploymentExpiration` | - | - | - | - |
| `deploymentPolicy` | - | - | - | - |
| `devCommand` | - | - | - | - |
| `directoryListing` | - | - | Yes | - |
| `dismissedToasts` | - | - | - | - |
| `enableAffectedProjectsDeployments` | - | - | - | - |
| `enableExternalRewriteCaching` | - | - | - | - |
| `enablePreviewFeedback` | - | - | - | - |
| `enableProductionFeedback` | - | - | - | - |
| `env` | - | - | - | - |
| `environmentVariables` | - | - | - | - |
| `expiration` | - | - | - | - |
| `features` | - | - | - | - |
| `framework` | - | - | - | - |
| `gitComments` | - | - | - | - |
| `gitForkProtection` | - | - | - | - |
| `gitLFS` | - | - | - | - |
| `gitProviderOptions` | - | - | - | - |
| `gitRepository` | - | - | - | - |
| `hasActiveBranches` | - | - | - | - |
| `hasDeployments` | - | - | - | - |
| `id` | - | - | - | - |
| `installCommand` | - | - | - | - |
| `integrations` | - | - | - | - |
| `internalRoutes` | - | - | - | - |
| `ipBuckets` | - | - | - | - |
| `jobs` | - | - | - | - |
| `lastAliasRequest` | - | - | - | - |
| `lastRollbackTarget` | - | - | - | - |
| `latestDeployments` | - | - | - | - |
| `link` | - | - | - | - |
| `live` | - | - | - | - |
| `microfrontends` | - | - | - | - |
| `name` | - | - | Yes | - |
| `nodeVersion` | - | - | Yes | - |
| `oidcTokenConfig` | - | - | - | - |
| `optionsAllowlist` | - | - | - | - |
| `outputDirectory` | - | - | - | - |
| `passiveConnectConfigurationId` | - | - | - | - |
| `passport` | - | - | - | - |
| `passwordProtection` | - | - | Yes | - |
| `paused` | - | - | - | - |
| `permissions` | - | - | - | - |
| `previewDeploymentSuffix` | - | - | - | - |
| `previewDeploymentsDisabled` | - | - | - | - |
| `productionDeploymentsFastLane` | - | - | - | - |
| `protectedSourcemaps` | - | - | - | - |
| `protectionBypass` | - | - | - | - |
| `protectionConfig` | - | - | - | - |
| `publicSource` | - | - | - | - |
| `resourceConfig` | - | Yes | Yes | - |
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
| `targets` | - | - | - | - |
| `tier` | - | - | - | - |
| `tracing` | - | - | - | - |
| `transferCompletedAt` | - | - | - | - |
| `transferStartedAt` | - | - | - | - |
| `transferToAccountId` | - | - | - | - |
| `transferredFromAccountId` | - | - | - | - |
| `trustedIps` | - | - | Yes | - |
| `trustedSources` | - | - | - | - |
| `updatedAt` | - | - | - | - |
| `usageStatus` | - | - | - | - |
| `v0` | - | - | - | - |
| `v0Created` | - | - | - | - |
| `webAnalytics` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Project():create({
  abuse = --[[ table ]],
  accountId = --[[ string ]],
  alias = --[[ table ]],
  analytics = --[[ table ]],
  crons = --[[ table ]],
  dataCache = --[[ table ]],
  defaultResourceConfig = --[[ table ]],
  deploymentExpiration = --[[ table ]],
  directoryListing = --[[ boolean ]],
  gitComments = --[[ table ]],
  gitProviderOptions = --[[ table ]],
  gitRepository = --[[ table ]],
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

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

