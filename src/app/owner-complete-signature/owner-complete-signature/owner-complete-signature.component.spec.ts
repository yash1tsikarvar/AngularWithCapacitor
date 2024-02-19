import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OwnerCompleteSignatureComponent} from './owner-complete-signature.component';

describe('OwnerCompleteSignatureComponent', () => {
  let component: OwnerCompleteSignatureComponent;
  let fixture: ComponentFixture<OwnerCompleteSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerCompleteSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCompleteSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
