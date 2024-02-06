import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompletedItemsComponent} from './completed-items.component';

describe('CompletedItemsComponent', () => {
  let component: CompletedItemsComponent;
  let fixture: ComponentFixture<CompletedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
