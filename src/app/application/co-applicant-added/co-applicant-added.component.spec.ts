import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApplicantAddedComponent } from './co-applicant-added.component';

describe('CoApplicantAddedComponent', () => {
  let component: CoApplicantAddedComponent;
  let fixture: ComponentFixture<CoApplicantAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoApplicantAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoApplicantAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
