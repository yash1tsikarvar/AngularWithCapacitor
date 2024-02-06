import { TestBed, async, inject } from '@angular/core/testing';

import { ResumeApplicationGuard } from './resume-application.guard';

describe('ResumeApplicationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeApplicationGuard]
    });
  });

  it('should ...', inject([ResumeApplicationGuard], (guard: ResumeApplicationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
