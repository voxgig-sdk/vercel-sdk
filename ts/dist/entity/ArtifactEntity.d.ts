import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Artifact, ArtifactLoadMatch, ArtifactCreateData, ArtifactUpdateData, ArtifactRemoveMatch } from '../VercelTypes';
declare class ArtifactEntity extends VercelEntityBase<Artifact> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ArtifactEntity): ArtifactEntity;
    load(this: any, reqmatch?: ArtifactLoadMatch, ctrl?: Control): Promise<ArtifactEntity>;
    create(this: any, reqdata?: ArtifactCreateData, ctrl?: Control): Promise<ArtifactEntity>;
    update(this: any, reqdata?: ArtifactUpdateData, ctrl?: Control): Promise<ArtifactEntity>;
    remove(this: any, reqmatch?: ArtifactRemoveMatch, ctrl?: Control): Promise<ArtifactEntity>;
}
export { ArtifactEntity };
