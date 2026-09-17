import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { TldName, TldNameListMatch } from '../VercelTypes';
declare class TldNameEntity extends VercelEntityBase<TldName> {
    constructor(client: VercelSDK, entopts: any);
    make(this: TldNameEntity): TldNameEntity;
    list(this: any, reqmatch?: TldNameListMatch, ctrl?: Control): Promise<TldNameEntity[]>;
}
export { TldNameEntity };
