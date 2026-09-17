import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Vcr, VcrLoadMatch, VcrListMatch, VcrCreateData, VcrUpdateData, VcrRemoveMatch } from '../VercelTypes';
declare class VcrEntity extends VercelEntityBase<Vcr> {
    constructor(client: VercelSDK, entopts: any);
    make(this: VcrEntity): VcrEntity;
    load(this: any, reqmatch?: VcrLoadMatch, ctrl?: Control): Promise<VcrEntity>;
    list(this: any, reqmatch?: VcrListMatch, ctrl?: Control): Promise<VcrEntity[]>;
    create(this: any, reqdata?: VcrCreateData, ctrl?: Control): Promise<VcrEntity>;
    update(this: any, reqdata?: VcrUpdateData, ctrl?: Control): Promise<VcrEntity>;
    remove(this: any, reqmatch?: VcrRemoveMatch, ctrl?: Control): Promise<VcrEntity>;
}
export { VcrEntity };
