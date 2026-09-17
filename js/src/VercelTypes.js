// Typed models for the Vercel SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} AccessGroup
 * @property {string} accessGroupId
 * @property {string} createdAt
 * @property {Array} [entitlements]
 * @property {string} [id]
 * @property {boolean} isDsyncManaged
 * @property {number} membersCount
 * @property {Array} [membersToAdd]
 * @property {Array} [membersToRemove]
 * @property {string} name
 * @property {string} projectId
 * @property {Array} [projects]
 * @property {number} projectsCount
 * @property {string} role
 * @property {string} teamId
 * @property {Array} [teamPermissions]
 * @property {Array} [teamRoles]
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} AccessGroupLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AccessGroupListMatch
 * @property {string} id_or_name
 * @property {number} [limit]
 * @property {string} [next]
 * @property {string} [search]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AccessGroupCreateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} accessGroupId
 * @property {string} createdAt
 * @property {Array} [entitlements]
 * @property {boolean} isDsyncManaged
 * @property {number} membersCount
 * @property {Array} [membersToAdd]
 * @property {Array} [membersToRemove]
 * @property {string} name
 * @property {string} projectId
 * @property {Array} [projects]
 * @property {number} projectsCount
 * @property {string} role
 * @property {string} teamId
 * @property {Array} [teamPermissions]
 * @property {Array} [teamRoles]
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} AccessGroupUpdateData
 * @property {string} access_group_id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [accessGroupId]
 * @property {string} [createdAt]
 * @property {Array} [entitlements]
 * @property {string} [id]
 * @property {boolean} [isDsyncManaged]
 * @property {number} [membersCount]
 * @property {Array} [membersToAdd]
 * @property {Array} [membersToRemove]
 * @property {string} [name]
 * @property {string} [projectId]
 * @property {Array} [projects]
 * @property {number} [projectsCount]
 * @property {string} [role]
 * @property {string} [teamId]
 * @property {Array} [teamPermissions]
 * @property {Array} [teamRoles]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} AccessGroupRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AiGateway
 */

/**
 * @typedef {Object} AiGatewayRemoveMatch
 * @property {string} rule_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AiGatewayRule
 * @property {Object} [action]
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {boolean} [deleted]
 * @property {string} [description]
 * @property {boolean} enabled
 * @property {Object} [match]
 * @property {string} ownerId
 * @property {string} ruleId
 * @property {string} type
 * @property {number} updatedAt
 * @property {string} [updatedBy]
 */

/**
 * @typedef {Object} AiGatewayRuleCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} [action]
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {boolean} [deleted]
 * @property {string} [description]
 * @property {boolean} enabled
 * @property {Object} [match]
 * @property {string} ownerId
 * @property {string} ruleId
 * @property {string} type
 * @property {number} updatedAt
 * @property {string} [updatedBy]
 */

/**
 * @typedef {Object} AiGatewayRuleUpdateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} [action]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {boolean} [deleted]
 * @property {string} [description]
 * @property {boolean} [enabled]
 * @property {Object} [match]
 * @property {string} [ownerId]
 * @property {string} [ruleId]
 * @property {string} [type]
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 */

/**
 * @typedef {Object} AiGatewayRuleList
 * @property {Object} [action]
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {boolean} [deleted]
 * @property {string} [description]
 * @property {boolean} enabled
 * @property {Object} [match]
 * @property {string} ownerId
 * @property {string} ruleId
 * @property {string} type
 * @property {number} updatedAt
 * @property {string} [updatedBy]
 */

/**
 * @typedef {Object} AiGatewayRuleListListMatch
 * @property {string} [include_disabled]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AiGatewayVirtualModelConfig
 * @property {boolean} [allowFallbackFromFast]
 * @property {string} [baseUrl]
 * @property {Array} [byokCredentialIds]
 * @property {string} [caching]
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {boolean} deleted
 * @property {string} [description]
 * @property {boolean} [disallowPromptTraining]
 * @property {string} [displayName]
 * @property {Array} [has]
 * @property {boolean} [hipaaCompliant]
 * @property {string} [id]
 * @property {Object} [inferenceRegion]
 * @property {string} [instanceId]
 * @property {string} kind
 * @property {string} [modelSlug]
 * @property {Array} [models]
 * @property {Array} [observabilityTags]
 * @property {string} ownerId
 * @property {Array} [providerOnly]
 * @property {Object} [providerOptions]
 * @property {Array} [providerOrder]
 * @property {Object} [providerTimeouts]
 * @property {Array} [requires]
 * @property {string} [selector]
 * @property {string} [serviceTier]
 * @property {string} [sort]
 * @property {string} [speed]
 * @property {string} status
 * @property {number} updatedAt
 * @property {string} [updatedBy]
 * @property {string} virtualModelSlug
 * @property {string} [visibility]
 * @property {boolean} [zeroDataRetention]
 */

/**
 * @typedef {Object} AiGatewayVirtualModelConfigLoadMatch
 * @property {string} id
 * @property {string} [owner_id]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AiGatewayVirtualModelConfigCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [allowFallbackFromFast]
 * @property {string} [baseUrl]
 * @property {Array} [byokCredentialIds]
 * @property {string} [caching]
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {boolean} deleted
 * @property {string} [description]
 * @property {boolean} [disallowPromptTraining]
 * @property {string} [displayName]
 * @property {Array} [has]
 * @property {boolean} [hipaaCompliant]
 * @property {string} [id]
 * @property {Object} [inferenceRegion]
 * @property {string} [instanceId]
 * @property {string} kind
 * @property {string} [modelSlug]
 * @property {Array} [models]
 * @property {Array} [observabilityTags]
 * @property {string} ownerId
 * @property {Array} [providerOnly]
 * @property {Object} [providerOptions]
 * @property {Array} [providerOrder]
 * @property {Object} [providerTimeouts]
 * @property {Array} [requires]
 * @property {string} [selector]
 * @property {string} [serviceTier]
 * @property {string} [sort]
 * @property {string} [speed]
 * @property {string} status
 * @property {number} updatedAt
 * @property {string} [updatedBy]
 * @property {string} virtualModelSlug
 * @property {string} [visibility]
 * @property {boolean} [zeroDataRetention]
 */

/**
 * @typedef {Object} AiGatewayVirtualModelConfigUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [allowFallbackFromFast]
 * @property {string} [baseUrl]
 * @property {Array} [byokCredentialIds]
 * @property {string} [caching]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {boolean} [deleted]
 * @property {string} [description]
 * @property {boolean} [disallowPromptTraining]
 * @property {string} [displayName]
 * @property {Array} [has]
 * @property {boolean} [hipaaCompliant]
 * @property {Object} [inferenceRegion]
 * @property {string} [instanceId]
 * @property {string} [kind]
 * @property {string} [modelSlug]
 * @property {Array} [models]
 * @property {Array} [observabilityTags]
 * @property {string} [ownerId]
 * @property {Array} [providerOnly]
 * @property {Object} [providerOptions]
 * @property {Array} [providerOrder]
 * @property {Object} [providerTimeouts]
 * @property {Array} [requires]
 * @property {string} [selector]
 * @property {string} [serviceTier]
 * @property {string} [sort]
 * @property {string} [speed]
 * @property {string} [status]
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 * @property {string} [virtualModelSlug]
 * @property {string} [visibility]
 * @property {boolean} [zeroDataRetention]
 */

/**
 * @typedef {Object} AiGatewayVirtualModelConfigList
 * @property {boolean} [allowFallbackFromFast]
 * @property {string} [baseUrl]
 * @property {Array} [byokCredentialIds]
 * @property {string} [caching]
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {boolean} deleted
 * @property {string} [description]
 * @property {boolean} [disallowPromptTraining]
 * @property {string} [displayName]
 * @property {Array} [has]
 * @property {boolean} [hipaaCompliant]
 * @property {Object} [inferenceRegion]
 * @property {string} [instanceId]
 * @property {string} kind
 * @property {string} [modelSlug]
 * @property {Array} [models]
 * @property {Array} [observabilityTags]
 * @property {string} ownerId
 * @property {Array} [providerOnly]
 * @property {Object} [providerOptions]
 * @property {Array} [providerOrder]
 * @property {Object} [providerTimeouts]
 * @property {Array} [requires]
 * @property {string} [selector]
 * @property {string} [serviceTier]
 * @property {string} [sort]
 * @property {string} [speed]
 * @property {string} status
 * @property {number} updatedAt
 * @property {string} [updatedBy]
 * @property {string} virtualModelSlug
 * @property {string} [visibility]
 * @property {boolean} [zeroDataRetention]
 */

/**
 * @typedef {Object} AiGatewayVirtualModelConfigListListMatch
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} [owner_id]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Alias
 * @property {string} alias
 * @property {string} created
 * @property {number} [createdAt]
 * @property {Object} creator
 * @property {number} [deletedAt]
 * @property {Object} deployment
 * @property {string} deploymentId
 * @property {string} [id]
 * @property {Object} microfrontends
 * @property {string} [oldDeploymentId]
 * @property {string} projectId
 * @property {Object} [protectionBypass]
 * @property {string} [redirect]
 * @property {number} [redirectStatusCode]
 * @property {string} uid
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} AliasLoadMatch
 * @property {string} id
 * @property {number} [from]
 * @property {string} [project_id]
 * @property {number} [since]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} [until]
 */

/**
 * @typedef {Object} AliasListMatch
 * @property {*} [domain]
 * @property {number} [from]
 * @property {number} [limit]
 * @property {string} [project_id]
 * @property {string} [rollback_deployment_id]
 * @property {number} [since]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} [until]
 */

/**
 * @typedef {Object} AliasCreateData
 * @property {string} deployment_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} alias
 * @property {string} created
 * @property {number} [createdAt]
 * @property {Object} creator
 * @property {number} [deletedAt]
 * @property {Object} deployment
 * @property {string} deploymentId
 * @property {string} [id]
 * @property {Object} microfrontends
 * @property {string} [oldDeploymentId]
 * @property {string} projectId
 * @property {Object} [protectionBypass]
 * @property {string} [redirect]
 * @property {number} [redirectStatusCode]
 * @property {string} uid
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} AliasUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [alias]
 * @property {string} [created]
 * @property {number} [createdAt]
 * @property {Object} [creator]
 * @property {number} [deletedAt]
 * @property {Object} [deployment]
 * @property {string} [deploymentId]
 * @property {Object} [microfrontends]
 * @property {string} [oldDeploymentId]
 * @property {string} [projectId]
 * @property {Object} [protectionBypass]
 * @property {string} [redirect]
 * @property {number} [redirectStatusCode]
 * @property {string} [uid]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} AliasRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ApiAiGateway
 */

/**
 * @typedef {Object} ApiAiGatewayLoadMatch
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} [owner_id]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [virtual_model_slug]
 */

/**
 * @typedef {Object} ApiAiGatewayRemoveMatch
 * @property {string} vmc_slug
 * @property {string} [acting_ip]
 * @property {string} [acting_user_agent]
 * @property {string} [owner_id]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [updated_by]
 */

/**
 * @typedef {Object} ApiKey
 * @property {number} activeAt
 * @property {Object} aiGatewayQuota
 * @property {number} createdAt
 * @property {string} createdBy
 * @property {string} createdByAppId
 * @property {number} expiresAt
 * @property {string} id
 * @property {number} leakedAt
 * @property {string} leakedUrl
 * @property {Object} [metadata]
 * @property {string} name
 * @property {string} partialKey
 * @property {string} projectId
 * @property {string} purpose
 * @property {Object} quota
 * @property {string} teamId
 */

/**
 * @typedef {Object} ApiKeyCreateData
 * @property {number} activeAt
 * @property {Object} aiGatewayQuota
 * @property {number} createdAt
 * @property {string} createdBy
 * @property {string} createdByAppId
 * @property {number} expiresAt
 * @property {string} id
 * @property {number} leakedAt
 * @property {string} leakedUrl
 * @property {Object} [metadata]
 * @property {string} name
 * @property {string} partialKey
 * @property {string} projectId
 * @property {string} purpose
 * @property {Object} quota
 * @property {string} teamId
 */

/**
 * @typedef {Object} Artifact
 * @property {Array} hashes
 * @property {string} [id]
 */

/**
 * @typedef {Object} ArtifactLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ArtifactCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Array} hashes
 * @property {string} [id]
 */

/**
 * @typedef {Object} ArtifactUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Array} [hashes]
 */

/**
 * @typedef {Object} ArtifactRemoveMatch
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Authentication
 * @property {number} activeAt
 * @property {number} createdAt
 * @property {number} [expiresAt]
 * @property {string} id
 * @property {number} [leakedAt]
 * @property {string} [leakedUrl]
 * @property {string} name
 * @property {string} [origin]
 * @property {string} [prefix]
 * @property {string} [projectId]
 * @property {number} [revokedAt]
 * @property {Array} [scopes]
 * @property {string} [suffix]
 * @property {string} type
 */

/**
 * @typedef {Object} AuthenticationLoadMatch
 * @property {string} token_id
 */

/**
 * @typedef {Object} AuthenticationCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} activeAt
 * @property {number} createdAt
 * @property {number} [expiresAt]
 * @property {string} id
 * @property {number} [leakedAt]
 * @property {string} [leakedUrl]
 * @property {string} name
 * @property {string} [origin]
 * @property {string} [prefix]
 * @property {string} [projectId]
 * @property {number} [revokedAt]
 * @property {Array} [scopes]
 * @property {string} [suffix]
 * @property {string} type
 */

/**
 * @typedef {Object} AuthenticationRemoveMatch
 * @property {string} token_id
 */

/**
 * @typedef {Object} Billing
 */

/**
 * @typedef {Object} BillingLoadMatch
 * @property {string} from
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} to
 */

/**
 * @typedef {Object} BillingCreateData
 * @property {string} [slug]
 * @property {string} [source]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} BulkRedirect
 * @property {string} [alias]
 * @property {string} createdBy
 * @property {string} id
 * @property {boolean} [isLive]
 * @property {boolean} [isStaging]
 * @property {string} key
 * @property {number} lastModified
 * @property {string} [name]
 * @property {boolean} [overwrite]
 * @property {string} projectId
 * @property {Object} redirect
 * @property {number} [redirectCount]
 * @property {Array} [redirects]
 * @property {boolean} [restore]
 * @property {string} teamId
 */

/**
 * @typedef {Object} BulkRedirectLoadMatch
 * @property {*} [diff]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} project_id
 * @property {string} [q]
 * @property {string} [slug]
 * @property {string} [sort_by]
 * @property {string} [sort_order]
 * @property {string} [team_id]
 * @property {string} [version_id]
 */

/**
 * @typedef {Object} BulkRedirectListMatch
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} BulkRedirectCreateData
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [alias]
 * @property {string} createdBy
 * @property {string} id
 * @property {boolean} [isLive]
 * @property {boolean} [isStaging]
 * @property {string} key
 * @property {number} lastModified
 * @property {string} [name]
 * @property {boolean} [overwrite]
 * @property {string} projectId
 * @property {Object} redirect
 * @property {number} [redirectCount]
 * @property {Array} [redirects]
 * @property {boolean} [restore]
 * @property {string} teamId
 */

/**
 * @typedef {Object} BulkRedirectUpdateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [alias]
 * @property {string} [createdBy]
 * @property {string} [id]
 * @property {boolean} [isLive]
 * @property {boolean} [isStaging]
 * @property {string} [key]
 * @property {number} [lastModified]
 * @property {string} [name]
 * @property {boolean} [overwrite]
 * @property {string} [projectId]
 * @property {Object} [redirect]
 * @property {number} [redirectCount]
 * @property {Array} [redirects]
 * @property {boolean} [restore]
 * @property {string} [teamId]
 */

/**
 * @typedef {Object} BulkRedirectRemoveMatch
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Cert
 * @property {boolean} autoRenew
 * @property {string} ca
 * @property {string} cert
 * @property {Array} cns
 * @property {number} createdAt
 * @property {number} expiresAt
 * @property {string} id
 * @property {string} key
 * @property {boolean} [skipValidation]
 */

/**
 * @typedef {Object} CertLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} CertListMatch
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} CertCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} autoRenew
 * @property {string} ca
 * @property {string} cert
 * @property {Array} cns
 * @property {number} createdAt
 * @property {number} expiresAt
 * @property {string} id
 * @property {string} key
 * @property {boolean} [skipValidation]
 */

