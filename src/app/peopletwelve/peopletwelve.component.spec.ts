import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopletwelveComponent } from './peopletwelve.component';

describe('PeopletwelveComponent', () => {
  let component: PeopletwelveComponent;
  let fixture: ComponentFixture<PeopletwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopletwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopletwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
