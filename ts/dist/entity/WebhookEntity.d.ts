import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Webhook, WebhookLoadMatch, WebhookCreateData, WebhookRemoveMatch } from '../VercelTypes';
declare class WebhookEntity extends VercelEntityBase<Webhook> {
    constructor(client: VercelSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    load(this: any, reqmatch?: WebhookLoadMatch, ctrl?: Control): Promise<WebhookEntity>;
    create(this: any, reqdata?: WebhookCreateData, ctrl?: Control): Promise<WebhookEntity>;
    remove(this: any, reqmatch?: WebhookRemoveMatch, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
