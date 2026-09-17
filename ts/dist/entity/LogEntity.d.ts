import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Log, LogLoadMatch } from '../VercelTypes';
declare class LogEntity extends VercelEntityBase<Log> {
    constructor(client: VercelSDK, entopts: any);
    make(this: LogEntity): LogEntity;
    load(this: any, reqmatch?: LogLoadMatch, ctrl?: Control): Promise<LogEntity>;
}
export { LogEntity };
