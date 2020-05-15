import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualNarrativeComponent } from './visual-narrative.component';

describe('VisualNarrativeComponent', () => {
  let component: VisualNarrativeComponent;
  let fixture: ComponentFixture<VisualNarrativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualNarrativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualNarrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
