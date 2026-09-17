import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { AiGatewayVirtualModelConfigList, AiGatewayVirtualModelConfigListListMatch } from '../VercelTypes';
declare class AiGatewayVirtualModelConfigListEntity extends VercelEntityBase<AiGatewayVirtualModelConfigList> {
    constructor(client: VercelSDK, entopts: any);
    make(this: AiGatewayVirtualModelConfigListEntity): AiGatewayVirtualModelConfigListEntity;
    list(this: any, reqmatch?: AiGatewayVirtualModelConfigListListMatch, ctrl?: Control): Promise<AiGatewayVirtualModelConfigListEntity[]>;
}
export { AiGatewayVirtualModelConfigListEntity };
