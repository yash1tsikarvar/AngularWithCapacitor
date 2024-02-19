import { TestBed, inject } from '@angular/core/testing';

import { ProfileFormService } from './profile-form.service';

describe('ProfileFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileFormService]
    });
  });

  it('should be created', inject([ProfileFormService], (service: ProfileFormService) => {
    expect(service).toBeTruthy();
  }));
});
