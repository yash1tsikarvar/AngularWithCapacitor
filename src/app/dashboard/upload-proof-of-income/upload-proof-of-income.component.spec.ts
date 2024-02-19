import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProofOfIncomeComponent } from './upload-proof-of-income.component';

describe('UploadProofOfIncomeComponent', () => {
  let component: UploadProofOfIncomeComponent;
  let fixture: ComponentFixture<UploadProofOfIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProofOfIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProofOfIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
