import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationTitleComponent } from './verification-title.component';

describe('VerificationTitleComponent', () => {
  let component: VerificationTitleComponent;
  let fixture: ComponentFixture<VerificationTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
