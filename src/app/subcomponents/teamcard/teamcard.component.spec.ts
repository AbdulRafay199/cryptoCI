import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamcardComponent } from './teamcard.component';

describe('TeamcardComponent', () => {
  let component: TeamcardComponent;
  let fixture: ComponentFixture<TeamcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamcardComponent]
    });
    fixture = TestBed.createComponent(TeamcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
