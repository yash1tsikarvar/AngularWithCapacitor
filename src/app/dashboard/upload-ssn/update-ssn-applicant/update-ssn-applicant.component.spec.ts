import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSsnApplicantComponent } from './update-ssn-applicant.component';

describe('UpdateSsnApplicantComponent', () => {
  let component: UpdateSsnApplicantComponent;
  let fixture: ComponentFixture<UpdateSsnApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSsnApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSsnApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
