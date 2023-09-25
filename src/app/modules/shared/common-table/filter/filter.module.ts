import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    FilterComponent
  ]
})
export class FilterModule { }
