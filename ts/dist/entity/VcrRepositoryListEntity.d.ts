import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { VcrRepositoryList, VcrRepositoryListListMatch } from '../VercelTypes';
declare class VcrRepositoryListEntity extends VercelEntityBase<VcrRepositoryList> {
    constructor(client: VercelSDK, entopts: any);
    make(this: VcrRepositoryListEntity): VcrRepositoryListEntity;
    list(this: any, reqmatch?: VcrRepositoryListListMatch, ctrl?: Control): Promise<VcrRepositoryListEntity[]>;
}
export { VcrRepositoryListEntity };
