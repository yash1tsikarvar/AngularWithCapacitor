import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedApplicationComponent } from './closed-application.component';

describe('ClosedApplicationComponent', () => {
  let component: ClosedApplicationComponent;
  let fixture: ComponentFixture<ClosedApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
