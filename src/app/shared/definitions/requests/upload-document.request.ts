import {TenantFile} from '../models/tenant-file.interface';

export interface UploadDocumentRequest extends TenantFile {
  documentTaskId: number;
  comment: string;
  isBackId: boolean;
}
