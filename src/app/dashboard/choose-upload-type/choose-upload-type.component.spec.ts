import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUploadTypeComponent } from './choose-upload-type.component';

describe('ChooseUploadTypeComponent', () => {
  let component: ChooseUploadTypeComponent;
  let fixture: ComponentFixture<ChooseUploadTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseUploadTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseUploadTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
