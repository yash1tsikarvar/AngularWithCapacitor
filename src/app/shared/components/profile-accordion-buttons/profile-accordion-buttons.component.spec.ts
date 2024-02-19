import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileAccordionButtonsComponent} from './profile-accordion-buttons.component';

describe('ProfileAccordionButtonsComponent', () => {
  let component: ProfileAccordionButtonsComponent;
  let fixture: ComponentFixture<ProfileAccordionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAccordionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccordionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
