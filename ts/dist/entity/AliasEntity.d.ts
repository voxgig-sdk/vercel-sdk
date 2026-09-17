import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Alias, AliasLoadMatch, AliasListMatch, AliasCreateData, AliasUpdateData, AliasRemoveMatch } from '../VercelTypes';
declare class AliasEntity extends VercelEntityBase<Alias> {
    constructor(client: VercelSDK, entopts: any);
    make(this: AliasEntity): AliasEntity;
    load(this: any, reqmatch?: AliasLoadMatch, ctrl?: Control): Promise<AliasEntity>;
    list(this: any, reqmatch?: AliasListMatch, ctrl?: Control): Promise<AliasEntity[]>;
    create(this: any, reqdata?: AliasCreateData, ctrl?: Control): Promise<AliasEntity>;
    update(this: any, reqdata?: AliasUpdateData, ctrl?: Control): Promise<AliasEntity>;
    remove(this: any, reqmatch?: AliasRemoveMatch, ctrl?: Control): Promise<AliasEntity>;
}
export { AliasEntity };
