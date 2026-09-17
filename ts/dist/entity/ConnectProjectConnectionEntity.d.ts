import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ConnectProjectConnection, ConnectProjectConnectionLoadMatch, ConnectProjectConnectionCreateData } from '../VercelTypes';
declare class ConnectProjectConnectionEntity extends VercelEntityBase<ConnectProjectConnection> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ConnectProjectConnectionEntity): ConnectProjectConnectionEntity;
    load(this: any, reqmatch?: ConnectProjectConnectionLoadMatch, ctrl?: Control): Promise<ConnectProjectConnectionEntity>;
    create(this: any, reqdata?: ConnectProjectConnectionCreateData, ctrl?: Control): Promise<ConnectProjectConnectionEntity>;
}
export { ConnectProjectConnectionEntity };
