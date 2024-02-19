import { inject, TestBed } from '@angular/core/testing';

import { ExtraPaymentGuard } from './extra-payment.guard';

describe('ExtraPaymentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtraPaymentGuard]
    });
  });

  it('should ...', inject([ExtraPaymentGuard], (guard: ExtraPaymentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
