import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopletenComponent } from './peopleten.component';

describe('PeopletenComponent', () => {
  let component: PeopletenComponent;
  let fixture: ComponentFixture<PeopletenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopletenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopletenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
