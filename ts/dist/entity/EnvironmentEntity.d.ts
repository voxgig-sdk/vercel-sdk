import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Environment, EnvironmentLoadMatch, EnvironmentListMatch, EnvironmentCreateData, EnvironmentUpdateData, EnvironmentRemoveMatch } from '../VercelTypes';
declare class EnvironmentEntity extends VercelEntityBase<Environment> {
    constructor(client: VercelSDK, entopts: any);
    make(this: EnvironmentEntity): EnvironmentEntity;
    load(this: any, reqmatch?: EnvironmentLoadMatch, ctrl?: Control): Promise<EnvironmentEntity>;
    list(this: any, reqmatch?: EnvironmentListMatch, ctrl?: Control): Promise<EnvironmentEntity[]>;
    create(this: any, reqdata?: EnvironmentCreateData, ctrl?: Control): Promise<EnvironmentEntity>;
    update(this: any, reqdata?: EnvironmentUpdateData, ctrl?: Control): Promise<EnvironmentEntity>;
    remove(this: any, reqmatch?: EnvironmentRemoveMatch, ctrl?: Control): Promise<EnvironmentEntity>;
}
export { EnvironmentEntity };
