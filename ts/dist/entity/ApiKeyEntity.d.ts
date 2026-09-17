import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ApiKey, ApiKeyCreateData } from '../VercelTypes';
declare class ApiKeyEntity extends VercelEntityBase<ApiKey> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ApiKeyEntity): ApiKeyEntity;
    create(this: any, reqdata?: ApiKeyCreateData, ctrl?: Control): Promise<ApiKeyEntity>;
}
export { ApiKeyEntity };
