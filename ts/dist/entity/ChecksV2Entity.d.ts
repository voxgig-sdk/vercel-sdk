import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ChecksV2, ChecksV2LoadMatch, ChecksV2ListMatch, ChecksV2CreateData, ChecksV2UpdateData } from '../VercelTypes';
declare class ChecksV2Entity extends VercelEntityBase<ChecksV2> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ChecksV2Entity): ChecksV2Entity;
    load(this: any, reqmatch?: ChecksV2LoadMatch, ctrl?: Control): Promise<ChecksV2Entity>;
    list(this: any, reqmatch?: ChecksV2ListMatch, ctrl?: Control): Promise<ChecksV2Entity[]>;
    create(this: any, reqdata?: ChecksV2CreateData, ctrl?: Control): Promise<ChecksV2Entity>;
    update(this: any, reqdata?: ChecksV2UpdateData, ctrl?: Control): Promise<ChecksV2Entity>;
}
export { ChecksV2Entity };
