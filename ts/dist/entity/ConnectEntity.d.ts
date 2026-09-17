import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Connect, ConnectCreateData, ConnectRemoveMatch } from '../VercelTypes';
declare class ConnectEntity extends VercelEntityBase<Connect> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ConnectEntity): ConnectEntity;
    create(this: any, reqdata?: ConnectCreateData, ctrl?: Control): Promise<ConnectEntity>;
    remove(this: any, reqmatch?: ConnectRemoveMatch, ctrl?: Control): Promise<ConnectEntity>;
}
export { ConnectEntity };
