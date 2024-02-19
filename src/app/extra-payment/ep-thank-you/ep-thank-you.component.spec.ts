import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpThankYouComponent } from './ep-thank-you.component';

describe('EpThankYouComponent', () => {
  let component: EpThankYouComponent;
  let fixture: ComponentFixture<EpThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
