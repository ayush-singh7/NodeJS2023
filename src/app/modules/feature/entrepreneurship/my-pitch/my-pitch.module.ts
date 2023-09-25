import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPitchRoutingModule } from './my-pitch-routing.module';
import { MyPitchComponent } from './my-pitch/my-pitch.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';


@NgModule({
  declarations: [
    MyPitchComponent
  ],
  imports: [
    CommonModule,
    MyPitchRoutingModule,
    CommonTableModule,
    TableListingModule
  ]
})
export class MyPitchModule { }
