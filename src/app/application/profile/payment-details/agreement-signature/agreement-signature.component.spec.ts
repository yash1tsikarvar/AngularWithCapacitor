import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementSignatureComponent } from './agreement-signature.component';

describe('AgreementSignatureComponent', () => {
  let component: AgreementSignatureComponent;
  let fixture: ComponentFixture<AgreementSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
