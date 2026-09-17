import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Integration, IntegrationLoadMatch, IntegrationListMatch, IntegrationCreateData, IntegrationRemoveMatch } from '../VercelTypes';
declare class IntegrationEntity extends VercelEntityBase<Integration> {
    constructor(client: VercelSDK, entopts: any);
    make(this: IntegrationEntity): IntegrationEntity;
    load(this: any, reqmatch?: IntegrationLoadMatch, ctrl?: Control): Promise<IntegrationEntity>;
    list(this: any, reqmatch?: IntegrationListMatch, ctrl?: Control): Promise<IntegrationEntity[]>;
    create(this: any, reqdata?: IntegrationCreateData, ctrl?: Control): Promise<IntegrationEntity>;
    remove(this: any, reqmatch?: IntegrationRemoveMatch, ctrl?: Control): Promise<IntegrationEntity>;
}
export { IntegrationEntity };
