// Typed models for the Vercel SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/vercel-sdk/go/core"
)

// AccessGroup is the typed data model for the access_group entity.
type AccessGroup struct {
	AccessGroupId string `json:"accessGroupId"`
	CreatedAt string `json:"createdAt"`
	Entitlements *[]any `json:"entitlements,omitempty"`
	Id *string `json:"id,omitempty"`
	IsDsyncManaged bool `json:"isDsyncManaged"`
	MembersCount float64 `json:"membersCount"`
	MembersToAdd *[]any `json:"membersToAdd,omitempty"`
	MembersToRemove *[]any `json:"membersToRemove,omitempty"`
	Name string `json:"name"`
	ProjectId string `json:"projectId"`
	Projects *[]any `json:"projects,omitempty"`
	ProjectsCount float64 `json:"projectsCount"`
	Role string `json:"role"`
	TeamId string `json:"teamId"`
	TeamPermissions *[]any `json:"teamPermissions,omitempty"`
	TeamRoles *[]any `json:"teamRoles,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// AccessGroupLoadMatch is the typed request payload for AccessGroup.LoadTyped.
type AccessGroupLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AccessGroupListMatch is the typed request payload for AccessGroup.ListTyped.
type AccessGroupListMatch struct {
	IdOrName string `json:"id_or_name"`
	Limit *int `json:"limit,omitempty"`
	Next *string `json:"next,omitempty"`
	Search *string `json:"search,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AccessGroupCreateData is the typed request payload for AccessGroup.CreateTyped.
type AccessGroupCreateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AccessGroupId string `json:"accessGroupId"`
	CreatedAt string `json:"createdAt"`
	Entitlements *[]any `json:"entitlements,omitempty"`
	IsDsyncManaged bool `json:"isDsyncManaged"`
	MembersCount float64 `json:"membersCount"`
	MembersToAdd *[]any `json:"membersToAdd,omitempty"`
	MembersToRemove *[]any `json:"membersToRemove,omitempty"`
	Name string `json:"name"`
	ProjectId string `json:"projectId"`
	Projects *[]any `json:"projects,omitempty"`
	ProjectsCount float64 `json:"projectsCount"`
	Role string `json:"role"`
	TeamId2 string `json:"teamId"`
	TeamPermissions *[]any `json:"teamPermissions,omitempty"`
	TeamRoles *[]any `json:"teamRoles,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// AccessGroupUpdateData is the typed request payload for AccessGroup.UpdateTyped.
type AccessGroupUpdateData struct {
	AccessGroupId string `json:"access_group_id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AccessGroupId2 *string `json:"accessGroupId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Entitlements *[]any `json:"entitlements,omitempty"`
	Id *string `json:"id,omitempty"`
	IsDsyncManaged *bool `json:"isDsyncManaged,omitempty"`
	MembersCount *float64 `json:"membersCount,omitempty"`
	MembersToAdd *[]any `json:"membersToAdd,omitempty"`
	MembersToRemove *[]any `json:"membersToRemove,omitempty"`
	Name *string `json:"name,omitempty"`
	ProjectId2 *string `json:"projectId,omitempty"`
	Projects *[]any `json:"projects,omitempty"`
	ProjectsCount *float64 `json:"projectsCount,omitempty"`
	Role *string `json:"role,omitempty"`
	TeamId2 *string `json:"teamId,omitempty"`
	TeamPermissions *[]any `json:"teamPermissions,omitempty"`
	TeamRoles *[]any `json:"teamRoles,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// AccessGroupRemoveMatch is the typed request payload for AccessGroup.RemoveTyped.
type AccessGroupRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AiGateway is the typed data model for the ai_gateway entity.
type AiGateway struct {
}

// AiGatewayRemoveMatch is the typed request payload for AiGateway.RemoveTyped.
type AiGatewayRemoveMatch struct {
	RuleId string `json:"rule_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AiGatewayRule is the typed data model for the ai_gateway_rule entity.
type AiGatewayRule struct {
	Action *map[string]any `json:"action,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	Match *map[string]any `json:"match,omitempty"`
	OwnerId string `json:"ownerId"`
	RuleId string `json:"ruleId"`
	Type string `json:"type"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
}

// AiGatewayRuleCreateData is the typed request payload for AiGatewayRule.CreateTyped.
type AiGatewayRuleCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Action *map[string]any `json:"action,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	Match *map[string]any `json:"match,omitempty"`
	OwnerId string `json:"ownerId"`
	RuleId string `json:"ruleId"`
	Type string `json:"type"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
}

// AiGatewayRuleUpdateData is the typed request payload for AiGatewayRule.UpdateTyped.
type AiGatewayRuleUpdateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Action *map[string]any `json:"action,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Match *map[string]any `json:"match,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	RuleId *string `json:"ruleId,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
}

// AiGatewayRuleList is the typed data model for the ai_gateway_rule_list entity.
type AiGatewayRuleList struct {
	Action *map[string]any `json:"action,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	Match *map[string]any `json:"match,omitempty"`
	OwnerId string `json:"ownerId"`
	RuleId string `json:"ruleId"`
	Type string `json:"type"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
}

// AiGatewayRuleListListMatch is the typed request payload for AiGatewayRuleList.ListTyped.
type AiGatewayRuleListListMatch struct {
	IncludeDisabled *string `json:"include_disabled,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AiGatewayVirtualModelConfig is the typed data model for the ai_gateway_virtual_model_config entity.
type AiGatewayVirtualModelConfig struct {
	AllowFallbackFromFast *bool `json:"allowFallbackFromFast,omitempty"`
	BaseUrl *string `json:"baseUrl,omitempty"`
	ByokCredentialIds *[]any `json:"byokCredentialIds,omitempty"`
	Caching *string `json:"caching,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Deleted bool `json:"deleted"`
	Description *string `json:"description,omitempty"`
	DisallowPromptTraining *bool `json:"disallowPromptTraining,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Has *[]any `json:"has,omitempty"`
	HipaaCompliant *bool `json:"hipaaCompliant,omitempty"`
	Id *string `json:"id,omitempty"`
	InferenceRegion *map[string]any `json:"inferenceRegion,omitempty"`
	InstanceId *string `json:"instanceId,omitempty"`
	Kind string `json:"kind"`
	ModelSlug *string `json:"modelSlug,omitempty"`
	Models *[]any `json:"models,omitempty"`
	ObservabilityTags *[]any `json:"observabilityTags,omitempty"`
	OwnerId string `json:"ownerId"`
	ProviderOnly *[]any `json:"providerOnly,omitempty"`
	ProviderOptions *map[string]any `json:"providerOptions,omitempty"`
	ProviderOrder *[]any `json:"providerOrder,omitempty"`
	ProviderTimeouts *map[string]any `json:"providerTimeouts,omitempty"`
	Requires *[]any `json:"requires,omitempty"`
	Selector *string `json:"selector,omitempty"`
	ServiceTier *string `json:"serviceTier,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Speed *string `json:"speed,omitempty"`
	Status string `json:"status"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	VirtualModelSlug string `json:"virtualModelSlug"`
	Visibility *string `json:"visibility,omitempty"`
	ZeroDataRetention *bool `json:"zeroDataRetention,omitempty"`
}

// AiGatewayVirtualModelConfigLoadMatch is the typed request payload for AiGatewayVirtualModelConfig.LoadTyped.
type AiGatewayVirtualModelConfigLoadMatch struct {
	Id string `json:"id"`
	OwnerId *string `json:"owner_id,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AiGatewayVirtualModelConfigCreateData is the typed request payload for AiGatewayVirtualModelConfig.CreateTyped.
type AiGatewayVirtualModelConfigCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AllowFallbackFromFast *bool `json:"allowFallbackFromFast,omitempty"`
	BaseUrl *string `json:"baseUrl,omitempty"`
	ByokCredentialIds *[]any `json:"byokCredentialIds,omitempty"`
	Caching *string `json:"caching,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Deleted bool `json:"deleted"`
	Description *string `json:"description,omitempty"`
	DisallowPromptTraining *bool `json:"disallowPromptTraining,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Has *[]any `json:"has,omitempty"`
	HipaaCompliant *bool `json:"hipaaCompliant,omitempty"`
	Id *string `json:"id,omitempty"`
	InferenceRegion *map[string]any `json:"inferenceRegion,omitempty"`
	InstanceId *string `json:"instanceId,omitempty"`
	Kind string `json:"kind"`
	ModelSlug *string `json:"modelSlug,omitempty"`
	Models *[]any `json:"models,omitempty"`
	ObservabilityTags *[]any `json:"observabilityTags,omitempty"`
	OwnerId string `json:"ownerId"`
	ProviderOnly *[]any `json:"providerOnly,omitempty"`
	ProviderOptions *map[string]any `json:"providerOptions,omitempty"`
	ProviderOrder *[]any `json:"providerOrder,omitempty"`
	ProviderTimeouts *map[string]any `json:"providerTimeouts,omitempty"`
	Requires *[]any `json:"requires,omitempty"`
	Selector *string `json:"selector,omitempty"`
	ServiceTier *string `json:"serviceTier,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Speed *string `json:"speed,omitempty"`
	Status string `json:"status"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	VirtualModelSlug string `json:"virtualModelSlug"`
	Visibility *string `json:"visibility,omitempty"`
	ZeroDataRetention *bool `json:"zeroDataRetention,omitempty"`
}

// AiGatewayVirtualModelConfigUpdateData is the typed request payload for AiGatewayVirtualModelConfig.UpdateTyped.
type AiGatewayVirtualModelConfigUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AllowFallbackFromFast *bool `json:"allowFallbackFromFast,omitempty"`
	BaseUrl *string `json:"baseUrl,omitempty"`
	ByokCredentialIds *[]any `json:"byokCredentialIds,omitempty"`
	Caching *string `json:"caching,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Description *string `json:"description,omitempty"`
	DisallowPromptTraining *bool `json:"disallowPromptTraining,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Has *[]any `json:"has,omitempty"`
	HipaaCompliant *bool `json:"hipaaCompliant,omitempty"`
	InferenceRegion *map[string]any `json:"inferenceRegion,omitempty"`
	InstanceId *string `json:"instanceId,omitempty"`
	Kind *string `json:"kind,omitempty"`
	ModelSlug *string `json:"modelSlug,omitempty"`
	Models *[]any `json:"models,omitempty"`
	ObservabilityTags *[]any `json:"observabilityTags,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	ProviderOnly *[]any `json:"providerOnly,omitempty"`
	ProviderOptions *map[string]any `json:"providerOptions,omitempty"`
	ProviderOrder *[]any `json:"providerOrder,omitempty"`
	ProviderTimeouts *map[string]any `json:"providerTimeouts,omitempty"`
	Requires *[]any `json:"requires,omitempty"`
	Selector *string `json:"selector,omitempty"`
	ServiceTier *string `json:"serviceTier,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Speed *string `json:"speed,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	VirtualModelSlug *string `json:"virtualModelSlug,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	ZeroDataRetention *bool `json:"zeroDataRetention,omitempty"`
}

// AiGatewayVirtualModelConfigList is the typed data model for the ai_gateway_virtual_model_config_list entity.
type AiGatewayVirtualModelConfigList struct {
	AllowFallbackFromFast *bool `json:"allowFallbackFromFast,omitempty"`
	BaseUrl *string `json:"baseUrl,omitempty"`
	ByokCredentialIds *[]any `json:"byokCredentialIds,omitempty"`
	Caching *string `json:"caching,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Deleted bool `json:"deleted"`
	Description *string `json:"description,omitempty"`
	DisallowPromptTraining *bool `json:"disallowPromptTraining,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Has *[]any `json:"has,omitempty"`
	HipaaCompliant *bool `json:"hipaaCompliant,omitempty"`
	InferenceRegion *map[string]any `json:"inferenceRegion,omitempty"`
	InstanceId *string `json:"instanceId,omitempty"`
	Kind string `json:"kind"`
	ModelSlug *string `json:"modelSlug,omitempty"`
	Models *[]any `json:"models,omitempty"`
	ObservabilityTags *[]any `json:"observabilityTags,omitempty"`
	OwnerId string `json:"ownerId"`
	ProviderOnly *[]any `json:"providerOnly,omitempty"`
	ProviderOptions *map[string]any `json:"providerOptions,omitempty"`
	ProviderOrder *[]any `json:"providerOrder,omitempty"`
	ProviderTimeouts *map[string]any `json:"providerTimeouts,omitempty"`
	Requires *[]any `json:"requires,omitempty"`
	Selector *string `json:"selector,omitempty"`
	ServiceTier *string `json:"serviceTier,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Speed *string `json:"speed,omitempty"`
	Status string `json:"status"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	VirtualModelSlug string `json:"virtualModelSlug"`
	Visibility *string `json:"visibility,omitempty"`
	ZeroDataRetention *bool `json:"zeroDataRetention,omitempty"`
}

// AiGatewayVirtualModelConfigListListMatch is the typed request payload for AiGatewayVirtualModelConfigList.ListTyped.
type AiGatewayVirtualModelConfigListListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Alias is the typed data model for the alias entity.
type Alias struct {
	Alias string `json:"alias"`
	Created string `json:"created"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator map[string]any `json:"creator"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	Deployment map[string]any `json:"deployment"`
	DeploymentId string `json:"deploymentId"`
	Id *string `json:"id,omitempty"`
	Microfrontends map[string]any `json:"microfrontends"`
	OldDeploymentId *string `json:"oldDeploymentId,omitempty"`
	ProjectId string `json:"projectId"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	Redirect *string `json:"redirect,omitempty"`
	RedirectStatusCode *float64 `json:"redirectStatusCode,omitempty"`
	Uid string `json:"uid"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// AliasLoadMatch is the typed request payload for Alias.LoadTyped.
type AliasLoadMatch struct {
	Id string `json:"id"`
	From *float64 `json:"from,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Since *float64 `json:"since,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Until *float64 `json:"until,omitempty"`
}

// AliasListMatch is the typed request payload for Alias.ListTyped.
type AliasListMatch struct {
	Domain *any `json:"domain,omitempty"`
	From *float64 `json:"from,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	RollbackDeploymentId *string `json:"rollback_deployment_id,omitempty"`
	Since *float64 `json:"since,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Until *float64 `json:"until,omitempty"`
}

// AliasCreateData is the typed request payload for Alias.CreateTyped.
type AliasCreateData struct {
	DeploymentId string `json:"deployment_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Alias string `json:"alias"`
	Created string `json:"created"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator map[string]any `json:"creator"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	Deployment map[string]any `json:"deployment"`
	DeploymentId2 string `json:"deploymentId"`
	Id *string `json:"id,omitempty"`
	Microfrontends map[string]any `json:"microfrontends"`
	OldDeploymentId *string `json:"oldDeploymentId,omitempty"`
	ProjectId string `json:"projectId"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	Redirect *string `json:"redirect,omitempty"`
	RedirectStatusCode *float64 `json:"redirectStatusCode,omitempty"`
	Uid string `json:"uid"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// AliasUpdateData is the typed request payload for Alias.UpdateTyped.
type AliasUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Alias *string `json:"alias,omitempty"`
	Created *string `json:"created,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	Deployment *map[string]any `json:"deployment,omitempty"`
	DeploymentId *string `json:"deploymentId,omitempty"`
	Microfrontends *map[string]any `json:"microfrontends,omitempty"`
	OldDeploymentId *string `json:"oldDeploymentId,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	Redirect *string `json:"redirect,omitempty"`
	RedirectStatusCode *float64 `json:"redirectStatusCode,omitempty"`
	Uid *string `json:"uid,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// AliasRemoveMatch is the typed request payload for Alias.RemoveTyped.
type AliasRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ApiAiGateway is the typed data model for the api_ai_gateway entity.
type ApiAiGateway struct {
}

// ApiAiGatewayLoadMatch is the typed request payload for ApiAiGateway.LoadTyped.
type ApiAiGatewayLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	VirtualModelSlug *string `json:"virtual_model_slug,omitempty"`
}

// ApiAiGatewayRemoveMatch is the typed request payload for ApiAiGateway.RemoveTyped.
type ApiAiGatewayRemoveMatch struct {
	VmcSlug string `json:"vmc_slug"`
	ActingIp *string `json:"acting_ip,omitempty"`
	ActingUserAgent *string `json:"acting_user_agent,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
}

// ApiKey is the typed data model for the api_key entity.
type ApiKey struct {
	ActiveAt float64 `json:"activeAt"`
	AiGatewayQuota map[string]any `json:"aiGatewayQuota"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy string `json:"createdBy"`
	CreatedByAppId string `json:"createdByAppId"`
	ExpiresAt float64 `json:"expiresAt"`
	Id string `json:"id"`
	LeakedAt float64 `json:"leakedAt"`
	LeakedUrl string `json:"leakedUrl"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	PartialKey string `json:"partialKey"`
	ProjectId string `json:"projectId"`
	Purpose string `json:"purpose"`
	Quota map[string]any `json:"quota"`
	TeamId string `json:"teamId"`
}

// ApiKeyCreateData is the typed request payload for ApiKey.CreateTyped.
type ApiKeyCreateData struct {
	ActiveAt float64 `json:"activeAt"`
	AiGatewayQuota map[string]any `json:"aiGatewayQuota"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy string `json:"createdBy"`
	CreatedByAppId string `json:"createdByAppId"`
	ExpiresAt float64 `json:"expiresAt"`
	Id string `json:"id"`
	LeakedAt float64 `json:"leakedAt"`
	LeakedUrl string `json:"leakedUrl"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	PartialKey string `json:"partialKey"`
	ProjectId string `json:"projectId"`
	Purpose string `json:"purpose"`
	Quota map[string]any `json:"quota"`
	TeamId string `json:"teamId"`
}

// Artifact is the typed data model for the artifact entity.
type Artifact struct {
	Hashes []any `json:"hashes"`
	Id *string `json:"id,omitempty"`
}

// ArtifactLoadMatch is the typed request payload for Artifact.LoadTyped.
type ArtifactLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ArtifactCreateData is the typed request payload for Artifact.CreateTyped.
type ArtifactCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Hashes []any `json:"hashes"`
	Id *string `json:"id,omitempty"`
}

// ArtifactUpdateData is the typed request payload for Artifact.UpdateTyped.
type ArtifactUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Hashes *[]any `json:"hashes,omitempty"`
}

// ArtifactRemoveMatch is the typed request payload for Artifact.RemoveTyped.
type ArtifactRemoveMatch struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Authentication is the typed data model for the authentication entity.
type Authentication struct {
	ActiveAt float64 `json:"activeAt"`
	CreatedAt float64 `json:"createdAt"`
	ExpiresAt *float64 `json:"expiresAt,omitempty"`
	Id string `json:"id"`
	LeakedAt *float64 `json:"leakedAt,omitempty"`
	LeakedUrl *string `json:"leakedUrl,omitempty"`
	Name string `json:"name"`
	Origin *string `json:"origin,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	RevokedAt *float64 `json:"revokedAt,omitempty"`
	Scopes *[]any `json:"scopes,omitempty"`
	Suffix *string `json:"suffix,omitempty"`
	Type string `json:"type"`
}

// AuthenticationLoadMatch is the typed request payload for Authentication.LoadTyped.
type AuthenticationLoadMatch struct {
	TokenId string `json:"token_id"`
}

// AuthenticationCreateData is the typed request payload for Authentication.CreateTyped.
type AuthenticationCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ActiveAt float64 `json:"activeAt"`
	CreatedAt float64 `json:"createdAt"`
	ExpiresAt *float64 `json:"expiresAt,omitempty"`
	Id string `json:"id"`
	LeakedAt *float64 `json:"leakedAt,omitempty"`
	LeakedUrl *string `json:"leakedUrl,omitempty"`
	Name string `json:"name"`
	Origin *string `json:"origin,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	RevokedAt *float64 `json:"revokedAt,omitempty"`
	Scopes *[]any `json:"scopes,omitempty"`
	Suffix *string `json:"suffix,omitempty"`
	Type string `json:"type"`
}

// AuthenticationRemoveMatch is the typed request payload for Authentication.RemoveTyped.
type AuthenticationRemoveMatch struct {
	TokenId string `json:"token_id"`
}

// Billing is the typed data model for the billing entity.
type Billing struct {
}

// BillingLoadMatch is the typed request payload for Billing.LoadTyped.
type BillingLoadMatch struct {
	From string `json:"from"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	To string `json:"to"`
}

// BillingCreateData is the typed request payload for Billing.CreateTyped.
type BillingCreateData struct {
	Slug *string `json:"slug,omitempty"`
	Source *string `json:"source,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// BulkRedirect is the typed data model for the bulk_redirect entity.
type BulkRedirect struct {
	Alias *string `json:"alias,omitempty"`
	CreatedBy string `json:"createdBy"`
	Id string `json:"id"`
	IsLive *bool `json:"isLive,omitempty"`
	IsStaging *bool `json:"isStaging,omitempty"`
	Key string `json:"key"`
	LastModified float64 `json:"lastModified"`
	Name *string `json:"name,omitempty"`
	Overwrite *bool `json:"overwrite,omitempty"`
	ProjectId string `json:"projectId"`
	Redirect map[string]any `json:"redirect"`
	RedirectCount *float64 `json:"redirectCount,omitempty"`
	Redirects *[]any `json:"redirects,omitempty"`
	Restore *bool `json:"restore,omitempty"`
	TeamId string `json:"teamId"`
}

// BulkRedirectLoadMatch is the typed request payload for BulkRedirect.LoadTyped.
type BulkRedirectLoadMatch struct {
	Diff *any `json:"diff,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	ProjectId string `json:"project_id"`
	Q *string `json:"q,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
}

// BulkRedirectListMatch is the typed request payload for BulkRedirect.ListTyped.
type BulkRedirectListMatch struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// BulkRedirectCreateData is the typed request payload for BulkRedirect.CreateTyped.
type BulkRedirectCreateData struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Alias *string `json:"alias,omitempty"`
	CreatedBy string `json:"createdBy"`
	Id string `json:"id"`
	IsLive *bool `json:"isLive,omitempty"`
	IsStaging *bool `json:"isStaging,omitempty"`
	Key string `json:"key"`
	LastModified float64 `json:"lastModified"`
	Name *string `json:"name,omitempty"`
	Overwrite *bool `json:"overwrite,omitempty"`
	ProjectId2 string `json:"projectId"`
	Redirect map[string]any `json:"redirect"`
	RedirectCount *float64 `json:"redirectCount,omitempty"`
	Redirects *[]any `json:"redirects,omitempty"`
	Restore *bool `json:"restore,omitempty"`
	TeamId2 string `json:"teamId"`
}

// BulkRedirectUpdateData is the typed request payload for BulkRedirect.UpdateTyped.
type BulkRedirectUpdateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Alias *string `json:"alias,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Id *string `json:"id,omitempty"`
	IsLive *bool `json:"isLive,omitempty"`
	IsStaging *bool `json:"isStaging,omitempty"`
	Key *string `json:"key,omitempty"`
	LastModified *float64 `json:"lastModified,omitempty"`
	Name *string `json:"name,omitempty"`
	Overwrite *bool `json:"overwrite,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	Redirect *map[string]any `json:"redirect,omitempty"`
	RedirectCount *float64 `json:"redirectCount,omitempty"`
	Redirects *[]any `json:"redirects,omitempty"`
	Restore *bool `json:"restore,omitempty"`
	TeamId2 *string `json:"teamId,omitempty"`
}

// BulkRedirectRemoveMatch is the typed request payload for BulkRedirect.RemoveTyped.
type BulkRedirectRemoveMatch struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Cert is the typed data model for the cert entity.
type Cert struct {
	AutoRenew bool `json:"autoRenew"`
	Ca string `json:"ca"`
	Cert string `json:"cert"`
	Cns []any `json:"cns"`
	CreatedAt float64 `json:"createdAt"`
	ExpiresAt float64 `json:"expiresAt"`
	Id string `json:"id"`
	Key string `json:"key"`
	SkipValidation *bool `json:"skipValidation,omitempty"`
}

// CertLoadMatch is the typed request payload for Cert.LoadTyped.
type CertLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// CertListMatch is the typed request payload for Cert.ListTyped.
type CertListMatch struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// CertCreateData is the typed request payload for Cert.CreateTyped.
type CertCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AutoRenew bool `json:"autoRenew"`
	Ca string `json:"ca"`
	Cert string `json:"cert"`
	Cns []any `json:"cns"`
	CreatedAt float64 `json:"createdAt"`
	ExpiresAt float64 `json:"expiresAt"`
	Id string `json:"id"`
	Key string `json:"key"`
	SkipValidation *bool `json:"skipValidation,omitempty"`
}

// CertUpdateData is the typed request payload for Cert.UpdateTyped.
type CertUpdateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AutoRenew *bool `json:"autoRenew,omitempty"`
	Ca *string `json:"ca,omitempty"`
	Cert *string `json:"cert,omitempty"`
	Cns *[]any `json:"cns,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	ExpiresAt *float64 `json:"expiresAt,omitempty"`
	Id *string `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	SkipValidation *bool `json:"skipValidation,omitempty"`
}

// CertRemoveMatch is the typed request payload for Cert.RemoveTyped.
type CertRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Check is the typed data model for the check entity.
type Check struct {
	Blocking bool `json:"blocking"`
	Blocks string `json:"blocks"`
	CompletedAt *float64 `json:"completedAt,omitempty"`
	Conclusion *any `json:"conclusion,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	DetailsUrl *string `json:"detailsUrl,omitempty"`
	ExternalId *string `json:"externalId,omitempty"`
	Id string `json:"id"`
	IntegrationId string `json:"integrationId"`
	IsRerequestable bool `json:"isRerequestable"`
	Metrics map[string]any `json:"metrics"`
	Name string `json:"name"`
	Output *map[string]any `json:"output,omitempty"`
	OwnerId string `json:"ownerId"`
	Path *string `json:"path,omitempty"`
	ProjectId string `json:"projectId"`
	Requires string `json:"requires"`
	Rerequestable *bool `json:"rerequestable,omitempty"`
	Source any `json:"source"`
	SourceIntegrationConfigurationId *string `json:"sourceIntegrationConfigurationId,omitempty"`
	SourceKind string `json:"sourceKind"`
	StartedAt *float64 `json:"startedAt,omitempty"`
	Status *any `json:"status,omitempty"`
	Targets []any `json:"targets"`
	Timeout float64 `json:"timeout"`
	UpdatedAt float64 `json:"updatedAt"`
}

