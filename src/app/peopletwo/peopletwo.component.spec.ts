import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopletwoComponent } from './peopletwo.component';

describe('PeopletwoComponent', () => {
  let component: PeopletwoComponent;
  let fixture: ComponentFixture<PeopletwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopletwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
