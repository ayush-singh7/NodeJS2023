import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { CommonTableModule } from '../../shared/common-table/common-table.module';
import { ForDirectiveModule } from '../../shared/common-table/for-directive/for-directive.module';
import { DropdownSearchModule } from '../../shared/dropdown-search/dropdown-search.module';
import { MatIconModule } from '@angular/material/icon';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { HttpClientModule } from '@angular/common/http';
import { TableListingModule } from '../../shared/common-table/table-listing/table-listing.module';
import { FooterModule } from '../../shared/footer/footer.module';
@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    CommonTableModule,
    ForDirectiveModule,
    DropdownSearchModule,
    MatIconModule,
    AngularEditorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ShowErrorModule,
    AngularEditorModule,
   HttpClientModule,
    TableListingModule,
    FooterModule

  ]
})
export class TicketsModule { }
