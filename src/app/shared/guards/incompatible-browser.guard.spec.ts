import {inject, TestBed} from '@angular/core/testing';

import {IncompatibleBrowserGuard} from './incompatible-browser.guard';

describe('IncompatibleBrowserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncompatibleBrowserGuard]
    });
  });

  it('should ...', inject([IncompatibleBrowserGuard], (guard: IncompatibleBrowserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
