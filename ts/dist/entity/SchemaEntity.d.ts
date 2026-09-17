import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Schema, SchemaLoadMatch, SchemaListMatch } from '../VercelTypes';
declare class SchemaEntity extends VercelEntityBase<Schema> {
    constructor(client: VercelSDK, entopts: any);
    make(this: SchemaEntity): SchemaEntity;
    load(this: any, reqmatch?: SchemaLoadMatch, ctrl?: Control): Promise<SchemaEntity>;
    list(this: any, reqmatch?: SchemaListMatch, ctrl?: Control): Promise<SchemaEntity[]>;
}
export { SchemaEntity };
