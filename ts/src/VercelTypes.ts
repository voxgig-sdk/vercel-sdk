// Typed models for the Vercel SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AccessGroup {
  accessGroupId: string
  createdAt: string
  entitlements?: any[]
  id?: string
  isDsyncManaged: boolean
  membersCount: number
  membersToAdd?: any[]
  membersToRemove?: any[]
  name: string
  projectId: string
  projects?: any[]
  projectsCount: number
  role: string
  teamId: string
  teamPermissions?: any[]
  teamRoles?: any[]
  updatedAt: string
}

export interface AccessGroupLoadMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface AccessGroupListMatch {
  id_or_name: string
  limit?: number
  next?: string
  search?: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain list:
  //   'member' | 'project'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AccessGroupCreateData {
  id: string
  slug?: string
  team_id?: string
  accessGroupId: string
  createdAt: string
  entitlements?: any[]
  isDsyncManaged: boolean
  membersCount: number
  membersToAdd?: any[]
  membersToRemove?: any[]
  name: string
  projectId: string
  projects?: any[]
  projectsCount: number
  role: string
  teamId: string
  teamPermissions?: any[]
  teamRoles?: any[]
  updatedAt: string

  // Selects a custom action instead of the plain create:
  //   'project'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AccessGroupUpdateData {
  access_group_id: string
  project_id: string
  slug?: string
  team_id?: string
  accessGroupId?: string
  createdAt?: string
  entitlements?: any[]
  id?: string
  isDsyncManaged?: boolean
  membersCount?: number
  membersToAdd?: any[]
  membersToRemove?: any[]
  name?: string
  projectId?: string
  projects?: any[]
  projectsCount?: number
  role?: string
  teamId?: string
  teamPermissions?: any[]
  teamRoles?: any[]
  updatedAt?: string
}

export interface AccessGroupRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface AiGateway {
}

export interface AiGatewayRemoveMatch {
  rule_id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain remove:
  //   'rule'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AiGatewayRule {
  action?: Record<string, any>
  createdAt: number
  createdBy?: string
  deleted?: boolean
  description?: string
  enabled: boolean
  match?: Record<string, any>
  ownerId: string
  ruleId: string
  type: string
  updatedAt: number
  updatedBy?: string
}

export interface AiGatewayRuleCreateData {
  slug?: string
  team_id?: string
  action?: Record<string, any>
  createdAt: number
  createdBy?: string
  deleted?: boolean
  description?: string
  enabled: boolean
  match?: Record<string, any>
  ownerId: string
  ruleId: string
  type: string
  updatedAt: number
  updatedBy?: string
}

export interface AiGatewayRuleUpdateData {
  slug?: string
  team_id?: string
  action?: Record<string, any>
  createdAt?: number
  createdBy?: string
  deleted?: boolean
  description?: string
  enabled?: boolean
  match?: Record<string, any>
  ownerId?: string
  ruleId?: string
  type?: string
  updatedAt?: number
  updatedBy?: string
}

export interface AiGatewayRuleList {
  action?: Record<string, any>
  createdAt: number
  createdBy?: string
  deleted?: boolean
  description?: string
  enabled: boolean
  match?: Record<string, any>
  ownerId: string
  ruleId: string
  type: string
  updatedAt: number
  updatedBy?: string
}

export interface AiGatewayRuleListListMatch {
  include_disabled?: string
  slug?: string
  team_id?: string
}

export interface AiGatewayVirtualModelConfig {
  allowFallbackFromFast?: boolean
  baseUrl?: string
  byokCredentialIds?: any[]
  caching?: string
  createdAt: number
  createdBy?: string
  deleted: boolean
  description?: string
  disallowPromptTraining?: boolean
  displayName?: string
  has?: any[]
  hipaaCompliant?: boolean
  id?: string
  inferenceRegion?: Record<string, any>
  instanceId?: string
  kind: string
  modelSlug?: string
  models?: any[]
  observabilityTags?: any[]
  ownerId: string
  providerOnly?: any[]
  providerOptions?: Record<string, any>
  providerOrder?: any[]
  providerTimeouts?: Record<string, any>
  requires?: any[]
  selector?: string
  serviceTier?: string
  sort?: string
  speed?: string
  status: string
  updatedAt: number
  updatedBy?: string
  virtualModelSlug: string
  visibility?: string
  zeroDataRetention?: boolean
}

export interface AiGatewayVirtualModelConfigLoadMatch {
  id: string
  owner_id?: string
  slug?: string
  team_id?: string
}

export interface AiGatewayVirtualModelConfigCreateData {
  slug?: string
  team_id?: string
  allowFallbackFromFast?: boolean
  baseUrl?: string
  byokCredentialIds?: any[]
  caching?: string
  createdAt: number
  createdBy?: string
  deleted: boolean
  description?: string
  disallowPromptTraining?: boolean
  displayName?: string
  has?: any[]
  hipaaCompliant?: boolean
  id?: string
  inferenceRegion?: Record<string, any>
  instanceId?: string
  kind: string
  modelSlug?: string
  models?: any[]
  observabilityTags?: any[]
  ownerId: string
  providerOnly?: any[]
  providerOptions?: Record<string, any>
  providerOrder?: any[]
  providerTimeouts?: Record<string, any>
  requires?: any[]
  selector?: string
  serviceTier?: string
  sort?: string
  speed?: string
  status: string
  updatedAt: number
  updatedBy?: string
  virtualModelSlug: string
  visibility?: string
  zeroDataRetention?: boolean
}

export interface AiGatewayVirtualModelConfigUpdateData {
  id: string
  slug?: string
  team_id?: string
  allowFallbackFromFast?: boolean
  baseUrl?: string
  byokCredentialIds?: any[]
  caching?: string
  createdAt?: number
  createdBy?: string
  deleted?: boolean
  description?: string
  disallowPromptTraining?: boolean
  displayName?: string
  has?: any[]
  hipaaCompliant?: boolean
  inferenceRegion?: Record<string, any>
  instanceId?: string
  kind?: string
  modelSlug?: string
  models?: any[]
  observabilityTags?: any[]
  ownerId?: string
  providerOnly?: any[]
  providerOptions?: Record<string, any>
  providerOrder?: any[]
  providerTimeouts?: Record<string, any>
  requires?: any[]
  selector?: string
  serviceTier?: string
  sort?: string
  speed?: string
  status?: string
  updatedAt?: number
  updatedBy?: string
  virtualModelSlug?: string
  visibility?: string
  zeroDataRetention?: boolean
}

export interface AiGatewayVirtualModelConfigList {
  allowFallbackFromFast?: boolean
  baseUrl?: string
  byokCredentialIds?: any[]
  caching?: string
  createdAt: number
  createdBy?: string
  deleted: boolean
  description?: string
  disallowPromptTraining?: boolean
  displayName?: string
  has?: any[]
  hipaaCompliant?: boolean
  inferenceRegion?: Record<string, any>
  instanceId?: string
  kind: string
  modelSlug?: string
  models?: any[]
  observabilityTags?: any[]
  ownerId: string
  providerOnly?: any[]
  providerOptions?: Record<string, any>
  providerOrder?: any[]
  providerTimeouts?: Record<string, any>
  requires?: any[]
  selector?: string
  serviceTier?: string
  sort?: string
  speed?: string
  status: string
  updatedAt: number
  updatedBy?: string
  virtualModelSlug: string
  visibility?: string
  zeroDataRetention?: boolean
}

export interface AiGatewayVirtualModelConfigListListMatch {
  cursor?: string
  limit?: number
  owner_id?: string
  slug?: string
  team_id?: string
}

export interface Alias {
  alias: string
  created: string
  createdAt?: number
  creator: Record<string, any>
  deletedAt?: number
  deployment: Record<string, any>
  deploymentId: string
  id?: string
  microfrontends: Record<string, any>
  oldDeploymentId?: string
  projectId: string
  protectionBypass?: Record<string, any>
  redirect?: string
  redirectStatusCode?: number
  uid: string
  updatedAt?: number
}

export interface AliasLoadMatch {
  id: string
  from?: number
  project_id?: string
  since?: number
  slug?: string
  team_id?: string
  until?: number
}

export interface AliasListMatch {
  domain?: any
  from?: number
  limit?: number
  project_id?: string
  rollback_deployment_id?: string
  since?: number
  slug?: string
  team_id?: string
  until?: number
}

export interface AliasCreateData {
  deployment_id: string
  slug?: string
  team_id?: string
  alias: string
  created: string
  createdAt?: number
  creator: Record<string, any>
  deletedAt?: number
  deployment: Record<string, any>
  deploymentId: string
  id?: string
  microfrontends: Record<string, any>
  oldDeploymentId?: string
  projectId: string
  protectionBypass?: Record<string, any>
  redirect?: string
  redirectStatusCode?: number
  uid: string
  updatedAt?: number
}

export interface AliasUpdateData {
  id: string
  slug?: string
  team_id?: string
  alias?: string
  created?: string
  createdAt?: number
  creator?: Record<string, any>
  deletedAt?: number
  deployment?: Record<string, any>
  deploymentId?: string
  microfrontends?: Record<string, any>
  oldDeploymentId?: string
  projectId?: string
  protectionBypass?: Record<string, any>
  redirect?: string
  redirectStatusCode?: number
  uid?: string
  updatedAt?: number

  // Selects a custom action instead of the plain update:
  //   'protection_bypass'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AliasRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface ApiAiGateway {
}

export interface ApiAiGatewayLoadMatch {
  cursor?: string
  limit?: number
  owner_id?: string
  slug?: string
  team_id?: string
  virtual_model_slug?: string
}

export interface ApiAiGatewayRemoveMatch {
  vmc_slug: string
  acting_ip?: string
  acting_user_agent?: string
  owner_id?: string
  slug?: string
  team_id?: string
  updated_by?: string
}

export interface ApiKey {
  activeAt: number
  aiGatewayQuota: Record<string, any>
  createdAt: number
  createdBy: string
  createdByAppId: string
  expiresAt: number
  id: string
  leakedAt: number
  leakedUrl: string
  metadata?: Record<string, any>
  name: string
  partialKey: string
  projectId: string
  purpose: string
  quota: Record<string, any>
  teamId: string
}

export interface ApiKeyCreateData {
  activeAt: number
  aiGatewayQuota: Record<string, any>
  createdAt: number
  createdBy: string
  createdByAppId: string
  expiresAt: number
  id: string
  leakedAt: number
  leakedUrl: string
  metadata?: Record<string, any>
  name: string
  partialKey: string
  projectId: string
  purpose: string
  quota: Record<string, any>
  teamId: string
}

export interface Artifact {
  hashes: any[]
  id?: string
}

export interface ArtifactLoadMatch {
  id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain load:
  //   'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ArtifactCreateData {
  slug?: string
  team_id?: string
  hashes: any[]
  id?: string

  // Selects a custom action instead of the plain create:
  //   'event'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ArtifactUpdateData {
  id: string
  slug?: string
  team_id?: string
  hashes?: any[]
}

export interface ArtifactRemoveMatch {
  slug?: string
  team_id?: string
}

export interface Authentication {
  activeAt: number
  createdAt: number
  expiresAt?: number
  id: string
  leakedAt?: number
  leakedUrl?: string
  name: string
  origin?: string
  prefix?: string
  projectId?: string
  revokedAt?: number
  scopes?: any[]
  suffix?: string
  type: string
}

export interface AuthenticationLoadMatch {
  token_id: string
}

export interface AuthenticationCreateData {
  slug?: string
  team_id?: string
  activeAt: number
  createdAt: number
  expiresAt?: number
  id: string
  leakedAt?: number
  leakedUrl?: string
  name: string
  origin?: string
  prefix?: string
  projectId?: string
  revokedAt?: number
  scopes?: any[]
  suffix?: string
  type: string
}

export interface AuthenticationRemoveMatch {
  token_id: string
}

export interface Billing {
}

export interface BillingLoadMatch {
  from: string
  slug?: string
  team_id?: string
  to: string

  // Selects a custom action instead of the plain load:
  //   'charge' | 'contract_commitment'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BillingCreateData {
  slug?: string
  source?: string
  team_id?: string

  // Selects a custom action instead of the plain create:
  //   'buy'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BulkRedirect {
  alias?: string
  createdBy: string
  id: string
  isLive?: boolean
  isStaging?: boolean
  key: string
  lastModified: number
  name?: string
  overwrite?: boolean
  projectId: string
  redirect: Record<string, any>
  redirectCount?: number
  redirects?: any[]
  restore?: boolean
  teamId: string
}

export interface BulkRedirectLoadMatch {
  diff?: any
  page?: number
  per_page?: number
  project_id: string
  q?: string
  slug?: string
  sort_by?: string
  sort_order?: string
  team_id?: string
  version_id?: string
}

export interface BulkRedirectListMatch {
  project_id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain list:
  //   'version'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BulkRedirectCreateData {
  project_id: string
  slug?: string
  team_id?: string
  alias?: string
  createdBy: string
  id: string
  isLive?: boolean
  isStaging?: boolean
  key: string
  lastModified: number
  name?: string
  overwrite?: boolean
  projectId: string
  redirect: Record<string, any>
  redirectCount?: number
  redirects?: any[]
  restore?: boolean
  teamId: string

  // Selects a custom action instead of the plain create:
  //   'restore' | 'version'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BulkRedirectUpdateData {
  slug?: string
  team_id?: string
  alias?: string
  createdBy?: string
  id?: string
  isLive?: boolean
  isStaging?: boolean
  key?: string
  lastModified?: number
  name?: string
  overwrite?: boolean
  projectId?: string
  redirect?: Record<string, any>
  redirectCount?: number
  redirects?: any[]
  restore?: boolean
  teamId?: string
}

