import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnerRoutingModule } from './dinner-routing.module';
import { DinnerComponent } from './dinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputDateModule } from 'src/app/modules/shared/input-date/input-date.module';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DinnerComponent
  ],
  imports: [
    CommonModule,
    DinnerRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputDateModule,
    MatNativeDateModule,
    AngularEditorModule,
    HttpClientModule
  ]
})
export class DinnerModule { }
