import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoApplicantsComponent } from './co-applicants.component';

describe('CoApplicantsComponent', () => {
  let component: CoApplicantsComponent;
  let fixture: ComponentFixture<CoApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
