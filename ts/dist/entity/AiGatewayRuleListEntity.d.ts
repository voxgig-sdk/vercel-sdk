import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { AiGatewayRuleList, AiGatewayRuleListListMatch } from '../VercelTypes';
declare class AiGatewayRuleListEntity extends VercelEntityBase<AiGatewayRuleList> {
    constructor(client: VercelSDK, entopts: any);
    make(this: AiGatewayRuleListEntity): AiGatewayRuleListEntity;
    list(this: any, reqmatch?: AiGatewayRuleListListMatch, ctrl?: Control): Promise<AiGatewayRuleListEntity[]>;
}
export { AiGatewayRuleListEntity };
