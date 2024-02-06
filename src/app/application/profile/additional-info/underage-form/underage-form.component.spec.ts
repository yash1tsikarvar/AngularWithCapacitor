import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderageFormComponent } from './underage-form.component';

describe('UnderageFormComponent', () => {
  let component: UnderageFormComponent;
  let fixture: ComponentFixture<UnderageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
