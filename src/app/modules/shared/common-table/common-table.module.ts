import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './common-table.component';
import {MatTableModule} from '@angular/material/table';
import { ForDirectiveModule } from './for-directive/for-directive.module';



@NgModule({
  declarations: [
    CommonTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ForDirectiveModule
  ],
  exports: [
    CommonTableComponent
  ]
})
export class CommonTableModule { }
