import { inject, TestBed } from '@angular/core/testing';

import { RefundApplicationGuard } from './refund-application.guard';

describe('RefundApplicationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefundApplicationGuard]
    });
  });

  it('should ...', inject([RefundApplicationGuard], (guard: RefundApplicationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
