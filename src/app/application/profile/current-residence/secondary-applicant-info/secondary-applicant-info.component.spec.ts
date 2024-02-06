import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryApplicantInfoComponent } from './secondary-applicant-info.component';

describe('SecondaryApplicantInfoComponent', () => {
  let component: SecondaryApplicantInfoComponent;
  let fixture: ComponentFixture<SecondaryApplicantInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryApplicantInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryApplicantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
