import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadSsnComponent} from './upload-ssn.component';

describe('UploadIdComponent', () => {
  let component: UploadSsnComponent;
  let fixture: ComponentFixture<UploadSsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadSsnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
