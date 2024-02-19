import { TestBed, async, inject } from '@angular/core/testing';

import { FeesGuard } from './fees.guard';

describe('FeesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeesGuard]
    });
  });

  it('should ...', inject([FeesGuard], (guard: FeesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
