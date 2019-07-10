import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleoneComponent } from './peopleone.component';

describe('PeopleoneComponent', () => {
  let component: PeopleoneComponent;
  let fixture: ComponentFixture<PeopleoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
