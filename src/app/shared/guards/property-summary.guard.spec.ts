import { TestBed, async, inject } from '@angular/core/testing';

import { PropertySummaryGuard } from './property-summary.guard';

describe('PropertySummaryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertySummaryGuard]
    });
  });

  it('should ...', inject([PropertySummaryGuard], (guard: PropertySummaryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
