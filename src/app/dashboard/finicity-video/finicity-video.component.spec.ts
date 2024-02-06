import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinicityVideoComponent } from './finicity-video.component';

describe('FinicityVideoComponent', () => {
  let component: FinicityVideoComponent;
  let fixture: ComponentFixture<FinicityVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinicityVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinicityVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
