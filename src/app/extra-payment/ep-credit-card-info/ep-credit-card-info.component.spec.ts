import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpCreditCardInfoComponent } from './ep-credit-card-info.component';

describe('EpCreditCardInfoComponent', () => {
  let component: EpCreditCardInfoComponent;
  let fixture: ComponentFixture<EpCreditCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpCreditCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpCreditCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
