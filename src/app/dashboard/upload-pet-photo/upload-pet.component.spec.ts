import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadPetComponent} from './upload-pet.component';

describe('UploadIdComponent', () => {
  let component: UploadPetComponent;
  let fixture: ComponentFixture<UploadPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadPetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
