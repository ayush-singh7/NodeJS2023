import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPipePipe } from './calendar-pipe.pipe';



@NgModule({
  declarations: [
    CalendarPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CalendarPipePipe
  ]
})
export class CalendarPipeModule { }
