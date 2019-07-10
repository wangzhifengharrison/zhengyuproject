import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplefourComponent } from './peoplefour.component';

describe('PeoplefourComponent', () => {
  let component: PeoplefourComponent;
  let fixture: ComponentFixture<PeoplefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
