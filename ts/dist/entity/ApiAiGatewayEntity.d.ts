import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ApiAiGateway, ApiAiGatewayLoadMatch, ApiAiGatewayRemoveMatch } from '../VercelTypes';
declare class ApiAiGatewayEntity extends VercelEntityBase<ApiAiGateway> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ApiAiGatewayEntity): ApiAiGatewayEntity;
    load(this: any, reqmatch?: ApiAiGatewayLoadMatch, ctrl?: Control): Promise<ApiAiGatewayEntity>;
    remove(this: any, reqmatch?: ApiAiGatewayRemoveMatch, ctrl?: Control): Promise<ApiAiGatewayEntity>;
}
export { ApiAiGatewayEntity };