/**
 * @typedef {Object} CertUpdateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [autoRenew]
 * @property {string} [ca]
 * @property {string} [cert]
 * @property {Array} [cns]
 * @property {number} [createdAt]
 * @property {number} [expiresAt]
 * @property {string} [id]
 * @property {string} [key]
 * @property {boolean} [skipValidation]
 */

/**
 * @typedef {Object} CertRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Check
 * @property {boolean} blocking
 * @property {string} blocks
 * @property {number} [completedAt]
 * @property {*} [conclusion]
 * @property {number} createdAt
 * @property {number} [deletedAt]
 * @property {string} [detailsUrl]
 * @property {string} [externalId]
 * @property {string} id
 * @property {string} integrationId
 * @property {boolean} isRerequestable
 * @property {Object} metrics
 * @property {string} name
 * @property {Object} [output]
 * @property {string} ownerId
 * @property {string} [path]
 * @property {string} projectId
 * @property {string} requires
 * @property {boolean} [rerequestable]
 * @property {*} source
 * @property {string} [sourceIntegrationConfigurationId]
 * @property {string} sourceKind
 * @property {number} [startedAt]
 * @property {*} [status]
 * @property {Array} targets
 * @property {number} timeout
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} CheckLoadMatch
 * @property {string} [deployment_id]
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [project_id]
 */

/**
 * @typedef {Object} CheckListMatch
 * @property {string} project_id_or_name
 * @property {string} [block]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} CheckCreateData
 * @property {string} deployment_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} blocking
 * @property {string} blocks
 * @property {number} [completedAt]
 * @property {*} [conclusion]
 * @property {number} createdAt
 * @property {number} [deletedAt]
 * @property {string} [detailsUrl]
 * @property {string} [externalId]
 * @property {string} id
 * @property {string} integrationId
 * @property {boolean} isRerequestable
 * @property {Object} metrics
 * @property {string} name
 * @property {Object} [output]
 * @property {string} ownerId
 * @property {string} [path]
 * @property {string} projectId
 * @property {string} requires
 * @property {boolean} [rerequestable]
 * @property {*} source
 * @property {string} [sourceIntegrationConfigurationId]
 * @property {string} sourceKind
 * @property {number} [startedAt]
 * @property {*} [status]
 * @property {Array} targets
 * @property {number} timeout
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} CheckUpdateData
 * @property {string} [deployment_id]
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [project_id]
 * @property {boolean} [blocking]
 * @property {string} [blocks]
 * @property {number} [completedAt]
 * @property {*} [conclusion]
 * @property {number} [createdAt]
 * @property {number} [deletedAt]
 * @property {string} [detailsUrl]
 * @property {string} [externalId]
 * @property {string} [integrationId]
 * @property {boolean} [isRerequestable]
 * @property {Object} [metrics]
 * @property {string} [name]
 * @property {Object} [output]
 * @property {string} [ownerId]
 * @property {string} [path]
 * @property {string} [projectId]
 * @property {string} [requires]
 * @property {boolean} [rerequestable]
 * @property {*} [source]
 * @property {string} [sourceIntegrationConfigurationId]
 * @property {string} [sourceKind]
 * @property {number} [startedAt]
 * @property {*} [status]
 * @property {Array} [targets]
 * @property {number} [timeout]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} CheckRemoveMatch
 * @property {string} id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ChecksV2
 * @property {string} checkId
 * @property {number} [completedAt]
 * @property {string} [conclusion]
 * @property {string} [conclusionText]
 * @property {string} [externalId]
 * @property {string} [externalUrl]
 * @property {Object} [output]
 * @property {Array} runs
 * @property {string} [status]
 */

/**
 * @typedef {Object} ChecksV2LoadMatch
 * @property {string} check_run_id
 * @property {string} deployment_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ChecksV2ListMatch
 * @property {string} deployment_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ChecksV2CreateData
 * @property {string} deployment_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} checkId
 * @property {number} [completedAt]
 * @property {string} [conclusion]
 * @property {string} [conclusionText]
 * @property {string} [externalId]
 * @property {string} [externalUrl]
 * @property {Object} [output]
 * @property {Array} runs
 * @property {string} [status]
 */

/**
 * @typedef {Object} ChecksV2UpdateData
 * @property {string} check_run_id
 * @property {string} deployment_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [checkId]
 * @property {number} [completedAt]
 * @property {string} [conclusion]
 * @property {string} [conclusionText]
 * @property {string} [externalId]
 * @property {string} [externalUrl]
 * @property {Object} [output]
 * @property {Array} [runs]
 * @property {string} [status]
 */

/**
 * @typedef {Object} Connect
 * @property {Object} [additionalParams]
 * @property {Array} [audience]
 * @property {Array} [authorizationDetails]
 * @property {string} [authorizationId]
 * @property {Object} [claims]
 * @property {Object} connector
 * @property {boolean} [deviceCode]
 * @property {string} displayName
 * @property {number} expiresAt
 * @property {number} [expiresInMs]
 * @property {string} [externalSubject]
 * @property {string} id
 * @property {string} [installationId]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {string} [prompt]
 * @property {Array} [resources]
 * @property {string} [returnUrl]
 * @property {Array} [scopes]
 * @property {string} [service]
 * @property {string} [serviceName]
 * @property {*} [subject]
 * @property {string} [tenantId]
 * @property {string} token
 * @property {string} [tokenGroupId]
 * @property {string} tokenId
 * @property {string} type
 * @property {string} uid
 * @property {number} [validityBufferMs]
 * @property {string} [webhook]
 */

/**
 * @typedef {Object} ConnectCreateData
 * @property {string} connector
 * @property {Object} [additionalParams]
 * @property {Array} [audience]
 * @property {Array} [authorizationDetails]
 * @property {string} [authorizationId]
 * @property {Object} [claims]
 * @property {boolean} [deviceCode]
 * @property {string} displayName
 * @property {number} expiresAt
 * @property {number} [expiresInMs]
 * @property {string} [externalSubject]
 * @property {string} id
 * @property {string} [installationId]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {string} [prompt]
 * @property {Array} [resources]
 * @property {string} [returnUrl]
 * @property {Array} [scopes]
 * @property {string} [service]
 * @property {string} [serviceName]
 * @property {*} [subject]
 * @property {string} [tenantId]
 * @property {string} token
 * @property {string} [tokenGroupId]
 * @property {string} tokenId
 * @property {string} type
 * @property {string} uid
 * @property {number} [validityBufferMs]
 * @property {string} [webhook]
 */

/**
 * @typedef {Object} ConnectRemoveMatch
 * @property {string} connector
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ConnectConnector
 * @property {string} [accentColor]
 * @property {Object} appTokens
 * @property {string} [backgroundColor]
 * @property {string} [clientUrl]
 * @property {string} [connectionMethod]
 * @property {Object} connector
 * @property {number} createdAt
 * @property {*} [createdBy]
 * @property {string} [creationMode]
 * @property {*} data
 * @property {string} [defaultInstallationId]
 * @property {Array} destinations
 * @property {string} [devsite]
 * @property {string} displayName
 * @property {string} [docsite]
 * @property {Array} [environments]
 * @property {Array} [events]
 * @property {string} [icon]
 * @property {string} id
 * @property {boolean} [knownStale]
 * @property {Object} [managed]
 * @property {string} name
 * @property {Object} [params]
 * @property {string} [projectId]
 * @property {Object} reconsentNeeded
 * @property {string} [redirectUri]
 * @property {number} [reinstallAt]
 * @property {boolean} [reinstallNeeded]
 * @property {string} service
 * @property {Object} serviceSync
 * @property {Array} supportedSubjectTypes
 * @property {*} supportsIcon
 * @property {boolean} supportsInstallation
 * @property {boolean} supportsRevocation
 * @property {boolean} supportsTriggers
 * @property {string} [target]
 * @property {*} [triggerDestination]
 * @property {Array} [triggerDestinations]
 * @property {Object} triggers
 * @property {string} type
 * @property {string} [typeIcon]
 * @property {string} typeName
 * @property {string} uid
 * @property {number} updatedAt
 * @property {*} [updatedBy]
 * @property {Object} userTokens
 * @property {string} [website]
 */

/**
 * @typedef {Object} ConnectConnectorLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ConnectConnectorCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [accentColor]
 * @property {Object} appTokens
 * @property {string} [backgroundColor]
 * @property {string} [clientUrl]
 * @property {string} [connectionMethod]
 * @property {Object} connector
 * @property {number} createdAt
 * @property {*} [createdBy]
 * @property {string} [creationMode]
 * @property {*} data
 * @property {string} [defaultInstallationId]
 * @property {Array} destinations
 * @property {string} [devsite]
 * @property {string} displayName
 * @property {string} [docsite]
 * @property {Array} [environments]
 * @property {Array} [events]
 * @property {string} [icon]
 * @property {string} id
 * @property {boolean} [knownStale]
 * @property {Object} [managed]
 * @property {string} name
 * @property {Object} [params]
 * @property {string} [projectId]
 * @property {Object} reconsentNeeded
 * @property {string} [redirectUri]
 * @property {number} [reinstallAt]
 * @property {boolean} [reinstallNeeded]
 * @property {string} service
 * @property {Object} serviceSync
 * @property {Array} supportedSubjectTypes
 * @property {*} supportsIcon
 * @property {boolean} supportsInstallation
 * @property {boolean} supportsRevocation
 * @property {boolean} supportsTriggers
 * @property {string} [target]
 * @property {*} [triggerDestination]
 * @property {Array} [triggerDestinations]
 * @property {Object} triggers
 * @property {string} type
 * @property {string} [typeIcon]
 * @property {string} typeName
 * @property {string} uid
 * @property {number} updatedAt
 * @property {*} [updatedBy]
 * @property {Object} userTokens
 * @property {string} [website]
 */

/**
 * @typedef {Object} ConnectConnectorUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [accentColor]
 * @property {Object} [appTokens]
 * @property {string} [backgroundColor]
 * @property {string} [clientUrl]
 * @property {string} [connectionMethod]
 * @property {Object} [connector]
 * @property {number} [createdAt]
 * @property {*} [createdBy]
 * @property {string} [creationMode]
 * @property {*} [data]
 * @property {string} [defaultInstallationId]
 * @property {Array} [destinations]
 * @property {string} [devsite]
 * @property {string} [displayName]
 * @property {string} [docsite]
 * @property {Array} [environments]
 * @property {Array} [events]
 * @property {string} [icon]
 * @property {boolean} [knownStale]
 * @property {Object} [managed]
 * @property {string} [name]
 * @property {Object} [params]
 * @property {string} [projectId]
 * @property {Object} [reconsentNeeded]
 * @property {string} [redirectUri]
 * @property {number} [reinstallAt]
 * @property {boolean} [reinstallNeeded]
 * @property {string} [service]
 * @property {Object} [serviceSync]
 * @property {Array} [supportedSubjectTypes]
 * @property {*} [supportsIcon]
 * @property {boolean} [supportsInstallation]
 * @property {boolean} [supportsRevocation]
 * @property {boolean} [supportsTriggers]
 * @property {string} [target]
 * @property {*} [triggerDestination]
 * @property {Array} [triggerDestinations]
 * @property {Object} [triggers]
 * @property {string} [type]
 * @property {string} [typeIcon]
 * @property {string} [typeName]
 * @property {string} [uid]
 * @property {number} [updatedAt]
 * @property {*} [updatedBy]
 * @property {Object} [userTokens]
 * @property {string} [website]
 */

/**
 * @typedef {Object} ConnectConnectorList
 * @property {string} [accentColor]
 * @property {Object} appTokens
 * @property {string} [backgroundColor]
 * @property {string} [clientUrl]
 * @property {string} [connectionMethod]
 * @property {number} createdAt
 * @property {*} [createdBy]
 * @property {string} [creationMode]
 * @property {string} [defaultInstallationId]
 * @property {string} [devsite]
 * @property {string} displayName
 * @property {string} [docsite]
 * @property {Array} [events]
 * @property {string} [icon]
 * @property {string} id
 * @property {boolean} [knownStale]
 * @property {Object} [managed]
 * @property {string} name
 * @property {string} [redirectUri]
 * @property {number} [reinstallAt]
 * @property {string} service
 * @property {Array} supportedSubjectTypes
 * @property {*} supportsIcon
 * @property {boolean} supportsInstallation
 * @property {boolean} supportsRevocation
 * @property {boolean} supportsTriggers
 * @property {string} [target]
 * @property {Array} [triggerDestinations]
 * @property {Object} triggers
 * @property {string} type
 * @property {string} [typeIcon]
 * @property {string} typeName
 * @property {string} uid
 * @property {number} updatedAt
 * @property {*} [updatedBy]
 * @property {Object} userTokens
 * @property {string} [website]
 */

/**
 * @typedef {Object} ConnectConnectorListListMatch
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} [project_id]
 * @property {string} [search]
 * @property {string} [service]
 * @property {string} [slug]
 * @property {string} [sort]
 * @property {string} [team_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ConnectConnectorProjectConnectionList
 * @property {string} connectorId
 * @property {number} createdAt
 * @property {Array} enabledEnvironments
 * @property {Object} project
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} ConnectConnectorProjectConnectionListListMatch
 * @property {string} connector_id
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ConnectProjectConnection
 * @property {string} connectorId
 * @property {number} createdAt
 * @property {Array} enabledEnvironments
 * @property {Array} environments
 * @property {Object} project
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} ConnectProjectConnectionLoadMatch
 * @property {string} connector_id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ConnectProjectConnectionCreateData
 * @property {string} connector_id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} connectorId
 * @property {number} createdAt
 * @property {Array} enabledEnvironments
 * @property {Array} environments
 * @property {Object} project
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} ConnectProjectConnectorConnectionList
 * @property {string} connectorId
 * @property {number} createdAt
 * @property {Array} enabledEnvironments
 * @property {Object} project
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} ConnectProjectConnectorConnectionListListMatch
 * @property {string} project_id
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Deployment
 * @property {*} [aliasAssigned]
 * @property {Object} aliasError
 * @property {Object} [attribution]
 * @property {string} [buildMachine]
 * @property {number} [buildingAt]
 * @property {Object} checks
 * @property {string} [checksConclusion]
 * @property {string} [checksState]
 * @property {boolean} [connectBuildsEnabled]
 * @property {string} [connectConfigurationId]
 * @property {number} created
 * @property {number} createdAt
 * @property {Object} creator
 * @property {Object} customEnvironment
 * @property {string} [customEnvironmentSlugOrId]
 * @property {string} [defaultRoute]
 * @property {number} [deleted]
 * @property {string} [deploymentId]
 * @property {string} [errorCode]
 * @property {string} [errorMessage]
 * @property {number} [expiration]
 * @property {Array} [files]
 * @property {string} [gitAccessToken]
 * @property {Object} [gitMetadata]
 * @property {*} [gitSource]
 * @property {string} [id]
 * @property {string} inspectorUrl
 * @property {boolean} [isRollbackCandidate]
 * @property {Object} manualProvisioning
 * @property {Object} [meta]
 * @property {string} [monorepoManager]
 * @property {string} name
 * @property {string} [oomReport]
 * @property {Array} [outcomes]
 * @property {string} [passiveConnectConfigurationId]
 * @property {Object} platform
 * @property {boolean} [prebuilt]
 * @property {string} [project]
 * @property {string} projectId
 * @property {Object} [projectSettings]
 * @property {number} [proposedExpiration]
 * @property {number} [ready]
 * @property {string} readyState
 * @property {string} [readySubstate]
 * @property {Object} seatBlock
 * @property {boolean} [softDeletedByRetention]
 * @property {string} [source]
 * @property {string} [state]
 * @property {string} [status]
 * @property {string} [statusText]
 * @property {string} [statusUrl]
 * @property {string} [target]
 * @property {string} type
 * @property {string} uid
 * @property {number} [undeleted]
 * @property {string} url
 * @property {boolean} [withLatestCommit]
 */

/**
 * @typedef {Object} DeploymentLoadMatch
 * @property {string} [file_id]
 * @property {string} id
 * @property {string} [path]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [with_git_repo_info]
 */

