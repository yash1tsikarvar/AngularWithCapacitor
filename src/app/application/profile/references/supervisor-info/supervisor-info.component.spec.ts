import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorInfoComponent } from './supervisor-info.component';

describe('SupervisorInfoComponent', () => {
  let component: SupervisorInfoComponent;
  let fixture: ComponentFixture<SupervisorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
