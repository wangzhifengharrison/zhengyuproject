import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplethirteenComponent } from './peoplethirteen.component';

describe('PeoplethirteenComponent', () => {
  let component: PeoplethirteenComponent;
  let fixture: ComponentFixture<PeoplethirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplethirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplethirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
