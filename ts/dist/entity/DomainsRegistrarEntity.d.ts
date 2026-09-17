import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { DomainsRegistrar, DomainsRegistrarLoadMatch, DomainsRegistrarCreateData, DomainsRegistrarUpdateData } from '../VercelTypes';
declare class DomainsRegistrarEntity extends VercelEntityBase<DomainsRegistrar> {
    constructor(client: VercelSDK, entopts: any);
    make(this: DomainsRegistrarEntity): DomainsRegistrarEntity;
    load(this: any, reqmatch?: DomainsRegistrarLoadMatch, ctrl?: Control): Promise<DomainsRegistrarEntity>;
    create(this: any, reqdata?: DomainsRegistrarCreateData, ctrl?: Control): Promise<DomainsRegistrarEntity>;
    update(this: any, reqdata?: DomainsRegistrarUpdateData, ctrl?: Control): Promise<DomainsRegistrarEntity>;
}
export { DomainsRegistrarEntity };
