import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterApplicationComponent } from './filter-application.component';

describe('FilterApplicationComponent', () => {
  let component: FilterApplicationComponent;
  let fixture: ComponentFixture<FilterApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
