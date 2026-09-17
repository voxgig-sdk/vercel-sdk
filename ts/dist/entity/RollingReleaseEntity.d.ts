import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { RollingRelease, RollingReleaseLoadMatch, RollingReleaseCreateData, RollingReleaseUpdateData, RollingReleaseRemoveMatch } from '../VercelTypes';
declare class RollingReleaseEntity extends VercelEntityBase<RollingRelease> {
    constructor(client: VercelSDK, entopts: any);
    make(this: RollingReleaseEntity): RollingReleaseEntity;
    load(this: any, reqmatch?: RollingReleaseLoadMatch, ctrl?: Control): Promise<RollingReleaseEntity>;
    create(this: any, reqdata?: RollingReleaseCreateData, ctrl?: Control): Promise<RollingReleaseEntity>;
    update(this: any, reqdata?: RollingReleaseUpdateData, ctrl?: Control): Promise<RollingReleaseEntity>;
    remove(this: any, reqmatch?: RollingReleaseRemoveMatch, ctrl?: Control): Promise<RollingReleaseEntity>;
}
export { RollingReleaseEntity };
