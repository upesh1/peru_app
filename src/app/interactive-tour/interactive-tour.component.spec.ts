import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveTourComponent } from './interactive-tour.component';

describe('InteractiveTourComponent', () => {
  let component: InteractiveTourComponent;
  let fixture: ComponentFixture<InteractiveTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
