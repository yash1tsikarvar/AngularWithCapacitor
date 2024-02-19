import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditePayComponent } from './expedite-pay.component';

describe('ExpeditePayComponent', () => {
  let component: ExpeditePayComponent;
  let fixture: ComponentFixture<ExpeditePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
