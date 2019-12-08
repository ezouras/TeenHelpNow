import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSidePaneComponent } from './topic-side-pane.component';

describe('TopicSidePaneComponent', () => {
  let component: TopicSidePaneComponent;
  let fixture: ComponentFixture<TopicSidePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicSidePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSidePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
