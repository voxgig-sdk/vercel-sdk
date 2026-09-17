import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Check, CheckLoadMatch, CheckListMatch, CheckCreateData, CheckUpdateData, CheckRemoveMatch } from '../VercelTypes';
declare class CheckEntity extends VercelEntityBase<Check> {
    constructor(client: VercelSDK, entopts: any);
    make(this: CheckEntity): CheckEntity;
    load(this: any, reqmatch?: CheckLoadMatch, ctrl?: Control): Promise<CheckEntity>;
    list(this: any, reqmatch?: CheckListMatch, ctrl?: Control): Promise<CheckEntity[]>;
    create(this: any, reqdata?: CheckCreateData, ctrl?: Control): Promise<CheckEntity>;
    update(this: any, reqdata?: CheckUpdateData, ctrl?: Control): Promise<CheckEntity>;
    remove(this: any, reqmatch?: CheckRemoveMatch, ctrl?: Control): Promise<CheckEntity>;
}
export { CheckEntity };
