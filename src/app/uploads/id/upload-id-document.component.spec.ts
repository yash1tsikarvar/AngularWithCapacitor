import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIdDocumentComponent } from './upload-id-document.component';

describe('UploadIdDocumentComponent', () => {
  let component: UploadIdDocumentComponent;
  let fixture: ComponentFixture<UploadIdDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadIdDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadIdDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
