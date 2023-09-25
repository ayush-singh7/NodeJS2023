import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRoutingModule } from './holiday-routing.module';
import { HolidayListComponent } from './holiday-list.component';


@NgModule({
  declarations: [
    HolidayListComponent
  ],
  imports: [
    CommonModule,
    HolidayRoutingModule
  ]
})
export class HolidayModule { }
