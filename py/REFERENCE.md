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

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

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

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `dict` | Yes |  |
| `accountId` | `str` | Yes |  |
| `alias` | `list` | Yes |  |
| `analytics` | `dict` | Yes |  |
| `appliedCve55182Migration` | `bool` | No |  |
| `autoAssignCustomDomains` | `bool` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `str` | No |  |
| `autoExposeSystemEnvs` | `bool` | No |  |
| `avatar` | `str` | No |  |
| `blobs` | `dict` | No |  |
| `buildCommand` | `str` | No | The build command for this project. |
| `commandForIgnoringBuildStep` | `str` | No |  |
| `concurrencyBucketName` | `str` | No |  |
| `connectBuildsEnabled` | `bool` | No |  |
| `connectConfigurationId` | `str` | No |  |
| `connectConfigurations` | `list` | No | The list of connections from project environment to Secure Compute network |
| `createdAt` | `float` | No |  |
| `creator` | `Any` | No |  |
| `crons` | `dict` | Yes |  |
| `customEnvironments` | `list` | No |  |
| `customerSupportCodeVisibility` | `bool` | No | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `dict` | Yes |  |
| `defaultResourceConfig` | `dict` | Yes |  |
| `deploymentExpiration` | `dict` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `dict` | No | Project shape. |
| `devCommand` | `str` | No | The dev command for this project. |
| `directoryListing` | `bool` | Yes |  |
| `dismissedToasts` | `list` | No | An array of objects representing a Dismissed Toast in regards to a Project. |
| `enableAffectedProjectsDeployments` | `bool` | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `bool` | No | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `bool` | No | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `bool` | No | Opt-in to production toolbar on the project level |
| `env` | `list` | No |  |
| `environmentVariables` | `list` | No | Collection of ENV Variables the Project will use |
| `expiration` | `Any` | No |  |
| `features` | `dict` | No |  |
| `framework` | `str` | No | The framework that is being used for this project. |
| `gitComments` | `dict` | Yes |  |
| `gitForkProtection` | `bool` | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `bool` | No | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `dict` | Yes |  |
| `gitRepository` | `dict` | Yes | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `bool` | No |  |
| `hasDeployments` | `bool` | No |  |
| `id` | `str` | Yes |  |
| `installCommand` | `str` | No | The install command for this project. |
| `integrations` | `list` | No |  |
| `internalRoutes` | `list` | No |  |
| `ipBuckets` | `list` | No |  |
| `jobs` | `dict` | No |  |
| `lastAliasRequest` | `dict` | Yes |  |
| `lastRollbackTarget` | `dict` | No |  |
| `latestDeployments` | `list` | No |  |
| `link` | `str` | No |  |
| `live` | `bool` | No |  |
| `microfrontends` | `Any` | No |  |
| `name` | `str` | Yes | The desired name for the project |
| `nodeVersion` | `str` | Yes |  |
| `oidcTokenConfig` | `dict` | No | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `dict` | Yes | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `str` | No | The output directory of the project. |
| `passiveConnectConfigurationId` | `str` | No |  |
| `passport` | `dict` | Yes | Passport configuration for the project. |
| `passwordProtection` | `dict` | No | Allows to protect project deployments with a password |
| `paused` | `bool` | No |  |
| `permissions` | `dict` | No |  |
| `previewDeploymentSuffix` | `str` | No | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `bool` | No | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `bool` | No |  |
| `protectedSourcemaps` | `bool` | No | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `dict` | No |  |
| `protectionConfig` | `dict` | No |  |
| `publicSource` | `bool` | No | Deprecated. |
| `resourceConfig` | `dict` | Yes | Specifies resource override configuration for the project |
| `rollbackDescription` | `dict` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `dict` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `str` | No | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `dict` | No |  |
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
| `targets` | `dict` | No |  |
| `tier` | `str` | No |  |
| `tracing` | `dict` | No | Tracing configuration for this project |
| `transferCompletedAt` | `float` | No |  |
| `transferStartedAt` | `float` | No |  |
| `transferToAccountId` | `str` | No |  |
| `transferredFromAccountId` | `str` | No |  |
| `trustedIps` | `Any` | No | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `dict` | No | Deployment Protection Trusted Sources |
| `updatedAt` | `float` | No |  |
| `usageStatus` | `dict` | Yes |  |
| `v0` | `bool` | No |  |
| `v0Created` | `bool` | No |  |
| `webAnalytics` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
    "abuse": {},  # dict
    "accountId": "example_accountId",  # str
    "alias": [],  # list
    "analytics": {},  # dict
    "crons": {},  # dict
    "dataCache": {},  # dict
    "defaultResourceConfig": {},  # dict
    "deploymentExpiration": {},  # dict
    "directoryListing": True,  # bool
    "gitComments": {},  # dict
    "gitProviderOptions": {},  # dict
    "gitRepository": {},  # dict
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

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = VercelSDK({
    "feature": {
        "test": {"active": True},
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

