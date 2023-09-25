import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentNamePipe } from './department-name.pipe';



@NgModule({
  declarations: [
    DepartmentNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DepartmentNamePipe
  ]
})
export class DepartmentNameModule { }
