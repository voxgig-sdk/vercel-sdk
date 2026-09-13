# Vercel JavaScript SDK Reference

Complete API reference for the Vercel JavaScript SDK.


## VercelSDK

### Constructor

```ts
new VercelSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VercelSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = VercelSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `VercelSDK` instance in test mode.


### Instance Methods

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `VercelSDK.test()`.

**Returns:** `VercelSDK` instance in test mode.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abuse` | `Object` | Yes |  |
| `accountId` | `string` | Yes |  |
| `alias` | `Array` | Yes |  |
| `analytics` | `Object` | Yes |  |
| `appliedCve55182Migration` | `boolean` | No |  |
| `autoAssignCustomDomains` | `boolean` | No |  |
| `autoAssignCustomDomainsUpdatedBy` | `string` | No |  |
| `autoExposeSystemEnvs` | `boolean` | No |  |
| `avatar` | `string` | No |  |
| `blobs` | `Object` | No |  |
| `buildCommand` | `string` | No | The build command for this project. |
| `commandForIgnoringBuildStep` | `string` | No |  |
| `concurrencyBucketName` | `string` | No |  |
| `connectBuildsEnabled` | `boolean` | No |  |
| `connectConfigurationId` | `string` | No |  |
| `connectConfigurations` | `Array` | No | The list of connections from project environment to Secure Compute network |
| `createdAt` | `number` | No |  |
| `creator` | `*` | No |  |
| `crons` | `Object` | Yes |  |
| `customEnvironments` | `Array` | No |  |
| `customerSupportCodeVisibility` | `boolean` | No | Specifies whether customer support can see git source for a deployment |
| `dataCache` | `Object` | Yes |  |
| `defaultResourceConfig` | `Object` | Yes |  |
| `deploymentExpiration` | `Object` | Yes | Retention policies for deployments. |
| `deploymentPolicy` | `Object` | No | Project shape. |
| `devCommand` | `string` | No | The dev command for this project. |
| `directoryListing` | `boolean` | Yes |  |
| `dismissedToasts` | `Array` | No | An array of objects representing a Dismissed Toast in regards to a Project. |
| `enableAffectedProjectsDeployments` | `boolean` | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `enableExternalRewriteCaching` | `boolean` | No | Specifies whether external rewrite caching is enabled for this project. |
| `enablePreviewFeedback` | `boolean` | No | Opt-in to preview toolbar on the project level |
| `enableProductionFeedback` | `boolean` | No | Opt-in to production toolbar on the project level |
| `env` | `Array` | No |  |
| `environmentVariables` | `Array` | No | Collection of ENV Variables the Project will use |
| `expiration` | `*` | No |  |
| `features` | `Object` | No |  |
| `framework` | `string` | No | The framework that is being used for this project. |
| `gitComments` | `Object` | Yes |  |
| `gitForkProtection` | `boolean` | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `gitLFS` | `boolean` | No | Specifies whether Git LFS is enabled for this project. |
| `gitProviderOptions` | `Object` | Yes |  |
| `gitRepository` | `Object` | Yes | The Git Repository that will be connected to the project. |
| `hasActiveBranches` | `boolean` | No |  |
| `hasDeployments` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `installCommand` | `string` | No | The install command for this project. |
| `integrations` | `Array` | No |  |
| `internalRoutes` | `Array` | No |  |
| `ipBuckets` | `Array` | No |  |
| `jobs` | `Object` | No |  |
| `lastAliasRequest` | `Object` | Yes |  |
| `lastRollbackTarget` | `Object` | No |  |
| `latestDeployments` | `Array` | No |  |
| `link` | `string` | No |  |
| `live` | `boolean` | No |  |
| `microfrontends` | `*` | No |  |
| `name` | `string` | Yes | The desired name for the project |
| `nodeVersion` | `string` | Yes |  |
| `oidcTokenConfig` | `Object` | No | OpenID Connect JSON Web Token generation configuration. |
| `optionsAllowlist` | `Object` | Yes | Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests |
| `outputDirectory` | `string` | No | The output directory of the project. |
| `passiveConnectConfigurationId` | `string` | No |  |
| `passport` | `Object` | Yes | Passport configuration for the project. |
| `passwordProtection` | `Object` | No | Allows to protect project deployments with a password |
| `paused` | `boolean` | No |  |
| `permissions` | `Object` | No |  |
| `previewDeploymentSuffix` | `string` | No | Custom domain suffix for preview deployments. |
| `previewDeploymentsDisabled` | `boolean` | No | Specifies whether preview deployments are disabled for this project. |
| `productionDeploymentsFastLane` | `boolean` | No |  |
| `protectedSourcemaps` | `boolean` | No | Specifies whether sourcemaps are protected and require authentication to access. |
| `protectionBypass` | `Object` | No |  |
| `protectionConfig` | `Object` | No |  |
| `publicSource` | `boolean` | No | Deprecated. |
| `resourceConfig` | `Object` | Yes | Specifies resource override configuration for the project |
| `rollbackDescription` | `Object` | Yes | Description of why a project was rolled back, and by whom. |
| `rollingRelease` | `Object` | Yes | Project-level rolling release configuration that defines how deployments should be gradually rolled out |
| `rootDirectory` | `string` | No | The name of a directory or relative path to the source code of your project. |
| `sandbox` | `Object` | No |  |
| `security` | `Object` | No |  |
| `serverlessFunctionRegion` | `string` | No | The region to deploy Serverless Functions in this project |
| `serverlessFunctionZeroConfigFailover` | `boolean` | No | Specifies whether Zero Config Failover is enabled for this project. |
| `services` | `Array` | No |  |
| `skewProtectionAllowedDomains` | `Array` | No | Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com). |
| `skewProtectionBoundaryAt` | `number` | No | Deployments created before this absolute datetime have Skew Protection disabled. |
| `skewProtectionMaxAge` | `number` | No | Deployments created before this rolling window have Skew Protection disabled. |
| `skipGitConnectDuringLink` | `boolean` | No | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`. |
| `sourceFilesOutsideRootDirectory` | `boolean` | No | Indicates if there are source files outside of the root directory |
| `speedInsights` | `Object` | Yes |  |
| `ssoProtection` | `Object` | Yes | The Vercel Auth setting for the project (historically named \"SSO Protection\") |
| `staticIps` | `Object` | Yes | Manage Static IPs for this project |
| `targets` | `Object` | No |  |
| `tier` | `string` | No |  |
| `tracing` | `Object` | No | Tracing configuration for this project |
| `transferCompletedAt` | `number` | No |  |
| `transferStartedAt` | `number` | No |  |
| `transferToAccountId` | `string` | No |  |
| `transferredFromAccountId` | `string` | No |  |
| `trustedIps` | `*` | No | Restricts access to deployments based on the incoming request IP address |
| `trustedSources` | `Object` | No | Deployment Protection Trusted Sources |
| `updatedAt` | `number` | No |  |
| `usageStatus` | `Object` | Yes |  |
| `v0` | `boolean` | No |  |
| `v0Created` | `boolean` | No |  |
| `webAnalytics` | `Object` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
  abuse: {},
  accountId: 'example_accountId',
  alias: [],
  analytics: {},
  crons: {},
  dataCache: {},
  defaultResourceConfig: {},
  deploymentExpiration: {},
  directoryListing: true,
  gitComments: {},
  gitProviderOptions: {},
  gitRepository: {},
  id: 'example_id',
  lastAliasRequest: {},
  name: 'example_name',
  nodeVersion: 'example_nodeVersion',
  optionsAllowlist: {},
  passport: {},
  resourceConfig: {},
  rollbackDescription: {},
  rollingRelease: {},
  speedInsights: {},
  ssoProtection: {},
  staticIps: {},
  usageStatus: {},
  webAnalytics: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Project().load({ id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `VercelSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new VercelSDK({
  feature: {
    test: { active: true },
  }
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

