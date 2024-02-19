import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryApplicantInfoComponent } from './primary-applicant-info.component';

describe('PrimaryApplicantInfoComponent', () => {
  let component: PrimaryApplicantInfoComponent;
  let fixture: ComponentFixture<PrimaryApplicantInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryApplicantInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryApplicantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
