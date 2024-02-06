import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateInfoComponent } from './real-estate-info.component';

describe('RealStateInfoComponent', () => {
  let component: RealEstateInfoComponent;
  let fixture: ComponentFixture<RealEstateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
