import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LunchCalendarModule } from './lunch-calendar/lunch-calendar.module';
import { CouponLegendModule } from './coupon-legend/coupon-legend.module';
import { CouponsHistoryComponent } from './coupons-history/coupons-history.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FoodComponent,
    CouponsHistoryComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    LunchCalendarModule,
    CouponLegendModule,
    MatDialogModule  
  ]
})
export class FoodModule { }
