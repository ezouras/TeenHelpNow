import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBottomOverviewComponent } from './home-bottom-overview.component';

describe('HomeBottomOverviewComponent', () => {
  let component: HomeBottomOverviewComponent;
  let fixture: ComponentFixture<HomeBottomOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBottomOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBottomOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