/**
 * @typedef {Object} DeploymentListMatch
 * @property {string} [app]
 * @property {string} [branch]
 * @property {number} [from]
 * @property {number} [limit]
 * @property {string} [project_id]
 * @property {boolean} [rollback_candidate]
 * @property {string} [sha]
 * @property {number} [since]
 * @property {string} [slug]
 * @property {string} [state]
 * @property {string} [target]
 * @property {string} [team_id]
 * @property {number} [to]
 * @property {number} [until]
 * @property {string} [user]
 */

/**
 * @typedef {Object} DeploymentCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {*} [aliasAssigned]
 * @property {Object} aliasError
 * @property {Object} [attribution]
 * @property {string} [buildMachine]
 * @property {number} [buildingAt]
 * @property {Object} checks
 * @property {string} [checksConclusion]
 * @property {string} [checksState]
 * @property {boolean} [connectBuildsEnabled]
 * @property {string} [connectConfigurationId]
 * @property {number} created
 * @property {number} createdAt
 * @property {Object} creator
 * @property {Object} customEnvironment
 * @property {string} [customEnvironmentSlugOrId]
 * @property {string} [defaultRoute]
 * @property {number} [deleted]
 * @property {string} [deploymentId]
 * @property {string} [errorCode]
 * @property {string} [errorMessage]
 * @property {number} [expiration]
 * @property {Array} [files]
 * @property {string} [gitAccessToken]
 * @property {Object} [gitMetadata]
 * @property {*} [gitSource]
 * @property {string} [id]
 * @property {string} inspectorUrl
 * @property {boolean} [isRollbackCandidate]
 * @property {Object} manualProvisioning
 * @property {Object} [meta]
 * @property {string} [monorepoManager]
 * @property {string} name
 * @property {string} [oomReport]
 * @property {Array} [outcomes]
 * @property {string} [passiveConnectConfigurationId]
 * @property {Object} platform
 * @property {boolean} [prebuilt]
 * @property {string} [project]
 * @property {string} projectId
 * @property {Object} [projectSettings]
 * @property {number} [proposedExpiration]
 * @property {number} [ready]
 * @property {string} readyState
 * @property {string} [readySubstate]
 * @property {Object} seatBlock
 * @property {boolean} [softDeletedByRetention]
 * @property {string} [source]
 * @property {string} [state]
 * @property {string} [status]
 * @property {string} [statusText]
 * @property {string} [statusUrl]
 * @property {string} [target]
 * @property {string} type
 * @property {string} uid
 * @property {number} [undeleted]
 * @property {string} url
 * @property {boolean} [withLatestCommit]
 */

/**
 * @typedef {Object} DeploymentUpdateData
 * @property {string} action
 * @property {string} id
 * @property {string} integration_id
 * @property {string} resource_id
 * @property {*} [aliasAssigned]
 * @property {Object} [aliasError]
 * @property {Object} [attribution]
 * @property {string} [buildMachine]
 * @property {number} [buildingAt]
 * @property {Object} [checks]
 * @property {string} [checksConclusion]
 * @property {string} [checksState]
 * @property {boolean} [connectBuildsEnabled]
 * @property {string} [connectConfigurationId]
 * @property {number} [created]
 * @property {number} [createdAt]
 * @property {Object} [creator]
 * @property {Object} [customEnvironment]
 * @property {string} [customEnvironmentSlugOrId]
 * @property {string} [defaultRoute]
 * @property {number} [deleted]
 * @property {string} [deploymentId]
 * @property {string} [errorCode]
 * @property {string} [errorMessage]
 * @property {number} [expiration]
 * @property {Array} [files]
 * @property {string} [gitAccessToken]
 * @property {Object} [gitMetadata]
 * @property {*} [gitSource]
 * @property {string} [inspectorUrl]
 * @property {boolean} [isRollbackCandidate]
 * @property {Object} [manualProvisioning]
 * @property {Object} [meta]
 * @property {string} [monorepoManager]
 * @property {string} [name]
 * @property {string} [oomReport]
 * @property {Array} [outcomes]
 * @property {string} [passiveConnectConfigurationId]
 * @property {Object} [platform]
 * @property {boolean} [prebuilt]
 * @property {string} [project]
 * @property {string} [projectId]
 * @property {Object} [projectSettings]
 * @property {number} [proposedExpiration]
 * @property {number} [ready]
 * @property {string} [readyState]
 * @property {string} [readySubstate]
 * @property {Object} [seatBlock]
 * @property {boolean} [softDeletedByRetention]
 * @property {string} [source]
 * @property {string} [state]
 * @property {string} [status]
 * @property {string} [statusText]
 * @property {string} [statusUrl]
 * @property {string} [target]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {number} [undeleted]
 * @property {string} [url]
 * @property {boolean} [withLatestCommit]
 */

/**
 * @typedef {Object} DeploymentRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} Dns
 * @property {string} [comment]
 * @property {number} [createdAt]
 * @property {string} creator
 * @property {string} domain
 * @property {Object} https
 * @property {string} id
 * @property {number} [mxPriority]
 * @property {string} name
 * @property {string} recordType
 * @property {Object} srv
 * @property {number} [ttl]
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} DnsLoadMatch
 * @property {string} domain_id
 * @property {string} [limit]
 * @property {string} [since]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [until]
 */

/**
 * @typedef {Object} DnsCreateData
 * @property {string} domain_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [comment]
 * @property {number} [createdAt]
 * @property {string} creator
 * @property {string} domain
 * @property {Object} https
 * @property {string} id
 * @property {number} [mxPriority]
 * @property {string} name
 * @property {string} recordType
 * @property {Object} srv
 * @property {number} [ttl]
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} DnsUpdateData
 * @property {string} record_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [comment]
 * @property {number} [createdAt]
 * @property {string} [creator]
 * @property {string} [domain]
 * @property {Object} [https]
 * @property {string} [id]
 * @property {number} [mxPriority]
 * @property {string} [name]
 * @property {string} [recordType]
 * @property {Object} [srv]
 * @property {number} [ttl]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef {Object} DnsRemoveMatch
 * @property {string} domain_id
 * @property {string} record_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Domain
 * @property {number} boughtAt
 * @property {number} createdAt
 * @property {Object} creator
 * @property {Array} [customNameservers]
 * @property {string} echMode
 * @property {number} expiresAt
 * @property {string} id
 * @property {Array} intendedNameservers
 * @property {string} [method]
 * @property {string} name
 * @property {Array} nameservers
 * @property {boolean} [renew]
 * @property {string} serviceType
 * @property {boolean} suffix
 * @property {string} teamId
 * @property {number} [transferStartedAt]
 * @property {number} [transferredAt]
 * @property {string} userId
 * @property {boolean} verified
 */

/**
 * @typedef {Object} DomainLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} DomainListMatch
 * @property {number} [limit]
 * @property {number} [since]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} [until]
 */

/**
 * @typedef {Object} DomainCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} boughtAt
 * @property {number} createdAt
 * @property {Object} creator
 * @property {Array} [customNameservers]
 * @property {string} echMode
 * @property {number} expiresAt
 * @property {string} id
 * @property {Array} intendedNameservers
 * @property {string} [method]
 * @property {string} name
 * @property {Array} nameservers
 * @property {boolean} [renew]
 * @property {string} serviceType
 * @property {boolean} suffix
 * @property {string} teamId
 * @property {number} [transferStartedAt]
 * @property {number} [transferredAt]
 * @property {string} userId
 * @property {boolean} verified
 */

/**
 * @typedef {Object} DomainUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} [boughtAt]
 * @property {number} [createdAt]
 * @property {Object} [creator]
 * @property {Array} [customNameservers]
 * @property {string} [echMode]
 * @property {number} [expiresAt]
 * @property {Array} [intendedNameservers]
 * @property {string} [method]
 * @property {string} [name]
 * @property {Array} [nameservers]
 * @property {boolean} [renew]
 * @property {string} [serviceType]
 * @property {boolean} [suffix]
 * @property {string} [teamId]
 * @property {number} [transferStartedAt]
 * @property {number} [transferredAt]
 * @property {string} [userId]
 * @property {boolean} [verified]
 */

/**
 * @typedef {Object} DomainRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} DomainsRegistrar
 * @property {string} authCode
 * @property {boolean} autoRenew
 * @property {boolean} available
 * @property {Object} contactInformation
 * @property {Array} domains
 * @property {*} [error]
 * @property {number} expectedPrice
 * @property {string} [languageCode]
 * @property {Array} nameservers
 * @property {string} orderId
 * @property {*} purchasePrice
 * @property {*} renewalPrice
 * @property {Array} results
 * @property {string} status
 * @property {*} transferPrice
 * @property {number} years
 */

/**
 * @typedef {Object} DomainsRegistrarLoadMatch
 * @property {string} order_id
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} DomainsRegistrarCreateData
 * @property {string} [team_id]
 * @property {string} authCode
 * @property {boolean} autoRenew
 * @property {boolean} available
 * @property {Object} contactInformation
 * @property {Array} domains
 * @property {*} [error]
 * @property {number} expectedPrice
 * @property {string} [languageCode]
 * @property {Array} nameservers
 * @property {string} orderId
 * @property {*} purchasePrice
 * @property {*} renewalPrice
 * @property {Array} results
 * @property {string} status
 * @property {*} transferPrice
 * @property {number} years
 */

/**
 * @typedef {Object} DomainsRegistrarUpdateData
 * @property {string} domain_id
 * @property {string} [team_id]
 * @property {string} [authCode]
 * @property {boolean} [autoRenew]
 * @property {boolean} [available]
 * @property {Object} [contactInformation]
 * @property {Array} [domains]
 * @property {*} [error]
 * @property {number} [expectedPrice]
 * @property {string} [languageCode]
 * @property {Array} [nameservers]
 * @property {string} [orderId]
 * @property {*} [purchasePrice]
 * @property {*} [renewalPrice]
 * @property {Array} [results]
 * @property {string} [status]
 * @property {*} [transferPrice]
 * @property {number} [years]
 */

/**
 * @typedef {Object} Drain
 * @property {Object} [delivery]
 * @property {*} drains
 * @property {Object} filter
 * @property {string} [id]
 * @property {string} name
 * @property {Array} [projectIds]
 * @property {string} projects
 * @property {Array} [sampling]
 * @property {Object} schemas
 * @property {Object} [source]
 * @property {string} [status]
 * @property {Array} [transforms]
 */

/**
 * @typedef {Object} DrainLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} DrainCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} [delivery]
 * @property {*} drains
 * @property {Object} filter
 * @property {string} [id]
 * @property {string} name
 * @property {Array} [projectIds]
 * @property {string} projects
 * @property {Array} [sampling]
 * @property {Object} schemas
 * @property {Object} [source]
 * @property {string} [status]
 * @property {Array} [transforms]
 */

/**
 * @typedef {Object} DrainUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} [delivery]
 * @property {*} [drains]
 * @property {Object} [filter]
 * @property {string} [name]
 * @property {Array} [projectIds]
 * @property {string} [projects]
 * @property {Array} [sampling]
 * @property {Object} [schemas]
 * @property {Object} [source]
 * @property {string} [status]
 * @property {Array} [transforms]
 */

/**
 * @typedef {Object} DrainRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} EdgeCache
 */

/**
 * @typedef {Object} EdgeCacheCreateData
 * @property {string} project_id_or_name
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Env
 * @property {boolean} [applyToAllCustomEnvironments]
 * @property {string} [comment]
 * @property {string} [created]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {Array} [customEnvironmentIds]
 * @property {boolean} [decrypted]
 * @property {number} [deletedAt]
 * @property {string} [deletedBy]
 * @property {Array} evs
 * @property {Array} failed
 * @property {string} [id]
 * @property {string} [key]
 * @property {string} [lastEditedByDisplayName]
 * @property {string} [ownerId]
 * @property {Array} [projectId]
 * @property {Array} securityIssues
 * @property {Array} [target]
 * @property {string} [type]
 * @property {Array} updated
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 * @property {Object} updates
 * @property {string} [value]
 */

/**
 * @typedef {Object} EnvLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} EnvListMatch
 * @property {string} [exclude_id]
 * @property {string} [exclude_project_id]
 * @property {string} [ids]
 * @property {string} [project_id]
 * @property {string} [search]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} EnvCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [applyToAllCustomEnvironments]
 * @property {string} [comment]
 * @property {string} [created]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {Array} [customEnvironmentIds]
 * @property {boolean} [decrypted]
 * @property {number} [deletedAt]
 * @property {string} [deletedBy]
 * @property {Array} evs
 * @property {Array} failed
 * @property {string} [id]
 * @property {string} [key]
 * @property {string} [lastEditedByDisplayName]
 * @property {string} [ownerId]
 * @property {Array} [projectId]
 * @property {Array} securityIssues
 * @property {Array} [target]
 * @property {string} [type]
 * @property {Array} updated
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 * @property {Object} updates
 * @property {string} [value]
 */

/**
 * @typedef {Object} EnvUpdateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [applyToAllCustomEnvironments]
 * @property {string} [comment]
 * @property {string} [created]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {Array} [customEnvironmentIds]
 * @property {boolean} [decrypted]
 * @property {number} [deletedAt]
 * @property {string} [deletedBy]
 * @property {Array} [evs]
 * @property {Array} [failed]
 * @property {string} [id]
 * @property {string} [key]
 * @property {string} [lastEditedByDisplayName]
 * @property {string} [ownerId]
 * @property {Array} [projectId]
 * @property {Array} [securityIssues]
 * @property {Array} [target]
 * @property {string} [type]
 * @property {Array} [updated]
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 * @property {Object} [updates]
 * @property {string} [value]
 */

/**
 * @typedef {Object} EnvRemoveMatch
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Environment
 * @property {Object} branchMatcher
 * @property {string} [copyEnvVarsFrom]
 * @property {number} createdAt
 * @property {Array} [currentDeploymentAliases]
 * @property {string} [description]
 * @property {Array} [domains]
 * @property {string} id
 * @property {string} slug
 * @property {string} type
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} EnvironmentLoadMatch
 * @property {string} environment_slug_or_id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} EnvironmentListMatch
 * @property {string} id_or_name
 * @property {string} [git_branch]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} EnvironmentCreateData
 * @property {string} id_or_name
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} branchMatcher
 * @property {string} [copyEnvVarsFrom]
 * @property {number} createdAt
 * @property {Array} [currentDeploymentAliases]
 * @property {string} [description]
 * @property {Array} [domains]
 * @property {string} id
 * @property {string} type
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} EnvironmentUpdateData
 * @property {string} [env_id]
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [environment_slug_or_id]
 * @property {Object} [branchMatcher]
 * @property {string} [copyEnvVarsFrom]
 * @property {number} [createdAt]
 * @property {Array} [currentDeploymentAliases]
 * @property {string} [description]
 * @property {Array} [domains]
 * @property {string} [id]
 * @property {string} [type]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} EnvironmentRemoveMatch
 * @property {string} environment_slug_or_id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} FeatureFlag
 * @property {Array} changedEnvironments
 * @property {number} createdAt
 * @property {string} createdBy
 * @property {Object} [data]
 * @property {string} [description]
 * @property {Object} environments
 * @property {string} flagId
 * @property {Array} flags
 * @property {string} [hint]
 * @property {string} id
 * @property {string} kind
 * @property {string} [label]
 * @property {Array} [maintainerIds]
 * @property {string} [message]
 * @property {Object} [metadata]
 * @property {Array} [operations]
 * @property {string} ownerId
 * @property {Object} pagination
 * @property {boolean} [permanent]
 * @property {string} projectId
 * @property {number} revision
 * @property {number} seed
 * @property {string} slug
 * @property {string} state
 * @property {Object} status
 * @property {Array} [tags]
 * @property {string} typeName
 * @property {number} updatedAt
 * @property {string} [updatedBy]
 * @property {Array} variants
 */

/**
 * @typedef {Object} FeatureFlagLoadMatch
 * @property {string} team_id
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} [slug]
 */

/**
 * @typedef {Object} FeatureFlagListMatch
 * @property {string} deployment_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} FeatureFlagUpdateData
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Array} [changedEnvironments]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {Object} [data]
 * @property {string} [description]
 * @property {Object} [environments]
 * @property {string} [flagId]
 * @property {Array} [flags]
 * @property {string} [hint]
 * @property {string} [id]
 * @property {string} [kind]
 * @property {string} [label]
 * @property {Array} [maintainerIds]
 * @property {string} [message]
 * @property {Object} [metadata]
 * @property {Array} [operations]
 * @property {string} [ownerId]
 * @property {Object} [pagination]
 * @property {boolean} [permanent]
 * @property {string} [projectId]
 * @property {number} [revision]
 * @property {number} [seed]
 * @property {string} [state]
 * @property {Object} [status]
 * @property {Array} [tags]
 * @property {string} [typeName]
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 * @property {Array} [variants]
 */

