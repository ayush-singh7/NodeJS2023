import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorStyleDirective } from './paginator-style.directive';



@NgModule({
  declarations: [
    PaginatorStyleDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginatorStyleDirective
  ]
})
export class PaginatorModelModule { }