export interface BulkRedirectRemoveMatch {
  project_id: string
  slug?: string
  team_id?: string
}

export interface Cert {
  autoRenew: boolean
  ca: string
  cert: string
  cns: any[]
  createdAt: number
  expiresAt: number
  id: string
  key: string
  skipValidation?: boolean
}

export interface CertLoadMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface CertListMatch {
  slug?: string
  team_id?: string
}

export interface CertCreateData {
  slug?: string
  team_id?: string
  autoRenew: boolean
  ca: string
  cert: string
  cns: any[]
  createdAt: number
  expiresAt: number
  id: string
  key: string
  skipValidation?: boolean
}

export interface CertUpdateData {
  slug?: string
  team_id?: string
  autoRenew?: boolean
  ca?: string
  cert?: string
  cns?: any[]
  createdAt?: number
  expiresAt?: number
  id?: string
  key?: string
  skipValidation?: boolean
}

export interface CertRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface Check {
  blocking: boolean
  blocks: string
  completedAt?: number
  conclusion?: any
  createdAt: number
  deletedAt?: number
  detailsUrl?: string
  externalId?: string
  id: string
  integrationId: string
  isRerequestable: boolean
  metrics: Record<string, any>
  name: string
  output?: Record<string, any>
  ownerId: string
  path?: string
  projectId: string
  requires: string
  rerequestable?: boolean
  source: any
  sourceIntegrationConfigurationId?: string
  sourceKind: string
  startedAt?: number
  status?: any
  targets: any[]
  timeout: number
  updatedAt: number
}

export interface CheckLoadMatch {
  deployment_id?: string
  id: string
  slug?: string
  team_id?: string
  project_id?: string
}

export interface CheckListMatch {
  project_id_or_name: string
  block?: string
  slug?: string
  team_id?: string
}

export interface CheckCreateData {
  deployment_id: string
  slug?: string
  team_id?: string
  blocking: boolean
  blocks: string
  completedAt?: number
  conclusion?: any
  createdAt: number
  deletedAt?: number
  detailsUrl?: string
  externalId?: string
  id: string
  integrationId: string
  isRerequestable: boolean
  metrics: Record<string, any>
  name: string
  output?: Record<string, any>
  ownerId: string
  path?: string
  projectId: string
  requires: string
  rerequestable?: boolean
  source: any
  sourceIntegrationConfigurationId?: string
  sourceKind: string
  startedAt?: number
  status?: any
  targets: any[]
  timeout: number
  updatedAt: number

  // Selects a custom action instead of the plain create:
  //   'rerequest'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CheckUpdateData {
  deployment_id?: string
  id: string
  slug?: string
  team_id?: string
  project_id?: string
  blocking?: boolean
  blocks?: string
  completedAt?: number
  conclusion?: any
  createdAt?: number
  deletedAt?: number
  detailsUrl?: string
  externalId?: string
  integrationId?: string
  isRerequestable?: boolean
  metrics?: Record<string, any>
  name?: string
  output?: Record<string, any>
  ownerId?: string
  path?: string
  projectId?: string
  requires?: string
  rerequestable?: boolean
  source?: any
  sourceIntegrationConfigurationId?: string
  sourceKind?: string
  startedAt?: number
  status?: any
  targets?: any[]
  timeout?: number
  updatedAt?: number
}

export interface CheckRemoveMatch {
  id: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface ChecksV2 {
  checkId: string
  completedAt?: number
  conclusion?: string
  conclusionText?: string
  externalId?: string
  externalUrl?: string
  output?: Record<string, any>
  runs: any[]
  status?: string
}

export interface ChecksV2LoadMatch {
  check_run_id: string
  deployment_id: string
  slug?: string
  team_id?: string
}

export interface ChecksV2ListMatch {
  deployment_id: string
  slug?: string
  team_id?: string
}

export interface ChecksV2CreateData {
  deployment_id: string
  slug?: string
  team_id?: string
  checkId: string
  completedAt?: number
  conclusion?: string
  conclusionText?: string
  externalId?: string
  externalUrl?: string
  output?: Record<string, any>
  runs: any[]
  status?: string
}

export interface ChecksV2UpdateData {
  check_run_id: string
  deployment_id: string
  slug?: string
  team_id?: string
  checkId?: string
  completedAt?: number
  conclusion?: string
  conclusionText?: string
  externalId?: string
  externalUrl?: string
  output?: Record<string, any>
  runs?: any[]
  status?: string
}

export interface Connect {
  additionalParams?: Record<string, any>
  audience?: any[]
  authorizationDetails?: any[]
  authorizationId?: string
  claims?: Record<string, any>
  connector: Record<string, any>
  deviceCode?: boolean
  displayName: string
  expiresAt: number
  expiresInMs?: number
  externalSubject?: string
  id: string
  installationId?: string
  metadata?: Record<string, any>
  name: string
  prompt?: string
  resources?: any[]
  returnUrl?: string
  scopes?: any[]
  service?: string
  serviceName?: string
  subject?: any
  tenantId?: string
  token: string
  tokenGroupId?: string
  tokenId: string
  type: string
  uid: string
  validityBufferMs?: number
  webhook?: string
}

export interface ConnectCreateData {
  connector: string
  additionalParams?: Record<string, any>
  audience?: any[]
  authorizationDetails?: any[]
  authorizationId?: string
  claims?: Record<string, any>
  deviceCode?: boolean
  displayName: string
  expiresAt: number
  expiresInMs?: number
  externalSubject?: string
  id: string
  installationId?: string
  metadata?: Record<string, any>
  name: string
  prompt?: string
  resources?: any[]
  returnUrl?: string
  scopes?: any[]
  service?: string
  serviceName?: string
  subject?: any
  tenantId?: string
  token: string
  tokenGroupId?: string
  tokenId: string
  type: string
  uid: string
  validityBufferMs?: number
  webhook?: string
}

export interface ConnectRemoveMatch {
  connector: string
  slug?: string
  team_id?: string
}

export interface ConnectConnector {
  accentColor?: string
  appTokens: Record<string, any>
  backgroundColor?: string
  clientUrl?: string
  connectionMethod?: string
  connector: Record<string, any>
  createdAt: number
  createdBy?: any
  creationMode?: string
  data: any
  defaultInstallationId?: string
  destinations: any[]
  devsite?: string
  displayName: string
  docsite?: string
  environments?: any[]
  events?: any[]
  icon?: string
  id: string
  knownStale?: boolean
  managed?: Record<string, any>
  name: string
  params?: Record<string, any>
  projectId?: string
  reconsentNeeded: Record<string, any>
  redirectUri?: string
  reinstallAt?: number
  reinstallNeeded?: boolean
  service: string
  serviceSync: Record<string, any>
  supportedSubjectTypes: any[]
  supportsIcon: any
  supportsInstallation: boolean
  supportsRevocation: boolean
  supportsTriggers: boolean
  target?: string
  triggerDestination?: any
  triggerDestinations?: any[]
  triggers: Record<string, any>
  type: string
  typeIcon?: string
  typeName: string
  uid: string
  updatedAt: number
  updatedBy?: any
  userTokens: Record<string, any>
  website?: string
}

export interface ConnectConnectorLoadMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface ConnectConnectorCreateData {
  slug?: string
  team_id?: string
  accentColor?: string
  appTokens: Record<string, any>
  backgroundColor?: string
  clientUrl?: string
  connectionMethod?: string
  connector: Record<string, any>
  createdAt: number
  createdBy?: any
  creationMode?: string
  data: any
  defaultInstallationId?: string
  destinations: any[]
  devsite?: string
  displayName: string
  docsite?: string
  environments?: any[]
  events?: any[]
  icon?: string
  id: string
  knownStale?: boolean
  managed?: Record<string, any>
  name: string
  params?: Record<string, any>
  projectId?: string
  reconsentNeeded: Record<string, any>
  redirectUri?: string
  reinstallAt?: number
  reinstallNeeded?: boolean
  service: string
  serviceSync: Record<string, any>
  supportedSubjectTypes: any[]
  supportsIcon: any
  supportsInstallation: boolean
  supportsRevocation: boolean
  supportsTriggers: boolean
  target?: string
  triggerDestination?: any
  triggerDestinations?: any[]
  triggers: Record<string, any>
  type: string
  typeIcon?: string
  typeName: string
  uid: string
  updatedAt: number
  updatedBy?: any
  userTokens: Record<string, any>
  website?: string
}

export interface ConnectConnectorUpdateData {
  id: string
  slug?: string
  team_id?: string
  accentColor?: string
  appTokens?: Record<string, any>
  backgroundColor?: string
  clientUrl?: string
  connectionMethod?: string
  connector?: Record<string, any>
  createdAt?: number
  createdBy?: any
  creationMode?: string
  data?: any
  defaultInstallationId?: string
  destinations?: any[]
  devsite?: string
  displayName?: string
  docsite?: string
  environments?: any[]
  events?: any[]
  icon?: string
  knownStale?: boolean
  managed?: Record<string, any>
  name?: string
  params?: Record<string, any>
  projectId?: string
  reconsentNeeded?: Record<string, any>
  redirectUri?: string
  reinstallAt?: number
  reinstallNeeded?: boolean
  service?: string
  serviceSync?: Record<string, any>
  supportedSubjectTypes?: any[]
  supportsIcon?: any
  supportsInstallation?: boolean
  supportsRevocation?: boolean
  supportsTriggers?: boolean
  target?: string
  triggerDestination?: any
  triggerDestinations?: any[]
  triggers?: Record<string, any>
  type?: string
  typeIcon?: string
  typeName?: string
  uid?: string
  updatedAt?: number
  updatedBy?: any
  userTokens?: Record<string, any>
  website?: string
}

export interface ConnectConnectorList {
  accentColor?: string
  appTokens: Record<string, any>
  backgroundColor?: string
  clientUrl?: string
  connectionMethod?: string
  createdAt: number
  createdBy?: any
  creationMode?: string
  defaultInstallationId?: string
  devsite?: string
  displayName: string
  docsite?: string
  events?: any[]
  icon?: string
  id: string
  knownStale?: boolean
  managed?: Record<string, any>
  name: string
  redirectUri?: string
  reinstallAt?: number
  service: string
  supportedSubjectTypes: any[]
  supportsIcon: any
  supportsInstallation: boolean
  supportsRevocation: boolean
  supportsTriggers: boolean
  target?: string
  triggerDestinations?: any[]
  triggers: Record<string, any>
  type: string
  typeIcon?: string
  typeName: string
  uid: string
  updatedAt: number
  updatedBy?: any
  userTokens: Record<string, any>
  website?: string
}

export interface ConnectConnectorListListMatch {
  cursor?: string
  limit?: number
  project_id?: string
  search?: string
  service?: string
  slug?: string
  sort?: string
  team_id?: string
  type?: string
}

export interface ConnectConnectorProjectConnectionList {
  connectorId: string
  createdAt: number
  enabledEnvironments: any[]
  project: Record<string, any>
  updatedAt: number
}

export interface ConnectConnectorProjectConnectionListListMatch {
  connector_id: string
  cursor?: string
  limit?: number
  slug?: string
  team_id?: string
}

export interface ConnectProjectConnection {
  connectorId: string
  createdAt: number
  enabledEnvironments: any[]
  environments: any[]
  project: Record<string, any>
  updatedAt: number
}

export interface ConnectProjectConnectionLoadMatch {
  connector_id: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface ConnectProjectConnectionCreateData {
  connector_id: string
  project_id: string
  slug?: string
  team_id?: string
  connectorId: string
  createdAt: number
  enabledEnvironments: any[]
  environments: any[]
  project: Record<string, any>
  updatedAt: number
}

export interface ConnectProjectConnectorConnectionList {
  connectorId: string
  createdAt: number
  enabledEnvironments: any[]
  project: Record<string, any>
  updatedAt: number
}

export interface ConnectProjectConnectorConnectionListListMatch {
  project_id: string
  cursor?: string
  limit?: number
  slug?: string
  team_id?: string
}

export interface Deployment {
  aliasAssigned?: any
  aliasError: Record<string, any>
  attribution?: Record<string, any>
  buildMachine?: string
  buildingAt?: number
  checks: Record<string, any>
  checksConclusion?: string
  checksState?: string
  connectBuildsEnabled?: boolean
  connectConfigurationId?: string
  created: number
  createdAt: number
  creator: Record<string, any>
  customEnvironment: Record<string, any>
  customEnvironmentSlugOrId?: string
  defaultRoute?: string
  deleted?: number
  deploymentId?: string
  errorCode?: string
  errorMessage?: string
  expiration?: number
  files?: any[]
  gitAccessToken?: string
  gitMetadata?: Record<string, any>
  gitSource?: any
  id?: string
  inspectorUrl: string
  isRollbackCandidate?: boolean
  manualProvisioning: Record<string, any>
  meta?: Record<string, any>
  monorepoManager?: string
  name: string
  oomReport?: string
  outcomes?: any[]
  passiveConnectConfigurationId?: string
  platform: Record<string, any>
  prebuilt?: boolean
  project?: string
  projectId: string
  projectSettings?: Record<string, any>
  proposedExpiration?: number
  ready?: number
  readyState: string
  readySubstate?: string
  seatBlock: Record<string, any>
  softDeletedByRetention?: boolean
  source?: string
  state?: string
  status?: string
  statusText?: string
  statusUrl?: string
  target?: string
  type: string
  uid: string
  undeleted?: number
  url: string
  withLatestCommit?: boolean
}

export interface DeploymentLoadMatch {
  file_id?: string
  id: string
  path?: string
  slug?: string
  team_id?: string
  with_git_repo_info?: string
}

export interface DeploymentListMatch {
  app?: string
  branch?: string
  from?: number
  limit?: number
  project_id?: string
  rollback_candidate?: boolean
  sha?: string
  since?: number
  slug?: string
  state?: string
  target?: string
  team_id?: string
  to?: number
  until?: number
  user?: string

