import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewFilterComponent } from './interview-filter.component';
import { DropdownFilterModule } from 'src/app/modules/shared/dropdown-filter/dropdown-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from 'src/app/modules/shared/common-table/filter/filter.module';



@NgModule({
  declarations: [
    InterviewFilterComponent
  ],
  imports: [
    CommonModule,
    DropdownFilterModule,
    ReactiveFormsModule,
    DropdownFilterModule,
    FilterModule
  ],
  exports:[
    InterviewFilterComponent
  ]
})
export class InterviewFilterModule { }
