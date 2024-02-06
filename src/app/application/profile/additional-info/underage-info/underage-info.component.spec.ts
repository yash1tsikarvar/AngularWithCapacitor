import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderageInfoComponent } from './underage-info.component';

describe('UnderageInfoComponent', () => {
  let component: UnderageInfoComponent;
  let fixture: ComponentFixture<UnderageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
