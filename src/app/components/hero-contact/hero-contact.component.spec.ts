import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContactComponent } from './hero-contact.component';

describe('HeroContactComponent', () => {
  let component: HeroContactComponent;
  let fixture: ComponentFixture<HeroContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroContactComponent]
    });
    fixture = TestBed.createComponent(HeroContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
