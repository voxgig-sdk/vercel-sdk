import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ConnectConnectorList, ConnectConnectorListListMatch } from '../VercelTypes';
declare class ConnectConnectorListEntity extends VercelEntityBase<ConnectConnectorList> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ConnectConnectorListEntity): ConnectConnectorListEntity;
    list(this: any, reqmatch?: ConnectConnectorListListMatch, ctrl?: Control): Promise<ConnectConnectorListEntity[]>;
}
export { ConnectConnectorListEntity };
