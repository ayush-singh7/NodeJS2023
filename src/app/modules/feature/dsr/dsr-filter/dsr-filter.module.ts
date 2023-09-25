import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './dsr-filter-component';
import { FilterModule } from 'src/app/modules/shared/common-table/filter/filter.module';
import { DropdownFilterModule } from 'src/app/modules/shared/dropdown-filter/dropdown-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/modules/shared/date-filter/date-filter.module';



@NgModule({
  declarations: [
    SearchFilterComponent
  ],
  imports: [
    CommonModule,
    FilterModule,
    ReactiveFormsModule,
    DropdownFilterModule,
    DateFilterModule
  ],
  exports:[
    SearchFilterComponent
  ]
})
export class DsrFilterModule { }
