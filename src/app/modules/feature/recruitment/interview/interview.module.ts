import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './interview.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { ForDirectiveModule } from 'src/app/modules/shared/common-table/for-directive/for-directive.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';
import { InterviewStatusModule } from 'src/app/pipes/interview-status/interview-status.module';
import { DepartmentNameModule } from 'src/app/pipes/department-name/department-name.module';


@NgModule({
  declarations: [
    InterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    CommonTableModule,
    ForDirectiveModule,
    TableListingModule,
    InterviewStatusModule,
    DepartmentNameModule
  ]
})
export class InterviewModule { }
