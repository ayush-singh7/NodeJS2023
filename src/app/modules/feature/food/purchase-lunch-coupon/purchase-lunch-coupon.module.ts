import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseLunchCouponRoutingModule } from './purchase-lunch-coupon-routing.module';
import { PurchaseLunchCouponComponent } from './purchase-lunch-coupon.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LunchCalendarModule } from '../lunch-calendar/lunch-calendar.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CouponLegendModule } from '../coupon-legend/coupon-legend.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PurchaseLunchCouponComponent
  ],
  imports: [
    CommonModule,
    PurchaseLunchCouponRoutingModule,
    MatCheckboxModule,
    LunchCalendarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CouponLegendModule,
    MatIconModule
  ]
})
export class PurchaseLunchCouponModule { }
