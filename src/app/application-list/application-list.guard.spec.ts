import { TestBed, async, inject } from '@angular/core/testing';

import { ApplicationListGuard } from './application-list.guard';

describe('ApplicationListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationListGuard]
    });
  });

  it('should ...', inject([ApplicationListGuard], (guard: ApplicationListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
