import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Query, QueryCreateData } from '../VercelTypes';
declare class QueryEntity extends VercelEntityBase<Query> {
    constructor(client: VercelSDK, entopts: any);
    make(this: QueryEntity): QueryEntity;
    create(this: any, reqdata?: QueryCreateData, ctrl?: Control): Promise<QueryEntity>;
}
export { QueryEntity };