/**
 * @typedef {Object} FeatureFlagRemoveMatch
 * @property {string} [id]
 * @property {string} project_id
 * @property {string} [if_match]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [with_metadata]
 * @property {string} [segment_id_or_slug]
 * @property {string} [hash_key]
 */

/**
 * @typedef {Object} File
 * @property {Array} [children]
 * @property {string} [contentType]
 * @property {number} mode
 * @property {string} name
 * @property {string} type
 * @property {string} [uid]
 */

/**
 * @typedef {Object} FileListMatch
 * @property {string} deployment_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Flag
 * @property {number} createdAt
 * @property {string} createdBy
 * @property {string} [description]
 * @property {Object} environments
 * @property {string} id
 * @property {string} kind
 * @property {Array} [maintainerIds]
 * @property {Object} [metadata]
 * @property {string} ownerId
 * @property {boolean} [permanent]
 * @property {string} projectId
 * @property {number} revision
 * @property {number} seed
 * @property {string} slug
 * @property {string} state
 * @property {Array} [tags]
 * @property {string} typeName
 * @property {number} updatedAt
 * @property {string} [updatedBy]
 * @property {Array} variants
 */

/**
 * @typedef {Object} FlagLoadMatch
 * @property {string} id
 * @property {string} project_id
 * @property {string} [if_match]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [with_metadata]
 */

/**
 * @typedef {Object} FlagsSdkKeyWithSecret
 * @property {number} createdAt
 * @property {string} createdBy
 * @property {number} [deletedAt]
 * @property {string} environment
 * @property {string} hashKey
 * @property {string} keyValue
 * @property {string} [label]
 * @property {string} partialKeyValue
 * @property {string} projectId
 * @property {string} sdkKeyType
 * @property {string} [tokenValue]
 * @property {string} type
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} FlagsSdkKeyWithSecretUpdateData
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {number} [deletedAt]
 * @property {string} [environment]
 * @property {string} [hashKey]
 * @property {string} [keyValue]
 * @property {string} [label]
 * @property {string} [partialKeyValue]
 * @property {string} [projectId]
 * @property {string} [sdkKeyType]
 * @property {string} [tokenValue]
 * @property {string} [type]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} GlobalConfig
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {number} [deletedAt]
 * @property {string} digest
 * @property {string} id
 * @property {number} itemCount
 * @property {Object} [items]
 * @property {string} ownerId
 * @property {*} [purpose]
 * @property {Object} [schema]
 * @property {number} sizeInBytes
 * @property {string} slug
 * @property {number} [syncedToDynamoAt]
 * @property {Object} transfer
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} GlobalConfigLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} GlobalConfigListMatch
 * @property {string} id
 * @property {number} [limit]
 * @property {string} [metadata]
 * @property {string} [next]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} GlobalConfigCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {number} [deletedAt]
 * @property {string} digest
 * @property {string} id
 * @property {number} itemCount
 * @property {Object} [items]
 * @property {string} ownerId
 * @property {*} [purpose]
 * @property {Object} [schema]
 * @property {number} sizeInBytes
 * @property {number} [syncedToDynamoAt]
 * @property {Object} transfer
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} GlobalConfigUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {number} [deletedAt]
 * @property {string} [digest]
 * @property {number} [itemCount]
 * @property {Object} [items]
 * @property {string} [ownerId]
 * @property {*} [purpose]
 * @property {Object} [schema]
 * @property {number} [sizeInBytes]
 * @property {number} [syncedToDynamoAt]
 * @property {Object} [transfer]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} GlobalConfigRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} GlobalConfigItem
 * @property {number} createdAt
 * @property {string} [description]
 * @property {string} edgeConfigId
 * @property {string} [id]
 * @property {string} key
 * @property {number} updatedAt
 * @property {*} value
 */

/**
 * @typedef {Object} GlobalConfigItemLoadMatch
 * @property {string} global_config_id
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} GlobalConfigItemListMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} GlobalConfigToken
 * @property {number} createdAt
 * @property {string} edgeConfigId
 * @property {string} id
 * @property {string} label
 * @property {string} partialToken
 * @property {string} [token]
 */

/**
 * @typedef {Object} GlobalConfigTokenLoadMatch
 * @property {string} [global_config_id]
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Integration
 * @property {string} [cost]
 * @property {string} description
 * @property {Array} [details]
 * @property {boolean} [disabled]
 * @property {string} [effectiveDate]
 * @property {Array} [envVarEnvironments]
 * @property {Array} [highlightedDetails]
 * @property {string} id
 * @property {string} [initialCharge]
 * @property {boolean} [makeEnvVarsSensitive]
 * @property {string} [maximumAmount]
 * @property {string} [maximumAmountAutoPurchasePerPeriod]
 * @property {Object} metadataSchema
 * @property {string} [minimumAmount]
 * @property {string} name
 * @property {boolean} paymentMethodRequired
 * @property {number} [preauthorizationAmount]
 * @property {string} [primaryProtocol]
 * @property {string} projectId
 * @property {Object} protocols
 * @property {Array} [quote]
 * @property {string} scope
 * @property {string} slug
 * @property {string} type
 */

/**
 * @typedef {Object} IntegrationLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} IntegrationListMatch
 * @property {string} configuration_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} IntegrationCreateData
 * @property {string} installation_id
 * @property {string} resource_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [cost]
 * @property {string} description
 * @property {Array} [details]
 * @property {boolean} [disabled]
 * @property {string} [effectiveDate]
 * @property {Array} [envVarEnvironments]
 * @property {Array} [highlightedDetails]
 * @property {string} id
 * @property {string} [initialCharge]
 * @property {boolean} [makeEnvVarsSensitive]
 * @property {string} [maximumAmount]
 * @property {string} [maximumAmountAutoPurchasePerPeriod]
 * @property {Object} metadataSchema
 * @property {string} [minimumAmount]
 * @property {string} name
 * @property {boolean} paymentMethodRequired
 * @property {number} [preauthorizationAmount]
 * @property {string} [primaryProtocol]
 * @property {string} projectId
 * @property {Object} protocols
 * @property {Array} [quote]
 * @property {string} scope
 * @property {string} type
 */

/**
 * @typedef {Object} IntegrationRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Kms
 * @property {string} [activation]
 * @property {string} [alg]
 * @property {string} algorithm
 * @property {Object} [claims]
 * @property {Object} [claimsSchema]
 * @property {string} createdAt
 * @property {Array} environments
 * @property {Object} [headers]
 * @property {string} id
 * @property {string} [importKey]
 * @property {string} [importKeyId]
 * @property {string} keyId
 * @property {Array} [key_ops]
 * @property {string} [kid]
 * @property {string} kind
 * @property {string} [kty]
 * @property {string} [managedBy]
 * @property {string} message
 * @property {string} name
 * @property {string} origin
 * @property {string} ownerId
 * @property {Array} policies
 * @property {string} projectId
 * @property {number} [revokePreviousAfterHours]
 * @property {*} [revokePreviousAt]
 * @property {string} signature
 * @property {Array} signingKeys
 * @property {string} token
 * @property {Object} [tokenClaims]
 * @property {number} [ttl]
 * @property {string} updatedAt
 * @property {string} [use]
 * @property {Array} [x5c]
 * @property {string} [x5tS256]
 */

/**
 * @typedef {Object} KmsLoadMatch
 * @property {string} issuer_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} KmsListMatch
 * @property {number} [limit]
 * @property {string} [next]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} KmsCreateData
 * @property {string} issuer_id
 * @property {string} [key_id]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [activation]
 * @property {string} [alg]
 * @property {string} algorithm
 * @property {Object} [claims]
 * @property {Object} [claimsSchema]
 * @property {string} createdAt
 * @property {Array} environments
 * @property {Object} [headers]
 * @property {string} id
 * @property {string} [importKey]
 * @property {string} [importKeyId]
 * @property {string} keyId
 * @property {Array} [key_ops]
 * @property {string} [kid]
 * @property {string} kind
 * @property {string} [kty]
 * @property {string} [managedBy]
 * @property {string} message
 * @property {string} name
 * @property {string} origin
 * @property {string} ownerId
 * @property {Array} policies
 * @property {string} projectId
 * @property {number} [revokePreviousAfterHours]
 * @property {*} [revokePreviousAt]
 * @property {string} signature
 * @property {Array} signingKeys
 * @property {string} token
 * @property {Object} [tokenClaims]
 * @property {number} [ttl]
 * @property {string} updatedAt
 * @property {string} [use]
 * @property {Array} [x5c]
 * @property {string} [x5tS256]
 */

/**
 * @typedef {Object} KmsUpdateData
 * @property {string} issuer_id
 * @property {string} [kind]
 * @property {string} [policy_key]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [activation]
 * @property {string} [alg]
 * @property {string} [algorithm]
 * @property {Object} [claims]
 * @property {Object} [claimsSchema]
 * @property {string} [createdAt]
 * @property {Array} [environments]
 * @property {Object} [headers]
 * @property {string} [id]
 * @property {string} [importKey]
 * @property {string} [importKeyId]
 * @property {string} [keyId]
 * @property {Array} [key_ops]
 * @property {string} [kid]
 * @property {string} [kty]
 * @property {string} [managedBy]
 * @property {string} [message]
 * @property {string} [name]
 * @property {string} [origin]
 * @property {string} [ownerId]
 * @property {Array} [policies]
 * @property {string} [projectId]
 * @property {number} [revokePreviousAfterHours]
 * @property {*} [revokePreviousAt]
 * @property {string} [signature]
 * @property {Array} [signingKeys]
 * @property {string} [token]
 * @property {Object} [tokenClaims]
 * @property {number} [ttl]
 * @property {string} [updatedAt]
 * @property {string} [use]
 * @property {Array} [x5c]
 * @property {string} [x5tS256]
 */

/**
 * @typedef {Object} KmsRemoveMatch
 * @property {string} issuer_id
 * @property {string} [kind]
 * @property {string} [policy_key]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ListEventType
 * @property {Array} categories
 * @property {Array} types
 */

/**
 * @typedef {Object} ListEventTypeListMatch
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Log
 */

/**
 * @typedef {Object} LogLoadMatch
 * @property {string} deployment_id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} LogDrain
 * @property {string} [branch]
 * @property {string} [clientId]
 * @property {string} [configurationId]
 * @property {number} createdAt
 * @property {string} createdFrom
 * @property {*} deliveryFormat
 * @property {Array} [environments]
 * @property {Object} [headers]
 * @property {string} id
 * @property {string} [integrationConfigurationUri]
 * @property {string} [integrationIcon]
 * @property {string} [integrationWebsite]
 * @property {string} [name]
 * @property {string} ownerId
 * @property {string} [projectId]
 * @property {Array} [projectIds]
 * @property {Array} [projectsMetadata]
 * @property {number} [samplingRate]
 * @property {string} [secret]
 * @property {*} source
 * @property {Array} sources
 * @property {string} url
 */

/**
 * @typedef {Object} LogDrainLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} LogDrainListMatch
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} LogDrainCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [branch]
 * @property {string} [clientId]
 * @property {string} [configurationId]
 * @property {number} createdAt
 * @property {string} createdFrom
 * @property {*} deliveryFormat
 * @property {Array} [environments]
 * @property {Object} [headers]
 * @property {string} id
 * @property {string} [integrationConfigurationUri]
 * @property {string} [integrationIcon]
 * @property {string} [integrationWebsite]
 * @property {string} [name]
 * @property {string} ownerId
 * @property {string} [projectId]
 * @property {Array} [projectIds]
 * @property {Array} [projectsMetadata]
 * @property {number} [samplingRate]
 * @property {string} [secret]
 * @property {*} source
 * @property {Array} sources
 * @property {string} url
 */

/**
 * @typedef {Object} LogDrainRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Marketplace
 * @property {string} access_token
 * @property {boolean} already_revoked
 * @property {Array} balances
 * @property {*} billing
 * @property {Object} billingPlan
 * @property {string} [billingPlanId]
 * @property {string} [category]
 * @property {string} [client_id]
 * @property {string} client_secret
 * @property {string} created
 * @property {number} [createdAt]
 * @property {Object} data
 * @property {string} [description]
 * @property {Array} [discounts]
 * @property {string} email
 * @property {string} eod
 * @property {*} event
 * @property {number} expires_in
 * @property {string} [externalId]
 * @property {Object} [extras]
 * @property {boolean} [final]
 * @property {string} [globalUserId]
 * @property {string} id
 * @property {string} internalId
 * @property {string} invoiceDate
 * @property {string} invoiceId
 * @property {string} [invoiceNumber]
 * @property {boolean} [isArchived]
 * @property {Array} items
 * @property {string} [memo]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {Object} notification
 * @property {string} origin
 * @property {string} [ownership]
 * @property {string} [paidAt]
 * @property {boolean} [partial]
 * @property {string} partnerId
 * @property {Object} period
 * @property {string} productId
 * @property {Object} [protocolSettings]
 * @property {string} [refundReason]
 * @property {string} [refundTotal]
 * @property {string} [refundedAt]
 * @property {boolean} revoked
 * @property {string} role
 * @property {string} scope
 * @property {Array} secrets
 * @property {string} slug
 * @property {string} state
 * @property {string} [status]
 * @property {boolean} [test]
 * @property {string} timestamp
 * @property {string} token
 * @property {string} token_type
 * @property {string} total
 * @property {string} updated
 * @property {number} [updatedAt]
 * @property {Array} usage
 * @property {string} [userEmail]
 * @property {Array} [validationErrors]
 */

/**
 * @typedef {Object} MarketplaceLoadMatch
 * @property {string} installation_id
 * @property {string} [invoice_id]
 * @property {string} [member_id]
 * @property {string} [resource_id]
 */

/**
 * @typedef {Object} MarketplaceListMatch
 * @property {string} installation_id
 */

/**
 * @typedef {Object} MarketplaceCreateData
 * @property {string} installation_id
 * @property {string} [invoice_id]
 * @property {string} [resource_id]
 * @property {string} access_token
 * @property {boolean} already_revoked
 * @property {Array} balances
 * @property {*} billing
 * @property {Object} billingPlan
 * @property {string} [billingPlanId]
 * @property {string} [category]
 * @property {string} [client_id]
 * @property {string} client_secret
 * @property {string} created
 * @property {number} [createdAt]
 * @property {Object} data
 * @property {string} [description]
 * @property {Array} [discounts]
 * @property {string} email
 * @property {string} eod
 * @property {*} event
 * @property {number} expires_in
 * @property {string} [externalId]
 * @property {Object} [extras]
 * @property {boolean} [final]
 * @property {string} [globalUserId]
 * @property {string} id
 * @property {string} internalId
 * @property {string} invoiceDate
 * @property {string} invoiceId
 * @property {string} [invoiceNumber]
 * @property {boolean} [isArchived]
 * @property {Array} items
 * @property {string} [memo]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {Object} notification
 * @property {string} origin
 * @property {string} [ownership]
 * @property {string} [paidAt]
 * @property {boolean} [partial]
 * @property {string} partnerId
 * @property {Object} period
 * @property {string} productId
 * @property {Object} [protocolSettings]
 * @property {string} [refundReason]
 * @property {string} [refundTotal]
 * @property {string} [refundedAt]
 * @property {boolean} revoked
 * @property {string} role
 * @property {string} scope
 * @property {Array} secrets
 * @property {string} slug
 * @property {string} state
 * @property {string} [status]
 * @property {boolean} [test]
 * @property {string} timestamp
 * @property {string} token
 * @property {string} token_type
 * @property {string} total
 * @property {string} updated
 * @property {number} [updatedAt]
 * @property {Array} usage
 * @property {string} [userEmail]
 * @property {Array} [validationErrors]
 */