// CheckLoadMatch is the typed request payload for Check.LoadTyped.
type CheckLoadMatch struct {
	DeploymentId *string `json:"deployment_id,omitempty"`
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
}

// CheckListMatch is the typed request payload for Check.ListTyped.
type CheckListMatch struct {
	ProjectIdOrName string `json:"project_id_or_name"`
	Block *string `json:"block,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// CheckCreateData is the typed request payload for Check.CreateTyped.
type CheckCreateData struct {
	DeploymentId string `json:"deployment_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Blocking bool `json:"blocking"`
	Blocks string `json:"blocks"`
	CompletedAt *float64 `json:"completedAt,omitempty"`
	Conclusion *any `json:"conclusion,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	DetailsUrl *string `json:"detailsUrl,omitempty"`
	ExternalId *string `json:"externalId,omitempty"`
	Id string `json:"id"`
	IntegrationId string `json:"integrationId"`
	IsRerequestable bool `json:"isRerequestable"`
	Metrics map[string]any `json:"metrics"`
	Name string `json:"name"`
	Output *map[string]any `json:"output,omitempty"`
	OwnerId string `json:"ownerId"`
	Path *string `json:"path,omitempty"`
	ProjectId string `json:"projectId"`
	Requires string `json:"requires"`
	Rerequestable *bool `json:"rerequestable,omitempty"`
	Source any `json:"source"`
	SourceIntegrationConfigurationId *string `json:"sourceIntegrationConfigurationId,omitempty"`
	SourceKind string `json:"sourceKind"`
	StartedAt *float64 `json:"startedAt,omitempty"`
	Status *any `json:"status,omitempty"`
	Targets []any `json:"targets"`
	Timeout float64 `json:"timeout"`
	UpdatedAt float64 `json:"updatedAt"`
}

// CheckUpdateData is the typed request payload for Check.UpdateTyped.
type CheckUpdateData struct {
	DeploymentId *string `json:"deployment_id,omitempty"`
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Blocking *bool `json:"blocking,omitempty"`
	Blocks *string `json:"blocks,omitempty"`
	CompletedAt *float64 `json:"completedAt,omitempty"`
	Conclusion *any `json:"conclusion,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	DetailsUrl *string `json:"detailsUrl,omitempty"`
	ExternalId *string `json:"externalId,omitempty"`
	IntegrationId *string `json:"integrationId,omitempty"`
	IsRerequestable *bool `json:"isRerequestable,omitempty"`
	Metrics *map[string]any `json:"metrics,omitempty"`
	Name *string `json:"name,omitempty"`
	Output *map[string]any `json:"output,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	Path *string `json:"path,omitempty"`
	ProjectId2 *string `json:"projectId,omitempty"`
	Requires *string `json:"requires,omitempty"`
	Rerequestable *bool `json:"rerequestable,omitempty"`
	Source *any `json:"source,omitempty"`
	SourceIntegrationConfigurationId *string `json:"sourceIntegrationConfigurationId,omitempty"`
	SourceKind *string `json:"sourceKind,omitempty"`
	StartedAt *float64 `json:"startedAt,omitempty"`
	Status *any `json:"status,omitempty"`
	Targets *[]any `json:"targets,omitempty"`
	Timeout *float64 `json:"timeout,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// CheckRemoveMatch is the typed request payload for Check.RemoveTyped.
type CheckRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ChecksV2 is the typed data model for the checks_v2 entity.
type ChecksV2 struct {
	CheckId string `json:"checkId"`
	CompletedAt *float64 `json:"completedAt,omitempty"`
	Conclusion *string `json:"conclusion,omitempty"`
	ConclusionText *string `json:"conclusionText,omitempty"`
	ExternalId *string `json:"externalId,omitempty"`
	ExternalUrl *string `json:"externalUrl,omitempty"`
	Output *map[string]any `json:"output,omitempty"`
	Runs []any `json:"runs"`
	Status *string `json:"status,omitempty"`
}

// ChecksV2LoadMatch is the typed request payload for ChecksV2.LoadTyped.
type ChecksV2LoadMatch struct {
	CheckRunId string `json:"check_run_id"`
	DeploymentId string `json:"deployment_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ChecksV2ListMatch is the typed request payload for ChecksV2.ListTyped.
type ChecksV2ListMatch struct {
	DeploymentId string `json:"deployment_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ChecksV2CreateData is the typed request payload for ChecksV2.CreateTyped.
type ChecksV2CreateData struct {
	DeploymentId string `json:"deployment_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	CheckId string `json:"checkId"`
	CompletedAt *float64 `json:"completedAt,omitempty"`
	Conclusion *string `json:"conclusion,omitempty"`
	ConclusionText *string `json:"conclusionText,omitempty"`
	ExternalId *string `json:"externalId,omitempty"`
	ExternalUrl *string `json:"externalUrl,omitempty"`
	Output *map[string]any `json:"output,omitempty"`
	Runs []any `json:"runs"`
	Status *string `json:"status,omitempty"`
}

// ChecksV2UpdateData is the typed request payload for ChecksV2.UpdateTyped.
type ChecksV2UpdateData struct {
	CheckRunId string `json:"check_run_id"`
	DeploymentId string `json:"deployment_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	CheckId *string `json:"checkId,omitempty"`
	CompletedAt *float64 `json:"completedAt,omitempty"`
	Conclusion *string `json:"conclusion,omitempty"`
	ConclusionText *string `json:"conclusionText,omitempty"`
	ExternalId *string `json:"externalId,omitempty"`
	ExternalUrl *string `json:"externalUrl,omitempty"`
	Output *map[string]any `json:"output,omitempty"`
	Runs *[]any `json:"runs,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Connect is the typed data model for the connect entity.
type Connect struct {
	AdditionalParams *map[string]any `json:"additionalParams,omitempty"`
	Audience *[]any `json:"audience,omitempty"`
	AuthorizationDetails *[]any `json:"authorizationDetails,omitempty"`
	AuthorizationId *string `json:"authorizationId,omitempty"`
	Claims *map[string]any `json:"claims,omitempty"`
	Connector map[string]any `json:"connector"`
	DeviceCode *bool `json:"deviceCode,omitempty"`
	DisplayName string `json:"displayName"`
	ExpiresAt float64 `json:"expiresAt"`
	ExpiresInMs *float64 `json:"expiresInMs,omitempty"`
	ExternalSubject *string `json:"externalSubject,omitempty"`
	Id string `json:"id"`
	InstallationId *string `json:"installationId,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	Prompt *string `json:"prompt,omitempty"`
	Resources *[]any `json:"resources,omitempty"`
	ReturnUrl *string `json:"returnUrl,omitempty"`
	Scopes *[]any `json:"scopes,omitempty"`
	Service *string `json:"service,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
	Subject *any `json:"subject,omitempty"`
	TenantId *string `json:"tenantId,omitempty"`
	Token string `json:"token"`
	TokenGroupId *string `json:"tokenGroupId,omitempty"`
	TokenId string `json:"tokenId"`
	Type string `json:"type"`
	Uid string `json:"uid"`
	ValidityBufferMs *float64 `json:"validityBufferMs,omitempty"`
	Webhook *string `json:"webhook,omitempty"`
}

// ConnectCreateData is the typed request payload for Connect.CreateTyped.
type ConnectCreateData struct {
	Connector string `json:"connector"`
	AdditionalParams *map[string]any `json:"additionalParams,omitempty"`
	Audience *[]any `json:"audience,omitempty"`
	AuthorizationDetails *[]any `json:"authorizationDetails,omitempty"`
	AuthorizationId *string `json:"authorizationId,omitempty"`
	Claims *map[string]any `json:"claims,omitempty"`
	DeviceCode *bool `json:"deviceCode,omitempty"`
	DisplayName string `json:"displayName"`
	ExpiresAt float64 `json:"expiresAt"`
	ExpiresInMs *float64 `json:"expiresInMs,omitempty"`
	ExternalSubject *string `json:"externalSubject,omitempty"`
	Id string `json:"id"`
	InstallationId *string `json:"installationId,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	Prompt *string `json:"prompt,omitempty"`
	Resources *[]any `json:"resources,omitempty"`
	ReturnUrl *string `json:"returnUrl,omitempty"`
	Scopes *[]any `json:"scopes,omitempty"`
	Service *string `json:"service,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
	Subject *any `json:"subject,omitempty"`
	TenantId *string `json:"tenantId,omitempty"`
	Token string `json:"token"`
	TokenGroupId *string `json:"tokenGroupId,omitempty"`
	TokenId string `json:"tokenId"`
	Type string `json:"type"`
	Uid string `json:"uid"`
	ValidityBufferMs *float64 `json:"validityBufferMs,omitempty"`
	Webhook *string `json:"webhook,omitempty"`
}

// ConnectRemoveMatch is the typed request payload for Connect.RemoveTyped.
type ConnectRemoveMatch struct {
	Connector string `json:"connector"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ConnectConnector is the typed data model for the connect_connector entity.
type ConnectConnector struct {
	AccentColor *string `json:"accentColor,omitempty"`
	AppTokens map[string]any `json:"appTokens"`
	BackgroundColor *string `json:"backgroundColor,omitempty"`
	ClientUrl *string `json:"clientUrl,omitempty"`
	ConnectionMethod *string `json:"connectionMethod,omitempty"`
	Connector map[string]any `json:"connector"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *any `json:"createdBy,omitempty"`
	CreationMode *string `json:"creationMode,omitempty"`
	Data any `json:"data"`
	DefaultInstallationId *string `json:"defaultInstallationId,omitempty"`
	Destinations []any `json:"destinations"`
	Devsite *string `json:"devsite,omitempty"`
	DisplayName string `json:"displayName"`
	Docsite *string `json:"docsite,omitempty"`
	Environments *[]any `json:"environments,omitempty"`
	Events *[]any `json:"events,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	KnownStale *bool `json:"knownStale,omitempty"`
	Managed *map[string]any `json:"managed,omitempty"`
	Name string `json:"name"`
	Params *map[string]any `json:"params,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ReconsentNeeded map[string]any `json:"reconsentNeeded"`
	RedirectUri *string `json:"redirectUri,omitempty"`
	ReinstallAt *float64 `json:"reinstallAt,omitempty"`
	ReinstallNeeded *bool `json:"reinstallNeeded,omitempty"`
	Service string `json:"service"`
	ServiceSync map[string]any `json:"serviceSync"`
	SupportedSubjectTypes []any `json:"supportedSubjectTypes"`
	SupportsIcon any `json:"supportsIcon"`
	SupportsInstallation bool `json:"supportsInstallation"`
	SupportsRevocation bool `json:"supportsRevocation"`
	SupportsTriggers bool `json:"supportsTriggers"`
	Target *string `json:"target,omitempty"`
	TriggerDestination *any `json:"triggerDestination,omitempty"`
	TriggerDestinations *[]any `json:"triggerDestinations,omitempty"`
	Triggers map[string]any `json:"triggers"`
	Type string `json:"type"`
	TypeIcon *string `json:"typeIcon,omitempty"`
	TypeName string `json:"typeName"`
	Uid string `json:"uid"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	UserTokens map[string]any `json:"userTokens"`
	Website *string `json:"website,omitempty"`
}

// ConnectConnectorLoadMatch is the typed request payload for ConnectConnector.LoadTyped.
type ConnectConnectorLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ConnectConnectorCreateData is the typed request payload for ConnectConnector.CreateTyped.
type ConnectConnectorCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AccentColor *string `json:"accentColor,omitempty"`
	AppTokens map[string]any `json:"appTokens"`
	BackgroundColor *string `json:"backgroundColor,omitempty"`
	ClientUrl *string `json:"clientUrl,omitempty"`
	ConnectionMethod *string `json:"connectionMethod,omitempty"`
	Connector map[string]any `json:"connector"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *any `json:"createdBy,omitempty"`
	CreationMode *string `json:"creationMode,omitempty"`
	Data any `json:"data"`
	DefaultInstallationId *string `json:"defaultInstallationId,omitempty"`
	Destinations []any `json:"destinations"`
	Devsite *string `json:"devsite,omitempty"`
	DisplayName string `json:"displayName"`
	Docsite *string `json:"docsite,omitempty"`
	Environments *[]any `json:"environments,omitempty"`
	Events *[]any `json:"events,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	KnownStale *bool `json:"knownStale,omitempty"`
	Managed *map[string]any `json:"managed,omitempty"`
	Name string `json:"name"`
	Params *map[string]any `json:"params,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ReconsentNeeded map[string]any `json:"reconsentNeeded"`
	RedirectUri *string `json:"redirectUri,omitempty"`
	ReinstallAt *float64 `json:"reinstallAt,omitempty"`
	ReinstallNeeded *bool `json:"reinstallNeeded,omitempty"`
	Service string `json:"service"`
	ServiceSync map[string]any `json:"serviceSync"`
	SupportedSubjectTypes []any `json:"supportedSubjectTypes"`
	SupportsIcon any `json:"supportsIcon"`
	SupportsInstallation bool `json:"supportsInstallation"`
	SupportsRevocation bool `json:"supportsRevocation"`
	SupportsTriggers bool `json:"supportsTriggers"`
	Target *string `json:"target,omitempty"`
	TriggerDestination *any `json:"triggerDestination,omitempty"`
	TriggerDestinations *[]any `json:"triggerDestinations,omitempty"`
	Triggers map[string]any `json:"triggers"`
	Type string `json:"type"`
	TypeIcon *string `json:"typeIcon,omitempty"`
	TypeName string `json:"typeName"`
	Uid string `json:"uid"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	UserTokens map[string]any `json:"userTokens"`
	Website *string `json:"website,omitempty"`
}

// ConnectConnectorUpdateData is the typed request payload for ConnectConnector.UpdateTyped.
type ConnectConnectorUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AccentColor *string `json:"accentColor,omitempty"`
	AppTokens *map[string]any `json:"appTokens,omitempty"`
	BackgroundColor *string `json:"backgroundColor,omitempty"`
	ClientUrl *string `json:"clientUrl,omitempty"`
	ConnectionMethod *string `json:"connectionMethod,omitempty"`
	Connector *map[string]any `json:"connector,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *any `json:"createdBy,omitempty"`
	CreationMode *string `json:"creationMode,omitempty"`
	Data *any `json:"data,omitempty"`
	DefaultInstallationId *string `json:"defaultInstallationId,omitempty"`
	Destinations *[]any `json:"destinations,omitempty"`
	Devsite *string `json:"devsite,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Docsite *string `json:"docsite,omitempty"`
	Environments *[]any `json:"environments,omitempty"`
	Events *[]any `json:"events,omitempty"`
	Icon *string `json:"icon,omitempty"`
	KnownStale *bool `json:"knownStale,omitempty"`
	Managed *map[string]any `json:"managed,omitempty"`
	Name *string `json:"name,omitempty"`
	Params *map[string]any `json:"params,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ReconsentNeeded *map[string]any `json:"reconsentNeeded,omitempty"`
	RedirectUri *string `json:"redirectUri,omitempty"`
	ReinstallAt *float64 `json:"reinstallAt,omitempty"`
	ReinstallNeeded *bool `json:"reinstallNeeded,omitempty"`
	Service *string `json:"service,omitempty"`
	ServiceSync *map[string]any `json:"serviceSync,omitempty"`
	SupportedSubjectTypes *[]any `json:"supportedSubjectTypes,omitempty"`
	SupportsIcon *any `json:"supportsIcon,omitempty"`
	SupportsInstallation *bool `json:"supportsInstallation,omitempty"`
	SupportsRevocation *bool `json:"supportsRevocation,omitempty"`
	SupportsTriggers *bool `json:"supportsTriggers,omitempty"`
	Target *string `json:"target,omitempty"`
	TriggerDestination *any `json:"triggerDestination,omitempty"`
	TriggerDestinations *[]any `json:"triggerDestinations,omitempty"`
	Triggers *map[string]any `json:"triggers,omitempty"`
	Type *string `json:"type,omitempty"`
	TypeIcon *string `json:"typeIcon,omitempty"`
	TypeName *string `json:"typeName,omitempty"`
	Uid *string `json:"uid,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	UserTokens *map[string]any `json:"userTokens,omitempty"`
	Website *string `json:"website,omitempty"`
}

// ConnectConnectorList is the typed data model for the connect_connector_list entity.
type ConnectConnectorList struct {
	AccentColor *string `json:"accentColor,omitempty"`
	AppTokens map[string]any `json:"appTokens"`
	BackgroundColor *string `json:"backgroundColor,omitempty"`
	ClientUrl *string `json:"clientUrl,omitempty"`
	ConnectionMethod *string `json:"connectionMethod,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *any `json:"createdBy,omitempty"`
	CreationMode *string `json:"creationMode,omitempty"`
	DefaultInstallationId *string `json:"defaultInstallationId,omitempty"`
	Devsite *string `json:"devsite,omitempty"`
	DisplayName string `json:"displayName"`
	Docsite *string `json:"docsite,omitempty"`
	Events *[]any `json:"events,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	KnownStale *bool `json:"knownStale,omitempty"`
	Managed *map[string]any `json:"managed,omitempty"`
	Name string `json:"name"`
	RedirectUri *string `json:"redirectUri,omitempty"`
	ReinstallAt *float64 `json:"reinstallAt,omitempty"`
	Service string `json:"service"`
	SupportedSubjectTypes []any `json:"supportedSubjectTypes"`
	SupportsIcon any `json:"supportsIcon"`
	SupportsInstallation bool `json:"supportsInstallation"`
	SupportsRevocation bool `json:"supportsRevocation"`
	SupportsTriggers bool `json:"supportsTriggers"`
	Target *string `json:"target,omitempty"`
	TriggerDestinations *[]any `json:"triggerDestinations,omitempty"`
	Triggers map[string]any `json:"triggers"`
	Type string `json:"type"`
	TypeIcon *string `json:"typeIcon,omitempty"`
	TypeName string `json:"typeName"`
	Uid string `json:"uid"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *any `json:"updatedBy,omitempty"`
	UserTokens map[string]any `json:"userTokens"`
	Website *string `json:"website,omitempty"`
}

// ConnectConnectorListListMatch is the typed request payload for ConnectConnectorList.ListTyped.
type ConnectConnectorListListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Search *string `json:"search,omitempty"`
	Service *string `json:"service,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Sort *string `json:"sort,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ConnectConnectorProjectConnectionList is the typed data model for the connect_connector_project_connection_list entity.
type ConnectConnectorProjectConnectionList struct {
	ConnectorId string `json:"connectorId"`
	CreatedAt float64 `json:"createdAt"`
	EnabledEnvironments []any `json:"enabledEnvironments"`
	Project map[string]any `json:"project"`
	UpdatedAt float64 `json:"updatedAt"`
}

// ConnectConnectorProjectConnectionListListMatch is the typed request payload for ConnectConnectorProjectConnectionList.ListTyped.
type ConnectConnectorProjectConnectionListListMatch struct {
	ConnectorId string `json:"connector_id"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ConnectProjectConnection is the typed data model for the connect_project_connection entity.
type ConnectProjectConnection struct {
	ConnectorId string `json:"connectorId"`
	CreatedAt float64 `json:"createdAt"`
	EnabledEnvironments []any `json:"enabledEnvironments"`
	Environments []any `json:"environments"`
	Project map[string]any `json:"project"`
	UpdatedAt float64 `json:"updatedAt"`
}

// ConnectProjectConnectionLoadMatch is the typed request payload for ConnectProjectConnection.LoadTyped.
type ConnectProjectConnectionLoadMatch struct {
	ConnectorId string `json:"connector_id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ConnectProjectConnectionCreateData is the typed request payload for ConnectProjectConnection.CreateTyped.
type ConnectProjectConnectionCreateData struct {
	ConnectorId string `json:"connector_id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ConnectorId2 string `json:"connectorId"`
	CreatedAt float64 `json:"createdAt"`
	EnabledEnvironments []any `json:"enabledEnvironments"`
	Environments []any `json:"environments"`
	Project map[string]any `json:"project"`
	UpdatedAt float64 `json:"updatedAt"`
}

// ConnectProjectConnectorConnectionList is the typed data model for the connect_project_connector_connection_list entity.
type ConnectProjectConnectorConnectionList struct {
	ConnectorId string `json:"connectorId"`
	CreatedAt float64 `json:"createdAt"`
	EnabledEnvironments []any `json:"enabledEnvironments"`
	Project map[string]any `json:"project"`
	UpdatedAt float64 `json:"updatedAt"`
}

// ConnectProjectConnectorConnectionListListMatch is the typed request payload for ConnectProjectConnectorConnectionList.ListTyped.
type ConnectProjectConnectorConnectionListListMatch struct {
	ProjectId string `json:"project_id"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Deployment is the typed data model for the deployment entity.
type Deployment struct {
	AliasAssigned *any `json:"aliasAssigned,omitempty"`
	AliasError map[string]any `json:"aliasError"`
	Attribution *map[string]any `json:"attribution,omitempty"`
	BuildMachine *string `json:"buildMachine,omitempty"`
	BuildingAt *float64 `json:"buildingAt,omitempty"`
	Checks map[string]any `json:"checks"`
	ChecksConclusion *string `json:"checksConclusion,omitempty"`
	ChecksState *string `json:"checksState,omitempty"`
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	ConnectConfigurationId *string `json:"connectConfigurationId,omitempty"`
	Created float64 `json:"created"`
	CreatedAt float64 `json:"createdAt"`
	Creator map[string]any `json:"creator"`
	CustomEnvironment map[string]any `json:"customEnvironment"`
	CustomEnvironmentSlugOrId *string `json:"customEnvironmentSlugOrId,omitempty"`
	DefaultRoute *string `json:"defaultRoute,omitempty"`
	Deleted *float64 `json:"deleted,omitempty"`
	DeploymentId *string `json:"deploymentId,omitempty"`
	ErrorCode *string `json:"errorCode,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Expiration *float64 `json:"expiration,omitempty"`
	Files *[]any `json:"files,omitempty"`
	GitAccessToken *string `json:"gitAccessToken,omitempty"`
	GitMetadata *map[string]any `json:"gitMetadata,omitempty"`
	GitSource *any `json:"gitSource,omitempty"`
	Id *string `json:"id,omitempty"`
	InspectorUrl string `json:"inspectorUrl"`
	IsRollbackCandidate *bool `json:"isRollbackCandidate,omitempty"`
	ManualProvisioning map[string]any `json:"manualProvisioning"`
	Meta *map[string]any `json:"meta,omitempty"`
	MonorepoManager *string `json:"monorepoManager,omitempty"`
	Name string `json:"name"`
	OomReport *string `json:"oomReport,omitempty"`
	Outcomes *[]any `json:"outcomes,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Platform map[string]any `json:"platform"`
	Prebuilt *bool `json:"prebuilt,omitempty"`
	Project *string `json:"project,omitempty"`
	ProjectId string `json:"projectId"`
	ProjectSettings *map[string]any `json:"projectSettings,omitempty"`
	ProposedExpiration *float64 `json:"proposedExpiration,omitempty"`
	Ready *float64 `json:"ready,omitempty"`
	ReadyState string `json:"readyState"`
	ReadySubstate *string `json:"readySubstate,omitempty"`
	SeatBlock map[string]any `json:"seatBlock"`
	SoftDeletedByRetention *bool `json:"softDeletedByRetention,omitempty"`
	Source *string `json:"source,omitempty"`
	State *string `json:"state,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusText *string `json:"statusText,omitempty"`
	StatusUrl *string `json:"statusUrl,omitempty"`
	Target *string `json:"target,omitempty"`
	Type string `json:"type"`
	Uid string `json:"uid"`
	Undeleted *float64 `json:"undeleted,omitempty"`
	Url string `json:"url"`
	WithLatestCommit *bool `json:"withLatestCommit,omitempty"`
}

// DeploymentLoadMatch is the typed request payload for Deployment.LoadTyped.
type DeploymentLoadMatch struct {
	FileId *string `json:"file_id,omitempty"`
	Id string `json:"id"`
	Path *string `json:"path,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	WithGitRepoInfo *string `json:"with_git_repo_info,omitempty"`
}

// DeploymentListMatch is the typed request payload for Deployment.ListTyped.
type DeploymentListMatch struct {
	App *string `json:"app,omitempty"`
	Branch *string `json:"branch,omitempty"`
	From *float64 `json:"from,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	RollbackCandidate *bool `json:"rollback_candidate,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Since *float64 `json:"since,omitempty"`
	Slug *string `json:"slug,omitempty"`
	State *string `json:"state,omitempty"`
	Target *string `json:"target,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	To *float64 `json:"to,omitempty"`
	Until *float64 `json:"until,omitempty"`
	User *string `json:"user,omitempty"`
}

// DeploymentCreateData is the typed request payload for Deployment.CreateTyped.
type DeploymentCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AliasAssigned *any `json:"aliasAssigned,omitempty"`
	AliasError map[string]any `json:"aliasError"`
	Attribution *map[string]any `json:"attribution,omitempty"`
	BuildMachine *string `json:"buildMachine,omitempty"`
	BuildingAt *float64 `json:"buildingAt,omitempty"`
	Checks map[string]any `json:"checks"`
	ChecksConclusion *string `json:"checksConclusion,omitempty"`
	ChecksState *string `json:"checksState,omitempty"`
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	ConnectConfigurationId *string `json:"connectConfigurationId,omitempty"`
	Created float64 `json:"created"`
	CreatedAt float64 `json:"createdAt"`
	Creator map[string]any `json:"creator"`
	CustomEnvironment map[string]any `json:"customEnvironment"`
	CustomEnvironmentSlugOrId *string `json:"customEnvironmentSlugOrId,omitempty"`
	DefaultRoute *string `json:"defaultRoute,omitempty"`
	Deleted *float64 `json:"deleted,omitempty"`
	DeploymentId *string `json:"deploymentId,omitempty"`
	ErrorCode *string `json:"errorCode,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Expiration *float64 `json:"expiration,omitempty"`
	Files *[]any `json:"files,omitempty"`
	GitAccessToken *string `json:"gitAccessToken,omitempty"`
	GitMetadata *map[string]any `json:"gitMetadata,omitempty"`
	GitSource *any `json:"gitSource,omitempty"`
	Id *string `json:"id,omitempty"`
	InspectorUrl string `json:"inspectorUrl"`
	IsRollbackCandidate *bool `json:"isRollbackCandidate,omitempty"`
	ManualProvisioning map[string]any `json:"manualProvisioning"`
	Meta *map[string]any `json:"meta,omitempty"`
	MonorepoManager *string `json:"monorepoManager,omitempty"`
	Name string `json:"name"`
	OomReport *string `json:"oomReport,omitempty"`
	Outcomes *[]any `json:"outcomes,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Platform map[string]any `json:"platform"`
	Prebuilt *bool `json:"prebuilt,omitempty"`
	Project *string `json:"project,omitempty"`
	ProjectId string `json:"projectId"`
	ProjectSettings *map[string]any `json:"projectSettings,omitempty"`
	ProposedExpiration *float64 `json:"proposedExpiration,omitempty"`
	Ready *float64 `json:"ready,omitempty"`
	ReadyState string `json:"readyState"`
	ReadySubstate *string `json:"readySubstate,omitempty"`
	SeatBlock map[string]any `json:"seatBlock"`
	SoftDeletedByRetention *bool `json:"softDeletedByRetention,omitempty"`
	Source *string `json:"source,omitempty"`
	State *string `json:"state,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusText *string `json:"statusText,omitempty"`
	StatusUrl *string `json:"statusUrl,omitempty"`
	Target *string `json:"target,omitempty"`
	Type string `json:"type"`
	Uid string `json:"uid"`
	Undeleted *float64 `json:"undeleted,omitempty"`
	Url string `json:"url"`
	WithLatestCommit *bool `json:"withLatestCommit,omitempty"`
}

// DeploymentUpdateData is the typed request payload for Deployment.UpdateTyped.
type DeploymentUpdateData struct {
	Action string `json:"action"`
	Id string `json:"id"`
	IntegrationId string `json:"integration_id"`
	ResourceId string `json:"resource_id"`
	AliasAssigned *any `json:"aliasAssigned,omitempty"`
	AliasError *map[string]any `json:"aliasError,omitempty"`
	Attribution *map[string]any `json:"attribution,omitempty"`
	BuildMachine *string `json:"buildMachine,omitempty"`
	BuildingAt *float64 `json:"buildingAt,omitempty"`
	Checks *map[string]any `json:"checks,omitempty"`
	ChecksConclusion *string `json:"checksConclusion,omitempty"`
	ChecksState *string `json:"checksState,omitempty"`
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	ConnectConfigurationId *string `json:"connectConfigurationId,omitempty"`
	Created *float64 `json:"created,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomEnvironment *map[string]any `json:"customEnvironment,omitempty"`
	CustomEnvironmentSlugOrId *string `json:"customEnvironmentSlugOrId,omitempty"`
	DefaultRoute *string `json:"defaultRoute,omitempty"`
	Deleted *float64 `json:"deleted,omitempty"`
	DeploymentId *string `json:"deploymentId,omitempty"`
	ErrorCode *string `json:"errorCode,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Expiration *float64 `json:"expiration,omitempty"`
	Files *[]any `json:"files,omitempty"`
	GitAccessToken *string `json:"gitAccessToken,omitempty"`
	GitMetadata *map[string]any `json:"gitMetadata,omitempty"`
	GitSource *any `json:"gitSource,omitempty"`
	InspectorUrl *string `json:"inspectorUrl,omitempty"`
	IsRollbackCandidate *bool `json:"isRollbackCandidate,omitempty"`
	ManualProvisioning *map[string]any `json:"manualProvisioning,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	MonorepoManager *string `json:"monorepoManager,omitempty"`
	Name *string `json:"name,omitempty"`
	OomReport *string `json:"oomReport,omitempty"`
	Outcomes *[]any `json:"outcomes,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Platform *map[string]any `json:"platform,omitempty"`
	Prebuilt *bool `json:"prebuilt,omitempty"`
	Project *string `json:"project,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ProjectSettings *map[string]any `json:"projectSettings,omitempty"`
	ProposedExpiration *float64 `json:"proposedExpiration,omitempty"`
	Ready *float64 `json:"ready,omitempty"`
	ReadyState *string `json:"readyState,omitempty"`
	ReadySubstate *string `json:"readySubstate,omitempty"`
	SeatBlock *map[string]any `json:"seatBlock,omitempty"`
	SoftDeletedByRetention *bool `json:"softDeletedByRetention,omitempty"`
	Source *string `json:"source,omitempty"`
	State *string `json:"state,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusText *string `json:"statusText,omitempty"`
	StatusUrl *string `json:"statusUrl,omitempty"`
	Target *string `json:"target,omitempty"`
	Type *string `json:"type,omitempty"`
	Uid *string `json:"uid,omitempty"`
	Undeleted *float64 `json:"undeleted,omitempty"`
	Url *string `json:"url,omitempty"`
	WithLatestCommit *bool `json:"withLatestCommit,omitempty"`
}

// DeploymentRemoveMatch is the typed request payload for Deployment.RemoveTyped.
type DeploymentRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Dns is the typed data model for the dns entity.
type Dns struct {
	Comment *string `json:"comment,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator string `json:"creator"`
	Domain string `json:"domain"`
	Https map[string]any `json:"https"`
	Id string `json:"id"`
	MxPriority *int `json:"mxPriority,omitempty"`
	Name string `json:"name"`
	RecordType string `json:"recordType"`
	Srv map[string]any `json:"srv"`
	Ttl *float64 `json:"ttl,omitempty"`
	Type string `json:"type"`
	Value string `json:"value"`
}

// DnsLoadMatch is the typed request payload for Dns.LoadTyped.
type DnsLoadMatch struct {
	DomainId string `json:"domain_id"`
	Limit *string `json:"limit,omitempty"`
	Since *string `json:"since,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Until *string `json:"until,omitempty"`
}

// DnsCreateData is the typed request payload for Dns.CreateTyped.
type DnsCreateData struct {
	DomainId string `json:"domain_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Comment *string `json:"comment,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator string `json:"creator"`
	Domain string `json:"domain"`
	Https map[string]any `json:"https"`
	Id string `json:"id"`
	MxPriority *int `json:"mxPriority,omitempty"`
	Name string `json:"name"`
	RecordType string `json:"recordType"`
	Srv map[string]any `json:"srv"`
	Ttl *float64 `json:"ttl,omitempty"`
	Type string `json:"type"`
	Value string `json:"value"`
}

// DnsUpdateData is the typed request payload for Dns.UpdateTyped.
type DnsUpdateData struct {
	RecordId string `json:"record_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Comment *string `json:"comment,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator *string `json:"creator,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Https *map[string]any `json:"https,omitempty"`
	Id *string `json:"id,omitempty"`
	MxPriority *int `json:"mxPriority,omitempty"`
	Name *string `json:"name,omitempty"`
	RecordType *string `json:"recordType,omitempty"`
	Srv *map[string]any `json:"srv,omitempty"`
	Ttl *float64 `json:"ttl,omitempty"`
	Type *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

// DnsRemoveMatch is the typed request payload for Dns.RemoveTyped.
type DnsRemoveMatch struct {
	DomainId string `json:"domain_id"`
	RecordId string `json:"record_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Domain is the typed data model for the domain entity.
type Domain struct {
	BoughtAt float64 `json:"boughtAt"`
	CreatedAt float64 `json:"createdAt"`
	Creator map[string]any `json:"creator"`
	CustomNameservers *[]any `json:"customNameservers,omitempty"`
	EchMode string `json:"echMode"`
	ExpiresAt float64 `json:"expiresAt"`
	Id string `json:"id"`
	IntendedNameservers []any `json:"intendedNameservers"`
	Method *string `json:"method,omitempty"`
	Name string `json:"name"`
	Nameservers []any `json:"nameservers"`
	Renew *bool `json:"renew,omitempty"`
	ServiceType string `json:"serviceType"`
	Suffix bool `json:"suffix"`
	TeamId string `json:"teamId"`
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	TransferredAt *float64 `json:"transferredAt,omitempty"`
	UserId string `json:"userId"`
	Verified bool `json:"verified"`
}

// DomainLoadMatch is the typed request payload for Domain.LoadTyped.
type DomainLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// DomainListMatch is the typed request payload for Domain.ListTyped.
type DomainListMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Since *float64 `json:"since,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Until *float64 `json:"until,omitempty"`
}

// DomainCreateData is the typed request payload for Domain.CreateTyped.
type DomainCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	BoughtAt float64 `json:"boughtAt"`
	CreatedAt float64 `json:"createdAt"`
	Creator map[string]any `json:"creator"`
	CustomNameservers *[]any `json:"customNameservers,omitempty"`
	EchMode string `json:"echMode"`
	ExpiresAt float64 `json:"expiresAt"`
	Id string `json:"id"`
	IntendedNameservers []any `json:"intendedNameservers"`
	Method *string `json:"method,omitempty"`
	Name string `json:"name"`
	Nameservers []any `json:"nameservers"`
	Renew *bool `json:"renew,omitempty"`
	ServiceType string `json:"serviceType"`
	Suffix bool `json:"suffix"`
	TeamId2 string `json:"teamId"`
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	TransferredAt *float64 `json:"transferredAt,omitempty"`
	UserId string `json:"userId"`
	Verified bool `json:"verified"`
}

// DomainUpdateData is the typed request payload for Domain.UpdateTyped.
type DomainUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	BoughtAt *float64 `json:"boughtAt,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomNameservers *[]any `json:"customNameservers,omitempty"`
	EchMode *string `json:"echMode,omitempty"`
	ExpiresAt *float64 `json:"expiresAt,omitempty"`
	IntendedNameservers *[]any `json:"intendedNameservers,omitempty"`
	Method *string `json:"method,omitempty"`
	Name *string `json:"name,omitempty"`
	Nameservers *[]any `json:"nameservers,omitempty"`
	Renew *bool `json:"renew,omitempty"`
	ServiceType *string `json:"serviceType,omitempty"`
	Suffix *bool `json:"suffix,omitempty"`
	TeamId2 *string `json:"teamId,omitempty"`
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	TransferredAt *float64 `json:"transferredAt,omitempty"`
	UserId *string `json:"userId,omitempty"`
	Verified *bool `json:"verified,omitempty"`
}

// DomainRemoveMatch is the typed request payload for Domain.RemoveTyped.
type DomainRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// DomainsRegistrar is the typed data model for the domains_registrar entity.
type DomainsRegistrar struct {
	AuthCode string `json:"authCode"`
	AutoRenew bool `json:"autoRenew"`
	Available bool `json:"available"`
	ContactInformation map[string]any `json:"contactInformation"`
	Domains []any `json:"domains"`
	Error *any `json:"error,omitempty"`
	ExpectedPrice float64 `json:"expectedPrice"`
	LanguageCode *string `json:"languageCode,omitempty"`
	Nameservers []any `json:"nameservers"`
	OrderId string `json:"orderId"`
	PurchasePrice any `json:"purchasePrice"`
	RenewalPrice any `json:"renewalPrice"`
	Results []any `json:"results"`
	Status string `json:"status"`
	TransferPrice any `json:"transferPrice"`
	Years float64 `json:"years"`
}

// DomainsRegistrarLoadMatch is the typed request payload for DomainsRegistrar.LoadTyped.
type DomainsRegistrarLoadMatch struct {
	OrderId string `json:"order_id"`
	TeamId *string `json:"team_id,omitempty"`
}

// DomainsRegistrarCreateData is the typed request payload for DomainsRegistrar.CreateTyped.
type DomainsRegistrarCreateData struct {
	TeamId *string `json:"team_id,omitempty"`
	AuthCode string `json:"authCode"`
	AutoRenew bool `json:"autoRenew"`
	Available bool `json:"available"`
	ContactInformation map[string]any `json:"contactInformation"`
	Domains []any `json:"domains"`
	Error *any `json:"error,omitempty"`
	ExpectedPrice float64 `json:"expectedPrice"`
	LanguageCode *string `json:"languageCode,omitempty"`
	Nameservers []any `json:"nameservers"`
	OrderId string `json:"orderId"`
	PurchasePrice any `json:"purchasePrice"`
	RenewalPrice any `json:"renewalPrice"`
	Results []any `json:"results"`
	Status string `json:"status"`
	TransferPrice any `json:"transferPrice"`
	Years float64 `json:"years"`
}

// DomainsRegistrarUpdateData is the typed request payload for DomainsRegistrar.UpdateTyped.
type DomainsRegistrarUpdateData struct {
	DomainId string `json:"domain_id"`
	TeamId *string `json:"team_id,omitempty"`
	AuthCode *string `json:"authCode,omitempty"`
	AutoRenew *bool `json:"autoRenew,omitempty"`
	Available *bool `json:"available,omitempty"`
	ContactInformation *map[string]any `json:"contactInformation,omitempty"`
	Domains *[]any `json:"domains,omitempty"`
	Error *any `json:"error,omitempty"`
	ExpectedPrice *float64 `json:"expectedPrice,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
	Nameservers *[]any `json:"nameservers,omitempty"`
	OrderId *string `json:"orderId,omitempty"`
	PurchasePrice *any `json:"purchasePrice,omitempty"`
	RenewalPrice *any `json:"renewalPrice,omitempty"`
	Results *[]any `json:"results,omitempty"`
	Status *string `json:"status,omitempty"`
	TransferPrice *any `json:"transferPrice,omitempty"`
	Years *float64 `json:"years,omitempty"`
}

// Drain is the typed data model for the drain entity.
type Drain struct {
	Delivery *map[string]any `json:"delivery,omitempty"`
	Drains any `json:"drains"`
	Filter map[string]any `json:"filter"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	ProjectIds *[]any `json:"projectIds,omitempty"`
	Projects string `json:"projects"`
	Sampling *[]any `json:"sampling,omitempty"`
	Schemas map[string]any `json:"schemas"`
	Source *map[string]any `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Transforms *[]any `json:"transforms,omitempty"`
}

// DrainLoadMatch is the typed request payload for Drain.LoadTyped.
type DrainLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// DrainCreateData is the typed request payload for Drain.CreateTyped.
type DrainCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Delivery *map[string]any `json:"delivery,omitempty"`
	Drains any `json:"drains"`
	Filter map[string]any `json:"filter"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	ProjectIds *[]any `json:"projectIds,omitempty"`
	Projects string `json:"projects"`
	Sampling *[]any `json:"sampling,omitempty"`
	Schemas map[string]any `json:"schemas"`
	Source *map[string]any `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Transforms *[]any `json:"transforms,omitempty"`
}

// DrainUpdateData is the typed request payload for Drain.UpdateTyped.
type DrainUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Delivery *map[string]any `json:"delivery,omitempty"`
	Drains *any `json:"drains,omitempty"`
	Filter *map[string]any `json:"filter,omitempty"`
	Name *string `json:"name,omitempty"`
	ProjectIds *[]any `json:"projectIds,omitempty"`
	Projects *string `json:"projects,omitempty"`
	Sampling *[]any `json:"sampling,omitempty"`
	Schemas *map[string]any `json:"schemas,omitempty"`
	Source *map[string]any `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Transforms *[]any `json:"transforms,omitempty"`
}

// DrainRemoveMatch is the typed request payload for Drain.RemoveTyped.
type DrainRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// EdgeCache is the typed data model for the edge_cache entity.
type EdgeCache struct {
}

// EdgeCacheCreateData is the typed request payload for EdgeCache.CreateTyped.
type EdgeCacheCreateData struct {
	ProjectIdOrName string `json:"project_id_or_name"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Env is the typed data model for the env entity.
type Env struct {
	ApplyToAllCustomEnvironments *bool `json:"applyToAllCustomEnvironments,omitempty"`
	Comment *string `json:"comment,omitempty"`
	Created *string `json:"created,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	CustomEnvironmentIds *[]any `json:"customEnvironmentIds,omitempty"`
	Decrypted *bool `json:"decrypted,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	DeletedBy *string `json:"deletedBy,omitempty"`
	Evs []any `json:"evs"`
	Failed []any `json:"failed"`
	Id *string `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	LastEditedByDisplayName *string `json:"lastEditedByDisplayName,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	ProjectId *[]any `json:"projectId,omitempty"`
	SecurityIssues []any `json:"securityIssues"`
	Target *[]any `json:"target,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated []any `json:"updated"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	Updates map[string]any `json:"updates"`
	Value *string `json:"value,omitempty"`
}

// EnvLoadMatch is the typed request payload for Env.LoadTyped.
type EnvLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// EnvListMatch is the typed request payload for Env.ListTyped.
type EnvListMatch struct {
	ExcludeId *string `json:"exclude_id,omitempty"`
	ExcludeProjectId *string `json:"exclude_project_id,omitempty"`
	Ids *string `json:"ids,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Search *string `json:"search,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// EnvCreateData is the typed request payload for Env.CreateTyped.
type EnvCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ApplyToAllCustomEnvironments *bool `json:"applyToAllCustomEnvironments,omitempty"`
	Comment *string `json:"comment,omitempty"`
	Created *string `json:"created,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	CustomEnvironmentIds *[]any `json:"customEnvironmentIds,omitempty"`
	Decrypted *bool `json:"decrypted,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	DeletedBy *string `json:"deletedBy,omitempty"`
	Evs []any `json:"evs"`
	Failed []any `json:"failed"`
	Id *string `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	LastEditedByDisplayName *string `json:"lastEditedByDisplayName,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	ProjectId *[]any `json:"projectId,omitempty"`
	SecurityIssues []any `json:"securityIssues"`
	Target *[]any `json:"target,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated []any `json:"updated"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	Updates map[string]any `json:"updates"`
	Value *string `json:"value,omitempty"`
}

// EnvUpdateData is the typed request payload for Env.UpdateTyped.
type EnvUpdateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ApplyToAllCustomEnvironments *bool `json:"applyToAllCustomEnvironments,omitempty"`
	Comment *string `json:"comment,omitempty"`
	Created *string `json:"created,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	CustomEnvironmentIds *[]any `json:"customEnvironmentIds,omitempty"`
	Decrypted *bool `json:"decrypted,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	DeletedBy *string `json:"deletedBy,omitempty"`
	Evs *[]any `json:"evs,omitempty"`
	Failed *[]any `json:"failed,omitempty"`
	Id *string `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	LastEditedByDisplayName *string `json:"lastEditedByDisplayName,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	ProjectId *[]any `json:"projectId,omitempty"`
	SecurityIssues *[]any `json:"securityIssues,omitempty"`
	Target *[]any `json:"target,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *[]any `json:"updated,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	Updates *map[string]any `json:"updates,omitempty"`
	Value *string `json:"value,omitempty"`
}

// EnvRemoveMatch is the typed request payload for Env.RemoveTyped.
type EnvRemoveMatch struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Environment is the typed data model for the environment entity.
type Environment struct {
	BranchMatcher map[string]any `json:"branchMatcher"`
	CopyEnvVarsFrom *string `json:"copyEnvVarsFrom,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CurrentDeploymentAliases *[]any `json:"currentDeploymentAliases,omitempty"`
	Description *string `json:"description,omitempty"`
	Domains *[]any `json:"domains,omitempty"`
	Id string `json:"id"`
	Slug string `json:"slug"`
	Type string `json:"type"`
	UpdatedAt float64 `json:"updatedAt"`
}

// EnvironmentLoadMatch is the typed request payload for Environment.LoadTyped.
type EnvironmentLoadMatch struct {
	EnvironmentSlugOrId string `json:"environment_slug_or_id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// EnvironmentListMatch is the typed request payload for Environment.ListTyped.
type EnvironmentListMatch struct {
	IdOrName string `json:"id_or_name"`
	GitBranch *string `json:"git_branch,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// EnvironmentCreateData is the typed request payload for Environment.CreateTyped.
type EnvironmentCreateData struct {
	IdOrName string `json:"id_or_name"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	BranchMatcher map[string]any `json:"branchMatcher"`
	CopyEnvVarsFrom *string `json:"copyEnvVarsFrom,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CurrentDeploymentAliases *[]any `json:"currentDeploymentAliases,omitempty"`
	Description *string `json:"description,omitempty"`
	Domains *[]any `json:"domains,omitempty"`
	Id string `json:"id"`
	Type string `json:"type"`
	UpdatedAt float64 `json:"updatedAt"`
}

// EnvironmentUpdateData is the typed request payload for Environment.UpdateTyped.
type EnvironmentUpdateData struct {
	EnvId *string `json:"env_id,omitempty"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	EnvironmentSlugOrId *string `json:"environment_slug_or_id,omitempty"`
	BranchMatcher *map[string]any `json:"branchMatcher,omitempty"`
	CopyEnvVarsFrom *string `json:"copyEnvVarsFrom,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CurrentDeploymentAliases *[]any `json:"currentDeploymentAliases,omitempty"`
	Description *string `json:"description,omitempty"`
	Domains *[]any `json:"domains,omitempty"`
	Id *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// EnvironmentRemoveMatch is the typed request payload for Environment.RemoveTyped.
type EnvironmentRemoveMatch struct {
	EnvironmentSlugOrId string `json:"environment_slug_or_id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// FeatureFlag is the typed data model for the feature_flag entity.
type FeatureFlag struct {
	ChangedEnvironments []any `json:"changedEnvironments"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy string `json:"createdBy"`
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Environments map[string]any `json:"environments"`
	FlagId string `json:"flagId"`
	Flags []any `json:"flags"`
	Hint *string `json:"hint,omitempty"`
	Id string `json:"id"`
	Kind string `json:"kind"`
	Label *string `json:"label,omitempty"`
	MaintainerIds *[]any `json:"maintainerIds,omitempty"`
	Message *string `json:"message,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Operations *[]any `json:"operations,omitempty"`
	OwnerId string `json:"ownerId"`
	Pagination map[string]any `json:"pagination"`
	Permanent *bool `json:"permanent,omitempty"`
	ProjectId string `json:"projectId"`
	Revision float64 `json:"revision"`
	Seed float64 `json:"seed"`
	Slug string `json:"slug"`
	State string `json:"state"`
	Status map[string]any `json:"status"`
	Tags *[]any `json:"tags,omitempty"`
	TypeName string `json:"typeName"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	Variants []any `json:"variants"`
}

// FeatureFlagLoadMatch is the typed request payload for FeatureFlag.LoadTyped.
type FeatureFlagLoadMatch struct {
	TeamId string `json:"team_id"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// FeatureFlagListMatch is the typed request payload for FeatureFlag.ListTyped.
type FeatureFlagListMatch struct {
	DeploymentId string `json:"deployment_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// FeatureFlagUpdateData is the typed request payload for FeatureFlag.UpdateTyped.
type FeatureFlagUpdateData struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ChangedEnvironments *[]any `json:"changedEnvironments,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Environments *map[string]any `json:"environments,omitempty"`
	FlagId *string `json:"flagId,omitempty"`
	Flags *[]any `json:"flags,omitempty"`
	Hint *string `json:"hint,omitempty"`
	Id *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Label *string `json:"label,omitempty"`
	MaintainerIds *[]any `json:"maintainerIds,omitempty"`
	Message *string `json:"message,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Operations *[]any `json:"operations,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Permanent *bool `json:"permanent,omitempty"`
	ProjectId2 *string `json:"projectId,omitempty"`
	Revision *float64 `json:"revision,omitempty"`
	Seed *float64 `json:"seed,omitempty"`
	State *string `json:"state,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	TypeName *string `json:"typeName,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	Variants *[]any `json:"variants,omitempty"`
}

// FeatureFlagRemoveMatch is the typed request payload for FeatureFlag.RemoveTyped.
type FeatureFlagRemoveMatch struct {
	Id *string `json:"id,omitempty"`
	ProjectId string `json:"project_id"`
	IfMatch *string `json:"if_match,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	WithMetadata *bool `json:"with_metadata,omitempty"`
	SegmentIdOrSlug *string `json:"segment_id_or_slug,omitempty"`
	HashKey *string `json:"hash_key,omitempty"`
}

// File is the typed data model for the file entity.
type File struct {
	Children *[]any `json:"children,omitempty"`
	ContentType *string `json:"contentType,omitempty"`
	Mode float64 `json:"mode"`
	Name string `json:"name"`
	Type string `json:"type"`
	Uid *string `json:"uid,omitempty"`
}

// FileListMatch is the typed request payload for File.ListTyped.
type FileListMatch struct {
	DeploymentId string `json:"deployment_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Flag is the typed data model for the flag entity.
type Flag struct {
	CreatedAt float64 `json:"createdAt"`
	CreatedBy string `json:"createdBy"`
	Description *string `json:"description,omitempty"`
	Environments map[string]any `json:"environments"`
	Id string `json:"id"`
	Kind string `json:"kind"`
	MaintainerIds *[]any `json:"maintainerIds,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	OwnerId string `json:"ownerId"`
	Permanent *bool `json:"permanent,omitempty"`
	ProjectId string `json:"projectId"`
	Revision float64 `json:"revision"`
	Seed float64 `json:"seed"`
	Slug string `json:"slug"`
	State string `json:"state"`
	Tags *[]any `json:"tags,omitempty"`
	TypeName string `json:"typeName"`
	UpdatedAt float64 `json:"updatedAt"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	Variants []any `json:"variants"`
}

// FlagLoadMatch is the typed request payload for Flag.LoadTyped.
type FlagLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	IfMatch *string `json:"if_match,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	WithMetadata *bool `json:"with_metadata,omitempty"`
}

// FlagsSdkKeyWithSecret is the typed data model for the flags_sdk_key_with_secret entity.
type FlagsSdkKeyWithSecret struct {
	CreatedAt float64 `json:"createdAt"`
	CreatedBy string `json:"createdBy"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	Environment string `json:"environment"`
	HashKey string `json:"hashKey"`
	KeyValue string `json:"keyValue"`
	Label *string `json:"label,omitempty"`
	PartialKeyValue string `json:"partialKeyValue"`
	ProjectId string `json:"projectId"`
	SdkKeyType string `json:"sdkKeyType"`
	TokenValue *string `json:"tokenValue,omitempty"`
	Type string `json:"type"`
	UpdatedAt float64 `json:"updatedAt"`
}

// FlagsSdkKeyWithSecretUpdateData is the typed request payload for FlagsSdkKeyWithSecret.UpdateTyped.
type FlagsSdkKeyWithSecretUpdateData struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	Environment *string `json:"environment,omitempty"`
	HashKey *string `json:"hashKey,omitempty"`
	KeyValue *string `json:"keyValue,omitempty"`
	Label *string `json:"label,omitempty"`
	PartialKeyValue *string `json:"partialKeyValue,omitempty"`
	ProjectId2 *string `json:"projectId,omitempty"`
	SdkKeyType *string `json:"sdkKeyType,omitempty"`
	TokenValue *string `json:"tokenValue,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// GlobalConfig is the typed data model for the global_config entity.
type GlobalConfig struct {
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	Digest string `json:"digest"`
	Id string `json:"id"`
	ItemCount float64 `json:"itemCount"`
	Items *map[string]any `json:"items,omitempty"`
	OwnerId string `json:"ownerId"`
	Purpose *any `json:"purpose,omitempty"`
	Schema *map[string]any `json:"schema,omitempty"`
	SizeInBytes float64 `json:"sizeInBytes"`
	Slug string `json:"slug"`
	SyncedToDynamoAt *float64 `json:"syncedToDynamoAt,omitempty"`
	Transfer map[string]any `json:"transfer"`
	UpdatedAt float64 `json:"updatedAt"`
}

// GlobalConfigLoadMatch is the typed request payload for GlobalConfig.LoadTyped.
type GlobalConfigLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// GlobalConfigListMatch is the typed request payload for GlobalConfig.ListTyped.
type GlobalConfigListMatch struct {
	Id string `json:"id"`
	Limit *float64 `json:"limit,omitempty"`
	Metadata *string `json:"metadata,omitempty"`
	Next *string `json:"next,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// GlobalConfigCreateData is the typed request payload for GlobalConfig.CreateTyped.
type GlobalConfigCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	Digest string `json:"digest"`
	Id string `json:"id"`
	ItemCount float64 `json:"itemCount"`
	Items *map[string]any `json:"items,omitempty"`
	OwnerId string `json:"ownerId"`
	Purpose *any `json:"purpose,omitempty"`
	Schema *map[string]any `json:"schema,omitempty"`
	SizeInBytes float64 `json:"sizeInBytes"`
	SyncedToDynamoAt *float64 `json:"syncedToDynamoAt,omitempty"`
	Transfer map[string]any `json:"transfer"`
	UpdatedAt float64 `json:"updatedAt"`
}

// GlobalConfigUpdateData is the typed request payload for GlobalConfig.UpdateTyped.
type GlobalConfigUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	Digest *string `json:"digest,omitempty"`
	ItemCount *float64 `json:"itemCount,omitempty"`
	Items *map[string]any `json:"items,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	Purpose *any `json:"purpose,omitempty"`
	Schema *map[string]any `json:"schema,omitempty"`
	SizeInBytes *float64 `json:"sizeInBytes,omitempty"`
	SyncedToDynamoAt *float64 `json:"syncedToDynamoAt,omitempty"`
	Transfer *map[string]any `json:"transfer,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// GlobalConfigRemoveMatch is the typed request payload for GlobalConfig.RemoveTyped.
type GlobalConfigRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// GlobalConfigItem is the typed data model for the global_config_item entity.
type GlobalConfigItem struct {
	CreatedAt float64 `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	EdgeConfigId string `json:"edgeConfigId"`
	Id *string `json:"id,omitempty"`
	Key string `json:"key"`
	UpdatedAt float64 `json:"updatedAt"`
	Value any `json:"value"`
}

// GlobalConfigItemLoadMatch is the typed request payload for GlobalConfigItem.LoadTyped.
type GlobalConfigItemLoadMatch struct {
	GlobalConfigId string `json:"global_config_id"`
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// GlobalConfigItemListMatch is the typed request payload for GlobalConfigItem.ListTyped.
type GlobalConfigItemListMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// GlobalConfigToken is the typed data model for the global_config_token entity.
type GlobalConfigToken struct {
	CreatedAt float64 `json:"createdAt"`
	EdgeConfigId string `json:"edgeConfigId"`
	Id string `json:"id"`
	Label string `json:"label"`
	PartialToken string `json:"partialToken"`
	Token *string `json:"token,omitempty"`
}

// GlobalConfigTokenLoadMatch is the typed request payload for GlobalConfigToken.LoadTyped.
type GlobalConfigTokenLoadMatch struct {
	GlobalConfigId *string `json:"global_config_id,omitempty"`
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Integration is the typed data model for the integration entity.
type Integration struct {
	Cost *string `json:"cost,omitempty"`
	Description string `json:"description"`
	Details *[]any `json:"details,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EffectiveDate *string `json:"effectiveDate,omitempty"`
	EnvVarEnvironments *[]any `json:"envVarEnvironments,omitempty"`
	HighlightedDetails *[]any `json:"highlightedDetails,omitempty"`
	Id string `json:"id"`
	InitialCharge *string `json:"initialCharge,omitempty"`
	MakeEnvVarsSensitive *bool `json:"makeEnvVarsSensitive,omitempty"`
	MaximumAmount *string `json:"maximumAmount,omitempty"`
	MaximumAmountAutoPurchasePerPeriod *string `json:"maximumAmountAutoPurchasePerPeriod,omitempty"`
	MetadataSchema map[string]any `json:"metadataSchema"`
	MinimumAmount *string `json:"minimumAmount,omitempty"`
	Name string `json:"name"`
	PaymentMethodRequired bool `json:"paymentMethodRequired"`
	PreauthorizationAmount *float64 `json:"preauthorizationAmount,omitempty"`
	PrimaryProtocol *string `json:"primaryProtocol,omitempty"`
	ProjectId string `json:"projectId"`
	Protocols map[string]any `json:"protocols"`
	Quote *[]any `json:"quote,omitempty"`
	Scope string `json:"scope"`
	Slug string `json:"slug"`
	Type string `json:"type"`
}

// IntegrationLoadMatch is the typed request payload for Integration.LoadTyped.
type IntegrationLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// IntegrationListMatch is the typed request payload for Integration.ListTyped.
type IntegrationListMatch struct {
	ConfigurationId string `json:"configuration_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// IntegrationCreateData is the typed request payload for Integration.CreateTyped.
type IntegrationCreateData struct {
	InstallationId string `json:"installation_id"`
	ResourceId string `json:"resource_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Cost *string `json:"cost,omitempty"`
	Description string `json:"description"`
	Details *[]any `json:"details,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EffectiveDate *string `json:"effectiveDate,omitempty"`
	EnvVarEnvironments *[]any `json:"envVarEnvironments,omitempty"`
	HighlightedDetails *[]any `json:"highlightedDetails,omitempty"`
	Id string `json:"id"`
	InitialCharge *string `json:"initialCharge,omitempty"`
	MakeEnvVarsSensitive *bool `json:"makeEnvVarsSensitive,omitempty"`
	MaximumAmount *string `json:"maximumAmount,omitempty"`
	MaximumAmountAutoPurchasePerPeriod *string `json:"maximumAmountAutoPurchasePerPeriod,omitempty"`
	MetadataSchema map[string]any `json:"metadataSchema"`
	MinimumAmount *string `json:"minimumAmount,omitempty"`
	Name string `json:"name"`
	PaymentMethodRequired bool `json:"paymentMethodRequired"`
	PreauthorizationAmount *float64 `json:"preauthorizationAmount,omitempty"`
	PrimaryProtocol *string `json:"primaryProtocol,omitempty"`
	ProjectId string `json:"projectId"`
	Protocols map[string]any `json:"protocols"`
	Quote *[]any `json:"quote,omitempty"`
	Scope string `json:"scope"`
	Type string `json:"type"`
}

// IntegrationRemoveMatch is the typed request payload for Integration.RemoveTyped.
type IntegrationRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Kms is the typed data model for the kms entity.
type Kms struct {
	Activation *string `json:"activation,omitempty"`
	Alg *string `json:"alg,omitempty"`
	Algorithm string `json:"algorithm"`
	Claims *map[string]any `json:"claims,omitempty"`
	ClaimsSchema *map[string]any `json:"claimsSchema,omitempty"`
	CreatedAt string `json:"createdAt"`
	Environments []any `json:"environments"`
	Headers *map[string]any `json:"headers,omitempty"`
	Id string `json:"id"`
	ImportKey *string `json:"importKey,omitempty"`
	ImportKeyId *string `json:"importKeyId,omitempty"`
	KeyId string `json:"keyId"`
	KeyOps *[]any `json:"key_ops,omitempty"`
	Kid *string `json:"kid,omitempty"`
	Kind string `json:"kind"`
	Kty *string `json:"kty,omitempty"`
	ManagedBy *string `json:"managedBy,omitempty"`
	Message string `json:"message"`
	Name string `json:"name"`
	Origin string `json:"origin"`
	OwnerId string `json:"ownerId"`
	Policies []any `json:"policies"`
	ProjectId string `json:"projectId"`
	RevokePreviousAfterHours *float64 `json:"revokePreviousAfterHours,omitempty"`
	RevokePreviousAt *any `json:"revokePreviousAt,omitempty"`
	Signature string `json:"signature"`
	SigningKeys []any `json:"signingKeys"`
	Token string `json:"token"`
	TokenClaims *map[string]any `json:"tokenClaims,omitempty"`
	Ttl *float64 `json:"ttl,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	Use *string `json:"use,omitempty"`
	X5c *[]any `json:"x5c,omitempty"`
	X5tS256 *string `json:"x5tS256,omitempty"`
}

// KmsLoadMatch is the typed request payload for Kms.LoadTyped.
type KmsLoadMatch struct {
	IssuerId string `json:"issuer_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// KmsListMatch is the typed request payload for Kms.ListTyped.
type KmsListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Next *string `json:"next,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// KmsCreateData is the typed request payload for Kms.CreateTyped.
type KmsCreateData struct {
	IssuerId string `json:"issuer_id"`
	KeyId *string `json:"key_id,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Activation *string `json:"activation,omitempty"`
	Alg *string `json:"alg,omitempty"`
	Algorithm string `json:"algorithm"`
	Claims *map[string]any `json:"claims,omitempty"`
	ClaimsSchema *map[string]any `json:"claimsSchema,omitempty"`
	CreatedAt string `json:"createdAt"`
	Environments []any `json:"environments"`
	Headers *map[string]any `json:"headers,omitempty"`
	Id string `json:"id"`
	ImportKey *string `json:"importKey,omitempty"`
	ImportKeyId *string `json:"importKeyId,omitempty"`
	KeyId2 string `json:"keyId"`
	KeyOps *[]any `json:"key_ops,omitempty"`
	Kid *string `json:"kid,omitempty"`
	Kind string `json:"kind"`
	Kty *string `json:"kty,omitempty"`
	ManagedBy *string `json:"managedBy,omitempty"`
	Message string `json:"message"`
	Name string `json:"name"`
	Origin string `json:"origin"`
	OwnerId string `json:"ownerId"`
	Policies []any `json:"policies"`
	ProjectId string `json:"projectId"`
	RevokePreviousAfterHours *float64 `json:"revokePreviousAfterHours,omitempty"`
	RevokePreviousAt *any `json:"revokePreviousAt,omitempty"`
	Signature string `json:"signature"`
	SigningKeys []any `json:"signingKeys"`
	Token string `json:"token"`
	TokenClaims *map[string]any `json:"tokenClaims,omitempty"`
	Ttl *float64 `json:"ttl,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	Use *string `json:"use,omitempty"`
	X5c *[]any `json:"x5c,omitempty"`
	X5tS256 *string `json:"x5tS256,omitempty"`
}

// KmsUpdateData is the typed request payload for Kms.UpdateTyped.
type KmsUpdateData struct {
	IssuerId string `json:"issuer_id"`
	Kind *string `json:"kind,omitempty"`
	PolicyKey *string `json:"policy_key,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Activation *string `json:"activation,omitempty"`
	Alg *string `json:"alg,omitempty"`
	Algorithm *string `json:"algorithm,omitempty"`
	Claims *map[string]any `json:"claims,omitempty"`
	ClaimsSchema *map[string]any `json:"claimsSchema,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Environments *[]any `json:"environments,omitempty"`
	Headers *map[string]any `json:"headers,omitempty"`
	Id *string `json:"id,omitempty"`
	ImportKey *string `json:"importKey,omitempty"`
	ImportKeyId *string `json:"importKeyId,omitempty"`
	KeyId *string `json:"keyId,omitempty"`
	KeyOps *[]any `json:"key_ops,omitempty"`
	Kid *string `json:"kid,omitempty"`
	Kty *string `json:"kty,omitempty"`
	ManagedBy *string `json:"managedBy,omitempty"`
	Message *string `json:"message,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	Policies *[]any `json:"policies,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	RevokePreviousAfterHours *float64 `json:"revokePreviousAfterHours,omitempty"`
	RevokePreviousAt *any `json:"revokePreviousAt,omitempty"`
	Signature *string `json:"signature,omitempty"`
	SigningKeys *[]any `json:"signingKeys,omitempty"`
	Token *string `json:"token,omitempty"`
	TokenClaims *map[string]any `json:"tokenClaims,omitempty"`
	Ttl *float64 `json:"ttl,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Use *string `json:"use,omitempty"`
	X5c *[]any `json:"x5c,omitempty"`
	X5tS256 *string `json:"x5tS256,omitempty"`
}

// KmsRemoveMatch is the typed request payload for Kms.RemoveTyped.
type KmsRemoveMatch struct {
	IssuerId string `json:"issuer_id"`
	Kind *string `json:"kind,omitempty"`
	PolicyKey *string `json:"policy_key,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ListEventType is the typed data model for the list_event_type entity.
type ListEventType struct {
	Categories []any `json:"categories"`
	Types []any `json:"types"`
}

// ListEventTypeListMatch is the typed request payload for ListEventType.ListTyped.
type ListEventTypeListMatch struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Log is the typed data model for the log entity.
type Log struct {
}

// LogLoadMatch is the typed request payload for Log.LoadTyped.
type LogLoadMatch struct {
	DeploymentId string `json:"deployment_id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// LogDrain is the typed data model for the log_drain entity.
type LogDrain struct {
	Branch *string `json:"branch,omitempty"`
	ClientId *string `json:"clientId,omitempty"`
	ConfigurationId *string `json:"configurationId,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedFrom string `json:"createdFrom"`
	DeliveryFormat any `json:"deliveryFormat"`
	Environments *[]any `json:"environments,omitempty"`
	Headers *map[string]any `json:"headers,omitempty"`
	Id string `json:"id"`
	IntegrationConfigurationUri *string `json:"integrationConfigurationUri,omitempty"`
	IntegrationIcon *string `json:"integrationIcon,omitempty"`
	IntegrationWebsite *string `json:"integrationWebsite,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerId string `json:"ownerId"`
	ProjectId *string `json:"projectId,omitempty"`
	ProjectIds *[]any `json:"projectIds,omitempty"`
	ProjectsMetadata *[]any `json:"projectsMetadata,omitempty"`
	SamplingRate *float64 `json:"samplingRate,omitempty"`
	Secret *string `json:"secret,omitempty"`
	Source any `json:"source"`
	Sources []any `json:"sources"`
	Url string `json:"url"`
}

// LogDrainLoadMatch is the typed request payload for LogDrain.LoadTyped.
type LogDrainLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// LogDrainListMatch is the typed request payload for LogDrain.ListTyped.
type LogDrainListMatch struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// LogDrainCreateData is the typed request payload for LogDrain.CreateTyped.
type LogDrainCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Branch *string `json:"branch,omitempty"`
	ClientId *string `json:"clientId,omitempty"`
	ConfigurationId *string `json:"configurationId,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatedFrom string `json:"createdFrom"`
	DeliveryFormat any `json:"deliveryFormat"`
	Environments *[]any `json:"environments,omitempty"`
	Headers *map[string]any `json:"headers,omitempty"`
	Id string `json:"id"`
	IntegrationConfigurationUri *string `json:"integrationConfigurationUri,omitempty"`
	IntegrationIcon *string `json:"integrationIcon,omitempty"`
	IntegrationWebsite *string `json:"integrationWebsite,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerId string `json:"ownerId"`
	ProjectId *string `json:"projectId,omitempty"`
	ProjectIds *[]any `json:"projectIds,omitempty"`
	ProjectsMetadata *[]any `json:"projectsMetadata,omitempty"`
	SamplingRate *float64 `json:"samplingRate,omitempty"`
	Secret *string `json:"secret,omitempty"`
	Source any `json:"source"`
	Sources []any `json:"sources"`
	Url string `json:"url"`
}

// LogDrainRemoveMatch is the typed request payload for LogDrain.RemoveTyped.
type LogDrainRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Marketplace is the typed data model for the marketplace entity.
type Marketplace struct {
	AccessToken string `json:"access_token"`
	AlreadyRevoked bool `json:"already_revoked"`
	Balances []any `json:"balances"`
	Billing any `json:"billing"`
	BillingPlan map[string]any `json:"billingPlan"`
	BillingPlanId *string `json:"billingPlanId,omitempty"`
	Category *string `json:"category,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret string `json:"client_secret"`
	Created string `json:"created"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Data map[string]any `json:"data"`
	Description *string `json:"description,omitempty"`
	Discounts *[]any `json:"discounts,omitempty"`
	Email string `json:"email"`
	Eod string `json:"eod"`
	Event any `json:"event"`
	ExpiresIn float64 `json:"expires_in"`
	ExternalId *string `json:"externalId,omitempty"`
	Extras *map[string]any `json:"extras,omitempty"`
	Final *bool `json:"final,omitempty"`
	GlobalUserId *string `json:"globalUserId,omitempty"`
	Id string `json:"id"`
	InternalId string `json:"internalId"`
	InvoiceDate string `json:"invoiceDate"`
	InvoiceId string `json:"invoiceId"`
	InvoiceNumber *string `json:"invoiceNumber,omitempty"`
	IsArchived *bool `json:"isArchived,omitempty"`
	Items []any `json:"items"`
	Memo *string `json:"memo,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	Notification map[string]any `json:"notification"`
	Origin string `json:"origin"`
	Ownership *string `json:"ownership,omitempty"`
	PaidAt *string `json:"paidAt,omitempty"`
	Partial *bool `json:"partial,omitempty"`
	PartnerId string `json:"partnerId"`
	Period map[string]any `json:"period"`
	ProductId string `json:"productId"`
	ProtocolSettings *map[string]any `json:"protocolSettings,omitempty"`
	RefundReason *string `json:"refundReason,omitempty"`
	RefundTotal *string `json:"refundTotal,omitempty"`
	RefundedAt *string `json:"refundedAt,omitempty"`
	Revoked bool `json:"revoked"`
	Role string `json:"role"`
	Scope string `json:"scope"`
	Secrets []any `json:"secrets"`
	Slug string `json:"slug"`
	State string `json:"state"`
	Status *string `json:"status,omitempty"`
	Test *bool `json:"test,omitempty"`
	Timestamp string `json:"timestamp"`
	Token string `json:"token"`
	TokenType string `json:"token_type"`
	Total string `json:"total"`
	Updated string `json:"updated"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	Usage []any `json:"usage"`
	UserEmail *string `json:"userEmail,omitempty"`
	ValidationErrors *[]any `json:"validationErrors,omitempty"`
}

// MarketplaceLoadMatch is the typed request payload for Marketplace.LoadTyped.
type MarketplaceLoadMatch struct {
	InstallationId string `json:"installation_id"`
	InvoiceId *string `json:"invoice_id,omitempty"`
	MemberId *string `json:"member_id,omitempty"`
	ResourceId *string `json:"resource_id,omitempty"`
}

// MarketplaceListMatch is the typed request payload for Marketplace.ListTyped.
type MarketplaceListMatch struct {
	InstallationId string `json:"installation_id"`
}

// MarketplaceCreateData is the typed request payload for Marketplace.CreateTyped.
type MarketplaceCreateData struct {
	InstallationId string `json:"installation_id"`
	InvoiceId *string `json:"invoice_id,omitempty"`
	ResourceId *string `json:"resource_id,omitempty"`
	AccessToken string `json:"access_token"`
	AlreadyRevoked bool `json:"already_revoked"`
	Balances []any `json:"balances"`
	Billing any `json:"billing"`
	BillingPlan map[string]any `json:"billingPlan"`
	BillingPlanId *string `json:"billingPlanId,omitempty"`
	Category *string `json:"category,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret string `json:"client_secret"`
	Created string `json:"created"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Data map[string]any `json:"data"`
	Description *string `json:"description,omitempty"`
	Discounts *[]any `json:"discounts,omitempty"`
	Email string `json:"email"`
	Eod string `json:"eod"`
	Event any `json:"event"`
	ExpiresIn float64 `json:"expires_in"`
	ExternalId *string `json:"externalId,omitempty"`
	Extras *map[string]any `json:"extras,omitempty"`
	Final *bool `json:"final,omitempty"`
	GlobalUserId *string `json:"globalUserId,omitempty"`
	Id string `json:"id"`
	InternalId string `json:"internalId"`
	InvoiceDate string `json:"invoiceDate"`
	InvoiceId2 string `json:"invoiceId"`
	InvoiceNumber *string `json:"invoiceNumber,omitempty"`
	IsArchived *bool `json:"isArchived,omitempty"`
	Items []any `json:"items"`
	Memo *string `json:"memo,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	Notification map[string]any `json:"notification"`
	Origin string `json:"origin"`
	Ownership *string `json:"ownership,omitempty"`
	PaidAt *string `json:"paidAt,omitempty"`
	Partial *bool `json:"partial,omitempty"`
	PartnerId string `json:"partnerId"`
	Period map[string]any `json:"period"`
	ProductId string `json:"productId"`
	ProtocolSettings *map[string]any `json:"protocolSettings,omitempty"`
	RefundReason *string `json:"refundReason,omitempty"`
	RefundTotal *string `json:"refundTotal,omitempty"`
	RefundedAt *string `json:"refundedAt,omitempty"`
	Revoked bool `json:"revoked"`
	Role string `json:"role"`
	Scope string `json:"scope"`
	Secrets []any `json:"secrets"`
	Slug string `json:"slug"`
	State string `json:"state"`
	Status *string `json:"status,omitempty"`
	Test *bool `json:"test,omitempty"`
	Timestamp string `json:"timestamp"`
	Token string `json:"token"`
	TokenType string `json:"token_type"`
	Total string `json:"total"`
	Updated string `json:"updated"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	Usage []any `json:"usage"`
	UserEmail *string `json:"userEmail,omitempty"`
	ValidationErrors *[]any `json:"validationErrors,omitempty"`
}

// MarketplaceUpdateData is the typed request payload for Marketplace.UpdateTyped.
type MarketplaceUpdateData struct {
	InstallationId string `json:"installation_id"`
	ProductId *string `json:"product_id,omitempty"`
	ResourceId string `json:"resource_id"`
	AccessToken *string `json:"access_token,omitempty"`
	AlreadyRevoked *bool `json:"already_revoked,omitempty"`
	Balances *[]any `json:"balances,omitempty"`
	Billing *any `json:"billing,omitempty"`
	BillingPlan *map[string]any `json:"billingPlan,omitempty"`
	BillingPlanId *string `json:"billingPlanId,omitempty"`
	Category *string `json:"category,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	Created *string `json:"created,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Discounts *[]any `json:"discounts,omitempty"`
	Email *string `json:"email,omitempty"`
	Eod *string `json:"eod,omitempty"`
	Event *any `json:"event,omitempty"`
	ExpiresIn *float64 `json:"expires_in,omitempty"`
	ExternalId *string `json:"externalId,omitempty"`
	Extras *map[string]any `json:"extras,omitempty"`
	Final *bool `json:"final,omitempty"`
	GlobalUserId *string `json:"globalUserId,omitempty"`
	Id *string `json:"id,omitempty"`
	InternalId *string `json:"internalId,omitempty"`
	InvoiceDate *string `json:"invoiceDate,omitempty"`
	InvoiceId *string `json:"invoiceId,omitempty"`
	InvoiceNumber *string `json:"invoiceNumber,omitempty"`
	IsArchived *bool `json:"isArchived,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Memo *string `json:"memo,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	Notification *map[string]any `json:"notification,omitempty"`
	Origin *string `json:"origin,omitempty"`
	Ownership *string `json:"ownership,omitempty"`
	PaidAt *string `json:"paidAt,omitempty"`
	Partial *bool `json:"partial,omitempty"`
	PartnerId *string `json:"partnerId,omitempty"`
	Period *map[string]any `json:"period,omitempty"`
	ProductId2 *string `json:"productId,omitempty"`
	ProtocolSettings *map[string]any `json:"protocolSettings,omitempty"`
	RefundReason *string `json:"refundReason,omitempty"`
	RefundTotal *string `json:"refundTotal,omitempty"`
	RefundedAt *string `json:"refundedAt,omitempty"`
	Revoked *bool `json:"revoked,omitempty"`
	Role *string `json:"role,omitempty"`
	Scope *string `json:"scope,omitempty"`
	Secrets *[]any `json:"secrets,omitempty"`
	Slug *string `json:"slug,omitempty"`
	State *string `json:"state,omitempty"`
	Status *string `json:"status,omitempty"`
	Test *bool `json:"test,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Token *string `json:"token,omitempty"`
	TokenType *string `json:"token_type,omitempty"`
	Total *string `json:"total,omitempty"`
	Updated *string `json:"updated,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	Usage *[]any `json:"usage,omitempty"`
	UserEmail *string `json:"userEmail,omitempty"`
	ValidationErrors *[]any `json:"validationErrors,omitempty"`
}

// MarketplaceRemoveMatch is the typed request payload for Marketplace.RemoveTyped.
type MarketplaceRemoveMatch struct {
	InstallationId string `json:"installation_id"`
	ItemId *string `json:"item_id,omitempty"`
	ResourceId string `json:"resource_id"`
}

// Microfrontend is the typed data model for the microfrontend entity.
type Microfrontend struct {
	Abuse map[string]any `json:"abuse"`
	AccountId string `json:"accountId"`
	Alias []any `json:"alias"`
	Analytics map[string]any `json:"analytics"`
	Applications map[string]any `json:"applications"`
	AppliedCve55182Migration *bool `json:"appliedCve55182Migration,omitempty"`
	AutoAssignCustomDomains *bool `json:"autoAssignCustomDomains,omitempty"`
	AutoAssignCustomDomainsUpdatedBy *string `json:"autoAssignCustomDomainsUpdatedBy,omitempty"`
	AutoExposeSystemEnvs *bool `json:"autoExposeSystemEnvs,omitempty"`
	Avatar *string `json:"avatar,omitempty"`
	Blobs *map[string]any `json:"blobs,omitempty"`
	BuildCommand *string `json:"buildCommand,omitempty"`
	CommandForIgnoringBuildStep *string `json:"commandForIgnoringBuildStep,omitempty"`
	ConcurrencyBucketName *string `json:"concurrencyBucketName,omitempty"`
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	ConnectConfigurationId *string `json:"connectConfigurationId,omitempty"`
	ConnectConfigurations *[]any `json:"connectConfigurations,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator *any `json:"creator,omitempty"`
	Crons map[string]any `json:"crons"`
	CustomEnvironments *[]any `json:"customEnvironments,omitempty"`
	CustomerSupportCodeVisibility *bool `json:"customerSupportCodeVisibility,omitempty"`
	DataCache map[string]any `json:"dataCache"`
	DefaultResourceConfig map[string]any `json:"defaultResourceConfig"`
	DeploymentExpiration map[string]any `json:"deploymentExpiration"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	DevCommand *string `json:"devCommand,omitempty"`
	DirectoryListing bool `json:"directoryListing"`
	DismissedToasts *[]any `json:"dismissedToasts,omitempty"`
	EnableAffectedProjectsDeployments *bool `json:"enableAffectedProjectsDeployments,omitempty"`
	EnableExternalRewriteCaching *bool `json:"enableExternalRewriteCaching,omitempty"`
	EnablePreviewFeedback *bool `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *bool `json:"enableProductionFeedback,omitempty"`
	Env *[]any `json:"env,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	Features *map[string]any `json:"features,omitempty"`
	Framework *string `json:"framework,omitempty"`
	GitComments map[string]any `json:"gitComments"`
	GitForkProtection *bool `json:"gitForkProtection,omitempty"`
	GitLFS *bool `json:"gitLFS,omitempty"`
	GitProviderOptions map[string]any `json:"gitProviderOptions"`
	HasActiveBranches *bool `json:"hasActiveBranches,omitempty"`
	HasDeployments *bool `json:"hasDeployments,omitempty"`
	Id string `json:"id"`
	InstallCommand *string `json:"installCommand,omitempty"`
	InternalRoutes *[]any `json:"internalRoutes,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	Jobs *map[string]any `json:"jobs,omitempty"`
	LastAliasRequest map[string]any `json:"lastAliasRequest"`
	LastRollbackTarget *map[string]any `json:"lastRollbackTarget,omitempty"`
	LatestDeployments *[]any `json:"latestDeployments,omitempty"`
	Link *string `json:"link,omitempty"`
	Live *bool `json:"live,omitempty"`
	Microfrontends *any `json:"microfrontends,omitempty"`
	Name string `json:"name"`
	NodeVersion string `json:"nodeVersion"`
	OidcTokenConfig *map[string]any `json:"oidcTokenConfig,omitempty"`
	Options *map[string]any `json:"options,omitempty"`
	OptionsAllowlist map[string]any `json:"optionsAllowlist"`
	OutputDirectory *string `json:"outputDirectory,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Passport map[string]any `json:"passport"`
	PasswordProtection *map[string]any `json:"passwordProtection,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	ProductionDeploymentsFastLane *bool `json:"productionDeploymentsFastLane,omitempty"`
	ProtectedSourcemaps *bool `json:"protectedSourcemaps,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	ProtectionConfig *map[string]any `json:"protectionConfig,omitempty"`
	ResourceConfig map[string]any `json:"resourceConfig"`
	RollbackDescription map[string]any `json:"rollbackDescription"`
	RollingRelease map[string]any `json:"rollingRelease"`
	RootDirectory *string `json:"rootDirectory,omitempty"`
	Sandbox *map[string]any `json:"sandbox,omitempty"`
	Schema *string `json:"schema,omitempty"`
	Security *map[string]any `json:"security,omitempty"`
	ServerlessFunctionZeroConfigFailover *bool `json:"serverlessFunctionZeroConfigFailover,omitempty"`
	Services *[]any `json:"services,omitempty"`
	SkewProtectionAllowedDomains *[]any `json:"skewProtectionAllowedDomains,omitempty"`
	SkewProtectionBoundaryAt *float64 `json:"skewProtectionBoundaryAt,omitempty"`
	SkewProtectionMaxAge *float64 `json:"skewProtectionMaxAge,omitempty"`
	SkipGitConnectDuringLink *bool `json:"skipGitConnectDuringLink,omitempty"`
	SourceFilesOutsideRootDirectory *bool `json:"sourceFilesOutsideRootDirectory,omitempty"`
	SpeedInsights map[string]any `json:"speedInsights"`
	SsoProtection map[string]any `json:"ssoProtection"`
	StaticIps map[string]any `json:"staticIps"`
	Targets *map[string]any `json:"targets,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Tracing *map[string]any `json:"tracing,omitempty"`
	TransferCompletedAt *float64 `json:"transferCompletedAt,omitempty"`
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	TransferToAccountId *string `json:"transferToAccountId,omitempty"`
	TransferredFromAccountId *string `json:"transferredFromAccountId,omitempty"`
	TrustedIps *any `json:"trustedIps,omitempty"`
	TrustedSources *map[string]any `json:"trustedSources,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UsageStatus map[string]any `json:"usageStatus"`
	V0 *bool `json:"v0,omitempty"`
	V0Created *bool `json:"v0Created,omitempty"`
	Version *string `json:"version,omitempty"`
	WebAnalytics map[string]any `json:"webAnalytics"`
}

// MicrofrontendLoadMatch is the typed request payload for Microfrontend.LoadTyped.
type MicrofrontendLoadMatch struct {
	ProjectIdOrName string `json:"project_id_or_name"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// MicrofrontendListMatch is the typed request payload for Microfrontend.ListTyped.
type MicrofrontendListMatch struct {
	GroupId string `json:"group_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// MicrofrontendCreateData is the typed request payload for Microfrontend.CreateTyped.
type MicrofrontendCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Abuse map[string]any `json:"abuse"`
	AccountId string `json:"accountId"`
	Alias []any `json:"alias"`
	Analytics map[string]any `json:"analytics"`
	Applications map[string]any `json:"applications"`
	AppliedCve55182Migration *bool `json:"appliedCve55182Migration,omitempty"`
	AutoAssignCustomDomains *bool `json:"autoAssignCustomDomains,omitempty"`
	AutoAssignCustomDomainsUpdatedBy *string `json:"autoAssignCustomDomainsUpdatedBy,omitempty"`
	AutoExposeSystemEnvs *bool `json:"autoExposeSystemEnvs,omitempty"`
	Avatar *string `json:"avatar,omitempty"`
	Blobs *map[string]any `json:"blobs,omitempty"`
	BuildCommand *string `json:"buildCommand,omitempty"`
	CommandForIgnoringBuildStep *string `json:"commandForIgnoringBuildStep,omitempty"`
	ConcurrencyBucketName *string `json:"concurrencyBucketName,omitempty"`
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	ConnectConfigurationId *string `json:"connectConfigurationId,omitempty"`
	ConnectConfigurations *[]any `json:"connectConfigurations,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator *any `json:"creator,omitempty"`
	Crons map[string]any `json:"crons"`
	CustomEnvironments *[]any `json:"customEnvironments,omitempty"`
	CustomerSupportCodeVisibility *bool `json:"customerSupportCodeVisibility,omitempty"`
	DataCache map[string]any `json:"dataCache"`
	DefaultResourceConfig map[string]any `json:"defaultResourceConfig"`
	DeploymentExpiration map[string]any `json:"deploymentExpiration"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	DevCommand *string `json:"devCommand,omitempty"`
	DirectoryListing bool `json:"directoryListing"`
	DismissedToasts *[]any `json:"dismissedToasts,omitempty"`
	EnableAffectedProjectsDeployments *bool `json:"enableAffectedProjectsDeployments,omitempty"`
	EnableExternalRewriteCaching *bool `json:"enableExternalRewriteCaching,omitempty"`
	EnablePreviewFeedback *bool `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *bool `json:"enableProductionFeedback,omitempty"`
	Env *[]any `json:"env,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	Features *map[string]any `json:"features,omitempty"`
	Framework *string `json:"framework,omitempty"`
	GitComments map[string]any `json:"gitComments"`
	GitForkProtection *bool `json:"gitForkProtection,omitempty"`
	GitLFS *bool `json:"gitLFS,omitempty"`
	GitProviderOptions map[string]any `json:"gitProviderOptions"`
	HasActiveBranches *bool `json:"hasActiveBranches,omitempty"`
	HasDeployments *bool `json:"hasDeployments,omitempty"`
	Id string `json:"id"`
	InstallCommand *string `json:"installCommand,omitempty"`
	InternalRoutes *[]any `json:"internalRoutes,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	Jobs *map[string]any `json:"jobs,omitempty"`
	LastAliasRequest map[string]any `json:"lastAliasRequest"`
	LastRollbackTarget *map[string]any `json:"lastRollbackTarget,omitempty"`
	LatestDeployments *[]any `json:"latestDeployments,omitempty"`
	Link *string `json:"link,omitempty"`
	Live *bool `json:"live,omitempty"`
	Microfrontends *any `json:"microfrontends,omitempty"`
	Name string `json:"name"`
	NodeVersion string `json:"nodeVersion"`
	OidcTokenConfig *map[string]any `json:"oidcTokenConfig,omitempty"`
	Options *map[string]any `json:"options,omitempty"`
	OptionsAllowlist map[string]any `json:"optionsAllowlist"`
	OutputDirectory *string `json:"outputDirectory,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Passport map[string]any `json:"passport"`
	PasswordProtection *map[string]any `json:"passwordProtection,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	ProductionDeploymentsFastLane *bool `json:"productionDeploymentsFastLane,omitempty"`
	ProtectedSourcemaps *bool `json:"protectedSourcemaps,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	ProtectionConfig *map[string]any `json:"protectionConfig,omitempty"`
	ResourceConfig map[string]any `json:"resourceConfig"`
	RollbackDescription map[string]any `json:"rollbackDescription"`
	RollingRelease map[string]any `json:"rollingRelease"`
	RootDirectory *string `json:"rootDirectory,omitempty"`
	Sandbox *map[string]any `json:"sandbox,omitempty"`
	Schema *string `json:"schema,omitempty"`
	Security *map[string]any `json:"security,omitempty"`
	ServerlessFunctionZeroConfigFailover *bool `json:"serverlessFunctionZeroConfigFailover,omitempty"`
	Services *[]any `json:"services,omitempty"`
	SkewProtectionAllowedDomains *[]any `json:"skewProtectionAllowedDomains,omitempty"`
	SkewProtectionBoundaryAt *float64 `json:"skewProtectionBoundaryAt,omitempty"`
	SkewProtectionMaxAge *float64 `json:"skewProtectionMaxAge,omitempty"`
	SkipGitConnectDuringLink *bool `json:"skipGitConnectDuringLink,omitempty"`
	SourceFilesOutsideRootDirectory *bool `json:"sourceFilesOutsideRootDirectory,omitempty"`
	SpeedInsights map[string]any `json:"speedInsights"`
	SsoProtection map[string]any `json:"ssoProtection"`
	StaticIps map[string]any `json:"staticIps"`
	Targets *map[string]any `json:"targets,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Tracing *map[string]any `json:"tracing,omitempty"`
	TransferCompletedAt *float64 `json:"transferCompletedAt,omitempty"`
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	TransferToAccountId *string `json:"transferToAccountId,omitempty"`
	TransferredFromAccountId *string `json:"transferredFromAccountId,omitempty"`
	TrustedIps *any `json:"trustedIps,omitempty"`
	TrustedSources *map[string]any `json:"trustedSources,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UsageStatus map[string]any `json:"usageStatus"`
	V0 *bool `json:"v0,omitempty"`
	V0Created *bool `json:"v0Created,omitempty"`
	Version *string `json:"version,omitempty"`
	WebAnalytics map[string]any `json:"webAnalytics"`
}

// Network is the typed data model for the network entity.
type Network struct {
	AwsAccountId string `json:"awsAccountId"`
	AwsAvailabilityZoneIds *[]any `json:"awsAvailabilityZoneIds,omitempty"`
	AwsRegion string `json:"awsRegion"`
	Cidr string `json:"cidr"`
	CreatedAt float64 `json:"createdAt"`
	EgressIpAddresses *[]any `json:"egressIpAddresses,omitempty"`
	HostedZones map[string]any `json:"hostedZones"`
	Id string `json:"id"`
	Name string `json:"name"`
	PeeringConnections map[string]any `json:"peeringConnections"`
	Projects map[string]any `json:"projects"`
	Region *string `json:"region,omitempty"`
	Status string `json:"status"`
	TeamId string `json:"teamId"`
	VpcId *string `json:"vpcId,omitempty"`
}

// NetworkLoadMatch is the typed request payload for Network.LoadTyped.
type NetworkLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// NetworkListMatch is the typed request payload for Network.ListTyped.
type NetworkListMatch struct {
	IncludeHostedZone *bool `json:"include_hosted_zone,omitempty"`
	IncludePeeringConnection *bool `json:"include_peering_connection,omitempty"`
	IncludeProject *bool `json:"include_project,omitempty"`
	Search *string `json:"search,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// NetworkCreateData is the typed request payload for Network.CreateTyped.
type NetworkCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AwsAccountId string `json:"awsAccountId"`
	AwsAvailabilityZoneIds *[]any `json:"awsAvailabilityZoneIds,omitempty"`
	AwsRegion string `json:"awsRegion"`
	Cidr string `json:"cidr"`
	CreatedAt float64 `json:"createdAt"`
	EgressIpAddresses *[]any `json:"egressIpAddresses,omitempty"`
	HostedZones map[string]any `json:"hostedZones"`
	Id string `json:"id"`
	Name string `json:"name"`
	PeeringConnections map[string]any `json:"peeringConnections"`
	Projects map[string]any `json:"projects"`
	Region *string `json:"region,omitempty"`
	Status string `json:"status"`
	TeamId2 string `json:"teamId"`
	VpcId *string `json:"vpcId,omitempty"`
}

// NetworkUpdateData is the typed request payload for Network.UpdateTyped.
type NetworkUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AwsAccountId *string `json:"awsAccountId,omitempty"`
	AwsAvailabilityZoneIds *[]any `json:"awsAvailabilityZoneIds,omitempty"`
	AwsRegion *string `json:"awsRegion,omitempty"`
	Cidr *string `json:"cidr,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	EgressIpAddresses *[]any `json:"egressIpAddresses,omitempty"`
	HostedZones *map[string]any `json:"hostedZones,omitempty"`
	Name *string `json:"name,omitempty"`
	PeeringConnections *map[string]any `json:"peeringConnections,omitempty"`
	Projects *map[string]any `json:"projects,omitempty"`
	Region *string `json:"region,omitempty"`
	Status *string `json:"status,omitempty"`
	TeamId2 *string `json:"teamId,omitempty"`
	VpcId *string `json:"vpcId,omitempty"`
}

// NetworkRemoveMatch is the typed request payload for Network.RemoveTyped.
type NetworkRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Networking is the typed data model for the networking entity.
type Networking struct {
	Builds *bool `json:"builds,omitempty"`
	Regions *[]any `json:"regions,omitempty"`
}

// NetworkingUpdateData is the typed request payload for Networking.UpdateTyped.
type NetworkingUpdateData struct {
	IdOrName string `json:"id_or_name"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Builds *bool `json:"builds,omitempty"`
	Regions *[]any `json:"regions,omitempty"`
}

// NetworkingRemoveMatch is the typed request payload for Networking.RemoveTyped.
type NetworkingRemoveMatch struct {
	EndpointId string `json:"endpoint_id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Observability is the typed data model for the observability entity.
type Observability struct {
	Disabled bool `json:"disabled"`
	DisabledAt *float64 `json:"disabledAt,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
}

// ObservabilityListMatch is the typed request payload for Observability.ListTyped.
type ObservabilityListMatch struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ObservabilityUpdateData is the typed request payload for Observability.UpdateTyped.
type ObservabilityUpdateData struct {
	ProjectIdOrName string `json:"project_id_or_name"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DisabledAt *float64 `json:"disabledAt,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// PrivateLinkEndpoint is the typed data model for the private_link_endpoint entity.
type PrivateLinkEndpoint struct {
	AwsDnsEntries *[]any `json:"awsDnsEntries,omitempty"`
	AwsServiceName string `json:"awsServiceName"`
	CreatedAt float64 `json:"createdAt"`
	EnablePrivateDns *bool `json:"enablePrivateDns,omitempty"`
	EndpointId string `json:"endpointId"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	PrivateDnsNames *[]any `json:"privateDnsNames,omitempty"`
	ProjectId string `json:"projectId"`
	Status string `json:"status"`
	StatusMessage *string `json:"statusMessage,omitempty"`
	TeamId string `json:"teamId"`
	UpdatedAt float64 `json:"updatedAt"`
	VercelRegion string `json:"vercelRegion"`
	VpcEndpointId *string `json:"vpcEndpointId,omitempty"`
}

// PrivateLinkEndpointLoadMatch is the typed request payload for PrivateLinkEndpoint.LoadTyped.
type PrivateLinkEndpointLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// PrivateLinkEndpointListMatch is the typed request payload for PrivateLinkEndpoint.ListTyped.
type PrivateLinkEndpointListMatch struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// PrivateLinkEndpointCreateData is the typed request payload for PrivateLinkEndpoint.CreateTyped.
type PrivateLinkEndpointCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AwsDnsEntries *[]any `json:"awsDnsEntries,omitempty"`
	AwsServiceName string `json:"awsServiceName"`
	CreatedAt float64 `json:"createdAt"`
	EnablePrivateDns *bool `json:"enablePrivateDns,omitempty"`
	EndpointId string `json:"endpointId"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	PrivateDnsNames *[]any `json:"privateDnsNames,omitempty"`
	ProjectId string `json:"projectId"`
	Status string `json:"status"`
	StatusMessage *string `json:"statusMessage,omitempty"`
	TeamId2 string `json:"teamId"`
	UpdatedAt float64 `json:"updatedAt"`
	VercelRegion string `json:"vercelRegion"`
	VpcEndpointId *string `json:"vpcEndpointId,omitempty"`
}

// PrivateLinkEndpointUpdateData is the typed request payload for PrivateLinkEndpoint.UpdateTyped.
type PrivateLinkEndpointUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AwsDnsEntries *[]any `json:"awsDnsEntries,omitempty"`
	AwsServiceName *string `json:"awsServiceName,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	EnablePrivateDns *bool `json:"enablePrivateDns,omitempty"`
	EndpointId *string `json:"endpointId,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivateDnsNames *[]any `json:"privateDnsNames,omitempty"`
	ProjectId2 *string `json:"projectId,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusMessage *string `json:"statusMessage,omitempty"`
	TeamId2 *string `json:"teamId,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	VercelRegion *string `json:"vercelRegion,omitempty"`
	VpcEndpointId *string `json:"vpcEndpointId,omitempty"`
}

// Project is the typed data model for the project entity.
type Project struct {
	Abuse map[string]any `json:"abuse"`
	AcceptedPolicies *map[string]any `json:"acceptedPolicies,omitempty"`
	AccountId string `json:"accountId"`
	Alias []any `json:"alias"`
	Analytics map[string]any `json:"analytics"`
	ApexName string `json:"apexName"`
	AppliedCve55182Migration *bool `json:"appliedCve55182Migration,omitempty"`
	AutoAssignCustomDomains *bool `json:"autoAssignCustomDomains,omitempty"`
	AutoAssignCustomDomainsUpdatedBy *string `json:"autoAssignCustomDomainsUpdatedBy,omitempty"`
	AutoExposeSystemEnvs *bool `json:"autoExposeSystemEnvs,omitempty"`
	Avatar *string `json:"avatar,omitempty"`
	Blobs *map[string]any `json:"blobs,omitempty"`
	BuildCommand *string `json:"buildCommand,omitempty"`
	CommandForIgnoringBuildStep *string `json:"commandForIgnoringBuildStep,omitempty"`
	Comment *string `json:"comment,omitempty"`
	ConcurrencyBucketName *string `json:"concurrencyBucketName,omitempty"`
	ConfigurationId *string `json:"configurationId,omitempty"`
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	ConnectConfigurationId *string `json:"connectConfigurationId,omitempty"`
	ConnectConfigurations *[]any `json:"connectConfigurations,omitempty"`
	ContentHint *any `json:"contentHint,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Creator *any `json:"creator,omitempty"`
	Crons map[string]any `json:"crons"`
	CustomEnvironmentId *string `json:"customEnvironmentId,omitempty"`
	CustomEnvironmentIds *[]any `json:"customEnvironmentIds,omitempty"`
	CustomEnvironments *[]any `json:"customEnvironments,omitempty"`
	CustomerSupportCodeVisibility *bool `json:"customerSupportCodeVisibility,omitempty"`
	DataCache map[string]any `json:"dataCache"`
	Decrypted *bool `json:"decrypted,omitempty"`
	DefaultResourceConfig map[string]any `json:"defaultResourceConfig"`
	DeploymentExpiration map[string]any `json:"deploymentExpiration"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	DevCommand *string `json:"devCommand,omitempty"`
	DirectoryListing bool `json:"directoryListing"`
	DismissedToasts *[]any `json:"dismissedToasts,omitempty"`
	EdgeConfigId *string `json:"edgeConfigId,omitempty"`
	EdgeConfigTokenId *string `json:"edgeConfigTokenId,omitempty"`
	EnableAffectedProjectsDeployments *bool `json:"enableAffectedProjectsDeployments,omitempty"`
	EnableExternalRewriteCaching *bool `json:"enableExternalRewriteCaching,omitempty"`
	EnablePreviewFeedback *bool `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *bool `json:"enableProductionFeedback,omitempty"`
	Env *[]any `json:"env,omitempty"`
	EnvironmentVariables *[]any `json:"environmentVariables,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	Features *map[string]any `json:"features,omitempty"`
	Framework *string `json:"framework,omitempty"`
	GitBranch *string `json:"gitBranch,omitempty"`
	GitComments map[string]any `json:"gitComments"`
	GitForkProtection *bool `json:"gitForkProtection,omitempty"`
	GitLFS *bool `json:"gitLFS,omitempty"`
	GitProviderOptions map[string]any `json:"gitProviderOptions"`
	GitRepository map[string]any `json:"gitRepository"`
	HasActiveBranches *bool `json:"hasActiveBranches,omitempty"`
	HasDeployments *bool `json:"hasDeployments,omitempty"`
	Hostname string `json:"hostname"`
	Id string `json:"id"`
	InstallCommand *string `json:"installCommand,omitempty"`
	Integrations *[]any `json:"integrations,omitempty"`
	InternalContentHint map[string]any `json:"internalContentHint"`
	InternalRoutes *[]any `json:"internalRoutes,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	Jobs *map[string]any `json:"jobs,omitempty"`
	Key string `json:"key"`
	LastAliasRequest map[string]any `json:"lastAliasRequest"`
	LastRollbackTarget *map[string]any `json:"lastRollbackTarget,omitempty"`
	LatestDeployments *[]any `json:"latestDeployments,omitempty"`
	LegacyValue *string `json:"legacyValue,omitempty"`
	Link *string `json:"link,omitempty"`
	Live *bool `json:"live,omitempty"`
	Microfrontends *any `json:"microfrontends,omitempty"`
	Name string `json:"name"`
	NewProjectName *string `json:"newProjectName,omitempty"`
	NodeVersion string `json:"nodeVersion"`
	OidcTokenConfig *map[string]any `json:"oidcTokenConfig,omitempty"`
	OptionsAllowlist map[string]any `json:"optionsAllowlist"`
	OutputDirectory *string `json:"outputDirectory,omitempty"`
	PaidFeatures *map[string]any `json:"paidFeatures,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Passport map[string]any `json:"passport"`
	PasswordProtection *map[string]any `json:"passwordProtection,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	PreviewDeploymentsDisabled *bool `json:"previewDeploymentsDisabled,omitempty"`
	ProductionDeploymentsFastLane *bool `json:"productionDeploymentsFastLane,omitempty"`
	ProjectId string `json:"projectId"`
	ProtectedSourcemaps *bool `json:"protectedSourcemaps,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	ProtectionConfig *map[string]any `json:"protectionConfig,omitempty"`
	PublicSource *bool `json:"publicSource,omitempty"`
	Redirect *string `json:"redirect,omitempty"`
	RedirectStatusCode *float64 `json:"redirectStatusCode,omitempty"`
	ResourceConfig map[string]any `json:"resourceConfig"`
	RollbackDescription map[string]any `json:"rollbackDescription"`
	RollingRelease map[string]any `json:"rollingRelease"`
	RootDirectory *string `json:"rootDirectory,omitempty"`
	Sandbox *map[string]any `json:"sandbox,omitempty"`
	Security *map[string]any `json:"security,omitempty"`
	ServerlessFunctionRegion *string `json:"serverlessFunctionRegion,omitempty"`
	ServerlessFunctionZeroConfigFailover *bool `json:"serverlessFunctionZeroConfigFailover,omitempty"`
	Services *[]any `json:"services,omitempty"`
	SkewProtectionAllowedDomains *[]any `json:"skewProtectionAllowedDomains,omitempty"`
	SkewProtectionBoundaryAt *float64 `json:"skewProtectionBoundaryAt,omitempty"`
	SkewProtectionMaxAge *float64 `json:"skewProtectionMaxAge,omitempty"`
	SkipGitConnectDuringLink *bool `json:"skipGitConnectDuringLink,omitempty"`
	SourceFilesOutsideRootDirectory *bool `json:"sourceFilesOutsideRootDirectory,omitempty"`
	SpeedInsights map[string]any `json:"speedInsights"`
	SsoProtection map[string]any `json:"ssoProtection"`
	StaticIps map[string]any `json:"staticIps"`
	SunsetSecretId *string `json:"sunsetSecretId,omitempty"`
	Target *any `json:"target,omitempty"`
	Targets *map[string]any `json:"targets,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Token string `json:"token"`
	Tracing *map[string]any `json:"tracing,omitempty"`
	TransferCompletedAt *float64 `json:"transferCompletedAt,omitempty"`
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	TransferToAccountId *string `json:"transferToAccountId,omitempty"`
	TransferredFromAccountId *string `json:"transferredFromAccountId,omitempty"`
	TrustedIps *any `json:"trustedIps,omitempty"`
	TrustedSources *map[string]any `json:"trustedSources,omitempty"`
	Type string `json:"type"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	UsageStatus map[string]any `json:"usageStatus"`
	V0 *bool `json:"v0,omitempty"`
	V0Created *bool `json:"v0Created,omitempty"`
	Value string `json:"value"`
	Verification *[]any `json:"verification,omitempty"`
	Verified bool `json:"verified"`
	Visibility *string `json:"visibility,omitempty"`
	WebAnalytics map[string]any `json:"webAnalytics"`
}

// ProjectLoadMatch is the typed request payload for Project.LoadTyped.
type ProjectLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ProjectCreateData is the typed request payload for Project.CreateTyped.
type ProjectCreateData struct {
	DeploymentId string `json:"deployment_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Abuse map[string]any `json:"abuse"`
	AcceptedPolicies *map[string]any `json:"acceptedPolicies,omitempty"`
	AccountId string `json:"accountId"`
	Alias []any `json:"alias"`
	Analytics map[string]any `json:"analytics"`
	ApexName string `json:"apexName"`
	AppliedCve55182Migration *bool `json:"appliedCve55182Migration,omitempty"`
	AutoAssignCustomDomains *bool `json:"autoAssignCustomDomains,omitempty"`
	AutoAssignCustomDomainsUpdatedBy *string `json:"autoAssignCustomDomainsUpdatedBy,omitempty"`
	AutoExposeSystemEnvs *bool `json:"autoExposeSystemEnvs,omitempty"`
	Avatar *string `json:"avatar,omitempty"`
	Blobs *map[string]any `json:"blobs,omitempty"`
	BuildCommand *string `json:"buildCommand,omitempty"`
	CommandForIgnoringBuildStep *string `json:"commandForIgnoringBuildStep,omitempty"`
	Comment *string `json:"comment,omitempty"`
	ConcurrencyBucketName *string `json:"concurrencyBucketName,omitempty"`
	ConfigurationId *string `json:"configurationId,omitempty"`
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	ConnectConfigurationId *string `json:"connectConfigurationId,omitempty"`
	ConnectConfigurations *[]any `json:"connectConfigurations,omitempty"`
	ContentHint *any `json:"contentHint,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Creator *any `json:"creator,omitempty"`
	Crons map[string]any `json:"crons"`
	CustomEnvironmentId *string `json:"customEnvironmentId,omitempty"`
	CustomEnvironmentIds *[]any `json:"customEnvironmentIds,omitempty"`
	CustomEnvironments *[]any `json:"customEnvironments,omitempty"`
	CustomerSupportCodeVisibility *bool `json:"customerSupportCodeVisibility,omitempty"`
	DataCache map[string]any `json:"dataCache"`
	Decrypted *bool `json:"decrypted,omitempty"`
	DefaultResourceConfig map[string]any `json:"defaultResourceConfig"`
	DeploymentExpiration map[string]any `json:"deploymentExpiration"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	DevCommand *string `json:"devCommand,omitempty"`
	DirectoryListing bool `json:"directoryListing"`
	DismissedToasts *[]any `json:"dismissedToasts,omitempty"`
	EdgeConfigId *string `json:"edgeConfigId,omitempty"`
	EdgeConfigTokenId *string `json:"edgeConfigTokenId,omitempty"`
	EnableAffectedProjectsDeployments *bool `json:"enableAffectedProjectsDeployments,omitempty"`
	EnableExternalRewriteCaching *bool `json:"enableExternalRewriteCaching,omitempty"`
	EnablePreviewFeedback *bool `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *bool `json:"enableProductionFeedback,omitempty"`
	Env *[]any `json:"env,omitempty"`
	EnvironmentVariables *[]any `json:"environmentVariables,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	Features *map[string]any `json:"features,omitempty"`
	Framework *string `json:"framework,omitempty"`
	GitBranch *string `json:"gitBranch,omitempty"`
	GitComments map[string]any `json:"gitComments"`
	GitForkProtection *bool `json:"gitForkProtection,omitempty"`
	GitLFS *bool `json:"gitLFS,omitempty"`
	GitProviderOptions map[string]any `json:"gitProviderOptions"`
	GitRepository map[string]any `json:"gitRepository"`
	HasActiveBranches *bool `json:"hasActiveBranches,omitempty"`
	HasDeployments *bool `json:"hasDeployments,omitempty"`
	Hostname string `json:"hostname"`
	InstallCommand *string `json:"installCommand,omitempty"`
	Integrations *[]any `json:"integrations,omitempty"`
	InternalContentHint map[string]any `json:"internalContentHint"`
	InternalRoutes *[]any `json:"internalRoutes,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	Jobs *map[string]any `json:"jobs,omitempty"`
	Key string `json:"key"`
	LastAliasRequest map[string]any `json:"lastAliasRequest"`
	LastRollbackTarget *map[string]any `json:"lastRollbackTarget,omitempty"`
	LatestDeployments *[]any `json:"latestDeployments,omitempty"`
	LegacyValue *string `json:"legacyValue,omitempty"`
	Link *string `json:"link,omitempty"`
	Live *bool `json:"live,omitempty"`
	Microfrontends *any `json:"microfrontends,omitempty"`
	Name string `json:"name"`
	NewProjectName *string `json:"newProjectName,omitempty"`
	NodeVersion string `json:"nodeVersion"`
	OidcTokenConfig *map[string]any `json:"oidcTokenConfig,omitempty"`
	OptionsAllowlist map[string]any `json:"optionsAllowlist"`
	OutputDirectory *string `json:"outputDirectory,omitempty"`
	PaidFeatures *map[string]any `json:"paidFeatures,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Passport map[string]any `json:"passport"`
	PasswordProtection *map[string]any `json:"passwordProtection,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	PreviewDeploymentsDisabled *bool `json:"previewDeploymentsDisabled,omitempty"`
	ProductionDeploymentsFastLane *bool `json:"productionDeploymentsFastLane,omitempty"`
	ProjectId string `json:"projectId"`
	ProtectedSourcemaps *bool `json:"protectedSourcemaps,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	ProtectionConfig *map[string]any `json:"protectionConfig,omitempty"`
	PublicSource *bool `json:"publicSource,omitempty"`
	Redirect *string `json:"redirect,omitempty"`
	RedirectStatusCode *float64 `json:"redirectStatusCode,omitempty"`
	ResourceConfig map[string]any `json:"resourceConfig"`
	RollbackDescription map[string]any `json:"rollbackDescription"`
	RollingRelease map[string]any `json:"rollingRelease"`
	RootDirectory *string `json:"rootDirectory,omitempty"`
	Sandbox *map[string]any `json:"sandbox,omitempty"`
	Security *map[string]any `json:"security,omitempty"`
	ServerlessFunctionRegion *string `json:"serverlessFunctionRegion,omitempty"`
	ServerlessFunctionZeroConfigFailover *bool `json:"serverlessFunctionZeroConfigFailover,omitempty"`
	Services *[]any `json:"services,omitempty"`
	SkewProtectionAllowedDomains *[]any `json:"skewProtectionAllowedDomains,omitempty"`
	SkewProtectionBoundaryAt *float64 `json:"skewProtectionBoundaryAt,omitempty"`
	SkewProtectionMaxAge *float64 `json:"skewProtectionMaxAge,omitempty"`
	SkipGitConnectDuringLink *bool `json:"skipGitConnectDuringLink,omitempty"`
	SourceFilesOutsideRootDirectory *bool `json:"sourceFilesOutsideRootDirectory,omitempty"`
	SpeedInsights map[string]any `json:"speedInsights"`
	SsoProtection map[string]any `json:"ssoProtection"`
	StaticIps map[string]any `json:"staticIps"`
	SunsetSecretId *string `json:"sunsetSecretId,omitempty"`
	Target *any `json:"target,omitempty"`
	Targets *map[string]any `json:"targets,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Token string `json:"token"`
	Tracing *map[string]any `json:"tracing,omitempty"`
	TransferCompletedAt *float64 `json:"transferCompletedAt,omitempty"`
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	TransferToAccountId *string `json:"transferToAccountId,omitempty"`
	TransferredFromAccountId *string `json:"transferredFromAccountId,omitempty"`
	TrustedIps *any `json:"trustedIps,omitempty"`
	TrustedSources *map[string]any `json:"trustedSources,omitempty"`
	Type string `json:"type"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	UsageStatus map[string]any `json:"usageStatus"`
	V0 *bool `json:"v0,omitempty"`
	V0Created *bool `json:"v0Created,omitempty"`
	Value string `json:"value"`
	Verification *[]any `json:"verification,omitempty"`
	Verified bool `json:"verified"`
	Visibility *string `json:"visibility,omitempty"`
	WebAnalytics map[string]any `json:"webAnalytics"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	Code string `json:"code"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Abuse *map[string]any `json:"abuse,omitempty"`
	AcceptedPolicies *map[string]any `json:"acceptedPolicies,omitempty"`
	AccountId *string `json:"accountId,omitempty"`
	Alias *[]any `json:"alias,omitempty"`
	Analytics *map[string]any `json:"analytics,omitempty"`
	ApexName *string `json:"apexName,omitempty"`
	AppliedCve55182Migration *bool `json:"appliedCve55182Migration,omitempty"`
	AutoAssignCustomDomains *bool `json:"autoAssignCustomDomains,omitempty"`
	AutoAssignCustomDomainsUpdatedBy *string `json:"autoAssignCustomDomainsUpdatedBy,omitempty"`
	AutoExposeSystemEnvs *bool `json:"autoExposeSystemEnvs,omitempty"`
	Avatar *string `json:"avatar,omitempty"`
	Blobs *map[string]any `json:"blobs,omitempty"`
	BuildCommand *string `json:"buildCommand,omitempty"`
	CommandForIgnoringBuildStep *string `json:"commandForIgnoringBuildStep,omitempty"`
	Comment *string `json:"comment,omitempty"`
	ConcurrencyBucketName *string `json:"concurrencyBucketName,omitempty"`
	ConfigurationId *string `json:"configurationId,omitempty"`
	ConnectBuildsEnabled *bool `json:"connectBuildsEnabled,omitempty"`
	ConnectConfigurationId *string `json:"connectConfigurationId,omitempty"`
	ConnectConfigurations *[]any `json:"connectConfigurations,omitempty"`
	ContentHint *any `json:"contentHint,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Creator *any `json:"creator,omitempty"`
	Crons *map[string]any `json:"crons,omitempty"`
	CustomEnvironmentId *string `json:"customEnvironmentId,omitempty"`
	CustomEnvironmentIds *[]any `json:"customEnvironmentIds,omitempty"`
	CustomEnvironments *[]any `json:"customEnvironments,omitempty"`
	CustomerSupportCodeVisibility *bool `json:"customerSupportCodeVisibility,omitempty"`
	DataCache *map[string]any `json:"dataCache,omitempty"`
	Decrypted *bool `json:"decrypted,omitempty"`
	DefaultResourceConfig *map[string]any `json:"defaultResourceConfig,omitempty"`
	DeploymentExpiration *map[string]any `json:"deploymentExpiration,omitempty"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	DevCommand *string `json:"devCommand,omitempty"`
	DirectoryListing *bool `json:"directoryListing,omitempty"`
	DismissedToasts *[]any `json:"dismissedToasts,omitempty"`
	EdgeConfigId *string `json:"edgeConfigId,omitempty"`
	EdgeConfigTokenId *string `json:"edgeConfigTokenId,omitempty"`
	EnableAffectedProjectsDeployments *bool `json:"enableAffectedProjectsDeployments,omitempty"`
	EnableExternalRewriteCaching *bool `json:"enableExternalRewriteCaching,omitempty"`
	EnablePreviewFeedback *bool `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *bool `json:"enableProductionFeedback,omitempty"`
	Env *[]any `json:"env,omitempty"`
	EnvironmentVariables *[]any `json:"environmentVariables,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	Features *map[string]any `json:"features,omitempty"`
	Framework *string `json:"framework,omitempty"`
	GitBranch *string `json:"gitBranch,omitempty"`
	GitComments *map[string]any `json:"gitComments,omitempty"`
	GitForkProtection *bool `json:"gitForkProtection,omitempty"`
	GitLFS *bool `json:"gitLFS,omitempty"`
	GitProviderOptions *map[string]any `json:"gitProviderOptions,omitempty"`
	GitRepository *map[string]any `json:"gitRepository,omitempty"`
	HasActiveBranches *bool `json:"hasActiveBranches,omitempty"`
	HasDeployments *bool `json:"hasDeployments,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
	Id *string `json:"id,omitempty"`
	InstallCommand *string `json:"installCommand,omitempty"`
	Integrations *[]any `json:"integrations,omitempty"`
	InternalContentHint *map[string]any `json:"internalContentHint,omitempty"`
	InternalRoutes *[]any `json:"internalRoutes,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	Jobs *map[string]any `json:"jobs,omitempty"`
	Key *string `json:"key,omitempty"`
	LastAliasRequest *map[string]any `json:"lastAliasRequest,omitempty"`
	LastRollbackTarget *map[string]any `json:"lastRollbackTarget,omitempty"`
	LatestDeployments *[]any `json:"latestDeployments,omitempty"`
	LegacyValue *string `json:"legacyValue,omitempty"`
	Link *string `json:"link,omitempty"`
	Live *bool `json:"live,omitempty"`
	Microfrontends *any `json:"microfrontends,omitempty"`
	Name *string `json:"name,omitempty"`
	NewProjectName *string `json:"newProjectName,omitempty"`
	NodeVersion *string `json:"nodeVersion,omitempty"`
	OidcTokenConfig *map[string]any `json:"oidcTokenConfig,omitempty"`
	OptionsAllowlist *map[string]any `json:"optionsAllowlist,omitempty"`
	OutputDirectory *string `json:"outputDirectory,omitempty"`
	PaidFeatures *map[string]any `json:"paidFeatures,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Passport *map[string]any `json:"passport,omitempty"`
	PasswordProtection *map[string]any `json:"passwordProtection,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	PreviewDeploymentsDisabled *bool `json:"previewDeploymentsDisabled,omitempty"`
	ProductionDeploymentsFastLane *bool `json:"productionDeploymentsFastLane,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ProtectedSourcemaps *bool `json:"protectedSourcemaps,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	ProtectionConfig *map[string]any `json:"protectionConfig,omitempty"`
	PublicSource *bool `json:"publicSource,omitempty"`
	Redirect *string `json:"redirect,omitempty"`
	RedirectStatusCode *float64 `json:"redirectStatusCode,omitempty"`
	ResourceConfig *map[string]any `json:"resourceConfig,omitempty"`
	RollbackDescription *map[string]any `json:"rollbackDescription,omitempty"`
	RollingRelease *map[string]any `json:"rollingRelease,omitempty"`
	RootDirectory *string `json:"rootDirectory,omitempty"`
	Sandbox *map[string]any `json:"sandbox,omitempty"`
	Security *map[string]any `json:"security,omitempty"`
	ServerlessFunctionRegion *string `json:"serverlessFunctionRegion,omitempty"`
	ServerlessFunctionZeroConfigFailover *bool `json:"serverlessFunctionZeroConfigFailover,omitempty"`
	Services *[]any `json:"services,omitempty"`
	SkewProtectionAllowedDomains *[]any `json:"skewProtectionAllowedDomains,omitempty"`
	SkewProtectionBoundaryAt *float64 `json:"skewProtectionBoundaryAt,omitempty"`
	SkewProtectionMaxAge *float64 `json:"skewProtectionMaxAge,omitempty"`
	SkipGitConnectDuringLink *bool `json:"skipGitConnectDuringLink,omitempty"`
	SourceFilesOutsideRootDirectory *bool `json:"sourceFilesOutsideRootDirectory,omitempty"`
	SpeedInsights *map[string]any `json:"speedInsights,omitempty"`
	SsoProtection *map[string]any `json:"ssoProtection,omitempty"`
	StaticIps *map[string]any `json:"staticIps,omitempty"`
	SunsetSecretId *string `json:"sunsetSecretId,omitempty"`
	Target *any `json:"target,omitempty"`
	Targets *map[string]any `json:"targets,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Token *string `json:"token,omitempty"`
	Tracing *map[string]any `json:"tracing,omitempty"`
	TransferCompletedAt *float64 `json:"transferCompletedAt,omitempty"`
	TransferStartedAt *float64 `json:"transferStartedAt,omitempty"`
	TransferToAccountId *string `json:"transferToAccountId,omitempty"`
	TransferredFromAccountId *string `json:"transferredFromAccountId,omitempty"`
	TrustedIps *any `json:"trustedIps,omitempty"`
	TrustedSources *map[string]any `json:"trustedSources,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
	UsageStatus *map[string]any `json:"usageStatus,omitempty"`
	V0 *bool `json:"v0,omitempty"`
	V0Created *bool `json:"v0Created,omitempty"`
	Value *string `json:"value,omitempty"`
	Verification *[]any `json:"verification,omitempty"`
	Verified *bool `json:"verified,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WebAnalytics *map[string]any `json:"webAnalytics,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ProjectMember is the typed data model for the project_member entity.
type ProjectMember struct {
	Email *string `json:"email,omitempty"`
	Id string `json:"id"`
	Role string `json:"role"`
	Uid *string `json:"uid,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ProjectMemberLoadMatch is the typed request payload for ProjectMember.LoadTyped.
type ProjectMemberLoadMatch struct {
	IdOrName string `json:"id_or_name"`
	Limit *int `json:"limit,omitempty"`
	Search *string `json:"search,omitempty"`
	Since *int `json:"since,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Until *int `json:"until,omitempty"`
}

// ProjectMemberCreateData is the typed request payload for ProjectMember.CreateTyped.
type ProjectMemberCreateData struct {
	IdOrName string `json:"id_or_name"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Email *string `json:"email,omitempty"`
	Id string `json:"id"`
	Role string `json:"role"`
	Uid *string `json:"uid,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ProjectMemberRemoveMatch is the typed request payload for ProjectMember.RemoveTyped.
type ProjectMemberRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ProjectRoute is the typed data model for the project_route entity.
type ProjectRoute struct {
	Action string `json:"action"`
	Actions []any `json:"actions"`
	Alias *string `json:"alias,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	CreatedBy string `json:"createdBy"`
	CurrentRoute map[string]any `json:"currentRoute"`
	Description string `json:"description"`
	Id string `json:"id"`
	IsLive *bool `json:"isLive,omitempty"`
	IsStaging *bool `json:"isStaging,omitempty"`
	LastModified float64 `json:"lastModified"`
	Name string `json:"name"`
	Overwrite *bool `json:"overwrite,omitempty"`
	PathCondition map[string]any `json:"pathCondition"`
	Position *map[string]any `json:"position,omitempty"`
	Prompt string `json:"prompt"`
	Restore *bool `json:"restore,omitempty"`
	Route map[string]any `json:"route"`
	Routes *[]any `json:"routes,omitempty"`
	RuleCount *float64 `json:"ruleCount,omitempty"`
	S3Key string `json:"s3Key"`
	Version map[string]any `json:"version"`
}

// ProjectRouteLoadMatch is the typed request payload for ProjectRoute.LoadTyped.
type ProjectRouteLoadMatch struct {
	Id string `json:"id"`
	Diff *any `json:"diff,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Q *string `json:"q,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
}

// ProjectRouteListMatch is the typed request payload for ProjectRoute.ListTyped.
type ProjectRouteListMatch struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// ProjectRouteCreateData is the typed request payload for ProjectRoute.CreateTyped.
type ProjectRouteCreateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Action string `json:"action"`
	Actions []any `json:"actions"`
	Alias *string `json:"alias,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	CreatedBy string `json:"createdBy"`
	CurrentRoute map[string]any `json:"currentRoute"`
	Description string `json:"description"`
	IsLive *bool `json:"isLive,omitempty"`
	IsStaging *bool `json:"isStaging,omitempty"`
	LastModified float64 `json:"lastModified"`
	Name string `json:"name"`
	Overwrite *bool `json:"overwrite,omitempty"`
	PathCondition map[string]any `json:"pathCondition"`
	Position *map[string]any `json:"position,omitempty"`
	Prompt string `json:"prompt"`
	Restore *bool `json:"restore,omitempty"`
	Route map[string]any `json:"route"`
	Routes *[]any `json:"routes,omitempty"`
	RuleCount *float64 `json:"ruleCount,omitempty"`
	S3Key string `json:"s3Key"`
	Version map[string]any `json:"version"`
}

// ProjectRouteUpdateData is the typed request payload for ProjectRoute.UpdateTyped.
type ProjectRouteUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Action *string `json:"action,omitempty"`
	Actions *[]any `json:"actions,omitempty"`
	Alias *string `json:"alias,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	CreatedBy *string `json:"createdBy,omitempty"`
	CurrentRoute *map[string]any `json:"currentRoute,omitempty"`
	Description *string `json:"description,omitempty"`
	IsLive *bool `json:"isLive,omitempty"`
	IsStaging *bool `json:"isStaging,omitempty"`
	LastModified *float64 `json:"lastModified,omitempty"`
	Name *string `json:"name,omitempty"`
	Overwrite *bool `json:"overwrite,omitempty"`
	PathCondition *map[string]any `json:"pathCondition,omitempty"`
	Position *map[string]any `json:"position,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	Restore *bool `json:"restore,omitempty"`
	Route *map[string]any `json:"route,omitempty"`
	Routes *[]any `json:"routes,omitempty"`
	RuleCount *float64 `json:"ruleCount,omitempty"`
	S3Key *string `json:"s3Key,omitempty"`
	Version *map[string]any `json:"version,omitempty"`
}

// ProjectRouteRemoveMatch is the typed request payload for ProjectRoute.RemoveTyped.
type ProjectRouteRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Query is the typed data model for the query entity.
type Query struct {
	Aggregation *string `json:"aggregation,omitempty"`
	BucketTimezone *string `json:"bucketTimezone,omitempty"`
	EndTime *string `json:"endTime,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Granularity *map[string]any `json:"granularity,omitempty"`
	GroupBy *[]any `json:"groupBy,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Metric string `json:"metric"`
	OrderBy *string `json:"orderBy,omitempty"`
	OrderDirection *string `json:"orderDirection,omitempty"`
	Scope map[string]any `json:"scope"`
	StartTime *string `json:"startTime,omitempty"`
}

// QueryCreateData is the typed request payload for Query.CreateTyped.
type QueryCreateData struct {
	Aggregation *string `json:"aggregation,omitempty"`
	BucketTimezone *string `json:"bucketTimezone,omitempty"`
	EndTime *string `json:"endTime,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Granularity *map[string]any `json:"granularity,omitempty"`
	GroupBy *[]any `json:"groupBy,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Metric string `json:"metric"`
	OrderBy *string `json:"orderBy,omitempty"`
	OrderDirection *string `json:"orderDirection,omitempty"`
	Scope map[string]any `json:"scope"`
	StartTime *string `json:"startTime,omitempty"`
}

// Record is the typed data model for the record entity.
type Record struct {
	Comment *string `json:"comment,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Creator string `json:"creator"`
	Domain string `json:"domain"`
	Id string `json:"id"`
	Name string `json:"name"`
	RecordType string `json:"recordType"`
	Ttl *float64 `json:"ttl,omitempty"`
	Type string `json:"type"`
	Value string `json:"value"`
}

// RecordLoadMatch is the typed request payload for Record.LoadTyped.
type RecordLoadMatch struct {
	Id string `json:"id"`
}

// RollingRelease is the typed data model for the rolling_release entity.
type RollingRelease struct {
	ActiveStage map[string]any `json:"activeStage"`
	AdvancementType string `json:"advancementType"`
	CanaryDeployment map[string]any `json:"canaryDeployment"`
	CurrentCanaryPercentage *float64 `json:"currentCanaryPercentage,omitempty"`
	CurrentDeployment map[string]any `json:"currentDeployment"`
	NextStage map[string]any `json:"nextStage"`
	QueuedDeploymentId string `json:"queuedDeploymentId"`
	Stages []any `json:"stages"`
	StartedAt float64 `json:"startedAt"`
	State string `json:"state"`
	Substate string `json:"substate"`
	UpdatedAt float64 `json:"updatedAt"`
}

// RollingReleaseLoadMatch is the typed request payload for RollingRelease.LoadTyped.
type RollingReleaseLoadMatch struct {
	IdOrName string `json:"id_or_name"`
	Slug *string `json:"slug,omitempty"`
	State *string `json:"state,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// RollingReleaseCreateData is the typed request payload for RollingRelease.CreateTyped.
type RollingReleaseCreateData struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ActiveStage map[string]any `json:"activeStage"`
	AdvancementType string `json:"advancementType"`
	CanaryDeployment map[string]any `json:"canaryDeployment"`
	CurrentCanaryPercentage *float64 `json:"currentCanaryPercentage,omitempty"`
	CurrentDeployment map[string]any `json:"currentDeployment"`
	NextStage map[string]any `json:"nextStage"`
	QueuedDeploymentId string `json:"queuedDeploymentId"`
	Stages []any `json:"stages"`
	StartedAt float64 `json:"startedAt"`
	State string `json:"state"`
	Substate string `json:"substate"`
	UpdatedAt float64 `json:"updatedAt"`
}

// RollingReleaseUpdateData is the typed request payload for RollingRelease.UpdateTyped.
type RollingReleaseUpdateData struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	ActiveStage *map[string]any `json:"activeStage,omitempty"`
	AdvancementType *string `json:"advancementType,omitempty"`
	CanaryDeployment *map[string]any `json:"canaryDeployment,omitempty"`
	CurrentCanaryPercentage *float64 `json:"currentCanaryPercentage,omitempty"`
	CurrentDeployment *map[string]any `json:"currentDeployment,omitempty"`
	NextStage *map[string]any `json:"nextStage,omitempty"`
	QueuedDeploymentId *string `json:"queuedDeploymentId,omitempty"`
	Stages *[]any `json:"stages,omitempty"`
	StartedAt *float64 `json:"startedAt,omitempty"`
	State *string `json:"state,omitempty"`
	Substate *string `json:"substate,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// RollingReleaseRemoveMatch is the typed request payload for RollingRelease.RemoveTyped.
type RollingReleaseRemoveMatch struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Sandbox is the typed data model for the sandbox entity.
type Sandbox struct {
	Args []any `json:"args"`
	Command string `json:"command"`
	CreatedAt float64 `json:"createdAt"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	CurrentSandboxName *string `json:"currentSandboxName,omitempty"`
	CurrentSessionId *string `json:"currentSessionId,omitempty"`
	CurrentSnapshotId *string `json:"currentSnapshotId,omitempty"`
	Cwd string `json:"cwd"`
	DurationMs *float64 `json:"durationMs,omitempty"`
	Env *map[string]any `json:"env,omitempty"`
	ExitCode float64 `json:"exitCode"`
	Expiration *any `json:"expiration,omitempty"`
	ExpiresAt *float64 `json:"expiresAt,omitempty"`
	FailoverRegions *[]any `json:"failoverRegions,omitempty"`
	Id string `json:"id"`
	Image *string `json:"image,omitempty"`
	KeepLastSnapshots map[string]any `json:"keepLastSnapshots"`
	LastUsedAt float64 `json:"lastUsedAt"`
	Logs *bool `json:"logs,omitempty"`
	MaxSizeBytes float64 `json:"maxSizeBytes"`
	Memory *float64 `json:"memory,omitempty"`
	Mounts *map[string]any `json:"mounts,omitempty"`
	Name string `json:"name"`
	NetworkId *string `json:"networkId,omitempty"`
	NetworkPolicy *any `json:"networkPolicy,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	Path string `json:"path"`
	Persistent *bool `json:"persistent,omitempty"`
	Ports *[]any `json:"ports,omitempty"`
	ProjectId string `json:"projectId"`
	Recursive *bool `json:"recursive,omitempty"`
	Region *string `json:"region,omitempty"`
	Regions *[]any `json:"regions,omitempty"`
	Resources *map[string]any `json:"resources,omitempty"`
	Resumed bool `json:"resumed"`
	Routes []any `json:"routes"`
	Runtime *string `json:"runtime,omitempty"`
	Sandbox map[string]any `json:"sandbox"`
	Session map[string]any `json:"session"`
	SessionId string `json:"sessionId"`
	SizeBytes float64 `json:"sizeBytes"`
	SnapshotExpiration *any `json:"snapshotExpiration,omitempty"`
	Source *any `json:"source,omitempty"`
	SourceSessionId string `json:"sourceSessionId"`
	StartedAt float64 `json:"startedAt"`
	Status string `json:"status"`
	StatusUpdatedAt float64 `json:"statusUpdatedAt"`
	Sudo *bool `json:"sudo,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	TotalActiveCpuDurationMs *float64 `json:"totalActiveCpuDurationMs,omitempty"`
	TotalDurationMs *float64 `json:"totalDurationMs,omitempty"`
	TotalEgressBytes *float64 `json:"totalEgressBytes,omitempty"`
	TotalIngressBytes *float64 `json:"totalIngressBytes,omitempty"`
	UpdatedAt float64 `json:"updatedAt"`
	Vcpus *float64 `json:"vcpus,omitempty"`
	Wait *bool `json:"wait,omitempty"`
}

// SandboxLoadMatch is the typed request payload for Sandbox.LoadTyped.
type SandboxLoadMatch struct {
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
	Resume *bool `json:"resume,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// SandboxListMatch is the typed request payload for Sandbox.ListTyped.
type SandboxListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	NamePrefix *string `json:"name_prefix,omitempty"`
	Project *string `json:"project,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *any `json:"tag,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// SandboxCreateData is the typed request payload for Sandbox.CreateTyped.
type SandboxCreateData struct {
	Name string `json:"name"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Args []any `json:"args"`
	Command string `json:"command"`
	CreatedAt float64 `json:"createdAt"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	CurrentSandboxName *string `json:"currentSandboxName,omitempty"`
	CurrentSessionId *string `json:"currentSessionId,omitempty"`
	CurrentSnapshotId *string `json:"currentSnapshotId,omitempty"`
	Cwd string `json:"cwd"`
	DurationMs *float64 `json:"durationMs,omitempty"`
	Env *map[string]any `json:"env,omitempty"`
	ExitCode float64 `json:"exitCode"`
	Expiration *any `json:"expiration,omitempty"`
	ExpiresAt *float64 `json:"expiresAt,omitempty"`
	FailoverRegions *[]any `json:"failoverRegions,omitempty"`
	Id string `json:"id"`
	Image *string `json:"image,omitempty"`
	KeepLastSnapshots map[string]any `json:"keepLastSnapshots"`
	LastUsedAt float64 `json:"lastUsedAt"`
	Logs *bool `json:"logs,omitempty"`
	MaxSizeBytes float64 `json:"maxSizeBytes"`
	Memory *float64 `json:"memory,omitempty"`
	Mounts *map[string]any `json:"mounts,omitempty"`
	NetworkId *string `json:"networkId,omitempty"`
	NetworkPolicy *any `json:"networkPolicy,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	Path string `json:"path"`
	Persistent *bool `json:"persistent,omitempty"`
	Ports *[]any `json:"ports,omitempty"`
	ProjectId string `json:"projectId"`
	Recursive *bool `json:"recursive,omitempty"`
	Region *string `json:"region,omitempty"`
	Regions *[]any `json:"regions,omitempty"`
	Resources *map[string]any `json:"resources,omitempty"`
	Resumed bool `json:"resumed"`
	Routes []any `json:"routes"`
	Runtime *string `json:"runtime,omitempty"`
	Sandbox map[string]any `json:"sandbox"`
	Session map[string]any `json:"session"`
	SessionId string `json:"sessionId"`
	SizeBytes float64 `json:"sizeBytes"`
	SnapshotExpiration *any `json:"snapshotExpiration,omitempty"`
	Source *any `json:"source,omitempty"`
	SourceSessionId string `json:"sourceSessionId"`
	StartedAt float64 `json:"startedAt"`
	Status string `json:"status"`
	StatusUpdatedAt float64 `json:"statusUpdatedAt"`
	Sudo *bool `json:"sudo,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	TotalActiveCpuDurationMs *float64 `json:"totalActiveCpuDurationMs,omitempty"`
	TotalDurationMs *float64 `json:"totalDurationMs,omitempty"`
	TotalEgressBytes *float64 `json:"totalEgressBytes,omitempty"`
	TotalIngressBytes *float64 `json:"totalIngressBytes,omitempty"`
	UpdatedAt float64 `json:"updatedAt"`
	Vcpus *float64 `json:"vcpus,omitempty"`
	Wait *bool `json:"wait,omitempty"`
}

// SandboxUpdateData is the typed request payload for Sandbox.UpdateTyped.
type SandboxUpdateData struct {
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
	Resume *bool `json:"resume,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Args *[]any `json:"args,omitempty"`
	Command *string `json:"command,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	CurrentSandboxName *string `json:"currentSandboxName,omitempty"`
	CurrentSessionId *string `json:"currentSessionId,omitempty"`
	CurrentSnapshotId *string `json:"currentSnapshotId,omitempty"`
	Cwd *string `json:"cwd,omitempty"`
	DurationMs *float64 `json:"durationMs,omitempty"`
	Env *map[string]any `json:"env,omitempty"`
	ExitCode *float64 `json:"exitCode,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	ExpiresAt *float64 `json:"expiresAt,omitempty"`
	FailoverRegions *[]any `json:"failoverRegions,omitempty"`
	Image *string `json:"image,omitempty"`
	KeepLastSnapshots *map[string]any `json:"keepLastSnapshots,omitempty"`
	LastUsedAt *float64 `json:"lastUsedAt,omitempty"`
	Logs *bool `json:"logs,omitempty"`
	MaxSizeBytes *float64 `json:"maxSizeBytes,omitempty"`
	Memory *float64 `json:"memory,omitempty"`
	Mounts *map[string]any `json:"mounts,omitempty"`
	Name *string `json:"name,omitempty"`
	NetworkId *string `json:"networkId,omitempty"`
	NetworkPolicy *any `json:"networkPolicy,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	Path *string `json:"path,omitempty"`
	Persistent *bool `json:"persistent,omitempty"`
	Ports *[]any `json:"ports,omitempty"`
	ProjectId2 *string `json:"projectId,omitempty"`
	Recursive *bool `json:"recursive,omitempty"`
	Region *string `json:"region,omitempty"`
	Regions *[]any `json:"regions,omitempty"`
	Resources *map[string]any `json:"resources,omitempty"`
	Resumed *bool `json:"resumed,omitempty"`
	Routes *[]any `json:"routes,omitempty"`
	Runtime *string `json:"runtime,omitempty"`
	Sandbox *map[string]any `json:"sandbox,omitempty"`
	Session *map[string]any `json:"session,omitempty"`
	SessionId *string `json:"sessionId,omitempty"`
	SizeBytes *float64 `json:"sizeBytes,omitempty"`
	SnapshotExpiration *any `json:"snapshotExpiration,omitempty"`
	Source *any `json:"source,omitempty"`
	SourceSessionId *string `json:"sourceSessionId,omitempty"`
	StartedAt *float64 `json:"startedAt,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusUpdatedAt *float64 `json:"statusUpdatedAt,omitempty"`
	Sudo *bool `json:"sudo,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	TotalActiveCpuDurationMs *float64 `json:"totalActiveCpuDurationMs,omitempty"`
	TotalDurationMs *float64 `json:"totalDurationMs,omitempty"`
	TotalEgressBytes *float64 `json:"totalEgressBytes,omitempty"`
	TotalIngressBytes *float64 `json:"totalIngressBytes,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
	Vcpus *float64 `json:"vcpus,omitempty"`
	Wait *bool `json:"wait,omitempty"`
}

// SandboxRemoveMatch is the typed request payload for Sandbox.RemoveTyped.
type SandboxRemoveMatch struct {
	Id string `json:"id"`
	DeleteOrphanSnapshot *bool `json:"delete_orphan_snapshot,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Schema is the typed data model for the schema entity.
type Schema struct {
	Aggregations []any `json:"aggregations"`
	DefaultAggregation string `json:"defaultAggregation"`
	Description string `json:"description"`
	Dimensions []any `json:"dimensions"`
	Id string `json:"id"`
	Unit string `json:"unit"`
}

// SchemaLoadMatch is the typed request payload for Schema.LoadTyped.
type SchemaLoadMatch struct {
	Id string `json:"id"`
}

// SchemaListMatch is the typed request payload for Schema.ListTyped.
type SchemaListMatch struct {
	Aggregations *[]any `json:"aggregations,omitempty"`
	DefaultAggregation *string `json:"defaultAggregation,omitempty"`
	Description *string `json:"description,omitempty"`
	Dimensions *[]any `json:"dimensions,omitempty"`
	Id *string `json:"id,omitempty"`
	Unit *string `json:"unit,omitempty"`
}

// Security is the typed data model for the security entity.
type Security struct {
	Action *string `json:"Action,omitempty"`
	ActorId *string `json:"ActorId,omitempty"`
	CreatedAt string `json:"CreatedAt"`
	DeletedAt *string `json:"DeletedAt,omitempty"`
	Domain string `json:"Domain"`
	ExpiresAt *float64 `json:"ExpiresAt,omitempty"`
	Id string `json:"Id"`
	Ip string `json:"Ip"`
	IsProjectRule *bool `json:"IsProjectRule,omitempty"`
	Note *string `json:"Note,omitempty"`
	OwnerId string `json:"OwnerId"`
	ProjectId *string `json:"ProjectId,omitempty"`
	UpdatedAt string `json:"UpdatedAt"`
	UpdatedAtHour string `json:"UpdatedAtHour"`
	Action2 map[string]any `json:"action"`
	ActionType string `json:"action_type"`
	Active bool `json:"active"`
	AllSources *bool `json:"allSources,omitempty"`
	BotIdEnabled *bool `json:"botIdEnabled,omitempty"`
	Changes []any `json:"changes"`
	ConditionGroup []any `json:"conditionGroup"`
	Conditions *[]any `json:"conditions,omitempty"`
	Count float64 `json:"count"`
	Crs map[string]any `json:"crs"`
	Description *string `json:"description,omitempty"`
	Domain2 *string `json:"domain,omitempty"`
	EndTime string `json:"endTime"`
	FirewallEnabled bool `json:"firewallEnabled"`
	Host string `json:"host"`
	Id2 string `json:"id"`
	Ips []any `json:"ips"`
	IsActive bool `json:"isActive"`
	LogHeaders *any `json:"logHeaders,omitempty"`
	ManagedRules *map[string]any `json:"managedRules,omitempty"`
	Name string `json:"name"`
	Note2 *string `json:"note,omitempty"`
	OwnerId2 string `json:"ownerId"`
	ProjectKey string `json:"projectKey"`
	ProjectScope *bool `json:"projectScope,omitempty"`
	PublicIp string `json:"public_ip"`
	RuleId string `json:"ruleId"`
	RuleName string `json:"ruleName"`
	Rules []any `json:"rules"`
	Rulesets *any `json:"rulesets,omitempty"`
	SourceIp *string `json:"sourceIp,omitempty"`
	StartTime string `json:"startTime"`
	Ttl *float64 `json:"ttl,omitempty"`
	UpdatedAt2 string `json:"updatedAt"`
	Version float64 `json:"version"`
}

// SecurityLoadMatch is the typed request payload for Security.LoadTyped.
type SecurityLoadMatch struct {
	ConfigVersion *string `json:"config_version,omitempty"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Since *float64 `json:"since,omitempty"`
}

// SecurityListMatch is the typed request payload for Security.ListTyped.
type SecurityListMatch struct {
	Domain *string `json:"domain,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Offset *string `json:"offset,omitempty"`
	ProjectId string `json:"project_id"`
	ProjectScope *bool `json:"project_scope,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SourceIp *string `json:"source_ip,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// SecurityCreateData is the typed request payload for Security.CreateTyped.
type SecurityCreateData struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Action *string `json:"Action,omitempty"`
	ActorId *string `json:"ActorId,omitempty"`
	CreatedAt string `json:"CreatedAt"`
	DeletedAt *string `json:"DeletedAt,omitempty"`
	Domain string `json:"Domain"`
	ExpiresAt *float64 `json:"ExpiresAt,omitempty"`
	Id string `json:"Id"`
	Ip string `json:"Ip"`
	IsProjectRule *bool `json:"IsProjectRule,omitempty"`
	Note *string `json:"Note,omitempty"`
	OwnerId string `json:"OwnerId"`
	ProjectId2 *string `json:"ProjectId,omitempty"`
	UpdatedAt string `json:"UpdatedAt"`
	UpdatedAtHour string `json:"UpdatedAtHour"`
	Action2 map[string]any `json:"action"`
	ActionType string `json:"action_type"`
	Active bool `json:"active"`
	AllSources *bool `json:"allSources,omitempty"`
	BotIdEnabled *bool `json:"botIdEnabled,omitempty"`
	Changes []any `json:"changes"`
	ConditionGroup []any `json:"conditionGroup"`
	Conditions *[]any `json:"conditions,omitempty"`
	Count float64 `json:"count"`
	Crs map[string]any `json:"crs"`
	Description *string `json:"description,omitempty"`
	Domain2 *string `json:"domain,omitempty"`
	EndTime string `json:"endTime"`
	FirewallEnabled bool `json:"firewallEnabled"`
	Host string `json:"host"`
	Id2 string `json:"id"`
	Ips []any `json:"ips"`
	IsActive bool `json:"isActive"`
	LogHeaders *any `json:"logHeaders,omitempty"`
	ManagedRules *map[string]any `json:"managedRules,omitempty"`
	Name string `json:"name"`
	Note2 *string `json:"note,omitempty"`
	OwnerId2 string `json:"ownerId"`
	ProjectKey string `json:"projectKey"`
	ProjectScope *bool `json:"projectScope,omitempty"`
	PublicIp string `json:"public_ip"`
	RuleId string `json:"ruleId"`
	RuleName string `json:"ruleName"`
	Rules []any `json:"rules"`
	Rulesets *any `json:"rulesets,omitempty"`
	SourceIp *string `json:"sourceIp,omitempty"`
	StartTime string `json:"startTime"`
	Ttl *float64 `json:"ttl,omitempty"`
	UpdatedAt2 string `json:"updatedAt"`
	Version float64 `json:"version"`
}

// SecurityUpdateData is the typed request payload for Security.UpdateTyped.
type SecurityUpdateData struct {
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Action *string `json:"Action,omitempty"`
	ActorId *string `json:"ActorId,omitempty"`
	CreatedAt *string `json:"CreatedAt,omitempty"`
	DeletedAt *string `json:"DeletedAt,omitempty"`
	Domain *string `json:"Domain,omitempty"`
	ExpiresAt *float64 `json:"ExpiresAt,omitempty"`
	Id *string `json:"Id,omitempty"`
	Ip *string `json:"Ip,omitempty"`
	IsProjectRule *bool `json:"IsProjectRule,omitempty"`
	Note *string `json:"Note,omitempty"`
	OwnerId *string `json:"OwnerId,omitempty"`
	ProjectId2 *string `json:"ProjectId,omitempty"`
	UpdatedAt *string `json:"UpdatedAt,omitempty"`
	UpdatedAtHour *string `json:"UpdatedAtHour,omitempty"`
	Action2 *map[string]any `json:"action,omitempty"`
	ActionType *string `json:"action_type,omitempty"`
	Active *bool `json:"active,omitempty"`
	AllSources *bool `json:"allSources,omitempty"`
	BotIdEnabled *bool `json:"botIdEnabled,omitempty"`
	Changes *[]any `json:"changes,omitempty"`
	ConditionGroup *[]any `json:"conditionGroup,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	Count *float64 `json:"count,omitempty"`
	Crs *map[string]any `json:"crs,omitempty"`
	Description *string `json:"description,omitempty"`
	Domain2 *string `json:"domain,omitempty"`
	EndTime *string `json:"endTime,omitempty"`
	FirewallEnabled *bool `json:"firewallEnabled,omitempty"`
	Host *string `json:"host,omitempty"`
	Id2 *string `json:"id,omitempty"`
	Ips *[]any `json:"ips,omitempty"`
	IsActive *bool `json:"isActive,omitempty"`
	LogHeaders *any `json:"logHeaders,omitempty"`
	ManagedRules *map[string]any `json:"managedRules,omitempty"`
	Name *string `json:"name,omitempty"`
	Note2 *string `json:"note,omitempty"`
	OwnerId2 *string `json:"ownerId,omitempty"`
	ProjectKey *string `json:"projectKey,omitempty"`
	ProjectScope *bool `json:"projectScope,omitempty"`
	PublicIp *string `json:"public_ip,omitempty"`
	RuleId *string `json:"ruleId,omitempty"`
	RuleName *string `json:"ruleName,omitempty"`
	Rules *[]any `json:"rules,omitempty"`
	Rulesets *any `json:"rulesets,omitempty"`
	SourceIp *string `json:"sourceIp,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
	Ttl *float64 `json:"ttl,omitempty"`
	UpdatedAt2 *string `json:"updatedAt,omitempty"`
	Version *float64 `json:"version,omitempty"`
}

// SecurityRemoveMatch is the typed request payload for Security.RemoveTyped.
type SecurityRemoveMatch struct {
	ConfigVersion string `json:"config_version"`
}

// Segment is the typed data model for the segment entity.
type Segment struct {
	CreatedAt float64 `json:"createdAt"`
	CreatedBy *string `json:"createdBy,omitempty"`
	Data map[string]any `json:"data"`
	Description *string `json:"description,omitempty"`
	Hint string `json:"hint"`
	Id string `json:"id"`
	Label string `json:"label"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	ProjectId string `json:"projectId"`
	Slug string `json:"slug"`
	TypeName string `json:"typeName"`
	UpdatedAt float64 `json:"updatedAt"`
	UsedByFlags *[]any `json:"usedByFlags,omitempty"`
	UsedBySegments *[]any `json:"usedBySegments,omitempty"`
}

// SegmentLoadMatch is the typed request payload for Segment.LoadTyped.
type SegmentLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	WithMetadata *bool `json:"with_metadata,omitempty"`
}

// Storage is the typed data model for the storage entity.
type Storage struct {
	Access *string `json:"access,omitempty"`
	Count float64 `json:"count"`
	Id *string `json:"id,omitempty"`
	IsTokenExpired bool `json:"isTokenExpired"`
	Kind *string `json:"kind,omitempty"`
	Name string `json:"name"`
	ProjectFilter *map[string]any `json:"projectFilter,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ProjectsMetadata []any `json:"projectsMetadata"`
	Region string `json:"region"`
	Size float64 `json:"size"`
	Status string `json:"status"`
	TotalConnectedProjects *float64 `json:"totalConnectedProjects,omitempty"`
	UsageQuotaExceeded bool `json:"usageQuotaExceeded"`
}

// StorageLoadMatch is the typed request payload for Storage.LoadTyped.
type StorageLoadMatch struct {
	Id string `json:"id"`
	IncludeGuide *bool `json:"include_guide,omitempty"`
	SkipMetadata *bool `json:"skip_metadata,omitempty"`
}

// StorageCreateData is the typed request payload for Storage.CreateTyped.
type StorageCreateData struct {
	Access *string `json:"access,omitempty"`
	Count float64 `json:"count"`
	Id *string `json:"id,omitempty"`
	IsTokenExpired bool `json:"isTokenExpired"`
	Kind *string `json:"kind,omitempty"`
	Name string `json:"name"`
	ProjectFilter *map[string]any `json:"projectFilter,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ProjectsMetadata []any `json:"projectsMetadata"`
	Region string `json:"region"`
	Size float64 `json:"size"`
	Status string `json:"status"`
	TotalConnectedProjects *float64 `json:"totalConnectedProjects,omitempty"`
	UsageQuotaExceeded bool `json:"usageQuotaExceeded"`
}

// StorageRemoveMatch is the typed request payload for Storage.RemoveTyped.
type StorageRemoveMatch struct {
	Id string `json:"id"`
}

// Team is the typed data model for the team entity.
type Team struct {
	AccessRequestedAt float64 `json:"accessRequestedAt"`
	ApiKeysInvalidatedAt *float64 `json:"apiKeysInvalidatedAt,omitempty"`
	AppTokensInvalidatedAt *float64 `json:"appTokensInvalidatedAt,omitempty"`
	Attribution *map[string]any `json:"attribution,omitempty"`
	Avatar string `json:"avatar"`
	Billing map[string]any `json:"billing"`
	Bitbucket map[string]any `json:"bitbucket"`
	Confirmed bool `json:"confirmed"`
	Connect *map[string]any `json:"connect,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatorId string `json:"creatorId"`
	DefaultDeploymentProtection *map[string]any `json:"defaultDeploymentProtection,omitempty"`
	DefaultExpirationSettings *map[string]any `json:"defaultExpirationSettings,omitempty"`
	DefaultPassport map[string]any `json:"defaultPassport"`
	DefaultProjectJobs *map[string]any `json:"defaultProjectJobs,omitempty"`
	DefaultRoles *map[string]any `json:"defaultRoles,omitempty"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	Description string `json:"description"`
	DisableHardAutoBlocks *any `json:"disableHardAutoBlocks,omitempty"`
	DisableRepositoryDispatchEvents *bool `json:"disableRepositoryDispatchEvents,omitempty"`
	DisjunctiveProductionSecretPolicy *string `json:"disjunctiveProductionSecretPolicy,omitempty"`
	DpAccessRequestsMode *string `json:"dpAccessRequestsMode,omitempty"`
	EmailDomain *string `json:"emailDomain,omitempty"`
	EnablePolyrepoBranchRouting *bool `json:"enablePolyrepoBranchRouting,omitempty"`
	EnablePreviewFeedback *string `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *string `json:"enableProductionFeedback,omitempty"`
	FallbackEnvironment *string `json:"fallbackEnvironment,omitempty"`
	Github map[string]any `json:"github"`
	Gitlab map[string]any `json:"gitlab"`
	HideIpAddresses *bool `json:"hideIpAddresses,omitempty"`
	HideIpAddressesInLogDrains *bool `json:"hideIpAddressesInLogDrains,omitempty"`
	Id string `json:"id"`
	IntegrationTokensInvalidatedAt *float64 `json:"integrationTokensInvalidatedAt,omitempty"`
	InviteCode *string `json:"inviteCode,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	JoinedFrom map[string]any `json:"joinedFrom"`
	Membership map[string]any `json:"membership"`
	Name string `json:"name"`
	NsnbConfig map[string]any `json:"nsnbConfig"`
	OrgRootTeamId *string `json:"orgRootTeamId,omitempty"`
	Pagination map[string]any `json:"pagination"`
	ParentId *string `json:"parentId,omitempty"`
	PersonalAccessTokensInvalidatedAt *float64 `json:"personalAccessTokensInvalidatedAt,omitempty"`
	Platform *bool `json:"platform,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	Projects *[]any `json:"projects,omitempty"`
	RegenerateInviteCode *bool `json:"regenerateInviteCode,omitempty"`
	RemoteCaching *map[string]any `json:"remoteCaching,omitempty"`
	RequireVerifiedCommits *bool `json:"requireVerifiedCommits,omitempty"`
	ResourceConfig *map[string]any `json:"resourceConfig,omitempty"`
	Role *string `json:"role,omitempty"`
	Saml map[string]any `json:"saml"`
	SensitiveEnvironmentVariablePolicy *string `json:"sensitiveEnvironmentVariablePolicy,omitempty"`
	Slug string `json:"slug"`
	StagingPrefix string `json:"stagingPrefix"`
	StrictConnectors map[string]any `json:"strictConnectors"`
	StrictDeploymentProtectionSettings map[string]any `json:"strictDeploymentProtectionSettings"`
	StrictPasswordProtectionSettings map[string]any `json:"strictPasswordProtectionSettings"`
	StrictShareableLinks map[string]any `json:"strictShareableLinks"`
	TeamName string `json:"teamName"`
	TeamPermissions *[]any `json:"teamPermissions,omitempty"`
	TeamSlug string `json:"teamSlug"`
	Teams []any `json:"teams"`
	UpdatedAt float64 `json:"updatedAt"`
}

// TeamLoadMatch is the typed request payload for Team.LoadTyped.
type TeamLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Since *float64 `json:"since,omitempty"`
	Until *float64 `json:"until,omitempty"`
}

// TeamCreateData is the typed request payload for Team.CreateTyped.
type TeamCreateData struct {
	AccessRequestedAt float64 `json:"accessRequestedAt"`
	ApiKeysInvalidatedAt *float64 `json:"apiKeysInvalidatedAt,omitempty"`
	AppTokensInvalidatedAt *float64 `json:"appTokensInvalidatedAt,omitempty"`
	Attribution *map[string]any `json:"attribution,omitempty"`
	Avatar string `json:"avatar"`
	Billing map[string]any `json:"billing"`
	Bitbucket map[string]any `json:"bitbucket"`
	Confirmed bool `json:"confirmed"`
	Connect *map[string]any `json:"connect,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	CreatorId string `json:"creatorId"`
	DefaultDeploymentProtection *map[string]any `json:"defaultDeploymentProtection,omitempty"`
	DefaultExpirationSettings *map[string]any `json:"defaultExpirationSettings,omitempty"`
	DefaultPassport map[string]any `json:"defaultPassport"`
	DefaultProjectJobs *map[string]any `json:"defaultProjectJobs,omitempty"`
	DefaultRoles *map[string]any `json:"defaultRoles,omitempty"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	Description string `json:"description"`
	DisableHardAutoBlocks *any `json:"disableHardAutoBlocks,omitempty"`
	DisableRepositoryDispatchEvents *bool `json:"disableRepositoryDispatchEvents,omitempty"`
	DisjunctiveProductionSecretPolicy *string `json:"disjunctiveProductionSecretPolicy,omitempty"`
	DpAccessRequestsMode *string `json:"dpAccessRequestsMode,omitempty"`
	EmailDomain *string `json:"emailDomain,omitempty"`
	EnablePolyrepoBranchRouting *bool `json:"enablePolyrepoBranchRouting,omitempty"`
	EnablePreviewFeedback *string `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *string `json:"enableProductionFeedback,omitempty"`
	FallbackEnvironment *string `json:"fallbackEnvironment,omitempty"`
	Github map[string]any `json:"github"`
	Gitlab map[string]any `json:"gitlab"`
	HideIpAddresses *bool `json:"hideIpAddresses,omitempty"`
	HideIpAddressesInLogDrains *bool `json:"hideIpAddressesInLogDrains,omitempty"`
	Id string `json:"id"`
	IntegrationTokensInvalidatedAt *float64 `json:"integrationTokensInvalidatedAt,omitempty"`
	InviteCode *string `json:"inviteCode,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	JoinedFrom map[string]any `json:"joinedFrom"`
	Membership map[string]any `json:"membership"`
	Name string `json:"name"`
	NsnbConfig map[string]any `json:"nsnbConfig"`
	OrgRootTeamId *string `json:"orgRootTeamId,omitempty"`
	Pagination map[string]any `json:"pagination"`
	ParentId *string `json:"parentId,omitempty"`
	PersonalAccessTokensInvalidatedAt *float64 `json:"personalAccessTokensInvalidatedAt,omitempty"`
	Platform *bool `json:"platform,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	Projects *[]any `json:"projects,omitempty"`
	RegenerateInviteCode *bool `json:"regenerateInviteCode,omitempty"`
	RemoteCaching *map[string]any `json:"remoteCaching,omitempty"`
	RequireVerifiedCommits *bool `json:"requireVerifiedCommits,omitempty"`
	ResourceConfig *map[string]any `json:"resourceConfig,omitempty"`
	Role *string `json:"role,omitempty"`
	Saml map[string]any `json:"saml"`
	SensitiveEnvironmentVariablePolicy *string `json:"sensitiveEnvironmentVariablePolicy,omitempty"`
	Slug string `json:"slug"`
	StagingPrefix string `json:"stagingPrefix"`
	StrictConnectors map[string]any `json:"strictConnectors"`
	StrictDeploymentProtectionSettings map[string]any `json:"strictDeploymentProtectionSettings"`
	StrictPasswordProtectionSettings map[string]any `json:"strictPasswordProtectionSettings"`
	StrictShareableLinks map[string]any `json:"strictShareableLinks"`
	TeamName string `json:"teamName"`
	TeamPermissions *[]any `json:"teamPermissions,omitempty"`
	TeamSlug string `json:"teamSlug"`
	Teams []any `json:"teams"`
	UpdatedAt float64 `json:"updatedAt"`
}

// TeamUpdateData is the typed request payload for Team.UpdateTyped.
type TeamUpdateData struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	Uid *string `json:"uid,omitempty"`
	AccessRequestedAt *float64 `json:"accessRequestedAt,omitempty"`
	ApiKeysInvalidatedAt *float64 `json:"apiKeysInvalidatedAt,omitempty"`
	AppTokensInvalidatedAt *float64 `json:"appTokensInvalidatedAt,omitempty"`
	Attribution *map[string]any `json:"attribution,omitempty"`
	Avatar *string `json:"avatar,omitempty"`
	Billing *map[string]any `json:"billing,omitempty"`
	Bitbucket *map[string]any `json:"bitbucket,omitempty"`
	Confirmed *bool `json:"confirmed,omitempty"`
	Connect *map[string]any `json:"connect,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	CreatorId *string `json:"creatorId,omitempty"`
	DefaultDeploymentProtection *map[string]any `json:"defaultDeploymentProtection,omitempty"`
	DefaultExpirationSettings *map[string]any `json:"defaultExpirationSettings,omitempty"`
	DefaultPassport *map[string]any `json:"defaultPassport,omitempty"`
	DefaultProjectJobs *map[string]any `json:"defaultProjectJobs,omitempty"`
	DefaultRoles *map[string]any `json:"defaultRoles,omitempty"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	Description *string `json:"description,omitempty"`
	DisableHardAutoBlocks *any `json:"disableHardAutoBlocks,omitempty"`
	DisableRepositoryDispatchEvents *bool `json:"disableRepositoryDispatchEvents,omitempty"`
	DisjunctiveProductionSecretPolicy *string `json:"disjunctiveProductionSecretPolicy,omitempty"`
	DpAccessRequestsMode *string `json:"dpAccessRequestsMode,omitempty"`
	EmailDomain *string `json:"emailDomain,omitempty"`
	EnablePolyrepoBranchRouting *bool `json:"enablePolyrepoBranchRouting,omitempty"`
	EnablePreviewFeedback *string `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *string `json:"enableProductionFeedback,omitempty"`
	FallbackEnvironment *string `json:"fallbackEnvironment,omitempty"`
	Github *map[string]any `json:"github,omitempty"`
	Gitlab *map[string]any `json:"gitlab,omitempty"`
	HideIpAddresses *bool `json:"hideIpAddresses,omitempty"`
	HideIpAddressesInLogDrains *bool `json:"hideIpAddressesInLogDrains,omitempty"`
	IntegrationTokensInvalidatedAt *float64 `json:"integrationTokensInvalidatedAt,omitempty"`
	InviteCode *string `json:"inviteCode,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	JoinedFrom *map[string]any `json:"joinedFrom,omitempty"`
	Membership *map[string]any `json:"membership,omitempty"`
	Name *string `json:"name,omitempty"`
	NsnbConfig *map[string]any `json:"nsnbConfig,omitempty"`
	OrgRootTeamId *string `json:"orgRootTeamId,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	PersonalAccessTokensInvalidatedAt *float64 `json:"personalAccessTokensInvalidatedAt,omitempty"`
	Platform *bool `json:"platform,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	Projects *[]any `json:"projects,omitempty"`
	RegenerateInviteCode *bool `json:"regenerateInviteCode,omitempty"`
	RemoteCaching *map[string]any `json:"remoteCaching,omitempty"`
	RequireVerifiedCommits *bool `json:"requireVerifiedCommits,omitempty"`
	ResourceConfig *map[string]any `json:"resourceConfig,omitempty"`
	Role *string `json:"role,omitempty"`
	Saml *map[string]any `json:"saml,omitempty"`
	SensitiveEnvironmentVariablePolicy *string `json:"sensitiveEnvironmentVariablePolicy,omitempty"`
	StagingPrefix *string `json:"stagingPrefix,omitempty"`
	StrictConnectors *map[string]any `json:"strictConnectors,omitempty"`
	StrictDeploymentProtectionSettings *map[string]any `json:"strictDeploymentProtectionSettings,omitempty"`
	StrictPasswordProtectionSettings *map[string]any `json:"strictPasswordProtectionSettings,omitempty"`
	StrictShareableLinks *map[string]any `json:"strictShareableLinks,omitempty"`
	TeamName *string `json:"teamName,omitempty"`
	TeamPermissions *[]any `json:"teamPermissions,omitempty"`
	TeamSlug *string `json:"teamSlug,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
	UpdatedAt *float64 `json:"updatedAt,omitempty"`
}

// TeamRemoveMatch is the typed request payload for Team.RemoveTyped.
type TeamRemoveMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	NewDefaultTeamId *string `json:"new_default_team_id,omitempty"`
	Uid *string `json:"uid,omitempty"`
	InviteId *string `json:"invite_id,omitempty"`
}

// TldName is the typed data model for the tld_name entity.
type TldName struct {
}

// TldNameListMatch is the typed request payload for TldName.ListTyped.
type TldNameListMatch struct {
	TeamId *string `json:"team_id,omitempty"`
}

// Toggle is the typed data model for the toggle entity.
type Toggle struct {
	Value bool `json:"value"`
}

// ToggleCreateData is the typed request payload for Toggle.CreateTyped.
type ToggleCreateData struct {
	ProjectId string `json:"project_id"`
	Value bool `json:"value"`
}

// User is the typed data model for the user entity.
type User struct {
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	Entities []any `json:"entities"`
	Id string `json:"id"`
	Payload *any `json:"payload,omitempty"`
	Principal *any `json:"principal,omitempty"`
	PrincipalId string `json:"principalId"`
	RequestId *string `json:"requestId,omitempty"`
	SessionId *string `json:"sessionId,omitempty"`
	Text string `json:"text"`
	TokenId *string `json:"tokenId,omitempty"`
	Type *string `json:"type,omitempty"`
	User map[string]any `json:"user"`
	UserId *string `json:"userId,omitempty"`
	Via *[]any `json:"via,omitempty"`
	ViaIds *[]any `json:"viaIds,omitempty"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Entities *[]any `json:"entities,omitempty"`
	Id string `json:"id"`
	Payload *any `json:"payload,omitempty"`
	Principal *any `json:"principal,omitempty"`
	PrincipalId *string `json:"principalId,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	SessionId *string `json:"sessionId,omitempty"`
	Text *string `json:"text,omitempty"`
	TokenId *string `json:"tokenId,omitempty"`
	Type *string `json:"type,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	UserId *string `json:"userId,omitempty"`
	Via *[]any `json:"via,omitempty"`
	ViaIds *[]any `json:"viaIds,omitempty"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	EntityId *string `json:"entity_id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	PrincipalId *string `json:"principal_id,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	Since *string `json:"since,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Type *string `json:"type,omitempty"`
	Until *string `json:"until,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	WithPayload *string `json:"with_payload,omitempty"`
}

// UserRemoveMatch is the typed request payload for User.RemoveTyped.
type UserRemoveMatch struct {
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt *float64 `json:"createdAt,omitempty"`
	Entities *[]any `json:"entities,omitempty"`
	Id string `json:"id"`
	Payload *any `json:"payload,omitempty"`
	Principal *any `json:"principal,omitempty"`
	PrincipalId *string `json:"principalId,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	SessionId *string `json:"sessionId,omitempty"`
	Text *string `json:"text,omitempty"`
	TokenId *string `json:"tokenId,omitempty"`
	Type *string `json:"type,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	UserId *string `json:"userId,omitempty"`
	Via *[]any `json:"via,omitempty"`
	ViaIds *[]any `json:"viaIds,omitempty"`
}

// Vcr is the typed data model for the vcr entity.
type Vcr struct {
	Arch *string `json:"arch,omitempty"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	ImageId string `json:"imageId"`
	Kind string `json:"kind"`
	Layers []any `json:"layers"`
	ManifestDigest string `json:"manifestDigest"`
	Name string `json:"name"`
	Platform *string `json:"platform,omitempty"`
	ProjectId string `json:"projectId"`
	Public bool `json:"public"`
	PushedBy *string `json:"pushedBy,omitempty"`
	RepositoryId string `json:"repositoryId"`
	SizeInBytes float64 `json:"sizeInBytes"`
	Status string `json:"status"`
	Tag string `json:"tag"`
	Tags []any `json:"tags"`
	TeamId string `json:"teamId"`
	TeamSlug string `json:"teamSlug"`
	UpdatedAt string `json:"updatedAt"`
}

// VcrLoadMatch is the typed request payload for Vcr.LoadTyped.
type VcrLoadMatch struct {
	IdOrName string `json:"id_or_name"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// VcrListMatch is the typed request payload for Vcr.ListTyped.
type VcrListMatch struct {
	IdOrName string `json:"id_or_name"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// VcrCreateData is the typed request payload for Vcr.CreateTyped.
type VcrCreateData struct {
	IdOrName string `json:"id_or_name"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Arch *string `json:"arch,omitempty"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	ImageId string `json:"imageId"`
	Kind string `json:"kind"`
	Layers []any `json:"layers"`
	ManifestDigest string `json:"manifestDigest"`
	Name string `json:"name"`
	Platform *string `json:"platform,omitempty"`
	ProjectId2 string `json:"projectId"`
	Public bool `json:"public"`
	PushedBy *string `json:"pushedBy,omitempty"`
	RepositoryId string `json:"repositoryId"`
	SizeInBytes float64 `json:"sizeInBytes"`
	Status string `json:"status"`
	Tag string `json:"tag"`
	Tags []any `json:"tags"`
	TeamId2 string `json:"teamId"`
	TeamSlug string `json:"teamSlug"`
	UpdatedAt string `json:"updatedAt"`
}

// VcrUpdateData is the typed request payload for Vcr.UpdateTyped.
type VcrUpdateData struct {
	ProjectSlug string `json:"project_slug"`
	RepositoryName string `json:"repository_name"`
	TeamSlug string `json:"team_slug"`
	Uuid *string `json:"uuid,omitempty"`
	Digest *string `json:"digest,omitempty"`
	Reference *string `json:"reference,omitempty"`
	Arch *string `json:"arch,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageId *string `json:"imageId,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Layers *[]any `json:"layers,omitempty"`
	ManifestDigest *string `json:"manifestDigest,omitempty"`
	Name *string `json:"name,omitempty"`
	Platform *string `json:"platform,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	Public *bool `json:"public,omitempty"`
	PushedBy *string `json:"pushedBy,omitempty"`
	RepositoryId *string `json:"repositoryId,omitempty"`
	SizeInBytes *float64 `json:"sizeInBytes,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	TeamId *string `json:"teamId,omitempty"`
	TeamSlug2 *string `json:"teamSlug,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// VcrRemoveMatch is the typed request payload for Vcr.RemoveTyped.
type VcrRemoveMatch struct {
	IdOrName string `json:"id_or_name"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// VcrImageList is the typed data model for the vcr_image_list entity.
type VcrImageList struct {
	Arch *string `json:"arch,omitempty"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Kind string `json:"kind"`
	ManifestDigest string `json:"manifestDigest"`
	Platform *string `json:"platform,omitempty"`
	PushedBy *string `json:"pushedBy,omitempty"`
	RepositoryId string `json:"repositoryId"`
	SizeInBytes float64 `json:"sizeInBytes"`
	Status string `json:"status"`
	Tags []any `json:"tags"`
}

// VcrImageListListMatch is the typed request payload for VcrImageList.ListTyped.
type VcrImageListListMatch struct {
	IdOrName string `json:"id_or_name"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Untagged *bool `json:"untagged,omitempty"`
}

// VcrRepositoryList is the typed data model for the vcr_repository_list entity.
type VcrRepositoryList struct {
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Name string `json:"name"`
	ProjectId string `json:"projectId"`
	Public bool `json:"public"`
	UpdatedAt string `json:"updatedAt"`
}

// VcrRepositoryListListMatch is the typed request payload for VcrRepositoryList.ListTyped.
type VcrRepositoryListListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// VcrRepositoryPermissionList is the typed data model for the vcr_repository_permission_list entity.
type VcrRepositoryPermissionList struct {
	CreatedAt string `json:"createdAt"`
	RepositoryId string `json:"repositoryId"`
	TeamId string `json:"teamId"`
	TeamSlug string `json:"teamSlug"`
}

// VcrRepositoryPermissionListListMatch is the typed request payload for VcrRepositoryPermissionList.ListTyped.
type VcrRepositoryPermissionListListMatch struct {
	IdOrName string `json:"id_or_name"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ProjectId string `json:"project_id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// WebAnalytics is the typed data model for the web_analytics entity.
type WebAnalytics struct {
	Data any `json:"data"`
	Query map[string]any `json:"query"`
	Version float64 `json:"version"`
}

// WebAnalyticsLoadMatch is the typed request payload for WebAnalytics.LoadTyped.
type WebAnalyticsLoadMatch struct {
	By *[]any `json:"by,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ProjectId string `json:"project_id"`
	Since *any `json:"since,omitempty"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Until *any `json:"until,omitempty"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
	AlertRuleIds *[]any `json:"alertRuleIds,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	Events []any `json:"events"`
	Id string `json:"id"`
	OwnerId string `json:"ownerId"`
	ProjectIds *[]any `json:"projectIds,omitempty"`
	Secret string `json:"secret"`
	UpdatedAt float64 `json:"updatedAt"`
	Url string `json:"url"`
}

// WebhookLoadMatch is the typed request payload for Webhook.LoadTyped.
type WebhookLoadMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AlertRuleIds *[]any `json:"alertRuleIds,omitempty"`
	CreatedAt float64 `json:"createdAt"`
	Events []any `json:"events"`
	Id string `json:"id"`
	OwnerId string `json:"ownerId"`
	ProjectIds *[]any `json:"projectIds,omitempty"`
	Secret string `json:"secret"`
	UpdatedAt float64 `json:"updatedAt"`
	Url string `json:"url"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
