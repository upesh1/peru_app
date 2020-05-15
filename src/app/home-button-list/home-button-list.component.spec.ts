import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButtonListComponent } from './home-button-list.component';

describe('HomeButtonListComponent', () => {
  let component: HomeButtonListComponent;
  let fixture: ComponentFixture<HomeButtonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeButtonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
