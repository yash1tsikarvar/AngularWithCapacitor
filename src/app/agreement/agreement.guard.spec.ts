import { TestBed, async, inject } from '@angular/core/testing';

import { AgreementGuard } from './agreement.guard';

describe('AgreementGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgreementGuard]
    });
  });

  it('should ...', inject([AgreementGuard], (guard: AgreementGuard) => {
    expect(guard).toBeTruthy();
  }));
});
