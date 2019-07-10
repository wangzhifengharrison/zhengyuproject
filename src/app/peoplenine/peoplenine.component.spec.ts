import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplenineComponent } from './peoplenine.component';

describe('PeoplenineComponent', () => {
  let component: PeoplenineComponent;
  let fixture: ComponentFixture<PeoplenineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplenineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplenineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
