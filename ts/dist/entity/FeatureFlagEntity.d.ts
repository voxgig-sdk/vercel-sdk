import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { FeatureFlag, FeatureFlagLoadMatch, FeatureFlagListMatch, FeatureFlagUpdateData, FeatureFlagRemoveMatch } from '../VercelTypes';
declare class FeatureFlagEntity extends VercelEntityBase<FeatureFlag> {
    constructor(client: VercelSDK, entopts: any);
    make(this: FeatureFlagEntity): FeatureFlagEntity;
    load(this: any, reqmatch?: FeatureFlagLoadMatch, ctrl?: Control): Promise<FeatureFlagEntity>;
    list(this: any, reqmatch?: FeatureFlagListMatch, ctrl?: Control): Promise<FeatureFlagEntity[]>;
    update(this: any, reqdata?: FeatureFlagUpdateData, ctrl?: Control): Promise<FeatureFlagEntity>;
    remove(this: any, reqmatch?: FeatureFlagRemoveMatch, ctrl?: Control): Promise<FeatureFlagEntity>;
}
export { FeatureFlagEntity };
