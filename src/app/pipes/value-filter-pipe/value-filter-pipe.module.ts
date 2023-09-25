import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueFilterPipePipe } from './value-filter-pipe.pipe';



@NgModule({
  declarations: [
    ValueFilterPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValueFilterPipePipe
  ]
})
export class ValueFilterPipeModule { }
