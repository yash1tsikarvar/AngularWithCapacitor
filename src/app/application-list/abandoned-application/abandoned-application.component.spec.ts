import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedApplicationComponent } from './abandoned-application.component';

describe('AbandonedApplicationComponent', () => {
  let component: AbandonedApplicationComponent;
  let fixture: ComponentFixture<AbandonedApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbandonedApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbandonedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


