import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIdApplicantComponent } from './update-id-applicant.component';

describe('UpdateIdApplicantComponent', () => {
  let component: UpdateIdApplicantComponent;
  let fixture: ComponentFixture<UpdateIdApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateIdApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIdApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
