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

// Project is the typed data model for the project entity.
type Project struct {
	Abuse map[string]any `json:"abuse"`
	AccountId string `json:"accountId"`
	Alias []any `json:"alias"`
	Analytics map[string]any `json:"analytics"`
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
	EnvironmentVariables *[]any `json:"environmentVariables,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	Features *map[string]any `json:"features,omitempty"`
	Framework *string `json:"framework,omitempty"`
	GitComments map[string]any `json:"gitComments"`
	GitForkProtection *bool `json:"gitForkProtection,omitempty"`
	GitLFS *bool `json:"gitLFS,omitempty"`
	GitProviderOptions map[string]any `json:"gitProviderOptions"`
	GitRepository map[string]any `json:"gitRepository"`
	HasActiveBranches *bool `json:"hasActiveBranches,omitempty"`
	HasDeployments *bool `json:"hasDeployments,omitempty"`
	Id string `json:"id"`
	InstallCommand *string `json:"installCommand,omitempty"`
	Integrations *[]any `json:"integrations,omitempty"`
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
	OptionsAllowlist map[string]any `json:"optionsAllowlist"`
	OutputDirectory *string `json:"outputDirectory,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Passport map[string]any `json:"passport"`
	PasswordProtection *map[string]any `json:"passwordProtection,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	PreviewDeploymentsDisabled *bool `json:"previewDeploymentsDisabled,omitempty"`
	ProductionDeploymentsFastLane *bool `json:"productionDeploymentsFastLane,omitempty"`
	ProtectedSourcemaps *bool `json:"protectedSourcemaps,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	ProtectionConfig *map[string]any `json:"protectionConfig,omitempty"`
	PublicSource *bool `json:"publicSource,omitempty"`
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
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Abuse map[string]any `json:"abuse"`
	AccountId string `json:"accountId"`
	Alias []any `json:"alias"`
	Analytics map[string]any `json:"analytics"`
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
	EnvironmentVariables *[]any `json:"environmentVariables,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	Features *map[string]any `json:"features,omitempty"`
	Framework *string `json:"framework,omitempty"`
	GitComments map[string]any `json:"gitComments"`
	GitForkProtection *bool `json:"gitForkProtection,omitempty"`
	GitLFS *bool `json:"gitLFS,omitempty"`
	GitProviderOptions map[string]any `json:"gitProviderOptions"`
	GitRepository map[string]any `json:"gitRepository"`
	HasActiveBranches *bool `json:"hasActiveBranches,omitempty"`
	HasDeployments *bool `json:"hasDeployments,omitempty"`
	Id string `json:"id"`
	InstallCommand *string `json:"installCommand,omitempty"`
	Integrations *[]any `json:"integrations,omitempty"`
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
	OptionsAllowlist map[string]any `json:"optionsAllowlist"`
	OutputDirectory *string `json:"outputDirectory,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Passport map[string]any `json:"passport"`
	PasswordProtection *map[string]any `json:"passwordProtection,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	PreviewDeploymentsDisabled *bool `json:"previewDeploymentsDisabled,omitempty"`
	ProductionDeploymentsFastLane *bool `json:"productionDeploymentsFastLane,omitempty"`
	ProtectedSourcemaps *bool `json:"protectedSourcemaps,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	ProtectionConfig *map[string]any `json:"protectionConfig,omitempty"`
	PublicSource *bool `json:"publicSource,omitempty"`
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
	WebAnalytics map[string]any `json:"webAnalytics"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	Id string `json:"id"`
	Slug *string `json:"slug,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Abuse *map[string]any `json:"abuse,omitempty"`
	AccountId *string `json:"accountId,omitempty"`
	Alias *[]any `json:"alias,omitempty"`
	Analytics *map[string]any `json:"analytics,omitempty"`
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
	Crons *map[string]any `json:"crons,omitempty"`
	CustomEnvironments *[]any `json:"customEnvironments,omitempty"`
	CustomerSupportCodeVisibility *bool `json:"customerSupportCodeVisibility,omitempty"`
	DataCache *map[string]any `json:"dataCache,omitempty"`
	DefaultResourceConfig *map[string]any `json:"defaultResourceConfig,omitempty"`
	DeploymentExpiration *map[string]any `json:"deploymentExpiration,omitempty"`
	DeploymentPolicy *map[string]any `json:"deploymentPolicy,omitempty"`
	DevCommand *string `json:"devCommand,omitempty"`
	DirectoryListing *bool `json:"directoryListing,omitempty"`
	DismissedToasts *[]any `json:"dismissedToasts,omitempty"`
	EnableAffectedProjectsDeployments *bool `json:"enableAffectedProjectsDeployments,omitempty"`
	EnableExternalRewriteCaching *bool `json:"enableExternalRewriteCaching,omitempty"`
	EnablePreviewFeedback *bool `json:"enablePreviewFeedback,omitempty"`
	EnableProductionFeedback *bool `json:"enableProductionFeedback,omitempty"`
	Env *[]any `json:"env,omitempty"`
	EnvironmentVariables *[]any `json:"environmentVariables,omitempty"`
	Expiration *any `json:"expiration,omitempty"`
	Features *map[string]any `json:"features,omitempty"`
	Framework *string `json:"framework,omitempty"`
	GitComments *map[string]any `json:"gitComments,omitempty"`
	GitForkProtection *bool `json:"gitForkProtection,omitempty"`
	GitLFS *bool `json:"gitLFS,omitempty"`
	GitProviderOptions *map[string]any `json:"gitProviderOptions,omitempty"`
	GitRepository *map[string]any `json:"gitRepository,omitempty"`
	HasActiveBranches *bool `json:"hasActiveBranches,omitempty"`
	HasDeployments *bool `json:"hasDeployments,omitempty"`
	InstallCommand *string `json:"installCommand,omitempty"`
	Integrations *[]any `json:"integrations,omitempty"`
	InternalRoutes *[]any `json:"internalRoutes,omitempty"`
	IpBuckets *[]any `json:"ipBuckets,omitempty"`
	Jobs *map[string]any `json:"jobs,omitempty"`
	LastAliasRequest *map[string]any `json:"lastAliasRequest,omitempty"`
	LastRollbackTarget *map[string]any `json:"lastRollbackTarget,omitempty"`
	LatestDeployments *[]any `json:"latestDeployments,omitempty"`
	Link *string `json:"link,omitempty"`
	Live *bool `json:"live,omitempty"`
	Microfrontends *any `json:"microfrontends,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeVersion *string `json:"nodeVersion,omitempty"`
	OidcTokenConfig *map[string]any `json:"oidcTokenConfig,omitempty"`
	OptionsAllowlist *map[string]any `json:"optionsAllowlist,omitempty"`
	OutputDirectory *string `json:"outputDirectory,omitempty"`
	PassiveConnectConfigurationId *string `json:"passiveConnectConfigurationId,omitempty"`
	Passport *map[string]any `json:"passport,omitempty"`
	PasswordProtection *map[string]any `json:"passwordProtection,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	PreviewDeploymentSuffix *string `json:"previewDeploymentSuffix,omitempty"`
	PreviewDeploymentsDisabled *bool `json:"previewDeploymentsDisabled,omitempty"`
	ProductionDeploymentsFastLane *bool `json:"productionDeploymentsFastLane,omitempty"`
	ProtectedSourcemaps *bool `json:"protectedSourcemaps,omitempty"`
	ProtectionBypass *map[string]any `json:"protectionBypass,omitempty"`
	ProtectionConfig *map[string]any `json:"protectionConfig,omitempty"`
	PublicSource *bool `json:"publicSource,omitempty"`
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
	UsageStatus *map[string]any `json:"usageStatus,omitempty"`
	V0 *bool `json:"v0,omitempty"`
	V0Created *bool `json:"v0Created,omitempty"`
	WebAnalytics *map[string]any `json:"webAnalytics,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
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
