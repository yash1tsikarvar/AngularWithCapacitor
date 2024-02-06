import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinicityNavComponent } from './finicity-nav.component';

describe('FinicityNavComponent', () => {
  let component: FinicityNavComponent;
  let fixture: ComponentFixture<FinicityNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinicityNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinicityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
