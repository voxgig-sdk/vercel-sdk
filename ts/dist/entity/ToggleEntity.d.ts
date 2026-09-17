import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Toggle, ToggleCreateData } from '../VercelTypes';
declare class ToggleEntity extends VercelEntityBase<Toggle> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ToggleEntity): ToggleEntity;
    create(this: any, reqdata?: ToggleCreateData, ctrl?: Control): Promise<ToggleEntity>;
}
export { ToggleEntity };
