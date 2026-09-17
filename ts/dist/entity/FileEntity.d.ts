import { VercelEntityBase } from '../VercelEntityBase';
import type { VercelSDK } from '../VercelSDK';
import type { Control } from '../types';
import type { File, FileListMatch } from '../VercelTypes';
declare class FileEntity extends VercelEntityBase<File> {
    constructor(client: VercelSDK, entopts: any);
    make(this: FileEntity): FileEntity;
    list(this: any, reqmatch?: FileListMatch, ctrl?: Control): Promise<FileEntity[]>;
}
export { FileEntity };
