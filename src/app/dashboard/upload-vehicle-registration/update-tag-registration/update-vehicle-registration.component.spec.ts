import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleRegistrationComponent } from './update-vehicle-registration.component';

describe('UpdateSsnApplicantComponent', () => {
  let component: UpdateVehicleRegistrationComponent;
  let fixture: ComponentFixture<UpdateVehicleRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVehicleRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
