import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalReferencesComponent } from './personal-references.component';

describe('PersonalReferencesComponent', () => {
  let component: PersonalReferencesComponent;
  let fixture: ComponentFixture<PersonalReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
