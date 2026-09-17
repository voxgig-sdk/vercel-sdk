import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { VcrRepositoryPermissionList, VcrRepositoryPermissionListListMatch } from '../VercelTypes';
declare class VcrRepositoryPermissionListEntity extends VercelEntityBase<VcrRepositoryPermissionList> {
    constructor(client: VercelSDK, entopts: any);
    make(this: VcrRepositoryPermissionListEntity): VcrRepositoryPermissionListEntity;
    list(this: any, reqmatch?: VcrRepositoryPermissionListListMatch, ctrl?: Control): Promise<VcrRepositoryPermissionListEntity[]>;
}
export { VcrRepositoryPermissionListEntity };
