import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { PrivateLinkEndpoint, PrivateLinkEndpointLoadMatch, PrivateLinkEndpointListMatch, PrivateLinkEndpointCreateData, PrivateLinkEndpointUpdateData } from '../VercelTypes';
declare class PrivateLinkEndpointEntity extends VercelEntityBase<PrivateLinkEndpoint> {
    constructor(client: VercelSDK, entopts: any);
    make(this: PrivateLinkEndpointEntity): PrivateLinkEndpointEntity;
    load(this: any, reqmatch?: PrivateLinkEndpointLoadMatch, ctrl?: Control): Promise<PrivateLinkEndpointEntity>;
    list(this: any, reqmatch?: PrivateLinkEndpointListMatch, ctrl?: Control): Promise<PrivateLinkEndpointEntity[]>;
    create(this: any, reqdata?: PrivateLinkEndpointCreateData, ctrl?: Control): Promise<PrivateLinkEndpointEntity>;
    update(this: any, reqdata?: PrivateLinkEndpointUpdateData, ctrl?: Control): Promise<PrivateLinkEndpointEntity>;
}
export { PrivateLinkEndpointEntity };
