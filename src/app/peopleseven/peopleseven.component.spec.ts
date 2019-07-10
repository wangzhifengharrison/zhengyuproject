import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesevenComponent } from './peopleseven.component';

describe('PeoplesevenComponent', () => {
  let component: PeoplesevenComponent;
  let fixture: ComponentFixture<PeoplesevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
