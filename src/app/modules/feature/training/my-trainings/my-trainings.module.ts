import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { RequestTrainingComponent } from './request-training/request-training.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropdownSearchModule } from 'src/app/modules/shared/dropdown-search/dropdown-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    MyTrainingsComponent,
    RequestTrainingComponent
  ],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    DropdownSearchModule,
    ReactiveFormsModule,
    MatDialogModule,
    ShowErrorModule,
    MatRadioModule
  ]
})
export class MyTrainingsModule { }
