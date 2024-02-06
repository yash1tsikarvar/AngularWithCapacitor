import {inject, TestBed} from '@angular/core/testing';

import {LegacyUrlGuardGuard} from './legacy-url-guard.guard';

describe('LegacyUrlGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegacyUrlGuardGuard]
    });
  });

  it('should ...', inject([LegacyUrlGuardGuard], (guard: LegacyUrlGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
