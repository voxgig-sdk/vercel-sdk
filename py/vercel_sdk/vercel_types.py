# Typed models for the Vercel SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AccessGroupRequired(TypedDict):
    accessGroupId: str
    createdAt: str
    isDsyncManaged: bool
    membersCount: float
    name: str
    projectId: str
    projectsCount: float
    role: str
    teamId: str
    updatedAt: str


class AccessGroup(AccessGroupRequired, total=False):
    entitlements: list
    id: str
    membersToAdd: list
    membersToRemove: list
    projects: list
    teamPermissions: list
    teamRoles: list


class AccessGroupLoadMatchRequired(TypedDict):
    id: str


class AccessGroupLoadMatch(AccessGroupLoadMatchRequired, total=False):
    slug: str
    team_id: str


class AccessGroupListMatchRequired(TypedDict):
    id_or_name: str


class AccessGroupListMatch(AccessGroupListMatchRequired, total=False):
    limit: int
    next: str
    search: str
    slug: str
    team_id: str


class AccessGroupCreateDataRequired(TypedDict):
    id: str
    accessGroupId: str
    createdAt: str
    isDsyncManaged: bool
    membersCount: float
    name: str
    projectId: str
    projectsCount: float
    role: str
    teamId: str
    updatedAt: str


class AccessGroupCreateData(AccessGroupCreateDataRequired, total=False):
    slug: str
    team_id: str
    entitlements: list
    membersToAdd: list
    membersToRemove: list
    projects: list
    teamPermissions: list
    teamRoles: list


class AccessGroupUpdateDataRequired(TypedDict):
    access_group_id: str
    project_id: str


class AccessGroupUpdateData(AccessGroupUpdateDataRequired, total=False):
    slug: str
    team_id: str
    accessGroupId: str
    createdAt: str
    entitlements: list
    id: str
    isDsyncManaged: bool
    membersCount: float
    membersToAdd: list
    membersToRemove: list
    name: str
    projectId: str
    projects: list
    projectsCount: float
    role: str
    teamId: str
    teamPermissions: list
    teamRoles: list
    updatedAt: str


class AccessGroupRemoveMatchRequired(TypedDict):
    id: str


