import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { BulkRedirect, BulkRedirectLoadMatch, BulkRedirectListMatch, BulkRedirectCreateData, BulkRedirectUpdateData, BulkRedirectRemoveMatch } from '../VercelTypes';
declare class BulkRedirectEntity extends VercelEntityBase<BulkRedirect> {
    constructor(client: VercelSDK, entopts: any);
    make(this: BulkRedirectEntity): BulkRedirectEntity;
    load(this: any, reqmatch?: BulkRedirectLoadMatch, ctrl?: Control): Promise<BulkRedirectEntity>;
    list(this: any, reqmatch?: BulkRedirectListMatch, ctrl?: Control): Promise<BulkRedirectEntity[]>;
    create(this: any, reqdata?: BulkRedirectCreateData, ctrl?: Control): Promise<BulkRedirectEntity>;
    update(this: any, reqdata?: BulkRedirectUpdateData, ctrl?: Control): Promise<BulkRedirectEntity>;
    remove(this: any, reqmatch?: BulkRedirectRemoveMatch, ctrl?: Control): Promise<BulkRedirectEntity>;
}
export { BulkRedirectEntity };
