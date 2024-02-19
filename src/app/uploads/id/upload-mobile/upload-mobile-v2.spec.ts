import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMobileV2Component } from './upload-mobile-v2.component';

describe('UploadMobileComponent', () => {
  let component: UploadMobileV2Component;
  let fixture: ComponentFixture<UploadMobileV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMobileV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMobileV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
