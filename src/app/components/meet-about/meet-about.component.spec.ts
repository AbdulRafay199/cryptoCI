import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetAboutComponent } from './meet-about.component';

describe('MeetAboutComponent', () => {
  let component: MeetAboutComponent;
  let fixture: ComponentFixture<MeetAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetAboutComponent]
    });
    fixture = TestBed.createComponent(MeetAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
