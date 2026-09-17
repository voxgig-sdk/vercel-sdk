import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Storage, StorageLoadMatch, StorageCreateData, StorageRemoveMatch } from '../VercelTypes';
declare class StorageEntity extends VercelEntityBase<Storage> {
    constructor(client: VercelSDK, entopts: any);
    make(this: StorageEntity): StorageEntity;
    load(this: any, reqmatch?: StorageLoadMatch, ctrl?: Control): Promise<StorageEntity>;
    create(this: any, reqdata?: StorageCreateData, ctrl?: Control): Promise<StorageEntity>;
    remove(this: any, reqmatch?: StorageRemoveMatch, ctrl?: Control): Promise<StorageEntity>;
}
export { StorageEntity };
