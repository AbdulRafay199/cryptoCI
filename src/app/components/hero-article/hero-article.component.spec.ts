import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroArticleComponent } from './hero-article.component';

describe('HeroArticleComponent', () => {
  let component: HeroArticleComponent;
  let fixture: ComponentFixture<HeroArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroArticleComponent]
    });
    fixture = TestBed.createComponent(HeroArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
