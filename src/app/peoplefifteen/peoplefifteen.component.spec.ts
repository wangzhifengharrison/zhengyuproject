import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplefifteenComponent } from './peoplefifteen.component';

describe('PeoplefifteenComponent', () => {
  let component: PeoplefifteenComponent;
  let fixture: ComponentFixture<PeoplefifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplefifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplefifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
