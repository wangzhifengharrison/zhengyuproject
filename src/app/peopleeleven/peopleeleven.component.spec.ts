import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleelevenComponent } from './peopleeleven.component';

describe('PeopleelevenComponent', () => {
  let component: PeopleelevenComponent;
  let fixture: ComponentFixture<PeopleelevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleelevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleelevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
