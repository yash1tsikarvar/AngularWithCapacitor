import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFinishMessageComponent } from './upload-finish-message.component';

describe('UploadFinishMessageComponent', () => {
  let component: UploadFinishMessageComponent;
  let fixture: ComponentFixture<UploadFinishMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFinishMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFinishMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
