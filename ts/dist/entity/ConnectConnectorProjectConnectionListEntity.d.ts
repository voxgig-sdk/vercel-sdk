import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ConnectConnectorProjectConnectionList, ConnectConnectorProjectConnectionListListMatch } from '../VercelTypes';
declare class ConnectConnectorProjectConnectionListEntity extends VercelEntityBase<ConnectConnectorProjectConnectionList> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ConnectConnectorProjectConnectionListEntity): ConnectConnectorProjectConnectionListEntity;
    list(this: any, reqmatch?: ConnectConnectorProjectConnectionListListMatch, ctrl?: Control): Promise<ConnectConnectorProjectConnectionListEntity[]>;
}
export { ConnectConnectorProjectConnectionListEntity };