  // Selects a custom action instead of the plain list:
  //   'event'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DeploymentCreateData {
  slug?: string
  team_id?: string
  aliasAssigned?: any
  aliasError: Record<string, any>
  attribution?: Record<string, any>
  buildMachine?: string
  buildingAt?: number
  checks: Record<string, any>
  checksConclusion?: string
  checksState?: string
  connectBuildsEnabled?: boolean
  connectConfigurationId?: string
  created: number
  createdAt: number
  creator: Record<string, any>
  customEnvironment: Record<string, any>
  customEnvironmentSlugOrId?: string
  defaultRoute?: string
  deleted?: number
  deploymentId?: string
  errorCode?: string
  errorMessage?: string
  expiration?: number
  files?: any[]
  gitAccessToken?: string
  gitMetadata?: Record<string, any>
  gitSource?: any
  id?: string
  inspectorUrl: string
  isRollbackCandidate?: boolean
  manualProvisioning: Record<string, any>
  meta?: Record<string, any>
  monorepoManager?: string
  name: string
  oomReport?: string
  outcomes?: any[]
  passiveConnectConfigurationId?: string
  platform: Record<string, any>
  prebuilt?: boolean
  project?: string
  projectId: string
  projectSettings?: Record<string, any>
  proposedExpiration?: number
  ready?: number
  readyState: string
  readySubstate?: string
  seatBlock: Record<string, any>
  softDeletedByRetention?: boolean
  source?: string
  state?: string
  status?: string
  statusText?: string
  statusUrl?: string
  target?: string
  type: string
  uid: string
  undeleted?: number
  url: string
  withLatestCommit?: boolean
}

export interface DeploymentUpdateData {
  action: string
  id: string
  integration_id: string
  resource_id: string
  aliasAssigned?: any
  aliasError?: Record<string, any>
  attribution?: Record<string, any>
  buildMachine?: string
  buildingAt?: number
  checks?: Record<string, any>
  checksConclusion?: string
  checksState?: string
  connectBuildsEnabled?: boolean
  connectConfigurationId?: string
  created?: number
  createdAt?: number
  creator?: Record<string, any>
  customEnvironment?: Record<string, any>
  customEnvironmentSlugOrId?: string
  defaultRoute?: string
  deleted?: number
  deploymentId?: string
  errorCode?: string
  errorMessage?: string
  expiration?: number
  files?: any[]
  gitAccessToken?: string
  gitMetadata?: Record<string, any>
  gitSource?: any
  inspectorUrl?: string
  isRollbackCandidate?: boolean
  manualProvisioning?: Record<string, any>
  meta?: Record<string, any>
  monorepoManager?: string
  name?: string
  oomReport?: string
  outcomes?: any[]
  passiveConnectConfigurationId?: string
  platform?: Record<string, any>
  prebuilt?: boolean
  project?: string
  projectId?: string
  projectSettings?: Record<string, any>
  proposedExpiration?: number
  ready?: number
  readyState?: string
  readySubstate?: string
  seatBlock?: Record<string, any>
  softDeletedByRetention?: boolean
  source?: string
  state?: string
  status?: string
  statusText?: string
  statusUrl?: string
  target?: string
  type?: string
  uid?: string
  undeleted?: number
  url?: string
  withLatestCommit?: boolean

  // Selects a custom action instead of the plain update:
  //   'cancel'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DeploymentRemoveMatch {
  id: string
  slug?: string
  team_id?: string
  url?: string
}

export interface Dns {
  comment?: string
  createdAt?: number
  creator: string
  domain: string
  https: Record<string, any>
  id: string
  mxPriority?: number
  name: string
  recordType: string
  srv: Record<string, any>
  ttl?: number
  type: string
  value: string
}

export interface DnsLoadMatch {
  domain_id: string
  limit?: string
  since?: string
  slug?: string
  team_id?: string
  until?: string
}

export interface DnsCreateData {
  domain_id: string
  slug?: string
  team_id?: string
  comment?: string
  createdAt?: number
  creator: string
  domain: string
  https: Record<string, any>
  id: string
  mxPriority?: number
  name: string
  recordType: string
  srv: Record<string, any>
  ttl?: number
  type: string
  value: string
}

export interface DnsUpdateData {
  record_id: string
  slug?: string
  team_id?: string
  comment?: string
  createdAt?: number
  creator?: string
  domain?: string
  https?: Record<string, any>
  id?: string
  mxPriority?: number
  name?: string
  recordType?: string
  srv?: Record<string, any>
  ttl?: number
  type?: string
  value?: string
}

export interface DnsRemoveMatch {
  domain_id: string
  record_id: string
  slug?: string
  team_id?: string
}

export interface Domain {
  boughtAt: number
  createdAt: number
  creator: Record<string, any>
  customNameservers?: any[]
  echMode: string
  expiresAt: number
  id: string
  intendedNameservers: any[]
  method?: string
  name: string
  nameservers: any[]
  renew?: boolean
  serviceType: string
  suffix: boolean
  teamId: string
  transferStartedAt?: number
  transferredAt?: number
  userId: string
  verified: boolean
}

export interface DomainLoadMatch {
  id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain load:
  //   'verification'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainListMatch {
  limit?: number
  since?: number
  slug?: string
  team_id?: string
  until?: number

  // Selects a custom action instead of the plain list:
  //   'config' | 'project_domain'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainCreateData {
  slug?: string
  team_id?: string
  boughtAt: number
  createdAt: number
  creator: Record<string, any>
  customNameservers?: any[]
  echMode: string
  expiresAt: number
  id: string
  intendedNameservers: any[]
  method?: string
  name: string
  nameservers: any[]
  renew?: boolean
  serviceType: string
  suffix: boolean
  teamId: string
  transferStartedAt?: number
  transferredAt?: number
  userId: string
  verified: boolean

  // Selects a custom action instead of the plain create:
  //   'claim'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainUpdateData {
  id: string
  slug?: string
  team_id?: string
  boughtAt?: number
  createdAt?: number
  creator?: Record<string, any>
  customNameservers?: any[]
  echMode?: string
  expiresAt?: number
  intendedNameservers?: any[]
  method?: string
  name?: string
  nameservers?: any[]
  renew?: boolean
  serviceType?: string
  suffix?: boolean
  teamId?: string
  transferStartedAt?: number
  transferredAt?: number
  userId?: string
  verified?: boolean

  // Selects a custom action instead of the plain update:
  //   'record'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface DomainsRegistrar {
  authCode: string
  autoRenew: boolean
  available: boolean
  contactInformation: Record<string, any>
  domains: any[]
  error?: any
  expectedPrice: number
  languageCode?: string
  nameservers: any[]
  orderId: string
  purchasePrice: any
  renewalPrice: any
  results: any[]
  status: string
  transferPrice: any
  years: number
}

export interface DomainsRegistrarLoadMatch {
  order_id: string
  team_id?: string
}

export interface DomainsRegistrarCreateData {
  team_id?: string
  authCode: string
  autoRenew: boolean
  available: boolean
  contactInformation: Record<string, any>
  domains: any[]
  error?: any
  expectedPrice: number
  languageCode?: string
  nameservers: any[]
  orderId: string
  purchasePrice: any
  renewalPrice: any
  results: any[]
  status: string
  transferPrice: any
  years: number
}

export interface DomainsRegistrarUpdateData {
  domain_id: string
  team_id?: string
  authCode?: string
  autoRenew?: boolean
  available?: boolean
  contactInformation?: Record<string, any>
  domains?: any[]
  error?: any
  expectedPrice?: number
  languageCode?: string
  nameservers?: any[]
  orderId?: string
  purchasePrice?: any
  renewalPrice?: any
  results?: any[]
  status?: string
  transferPrice?: any
  years?: number
}

export interface Drain {
  delivery?: Record<string, any>
  drains: any
  filter: Record<string, any>
  id?: string
  name: string
  projectIds?: any[]
  projects: string
  sampling?: any[]
  schemas: Record<string, any>
  source?: Record<string, any>
  status?: string
  transforms?: any[]
}

export interface DrainLoadMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface DrainCreateData {
  slug?: string
  team_id?: string
  delivery?: Record<string, any>
  drains: any
  filter: Record<string, any>
  id?: string
  name: string
  projectIds?: any[]
  projects: string
  sampling?: any[]
  schemas: Record<string, any>
  source?: Record<string, any>
  status?: string
  transforms?: any[]

  // Selects a custom action instead of the plain create:
  //   'test'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DrainUpdateData {
  id: string
  slug?: string
  team_id?: string
  delivery?: Record<string, any>
  drains?: any
  filter?: Record<string, any>
  name?: string
  projectIds?: any[]
  projects?: string
  sampling?: any[]
  schemas?: Record<string, any>
  source?: Record<string, any>
  status?: string
  transforms?: any[]
}

export interface DrainRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface EdgeCache {
}

export interface EdgeCacheCreateData {
  project_id_or_name: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain create:
  //   'dangerously_delete_by_src_image' | 'dangerously_delete_by_tag' | 'invalidate_by_src_image' | 'invalidate_by_tag'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Env {
  applyToAllCustomEnvironments?: boolean
  comment?: string
  created?: string
  createdAt?: number
  createdBy?: string
  customEnvironmentIds?: any[]
  decrypted?: boolean
  deletedAt?: number
  deletedBy?: string
  evs: any[]
  failed: any[]
  id?: string
  key?: string
  lastEditedByDisplayName?: string
  ownerId?: string
  projectId?: any[]
  securityIssues: any[]
  target?: any[]
  type?: string
  updated: any[]
  updatedAt?: number
  updatedBy?: string
  updates: Record<string, any>
  value?: string
}

export interface EnvLoadMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface EnvListMatch {
  exclude_id?: string
  exclude_project_id?: string
  ids?: string
  project_id?: string
  search?: string
  slug?: string
  team_id?: string
}

export interface EnvCreateData {
  slug?: string
  team_id?: string
  applyToAllCustomEnvironments?: boolean
  comment?: string
  created?: string
  createdAt?: number
  createdBy?: string
  customEnvironmentIds?: any[]
  decrypted?: boolean
  deletedAt?: number
  deletedBy?: string
  evs: any[]
  failed: any[]
  id?: string
  key?: string
  lastEditedByDisplayName?: string
  ownerId?: string
  projectId?: any[]
  securityIssues: any[]
  target?: any[]
  type?: string
  updated: any[]
  updatedAt?: number
  updatedBy?: string
  updates: Record<string, any>
  value?: string
}

export interface EnvUpdateData {
  slug?: string
  team_id?: string
  applyToAllCustomEnvironments?: boolean
  comment?: string
  created?: string
  createdAt?: number
  createdBy?: string
  customEnvironmentIds?: any[]
  decrypted?: boolean
  deletedAt?: number
  deletedBy?: string
  evs?: any[]
  failed?: any[]
  id?: string
  key?: string
  lastEditedByDisplayName?: string
  ownerId?: string
  projectId?: any[]
  securityIssues?: any[]
  target?: any[]
  type?: string
  updated?: any[]
  updatedAt?: number
  updatedBy?: string
  updates?: Record<string, any>
  value?: string
}

export interface EnvRemoveMatch {
  slug?: string
  team_id?: string
}

export interface Environment {
  branchMatcher: Record<string, any>
  copyEnvVarsFrom?: string
  createdAt: number
  currentDeploymentAliases?: any[]
  description?: string
  domains?: any[]
  id: string
  slug: string
  type: string
  updatedAt: number
}

export interface EnvironmentLoadMatch {
  environment_slug_or_id: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface EnvironmentListMatch {
  id_or_name: string
  git_branch?: string
  slug?: string
  team_id?: string
}

export interface EnvironmentCreateData {
  id_or_name: string
  slug?: string
  team_id?: string
  branchMatcher: Record<string, any>
  copyEnvVarsFrom?: string
  createdAt: number
  currentDeploymentAliases?: any[]
  description?: string
  domains?: any[]
  id: string
  type: string
  updatedAt: number
}

export interface EnvironmentUpdateData {
  env_id?: string
  project_id: string
  slug?: string
  team_id?: string
  environment_slug_or_id?: string
  branchMatcher?: Record<string, any>
  copyEnvVarsFrom?: string
  createdAt?: number
  currentDeploymentAliases?: any[]
  description?: string
  domains?: any[]
  id?: string
  type?: string
  updatedAt?: number
}

export interface EnvironmentRemoveMatch {
  environment_slug_or_id: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface FeatureFlag {
  changedEnvironments: any[]
  createdAt: number
  createdBy: string
  data?: Record<string, any>
  description?: string
  environments: Record<string, any>
  flagId: string
  flags: any[]
  hint?: string
  id: string
  kind: string
  label?: string
  maintainerIds?: any[]
  message?: string
  metadata?: Record<string, any>
  operations?: any[]
  ownerId: string
  pagination: Record<string, any>
  permanent?: boolean
  projectId: string
  revision: number
  seed: number
  slug: string
  state: string
  status: Record<string, any>
  tags?: any[]
  typeName: string
  updatedAt: number
  updatedBy?: string
  variants: any[]
}

export interface FeatureFlagLoadMatch {
  team_id: string
  cursor?: string
  limit?: number
  slug?: string

