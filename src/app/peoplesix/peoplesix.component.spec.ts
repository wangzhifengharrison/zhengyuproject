import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesixComponent } from './peoplesix.component';

describe('PeoplesixComponent', () => {
  let component: PeoplesixComponent;
  let fixture: ComponentFixture<PeoplesixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
