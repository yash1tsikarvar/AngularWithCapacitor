import { TestBed, async, inject } from '@angular/core/testing';

import { UserNotLoggedInGuard } from './user-not-logged-in.guard';

describe('UserNotLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotLoggedInGuard]
    });
  });

  it('should ...', inject([UserNotLoggedInGuard], (guard: UserNotLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
