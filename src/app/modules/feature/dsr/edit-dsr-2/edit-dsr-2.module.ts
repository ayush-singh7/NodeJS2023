import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-dsr-2-routing.module';
import { EditComponent } from './edit-dsr-2.component';
import { DropdownFilterModule } from 'src/app/modules/shared/dropdown-filter/dropdown-filter.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropdownSearchModule } from 'src/app/modules/shared/dropdown-search/dropdown-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDateModule } from 'src/app/modules/shared/input-date/input-date.module';
import { InputTimeModule } from 'src/app/modules/shared/input-time/input-time.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    DropdownFilterModule,
    MatFormFieldModule,
    DropdownSearchModule,
    ReactiveFormsModule,
    InputDateModule,
    InputTimeModule,
    AngularEditorModule,
    HttpClientModule
  ]
})
export class EditModule { }
