import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WhiteLabelFooterComponent} from './white-label-footer.component';

describe('WhiteLabelFooterComponent', () => {
  let component: WhiteLabelFooterComponent;
  let fixture: ComponentFixture<WhiteLabelFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteLabelFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteLabelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
