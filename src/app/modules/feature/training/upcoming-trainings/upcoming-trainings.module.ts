import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingsRoutingModule } from './upcoming-trainings-routing.module';
import { UpcomingTrainingsComponent } from './upcoming-trainings.component';
import { UpcomingTrainingCardComponent } from './upcoming-training-card/upcoming-training-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    UpcomingTrainingsComponent,
    UpcomingTrainingCardComponent
  ],
  imports: [
    CommonModule,
    UpcomingTrainingsRoutingModule,
    MatDialogModule,
    FooterModule
  ]
})
export class UpcomingTrainingsModule { }
