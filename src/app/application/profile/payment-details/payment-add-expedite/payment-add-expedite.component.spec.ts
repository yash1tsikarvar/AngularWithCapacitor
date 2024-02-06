import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAddExpediteComponent } from './payment-add-expedite.component';

describe('PaymentAddExpediteComponent', () => {
  let component: PaymentAddExpediteComponent;
  let fixture: ComponentFixture<PaymentAddExpediteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentAddExpediteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAddExpediteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
