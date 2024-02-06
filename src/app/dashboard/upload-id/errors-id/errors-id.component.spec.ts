import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsIdComponent } from './errors-id.component';

describe('ErrorsIdComponent', () => {
  let component: ErrorsIdComponent;
  let fixture: ComponentFixture<ErrorsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
