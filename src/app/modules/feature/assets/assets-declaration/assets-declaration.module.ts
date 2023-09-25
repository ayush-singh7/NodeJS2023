import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsDeclarationRoutingModule } from './assets-declaration-routing.module';
import { AssetsDeclarationComponent } from './assets-declaration.component';
import { AddNewAssetsDeclarationComponent } from './add-new-assets-declaration/add-new-assets-declaration.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { DropdownSearchModule } from 'src/app/modules/shared/dropdown-search/dropdown-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';
import { ForDirectiveModule } from 'src/app/modules/shared/common-table/for-directive/for-directive.module';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    AssetsDeclarationComponent,
    AddNewAssetsDeclarationComponent
  ],
  imports: [
    CommonModule,
    AssetsDeclarationRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ShowErrorModule,
    DropdownSearchModule,
    ReactiveFormsModule,
    CommonTableModule,
    TableListingModule,
    ForDirectiveModule,
    FooterModule
  ]
})
export class AssetsDeclarationModule { }
