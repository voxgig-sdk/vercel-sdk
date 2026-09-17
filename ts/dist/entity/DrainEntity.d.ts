import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Drain, DrainLoadMatch, DrainCreateData, DrainUpdateData, DrainRemoveMatch } from '../VercelTypes';
declare class DrainEntity extends VercelEntityBase<Drain> {
    constructor(client: VercelSDK, entopts: any);
    make(this: DrainEntity): DrainEntity;
    load(this: any, reqmatch?: DrainLoadMatch, ctrl?: Control): Promise<DrainEntity>;
    create(this: any, reqdata?: DrainCreateData, ctrl?: Control): Promise<DrainEntity>;
    update(this: any, reqdata?: DrainUpdateData, ctrl?: Control): Promise<DrainEntity>;
    remove(this: any, reqmatch?: DrainRemoveMatch, ctrl?: Control): Promise<DrainEntity>;
}
export { DrainEntity };
