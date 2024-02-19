import { TestBed, inject } from '@angular/core/testing';

import { HelpscoutService } from './helpscout.service';

describe('HelpscoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelpscoutService]
    });
  });

  it('should be created', inject([HelpscoutService], (service: HelpscoutService) => {
    expect(service).toBeTruthy();
  }));
});
