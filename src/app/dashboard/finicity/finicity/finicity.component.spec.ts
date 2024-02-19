import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinicityComponent } from './finicity.component';

describe('FinicityComponent', () => {
  let component: FinicityComponent;
  let fixture: ComponentFixture<FinicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
