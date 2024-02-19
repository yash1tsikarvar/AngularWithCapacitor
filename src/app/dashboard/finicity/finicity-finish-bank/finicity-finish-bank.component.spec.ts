import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinicityFinishBankComponent } from './finicity-finish-bank.component';

describe('FinicityFinishBankComponent', () => {
  let component: FinicityFinishBankComponent;
  let fixture: ComponentFixture<FinicityFinishBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinicityFinishBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinicityFinishBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
