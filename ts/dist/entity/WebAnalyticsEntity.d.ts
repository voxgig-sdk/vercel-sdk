import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { WebAnalytics, WebAnalyticsLoadMatch } from '../VercelTypes';
declare class WebAnalyticsEntity extends VercelEntityBase<WebAnalytics> {
    constructor(client: VercelSDK, entopts: any);
    make(this: WebAnalyticsEntity): WebAnalyticsEntity;
    load(this: any, reqmatch?: WebAnalyticsLoadMatch, ctrl?: Control): Promise<WebAnalyticsEntity>;
}
export { WebAnalyticsEntity };
