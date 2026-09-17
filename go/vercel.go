package voxgigvercelsdk

import (
	"github.com/voxgig-sdk/vercel-sdk/go/core"
	"github.com/voxgig-sdk/vercel-sdk/go/entity"
	"github.com/voxgig-sdk/vercel-sdk/go/feature"
	_ "github.com/voxgig-sdk/vercel-sdk/go/utility"
)

// Type aliases preserve external API.
type VercelSDK = core.VercelSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type VercelEntity = core.VercelEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type VercelError = core.VercelError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAccessGroupEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewAccessGroupEntity(client, entopts)
	}
	core.NewAiGatewayEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewAiGatewayEntity(client, entopts)
	}
	core.NewAiGatewayRuleEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewAiGatewayRuleEntity(client, entopts)
	}
	core.NewAiGatewayRuleListEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewAiGatewayRuleListEntity(client, entopts)
	}
	core.NewAiGatewayVirtualModelConfigEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewAiGatewayVirtualModelConfigEntity(client, entopts)
	}
	core.NewAiGatewayVirtualModelConfigListEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewAiGatewayVirtualModelConfigListEntity(client, entopts)
	}
	core.NewAliasEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewAliasEntity(client, entopts)
	}
	core.NewApiAiGatewayEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewApiAiGatewayEntity(client, entopts)
	}
	core.NewApiKeyEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewApiKeyEntity(client, entopts)
	}
	core.NewArtifactEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewArtifactEntity(client, entopts)
	}
	core.NewAuthenticationEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewAuthenticationEntity(client, entopts)
	}
	core.NewBillingEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewBillingEntity(client, entopts)
	}
	core.NewBulkRedirectEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewBulkRedirectEntity(client, entopts)
	}
	core.NewCertEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewCertEntity(client, entopts)
	}
	core.NewCheckEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewCheckEntity(client, entopts)
	}
	core.NewChecksV2EntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewChecksV2Entity(client, entopts)
	}
	core.NewConnectEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewConnectEntity(client, entopts)
	}
	core.NewConnectConnectorEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewConnectConnectorEntity(client, entopts)
	}
	core.NewConnectConnectorListEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewConnectConnectorListEntity(client, entopts)
	}
	core.NewConnectConnectorProjectConnectionListEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewConnectConnectorProjectConnectionListEntity(client, entopts)
	}
	core.NewConnectProjectConnectionEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewConnectProjectConnectionEntity(client, entopts)
	}
	core.NewConnectProjectConnectorConnectionListEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewConnectProjectConnectorConnectionListEntity(client, entopts)
	}
	core.NewDeploymentEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewDeploymentEntity(client, entopts)
	}
	core.NewDnsEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewDnsEntity(client, entopts)
	}
	core.NewDomainEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewDomainEntity(client, entopts)
	}
	core.NewDomainsRegistrarEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewDomainsRegistrarEntity(client, entopts)
	}
	core.NewDrainEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewDrainEntity(client, entopts)
	}
	core.NewEdgeCacheEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewEdgeCacheEntity(client, entopts)
	}
	core.NewEnvEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewEnvEntity(client, entopts)
	}
	core.NewEnvironmentEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewEnvironmentEntity(client, entopts)
	}
	core.NewFeatureFlagEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewFeatureFlagEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewFlagEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewFlagEntity(client, entopts)
	}
	core.NewFlagsSdkKeyWithSecretEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewFlagsSdkKeyWithSecretEntity(client, entopts)
	}
	core.NewGlobalConfigEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewGlobalConfigEntity(client, entopts)
	}
	core.NewGlobalConfigItemEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewGlobalConfigItemEntity(client, entopts)
	}
	core.NewGlobalConfigTokenEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewGlobalConfigTokenEntity(client, entopts)
	}
	core.NewIntegrationEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewIntegrationEntity(client, entopts)
	}
	core.NewKmsEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewKmsEntity(client, entopts)
	}
	core.NewListEventTypeEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewListEventTypeEntity(client, entopts)
	}
	core.NewLogEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewLogEntity(client, entopts)
	}
	core.NewLogDrainEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewLogDrainEntity(client, entopts)
	}
	core.NewMarketplaceEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewMarketplaceEntity(client, entopts)
	}
	core.NewMicrofrontendEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewMicrofrontendEntity(client, entopts)
	}
	core.NewNetworkEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewNetworkEntity(client, entopts)
	}
	core.NewNetworkingEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewNetworkingEntity(client, entopts)
	}
	core.NewObservabilityEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewObservabilityEntity(client, entopts)
	}
	core.NewPrivateLinkEndpointEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewPrivateLinkEndpointEntity(client, entopts)
	}
	core.NewProjectEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewProjectEntity(client, entopts)
	}
	core.NewProjectMemberEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewProjectMemberEntity(client, entopts)
	}
	core.NewProjectRouteEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewProjectRouteEntity(client, entopts)
	}
	core.NewQueryEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewQueryEntity(client, entopts)
	}
	core.NewRecordEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewRecordEntity(client, entopts)
	}
	core.NewRollingReleaseEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewRollingReleaseEntity(client, entopts)
	}
	core.NewSandboxEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewSandboxEntity(client, entopts)
	}
	core.NewSchemaEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewSchemaEntity(client, entopts)
	}
	core.NewSecurityEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewSecurityEntity(client, entopts)
	}
	core.NewSegmentEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewSegmentEntity(client, entopts)
	}
	core.NewStorageEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewStorageEntity(client, entopts)
	}
	core.NewTeamEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewTeamEntity(client, entopts)
	}
	core.NewTldNameEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewTldNameEntity(client, entopts)
	}
	core.NewToggleEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewToggleEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewVcrEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewVcrEntity(client, entopts)
	}
	core.NewVcrImageListEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewVcrImageListEntity(client, entopts)
	}
	core.NewVcrRepositoryListEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewVcrRepositoryListEntity(client, entopts)
	}
	core.NewVcrRepositoryPermissionListEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewVcrRepositoryPermissionListEntity(client, entopts)
	}
	core.NewWebAnalyticsEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewWebAnalyticsEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.VercelSDK, entopts map[string]any) core.VercelEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewVercelSDK = core.NewVercelSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewVercelSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *VercelSDK  { return NewVercelSDK(nil) }
func Test() *VercelSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
