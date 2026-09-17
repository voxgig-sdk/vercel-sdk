# Vercel API

Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 69 entities and 415 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AccessGroup](docs/api/access_group.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `accessGroupId`: ID of the access group.
- `createdAt`: Timestamp in milliseconds when the access group was created.
- `membersCount`: Number of members in the access group.
- `membersToAdd`: List of members to add to the access group.
- `membersToRemove`: List of members to remove from the access group.

### [AiGateway](docs/api/ai_gateway.html)

SDK operations: `remove`.

### [AiGatewayRule](docs/api/ai_gateway_rule.html)

SDK operations: `create`, `update`.

### [AiGatewayRuleList](docs/api/ai_gateway_rule_list.html)

SDK operations: `list`.

### [AiGatewayVirtualModelConfig](docs/api/ai_gateway_virtual_model_config.html)

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `allowFallbackFromFast`: Allow fallback from fast to standard providers on failure.
- `baseUrl`: For kind=relay: URL the gateway forwards requests to as a transparent proxy.
- `byokCredentialIds`: BYOK credential IDs allowed for this VMC.
- `caching`: Use caching if available.
- `createdAt`: Creation timestamp (epoch ms).

### [AiGatewayVirtualModelConfigList](docs/api/ai_gateway_virtual_model_config_list.html)

SDK operations: `list`.

Key fields to recognise:

- `allowFallbackFromFast`: Allow fallback from fast to standard providers on failure.
- `baseUrl`: For kind=relay: URL the gateway forwards requests to as a transparent proxy.
- `byokCredentialIds`: BYOK credential IDs allowed for this VMC.
- `caching`: Use caching if available.
- `createdAt`: Creation timestamp (epoch ms).

### [Alias](docs/api/alias.html)

Results: The alias was successfully assigned to the deployment; The paginated list of aliases; The list of aliases assigned to the deployment; The alias information; The alias was successfully removed.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `alias`: The assigned alias name
- `created`: The date when the alias was created
- `createdAt`: The date when the alias was created in milliseconds since the UNIX epoch
- `creator`: Information of the user who created the alias
- `deletedAt`: The date when the alias was deleted in milliseconds since the UNIX epoch

### [ApiAiGateway](docs/api/api_ai_gateway.html)

SDK operations: `load`, `remove`.

### [ApiKey](docs/api/api_key.html)

Results: Successfully created an API key.

SDK operations: `create`.

Key fields to recognise:

- `activeAt`: Timestamp (in milliseconds) of when the API key was most recently used.
- `aiGatewayQuota`: Optional AI Gateway quota configuration for the API key.
- `createdAt`: Timestamp (in milliseconds) of when the API key was created.
- `createdBy`: The ID of the user who created the API key.
- `createdByAppId`: The ID of the app that created the API key, if any

### [Artifact](docs/api/artifact.html)

Results: Success. Event recorded.; The artifact was found and is downloaded as a stream. Content-Length should be verified.; Success. All cache artifacts for the account were deleted.; File successfully uploaded.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `hashes`: artifact hashes

### [Authentication](docs/api/authentication.html)

Results: Successful response.; Authentication token successfully deleted.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `activeAt`: Timestamp (in milliseconds) of when the token was most recently used.
- `createdAt`: Timestamp (in milliseconds) of when the token was created.
- `expiresAt`: Timestamp (in milliseconds) of when the token expires.
- `id`: The unique identifier of the token.
- `leakedAt`: Timestamp (in milliseconds) of when the token was marked as leaked.

### [Billing](docs/api/billing.html)

SDK operations: `create`, `load`.

### [BulkRedirect](docs/api/bulk_redirect.html)

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `alias`: The staging link for previewing redirects in this version.
- `id`: The unique identifier for the version.
- `isLive`: Whether this version is currently live in production.
- `isStaging`: Whether this version has not been promoted to production yet and is not serving end users.
- `key`: The key of the version. The key may be duplicated across versions if the contents are the same as a different version.

### [Cert](docs/api/cert.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `ca`: The certificate authority
- `cert`: The certificate
- `cns`: The common names the cert should be issued for
- `key`: The certificate key
- `skipValidation`: Skip validation of the certificate

### [Check](docs/api/check.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `blocking`: Whether the check should block a deployment from succeeding
- `conclusion`: The result of the check being run
- `detailsUrl`: URL to display for further details
- `externalId`: An identifier that can be used as an external reference
- `name`: The name of the check being created

### [ChecksV2](docs/api/checks_v2.html)

SDK operations: `create`, `list`, `load`, `update`.

### [Connect](docs/api/connect.html)

Results: The connector was disconnected from the project.; The connector, its project connections, and its installation records were deleted.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `authorizationId`: Stable id correlating all tokens (including refreshes) back to the original authorization.
- `claims`: Claims extracted from the provider&#39;s tokens per the connector&#39;s `ForwardedClaims` allow-list. Currently sourced from the OIDC id_token only.
- `displayName`: Provider-facing display name when the connector type exposes one, falling back to the stored connector name.
- `id`: Client id (for example `scl_…`).
- `metadata`: Driver-specific metadata (for example, botUserId for Slack).

### [ConnectConnector](docs/api/connect_connector.html)

Results: The connector was created.; The connector.; The connector with its replaced trigger destinations.; The updated connector and any required service-side follow-up signals.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `accentColor`: Hex accent color (for example, `#000000`) for branding.
- `appTokens`: App-token capabilities and known grants for the connector.
- `backgroundColor`: Hex background color (for example, `#000000`) for branding.
- `clientUrl`: Provider-side URL for viewing or managing the resource represented by the connector. The destination can be an app, account, phone line, or service instance, depending on the connector type.
- `connectionMethod`: The connection method this connector was created from, when the create request named one.

### [ConnectConnectorList](docs/api/connect_connector_list.html)

Results: A page of connectors.

SDK operations: `list`.

Key fields to recognise:

- `accentColor`: Hex accent color (for example, `#000000`) for branding.
- `appTokens`: App-token capabilities and known grants for the connector.
- `backgroundColor`: Hex background color (for example, `#000000`) for branding.
- `clientUrl`: Provider-side URL for viewing or managing the resource represented by the connector. The destination can be an app, account, phone line, or service instance, depending on the connector type.
- `connectionMethod`: The connection method this connector was created from, when the create request named one.

### [ConnectConnectorProjectConnectionList](docs/api/connect_connector_project_connection_list.html)

Results: A page of project connections for the connector.

SDK operations: `list`.

Key fields to recognise:

- `connectorId`: Stable `scl_` connector ID, even when the request used a UID.
- `createdAt`: Time when the project connection was created, in epoch milliseconds.
- `enabledEnvironments`: Environments where the connector is enabled for the project.
- `project`: Vercel project connected to the connector.
- `updatedAt`: Time when the project connection was last updated, in epoch milliseconds.

### [ConnectProjectConnection](docs/api/connect_project_connection.html)

Results: The connector project connection was created or updated.; The connector project connection.

SDK operations: `create`, `load`.

Key fields to recognise:

- `connectorId`: Stable `scl_` connector ID, even when the request used a UID.
- `createdAt`: Time when the project connection was created, in epoch milliseconds.
- `enabledEnvironments`: Environments where the connector is enabled for the project.
- `environments`: One or more built-in environment names or stable custom environment IDs that belong to the project.
- `project`: Vercel project connected to the connector.

### [ConnectProjectConnectorConnectionList](docs/api/connect_project_connector_connection_list.html)

Results: A page of connector connections for the project.

SDK operations: `list`.

Key fields to recognise:

- `connectorId`: Stable `scl_` connector ID, even when the request used a UID.
- `createdAt`: Time when the project connection was created, in epoch milliseconds.
- `enabledEnvironments`: Environments where the connector is enabled for the project.
- `project`: Vercel project connected to the connector.
- `updatedAt`: Time when the project connection was last updated, in epoch milliseconds.

### [Deployment](docs/api/deployment.html)

Results: File already uploaded File successfully uploaded; Returns the newly created deployment object. Poll `readyState` to track build progress. See https://vercel.com/docs/deployments/deployment-states for possible states. Returns the reduced deployment view for anonymous (`vcn_`) callers. Pool-team details are withheld.; Returns a reduced view of the deployment with public information only. Private fields are omitted when the requester is not the deployment owner. Returns the deployment object for the authenticated owner, including private fields such as environment variables, build log URLs, and internal metadata. Returns the reduced deployment view for anonymous (`vcn_`) callers. Pool-team details are withheld.; The deployment was successfully deleted; Returns the updated deployment object with `readyState` set to `CANCELED`. The build has been stopped and this action is irreversible.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `aliasError`: An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`
- `attribution`: Attribution metadata for the deployment, linking commit author to git and Vercel users. Only populated when the `enable-deployment-attribution` flag is enabled.
- `buildMachine`: Build machine configuration recorded for this deployment&#39;s build. See &#123;@link DeploymentBuildMachine&#125;. Distinct from the team/user `resourceConfig.buildMachine`, which only carries `default`.
- `buildingAt`: Timestamp of when the deployment started building at.
- `checks`: Detailed information about v2 deployment checks. Includes information about blocked workflows in the deployment lifecycle.

### [Dns](docs/api/dns.html)

Results: Successful response showing the uid of the newly created DNS record.; Successful response retrieving a list of paginated DNS records.; Successful response by removing the specified DNS record.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `comment`: A comment to add context on what this DNS record is for
- `mxPriority`: The MX priority value of the DNS record
- `name`: The name of the DNS record
- `ttl`: The Time to live (TTL) value of the DNS record
- `type`: The type of record, it could be one of the valid DNS records.

### [Domain](docs/api/domain.html)

Results: Domain ownership successfully claimed.; Successful response retrieving project domains for an apex domain.; Successful response retrieving a list of domains.; Successful response retrieving an information for a specific domains.; Returns the TXT record needed to verify domain ownership.; Successful response removing a domain.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `boughtAt`: If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.
- `createdAt`: Timestamp in milliseconds when the domain was created in the registry.
- `creator`: An object containing information of the domain creator, including the user&#39;s id, username, and email.
- `customNameservers`: A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.
- `echMode`: Whether the domain is enrolled in Encrypted Client Hello. `auto` leaves the decision to Vercel, `enabled` always enrolls, and `disabled` never enrolls and opts out of automatic enrollment.

### [DomainsRegistrar](docs/api/domains_registrar.html)

Results: Success; The registrant contact has been verified.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `authCode`: The auth code for the domain.
- `autoRenew`: Whether the domain should be auto-renewed before it expires.
- `contactInformation`: The contact information for the domain.
- `domains`: an array of at most 50 item(s)
- `languageCode`: The language code for the domain.

### [Drain](docs/api/drain.html)

SDK operations: `create`, `load`, `remove`, `update`.

### [EdgeCache](docs/api/edge_cache.html)

SDK operations: `create`.

### [Env](docs/api/env.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `applyToAllCustomEnvironments`: whether or not this env varible applies to custom environments
- `comment`: A user provided comment that describes what this Shared Env Var is for.
- `created`: The date when the Shared Env Var was created.
- `createdAt`: Timestamp for when the Shared Env Var was created.
- `createdBy`: The unique identifier of the user who created the Shared Env Var.

### [Environment](docs/api/environment.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `branchMatcher`: Configuration for matching git branches to this environment
- `copyEnvVarsFrom`: Where to copy environment variables from.
- `createdAt`: Timestamp when the environment was created
- `currentDeploymentAliases`: List of aliases for the current deployment
- `description`: Optional description of the environment&#39;s purpose

### [FeatureFlag](docs/api/feature_flag.html)

SDK operations: `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `createdBy`: The user who created this patch
- `data`: The data of the segment
- `description`: A description of the flag
- `environments`: The configuration for the flag in different environments
- `kind`: The kind of flag

### [File](docs/api/file.html)

Results: Retrieved the file tree successfully.

SDK operations: `list`.

Key fields to recognise:

- `children`: The list of children files of the directory (only valid for the `directory` type)
- `contentType`: The content-type of the file (only valid for the `file` type)
- `mode`: The file &quot;mode&quot; indicating file type and permissions.
- `name`: The name of the file tree entry
- `type`: String indicating the type of file tree entry.

### [Flag](docs/api/flag.html)

SDK operations: `load`.

### [FlagsSdkKeyWithSecret](docs/api/flags_sdk_key_with_secret.html)

SDK operations: `update`.

Key fields to recognise:

- `keyValue`: Cleartext value of the SDK key.
- `partialKeyValue`: Partially-masked representation of the SDK key value, safe to display in UIs. The value is the `vf_&lt;type&gt;_` prefix followed by the first 3 characters of the secret portion and a fixed 8-character `*` mask (for example `vf_server_abc********`).
- `tokenValue`: Cleartext value of the Global Config token, when the project has a Global Config connection.

### [GlobalConfig](docs/api/global_config.html)

Results: The Global Config.; List of all global configs.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `createdBy`: The ID of the user who created the Global Config, optional because it is not always set.
- `slug`: Name for the Global Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
- `syncedToDynamoAt`: Timestamp of when the Global Config was synced to DynamoDB initially. It is only set when syncing the entire Global Config, not when updating.
- `transfer`: Keeps track of the current state of the Global Config while it gets transferred.

### [GlobalConfigItem](docs/api/global_config_item.html)

Results: List of all Global Config items.; The Global Config.

SDK operations: `list`, `load`.

### [GlobalConfigToken](docs/api/global_config_token.html)

Results: The Global Config.

SDK operations: `load`.

Key fields to recognise:

- `id`: This is not the token itself, but rather an id to identify the token by
- `partialToken`: A partially-masked representation of the token, safe to display in UIs. The format is the first 3 characters of the token followed by a fixed 8-character `*` mask (for example `550e8400-e29b-41d4-a716-446655440000` → `550********`). The mask length is intentionally fixed (not proportional to the original token length) to avoid leaking the token length. Prefer this field for display/reference in UIs and logs. The full, plaintext token is only disclosed once at creation time via `POST /v1/edge-config/:edgeConfigId/token`; use `id` to reference a token in subsequent calls (for example when deleting).
- `token`: Deprecated: the full, plaintext token. - Returned once by `POST /v1/edge-config/:edgeConfigId/token` (create). - Still returned by `GET /v1/edge-config/:edgeConfigId/token/:token` (detail) for backwards compatibility, but scheduled for removal. - **Not** returned by `GET /v1/edge-config/:edgeConfigId/tokens` (list); use `partialToken` for display and `id` to reference tokens. Do not rely on this field being present on read operations. Prefer `partialToken` for display and `id` for references.

### [Integration](docs/api/integration.html)

Results: List of products available for this integration configuration; The list of configurations for the authenticated user; The configuration with the provided id; The configuration was successfully removed.

SDK operations: `create`, `list`, `load`, `remove`.

### [Kms](docs/api/kms.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `activation`: Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint.
- `algorithm`: Algorithm of the signing key.
- `claims`: The claims to include in the token.
- `claimsSchema`: A JSON Schema used to validate the resolved token claims when signing tokens for this issuer.
- `environments`: Environments whose OIDC tokens this grant authorizes. Each entry is either a system environment slug (`production`, `preview`, `development`) or a custom environment ID (prefixed `env_`). Custom environments are matched against the token&#39;s `custom_environment_id` claim (the stable ID); system environments against its `environment` claim.

### [ListEventType](docs/api/list_event_type.html)

SDK operations: `list`.

### [Log](docs/api/log.html)

SDK operations: `load`.

### [LogDrain](docs/api/log_drain.html)

Results: The log drain was successfully created; A list of log drains; The log drain was successfully deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `branch`: The branch regexp of log drain
- `clientId`: The oauth2 client application id that created this log drain
- `configurationId`: The client configuration this log drain was created with
- `createdAt`: A timestamp that tells you when the log drain was created
- `createdFrom`: Whether the log drain was created by an integration or by a user

### [Marketplace](docs/api/marketplace.html)

Results: The items were created; The Global Config data; The item was updated; The item was deleted; The Global Config was updated.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `billing`: Billing data (interim invoicing data).
- `billingPlanId`: The ID of the billing plan the resource is subscribed to, if applicable
- `created`: System creation date. ISO 8601 timestamp.
- `discounts`: Invoice discounts.
- `eod`: End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time.

### [Microfrontend](docs/api/microfrontend.html)

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `deploymentExpiration`: Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects.
- `deploymentPolicy`: Project shape. `null` on a rule list clears the project&#39;s override for that rule type (fall back to team for every env); omitting is equivalent. Setting `deploymentPolicy` itself to `null` clears every override at once. Kept structurally distinct from &#123;@link TeamDeploymentPolicy&#125; so the two storage locations don&#39;t share a type by accident.
- `options`: Optional configuration options for the microfrontend.
- `rollbackDescription`: Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.
- `rollingRelease`: Project-level rolling release configuration that defines how deployments should be gradually rolled out

### [Network](docs/api/network.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `awsAccountId`: The ID of the AWS Account in which the network exists.
- `awsAvailabilityZoneIds`: The IDs of the AWS Availability Zones in which the network exists, if specified during creation.
- `awsRegion`: The AWS Region in which the network exists.
- `cidr`: The CIDR range of the Network.
- `createdAt`: The date at which the Network was created, represented as a UNIX timestamp since EPOCH.

### [Networking](docs/api/networking.html)

Results: The PrivateLink endpoint was deleted.

SDK operations: `remove`, `update`.

Key fields to recognise:

- `builds`: Whether to use Static IPs for builds.

### [Observability](docs/api/observability.html)

SDK operations: `list`, `update`.

Key fields to recognise:

- `disabled`: Whether Observability Plus should be disabled for the project

### [PrivateLinkEndpoint](docs/api/private_link_endpoint.html)

Results: The PrivateLink endpoint was created and is being provisioned.; The PrivateLink endpoints of the project.; The requested PrivateLink endpoint.; The updated PrivateLink endpoint.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `awsDnsEntries`: The regional DNS names assigned to the endpoint by AWS. Use these to reach the service when private DNS is not enabled.
- `awsServiceName`: The AWS VPC endpoint service the endpoint connects to.
- `createdAt`: Timestamp in milliseconds since the UNIX epoch for when the endpoint was created.
- `enablePrivateDns`: Whether to resolve the endpoint service through its private DNS names, which are then returned in `privateDnsNames`.
- `endpointId`: The unique identifier of the PrivateLink endpoint.

### [Project](docs/api/project.html)

Results: The domain was updated successfuly; The environment variable was created successfully; The project domain was verified successfully Domain is already verified; The domain was successfully added to the project; The project transfer request has been initiated successfully.; The project was successfuly created; Successful response retrieving a list of domains; The list of environment variables for the given project; The project information; The project was successfully updated; The environment variable was successfully removed; The domain was succesfully removed from the project; The project was successfuly removed; The project has been transferred successfully.

SDK operations: `create`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `buildCommand`: The build command for this project.
- `comment`: A comment to add context on what this env var is for
- `connectConfigurations`: The list of connections from project environment to Secure Compute network
- `customEnvironmentIds`: The custom environments that the environment variable should be synced to
- `customerSupportCodeVisibility`: Specifies whether customer support can see git source for a deployment

### [ProjectMember](docs/api/project_member.html)

Results: Responds with the project ID on success.; Paginated list of members for the project.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `email`: The email of this member.
- `role`: Role of this user in the project.
- `uid`: The ID of this user.
- `username`: The unique username of this user.

### [ProjectRoute](docs/api/project_route.html)

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `alias`: The staging alias for previewing this version.
- `createdBy`: The user who created this version.
- `id`: Unique identifier for the routing rule.
- `isLive`: Whether this version is currently live in production.
- `isStaging`: Whether this version is staged and not yet promoted to production.

### [Query](docs/api/query.html)

SDK operations: `create`.

Key fields to recognise:

- `aggregation`: Aggregation function to apply.
- `bucketTimezone`: IANA timezone (for example
- `endTime`: End timestamp
- `filter`: Filter to apply to the query.
- `granularity`: Time bucket size

### [Record](docs/api/record.html)

SDK operations: `load`.

### [RollingRelease](docs/api/rolling_release.html)

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `activeStage`: The currently active stage, null if the rollout is aborted
- `advancementType`: The advancement type of the rolling release
- `canaryDeployment`: The canary deployment being rolled out
- `currentCanaryPercentage`: When set (for example while &#123;@link substate&#125; is `PAUSED`), the canary traffic percentage persisted on the rollout document, use for dashboard display when linear shift is active.
- `currentDeployment`: The current deployment receiving production traffic

### [Sandbox](docs/api/sandbox.html)

Results: The command was terminated successfully.; The files were successfully written to the session.; The session timeout was extended successfully.; The directory was created successfully.; The session network policy was updated successfully.; The session was stopped successfully.; The list of commands executed in the session.; The list of sessions matching the request filters.; The command data along with the exit code if the command did finish.; The session was retrieved successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `args`: The arguments of the command.
- `command`: This object represents a command run in a Vercel Sandbox session (v2 API).
- `createdAt`: The time when the named sandbox was created, in milliseconds since the epoch.
- `creationMethod`: The method used to create the snapshot.
- `currentSandboxName`: Current sandbox name the drive is attached to, if any.

### [Schema](docs/api/schema.html)

SDK operations: `list`, `load`.

### [Security](docs/api/security.html)

Results: If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `crs`: Custom Ruleset
- `projectScope`: If the specified bypass will apply to all domains for a project.
- `ttl`: Time to live in milliseconds

### [Segment](docs/api/segment.html)

SDK operations: `load`.

### [Storage](docs/api/storage.html)

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `kind`: A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. Undefined for legacy stores.
- `projectId`: The project this store is scoped to. Set for project-default stores and user-created stores with enforced project association.

### [Team](docs/api/team.html)

Results: Successfully joined a team.; Successfuly requested access to the team.; The team was created successfully; A paginated list of teams.; The requested team; Successfully; The Team was successfully deleted; Successfully removed a member of the team.; Successfully deleted Team invite code.; Successfully updated the membership.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `accessRequestedAt`: Timestamp in milliseconds for when this team member was accepted by an owner.
- `apiKeysInvalidatedAt`: Timestamp (ms) after which API keys created at or before this time are considered invalid for this team.
- `appTokensInvalidatedAt`: Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team.
- `attribution`: Attribution information for the session or current page
- `avatar`: ID of the file for the Avatar of this member.

### [TldName](docs/api/tld_name.html)

Results: A list of the TLDs supported by Vercel.

SDK operations: `list`.

### [Toggle](docs/api/toggle.html)

SDK operations: `create`.

### [User](docs/api/user.html)

Results: Successful response.; Response indicating that the User deletion process has been initiated, and a confirmation email has been sent.

SDK operations: `list`, `load`, `remove`.

Key fields to recognise:

- `categories`: The categories that group this event with related event types. An event can belong to multiple categories (for example a firewall event is both Firewall and Security). The first entry is the &quot;primary&quot; category. Use the `/events/types` endpoint to discover the full list of categories.
- `createdAt`: Timestamp (in milliseconds) of when the event was generated.
- `entities`: A list of &quot;entities&quot; within the event `text`. Useful for enhancing the displayed text with additional styling and links.
- `id`: The unique identifier of the Event.
- `principalId`: The ID of the principal who generated the event. The principal is typically a user, but it could also be an app, an integration, etc. The principal may have delegated its authority to an acting party, and so &#123;@link viaIds&#125; should be checked as well.

### [Vcr](docs/api/vcr.html)

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `arch`: CPU architecture the manifest targets. Only present for single-platform manifests.
- `createdAt`: ISO 8601 timestamp of when the permission was created.
- `id`: Unique identifier of the repository.
- `imageId`: Internal identifier of the image the tag points at.
- `kind`: Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation.

### [VcrImageList](docs/api/vcr_image_list.html)

SDK operations: `list`.

Key fields to recognise:

- `arch`: CPU architecture the manifest targets. Only present for single-platform manifests.
- `createdAt`: ISO 8601 timestamp of when the image was created.
- `id`: Internal identifier of the image.
- `kind`: Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation.
- `manifestDigest`: SHA-256 digest of the image manifest.

### [VcrRepositoryList](docs/api/vcr_repository_list.html)

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: ISO 8601 timestamp of when the repository was created.
- `id`: Unique identifier of the repository.
- `name`: Name of the repository.
- `projectId`: Identifier of the project the repository belongs to.
- `public`: Whether the repository is public. Images in public repositories can be pulled by anyone. Defaults to `false` (private).

### [VcrRepositoryPermissionList](docs/api/vcr_repository_permission_list.html)

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: ISO 8601 timestamp of when the permission was created.
- `repositoryId`: Identifier of the repository the permission grants access to.
- `teamId`: Identifier of the team that is granted access to the repository.
- `teamSlug`: Slug of the team that is granted access to the repository.

### [WebAnalytics](docs/api/web_analytics.html)

SDK operations: `load`.

### [Webhook](docs/api/webhook.html)

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `createdAt`: A number containing the date when the webhook was created in milliseconds
- `events`: The webhooks events
- `id`: The webhook id
- `ownerId`: The unique ID of the team the webhook belongs to
- `projectIds`: The ID of the projects the webhook is associated with

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [AccessGroup](docs/api/access_group.html) | `create` | `POST /v1/access-groups/{accessGroupIdOrName}/projects` | Required |
| [AccessGroup](docs/api/access_group.html) | `create` | `POST /v1/access-groups/{idOrName}` | Required |
| [AccessGroup](docs/api/access_group.html) | `create` | `POST /v1/access-groups` | Required |
| [AccessGroup](docs/api/access_group.html) | `list` | `GET /v1/access-groups/{idOrName}/members` | Required |
| [AccessGroup](docs/api/access_group.html) | `list` | `GET /v1/access-groups/{idOrName}/projects` | Required |
| [AccessGroup](docs/api/access_group.html) | `load` | `GET /v1/access-groups` | Required |
| [AccessGroup](docs/api/access_group.html) | `load` | `GET /v1/access-groups/{accessGroupIdOrName}/projects/{projectId}` | Required |
| [AccessGroup](docs/api/access_group.html) | `load` | `GET /v1/access-groups/{idOrName}` | Required |
| [AccessGroup](docs/api/access_group.html) | `remove` | `DELETE /v1/access-groups/{accessGroupIdOrName}/projects/{projectId}` | Required |
| [AccessGroup](docs/api/access_group.html) | `remove` | `DELETE /v1/access-groups/{idOrName}` | Required |
| [AccessGroup](docs/api/access_group.html) | `update` | `PATCH /v1/access-groups/{accessGroupIdOrName}/projects/{projectId}` | Required |
| [AiGateway](docs/api/ai_gateway.html) | `remove` | `DELETE /v1/ai-gateway/rules` | Required |
| [AiGatewayRule](docs/api/ai_gateway_rule.html) | `create` | `POST /v1/ai-gateway/rules` | Required |
| [AiGatewayRule](docs/api/ai_gateway_rule.html) | `update` | `PATCH /v1/ai-gateway/rules` | Required |
| [AiGatewayRuleList](docs/api/ai_gateway_rule_list.html) | `list` | `GET /v1/ai-gateway/rules` | Required |
| [AiGatewayVirtualModelConfig](docs/api/ai_gateway_virtual_model_config.html) | `create` | `POST /v1/ai-gateway/virtual-model-configs` | Required |
| [AiGatewayVirtualModelConfig](docs/api/ai_gateway_virtual_model_config.html) | `load` | `GET /v1/ai-gateway/virtual-model-configs/{vmcSlug}` | Required |
| [AiGatewayVirtualModelConfig](docs/api/ai_gateway_virtual_model_config.html) | `update` | `PATCH /v1/ai-gateway/virtual-model-configs/{vmcSlug}` | Required |
| [AiGatewayVirtualModelConfig](docs/api/ai_gateway_virtual_model_config.html) | `update` | `PATCH /v1/ai-gateway/virtual-model-configs` | Required |
| [AiGatewayVirtualModelConfigList](docs/api/ai_gateway_virtual_model_config_list.html) | `list` | `GET /v1/ai-gateway/virtual-model-configs/list` | Required |
| [Alias](docs/api/alias.html) | `create` | `POST /v2/deployments/{id}/aliases` | Required |
| [Alias](docs/api/alias.html) | `list` | `GET /v4/aliases` | Required |
| [Alias](docs/api/alias.html) | `list` | `GET /v2/deployments/{id}/aliases` | Required |
| [Alias](docs/api/alias.html) | `load` | `GET /v4/aliases/{idOrAlias}` | Required |
| [Alias](docs/api/alias.html) | `remove` | `DELETE /v2/aliases/{aliasId}` | Required |
| [Alias](docs/api/alias.html) | `update` | `PATCH /aliases/{id}/protection-bypass` | Required |
| [ApiAiGateway](docs/api/api_ai_gateway.html) | `load` | `GET /v1/ai-gateway/virtual-model-configs` | Required |
| [ApiAiGateway](docs/api/api_ai_gateway.html) | `remove` | `DELETE /v1/ai-gateway/virtual-model-configs` | Required |
| [ApiAiGateway](docs/api/api_ai_gateway.html) | `remove` | `DELETE /v1/ai-gateway/virtual-model-configs/{vmcSlug}` | Required |
| [ApiKey](docs/api/api_key.html) | `create` | `POST /api-keys` | Not required |
| [Artifact](docs/api/artifact.html) | `create` | `POST /v8/artifacts/events` | Required |
| [Artifact](docs/api/artifact.html) | `create` | `POST /v8/artifacts` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /v8/artifacts/{hash}` | Required |
| [Artifact](docs/api/artifact.html) | `load` | `GET /v8/artifacts/status` | Required |
| [Artifact](docs/api/artifact.html) | `remove` | `DELETE /v8/artifacts` | Required |
| [Artifact](docs/api/artifact.html) | `update` | `PUT /v8/artifacts/{hash}` | Required |
| [Authentication](docs/api/authentication.html) | `create` | `POST /v3/user/tokens` | Required |
| [Authentication](docs/api/authentication.html) | `create` | `POST /v1/integrations/sso/token` | Not required |
| [Authentication](docs/api/authentication.html) | `load` | `GET /v5/user/tokens/{tokenId}` | Required |
| [Authentication](docs/api/authentication.html) | `load` | `GET /v6/user/tokens` | Required |
| [Authentication](docs/api/authentication.html) | `remove` | `DELETE /v3/user/tokens/{tokenId}` | Required |
| [Billing](docs/api/billing.html) | `create` | `POST /v1/billing/buy` | Required |
| [Billing](docs/api/billing.html) | `load` | `GET /v1/billing/charges` | Required |
| [Billing](docs/api/billing.html) | `load` | `GET /v1/billing/contract-commitments` | Required |
| [BulkRedirect](docs/api/bulk_redirect.html) | `create` | `POST /v1/bulk-redirects/restore` | Required |
| [BulkRedirect](docs/api/bulk_redirect.html) | `create` | `POST /v1/bulk-redirects/versions` | Required |
| [BulkRedirect](docs/api/bulk_redirect.html) | `list` | `GET /v1/bulk-redirects/versions` | Required |
| [BulkRedirect](docs/api/bulk_redirect.html) | `load` | `GET /v1/bulk-redirects` | Required |
| [BulkRedirect](docs/api/bulk_redirect.html) | `patch` | `PATCH /v1/bulk-redirects` | Required |
| [BulkRedirect](docs/api/bulk_redirect.html) | `remove` | `DELETE /v1/bulk-redirects` | Required |
| [BulkRedirect](docs/api/bulk_redirect.html) | `update` | `PUT /v1/bulk-redirects` | Required |
| [Cert](docs/api/cert.html) | `create` | `POST /v8/certs` | Required |
| [Cert](docs/api/cert.html) | `list` | `GET /v8/certs` | Required |
| [Cert](docs/api/cert.html) | `load` | `GET /v8/certs/{id}` | Required |
| [Cert](docs/api/cert.html) | `remove` | `DELETE /v8/certs/{id}` | Required |
| [Cert](docs/api/cert.html) | `update` | `PUT /v8/certs` | Required |
| [Check](docs/api/check.html) | `create` | `POST /v1/deployments/{deploymentId}/checks/{checkId}/rerequest` | Required |
| [Check](docs/api/check.html) | `create` | `POST /v1/deployments/{deploymentId}/checks` | Required |
| [Check](docs/api/check.html) | `create` | `POST /v2/projects/{projectIdOrName}/checks` | Required |
| [Check](docs/api/check.html) | `list` | `GET /v2/projects/{projectIdOrName}/checks` | Required |
| [Check](docs/api/check.html) | `list` | `GET /v1/deployments/{deploymentId}/checks` | Required |
| [Check](docs/api/check.html) | `load` | `GET /v1/deployments/{deploymentId}/checks/{checkId}` | Required |
| [Check](docs/api/check.html) | `load` | `GET /v2/projects/{projectIdOrName}/checks/{checkId}` | Required |
| [Check](docs/api/check.html) | `remove` | `DELETE /v2/projects/{projectIdOrName}/checks/{checkId}` | Required |
| [Check](docs/api/check.html) | `update` | `PATCH /v1/deployments/{deploymentId}/checks/{checkId}` | Required |
| [Check](docs/api/check.html) | `update` | `PATCH /v2/projects/{projectIdOrName}/checks/{checkId}` | Required |
| [ChecksV2](docs/api/checks_v2.html) | `create` | `POST /v2/deployments/{deploymentId}/check-runs` | Required |
| [ChecksV2](docs/api/checks_v2.html) | `list` | `GET /v2/projects/{projectIdOrName}/checks/{checkId}/runs` | Required |
| [ChecksV2](docs/api/checks_v2.html) | `list` | `GET /v2/deployments/{deploymentId}/check-runs` | Required |
| [ChecksV2](docs/api/checks_v2.html) | `load` | `GET /v2/deployments/{deploymentId}/check-runs/{checkRunId}` | Required |
| [ChecksV2](docs/api/checks_v2.html) | `update` | `PATCH /v2/deployments/{deploymentId}/check-runs/{checkRunId}` | Required |
| [Connect](docs/api/connect.html) | `create` | `POST /v1/connect/authorize/{connector}` | Required |
| [Connect](docs/api/connect.html) | `create` | `POST /v1/connect/token/{connector}` | Required |
| [Connect](docs/api/connect.html) | `remove` | `DELETE /v1/connect/connectors/{connector}/projects/{projectId}` | Required |
| [Connect](docs/api/connect.html) | `remove` | `DELETE /v1/connect/connectors/{connector}` | Required |
| [ConnectConnector](docs/api/connect_connector.html) | `create` | `POST /v1/connect/connectors` | Required |
| [ConnectConnector](docs/api/connect_connector.html) | `load` | `GET /v1/connect/connectors/{connector}` | Required |
| [ConnectConnector](docs/api/connect_connector.html) | `update` | `PATCH /v1/connect/connectors/{connector}/trigger-destinations` | Required |
| [ConnectConnector](docs/api/connect_connector.html) | `update` | `PATCH /v2/connect/connectors/{connector}` | Required |
| [ConnectConnectorList](docs/api/connect_connector_list.html) | `list` | `GET /v2/connect/connectors` | Required |
| [ConnectConnectorProjectConnectionList](docs/api/connect_connector_project_connection_list.html) | `list` | `GET /v2/connect/connectors/{connector}/projects` | Required |
| [ConnectProjectConnection](docs/api/connect_project_connection.html) | `create` | `POST /v1/connect/connectors/{connector}/projects/{projectId}` | Required |
| [ConnectProjectConnection](docs/api/connect_project_connection.html) | `load` | `GET /v1/connect/connectors/{connector}/projects/{projectId}` | Required |
| [ConnectProjectConnectorConnectionList](docs/api/connect_project_connector_connection_list.html) | `list` | `GET /v2/connect/projects/{projectId}/connectors` | Required |
| [Deployment](docs/api/deployment.html) | `create` | `POST /v2/files` | Required |
| [Deployment](docs/api/deployment.html) | `create` | `POST /v13/deployments` | Required |
| [Deployment](docs/api/deployment.html) | `list` | `GET /v7/deployments` | Required |
| [Deployment](docs/api/deployment.html) | `list` | `GET /v3/deployments/{idOrUrl}/events` | Required |
| [Deployment](docs/api/deployment.html) | `load` | `GET /v8/deployments/{id}/files/{fileId}` | Required |
| [Deployment](docs/api/deployment.html) | `load` | `GET /v13/deployments/{idOrUrl}` | Required |
| [Deployment](docs/api/deployment.html) | `remove` | `DELETE /v13/deployments/{id}` | Required |
| [Deployment](docs/api/deployment.html) | `update` | `PATCH /v1/deployments/{deploymentId}/integrations/{integrationConfigurationId}/resources/{resourceId}/actions/{action}` | Required |
| [Deployment](docs/api/deployment.html) | `update` | `PATCH /v12/deployments/{id}/cancel` | Required |
| [Dns](docs/api/dns.html) | `create` | `POST /v2/domains/{domain}/records` | Required |
| [Dns](docs/api/dns.html) | `load` | `GET /v5/domains/{domain}/records` | Required |
| [Dns](docs/api/dns.html) | `remove` | `DELETE /v2/domains/{domain}/records/{recordId}` | Required |
| [Dns](docs/api/dns.html) | `update` | `PATCH /v1/domains/records/{recordId}` | Required |
| [Domain](docs/api/domain.html) | `create` | `POST /v9/domains/{domain}/claim` | Required |
| [Domain](docs/api/domain.html) | `create` | `POST /v7/domains` | Required |
| [Domain](docs/api/domain.html) | `list` | `GET /v1/domains/{domain}/project-domains` | Required |
| [Domain](docs/api/domain.html) | `list` | `GET /v6/domains/{domain}/config` | Required |
| [Domain](docs/api/domain.html) | `list` | `GET /v5/domains` | Required |
| [Domain](docs/api/domain.html) | `load` | `GET /v5/domains/{domain}` | Required |
| [Domain](docs/api/domain.html) | `load` | `GET /v9/domains/{domain}/verification` | Required |
| [Domain](docs/api/domain.html) | `remove` | `DELETE /v6/domains/{domain}` | Required |
| [Domain](docs/api/domain.html) | `update` | `PATCH /v3/domains/{domain}` | Required |
| [Domain](docs/api/domain.html) | `update` | `PUT /domains/{domain}/records` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `create` | `POST /v1/registrar/domains/{domain}/buy` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `create` | `POST /v1/registrar/domains/{domain}/renew` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `create` | `POST /v1/registrar/domains/{domain}/transfer` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `create` | `POST /v1/registrar/domains/availability` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `create` | `POST /v1/registrar/domains/buy` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `create` | `POST /v1/registrar/domains/price` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `create` | `POST /v1/registrar/domains/search` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/domains/{domain}/price` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/tlds/{tld}/price` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/domains/{domain}/auth-code` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/domains/{domain}/availability` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/domains/{domain}/contact-info/schema` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/domains/{domain}/contact-verification` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/domains/{domain}/transfer` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/orders/{orderId}` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `load` | `GET /v1/registrar/tlds/{tld}` | Not required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `update` | `PATCH /v1/registrar/domains/{domain}/auto-renew` | Required |
| [DomainsRegistrar](docs/api/domains_registrar.html) | `update` | `PATCH /v1/registrar/domains/{domain}/nameservers` | Required |
| [Drain](docs/api/drain.html) | `create` | `POST /v1/drains` | Required |
| [Drain](docs/api/drain.html) | `create` | `POST /v1/drains/test` | Required |
| [Drain](docs/api/drain.html) | `load` | `GET /v1/drains` | Required |
| [Drain](docs/api/drain.html) | `load` | `GET /v1/drains/{id}` | Required |
| [Drain](docs/api/drain.html) | `remove` | `DELETE /v1/drains/{id}` | Required |
| [Drain](docs/api/drain.html) | `update` | `PATCH /v1/drains/{id}` | Required |
| [EdgeCache](docs/api/edge_cache.html) | `create` | `POST /v1/edge-cache/dangerously-delete-by-src-images` | Required |
| [EdgeCache](docs/api/edge_cache.html) | `create` | `POST /v1/edge-cache/dangerously-delete-by-tags` | Required |
| [EdgeCache](docs/api/edge_cache.html) | `create` | `POST /v1/edge-cache/invalidate-by-src-images` | Required |
| [EdgeCache](docs/api/edge_cache.html) | `create` | `POST /v1/edge-cache/invalidate-by-tags` | Required |
| [Env](docs/api/env.html) | `create` | `POST /v1/env` | Required |
| [Env](docs/api/env.html) | `list` | `GET /v1/env` | Required |
| [Env](docs/api/env.html) | `load` | `GET /v1/env/{id}` | Required |
| [Env](docs/api/env.html) | `remove` | `DELETE /v1/env` | Required |
| [Env](docs/api/env.html) | `update` | `PATCH /v1/env` | Required |
| [Environment](docs/api/environment.html) | `create` | `POST /v9/projects/{idOrName}/custom-environments` | Required |
| [Environment](docs/api/environment.html) | `list` | `GET /v9/projects/{idOrName}/custom-environments` | Required |
| [Environment](docs/api/environment.html) | `load` | `GET /v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}` | Required |
| [Environment](docs/api/environment.html) | `remove` | `DELETE /v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}` | Required |
| [Environment](docs/api/environment.html) | `update` | `PATCH /v1/env/{id}/unlink/{projectId}` | Required |
| [Environment](docs/api/environment.html) | `update` | `PATCH /v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v2/teams/{teamId}/feature-flags/flags` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v2/projects/{projectIdOrName}/feature-flags/flags` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v1/teams/{teamId}/feature-flags/flags` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v1/projects/{projectIdOrName}/feature-flags/flags` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}/versions` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v1/projects/{projectIdOrName}/feature-flags/segments` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v1/deployments/{deploymentId}/feature-flags` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v1/projects/{projectIdOrName}/feature-flags/sdk-keys` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `list` | `GET /v1/projects/{projectIdOrName}/feature-flags/settings` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `load` | `GET /v1/teams/{teamId}/feature-flags/settings` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `patch` | `PATCH /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `patch` | `PATCH /v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `patch` | `PATCH /v1/projects/{projectIdOrName}/feature-flags/settings` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `remove` | `DELETE /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `remove` | `DELETE /v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `remove` | `DELETE /v1/projects/{projectIdOrName}/feature-flags/sdk-keys/{hashKey}` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `update` | `PUT /v1/projects/{projectIdOrName}/feature-flags/flags` | Required |
| [FeatureFlag](docs/api/feature_flag.html) | `update` | `PUT /v1/projects/{projectIdOrName}/feature-flags/segments` | Required |
| [File](docs/api/file.html) | `list` | `GET /v6/deployments/{id}/files` | Required |
| [Flag](docs/api/flag.html) | `load` | `GET /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}` | Required |
| [FlagsSdkKeyWithSecret](docs/api/flags_sdk_key_with_secret.html) | `update` | `PUT /v1/projects/{projectIdOrName}/feature-flags/sdk-keys` | Required |
| [GlobalConfig](docs/api/global_config.html) | `create` | `POST /v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}/restore` | Required |
| [GlobalConfig](docs/api/global_config.html) | `create` | `POST /v1/global-config/{edgeConfigId}/schema` | Required |
| [GlobalConfig](docs/api/global_config.html) | `create` | `POST /v1/global-config/{edgeConfigId}/token` | Required |
| [GlobalConfig](docs/api/global_config.html) | `create` | `POST /v1/global-config` | Required |
| [GlobalConfig](docs/api/global_config.html) | `list` | `GET /v1/global-config/{edgeConfigId}/backups` | Required |
| [GlobalConfig](docs/api/global_config.html) | `load` | `GET /v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}` | Required |
| [GlobalConfig](docs/api/global_config.html) | `load` | `GET /v1/global-config/{edgeConfigId}` | Required |
| [GlobalConfig](docs/api/global_config.html) | `load` | `GET /v1/global-config/{edgeConfigId}/schema` | Required |
| [GlobalConfig](docs/api/global_config.html) | `load` | `GET /v1/global-config` | Required |
| [GlobalConfig](docs/api/global_config.html) | `patch` | `PATCH /v1/global-config/{edgeConfigId}/items` | Required |
| [GlobalConfig](docs/api/global_config.html) | `remove` | `DELETE /v1/global-config/{edgeConfigId}` | Required |
| [GlobalConfig](docs/api/global_config.html) | `remove` | `DELETE /v1/global-config/{edgeConfigId}/schema` | Required |
| [GlobalConfig](docs/api/global_config.html) | `remove` | `DELETE /v1/global-config/{edgeConfigId}/tokens` | Required |
| [GlobalConfig](docs/api/global_config.html) | `update` | `PUT /v1/global-config/{edgeConfigId}` | Required |
| [GlobalConfigItem](docs/api/global_config_item.html) | `list` | `GET /v1/global-config/{edgeConfigId}/items` | Required |
| [GlobalConfigItem](docs/api/global_config_item.html) | `load` | `GET /v1/global-config/{edgeConfigId}/item/{edgeConfigItemKey}` | Required |
| [GlobalConfigToken](docs/api/global_config_token.html) | `load` | `GET /v1/global-config/{edgeConfigId}/token/{token}` | Required |
| [GlobalConfigToken](docs/api/global_config_token.html) | `load` | `GET /v1/global-config/{edgeConfigId}/tokens` | Required |
| [Integration](docs/api/integration.html) | `create` | `POST /v1/integrations/installations/{integrationConfigurationId}/resources/{resourceId}/connections` | Required |
| [Integration](docs/api/integration.html) | `create` | `POST /v1/storage/stores/integration/direct` | Required |
| [Integration](docs/api/integration.html) | `list` | `GET /v1/integrations/integration/{integrationIdOrSlug}/products/{productIdOrSlug}/plans` | Required |
| [Integration](docs/api/integration.html) | `list` | `GET /v1/integrations/configuration/{id}/products` | Required |
| [Integration](docs/api/integration.html) | `list` | `GET /v1/integrations/git-namespaces` | Required |
| [Integration](docs/api/integration.html) | `load` | `GET /v1/integrations/search-repo` | Required |
| [Integration](docs/api/integration.html) | `load` | `GET /v1/integrations/configurations` | Required |
| [Integration](docs/api/integration.html) | `load` | `GET /v1/integrations/configuration/{id}` | Required |
| [Integration](docs/api/integration.html) | `remove` | `DELETE /v1/integrations/configuration/{id}` | Required |
| [Kms](docs/api/kms.html) | `create` | `POST /v1/kms/issuers/{issuerId}/keys/{keyId}/activate` | Required |
| [Kms](docs/api/kms.html) | `create` | `POST /v1/kms/issuers/{issuerId}/keys/{keyId}/revoke` | Required |
| [Kms](docs/api/kms.html) | `create` | `POST /v1/kms/issuers/{issuerId}/keys` | Required |
| [Kms](docs/api/kms.html) | `create` | `POST /v1/kms/issuers/{issuerId}/policies` | Required |
| [Kms](docs/api/kms.html) | `create` | `POST /v1/kms/issuers` | Required |
| [Kms](docs/api/kms.html) | `create` | `POST /v1/kms/issuers/{issuerId}/sign/message` | Required |
| [Kms](docs/api/kms.html) | `create` | `POST /v1/kms/issuers/{issuerId}/sign/token` | Required |
| [Kms](docs/api/kms.html) | `list` | `GET /v1/kms/issuers` | Required |
| [Kms](docs/api/kms.html) | `load` | `GET /v1/kms/issuers/{issuerId}` | Required |
| [Kms](docs/api/kms.html) | `remove` | `DELETE /v1/kms/issuers/{issuerId}/policies/{kind}/{policyKey}` | Required |
| [Kms](docs/api/kms.html) | `remove` | `DELETE /v1/kms/issuers/{issuerId}` | Required |
| [Kms](docs/api/kms.html) | `update` | `PATCH /v1/kms/issuers/{issuerId}/policies/{kind}/{policyKey}` | Required |
| [Kms](docs/api/kms.html) | `update` | `PATCH /v1/kms/issuers/{issuerId}` | Required |
| [ListEventType](docs/api/list_event_type.html) | `list` | `GET /v1/events/types` | Required |
| [Log](docs/api/log.html) | `load` | `GET /v1/projects/{projectId}/deployments/{deploymentId}/runtime-logs` | Required |
| [LogDrain](docs/api/log_drain.html) | `create` | `POST /v1/log-drains` | Required |
| [LogDrain](docs/api/log_drain.html) | `create` | `POST /v2/integrations/log-drains` | Required |
| [LogDrain](docs/api/log_drain.html) | `list` | `GET /v2/integrations/log-drains` | Required |
| [LogDrain](docs/api/log_drain.html) | `load` | `GET /v1/log-drains` | Required |
| [LogDrain](docs/api/log_drain.html) | `load` | `GET /v1/log-drains/{id}` | Required |
| [LogDrain](docs/api/log_drain.html) | `remove` | `DELETE /v1/integrations/log-drains/{id}` | Required |
| [LogDrain](docs/api/log_drain.html) | `remove` | `DELETE /v1/log-drains/{id}` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}/actions` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/billing` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/billing/balance` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/billing/finalize` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/billing/invoices` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/credentials/revoke` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/credentials/rotate` | Required |
| [Marketplace](docs/api/marketplace.html) | `create` | `POST /v1/installations/{integrationConfigurationId}/events` | Required |
| [Marketplace](docs/api/marketplace.html) | `list` | `GET /v1/installations/{integrationConfigurationId}/resources` | Required |
| [Marketplace](docs/api/marketplace.html) | `load` | `GET /v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `load` | `GET /v1/installations/{integrationConfigurationId}/member/{memberId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `load` | `GET /v1/installations/{integrationConfigurationId}/resources/{resourceId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `load` | `GET /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/global-config` | Required |
| [Marketplace](docs/api/marketplace.html) | `load` | `GET /v1/installations/{integrationConfigurationId}/account` | Required |
| [Marketplace](docs/api/marketplace.html) | `patch` | `PATCH /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `patch` | `PATCH /v1/installations/{integrationConfigurationId}/resources/{resourceId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `patch` | `PATCH /v1/installations/{integrationConfigurationId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `remove` | `DELETE /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `remove` | `DELETE /v1/installations/{integrationConfigurationId}/resources/{resourceId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `update` | `PUT /v1/installations/{integrationConfigurationId}/products/{integrationProductIdOrSlug}/resources/{resourceId}/secrets` | Required |
| [Marketplace](docs/api/marketplace.html) | `update` | `PUT /v1/installations/{integrationConfigurationId}/resources/{resourceId}` | Required |
| [Marketplace](docs/api/marketplace.html) | `update` | `PUT /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/global-config` | Required |
| [Marketplace](docs/api/marketplace.html) | `update` | `PUT /v1/installations/{integrationConfigurationId}/resources/{resourceId}/secrets` | Required |
| [Microfrontend](docs/api/microfrontend.html) | `create` | `POST /v1/microfrontends/group` | Required |
| [Microfrontend](docs/api/microfrontend.html) | `list` | `GET /v1/microfrontends/groups/{groupId}/projects` | Required |
| [Microfrontend](docs/api/microfrontend.html) | `load` | `GET /v1/microfrontends/{deploymentId}/config` | Required |
| [Microfrontend](docs/api/microfrontend.html) | `load` | `GET /v1/microfrontends/projects/{projectIdOrName}/production-mfe-config` | Required |
| [Microfrontend](docs/api/microfrontend.html) | `load` | `GET /v1/microfrontends/groups` | Required |
| [Network](docs/api/network.html) | `create` | `POST /v1/connect/networks` | Required |
| [Network](docs/api/network.html) | `list` | `GET /v1/connect/networks` | Required |
| [Network](docs/api/network.html) | `load` | `GET /v1/connect/networks/{networkId}` | Required |
| [Network](docs/api/network.html) | `remove` | `DELETE /v1/connect/networks/{networkId}` | Required |
| [Network](docs/api/network.html) | `update` | `PATCH /v1/connect/networks/{networkId}` | Required |
| [Networking](docs/api/networking.html) | `remove` | `DELETE /v1/networking/privatelink/endpoints/{endpointId}` | Required |
| [Networking](docs/api/networking.html) | `update` | `PATCH /v1/projects/{idOrName}/shared-connect-links` | Required |
| [Observability](docs/api/observability.html) | `list` | `GET /v1/observability/manage/configuration/projects` | Required |
| [Observability](docs/api/observability.html) | `update` | `PUT /v1/observability/manage/configuration/projects/{projectIdOrName}` | Required |
| [PrivateLinkEndpoint](docs/api/private_link_endpoint.html) | `create` | `POST /v1/networking/privatelink/endpoints` | Required |
| [PrivateLinkEndpoint](docs/api/private_link_endpoint.html) | `list` | `GET /v1/networking/privatelink/endpoints` | Required |
| [PrivateLinkEndpoint](docs/api/private_link_endpoint.html) | `load` | `GET /v1/networking/privatelink/endpoints/{endpointId}` | Required |
| [PrivateLinkEndpoint](docs/api/private_link_endpoint.html) | `update` | `PATCH /v1/networking/privatelink/endpoints/{endpointId}` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v1/projects/{projectId}/rollback/{deploymentId}` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v10/projects/{projectId}/promote/{deploymentId}` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v1/projects/{idOrName}/domains/{domain}/move` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v10/projects/{idOrName}/env` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v9/projects/{idOrName}/domains/{domain}/verify` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v1/projects/{idOrName}/avatar` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v10/projects/{idOrName}/domains` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v1/projects/{projectId}/pause` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v1/projects/{idOrName}/token` | Required |
| [Project](docs/api/project.html) | `create` | `POST /projects/{idOrName}/transfer-request` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v1/projects/{projectId}/unpause` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v1/projects/traces/session` | Required |
| [Project](docs/api/project.html) | `create` | `POST /v11/projects` | Required |
| [Project](docs/api/project.html) | `load` | `GET /v10/projects` | Required |
| [Project](docs/api/project.html) | `load` | `GET /v9/projects/{idOrName}/domains` | Required |
| [Project](docs/api/project.html) | `load` | `GET /v10/projects/{idOrName}/env` | Required |
| [Project](docs/api/project.html) | `load` | `GET /v1/projects/{projectId}/promote/aliases` | Required |
| [Project](docs/api/project.html) | `load` | `GET /v9/projects/{idOrName}/domains/{domain}` | Required |
| [Project](docs/api/project.html) | `load` | `GET /v1/projects/{idOrName}/env/{id}` | Required |
| [Project](docs/api/project.html) | `load` | `GET /v1/projects/traces` | Required |
| [Project](docs/api/project.html) | `load` | `GET /v9/projects/{idOrName}` | Required |
| [Project](docs/api/project.html) | `patch` | `PATCH /v9/projects/{idOrName}/domains/{domain}` | Required |
| [Project](docs/api/project.html) | `patch` | `PATCH /v9/projects/{idOrName}/env/{id}` | Required |
| [Project](docs/api/project.html) | `patch` | `PATCH /v1/projects/{projectId}/microfrontends` | Required |
| [Project](docs/api/project.html) | `patch` | `PATCH /v9/projects/{idOrName}` | Required |
| [Project](docs/api/project.html) | `patch` | `PATCH /v1/projects/{idOrName}/protection-bypass` | Required |
| [Project](docs/api/project.html) | `patch` | `PATCH /v1/projects/{projectId}/rollback/{deploymentId}/update-description` | Not required |
| [Project](docs/api/project.html) | `remove` | `DELETE /v9/projects/{idOrName}/env/{id}` | Required |
| [Project](docs/api/project.html) | `remove` | `DELETE /v9/projects/{idOrName}/domains/{domain}` | Required |
| [Project](docs/api/project.html) | `remove` | `DELETE /v9/projects/{idOrName}` | Required |
| [Project](docs/api/project.html) | `remove` | `DELETE /v1/projects/{idOrName}/env` | Required |
| [Project](docs/api/project.html) | `update` | `PUT /projects/transfer-request/{code}` | Required |
| [ProjectMember](docs/api/project_member.html) | `create` | `POST /v1/projects/{idOrName}/members` | Required |
| [ProjectMember](docs/api/project_member.html) | `load` | `GET /v1/projects/{idOrName}/members` | Required |
| [ProjectMember](docs/api/project_member.html) | `remove` | `DELETE /v1/projects/{idOrName}/members/{uid}` | Required |
| [ProjectRoute](docs/api/project_route.html) | `create` | `POST /v1/projects/{projectId}/routes` | Required |
| [ProjectRoute](docs/api/project_route.html) | `create` | `POST /v1/projects/{projectId}/routes/generate` | Required |
| [ProjectRoute](docs/api/project_route.html) | `create` | `POST /v1/projects/{projectId}/routes/versions` | Required |
| [ProjectRoute](docs/api/project_route.html) | `list` | `GET /v1/projects/{projectId}/routes/versions` | Required |
| [ProjectRoute](docs/api/project_route.html) | `load` | `GET /v1/projects/{projectId}/routes` | Required |
| [ProjectRoute](docs/api/project_route.html) | `patch` | `PATCH /v1/projects/{projectId}/routes/{routeId}` | Required |
| [ProjectRoute](docs/api/project_route.html) | `remove` | `DELETE /v1/projects/{projectId}/routes` | Required |
| [ProjectRoute](docs/api/project_route.html) | `update` | `PUT /v1/projects/{projectId}/routes` | Required |
| [Query](docs/api/query.html) | `create` | `POST /v2/observability/query` | Not required |
| [Record](docs/api/record.html) | `load` | `GET /domains/records/{recordId}` | Not required |
| [RollingRelease](docs/api/rolling_release.html) | `create` | `POST /v1/projects/{idOrName}/rolling-release/approve-stage` | Required |
| [RollingRelease](docs/api/rolling_release.html) | `create` | `POST /v1/projects/{idOrName}/rolling-release/complete` | Required |
| [RollingRelease](docs/api/rolling_release.html) | `create` | `POST /v1/projects/{idOrName}/rolling-release/start` | Required |
| [RollingRelease](docs/api/rolling_release.html) | `load` | `GET /v1/projects/{idOrName}/rolling-release` | Required |
| [RollingRelease](docs/api/rolling_release.html) | `load` | `GET /v1/projects/{idOrName}/rolling-release/billing` | Required |
| [RollingRelease](docs/api/rolling_release.html) | `load` | `GET /v1/projects/{idOrName}/rolling-release/config` | Required |
| [RollingRelease](docs/api/rolling_release.html) | `remove` | `DELETE /v1/projects/{idOrName}/rolling-release/config` | Required |
| [RollingRelease](docs/api/rolling_release.html) | `update` | `PATCH /v1/projects/{idOrName}/rolling-release/config` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/cmd` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/{name}/fork` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v3/sandboxes/{name}/fork` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}/kill` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/fs/write` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/drives/{name}` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/extend-timeout` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/fs/mkdir` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/fs/read` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/network-policy` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/snapshot` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes/sessions/{sessionId}/stop` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v3/sandboxes/sessions/{sessionId}/snapshot` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v2/sandboxes` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v3/sandboxes` | Required |
| [Sandbox](docs/api/sandbox.html) | `create` | `POST /v4/sandboxes` | Required |
| [Sandbox](docs/api/sandbox.html) | `list` | `GET /v2/sandboxes` | Required |
| [Sandbox](docs/api/sandbox.html) | `list` | `GET /v2/sandboxes/drives` | Required |
| [Sandbox](docs/api/sandbox.html) | `list` | `GET /v2/sandboxes/sessions/{sessionId}/cmd` | Required |
| [Sandbox](docs/api/sandbox.html) | `load` | `GET /v2/sandboxes/sessions` | Required |
| [Sandbox](docs/api/sandbox.html) | `load` | `GET /v2/sandboxes/snapshots` | Required |
| [Sandbox](docs/api/sandbox.html) | `load` | `GET /v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}` | Required |
| [Sandbox](docs/api/sandbox.html) | `load` | `GET /v2/sandboxes/{name}` | Required |
| [Sandbox](docs/api/sandbox.html) | `load` | `GET /v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}/logs` | Required |
| [Sandbox](docs/api/sandbox.html) | `load` | `GET /v2/sandboxes/sessions/{sessionId}` | Required |
| [Sandbox](docs/api/sandbox.html) | `load` | `GET /v2/sandboxes/snapshots/{snapshotId}` | Required |
| [Sandbox](docs/api/sandbox.html) | `remove` | `DELETE /v2/sandboxes/{name}` | Required |
| [Sandbox](docs/api/sandbox.html) | `remove` | `DELETE /v2/sandboxes/drives/{name}` | Required |
| [Sandbox](docs/api/sandbox.html) | `remove` | `DELETE /v2/sandboxes/snapshots/{snapshotId}` | Required |
| [Sandbox](docs/api/sandbox.html) | `update` | `PATCH /v2/sandboxes/{name}` | Required |
| [Schema](docs/api/schema.html) | `list` | `GET /v2/observability/schema` | Not required |
| [Schema](docs/api/schema.html) | `load` | `GET /v2/observability/schema/{metricId}` | Not required |
| [Security](docs/api/security.html) | `create` | `POST /v1/security/firewall/bypass` | Required |
| [Security](docs/api/security.html) | `create` | `POST /v1/security/firewall/config/generate-rule` | Required |
| [Security](docs/api/security.html) | `create` | `POST /v1/security/attack-mode` | Required |
| [Security](docs/api/security.html) | `create` | `POST /v1/security/firewall/config/{configVersion}/activate` | Not required |
| [Security](docs/api/security.html) | `list` | `GET /v1/security/firewall/bypass` | Required |
| [Security](docs/api/security.html) | `list` | `GET /v1/security/firewall/events` | Required |
| [Security](docs/api/security.html) | `list` | `GET /v1/security/firewall/config` | Not required |
| [Security](docs/api/security.html) | `load` | `GET /v1/security/firewall/config/{configVersion}` | Required |
| [Security](docs/api/security.html) | `load` | `GET /v1/security/firewall/attack-status` | Required |
| [Security](docs/api/security.html) | `patch` | `PATCH /v1/security/firewall/config` | Required |
| [Security](docs/api/security.html) | `remove` | `DELETE /v1/security/firewall/bypass` | Required |
| [Security](docs/api/security.html) | `remove` | `DELETE /v1/security/firewall/config/{configVersion}` | Not required |
| [Security](docs/api/security.html) | `update` | `PUT /v1/security/firewall/config` | Required |
| [Segment](docs/api/segment.html) | `load` | `GET /v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}` | Required |
| [Storage](docs/api/storage.html) | `create` | `POST /storage/stores/blob` | Not required |
| [Storage](docs/api/storage.html) | `load` | `GET /storage/stores/{id}` | Not required |
| [Storage](docs/api/storage.html) | `remove` | `DELETE /storage/stores/blob/{id}` | Not required |
| [Team](docs/api/team.html) | `create` | `POST /v1/teams/{teamId}/dsync-roles` | Required |
| [Team](docs/api/team.html) | `create` | `POST /v2/teams/{teamId}/members` | Required |
| [Team](docs/api/team.html) | `create` | `POST /v1/teams/{teamId}/members/teams/join` | Required |
| [Team](docs/api/team.html) | `create` | `POST /v1/teams/{teamId}/request` | Required |
| [Team](docs/api/team.html) | `create` | `POST /v1/teams` | Required |
| [Team](docs/api/team.html) | `list` | `GET /v3/teams/{teamId}/members` | Required |
| [Team](docs/api/team.html) | `list` | `GET /v2/teams` | Required |
| [Team](docs/api/team.html) | `load` | `GET /v2/teams/{teamId}` | Required |
| [Team](docs/api/team.html) | `load` | `GET /v1/teams/{teamId}/request/{userId}` | Required |
| [Team](docs/api/team.html) | `remove` | `DELETE /v1/teams/{teamId}/microfrontends/{groupId}` | Required |
| [Team](docs/api/team.html) | `remove` | `DELETE /v1/teams/{teamId}` | Required |
| [Team](docs/api/team.html) | `remove` | `DELETE /v1/teams/{teamId}/members/{uid}` | Required |
| [Team](docs/api/team.html) | `remove` | `DELETE /v1/teams/{teamId}/invites/{inviteId}` | Required |
| [Team](docs/api/team.html) | `update` | `PATCH /v1/teams/{teamId}/microfrontends/{groupId}` | Required |
| [Team](docs/api/team.html) | `update` | `PATCH /v2/teams/{teamId}` | Required |
| [Team](docs/api/team.html) | `update` | `PATCH /v1/teams/{teamId}/members/{uid}` | Required |
| [TldName](docs/api/tld_name.html) | `list` | `GET /v1/registrar/tlds/supported` | Not required |
| [Toggle](docs/api/toggle.html) | `create` | `POST /speed-insights/toggle` | Not required |
| [Toggle](docs/api/toggle.html) | `create` | `POST /web/insights/toggle` | Not required |
| [User](docs/api/user.html) | `list` | `GET /v3/events` | Required |
| [User](docs/api/user.html) | `load` | `GET /v2/user` | Required |
| [User](docs/api/user.html) | `remove` | `DELETE /v1/user` | Required |
| [Vcr](docs/api/vcr.html) | `create` | `POST /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/` | Not required |
| [Vcr](docs/api/vcr.html) | `create` | `POST /v1/vcr/repository/{idOrName}/permissions` | Required |
| [Vcr](docs/api/vcr.html) | `create` | `POST /v1/vcr/repository` | Required |
| [Vcr](docs/api/vcr.html) | `list` | `GET /v1/vcr/repository/{idOrName}/tags` | Required |
| [Vcr](docs/api/vcr.html) | `list` | `GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/tags/list` | Not required |
| [Vcr](docs/api/vcr.html) | `load` | `GET /v1/vcr/repository/{idOrName}/images/{imageIdOrDigest}` | Required |
| [Vcr](docs/api/vcr.html) | `load` | `GET /v1/vcr/repository/{idOrName}/tags/{tag}` | Required |
| [Vcr](docs/api/vcr.html) | `load` | `GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}` | Not required |
| [Vcr](docs/api/vcr.html) | `load` | `GET /v1/vcr/repository/{idOrName}` | Required |
| [Vcr](docs/api/vcr.html) | `load` | `GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}` | Not required |
| [Vcr](docs/api/vcr.html) | `load` | `GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}` | Not required |
| [Vcr](docs/api/vcr.html) | `load` | `GET /v2/` | Not required |
| [Vcr](docs/api/vcr.html) | `patch` | `PATCH /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}` | Not required |
| [Vcr](docs/api/vcr.html) | `remove` | `DELETE /v1/vcr/repository/{idOrName}/images/{imageId}` | Required |
| [Vcr](docs/api/vcr.html) | `remove` | `DELETE /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}` | Not required |
| [Vcr](docs/api/vcr.html) | `remove` | `DELETE /v1/vcr/repository/{idOrName}` | Required |
| [Vcr](docs/api/vcr.html) | `remove` | `DELETE /v1/vcr/repository/{idOrName}/permissions` | Required |
| [Vcr](docs/api/vcr.html) | `remove` | `DELETE /v1/vcr/repository/{idOrName}/permissions/all` | Required |
| [Vcr](docs/api/vcr.html) | `remove` | `DELETE /v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}` | Not required |
| [Vcr](docs/api/vcr.html) | `remove` | `DELETE /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}` | Not required |
| [Vcr](docs/api/vcr.html) | `update` | `PUT /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}` | Not required |
| [Vcr](docs/api/vcr.html) | `update` | `PUT /v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}` | Not required |
| [VcrImageList](docs/api/vcr_image_list.html) | `list` | `GET /v1/vcr/repository/{idOrName}/images` | Required |
| [VcrRepositoryList](docs/api/vcr_repository_list.html) | `list` | `GET /v1/vcr/repository` | Required |
| [VcrRepositoryPermissionList](docs/api/vcr_repository_permission_list.html) | `list` | `GET /v1/vcr/repository/{idOrName}/permissions` | Required |
| [WebAnalytics](docs/api/web_analytics.html) | `load` | `GET /v1/query/web-analytics/events/aggregate` | Required |
| [WebAnalytics](docs/api/web_analytics.html) | `load` | `GET /v1/query/web-analytics/visits/aggregate` | Required |
| [WebAnalytics](docs/api/web_analytics.html) | `load` | `GET /v1/query/web-analytics/events/count` | Required |
| [WebAnalytics](docs/api/web_analytics.html) | `load` | `GET /v1/query/web-analytics/visits/count` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /v1/webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `load` | `GET /v1/webhooks/{id}` | Required |
| [Webhook](docs/api/webhook.html) | `load` | `GET /v1/webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /v1/webhooks/{id}` | Required |

## Connect to the API

- Production API: `https://api.vercel.com`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Default authentication mechanism

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /v2/observability/schema`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://api.vercel.com/v2/observability/schema'
```

Inspect the response using the [Schema](docs/api/schema.html) reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `vercel_list`: List records for an entity. Supported entities: `access_group`, `ai_gateway_rule_list`, `ai_gateway_virtual_model_config_list`, `alias`, `bulk_redirect`, `cert`, `check`, `checks_v2`, `connect_connector_list`, `connect_connector_project_connection_list`, `connect_project_connector_connection_list`, `deployment`, `domain`, `env`, `environment`, `feature_flag`, `file`, `global_config`, `global_config_item`, `integration`, `kms`, `list_event_type`, `log_drain`, `marketplace`, `microfrontend`, `network`, `observability`, `private_link_endpoint`, `project_route`, `sandbox`, `schema`, `security`, `team`, `tld_name`, `user`, `vcr`, `vcr_image_list`, `vcr_repository_list`, `vcr_repository_permission_list`.
- `vercel_load`: Load one record for an entity. Supported entities: `access_group`, `ai_gateway_virtual_model_config`, `alias`, `api_ai_gateway`, `artifact`, `authentication`, `billing`, `bulk_redirect`, `cert`, `check`, `checks_v2`, `connect_connector`, `connect_project_connection`, `deployment`, `dns`, `domain`, `domains_registrar`, `drain`, `env`, `environment`, `feature_flag`, `flag`, `global_config`, `global_config_item`, `global_config_token`, `integration`, `kms`, `log`, `log_drain`, `marketplace`, `microfrontend`, `network`, `private_link_endpoint`, `project`, `project_member`, `project_route`, `record`, `rolling_release`, `sandbox`, `schema`, `security`, `segment`, `storage`, `team`, `user`, `vcr`, `web_analytics`, `webhook`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

