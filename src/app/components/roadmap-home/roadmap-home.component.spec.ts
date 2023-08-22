import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapHomeComponent } from './roadmap-home.component';

describe('RoadmapHomeComponent', () => {
  let component: RoadmapHomeComponent;
  let fixture: ComponentFixture<RoadmapHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadmapHomeComponent]
    });
    fixture = TestBed.createComponent(RoadmapHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
