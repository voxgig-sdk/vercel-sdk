import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Observability, ObservabilityListMatch, ObservabilityUpdateData } from '../VercelTypes';
declare class ObservabilityEntity extends VercelEntityBase<Observability> {
    constructor(client: VercelSDK, entopts: any);
    make(this: ObservabilityEntity): ObservabilityEntity;
    list(this: any, reqmatch?: ObservabilityListMatch, ctrl?: Control): Promise<ObservabilityEntity[]>;
    update(this: any, reqdata?: ObservabilityUpdateData, ctrl?: Control): Promise<ObservabilityEntity>;
}
export { ObservabilityEntity };
