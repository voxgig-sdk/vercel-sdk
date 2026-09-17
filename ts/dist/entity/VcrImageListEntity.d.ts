import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { VcrImageList, VcrImageListListMatch } from '../VercelTypes';
declare class VcrImageListEntity extends VercelEntityBase<VcrImageList> {
    constructor(client: VercelSDK, entopts: any);
    make(this: VcrImageListEntity): VcrImageListEntity;
    list(this: any, reqmatch?: VcrImageListListMatch, ctrl?: Control): Promise<VcrImageListEntity[]>;
}
export { VcrImageListEntity };
