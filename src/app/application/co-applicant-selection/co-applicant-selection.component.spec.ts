import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApplicantSelectionComponent } from './co-applicant-selection.component';

describe('CoApplicantSelectionComponent', () => {
  let component: CoApplicantSelectionComponent;
  let fixture: ComponentFixture<CoApplicantSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoApplicantSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoApplicantSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
