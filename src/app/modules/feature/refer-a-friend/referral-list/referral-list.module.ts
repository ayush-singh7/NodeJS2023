import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralListRoutingModule } from './referral-list-routing.module';
import { ReferralListComponent } from './referral-list.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { ForDirectiveModule } from 'src/app/modules/shared/common-table/for-directive/for-directive.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';


@NgModule({
  declarations: [
    ReferralListComponent
  ],
  imports: [
    CommonModule,
    ReferralListRoutingModule,
    CommonTableModule,
    ForDirectiveModule,
    TableListingModule
  ]
})
export class ReferralListModule { }
