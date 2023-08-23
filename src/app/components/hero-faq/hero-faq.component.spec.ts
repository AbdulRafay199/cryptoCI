import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFaqComponent } from './hero-faq.component';

describe('HeroFaqComponent', () => {
  let component: HeroFaqComponent;
  let fixture: ComponentFixture<HeroFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroFaqComponent]
    });
    fixture = TestBed.createComponent(HeroFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
