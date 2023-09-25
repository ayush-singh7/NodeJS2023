import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsTraineeRoutingModule } from './training-details-trainee-routing.module';
import { TrainingDetailsTraineeComponent } from './training-details-trainee.component';


@NgModule({
  declarations: [
    TrainingDetailsTraineeComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsTraineeRoutingModule
  ]
})
export class TrainingDetailsTraineeModule { }
