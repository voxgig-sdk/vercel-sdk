import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Networking, NetworkingUpdateData, NetworkingRemoveMatch } from '../VercelTypes';
declare class NetworkingEntity extends VercelEntityBase<Networking> {
    constructor(client: VercelSDK, entopts: any);
    make(this: NetworkingEntity): NetworkingEntity;
    update(this: any, reqdata?: NetworkingUpdateData, ctrl?: Control): Promise<NetworkingEntity>;
    remove(this: any, reqmatch?: NetworkingRemoveMatch, ctrl?: Control): Promise<NetworkingEntity>;
}
export { NetworkingEntity };
