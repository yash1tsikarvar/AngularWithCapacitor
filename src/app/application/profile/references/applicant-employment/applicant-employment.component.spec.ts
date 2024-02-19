import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantEmploymentComponent } from './applicant-employment.component';

describe('ApplicantEmploymentComponent', () => {
  let component: ApplicantEmploymentComponent;
  let fixture: ComponentFixture<ApplicantEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
