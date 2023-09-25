import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchCalendarComponent } from './lunch-calendar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CouponLegendModule } from '../coupon-legend/coupon-legend.module';
import { CalendarPipeModule } from 'src/app/pipes/calendar-pipes/calendar-pipe.module';



@NgModule({
  declarations: [
    LunchCalendarComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    CouponLegendModule,
    CalendarPipeModule
  ],
  exports:[
    LunchCalendarComponent
  ]
})
export class LunchCalendarModule { }