  // Selects a custom action instead of the plain load:
  //   'setting'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface FeatureFlagListMatch {
  deployment_id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain list:
  //   'sdk_key' | 'segment' | 'setting'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface FeatureFlagUpdateData {
  project_id: string
  slug?: string
  team_id?: string
  changedEnvironments?: any[]
  createdAt?: number
  createdBy?: string
  data?: Record<string, any>
  description?: string
  environments?: Record<string, any>
  flagId?: string
  flags?: any[]
  hint?: string
  id?: string
  kind?: string
  label?: string
  maintainerIds?: any[]
  message?: string
  metadata?: Record<string, any>
  operations?: any[]
  ownerId?: string
  pagination?: Record<string, any>
  permanent?: boolean
  projectId?: string
  revision?: number
  seed?: number
  state?: string
  status?: Record<string, any>
  tags?: any[]
  typeName?: string
  updatedAt?: number
  updatedBy?: string
  variants?: any[]

  // Selects a custom action instead of the plain update:
  //   'segment'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface FeatureFlagRemoveMatch {
  id?: string
  project_id: string
  if_match?: string
  slug?: string
  team_id?: string
  with_metadata?: boolean
  segment_id_or_slug?: string
  hash_key?: string
}

export interface File {
  children?: any[]
  contentType?: string
  mode: number
  name: string
  type: string
  uid?: string
}

export interface FileListMatch {
  deployment_id: string
  slug?: string
  team_id?: string
}

export interface Flag {
  createdAt: number
  createdBy: string
  description?: string
  environments: Record<string, any>
  id: string
  kind: string
  maintainerIds?: any[]
  metadata?: Record<string, any>
  ownerId: string
  permanent?: boolean
  projectId: string
  revision: number
  seed: number
  slug: string
  state: string
  tags?: any[]
  typeName: string
  updatedAt: number
  updatedBy?: string
  variants: any[]
}

export interface FlagLoadMatch {
  id: string
  project_id: string
  if_match?: string
  slug?: string
  team_id?: string
  with_metadata?: boolean
}

export interface FlagsSdkKeyWithSecret {
  createdAt: number
  createdBy: string
  deletedAt?: number
  environment: string
  hashKey: string
  keyValue: string
  label?: string
  partialKeyValue: string
  projectId: string
  sdkKeyType: string
  tokenValue?: string
  type: string
  updatedAt: number
}

export interface FlagsSdkKeyWithSecretUpdateData {
  project_id: string
  slug?: string
  team_id?: string
  createdAt?: number
  createdBy?: string
  deletedAt?: number
  environment?: string
  hashKey?: string
  keyValue?: string
  label?: string
  partialKeyValue?: string
  projectId?: string
  sdkKeyType?: string
  tokenValue?: string
  type?: string
  updatedAt?: number
}

export interface GlobalConfig {
  createdAt: number
  createdBy?: string
  deletedAt?: number
  digest: string
  id: string
  itemCount: number
  items?: Record<string, any>
  ownerId: string
  purpose?: any
  schema?: Record<string, any>
  sizeInBytes: number
  slug: string
  syncedToDynamoAt?: number
  transfer: Record<string, any>
  updatedAt: number
}

export interface GlobalConfigLoadMatch {
  id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain load:
  //   'schema'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GlobalConfigListMatch {
  id: string
  limit?: number
  metadata?: string
  next?: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain list:
  //   'backup'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GlobalConfigCreateData {
  slug?: string
  team_id?: string
  createdAt: number
  createdBy?: string
  deletedAt?: number
  digest: string
  id: string
  itemCount: number
  items?: Record<string, any>
  ownerId: string
  purpose?: any
  schema?: Record<string, any>
  sizeInBytes: number
  syncedToDynamoAt?: number
  transfer: Record<string, any>
  updatedAt: number

  // Selects a custom action instead of the plain create:
  //   'restore' | 'schema' | 'token'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GlobalConfigUpdateData {
  id: string
  slug?: string
  team_id?: string
  createdAt?: number
  createdBy?: string
  deletedAt?: number
  digest?: string
  itemCount?: number
  items?: Record<string, any>
  ownerId?: string
  purpose?: any
  schema?: Record<string, any>
  sizeInBytes?: number
  syncedToDynamoAt?: number
  transfer?: Record<string, any>
  updatedAt?: number
}

export interface GlobalConfigRemoveMatch {
  id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain remove:
  //   'schema' | 'token'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GlobalConfigItem {
  createdAt: number
  description?: string
  edgeConfigId: string
  id?: string
  key: string
  updatedAt: number
  value: any
}

export interface GlobalConfigItemLoadMatch {
  global_config_id: string
  id: string
  slug?: string
  team_id?: string
}

export interface GlobalConfigItemListMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface GlobalConfigToken {
  createdAt: number
  edgeConfigId: string
  id: string
  label: string
  partialToken: string
  token?: string
}

export interface GlobalConfigTokenLoadMatch {
  global_config_id?: string
  id: string
  slug?: string
  team_id?: string
}

export interface Integration {
  cost?: string
  description: string
  details?: any[]
  disabled?: boolean
  effectiveDate?: string
  envVarEnvironments?: any[]
  highlightedDetails?: any[]
  id: string
  initialCharge?: string
  makeEnvVarsSensitive?: boolean
  maximumAmount?: string
  maximumAmountAutoPurchasePerPeriod?: string
  metadataSchema: Record<string, any>
  minimumAmount?: string
  name: string
  paymentMethodRequired: boolean
  preauthorizationAmount?: number
  primaryProtocol?: string
  projectId: string
  protocols: Record<string, any>
  quote?: any[]
  scope: string
  slug: string
  type: string
}

export interface IntegrationLoadMatch {
  id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain load:
  //   'configuration' | 'search_repo'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IntegrationListMatch {
  configuration_id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain list:
  //   'git_namespace'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IntegrationCreateData {
  installation_id: string
  resource_id: string
  slug?: string
  team_id?: string
  cost?: string
  description: string
  details?: any[]
  disabled?: boolean
  effectiveDate?: string
  envVarEnvironments?: any[]
  highlightedDetails?: any[]
  id: string
  initialCharge?: string
  makeEnvVarsSensitive?: boolean
  maximumAmount?: string
  maximumAmountAutoPurchasePerPeriod?: string
  metadataSchema: Record<string, any>
  minimumAmount?: string
  name: string
  paymentMethodRequired: boolean
  preauthorizationAmount?: number
  primaryProtocol?: string
  projectId: string
  protocols: Record<string, any>
  quote?: any[]
  scope: string
  type: string

  // Selects a custom action instead of the plain create:
  //   'direct'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IntegrationRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface Kms {
  activation?: string
  alg?: string
  algorithm: string
  claims?: Record<string, any>
  claimsSchema?: Record<string, any>
  createdAt: string
  environments: any[]
  headers?: Record<string, any>
  id: string
  importKey?: string
  importKeyId?: string
  keyId: string
  key_ops?: any[]
  kid?: string
  kind: string
  kty?: string
  managedBy?: string
  message: string
  name: string
  origin: string
  ownerId: string
  policies: any[]
  projectId: string
  revokePreviousAfterHours?: number
  revokePreviousAt?: any
  signature: string
  signingKeys: any[]
  token: string
  tokenClaims?: Record<string, any>
  ttl?: number
  updatedAt: string
  use?: string
  x5c?: any[]
  x5tS256?: string
}

export interface KmsLoadMatch {
  issuer_id: string
  slug?: string
  team_id?: string
}

export interface KmsListMatch {
  limit?: number
  next?: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain list:
  //   'issuer'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface KmsCreateData {
  issuer_id: string
  key_id?: string
  slug?: string
  team_id?: string
  activation?: string
  alg?: string
  algorithm: string
  claims?: Record<string, any>
  claimsSchema?: Record<string, any>
  createdAt: string
  environments: any[]
  headers?: Record<string, any>
  id: string
  importKey?: string
  importKeyId?: string
  keyId: string
  key_ops?: any[]
  kid?: string
  kind: string
  kty?: string
  managedBy?: string
  message: string
  name: string
  origin: string
  ownerId: string
  policies: any[]
  projectId: string
  revokePreviousAfterHours?: number
  revokePreviousAt?: any
  signature: string
  signingKeys: any[]
  token: string
  tokenClaims?: Record<string, any>
  ttl?: number
  updatedAt: string
  use?: string
  x5c?: any[]
  x5tS256?: string

