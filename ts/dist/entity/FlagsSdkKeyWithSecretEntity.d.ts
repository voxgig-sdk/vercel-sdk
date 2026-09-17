import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { FlagsSdkKeyWithSecret, FlagsSdkKeyWithSecretUpdateData } from '../VercelTypes';
declare class FlagsSdkKeyWithSecretEntity extends VercelEntityBase<FlagsSdkKeyWithSecret> {
    constructor(client: VercelSDK, entopts: any);
    make(this: FlagsSdkKeyWithSecretEntity): FlagsSdkKeyWithSecretEntity;
    update(this: any, reqdata?: FlagsSdkKeyWithSecretUpdateData, ctrl?: Control): Promise<FlagsSdkKeyWithSecretEntity>;
}
export { FlagsSdkKeyWithSecretEntity };
