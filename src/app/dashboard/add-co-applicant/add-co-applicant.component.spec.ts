import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoApplicantComponent } from './add-co-applicant.component';

describe('AddCoApplicantComponent', () => {
  let component: AddCoApplicantComponent;
  let fixture: ComponentFixture<AddCoApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