  // Selects a custom action instead of the plain create:
  //   'issuer'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface KmsUpdateData {
  issuer_id: string
  kind?: string
  policy_key?: string
  slug?: string
  team_id?: string
  activation?: string
  alg?: string
  algorithm?: string
  claims?: Record<string, any>
  claimsSchema?: Record<string, any>
  createdAt?: string
  environments?: any[]
  headers?: Record<string, any>
  id?: string
  importKey?: string
  importKeyId?: string
  keyId?: string
  key_ops?: any[]
  kid?: string
  kty?: string
  managedBy?: string
  message?: string
  name?: string
  origin?: string
  ownerId?: string
  policies?: any[]
  projectId?: string
  revokePreviousAfterHours?: number
  revokePreviousAt?: any
  signature?: string
  signingKeys?: any[]
  token?: string
  tokenClaims?: Record<string, any>
  ttl?: number
  updatedAt?: string
  use?: string
  x5c?: any[]
  x5tS256?: string
}

export interface KmsRemoveMatch {
  issuer_id: string
  kind?: string
  policy_key?: string
  slug?: string
  team_id?: string
}

export interface ListEventType {
  categories: any[]
  types: any[]
}

export interface ListEventTypeListMatch {
  slug?: string
  team_id?: string
}

export interface Log {
}

export interface LogLoadMatch {
  deployment_id: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface LogDrain {
  branch?: string
  clientId?: string
  configurationId?: string
  createdAt: number
  createdFrom: string
  deliveryFormat: any
  environments?: any[]
  headers?: Record<string, any>
  id: string
  integrationConfigurationUri?: string
  integrationIcon?: string
  integrationWebsite?: string
  name?: string
  ownerId: string
  projectId?: string
  projectIds?: any[]
  projectsMetadata?: any[]
  samplingRate?: number
  secret?: string
  source: any
  sources: any[]
  url: string
}

export interface LogDrainLoadMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface LogDrainListMatch {
  slug?: string
  team_id?: string
}

export interface LogDrainCreateData {
  slug?: string
  team_id?: string
  branch?: string
  clientId?: string
  configurationId?: string
  createdAt: number
  createdFrom: string
  deliveryFormat: any
  environments?: any[]
  headers?: Record<string, any>
  id: string
  integrationConfigurationUri?: string
  integrationIcon?: string
  integrationWebsite?: string
  name?: string
  ownerId: string
  projectId?: string
  projectIds?: any[]
  projectsMetadata?: any[]
  samplingRate?: number
  secret?: string
  source: any
  sources: any[]
  url: string
}

export interface LogDrainRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface Marketplace {
  access_token: string
  already_revoked: boolean
  balances: any[]
  billing: any
  billingPlan: Record<string, any>
  billingPlanId?: string
  category?: string
  client_id?: string
  client_secret: string
  created: string
  createdAt?: number
  data: Record<string, any>
  description?: string
  discounts?: any[]
  email: string
  eod: string
  event: any
  expires_in: number
  externalId?: string
  extras?: Record<string, any>
  final?: boolean
  globalUserId?: string
  id: string
  internalId: string
  invoiceDate: string
  invoiceId: string
  invoiceNumber?: string
  isArchived?: boolean
  items: any[]
  memo?: string
  metadata?: Record<string, any>
  name: string
  notification: Record<string, any>
  origin: string
  ownership?: string
  paidAt?: string
  partial?: boolean
  partnerId: string
  period: Record<string, any>
  productId: string
  protocolSettings?: Record<string, any>
  refundReason?: string
  refundTotal?: string
  refundedAt?: string
  revoked: boolean
  role: string
  scope: string
  secrets: any[]
  slug: string
  state: string
  status?: string
  test?: boolean
  timestamp: string
  token: string
  token_type: string
  total: string
  updated: string
  updatedAt?: number
  usage: any[]
  userEmail?: string
  validationErrors?: any[]
}

export interface MarketplaceLoadMatch {
  installation_id: string
  invoice_id?: string
  member_id?: string
  resource_id?: string
}

export interface MarketplaceListMatch {
  installation_id: string
}

export interface MarketplaceCreateData {
  installation_id: string
  invoice_id?: string
  resource_id?: string
  access_token: string
  already_revoked: boolean
  balances: any[]
  billing: any
  billingPlan: Record<string, any>
  billingPlanId?: string
  category?: string
  client_id?: string
  client_secret: string
  created: string
  createdAt?: number
  data: Record<string, any>
  description?: string
  discounts?: any[]
  email: string
  eod: string
  event: any
  expires_in: number
  externalId?: string
  extras?: Record<string, any>
  final?: boolean
  globalUserId?: string
  id: string
  internalId: string
  invoiceDate: string
  invoiceId: string
  invoiceNumber?: string
  isArchived?: boolean
  items: any[]
  memo?: string
  metadata?: Record<string, any>
  name: string
  notification: Record<string, any>
  origin: string
  ownership?: string
  paidAt?: string
  partial?: boolean
  partnerId: string
  period: Record<string, any>
  productId: string
  protocolSettings?: Record<string, any>
  refundReason?: string
  refundTotal?: string
  refundedAt?: string
  revoked: boolean
  role: string
  scope: string
  secrets: any[]
  slug: string
  state: string
  status?: string
  test?: boolean
  timestamp: string
  token: string
  token_type: string
  total: string
  updated: string
  updatedAt?: number
  usage: any[]
  userEmail?: string
  validationErrors?: any[]
}

export interface MarketplaceUpdateData {
  installation_id: string
  product_id?: string
  resource_id: string
  access_token?: string
  already_revoked?: boolean
  balances?: any[]
  billing?: any
  billingPlan?: Record<string, any>
  billingPlanId?: string
  category?: string
  client_id?: string
  client_secret?: string
  created?: string
  createdAt?: number
  data?: Record<string, any>
  description?: string
  discounts?: any[]
  email?: string
  eod?: string
  event?: any
  expires_in?: number
  externalId?: string
  extras?: Record<string, any>
  final?: boolean
  globalUserId?: string
  id?: string
  internalId?: string
  invoiceDate?: string
  invoiceId?: string
  invoiceNumber?: string
  isArchived?: boolean
  items?: any[]
  memo?: string
  metadata?: Record<string, any>
  name?: string
  notification?: Record<string, any>
  origin?: string
  ownership?: string
  paidAt?: string
  partial?: boolean
  partnerId?: string
  period?: Record<string, any>
  productId?: string
  protocolSettings?: Record<string, any>
  refundReason?: string
  refundTotal?: string
  refundedAt?: string
  revoked?: boolean
  role?: string
  scope?: string
  secrets?: any[]
  slug?: string
  state?: string
  status?: string
  test?: boolean
  timestamp?: string
  token?: string
  token_type?: string
  total?: string
  updated?: string
  updatedAt?: number
  usage?: any[]
  userEmail?: string
  validationErrors?: any[]
}

export interface MarketplaceRemoveMatch {
  installation_id: string
  item_id?: string
  resource_id: string
}

export interface Microfrontend {
  abuse: Record<string, any>
  accountId: string
  alias: any[]
  analytics: Record<string, any>
  applications: Record<string, any>
  appliedCve55182Migration?: boolean
  autoAssignCustomDomains?: boolean
  autoAssignCustomDomainsUpdatedBy?: string
  autoExposeSystemEnvs?: boolean
  avatar?: string
  blobs?: Record<string, any>
  buildCommand?: string
  commandForIgnoringBuildStep?: string
  concurrencyBucketName?: string
  connectBuildsEnabled?: boolean
  connectConfigurationId?: string
  connectConfigurations?: any[]
  createdAt?: number
  creator?: any
  crons: Record<string, any>
  customEnvironments?: any[]
  customerSupportCodeVisibility?: boolean
  dataCache: Record<string, any>
  defaultResourceConfig: Record<string, any>
  deploymentExpiration: Record<string, any>
  deploymentPolicy?: Record<string, any>
  devCommand?: string
  directoryListing: boolean
  dismissedToasts?: any[]
  enableAffectedProjectsDeployments?: boolean
  enableExternalRewriteCaching?: boolean
  enablePreviewFeedback?: boolean
  enableProductionFeedback?: boolean
  env?: any[]
  expiration?: any
  features?: Record<string, any>
  framework?: string
  gitComments: Record<string, any>
  gitForkProtection?: boolean
  gitLFS?: boolean
  gitProviderOptions: Record<string, any>
  hasActiveBranches?: boolean
  hasDeployments?: boolean
  id: string
  installCommand?: string
  internalRoutes?: any[]
  ipBuckets?: any[]
  jobs?: Record<string, any>
  lastAliasRequest: Record<string, any>
  lastRollbackTarget?: Record<string, any>
  latestDeployments?: any[]
  link?: string
  live?: boolean
  microfrontends?: any
  name: string
  nodeVersion: string
  oidcTokenConfig?: Record<string, any>
  options?: Record<string, any>
  optionsAllowlist: Record<string, any>
  outputDirectory?: string
  passiveConnectConfigurationId?: string
  passport: Record<string, any>
  passwordProtection?: Record<string, any>
  paused?: boolean
  permissions?: Record<string, any>
  productionDeploymentsFastLane?: boolean
  protectedSourcemaps?: boolean
  protectionBypass?: Record<string, any>
  protectionConfig?: Record<string, any>
  resourceConfig: Record<string, any>
  rollbackDescription: Record<string, any>
  rollingRelease: Record<string, any>
  rootDirectory?: string
  sandbox?: Record<string, any>
  schema?: string
  security?: Record<string, any>
  serverlessFunctionZeroConfigFailover?: boolean
  services?: any[]
  skewProtectionAllowedDomains?: any[]
  skewProtectionBoundaryAt?: number
  skewProtectionMaxAge?: number
  skipGitConnectDuringLink?: boolean
  sourceFilesOutsideRootDirectory?: boolean
  speedInsights: Record<string, any>
  ssoProtection: Record<string, any>
  staticIps: Record<string, any>
  targets?: Record<string, any>
  tier?: string
  tracing?: Record<string, any>
  transferCompletedAt?: number
  transferStartedAt?: number
  transferToAccountId?: string
  transferredFromAccountId?: string
  trustedIps?: any
  trustedSources?: Record<string, any>
  updatedAt?: number
  usageStatus: Record<string, any>
  v0?: boolean
  v0Created?: boolean
  version?: string
  webAnalytics: Record<string, any>
}

export interface MicrofrontendLoadMatch {
  project_id_or_name: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain load:
  //   'config' | 'group'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MicrofrontendListMatch {
  group_id: string
  slug?: string
  team_id?: string
}

export interface MicrofrontendCreateData {
  slug?: string
  team_id?: string
  abuse: Record<string, any>
  accountId: string
  alias: any[]
  analytics: Record<string, any>
  applications: Record<string, any>
  appliedCve55182Migration?: boolean
  autoAssignCustomDomains?: boolean
  autoAssignCustomDomainsUpdatedBy?: string
  autoExposeSystemEnvs?: boolean
  avatar?: string
  blobs?: Record<string, any>
  buildCommand?: string
  commandForIgnoringBuildStep?: string
  concurrencyBucketName?: string
  connectBuildsEnabled?: boolean
  connectConfigurationId?: string
  connectConfigurations?: any[]
  createdAt?: number
  creator?: any
  crons: Record<string, any>
  customEnvironments?: any[]
  customerSupportCodeVisibility?: boolean
  dataCache: Record<string, any>
  defaultResourceConfig: Record<string, any>
  deploymentExpiration: Record<string, any>
  deploymentPolicy?: Record<string, any>
  devCommand?: string
  directoryListing: boolean
  dismissedToasts?: any[]
  enableAffectedProjectsDeployments?: boolean
  enableExternalRewriteCaching?: boolean
  enablePreviewFeedback?: boolean
  enableProductionFeedback?: boolean
  env?: any[]
  expiration?: any
  features?: Record<string, any>
  framework?: string
  gitComments: Record<string, any>
  gitForkProtection?: boolean
  gitLFS?: boolean
  gitProviderOptions: Record<string, any>
  hasActiveBranches?: boolean
  hasDeployments?: boolean
  id: string
  installCommand?: string
  internalRoutes?: any[]
  ipBuckets?: any[]
  jobs?: Record<string, any>
  lastAliasRequest: Record<string, any>
  lastRollbackTarget?: Record<string, any>
  latestDeployments?: any[]
  link?: string
  live?: boolean
  microfrontends?: any
  name: string
  nodeVersion: string
  oidcTokenConfig?: Record<string, any>
  options?: Record<string, any>
  optionsAllowlist: Record<string, any>
  outputDirectory?: string
  passiveConnectConfigurationId?: string
  passport: Record<string, any>
  passwordProtection?: Record<string, any>
  paused?: boolean
  permissions?: Record<string, any>
  productionDeploymentsFastLane?: boolean
  protectedSourcemaps?: boolean
  protectionBypass?: Record<string, any>
  protectionConfig?: Record<string, any>
  resourceConfig: Record<string, any>
  rollbackDescription: Record<string, any>
  rollingRelease: Record<string, any>
  rootDirectory?: string
  sandbox?: Record<string, any>
  schema?: string
  security?: Record<string, any>
  serverlessFunctionZeroConfigFailover?: boolean
  services?: any[]
  skewProtectionAllowedDomains?: any[]
  skewProtectionBoundaryAt?: number
  skewProtectionMaxAge?: number
  skipGitConnectDuringLink?: boolean
  sourceFilesOutsideRootDirectory?: boolean
  speedInsights: Record<string, any>
  ssoProtection: Record<string, any>
  staticIps: Record<string, any>
  targets?: Record<string, any>
  tier?: string
  tracing?: Record<string, any>
  transferCompletedAt?: number
  transferStartedAt?: number
  transferToAccountId?: string
  transferredFromAccountId?: string
  trustedIps?: any
  trustedSources?: Record<string, any>
  updatedAt?: number
  usageStatus: Record<string, any>
  v0?: boolean
  v0Created?: boolean
  version?: string
  webAnalytics: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'group'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Network {
  awsAccountId: string
  awsAvailabilityZoneIds?: any[]
  awsRegion: string
  cidr: string
  createdAt: number
  egressIpAddresses?: any[]
  hostedZones: Record<string, any>
  id: string
  name: string
  peeringConnections: Record<string, any>
  projects: Record<string, any>
  region?: string
  status: string
  teamId: string
  vpcId?: string
}

export interface NetworkLoadMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface NetworkListMatch {
  include_hosted_zone?: boolean
  include_peering_connection?: boolean
  include_project?: boolean
  search?: string
  slug?: string
  team_id?: string
}

export interface NetworkCreateData {
  slug?: string
  team_id?: string
  awsAccountId: string
  awsAvailabilityZoneIds?: any[]
  awsRegion: string
  cidr: string
  createdAt: number
  egressIpAddresses?: any[]
  hostedZones: Record<string, any>
  id: string
  name: string
  peeringConnections: Record<string, any>
  projects: Record<string, any>
  region?: string
  status: string
  teamId: string
  vpcId?: string
}

export interface NetworkUpdateData {
  id: string
  slug?: string
  team_id?: string
  awsAccountId?: string
  awsAvailabilityZoneIds?: any[]
  awsRegion?: string
  cidr?: string
  createdAt?: number
  egressIpAddresses?: any[]
  hostedZones?: Record<string, any>
  name?: string
  peeringConnections?: Record<string, any>
  projects?: Record<string, any>
  region?: string
  status?: string
  teamId?: string
  vpcId?: string
}

export interface NetworkRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface Networking {
  builds?: boolean
  regions?: any[]
}

export interface NetworkingUpdateData {
  id_or_name: string
  slug?: string
  team_id?: string
  builds?: boolean
  regions?: any[]
}

export interface NetworkingRemoveMatch {
  endpoint_id: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface Observability {
  disabled: boolean
  disabledAt?: number
  id: string
  name?: string
}

export interface ObservabilityListMatch {
  slug?: string
  team_id?: string
}

export interface ObservabilityUpdateData {
  project_id_or_name: string
  slug?: string
  team_id?: string
  disabled?: boolean
  disabledAt?: number
  id?: string
  name?: string
}

export interface PrivateLinkEndpoint {
  awsDnsEntries?: any[]
  awsServiceName: string
  createdAt: number
  enablePrivateDns?: boolean
  endpointId: string
  id?: string
  name: string
  privateDnsNames?: any[]
  projectId: string
  status: string
  statusMessage?: string
  teamId: string
  updatedAt: number
  vercelRegion: string
  vpcEndpointId?: string
}

export interface PrivateLinkEndpointLoadMatch {
  id: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface PrivateLinkEndpointListMatch {
  project_id: string
  slug?: string
  team_id?: string
}

export interface PrivateLinkEndpointCreateData {
  slug?: string
  team_id?: string
  awsDnsEntries?: any[]
  awsServiceName: string
  createdAt: number
  enablePrivateDns?: boolean
  endpointId: string
  id?: string
  name: string
  privateDnsNames?: any[]
  projectId: string
  status: string
  statusMessage?: string
  teamId: string
  updatedAt: number
  vercelRegion: string
  vpcEndpointId?: string
}

export interface PrivateLinkEndpointUpdateData {
  id: string
  project_id: string
  slug?: string
  team_id?: string
  awsDnsEntries?: any[]
  awsServiceName?: string
  createdAt?: number
  enablePrivateDns?: boolean
  endpointId?: string
  name?: string
  privateDnsNames?: any[]
  projectId?: string
  status?: string
  statusMessage?: string
  teamId?: string
  updatedAt?: number
  vercelRegion?: string
  vpcEndpointId?: string
}

export interface Project {
  abuse: Record<string, any>
  acceptedPolicies?: Record<string, any>
  accountId: string
  alias: any[]
  analytics: Record<string, any>
  apexName: string
  appliedCve55182Migration?: boolean
  autoAssignCustomDomains?: boolean
  autoAssignCustomDomainsUpdatedBy?: string
  autoExposeSystemEnvs?: boolean
  avatar?: string
  blobs?: Record<string, any>
  buildCommand?: string
  commandForIgnoringBuildStep?: string
  comment?: string
  concurrencyBucketName?: string
  configurationId?: string
  connectBuildsEnabled?: boolean
  connectConfigurationId?: string
  connectConfigurations?: any[]
  contentHint?: any
  createdAt?: number
  createdBy?: string
  creator?: any
  crons: Record<string, any>
  customEnvironmentId?: string
  customEnvironmentIds?: any[]
  customEnvironments?: any[]
  customerSupportCodeVisibility?: boolean
  dataCache: Record<string, any>
  decrypted?: boolean
  defaultResourceConfig: Record<string, any>
  deploymentExpiration: Record<string, any>
  deploymentPolicy?: Record<string, any>
  devCommand?: string
  directoryListing: boolean
  dismissedToasts?: any[]
  edgeConfigId?: string
  edgeConfigTokenId?: string
  enableAffectedProjectsDeployments?: boolean
  enableExternalRewriteCaching?: boolean
  enablePreviewFeedback?: boolean
  enableProductionFeedback?: boolean
  env?: any[]
  environmentVariables?: any[]
  expiration?: any
  features?: Record<string, any>
  framework?: string
  gitBranch?: string
  gitComments: Record<string, any>
  gitForkProtection?: boolean
  gitLFS?: boolean
  gitProviderOptions: Record<string, any>
  gitRepository: Record<string, any>
  hasActiveBranches?: boolean
  hasDeployments?: boolean
  hostname: string
  id: string
  installCommand?: string
  integrations?: any[]
  internalContentHint: Record<string, any>
  internalRoutes?: any[]
  ipBuckets?: any[]
  jobs?: Record<string, any>
  key: string
  lastAliasRequest: Record<string, any>
  lastRollbackTarget?: Record<string, any>
  latestDeployments?: any[]
  legacyValue?: string
  link?: string
  live?: boolean
  microfrontends?: any
  name: string
  newProjectName?: string
  nodeVersion: string
  oidcTokenConfig?: Record<string, any>
  optionsAllowlist: Record<string, any>
  outputDirectory?: string
  paidFeatures?: Record<string, any>
  passiveConnectConfigurationId?: string
  passport: Record<string, any>
  passwordProtection?: Record<string, any>
  paused?: boolean
  permissions?: Record<string, any>
  previewDeploymentSuffix?: string
  previewDeploymentsDisabled?: boolean
  productionDeploymentsFastLane?: boolean
  projectId: string
  protectedSourcemaps?: boolean
  protectionBypass?: Record<string, any>
  protectionConfig?: Record<string, any>
  publicSource?: boolean
  redirect?: string
  redirectStatusCode?: number
  resourceConfig: Record<string, any>
  rollbackDescription: Record<string, any>
  rollingRelease: Record<string, any>
  rootDirectory?: string
  sandbox?: Record<string, any>
  security?: Record<string, any>
  serverlessFunctionRegion?: string
  serverlessFunctionZeroConfigFailover?: boolean
  services?: any[]
  skewProtectionAllowedDomains?: any[]
  skewProtectionBoundaryAt?: number
  skewProtectionMaxAge?: number
  skipGitConnectDuringLink?: boolean
  sourceFilesOutsideRootDirectory?: boolean
  speedInsights: Record<string, any>
  ssoProtection: Record<string, any>
  staticIps: Record<string, any>
  sunsetSecretId?: string
  target?: any
  targets?: Record<string, any>
  tier?: string
  token: string
  tracing?: Record<string, any>
  transferCompletedAt?: number
  transferStartedAt?: number
  transferToAccountId?: string
  transferredFromAccountId?: string
  trustedIps?: any
  trustedSources?: Record<string, any>
  type: string
  updatedAt?: number
  updatedBy?: string
  usageStatus: Record<string, any>
  v0?: boolean
  v0Created?: boolean
  value: string
  verification?: any[]
  verified: boolean
  visibility?: string
  webAnalytics: Record<string, any>
}

export interface ProjectLoadMatch {
  id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain load:
  //   'domain' | 'env' | 'promote_alias' | 'trace'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectCreateData {
  deployment_id: string
  id: string
  description?: string
  slug?: string
  team_id?: string
  abuse: Record<string, any>
  acceptedPolicies?: Record<string, any>
  accountId: string
  alias: any[]
  analytics: Record<string, any>
  apexName: string
  appliedCve55182Migration?: boolean
  autoAssignCustomDomains?: boolean
  autoAssignCustomDomainsUpdatedBy?: string
  autoExposeSystemEnvs?: boolean
  avatar?: string
  blobs?: Record<string, any>
  buildCommand?: string
  commandForIgnoringBuildStep?: string
  comment?: string
  concurrencyBucketName?: string
  configurationId?: string
  connectBuildsEnabled?: boolean
  connectConfigurationId?: string
  connectConfigurations?: any[]
  contentHint?: any
  createdAt?: number
  createdBy?: string
  creator?: any
  crons: Record<string, any>
  customEnvironmentId?: string
  customEnvironmentIds?: any[]
  customEnvironments?: any[]
  customerSupportCodeVisibility?: boolean
  dataCache: Record<string, any>
  decrypted?: boolean
  defaultResourceConfig: Record<string, any>
  deploymentExpiration: Record<string, any>
  deploymentPolicy?: Record<string, any>
  devCommand?: string
  directoryListing: boolean
  dismissedToasts?: any[]
  edgeConfigId?: string
  edgeConfigTokenId?: string
  enableAffectedProjectsDeployments?: boolean
  enableExternalRewriteCaching?: boolean
  enablePreviewFeedback?: boolean
  enableProductionFeedback?: boolean
  env?: any[]
  environmentVariables?: any[]
  expiration?: any
  features?: Record<string, any>
  framework?: string
  gitBranch?: string
  gitComments: Record<string, any>
  gitForkProtection?: boolean
  gitLFS?: boolean
  gitProviderOptions: Record<string, any>
  gitRepository: Record<string, any>
  hasActiveBranches?: boolean
  hasDeployments?: boolean
  hostname: string
  installCommand?: string
  integrations?: any[]
  internalContentHint: Record<string, any>
  internalRoutes?: any[]
  ipBuckets?: any[]
  jobs?: Record<string, any>
  key: string
  lastAliasRequest: Record<string, any>
  lastRollbackTarget?: Record<string, any>
  latestDeployments?: any[]
  legacyValue?: string
  link?: string
  live?: boolean
  microfrontends?: any
  name: string
  newProjectName?: string
  nodeVersion: string
  oidcTokenConfig?: Record<string, any>
  optionsAllowlist: Record<string, any>
  outputDirectory?: string
  paidFeatures?: Record<string, any>
  passiveConnectConfigurationId?: string
  passport: Record<string, any>
  passwordProtection?: Record<string, any>
  paused?: boolean
  permissions?: Record<string, any>
  previewDeploymentSuffix?: string
  previewDeploymentsDisabled?: boolean
  productionDeploymentsFastLane?: boolean
  projectId: string
  protectedSourcemaps?: boolean
  protectionBypass?: Record<string, any>
  protectionConfig?: Record<string, any>
  publicSource?: boolean
  redirect?: string
  redirectStatusCode?: number
  resourceConfig: Record<string, any>
  rollbackDescription: Record<string, any>
  rollingRelease: Record<string, any>
  rootDirectory?: string
  sandbox?: Record<string, any>
  security?: Record<string, any>
  serverlessFunctionRegion?: string
  serverlessFunctionZeroConfigFailover?: boolean
  services?: any[]
  skewProtectionAllowedDomains?: any[]
  skewProtectionBoundaryAt?: number
  skewProtectionMaxAge?: number
  skipGitConnectDuringLink?: boolean
  sourceFilesOutsideRootDirectory?: boolean
  speedInsights: Record<string, any>
  ssoProtection: Record<string, any>
  staticIps: Record<string, any>
  sunsetSecretId?: string
  target?: any
  targets?: Record<string, any>
  tier?: string
  token: string
  tracing?: Record<string, any>
  transferCompletedAt?: number
  transferStartedAt?: number
  transferToAccountId?: string
  transferredFromAccountId?: string
  trustedIps?: any
  trustedSources?: Record<string, any>
  type: string
  updatedAt?: number
  updatedBy?: string
  usageStatus: Record<string, any>
  v0?: boolean
  v0Created?: boolean
  value: string
  verification?: any[]
  verified: boolean
  visibility?: string
  webAnalytics: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'avatar' | 'domain' | 'env' | 'pause' | 'token' | 'transfer_request' | 'unpause' | 'verify'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectUpdateData {
  code: string
  slug?: string
  team_id?: string
  abuse?: Record<string, any>
  acceptedPolicies?: Record<string, any>
  accountId?: string
  alias?: any[]
  analytics?: Record<string, any>
  apexName?: string
  appliedCve55182Migration?: boolean
  autoAssignCustomDomains?: boolean
  autoAssignCustomDomainsUpdatedBy?: string
  autoExposeSystemEnvs?: boolean
  avatar?: string
  blobs?: Record<string, any>
  buildCommand?: string
  commandForIgnoringBuildStep?: string
  comment?: string
  concurrencyBucketName?: string
  configurationId?: string
  connectBuildsEnabled?: boolean
  connectConfigurationId?: string
  connectConfigurations?: any[]
  contentHint?: any
  createdAt?: number
  createdBy?: string
  creator?: any
  crons?: Record<string, any>
  customEnvironmentId?: string
  customEnvironmentIds?: any[]
  customEnvironments?: any[]
  customerSupportCodeVisibility?: boolean
  dataCache?: Record<string, any>
  decrypted?: boolean
  defaultResourceConfig?: Record<string, any>
  deploymentExpiration?: Record<string, any>
  deploymentPolicy?: Record<string, any>
  devCommand?: string
  directoryListing?: boolean
  dismissedToasts?: any[]
  edgeConfigId?: string
  edgeConfigTokenId?: string
  enableAffectedProjectsDeployments?: boolean
  enableExternalRewriteCaching?: boolean
  enablePreviewFeedback?: boolean
  enableProductionFeedback?: boolean
  env?: any[]
  environmentVariables?: any[]
  expiration?: any
  features?: Record<string, any>
  framework?: string
  gitBranch?: string
  gitComments?: Record<string, any>
  gitForkProtection?: boolean
  gitLFS?: boolean
  gitProviderOptions?: Record<string, any>
  gitRepository?: Record<string, any>
  hasActiveBranches?: boolean
  hasDeployments?: boolean
  hostname?: string
  id?: string
  installCommand?: string
  integrations?: any[]
  internalContentHint?: Record<string, any>
  internalRoutes?: any[]
  ipBuckets?: any[]
  jobs?: Record<string, any>
  key?: string
  lastAliasRequest?: Record<string, any>
  lastRollbackTarget?: Record<string, any>
  latestDeployments?: any[]
  legacyValue?: string
  link?: string
  live?: boolean
  microfrontends?: any
  name?: string
  newProjectName?: string
  nodeVersion?: string
  oidcTokenConfig?: Record<string, any>
  optionsAllowlist?: Record<string, any>
  outputDirectory?: string
  paidFeatures?: Record<string, any>
  passiveConnectConfigurationId?: string
  passport?: Record<string, any>
  passwordProtection?: Record<string, any>
  paused?: boolean
  permissions?: Record<string, any>
  previewDeploymentSuffix?: string
  previewDeploymentsDisabled?: boolean
  productionDeploymentsFastLane?: boolean
  projectId?: string
  protectedSourcemaps?: boolean
  protectionBypass?: Record<string, any>
  protectionConfig?: Record<string, any>
  publicSource?: boolean
  redirect?: string
  redirectStatusCode?: number
  resourceConfig?: Record<string, any>
  rollbackDescription?: Record<string, any>
  rollingRelease?: Record<string, any>
  rootDirectory?: string
  sandbox?: Record<string, any>
  security?: Record<string, any>
  serverlessFunctionRegion?: string
  serverlessFunctionZeroConfigFailover?: boolean
  services?: any[]
  skewProtectionAllowedDomains?: any[]
  skewProtectionBoundaryAt?: number
  skewProtectionMaxAge?: number
  skipGitConnectDuringLink?: boolean
  sourceFilesOutsideRootDirectory?: boolean
  speedInsights?: Record<string, any>
  ssoProtection?: Record<string, any>
  staticIps?: Record<string, any>
  sunsetSecretId?: string
  target?: any
  targets?: Record<string, any>
  tier?: string
  token?: string
  tracing?: Record<string, any>
  transferCompletedAt?: number
  transferStartedAt?: number
  transferToAccountId?: string
  transferredFromAccountId?: string
  trustedIps?: any
  trustedSources?: Record<string, any>
  type?: string
  updatedAt?: number
  updatedBy?: string
  usageStatus?: Record<string, any>
  v0?: boolean
  v0Created?: boolean
  value?: string
  verification?: any[]
  verified?: boolean
  visibility?: string
  webAnalytics?: Record<string, any>
}

export interface ProjectRemoveMatch {
  id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain remove:
  //   'env'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectMember {
  email?: string
  id: string
  role: string
  uid?: string
  username?: string
}

export interface ProjectMemberLoadMatch {
  id_or_name: string
  limit?: number
  search?: string
  since?: number
  slug?: string
  team_id?: string
  until?: number
}

export interface ProjectMemberCreateData {
  id_or_name: string
  slug?: string
  team_id?: string
  email?: string
  id: string
  role: string
  uid?: string
  username?: string
}

export interface ProjectMemberRemoveMatch {
  id: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface ProjectRoute {
  action: string
  actions: any[]
  alias?: string
  conditions?: any[]
  createdBy: string
  currentRoute: Record<string, any>
  description: string
  id: string
  isLive?: boolean
  isStaging?: boolean
  lastModified: number
  name: string
  overwrite?: boolean
  pathCondition: Record<string, any>
  position?: Record<string, any>
  prompt: string
  restore?: boolean
  route: Record<string, any>
  routes?: any[]
  ruleCount?: number
  s3Key: string
  version: Record<string, any>
}

export interface ProjectRouteLoadMatch {
  id: string
  diff?: any
  filter?: string
  q?: string
  slug?: string
  team_id?: string
  version_id?: string
}

export interface ProjectRouteListMatch {
  project_id: string
  slug?: string
  team_id?: string
}

export interface ProjectRouteCreateData {
  id: string
  slug?: string
  team_id?: string
  action: string
  actions: any[]
  alias?: string
  conditions?: any[]
  createdBy: string
  currentRoute: Record<string, any>
  description: string
  isLive?: boolean
  isStaging?: boolean
  lastModified: number
  name: string
  overwrite?: boolean
  pathCondition: Record<string, any>
  position?: Record<string, any>
  prompt: string
  restore?: boolean
  route: Record<string, any>
  routes?: any[]
  ruleCount?: number
  s3Key: string
  version: Record<string, any>
}

export interface ProjectRouteUpdateData {
  id: string
  slug?: string
  team_id?: string
  action?: string
  actions?: any[]
  alias?: string
  conditions?: any[]
  createdBy?: string
  currentRoute?: Record<string, any>
  description?: string
  isLive?: boolean
  isStaging?: boolean
  lastModified?: number
  name?: string
  overwrite?: boolean
  pathCondition?: Record<string, any>
  position?: Record<string, any>
  prompt?: string
  restore?: boolean
  route?: Record<string, any>
  routes?: any[]
  ruleCount?: number
  s3Key?: string
  version?: Record<string, any>
}

export interface ProjectRouteRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface Query {
  aggregation?: string
  bucketTimezone?: string
  endTime?: string
  filter?: string
  granularity?: Record<string, any>
  groupBy?: any[]
  limit?: number
  metric: string
  orderBy?: string
  orderDirection?: string
  scope: Record<string, any>
  startTime?: string
}

export interface QueryCreateData {
  aggregation?: string
  bucketTimezone?: string
  endTime?: string
  filter?: string
  granularity?: Record<string, any>
  groupBy?: any[]
  limit?: number
  metric: string
  orderBy?: string
  orderDirection?: string
  scope: Record<string, any>
  startTime?: string
}

export interface RecordType {
  comment?: string
  createdAt?: number
  creator: string
  domain: string
  id: string
  name: string
  recordType: string
  ttl?: number
  type: string
  value: string
}

export interface RecordLoadMatch {
  id: string
}

export interface RollingRelease {
  activeStage: Record<string, any>
  advancementType: string
  canaryDeployment: Record<string, any>
  currentCanaryPercentage?: number
  currentDeployment: Record<string, any>
  nextStage: Record<string, any>
  queuedDeploymentId: string
  stages: any[]
  startedAt: number
  state: string
  substate: string
  updatedAt: number
}

export interface RollingReleaseLoadMatch {
  id_or_name: string
  slug?: string
  state?: string
  team_id?: string

