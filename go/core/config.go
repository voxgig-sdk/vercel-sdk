package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Vercel",
			"slug": "vercel",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.vercel.com",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"project": map[string]any{},
			},
		},
		"entity": map[string]any{
			"project": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abuse",
						"req": true,
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 4,
							"count": 5,
							"depth": 12,
						},
					},
					map[string]any{
						"name": "accountId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "alias",
						"req": true,
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "analytics",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "appliedCve55182Migration",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "autoAssignCustomDomains",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "autoAssignCustomDomainsUpdatedBy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "autoExposeSystemEnvs",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "avatar",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "blobs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "buildCommand",
						"short": "The build command for this project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "commandForIgnoringBuildStep",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "concurrencyBucketName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "connectBuildsEnabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "connectConfigurationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "connectConfigurations",
						"short": "The list of connections from project environment to Secure Compute network",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "createdAt",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "creator",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 4,
							"count": 2,
							"depth": 4,
						},
					},
					map[string]any{
						"name": "crons",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "customEnvironments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "customerSupportCodeVisibility",
						"short": "Specifies whether customer support can see git source for a deployment",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "dataCache",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "defaultResourceConfig",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "deploymentExpiration",
						"req": true,
						"short": "Retention policies for deployments.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "deploymentPolicy",
						"short": "Project shape.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 3,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "devCommand",
						"short": "The dev command for this project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "directoryListing",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "dismissedToasts",
						"short": "An array of objects representing a Dismissed Toast in regards to a Project.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 4,
							"count": 3,
							"depth": 7,
						},
					},
					map[string]any{
						"name": "enableAffectedProjectsDeployments",
						"short": "Opt-in to skip deployments when there are no changes to the root directory and its dependencies",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "enableExternalRewriteCaching",
						"short": "Specifies whether external rewrite caching is enabled for this project.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "enablePreviewFeedback",
						"short": "Opt-in to preview toolbar on the project level",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "enableProductionFeedback",
						"short": "Opt-in to production toolbar on the project level",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "env",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 17,
							"count": 2,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "environmentVariables",
						"short": "Collection of ENV Variables the Project will use",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "expiration",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "features",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "framework",
						"short": "The framework that is being used for this project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gitComments",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "gitForkProtection",
						"short": "Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "gitLFS",
						"short": "Specifies whether Git LFS is enabled for this project.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "gitProviderOptions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "gitRepository",
						"req": true,
						"short": "The Git Repository that will be connected to the project.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hasActiveBranches",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "hasDeployments",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "installCommand",
						"short": "The install command for this project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "integrations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "internalRoutes",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "ipBuckets",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "jobs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "lastAliasRequest",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "lastRollbackTarget",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "latestDeployments",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "link",
						"type": "`$STRING`",
						"union": map[string]any{
							"branches": 7,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "live",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "microfrontends",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The desired name for the project",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nodeVersion",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "oidcTokenConfig",
						"short": "OpenID Connect JSON Web Token generation configuration.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "optionsAllowlist",
						"req": true,
						"short": "Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "outputDirectory",
						"short": "The output directory of the project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "passiveConnectConfigurationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "passport",
						"req": true,
						"short": "Passport configuration for the project.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "passwordProtection",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "Allows to protect project deployments with a password",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "paused",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "permissions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "previewDeploymentSuffix",
						"short": "Custom domain suffix for preview deployments.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "previewDeploymentsDisabled",
						"short": "Specifies whether preview deployments are disabled for this project.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "productionDeploymentsFastLane",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "protectedSourcemaps",
						"short": "Specifies whether sourcemaps are protected and require authentication to access.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "protectionBypass",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "protectionConfig",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "publicSource",
						"short": "Deprecated.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "resourceConfig",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "Specifies resource override configuration for the project",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rollbackDescription",
						"req": true,
						"short": "Description of why a project was rolled back, and by whom.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rollingRelease",
						"req": true,
						"short": "Project-level rolling release configuration that defines how deployments should be gradually rolled out",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rootDirectory",
						"short": "The name of a directory or relative path to the source code of your project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sandbox",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "security",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 2,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "serverlessFunctionRegion",
						"short": "The region to deploy Serverless Functions in this project",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "serverlessFunctionZeroConfigFailover",
						"short": "Specifies whether Zero Config Failover is enabled for this project.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "services",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "skewProtectionAllowedDomains",
						"short": "Cross-site domains allowed to fetch skew-protected assets (hostnames, optionally with leading wildcard like *.example.com).",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "skewProtectionBoundaryAt",
						"short": "Deployments created before this absolute datetime have Skew Protection disabled.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "skewProtectionMaxAge",
						"short": "Deployments created before this rolling window have Skew Protection disabled.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "skipGitConnectDuringLink",
						"short": "Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "sourceFilesOutsideRootDirectory",
						"short": "Indicates if there are source files outside of the root directory",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "speedInsights",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ssoProtection",
						"req": true,
						"short": "The Vercel Auth setting for the project (historically named \\\"SSO Protection\\\")",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "staticIps",
						"req": true,
						"short": "Manage Static IPs for this project",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "targets",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "tier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tracing",
						"short": "Tracing configuration for this project",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "transferCompletedAt",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "transferStartedAt",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "transferToAccountId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "transferredFromAccountId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trustedIps",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "Restricts access to deployments based on the incoming request IP address",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "trustedSources",
						"short": "Deployment Protection Trusted Sources",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 3,
							"depth": 8,
						},
					},
					map[string]any{
						"name": "updatedAt",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "usageStatus",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "v0",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "v0Created",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "webAnalytics",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "project",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "my-team-url-slug",
											"kind": "query",
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v11/projects",
								"parts": []any{
									"v11",
									"projects",
								},
								"select": map[string]any{
									"exist": []any{
										"slug",
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"buildCommand": "`reqdata.build_command`",
										"commandForIgnoringBuildStep": "`reqdata.command_for_ignoring_build_step`",
										"devCommand": "`reqdata.dev_command`",
										"enableAffectedProjectsDeployments": "`reqdata.enable_affected_projects_deployment`",
										"enablePreviewFeedback": "`reqdata.enable_preview_feedback`",
										"enableProductionFeedback": "`reqdata.enable_production_feedback`",
										"environmentVariables": "`reqdata.environment_variable`",
										"framework": "`reqdata.framework`",
										"gitRepository": "`reqdata.git_repository`",
										"installCommand": "`reqdata.install_command`",
										"name": "`reqdata.name`",
										"oidcTokenConfig": "`reqdata.oidc_token_config`",
										"outputDirectory": "`reqdata.output_directory`",
										"previewDeploymentSuffix": "`reqdata.preview_deployment_suffix`",
										"previewDeploymentsDisabled": "`reqdata.preview_deployments_disabled`",
										"publicSource": "`reqdata.public_source`",
										"resourceConfig": "`reqdata.resource_config`",
										"rootDirectory": "`reqdata.root_directory`",
										"serverlessFunctionRegion": "`reqdata.serverless_function_region`",
										"serverlessFunctionZeroConfigFailover": "`reqdata.serverless_function_zero_config_failover`",
										"skipGitConnectDuringLink": "`reqdata.skip_git_connect_during_link`",
										"ssoProtection": "`reqdata.sso_protection`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "default,enhanced",
											"kind": "query",
											"name": "build_machine_type",
											"orig": "build_machine_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "SKIP_NAMESPACE_QUEUE",
											"kind": "query",
											"name": "build_queue_configuration",
											"orig": "build_queue_configuration",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "deprecated",
											"orig": "deprecated",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "edge_config_id",
											"orig": "edge_config_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "edge_config_token_id",
											"orig": "edge_config_token_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "1",
											"kind": "query",
											"name": "elastic_concurrency_enabled",
											"orig": "elastic_concurrency_enabled",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "exclude_repo",
											"orig": "exclude_repo",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "1",
											"kind": "query",
											"name": "git_fork_protection",
											"orig": "git_fork_protection",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "repo",
											"orig": "repo",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "repo_id",
											"orig": "repo_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "https://github.com/vercel/next.js",
											"kind": "query",
											"name": "repo_url",
											"orig": "repo_url",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "my-team-url-slug",
											"kind": "query",
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "1",
											"kind": "query",
											"name": "static_ips_enabled",
											"orig": "static_ips_enabled",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v10/projects",
								"parts": []any{
									"v10",
									"projects",
								},
								"select": map[string]any{
									"exist": []any{
										"build_machine_type",
										"build_queue_configuration",
										"deprecated",
										"edge_config_id",
										"edge_config_token_id",
										"elastic_concurrency_enabled",
										"exclude_repo",
										"from",
										"git_fork_protection",
										"limit",
										"repo",
										"repo_id",
										"repo_url",
										"search",
										"slug",
										"static_ips_enabled",
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
											"kind": "param",
											"name": "id",
											"orig": "id_or_name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "my-team-url-slug",
											"kind": "query",
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v9/projects/{idOrName}",
								"parts": []any{
									"v9",
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idOrName": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug",
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
											"kind": "param",
											"name": "id",
											"orig": "id_or_name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "my-team-url-slug",
											"kind": "query",
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v9/projects/{idOrName}",
								"parts": []any{
									"v9",
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idOrName": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug",
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
											"kind": "param",
											"name": "id",
											"orig": "id_or_name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "my-team-url-slug",
											"kind": "query",
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "team_1a2b3c4d5e6f7g8h9i0j1k2l",
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/v9/projects/{idOrName}",
								"parts": []any{
									"v9",
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idOrName": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug",
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"autoAssignCustomDomains": "`reqdata.auto_assign_custom_domain`",
										"autoAssignCustomDomainsUpdatedBy": "`reqdata.auto_assign_custom_domains_updated_by`",
										"autoExposeSystemEnvs": "`reqdata.auto_expose_system_env`",
										"buildCommand": "`reqdata.build_command`",
										"commandForIgnoringBuildStep": "`reqdata.command_for_ignoring_build_step`",
										"connectConfigurations": "`reqdata.connect_configuration`",
										"customerSupportCodeVisibility": "`reqdata.customer_support_code_visibility`",
										"deploymentPolicy": "`reqdata.deployment_policy`",
										"devCommand": "`reqdata.dev_command`",
										"directoryListing": "`reqdata.directory_listing`",
										"dismissedToasts": "`reqdata.dismissed_toast`",
										"enableAffectedProjectsDeployments": "`reqdata.enable_affected_projects_deployment`",
										"enableExternalRewriteCaching": "`reqdata.enable_external_rewrite_caching`",
										"enablePreviewFeedback": "`reqdata.enable_preview_feedback`",
										"enableProductionFeedback": "`reqdata.enable_production_feedback`",
										"framework": "`reqdata.framework`",
										"gitForkProtection": "`reqdata.git_fork_protection`",
										"gitLFS": "`reqdata.git_lf`",
										"installCommand": "`reqdata.install_command`",
										"name": "`reqdata.name`",
										"nodeVersion": "`reqdata.node_version`",
										"oidcTokenConfig": "`reqdata.oidc_token_config`",
										"optionsAllowlist": "`reqdata.options_allowlist`",
										"outputDirectory": "`reqdata.output_directory`",
										"passport": "`reqdata.passport`",
										"passwordProtection": "`reqdata.password_protection`",
										"previewDeploymentSuffix": "`reqdata.preview_deployment_suffix`",
										"previewDeploymentsDisabled": "`reqdata.preview_deployments_disabled`",
										"protectedSourcemaps": "`reqdata.protected_sourcemap`",
										"publicSource": "`reqdata.public_source`",
										"resourceConfig": "`reqdata.resource_config`",
										"rootDirectory": "`reqdata.root_directory`",
										"serverlessFunctionRegion": "`reqdata.serverless_function_region`",
										"serverlessFunctionZeroConfigFailover": "`reqdata.serverless_function_zero_config_failover`",
										"skewProtectionAllowedDomains": "`reqdata.skew_protection_allowed_domain`",
										"skewProtectionBoundaryAt": "`reqdata.skew_protection_boundary_at`",
										"skewProtectionMaxAge": "`reqdata.skew_protection_max_age`",
										"skipGitConnectDuringLink": "`reqdata.skip_git_connect_during_link`",
										"sourceFilesOutsideRootDirectory": "`reqdata.source_files_outside_root_directory`",
										"ssoProtection": "`reqdata.sso_protection`",
										"staticIps": "`reqdata.static_ip`",
										"tracing": "`reqdata.tracing`",
										"trustedIps": "`reqdata.trusted_ip`",
										"trustedSources": "`reqdata.trusted_source`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
