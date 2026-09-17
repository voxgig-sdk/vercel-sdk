import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { LogDrain, LogDrainLoadMatch, LogDrainListMatch, LogDrainCreateData, LogDrainRemoveMatch } from '../VercelTypes';
declare class LogDrainEntity extends VercelEntityBase<LogDrain> {
    constructor(client: VercelSDK, entopts: any);
    make(this: LogDrainEntity): LogDrainEntity;
    load(this: any, reqmatch?: LogDrainLoadMatch, ctrl?: Control): Promise<LogDrainEntity>;
    list(this: any, reqmatch?: LogDrainListMatch, ctrl?: Control): Promise<LogDrainEntity[]>;
    create(this: any, reqdata?: LogDrainCreateData, ctrl?: Control): Promise<LogDrainEntity>;
    remove(this: any, reqmatch?: LogDrainRemoveMatch, ctrl?: Control): Promise<LogDrainEntity>;
}
export { LogDrainEntity };
