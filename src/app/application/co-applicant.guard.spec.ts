import { TestBed, async, inject } from '@angular/core/testing';

import { CoApplicantGuard } from './co-applicant.guard';

describe('CoApplicantGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoApplicantGuard]
    });
  });

  it('should ...', inject([CoApplicantGuard], (guard: CoApplicantGuard) => {
    expect(guard).toBeTruthy();
  }));
});
