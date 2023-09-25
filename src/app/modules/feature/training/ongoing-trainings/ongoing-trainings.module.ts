import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingTrainingsRoutingModule } from './ongoing-trainings-routing.module';
import { OngoingTrainingsComponent } from './ongoing-trainings.component';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    OngoingTrainingsComponent
  ],
  imports: [
    CommonModule,
    OngoingTrainingsRoutingModule,
    FooterModule
  ]
})
export class OngoingTrainingsModule { }
