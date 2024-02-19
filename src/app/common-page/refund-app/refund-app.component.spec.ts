import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundAppComponent } from './refund-app.component';

describe('RefundAppComponent', () => {
  let component: RefundAppComponent;
  let fixture: ComponentFixture<RefundAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
