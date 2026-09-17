import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { GlobalConfigToken, GlobalConfigTokenLoadMatch } from '../VercelTypes';
declare class GlobalConfigTokenEntity extends VercelEntityBase<GlobalConfigToken> {
    constructor(client: VercelSDK, entopts: any);
    make(this: GlobalConfigTokenEntity): GlobalConfigTokenEntity;
    load(this: any, reqmatch?: GlobalConfigTokenLoadMatch, ctrl?: Control): Promise<GlobalConfigTokenEntity>;
}
export { GlobalConfigTokenEntity };
