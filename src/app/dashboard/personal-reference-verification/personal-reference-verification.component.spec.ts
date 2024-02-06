import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalReferenceVerificationComponent } from './personal-reference-verification.component';

describe('PersonalReferenceVerificationComponent', () => {
  let component: PersonalReferenceVerificationComponent;
  let fixture: ComponentFixture<PersonalReferenceVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalReferenceVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalReferenceVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
