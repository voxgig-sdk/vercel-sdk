import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ProjectMember, ProjectMemberLoadMatch, ProjectMemberCreateData, ProjectMemberRemoveMatch } from '../VercelTypes';
declare class ProjectMemberEntity extends VercelEntityBase<ProjectMember> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ProjectMemberEntity): ProjectMemberEntity;
    load(this: any, reqmatch?: ProjectMemberLoadMatch, ctrl?: Control): Promise<ProjectMemberEntity>;
    create(this: any, reqdata?: ProjectMemberCreateData, ctrl?: Control): Promise<ProjectMemberEntity>;
    remove(this: any, reqmatch?: ProjectMemberRemoveMatch, ctrl?: Control): Promise<ProjectMemberEntity>;
}
export { ProjectMemberEntity };