/**
 * @typedef {Object} MarketplaceUpdateData
 * @property {string} installation_id
 * @property {string} [product_id]
 * @property {string} resource_id
 * @property {string} [access_token]
 * @property {boolean} [already_revoked]
 * @property {Array} [balances]
 * @property {*} [billing]
 * @property {Object} [billingPlan]
 * @property {string} [billingPlanId]
 * @property {string} [category]
 * @property {string} [client_id]
 * @property {string} [client_secret]
 * @property {string} [created]
 * @property {number} [createdAt]
 * @property {Object} [data]
 * @property {string} [description]
 * @property {Array} [discounts]
 * @property {string} [email]
 * @property {string} [eod]
 * @property {*} [event]
 * @property {number} [expires_in]
 * @property {string} [externalId]
 * @property {Object} [extras]
 * @property {boolean} [final]
 * @property {string} [globalUserId]
 * @property {string} [id]
 * @property {string} [internalId]
 * @property {string} [invoiceDate]
 * @property {string} [invoiceId]
 * @property {string} [invoiceNumber]
 * @property {boolean} [isArchived]
 * @property {Array} [items]
 * @property {string} [memo]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {Object} [notification]
 * @property {string} [origin]
 * @property {string} [ownership]
 * @property {string} [paidAt]
 * @property {boolean} [partial]
 * @property {string} [partnerId]
 * @property {Object} [period]
 * @property {string} [productId]
 * @property {Object} [protocolSettings]
 * @property {string} [refundReason]
 * @property {string} [refundTotal]
 * @property {string} [refundedAt]
 * @property {boolean} [revoked]
 * @property {string} [role]
 * @property {string} [scope]
 * @property {Array} [secrets]
 * @property {string} [slug]
 * @property {string} [state]
 * @property {string} [status]
 * @property {boolean} [test]
 * @property {string} [timestamp]
 * @property {string} [token]
 * @property {string} [token_type]
 * @property {string} [total]
 * @property {string} [updated]
 * @property {number} [updatedAt]
 * @property {Array} [usage]
 * @property {string} [userEmail]
 * @property {Array} [validationErrors]
 */

/**
 * @typedef {Object} MarketplaceRemoveMatch
 * @property {string} installation_id
 * @property {string} [item_id]
 * @property {string} resource_id
 */

/**
 * @typedef {Object} Microfrontend
 * @property {Object} abuse
 * @property {string} accountId
 * @property {Array} alias
 * @property {Object} analytics
 * @property {Object} applications
 * @property {boolean} [appliedCve55182Migration]
 * @property {boolean} [autoAssignCustomDomains]
 * @property {string} [autoAssignCustomDomainsUpdatedBy]
 * @property {boolean} [autoExposeSystemEnvs]
 * @property {string} [avatar]
 * @property {Object} [blobs]
 * @property {string} [buildCommand]
 * @property {string} [commandForIgnoringBuildStep]
 * @property {string} [concurrencyBucketName]
 * @property {boolean} [connectBuildsEnabled]
 * @property {string} [connectConfigurationId]
 * @property {Array} [connectConfigurations]
 * @property {number} [createdAt]
 * @property {*} [creator]
 * @property {Object} crons
 * @property {Array} [customEnvironments]
 * @property {boolean} [customerSupportCodeVisibility]
 * @property {Object} dataCache
 * @property {Object} defaultResourceConfig
 * @property {Object} deploymentExpiration
 * @property {Object} [deploymentPolicy]
 * @property {string} [devCommand]
 * @property {boolean} directoryListing
 * @property {Array} [dismissedToasts]
 * @property {boolean} [enableAffectedProjectsDeployments]
 * @property {boolean} [enableExternalRewriteCaching]
 * @property {boolean} [enablePreviewFeedback]
 * @property {boolean} [enableProductionFeedback]
 * @property {Array} [env]
 * @property {*} [expiration]
 * @property {Object} [features]
 * @property {string} [framework]
 * @property {Object} gitComments
 * @property {boolean} [gitForkProtection]
 * @property {boolean} [gitLFS]
 * @property {Object} gitProviderOptions
 * @property {boolean} [hasActiveBranches]
 * @property {boolean} [hasDeployments]
 * @property {string} id
 * @property {string} [installCommand]
 * @property {Array} [internalRoutes]
 * @property {Array} [ipBuckets]
 * @property {Object} [jobs]
 * @property {Object} lastAliasRequest
 * @property {Object} [lastRollbackTarget]
 * @property {Array} [latestDeployments]
 * @property {string} [link]
 * @property {boolean} [live]
 * @property {*} [microfrontends]
 * @property {string} name
 * @property {string} nodeVersion
 * @property {Object} [oidcTokenConfig]
 * @property {Object} [options]
 * @property {Object} optionsAllowlist
 * @property {string} [outputDirectory]
 * @property {string} [passiveConnectConfigurationId]
 * @property {Object} passport
 * @property {Object} [passwordProtection]
 * @property {boolean} [paused]
 * @property {Object} [permissions]
 * @property {boolean} [productionDeploymentsFastLane]
 * @property {boolean} [protectedSourcemaps]
 * @property {Object} [protectionBypass]
 * @property {Object} [protectionConfig]
 * @property {Object} resourceConfig
 * @property {Object} rollbackDescription
 * @property {Object} rollingRelease
 * @property {string} [rootDirectory]
 * @property {Object} [sandbox]
 * @property {string} [schema]
 * @property {Object} [security]
 * @property {boolean} [serverlessFunctionZeroConfigFailover]
 * @property {Array} [services]
 * @property {Array} [skewProtectionAllowedDomains]
 * @property {number} [skewProtectionBoundaryAt]
 * @property {number} [skewProtectionMaxAge]
 * @property {boolean} [skipGitConnectDuringLink]
 * @property {boolean} [sourceFilesOutsideRootDirectory]
 * @property {Object} speedInsights
 * @property {Object} ssoProtection
 * @property {Object} staticIps
 * @property {Object} [targets]
 * @property {string} [tier]
 * @property {Object} [tracing]
 * @property {number} [transferCompletedAt]
 * @property {number} [transferStartedAt]
 * @property {string} [transferToAccountId]
 * @property {string} [transferredFromAccountId]
 * @property {*} [trustedIps]
 * @property {Object} [trustedSources]
 * @property {number} [updatedAt]
 * @property {Object} usageStatus
 * @property {boolean} [v0]
 * @property {boolean} [v0Created]
 * @property {string} [version]
 * @property {Object} webAnalytics
 */

/**
 * @typedef {Object} MicrofrontendLoadMatch
 * @property {string} project_id_or_name
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} MicrofrontendListMatch
 * @property {string} group_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} MicrofrontendCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} abuse
 * @property {string} accountId
 * @property {Array} alias
 * @property {Object} analytics
 * @property {Object} applications
 * @property {boolean} [appliedCve55182Migration]
 * @property {boolean} [autoAssignCustomDomains]
 * @property {string} [autoAssignCustomDomainsUpdatedBy]
 * @property {boolean} [autoExposeSystemEnvs]
 * @property {string} [avatar]
 * @property {Object} [blobs]
 * @property {string} [buildCommand]
 * @property {string} [commandForIgnoringBuildStep]
 * @property {string} [concurrencyBucketName]
 * @property {boolean} [connectBuildsEnabled]
 * @property {string} [connectConfigurationId]
 * @property {Array} [connectConfigurations]
 * @property {number} [createdAt]
 * @property {*} [creator]
 * @property {Object} crons
 * @property {Array} [customEnvironments]
 * @property {boolean} [customerSupportCodeVisibility]
 * @property {Object} dataCache
 * @property {Object} defaultResourceConfig
 * @property {Object} deploymentExpiration
 * @property {Object} [deploymentPolicy]
 * @property {string} [devCommand]
 * @property {boolean} directoryListing
 * @property {Array} [dismissedToasts]
 * @property {boolean} [enableAffectedProjectsDeployments]
 * @property {boolean} [enableExternalRewriteCaching]
 * @property {boolean} [enablePreviewFeedback]
 * @property {boolean} [enableProductionFeedback]
 * @property {Array} [env]
 * @property {*} [expiration]
 * @property {Object} [features]
 * @property {string} [framework]
 * @property {Object} gitComments
 * @property {boolean} [gitForkProtection]
 * @property {boolean} [gitLFS]
 * @property {Object} gitProviderOptions
 * @property {boolean} [hasActiveBranches]
 * @property {boolean} [hasDeployments]
 * @property {string} id
 * @property {string} [installCommand]
 * @property {Array} [internalRoutes]
 * @property {Array} [ipBuckets]
 * @property {Object} [jobs]
 * @property {Object} lastAliasRequest
 * @property {Object} [lastRollbackTarget]
 * @property {Array} [latestDeployments]
 * @property {string} [link]
 * @property {boolean} [live]
 * @property {*} [microfrontends]
 * @property {string} name
 * @property {string} nodeVersion
 * @property {Object} [oidcTokenConfig]
 * @property {Object} [options]
 * @property {Object} optionsAllowlist
 * @property {string} [outputDirectory]
 * @property {string} [passiveConnectConfigurationId]
 * @property {Object} passport
 * @property {Object} [passwordProtection]
 * @property {boolean} [paused]
 * @property {Object} [permissions]
 * @property {boolean} [productionDeploymentsFastLane]
 * @property {boolean} [protectedSourcemaps]
 * @property {Object} [protectionBypass]
 * @property {Object} [protectionConfig]
 * @property {Object} resourceConfig
 * @property {Object} rollbackDescription
 * @property {Object} rollingRelease
 * @property {string} [rootDirectory]
 * @property {Object} [sandbox]
 * @property {string} [schema]
 * @property {Object} [security]
 * @property {boolean} [serverlessFunctionZeroConfigFailover]
 * @property {Array} [services]
 * @property {Array} [skewProtectionAllowedDomains]
 * @property {number} [skewProtectionBoundaryAt]
 * @property {number} [skewProtectionMaxAge]
 * @property {boolean} [skipGitConnectDuringLink]
 * @property {boolean} [sourceFilesOutsideRootDirectory]
 * @property {Object} speedInsights
 * @property {Object} ssoProtection
 * @property {Object} staticIps
 * @property {Object} [targets]
 * @property {string} [tier]
 * @property {Object} [tracing]
 * @property {number} [transferCompletedAt]
 * @property {number} [transferStartedAt]
 * @property {string} [transferToAccountId]
 * @property {string} [transferredFromAccountId]
 * @property {*} [trustedIps]
 * @property {Object} [trustedSources]
 * @property {number} [updatedAt]
 * @property {Object} usageStatus
 * @property {boolean} [v0]
 * @property {boolean} [v0Created]
 * @property {string} [version]
 * @property {Object} webAnalytics
 */

/**
 * @typedef {Object} Network
 * @property {string} awsAccountId
 * @property {Array} [awsAvailabilityZoneIds]
 * @property {string} awsRegion
 * @property {string} cidr
 * @property {number} createdAt
 * @property {Array} [egressIpAddresses]
 * @property {Object} hostedZones
 * @property {string} id
 * @property {string} name
 * @property {Object} peeringConnections
 * @property {Object} projects
 * @property {string} [region]
 * @property {string} status
 * @property {string} teamId
 * @property {string} [vpcId]
 */

/**
 * @typedef {Object} NetworkLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} NetworkListMatch
 * @property {boolean} [include_hosted_zone]
 * @property {boolean} [include_peering_connection]
 * @property {boolean} [include_project]
 * @property {string} [search]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} NetworkCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} awsAccountId
 * @property {Array} [awsAvailabilityZoneIds]
 * @property {string} awsRegion
 * @property {string} cidr
 * @property {number} createdAt
 * @property {Array} [egressIpAddresses]
 * @property {Object} hostedZones
 * @property {string} id
 * @property {string} name
 * @property {Object} peeringConnections
 * @property {Object} projects
 * @property {string} [region]
 * @property {string} status
 * @property {string} teamId
 * @property {string} [vpcId]
 */

/**
 * @typedef {Object} NetworkUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [awsAccountId]
 * @property {Array} [awsAvailabilityZoneIds]
 * @property {string} [awsRegion]
 * @property {string} [cidr]
 * @property {number} [createdAt]
 * @property {Array} [egressIpAddresses]
 * @property {Object} [hostedZones]
 * @property {string} [name]
 * @property {Object} [peeringConnections]
 * @property {Object} [projects]
 * @property {string} [region]
 * @property {string} [status]
 * @property {string} [teamId]
 * @property {string} [vpcId]
 */

/**
 * @typedef {Object} NetworkRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Networking
 * @property {boolean} [builds]
 * @property {Array} [regions]
 */

/**
 * @typedef {Object} NetworkingUpdateData
 * @property {string} id_or_name
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [builds]
 * @property {Array} [regions]
 */

/**
 * @typedef {Object} NetworkingRemoveMatch
 * @property {string} endpoint_id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Observability
 * @property {boolean} disabled
 * @property {number} [disabledAt]
 * @property {string} id
 * @property {string} [name]
 */

/**
 * @typedef {Object} ObservabilityListMatch
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ObservabilityUpdateData
 * @property {string} project_id_or_name
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [disabled]
 * @property {number} [disabledAt]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef {Object} PrivateLinkEndpoint
 * @property {Array} [awsDnsEntries]
 * @property {string} awsServiceName
 * @property {number} createdAt
 * @property {boolean} [enablePrivateDns]
 * @property {string} endpointId
 * @property {string} [id]
 * @property {string} name
 * @property {Array} [privateDnsNames]
 * @property {string} projectId
 * @property {string} status
 * @property {string} [statusMessage]
 * @property {string} teamId
 * @property {number} updatedAt
 * @property {string} vercelRegion
 * @property {string} [vpcEndpointId]
 */

/**
 * @typedef {Object} PrivateLinkEndpointLoadMatch
 * @property {string} id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} PrivateLinkEndpointListMatch
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} PrivateLinkEndpointCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Array} [awsDnsEntries]
 * @property {string} awsServiceName
 * @property {number} createdAt
 * @property {boolean} [enablePrivateDns]
 * @property {string} endpointId
 * @property {string} [id]
 * @property {string} name
 * @property {Array} [privateDnsNames]
 * @property {string} projectId
 * @property {string} status
 * @property {string} [statusMessage]
 * @property {string} teamId
 * @property {number} updatedAt
 * @property {string} vercelRegion
 * @property {string} [vpcEndpointId]
 */

/**
 * @typedef {Object} PrivateLinkEndpointUpdateData
 * @property {string} id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Array} [awsDnsEntries]
 * @property {string} [awsServiceName]
 * @property {number} [createdAt]
 * @property {boolean} [enablePrivateDns]
 * @property {string} [endpointId]
 * @property {string} [name]
 * @property {Array} [privateDnsNames]
 * @property {string} [projectId]
 * @property {string} [status]
 * @property {string} [statusMessage]
 * @property {string} [teamId]
 * @property {number} [updatedAt]
 * @property {string} [vercelRegion]
 * @property {string} [vpcEndpointId]
 */

