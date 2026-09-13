<?php
declare(strict_types=1);

// Typed models for the Vercel SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Project entity data model. */
class Project
{
    public array $abuse;
    public string $accountId;
    public array $alias;
    public array $analytics;
    public ?bool $appliedCve55182Migration = null;
    public ?bool $autoAssignCustomDomains = null;
    public ?string $autoAssignCustomDomainsUpdatedBy = null;
    public ?bool $autoExposeSystemEnvs = null;
    public ?string $avatar = null;
    public ?array $blobs = null;
    public ?string $buildCommand = null;
    public ?string $commandForIgnoringBuildStep = null;
    public ?string $concurrencyBucketName = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public ?array $connectConfigurations = null;
    public ?float $createdAt = null;
    public mixed $creator = null;
    public array $crons;
    public ?array $customEnvironments = null;
    public ?bool $customerSupportCodeVisibility = null;
    public array $dataCache;
    public array $defaultResourceConfig;
    public array $deploymentExpiration;
    public ?array $deploymentPolicy = null;
    public ?string $devCommand = null;
    public bool $directoryListing;
    public ?array $dismissedToasts = null;
    public ?bool $enableAffectedProjectsDeployments = null;
    public ?bool $enableExternalRewriteCaching = null;
    public ?bool $enablePreviewFeedback = null;
    public ?bool $enableProductionFeedback = null;
    public ?array $env = null;
    public ?array $environmentVariables = null;
    public mixed $expiration = null;
    public ?array $features = null;
    public ?string $framework = null;
    public array $gitComments;
    public ?bool $gitForkProtection = null;
    public ?bool $gitLFS = null;
    public array $gitProviderOptions;
    public array $gitRepository;
    public ?bool $hasActiveBranches = null;
    public ?bool $hasDeployments = null;
    public string $id;
    public ?string $installCommand = null;
    public ?array $integrations = null;
    public ?array $internalRoutes = null;
    public ?array $ipBuckets = null;
    public ?array $jobs = null;
    public array $lastAliasRequest;
    public ?array $lastRollbackTarget = null;
    public ?array $latestDeployments = null;
    public ?string $link = null;
    public ?bool $live = null;
    public mixed $microfrontends = null;
    public string $name;
    public string $nodeVersion;
    public ?array $oidcTokenConfig = null;
    public array $optionsAllowlist;
    public ?string $outputDirectory = null;
    public ?string $passiveConnectConfigurationId = null;
    public array $passport;
    public ?array $passwordProtection = null;
    public ?bool $paused = null;
    public ?array $permissions = null;
    public ?string $previewDeploymentSuffix = null;
    public ?bool $previewDeploymentsDisabled = null;
    public ?bool $productionDeploymentsFastLane = null;
    public ?bool $protectedSourcemaps = null;
    public ?array $protectionBypass = null;
    public ?array $protectionConfig = null;
    public ?bool $publicSource = null;
    public array $resourceConfig;
    public array $rollbackDescription;
    public array $rollingRelease;
    public ?string $rootDirectory = null;
    public ?array $sandbox = null;
    public ?array $security = null;
    public ?string $serverlessFunctionRegion = null;
    public ?bool $serverlessFunctionZeroConfigFailover = null;
    public ?array $services = null;
    public ?array $skewProtectionAllowedDomains = null;
    public ?float $skewProtectionBoundaryAt = null;
    public ?float $skewProtectionMaxAge = null;
    public ?bool $skipGitConnectDuringLink = null;
    public ?bool $sourceFilesOutsideRootDirectory = null;
    public array $speedInsights;
    public array $ssoProtection;
    public array $staticIps;
    public ?array $targets = null;
    public ?string $tier = null;
    public ?array $tracing = null;
    public ?float $transferCompletedAt = null;
    public ?float $transferStartedAt = null;
    public ?string $transferToAccountId = null;
    public ?string $transferredFromAccountId = null;
    public mixed $trustedIps = null;
    public ?array $trustedSources = null;
    public ?float $updatedAt = null;
    public array $usageStatus;
    public ?bool $v0 = null;
    public ?bool $v0Created = null;
    public array $webAnalytics;
}

