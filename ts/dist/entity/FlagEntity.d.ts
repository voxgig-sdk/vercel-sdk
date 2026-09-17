import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Flag, FlagLoadMatch } from '../VercelTypes';
declare class FlagEntity extends VercelEntityBase<Flag> {
    constructor(client: VercelSDK, entopts: any);
    make(this: FlagEntity): FlagEntity;
    load(this: any, reqmatch?: FlagLoadMatch, ctrl?: Control): Promise<FlagEntity>;
}
export { FlagEntity };
