import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsectionComponent } from './faqsection.component';

describe('FaqsectionComponent', () => {
  let component: FaqsectionComponent;
  let fixture: ComponentFixture<FaqsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqsectionComponent]
    });
    fixture = TestBed.createComponent(FaqsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
