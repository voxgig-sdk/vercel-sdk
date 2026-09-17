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

/** AccessGroup entity data model. */
class AccessGroup
{
    public string $accessGroupId;
    public string $createdAt;
    public ?array $entitlements = null;
    public ?string $id = null;
    public bool $isDsyncManaged;
    public float $membersCount;
    public ?array $membersToAdd = null;
    public ?array $membersToRemove = null;
    public string $name;
    public string $projectId;
    public ?array $projects = null;
    public float $projectsCount;
    public string $role;
    public string $teamId;
    public ?array $teamPermissions = null;
    public ?array $teamRoles = null;
    public string $updatedAt;
}

/** Request payload for AccessGroup#load. */
class AccessGroupLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for AccessGroup#list. */
class AccessGroupListMatch
{
    public string $id_or_name;
    public ?int $limit = null;
    public ?string $next = null;
    public ?string $search = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for AccessGroup#create. */
class AccessGroupCreateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public string $accessGroupId;
    public string $createdAt;
    public ?array $entitlements = null;
    public bool $isDsyncManaged;
    public float $membersCount;
    public ?array $membersToAdd = null;
    public ?array $membersToRemove = null;
    public string $name;
    public string $projectId;
    public ?array $projects = null;
    public float $projectsCount;
    public string $role;
    public string $teamId;
    public ?array $teamPermissions = null;
    public ?array $teamRoles = null;
    public string $updatedAt;
}

/** Request payload for AccessGroup#update. */
class AccessGroupUpdateData
{
    public string $access_group_id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $accessGroupId = null;
    public ?string $createdAt = null;
    public ?array $entitlements = null;
    public ?string $id = null;
    public ?bool $isDsyncManaged = null;
    public ?float $membersCount = null;
    public ?array $membersToAdd = null;
    public ?array $membersToRemove = null;
    public ?string $name = null;
    public ?string $projectId = null;
    public ?array $projects = null;
    public ?float $projectsCount = null;
    public ?string $role = null;
    public ?string $teamId = null;
    public ?array $teamPermissions = null;
    public ?array $teamRoles = null;
    public ?string $updatedAt = null;
}

/** Request payload for AccessGroup#remove. */
class AccessGroupRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** AiGateway entity data model. */
class AiGateway
{
}

/** Request payload for AiGateway#remove. */
class AiGatewayRemoveMatch
{
    public string $rule_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** AiGatewayRule entity data model. */
class AiGatewayRule
{
    public ?array $action = null;
    public float $createdAt;
    public ?string $createdBy = null;
    public ?bool $deleted = null;
    public ?string $description = null;
    public bool $enabled;
    public ?array $match = null;
    public string $ownerId;
    public string $ruleId;
    public string $type;
    public float $updatedAt;
    public ?string $updatedBy = null;
}

/** Request payload for AiGatewayRule#create. */
class AiGatewayRuleCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $action = null;
    public float $createdAt;
    public ?string $createdBy = null;
    public ?bool $deleted = null;
    public ?string $description = null;
    public bool $enabled;
    public ?array $match = null;
    public string $ownerId;
    public string $ruleId;
    public string $type;
    public float $updatedAt;
    public ?string $updatedBy = null;
}

/** Request payload for AiGatewayRule#update. */
class AiGatewayRuleUpdateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $action = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public ?bool $deleted = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?array $match = null;
    public ?string $ownerId = null;
    public ?string $ruleId = null;
    public ?string $type = null;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
}

/** AiGatewayRuleList entity data model. */
class AiGatewayRuleList
{
    public ?array $action = null;
    public float $createdAt;
    public ?string $createdBy = null;
    public ?bool $deleted = null;
    public ?string $description = null;
    public bool $enabled;
    public ?array $match = null;
    public string $ownerId;
    public string $ruleId;
    public string $type;
    public float $updatedAt;
    public ?string $updatedBy = null;
}

/** Request payload for AiGatewayRuleList#list. */
class AiGatewayRuleListListMatch
{
    public ?string $include_disabled = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** AiGatewayVirtualModelConfig entity data model. */
class AiGatewayVirtualModelConfig
{
    public ?bool $allowFallbackFromFast = null;
    public ?string $baseUrl = null;
    public ?array $byokCredentialIds = null;
    public ?string $caching = null;
    public float $createdAt;
    public ?string $createdBy = null;
    public bool $deleted;
    public ?string $description = null;
    public ?bool $disallowPromptTraining = null;
    public ?string $displayName = null;
    public ?array $has = null;
    public ?bool $hipaaCompliant = null;
    public ?string $id = null;
    public ?array $inferenceRegion = null;
    public ?string $instanceId = null;
    public string $kind;
    public ?string $modelSlug = null;
    public ?array $models = null;
    public ?array $observabilityTags = null;
    public string $ownerId;
    public ?array $providerOnly = null;
    public ?array $providerOptions = null;
    public ?array $providerOrder = null;
    public ?array $providerTimeouts = null;
    public ?array $requires = null;
    public ?string $selector = null;
    public ?string $serviceTier = null;
    public ?string $sort = null;
    public ?string $speed = null;
    public string $status;
    public float $updatedAt;
    public ?string $updatedBy = null;
    public string $virtualModelSlug;
    public ?string $visibility = null;
    public ?bool $zeroDataRetention = null;
}

/** Request payload for AiGatewayVirtualModelConfig#load. */
class AiGatewayVirtualModelConfigLoadMatch
{
    public string $id;
    public ?string $owner_id = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for AiGatewayVirtualModelConfig#create. */
class AiGatewayVirtualModelConfigCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $allowFallbackFromFast = null;
    public ?string $baseUrl = null;
    public ?array $byokCredentialIds = null;
    public ?string $caching = null;
    public float $createdAt;
    public ?string $createdBy = null;
    public bool $deleted;
    public ?string $description = null;
    public ?bool $disallowPromptTraining = null;
    public ?string $displayName = null;
    public ?array $has = null;
    public ?bool $hipaaCompliant = null;
    public ?string $id = null;
    public ?array $inferenceRegion = null;
    public ?string $instanceId = null;
    public string $kind;
    public ?string $modelSlug = null;
    public ?array $models = null;
    public ?array $observabilityTags = null;
    public string $ownerId;
    public ?array $providerOnly = null;
    public ?array $providerOptions = null;
    public ?array $providerOrder = null;
    public ?array $providerTimeouts = null;
    public ?array $requires = null;
    public ?string $selector = null;
    public ?string $serviceTier = null;
    public ?string $sort = null;
    public ?string $speed = null;
    public string $status;
    public float $updatedAt;
    public ?string $updatedBy = null;
    public string $virtualModelSlug;
    public ?string $visibility = null;
    public ?bool $zeroDataRetention = null;
}

/** Request payload for AiGatewayVirtualModelConfig#update. */
class AiGatewayVirtualModelConfigUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $allowFallbackFromFast = null;
    public ?string $baseUrl = null;
    public ?array $byokCredentialIds = null;
    public ?string $caching = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public ?bool $deleted = null;
    public ?string $description = null;
    public ?bool $disallowPromptTraining = null;
    public ?string $displayName = null;
    public ?array $has = null;
    public ?bool $hipaaCompliant = null;
    public ?array $inferenceRegion = null;
    public ?string $instanceId = null;
    public ?string $kind = null;
    public ?string $modelSlug = null;
    public ?array $models = null;
    public ?array $observabilityTags = null;
    public ?string $ownerId = null;
    public ?array $providerOnly = null;
    public ?array $providerOptions = null;
    public ?array $providerOrder = null;
    public ?array $providerTimeouts = null;
    public ?array $requires = null;
    public ?string $selector = null;
    public ?string $serviceTier = null;
    public ?string $sort = null;
    public ?string $speed = null;
    public ?string $status = null;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
    public ?string $virtualModelSlug = null;
    public ?string $visibility = null;
    public ?bool $zeroDataRetention = null;
}

/** AiGatewayVirtualModelConfigList entity data model. */
class AiGatewayVirtualModelConfigList
{
    public ?bool $allowFallbackFromFast = null;
    public ?string $baseUrl = null;
    public ?array $byokCredentialIds = null;
    public ?string $caching = null;
    public float $createdAt;
    public ?string $createdBy = null;
    public bool $deleted;
    public ?string $description = null;
    public ?bool $disallowPromptTraining = null;
    public ?string $displayName = null;
    public ?array $has = null;
    public ?bool $hipaaCompliant = null;
    public ?array $inferenceRegion = null;
    public ?string $instanceId = null;
    public string $kind;
    public ?string $modelSlug = null;
    public ?array $models = null;
    public ?array $observabilityTags = null;
    public string $ownerId;
    public ?array $providerOnly = null;
    public ?array $providerOptions = null;
    public ?array $providerOrder = null;
    public ?array $providerTimeouts = null;
    public ?array $requires = null;
    public ?string $selector = null;
    public ?string $serviceTier = null;
    public ?string $sort = null;
    public ?string $speed = null;
    public string $status;
    public float $updatedAt;
    public ?string $updatedBy = null;
    public string $virtualModelSlug;
    public ?string $visibility = null;
    public ?bool $zeroDataRetention = null;
}

/** Request payload for AiGatewayVirtualModelConfigList#list. */
class AiGatewayVirtualModelConfigListListMatch
{
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?string $owner_id = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Alias entity data model. */
class Alias
{
    public string $alias;
    public string $created;
    public ?float $createdAt = null;
    public array $creator;
    public ?float $deletedAt = null;
    public array $deployment;
    public string $deploymentId;
    public ?string $id = null;
    public array $microfrontends;
    public ?string $oldDeploymentId = null;
    public string $projectId;
    public ?array $protectionBypass = null;
    public ?string $redirect = null;
    public ?float $redirectStatusCode = null;
    public string $uid;
    public ?float $updatedAt = null;
}

/** Request payload for Alias#load. */
class AliasLoadMatch
{
    public string $id;
    public ?float $from = null;
    public ?string $project_id = null;
    public ?float $since = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?float $until = null;
}

/** Request payload for Alias#list. */
class AliasListMatch
{
    public mixed $domain = null;
    public ?float $from = null;
    public ?float $limit = null;
    public ?string $project_id = null;
    public ?string $rollback_deployment_id = null;
    public ?float $since = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?float $until = null;
}

/** Request payload for Alias#create. */
class AliasCreateData
{
    public string $deployment_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public string $alias;
    public string $created;
    public ?float $createdAt = null;
    public array $creator;
    public ?float $deletedAt = null;
    public array $deployment;
    public string $deploymentId;
    public ?string $id = null;
    public array $microfrontends;
    public ?string $oldDeploymentId = null;
    public string $projectId;
    public ?array $protectionBypass = null;
    public ?string $redirect = null;
    public ?float $redirectStatusCode = null;
    public string $uid;
    public ?float $updatedAt = null;
}

/** Request payload for Alias#update. */
class AliasUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $alias = null;
    public ?string $created = null;
    public ?float $createdAt = null;
    public ?array $creator = null;
    public ?float $deletedAt = null;
    public ?array $deployment = null;
    public ?string $deploymentId = null;
    public ?array $microfrontends = null;
    public ?string $oldDeploymentId = null;
    public ?string $projectId = null;
    public ?array $protectionBypass = null;
    public ?string $redirect = null;
    public ?float $redirectStatusCode = null;
    public ?string $uid = null;
    public ?float $updatedAt = null;
}

/** Request payload for Alias#remove. */
class AliasRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** ApiAiGateway entity data model. */
class ApiAiGateway
{
}

/** Request payload for ApiAiGateway#load. */
class ApiAiGatewayLoadMatch
{
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?string $owner_id = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $virtual_model_slug = null;
}

/** Request payload for ApiAiGateway#remove. */
class ApiAiGatewayRemoveMatch
{
    public string $vmc_slug;
    public ?string $acting_ip = null;
    public ?string $acting_user_agent = null;
    public ?string $owner_id = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $updated_by = null;
}

/** ApiKey entity data model. */
class ApiKey
{
    public float $activeAt;
    public array $aiGatewayQuota;
    public float $createdAt;
    public string $createdBy;
    public string $createdByAppId;
    public float $expiresAt;
    public string $id;
    public float $leakedAt;
    public string $leakedUrl;
    public ?array $metadata = null;
    public string $name;
    public string $partialKey;
    public string $projectId;
    public string $purpose;
    public array $quota;
    public string $teamId;
}

/** Request payload for ApiKey#create. */
class ApiKeyCreateData
{
    public float $activeAt;
    public array $aiGatewayQuota;
    public float $createdAt;
    public string $createdBy;
    public string $createdByAppId;
    public float $expiresAt;
    public string $id;
    public float $leakedAt;
    public string $leakedUrl;
    public ?array $metadata = null;
    public string $name;
    public string $partialKey;
    public string $projectId;
    public string $purpose;
    public array $quota;
    public string $teamId;
}

/** Artifact entity data model. */
class Artifact
{
    public array $hashes;
    public ?string $id = null;
}

/** Request payload for Artifact#load. */
class ArtifactLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Artifact#create. */
class ArtifactCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public array $hashes;
    public ?string $id = null;
}

/** Request payload for Artifact#update. */
class ArtifactUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $hashes = null;
}

/** Request payload for Artifact#remove. */
class ArtifactRemoveMatch
{
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Authentication entity data model. */
class Authentication
{
    public float $activeAt;
    public float $createdAt;
    public ?float $expiresAt = null;
    public string $id;
    public ?float $leakedAt = null;
    public ?string $leakedUrl = null;
    public string $name;
    public ?string $origin = null;
    public ?string $prefix = null;
    public ?string $projectId = null;
    public ?float $revokedAt = null;
    public ?array $scopes = null;
    public ?string $suffix = null;
    public string $type;
}

/** Request payload for Authentication#load. */
class AuthenticationLoadMatch
{
    public string $token_id;
}

/** Request payload for Authentication#create. */
class AuthenticationCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public float $activeAt;
    public float $createdAt;
    public ?float $expiresAt = null;
    public string $id;
    public ?float $leakedAt = null;
    public ?string $leakedUrl = null;
    public string $name;
    public ?string $origin = null;
    public ?string $prefix = null;
    public ?string $projectId = null;
    public ?float $revokedAt = null;
    public ?array $scopes = null;
    public ?string $suffix = null;
    public string $type;
}

/** Request payload for Authentication#remove. */
class AuthenticationRemoveMatch
{
    public string $token_id;
}

/** Billing entity data model. */
class Billing
{
}

/** Request payload for Billing#load. */
class BillingLoadMatch
{
    public string $from;
    public ?string $slug = null;
    public ?string $team_id = null;
    public string $to;
}

/** Request payload for Billing#create. */
class BillingCreateData
{
    public ?string $slug = null;
    public ?string $source = null;
    public ?string $team_id = null;
}

/** BulkRedirect entity data model. */
class BulkRedirect
{
    public ?string $alias = null;
    public string $createdBy;
    public string $id;
    public ?bool $isLive = null;
    public ?bool $isStaging = null;
    public string $key;
    public float $lastModified;
    public ?string $name = null;
    public ?bool $overwrite = null;
    public string $projectId;
    public array $redirect;
    public ?float $redirectCount = null;
    public ?array $redirects = null;
    public ?bool $restore = null;
    public string $teamId;
}

/** Request payload for BulkRedirect#load. */
class BulkRedirectLoadMatch
{
    public mixed $diff = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public string $project_id;
    public ?string $q = null;
    public ?string $slug = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $team_id = null;
    public ?string $version_id = null;
}

