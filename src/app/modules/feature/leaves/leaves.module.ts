import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { InputDateModule } from '../../shared/input-date/input-date.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DropdownSearchModule } from '../../shared/dropdown-search/dropdown-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { CommonTableModule } from '../../shared/common-table/common-table.module';
import { TableListingModule } from '../../shared/common-table/table-listing/table-listing.module';
import { ForDirectiveModule } from '../../shared/common-table/for-directive/for-directive.module';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { FooterModule } from '../../shared/footer/footer.module';
import { LeaveRollbackDialogComponent } from './leave-rollback-dialog/leave-rollback-dialog.component';


@NgModule({
  declarations: [
    LeavesComponent,
    AddLeaveComponent,
    LeaveRollbackDialogComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    InputDateModule,
    MatDatepickerModule,
    DropdownSearchModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ShowErrorModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AngularEditorModule,
    HttpClientModule,
    CommonTableModule,
    TableListingModule,
    ForDirectiveModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    FooterModule
  ]
})
export class LeavesModule { }
