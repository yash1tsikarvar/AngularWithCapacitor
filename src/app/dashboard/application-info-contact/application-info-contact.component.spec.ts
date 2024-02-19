import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApplicationInfoContactComponent} from './application-info-contact.component';

describe('ApplicationInfoContactComponent', () => {
  let component: ApplicationInfoContactComponent;
  let fixture: ComponentFixture<ApplicationInfoContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationInfoContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationInfoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
