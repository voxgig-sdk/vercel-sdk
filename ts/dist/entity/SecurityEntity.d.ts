import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Security, SecurityLoadMatch, SecurityListMatch, SecurityCreateData, SecurityUpdateData, SecurityRemoveMatch } from '../VercelTypes';
declare class SecurityEntity extends VercelEntityBase<Security> {
    constructor(client: VercelSDK, entopts: any);
    make(this: SecurityEntity): SecurityEntity;
    load(this: any, reqmatch?: SecurityLoadMatch, ctrl?: Control): Promise<SecurityEntity>;
    list(this: any, reqmatch?: SecurityListMatch, ctrl?: Control): Promise<SecurityEntity[]>;
    create(this: any, reqdata?: SecurityCreateData, ctrl?: Control): Promise<SecurityEntity>;
    update(this: any, reqdata?: SecurityUpdateData, ctrl?: Control): Promise<SecurityEntity>;
    remove(this: any, reqmatch?: SecurityRemoveMatch, ctrl?: Control): Promise<SecurityEntity>;
}
export { SecurityEntity };
