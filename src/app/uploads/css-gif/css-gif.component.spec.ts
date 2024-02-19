import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGifComponent } from './css-gif.component';

describe('CssGifComponent', () => {
  let component: CssGifComponent;
  let fixture: ComponentFixture<CssGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
