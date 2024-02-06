import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyFriendInfoComponent } from './family-friend-info.component';

describe('FamilyFriendInfoComponent', () => {
  let component: FamilyFriendInfoComponent;
  let fixture: ComponentFixture<FamilyFriendInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyFriendInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyFriendInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
