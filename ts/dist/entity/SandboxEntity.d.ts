import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Sandbox, SandboxLoadMatch, SandboxListMatch, SandboxCreateData, SandboxUpdateData, SandboxRemoveMatch } from '../VercelTypes';
declare class SandboxEntity extends VercelEntityBase<Sandbox> {
    constructor(client: VercelSDK, entopts: any);
    make(this: SandboxEntity): SandboxEntity;
    load(this: any, reqmatch?: SandboxLoadMatch, ctrl?: Control): Promise<SandboxEntity>;
    list(this: any, reqmatch?: SandboxListMatch, ctrl?: Control): Promise<SandboxEntity[]>;
    create(this: any, reqdata?: SandboxCreateData, ctrl?: Control): Promise<SandboxEntity>;
    update(this: any, reqdata?: SandboxUpdateData, ctrl?: Control): Promise<SandboxEntity>;
    remove(this: any, reqmatch?: SandboxRemoveMatch, ctrl?: Control): Promise<SandboxEntity>;
}
export { SandboxEntity };
