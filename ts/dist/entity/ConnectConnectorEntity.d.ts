import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { ConnectConnector, ConnectConnectorLoadMatch, ConnectConnectorCreateData, ConnectConnectorUpdateData } from '../VercelTypes';
declare class ConnectConnectorEntity extends VercelEntityBase<ConnectConnector> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ConnectConnectorEntity): ConnectConnectorEntity;
    load(this: any, reqmatch?: ConnectConnectorLoadMatch, ctrl?: Control): Promise<ConnectConnectorEntity>;
    create(this: any, reqdata?: ConnectConnectorCreateData, ctrl?: Control): Promise<ConnectConnectorEntity>;
    update(this: any, reqdata?: ConnectConnectorUpdateData, ctrl?: Control): Promise<ConnectConnectorEntity>;
}
export { ConnectConnectorEntity };