/**
 * @typedef {Object} Project
 * @property {Object} abuse
 * @property {Object} [acceptedPolicies]
 * @property {string} accountId
 * @property {Array} alias
 * @property {Object} analytics
 * @property {string} apexName
 * @property {boolean} [appliedCve55182Migration]
 * @property {boolean} [autoAssignCustomDomains]
 * @property {string} [autoAssignCustomDomainsUpdatedBy]
 * @property {boolean} [autoExposeSystemEnvs]
 * @property {string} [avatar]
 * @property {Object} [blobs]
 * @property {string} [buildCommand]
 * @property {string} [commandForIgnoringBuildStep]
 * @property {string} [comment]
 * @property {string} [concurrencyBucketName]
 * @property {string} [configurationId]
 * @property {boolean} [connectBuildsEnabled]
 * @property {string} [connectConfigurationId]
 * @property {Array} [connectConfigurations]
 * @property {*} [contentHint]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {*} [creator]
 * @property {Object} crons
 * @property {string} [customEnvironmentId]
 * @property {Array} [customEnvironmentIds]
 * @property {Array} [customEnvironments]
 * @property {boolean} [customerSupportCodeVisibility]
 * @property {Object} dataCache
 * @property {boolean} [decrypted]
 * @property {Object} defaultResourceConfig
 * @property {Object} deploymentExpiration
 * @property {Object} [deploymentPolicy]
 * @property {string} [devCommand]
 * @property {boolean} directoryListing
 * @property {Array} [dismissedToasts]
 * @property {string} [edgeConfigId]
 * @property {string} [edgeConfigTokenId]
 * @property {boolean} [enableAffectedProjectsDeployments]
 * @property {boolean} [enableExternalRewriteCaching]
 * @property {boolean} [enablePreviewFeedback]
 * @property {boolean} [enableProductionFeedback]
 * @property {Array} [env]
 * @property {Array} [environmentVariables]
 * @property {*} [expiration]
 * @property {Object} [features]
 * @property {string} [framework]
 * @property {string} [gitBranch]
 * @property {Object} gitComments
 * @property {boolean} [gitForkProtection]
 * @property {boolean} [gitLFS]
 * @property {Object} gitProviderOptions
 * @property {Object} gitRepository
 * @property {boolean} [hasActiveBranches]
 * @property {boolean} [hasDeployments]
 * @property {string} hostname
 * @property {string} id
 * @property {string} [installCommand]
 * @property {Array} [integrations]
 * @property {Object} internalContentHint
 * @property {Array} [internalRoutes]
 * @property {Array} [ipBuckets]
 * @property {Object} [jobs]
 * @property {string} key
 * @property {Object} lastAliasRequest
 * @property {Object} [lastRollbackTarget]
 * @property {Array} [latestDeployments]
 * @property {string} [legacyValue]
 * @property {string} [link]
 * @property {boolean} [live]
 * @property {*} [microfrontends]
 * @property {string} name
 * @property {string} [newProjectName]
 * @property {string} nodeVersion
 * @property {Object} [oidcTokenConfig]
 * @property {Object} optionsAllowlist
 * @property {string} [outputDirectory]
 * @property {Object} [paidFeatures]
 * @property {string} [passiveConnectConfigurationId]
 * @property {Object} passport
 * @property {Object} [passwordProtection]
 * @property {boolean} [paused]
 * @property {Object} [permissions]
 * @property {string} [previewDeploymentSuffix]
 * @property {boolean} [previewDeploymentsDisabled]
 * @property {boolean} [productionDeploymentsFastLane]
 * @property {string} projectId
 * @property {boolean} [protectedSourcemaps]
 * @property {Object} [protectionBypass]
 * @property {Object} [protectionConfig]
 * @property {boolean} [publicSource]
 * @property {string} [redirect]
 * @property {number} [redirectStatusCode]
 * @property {Object} resourceConfig
 * @property {Object} rollbackDescription
 * @property {Object} rollingRelease
 * @property {string} [rootDirectory]
 * @property {Object} [sandbox]
 * @property {Object} [security]
 * @property {string} [serverlessFunctionRegion]
 * @property {boolean} [serverlessFunctionZeroConfigFailover]
 * @property {Array} [services]
 * @property {Array} [skewProtectionAllowedDomains]
 * @property {number} [skewProtectionBoundaryAt]
 * @property {number} [skewProtectionMaxAge]
 * @property {boolean} [skipGitConnectDuringLink]
 * @property {boolean} [sourceFilesOutsideRootDirectory]
 * @property {Object} speedInsights
 * @property {Object} ssoProtection
 * @property {Object} staticIps
 * @property {string} [sunsetSecretId]
 * @property {*} [target]
 * @property {Object} [targets]
 * @property {string} [tier]
 * @property {string} token
 * @property {Object} [tracing]
 * @property {number} [transferCompletedAt]
 * @property {number} [transferStartedAt]
 * @property {string} [transferToAccountId]
 * @property {string} [transferredFromAccountId]
 * @property {*} [trustedIps]
 * @property {Object} [trustedSources]
 * @property {string} type
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 * @property {Object} usageStatus
 * @property {boolean} [v0]
 * @property {boolean} [v0Created]
 * @property {string} value
 * @property {Array} [verification]
 * @property {boolean} verified
 * @property {string} [visibility]
 * @property {Object} webAnalytics
 */

/**
 * @typedef {Object} ProjectLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ProjectCreateData
 * @property {string} deployment_id
 * @property {string} id
 * @property {string} [description]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} abuse
 * @property {Object} [acceptedPolicies]
 * @property {string} accountId
 * @property {Array} alias
 * @property {Object} analytics
 * @property {string} apexName
 * @property {boolean} [appliedCve55182Migration]
 * @property {boolean} [autoAssignCustomDomains]
 * @property {string} [autoAssignCustomDomainsUpdatedBy]
 * @property {boolean} [autoExposeSystemEnvs]
 * @property {string} [avatar]
 * @property {Object} [blobs]
 * @property {string} [buildCommand]
 * @property {string} [commandForIgnoringBuildStep]
 * @property {string} [comment]
 * @property {string} [concurrencyBucketName]
 * @property {string} [configurationId]
 * @property {boolean} [connectBuildsEnabled]
 * @property {string} [connectConfigurationId]
 * @property {Array} [connectConfigurations]
 * @property {*} [contentHint]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {*} [creator]
 * @property {Object} crons
 * @property {string} [customEnvironmentId]
 * @property {Array} [customEnvironmentIds]
 * @property {Array} [customEnvironments]
 * @property {boolean} [customerSupportCodeVisibility]
 * @property {Object} dataCache
 * @property {boolean} [decrypted]
 * @property {Object} defaultResourceConfig
 * @property {Object} deploymentExpiration
 * @property {Object} [deploymentPolicy]
 * @property {string} [devCommand]
 * @property {boolean} directoryListing
 * @property {Array} [dismissedToasts]
 * @property {string} [edgeConfigId]
 * @property {string} [edgeConfigTokenId]
 * @property {boolean} [enableAffectedProjectsDeployments]
 * @property {boolean} [enableExternalRewriteCaching]
 * @property {boolean} [enablePreviewFeedback]
 * @property {boolean} [enableProductionFeedback]
 * @property {Array} [env]
 * @property {Array} [environmentVariables]
 * @property {*} [expiration]
 * @property {Object} [features]
 * @property {string} [framework]
 * @property {string} [gitBranch]
 * @property {Object} gitComments
 * @property {boolean} [gitForkProtection]
 * @property {boolean} [gitLFS]
 * @property {Object} gitProviderOptions
 * @property {Object} gitRepository
 * @property {boolean} [hasActiveBranches]
 * @property {boolean} [hasDeployments]
 * @property {string} hostname
 * @property {string} [installCommand]
 * @property {Array} [integrations]
 * @property {Object} internalContentHint
 * @property {Array} [internalRoutes]
 * @property {Array} [ipBuckets]
 * @property {Object} [jobs]
 * @property {string} key
 * @property {Object} lastAliasRequest
 * @property {Object} [lastRollbackTarget]
 * @property {Array} [latestDeployments]
 * @property {string} [legacyValue]
 * @property {string} [link]
 * @property {boolean} [live]
 * @property {*} [microfrontends]
 * @property {string} name
 * @property {string} [newProjectName]
 * @property {string} nodeVersion
 * @property {Object} [oidcTokenConfig]
 * @property {Object} optionsAllowlist
 * @property {string} [outputDirectory]
 * @property {Object} [paidFeatures]
 * @property {string} [passiveConnectConfigurationId]
 * @property {Object} passport
 * @property {Object} [passwordProtection]
 * @property {boolean} [paused]
 * @property {Object} [permissions]
 * @property {string} [previewDeploymentSuffix]
 * @property {boolean} [previewDeploymentsDisabled]
 * @property {boolean} [productionDeploymentsFastLane]
 * @property {string} projectId
 * @property {boolean} [protectedSourcemaps]
 * @property {Object} [protectionBypass]
 * @property {Object} [protectionConfig]
 * @property {boolean} [publicSource]
 * @property {string} [redirect]
 * @property {number} [redirectStatusCode]
 * @property {Object} resourceConfig
 * @property {Object} rollbackDescription
 * @property {Object} rollingRelease
 * @property {string} [rootDirectory]
 * @property {Object} [sandbox]
 * @property {Object} [security]
 * @property {string} [serverlessFunctionRegion]
 * @property {boolean} [serverlessFunctionZeroConfigFailover]
 * @property {Array} [services]
 * @property {Array} [skewProtectionAllowedDomains]
 * @property {number} [skewProtectionBoundaryAt]
 * @property {number} [skewProtectionMaxAge]
 * @property {boolean} [skipGitConnectDuringLink]
 * @property {boolean} [sourceFilesOutsideRootDirectory]
 * @property {Object} speedInsights
 * @property {Object} ssoProtection
 * @property {Object} staticIps
 * @property {string} [sunsetSecretId]
 * @property {*} [target]
 * @property {Object} [targets]
 * @property {string} [tier]
 * @property {string} token
 * @property {Object} [tracing]
 * @property {number} [transferCompletedAt]
 * @property {number} [transferStartedAt]
 * @property {string} [transferToAccountId]
 * @property {string} [transferredFromAccountId]
 * @property {*} [trustedIps]
 * @property {Object} [trustedSources]
 * @property {string} type
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 * @property {Object} usageStatus
 * @property {boolean} [v0]
 * @property {boolean} [v0Created]
 * @property {string} value
 * @property {Array} [verification]
 * @property {boolean} verified
 * @property {string} [visibility]
 * @property {Object} webAnalytics
 */

/**
 * @typedef {Object} ProjectUpdateData
 * @property {string} code
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} [abuse]
 * @property {Object} [acceptedPolicies]
 * @property {string} [accountId]
 * @property {Array} [alias]
 * @property {Object} [analytics]
 * @property {string} [apexName]
 * @property {boolean} [appliedCve55182Migration]
 * @property {boolean} [autoAssignCustomDomains]
 * @property {string} [autoAssignCustomDomainsUpdatedBy]
 * @property {boolean} [autoExposeSystemEnvs]
 * @property {string} [avatar]
 * @property {Object} [blobs]
 * @property {string} [buildCommand]
 * @property {string} [commandForIgnoringBuildStep]
 * @property {string} [comment]
 * @property {string} [concurrencyBucketName]
 * @property {string} [configurationId]
 * @property {boolean} [connectBuildsEnabled]
 * @property {string} [connectConfigurationId]
 * @property {Array} [connectConfigurations]
 * @property {*} [contentHint]
 * @property {number} [createdAt]
 * @property {string} [createdBy]
 * @property {*} [creator]
 * @property {Object} [crons]
 * @property {string} [customEnvironmentId]
 * @property {Array} [customEnvironmentIds]
 * @property {Array} [customEnvironments]
 * @property {boolean} [customerSupportCodeVisibility]
 * @property {Object} [dataCache]
 * @property {boolean} [decrypted]
 * @property {Object} [defaultResourceConfig]
 * @property {Object} [deploymentExpiration]
 * @property {Object} [deploymentPolicy]
 * @property {string} [devCommand]
 * @property {boolean} [directoryListing]
 * @property {Array} [dismissedToasts]
 * @property {string} [edgeConfigId]
 * @property {string} [edgeConfigTokenId]
 * @property {boolean} [enableAffectedProjectsDeployments]
 * @property {boolean} [enableExternalRewriteCaching]
 * @property {boolean} [enablePreviewFeedback]
 * @property {boolean} [enableProductionFeedback]
 * @property {Array} [env]
 * @property {Array} [environmentVariables]
 * @property {*} [expiration]
 * @property {Object} [features]
 * @property {string} [framework]
 * @property {string} [gitBranch]
 * @property {Object} [gitComments]
 * @property {boolean} [gitForkProtection]
 * @property {boolean} [gitLFS]
 * @property {Object} [gitProviderOptions]
 * @property {Object} [gitRepository]
 * @property {boolean} [hasActiveBranches]
 * @property {boolean} [hasDeployments]
 * @property {string} [hostname]
 * @property {string} [id]
 * @property {string} [installCommand]
 * @property {Array} [integrations]
 * @property {Object} [internalContentHint]
 * @property {Array} [internalRoutes]
 * @property {Array} [ipBuckets]
 * @property {Object} [jobs]
 * @property {string} [key]
 * @property {Object} [lastAliasRequest]
 * @property {Object} [lastRollbackTarget]
 * @property {Array} [latestDeployments]
 * @property {string} [legacyValue]
 * @property {string} [link]
 * @property {boolean} [live]
 * @property {*} [microfrontends]
 * @property {string} [name]
 * @property {string} [newProjectName]
 * @property {string} [nodeVersion]
 * @property {Object} [oidcTokenConfig]
 * @property {Object} [optionsAllowlist]
 * @property {string} [outputDirectory]
 * @property {Object} [paidFeatures]
 * @property {string} [passiveConnectConfigurationId]
 * @property {Object} [passport]
 * @property {Object} [passwordProtection]
 * @property {boolean} [paused]
 * @property {Object} [permissions]
 * @property {string} [previewDeploymentSuffix]
 * @property {boolean} [previewDeploymentsDisabled]
 * @property {boolean} [productionDeploymentsFastLane]
 * @property {string} [projectId]
 * @property {boolean} [protectedSourcemaps]
 * @property {Object} [protectionBypass]
 * @property {Object} [protectionConfig]
 * @property {boolean} [publicSource]
 * @property {string} [redirect]
 * @property {number} [redirectStatusCode]
 * @property {Object} [resourceConfig]
 * @property {Object} [rollbackDescription]
 * @property {Object} [rollingRelease]
 * @property {string} [rootDirectory]
 * @property {Object} [sandbox]
 * @property {Object} [security]
 * @property {string} [serverlessFunctionRegion]
 * @property {boolean} [serverlessFunctionZeroConfigFailover]
 * @property {Array} [services]
 * @property {Array} [skewProtectionAllowedDomains]
 * @property {number} [skewProtectionBoundaryAt]
 * @property {number} [skewProtectionMaxAge]
 * @property {boolean} [skipGitConnectDuringLink]
 * @property {boolean} [sourceFilesOutsideRootDirectory]
 * @property {Object} [speedInsights]
 * @property {Object} [ssoProtection]
 * @property {Object} [staticIps]
 * @property {string} [sunsetSecretId]
 * @property {*} [target]
 * @property {Object} [targets]
 * @property {string} [tier]
 * @property {string} [token]
 * @property {Object} [tracing]
 * @property {number} [transferCompletedAt]
 * @property {number} [transferStartedAt]
 * @property {string} [transferToAccountId]
 * @property {string} [transferredFromAccountId]
 * @property {*} [trustedIps]
 * @property {Object} [trustedSources]
 * @property {string} [type]
 * @property {number} [updatedAt]
 * @property {string} [updatedBy]
 * @property {Object} [usageStatus]
 * @property {boolean} [v0]
 * @property {boolean} [v0Created]
 * @property {string} [value]
 * @property {Array} [verification]
 * @property {boolean} [verified]
 * @property {string} [visibility]
 * @property {Object} [webAnalytics]
 */

/**
 * @typedef {Object} ProjectRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ProjectMember
 * @property {string} [email]
 * @property {string} id
 * @property {string} role
 * @property {string} [uid]
 * @property {string} [username]
 */

/**
 * @typedef {Object} ProjectMemberLoadMatch
 * @property {string} id_or_name
 * @property {number} [limit]
 * @property {string} [search]
 * @property {number} [since]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} [until]
 */

/**
 * @typedef {Object} ProjectMemberCreateData
 * @property {string} id_or_name
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [email]
 * @property {string} id
 * @property {string} role
 * @property {string} [uid]
 * @property {string} [username]
 */

/**
 * @typedef {Object} ProjectMemberRemoveMatch
 * @property {string} id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ProjectRoute
 * @property {string} action
 * @property {Array} actions
 * @property {string} [alias]
 * @property {Array} [conditions]
 * @property {string} createdBy
 * @property {Object} currentRoute
 * @property {string} description
 * @property {string} id
 * @property {boolean} [isLive]
 * @property {boolean} [isStaging]
 * @property {number} lastModified
 * @property {string} name
 * @property {boolean} [overwrite]
 * @property {Object} pathCondition
 * @property {Object} [position]
 * @property {string} prompt
 * @property {boolean} [restore]
 * @property {Object} route
 * @property {Array} [routes]
 * @property {number} [ruleCount]
 * @property {string} s3Key
 * @property {Object} version
 */

/**
 * @typedef {Object} ProjectRouteLoadMatch
 * @property {string} id
 * @property {*} [diff]
 * @property {string} [filter]
 * @property {string} [q]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [version_id]
 */

/**
 * @typedef {Object} ProjectRouteListMatch
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} ProjectRouteCreateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} action
 * @property {Array} actions
 * @property {string} [alias]
 * @property {Array} [conditions]
 * @property {string} createdBy
 * @property {Object} currentRoute
 * @property {string} description
 * @property {boolean} [isLive]
 * @property {boolean} [isStaging]
 * @property {number} lastModified
 * @property {string} name
 * @property {boolean} [overwrite]
 * @property {Object} pathCondition
 * @property {Object} [position]
 * @property {string} prompt
 * @property {boolean} [restore]
 * @property {Object} route
 * @property {Array} [routes]
 * @property {number} [ruleCount]
 * @property {string} s3Key
 * @property {Object} version
 */

