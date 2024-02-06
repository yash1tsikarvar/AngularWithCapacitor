import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerVerificationComponent } from './owner-verification.component';

describe('OwnerVerificationComponent', () => {
  let component: OwnerVerificationComponent;
  let fixture: ComponentFixture<OwnerVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
