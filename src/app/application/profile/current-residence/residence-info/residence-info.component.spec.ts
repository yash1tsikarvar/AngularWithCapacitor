import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceInfoComponent } from './residence-info.component';

describe('ResidenceInfoComponent', () => {
  let component: ResidenceInfoComponent;
  let fixture: ComponentFixture<ResidenceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
