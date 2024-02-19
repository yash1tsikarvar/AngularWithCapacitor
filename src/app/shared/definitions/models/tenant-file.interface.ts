import {DocumentType} from './document-task.model';

export interface TenantFile {
  filename: string;
  fileMimeType: string;
  fileData: string;
  fileSize?: number;
  percentageUploaded?: string;
  documentTaskId?: number;
  message: string;
  doAutoSanitizer?: boolean;
  secondRetry?: boolean;
  allowed_uploaded?: boolean;
  uploadCode: UploadCode;
  uploadByType:  'A';
  checkExpired?: boolean;
  forceUpload?: boolean;
  idDocumentType?: DocumentType;
}

export type UploadCode = 'none' | 'id' | 'id-v2' | 'ssn' | 'pet-photo' | 'vehicle-registration';