/**
 * @typedef {Object} ProjectRouteUpdateData
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [action]
 * @property {Array} [actions]
 * @property {string} [alias]
 * @property {Array} [conditions]
 * @property {string} [createdBy]
 * @property {Object} [currentRoute]
 * @property {string} [description]
 * @property {boolean} [isLive]
 * @property {boolean} [isStaging]
 * @property {number} [lastModified]
 * @property {string} [name]
 * @property {boolean} [overwrite]
 * @property {Object} [pathCondition]
 * @property {Object} [position]
 * @property {string} [prompt]
 * @property {boolean} [restore]
 * @property {Object} [route]
 * @property {Array} [routes]
 * @property {number} [ruleCount]
 * @property {string} [s3Key]
 * @property {Object} [version]
 */

/**
 * @typedef {Object} ProjectRouteRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Query
 * @property {string} [aggregation]
 * @property {string} [bucketTimezone]
 * @property {string} [endTime]
 * @property {string} [filter]
 * @property {Object} [granularity]
 * @property {Array} [groupBy]
 * @property {number} [limit]
 * @property {string} metric
 * @property {string} [orderBy]
 * @property {string} [orderDirection]
 * @property {Object} scope
 * @property {string} [startTime]
 */

/**
 * @typedef {Object} QueryCreateData
 * @property {string} [aggregation]
 * @property {string} [bucketTimezone]
 * @property {string} [endTime]
 * @property {string} [filter]
 * @property {Object} [granularity]
 * @property {Array} [groupBy]
 * @property {number} [limit]
 * @property {string} metric
 * @property {string} [orderBy]
 * @property {string} [orderDirection]
 * @property {Object} scope
 * @property {string} [startTime]
 */

/**
 * @typedef {Object} Record
 * @property {string} [comment]
 * @property {number} [createdAt]
 * @property {string} creator
 * @property {string} domain
 * @property {string} id
 * @property {string} name
 * @property {string} recordType
 * @property {number} [ttl]
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} RecordLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} RollingRelease
 * @property {Object} activeStage
 * @property {string} advancementType
 * @property {Object} canaryDeployment
 * @property {number} [currentCanaryPercentage]
 * @property {Object} currentDeployment
 * @property {Object} nextStage
 * @property {string} queuedDeploymentId
 * @property {Array} stages
 * @property {number} startedAt
 * @property {string} state
 * @property {string} substate
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} RollingReleaseLoadMatch
 * @property {string} id_or_name
 * @property {string} [slug]
 * @property {string} [state]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} RollingReleaseCreateData
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} activeStage
 * @property {string} advancementType
 * @property {Object} canaryDeployment
 * @property {number} [currentCanaryPercentage]
 * @property {Object} currentDeployment
 * @property {Object} nextStage
 * @property {string} queuedDeploymentId
 * @property {Array} stages
 * @property {number} startedAt
 * @property {string} state
 * @property {string} substate
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} RollingReleaseUpdateData
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Object} [activeStage]
 * @property {string} [advancementType]
 * @property {Object} [canaryDeployment]
 * @property {number} [currentCanaryPercentage]
 * @property {Object} [currentDeployment]
 * @property {Object} [nextStage]
 * @property {string} [queuedDeploymentId]
 * @property {Array} [stages]
 * @property {number} [startedAt]
 * @property {string} [state]
 * @property {string} [substate]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} RollingReleaseRemoveMatch
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Sandbox
 * @property {Array} args
 * @property {string} command
 * @property {number} createdAt
 * @property {string} [creationMethod]
 * @property {string} [currentSandboxName]
 * @property {string} [currentSessionId]
 * @property {string} [currentSnapshotId]
 * @property {string} cwd
 * @property {number} [durationMs]
 * @property {Object} [env]
 * @property {number} exitCode
 * @property {*} [expiration]
 * @property {number} [expiresAt]
 * @property {Array} [failoverRegions]
 * @property {string} id
 * @property {string} [image]
 * @property {Object} keepLastSnapshots
 * @property {number} lastUsedAt
 * @property {boolean} [logs]
 * @property {number} maxSizeBytes
 * @property {number} [memory]
 * @property {Object} [mounts]
 * @property {string} name
 * @property {string} [networkId]
 * @property {*} [networkPolicy]
 * @property {string} [parentId]
 * @property {string} path
 * @property {boolean} [persistent]
 * @property {Array} [ports]
 * @property {string} projectId
 * @property {boolean} [recursive]
 * @property {string} [region]
 * @property {Array} [regions]
 * @property {Object} [resources]
 * @property {boolean} resumed
 * @property {Array} routes
 * @property {string} [runtime]
 * @property {Object} sandbox
 * @property {Object} session
 * @property {string} sessionId
 * @property {number} sizeBytes
 * @property {*} [snapshotExpiration]
 * @property {*} [source]
 * @property {string} sourceSessionId
 * @property {number} startedAt
 * @property {string} status
 * @property {number} statusUpdatedAt
 * @property {boolean} [sudo]
 * @property {Object} [tags]
 * @property {number} [timeout]
 * @property {number} [totalActiveCpuDurationMs]
 * @property {number} [totalDurationMs]
 * @property {number} [totalEgressBytes]
 * @property {number} [totalIngressBytes]
 * @property {number} updatedAt
 * @property {number} [vcpus]
 * @property {boolean} [wait]
 */

/**
 * @typedef {Object} SandboxLoadMatch
 * @property {string} id
 * @property {string} [project_id]
 * @property {boolean} [resume]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} SandboxListMatch
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} [name_prefix]
 * @property {string} [project]
 * @property {string} [slug]
 * @property {string} [sort_by]
 * @property {string} [sort_order]
 * @property {string} [status]
 * @property {*} [tag]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} SandboxCreateData
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Array} args
 * @property {string} command
 * @property {number} createdAt
 * @property {string} [creationMethod]
 * @property {string} [currentSandboxName]
 * @property {string} [currentSessionId]
 * @property {string} [currentSnapshotId]
 * @property {string} cwd
 * @property {number} [durationMs]
 * @property {Object} [env]
 * @property {number} exitCode
 * @property {*} [expiration]
 * @property {number} [expiresAt]
 * @property {Array} [failoverRegions]
 * @property {string} id
 * @property {string} [image]
 * @property {Object} keepLastSnapshots
 * @property {number} lastUsedAt
 * @property {boolean} [logs]
 * @property {number} maxSizeBytes
 * @property {number} [memory]
 * @property {Object} [mounts]
 * @property {string} [networkId]
 * @property {*} [networkPolicy]
 * @property {string} [parentId]
 * @property {string} path
 * @property {boolean} [persistent]
 * @property {Array} [ports]
 * @property {string} projectId
 * @property {boolean} [recursive]
 * @property {string} [region]
 * @property {Array} [regions]
 * @property {Object} [resources]
 * @property {boolean} resumed
 * @property {Array} routes
 * @property {string} [runtime]
 * @property {Object} sandbox
 * @property {Object} session
 * @property {string} sessionId
 * @property {number} sizeBytes
 * @property {*} [snapshotExpiration]
 * @property {*} [source]
 * @property {string} sourceSessionId
 * @property {number} startedAt
 * @property {string} status
 * @property {number} statusUpdatedAt
 * @property {boolean} [sudo]
 * @property {Object} [tags]
 * @property {number} [timeout]
 * @property {number} [totalActiveCpuDurationMs]
 * @property {number} [totalDurationMs]
 * @property {number} [totalEgressBytes]
 * @property {number} [totalIngressBytes]
 * @property {number} updatedAt
 * @property {number} [vcpus]
 * @property {boolean} [wait]
 */

/**
 * @typedef {Object} SandboxUpdateData
 * @property {string} id
 * @property {string} [project_id]
 * @property {boolean} [resume]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Array} [args]
 * @property {string} [command]
 * @property {number} [createdAt]
 * @property {string} [creationMethod]
 * @property {string} [currentSandboxName]
 * @property {string} [currentSessionId]
 * @property {string} [currentSnapshotId]
 * @property {string} [cwd]
 * @property {number} [durationMs]
 * @property {Object} [env]
 * @property {number} [exitCode]
 * @property {*} [expiration]
 * @property {number} [expiresAt]
 * @property {Array} [failoverRegions]
 * @property {string} [image]
 * @property {Object} [keepLastSnapshots]
 * @property {number} [lastUsedAt]
 * @property {boolean} [logs]
 * @property {number} [maxSizeBytes]
 * @property {number} [memory]
 * @property {Object} [mounts]
 * @property {string} [name]
 * @property {string} [networkId]
 * @property {*} [networkPolicy]
 * @property {string} [parentId]
 * @property {string} [path]
 * @property {boolean} [persistent]
 * @property {Array} [ports]
 * @property {string} [projectId]
 * @property {boolean} [recursive]
 * @property {string} [region]
 * @property {Array} [regions]
 * @property {Object} [resources]
 * @property {boolean} [resumed]
 * @property {Array} [routes]
 * @property {string} [runtime]
 * @property {Object} [sandbox]
 * @property {Object} [session]
 * @property {string} [sessionId]
 * @property {number} [sizeBytes]
 * @property {*} [snapshotExpiration]
 * @property {*} [source]
 * @property {string} [sourceSessionId]
 * @property {number} [startedAt]
 * @property {string} [status]
 * @property {number} [statusUpdatedAt]
 * @property {boolean} [sudo]
 * @property {Object} [tags]
 * @property {number} [timeout]
 * @property {number} [totalActiveCpuDurationMs]
 * @property {number} [totalDurationMs]
 * @property {number} [totalEgressBytes]
 * @property {number} [totalIngressBytes]
 * @property {number} [updatedAt]
 * @property {number} [vcpus]
 * @property {boolean} [wait]
 */

/**
 * @typedef {Object} SandboxRemoveMatch
 * @property {string} id
 * @property {boolean} [delete_orphan_snapshot]
 * @property {string} [project_id]
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Schema
 * @property {Array} aggregations
 * @property {string} defaultAggregation
 * @property {string} description
 * @property {Array} dimensions
 * @property {string} id
 * @property {string} unit
 */

/**
 * @typedef {Object} SchemaLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SchemaListMatch
 * @property {Array} [aggregations]
 * @property {string} [defaultAggregation]
 * @property {string} [description]
 * @property {Array} [dimensions]
 * @property {string} [id]
 * @property {string} [unit]
 */

/**
 * @typedef {Object} Security
 * @property {string} [Action]
 * @property {string} [ActorId]
 * @property {string} CreatedAt
 * @property {string} [DeletedAt]
 * @property {string} Domain
 * @property {number} [ExpiresAt]
 * @property {string} Id
 * @property {string} Ip
 * @property {boolean} [IsProjectRule]
 * @property {string} [Note]
 * @property {string} OwnerId
 * @property {string} [ProjectId]
 * @property {string} UpdatedAt
 * @property {string} UpdatedAtHour
 * @property {Object} action
 * @property {string} action_type
 * @property {boolean} active
 * @property {boolean} [allSources]
 * @property {boolean} [botIdEnabled]
 * @property {Array} changes
 * @property {Array} conditionGroup
 * @property {Array} [conditions]
 * @property {number} count
 * @property {Object} crs
 * @property {string} [description]
 * @property {string} [domain]
 * @property {string} endTime
 * @property {boolean} firewallEnabled
 * @property {string} host
 * @property {string} id
 * @property {Array} ips
 * @property {boolean} isActive
 * @property {*} [logHeaders]
 * @property {Object} [managedRules]
 * @property {string} name
 * @property {string} [note]
 * @property {string} ownerId
 * @property {string} projectKey
 * @property {boolean} [projectScope]
 * @property {string} public_ip
 * @property {string} ruleId
 * @property {string} ruleName
 * @property {Array} rules
 * @property {*} [rulesets]
 * @property {string} [sourceIp]
 * @property {string} startTime
 * @property {number} [ttl]
 * @property {string} updatedAt
 * @property {number} version
 */

/**
 * @typedef {Object} SecurityLoadMatch
 * @property {string} [config_version]
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {number} [since]
 */

/**
 * @typedef {Object} SecurityListMatch
 * @property {string} [domain]
 * @property {number} [limit]
 * @property {string} [offset]
 * @property {string} project_id
 * @property {boolean} [project_scope]
 * @property {string} [slug]
 * @property {string} [source_ip]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} SecurityCreateData
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [Action]
 * @property {string} [ActorId]
 * @property {string} CreatedAt
 * @property {string} [DeletedAt]
 * @property {string} Domain
 * @property {number} [ExpiresAt]
 * @property {string} Id
 * @property {string} Ip
 * @property {boolean} [IsProjectRule]
 * @property {string} [Note]
 * @property {string} OwnerId
 * @property {string} [ProjectId]
 * @property {string} UpdatedAt
 * @property {string} UpdatedAtHour
 * @property {Object} action
 * @property {string} action_type
 * @property {boolean} active
 * @property {boolean} [allSources]
 * @property {boolean} [botIdEnabled]
 * @property {Array} changes
 * @property {Array} conditionGroup
 * @property {Array} [conditions]
 * @property {number} count
 * @property {Object} crs
 * @property {string} [description]
 * @property {string} [domain]
 * @property {string} endTime
 * @property {boolean} firewallEnabled
 * @property {string} host
 * @property {string} id
 * @property {Array} ips
 * @property {boolean} isActive
 * @property {*} [logHeaders]
 * @property {Object} [managedRules]
 * @property {string} name
 * @property {string} [note]
 * @property {string} ownerId
 * @property {string} projectKey
 * @property {boolean} [projectScope]
 * @property {string} public_ip
 * @property {string} ruleId
 * @property {string} ruleName
 * @property {Array} rules
 * @property {*} [rulesets]
 * @property {string} [sourceIp]
 * @property {string} startTime
 * @property {number} [ttl]
 * @property {string} updatedAt
 * @property {number} version
 */

/**
 * @typedef {Object} SecurityUpdateData
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [Action]
 * @property {string} [ActorId]
 * @property {string} [CreatedAt]
 * @property {string} [DeletedAt]
 * @property {string} [Domain]
 * @property {number} [ExpiresAt]
 * @property {string} [Id]
 * @property {string} [Ip]
 * @property {boolean} [IsProjectRule]
 * @property {string} [Note]
 * @property {string} [OwnerId]
 * @property {string} [ProjectId]
 * @property {string} [UpdatedAt]
 * @property {string} [UpdatedAtHour]
 * @property {Object} [action]
 * @property {string} [action_type]
 * @property {boolean} [active]
 * @property {boolean} [allSources]
 * @property {boolean} [botIdEnabled]
 * @property {Array} [changes]
 * @property {Array} [conditionGroup]
 * @property {Array} [conditions]
 * @property {number} [count]
 * @property {Object} [crs]
 * @property {string} [description]
 * @property {string} [domain]
 * @property {string} [endTime]
 * @property {boolean} [firewallEnabled]
 * @property {string} [host]
 * @property {string} [id]
 * @property {Array} [ips]
 * @property {boolean} [isActive]
 * @property {*} [logHeaders]
 * @property {Object} [managedRules]
 * @property {string} [name]
 * @property {string} [note]
 * @property {string} [ownerId]
 * @property {string} [projectKey]
 * @property {boolean} [projectScope]
 * @property {string} [public_ip]
 * @property {string} [ruleId]
 * @property {string} [ruleName]
 * @property {Array} [rules]
 * @property {*} [rulesets]
 * @property {string} [sourceIp]
 * @property {string} [startTime]
 * @property {number} [ttl]
 * @property {string} [updatedAt]
 * @property {number} [version]
 */

/**
 * @typedef {Object} SecurityRemoveMatch
 * @property {string} config_version
 */

/**
 * @typedef {Object} Segment
 * @property {number} createdAt
 * @property {string} [createdBy]
 * @property {Object} data
 * @property {string} [description]
 * @property {string} hint
 * @property {string} id
 * @property {string} label
 * @property {Object} [metadata]
 * @property {string} projectId
 * @property {string} slug
 * @property {string} typeName
 * @property {number} updatedAt
 * @property {Array} [usedByFlags]
 * @property {Array} [usedBySegments]
 */

