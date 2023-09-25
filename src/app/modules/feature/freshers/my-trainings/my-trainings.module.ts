import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { TrainingDataCardModule } from 'src/app/modules/shared/training-data-card/training-data-card.module';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    MyTrainingsComponent
  ],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule,
    TrainingDataCardModule,
    FooterModule
  
  ],
  exports:[
    MyTrainingsComponent
  ]
})
export class MyTrainingsModule { }
