import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfResidenceComponent } from './type-of-residence.component';

describe('TypeOfResidenceComponent', () => {
  let component: TypeOfResidenceComponent;
  let fixture: ComponentFixture<TypeOfResidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfResidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
