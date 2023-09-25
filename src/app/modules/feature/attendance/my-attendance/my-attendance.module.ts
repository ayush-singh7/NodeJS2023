import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MyAttendanceRoutingModule } from './my-attendance-routing.module';
import { MyAttendanceComponent } from './my-attendance.component';


@NgModule({
  declarations: [
    MyAttendanceComponent
  ],
  imports: [
    CommonModule,
    MyAttendanceRoutingModule,
    FullCalendarModule

  ]
})
export class MyAttendanceModule { }
