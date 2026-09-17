import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Microfrontend, MicrofrontendLoadMatch, MicrofrontendListMatch, MicrofrontendCreateData } from '../VercelTypes';
declare class MicrofrontendEntity extends VercelEntityBase<Microfrontend> {
    constructor(client: VercelSDK, entopts: any);
    make(this: MicrofrontendEntity): MicrofrontendEntity;
    load(this: any, reqmatch?: MicrofrontendLoadMatch, ctrl?: Control): Promise<MicrofrontendEntity>;
    list(this: any, reqmatch?: MicrofrontendListMatch, ctrl?: Control): Promise<MicrofrontendEntity[]>;
    create(this: any, reqdata?: MicrofrontendCreateData, ctrl?: Control): Promise<MicrofrontendEntity>;
}
export { MicrofrontendEntity };
