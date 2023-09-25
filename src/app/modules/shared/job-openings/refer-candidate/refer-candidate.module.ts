import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferCandidateComponent } from './refer-candidate.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReferCandidateComponent

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ShowErrorModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    

  ],
  exports:[
    ReferCandidateComponent
  ]
  
})
export class ReferCandidateModule { }
