import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Marketplace, MarketplaceLoadMatch, MarketplaceListMatch, MarketplaceCreateData, MarketplaceUpdateData, MarketplaceRemoveMatch } from '../VercelTypes';
declare class MarketplaceEntity extends VercelEntityBase<Marketplace> {
    constructor(client: VercelSDK, entopts: any);
    make(this: MarketplaceEntity): MarketplaceEntity;
    load(this: any, reqmatch?: MarketplaceLoadMatch, ctrl?: Control): Promise<MarketplaceEntity>;
    list(this: any, reqmatch?: MarketplaceListMatch, ctrl?: Control): Promise<MarketplaceEntity[]>;
    create(this: any, reqdata?: MarketplaceCreateData, ctrl?: Control): Promise<MarketplaceEntity>;
    update(this: any, reqdata?: MarketplaceUpdateData, ctrl?: Control): Promise<MarketplaceEntity>;
    remove(this: any, reqmatch?: MarketplaceRemoveMatch, ctrl?: Control): Promise<MarketplaceEntity>;
}
export { MarketplaceEntity };
