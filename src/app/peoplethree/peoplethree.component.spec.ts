import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplethreeComponent } from './peoplethree.component';

describe('PeoplethreeComponent', () => {
  let component: PeoplethreeComponent;
  let fixture: ComponentFixture<PeoplethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