/** Request payload for BulkRedirect#list. */
class BulkRedirectListMatch
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for BulkRedirect#create. */
class BulkRedirectCreateData
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $alias = null;
    public string $createdBy;
    public string $id;
    public ?bool $isLive = null;
    public ?bool $isStaging = null;
    public string $key;
    public float $lastModified;
    public ?string $name = null;
    public ?bool $overwrite = null;
    public string $projectId;
    public array $redirect;
    public ?float $redirectCount = null;
    public ?array $redirects = null;
    public ?bool $restore = null;
    public string $teamId;
}

/** Request payload for BulkRedirect#update. */
class BulkRedirectUpdateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $alias = null;
    public ?string $createdBy = null;
    public ?string $id = null;
    public ?bool $isLive = null;
    public ?bool $isStaging = null;
    public ?string $key = null;
    public ?float $lastModified = null;
    public ?string $name = null;
    public ?bool $overwrite = null;
    public ?string $projectId = null;
    public ?array $redirect = null;
    public ?float $redirectCount = null;
    public ?array $redirects = null;
    public ?bool $restore = null;
    public ?string $teamId = null;
}

/** Request payload for BulkRedirect#remove. */
class BulkRedirectRemoveMatch
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Cert entity data model. */
class Cert
{
    public bool $autoRenew;
    public string $ca;
    public string $cert;
    public array $cns;
    public float $createdAt;
    public float $expiresAt;
    public string $id;
    public string $key;
    public ?bool $skipValidation = null;
}

/** Request payload for Cert#load. */
class CertLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Cert#list. */
class CertListMatch
{
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Cert#create. */
class CertCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public bool $autoRenew;
    public string $ca;
    public string $cert;
    public array $cns;
    public float $createdAt;
    public float $expiresAt;
    public string $id;
    public string $key;
    public ?bool $skipValidation = null;
}

/** Request payload for Cert#update. */
class CertUpdateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $autoRenew = null;
    public ?string $ca = null;
    public ?string $cert = null;
    public ?array $cns = null;
    public ?float $createdAt = null;
    public ?float $expiresAt = null;
    public ?string $id = null;
    public ?string $key = null;
    public ?bool $skipValidation = null;
}

/** Request payload for Cert#remove. */
class CertRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Check entity data model. */
class Check
{
    public bool $blocking;
    public string $blocks;
    public ?float $completedAt = null;
    public mixed $conclusion = null;
    public float $createdAt;
    public ?float $deletedAt = null;
    public ?string $detailsUrl = null;
    public ?string $externalId = null;
    public string $id;
    public string $integrationId;
    public bool $isRerequestable;
    public array $metrics;
    public string $name;
    public ?array $output = null;
    public string $ownerId;
    public ?string $path = null;
    public string $projectId;
    public string $requires;
    public ?bool $rerequestable = null;
    public mixed $source;
    public ?string $sourceIntegrationConfigurationId = null;
    public string $sourceKind;
    public ?float $startedAt = null;
    public mixed $status = null;
    public array $targets;
    public float $timeout;
    public float $updatedAt;
}

/** Request payload for Check#load. */
class CheckLoadMatch
{
    public ?string $deployment_id = null;
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $project_id = null;
}

