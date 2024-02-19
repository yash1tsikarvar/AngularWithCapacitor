import { TestBed, inject } from '@angular/core/testing';

import { ProfileFormFactoryService } from './profile-form-factory.service';

describe('ProfileFormFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileFormFactoryService]
    });
  });

  it('should be created', inject([ProfileFormFactoryService], (service: ProfileFormFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
