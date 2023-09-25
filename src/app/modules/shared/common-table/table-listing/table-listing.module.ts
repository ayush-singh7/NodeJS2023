import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListingComponent } from './table-listing.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { DsrFilterModule } from 'src/app/modules/feature/dsr/dsr-filter/dsr-filter.module';
import { AppComponent } from 'src/app/app.component';
import { InterviewFilterModule } from 'src/app/modules/feature/recruitment/interview/interview-filter/interview-filter.module';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { PaginatorModelModule } from 'src/app/directives/paginator-model/paginator-model.module';
import { NoDataModule } from '../../no-data/no-data.module';



@NgModule({
  declarations: [
    TableListingComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    DsrFilterModule,
    InterviewFilterModule,
    SearchFilterModule,
    PaginatorModelModule,
    NoDataModule
  ],
  exports: [
    TableListingComponent,
    DsrFilterModule,
  ],

})
export class TableListingModule { }
