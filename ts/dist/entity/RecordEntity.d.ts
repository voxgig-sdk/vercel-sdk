import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { RecordType, RecordLoadMatch } from '../VercelTypes';
declare class RecordEntity extends VercelEntityBase<RecordType> {
    constructor(client: VercelSDK, entopts: any);
    make(this: RecordEntity): RecordEntity;
    load(this: any, reqmatch?: RecordLoadMatch, ctrl?: Control): Promise<RecordEntity>;
}
export { RecordEntity };
