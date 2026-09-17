import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { AiGatewayVirtualModelConfig, AiGatewayVirtualModelConfigLoadMatch, AiGatewayVirtualModelConfigCreateData, AiGatewayVirtualModelConfigUpdateData } from '../VercelTypes';
declare class AiGatewayVirtualModelConfigEntity extends VercelEntityBase<AiGatewayVirtualModelConfig> {
    constructor(client: VercelSDK, entopts: any);
    make(this: AiGatewayVirtualModelConfigEntity): AiGatewayVirtualModelConfigEntity;
    load(this: any, reqmatch?: AiGatewayVirtualModelConfigLoadMatch, ctrl?: Control): Promise<AiGatewayVirtualModelConfigEntity>;
    create(this: any, reqdata?: AiGatewayVirtualModelConfigCreateData, ctrl?: Control): Promise<AiGatewayVirtualModelConfigEntity>;
    update(this: any, reqdata?: AiGatewayVirtualModelConfigUpdateData, ctrl?: Control): Promise<AiGatewayVirtualModelConfigEntity>;
}
export { AiGatewayVirtualModelConfigEntity };
