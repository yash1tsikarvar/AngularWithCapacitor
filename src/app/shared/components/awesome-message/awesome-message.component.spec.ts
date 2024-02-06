import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeMessageComponent } from './awesome-message.component';

describe('AwesomeMessageComponent', () => {
  let component: AwesomeMessageComponent;
  let fixture: ComponentFixture<AwesomeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
