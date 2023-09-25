import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseLunchCouponComponent } from './purchase-lunch-coupon.component';

describe('PurchaseLunchCouponComponent', () => {
  let component: PurchaseLunchCouponComponent;
  let fixture: ComponentFixture<PurchaseLunchCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseLunchCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseLunchCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
