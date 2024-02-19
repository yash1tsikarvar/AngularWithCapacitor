import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationFooterComponent } from './verification-footer.component';

describe('VerificationFooterComponent', () => {
  let component: VerificationFooterComponent;
  let fixture: ComponentFixture<VerificationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
