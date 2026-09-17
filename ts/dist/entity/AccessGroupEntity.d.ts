import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { AccessGroup, AccessGroupLoadMatch, AccessGroupListMatch, AccessGroupCreateData, AccessGroupUpdateData, AccessGroupRemoveMatch } from '../VercelTypes';
declare class AccessGroupEntity extends VercelEntityBase<AccessGroup> {
    constructor(client: VercelSDK, entopts: any);
    make(this: AccessGroupEntity): AccessGroupEntity;
    load(this: any, reqmatch?: AccessGroupLoadMatch, ctrl?: Control): Promise<AccessGroupEntity>;
    list(this: any, reqmatch?: AccessGroupListMatch, ctrl?: Control): Promise<AccessGroupEntity[]>;
    create(this: any, reqdata?: AccessGroupCreateData, ctrl?: Control): Promise<AccessGroupEntity>;
    update(this: any, reqdata?: AccessGroupUpdateData, ctrl?: Control): Promise<AccessGroupEntity>;
    remove(this: any, reqmatch?: AccessGroupRemoveMatch, ctrl?: Control): Promise<AccessGroupEntity>;
}
export { AccessGroupEntity };
