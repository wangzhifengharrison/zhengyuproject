import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplefiveComponent } from './peoplefive.component';

describe('PeoplefiveComponent', () => {
  let component: PeoplefiveComponent;
  let fixture: ComponentFixture<PeoplefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
