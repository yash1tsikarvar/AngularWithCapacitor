import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectShortComponent } from './redirect-short.component';

describe('RedirectShortComponent', () => {
  let component: RedirectShortComponent;
  let fixture: ComponentFixture<RedirectShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
