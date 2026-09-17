import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Authentication, AuthenticationLoadMatch, AuthenticationCreateData, AuthenticationRemoveMatch } from '../VercelTypes';
declare class AuthenticationEntity extends VercelEntityBase<Authentication> {
    constructor(client: VercelSDK, entopts: any);
    make(this: AuthenticationEntity): AuthenticationEntity;
    load(this: any, reqmatch?: AuthenticationLoadMatch, ctrl?: Control): Promise<AuthenticationEntity>;
    create(this: any, reqdata?: AuthenticationCreateData, ctrl?: Control): Promise<AuthenticationEntity>;
    remove(this: any, reqmatch?: AuthenticationRemoveMatch, ctrl?: Control): Promise<AuthenticationEntity>;
}
export { AuthenticationEntity };
