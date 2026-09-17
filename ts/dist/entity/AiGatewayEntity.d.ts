import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { AiGateway, AiGatewayRemoveMatch } from '../VercelTypes';
declare class AiGatewayEntity extends VercelEntityBase<AiGateway> {
    constructor(client: VercelSDK, entopts: any);
    make(this: AiGatewayEntity): AiGatewayEntity;
    remove(this: any, reqmatch?: AiGatewayRemoveMatch, ctrl?: Control): Promise<AiGatewayEntity>;
}
export { AiGatewayEntity };
