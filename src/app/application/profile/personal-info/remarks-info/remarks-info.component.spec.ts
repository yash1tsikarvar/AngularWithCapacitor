import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksInfoComponent } from './remarks-info.component';

describe('RemarksInfoComponent', () => {
  let component: RemarksInfoComponent;
  let fixture: ComponentFixture<RemarksInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarksInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
