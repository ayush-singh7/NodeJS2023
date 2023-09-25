import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewStatusPipe } from './interview-status.pipe';



@NgModule({
  declarations: [
    InterviewStatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InterviewStatusPipe
  ]
})
export class InterviewStatusModule { }
