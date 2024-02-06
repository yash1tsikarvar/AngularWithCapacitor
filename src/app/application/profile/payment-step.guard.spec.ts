import { TestBed, async, inject } from '@angular/core/testing';

import { PaymentStepGuard } from './payment-step.guard';

describe('PaymentStepGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentStepGuard]
    });
  });

  it('should ...', inject([PaymentStepGuard], (guard: PaymentStepGuard) => {
    expect(guard).toBeTruthy();
  }));
});