/**
 * @typedef {Object} SegmentLoadMatch
 * @property {string} id
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [with_metadata]
 */

/**
 * @typedef {Object} Storage
 * @property {string} [access]
 * @property {number} count
 * @property {string} [id]
 * @property {boolean} isTokenExpired
 * @property {string} [kind]
 * @property {string} name
 * @property {Object} [projectFilter]
 * @property {string} [projectId]
 * @property {Array} projectsMetadata
 * @property {string} region
 * @property {number} size
 * @property {string} status
 * @property {number} [totalConnectedProjects]
 * @property {boolean} usageQuotaExceeded
 */

/**
 * @typedef {Object} StorageLoadMatch
 * @property {string} id
 * @property {boolean} [include_guide]
 * @property {boolean} [skip_metadata]
 */

/**
 * @typedef {Object} StorageCreateData
 * @property {string} [access]
 * @property {number} count
 * @property {string} [id]
 * @property {boolean} isTokenExpired
 * @property {string} [kind]
 * @property {string} name
 * @property {Object} [projectFilter]
 * @property {string} [projectId]
 * @property {Array} projectsMetadata
 * @property {string} region
 * @property {number} size
 * @property {string} status
 * @property {number} [totalConnectedProjects]
 * @property {boolean} usageQuotaExceeded
 */

/**
 * @typedef {Object} StorageRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Team
 * @property {number} accessRequestedAt
 * @property {number} [apiKeysInvalidatedAt]
 * @property {number} [appTokensInvalidatedAt]
 * @property {Object} [attribution]
 * @property {string} avatar
 * @property {Object} billing
 * @property {Object} bitbucket
 * @property {boolean} confirmed
 * @property {Object} [connect]
 * @property {number} createdAt
 * @property {string} creatorId
 * @property {Object} [defaultDeploymentProtection]
 * @property {Object} [defaultExpirationSettings]
 * @property {Object} defaultPassport
 * @property {Object} [defaultProjectJobs]
 * @property {Object} [defaultRoles]
 * @property {Object} [deploymentPolicy]
 * @property {string} description
 * @property {*} [disableHardAutoBlocks]
 * @property {boolean} [disableRepositoryDispatchEvents]
 * @property {string} [disjunctiveProductionSecretPolicy]
 * @property {string} [dpAccessRequestsMode]
 * @property {string} [emailDomain]
 * @property {boolean} [enablePolyrepoBranchRouting]
 * @property {string} [enablePreviewFeedback]
 * @property {string} [enableProductionFeedback]
 * @property {string} [fallbackEnvironment]
 * @property {Object} github
 * @property {Object} gitlab
 * @property {boolean} [hideIpAddresses]
 * @property {boolean} [hideIpAddressesInLogDrains]
 * @property {string} id
 * @property {number} [integrationTokensInvalidatedAt]
 * @property {string} [inviteCode]
 * @property {Array} [ipBuckets]
 * @property {Object} joinedFrom
 * @property {Object} membership
 * @property {string} name
 * @property {Object} nsnbConfig
 * @property {string} [orgRootTeamId]
 * @property {Object} pagination
 * @property {string} [parentId]
 * @property {number} [personalAccessTokensInvalidatedAt]
 * @property {boolean} [platform]
 * @property {string} [previewDeploymentSuffix]
 * @property {Array} [projects]
 * @property {boolean} [regenerateInviteCode]
 * @property {Object} [remoteCaching]
 * @property {boolean} [requireVerifiedCommits]
 * @property {Object} [resourceConfig]
 * @property {string} [role]
 * @property {Object} saml
 * @property {string} [sensitiveEnvironmentVariablePolicy]
 * @property {string} slug
 * @property {string} stagingPrefix
 * @property {Object} strictConnectors
 * @property {Object} strictDeploymentProtectionSettings
 * @property {Object} strictPasswordProtectionSettings
 * @property {Object} strictShareableLinks
 * @property {string} teamName
 * @property {Array} [teamPermissions]
 * @property {string} teamSlug
 * @property {Array} teams
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} TeamLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [user_id]
 */

/**
 * @typedef {Object} TeamListMatch
 * @property {number} [limit]
 * @property {number} [since]
 * @property {number} [until]
 */

/**
 * @typedef {Object} TeamCreateData
 * @property {number} accessRequestedAt
 * @property {number} [apiKeysInvalidatedAt]
 * @property {number} [appTokensInvalidatedAt]
 * @property {Object} [attribution]
 * @property {string} avatar
 * @property {Object} billing
 * @property {Object} bitbucket
 * @property {boolean} confirmed
 * @property {Object} [connect]
 * @property {number} createdAt
 * @property {string} creatorId
 * @property {Object} [defaultDeploymentProtection]
 * @property {Object} [defaultExpirationSettings]
 * @property {Object} defaultPassport
 * @property {Object} [defaultProjectJobs]
 * @property {Object} [defaultRoles]
 * @property {Object} [deploymentPolicy]
 * @property {string} description
 * @property {*} [disableHardAutoBlocks]
 * @property {boolean} [disableRepositoryDispatchEvents]
 * @property {string} [disjunctiveProductionSecretPolicy]
 * @property {string} [dpAccessRequestsMode]
 * @property {string} [emailDomain]
 * @property {boolean} [enablePolyrepoBranchRouting]
 * @property {string} [enablePreviewFeedback]
 * @property {string} [enableProductionFeedback]
 * @property {string} [fallbackEnvironment]
 * @property {Object} github
 * @property {Object} gitlab
 * @property {boolean} [hideIpAddresses]
 * @property {boolean} [hideIpAddressesInLogDrains]
 * @property {string} id
 * @property {number} [integrationTokensInvalidatedAt]
 * @property {string} [inviteCode]
 * @property {Array} [ipBuckets]
 * @property {Object} joinedFrom
 * @property {Object} membership
 * @property {string} name
 * @property {Object} nsnbConfig
 * @property {string} [orgRootTeamId]
 * @property {Object} pagination
 * @property {string} [parentId]
 * @property {number} [personalAccessTokensInvalidatedAt]
 * @property {boolean} [platform]
 * @property {string} [previewDeploymentSuffix]
 * @property {Array} [projects]
 * @property {boolean} [regenerateInviteCode]
 * @property {Object} [remoteCaching]
 * @property {boolean} [requireVerifiedCommits]
 * @property {Object} [resourceConfig]
 * @property {string} [role]
 * @property {Object} saml
 * @property {string} [sensitiveEnvironmentVariablePolicy]
 * @property {string} slug
 * @property {string} stagingPrefix
 * @property {Object} strictConnectors
 * @property {Object} strictDeploymentProtectionSettings
 * @property {Object} strictPasswordProtectionSettings
 * @property {Object} strictShareableLinks
 * @property {string} teamName
 * @property {Array} [teamPermissions]
 * @property {string} teamSlug
 * @property {Array} teams
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} TeamUpdateData
 * @property {string} [group_id]
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [uid]
 * @property {number} [accessRequestedAt]
 * @property {number} [apiKeysInvalidatedAt]
 * @property {number} [appTokensInvalidatedAt]
 * @property {Object} [attribution]
 * @property {string} [avatar]
 * @property {Object} [billing]
 * @property {Object} [bitbucket]
 * @property {boolean} [confirmed]
 * @property {Object} [connect]
 * @property {number} [createdAt]
 * @property {string} [creatorId]
 * @property {Object} [defaultDeploymentProtection]
 * @property {Object} [defaultExpirationSettings]
 * @property {Object} [defaultPassport]
 * @property {Object} [defaultProjectJobs]
 * @property {Object} [defaultRoles]
 * @property {Object} [deploymentPolicy]
 * @property {string} [description]
 * @property {*} [disableHardAutoBlocks]
 * @property {boolean} [disableRepositoryDispatchEvents]
 * @property {string} [disjunctiveProductionSecretPolicy]
 * @property {string} [dpAccessRequestsMode]
 * @property {string} [emailDomain]
 * @property {boolean} [enablePolyrepoBranchRouting]
 * @property {string} [enablePreviewFeedback]
 * @property {string} [enableProductionFeedback]
 * @property {string} [fallbackEnvironment]
 * @property {Object} [github]
 * @property {Object} [gitlab]
 * @property {boolean} [hideIpAddresses]
 * @property {boolean} [hideIpAddressesInLogDrains]
 * @property {number} [integrationTokensInvalidatedAt]
 * @property {string} [inviteCode]
 * @property {Array} [ipBuckets]
 * @property {Object} [joinedFrom]
 * @property {Object} [membership]
 * @property {string} [name]
 * @property {Object} [nsnbConfig]
 * @property {string} [orgRootTeamId]
 * @property {Object} [pagination]
 * @property {string} [parentId]
 * @property {number} [personalAccessTokensInvalidatedAt]
 * @property {boolean} [platform]
 * @property {string} [previewDeploymentSuffix]
 * @property {Array} [projects]
 * @property {boolean} [regenerateInviteCode]
 * @property {Object} [remoteCaching]
 * @property {boolean} [requireVerifiedCommits]
 * @property {Object} [resourceConfig]
 * @property {string} [role]
 * @property {Object} [saml]
 * @property {string} [sensitiveEnvironmentVariablePolicy]
 * @property {string} [stagingPrefix]
 * @property {Object} [strictConnectors]
 * @property {Object} [strictDeploymentProtectionSettings]
 * @property {Object} [strictPasswordProtectionSettings]
 * @property {Object} [strictShareableLinks]
 * @property {string} [teamName]
 * @property {Array} [teamPermissions]
 * @property {string} [teamSlug]
 * @property {Array} [teams]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} TeamRemoveMatch
 * @property {string} [group_id]
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [new_default_team_id]
 * @property {string} [uid]
 * @property {string} [invite_id]
 */

/**
 * @typedef {Object} TldName
 */

/**
 * @typedef {Object} TldNameListMatch
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Toggle
 * @property {boolean} value
 */

/**
 * @typedef {Object} ToggleCreateData
 * @property {string} project_id
 * @property {boolean} value
 */

/**
 * @typedef {Object} User
 * @property {Array} [categories]
 * @property {number} createdAt
 * @property {Array} entities
 * @property {string} id
 * @property {*} [payload]
 * @property {*} [principal]
 * @property {string} principalId
 * @property {string} [requestId]
 * @property {string} [sessionId]
 * @property {string} text
 * @property {string} [tokenId]
 * @property {string} [type]
 * @property {Object} user
 * @property {string} [userId]
 * @property {Array} [via]
 * @property {Array} [viaIds]
 */

/**
 * @typedef {Object} UserLoadMatch
 * @property {Array} [categories]
 * @property {number} [createdAt]
 * @property {Array} [entities]
 * @property {string} id
 * @property {*} [payload]
 * @property {*} [principal]
 * @property {string} [principalId]
 * @property {string} [requestId]
 * @property {string} [sessionId]
 * @property {string} [text]
 * @property {string} [tokenId]
 * @property {string} [type]
 * @property {Object} [user]
 * @property {string} [userId]
 * @property {Array} [via]
 * @property {Array} [viaIds]
 */

/**
 * @typedef {Object} UserListMatch
 * @property {string} [entity_id]
 * @property {number} [limit]
 * @property {string} [principal_id]
 * @property {string} [project_id]
 * @property {string} [since]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [type]
 * @property {string} [until]
 * @property {string} [user_id]
 * @property {string} [with_payload]
 */

/**
 * @typedef {Object} UserRemoveMatch
 * @property {Array} [categories]
 * @property {number} [createdAt]
 * @property {Array} [entities]
 * @property {string} id
 * @property {*} [payload]
 * @property {*} [principal]
 * @property {string} [principalId]
 * @property {string} [requestId]
 * @property {string} [sessionId]
 * @property {string} [text]
 * @property {string} [tokenId]
 * @property {string} [type]
 * @property {Object} [user]
 * @property {string} [userId]
 * @property {Array} [via]
 * @property {Array} [viaIds]
 */

/**
 * @typedef {Object} Vcr
 * @property {string} [arch]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} imageId
 * @property {string} kind
 * @property {Array} layers
 * @property {string} manifestDigest
 * @property {string} name
 * @property {string} [platform]
 * @property {string} projectId
 * @property {boolean} public
 * @property {string} [pushedBy]
 * @property {string} repositoryId
 * @property {number} sizeInBytes
 * @property {string} status
 * @property {string} tag
 * @property {Array} tags
 * @property {string} teamId
 * @property {string} teamSlug
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} VcrLoadMatch
 * @property {string} id_or_name
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} VcrListMatch
 * @property {string} id_or_name
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [sort_by]
 * @property {string} [sort_order]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} VcrCreateData
 * @property {string} id_or_name
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {string} [arch]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} imageId
 * @property {string} kind
 * @property {Array} layers
 * @property {string} manifestDigest
 * @property {string} name
 * @property {string} [platform]
 * @property {string} projectId
 * @property {boolean} public
 * @property {string} [pushedBy]
 * @property {string} repositoryId
 * @property {number} sizeInBytes
 * @property {string} status
 * @property {string} tag
 * @property {Array} tags
 * @property {string} teamId
 * @property {string} teamSlug
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} VcrUpdateData
 * @property {string} project_slug
 * @property {string} repository_name
 * @property {string} team_slug
 * @property {string} [uuid]
 * @property {string} [digest]
 * @property {string} [reference]
 * @property {string} [arch]
 * @property {string} [createdAt]
 * @property {string} [id]
 * @property {string} [imageId]
 * @property {string} [kind]
 * @property {Array} [layers]
 * @property {string} [manifestDigest]
 * @property {string} [name]
 * @property {string} [platform]
 * @property {string} [projectId]
 * @property {boolean} [public]
 * @property {string} [pushedBy]
 * @property {string} [repositoryId]
 * @property {number} [sizeInBytes]
 * @property {string} [status]
 * @property {string} [tag]
 * @property {Array} [tags]
 * @property {string} [teamId]
 * @property {string} [teamSlug]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} VcrRemoveMatch
 * @property {string} id_or_name
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} VcrImageList
 * @property {string} [arch]
 * @property {string} createdAt
 * @property {string} id
 * @property {string} kind
 * @property {string} manifestDigest
 * @property {string} [platform]
 * @property {string} [pushedBy]
 * @property {string} repositoryId
 * @property {number} sizeInBytes
 * @property {string} status
 * @property {Array} tags
 */

/**
 * @typedef {Object} VcrImageListListMatch
 * @property {string} id_or_name
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {boolean} [untagged]
 */

/**
 * @typedef {Object} VcrRepositoryList
 * @property {string} createdAt
 * @property {string} id
 * @property {string} name
 * @property {string} projectId
 * @property {boolean} public
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} VcrRepositoryListListMatch
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} VcrRepositoryPermissionList
 * @property {string} createdAt
 * @property {string} repositoryId
 * @property {string} teamId
 * @property {string} teamSlug
 */

/**
 * @typedef {Object} VcrRepositoryPermissionListListMatch
 * @property {string} id_or_name
 * @property {string} [cursor]
 * @property {number} [limit]
 * @property {string} project_id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} WebAnalytics
 * @property {*} data
 * @property {Object} query
 * @property {number} version
 */

/**
 * @typedef {Object} WebAnalyticsLoadMatch
 * @property {Array} [by]
 * @property {string} [filter]
 * @property {number} [limit]
 * @property {string} project_id
 * @property {*} [since]
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {*} [until]
 */

/**
 * @typedef {Object} Webhook
 * @property {Array} [alertRuleIds]
 * @property {number} createdAt
 * @property {Array} events
 * @property {string} id
 * @property {string} ownerId
 * @property {Array} [projectIds]
 * @property {string} secret
 * @property {number} updatedAt
 * @property {string} url
 */

/**
 * @typedef {Object} WebhookLoadMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} WebhookCreateData
 * @property {string} [slug]
 * @property {string} [team_id]
 * @property {Array} [alertRuleIds]
 * @property {number} createdAt
 * @property {Array} events
 * @property {string} id
 * @property {string} ownerId
 * @property {Array} [projectIds]
 * @property {string} secret
 * @property {number} updatedAt
 * @property {string} url
 */

/**
 * @typedef {Object} WebhookRemoveMatch
 * @property {string} id
 * @property {string} [slug]
 * @property {string} [team_id]
 */

