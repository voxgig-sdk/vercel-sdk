import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { EdgeCache, EdgeCacheCreateData } from '../VercelTypes';
declare class EdgeCacheEntity extends VercelEntityBase<EdgeCache> {
    constructor(client: VercelSDK, entopts: any);
    make(this: EdgeCacheEntity): EdgeCacheEntity;
    create(this: any, reqdata?: EdgeCacheCreateData, ctrl?: Control): Promise<EdgeCacheEntity>;
}
export { EdgeCacheEntity };
