import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InReviewDocumentsComponent} from './in-review-documents.component';

describe('InReviewDocumentsComponent', () => {
  let component: InReviewDocumentsComponent;
  let fixture: ComponentFixture<InReviewDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InReviewDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InReviewDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