/** Request payload for Project#load. */
class ProjectLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Project#create. */
class ProjectCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public array $abuse;
    public string $accountId;
    public array $alias;
    public array $analytics;
    public ?bool $appliedCve55182Migration = null;
    public ?bool $autoAssignCustomDomains = null;
    public ?string $autoAssignCustomDomainsUpdatedBy = null;
    public ?bool $autoExposeSystemEnvs = null;
    public ?string $avatar = null;
    public ?array $blobs = null;
    public ?string $buildCommand = null;
    public ?string $commandForIgnoringBuildStep = null;
    public ?string $concurrencyBucketName = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public ?array $connectConfigurations = null;
    public ?float $createdAt = null;
    public mixed $creator = null;
    public array $crons;
    public ?array $customEnvironments = null;
    public ?bool $customerSupportCodeVisibility = null;
    public array $dataCache;
    public array $defaultResourceConfig;
    public array $deploymentExpiration;
    public ?array $deploymentPolicy = null;
    public ?string $devCommand = null;
    public bool $directoryListing;
    public ?array $dismissedToasts = null;
    public ?bool $enableAffectedProjectsDeployments = null;
    public ?bool $enableExternalRewriteCaching = null;
    public ?bool $enablePreviewFeedback = null;
    public ?bool $enableProductionFeedback = null;
    public ?array $env = null;
    public ?array $environmentVariables = null;
    public mixed $expiration = null;
    public ?array $features = null;
    public ?string $framework = null;
    public array $gitComments;
    public ?bool $gitForkProtection = null;
    public ?bool $gitLFS = null;
    public array $gitProviderOptions;
    public array $gitRepository;
    public ?bool $hasActiveBranches = null;
    public ?bool $hasDeployments = null;
    public string $id;
    public ?string $installCommand = null;
    public ?array $integrations = null;
    public ?array $internalRoutes = null;
    public ?array $ipBuckets = null;
    public ?array $jobs = null;
    public array $lastAliasRequest;
    public ?array $lastRollbackTarget = null;
    public ?array $latestDeployments = null;
    public ?string $link = null;
    public ?bool $live = null;
    public mixed $microfrontends = null;
    public string $name;
    public string $nodeVersion;
    public ?array $oidcTokenConfig = null;
    public array $optionsAllowlist;
    public ?string $outputDirectory = null;
    public ?string $passiveConnectConfigurationId = null;
    public array $passport;
    public ?array $passwordProtection = null;
    public ?bool $paused = null;
    public ?array $permissions = null;
    public ?string $previewDeploymentSuffix = null;
    public ?bool $previewDeploymentsDisabled = null;
    public ?bool $productionDeploymentsFastLane = null;
    public ?bool $protectedSourcemaps = null;
    public ?array $protectionBypass = null;
    public ?array $protectionConfig = null;
    public ?bool $publicSource = null;
    public array $resourceConfig;
    public array $rollbackDescription;
    public array $rollingRelease;
    public ?string $rootDirectory = null;
    public ?array $sandbox = null;
    public ?array $security = null;
    public ?string $serverlessFunctionRegion = null;
    public ?bool $serverlessFunctionZeroConfigFailover = null;
    public ?array $services = null;
    public ?array $skewProtectionAllowedDomains = null;
    public ?float $skewProtectionBoundaryAt = null;
    public ?float $skewProtectionMaxAge = null;
    public ?bool $skipGitConnectDuringLink = null;
    public ?bool $sourceFilesOutsideRootDirectory = null;
    public array $speedInsights;
    public array $ssoProtection;
    public array $staticIps;
    public ?array $targets = null;
    public ?string $tier = null;
    public ?array $tracing = null;
    public ?float $transferCompletedAt = null;
    public ?float $transferStartedAt = null;
    public ?string $transferToAccountId = null;
    public ?string $transferredFromAccountId = null;
    public mixed $trustedIps = null;
    public ?array $trustedSources = null;
    public ?float $updatedAt = null;
    public array $usageStatus;
    public ?bool $v0 = null;
    public ?bool $v0Created = null;
    public array $webAnalytics;
}

