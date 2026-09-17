import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ConnectProjectConnectorConnectionList, ConnectProjectConnectorConnectionListListMatch } from '../VercelTypes';
declare class ConnectProjectConnectorConnectionListEntity extends VercelEntityBase<ConnectProjectConnectorConnectionList> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ConnectProjectConnectorConnectionListEntity): ConnectProjectConnectorConnectionListEntity;
    list(this: any, reqmatch?: ConnectProjectConnectorConnectionListListMatch, ctrl?: Control): Promise<ConnectProjectConnectorConnectionListEntity[]>;
}
export { ConnectProjectConnectorConnectionListEntity };
