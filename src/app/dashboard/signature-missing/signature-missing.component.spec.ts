import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureMissingComponent } from './signature-missing.component';

describe('SignatureMissingComponent', () => {
  let component: SignatureMissingComponent;
  let fixture: ComponentFixture<SignatureMissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureMissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
