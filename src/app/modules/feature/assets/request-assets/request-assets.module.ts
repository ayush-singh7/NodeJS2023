import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetsRoutingModule } from './request-assets-routing.module';
import { RequestAssetsComponent } from './request-assets.component';
import { AddNewAssetRequestComponent } from './add-new-asset-request/add-new-asset-request.component';
import { MatButtonModule } from '@angular/material/button';
import { DropdownSearchModule } from 'src/app/modules/shared/dropdown-search/dropdown-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { InputDateModule } from 'src/app/modules/shared/input-date/input-date.module';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { ForDirectiveModule } from 'src/app/modules/shared/common-table/for-directive/for-directive.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    RequestAssetsComponent,
    AddNewAssetRequestComponent
  ],
  imports: [
    CommonModule,
    RequestAssetsRoutingModule,
    MatButtonModule,
    DropdownSearchModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    InputDateModule,
    MatNativeDateModule,
    CommonTableModule,
    ForDirectiveModule,
    TableListingModule,
    TableListingModule,
    ShowErrorModule,
    FooterModule

  ]
})
export class RequestAssetsModule { }
