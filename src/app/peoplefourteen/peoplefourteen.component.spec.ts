import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplefourteenComponent } from './peoplefourteen.component';

describe('PeoplefourteenComponent', () => {
  let component: PeoplefourteenComponent;
  let fixture: ComponentFixture<PeoplefourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplefourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplefourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
