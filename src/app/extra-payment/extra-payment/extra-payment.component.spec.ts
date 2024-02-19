import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPaymentComponent } from './extra-payment.component';

describe('ExtraPaymentComponent', () => {
  let component: ExtraPaymentComponent;
  let fixture: ComponentFixture<ExtraPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
