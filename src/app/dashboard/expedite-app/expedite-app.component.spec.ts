import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpediteAppComponent } from './expedite-app.component';

describe('ExpediteAppComponent', () => {
  let component: ExpediteAppComponent;
  let fixture: ComponentFixture<ExpediteAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpediteAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpediteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
