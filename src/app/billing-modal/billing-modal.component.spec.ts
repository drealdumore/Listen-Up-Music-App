import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingModalComponent } from './billing-modal.component';

describe('BillingModalComponent', () => {
  let component: BillingModalComponent;
  let fixture: ComponentFixture<BillingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingModalComponent]
    });
    fixture = TestBed.createComponent(BillingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
