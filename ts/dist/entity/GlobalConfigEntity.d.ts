import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { GlobalConfig, GlobalConfigLoadMatch, GlobalConfigListMatch, GlobalConfigCreateData, GlobalConfigUpdateData, GlobalConfigRemoveMatch } from '../VercelTypes';
declare class GlobalConfigEntity extends VercelEntityBase<GlobalConfig> {
    constructor(client: VercelSDK, entopts: any);
    make(this: GlobalConfigEntity): GlobalConfigEntity;
    load(this: any, reqmatch?: GlobalConfigLoadMatch, ctrl?: Control): Promise<GlobalConfigEntity>;
    list(this: any, reqmatch?: GlobalConfigListMatch, ctrl?: Control): Promise<GlobalConfigEntity[]>;
    create(this: any, reqdata?: GlobalConfigCreateData, ctrl?: Control): Promise<GlobalConfigEntity>;
    update(this: any, reqdata?: GlobalConfigUpdateData, ctrl?: Control): Promise<GlobalConfigEntity>;
    remove(this: any, reqmatch?: GlobalConfigRemoveMatch, ctrl?: Control): Promise<GlobalConfigEntity>;
}
export { GlobalConfigEntity };
