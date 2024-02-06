import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinicityErrorComponent } from './finicity-error.component';

describe('FinicityErrorComponent', () => {
  let component: FinicityErrorComponent;
  let fixture: ComponentFixture<FinicityErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinicityErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinicityErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
