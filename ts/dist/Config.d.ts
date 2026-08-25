import { BaseFeature } from './feature/base/BaseFeature';
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
            transport: string;
        };
    };
    options: {
        base: string;
        auth: {
            prefix: string;
        };
        headers: {
            "content-type": string;
        };
        entity: {
            project: {};
        };
    };
    entity: {
        project: {
            fields: ({
                name: string;
                req: boolean;
                type: string;
                union: {
                    branches: number;
                    count: number;
                    depth: number;
                };
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                union?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                type: string;
                req?: undefined;
                union?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
                union?: undefined;
                op?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
                union: {
                    branches: number;
                    count: number;
                    depth: number;
                };
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                type: string;
                union: {
                    branches: number;
                    count: number;
                    depth: number;
                };
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                        req?: undefined;
                    };
                    create?: undefined;
                };
                req: boolean;
                type: string;
                union?: undefined;
                short?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                        req?: undefined;
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        req: boolean;
                        type: string;
                    };
                    create?: undefined;
                };
                short: string;
                type: string;
                req?: undefined;
                union?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                        req?: undefined;
                    };
                };
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        req: boolean;
                        type: string;
                    };
                    create?: undefined;
                };
                short: string;
                type: string;
                union: {
                    branches: number;
                    count: number;
                    depth: number;
                };
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                buildCommand: string;
                                commandForIgnoringBuildStep: string;
                                devCommand: string;
                                enableAffectedProjectsDeployments: string;
                                enablePreviewFeedback: string;
                                enableProductionFeedback: string;
                                environmentVariables: string;
                                framework: string;
                                gitRepository: string;
                                installCommand: string;
                                name: string;
                                oidcTokenConfig: string;
                                outputDirectory: string;
                                previewDeploymentSuffix: string;
                                previewDeploymentsDisabled: string;
                                publicSource: string;
                                resourceConfig: string;
                                rootDirectory: string;
                                serverlessFunctionRegion: string;
                                serverlessFunctionZeroConfigFailover: string;
                                skipGitConnectDuringLink: string;
                                ssoProtection: string;
                            };
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            query: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                example?: undefined;
                            })[];
                            params?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        rename?: undefined;
                    } | {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                idOrName: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                idOrName: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                idOrName: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                autoAssignCustomDomains: string;
                                autoAssignCustomDomainsUpdatedBy: string;
                                autoExposeSystemEnvs: string;
                                buildCommand: string;
                                commandForIgnoringBuildStep: string;
                                connectConfigurations: string;
                                customerSupportCodeVisibility: string;
                                deploymentPolicy: string;
                                devCommand: string;
                                directoryListing: string;
                                dismissedToasts: string;
                                enableAffectedProjectsDeployments: string;
                                enableExternalRewriteCaching: string;
                                enablePreviewFeedback: string;
                                enableProductionFeedback: string;
                                framework: string;
                                gitForkProtection: string;
                                gitLFS: string;
                                installCommand: string;
                                name: string;
                                nodeVersion: string;
                                oidcTokenConfig: string;
                                optionsAllowlist: string;
                                outputDirectory: string;
                                passport: string;
                                passwordProtection: string;
                                previewDeploymentSuffix: string;
                                previewDeploymentsDisabled: string;
                                protectedSourcemaps: string;
                                publicSource: string;
                                resourceConfig: string;
                                rootDirectory: string;
                                serverlessFunctionRegion: string;
                                serverlessFunctionZeroConfigFailover: string;
                                skewProtectionAllowedDomains: string;
                                skewProtectionBoundaryAt: string;
                                skewProtectionMaxAge: string;
                                skipGitConnectDuringLink: string;
                                sourceFilesOutsideRootDirectory: string;
                                ssoProtection: string;
                                staticIps: string;
                                tracing: string;
                                trustedIps: string;
                                trustedSources: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config };
