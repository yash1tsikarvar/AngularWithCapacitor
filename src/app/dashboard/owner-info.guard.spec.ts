import {inject, TestBed} from '@angular/core/testing';

import {OwnerInfoGuard} from './owner-info.guard';

describe('OwnerInfoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerInfoGuard]
    });
  });

  it('should ...', inject([OwnerInfoGuard], (guard: OwnerInfoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
