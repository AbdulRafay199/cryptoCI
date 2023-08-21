import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitHomeComponent } from './benefit-home.component';

describe('BenefitHomeComponent', () => {
  let component: BenefitHomeComponent;
  let fixture: ComponentFixture<BenefitHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitHomeComponent]
    });
    fixture = TestBed.createComponent(BenefitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
