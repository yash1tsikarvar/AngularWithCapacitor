import {inject, TestBed} from '@angular/core/testing';

import {UploadDocumentsGuard} from './upload-documents.guard';

describe('UploadDocumentsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadDocumentsGuard]
    });
  });

  it('should ...', inject([UploadDocumentsGuard], (guard: UploadDocumentsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
