import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Deployment, DeploymentLoadMatch, DeploymentListMatch, DeploymentCreateData, DeploymentUpdateData, DeploymentRemoveMatch } from '../VercelTypes';
declare class DeploymentEntity extends VercelEntityBase<Deployment> {
    constructor(client: VercelSDK, entopts: any);
    make(this: DeploymentEntity): DeploymentEntity;
    load(this: any, reqmatch?: DeploymentLoadMatch, ctrl?: Control): Promise<DeploymentEntity>;
    list(this: any, reqmatch?: DeploymentListMatch, ctrl?: Control): Promise<DeploymentEntity[]>;
    create(this: any, reqdata?: DeploymentCreateData, ctrl?: Control): Promise<DeploymentEntity>;
    update(this: any, reqdata?: DeploymentUpdateData, ctrl?: Control): Promise<DeploymentEntity>;
    remove(this: any, reqmatch?: DeploymentRemoveMatch, ctrl?: Control): Promise<DeploymentEntity>;
}
export { DeploymentEntity };
