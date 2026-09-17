import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { GlobalConfigItem, GlobalConfigItemLoadMatch, GlobalConfigItemListMatch } from '../VercelTypes';
declare class GlobalConfigItemEntity extends VercelEntityBase<GlobalConfigItem> {
    constructor(client: VercelSDK, entopts: any);
    make(this: GlobalConfigItemEntity): GlobalConfigItemEntity;
    load(this: any, reqmatch?: GlobalConfigItemLoadMatch, ctrl?: Control): Promise<GlobalConfigItemEntity>;
    list(this: any, reqmatch?: GlobalConfigItemListMatch, ctrl?: Control): Promise<GlobalConfigItemEntity[]>;
}
export { GlobalConfigItemEntity };
