import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ProjectRoute, ProjectRouteLoadMatch, ProjectRouteListMatch, ProjectRouteCreateData, ProjectRouteUpdateData, ProjectRouteRemoveMatch } from '../VercelTypes';
declare class ProjectRouteEntity extends VercelEntityBase<ProjectRoute> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ProjectRouteEntity): ProjectRouteEntity;
    load(this: any, reqmatch?: ProjectRouteLoadMatch, ctrl?: Control): Promise<ProjectRouteEntity>;
    list(this: any, reqmatch?: ProjectRouteListMatch, ctrl?: Control): Promise<ProjectRouteEntity[]>;
    create(this: any, reqdata?: ProjectRouteCreateData, ctrl?: Control): Promise<ProjectRouteEntity>;
    update(this: any, reqdata?: ProjectRouteUpdateData, ctrl?: Control): Promise<ProjectRouteEntity>;
    remove(this: any, reqmatch?: ProjectRouteRemoveMatch, ctrl?: Control): Promise<ProjectRouteEntity>;
}
export { ProjectRouteEntity };
