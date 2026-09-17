import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { Segment, SegmentLoadMatch } from '../VercelTypes';
declare class SegmentEntity extends VercelEntityBase<Segment> {
    constructor(client: VercelSDK, entopts: any);
    make(this: SegmentEntity): SegmentEntity;
    load(this: any, reqmatch?: SegmentLoadMatch, ctrl?: Control): Promise<SegmentEntity>;
}
export { SegmentEntity };