/** Request payload for Check#list. */
class CheckListMatch
{
    public string $project_id_or_name;
    public ?string $block = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Check#create. */
class CheckCreateData
{
    public string $deployment_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public bool $blocking;
    public string $blocks;
    public ?float $completedAt = null;
    public mixed $conclusion = null;
    public float $createdAt;
    public ?float $deletedAt = null;
    public ?string $detailsUrl = null;
    public ?string $externalId = null;
    public string $id;
    public string $integrationId;
    public bool $isRerequestable;
    public array $metrics;
    public string $name;
    public ?array $output = null;
    public string $ownerId;
    public ?string $path = null;
    public string $projectId;
    public string $requires;
    public ?bool $rerequestable = null;
    public mixed $source;
    public ?string $sourceIntegrationConfigurationId = null;
    public string $sourceKind;
    public ?float $startedAt = null;
    public mixed $status = null;
    public array $targets;
    public float $timeout;
    public float $updatedAt;
}

/** Request payload for Check#update. */
class CheckUpdateData
{
    public ?string $deployment_id = null;
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $project_id = null;
    public ?bool $blocking = null;
    public ?string $blocks = null;
    public ?float $completedAt = null;
    public mixed $conclusion = null;
    public ?float $createdAt = null;
    public ?float $deletedAt = null;
    public ?string $detailsUrl = null;
    public ?string $externalId = null;
    public ?string $integrationId = null;
    public ?bool $isRerequestable = null;
    public ?array $metrics = null;
    public ?string $name = null;
    public ?array $output = null;
    public ?string $ownerId = null;
    public ?string $path = null;
    public ?string $projectId = null;
    public ?string $requires = null;
    public ?bool $rerequestable = null;
    public mixed $source = null;
    public ?string $sourceIntegrationConfigurationId = null;
    public ?string $sourceKind = null;
    public ?float $startedAt = null;
    public mixed $status = null;
    public ?array $targets = null;
    public ?float $timeout = null;
    public ?float $updatedAt = null;
}

/** Request payload for Check#remove. */
class CheckRemoveMatch
{
    public string $id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** ChecksV2 entity data model. */
class ChecksV2
{
    public string $checkId;
    public ?float $completedAt = null;
    public ?string $conclusion = null;
    public ?string $conclusionText = null;
    public ?string $externalId = null;
    public ?string $externalUrl = null;
    public ?array $output = null;
    public array $runs;
    public ?string $status = null;
}

/** Request payload for ChecksV2#load. */
class ChecksV2LoadMatch
{
    public string $check_run_id;
    public string $deployment_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for ChecksV2#list. */
class ChecksV2ListMatch
{
    public string $deployment_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for ChecksV2#create. */
class ChecksV2CreateData
{
    public string $deployment_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public string $checkId;
    public ?float $completedAt = null;
    public ?string $conclusion = null;
    public ?string $conclusionText = null;
    public ?string $externalId = null;
    public ?string $externalUrl = null;
    public ?array $output = null;
    public array $runs;
    public ?string $status = null;
}

/** Request payload for ChecksV2#update. */
class ChecksV2UpdateData
{
    public string $check_run_id;
    public string $deployment_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $checkId = null;
    public ?float $completedAt = null;
    public ?string $conclusion = null;
    public ?string $conclusionText = null;
    public ?string $externalId = null;
    public ?string $externalUrl = null;
    public ?array $output = null;
    public ?array $runs = null;
    public ?string $status = null;
}

/** Connect entity data model. */
class Connect
{
    public ?array $additionalParams = null;
    public ?array $audience = null;
    public ?array $authorizationDetails = null;
    public ?string $authorizationId = null;
    public ?array $claims = null;
    public array $connector;
    public ?bool $deviceCode = null;
    public string $displayName;
    public float $expiresAt;
    public ?float $expiresInMs = null;
    public ?string $externalSubject = null;
    public string $id;
    public ?string $installationId = null;
    public ?array $metadata = null;
    public string $name;
    public ?string $prompt = null;
    public ?array $resources = null;
    public ?string $returnUrl = null;
    public ?array $scopes = null;
    public ?string $service = null;
    public ?string $serviceName = null;
    public mixed $subject = null;
    public ?string $tenantId = null;
    public string $token;
    public ?string $tokenGroupId = null;
    public string $tokenId;
    public string $type;
    public string $uid;
    public ?float $validityBufferMs = null;
    public ?string $webhook = null;
}

/** Request payload for Connect#create. */
class ConnectCreateData
{
    public string $connector;
    public ?array $additionalParams = null;
    public ?array $audience = null;
    public ?array $authorizationDetails = null;
    public ?string $authorizationId = null;
    public ?array $claims = null;
    public ?bool $deviceCode = null;
    public string $displayName;
    public float $expiresAt;
    public ?float $expiresInMs = null;
    public ?string $externalSubject = null;
    public string $id;
    public ?string $installationId = null;
    public ?array $metadata = null;
    public string $name;
    public ?string $prompt = null;
    public ?array $resources = null;
    public ?string $returnUrl = null;
    public ?array $scopes = null;
    public ?string $service = null;
    public ?string $serviceName = null;
    public mixed $subject = null;
    public ?string $tenantId = null;
    public string $token;
    public ?string $tokenGroupId = null;
    public string $tokenId;
    public string $type;
    public string $uid;
    public ?float $validityBufferMs = null;
    public ?string $webhook = null;
}

/** Request payload for Connect#remove. */
class ConnectRemoveMatch
{
    public string $connector;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** ConnectConnector entity data model. */
class ConnectConnector
{
    public ?string $accentColor = null;
    public array $appTokens;
    public ?string $backgroundColor = null;
    public ?string $clientUrl = null;
    public ?string $connectionMethod = null;
    public array $connector;
    public float $createdAt;
    public mixed $createdBy = null;
    public ?string $creationMode = null;
    public mixed $data;
    public ?string $defaultInstallationId = null;
    public array $destinations;
    public ?string $devsite = null;
    public string $displayName;
    public ?string $docsite = null;
    public ?array $environments = null;
    public ?array $events = null;
    public ?string $icon = null;
    public string $id;
    public ?bool $knownStale = null;
    public ?array $managed = null;
    public string $name;
    public ?array $params = null;
    public ?string $projectId = null;
    public array $reconsentNeeded;
    public ?string $redirectUri = null;
    public ?float $reinstallAt = null;
    public ?bool $reinstallNeeded = null;
    public string $service;
    public array $serviceSync;
    public array $supportedSubjectTypes;
    public mixed $supportsIcon;
    public bool $supportsInstallation;
    public bool $supportsRevocation;
    public bool $supportsTriggers;
    public ?string $target = null;
    public mixed $triggerDestination = null;
    public ?array $triggerDestinations = null;
    public array $triggers;
    public string $type;
    public ?string $typeIcon = null;
    public string $typeName;
    public string $uid;
    public float $updatedAt;
    public mixed $updatedBy = null;
    public array $userTokens;
    public ?string $website = null;
}

/** Request payload for ConnectConnector#load. */
class ConnectConnectorLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for ConnectConnector#create. */
class ConnectConnectorCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $accentColor = null;
    public array $appTokens;
    public ?string $backgroundColor = null;
    public ?string $clientUrl = null;
    public ?string $connectionMethod = null;
    public array $connector;
    public float $createdAt;
    public mixed $createdBy = null;
    public ?string $creationMode = null;
    public mixed $data;
    public ?string $defaultInstallationId = null;
    public array $destinations;
    public ?string $devsite = null;
    public string $displayName;
    public ?string $docsite = null;
    public ?array $environments = null;
    public ?array $events = null;
    public ?string $icon = null;
    public string $id;
    public ?bool $knownStale = null;
    public ?array $managed = null;
    public string $name;
    public ?array $params = null;
    public ?string $projectId = null;
    public array $reconsentNeeded;
    public ?string $redirectUri = null;
    public ?float $reinstallAt = null;
    public ?bool $reinstallNeeded = null;
    public string $service;
    public array $serviceSync;
    public array $supportedSubjectTypes;
    public mixed $supportsIcon;
    public bool $supportsInstallation;
    public bool $supportsRevocation;
    public bool $supportsTriggers;
    public ?string $target = null;
    public mixed $triggerDestination = null;
    public ?array $triggerDestinations = null;
    public array $triggers;
    public string $type;
    public ?string $typeIcon = null;
    public string $typeName;
    public string $uid;
    public float $updatedAt;
    public mixed $updatedBy = null;
    public array $userTokens;
    public ?string $website = null;
}

/** Request payload for ConnectConnector#update. */
class ConnectConnectorUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $accentColor = null;
    public ?array $appTokens = null;
    public ?string $backgroundColor = null;
    public ?string $clientUrl = null;
    public ?string $connectionMethod = null;
    public ?array $connector = null;
    public ?float $createdAt = null;
    public mixed $createdBy = null;
    public ?string $creationMode = null;
    public mixed $data = null;
    public ?string $defaultInstallationId = null;
    public ?array $destinations = null;
    public ?string $devsite = null;
    public ?string $displayName = null;
    public ?string $docsite = null;
    public ?array $environments = null;
    public ?array $events = null;
    public ?string $icon = null;
    public ?bool $knownStale = null;
    public ?array $managed = null;
    public ?string $name = null;
    public ?array $params = null;
    public ?string $projectId = null;
    public ?array $reconsentNeeded = null;
    public ?string $redirectUri = null;
    public ?float $reinstallAt = null;
    public ?bool $reinstallNeeded = null;
    public ?string $service = null;
    public ?array $serviceSync = null;
    public ?array $supportedSubjectTypes = null;
    public mixed $supportsIcon = null;
    public ?bool $supportsInstallation = null;
    public ?bool $supportsRevocation = null;
    public ?bool $supportsTriggers = null;
    public ?string $target = null;
    public mixed $triggerDestination = null;
    public ?array $triggerDestinations = null;
    public ?array $triggers = null;
    public ?string $type = null;
    public ?string $typeIcon = null;
    public ?string $typeName = null;
    public ?string $uid = null;
    public ?float $updatedAt = null;
    public mixed $updatedBy = null;
    public ?array $userTokens = null;
    public ?string $website = null;
}

/** ConnectConnectorList entity data model. */
class ConnectConnectorList
{
    public ?string $accentColor = null;
    public array $appTokens;
    public ?string $backgroundColor = null;
    public ?string $clientUrl = null;
    public ?string $connectionMethod = null;
    public float $createdAt;
    public mixed $createdBy = null;
    public ?string $creationMode = null;
    public ?string $defaultInstallationId = null;
    public ?string $devsite = null;
    public string $displayName;
    public ?string $docsite = null;
    public ?array $events = null;
    public ?string $icon = null;
    public string $id;
    public ?bool $knownStale = null;
    public ?array $managed = null;
    public string $name;
    public ?string $redirectUri = null;
    public ?float $reinstallAt = null;
    public string $service;
    public array $supportedSubjectTypes;
    public mixed $supportsIcon;
    public bool $supportsInstallation;
    public bool $supportsRevocation;
    public bool $supportsTriggers;
    public ?string $target = null;
    public ?array $triggerDestinations = null;
    public array $triggers;
    public string $type;
    public ?string $typeIcon = null;
    public string $typeName;
    public string $uid;
    public float $updatedAt;
    public mixed $updatedBy = null;
    public array $userTokens;
    public ?string $website = null;
}

/** Request payload for ConnectConnectorList#list. */
class ConnectConnectorListListMatch
{
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?string $project_id = null;
    public ?string $search = null;
    public ?string $service = null;
    public ?string $slug = null;
    public ?string $sort = null;
    public ?string $team_id = null;
    public ?string $type = null;
}

/** ConnectConnectorProjectConnectionList entity data model. */
class ConnectConnectorProjectConnectionList
{
    public string $connectorId;
    public float $createdAt;
    public array $enabledEnvironments;
    public array $project;
    public float $updatedAt;
}

/** Request payload for ConnectConnectorProjectConnectionList#list. */
class ConnectConnectorProjectConnectionListListMatch
{
    public string $connector_id;
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** ConnectProjectConnection entity data model. */
class ConnectProjectConnection
{
    public string $connectorId;
    public float $createdAt;
    public array $enabledEnvironments;
    public array $environments;
    public array $project;
    public float $updatedAt;
}

/** Request payload for ConnectProjectConnection#load. */
class ConnectProjectConnectionLoadMatch
{
    public string $connector_id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for ConnectProjectConnection#create. */
class ConnectProjectConnectionCreateData
{
    public string $connector_id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public string $connectorId;
    public float $createdAt;
    public array $enabledEnvironments;
    public array $environments;
    public array $project;
    public float $updatedAt;
}

/** ConnectProjectConnectorConnectionList entity data model. */
class ConnectProjectConnectorConnectionList
{
    public string $connectorId;
    public float $createdAt;
    public array $enabledEnvironments;
    public array $project;
    public float $updatedAt;
}

/** Request payload for ConnectProjectConnectorConnectionList#list. */
class ConnectProjectConnectorConnectionListListMatch
{
    public string $project_id;
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Deployment entity data model. */
class Deployment
{
    public mixed $aliasAssigned = null;
    public array $aliasError;
    public ?array $attribution = null;
    public ?string $buildMachine = null;
    public ?float $buildingAt = null;
    public array $checks;
    public ?string $checksConclusion = null;
    public ?string $checksState = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public float $created;
    public float $createdAt;
    public array $creator;
    public array $customEnvironment;
    public ?string $customEnvironmentSlugOrId = null;
    public ?string $defaultRoute = null;
    public ?float $deleted = null;
    public ?string $deploymentId = null;
    public ?string $errorCode = null;
    public ?string $errorMessage = null;
    public ?float $expiration = null;
    public ?array $files = null;
    public ?string $gitAccessToken = null;
    public ?array $gitMetadata = null;
    public mixed $gitSource = null;
    public ?string $id = null;
    public string $inspectorUrl;
    public ?bool $isRollbackCandidate = null;
    public array $manualProvisioning;
    public ?array $meta = null;
    public ?string $monorepoManager = null;
    public string $name;
    public ?string $oomReport = null;
    public ?array $outcomes = null;
    public ?string $passiveConnectConfigurationId = null;
    public array $platform;
    public ?bool $prebuilt = null;
    public ?string $project = null;
    public string $projectId;
    public ?array $projectSettings = null;
    public ?float $proposedExpiration = null;
    public ?float $ready = null;
    public string $readyState;
    public ?string $readySubstate = null;
    public array $seatBlock;
    public ?bool $softDeletedByRetention = null;
    public ?string $source = null;
    public ?string $state = null;
    public ?string $status = null;
    public ?string $statusText = null;
    public ?string $statusUrl = null;
    public ?string $target = null;
    public string $type;
    public string $uid;
    public ?float $undeleted = null;
    public string $url;
    public ?bool $withLatestCommit = null;
}

/** Request payload for Deployment#load. */
class DeploymentLoadMatch
{
    public ?string $file_id = null;
    public string $id;
    public ?string $path = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $with_git_repo_info = null;
}

/** Request payload for Deployment#list. */
class DeploymentListMatch
{
    public ?string $app = null;
    public ?string $branch = null;
    public ?float $from = null;
    public ?float $limit = null;
    public ?string $project_id = null;
    public ?bool $rollback_candidate = null;
    public ?string $sha = null;
    public ?float $since = null;
    public ?string $slug = null;
    public ?string $state = null;
    public ?string $target = null;
    public ?string $team_id = null;
    public ?float $to = null;
    public ?float $until = null;
    public ?string $user = null;
}

/** Request payload for Deployment#create. */
class DeploymentCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public mixed $aliasAssigned = null;
    public array $aliasError;
    public ?array $attribution = null;
    public ?string $buildMachine = null;
    public ?float $buildingAt = null;
    public array $checks;
    public ?string $checksConclusion = null;
    public ?string $checksState = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public float $created;
    public float $createdAt;
    public array $creator;
    public array $customEnvironment;
    public ?string $customEnvironmentSlugOrId = null;
    public ?string $defaultRoute = null;
    public ?float $deleted = null;
    public ?string $deploymentId = null;
    public ?string $errorCode = null;
    public ?string $errorMessage = null;
    public ?float $expiration = null;
    public ?array $files = null;
    public ?string $gitAccessToken = null;
    public ?array $gitMetadata = null;
    public mixed $gitSource = null;
    public ?string $id = null;
    public string $inspectorUrl;
    public ?bool $isRollbackCandidate = null;
    public array $manualProvisioning;
    public ?array $meta = null;
    public ?string $monorepoManager = null;
    public string $name;
    public ?string $oomReport = null;
    public ?array $outcomes = null;
    public ?string $passiveConnectConfigurationId = null;
    public array $platform;
    public ?bool $prebuilt = null;
    public ?string $project = null;
    public string $projectId;
    public ?array $projectSettings = null;
    public ?float $proposedExpiration = null;
    public ?float $ready = null;
    public string $readyState;
    public ?string $readySubstate = null;
    public array $seatBlock;
    public ?bool $softDeletedByRetention = null;
    public ?string $source = null;
    public ?string $state = null;
    public ?string $status = null;
    public ?string $statusText = null;
    public ?string $statusUrl = null;
    public ?string $target = null;
    public string $type;
    public string $uid;
    public ?float $undeleted = null;
    public string $url;
    public ?bool $withLatestCommit = null;
}

/** Request payload for Deployment#update. */
class DeploymentUpdateData
{
    public string $action;
    public string $id;
    public string $integration_id;
    public string $resource_id;
    public mixed $aliasAssigned = null;
    public ?array $aliasError = null;
    public ?array $attribution = null;
    public ?string $buildMachine = null;
    public ?float $buildingAt = null;
    public ?array $checks = null;
    public ?string $checksConclusion = null;
    public ?string $checksState = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public ?float $created = null;
    public ?float $createdAt = null;
    public ?array $creator = null;
    public ?array $customEnvironment = null;
    public ?string $customEnvironmentSlugOrId = null;
    public ?string $defaultRoute = null;
    public ?float $deleted = null;
    public ?string $deploymentId = null;
    public ?string $errorCode = null;
    public ?string $errorMessage = null;
    public ?float $expiration = null;
    public ?array $files = null;
    public ?string $gitAccessToken = null;
    public ?array $gitMetadata = null;
    public mixed $gitSource = null;
    public ?string $inspectorUrl = null;
    public ?bool $isRollbackCandidate = null;
    public ?array $manualProvisioning = null;
    public ?array $meta = null;
    public ?string $monorepoManager = null;
    public ?string $name = null;
    public ?string $oomReport = null;
    public ?array $outcomes = null;
    public ?string $passiveConnectConfigurationId = null;
    public ?array $platform = null;
    public ?bool $prebuilt = null;
    public ?string $project = null;
    public ?string $projectId = null;
    public ?array $projectSettings = null;
    public ?float $proposedExpiration = null;
    public ?float $ready = null;
    public ?string $readyState = null;
    public ?string $readySubstate = null;
    public ?array $seatBlock = null;
    public ?bool $softDeletedByRetention = null;
    public ?string $source = null;
    public ?string $state = null;
    public ?string $status = null;
    public ?string $statusText = null;
    public ?string $statusUrl = null;
    public ?string $target = null;
    public ?string $type = null;
    public ?string $uid = null;
    public ?float $undeleted = null;
    public ?string $url = null;
    public ?bool $withLatestCommit = null;
}

/** Request payload for Deployment#remove. */
class DeploymentRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $url = null;
}

/** Dns entity data model. */
class Dns
{
    public ?string $comment = null;
    public ?float $createdAt = null;
    public string $creator;
    public string $domain;
    public array $https;
    public string $id;
    public ?int $mxPriority = null;
    public string $name;
    public string $recordType;
    public array $srv;
    public ?float $ttl = null;
    public string $type;
    public string $value;
}

/** Request payload for Dns#load. */
class DnsLoadMatch
{
    public string $domain_id;
    public ?string $limit = null;
    public ?string $since = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $until = null;
}

/** Request payload for Dns#create. */
class DnsCreateData
{
    public string $domain_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $comment = null;
    public ?float $createdAt = null;
    public string $creator;
    public string $domain;
    public array $https;
    public string $id;
    public ?int $mxPriority = null;
    public string $name;
    public string $recordType;
    public array $srv;
    public ?float $ttl = null;
    public string $type;
    public string $value;
}

/** Request payload for Dns#update. */
class DnsUpdateData
{
    public string $record_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $comment = null;
    public ?float $createdAt = null;
    public ?string $creator = null;
    public ?string $domain = null;
    public ?array $https = null;
    public ?string $id = null;
    public ?int $mxPriority = null;
    public ?string $name = null;
    public ?string $recordType = null;
    public ?array $srv = null;
    public ?float $ttl = null;
    public ?string $type = null;
    public ?string $value = null;
}

/** Request payload for Dns#remove. */
class DnsRemoveMatch
{
    public string $domain_id;
    public string $record_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Domain entity data model. */
class Domain
{
    public float $boughtAt;
    public float $createdAt;
    public array $creator;
    public ?array $customNameservers = null;
    public string $echMode;
    public float $expiresAt;
    public string $id;
    public array $intendedNameservers;
    public ?string $method = null;
    public string $name;
    public array $nameservers;
    public ?bool $renew = null;
    public string $serviceType;
    public bool $suffix;
    public string $teamId;
    public ?float $transferStartedAt = null;
    public ?float $transferredAt = null;
    public string $userId;
    public bool $verified;
}

/** Request payload for Domain#load. */
class DomainLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Domain#list. */
class DomainListMatch
{
    public ?float $limit = null;
    public ?float $since = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?float $until = null;
}

/** Request payload for Domain#create. */
class DomainCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public float $boughtAt;
    public float $createdAt;
    public array $creator;
    public ?array $customNameservers = null;
    public string $echMode;
    public float $expiresAt;
    public string $id;
    public array $intendedNameservers;
    public ?string $method = null;
    public string $name;
    public array $nameservers;
    public ?bool $renew = null;
    public string $serviceType;
    public bool $suffix;
    public string $teamId;
    public ?float $transferStartedAt = null;
    public ?float $transferredAt = null;
    public string $userId;
    public bool $verified;
}

/** Request payload for Domain#update. */
class DomainUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?float $boughtAt = null;
    public ?float $createdAt = null;
    public ?array $creator = null;
    public ?array $customNameservers = null;
    public ?string $echMode = null;
    public ?float $expiresAt = null;
    public ?array $intendedNameservers = null;
    public ?string $method = null;
    public ?string $name = null;
    public ?array $nameservers = null;
    public ?bool $renew = null;
    public ?string $serviceType = null;
    public ?bool $suffix = null;
    public ?string $teamId = null;
    public ?float $transferStartedAt = null;
    public ?float $transferredAt = null;
    public ?string $userId = null;
    public ?bool $verified = null;
}

/** Request payload for Domain#remove. */
class DomainRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** DomainsRegistrar entity data model. */
class DomainsRegistrar
{
    public string $authCode;
    public bool $autoRenew;
    public bool $available;
    public array $contactInformation;
    public array $domains;
    public mixed $error = null;
    public float $expectedPrice;
    public ?string $languageCode = null;
    public array $nameservers;
    public string $orderId;
    public mixed $purchasePrice;
    public mixed $renewalPrice;
    public array $results;
    public string $status;
    public mixed $transferPrice;
    public float $years;
}

/** Request payload for DomainsRegistrar#load. */
class DomainsRegistrarLoadMatch
{
    public string $order_id;
    public ?string $team_id = null;
}

/** Request payload for DomainsRegistrar#create. */
class DomainsRegistrarCreateData
{
    public ?string $team_id = null;
    public string $authCode;
    public bool $autoRenew;
    public bool $available;
    public array $contactInformation;
    public array $domains;
    public mixed $error = null;
    public float $expectedPrice;
    public ?string $languageCode = null;
    public array $nameservers;
    public string $orderId;
    public mixed $purchasePrice;
    public mixed $renewalPrice;
    public array $results;
    public string $status;
    public mixed $transferPrice;
    public float $years;
}

/** Request payload for DomainsRegistrar#update. */
class DomainsRegistrarUpdateData
{
    public string $domain_id;
    public ?string $team_id = null;
    public ?string $authCode = null;
    public ?bool $autoRenew = null;
    public ?bool $available = null;
    public ?array $contactInformation = null;
    public ?array $domains = null;
    public mixed $error = null;
    public ?float $expectedPrice = null;
    public ?string $languageCode = null;
    public ?array $nameservers = null;
    public ?string $orderId = null;
    public mixed $purchasePrice = null;
    public mixed $renewalPrice = null;
    public ?array $results = null;
    public ?string $status = null;
    public mixed $transferPrice = null;
    public ?float $years = null;
}

/** Drain entity data model. */
class Drain
{
    public ?array $delivery = null;
    public mixed $drains;
    public array $filter;
    public ?string $id = null;
    public string $name;
    public ?array $projectIds = null;
    public string $projects;
    public ?array $sampling = null;
    public array $schemas;
    public ?array $source = null;
    public ?string $status = null;
    public ?array $transforms = null;
}

/** Request payload for Drain#load. */
class DrainLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Drain#create. */
class DrainCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $delivery = null;
    public mixed $drains;
    public array $filter;
    public ?string $id = null;
    public string $name;
    public ?array $projectIds = null;
    public string $projects;
    public ?array $sampling = null;
    public array $schemas;
    public ?array $source = null;
    public ?string $status = null;
    public ?array $transforms = null;
}

/** Request payload for Drain#update. */
class DrainUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $delivery = null;
    public mixed $drains = null;
    public ?array $filter = null;
    public ?string $name = null;
    public ?array $projectIds = null;
    public ?string $projects = null;
    public ?array $sampling = null;
    public ?array $schemas = null;
    public ?array $source = null;
    public ?string $status = null;
    public ?array $transforms = null;
}

/** Request payload for Drain#remove. */
class DrainRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** EdgeCache entity data model. */
class EdgeCache
{
}

/** Request payload for EdgeCache#create. */
class EdgeCacheCreateData
{
    public string $project_id_or_name;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Env entity data model. */
class Env
{
    public ?bool $applyToAllCustomEnvironments = null;
    public ?string $comment = null;
    public ?string $created = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public ?array $customEnvironmentIds = null;
    public ?bool $decrypted = null;
    public ?float $deletedAt = null;
    public ?string $deletedBy = null;
    public array $evs;
    public array $failed;
    public ?string $id = null;
    public ?string $key = null;
    public ?string $lastEditedByDisplayName = null;
    public ?string $ownerId = null;
    public ?array $projectId = null;
    public array $securityIssues;
    public ?array $target = null;
    public ?string $type = null;
    public array $updated;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
    public array $updates;
    public ?string $value = null;
}

/** Request payload for Env#load. */
class EnvLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Env#list. */
class EnvListMatch
{
    public ?string $exclude_id = null;
    public ?string $exclude_project_id = null;
    public ?string $ids = null;
    public ?string $project_id = null;
    public ?string $search = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Env#create. */
class EnvCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $applyToAllCustomEnvironments = null;
    public ?string $comment = null;
    public ?string $created = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public ?array $customEnvironmentIds = null;
    public ?bool $decrypted = null;
    public ?float $deletedAt = null;
    public ?string $deletedBy = null;
    public array $evs;
    public array $failed;
    public ?string $id = null;
    public ?string $key = null;
    public ?string $lastEditedByDisplayName = null;
    public ?string $ownerId = null;
    public ?array $projectId = null;
    public array $securityIssues;
    public ?array $target = null;
    public ?string $type = null;
    public array $updated;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
    public array $updates;
    public ?string $value = null;
}

/** Request payload for Env#update. */
class EnvUpdateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $applyToAllCustomEnvironments = null;
    public ?string $comment = null;
    public ?string $created = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public ?array $customEnvironmentIds = null;
    public ?bool $decrypted = null;
    public ?float $deletedAt = null;
    public ?string $deletedBy = null;
    public ?array $evs = null;
    public ?array $failed = null;
    public ?string $id = null;
    public ?string $key = null;
    public ?string $lastEditedByDisplayName = null;
    public ?string $ownerId = null;
    public ?array $projectId = null;
    public ?array $securityIssues = null;
    public ?array $target = null;
    public ?string $type = null;
    public ?array $updated = null;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
    public ?array $updates = null;
    public ?string $value = null;
}

/** Request payload for Env#remove. */
class EnvRemoveMatch
{
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Environment entity data model. */
class Environment
{
    public array $branchMatcher;
    public ?string $copyEnvVarsFrom = null;
    public float $createdAt;
    public ?array $currentDeploymentAliases = null;
    public ?string $description = null;
    public ?array $domains = null;
    public string $id;
    public string $slug;
    public string $type;
    public float $updatedAt;
}

/** Request payload for Environment#load. */
class EnvironmentLoadMatch
{
    public string $environment_slug_or_id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Environment#list. */
class EnvironmentListMatch
{
    public string $id_or_name;
    public ?string $git_branch = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Environment#create. */
class EnvironmentCreateData
{
    public string $id_or_name;
    public ?string $slug = null;
    public ?string $team_id = null;
    public array $branchMatcher;
    public ?string $copyEnvVarsFrom = null;
    public float $createdAt;
    public ?array $currentDeploymentAliases = null;
    public ?string $description = null;
    public ?array $domains = null;
    public string $id;
    public string $type;
    public float $updatedAt;
}

/** Request payload for Environment#update. */
class EnvironmentUpdateData
{
    public ?string $env_id = null;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $environment_slug_or_id = null;
    public ?array $branchMatcher = null;
    public ?string $copyEnvVarsFrom = null;
    public ?float $createdAt = null;
    public ?array $currentDeploymentAliases = null;
    public ?string $description = null;
    public ?array $domains = null;
    public ?string $id = null;
    public ?string $type = null;
    public ?float $updatedAt = null;
}

/** Request payload for Environment#remove. */
class EnvironmentRemoveMatch
{
    public string $environment_slug_or_id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** FeatureFlag entity data model. */
class FeatureFlag
{
    public array $changedEnvironments;
    public float $createdAt;
    public string $createdBy;
    public ?array $data = null;
    public ?string $description = null;
    public array $environments;
    public string $flagId;
    public array $flags;
    public ?string $hint = null;
    public string $id;
    public string $kind;
    public ?string $label = null;
    public ?array $maintainerIds = null;
    public ?string $message = null;
    public ?array $metadata = null;
    public ?array $operations = null;
    public string $ownerId;
    public array $pagination;
    public ?bool $permanent = null;
    public string $projectId;
    public float $revision;
    public float $seed;
    public string $slug;
    public string $state;
    public array $status;
    public ?array $tags = null;
    public string $typeName;
    public float $updatedAt;
    public ?string $updatedBy = null;
    public array $variants;
}

/** Request payload for FeatureFlag#load. */
class FeatureFlagLoadMatch
{
    public string $team_id;
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?string $slug = null;
}

/** Request payload for FeatureFlag#list. */
class FeatureFlagListMatch
{
    public string $deployment_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for FeatureFlag#update. */
class FeatureFlagUpdateData
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $changedEnvironments = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public ?array $data = null;
    public ?string $description = null;
    public ?array $environments = null;
    public ?string $flagId = null;
    public ?array $flags = null;
    public ?string $hint = null;
    public ?string $id = null;
    public ?string $kind = null;
    public ?string $label = null;
    public ?array $maintainerIds = null;
    public ?string $message = null;
    public ?array $metadata = null;
    public ?array $operations = null;
    public ?string $ownerId = null;
    public ?array $pagination = null;
    public ?bool $permanent = null;
    public ?string $projectId = null;
    public ?float $revision = null;
    public ?float $seed = null;
    public ?string $state = null;
    public ?array $status = null;
    public ?array $tags = null;
    public ?string $typeName = null;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
    public ?array $variants = null;
}

/** Request payload for FeatureFlag#remove. */
class FeatureFlagRemoveMatch
{
    public ?string $id = null;
    public string $project_id;
    public ?string $if_match = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $with_metadata = null;
    public ?string $segment_id_or_slug = null;
    public ?string $hash_key = null;
}

/** File entity data model. */
class File
{
    public ?array $children = null;
    public ?string $contentType = null;
    public float $mode;
    public string $name;
    public string $type;
    public ?string $uid = null;
}

/** Request payload for File#list. */
class FileListMatch
{
    public string $deployment_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Flag entity data model. */
class Flag
{
    public float $createdAt;
    public string $createdBy;
    public ?string $description = null;
    public array $environments;
    public string $id;
    public string $kind;
    public ?array $maintainerIds = null;
    public ?array $metadata = null;
    public string $ownerId;
    public ?bool $permanent = null;
    public string $projectId;
    public float $revision;
    public float $seed;
    public string $slug;
    public string $state;
    public ?array $tags = null;
    public string $typeName;
    public float $updatedAt;
    public ?string $updatedBy = null;
    public array $variants;
}

/** Request payload for Flag#load. */
class FlagLoadMatch
{
    public string $id;
    public string $project_id;
    public ?string $if_match = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $with_metadata = null;
}

/** FlagsSdkKeyWithSecret entity data model. */
class FlagsSdkKeyWithSecret
{
    public float $createdAt;
    public string $createdBy;
    public ?float $deletedAt = null;
    public string $environment;
    public string $hashKey;
    public string $keyValue;
    public ?string $label = null;
    public string $partialKeyValue;
    public string $projectId;
    public string $sdkKeyType;
    public ?string $tokenValue = null;
    public string $type;
    public float $updatedAt;
}

/** Request payload for FlagsSdkKeyWithSecret#update. */
class FlagsSdkKeyWithSecretUpdateData
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public ?float $deletedAt = null;
    public ?string $environment = null;
    public ?string $hashKey = null;
    public ?string $keyValue = null;
    public ?string $label = null;
    public ?string $partialKeyValue = null;
    public ?string $projectId = null;
    public ?string $sdkKeyType = null;
    public ?string $tokenValue = null;
    public ?string $type = null;
    public ?float $updatedAt = null;
}

/** GlobalConfig entity data model. */
class GlobalConfig
{
    public float $createdAt;
    public ?string $createdBy = null;
    public ?float $deletedAt = null;
    public string $digest;
    public string $id;
    public float $itemCount;
    public ?array $items = null;
    public string $ownerId;
    public mixed $purpose = null;
    public ?array $schema = null;
    public float $sizeInBytes;
    public string $slug;
    public ?float $syncedToDynamoAt = null;
    public array $transfer;
    public float $updatedAt;
}

/** Request payload for GlobalConfig#load. */
class GlobalConfigLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for GlobalConfig#list. */
class GlobalConfigListMatch
{
    public string $id;
    public ?float $limit = null;
    public ?string $metadata = null;
    public ?string $next = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for GlobalConfig#create. */
class GlobalConfigCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public float $createdAt;
    public ?string $createdBy = null;
    public ?float $deletedAt = null;
    public string $digest;
    public string $id;
    public float $itemCount;
    public ?array $items = null;
    public string $ownerId;
    public mixed $purpose = null;
    public ?array $schema = null;
    public float $sizeInBytes;
    public ?float $syncedToDynamoAt = null;
    public array $transfer;
    public float $updatedAt;
}

/** Request payload for GlobalConfig#update. */
class GlobalConfigUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public ?float $deletedAt = null;
    public ?string $digest = null;
    public ?float $itemCount = null;
    public ?array $items = null;
    public ?string $ownerId = null;
    public mixed $purpose = null;
    public ?array $schema = null;
    public ?float $sizeInBytes = null;
    public ?float $syncedToDynamoAt = null;
    public ?array $transfer = null;
    public ?float $updatedAt = null;
}

/** Request payload for GlobalConfig#remove. */
class GlobalConfigRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** GlobalConfigItem entity data model. */
class GlobalConfigItem
{
    public float $createdAt;
    public ?string $description = null;
    public string $edgeConfigId;
    public ?string $id = null;
    public string $key;
    public float $updatedAt;
    public mixed $value;
}

/** Request payload for GlobalConfigItem#load. */
class GlobalConfigItemLoadMatch
{
    public string $global_config_id;
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for GlobalConfigItem#list. */
class GlobalConfigItemListMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** GlobalConfigToken entity data model. */
class GlobalConfigToken
{
    public float $createdAt;
    public string $edgeConfigId;
    public string $id;
    public string $label;
    public string $partialToken;
    public ?string $token = null;
}

/** Request payload for GlobalConfigToken#load. */
class GlobalConfigTokenLoadMatch
{
    public ?string $global_config_id = null;
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Integration entity data model. */
class Integration
{
    public ?string $cost = null;
    public string $description;
    public ?array $details = null;
    public ?bool $disabled = null;
    public ?string $effectiveDate = null;
    public ?array $envVarEnvironments = null;
    public ?array $highlightedDetails = null;
    public string $id;
    public ?string $initialCharge = null;
    public ?bool $makeEnvVarsSensitive = null;
    public ?string $maximumAmount = null;
    public ?string $maximumAmountAutoPurchasePerPeriod = null;
    public array $metadataSchema;
    public ?string $minimumAmount = null;
    public string $name;
    public bool $paymentMethodRequired;
    public ?float $preauthorizationAmount = null;
    public ?string $primaryProtocol = null;
    public string $projectId;
    public array $protocols;
    public ?array $quote = null;
    public string $scope;
    public string $slug;
    public string $type;
}

/** Request payload for Integration#load. */
class IntegrationLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Integration#list. */
class IntegrationListMatch
{
    public string $configuration_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Integration#create. */
class IntegrationCreateData
{
    public string $installation_id;
    public string $resource_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $cost = null;
    public string $description;
    public ?array $details = null;
    public ?bool $disabled = null;
    public ?string $effectiveDate = null;
    public ?array $envVarEnvironments = null;
    public ?array $highlightedDetails = null;
    public string $id;
    public ?string $initialCharge = null;
    public ?bool $makeEnvVarsSensitive = null;
    public ?string $maximumAmount = null;
    public ?string $maximumAmountAutoPurchasePerPeriod = null;
    public array $metadataSchema;
    public ?string $minimumAmount = null;
    public string $name;
    public bool $paymentMethodRequired;
    public ?float $preauthorizationAmount = null;
    public ?string $primaryProtocol = null;
    public string $projectId;
    public array $protocols;
    public ?array $quote = null;
    public string $scope;
    public string $type;
}

/** Request payload for Integration#remove. */
class IntegrationRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Kms entity data model. */
class Kms
{
    public ?string $activation = null;
    public ?string $alg = null;
    public string $algorithm;
    public ?array $claims = null;
    public ?array $claimsSchema = null;
    public string $createdAt;
    public array $environments;
    public ?array $headers = null;
    public string $id;
    public ?string $importKey = null;
    public ?string $importKeyId = null;
    public string $keyId;
    public ?array $key_ops = null;
    public ?string $kid = null;
    public string $kind;
    public ?string $kty = null;
    public ?string $managedBy = null;
    public string $message;
    public string $name;
    public string $origin;
    public string $ownerId;
    public array $policies;
    public string $projectId;
    public ?float $revokePreviousAfterHours = null;
    public mixed $revokePreviousAt = null;
    public string $signature;
    public array $signingKeys;
    public string $token;
    public ?array $tokenClaims = null;
    public ?float $ttl = null;
    public string $updatedAt;
    public ?string $use = null;
    public ?array $x5c = null;
    public ?string $x5tS256 = null;
}

/** Request payload for Kms#load. */
class KmsLoadMatch
{
    public string $issuer_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Kms#list. */
class KmsListMatch
{
    public ?int $limit = null;
    public ?string $next = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Kms#create. */
class KmsCreateData
{
    public string $issuer_id;
    public ?string $key_id = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $activation = null;
    public ?string $alg = null;
    public string $algorithm;
    public ?array $claims = null;
    public ?array $claimsSchema = null;
    public string $createdAt;
    public array $environments;
    public ?array $headers = null;
    public string $id;
    public ?string $importKey = null;
    public ?string $importKeyId = null;
    public string $keyId;
    public ?array $key_ops = null;
    public ?string $kid = null;
    public string $kind;
    public ?string $kty = null;
    public ?string $managedBy = null;
    public string $message;
    public string $name;
    public string $origin;
    public string $ownerId;
    public array $policies;
    public string $projectId;
    public ?float $revokePreviousAfterHours = null;
    public mixed $revokePreviousAt = null;
    public string $signature;
    public array $signingKeys;
    public string $token;
    public ?array $tokenClaims = null;
    public ?float $ttl = null;
    public string $updatedAt;
    public ?string $use = null;
    public ?array $x5c = null;
    public ?string $x5tS256 = null;
}

/** Request payload for Kms#update. */
class KmsUpdateData
{
    public string $issuer_id;
    public ?string $kind = null;
    public ?string $policy_key = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $activation = null;
    public ?string $alg = null;
    public ?string $algorithm = null;
    public ?array $claims = null;
    public ?array $claimsSchema = null;
    public ?string $createdAt = null;
    public ?array $environments = null;
    public ?array $headers = null;
    public ?string $id = null;
    public ?string $importKey = null;
    public ?string $importKeyId = null;
    public ?string $keyId = null;
    public ?array $key_ops = null;
    public ?string $kid = null;
    public ?string $kty = null;
    public ?string $managedBy = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?string $origin = null;
    public ?string $ownerId = null;
    public ?array $policies = null;
    public ?string $projectId = null;
    public ?float $revokePreviousAfterHours = null;
    public mixed $revokePreviousAt = null;
    public ?string $signature = null;
    public ?array $signingKeys = null;
    public ?string $token = null;
    public ?array $tokenClaims = null;
    public ?float $ttl = null;
    public ?string $updatedAt = null;
    public ?string $use = null;
    public ?array $x5c = null;
    public ?string $x5tS256 = null;
}

/** Request payload for Kms#remove. */
class KmsRemoveMatch
{
    public string $issuer_id;
    public ?string $kind = null;
    public ?string $policy_key = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** ListEventType entity data model. */
class ListEventType
{
    public array $categories;
    public array $types;
}

/** Request payload for ListEventType#list. */
class ListEventTypeListMatch
{
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Log entity data model. */
class Log
{
}

/** Request payload for Log#load. */
class LogLoadMatch
{
    public string $deployment_id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** LogDrain entity data model. */
class LogDrain
{
    public ?string $branch = null;
    public ?string $clientId = null;
    public ?string $configurationId = null;
    public float $createdAt;
    public string $createdFrom;
    public mixed $deliveryFormat;
    public ?array $environments = null;
    public ?array $headers = null;
    public string $id;
    public ?string $integrationConfigurationUri = null;
    public ?string $integrationIcon = null;
    public ?string $integrationWebsite = null;
    public ?string $name = null;
    public string $ownerId;
    public ?string $projectId = null;
    public ?array $projectIds = null;
    public ?array $projectsMetadata = null;
    public ?float $samplingRate = null;
    public ?string $secret = null;
    public mixed $source;
    public array $sources;
    public string $url;
}

/** Request payload for LogDrain#load. */
class LogDrainLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for LogDrain#list. */
class LogDrainListMatch
{
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for LogDrain#create. */
class LogDrainCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $branch = null;
    public ?string $clientId = null;
    public ?string $configurationId = null;
    public float $createdAt;
    public string $createdFrom;
    public mixed $deliveryFormat;
    public ?array $environments = null;
    public ?array $headers = null;
    public string $id;
    public ?string $integrationConfigurationUri = null;
    public ?string $integrationIcon = null;
    public ?string $integrationWebsite = null;
    public ?string $name = null;
    public string $ownerId;
    public ?string $projectId = null;
    public ?array $projectIds = null;
    public ?array $projectsMetadata = null;
    public ?float $samplingRate = null;
    public ?string $secret = null;
    public mixed $source;
    public array $sources;
    public string $url;
}

/** Request payload for LogDrain#remove. */
class LogDrainRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Marketplace entity data model. */
class Marketplace
{
    public string $access_token;
    public bool $already_revoked;
    public array $balances;
    public mixed $billing;
    public array $billingPlan;
    public ?string $billingPlanId = null;
    public ?string $category = null;
    public ?string $client_id = null;
    public string $client_secret;
    public string $created;
    public ?float $createdAt = null;
    public array $data;
    public ?string $description = null;
    public ?array $discounts = null;
    public string $email;
    public string $eod;
    public mixed $event;
    public float $expires_in;
    public ?string $externalId = null;
    public ?array $extras = null;
    public ?bool $final = null;
    public ?string $globalUserId = null;
    public string $id;
    public string $internalId;
    public string $invoiceDate;
    public string $invoiceId;
    public ?string $invoiceNumber = null;
    public ?bool $isArchived = null;
    public array $items;
    public ?string $memo = null;
    public ?array $metadata = null;
    public string $name;
    public array $notification;
    public string $origin;
    public ?string $ownership = null;
    public ?string $paidAt = null;
    public ?bool $partial = null;
    public string $partnerId;
    public array $period;
    public string $productId;
    public ?array $protocolSettings = null;
    public ?string $refundReason = null;
    public ?string $refundTotal = null;
    public ?string $refundedAt = null;
    public bool $revoked;
    public string $role;
    public string $scope;
    public array $secrets;
    public string $slug;
    public string $state;
    public ?string $status = null;
    public ?bool $test = null;
    public string $timestamp;
    public string $token;
    public string $token_type;
    public string $total;
    public string $updated;
    public ?float $updatedAt = null;
    public array $usage;
    public ?string $userEmail = null;
    public ?array $validationErrors = null;
}

/** Request payload for Marketplace#load. */
class MarketplaceLoadMatch
{
    public string $installation_id;
    public ?string $invoice_id = null;
    public ?string $member_id = null;
    public ?string $resource_id = null;
}

/** Request payload for Marketplace#list. */
class MarketplaceListMatch
{
    public string $installation_id;
}

/** Request payload for Marketplace#create. */
class MarketplaceCreateData
{
    public string $installation_id;
    public ?string $invoice_id = null;
    public ?string $resource_id = null;
    public string $access_token;
    public bool $already_revoked;
    public array $balances;
    public mixed $billing;
    public array $billingPlan;
    public ?string $billingPlanId = null;
    public ?string $category = null;
    public ?string $client_id = null;
    public string $client_secret;
    public string $created;
    public ?float $createdAt = null;
    public array $data;
    public ?string $description = null;
    public ?array $discounts = null;
    public string $email;
    public string $eod;
    public mixed $event;
    public float $expires_in;
    public ?string $externalId = null;
    public ?array $extras = null;
    public ?bool $final = null;
    public ?string $globalUserId = null;
    public string $id;
    public string $internalId;
    public string $invoiceDate;
    public string $invoiceId;
    public ?string $invoiceNumber = null;
    public ?bool $isArchived = null;
    public array $items;
    public ?string $memo = null;
    public ?array $metadata = null;
    public string $name;
    public array $notification;
    public string $origin;
    public ?string $ownership = null;
    public ?string $paidAt = null;
    public ?bool $partial = null;
    public string $partnerId;
    public array $period;
    public string $productId;
    public ?array $protocolSettings = null;
    public ?string $refundReason = null;
    public ?string $refundTotal = null;
    public ?string $refundedAt = null;
    public bool $revoked;
    public string $role;
    public string $scope;
    public array $secrets;
    public string $slug;
    public string $state;
    public ?string $status = null;
    public ?bool $test = null;
    public string $timestamp;
    public string $token;
    public string $token_type;
    public string $total;
    public string $updated;
    public ?float $updatedAt = null;
    public array $usage;
    public ?string $userEmail = null;
    public ?array $validationErrors = null;
}

/** Request payload for Marketplace#update. */
class MarketplaceUpdateData
{
    public string $installation_id;
    public ?string $product_id = null;
    public string $resource_id;
    public ?string $access_token = null;
    public ?bool $already_revoked = null;
    public ?array $balances = null;
    public mixed $billing = null;
    public ?array $billingPlan = null;
    public ?string $billingPlanId = null;
    public ?string $category = null;
    public ?string $client_id = null;
    public ?string $client_secret = null;
    public ?string $created = null;
    public ?float $createdAt = null;
    public ?array $data = null;
    public ?string $description = null;
    public ?array $discounts = null;
    public ?string $email = null;
    public ?string $eod = null;
    public mixed $event = null;
    public ?float $expires_in = null;
    public ?string $externalId = null;
    public ?array $extras = null;
    public ?bool $final = null;
    public ?string $globalUserId = null;
    public ?string $id = null;
    public ?string $internalId = null;
    public ?string $invoiceDate = null;
    public ?string $invoiceId = null;
    public ?string $invoiceNumber = null;
    public ?bool $isArchived = null;
    public ?array $items = null;
    public ?string $memo = null;
    public ?array $metadata = null;
    public ?string $name = null;
    public ?array $notification = null;
    public ?string $origin = null;
    public ?string $ownership = null;
    public ?string $paidAt = null;
    public ?bool $partial = null;
    public ?string $partnerId = null;
    public ?array $period = null;
    public ?string $productId = null;
    public ?array $protocolSettings = null;
    public ?string $refundReason = null;
    public ?string $refundTotal = null;
    public ?string $refundedAt = null;
    public ?bool $revoked = null;
    public ?string $role = null;
    public ?string $scope = null;
    public ?array $secrets = null;
    public ?string $slug = null;
    public ?string $state = null;
    public ?string $status = null;
    public ?bool $test = null;
    public ?string $timestamp = null;
    public ?string $token = null;
    public ?string $token_type = null;
    public ?string $total = null;
    public ?string $updated = null;
    public ?float $updatedAt = null;
    public ?array $usage = null;
    public ?string $userEmail = null;
    public ?array $validationErrors = null;
}

/** Request payload for Marketplace#remove. */
class MarketplaceRemoveMatch
{
    public string $installation_id;
    public ?string $item_id = null;
    public string $resource_id;
}

/** Microfrontend entity data model. */
class Microfrontend
{
    public array $abuse;
    public string $accountId;
    public array $alias;
    public array $analytics;
    public array $applications;
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
    public mixed $expiration = null;
    public ?array $features = null;
    public ?string $framework = null;
    public array $gitComments;
    public ?bool $gitForkProtection = null;
    public ?bool $gitLFS = null;
    public array $gitProviderOptions;
    public ?bool $hasActiveBranches = null;
    public ?bool $hasDeployments = null;
    public string $id;
    public ?string $installCommand = null;
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
    public ?array $options = null;
    public array $optionsAllowlist;
    public ?string $outputDirectory = null;
    public ?string $passiveConnectConfigurationId = null;
    public array $passport;
    public ?array $passwordProtection = null;
    public ?bool $paused = null;
    public ?array $permissions = null;
    public ?bool $productionDeploymentsFastLane = null;
    public ?bool $protectedSourcemaps = null;
    public ?array $protectionBypass = null;
    public ?array $protectionConfig = null;
    public array $resourceConfig;
    public array $rollbackDescription;
    public array $rollingRelease;
    public ?string $rootDirectory = null;
    public ?array $sandbox = null;
    public ?string $schema = null;
    public ?array $security = null;
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
    public ?string $version = null;
    public array $webAnalytics;
}

/** Request payload for Microfrontend#load. */
class MicrofrontendLoadMatch
{
    public string $project_id_or_name;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Microfrontend#list. */
class MicrofrontendListMatch
{
    public string $group_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Microfrontend#create. */
class MicrofrontendCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public array $abuse;
    public string $accountId;
    public array $alias;
    public array $analytics;
    public array $applications;
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
    public mixed $expiration = null;
    public ?array $features = null;
    public ?string $framework = null;
    public array $gitComments;
    public ?bool $gitForkProtection = null;
    public ?bool $gitLFS = null;
    public array $gitProviderOptions;
    public ?bool $hasActiveBranches = null;
    public ?bool $hasDeployments = null;
    public string $id;
    public ?string $installCommand = null;
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
    public ?array $options = null;
    public array $optionsAllowlist;
    public ?string $outputDirectory = null;
    public ?string $passiveConnectConfigurationId = null;
    public array $passport;
    public ?array $passwordProtection = null;
    public ?bool $paused = null;
    public ?array $permissions = null;
    public ?bool $productionDeploymentsFastLane = null;
    public ?bool $protectedSourcemaps = null;
    public ?array $protectionBypass = null;
    public ?array $protectionConfig = null;
    public array $resourceConfig;
    public array $rollbackDescription;
    public array $rollingRelease;
    public ?string $rootDirectory = null;
    public ?array $sandbox = null;
    public ?string $schema = null;
    public ?array $security = null;
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
    public ?string $version = null;
    public array $webAnalytics;
}

/** Network entity data model. */
class Network
{
    public string $awsAccountId;
    public ?array $awsAvailabilityZoneIds = null;
    public string $awsRegion;
    public string $cidr;
    public float $createdAt;
    public ?array $egressIpAddresses = null;
    public array $hostedZones;
    public string $id;
    public string $name;
    public array $peeringConnections;
    public array $projects;
    public ?string $region = null;
    public string $status;
    public string $teamId;
    public ?string $vpcId = null;
}

/** Request payload for Network#load. */
class NetworkLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Network#list. */
class NetworkListMatch
{
    public ?bool $include_hosted_zone = null;
    public ?bool $include_peering_connection = null;
    public ?bool $include_project = null;
    public ?string $search = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Network#create. */
class NetworkCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public string $awsAccountId;
    public ?array $awsAvailabilityZoneIds = null;
    public string $awsRegion;
    public string $cidr;
    public float $createdAt;
    public ?array $egressIpAddresses = null;
    public array $hostedZones;
    public string $id;
    public string $name;
    public array $peeringConnections;
    public array $projects;
    public ?string $region = null;
    public string $status;
    public string $teamId;
    public ?string $vpcId = null;
}

/** Request payload for Network#update. */
class NetworkUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $awsAccountId = null;
    public ?array $awsAvailabilityZoneIds = null;
    public ?string $awsRegion = null;
    public ?string $cidr = null;
    public ?float $createdAt = null;
    public ?array $egressIpAddresses = null;
    public ?array $hostedZones = null;
    public ?string $name = null;
    public ?array $peeringConnections = null;
    public ?array $projects = null;
    public ?string $region = null;
    public ?string $status = null;
    public ?string $teamId = null;
    public ?string $vpcId = null;
}

/** Request payload for Network#remove. */
class NetworkRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Networking entity data model. */
class Networking
{
    public ?bool $builds = null;
    public ?array $regions = null;
}

/** Request payload for Networking#update. */
class NetworkingUpdateData
{
    public string $id_or_name;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $builds = null;
    public ?array $regions = null;
}

/** Request payload for Networking#remove. */
class NetworkingRemoveMatch
{
    public string $endpoint_id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Observability entity data model. */
class Observability
{
    public bool $disabled;
    public ?float $disabledAt = null;
    public string $id;
    public ?string $name = null;
}

/** Request payload for Observability#list. */
class ObservabilityListMatch
{
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Observability#update. */
class ObservabilityUpdateData
{
    public string $project_id_or_name;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $disabled = null;
    public ?float $disabledAt = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** PrivateLinkEndpoint entity data model. */
class PrivateLinkEndpoint
{
    public ?array $awsDnsEntries = null;
    public string $awsServiceName;
    public float $createdAt;
    public ?bool $enablePrivateDns = null;
    public string $endpointId;
    public ?string $id = null;
    public string $name;
    public ?array $privateDnsNames = null;
    public string $projectId;
    public string $status;
    public ?string $statusMessage = null;
    public string $teamId;
    public float $updatedAt;
    public string $vercelRegion;
    public ?string $vpcEndpointId = null;
}

/** Request payload for PrivateLinkEndpoint#load. */
class PrivateLinkEndpointLoadMatch
{
    public string $id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for PrivateLinkEndpoint#list. */
class PrivateLinkEndpointListMatch
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for PrivateLinkEndpoint#create. */
class PrivateLinkEndpointCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $awsDnsEntries = null;
    public string $awsServiceName;
    public float $createdAt;
    public ?bool $enablePrivateDns = null;
    public string $endpointId;
    public ?string $id = null;
    public string $name;
    public ?array $privateDnsNames = null;
    public string $projectId;
    public string $status;
    public ?string $statusMessage = null;
    public string $teamId;
    public float $updatedAt;
    public string $vercelRegion;
    public ?string $vpcEndpointId = null;
}

/** Request payload for PrivateLinkEndpoint#update. */
class PrivateLinkEndpointUpdateData
{
    public string $id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $awsDnsEntries = null;
    public ?string $awsServiceName = null;
    public ?float $createdAt = null;
    public ?bool $enablePrivateDns = null;
    public ?string $endpointId = null;
    public ?string $name = null;
    public ?array $privateDnsNames = null;
    public ?string $projectId = null;
    public ?string $status = null;
    public ?string $statusMessage = null;
    public ?string $teamId = null;
    public ?float $updatedAt = null;
    public ?string $vercelRegion = null;
    public ?string $vpcEndpointId = null;
}

/** Project entity data model. */
class Project
{
    public array $abuse;
    public ?array $acceptedPolicies = null;
    public string $accountId;
    public array $alias;
    public array $analytics;
    public string $apexName;
    public ?bool $appliedCve55182Migration = null;
    public ?bool $autoAssignCustomDomains = null;
    public ?string $autoAssignCustomDomainsUpdatedBy = null;
    public ?bool $autoExposeSystemEnvs = null;
    public ?string $avatar = null;
    public ?array $blobs = null;
    public ?string $buildCommand = null;
    public ?string $commandForIgnoringBuildStep = null;
    public ?string $comment = null;
    public ?string $concurrencyBucketName = null;
    public ?string $configurationId = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public ?array $connectConfigurations = null;
    public mixed $contentHint = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public mixed $creator = null;
    public array $crons;
    public ?string $customEnvironmentId = null;
    public ?array $customEnvironmentIds = null;
    public ?array $customEnvironments = null;
    public ?bool $customerSupportCodeVisibility = null;
    public array $dataCache;
    public ?bool $decrypted = null;
    public array $defaultResourceConfig;
    public array $deploymentExpiration;
    public ?array $deploymentPolicy = null;
    public ?string $devCommand = null;
    public bool $directoryListing;
    public ?array $dismissedToasts = null;
    public ?string $edgeConfigId = null;
    public ?string $edgeConfigTokenId = null;
    public ?bool $enableAffectedProjectsDeployments = null;
    public ?bool $enableExternalRewriteCaching = null;
    public ?bool $enablePreviewFeedback = null;
    public ?bool $enableProductionFeedback = null;
    public ?array $env = null;
    public ?array $environmentVariables = null;
    public mixed $expiration = null;
    public ?array $features = null;
    public ?string $framework = null;
    public ?string $gitBranch = null;
    public array $gitComments;
    public ?bool $gitForkProtection = null;
    public ?bool $gitLFS = null;
    public array $gitProviderOptions;
    public array $gitRepository;
    public ?bool $hasActiveBranches = null;
    public ?bool $hasDeployments = null;
    public string $hostname;
    public string $id;
    public ?string $installCommand = null;
    public ?array $integrations = null;
    public array $internalContentHint;
    public ?array $internalRoutes = null;
    public ?array $ipBuckets = null;
    public ?array $jobs = null;
    public string $key;
    public array $lastAliasRequest;
    public ?array $lastRollbackTarget = null;
    public ?array $latestDeployments = null;
    public ?string $legacyValue = null;
    public ?string $link = null;
    public ?bool $live = null;
    public mixed $microfrontends = null;
    public string $name;
    public ?string $newProjectName = null;
    public string $nodeVersion;
    public ?array $oidcTokenConfig = null;
    public array $optionsAllowlist;
    public ?string $outputDirectory = null;
    public ?array $paidFeatures = null;
    public ?string $passiveConnectConfigurationId = null;
    public array $passport;
    public ?array $passwordProtection = null;
    public ?bool $paused = null;
    public ?array $permissions = null;
    public ?string $previewDeploymentSuffix = null;
    public ?bool $previewDeploymentsDisabled = null;
    public ?bool $productionDeploymentsFastLane = null;
    public string $projectId;
    public ?bool $protectedSourcemaps = null;
    public ?array $protectionBypass = null;
    public ?array $protectionConfig = null;
    public ?bool $publicSource = null;
    public ?string $redirect = null;
    public ?float $redirectStatusCode = null;
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
    public ?string $sunsetSecretId = null;
    public mixed $target = null;
    public ?array $targets = null;
    public ?string $tier = null;
    public string $token;
    public ?array $tracing = null;
    public ?float $transferCompletedAt = null;
    public ?float $transferStartedAt = null;
    public ?string $transferToAccountId = null;
    public ?string $transferredFromAccountId = null;
    public mixed $trustedIps = null;
    public ?array $trustedSources = null;
    public string $type;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
    public array $usageStatus;
    public ?bool $v0 = null;
    public ?bool $v0Created = null;
    public string $value;
    public ?array $verification = null;
    public bool $verified;
    public ?string $visibility = null;
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
    public string $deployment_id;
    public string $id;
    public ?string $description = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public array $abuse;
    public ?array $acceptedPolicies = null;
    public string $accountId;
    public array $alias;
    public array $analytics;
    public string $apexName;
    public ?bool $appliedCve55182Migration = null;
    public ?bool $autoAssignCustomDomains = null;
    public ?string $autoAssignCustomDomainsUpdatedBy = null;
    public ?bool $autoExposeSystemEnvs = null;
    public ?string $avatar = null;
    public ?array $blobs = null;
    public ?string $buildCommand = null;
    public ?string $commandForIgnoringBuildStep = null;
    public ?string $comment = null;
    public ?string $concurrencyBucketName = null;
    public ?string $configurationId = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public ?array $connectConfigurations = null;
    public mixed $contentHint = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public mixed $creator = null;
    public array $crons;
    public ?string $customEnvironmentId = null;
    public ?array $customEnvironmentIds = null;
    public ?array $customEnvironments = null;
    public ?bool $customerSupportCodeVisibility = null;
    public array $dataCache;
    public ?bool $decrypted = null;
    public array $defaultResourceConfig;
    public array $deploymentExpiration;
    public ?array $deploymentPolicy = null;
    public ?string $devCommand = null;
    public bool $directoryListing;
    public ?array $dismissedToasts = null;
    public ?string $edgeConfigId = null;
    public ?string $edgeConfigTokenId = null;
    public ?bool $enableAffectedProjectsDeployments = null;
    public ?bool $enableExternalRewriteCaching = null;
    public ?bool $enablePreviewFeedback = null;
    public ?bool $enableProductionFeedback = null;
    public ?array $env = null;
    public ?array $environmentVariables = null;
    public mixed $expiration = null;
    public ?array $features = null;
    public ?string $framework = null;
    public ?string $gitBranch = null;
    public array $gitComments;
    public ?bool $gitForkProtection = null;
    public ?bool $gitLFS = null;
    public array $gitProviderOptions;
    public array $gitRepository;
    public ?bool $hasActiveBranches = null;
    public ?bool $hasDeployments = null;
    public string $hostname;
    public ?string $installCommand = null;
    public ?array $integrations = null;
    public array $internalContentHint;
    public ?array $internalRoutes = null;
    public ?array $ipBuckets = null;
    public ?array $jobs = null;
    public string $key;
    public array $lastAliasRequest;
    public ?array $lastRollbackTarget = null;
    public ?array $latestDeployments = null;
    public ?string $legacyValue = null;
    public ?string $link = null;
    public ?bool $live = null;
    public mixed $microfrontends = null;
    public string $name;
    public ?string $newProjectName = null;
    public string $nodeVersion;
    public ?array $oidcTokenConfig = null;
    public array $optionsAllowlist;
    public ?string $outputDirectory = null;
    public ?array $paidFeatures = null;
    public ?string $passiveConnectConfigurationId = null;
    public array $passport;
    public ?array $passwordProtection = null;
    public ?bool $paused = null;
    public ?array $permissions = null;
    public ?string $previewDeploymentSuffix = null;
    public ?bool $previewDeploymentsDisabled = null;
    public ?bool $productionDeploymentsFastLane = null;
    public string $projectId;
    public ?bool $protectedSourcemaps = null;
    public ?array $protectionBypass = null;
    public ?array $protectionConfig = null;
    public ?bool $publicSource = null;
    public ?string $redirect = null;
    public ?float $redirectStatusCode = null;
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
    public ?string $sunsetSecretId = null;
    public mixed $target = null;
    public ?array $targets = null;
    public ?string $tier = null;
    public string $token;
    public ?array $tracing = null;
    public ?float $transferCompletedAt = null;
    public ?float $transferStartedAt = null;
    public ?string $transferToAccountId = null;
    public ?string $transferredFromAccountId = null;
    public mixed $trustedIps = null;
    public ?array $trustedSources = null;
    public string $type;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
    public array $usageStatus;
    public ?bool $v0 = null;
    public ?bool $v0Created = null;
    public string $value;
    public ?array $verification = null;
    public bool $verified;
    public ?string $visibility = null;
    public array $webAnalytics;
}

/** Request payload for Project#update. */
class ProjectUpdateData
{
    public string $code;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $abuse = null;
    public ?array $acceptedPolicies = null;
    public ?string $accountId = null;
    public ?array $alias = null;
    public ?array $analytics = null;
    public ?string $apexName = null;
    public ?bool $appliedCve55182Migration = null;
    public ?bool $autoAssignCustomDomains = null;
    public ?string $autoAssignCustomDomainsUpdatedBy = null;
    public ?bool $autoExposeSystemEnvs = null;
    public ?string $avatar = null;
    public ?array $blobs = null;
    public ?string $buildCommand = null;
    public ?string $commandForIgnoringBuildStep = null;
    public ?string $comment = null;
    public ?string $concurrencyBucketName = null;
    public ?string $configurationId = null;
    public ?bool $connectBuildsEnabled = null;
    public ?string $connectConfigurationId = null;
    public ?array $connectConfigurations = null;
    public mixed $contentHint = null;
    public ?float $createdAt = null;
    public ?string $createdBy = null;
    public mixed $creator = null;
    public ?array $crons = null;
    public ?string $customEnvironmentId = null;
    public ?array $customEnvironmentIds = null;
    public ?array $customEnvironments = null;
    public ?bool $customerSupportCodeVisibility = null;
    public ?array $dataCache = null;
    public ?bool $decrypted = null;
    public ?array $defaultResourceConfig = null;
    public ?array $deploymentExpiration = null;
    public ?array $deploymentPolicy = null;
    public ?string $devCommand = null;
    public ?bool $directoryListing = null;
    public ?array $dismissedToasts = null;
    public ?string $edgeConfigId = null;
    public ?string $edgeConfigTokenId = null;
    public ?bool $enableAffectedProjectsDeployments = null;
    public ?bool $enableExternalRewriteCaching = null;
    public ?bool $enablePreviewFeedback = null;
    public ?bool $enableProductionFeedback = null;
    public ?array $env = null;
    public ?array $environmentVariables = null;
    public mixed $expiration = null;
    public ?array $features = null;
    public ?string $framework = null;
    public ?string $gitBranch = null;
    public ?array $gitComments = null;
    public ?bool $gitForkProtection = null;
    public ?bool $gitLFS = null;
    public ?array $gitProviderOptions = null;
    public ?array $gitRepository = null;
    public ?bool $hasActiveBranches = null;
    public ?bool $hasDeployments = null;
    public ?string $hostname = null;
    public ?string $id = null;
    public ?string $installCommand = null;
    public ?array $integrations = null;
    public ?array $internalContentHint = null;
    public ?array $internalRoutes = null;
    public ?array $ipBuckets = null;
    public ?array $jobs = null;
    public ?string $key = null;
    public ?array $lastAliasRequest = null;
    public ?array $lastRollbackTarget = null;
    public ?array $latestDeployments = null;
    public ?string $legacyValue = null;
    public ?string $link = null;
    public ?bool $live = null;
    public mixed $microfrontends = null;
    public ?string $name = null;
    public ?string $newProjectName = null;
    public ?string $nodeVersion = null;
    public ?array $oidcTokenConfig = null;
    public ?array $optionsAllowlist = null;
    public ?string $outputDirectory = null;
    public ?array $paidFeatures = null;
    public ?string $passiveConnectConfigurationId = null;
    public ?array $passport = null;
    public ?array $passwordProtection = null;
    public ?bool $paused = null;
    public ?array $permissions = null;
    public ?string $previewDeploymentSuffix = null;
    public ?bool $previewDeploymentsDisabled = null;
    public ?bool $productionDeploymentsFastLane = null;
    public ?string $projectId = null;
    public ?bool $protectedSourcemaps = null;
    public ?array $protectionBypass = null;
    public ?array $protectionConfig = null;
    public ?bool $publicSource = null;
    public ?string $redirect = null;
    public ?float $redirectStatusCode = null;
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
    public ?string $sunsetSecretId = null;
    public mixed $target = null;
    public ?array $targets = null;
    public ?string $tier = null;
    public ?string $token = null;
    public ?array $tracing = null;
    public ?float $transferCompletedAt = null;
    public ?float $transferStartedAt = null;
    public ?string $transferToAccountId = null;
    public ?string $transferredFromAccountId = null;
    public mixed $trustedIps = null;
    public ?array $trustedSources = null;
    public ?string $type = null;
    public ?float $updatedAt = null;
    public ?string $updatedBy = null;
    public ?array $usageStatus = null;
    public ?bool $v0 = null;
    public ?bool $v0Created = null;
    public ?string $value = null;
    public ?array $verification = null;
    public ?bool $verified = null;
    public ?string $visibility = null;
    public ?array $webAnalytics = null;
}

/** Request payload for Project#remove. */
class ProjectRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** ProjectMember entity data model. */
class ProjectMember
{
    public ?string $email = null;
    public string $id;
    public string $role;
    public ?string $uid = null;
    public ?string $username = null;
}

/** Request payload for ProjectMember#load. */
class ProjectMemberLoadMatch
{
    public string $id_or_name;
    public ?int $limit = null;
    public ?string $search = null;
    public ?int $since = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?int $until = null;
}

/** Request payload for ProjectMember#create. */
class ProjectMemberCreateData
{
    public string $id_or_name;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $email = null;
    public string $id;
    public string $role;
    public ?string $uid = null;
    public ?string $username = null;
}

/** Request payload for ProjectMember#remove. */
class ProjectMemberRemoveMatch
{
    public string $id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** ProjectRoute entity data model. */
class ProjectRoute
{
    public string $action;
    public array $actions;
    public ?string $alias = null;
    public ?array $conditions = null;
    public string $createdBy;
    public array $currentRoute;
    public string $description;
    public string $id;
    public ?bool $isLive = null;
    public ?bool $isStaging = null;
    public float $lastModified;
    public string $name;
    public ?bool $overwrite = null;
    public array $pathCondition;
    public ?array $position = null;
    public string $prompt;
    public ?bool $restore = null;
    public array $route;
    public ?array $routes = null;
    public ?float $ruleCount = null;
    public string $s3Key;
    public array $version;
}

/** Request payload for ProjectRoute#load. */
class ProjectRouteLoadMatch
{
    public string $id;
    public mixed $diff = null;
    public ?string $filter = null;
    public ?string $q = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $version_id = null;
}

/** Request payload for ProjectRoute#list. */
class ProjectRouteListMatch
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for ProjectRoute#create. */
class ProjectRouteCreateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public string $action;
    public array $actions;
    public ?string $alias = null;
    public ?array $conditions = null;
    public string $createdBy;
    public array $currentRoute;
    public string $description;
    public ?bool $isLive = null;
    public ?bool $isStaging = null;
    public float $lastModified;
    public string $name;
    public ?bool $overwrite = null;
    public array $pathCondition;
    public ?array $position = null;
    public string $prompt;
    public ?bool $restore = null;
    public array $route;
    public ?array $routes = null;
    public ?float $ruleCount = null;
    public string $s3Key;
    public array $version;
}

/** Request payload for ProjectRoute#update. */
class ProjectRouteUpdateData
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $action = null;
    public ?array $actions = null;
    public ?string $alias = null;
    public ?array $conditions = null;
    public ?string $createdBy = null;
    public ?array $currentRoute = null;
    public ?string $description = null;
    public ?bool $isLive = null;
    public ?bool $isStaging = null;
    public ?float $lastModified = null;
    public ?string $name = null;
    public ?bool $overwrite = null;
    public ?array $pathCondition = null;
    public ?array $position = null;
    public ?string $prompt = null;
    public ?bool $restore = null;
    public ?array $route = null;
    public ?array $routes = null;
    public ?float $ruleCount = null;
    public ?string $s3Key = null;
    public ?array $version = null;
}

/** Request payload for ProjectRoute#remove. */
class ProjectRouteRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Query entity data model. */
class Query
{
    public ?string $aggregation = null;
    public ?string $bucketTimezone = null;
    public ?string $endTime = null;
    public ?string $filter = null;
    public ?array $granularity = null;
    public ?array $groupBy = null;
    public ?float $limit = null;
    public string $metric;
    public ?string $orderBy = null;
    public ?string $orderDirection = null;
    public array $scope;
    public ?string $startTime = null;
}

/** Request payload for Query#create. */
class QueryCreateData
{
    public ?string $aggregation = null;
    public ?string $bucketTimezone = null;
    public ?string $endTime = null;
    public ?string $filter = null;
    public ?array $granularity = null;
    public ?array $groupBy = null;
    public ?float $limit = null;
    public string $metric;
    public ?string $orderBy = null;
    public ?string $orderDirection = null;
    public array $scope;
    public ?string $startTime = null;
}

/** Record entity data model. */
class Record
{
    public ?string $comment = null;
    public ?float $createdAt = null;
    public string $creator;
    public string $domain;
    public string $id;
    public string $name;
    public string $recordType;
    public ?float $ttl = null;
    public string $type;
    public string $value;
}

/** Request payload for Record#load. */
class RecordLoadMatch
{
    public string $id;
}

/** RollingRelease entity data model. */
class RollingRelease
{
    public array $activeStage;
    public string $advancementType;
    public array $canaryDeployment;
    public ?float $currentCanaryPercentage = null;
    public array $currentDeployment;
    public array $nextStage;
    public string $queuedDeploymentId;
    public array $stages;
    public float $startedAt;
    public string $state;
    public string $substate;
    public float $updatedAt;
}

/** Request payload for RollingRelease#load. */
class RollingReleaseLoadMatch
{
    public string $id_or_name;
    public ?string $slug = null;
    public ?string $state = null;
    public ?string $team_id = null;
}

/** Request payload for RollingRelease#create. */
class RollingReleaseCreateData
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public array $activeStage;
    public string $advancementType;
    public array $canaryDeployment;
    public ?float $currentCanaryPercentage = null;
    public array $currentDeployment;
    public array $nextStage;
    public string $queuedDeploymentId;
    public array $stages;
    public float $startedAt;
    public string $state;
    public string $substate;
    public float $updatedAt;
}

/** Request payload for RollingRelease#update. */
class RollingReleaseUpdateData
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $activeStage = null;
    public ?string $advancementType = null;
    public ?array $canaryDeployment = null;
    public ?float $currentCanaryPercentage = null;
    public ?array $currentDeployment = null;
    public ?array $nextStage = null;
    public ?string $queuedDeploymentId = null;
    public ?array $stages = null;
    public ?float $startedAt = null;
    public ?string $state = null;
    public ?string $substate = null;
    public ?float $updatedAt = null;
}

/** Request payload for RollingRelease#remove. */
class RollingReleaseRemoveMatch
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Sandbox entity data model. */
class Sandbox
{
    public array $args;
    public string $command;
    public float $createdAt;
    public ?string $creationMethod = null;
    public ?string $currentSandboxName = null;
    public ?string $currentSessionId = null;
    public ?string $currentSnapshotId = null;
    public string $cwd;
    public ?float $durationMs = null;
    public ?array $env = null;
    public float $exitCode;
    public mixed $expiration = null;
    public ?float $expiresAt = null;
    public ?array $failoverRegions = null;
    public string $id;
    public ?string $image = null;
    public array $keepLastSnapshots;
    public float $lastUsedAt;
    public ?bool $logs = null;
    public float $maxSizeBytes;
    public ?float $memory = null;
    public ?array $mounts = null;
    public string $name;
    public ?string $networkId = null;
    public mixed $networkPolicy = null;
    public ?string $parentId = null;
    public string $path;
    public ?bool $persistent = null;
    public ?array $ports = null;
    public string $projectId;
    public ?bool $recursive = null;
    public ?string $region = null;
    public ?array $regions = null;
    public ?array $resources = null;
    public bool $resumed;
    public array $routes;
    public ?string $runtime = null;
    public array $sandbox;
    public array $session;
    public string $sessionId;
    public float $sizeBytes;
    public mixed $snapshotExpiration = null;
    public mixed $source = null;
    public string $sourceSessionId;
    public float $startedAt;
    public string $status;
    public float $statusUpdatedAt;
    public ?bool $sudo = null;
    public ?array $tags = null;
    public ?int $timeout = null;
    public ?float $totalActiveCpuDurationMs = null;
    public ?float $totalDurationMs = null;
    public ?float $totalEgressBytes = null;
    public ?float $totalIngressBytes = null;
    public float $updatedAt;
    public ?float $vcpus = null;
    public ?bool $wait = null;
}

/** Request payload for Sandbox#load. */
class SandboxLoadMatch
{
    public string $id;
    public ?string $project_id = null;
    public ?bool $resume = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Sandbox#list. */
class SandboxListMatch
{
    public ?string $cursor = null;
    public ?float $limit = null;
    public ?string $name_prefix = null;
    public ?string $project = null;
    public ?string $slug = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $status = null;
    public mixed $tag = null;
    public ?string $team_id = null;
}

/** Request payload for Sandbox#create. */
class SandboxCreateData
{
    public string $name;
    public ?string $slug = null;
    public ?string $team_id = null;
    public array $args;
    public string $command;
    public float $createdAt;
    public ?string $creationMethod = null;
    public ?string $currentSandboxName = null;
    public ?string $currentSessionId = null;
    public ?string $currentSnapshotId = null;
    public string $cwd;
    public ?float $durationMs = null;
    public ?array $env = null;
    public float $exitCode;
    public mixed $expiration = null;
    public ?float $expiresAt = null;
    public ?array $failoverRegions = null;
    public string $id;
    public ?string $image = null;
    public array $keepLastSnapshots;
    public float $lastUsedAt;
    public ?bool $logs = null;
    public float $maxSizeBytes;
    public ?float $memory = null;
    public ?array $mounts = null;
    public ?string $networkId = null;
    public mixed $networkPolicy = null;
    public ?string $parentId = null;
    public string $path;
    public ?bool $persistent = null;
    public ?array $ports = null;
    public string $projectId;
    public ?bool $recursive = null;
    public ?string $region = null;
    public ?array $regions = null;
    public ?array $resources = null;
    public bool $resumed;
    public array $routes;
    public ?string $runtime = null;
    public array $sandbox;
    public array $session;
    public string $sessionId;
    public float $sizeBytes;
    public mixed $snapshotExpiration = null;
    public mixed $source = null;
    public string $sourceSessionId;
    public float $startedAt;
    public string $status;
    public float $statusUpdatedAt;
    public ?bool $sudo = null;
    public ?array $tags = null;
    public ?int $timeout = null;
    public ?float $totalActiveCpuDurationMs = null;
    public ?float $totalDurationMs = null;
    public ?float $totalEgressBytes = null;
    public ?float $totalIngressBytes = null;
    public float $updatedAt;
    public ?float $vcpus = null;
    public ?bool $wait = null;
}

/** Request payload for Sandbox#update. */
class SandboxUpdateData
{
    public string $id;
    public ?string $project_id = null;
    public ?bool $resume = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $args = null;
    public ?string $command = null;
    public ?float $createdAt = null;
    public ?string $creationMethod = null;
    public ?string $currentSandboxName = null;
    public ?string $currentSessionId = null;
    public ?string $currentSnapshotId = null;
    public ?string $cwd = null;
    public ?float $durationMs = null;
    public ?array $env = null;
    public ?float $exitCode = null;
    public mixed $expiration = null;
    public ?float $expiresAt = null;
    public ?array $failoverRegions = null;
    public ?string $image = null;
    public ?array $keepLastSnapshots = null;
    public ?float $lastUsedAt = null;
    public ?bool $logs = null;
    public ?float $maxSizeBytes = null;
    public ?float $memory = null;
    public ?array $mounts = null;
    public ?string $name = null;
    public ?string $networkId = null;
    public mixed $networkPolicy = null;
    public ?string $parentId = null;
    public ?string $path = null;
    public ?bool $persistent = null;
    public ?array $ports = null;
    public ?string $projectId = null;
    public ?bool $recursive = null;
    public ?string $region = null;
    public ?array $regions = null;
    public ?array $resources = null;
    public ?bool $resumed = null;
    public ?array $routes = null;
    public ?string $runtime = null;
    public ?array $sandbox = null;
    public ?array $session = null;
    public ?string $sessionId = null;
    public ?float $sizeBytes = null;
    public mixed $snapshotExpiration = null;
    public mixed $source = null;
    public ?string $sourceSessionId = null;
    public ?float $startedAt = null;
    public ?string $status = null;
    public ?float $statusUpdatedAt = null;
    public ?bool $sudo = null;
    public ?array $tags = null;
    public ?int $timeout = null;
    public ?float $totalActiveCpuDurationMs = null;
    public ?float $totalDurationMs = null;
    public ?float $totalEgressBytes = null;
    public ?float $totalIngressBytes = null;
    public ?float $updatedAt = null;
    public ?float $vcpus = null;
    public ?bool $wait = null;
}

/** Request payload for Sandbox#remove. */
class SandboxRemoveMatch
{
    public string $id;
    public ?bool $delete_orphan_snapshot = null;
    public ?string $project_id = null;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Schema entity data model. */
class Schema
{
    public array $aggregations;
    public string $defaultAggregation;
    public string $description;
    public array $dimensions;
    public string $id;
    public string $unit;
}

/** Request payload for Schema#load. */
class SchemaLoadMatch
{
    public string $id;
}

/** Request payload for Schema#list. */
class SchemaListMatch
{
    public ?array $aggregations = null;
    public ?string $defaultAggregation = null;
    public ?string $description = null;
    public ?array $dimensions = null;
    public ?string $id = null;
    public ?string $unit = null;
}

/** Security entity data model. */
class Security
{
    public ?string $Action = null;
    public ?string $ActorId = null;
    public string $CreatedAt;
    public ?string $DeletedAt = null;
    public string $Domain;
    public ?float $ExpiresAt = null;
    public string $Id;
    public string $Ip;
    public ?bool $IsProjectRule = null;
    public ?string $Note = null;
    public string $OwnerId;
    public ?string $ProjectId = null;
    public string $UpdatedAt;
    public string $UpdatedAtHour;
    public array $action;
    public string $action_type;
    public bool $active;
    public ?bool $allSources = null;
    public ?bool $botIdEnabled = null;
    public array $changes;
    public array $conditionGroup;
    public ?array $conditions = null;
    public float $count;
    public array $crs;
    public ?string $description = null;
    public ?string $domain = null;
    public string $endTime;
    public bool $firewallEnabled;
    public string $host;
    public string $id;
    public array $ips;
    public bool $isActive;
    public mixed $logHeaders = null;
    public ?array $managedRules = null;
    public string $name;
    public ?string $note = null;
    public string $ownerId;
    public string $projectKey;
    public ?bool $projectScope = null;
    public string $public_ip;
    public string $ruleId;
    public string $ruleName;
    public array $rules;
    public mixed $rulesets = null;
    public ?string $sourceIp = null;
    public string $startTime;
    public ?float $ttl = null;
    public string $updatedAt;
    public float $version;
}

/** Request payload for Security#load. */
class SecurityLoadMatch
{
    public ?string $config_version = null;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?float $since = null;
}

/** Request payload for Security#list. */
class SecurityListMatch
{
    public ?string $domain = null;
    public ?float $limit = null;
    public ?string $offset = null;
    public string $project_id;
    public ?bool $project_scope = null;
    public ?string $slug = null;
    public ?string $source_ip = null;
    public ?string $team_id = null;
}

/** Request payload for Security#create. */
class SecurityCreateData
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $Action = null;
    public ?string $ActorId = null;
    public string $CreatedAt;
    public ?string $DeletedAt = null;
    public string $Domain;
    public ?float $ExpiresAt = null;
    public string $Id;
    public string $Ip;
    public ?bool $IsProjectRule = null;
    public ?string $Note = null;
    public string $OwnerId;
    public ?string $ProjectId = null;
    public string $UpdatedAt;
    public string $UpdatedAtHour;
    public array $action;
    public string $action_type;
    public bool $active;
    public ?bool $allSources = null;
    public ?bool $botIdEnabled = null;
    public array $changes;
    public array $conditionGroup;
    public ?array $conditions = null;
    public float $count;
    public array $crs;
    public ?string $description = null;
    public ?string $domain = null;
    public string $endTime;
    public bool $firewallEnabled;
    public string $host;
    public string $id;
    public array $ips;
    public bool $isActive;
    public mixed $logHeaders = null;
    public ?array $managedRules = null;
    public string $name;
    public ?string $note = null;
    public string $ownerId;
    public string $projectKey;
    public ?bool $projectScope = null;
    public string $public_ip;
    public string $ruleId;
    public string $ruleName;
    public array $rules;
    public mixed $rulesets = null;
    public ?string $sourceIp = null;
    public string $startTime;
    public ?float $ttl = null;
    public string $updatedAt;
    public float $version;
}

/** Request payload for Security#update. */
class SecurityUpdateData
{
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $Action = null;
    public ?string $ActorId = null;
    public ?string $CreatedAt = null;
    public ?string $DeletedAt = null;
    public ?string $Domain = null;
    public ?float $ExpiresAt = null;
    public ?string $Id = null;
    public ?string $Ip = null;
    public ?bool $IsProjectRule = null;
    public ?string $Note = null;
    public ?string $OwnerId = null;
    public ?string $ProjectId = null;
    public ?string $UpdatedAt = null;
    public ?string $UpdatedAtHour = null;
    public ?array $action = null;
    public ?string $action_type = null;
    public ?bool $active = null;
    public ?bool $allSources = null;
    public ?bool $botIdEnabled = null;
    public ?array $changes = null;
    public ?array $conditionGroup = null;
    public ?array $conditions = null;
    public ?float $count = null;
    public ?array $crs = null;
    public ?string $description = null;
    public ?string $domain = null;
    public ?string $endTime = null;
    public ?bool $firewallEnabled = null;
    public ?string $host = null;
    public ?string $id = null;
    public ?array $ips = null;
    public ?bool $isActive = null;
    public mixed $logHeaders = null;
    public ?array $managedRules = null;
    public ?string $name = null;
    public ?string $note = null;
    public ?string $ownerId = null;
    public ?string $projectKey = null;
    public ?bool $projectScope = null;
    public ?string $public_ip = null;
    public ?string $ruleId = null;
    public ?string $ruleName = null;
    public ?array $rules = null;
    public mixed $rulesets = null;
    public ?string $sourceIp = null;
    public ?string $startTime = null;
    public ?float $ttl = null;
    public ?string $updatedAt = null;
    public ?float $version = null;
}

/** Request payload for Security#remove. */
class SecurityRemoveMatch
{
    public string $config_version;
}

/** Segment entity data model. */
class Segment
{
    public float $createdAt;
    public ?string $createdBy = null;
    public array $data;
    public ?string $description = null;
    public string $hint;
    public string $id;
    public string $label;
    public ?array $metadata = null;
    public string $projectId;
    public string $slug;
    public string $typeName;
    public float $updatedAt;
    public ?array $usedByFlags = null;
    public ?array $usedBySegments = null;
}

/** Request payload for Segment#load. */
class SegmentLoadMatch
{
    public string $id;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $with_metadata = null;
}

/** Storage entity data model. */
class Storage
{
    public ?string $access = null;
    public float $count;
    public ?string $id = null;
    public bool $isTokenExpired;
    public ?string $kind = null;
    public string $name;
    public ?array $projectFilter = null;
    public ?string $projectId = null;
    public array $projectsMetadata;
    public string $region;
    public float $size;
    public string $status;
    public ?float $totalConnectedProjects = null;
    public bool $usageQuotaExceeded;
}

/** Request payload for Storage#load. */
class StorageLoadMatch
{
    public string $id;
    public ?bool $include_guide = null;
    public ?bool $skip_metadata = null;
}

/** Request payload for Storage#create. */
class StorageCreateData
{
    public ?string $access = null;
    public float $count;
    public ?string $id = null;
    public bool $isTokenExpired;
    public ?string $kind = null;
    public string $name;
    public ?array $projectFilter = null;
    public ?string $projectId = null;
    public array $projectsMetadata;
    public string $region;
    public float $size;
    public string $status;
    public ?float $totalConnectedProjects = null;
    public bool $usageQuotaExceeded;
}

/** Request payload for Storage#remove. */
class StorageRemoveMatch
{
    public string $id;
}

/** Team entity data model. */
class Team
{
    public float $accessRequestedAt;
    public ?float $apiKeysInvalidatedAt = null;
    public ?float $appTokensInvalidatedAt = null;
    public ?array $attribution = null;
    public string $avatar;
    public array $billing;
    public array $bitbucket;
    public bool $confirmed;
    public ?array $connect = null;
    public float $createdAt;
    public string $creatorId;
    public ?array $defaultDeploymentProtection = null;
    public ?array $defaultExpirationSettings = null;
    public array $defaultPassport;
    public ?array $defaultProjectJobs = null;
    public ?array $defaultRoles = null;
    public ?array $deploymentPolicy = null;
    public string $description;
    public mixed $disableHardAutoBlocks = null;
    public ?bool $disableRepositoryDispatchEvents = null;
    public ?string $disjunctiveProductionSecretPolicy = null;
    public ?string $dpAccessRequestsMode = null;
    public ?string $emailDomain = null;
    public ?bool $enablePolyrepoBranchRouting = null;
    public ?string $enablePreviewFeedback = null;
    public ?string $enableProductionFeedback = null;
    public ?string $fallbackEnvironment = null;
    public array $github;
    public array $gitlab;
    public ?bool $hideIpAddresses = null;
    public ?bool $hideIpAddressesInLogDrains = null;
    public string $id;
    public ?float $integrationTokensInvalidatedAt = null;
    public ?string $inviteCode = null;
    public ?array $ipBuckets = null;
    public array $joinedFrom;
    public array $membership;
    public string $name;
    public array $nsnbConfig;
    public ?string $orgRootTeamId = null;
    public array $pagination;
    public ?string $parentId = null;
    public ?float $personalAccessTokensInvalidatedAt = null;
    public ?bool $platform = null;
    public ?string $previewDeploymentSuffix = null;
    public ?array $projects = null;
    public ?bool $regenerateInviteCode = null;
    public ?array $remoteCaching = null;
    public ?bool $requireVerifiedCommits = null;
    public ?array $resourceConfig = null;
    public ?string $role = null;
    public array $saml;
    public ?string $sensitiveEnvironmentVariablePolicy = null;
    public string $slug;
    public string $stagingPrefix;
    public array $strictConnectors;
    public array $strictDeploymentProtectionSettings;
    public array $strictPasswordProtectionSettings;
    public array $strictShareableLinks;
    public string $teamName;
    public ?array $teamPermissions = null;
    public string $teamSlug;
    public array $teams;
    public float $updatedAt;
}

/** Request payload for Team#load. */
class TeamLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $user_id = null;
}

/** Request payload for Team#list. */
class TeamListMatch
{
    public ?float $limit = null;
    public ?float $since = null;
    public ?float $until = null;
}

/** Request payload for Team#create. */
class TeamCreateData
{
    public float $accessRequestedAt;
    public ?float $apiKeysInvalidatedAt = null;
    public ?float $appTokensInvalidatedAt = null;
    public ?array $attribution = null;
    public string $avatar;
    public array $billing;
    public array $bitbucket;
    public bool $confirmed;
    public ?array $connect = null;
    public float $createdAt;
    public string $creatorId;
    public ?array $defaultDeploymentProtection = null;
    public ?array $defaultExpirationSettings = null;
    public array $defaultPassport;
    public ?array $defaultProjectJobs = null;
    public ?array $defaultRoles = null;
    public ?array $deploymentPolicy = null;
    public string $description;
    public mixed $disableHardAutoBlocks = null;
    public ?bool $disableRepositoryDispatchEvents = null;
    public ?string $disjunctiveProductionSecretPolicy = null;
    public ?string $dpAccessRequestsMode = null;
    public ?string $emailDomain = null;
    public ?bool $enablePolyrepoBranchRouting = null;
    public ?string $enablePreviewFeedback = null;
    public ?string $enableProductionFeedback = null;
    public ?string $fallbackEnvironment = null;
    public array $github;
    public array $gitlab;
    public ?bool $hideIpAddresses = null;
    public ?bool $hideIpAddressesInLogDrains = null;
    public string $id;
    public ?float $integrationTokensInvalidatedAt = null;
    public ?string $inviteCode = null;
    public ?array $ipBuckets = null;
    public array $joinedFrom;
    public array $membership;
    public string $name;
    public array $nsnbConfig;
    public ?string $orgRootTeamId = null;
    public array $pagination;
    public ?string $parentId = null;
    public ?float $personalAccessTokensInvalidatedAt = null;
    public ?bool $platform = null;
    public ?string $previewDeploymentSuffix = null;
    public ?array $projects = null;
    public ?bool $regenerateInviteCode = null;
    public ?array $remoteCaching = null;
    public ?bool $requireVerifiedCommits = null;
    public ?array $resourceConfig = null;
    public ?string $role = null;
    public array $saml;
    public ?string $sensitiveEnvironmentVariablePolicy = null;
    public string $slug;
    public string $stagingPrefix;
    public array $strictConnectors;
    public array $strictDeploymentProtectionSettings;
    public array $strictPasswordProtectionSettings;
    public array $strictShareableLinks;
    public string $teamName;
    public ?array $teamPermissions = null;
    public string $teamSlug;
    public array $teams;
    public float $updatedAt;
}

/** Request payload for Team#update. */
class TeamUpdateData
{
    public ?string $group_id = null;
    public string $id;
    public ?string $slug = null;
    public ?string $uid = null;
    public ?float $accessRequestedAt = null;
    public ?float $apiKeysInvalidatedAt = null;
    public ?float $appTokensInvalidatedAt = null;
    public ?array $attribution = null;
    public ?string $avatar = null;
    public ?array $billing = null;
    public ?array $bitbucket = null;
    public ?bool $confirmed = null;
    public ?array $connect = null;
    public ?float $createdAt = null;
    public ?string $creatorId = null;
    public ?array $defaultDeploymentProtection = null;
    public ?array $defaultExpirationSettings = null;
    public ?array $defaultPassport = null;
    public ?array $defaultProjectJobs = null;
    public ?array $defaultRoles = null;
    public ?array $deploymentPolicy = null;
    public ?string $description = null;
    public mixed $disableHardAutoBlocks = null;
    public ?bool $disableRepositoryDispatchEvents = null;
    public ?string $disjunctiveProductionSecretPolicy = null;
    public ?string $dpAccessRequestsMode = null;
    public ?string $emailDomain = null;
    public ?bool $enablePolyrepoBranchRouting = null;
    public ?string $enablePreviewFeedback = null;
    public ?string $enableProductionFeedback = null;
    public ?string $fallbackEnvironment = null;
    public ?array $github = null;
    public ?array $gitlab = null;
    public ?bool $hideIpAddresses = null;
    public ?bool $hideIpAddressesInLogDrains = null;
    public ?float $integrationTokensInvalidatedAt = null;
    public ?string $inviteCode = null;
    public ?array $ipBuckets = null;
    public ?array $joinedFrom = null;
    public ?array $membership = null;
    public ?string $name = null;
    public ?array $nsnbConfig = null;
    public ?string $orgRootTeamId = null;
    public ?array $pagination = null;
    public ?string $parentId = null;
    public ?float $personalAccessTokensInvalidatedAt = null;
    public ?bool $platform = null;
    public ?string $previewDeploymentSuffix = null;
    public ?array $projects = null;
    public ?bool $regenerateInviteCode = null;
    public ?array $remoteCaching = null;
    public ?bool $requireVerifiedCommits = null;
    public ?array $resourceConfig = null;
    public ?string $role = null;
    public ?array $saml = null;
    public ?string $sensitiveEnvironmentVariablePolicy = null;
    public ?string $stagingPrefix = null;
    public ?array $strictConnectors = null;
    public ?array $strictDeploymentProtectionSettings = null;
    public ?array $strictPasswordProtectionSettings = null;
    public ?array $strictShareableLinks = null;
    public ?string $teamName = null;
    public ?array $teamPermissions = null;
    public ?string $teamSlug = null;
    public ?array $teams = null;
    public ?float $updatedAt = null;
}

/** Request payload for Team#remove. */
class TeamRemoveMatch
{
    public ?string $group_id = null;
    public string $id;
    public ?string $slug = null;
    public ?string $new_default_team_id = null;
    public ?string $uid = null;
    public ?string $invite_id = null;
}

/** TldName entity data model. */
class TldName
{
}

/** Request payload for TldName#list. */
class TldNameListMatch
{
    public ?string $team_id = null;
}

/** Toggle entity data model. */
class Toggle
{
    public bool $value;
}

/** Request payload for Toggle#create. */
class ToggleCreateData
{
    public string $project_id;
    public bool $value;
}

/** User entity data model. */
class User
{
    public ?array $categories = null;
    public float $createdAt;
    public array $entities;
    public string $id;
    public mixed $payload = null;
    public mixed $principal = null;
    public string $principalId;
    public ?string $requestId = null;
    public ?string $sessionId = null;
    public string $text;
    public ?string $tokenId = null;
    public ?string $type = null;
    public array $user;
    public ?string $userId = null;
    public ?array $via = null;
    public ?array $viaIds = null;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public ?array $categories = null;
    public ?float $createdAt = null;
    public ?array $entities = null;
    public string $id;
    public mixed $payload = null;
    public mixed $principal = null;
    public ?string $principalId = null;
    public ?string $requestId = null;
    public ?string $sessionId = null;
    public ?string $text = null;
    public ?string $tokenId = null;
    public ?string $type = null;
    public ?array $user = null;
    public ?string $userId = null;
    public ?array $via = null;
    public ?array $viaIds = null;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?string $entity_id = null;
    public ?float $limit = null;
    public ?string $principal_id = null;
    public ?string $project_id = null;
    public ?string $since = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $type = null;
    public ?string $until = null;
    public ?string $user_id = null;
    public ?string $with_payload = null;
}

/** Request payload for User#remove. */
class UserRemoveMatch
{
    public ?array $categories = null;
    public ?float $createdAt = null;
    public ?array $entities = null;
    public string $id;
    public mixed $payload = null;
    public mixed $principal = null;
    public ?string $principalId = null;
    public ?string $requestId = null;
    public ?string $sessionId = null;
    public ?string $text = null;
    public ?string $tokenId = null;
    public ?string $type = null;
    public ?array $user = null;
    public ?string $userId = null;
    public ?array $via = null;
    public ?array $viaIds = null;
}

/** Vcr entity data model. */
class Vcr
{
    public ?string $arch = null;
    public string $createdAt;
    public string $id;
    public string $imageId;
    public string $kind;
    public array $layers;
    public string $manifestDigest;
    public string $name;
    public ?string $platform = null;
    public string $projectId;
    public bool $public;
    public ?string $pushedBy = null;
    public string $repositoryId;
    public float $sizeInBytes;
    public string $status;
    public string $tag;
    public array $tags;
    public string $teamId;
    public string $teamSlug;
    public string $updatedAt;
}

/** Request payload for Vcr#load. */
class VcrLoadMatch
{
    public string $id_or_name;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Vcr#list. */
class VcrListMatch
{
    public string $id_or_name;
    public ?string $cursor = null;
    public ?int $limit = null;
    public string $project_id;
    public ?string $slug = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $team_id = null;
}

/** Request payload for Vcr#create. */
class VcrCreateData
{
    public string $id_or_name;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?string $arch = null;
    public string $createdAt;
    public string $id;
    public string $imageId;
    public string $kind;
    public array $layers;
    public string $manifestDigest;
    public string $name;
    public ?string $platform = null;
    public string $projectId;
    public bool $public;
    public ?string $pushedBy = null;
    public string $repositoryId;
    public float $sizeInBytes;
    public string $status;
    public string $tag;
    public array $tags;
    public string $teamId;
    public string $teamSlug;
    public string $updatedAt;
}

/** Request payload for Vcr#update. */
class VcrUpdateData
{
    public string $project_slug;
    public string $repository_name;
    public string $team_slug;
    public ?string $uuid = null;
    public ?string $digest = null;
    public ?string $reference = null;
    public ?string $arch = null;
    public ?string $createdAt = null;
    public ?string $id = null;
    public ?string $imageId = null;
    public ?string $kind = null;
    public ?array $layers = null;
    public ?string $manifestDigest = null;
    public ?string $name = null;
    public ?string $platform = null;
    public ?string $projectId = null;
    public ?bool $public = null;
    public ?string $pushedBy = null;
    public ?string $repositoryId = null;
    public ?float $sizeInBytes = null;
    public ?string $status = null;
    public ?string $tag = null;
    public ?array $tags = null;
    public ?string $teamId = null;
    public ?string $teamSlug = null;
    public ?string $updatedAt = null;
}

/** Request payload for Vcr#remove. */
class VcrRemoveMatch
{
    public string $id_or_name;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** VcrImageList entity data model. */
class VcrImageList
{
    public ?string $arch = null;
    public string $createdAt;
    public string $id;
    public string $kind;
    public string $manifestDigest;
    public ?string $platform = null;
    public ?string $pushedBy = null;
    public string $repositoryId;
    public float $sizeInBytes;
    public string $status;
    public array $tags;
}

/** Request payload for VcrImageList#list. */
class VcrImageListListMatch
{
    public string $id_or_name;
    public ?string $cursor = null;
    public ?int $limit = null;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?bool $untagged = null;
}

/** VcrRepositoryList entity data model. */
class VcrRepositoryList
{
    public string $createdAt;
    public string $id;
    public string $name;
    public string $projectId;
    public bool $public;
    public string $updatedAt;
}

/** Request payload for VcrRepositoryList#list. */
class VcrRepositoryListListMatch
{
    public ?string $cursor = null;
    public ?int $limit = null;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** VcrRepositoryPermissionList entity data model. */
class VcrRepositoryPermissionList
{
    public string $createdAt;
    public string $repositoryId;
    public string $teamId;
    public string $teamSlug;
}

/** Request payload for VcrRepositoryPermissionList#list. */
class VcrRepositoryPermissionListListMatch
{
    public string $id_or_name;
    public ?string $cursor = null;
    public ?int $limit = null;
    public string $project_id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** WebAnalytics entity data model. */
class WebAnalytics
{
    public mixed $data;
    public array $query;
    public float $version;
}

/** Request payload for WebAnalytics#load. */
class WebAnalyticsLoadMatch
{
    public ?array $by = null;
    public ?string $filter = null;
    public ?int $limit = null;
    public string $project_id;
    public mixed $since = null;
    public ?string $slug = null;
    public ?string $team_id = null;
    public mixed $until = null;
}

/** Webhook entity data model. */
class Webhook
{
    public ?array $alertRuleIds = null;
    public float $createdAt;
    public array $events;
    public string $id;
    public string $ownerId;
    public ?array $projectIds = null;
    public string $secret;
    public float $updatedAt;
    public string $url;
}

/** Request payload for Webhook#load. */
class WebhookLoadMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public ?string $slug = null;
    public ?string $team_id = null;
    public ?array $alertRuleIds = null;
    public float $createdAt;
    public array $events;
    public string $id;
    public string $ownerId;
    public ?array $projectIds = null;
    public string $secret;
    public float $updatedAt;
    public string $url;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public string $id;
    public ?string $slug = null;
    public ?string $team_id = null;
}

