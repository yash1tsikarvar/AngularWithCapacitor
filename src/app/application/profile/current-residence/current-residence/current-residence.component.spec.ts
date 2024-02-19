import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentResidenceComponent } from './current-residence.component';

describe('CurrentResidenceComponent', () => {
  let component: CurrentResidenceComponent;
  let fixture: ComponentFixture<CurrentResidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentResidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
