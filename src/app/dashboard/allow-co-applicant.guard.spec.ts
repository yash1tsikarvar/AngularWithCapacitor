import {inject, TestBed} from '@angular/core/testing';

import {AllowCoApplicantGuard} from './allow-co-applicant.guard';

describe('AllowCoApplicantGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowCoApplicantGuard]
    });
  });

  it('should ...', inject([AllowCoApplicantGuard], (guard: AllowCoApplicantGuard) => {
    expect(guard).toBeTruthy();
  }));
});
