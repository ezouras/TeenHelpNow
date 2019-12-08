import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoSectionComponent } from './team-info-section.component';

describe('TeamInfoSectionComponent', () => {
  let component: TeamInfoSectionComponent;
  let fixture: ComponentFixture<TeamInfoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