/** Request payload for Project#update. */
class ProjectUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $abuse = null;
    public ?string $accountId = null;
    public ?array $alias = null;
    public ?array $analytics = null;
    public ?bool $appliedCve55182Migration = null;
    public ?bool $autoAssignCustomDomains = null;
    public ?string $autoAssignCustomDomainsUpdatedBy = null;
    public ?bool $autoExposeSystemEnvs = null;
    public ?string $avatar = null;
    public ?array $blobs = null;
    public ?string $buildCommand = null;
    public ?string $commandForIgnoringBuildStep = null;
    public ?string $concurrencyBucketName = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public ?array $connectConfigurations = null;
    public ?float $createdAt = null;
    public mixed $creator = null;
    public ?array $crons = null;
    public ?array $customEnvironments = null;
    public ?bool $customerSupportCodeVisibility = null;
    public ?array $dataCache = null;
    public ?array $defaultResourceConfig = null;
    public ?array $deploymentExpiration = null;
    public ?array $deploymentPolicy = null;
    public ?string $devCommand = null;
    public ?bool $directoryListing = null;
    public ?array $dismissedToasts = null;
    public ?bool $enableAffectedProjectsDeployments = null;
    public ?bool $enableExternalRewriteCaching = null;
    public ?bool $enablePreviewFeedback = null;
    public ?bool $enableProductionFeedback = null;
    public ?array $env = null;
    public ?array $environmentVariables = null;
    public mixed $expiration = null;
    public ?array $features = null;
    public ?string $framework = null;
    public ?array $gitComments = null;
    public ?bool $gitForkProtection = null;
    public ?bool $gitLFS = null;
    public ?array $gitProviderOptions = null;
    public ?array $gitRepository = null;
    public ?bool $hasActiveBranches = null;
    public ?bool $hasDeployments = null;
    public ?string $installCommand = null;
    public ?array $integrations = null;
    public ?array $internalRoutes = null;
    public ?array $ipBuckets = null;
    public ?array $jobs = null;
    public ?array $lastAliasRequest = null;
    public ?array $lastRollbackTarget = null;
    public ?array $latestDeployments = null;
    public ?string $link = null;
    public ?bool $live = null;
    public mixed $microfrontends = null;
    public ?string $name = null;
    public ?string $nodeVersion = null;
    public ?array $oidcTokenConfig = null;
    public ?array $optionsAllowlist = null;
    public ?string $outputDirectory = null;
    public ?string $passiveConnectConfigurationId = null;
    public ?array $passport = null;
    public ?array $passwordProtection = null;
    public ?bool $paused = null;
    public ?array $permissions = null;
    public ?string $previewDeploymentSuffix = null;
    public ?bool $previewDeploymentsDisabled = null;
    public ?bool $productionDeploymentsFastLane = null;
    public ?bool $protectedSourcemaps = null;
    public ?array $protectionBypass = null;
    public ?array $protectionConfig = null;
    public ?bool $publicSource = null;
    public ?array $resourceConfig = null;
    public ?array $rollbackDescription = null;
    public ?array $rollingRelease = null;
    public ?string $rootDirectory = null;
    public ?array $sandbox = null;
    public ?array $security = null;
    public ?string $serverlessFunctionRegion = null;
    public ?bool $serverlessFunctionZeroConfigFailover = null;
    public ?array $services = null;
    public ?array $skewProtectionAllowedDomains = null;
    public ?float $skewProtectionBoundaryAt = null;
    public ?float $skewProtectionMaxAge = null;
    public ?bool $skipGitConnectDuringLink = null;
    public ?bool $sourceFilesOutsideRootDirectory = null;
    public ?array $speedInsights = null;
    public ?array $ssoProtection = null;
    public ?array $staticIps = null;
    public ?array $targets = null;
    public ?string $tier = null;
    public ?array $tracing = null;
    public ?float $transferCompletedAt = null;
    public ?float $transferStartedAt = null;
    public ?string $transferToAccountId = null;
    public ?string $transferredFromAccountId = null;
    public mixed $trustedIps = null;
    public ?array $trustedSources = null;
    public ?float $updatedAt = null;
    public ?array $usageStatus = null;
    public ?bool $v0 = null;
    public ?bool $v0Created = null;
    public ?array $webAnalytics = null;
}

/** Request payload for Project#remove. */
class ProjectRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

