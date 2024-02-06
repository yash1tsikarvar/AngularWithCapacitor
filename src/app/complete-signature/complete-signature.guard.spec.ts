import {inject, TestBed} from '@angular/core/testing';

import {CompleteSignatureGuard} from './complete-signature.guard';

describe('CompleteSignatureGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompleteSignatureGuard]
    });
  });

  it('should ...', inject([CompleteSignatureGuard], (guard: CompleteSignatureGuard) => {
    expect(guard).toBeTruthy();
  }));
});
