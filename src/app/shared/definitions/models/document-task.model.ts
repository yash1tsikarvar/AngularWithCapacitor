export type DocumentStatus =
  'P'// Waiting for upload -> Additional uploads allowed
  | 'L'//Locked -> No further documents may be uploaded
  | 'U'//Needs PII Review -> May contain personal data - No further documents may be uploaded
  | 'R'//Sanitized -> At least 1 document has been uploaded and reviewed to mask personal data - further documents may not be uploaded
  | 'N'//N/A -> Not Applicable
  | 'C'// Completed//
  ;
export type DocumentCode = ''
  | 'id'// IDS
  | 'id-v2'
  | 'ssn'
  | 'none'
  | 'vehicle-registration'
  | 'proof-of-income'
  | 'contracts';

export type DocumentType = ''
  | 'DRIVER_LICENSE'// IDS
  | 'DRIVER_LICENSE_BACK'
  | 'PASSPORT';

export interface TenantDocument {
  documentId: number;
  fileName: string;
  fileUrl: string;
  message: string;
  isObsolete: boolean;
  imgProcessed?: string;
}

export interface DocumentTask {
  code?: DocumentCode;
  optional: boolean;
  documentTaskId: number;
  name: string;
  description: string;
  multipleFiles: boolean;
  acceptedMimeTypes: string[];
  status: DocumentStatus;
  documents: TenantDocument[];
  rejectionReason?: string;
  plate?: string;
  applicantId?: number;
}
