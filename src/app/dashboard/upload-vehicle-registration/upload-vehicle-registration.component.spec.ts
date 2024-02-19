import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadVehicleRegistrationComponent} from './upload-vehicle-registration.component';

describe('UploadIdComponent', () => {
  let component: UploadVehicleRegistrationComponent;
  let fixture: ComponentFixture<UploadVehicleRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadVehicleRegistrationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadVehicleRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
