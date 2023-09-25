import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from './common-input.component';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CommonInputComponent
  ],
  imports: [
    CommonModule,
    ShowErrorModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class CommonInputModule { }
