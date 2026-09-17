import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Network, NetworkLoadMatch, NetworkListMatch, NetworkCreateData, NetworkUpdateData, NetworkRemoveMatch } from '../VercelTypes';
declare class NetworkEntity extends VercelEntityBase<Network> {
    constructor(client: VercelSDK, entopts: any);
    make(this: NetworkEntity): NetworkEntity;
    load(this: any, reqmatch?: NetworkLoadMatch, ctrl?: Control): Promise<NetworkEntity>;
    list(this: any, reqmatch?: NetworkListMatch, ctrl?: Control): Promise<NetworkEntity[]>;
    create(this: any, reqdata?: NetworkCreateData, ctrl?: Control): Promise<NetworkEntity>;
    update(this: any, reqdata?: NetworkUpdateData, ctrl?: Control): Promise<NetworkEntity>;
    remove(this: any, reqmatch?: NetworkRemoveMatch, ctrl?: Control): Promise<NetworkEntity>;
}
export { NetworkEntity };