  // Selects a custom action instead of the plain load:
  //   'billing' | 'config'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RollingReleaseCreateData {
  project_id: string
  slug?: string
  team_id?: string
  activeStage: Record<string, any>
  advancementType: string
  canaryDeployment: Record<string, any>
  currentCanaryPercentage?: number
  currentDeployment: Record<string, any>
  nextStage: Record<string, any>
  queuedDeploymentId: string
  stages: any[]
  startedAt: number
  state: string
  substate: string
  updatedAt: number

  // Selects a custom action instead of the plain create:
  //   'approve_stage' | 'complete' | 'start'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RollingReleaseUpdateData {
  project_id: string
  slug?: string
  team_id?: string
  activeStage?: Record<string, any>
  advancementType?: string
  canaryDeployment?: Record<string, any>
  currentCanaryPercentage?: number
  currentDeployment?: Record<string, any>
  nextStage?: Record<string, any>
  queuedDeploymentId?: string
  stages?: any[]
  startedAt?: number
  state?: string
  substate?: string
  updatedAt?: number

  // Selects a custom action instead of the plain update:
  //   'config'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RollingReleaseRemoveMatch {
  project_id: string
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain remove:
  //   'config'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Sandbox {
  args: any[]
  command: string
  createdAt: number
  creationMethod?: string
  currentSandboxName?: string
  currentSessionId?: string
  currentSnapshotId?: string
  cwd: string
  durationMs?: number
  env?: Record<string, any>
  exitCode: number
  expiration?: any
  expiresAt?: number
  failoverRegions?: any[]
  id: string
  image?: string
  keepLastSnapshots: Record<string, any>
  lastUsedAt: number
  logs?: boolean
  maxSizeBytes: number
  memory?: number
  mounts?: Record<string, any>
  name: string
  networkId?: string
  networkPolicy?: any
  parentId?: string
  path: string
  persistent?: boolean
  ports?: any[]
  projectId: string
  recursive?: boolean
  region?: string
  regions?: any[]
  resources?: Record<string, any>
  resumed: boolean
  routes: any[]
  runtime?: string
  sandbox: Record<string, any>
  session: Record<string, any>
  sessionId: string
  sizeBytes: number
  snapshotExpiration?: any
  source?: any
  sourceSessionId: string
  startedAt: number
  status: string
  statusUpdatedAt: number
  sudo?: boolean
  tags?: Record<string, any>
  timeout?: number
  totalActiveCpuDurationMs?: number
  totalDurationMs?: number
  totalEgressBytes?: number
  totalIngressBytes?: number
  updatedAt: number
  vcpus?: number
  wait?: boolean
}

export interface SandboxLoadMatch {
  id: string
  project_id?: string
  resume?: boolean
  slug?: string
  team_id?: string

