import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualPunchRoutingModule } from './manual-punch-routing.module';
import { ManualPunchComponent } from './manual-punch.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { MatInputModule } from '@angular/material/input';
import { DropdownSearchModule } from 'src/app/modules/shared/dropdown-search/dropdown-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDateModule } from 'src/app/modules/shared/input-date/input-date.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ManualPunchComponent
  ],
  imports: [
    CommonModule,
    ManualPunchRoutingModule,
    MatFormFieldModule,
    CommonTableModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownSearchModule,
    ReactiveFormsModule,
    InputDateModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ]
})
export class ManualPunchModule { }
