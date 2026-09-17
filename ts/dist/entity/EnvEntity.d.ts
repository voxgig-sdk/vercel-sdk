import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Env, EnvLoadMatch, EnvListMatch, EnvCreateData, EnvUpdateData, EnvRemoveMatch } from '../VercelTypes';
declare class EnvEntity extends VercelEntityBase<Env> {
    constructor(client: VercelSDK, entopts: any);
    make(this: EnvEntity): EnvEntity;
    load(this: any, reqmatch?: EnvLoadMatch, ctrl?: Control): Promise<EnvEntity>;
    list(this: any, reqmatch?: EnvListMatch, ctrl?: Control): Promise<EnvEntity[]>;
    create(this: any, reqdata?: EnvCreateData, ctrl?: Control): Promise<EnvEntity>;
    update(this: any, reqdata?: EnvUpdateData, ctrl?: Control): Promise<EnvEntity>;
    remove(this: any, reqmatch?: EnvRemoveMatch, ctrl?: Control): Promise<EnvEntity>;
}
export { EnvEntity };
