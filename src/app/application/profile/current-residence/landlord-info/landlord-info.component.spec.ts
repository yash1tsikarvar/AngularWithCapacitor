import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordInfoComponent } from './landlord-info.component';

describe('LandlordInfoComponent', () => {
  let component: LandlordInfoComponent;
  let fixture: ComponentFixture<LandlordInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
