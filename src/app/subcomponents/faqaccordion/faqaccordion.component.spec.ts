import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqaccordionComponent } from './faqaccordion.component';

describe('FaqaccordionComponent', () => {
  let component: FaqaccordionComponent;
  let fixture: ComponentFixture<FaqaccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqaccordionComponent]
    });
    fixture = TestBed.createComponent(FaqaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
