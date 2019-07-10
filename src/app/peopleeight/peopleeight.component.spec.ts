import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleeightComponent } from './peopleeight.component';

describe('PeopleeightComponent', () => {
  let component: PeopleeightComponent;
  let fixture: ComponentFixture<PeopleeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
