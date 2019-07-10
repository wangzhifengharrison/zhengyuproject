import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesixteenComponent } from './peoplesixteen.component';

describe('PeoplesixteenComponent', () => {
  let component: PeoplesixteenComponent;
  let fixture: ComponentFixture<PeoplesixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesixteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
