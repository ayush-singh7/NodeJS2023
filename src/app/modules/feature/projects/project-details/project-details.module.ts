import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AddTagsComponent } from './add-tags/add-tags.component';
import { MatIconModule } from '@angular/material/icon';
import { OverviewComponent } from './overview/overview.component';
import { NotesComponent } from './notes/notes.component';
import { DsrReportsComponent } from './dsr-reports/dsr-reports.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';
import { NotesDialogComponent } from './notes/notes-dialog.component';
import { DropdownFilterModule } from 'src/app/modules/shared/dropdown-filter/dropdown-filter.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DropdownSearchModule } from 'src/app/modules/shared/dropdown-search/dropdown-search.module';

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    AddTagsComponent,
    OverviewComponent,
    NotesComponent,
    DsrReportsComponent,
    NotesDialogComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    CommonTableModule,
    TableListingModule,
    DropdownFilterModule,
    MatDatepickerModule,
    NativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    DropdownSearchModule

  ]
})
export class ProjectDetailsModule { }