  // Selects a custom action instead of the plain load:
  //   'session' | 'snapshot'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SandboxListMatch {
  cursor?: string
  limit?: number
  name_prefix?: string
  project?: string
  slug?: string
  sort_by?: string
  sort_order?: string
  status?: string
  tag?: any
  team_id?: string

  // Selects a custom action instead of the plain list:
  //   'drif'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SandboxCreateData {
  name: string
  slug?: string
  team_id?: string
  args: any[]
  command: string
  createdAt: number
  creationMethod?: string
  currentSandboxName?: string
  currentSessionId?: string
  currentSnapshotId?: string
  cwd: string
  durationMs?: number
  env?: Record<string, any>
  exitCode: number
  expiration?: any
  expiresAt?: number
  failoverRegions?: any[]
  id: string
  image?: string
  keepLastSnapshots: Record<string, any>
  lastUsedAt: number
  logs?: boolean
  maxSizeBytes: number
  memory?: number
  mounts?: Record<string, any>
  networkId?: string
  networkPolicy?: any
  parentId?: string
  path: string
  persistent?: boolean
  ports?: any[]
  projectId: string
  recursive?: boolean
  region?: string
  regions?: any[]
  resources?: Record<string, any>
  resumed: boolean
  routes: any[]
  runtime?: string
  sandbox: Record<string, any>
  session: Record<string, any>
  sessionId: string
  sizeBytes: number
  snapshotExpiration?: any
  source?: any
  sourceSessionId: string
  startedAt: number
  status: string
  statusUpdatedAt: number
  sudo?: boolean
  tags?: Record<string, any>
  timeout?: number
  totalActiveCpuDurationMs?: number
  totalDurationMs?: number
  totalEgressBytes?: number
  totalIngressBytes?: number
  updatedAt: number
  vcpus?: number
  wait?: boolean

  // Selects a custom action instead of the plain create:
  //   'extend_timeout' | 'fork' | 'fork' | 'kill' | 'network_policy' | 'snapshot' | 'stop'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SandboxUpdateData {
  id: string
  project_id?: string
  resume?: boolean
  slug?: string
  team_id?: string
  args?: any[]
  command?: string
  createdAt?: number
  creationMethod?: string
  currentSandboxName?: string
  currentSessionId?: string
  currentSnapshotId?: string
  cwd?: string
  durationMs?: number
  env?: Record<string, any>
  exitCode?: number
  expiration?: any
  expiresAt?: number
  failoverRegions?: any[]
  image?: string
  keepLastSnapshots?: Record<string, any>
  lastUsedAt?: number
  logs?: boolean
  maxSizeBytes?: number
  memory?: number
  mounts?: Record<string, any>
  name?: string
  networkId?: string
  networkPolicy?: any
  parentId?: string
  path?: string
  persistent?: boolean
  ports?: any[]
  projectId?: string
  recursive?: boolean
  region?: string
  regions?: any[]
  resources?: Record<string, any>
  resumed?: boolean
  routes?: any[]
  runtime?: string
  sandbox?: Record<string, any>
  session?: Record<string, any>
  sessionId?: string
  sizeBytes?: number
  snapshotExpiration?: any
  source?: any
  sourceSessionId?: string
  startedAt?: number
  status?: string
  statusUpdatedAt?: number
  sudo?: boolean
  tags?: Record<string, any>
  timeout?: number
  totalActiveCpuDurationMs?: number
  totalDurationMs?: number
  totalEgressBytes?: number
  totalIngressBytes?: number
  updatedAt?: number
  vcpus?: number
  wait?: boolean
}

export interface SandboxRemoveMatch {
  id: string
  delete_orphan_snapshot?: boolean
  project_id?: string
  slug?: string
  team_id?: string
}

export interface Schema {
  aggregations: any[]
  defaultAggregation: string
  description: string
  dimensions: any[]
  id: string
  unit: string
}

export interface SchemaLoadMatch {
  id: string
}

export interface SchemaListMatch {
  aggregations?: any[]
  defaultAggregation?: string
  description?: string
  dimensions?: any[]
  id?: string
  unit?: string
}

export interface Security {
  Action?: string
  ActorId?: string
  CreatedAt: string
  DeletedAt?: string
  Domain: string
  ExpiresAt?: number
  Id: string
  Ip: string
  IsProjectRule?: boolean
  Note?: string
  OwnerId: string
  ProjectId?: string
  UpdatedAt: string
  UpdatedAtHour: string
  action: Record<string, any>
  action_type: string
  active: boolean
  allSources?: boolean
  botIdEnabled?: boolean
  changes: any[]
  conditionGroup: any[]
  conditions?: any[]
  count: number
  crs: Record<string, any>
  description?: string
  domain?: string
  endTime: string
  firewallEnabled: boolean
  host: string
  id: string
  ips: any[]
  isActive: boolean
  logHeaders?: any
  managedRules?: Record<string, any>
  name: string
  note?: string
  ownerId: string
  projectKey: string
  projectScope?: boolean
  public_ip: string
  ruleId: string
  ruleName: string
  rules: any[]
  rulesets?: any
  sourceIp?: string
  startTime: string
  ttl?: number
  updatedAt: string
  version: number
}

export interface SecurityLoadMatch {
  config_version?: string
  project_id: string
  slug?: string
  team_id?: string
  since?: number
}

export interface SecurityListMatch {
  domain?: string
  limit?: number
  offset?: string
  project_id: string
  project_scope?: boolean
  slug?: string
  source_ip?: string
  team_id?: string
}

export interface SecurityCreateData {
  project_id: string
  slug?: string
  team_id?: string
  Action?: string
  ActorId?: string
  CreatedAt: string
  DeletedAt?: string
  Domain: string
  ExpiresAt?: number
  Id: string
  Ip: string
  IsProjectRule?: boolean
  Note?: string
  OwnerId: string
  ProjectId?: string
  UpdatedAt: string
  UpdatedAtHour: string
  action: Record<string, any>
  action_type: string
  active: boolean
  allSources?: boolean
  botIdEnabled?: boolean
  changes: any[]
  conditionGroup: any[]
  conditions?: any[]
  count: number
  crs: Record<string, any>
  description?: string
  domain?: string
  endTime: string
  firewallEnabled: boolean
  host: string
  id: string
  ips: any[]
  isActive: boolean
  logHeaders?: any
  managedRules?: Record<string, any>
  name: string
  note?: string
  ownerId: string
  projectKey: string
  projectScope?: boolean
  public_ip: string
  ruleId: string
  ruleName: string
  rules: any[]
  rulesets?: any
  sourceIp?: string
  startTime: string
  ttl?: number
  updatedAt: string
  version: number

