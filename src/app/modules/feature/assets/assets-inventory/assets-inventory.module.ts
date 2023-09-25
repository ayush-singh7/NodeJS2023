import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsInventoryRoutingModule } from './assets-inventory-routing.module';
import { AssetsInventoryComponent } from './assets-inventory.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { MatButtonModule } from '@angular/material/button';
import { ForDirectiveModule } from 'src/app/modules/shared/common-table/for-directive/for-directive.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    AssetsInventoryComponent
  ],
  imports: [
    CommonModule,
    AssetsInventoryRoutingModule,
    CommonTableModule,
    MatButtonModule,
    ForDirectiveModule,
    TableListingModule,
    FooterModule
  ]
})
export class AssetsInventoryModule { }
