import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponLegendComponent } from './coupon-legend.component';

describe('CouponLegendComponent', () => {
  let component: CouponLegendComponent;
  let fixture: ComponentFixture<CouponLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponLegendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
