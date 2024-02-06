import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWithIconComponent } from './message-with-icon.component';

describe('MessageWithIconComponent', () => {
  let component: MessageWithIconComponent;
  let fixture: ComponentFixture<MessageWithIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageWithIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
