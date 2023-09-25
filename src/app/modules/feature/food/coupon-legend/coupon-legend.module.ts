import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponLegendComponent } from './coupon-legend.component';



@NgModule({
  declarations: [
    CouponLegendComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CouponLegendComponent
  ]
})
export class CouponLegendModule { }
