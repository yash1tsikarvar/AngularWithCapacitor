import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMobileComponent } from './upload-mobile.component';

describe('UploadComponent', () => {
  let component: UploadMobileComponent;
  let fixture: ComponentFixture<UploadMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
