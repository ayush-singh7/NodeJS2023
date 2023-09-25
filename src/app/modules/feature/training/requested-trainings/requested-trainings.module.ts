import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingsRoutingModule } from './requested-trainings-routing.module';
import { RequestedTrainingsComponent } from './requested-trainings.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';
import { ForDirectiveModule } from 'src/app/modules/shared/common-table/for-directive/for-directive.module';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';
import { DepartmentNamePipe } from 'src/app/pipes/department-name/department-name.pipe';
import { DepartmentNameModule } from 'src/app/pipes/department-name/department-name.module';


@NgModule({
  declarations: [
    RequestedTrainingsComponent
  ],
  imports: [
    CommonModule,
    RequestedTrainingsRoutingModule,
    CommonTableModule,
    TableListingModule,
    ForDirectiveModule,
    FooterModule,
    DepartmentNameModule
  ]
})
export class RequestedTrainingsModule { }
