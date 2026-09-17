import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Billing, BillingLoadMatch, BillingCreateData } from '../VercelTypes';
declare class BillingEntity extends VercelEntityBase<Billing> {
    constructor(client: VercelSDK, entopts: any);
    make(this: BillingEntity): BillingEntity;
    load(this: any, reqmatch?: BillingLoadMatch, ctrl?: Control): Promise<BillingEntity>;
    create(this: any, reqdata?: BillingCreateData, ctrl?: Control): Promise<BillingEntity>;
}
export { BillingEntity };
