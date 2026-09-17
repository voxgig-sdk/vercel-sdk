import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { AiGatewayRule, AiGatewayRuleCreateData, AiGatewayRuleUpdateData } from '../VercelTypes';
declare class AiGatewayRuleEntity extends VercelEntityBase<AiGatewayRule> {
    constructor(client: VercelSDK, entopts: any);
    make(this: AiGatewayRuleEntity): AiGatewayRuleEntity;
    create(this: any, reqdata?: AiGatewayRuleCreateData, ctrl?: Control): Promise<AiGatewayRuleEntity>;
    update(this: any, reqdata?: AiGatewayRuleUpdateData, ctrl?: Control): Promise<AiGatewayRuleEntity>;
}
export { AiGatewayRuleEntity };