class AccessGroupRemoveMatch(AccessGroupRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class AiGateway(TypedDict):
    pass


class AiGatewayRemoveMatchRequired(TypedDict):
    rule_id: str


class AiGatewayRemoveMatch(AiGatewayRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class AiGatewayRuleRequired(TypedDict):
    createdAt: float
    enabled: bool
    ownerId: str
    ruleId: str
    type: str
    updatedAt: float


class AiGatewayRule(AiGatewayRuleRequired, total=False):
    action: dict
    createdBy: str
    deleted: bool
    description: str
    match: dict
    updatedBy: str


class AiGatewayRuleCreateDataRequired(TypedDict):
    createdAt: float
    enabled: bool
    ownerId: str
    ruleId: str
    type: str
    updatedAt: float


class AiGatewayRuleCreateData(AiGatewayRuleCreateDataRequired, total=False):
    slug: str
    team_id: str
    action: dict
    createdBy: str
    deleted: bool
    description: str
    match: dict
    updatedBy: str


class AiGatewayRuleUpdateData(TypedDict, total=False):
    slug: str
    team_id: str
    action: dict
    createdAt: float
    createdBy: str
    deleted: bool
    description: str
    enabled: bool
    match: dict
    ownerId: str
    ruleId: str
    type: str
    updatedAt: float
    updatedBy: str


class AiGatewayRuleListRequired(TypedDict):
    createdAt: float
    enabled: bool
    ownerId: str
    ruleId: str
    type: str
    updatedAt: float


class AiGatewayRuleList(AiGatewayRuleListRequired, total=False):
    action: dict
    createdBy: str
    deleted: bool
    description: str
    match: dict
    updatedBy: str


class AiGatewayRuleListListMatch(TypedDict, total=False):
    include_disabled: str
    slug: str
    team_id: str


class AiGatewayVirtualModelConfigRequired(TypedDict):
    createdAt: float
    deleted: bool
    kind: str
    ownerId: str
    status: str
    updatedAt: float
    virtualModelSlug: str


class AiGatewayVirtualModelConfig(AiGatewayVirtualModelConfigRequired, total=False):
    allowFallbackFromFast: bool
    baseUrl: str
    byokCredentialIds: list
    caching: str
    createdBy: str
    description: str
    disallowPromptTraining: bool
    displayName: str
    has: list
    hipaaCompliant: bool
    id: str
    inferenceRegion: dict
    instanceId: str
    modelSlug: str
    models: list
    observabilityTags: list
    providerOnly: list
    providerOptions: dict
    providerOrder: list
    providerTimeouts: dict
    requires: list
    selector: str
    serviceTier: str
    sort: str
    speed: str
    updatedBy: str
    visibility: str
    zeroDataRetention: bool


class AiGatewayVirtualModelConfigLoadMatchRequired(TypedDict):
    id: str


class AiGatewayVirtualModelConfigLoadMatch(AiGatewayVirtualModelConfigLoadMatchRequired, total=False):
    owner_id: str
    slug: str
    team_id: str


class AiGatewayVirtualModelConfigCreateDataRequired(TypedDict):
    createdAt: float
    deleted: bool
    kind: str
    ownerId: str
    status: str
    updatedAt: float
    virtualModelSlug: str


class AiGatewayVirtualModelConfigCreateData(AiGatewayVirtualModelConfigCreateDataRequired, total=False):
    slug: str
    team_id: str
    allowFallbackFromFast: bool
    baseUrl: str
    byokCredentialIds: list
    caching: str
    createdBy: str
    description: str
    disallowPromptTraining: bool
    displayName: str
    has: list
    hipaaCompliant: bool
    id: str
    inferenceRegion: dict
    instanceId: str
    modelSlug: str
    models: list
    observabilityTags: list
    providerOnly: list
    providerOptions: dict
    providerOrder: list
    providerTimeouts: dict
    requires: list
    selector: str
    serviceTier: str
    sort: str
    speed: str
    updatedBy: str
    visibility: str
    zeroDataRetention: bool


class AiGatewayVirtualModelConfigUpdateDataRequired(TypedDict):
    id: str


class AiGatewayVirtualModelConfigUpdateData(AiGatewayVirtualModelConfigUpdateDataRequired, total=False):
    slug: str
    team_id: str
    allowFallbackFromFast: bool
    baseUrl: str
    byokCredentialIds: list
    caching: str
    createdAt: float
    createdBy: str
    deleted: bool
    description: str
    disallowPromptTraining: bool
    displayName: str
    has: list
    hipaaCompliant: bool
    inferenceRegion: dict
    instanceId: str
    kind: str
    modelSlug: str
    models: list
    observabilityTags: list
    ownerId: str
    providerOnly: list
    providerOptions: dict
    providerOrder: list
    providerTimeouts: dict
    requires: list
    selector: str
    serviceTier: str
    sort: str
    speed: str
    status: str
    updatedAt: float
    updatedBy: str
    virtualModelSlug: str
    visibility: str
    zeroDataRetention: bool


class AiGatewayVirtualModelConfigListRequired(TypedDict):
    createdAt: float
    deleted: bool
    kind: str
    ownerId: str
    status: str
    updatedAt: float
    virtualModelSlug: str


class AiGatewayVirtualModelConfigList(AiGatewayVirtualModelConfigListRequired, total=False):
    allowFallbackFromFast: bool
    baseUrl: str
    byokCredentialIds: list
    caching: str
    createdBy: str
    description: str
    disallowPromptTraining: bool
    displayName: str
    has: list
    hipaaCompliant: bool
    inferenceRegion: dict
    instanceId: str
    modelSlug: str
    models: list
    observabilityTags: list
    providerOnly: list
    providerOptions: dict
    providerOrder: list
    providerTimeouts: dict
    requires: list
    selector: str
    serviceTier: str
    sort: str
    speed: str
    updatedBy: str
    visibility: str
    zeroDataRetention: bool


class AiGatewayVirtualModelConfigListListMatch(TypedDict, total=False):
    cursor: str
    limit: int
    owner_id: str
    slug: str
    team_id: str


class AliasRequired(TypedDict):
    alias: str
    created: str
    creator: dict
    deployment: dict
    deploymentId: str
    microfrontends: dict
    projectId: str
    uid: str


class Alias(AliasRequired, total=False):
    createdAt: float
    deletedAt: float
    id: str
    oldDeploymentId: str
    protectionBypass: dict
    redirect: str
    redirectStatusCode: float
    updatedAt: float


class AliasLoadMatchRequired(TypedDict):
    id: str


class AliasLoadMatch(AliasLoadMatchRequired, total=False):
    project_id: str
    since: float
    slug: str
    team_id: str
    until: float


class AliasListMatch(TypedDict, total=False):
    domain: Any
    limit: float
    project_id: str
    rollback_deployment_id: str
    since: float
    slug: str
    team_id: str
    until: float


class AliasCreateDataRequired(TypedDict):
    deployment_id: str
    alias: str
    created: str
    creator: dict
    deployment: dict
    deploymentId: str
    microfrontends: dict
    projectId: str
    uid: str


class AliasCreateData(AliasCreateDataRequired, total=False):
    slug: str
    team_id: str
    createdAt: float
    deletedAt: float
    id: str
    oldDeploymentId: str
    protectionBypass: dict
    redirect: str
    redirectStatusCode: float
    updatedAt: float


class AliasUpdateDataRequired(TypedDict):
    id: str


class AliasUpdateData(AliasUpdateDataRequired, total=False):
    slug: str
    team_id: str
    alias: str
    created: str
    createdAt: float
    creator: dict
    deletedAt: float
    deployment: dict
    deploymentId: str
    microfrontends: dict
    oldDeploymentId: str
    projectId: str
    protectionBypass: dict
    redirect: str
    redirectStatusCode: float
    uid: str
    updatedAt: float


class AliasRemoveMatchRequired(TypedDict):
    id: str


class AliasRemoveMatch(AliasRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class ApiAiGateway(TypedDict):
    pass


class ApiAiGatewayLoadMatch(TypedDict, total=False):
    cursor: str
    limit: int
    owner_id: str
    slug: str
    team_id: str
    virtual_model_slug: str


class ApiAiGatewayRemoveMatchRequired(TypedDict):
    vmc_slug: str


class ApiAiGatewayRemoveMatch(ApiAiGatewayRemoveMatchRequired, total=False):
    acting_ip: str
    acting_user_agent: str
    owner_id: str
    slug: str
    team_id: str
    updated_by: str


class ApiKeyRequired(TypedDict):
    activeAt: float
    aiGatewayQuota: dict
    createdAt: float
    createdBy: str
    createdByAppId: str
    expiresAt: float
    id: str
    leakedAt: float
    leakedUrl: str
    name: str
    partialKey: str
    projectId: str
    purpose: str
    quota: dict
    teamId: str


class ApiKey(ApiKeyRequired, total=False):
    metadata: dict


class ApiKeyCreateDataRequired(TypedDict):
    activeAt: float
    aiGatewayQuota: dict
    createdAt: float
    createdBy: str
    createdByAppId: str
    expiresAt: float
    id: str
    leakedAt: float
    leakedUrl: str
    name: str
    partialKey: str
    projectId: str
    purpose: str
    quota: dict
    teamId: str


class ApiKeyCreateData(ApiKeyCreateDataRequired, total=False):
    metadata: dict


class ArtifactRequired(TypedDict):
    hashes: list


class Artifact(ArtifactRequired, total=False):
    id: str


class ArtifactLoadMatchRequired(TypedDict):
    id: str


class ArtifactLoadMatch(ArtifactLoadMatchRequired, total=False):
    slug: str
    team_id: str


class ArtifactCreateDataRequired(TypedDict):
    hashes: list


class ArtifactCreateData(ArtifactCreateDataRequired, total=False):
    slug: str
    team_id: str
    id: str


class ArtifactUpdateDataRequired(TypedDict):
    id: str


class ArtifactUpdateData(ArtifactUpdateDataRequired, total=False):
    slug: str
    team_id: str
    hashes: list


class ArtifactRemoveMatch(TypedDict, total=False):
    slug: str
    team_id: str


class AuthenticationRequired(TypedDict):
    activeAt: float
    createdAt: float
    id: str
    name: str
    type: str


class Authentication(AuthenticationRequired, total=False):
    expiresAt: float
    leakedAt: float
    leakedUrl: str
    origin: str
    prefix: str
    projectId: str
    revokedAt: float
    scopes: list
    suffix: str


class AuthenticationLoadMatch(TypedDict):
    token_id: str


class AuthenticationCreateDataRequired(TypedDict):
    activeAt: float
    createdAt: float
    id: str
    name: str
    type: str


class AuthenticationCreateData(AuthenticationCreateDataRequired, total=False):
    slug: str
    team_id: str
    expiresAt: float
    leakedAt: float
    leakedUrl: str
    origin: str
    prefix: str
    projectId: str
    revokedAt: float
    scopes: list
    suffix: str


class AuthenticationRemoveMatch(TypedDict):
    token_id: str


class Billing(TypedDict):
    pass


class BillingLoadMatchRequired(TypedDict):
    to: str


class BillingLoadMatch(BillingLoadMatchRequired, total=False):
    slug: str
    team_id: str


class BillingCreateData(TypedDict, total=False):
    slug: str
    source: str
    team_id: str


class BulkRedirectRequired(TypedDict):
    createdBy: str
    id: str
    key: str
    lastModified: float
    projectId: str
    redirect: dict
    teamId: str


class BulkRedirect(BulkRedirectRequired, total=False):
    alias: str
    isLive: bool
    isStaging: bool
    name: str
    overwrite: bool
    redirectCount: float
    redirects: list
    restore: bool


class BulkRedirectLoadMatchRequired(TypedDict):
    project_id: str


class BulkRedirectLoadMatch(BulkRedirectLoadMatchRequired, total=False):
    diff: Any
    page: int
    per_page: int
    q: str
    slug: str
    sort_by: str
    sort_order: str
    team_id: str
    version_id: str


class BulkRedirectListMatchRequired(TypedDict):
    project_id: str


class BulkRedirectListMatch(BulkRedirectListMatchRequired, total=False):
    slug: str
    team_id: str


class BulkRedirectCreateDataRequired(TypedDict):
    project_id: str
    createdBy: str
    id: str
    key: str
    lastModified: float
    projectId: str
    redirect: dict
    teamId: str


class BulkRedirectCreateData(BulkRedirectCreateDataRequired, total=False):
    slug: str
    team_id: str
    alias: str
    isLive: bool
    isStaging: bool
    name: str
    overwrite: bool
    redirectCount: float
    redirects: list
    restore: bool


class BulkRedirectUpdateData(TypedDict, total=False):
    slug: str
    team_id: str
    alias: str
    createdBy: str
    id: str
    isLive: bool
    isStaging: bool
    key: str
    lastModified: float
    name: str
    overwrite: bool
    projectId: str
    redirect: dict
    redirectCount: float
    redirects: list
    restore: bool
    teamId: str


class BulkRedirectRemoveMatchRequired(TypedDict):
    project_id: str


class BulkRedirectRemoveMatch(BulkRedirectRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class CertRequired(TypedDict):
    autoRenew: bool
    ca: str
    cert: str
    cns: list
    createdAt: float
    expiresAt: float
    id: str
    key: str


class Cert(CertRequired, total=False):
    skipValidation: bool


class CertLoadMatchRequired(TypedDict):
    id: str


class CertLoadMatch(CertLoadMatchRequired, total=False):
    slug: str
    team_id: str


class CertListMatch(TypedDict, total=False):
    slug: str
    team_id: str


class CertCreateDataRequired(TypedDict):
    autoRenew: bool
    ca: str
    cert: str
    cns: list
    createdAt: float
    expiresAt: float
    id: str
    key: str


class CertCreateData(CertCreateDataRequired, total=False):
    slug: str
    team_id: str
    skipValidation: bool


class CertUpdateData(TypedDict, total=False):
    slug: str
    team_id: str
    autoRenew: bool
    ca: str
    cert: str
    cns: list
    createdAt: float
    expiresAt: float
    id: str
    key: str
    skipValidation: bool


class CertRemoveMatchRequired(TypedDict):
    id: str


class CertRemoveMatch(CertRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class CheckRequired(TypedDict):
    blocking: bool
    blocks: str
    createdAt: float
    id: str
    integrationId: str
    isRerequestable: bool
    metrics: dict
    name: str
    ownerId: str
    projectId: str
    requires: str
    source: Any
    sourceKind: str
    targets: list
    timeout: float
    updatedAt: float


class Check(CheckRequired, total=False):
    completedAt: float
    conclusion: Any
    deletedAt: float
    detailsUrl: str
    externalId: str
    output: dict
    path: str
    rerequestable: bool
    sourceIntegrationConfigurationId: str
    startedAt: float
    status: Any


class CheckLoadMatchRequired(TypedDict):
    id: str


class CheckLoadMatch(CheckLoadMatchRequired, total=False):
    deployment_id: str
    slug: str
    team_id: str
    project_id: str


class CheckListMatchRequired(TypedDict):
    project_id_or_name: str


class CheckListMatch(CheckListMatchRequired, total=False):
    block: str
    slug: str
    team_id: str


class CheckCreateDataRequired(TypedDict):
    deployment_id: str
    blocking: bool
    blocks: str
    createdAt: float
    id: str
    integrationId: str
    isRerequestable: bool
    metrics: dict
    name: str
    ownerId: str
    projectId: str
    requires: str
    source: Any
    sourceKind: str
    targets: list
    timeout: float
    updatedAt: float


class CheckCreateData(CheckCreateDataRequired, total=False):
    slug: str
    team_id: str
    completedAt: float
    conclusion: Any
    deletedAt: float
    detailsUrl: str
    externalId: str
    output: dict
    path: str
    rerequestable: bool
    sourceIntegrationConfigurationId: str
    startedAt: float
    status: Any


class CheckUpdateDataRequired(TypedDict):
    id: str


class CheckUpdateData(CheckUpdateDataRequired, total=False):
    deployment_id: str
    slug: str
    team_id: str
    project_id: str
    blocking: bool
    blocks: str
    completedAt: float
    conclusion: Any
    createdAt: float
    deletedAt: float
    detailsUrl: str
    externalId: str
    integrationId: str
    isRerequestable: bool
    metrics: dict
    name: str
    output: dict
    ownerId: str
    path: str
    projectId: str
    requires: str
    rerequestable: bool
    source: Any
    sourceIntegrationConfigurationId: str
    sourceKind: str
    startedAt: float
    status: Any
    targets: list
    timeout: float
    updatedAt: float


class CheckRemoveMatchRequired(TypedDict):
    id: str
    project_id: str


class CheckRemoveMatch(CheckRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class ChecksV2Required(TypedDict):
    checkId: str
    runs: list


class ChecksV2(ChecksV2Required, total=False):
    completedAt: float
    conclusion: str
    conclusionText: str
    externalId: str
    externalUrl: str
    output: dict
    status: str


class ChecksV2LoadMatchRequired(TypedDict):
    check_run_id: str
    deployment_id: str


class ChecksV2LoadMatch(ChecksV2LoadMatchRequired, total=False):
    slug: str
    team_id: str


class ChecksV2ListMatchRequired(TypedDict):
    deployment_id: str


class ChecksV2ListMatch(ChecksV2ListMatchRequired, total=False):
    slug: str
    team_id: str


class ChecksV2CreateDataRequired(TypedDict):
    deployment_id: str
    checkId: str
    runs: list


class ChecksV2CreateData(ChecksV2CreateDataRequired, total=False):
    slug: str
    team_id: str
    completedAt: float
    conclusion: str
    conclusionText: str
    externalId: str
    externalUrl: str
    output: dict
    status: str


class ChecksV2UpdateDataRequired(TypedDict):
    check_run_id: str
    deployment_id: str


class ChecksV2UpdateData(ChecksV2UpdateDataRequired, total=False):
    slug: str
    team_id: str
    checkId: str
    completedAt: float
    conclusion: str
    conclusionText: str
    externalId: str
    externalUrl: str
    output: dict
    runs: list
    status: str


class ConnectRequired(TypedDict):
    connector: dict
    displayName: str
    expiresAt: float
    id: str
    name: str
    token: str
    tokenId: str
    type: str
    uid: str


class Connect(ConnectRequired, total=False):
    additionalParams: dict
    audience: list
    authorizationDetails: list
    authorizationId: str
    claims: dict
    deviceCode: bool
    expiresInMs: float
    externalSubject: str
    installationId: str
    metadata: dict
    prompt: str
    resources: list
    returnUrl: str
    scopes: list
    service: str
    serviceName: str
    subject: Any
    tenantId: str
    tokenGroupId: str
    validityBufferMs: float
    webhook: str


class ConnectCreateDataRequired(TypedDict):
    connector: str
    displayName: str
    expiresAt: float
    id: str
    name: str
    token: str
    tokenId: str
    type: str
    uid: str


class ConnectCreateData(ConnectCreateDataRequired, total=False):
    additionalParams: dict
    audience: list
    authorizationDetails: list
    authorizationId: str
    claims: dict
    deviceCode: bool
    expiresInMs: float
    externalSubject: str
    installationId: str
    metadata: dict
    prompt: str
    resources: list
    returnUrl: str
    scopes: list
    service: str
    serviceName: str
    subject: Any
    tenantId: str
    tokenGroupId: str
    validityBufferMs: float
    webhook: str


class ConnectRemoveMatchRequired(TypedDict):
    connector: str


class ConnectRemoveMatch(ConnectRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class ConnectConnectorRequired(TypedDict):
    appTokens: dict
    connector: dict
    createdAt: float
    data: Any
    destinations: list
    displayName: str
    id: str
    name: str
    reconsentNeeded: dict
    service: str
    serviceSync: dict
    supportedSubjectTypes: list
    supportsIcon: Any
    supportsInstallation: bool
    supportsRevocation: bool
    supportsTriggers: bool
    triggers: dict
    type: str
    typeName: str
    uid: str
    updatedAt: float
    userTokens: dict


class ConnectConnector(ConnectConnectorRequired, total=False):
    accentColor: str
    backgroundColor: str
    clientUrl: str
    connectionMethod: str
    createdBy: Any
    creationMode: str
    defaultInstallationId: str
    devsite: str
    docsite: str
    environments: list
    events: list
    icon: str
    knownStale: bool
    managed: dict
    params: dict
    projectId: str
    redirectUri: str
    reinstallAt: float
    reinstallNeeded: bool
    target: str
    triggerDestination: Any
    triggerDestinations: list
    typeIcon: str
    updatedBy: Any
    website: str


class ConnectConnectorLoadMatchRequired(TypedDict):
    id: str


class ConnectConnectorLoadMatch(ConnectConnectorLoadMatchRequired, total=False):
    slug: str
    team_id: str


class ConnectConnectorCreateDataRequired(TypedDict):
    appTokens: dict
    connector: dict
    createdAt: float
    data: Any
    destinations: list
    displayName: str
    id: str
    name: str
    reconsentNeeded: dict
    service: str
    serviceSync: dict
    supportedSubjectTypes: list
    supportsIcon: Any
    supportsInstallation: bool
    supportsRevocation: bool
    supportsTriggers: bool
    triggers: dict
    type: str
    typeName: str
    uid: str
    updatedAt: float
    userTokens: dict


class ConnectConnectorCreateData(ConnectConnectorCreateDataRequired, total=False):
    slug: str
    team_id: str
    accentColor: str
    backgroundColor: str
    clientUrl: str
    connectionMethod: str
    createdBy: Any
    creationMode: str
    defaultInstallationId: str
    devsite: str
    docsite: str
    environments: list
    events: list
    icon: str
    knownStale: bool
    managed: dict
    params: dict
    projectId: str
    redirectUri: str
    reinstallAt: float
    reinstallNeeded: bool
    target: str
    triggerDestination: Any
    triggerDestinations: list
    typeIcon: str
    updatedBy: Any
    website: str


class ConnectConnectorUpdateDataRequired(TypedDict):
    id: str


class ConnectConnectorUpdateData(ConnectConnectorUpdateDataRequired, total=False):
    slug: str
    team_id: str
    accentColor: str
    appTokens: dict
    backgroundColor: str
    clientUrl: str
    connectionMethod: str
    connector: dict
    createdAt: float
    createdBy: Any
    creationMode: str
    data: Any
    defaultInstallationId: str
    destinations: list
    devsite: str
    displayName: str
    docsite: str
    environments: list
    events: list
    icon: str
    knownStale: bool
    managed: dict
    name: str
    params: dict
    projectId: str
    reconsentNeeded: dict
    redirectUri: str
    reinstallAt: float
    reinstallNeeded: bool
    service: str
    serviceSync: dict
    supportedSubjectTypes: list
    supportsIcon: Any
    supportsInstallation: bool
    supportsRevocation: bool
    supportsTriggers: bool
    target: str
    triggerDestination: Any
    triggerDestinations: list
    triggers: dict
    type: str
    typeIcon: str
    typeName: str
    uid: str
    updatedAt: float
    updatedBy: Any
    userTokens: dict
    website: str


class ConnectConnectorListRequired(TypedDict):
    appTokens: dict
    createdAt: float
    displayName: str
    id: str
    name: str
    service: str
    supportedSubjectTypes: list
    supportsIcon: Any
    supportsInstallation: bool
    supportsRevocation: bool
    supportsTriggers: bool
    triggers: dict
    type: str
    typeName: str
    uid: str
    updatedAt: float
    userTokens: dict


class ConnectConnectorList(ConnectConnectorListRequired, total=False):
    accentColor: str
    backgroundColor: str
    clientUrl: str
    connectionMethod: str
    createdBy: Any
    creationMode: str
    defaultInstallationId: str
    devsite: str
    docsite: str
    events: list
    icon: str
    knownStale: bool
    managed: dict
    redirectUri: str
    reinstallAt: float
    target: str
    triggerDestinations: list
    typeIcon: str
    updatedBy: Any
    website: str


class ConnectConnectorListListMatch(TypedDict, total=False):
    cursor: str
    limit: int
    project_id: str
    search: str
    service: str
    slug: str
    sort: str
    team_id: str
    type: str


class ConnectConnectorProjectConnectionList(TypedDict):
    connectorId: str
    createdAt: float
    enabledEnvironments: list
    project: dict
    updatedAt: float


class ConnectConnectorProjectConnectionListListMatchRequired(TypedDict):
    connector_id: str


class ConnectConnectorProjectConnectionListListMatch(ConnectConnectorProjectConnectionListListMatchRequired, total=False):
    cursor: str
    limit: int
    slug: str
    team_id: str


class ConnectProjectConnection(TypedDict):
    connectorId: str
    createdAt: float
    enabledEnvironments: list
    environments: list
    project: dict
    updatedAt: float


class ConnectProjectConnectionLoadMatchRequired(TypedDict):
    connector_id: str
    project_id: str


class ConnectProjectConnectionLoadMatch(ConnectProjectConnectionLoadMatchRequired, total=False):
    slug: str
    team_id: str


class ConnectProjectConnectionCreateDataRequired(TypedDict):
    connector_id: str
    project_id: str
    connectorId: str
    createdAt: float
    enabledEnvironments: list
    environments: list
    project: dict
    updatedAt: float


class ConnectProjectConnectionCreateData(ConnectProjectConnectionCreateDataRequired, total=False):
    slug: str
    team_id: str


class ConnectProjectConnectorConnectionList(TypedDict):
    connectorId: str
    createdAt: float
    enabledEnvironments: list
    project: dict
    updatedAt: float


class ConnectProjectConnectorConnectionListListMatchRequired(TypedDict):
    project_id: str


class ConnectProjectConnectorConnectionListListMatch(ConnectProjectConnectorConnectionListListMatchRequired, total=False):
    cursor: str
    limit: int
    slug: str
    team_id: str


class DeploymentRequired(TypedDict):
    aliasError: dict
    checks: dict
    created: float
    createdAt: float
    creator: dict
    customEnvironment: dict
    inspectorUrl: str
    manualProvisioning: dict
    name: str
    platform: dict
    projectId: str
    readyState: str
    seatBlock: dict
    type: str
    uid: str
    url: str


class Deployment(DeploymentRequired, total=False):
    aliasAssigned: Any
    attribution: dict
    buildMachine: str
    buildingAt: float
    checksConclusion: str
    checksState: str
    connectBuildsEnabled: bool
    connectConfigurationId: str
    customEnvironmentSlugOrId: str
    defaultRoute: str
    deleted: float
    deploymentId: str
    errorCode: str
    errorMessage: str
    expiration: float
    files: list
    gitAccessToken: str
    gitMetadata: dict
    gitSource: Any
    id: str
    isRollbackCandidate: bool
    meta: dict
    monorepoManager: str
    oomReport: str
    outcomes: list
    passiveConnectConfigurationId: str
    prebuilt: bool
    project: str
    projectSettings: dict
    proposedExpiration: float
    ready: float
    readySubstate: str
    softDeletedByRetention: bool
    source: str
    state: str
    status: str
    statusText: str
    statusUrl: str
    target: str
    undeleted: float
    withLatestCommit: bool


class DeploymentLoadMatchRequired(TypedDict):
    id: str


class DeploymentLoadMatch(DeploymentLoadMatchRequired, total=False):
    file_id: str
    path: str
    slug: str
    team_id: str
    with_git_repo_info: str


class DeploymentListMatch(TypedDict, total=False):
    app: str
    branch: str
    limit: float
    project_id: str
    rollback_candidate: bool
    sha: str
    since: float
    slug: str
    state: str
    target: str
    team_id: str
    to: float
    until: float
    user: str


class DeploymentCreateDataRequired(TypedDict):
    aliasError: dict
    checks: dict
    created: float
    createdAt: float
    creator: dict
    customEnvironment: dict
    inspectorUrl: str
    manualProvisioning: dict
    name: str
    platform: dict
    projectId: str
    readyState: str
    seatBlock: dict
    type: str
    uid: str
    url: str


class DeploymentCreateData(DeploymentCreateDataRequired, total=False):
    slug: str
    team_id: str
    aliasAssigned: Any
    attribution: dict
    buildMachine: str
    buildingAt: float
    checksConclusion: str
    checksState: str
    connectBuildsEnabled: bool
    connectConfigurationId: str
    customEnvironmentSlugOrId: str
    defaultRoute: str
    deleted: float
    deploymentId: str
    errorCode: str
    errorMessage: str
    expiration: float
    files: list
    gitAccessToken: str
    gitMetadata: dict
    gitSource: Any
    id: str
    isRollbackCandidate: bool
    meta: dict
    monorepoManager: str
    oomReport: str
    outcomes: list
    passiveConnectConfigurationId: str
    prebuilt: bool
    project: str
    projectSettings: dict
    proposedExpiration: float
    ready: float
    readySubstate: str
    softDeletedByRetention: bool
    source: str
    state: str
    status: str
    statusText: str
    statusUrl: str
    target: str
    undeleted: float
    withLatestCommit: bool


class DeploymentUpdateDataRequired(TypedDict):
    action: str
    id: str
    integration_id: str
    resource_id: str


class DeploymentUpdateData(DeploymentUpdateDataRequired, total=False):
    aliasAssigned: Any
    aliasError: dict
    attribution: dict
    buildMachine: str
    buildingAt: float
    checks: dict
    checksConclusion: str
    checksState: str
    connectBuildsEnabled: bool
    connectConfigurationId: str
    created: float
    createdAt: float
    creator: dict
    customEnvironment: dict
    customEnvironmentSlugOrId: str
    defaultRoute: str
    deleted: float
    deploymentId: str
    errorCode: str
    errorMessage: str
    expiration: float
    files: list
    gitAccessToken: str
    gitMetadata: dict
    gitSource: Any
    inspectorUrl: str
    isRollbackCandidate: bool
    manualProvisioning: dict
    meta: dict
    monorepoManager: str
    name: str
    oomReport: str
    outcomes: list
    passiveConnectConfigurationId: str
    platform: dict
    prebuilt: bool
    project: str
    projectId: str
    projectSettings: dict
    proposedExpiration: float
    ready: float
    readyState: str
    readySubstate: str
    seatBlock: dict
    softDeletedByRetention: bool
    source: str
    state: str
    status: str
    statusText: str
    statusUrl: str
    target: str
    type: str
    uid: str
    undeleted: float
    url: str
    withLatestCommit: bool


class DeploymentRemoveMatchRequired(TypedDict):
    id: str


class DeploymentRemoveMatch(DeploymentRemoveMatchRequired, total=False):
    slug: str
    team_id: str
    url: str


class DnsRequired(TypedDict):
    creator: str
    domain: str
    https: dict
    id: str
    name: str
    recordType: str
    srv: dict
    type: str
    value: str


class Dns(DnsRequired, total=False):
    comment: str
    createdAt: float
    mxPriority: int
    ttl: float


class DnsLoadMatchRequired(TypedDict):
    domain_id: str


class DnsLoadMatch(DnsLoadMatchRequired, total=False):
    limit: str
    since: str
    slug: str
    team_id: str
    until: str


class DnsCreateDataRequired(TypedDict):
    domain_id: str
    creator: str
    domain: str
    https: dict
    id: str
    name: str
    recordType: str
    srv: dict
    type: str
    value: str


class DnsCreateData(DnsCreateDataRequired, total=False):
    slug: str
    team_id: str
    comment: str
    createdAt: float
    mxPriority: int
    ttl: float


class DnsUpdateDataRequired(TypedDict):
    record_id: str


class DnsUpdateData(DnsUpdateDataRequired, total=False):
    slug: str
    team_id: str
    comment: str
    createdAt: float
    creator: str
    domain: str
    https: dict
    id: str
    mxPriority: int
    name: str
    recordType: str
    srv: dict
    ttl: float
    type: str
    value: str


class DnsRemoveMatchRequired(TypedDict):
    domain_id: str
    record_id: str


class DnsRemoveMatch(DnsRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class DomainRequired(TypedDict):
    boughtAt: float
    createdAt: float
    creator: dict
    echMode: str
    expiresAt: float
    id: str
    intendedNameservers: list
    name: str
    nameservers: list
    serviceType: str
    suffix: bool
    teamId: str
    userId: str
    verified: bool


class Domain(DomainRequired, total=False):
    customNameservers: list
    method: str
    renew: bool
    transferStartedAt: float
    transferredAt: float


class DomainLoadMatchRequired(TypedDict):
    id: str


class DomainLoadMatch(DomainLoadMatchRequired, total=False):
    slug: str
    team_id: str


class DomainListMatch(TypedDict, total=False):
    limit: float
    since: float
    slug: str
    team_id: str
    until: float


class DomainCreateDataRequired(TypedDict):
    boughtAt: float
    createdAt: float
    creator: dict
    echMode: str
    expiresAt: float
    id: str
    intendedNameservers: list
    name: str
    nameservers: list
    serviceType: str
    suffix: bool
    teamId: str
    userId: str
    verified: bool


class DomainCreateData(DomainCreateDataRequired, total=False):
    slug: str
    team_id: str
    customNameservers: list
    method: str
    renew: bool
    transferStartedAt: float
    transferredAt: float


class DomainUpdateDataRequired(TypedDict):
    id: str


class DomainUpdateData(DomainUpdateDataRequired, total=False):
    slug: str
    team_id: str
    boughtAt: float
    createdAt: float
    creator: dict
    customNameservers: list
    echMode: str
    expiresAt: float
    intendedNameservers: list
    method: str
    name: str
    nameservers: list
    renew: bool
    serviceType: str
    suffix: bool
    teamId: str
    transferStartedAt: float
    transferredAt: float
    userId: str
    verified: bool


class DomainRemoveMatchRequired(TypedDict):
    id: str


class DomainRemoveMatch(DomainRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class DomainsRegistrarRequired(TypedDict):
    authCode: str
    autoRenew: bool
    available: bool
    contactInformation: dict
    domains: list
    expectedPrice: float
    nameservers: list
    orderId: str
    purchasePrice: Any
    renewalPrice: Any
    results: list
    status: str
    transferPrice: Any
    years: float


class DomainsRegistrar(DomainsRegistrarRequired, total=False):
    error: Any
    languageCode: str


class DomainsRegistrarLoadMatchRequired(TypedDict):
    order_id: str


class DomainsRegistrarLoadMatch(DomainsRegistrarLoadMatchRequired, total=False):
    team_id: str


class DomainsRegistrarCreateDataRequired(TypedDict):
    authCode: str
    autoRenew: bool
    available: bool
    contactInformation: dict
    domains: list
    expectedPrice: float
    nameservers: list
    orderId: str
    purchasePrice: Any
    renewalPrice: Any
    results: list
    status: str
    transferPrice: Any
    years: float


class DomainsRegistrarCreateData(DomainsRegistrarCreateDataRequired, total=False):
    team_id: str
    error: Any
    languageCode: str


class DomainsRegistrarUpdateDataRequired(TypedDict):
    domain_id: str


class DomainsRegistrarUpdateData(DomainsRegistrarUpdateDataRequired, total=False):
    team_id: str
    authCode: str
    autoRenew: bool
    available: bool
    contactInformation: dict
    domains: list
    error: Any
    expectedPrice: float
    languageCode: str
    nameservers: list
    orderId: str
    purchasePrice: Any
    renewalPrice: Any
    results: list
    status: str
    transferPrice: Any
    years: float


class DrainRequired(TypedDict):
    drains: Any
    filter: dict
    name: str
    projects: str
    schemas: dict


class Drain(DrainRequired, total=False):
    delivery: dict
    id: str
    projectIds: list
    sampling: list
    source: dict
    status: str
    transforms: list


class DrainLoadMatchRequired(TypedDict):
    id: str


class DrainLoadMatch(DrainLoadMatchRequired, total=False):
    slug: str
    team_id: str


class DrainCreateDataRequired(TypedDict):
    drains: Any
    filter: dict
    name: str
    projects: str
    schemas: dict


class DrainCreateData(DrainCreateDataRequired, total=False):
    slug: str
    team_id: str
    delivery: dict
    id: str
    projectIds: list
    sampling: list
    source: dict
    status: str
    transforms: list


class DrainUpdateDataRequired(TypedDict):
    id: str


class DrainUpdateData(DrainUpdateDataRequired, total=False):
    slug: str
    team_id: str
    delivery: dict
    drains: Any
    filter: dict
    name: str
    projectIds: list
    projects: str
    sampling: list
    schemas: dict
    source: dict
    status: str
    transforms: list


class DrainRemoveMatchRequired(TypedDict):
    id: str


class DrainRemoveMatch(DrainRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class EdgeCache(TypedDict):
    pass


class EdgeCacheCreateDataRequired(TypedDict):
    project_id_or_name: str


class EdgeCacheCreateData(EdgeCacheCreateDataRequired, total=False):
    slug: str
    team_id: str


class EnvRequired(TypedDict):
    evs: list
    failed: list
    securityIssues: list
    updated: list
    updates: dict


class Env(EnvRequired, total=False):
    applyToAllCustomEnvironments: bool
    comment: str
    created: str
    createdAt: float
    createdBy: str
    customEnvironmentIds: list
    decrypted: bool
    deletedAt: float
    deletedBy: str
    id: str
    key: str
    lastEditedByDisplayName: str
    ownerId: str
    projectId: list
    target: list
    type: str
    updatedAt: float
    updatedBy: str
    value: str


class EnvLoadMatchRequired(TypedDict):
    id: str


class EnvLoadMatch(EnvLoadMatchRequired, total=False):
    slug: str
    team_id: str


class EnvListMatch(TypedDict, total=False):
    exclude_id: str
    exclude_project_id: str
    ids: str
    project_id: str
    search: str
    slug: str
    team_id: str


class EnvCreateDataRequired(TypedDict):
    evs: list
    failed: list
    securityIssues: list
    updated: list
    updates: dict


class EnvCreateData(EnvCreateDataRequired, total=False):
    slug: str
    team_id: str
    applyToAllCustomEnvironments: bool
    comment: str
    created: str
    createdAt: float
    createdBy: str
    customEnvironmentIds: list
    decrypted: bool
    deletedAt: float
    deletedBy: str
    id: str
    key: str
    lastEditedByDisplayName: str
    ownerId: str
    projectId: list
    target: list
    type: str
    updatedAt: float
    updatedBy: str
    value: str


class EnvUpdateData(TypedDict, total=False):
    slug: str
    team_id: str
    applyToAllCustomEnvironments: bool
    comment: str
    created: str
    createdAt: float
    createdBy: str
    customEnvironmentIds: list
    decrypted: bool
    deletedAt: float
    deletedBy: str
    evs: list
    failed: list
    id: str
    key: str
    lastEditedByDisplayName: str
    ownerId: str
    projectId: list
    securityIssues: list
    target: list
    type: str
    updated: list
    updatedAt: float
    updatedBy: str
    updates: dict
    value: str


class EnvRemoveMatch(TypedDict, total=False):
    slug: str
    team_id: str


class EnvironmentRequired(TypedDict):
    branchMatcher: dict
    createdAt: float
    id: str
    slug: str
    type: str
    updatedAt: float


class Environment(EnvironmentRequired, total=False):
    copyEnvVarsFrom: str
    currentDeploymentAliases: list
    description: str
    domains: list


class EnvironmentLoadMatchRequired(TypedDict):
    environment_slug_or_id: str
    project_id: str


class EnvironmentLoadMatch(EnvironmentLoadMatchRequired, total=False):
    slug: str
    team_id: str


class EnvironmentListMatchRequired(TypedDict):
    id_or_name: str


class EnvironmentListMatch(EnvironmentListMatchRequired, total=False):
    git_branch: str
    slug: str
    team_id: str


class EnvironmentCreateDataRequired(TypedDict):
    id_or_name: str
    branchMatcher: dict
    createdAt: float
    id: str
    type: str
    updatedAt: float


class EnvironmentCreateData(EnvironmentCreateDataRequired, total=False):
    slug: str
    team_id: str
    copyEnvVarsFrom: str
    currentDeploymentAliases: list
    description: str
    domains: list


class EnvironmentUpdateDataRequired(TypedDict):
    project_id: str


class EnvironmentUpdateData(EnvironmentUpdateDataRequired, total=False):
    env_id: str
    slug: str
    team_id: str
    environment_slug_or_id: str
    branchMatcher: dict
    copyEnvVarsFrom: str
    createdAt: float
    currentDeploymentAliases: list
    description: str
    domains: list
    id: str
    type: str
    updatedAt: float


class EnvironmentRemoveMatchRequired(TypedDict):
    environment_slug_or_id: str
    project_id: str


class EnvironmentRemoveMatch(EnvironmentRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class FeatureFlagRequired(TypedDict):
    changedEnvironments: list
    createdAt: float
    createdBy: str
    environments: dict
    flagId: str
    flags: list
    id: str
    kind: str
    ownerId: str
    pagination: dict
    projectId: str
    revision: float
    seed: float
    slug: str
    state: str
    status: dict
    typeName: str
    updatedAt: float
    variants: list


class FeatureFlag(FeatureFlagRequired, total=False):
    data: dict
    description: str
    hint: str
    label: str
    maintainerIds: list
    message: str
    metadata: dict
    operations: list
    permanent: bool
    tags: list
    updatedBy: str


class FeatureFlagLoadMatchRequired(TypedDict):
    team_id: str


class FeatureFlagLoadMatch(FeatureFlagLoadMatchRequired, total=False):
    cursor: str
    limit: int
    slug: str


class FeatureFlagListMatchRequired(TypedDict):
    deployment_id: str


class FeatureFlagListMatch(FeatureFlagListMatchRequired, total=False):
    slug: str
    team_id: str


class FeatureFlagUpdateDataRequired(TypedDict):
    project_id: str


class FeatureFlagUpdateData(FeatureFlagUpdateDataRequired, total=False):
    slug: str
    team_id: str
    changedEnvironments: list
    createdAt: float
    createdBy: str
    data: dict
    description: str
    environments: dict
    flagId: str
    flags: list
    hint: str
    id: str
    kind: str
    label: str
    maintainerIds: list
    message: str
    metadata: dict
    operations: list
    ownerId: str
    pagination: dict
    permanent: bool
    projectId: str
    revision: float
    seed: float
    state: str
    status: dict
    tags: list
    typeName: str
    updatedAt: float
    updatedBy: str
    variants: list


class FeatureFlagRemoveMatchRequired(TypedDict):
    project_id: str


class FeatureFlagRemoveMatch(FeatureFlagRemoveMatchRequired, total=False):
    id: str
    if_match: str
    slug: str
    team_id: str
    with_metadata: bool
    segment_id_or_slug: str
    hash_key: str


class FileRequired(TypedDict):
    mode: float
    name: str
    type: str


class File(FileRequired, total=False):
    children: list
    contentType: str
    uid: str


class FileListMatchRequired(TypedDict):
    deployment_id: str


class FileListMatch(FileListMatchRequired, total=False):
    slug: str
    team_id: str


class FlagRequired(TypedDict):
    createdAt: float
    createdBy: str
    environments: dict
    id: str
    kind: str
    ownerId: str
    projectId: str
    revision: float
    seed: float
    slug: str
    state: str
    typeName: str
    updatedAt: float
    variants: list


class Flag(FlagRequired, total=False):
    description: str
    maintainerIds: list
    metadata: dict
    permanent: bool
    tags: list
    updatedBy: str


class FlagLoadMatchRequired(TypedDict):
    id: str
    project_id: str


class FlagLoadMatch(FlagLoadMatchRequired, total=False):
    if_match: str
    slug: str
    team_id: str
    with_metadata: bool


class FlagsSdkKeyWithSecretRequired(TypedDict):
    createdAt: float
    createdBy: str
    environment: str
    hashKey: str
    keyValue: str
    partialKeyValue: str
    projectId: str
    sdkKeyType: str
    type: str
    updatedAt: float


class FlagsSdkKeyWithSecret(FlagsSdkKeyWithSecretRequired, total=False):
    deletedAt: float
    label: str
    tokenValue: str


class FlagsSdkKeyWithSecretUpdateDataRequired(TypedDict):
    project_id: str


class FlagsSdkKeyWithSecretUpdateData(FlagsSdkKeyWithSecretUpdateDataRequired, total=False):
    slug: str
    team_id: str
    createdAt: float
    createdBy: str
    deletedAt: float
    environment: str
    hashKey: str
    keyValue: str
    label: str
    partialKeyValue: str
    projectId: str
    sdkKeyType: str
    tokenValue: str
    type: str
    updatedAt: float


class GlobalConfigRequired(TypedDict):
    createdAt: float
    digest: str
    id: str
    itemCount: float
    ownerId: str
    sizeInBytes: float
    slug: str
    transfer: dict
    updatedAt: float


class GlobalConfig(GlobalConfigRequired, total=False):
    createdBy: str
    deletedAt: float
    items: dict
    purpose: Any
    schema: dict
    syncedToDynamoAt: float


class GlobalConfigLoadMatchRequired(TypedDict):
    id: str


class GlobalConfigLoadMatch(GlobalConfigLoadMatchRequired, total=False):
    slug: str
    team_id: str


class GlobalConfigListMatchRequired(TypedDict):
    id: str


class GlobalConfigListMatch(GlobalConfigListMatchRequired, total=False):
    limit: float
    metadata: str
    next: str
    slug: str
    team_id: str


class GlobalConfigCreateDataRequired(TypedDict):
    createdAt: float
    digest: str
    id: str
    itemCount: float
    ownerId: str
    sizeInBytes: float
    transfer: dict
    updatedAt: float


class GlobalConfigCreateData(GlobalConfigCreateDataRequired, total=False):
    slug: str
    team_id: str
    createdBy: str
    deletedAt: float
    items: dict
    purpose: Any
    schema: dict
    syncedToDynamoAt: float


class GlobalConfigUpdateDataRequired(TypedDict):
    id: str


class GlobalConfigUpdateData(GlobalConfigUpdateDataRequired, total=False):
    slug: str
    team_id: str
    createdAt: float
    createdBy: str
    deletedAt: float
    digest: str
    itemCount: float
    items: dict
    ownerId: str
    purpose: Any
    schema: dict
    sizeInBytes: float
    syncedToDynamoAt: float
    transfer: dict
    updatedAt: float


class GlobalConfigRemoveMatchRequired(TypedDict):
    id: str


class GlobalConfigRemoveMatch(GlobalConfigRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class GlobalConfigItemRequired(TypedDict):
    createdAt: float
    edgeConfigId: str
    key: str
    updatedAt: float
    value: Any


class GlobalConfigItem(GlobalConfigItemRequired, total=False):
    description: str
    id: str


class GlobalConfigItemLoadMatchRequired(TypedDict):
    global_config_id: str
    id: str


class GlobalConfigItemLoadMatch(GlobalConfigItemLoadMatchRequired, total=False):
    slug: str
    team_id: str


class GlobalConfigItemListMatchRequired(TypedDict):
    id: str


class GlobalConfigItemListMatch(GlobalConfigItemListMatchRequired, total=False):
    slug: str
    team_id: str


class GlobalConfigTokenRequired(TypedDict):
    createdAt: float
    edgeConfigId: str
    id: str
    label: str
    partialToken: str


class GlobalConfigToken(GlobalConfigTokenRequired, total=False):
    token: str


class GlobalConfigTokenLoadMatchRequired(TypedDict):
    id: str


class GlobalConfigTokenLoadMatch(GlobalConfigTokenLoadMatchRequired, total=False):
    global_config_id: str
    slug: str
    team_id: str


class IntegrationRequired(TypedDict):
    description: str
    id: str
    metadataSchema: dict
    name: str
    paymentMethodRequired: bool
    projectId: str
    protocols: dict
    scope: str
    slug: str
    type: str


class Integration(IntegrationRequired, total=False):
    cost: str
    details: list
    disabled: bool
    effectiveDate: str
    envVarEnvironments: list
    highlightedDetails: list
    initialCharge: str
    makeEnvVarsSensitive: bool
    maximumAmount: str
    maximumAmountAutoPurchasePerPeriod: str
    minimumAmount: str
    preauthorizationAmount: float
    primaryProtocol: str
    quote: list


class IntegrationLoadMatchRequired(TypedDict):
    id: str


class IntegrationLoadMatch(IntegrationLoadMatchRequired, total=False):
    slug: str
    team_id: str


class IntegrationListMatchRequired(TypedDict):
    configuration_id: str


class IntegrationListMatch(IntegrationListMatchRequired, total=False):
    slug: str
    team_id: str


class IntegrationCreateDataRequired(TypedDict):
    installation_id: str
    resource_id: str
    description: str
    id: str
    metadataSchema: dict
    name: str
    paymentMethodRequired: bool
    projectId: str
    protocols: dict
    scope: str
    type: str


class IntegrationCreateData(IntegrationCreateDataRequired, total=False):
    slug: str
    team_id: str
    cost: str
    details: list
    disabled: bool
    effectiveDate: str
    envVarEnvironments: list
    highlightedDetails: list
    initialCharge: str
    makeEnvVarsSensitive: bool
    maximumAmount: str
    maximumAmountAutoPurchasePerPeriod: str
    minimumAmount: str
    preauthorizationAmount: float
    primaryProtocol: str
    quote: list


class IntegrationRemoveMatchRequired(TypedDict):
    id: str


class IntegrationRemoveMatch(IntegrationRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class KmsRequired(TypedDict):
    algorithm: str
    createdAt: str
    environments: list
    id: str
    keyId: str
    kind: str
    message: str
    name: str
    origin: str
    ownerId: str
    policies: list
    projectId: str
    signature: str
    signingKeys: list
    token: str
    updatedAt: str


class Kms(KmsRequired, total=False):
    activation: str
    alg: str
    claims: dict
    claimsSchema: dict
    headers: dict
    importKey: str
    importKeyId: str
    key_ops: list
    kid: str
    kty: str
    managedBy: str
    revokePreviousAfterHours: float
    revokePreviousAt: Any
    tokenClaims: dict
    ttl: float
    use: str
    x5c: list
    x5tS256: str


class KmsLoadMatchRequired(TypedDict):
    issuer_id: str


class KmsLoadMatch(KmsLoadMatchRequired, total=False):
    slug: str
    team_id: str


class KmsListMatch(TypedDict, total=False):
    limit: int
    next: str
    slug: str
    team_id: str


class KmsCreateDataRequired(TypedDict):
    issuer_id: str
    algorithm: str
    createdAt: str
    environments: list
    id: str
    keyId: str
    kind: str
    message: str
    name: str
    origin: str
    ownerId: str
    policies: list
    projectId: str
    signature: str
    signingKeys: list
    token: str
    updatedAt: str


class KmsCreateData(KmsCreateDataRequired, total=False):
    key_id: str
    slug: str
    team_id: str
    activation: str
    alg: str
    claims: dict
    claimsSchema: dict
    headers: dict
    importKey: str
    importKeyId: str
    key_ops: list
    kid: str
    kty: str
    managedBy: str
    revokePreviousAfterHours: float
    revokePreviousAt: Any
    tokenClaims: dict
    ttl: float
    use: str
    x5c: list
    x5tS256: str


class KmsUpdateDataRequired(TypedDict):
    issuer_id: str


class KmsUpdateData(KmsUpdateDataRequired, total=False):
    kind: str
    policy_key: str
    slug: str
    team_id: str
    activation: str
    alg: str
    algorithm: str
    claims: dict
    claimsSchema: dict
    createdAt: str
    environments: list
    headers: dict
    id: str
    importKey: str
    importKeyId: str
    keyId: str
    key_ops: list
    kid: str
    kty: str
    managedBy: str
    message: str
    name: str
    origin: str
    ownerId: str
    policies: list
    projectId: str
    revokePreviousAfterHours: float
    revokePreviousAt: Any
    signature: str
    signingKeys: list
    token: str
    tokenClaims: dict
    ttl: float
    updatedAt: str
    use: str
    x5c: list
    x5tS256: str


class KmsRemoveMatchRequired(TypedDict):
    issuer_id: str


class KmsRemoveMatch(KmsRemoveMatchRequired, total=False):
    kind: str
    policy_key: str
    slug: str
    team_id: str


class ListEventType(TypedDict):
    categories: list
    types: list


class ListEventTypeListMatch(TypedDict, total=False):
    slug: str
    team_id: str


class Log(TypedDict):
    pass


class LogLoadMatchRequired(TypedDict):
    deployment_id: str
    project_id: str


class LogLoadMatch(LogLoadMatchRequired, total=False):
    slug: str
    team_id: str


class LogDrainRequired(TypedDict):
    createdAt: float
    createdFrom: str
    deliveryFormat: Any
    id: str
    ownerId: str
    source: Any
    sources: list
    url: str


class LogDrain(LogDrainRequired, total=False):
    branch: str
    clientId: str
    configurationId: str
    environments: list
    headers: dict
    integrationConfigurationUri: str
    integrationIcon: str
    integrationWebsite: str
    name: str
    projectId: str
    projectIds: list
    projectsMetadata: list
    samplingRate: float
    secret: str


class LogDrainLoadMatchRequired(TypedDict):
    id: str


class LogDrainLoadMatch(LogDrainLoadMatchRequired, total=False):
    slug: str
    team_id: str


class LogDrainListMatch(TypedDict, total=False):
    slug: str
    team_id: str


class LogDrainCreateDataRequired(TypedDict):
    createdAt: float
    createdFrom: str
    deliveryFormat: Any
    id: str
    ownerId: str
    source: Any
    sources: list
    url: str


class LogDrainCreateData(LogDrainCreateDataRequired, total=False):
    slug: str
    team_id: str
    branch: str
    clientId: str
    configurationId: str
    environments: list
    headers: dict
    integrationConfigurationUri: str
    integrationIcon: str
    integrationWebsite: str
    name: str
    projectId: str
    projectIds: list
    projectsMetadata: list
    samplingRate: float
    secret: str


class LogDrainRemoveMatchRequired(TypedDict):
    id: str


class LogDrainRemoveMatch(LogDrainRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class MarketplaceRequired(TypedDict):
    access_token: str
    already_revoked: bool
    balances: list
    billing: Any
    billingPlan: dict
    client_secret: str
    created: str
    data: dict
    email: str
    eod: str
    event: Any
    expires_in: float
    id: str
    internalId: str
    invoiceDate: str
    invoiceId: str
    items: list
    name: str
    notification: dict
    origin: str
    partnerId: str
    period: dict
    productId: str
    revoked: bool
    role: str
    scope: str
    secrets: list
    slug: str
    state: str
    timestamp: str
    token: str
    token_type: str
    total: str
    updated: str
    usage: list


class Marketplace(MarketplaceRequired, total=False):
    billingPlanId: str
    category: str
    client_id: str
    createdAt: float
    description: str
    discounts: list
    externalId: str
    extras: dict
    final: bool
    globalUserId: str
    invoiceNumber: str
    isArchived: bool
    memo: str
    metadata: dict
    ownership: str
    paidAt: str
    partial: bool
    protocolSettings: dict
    refundReason: str
    refundTotal: str
    refundedAt: str
    status: str
    test: bool
    updatedAt: float
    userEmail: str
    validationErrors: list


class MarketplaceLoadMatchRequired(TypedDict):
    installation_id: str


class MarketplaceLoadMatch(MarketplaceLoadMatchRequired, total=False):
    invoice_id: str
    member_id: str
    resource_id: str


class MarketplaceListMatch(TypedDict):
    installation_id: str


class MarketplaceCreateDataRequired(TypedDict):
    installation_id: str
    access_token: str
    already_revoked: bool
    balances: list
    billing: Any
    billingPlan: dict
    client_secret: str
    created: str
    data: dict
    email: str
    eod: str
    event: Any
    expires_in: float
    id: str
    internalId: str
    invoiceDate: str
    invoiceId: str
    items: list
    name: str
    notification: dict
    origin: str
    partnerId: str
    period: dict
    productId: str
    revoked: bool
    role: str
    scope: str
    secrets: list
    slug: str
    state: str
    timestamp: str
    token: str
    token_type: str
    total: str
    updated: str
    usage: list


class MarketplaceCreateData(MarketplaceCreateDataRequired, total=False):
    invoice_id: str
    resource_id: str
    billingPlanId: str
    category: str
    client_id: str
    createdAt: float
    description: str
    discounts: list
    externalId: str
    extras: dict
    final: bool
    globalUserId: str
    invoiceNumber: str
    isArchived: bool
    memo: str
    metadata: dict
    ownership: str
    paidAt: str
    partial: bool
    protocolSettings: dict
    refundReason: str
    refundTotal: str
    refundedAt: str
    status: str
    test: bool
    updatedAt: float
    userEmail: str
    validationErrors: list


class MarketplaceUpdateDataRequired(TypedDict):
    installation_id: str
    resource_id: str


class MarketplaceUpdateData(MarketplaceUpdateDataRequired, total=False):
    product_id: str
    access_token: str
    already_revoked: bool
    balances: list
    billing: Any
    billingPlan: dict
    billingPlanId: str
    category: str
    client_id: str
    client_secret: str
    created: str
    createdAt: float
    data: dict
    description: str
    discounts: list
    email: str
    eod: str
    event: Any
    expires_in: float
    externalId: str
    extras: dict
    final: bool
    globalUserId: str
    id: str
    internalId: str
    invoiceDate: str
    invoiceId: str
    invoiceNumber: str
    isArchived: bool
    items: list
    memo: str
    metadata: dict
    name: str
    notification: dict
    origin: str
    ownership: str
    paidAt: str
    partial: bool
    partnerId: str
    period: dict
    productId: str
    protocolSettings: dict
    refundReason: str
    refundTotal: str
    refundedAt: str
    revoked: bool
    role: str
    scope: str
    secrets: list
    slug: str
    state: str
    status: str
    test: bool
    timestamp: str
    token: str
    token_type: str
    total: str
    updated: str
    updatedAt: float
    usage: list
    userEmail: str
    validationErrors: list


class MarketplaceRemoveMatchRequired(TypedDict):
    installation_id: str
    resource_id: str


class MarketplaceRemoveMatch(MarketplaceRemoveMatchRequired, total=False):
    item_id: str


class MicrofrontendRequired(TypedDict):
    abuse: dict
    accountId: str
    alias: list
    analytics: dict
    applications: dict
    crons: dict
    dataCache: dict
    defaultResourceConfig: dict
    deploymentExpiration: dict
    directoryListing: bool
    gitComments: dict
    gitProviderOptions: dict
    id: str
    lastAliasRequest: dict
    name: str
    nodeVersion: str
    optionsAllowlist: dict
    passport: dict
    resourceConfig: dict
    rollbackDescription: dict
    rollingRelease: dict
    speedInsights: dict
    ssoProtection: dict
    staticIps: dict
    usageStatus: dict
    webAnalytics: dict


class Microfrontend(MicrofrontendRequired, total=False):
    appliedCve55182Migration: bool
    autoAssignCustomDomains: bool
    autoAssignCustomDomainsUpdatedBy: str
    autoExposeSystemEnvs: bool
    avatar: str
    blobs: dict
    buildCommand: str
    commandForIgnoringBuildStep: str
    concurrencyBucketName: str
    connectBuildsEnabled: bool
    connectConfigurationId: str
    connectConfigurations: list
    createdAt: float
    creator: Any
    customEnvironments: list
    customerSupportCodeVisibility: bool
    deploymentPolicy: dict
    devCommand: str
    dismissedToasts: list
    enableAffectedProjectsDeployments: bool
    enableExternalRewriteCaching: bool
    enablePreviewFeedback: bool
    enableProductionFeedback: bool
    env: list
    expiration: Any
    features: dict
    framework: str
    gitForkProtection: bool
    gitLFS: bool
    hasActiveBranches: bool
    hasDeployments: bool
    installCommand: str
    internalRoutes: list
    ipBuckets: list
    jobs: dict
    lastRollbackTarget: dict
    latestDeployments: list
    link: str
    live: bool
    microfrontends: Any
    oidcTokenConfig: dict
    options: dict
    outputDirectory: str
    passiveConnectConfigurationId: str
    passwordProtection: dict
    paused: bool
    permissions: dict
    productionDeploymentsFastLane: bool
    protectedSourcemaps: bool
    protectionBypass: dict
    protectionConfig: dict
    rootDirectory: str
    sandbox: dict
    schema: str
    security: dict
    serverlessFunctionZeroConfigFailover: bool
    services: list
    skewProtectionAllowedDomains: list
    skewProtectionBoundaryAt: float
    skewProtectionMaxAge: float
    skipGitConnectDuringLink: bool
    sourceFilesOutsideRootDirectory: bool
    targets: dict
    tier: str
    tracing: dict
    transferCompletedAt: float
    transferStartedAt: float
    transferToAccountId: str
    transferredFromAccountId: str
    trustedIps: Any
    trustedSources: dict
    updatedAt: float
    v0: bool
    v0Created: bool
    version: str


class MicrofrontendLoadMatchRequired(TypedDict):
    project_id_or_name: str


class MicrofrontendLoadMatch(MicrofrontendLoadMatchRequired, total=False):
    slug: str
    team_id: str


class MicrofrontendListMatchRequired(TypedDict):
    group_id: str


class MicrofrontendListMatch(MicrofrontendListMatchRequired, total=False):
    slug: str
    team_id: str


class MicrofrontendCreateDataRequired(TypedDict):
    abuse: dict
    accountId: str
    alias: list
    analytics: dict
    applications: dict
    crons: dict
    dataCache: dict
    defaultResourceConfig: dict
    deploymentExpiration: dict
    directoryListing: bool
    gitComments: dict
    gitProviderOptions: dict
    id: str
    lastAliasRequest: dict
    name: str
    nodeVersion: str
    optionsAllowlist: dict
    passport: dict
    resourceConfig: dict
    rollbackDescription: dict
    rollingRelease: dict
    speedInsights: dict
    ssoProtection: dict
    staticIps: dict
    usageStatus: dict
    webAnalytics: dict


class MicrofrontendCreateData(MicrofrontendCreateDataRequired, total=False):
    slug: str
    team_id: str
    appliedCve55182Migration: bool
    autoAssignCustomDomains: bool
    autoAssignCustomDomainsUpdatedBy: str
    autoExposeSystemEnvs: bool
    avatar: str
    blobs: dict
    buildCommand: str
    commandForIgnoringBuildStep: str
    concurrencyBucketName: str
    connectBuildsEnabled: bool
    connectConfigurationId: str
    connectConfigurations: list
    createdAt: float
    creator: Any
    customEnvironments: list
    customerSupportCodeVisibility: bool
    deploymentPolicy: dict
    devCommand: str
    dismissedToasts: list
    enableAffectedProjectsDeployments: bool
    enableExternalRewriteCaching: bool
    enablePreviewFeedback: bool
    enableProductionFeedback: bool
    env: list
    expiration: Any
    features: dict
    framework: str
    gitForkProtection: bool
    gitLFS: bool
    hasActiveBranches: bool
    hasDeployments: bool
    installCommand: str
    internalRoutes: list
    ipBuckets: list
    jobs: dict
    lastRollbackTarget: dict
    latestDeployments: list
    link: str
    live: bool
    microfrontends: Any
    oidcTokenConfig: dict
    options: dict
    outputDirectory: str
    passiveConnectConfigurationId: str
    passwordProtection: dict
    paused: bool
    permissions: dict
    productionDeploymentsFastLane: bool
    protectedSourcemaps: bool
    protectionBypass: dict
    protectionConfig: dict
    rootDirectory: str
    sandbox: dict
    schema: str
    security: dict
    serverlessFunctionZeroConfigFailover: bool
    services: list
    skewProtectionAllowedDomains: list
    skewProtectionBoundaryAt: float
    skewProtectionMaxAge: float
    skipGitConnectDuringLink: bool
    sourceFilesOutsideRootDirectory: bool
    targets: dict
    tier: str
    tracing: dict
    transferCompletedAt: float
    transferStartedAt: float
    transferToAccountId: str
    transferredFromAccountId: str
    trustedIps: Any
    trustedSources: dict
    updatedAt: float
    v0: bool
    v0Created: bool
    version: str


class NetworkRequired(TypedDict):
    awsAccountId: str
    awsRegion: str
    cidr: str
    createdAt: float
    hostedZones: dict
    id: str
    name: str
    peeringConnections: dict
    projects: dict
    status: str
    teamId: str


class Network(NetworkRequired, total=False):
    awsAvailabilityZoneIds: list
    egressIpAddresses: list
    region: str
    vpcId: str


class NetworkLoadMatchRequired(TypedDict):
    id: str


class NetworkLoadMatch(NetworkLoadMatchRequired, total=False):
    slug: str
    team_id: str


class NetworkListMatch(TypedDict, total=False):
    include_hosted_zone: bool
    include_peering_connection: bool
    include_project: bool
    search: str
    slug: str
    team_id: str


class NetworkCreateDataRequired(TypedDict):
    awsAccountId: str
    awsRegion: str
    cidr: str
    createdAt: float
    hostedZones: dict
    id: str
    name: str
    peeringConnections: dict
    projects: dict
    status: str
    teamId: str


class NetworkCreateData(NetworkCreateDataRequired, total=False):
    slug: str
    team_id: str
    awsAvailabilityZoneIds: list
    egressIpAddresses: list
    region: str
    vpcId: str


class NetworkUpdateDataRequired(TypedDict):
    id: str


class NetworkUpdateData(NetworkUpdateDataRequired, total=False):
    slug: str
    team_id: str
    awsAccountId: str
    awsAvailabilityZoneIds: list
    awsRegion: str
    cidr: str
    createdAt: float
    egressIpAddresses: list
    hostedZones: dict
    name: str
    peeringConnections: dict
    projects: dict
    region: str
    status: str
    teamId: str
    vpcId: str


class NetworkRemoveMatchRequired(TypedDict):
    id: str


class NetworkRemoveMatch(NetworkRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class Networking(TypedDict, total=False):
    builds: bool
    regions: list


class NetworkingUpdateDataRequired(TypedDict):
    id_or_name: str


class NetworkingUpdateData(NetworkingUpdateDataRequired, total=False):
    slug: str
    team_id: str
    builds: bool
    regions: list


class NetworkingRemoveMatchRequired(TypedDict):
    endpoint_id: str
    project_id: str


class NetworkingRemoveMatch(NetworkingRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class ObservabilityRequired(TypedDict):
    disabled: bool
    id: str


class Observability(ObservabilityRequired, total=False):
    disabledAt: float
    name: str


class ObservabilityListMatch(TypedDict, total=False):
    slug: str
    team_id: str


class ObservabilityUpdateDataRequired(TypedDict):
    project_id_or_name: str


class ObservabilityUpdateData(ObservabilityUpdateDataRequired, total=False):
    slug: str
    team_id: str
    disabled: bool
    disabledAt: float
    id: str
    name: str


class PrivateLinkEndpointRequired(TypedDict):
    awsServiceName: str
    createdAt: float
    endpointId: str
    name: str
    projectId: str
    status: str
    teamId: str
    updatedAt: float
    vercelRegion: str


class PrivateLinkEndpoint(PrivateLinkEndpointRequired, total=False):
    awsDnsEntries: list
    enablePrivateDns: bool
    id: str
    privateDnsNames: list
    statusMessage: str
    vpcEndpointId: str


class PrivateLinkEndpointLoadMatchRequired(TypedDict):
    id: str
    project_id: str


class PrivateLinkEndpointLoadMatch(PrivateLinkEndpointLoadMatchRequired, total=False):
    slug: str
    team_id: str


class PrivateLinkEndpointListMatchRequired(TypedDict):
    project_id: str


class PrivateLinkEndpointListMatch(PrivateLinkEndpointListMatchRequired, total=False):
    slug: str
    team_id: str


class PrivateLinkEndpointCreateDataRequired(TypedDict):
    awsServiceName: str
    createdAt: float
    endpointId: str
    name: str
    projectId: str
    status: str
    teamId: str
    updatedAt: float
    vercelRegion: str


class PrivateLinkEndpointCreateData(PrivateLinkEndpointCreateDataRequired, total=False):
    slug: str
    team_id: str
    awsDnsEntries: list
    enablePrivateDns: bool
    id: str
    privateDnsNames: list
    statusMessage: str
    vpcEndpointId: str


class PrivateLinkEndpointUpdateDataRequired(TypedDict):
    id: str
    project_id: str


class PrivateLinkEndpointUpdateData(PrivateLinkEndpointUpdateDataRequired, total=False):
    slug: str
    team_id: str
    awsDnsEntries: list
    awsServiceName: str
    createdAt: float
    enablePrivateDns: bool
    endpointId: str
    name: str
    privateDnsNames: list
    projectId: str
    status: str
    statusMessage: str
    teamId: str
    updatedAt: float
    vercelRegion: str
    vpcEndpointId: str


class ProjectRequired(TypedDict):
    abuse: dict
    accountId: str
    alias: list
    analytics: dict
    apexName: str
    crons: dict
    dataCache: dict
    defaultResourceConfig: dict
    deploymentExpiration: dict
    directoryListing: bool
    gitComments: dict
    gitProviderOptions: dict
    gitRepository: dict
    hostname: str
    id: str
    internalContentHint: dict
    key: str
    lastAliasRequest: dict
    name: str
    nodeVersion: str
    optionsAllowlist: dict
    passport: dict
    projectId: str
    resourceConfig: dict
    rollbackDescription: dict
    rollingRelease: dict
    speedInsights: dict
    ssoProtection: dict
    staticIps: dict
    token: str
    type: str
    usageStatus: dict
    value: str
    verified: bool
    webAnalytics: dict


class Project(ProjectRequired, total=False):
    acceptedPolicies: dict
    appliedCve55182Migration: bool
    autoAssignCustomDomains: bool
    autoAssignCustomDomainsUpdatedBy: str
    autoExposeSystemEnvs: bool
    avatar: str
    blobs: dict
    buildCommand: str
    commandForIgnoringBuildStep: str
    comment: str
    concurrencyBucketName: str
    configurationId: str
    connectBuildsEnabled: bool
    connectConfigurationId: str
    connectConfigurations: list
    contentHint: Any
    createdAt: float
    createdBy: str
    creator: Any
    customEnvironmentId: str
    customEnvironmentIds: list
    customEnvironments: list
    customerSupportCodeVisibility: bool
    decrypted: bool
    deploymentPolicy: dict
    devCommand: str
    dismissedToasts: list
    edgeConfigId: str
    edgeConfigTokenId: str
    enableAffectedProjectsDeployments: bool
    enableExternalRewriteCaching: bool
    enablePreviewFeedback: bool
    enableProductionFeedback: bool
    env: list
    environmentVariables: list
    expiration: Any
    features: dict
    framework: str
    gitBranch: str
    gitForkProtection: bool
    gitLFS: bool
    hasActiveBranches: bool
    hasDeployments: bool
    installCommand: str
    integrations: list
    internalRoutes: list
    ipBuckets: list
    jobs: dict
    lastRollbackTarget: dict
    latestDeployments: list
    legacyValue: str
    link: str
    live: bool
    microfrontends: Any
    newProjectName: str
    oidcTokenConfig: dict
    outputDirectory: str
    paidFeatures: dict
    passiveConnectConfigurationId: str
    passwordProtection: dict
    paused: bool
    permissions: dict
    previewDeploymentSuffix: str
    previewDeploymentsDisabled: bool
    productionDeploymentsFastLane: bool
    protectedSourcemaps: bool
    protectionBypass: dict
    protectionConfig: dict
    publicSource: bool
    redirect: str
    redirectStatusCode: float
    rootDirectory: str
    sandbox: dict
    security: dict
    serverlessFunctionRegion: str
    serverlessFunctionZeroConfigFailover: bool
    services: list
    skewProtectionAllowedDomains: list
    skewProtectionBoundaryAt: float
    skewProtectionMaxAge: float
    skipGitConnectDuringLink: bool
    sourceFilesOutsideRootDirectory: bool
    sunsetSecretId: str
    target: Any
    targets: dict
    tier: str
    tracing: dict
    transferCompletedAt: float
    transferStartedAt: float
    transferToAccountId: str
    transferredFromAccountId: str
    trustedIps: Any
    trustedSources: dict
    updatedAt: float
    updatedBy: str
    v0: bool
    v0Created: bool
    verification: list
    visibility: str


class ProjectLoadMatchRequired(TypedDict):
    id: str


class ProjectLoadMatch(ProjectLoadMatchRequired, total=False):
    slug: str
    team_id: str


class ProjectCreateDataRequired(TypedDict):
    deployment_id: str
    id: str
    abuse: dict
    accountId: str
    alias: list
    analytics: dict
    apexName: str
    crons: dict
    dataCache: dict
    defaultResourceConfig: dict
    deploymentExpiration: dict
    directoryListing: bool
    gitComments: dict
    gitProviderOptions: dict
    gitRepository: dict
    hostname: str
    internalContentHint: dict
    key: str
    lastAliasRequest: dict
    name: str
    nodeVersion: str
    optionsAllowlist: dict
    passport: dict
    projectId: str
    resourceConfig: dict
    rollbackDescription: dict
    rollingRelease: dict
    speedInsights: dict
    ssoProtection: dict
    staticIps: dict
    token: str
    type: str
    usageStatus: dict
    value: str
    verified: bool
    webAnalytics: dict


class ProjectCreateData(ProjectCreateDataRequired, total=False):
    description: str
    slug: str
    team_id: str
    acceptedPolicies: dict
    appliedCve55182Migration: bool
    autoAssignCustomDomains: bool
    autoAssignCustomDomainsUpdatedBy: str
    autoExposeSystemEnvs: bool
    avatar: str
    blobs: dict
    buildCommand: str
    commandForIgnoringBuildStep: str
    comment: str
    concurrencyBucketName: str
    configurationId: str
    connectBuildsEnabled: bool
    connectConfigurationId: str
    connectConfigurations: list
    contentHint: Any
    createdAt: float
    createdBy: str
    creator: Any
    customEnvironmentId: str
    customEnvironmentIds: list
    customEnvironments: list
    customerSupportCodeVisibility: bool
    decrypted: bool
    deploymentPolicy: dict
    devCommand: str
    dismissedToasts: list
    edgeConfigId: str
    edgeConfigTokenId: str
    enableAffectedProjectsDeployments: bool
    enableExternalRewriteCaching: bool
    enablePreviewFeedback: bool
    enableProductionFeedback: bool
    env: list
    environmentVariables: list
    expiration: Any
    features: dict
    framework: str
    gitBranch: str
    gitForkProtection: bool
    gitLFS: bool
    hasActiveBranches: bool
    hasDeployments: bool
    installCommand: str
    integrations: list
    internalRoutes: list
    ipBuckets: list
    jobs: dict
    lastRollbackTarget: dict
    latestDeployments: list
    legacyValue: str
    link: str
    live: bool
    microfrontends: Any
    newProjectName: str
    oidcTokenConfig: dict
    outputDirectory: str
    paidFeatures: dict
    passiveConnectConfigurationId: str
    passwordProtection: dict
    paused: bool
    permissions: dict
    previewDeploymentSuffix: str
    previewDeploymentsDisabled: bool
    productionDeploymentsFastLane: bool
    protectedSourcemaps: bool
    protectionBypass: dict
    protectionConfig: dict
    publicSource: bool
    redirect: str
    redirectStatusCode: float
    rootDirectory: str
    sandbox: dict
    security: dict
    serverlessFunctionRegion: str
    serverlessFunctionZeroConfigFailover: bool
    services: list
    skewProtectionAllowedDomains: list
    skewProtectionBoundaryAt: float
    skewProtectionMaxAge: float
    skipGitConnectDuringLink: bool
    sourceFilesOutsideRootDirectory: bool
    sunsetSecretId: str
    target: Any
    targets: dict
    tier: str
    tracing: dict
    transferCompletedAt: float
    transferStartedAt: float
    transferToAccountId: str
    transferredFromAccountId: str
    trustedIps: Any
    trustedSources: dict
    updatedAt: float
    updatedBy: str
    v0: bool
    v0Created: bool
    verification: list
    visibility: str


class ProjectUpdateDataRequired(TypedDict):
    code: str


class ProjectUpdateData(ProjectUpdateDataRequired, total=False):
    slug: str
    team_id: str
    abuse: dict
    acceptedPolicies: dict
    accountId: str
    alias: list
    analytics: dict
    apexName: str
    appliedCve55182Migration: bool
    autoAssignCustomDomains: bool
    autoAssignCustomDomainsUpdatedBy: str
    autoExposeSystemEnvs: bool
    avatar: str
    blobs: dict
    buildCommand: str
    commandForIgnoringBuildStep: str
    comment: str
    concurrencyBucketName: str
    configurationId: str
    connectBuildsEnabled: bool
    connectConfigurationId: str
    connectConfigurations: list
    contentHint: Any
    createdAt: float
    createdBy: str
    creator: Any
    crons: dict
    customEnvironmentId: str
    customEnvironmentIds: list
    customEnvironments: list
    customerSupportCodeVisibility: bool
    dataCache: dict
    decrypted: bool
    defaultResourceConfig: dict
    deploymentExpiration: dict
    deploymentPolicy: dict
    devCommand: str
    directoryListing: bool
    dismissedToasts: list
    edgeConfigId: str
    edgeConfigTokenId: str
    enableAffectedProjectsDeployments: bool
    enableExternalRewriteCaching: bool
    enablePreviewFeedback: bool
    enableProductionFeedback: bool
    env: list
    environmentVariables: list
    expiration: Any
    features: dict
    framework: str
    gitBranch: str
    gitComments: dict
    gitForkProtection: bool
    gitLFS: bool
    gitProviderOptions: dict
    gitRepository: dict
    hasActiveBranches: bool
    hasDeployments: bool
    hostname: str
    id: str
    installCommand: str
    integrations: list
    internalContentHint: dict
    internalRoutes: list
    ipBuckets: list
    jobs: dict
    key: str
    lastAliasRequest: dict
    lastRollbackTarget: dict
    latestDeployments: list
    legacyValue: str
    link: str
    live: bool
    microfrontends: Any
    name: str
    newProjectName: str
    nodeVersion: str
    oidcTokenConfig: dict
    optionsAllowlist: dict
    outputDirectory: str
    paidFeatures: dict
    passiveConnectConfigurationId: str
    passport: dict
    passwordProtection: dict
    paused: bool
    permissions: dict
    previewDeploymentSuffix: str
    previewDeploymentsDisabled: bool
    productionDeploymentsFastLane: bool
    projectId: str
    protectedSourcemaps: bool
    protectionBypass: dict
    protectionConfig: dict
    publicSource: bool
    redirect: str
    redirectStatusCode: float
    resourceConfig: dict
    rollbackDescription: dict
    rollingRelease: dict
    rootDirectory: str
    sandbox: dict
    security: dict
    serverlessFunctionRegion: str
    serverlessFunctionZeroConfigFailover: bool
    services: list
    skewProtectionAllowedDomains: list
    skewProtectionBoundaryAt: float
    skewProtectionMaxAge: float
    skipGitConnectDuringLink: bool
    sourceFilesOutsideRootDirectory: bool
    speedInsights: dict
    ssoProtection: dict
    staticIps: dict
    sunsetSecretId: str
    target: Any
    targets: dict
    tier: str
    token: str
    tracing: dict
    transferCompletedAt: float
    transferStartedAt: float
    transferToAccountId: str
    transferredFromAccountId: str
    trustedIps: Any
    trustedSources: dict
    type: str
    updatedAt: float
    updatedBy: str
    usageStatus: dict
    v0: bool
    v0Created: bool
    value: str
    verification: list
    verified: bool
    visibility: str
    webAnalytics: dict


class ProjectRemoveMatchRequired(TypedDict):
    id: str


class ProjectRemoveMatch(ProjectRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class ProjectMemberRequired(TypedDict):
    id: str
    role: str


class ProjectMember(ProjectMemberRequired, total=False):
    email: str
    uid: str
    username: str


class ProjectMemberLoadMatchRequired(TypedDict):
    id_or_name: str


class ProjectMemberLoadMatch(ProjectMemberLoadMatchRequired, total=False):
    limit: int
    search: str
    since: int
    slug: str
    team_id: str
    until: int


class ProjectMemberCreateDataRequired(TypedDict):
    id_or_name: str
    id: str
    role: str


class ProjectMemberCreateData(ProjectMemberCreateDataRequired, total=False):
    slug: str
    team_id: str
    email: str
    uid: str
    username: str


class ProjectMemberRemoveMatchRequired(TypedDict):
    id: str
    project_id: str


class ProjectMemberRemoveMatch(ProjectMemberRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class ProjectRouteRequired(TypedDict):
    action: str
    actions: list
    createdBy: str
    currentRoute: dict
    description: str
    id: str
    lastModified: float
    name: str
    pathCondition: dict
    prompt: str
    route: dict
    s3Key: str
    version: dict


class ProjectRoute(ProjectRouteRequired, total=False):
    alias: str
    conditions: list
    isLive: bool
    isStaging: bool
    overwrite: bool
    position: dict
    restore: bool
    routes: list
    ruleCount: float


class ProjectRouteLoadMatchRequired(TypedDict):
    id: str


class ProjectRouteLoadMatch(ProjectRouteLoadMatchRequired, total=False):
    diff: Any
    filter: str
    q: str
    slug: str
    team_id: str
    version_id: str


class ProjectRouteListMatchRequired(TypedDict):
    project_id: str


class ProjectRouteListMatch(ProjectRouteListMatchRequired, total=False):
    slug: str
    team_id: str


class ProjectRouteCreateDataRequired(TypedDict):
    id: str
    action: str
    actions: list
    createdBy: str
    currentRoute: dict
    description: str
    lastModified: float
    name: str
    pathCondition: dict
    prompt: str
    route: dict
    s3Key: str
    version: dict


class ProjectRouteCreateData(ProjectRouteCreateDataRequired, total=False):
    slug: str
    team_id: str
    alias: str
    conditions: list
    isLive: bool
    isStaging: bool
    overwrite: bool
    position: dict
    restore: bool
    routes: list
    ruleCount: float


class ProjectRouteUpdateDataRequired(TypedDict):
    id: str


class ProjectRouteUpdateData(ProjectRouteUpdateDataRequired, total=False):
    slug: str
    team_id: str
    action: str
    actions: list
    alias: str
    conditions: list
    createdBy: str
    currentRoute: dict
    description: str
    isLive: bool
    isStaging: bool
    lastModified: float
    name: str
    overwrite: bool
    pathCondition: dict
    position: dict
    prompt: str
    restore: bool
    route: dict
    routes: list
    ruleCount: float
    s3Key: str
    version: dict


class ProjectRouteRemoveMatchRequired(TypedDict):
    id: str


class ProjectRouteRemoveMatch(ProjectRouteRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class QueryRequired(TypedDict):
    metric: str
    scope: dict


class Query(QueryRequired, total=False):
    aggregation: str
    bucketTimezone: str
    endTime: str
    filter: str
    granularity: dict
    groupBy: list
    limit: float
    orderBy: str
    orderDirection: str
    startTime: str


class QueryCreateDataRequired(TypedDict):
    metric: str
    scope: dict


class QueryCreateData(QueryCreateDataRequired, total=False):
    aggregation: str
    bucketTimezone: str
    endTime: str
    filter: str
    granularity: dict
    groupBy: list
    limit: float
    orderBy: str
    orderDirection: str
    startTime: str


class RecordRequired(TypedDict):
    creator: str
    domain: str
    id: str
    name: str
    recordType: str
    type: str
    value: str


class Record(RecordRequired, total=False):
    comment: str
    createdAt: float
    ttl: float


class RecordLoadMatch(TypedDict):
    id: str


class RollingReleaseRequired(TypedDict):
    activeStage: dict
    advancementType: str
    canaryDeployment: dict
    currentDeployment: dict
    nextStage: dict
    queuedDeploymentId: str
    stages: list
    startedAt: float
    state: str
    substate: str
    updatedAt: float


class RollingRelease(RollingReleaseRequired, total=False):
    currentCanaryPercentage: float


class RollingReleaseLoadMatchRequired(TypedDict):
    id_or_name: str


class RollingReleaseLoadMatch(RollingReleaseLoadMatchRequired, total=False):
    slug: str
    state: str
    team_id: str


class RollingReleaseCreateDataRequired(TypedDict):
    project_id: str
    activeStage: dict
    advancementType: str
    canaryDeployment: dict
    currentDeployment: dict
    nextStage: dict
    queuedDeploymentId: str
    stages: list
    startedAt: float
    state: str
    substate: str
    updatedAt: float


class RollingReleaseCreateData(RollingReleaseCreateDataRequired, total=False):
    slug: str
    team_id: str
    currentCanaryPercentage: float


class RollingReleaseUpdateDataRequired(TypedDict):
    project_id: str


class RollingReleaseUpdateData(RollingReleaseUpdateDataRequired, total=False):
    slug: str
    team_id: str
    activeStage: dict
    advancementType: str
    canaryDeployment: dict
    currentCanaryPercentage: float
    currentDeployment: dict
    nextStage: dict
    queuedDeploymentId: str
    stages: list
    startedAt: float
    state: str
    substate: str
    updatedAt: float


class RollingReleaseRemoveMatchRequired(TypedDict):
    project_id: str


class RollingReleaseRemoveMatch(RollingReleaseRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class SandboxRequired(TypedDict):
    args: list
    command: str
    createdAt: float
    cwd: str
    exitCode: float
    id: str
    keepLastSnapshots: dict
    lastUsedAt: float
    maxSizeBytes: float
    name: str
    path: str
    projectId: str
    resumed: bool
    routes: list
    sandbox: dict
    session: dict
    sessionId: str
    sizeBytes: float
    sourceSessionId: str
    startedAt: float
    status: str
    statusUpdatedAt: float
    updatedAt: float


class Sandbox(SandboxRequired, total=False):
    creationMethod: str
    currentSandboxName: str
    currentSessionId: str
    currentSnapshotId: str
    durationMs: float
    env: dict
    expiration: Any
    expiresAt: float
    failoverRegions: list
    image: str
    logs: bool
    memory: float
    mounts: dict
    networkId: str
    networkPolicy: Any
    parentId: str
    persistent: bool
    ports: list
    recursive: bool
    region: str
    regions: list
    resources: dict
    runtime: str
    snapshotExpiration: Any
    source: Any
    sudo: bool
    tags: dict
    timeout: int
    totalActiveCpuDurationMs: float
    totalDurationMs: float
    totalEgressBytes: float
    totalIngressBytes: float
    vcpus: float
    wait: bool


class SandboxLoadMatchRequired(TypedDict):
    id: str


class SandboxLoadMatch(SandboxLoadMatchRequired, total=False):
    project_id: str
    resume: bool
    slug: str
    team_id: str


class SandboxListMatch(TypedDict, total=False):
    cursor: str
    limit: float
    name_prefix: str
    project: str
    slug: str
    sort_by: str
    sort_order: str
    status: str
    tag: Any
    team_id: str


class SandboxCreateDataRequired(TypedDict):
    name: str
    args: list
    command: str
    createdAt: float
    cwd: str
    exitCode: float
    id: str
    keepLastSnapshots: dict
    lastUsedAt: float
    maxSizeBytes: float
    path: str
    projectId: str
    resumed: bool
    routes: list
    sandbox: dict
    session: dict
    sessionId: str
    sizeBytes: float
    sourceSessionId: str
    startedAt: float
    status: str
    statusUpdatedAt: float
    updatedAt: float


class SandboxCreateData(SandboxCreateDataRequired, total=False):
    slug: str
    team_id: str
    creationMethod: str
    currentSandboxName: str
    currentSessionId: str
    currentSnapshotId: str
    durationMs: float
    env: dict
    expiration: Any
    expiresAt: float
    failoverRegions: list
    image: str
    logs: bool
    memory: float
    mounts: dict
    networkId: str
    networkPolicy: Any
    parentId: str
    persistent: bool
    ports: list
    recursive: bool
    region: str
    regions: list
    resources: dict
    runtime: str
    snapshotExpiration: Any
    source: Any
    sudo: bool
    tags: dict
    timeout: int
    totalActiveCpuDurationMs: float
    totalDurationMs: float
    totalEgressBytes: float
    totalIngressBytes: float
    vcpus: float
    wait: bool


class SandboxUpdateDataRequired(TypedDict):
    id: str


class SandboxUpdateData(SandboxUpdateDataRequired, total=False):
    project_id: str
    resume: bool
    slug: str
    team_id: str
    args: list
    command: str
    createdAt: float
    creationMethod: str
    currentSandboxName: str
    currentSessionId: str
    currentSnapshotId: str
    cwd: str
    durationMs: float
    env: dict
    exitCode: float
    expiration: Any
    expiresAt: float
    failoverRegions: list
    image: str
    keepLastSnapshots: dict
    lastUsedAt: float
    logs: bool
    maxSizeBytes: float
    memory: float
    mounts: dict
    name: str
    networkId: str
    networkPolicy: Any
    parentId: str
    path: str
    persistent: bool
    ports: list
    projectId: str
    recursive: bool
    region: str
    regions: list
    resources: dict
    resumed: bool
    routes: list
    runtime: str
    sandbox: dict
    session: dict
    sessionId: str
    sizeBytes: float
    snapshotExpiration: Any
    source: Any
    sourceSessionId: str
    startedAt: float
    status: str
    statusUpdatedAt: float
    sudo: bool
    tags: dict
    timeout: int
    totalActiveCpuDurationMs: float
    totalDurationMs: float
    totalEgressBytes: float
    totalIngressBytes: float
    updatedAt: float
    vcpus: float
    wait: bool


class SandboxRemoveMatchRequired(TypedDict):
    id: str


class SandboxRemoveMatch(SandboxRemoveMatchRequired, total=False):
    delete_orphan_snapshot: bool
    project_id: str
    slug: str
    team_id: str


class Schema(TypedDict):
    aggregations: list
    defaultAggregation: str
    description: str
    dimensions: list
    id: str
    unit: str


class SchemaLoadMatch(TypedDict):
    id: str


class SchemaListMatch(TypedDict, total=False):
    aggregations: list
    defaultAggregation: str
    description: str
    dimensions: list
    id: str
    unit: str


class SecurityRequired(TypedDict):
    CreatedAt: str
    Domain: str
    Id: str
    Ip: str
    OwnerId: str
    UpdatedAt: str
    UpdatedAtHour: str
    action: dict
    action_type: str
    active: bool
    changes: list
    conditionGroup: list
    count: float
    crs: dict
    endTime: str
    firewallEnabled: bool
    host: str
    id: str
    ips: list
    isActive: bool
    name: str
    ownerId: str
    projectKey: str
    public_ip: str
    ruleId: str
    ruleName: str
    rules: list
    startTime: str
    updatedAt: str
    version: float


class Security(SecurityRequired, total=False):
    Action: str
    ActorId: str
    DeletedAt: str
    ExpiresAt: float
    IsProjectRule: bool
    Note: str
    ProjectId: str
    allSources: bool
    botIdEnabled: bool
    conditions: list
    description: str
    domain: str
    logHeaders: Any
    managedRules: dict
    note: str
    projectScope: bool
    rulesets: Any
    sourceIp: str
    ttl: float


class SecurityLoadMatchRequired(TypedDict):
    project_id: str


class SecurityLoadMatch(SecurityLoadMatchRequired, total=False):
    config_version: str
    slug: str
    team_id: str
    since: float


class SecurityListMatchRequired(TypedDict):
    project_id: str


class SecurityListMatch(SecurityListMatchRequired, total=False):
    domain: str
    limit: float
    offset: str
    project_scope: bool
    slug: str
    source_ip: str
    team_id: str


class SecurityCreateDataRequired(TypedDict):
    project_id: str
    CreatedAt: str
    Domain: str
    Id: str
    Ip: str
    OwnerId: str
    UpdatedAt: str
    UpdatedAtHour: str
    action: dict
    action_type: str
    active: bool
    changes: list
    conditionGroup: list
    count: float
    crs: dict
    endTime: str
    firewallEnabled: bool
    host: str
    id: str
    ips: list
    isActive: bool
    name: str
    ownerId: str
    projectKey: str
    public_ip: str
    ruleId: str
    ruleName: str
    rules: list
    startTime: str
    updatedAt: str
    version: float


class SecurityCreateData(SecurityCreateDataRequired, total=False):
    slug: str
    team_id: str
    Action: str
    ActorId: str
    DeletedAt: str
    ExpiresAt: float
    IsProjectRule: bool
    Note: str
    ProjectId: str
    allSources: bool
    botIdEnabled: bool
    conditions: list
    description: str
    domain: str
    logHeaders: Any
    managedRules: dict
    note: str
    projectScope: bool
    rulesets: Any
    sourceIp: str
    ttl: float


class SecurityUpdateDataRequired(TypedDict):
    project_id: str


class SecurityUpdateData(SecurityUpdateDataRequired, total=False):
    slug: str
    team_id: str
    Action: str
    ActorId: str
    CreatedAt: str
    DeletedAt: str
    Domain: str
    ExpiresAt: float
    Id: str
    Ip: str
    IsProjectRule: bool
    Note: str
    OwnerId: str
    ProjectId: str
    UpdatedAt: str
    UpdatedAtHour: str
    action: dict
    action_type: str
    active: bool
    allSources: bool
    botIdEnabled: bool
    changes: list
    conditionGroup: list
    conditions: list
    count: float
    crs: dict
    description: str
    domain: str
    endTime: str
    firewallEnabled: bool
    host: str
    id: str
    ips: list
    isActive: bool
    logHeaders: Any
    managedRules: dict
    name: str
    note: str
    ownerId: str
    projectKey: str
    projectScope: bool
    public_ip: str
    ruleId: str
    ruleName: str
    rules: list
    rulesets: Any
    sourceIp: str
    startTime: str
    ttl: float
    updatedAt: str
    version: float


class SecurityRemoveMatch(TypedDict):
    config_version: str


class SegmentRequired(TypedDict):
    createdAt: float
    data: dict
    hint: str
    id: str
    label: str
    projectId: str
    slug: str
    typeName: str
    updatedAt: float


class Segment(SegmentRequired, total=False):
    createdBy: str
    description: str
    metadata: dict
    usedByFlags: list
    usedBySegments: list


class SegmentLoadMatchRequired(TypedDict):
    id: str
    project_id: str


class SegmentLoadMatch(SegmentLoadMatchRequired, total=False):
    slug: str
    team_id: str
    with_metadata: bool


class StorageRequired(TypedDict):
    count: float
    isTokenExpired: bool
    name: str
    projectsMetadata: list
    region: str
    size: float
    status: str
    usageQuotaExceeded: bool


class Storage(StorageRequired, total=False):
    access: str
    id: str
    kind: str
    projectFilter: dict
    projectId: str
    totalConnectedProjects: float


class StorageLoadMatchRequired(TypedDict):
    id: str


class StorageLoadMatch(StorageLoadMatchRequired, total=False):
    include_guide: bool
    skip_metadata: bool


class StorageCreateDataRequired(TypedDict):
    count: float
    isTokenExpired: bool
    name: str
    projectsMetadata: list
    region: str
    size: float
    status: str
    usageQuotaExceeded: bool


class StorageCreateData(StorageCreateDataRequired, total=False):
    access: str
    id: str
    kind: str
    projectFilter: dict
    projectId: str
    totalConnectedProjects: float


class StorageRemoveMatch(TypedDict):
    id: str


class TeamRequired(TypedDict):
    accessRequestedAt: float
    avatar: str
    billing: dict
    bitbucket: dict
    confirmed: bool
    createdAt: float
    creatorId: str
    defaultPassport: dict
    description: str
    github: dict
    gitlab: dict
    id: str
    joinedFrom: dict
    membership: dict
    name: str
    nsnbConfig: dict
    pagination: dict
    saml: dict
    slug: str
    stagingPrefix: str
    strictConnectors: dict
    strictDeploymentProtectionSettings: dict
    strictPasswordProtectionSettings: dict
    strictShareableLinks: dict
    teamName: str
    teamSlug: str
    teams: list
    updatedAt: float


class Team(TeamRequired, total=False):
    apiKeysInvalidatedAt: float
    appTokensInvalidatedAt: float
    attribution: dict
    connect: dict
    defaultDeploymentProtection: dict
    defaultExpirationSettings: dict
    defaultProjectJobs: dict
    defaultRoles: dict
    deploymentPolicy: dict
    disableHardAutoBlocks: Any
    disableRepositoryDispatchEvents: bool
    disjunctiveProductionSecretPolicy: str
    dpAccessRequestsMode: str
    emailDomain: str
    enablePolyrepoBranchRouting: bool
    enablePreviewFeedback: str
    enableProductionFeedback: str
    fallbackEnvironment: str
    hideIpAddresses: bool
    hideIpAddressesInLogDrains: bool
    integrationTokensInvalidatedAt: float
    inviteCode: str
    ipBuckets: list
    orgRootTeamId: str
    parentId: str
    personalAccessTokensInvalidatedAt: float
    platform: bool
    previewDeploymentSuffix: str
    projects: list
    regenerateInviteCode: bool
    remoteCaching: dict
    requireVerifiedCommits: bool
    resourceConfig: dict
    role: str
    sensitiveEnvironmentVariablePolicy: str
    teamPermissions: list


class TeamLoadMatchRequired(TypedDict):
    id: str


class TeamLoadMatch(TeamLoadMatchRequired, total=False):
    slug: str
    user_id: str


class TeamListMatch(TypedDict, total=False):
    limit: float
    since: float
    until: float


class TeamCreateDataRequired(TypedDict):
    accessRequestedAt: float
    avatar: str
    billing: dict
    bitbucket: dict
    confirmed: bool
    createdAt: float
    creatorId: str
    defaultPassport: dict
    description: str
    github: dict
    gitlab: dict
    id: str
    joinedFrom: dict
    membership: dict
    name: str
    nsnbConfig: dict
    pagination: dict
    saml: dict
    slug: str
    stagingPrefix: str
    strictConnectors: dict
    strictDeploymentProtectionSettings: dict
    strictPasswordProtectionSettings: dict
    strictShareableLinks: dict
    teamName: str
    teamSlug: str
    teams: list
    updatedAt: float


class TeamCreateData(TeamCreateDataRequired, total=False):
    apiKeysInvalidatedAt: float
    appTokensInvalidatedAt: float
    attribution: dict
    connect: dict
    defaultDeploymentProtection: dict
    defaultExpirationSettings: dict
    defaultProjectJobs: dict
    defaultRoles: dict
    deploymentPolicy: dict
    disableHardAutoBlocks: Any
    disableRepositoryDispatchEvents: bool
    disjunctiveProductionSecretPolicy: str
    dpAccessRequestsMode: str
    emailDomain: str
    enablePolyrepoBranchRouting: bool
    enablePreviewFeedback: str
    enableProductionFeedback: str
    fallbackEnvironment: str
    hideIpAddresses: bool
    hideIpAddressesInLogDrains: bool
    integrationTokensInvalidatedAt: float
    inviteCode: str
    ipBuckets: list
    orgRootTeamId: str
    parentId: str
    personalAccessTokensInvalidatedAt: float
    platform: bool
    previewDeploymentSuffix: str
    projects: list
    regenerateInviteCode: bool
    remoteCaching: dict
    requireVerifiedCommits: bool
    resourceConfig: dict
    role: str
    sensitiveEnvironmentVariablePolicy: str
    teamPermissions: list


class TeamUpdateDataRequired(TypedDict):
    id: str


class TeamUpdateData(TeamUpdateDataRequired, total=False):
    group_id: str
    slug: str
    uid: str
    accessRequestedAt: float
    apiKeysInvalidatedAt: float
    appTokensInvalidatedAt: float
    attribution: dict
    avatar: str
    billing: dict
    bitbucket: dict
    confirmed: bool
    connect: dict
    createdAt: float
    creatorId: str
    defaultDeploymentProtection: dict
    defaultExpirationSettings: dict
    defaultPassport: dict
    defaultProjectJobs: dict
    defaultRoles: dict
    deploymentPolicy: dict
    description: str
    disableHardAutoBlocks: Any
    disableRepositoryDispatchEvents: bool
    disjunctiveProductionSecretPolicy: str
    dpAccessRequestsMode: str
    emailDomain: str
    enablePolyrepoBranchRouting: bool
    enablePreviewFeedback: str
    enableProductionFeedback: str
    fallbackEnvironment: str
    github: dict
    gitlab: dict
    hideIpAddresses: bool
    hideIpAddressesInLogDrains: bool
    integrationTokensInvalidatedAt: float
    inviteCode: str
    ipBuckets: list
    joinedFrom: dict
    membership: dict
    name: str
    nsnbConfig: dict
    orgRootTeamId: str
    pagination: dict
    parentId: str
    personalAccessTokensInvalidatedAt: float
    platform: bool
    previewDeploymentSuffix: str
    projects: list
    regenerateInviteCode: bool
    remoteCaching: dict
    requireVerifiedCommits: bool
    resourceConfig: dict
    role: str
    saml: dict
    sensitiveEnvironmentVariablePolicy: str
    stagingPrefix: str
    strictConnectors: dict
    strictDeploymentProtectionSettings: dict
    strictPasswordProtectionSettings: dict
    strictShareableLinks: dict
    teamName: str
    teamPermissions: list
    teamSlug: str
    teams: list
    updatedAt: float


class TeamRemoveMatchRequired(TypedDict):
    id: str


class TeamRemoveMatch(TeamRemoveMatchRequired, total=False):
    group_id: str
    slug: str
    new_default_team_id: str
    uid: str
    invite_id: str


class TldName(TypedDict):
    pass


class TldNameListMatch(TypedDict, total=False):
    team_id: str


class Toggle(TypedDict):
    value: bool


class ToggleCreateData(TypedDict):
    project_id: str
    value: bool


class UserRequired(TypedDict):
    createdAt: float
    entities: list
    id: str
    principalId: str
    text: str
    user: dict


class User(UserRequired, total=False):
    categories: list
    payload: Any
    principal: Any
    requestId: str
    sessionId: str
    tokenId: str
    type: str
    userId: str
    via: list
    viaIds: list


class UserLoadMatchRequired(TypedDict):
    id: str


class UserLoadMatch(UserLoadMatchRequired, total=False):
    categories: list
    createdAt: float
    entities: list
    payload: Any
    principal: Any
    principalId: str
    requestId: str
    sessionId: str
    text: str
    tokenId: str
    type: str
    user: dict
    userId: str
    via: list
    viaIds: list


class UserListMatch(TypedDict, total=False):
    entity_id: str
    limit: float
    principal_id: str
    project_id: str
    since: str
    slug: str
    team_id: str
    type: str
    until: str
    user_id: str
    with_payload: str


class UserRemoveMatchRequired(TypedDict):
    id: str


class UserRemoveMatch(UserRemoveMatchRequired, total=False):
    categories: list
    createdAt: float
    entities: list
    payload: Any
    principal: Any
    principalId: str
    requestId: str
    sessionId: str
    text: str
    tokenId: str
    type: str
    user: dict
    userId: str
    via: list
    viaIds: list


class VcrRequired(TypedDict):
    createdAt: str
    id: str
    imageId: str
    kind: str
    layers: list
    manifestDigest: str
    name: str
    projectId: str
    public: bool
    repositoryId: str
    sizeInBytes: float
    status: str
    tag: str
    tags: list
    teamId: str
    teamSlug: str
    updatedAt: str


class Vcr(VcrRequired, total=False):
    arch: str
    platform: str
    pushedBy: str


class VcrLoadMatchRequired(TypedDict):
    id_or_name: str
    project_id: str


class VcrLoadMatch(VcrLoadMatchRequired, total=False):
    slug: str
    team_id: str


class VcrListMatchRequired(TypedDict):
    id_or_name: str
    project_id: str


class VcrListMatch(VcrListMatchRequired, total=False):
    cursor: str
    limit: int
    slug: str
    sort_by: str
    sort_order: str
    team_id: str


class VcrCreateDataRequired(TypedDict):
    id_or_name: str
    project_id: str
    createdAt: str
    id: str
    imageId: str
    kind: str
    layers: list
    manifestDigest: str
    name: str
    projectId: str
    public: bool
    repositoryId: str
    sizeInBytes: float
    status: str
    tag: str
    tags: list
    teamId: str
    teamSlug: str
    updatedAt: str


class VcrCreateData(VcrCreateDataRequired, total=False):
    slug: str
    team_id: str
    arch: str
    platform: str
    pushedBy: str


class VcrUpdateDataRequired(TypedDict):
    project_slug: str
    repository_name: str
    team_slug: str


class VcrUpdateData(VcrUpdateDataRequired, total=False):
    uuid: str
    digest: str
    reference: str
    arch: str
    createdAt: str
    id: str
    imageId: str
    kind: str
    layers: list
    manifestDigest: str
    name: str
    platform: str
    projectId: str
    public: bool
    pushedBy: str
    repositoryId: str
    sizeInBytes: float
    status: str
    tag: str
    tags: list
    teamId: str
    teamSlug: str
    updatedAt: str


class VcrRemoveMatchRequired(TypedDict):
    id_or_name: str
    project_id: str


class VcrRemoveMatch(VcrRemoveMatchRequired, total=False):
    slug: str
    team_id: str


class VcrImageListRequired(TypedDict):
    createdAt: str
    id: str
    kind: str
    manifestDigest: str
    repositoryId: str
    sizeInBytes: float
    status: str
    tags: list


class VcrImageList(VcrImageListRequired, total=False):
    arch: str
    platform: str
    pushedBy: str


class VcrImageListListMatchRequired(TypedDict):
    id_or_name: str
    project_id: str


class VcrImageListListMatch(VcrImageListListMatchRequired, total=False):
    cursor: str
    limit: int
    slug: str
    team_id: str
    untagged: bool


class VcrRepositoryList(TypedDict):
    createdAt: str
    id: str
    name: str
    projectId: str
    public: bool
    updatedAt: str


class VcrRepositoryListListMatchRequired(TypedDict):
    project_id: str


class VcrRepositoryListListMatch(VcrRepositoryListListMatchRequired, total=False):
    cursor: str
    limit: int
    slug: str
    team_id: str


class VcrRepositoryPermissionList(TypedDict):
    createdAt: str
    repositoryId: str
    teamId: str
    teamSlug: str


class VcrRepositoryPermissionListListMatchRequired(TypedDict):
    id_or_name: str
    project_id: str


class VcrRepositoryPermissionListListMatch(VcrRepositoryPermissionListListMatchRequired, total=False):
    cursor: str
    limit: int
    slug: str
    team_id: str


class WebAnalytics(TypedDict):
    data: Any
    query: dict
    version: float


class WebAnalyticsLoadMatchRequired(TypedDict):
    project_id: str


class WebAnalyticsLoadMatch(WebAnalyticsLoadMatchRequired, total=False):
    by: list
    filter: str
    limit: int
    since: Any
    slug: str
    team_id: str
    until: Any


class WebhookRequired(TypedDict):
    createdAt: float
    events: list
    id: str
    ownerId: str
    secret: str
    updatedAt: float
    url: str


class Webhook(WebhookRequired, total=False):
    alertRuleIds: list
    projectIds: list


class WebhookLoadMatchRequired(TypedDict):
    id: str


class WebhookLoadMatch(WebhookLoadMatchRequired, total=False):
    slug: str
    team_id: str


class WebhookCreateDataRequired(TypedDict):
    createdAt: float
    events: list
    id: str
    ownerId: str
    secret: str
    updatedAt: float
    url: str


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    slug: str
    team_id: str
    alertRuleIds: list
    projectIds: list


class WebhookRemoveMatchRequired(TypedDict):
    id: str


class WebhookRemoveMatch(WebhookRemoveMatchRequired, total=False):
    slug: str
    team_id: str
