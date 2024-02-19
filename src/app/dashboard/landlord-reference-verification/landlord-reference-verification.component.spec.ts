import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordReferenceVerificationComponent } from './landlord-reference-verification.component';

describe('LandlordReferenceVerificationComponent', () => {
  let component: LandlordReferenceVerificationComponent;
  let fixture: ComponentFixture<LandlordReferenceVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordReferenceVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordReferenceVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
