import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Cert, CertLoadMatch, CertListMatch, CertCreateData, CertUpdateData, CertRemoveMatch } from '../VercelTypes';
declare class CertEntity extends VercelEntityBase<Cert> {
    constructor(client: VercelSDK, entopts: any);
    make(this: CertEntity): CertEntity;
    load(this: any, reqmatch?: CertLoadMatch, ctrl?: Control): Promise<CertEntity>;
    list(this: any, reqmatch?: CertListMatch, ctrl?: Control): Promise<CertEntity[]>;
    create(this: any, reqdata?: CertCreateData, ctrl?: Control): Promise<CertEntity>;
    update(this: any, reqdata?: CertUpdateData, ctrl?: Control): Promise<CertEntity>;
    remove(this: any, reqmatch?: CertRemoveMatch, ctrl?: Control): Promise<CertEntity>;
}
export { CertEntity };
