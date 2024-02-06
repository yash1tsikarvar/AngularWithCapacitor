import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationFinishComponent } from './verification-finish.component';

describe('VerificationFinishComponent', () => {
  let component: VerificationFinishComponent;
  let fixture: ComponentFixture<VerificationFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
