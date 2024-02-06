import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingMessageComponent } from './uploading-message.component';

describe('AwesomeMessageComponent', () => {
  let component: UploadingMessageComponent;
  let fixture: ComponentFixture<UploadingMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadingMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
