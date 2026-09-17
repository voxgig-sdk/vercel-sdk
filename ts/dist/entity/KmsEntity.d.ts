import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Kms, KmsLoadMatch, KmsListMatch, KmsCreateData, KmsUpdateData, KmsRemoveMatch } from '../VercelTypes';
declare class KmsEntity extends VercelEntityBase<Kms> {
    constructor(client: VercelSDK, entopts: any);
    make(this: KmsEntity): KmsEntity;
    load(this: any, reqmatch?: KmsLoadMatch, ctrl?: Control): Promise<KmsEntity>;
    list(this: any, reqmatch?: KmsListMatch, ctrl?: Control): Promise<KmsEntity[]>;
    create(this: any, reqdata?: KmsCreateData, ctrl?: Control): Promise<KmsEntity>;
    update(this: any, reqdata?: KmsUpdateData, ctrl?: Control): Promise<KmsEntity>;
    remove(this: any, reqmatch?: KmsRemoveMatch, ctrl?: Control): Promise<KmsEntity>;
}
export { KmsEntity };
