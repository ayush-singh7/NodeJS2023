import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { DsrRoutingModule } from './dsr-routing.module';
import { DsrComponent } from './dsr.component';
import { CommonTableModule } from '../../shared/common-table/common-table.module';
import { ForDirectiveModule } from '../../shared/common-table/for-directive/for-directive.module';
import { TableListingModule } from '../../shared/common-table/table-listing/table-listing.module';
import { SearchFilterComponent } from './dsr-filter/dsr-filter-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from '../../shared/common-table/filter/filter.module';
import { DropdownFilterModule } from '../../shared/dropdown-filter/dropdown-filter.module';
import { DsrFilterModule } from './dsr-filter/dsr-filter.module';
import { CreateDsrComponent } from './create-dsr/create-dsr.component';
import { DropdownSearchModule } from '../../shared/dropdown-search/dropdown-search.module';
import { InputDateModule } from '../../shared/input-date/input-date.module';
import { InputTimeModule } from '../../shared/input-time/input-time.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValueFilterPipeModule } from 'src/app/pipes/value-filter-pipe/value-filter-pipe.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { counterReducer } from './store-dsr/dsr-reducer';


@NgModule({
  declarations: [
    DsrComponent,
    CreateDsrComponent,
  ],
  imports: [
    CommonModule,
    DsrRoutingModule,
    CommonTableModule,
    ForDirectiveModule,
    TableListingModule,
    ReactiveFormsModule,
    FilterModule,
    DropdownFilterModule,
    DsrFilterModule,
    ForDirectiveModule,
    DropdownSearchModule,
    InputDateModule,
    InputTimeModule,
    HttpClientModule,
    AngularEditorModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    FooterModule,
    ValueFilterPipeModule,
    StoreModule.forFeature('count', counterReducer)
    
  ]
})
export class DsrModule { }
