import {TenantFile} from '../models/tenant-file.interface';

export interface UploadBackIdDocumentRequest extends TenantFile {
  documentTaskId: number;
  comment: string;
  isBackId: boolean;
}