  // Selects a custom action instead of the plain create:
  //   'activate' | 'attack_mode'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SecurityUpdateData {
  project_id: string
  slug?: string
  team_id?: string
  Action?: string
  ActorId?: string
  CreatedAt?: string
  DeletedAt?: string
  Domain?: string
  ExpiresAt?: number
  Id?: string
  Ip?: string
  IsProjectRule?: boolean
  Note?: string
  OwnerId?: string
  ProjectId?: string
  UpdatedAt?: string
  UpdatedAtHour?: string
  action?: Record<string, any>
  action_type?: string
  active?: boolean
  allSources?: boolean
  botIdEnabled?: boolean
  changes?: any[]
  conditionGroup?: any[]
  conditions?: any[]
  count?: number
  crs?: Record<string, any>
  description?: string
  domain?: string
  endTime?: string
  firewallEnabled?: boolean
  host?: string
  id?: string
  ips?: any[]
  isActive?: boolean
  logHeaders?: any
  managedRules?: Record<string, any>
  name?: string
  note?: string
  ownerId?: string
  projectKey?: string
  projectScope?: boolean
  public_ip?: string
  ruleId?: string
  ruleName?: string
  rules?: any[]
  rulesets?: any
  sourceIp?: string
  startTime?: string
  ttl?: number
  updatedAt?: string
  version?: number
}

export interface SecurityRemoveMatch {
  config_version: string
}

export interface Segment {
  createdAt: number
  createdBy?: string
  data: Record<string, any>
  description?: string
  hint: string
  id: string
  label: string
  metadata?: Record<string, any>
  projectId: string
  slug: string
  typeName: string
  updatedAt: number
  usedByFlags?: any[]
  usedBySegments?: any[]
}

export interface SegmentLoadMatch {
  id: string
  project_id: string
  slug?: string
  team_id?: string
  with_metadata?: boolean
}

export interface Storage {
  access?: string
  count: number
  id?: string
  isTokenExpired: boolean
  kind?: string
  name: string
  projectFilter?: Record<string, any>
  projectId?: string
  projectsMetadata: any[]
  region: string
  size: number
  status: string
  totalConnectedProjects?: number
  usageQuotaExceeded: boolean
}

export interface StorageLoadMatch {
  id: string
  include_guide?: boolean
  skip_metadata?: boolean
}

export interface StorageCreateData {
  access?: string
  count: number
  id?: string
  isTokenExpired: boolean
  kind?: string
  name: string
  projectFilter?: Record<string, any>
  projectId?: string
  projectsMetadata: any[]
  region: string
  size: number
  status: string
  totalConnectedProjects?: number
  usageQuotaExceeded: boolean
}

export interface StorageRemoveMatch {
  id: string
}

export interface Team {
  accessRequestedAt: number
  apiKeysInvalidatedAt?: number
  appTokensInvalidatedAt?: number
  attribution?: Record<string, any>
  avatar: string
  billing: Record<string, any>
  bitbucket: Record<string, any>
  confirmed: boolean
  connect?: Record<string, any>
  createdAt: number
  creatorId: string
  defaultDeploymentProtection?: Record<string, any>
  defaultExpirationSettings?: Record<string, any>
  defaultPassport: Record<string, any>
  defaultProjectJobs?: Record<string, any>
  defaultRoles?: Record<string, any>
  deploymentPolicy?: Record<string, any>
  description: string
  disableHardAutoBlocks?: any
  disableRepositoryDispatchEvents?: boolean
  disjunctiveProductionSecretPolicy?: string
  dpAccessRequestsMode?: string
  emailDomain?: string
  enablePolyrepoBranchRouting?: boolean
  enablePreviewFeedback?: string
  enableProductionFeedback?: string
  fallbackEnvironment?: string
  github: Record<string, any>
  gitlab: Record<string, any>
  hideIpAddresses?: boolean
  hideIpAddressesInLogDrains?: boolean
  id: string
  integrationTokensInvalidatedAt?: number
  inviteCode?: string
  ipBuckets?: any[]
  joinedFrom: Record<string, any>
  membership: Record<string, any>
  name: string
  nsnbConfig: Record<string, any>
  orgRootTeamId?: string
  pagination: Record<string, any>
  parentId?: string
  personalAccessTokensInvalidatedAt?: number
  platform?: boolean
  previewDeploymentSuffix?: string
  projects?: any[]
  regenerateInviteCode?: boolean
  remoteCaching?: Record<string, any>
  requireVerifiedCommits?: boolean
  resourceConfig?: Record<string, any>
  role?: string
  saml: Record<string, any>
  sensitiveEnvironmentVariablePolicy?: string
  slug: string
  stagingPrefix: string
  strictConnectors: Record<string, any>
  strictDeploymentProtectionSettings: Record<string, any>
  strictPasswordProtectionSettings: Record<string, any>
  strictShareableLinks: Record<string, any>
  teamName: string
  teamPermissions?: any[]
  teamSlug: string
  teams: any[]
  updatedAt: number
}

export interface TeamLoadMatch {
  id: string
  slug?: string
  user_id?: string
}

export interface TeamListMatch {
  limit?: number
  since?: number
  until?: number

  // Selects a custom action instead of the plain list:
  //   'member'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TeamCreateData {
  accessRequestedAt: number
  apiKeysInvalidatedAt?: number
  appTokensInvalidatedAt?: number
  attribution?: Record<string, any>
  avatar: string
  billing: Record<string, any>
  bitbucket: Record<string, any>
  confirmed: boolean
  connect?: Record<string, any>
  createdAt: number
  creatorId: string
  defaultDeploymentProtection?: Record<string, any>
  defaultExpirationSettings?: Record<string, any>
  defaultPassport: Record<string, any>
  defaultProjectJobs?: Record<string, any>
  defaultRoles?: Record<string, any>
  deploymentPolicy?: Record<string, any>
  description: string
  disableHardAutoBlocks?: any
  disableRepositoryDispatchEvents?: boolean
  disjunctiveProductionSecretPolicy?: string
  dpAccessRequestsMode?: string
  emailDomain?: string
  enablePolyrepoBranchRouting?: boolean
  enablePreviewFeedback?: string
  enableProductionFeedback?: string
  fallbackEnvironment?: string
  github: Record<string, any>
  gitlab: Record<string, any>
  hideIpAddresses?: boolean
  hideIpAddressesInLogDrains?: boolean
  id: string
  integrationTokensInvalidatedAt?: number
  inviteCode?: string
  ipBuckets?: any[]
  joinedFrom: Record<string, any>
  membership: Record<string, any>
  name: string
  nsnbConfig: Record<string, any>
  orgRootTeamId?: string
  pagination: Record<string, any>
  parentId?: string
  personalAccessTokensInvalidatedAt?: number
  platform?: boolean
  previewDeploymentSuffix?: string
  projects?: any[]
  regenerateInviteCode?: boolean
  remoteCaching?: Record<string, any>
  requireVerifiedCommits?: boolean
  resourceConfig?: Record<string, any>
  role?: string
  saml: Record<string, any>
  sensitiveEnvironmentVariablePolicy?: string
  slug: string
  stagingPrefix: string
  strictConnectors: Record<string, any>
  strictDeploymentProtectionSettings: Record<string, any>
  strictPasswordProtectionSettings: Record<string, any>
  strictShareableLinks: Record<string, any>
  teamName: string
  teamPermissions?: any[]
  teamSlug: string
  teams: any[]
  updatedAt: number

  // Selects a custom action instead of the plain create:
  //   'dsync_role' | 'join' | 'member' | 'request'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TeamUpdateData {
  group_id?: string
  id: string
  slug?: string
  uid?: string
  accessRequestedAt?: number
  apiKeysInvalidatedAt?: number
  appTokensInvalidatedAt?: number
  attribution?: Record<string, any>
  avatar?: string
  billing?: Record<string, any>
  bitbucket?: Record<string, any>
  confirmed?: boolean
  connect?: Record<string, any>
  createdAt?: number
  creatorId?: string
  defaultDeploymentProtection?: Record<string, any>
  defaultExpirationSettings?: Record<string, any>
  defaultPassport?: Record<string, any>
  defaultProjectJobs?: Record<string, any>
  defaultRoles?: Record<string, any>
  deploymentPolicy?: Record<string, any>
  description?: string
  disableHardAutoBlocks?: any
  disableRepositoryDispatchEvents?: boolean
  disjunctiveProductionSecretPolicy?: string
  dpAccessRequestsMode?: string
  emailDomain?: string
  enablePolyrepoBranchRouting?: boolean
  enablePreviewFeedback?: string
  enableProductionFeedback?: string
  fallbackEnvironment?: string
  github?: Record<string, any>
  gitlab?: Record<string, any>
  hideIpAddresses?: boolean
  hideIpAddressesInLogDrains?: boolean
  integrationTokensInvalidatedAt?: number
  inviteCode?: string
  ipBuckets?: any[]
  joinedFrom?: Record<string, any>
  membership?: Record<string, any>
  name?: string
  nsnbConfig?: Record<string, any>
  orgRootTeamId?: string
  pagination?: Record<string, any>
  parentId?: string
  personalAccessTokensInvalidatedAt?: number
  platform?: boolean
  previewDeploymentSuffix?: string
  projects?: any[]
  regenerateInviteCode?: boolean
  remoteCaching?: Record<string, any>
  requireVerifiedCommits?: boolean
  resourceConfig?: Record<string, any>
  role?: string
  saml?: Record<string, any>
  sensitiveEnvironmentVariablePolicy?: string
  stagingPrefix?: string
  strictConnectors?: Record<string, any>
  strictDeploymentProtectionSettings?: Record<string, any>
  strictPasswordProtectionSettings?: Record<string, any>
  strictShareableLinks?: Record<string, any>
  teamName?: string
  teamPermissions?: any[]
  teamSlug?: string
  teams?: any[]
  updatedAt?: number
}

export interface TeamRemoveMatch {
  group_id?: string
  id: string
  slug?: string
  new_default_team_id?: string
  uid?: string
  invite_id?: string
}

export interface TldName {
}

export interface TldNameListMatch {
  team_id?: string
}

export interface Toggle {
  value: boolean
}

export interface ToggleCreateData {
  project_id: string
  value: boolean
}

export interface User {
  categories?: any[]
  createdAt: number
  entities: any[]
  id: string
  payload?: any
  principal?: any
  principalId: string
  requestId?: string
  sessionId?: string
  text: string
  tokenId?: string
  type?: string
  user: Record<string, any>
  userId?: string
  via?: any[]
  viaIds?: any[]
}

export interface UserLoadMatch {
  categories?: any[]
  createdAt?: number
  entities?: any[]
  id: string
  payload?: any
  principal?: any
  principalId?: string
  requestId?: string
  sessionId?: string
  text?: string
  tokenId?: string
  type?: string
  user?: Record<string, any>
  userId?: string
  via?: any[]
  viaIds?: any[]
}

export interface UserListMatch {
  entity_id?: string
  limit?: number
  principal_id?: string
  project_id?: string
  since?: string
  slug?: string
  team_id?: string
  type?: string
  until?: string
  user_id?: string
  with_payload?: string
}

export interface UserRemoveMatch {
  categories?: any[]
  createdAt?: number
  entities?: any[]
  id: string
  payload?: any
  principal?: any
  principalId?: string
  requestId?: string
  sessionId?: string
  text?: string
  tokenId?: string
  type?: string
  user?: Record<string, any>
  userId?: string
  via?: any[]
  viaIds?: any[]
}

export interface Vcr {
  arch?: string
  createdAt: string
  id: string
  imageId: string
  kind: string
  layers: any[]
  manifestDigest: string
  name: string
  platform?: string
  projectId: string
  public: boolean
  pushedBy?: string
  repositoryId: string
  sizeInBytes: number
  status: string
  tag: string
  tags: any[]
  teamId: string
  teamSlug: string
  updatedAt: string
}

export interface VcrLoadMatch {
  id_or_name: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface VcrListMatch {
  id_or_name: string
  cursor?: string
  limit?: number
  project_id: string
  slug?: string
  sort_by?: string
  sort_order?: string
  team_id?: string
}

export interface VcrCreateData {
  id_or_name: string
  project_id: string
  slug?: string
  team_id?: string
  arch?: string
  createdAt: string
  id: string
  imageId: string
  kind: string
  layers: any[]
  manifestDigest: string
  name: string
  platform?: string
  projectId: string
  public: boolean
  pushedBy?: string
  repositoryId: string
  sizeInBytes: number
  status: string
  tag: string
  tags: any[]
  teamId: string
  teamSlug: string
  updatedAt: string

  // Selects a custom action instead of the plain create:
  //   'repository'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface VcrUpdateData {
  project_slug: string
  repository_name: string
  team_slug: string
  uuid?: string
  digest?: string
  reference?: string
  arch?: string
  createdAt?: string
  id?: string
  imageId?: string
  kind?: string
  layers?: any[]
  manifestDigest?: string
  name?: string
  platform?: string
  projectId?: string
  public?: boolean
  pushedBy?: string
  repositoryId?: string
  sizeInBytes?: number
  status?: string
  tag?: string
  tags?: any[]
  teamId?: string
  teamSlug?: string
  updatedAt?: string
}

export interface VcrRemoveMatch {
  id_or_name: string
  project_id: string
  slug?: string
  team_id?: string
}

export interface VcrImageList {
  arch?: string
  createdAt: string
  id: string
  kind: string
  manifestDigest: string
  platform?: string
  pushedBy?: string
  repositoryId: string
  sizeInBytes: number
  status: string
  tags: any[]
}

export interface VcrImageListListMatch {
  id_or_name: string
  cursor?: string
  limit?: number
  project_id: string
  slug?: string
  team_id?: string
  untagged?: boolean
}

export interface VcrRepositoryList {
  createdAt: string
  id: string
  name: string
  projectId: string
  public: boolean
  updatedAt: string
}

export interface VcrRepositoryListListMatch {
  cursor?: string
  limit?: number
  project_id: string
  slug?: string
  team_id?: string
}

export interface VcrRepositoryPermissionList {
  createdAt: string
  repositoryId: string
  teamId: string
  teamSlug: string
}

export interface VcrRepositoryPermissionListListMatch {
  id_or_name: string
  cursor?: string
  limit?: number
  project_id: string
  slug?: string
  team_id?: string
}

export interface WebAnalytics {
  data: any
  query: Record<string, any>
  version: number
}

export interface WebAnalyticsLoadMatch {
  by?: any[]
  filter?: string
  limit?: number
  project_id: string
  since?: any
  slug?: string
  team_id?: string
  until?: any
}

export interface Webhook {
  alertRuleIds?: any[]
  createdAt: number
  events: any[]
  id: string
  ownerId: string
  projectIds?: any[]
  secret: string
  updatedAt: number
  url: string
}

export interface WebhookLoadMatch {
  id: string
  slug?: string
  team_id?: string
}

export interface WebhookCreateData {
  slug?: string
  team_id?: string
  alertRuleIds?: any[]
  createdAt: number
  events: any[]
  id: string
  ownerId: string
  projectIds?: any[]
  secret: string
  updatedAt: number
  url: string
}

export interface WebhookRemoveMatch {
  id: string
  slug?: string
  team_id?: string
}

