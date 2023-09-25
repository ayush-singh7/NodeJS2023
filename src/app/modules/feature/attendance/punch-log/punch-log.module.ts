import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchLogRoutingModule } from './punch-log-routing.module';
import { PunchLogComponent } from './punch-log.component';
import { InputDateModule } from 'src/app/modules/shared/input-date/input-date.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    PunchLogComponent
  ],
  imports: [
    CommonModule,
    PunchLogRoutingModule,
    InputDateModule,
    MatFormFieldModule,
    CommonTableModule
  ]
})
export class PunchLogModule { }
