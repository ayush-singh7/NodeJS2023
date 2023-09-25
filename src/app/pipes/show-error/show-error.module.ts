import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorPipe } from './show-error.pipe';



@NgModule({
  declarations: [
    ShowErrorPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShowErrorPipe
  ]
})
export class ShowErrorModule { }
