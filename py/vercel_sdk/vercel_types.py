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


class ProjectRequired(TypedDict):
    abuse: dict
    accountId: str
    alias: list
    analytics: dict
    crons: dict
    dataCache: dict
    defaultResourceConfig: dict
    deploymentExpiration: dict
    directoryListing: bool
    gitComments: dict
    gitProviderOptions: dict
    gitRepository: dict
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


class Project(ProjectRequired, total=False):
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
    environmentVariables: list
    expiration: Any
    features: dict
    framework: str
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
    link: str
    live: bool
    microfrontends: Any
    oidcTokenConfig: dict
    outputDirectory: str
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


class ProjectLoadMatchRequired(TypedDict):
    id: str


class ProjectLoadMatch(ProjectLoadMatchRequired, total=False):
    slug: str
    team_id: str


class ProjectCreateDataRequired(TypedDict):
    abuse: dict
    accountId: str
    alias: list
    analytics: dict
    crons: dict
    dataCache: dict
    defaultResourceConfig: dict
    deploymentExpiration: dict
    directoryListing: bool
    gitComments: dict
    gitProviderOptions: dict
    gitRepository: dict
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


class ProjectCreateData(ProjectCreateDataRequired, total=False):
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
    environmentVariables: list
    expiration: Any
    features: dict
    framework: str
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
    link: str
    live: bool
    microfrontends: Any
    oidcTokenConfig: dict
    outputDirectory: str
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


class ProjectUpdateDataRequired(TypedDict):
    id: str


class ProjectUpdateData(ProjectUpdateDataRequired, total=False):
    slug: str
    team_id: str
    abuse: dict
    accountId: str
    alias: list
    analytics: dict
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
    crons: dict
    customEnvironments: list
    customerSupportCodeVisibility: bool
    dataCache: dict
    defaultResourceConfig: dict
    deploymentExpiration: dict
    deploymentPolicy: dict
    devCommand: str
    directoryListing: bool
    dismissedToasts: list
    enableAffectedProjectsDeployments: bool
    enableExternalRewriteCaching: bool
    enablePreviewFeedback: bool
    enableProductionFeedback: bool
    env: list
    environmentVariables: list
    expiration: Any
    features: dict
    framework: str
    gitComments: dict
    gitForkProtection: bool
    gitLFS: bool
    gitProviderOptions: dict
    gitRepository: dict
    hasActiveBranches: bool
    hasDeployments: bool
    installCommand: str
    integrations: list
    internalRoutes: list
    ipBuckets: list
    jobs: dict
    lastAliasRequest: dict
    lastRollbackTarget: dict
    latestDeployments: list
    link: str
    live: bool
    microfrontends: Any
    name: str
    nodeVersion: str
    oidcTokenConfig: dict
    optionsAllowlist: dict
    outputDirectory: str
    passiveConnectConfigurationId: str
    passport: dict
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
    usageStatus: dict
    v0: bool
    v0Created: bool
    webAnalytics: dict


class ProjectRemoveMatchRequired(TypedDict):
    id: str


class ProjectRemoveMatch(ProjectRemoveMatchRequired, total=False):
    slug: str
    team_id: str
