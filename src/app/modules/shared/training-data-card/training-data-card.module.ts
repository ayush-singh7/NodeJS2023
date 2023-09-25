import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDataCardComponent } from './training-data-card.component';
import { FooterModule } from '../footer/footer.module';
import { FeedbackFormDialogComponent } from './feedback-form-dialog/feedback-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrainingDataCardComponent,
    FeedbackFormDialogComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ShowErrorModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    TrainingDataCardComponent
  ]
})
export class TrainingDataCardModule { }
