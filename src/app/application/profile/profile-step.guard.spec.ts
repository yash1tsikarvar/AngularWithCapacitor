import { TestBed, async, inject } from '@angular/core/testing';

import { ProfileStepGuard } from './profile-step.guard';

describe('ProfileStepGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileStepGuard]
    });
  });

  it('should ...', inject([ProfileStepGuard], (guard: ProfileStepGuard) => {
    expect(guard).toBeTruthy();
  }));
});
