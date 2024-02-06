import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundApplicationComponent } from './refund-application.component';

describe('RefundApplicationComponent', () => {
  let component: RefundApplicationComponent;
  let fixture: ComponentFixture<RefundApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
