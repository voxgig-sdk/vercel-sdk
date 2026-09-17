import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ListEventType, ListEventTypeListMatch } from '../VercelTypes';
declare class ListEventTypeEntity extends VercelEntityBase<ListEventType> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ListEventTypeEntity): ListEventTypeEntity;
    list(this: any, reqmatch?: ListEventTypeListMatch, ctrl?: Control): Promise<ListEventTypeEntity[]>;
}
export { ListEventTypeEntity };
