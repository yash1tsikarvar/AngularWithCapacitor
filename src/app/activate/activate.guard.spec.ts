import {inject, TestBed} from '@angular/core/testing';

import {ActivateGuard} from './activate.guard';

describe('ActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateGuard]
    });
  });

  it('should ...', inject([ActivateGuard], (guard: ActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
