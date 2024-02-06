import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentReferenceVerificationComponent } from './employment-reference-verification.component';

describe('EmploymentReferenceVerificationComponent', () => {
  let component: EmploymentReferenceVerificationComponent;
  let fixture: ComponentFixture<EmploymentReferenceVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentReferenceVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentReferenceVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
