import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignVideoComponent } from './sign-video.component';

describe('SignVideoComponent', () => {
  let component: SignVideoComponent;
  let fixture: ComponentFixture<SignVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
