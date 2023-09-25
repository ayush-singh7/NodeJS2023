import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOpeningsComponent } from './job-openings.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { ReferCandidateComponent } from './refer-candidate/refer-candidate.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReferCandidateModule } from './refer-candidate/refer-candidate.module';



@NgModule({
  declarations: [
    JobOpeningsComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
   
    ReferCandidateModule
  ],
  exports:[
    JobOpeningsComponent
  ]
})
export class JobOpeningsModule { }
