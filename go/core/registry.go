package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAccessGroupEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewAiGatewayEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewAiGatewayRuleEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewAiGatewayRuleListEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewAiGatewayVirtualModelConfigEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewAiGatewayVirtualModelConfigListEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewAliasEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewApiAiGatewayEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewApiKeyEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewArtifactEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewAuthenticationEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewBillingEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewBulkRedirectEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewCertEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewCheckEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewChecksV2EntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewConnectEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewConnectConnectorEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewConnectConnectorListEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewConnectConnectorProjectConnectionListEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewConnectProjectConnectionEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewConnectProjectConnectorConnectionListEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewDeploymentEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewDnsEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewDomainEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewDomainsRegistrarEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewDrainEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewEdgeCacheEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewEnvEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewEnvironmentEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewFeatureFlagEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewFileEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewFlagEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewFlagsSdkKeyWithSecretEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewGlobalConfigEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewGlobalConfigItemEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewGlobalConfigTokenEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewIntegrationEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewKmsEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewListEventTypeEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewLogEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewLogDrainEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewMarketplaceEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewMicrofrontendEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewNetworkEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewNetworkingEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewObservabilityEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewPrivateLinkEndpointEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewProjectEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewProjectMemberEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewProjectRouteEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewQueryEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewRecordEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewRollingReleaseEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewSandboxEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewSchemaEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewSecurityEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewSegmentEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewStorageEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewTeamEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewTldNameEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewToggleEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewUserEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewVcrEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewVcrImageListEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewVcrRepositoryListEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewVcrRepositoryPermissionListEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewWebAnalyticsEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

var NewWebhookEntityFunc func(client *VercelSDK, entopts map[string]any) VercelEntity

