import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpAgreementSignatureComponent } from './ep-agreement-signature.component';

describe('EpAgreementSignatureComponent', () => {
  let component: EpAgreementSignatureComponent;
  let fixture: ComponentFixture<EpAgreementSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpAgreementSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpAgreementSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
