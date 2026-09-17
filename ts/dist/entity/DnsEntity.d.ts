import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Dns, DnsLoadMatch, DnsCreateData, DnsUpdateData, DnsRemoveMatch } from '../VercelTypes';
declare class DnsEntity extends VercelEntityBase<Dns> {
    constructor(client: VercelSDK, entopts: any);
    make(this: DnsEntity): DnsEntity;
    load(this: any, reqmatch?: DnsLoadMatch, ctrl?: Control): Promise<DnsEntity>;
    create(this: any, reqdata?: DnsCreateData, ctrl?: Control): Promise<DnsEntity>;
    update(this: any, reqdata?: DnsUpdateData, ctrl?: Control): Promise<DnsEntity>;
    remove(this: any, reqmatch?: DnsRemoveMatch, ctrl?: Control): Promise<DnsEntity>;
}
export { DnsEntity };
