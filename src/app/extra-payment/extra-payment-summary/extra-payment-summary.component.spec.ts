import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPaymentSummaryComponent } from './extra-payment-summary.component';

describe('ExtraPaymentSummaryComponent', () => {
  let component: ExtraPaymentSummaryComponent;
  let fixture: ComponentFixture<ExtraPaymentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraPaymentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraPaymentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
