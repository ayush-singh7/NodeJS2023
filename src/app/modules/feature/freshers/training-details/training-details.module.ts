import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TabTrainingDetailsComponent } from './tab-training-details/tab-training-details.component';
import { TabSubTopicsComponent } from './tab-sub-topics/tab-sub-topics.component';
import { TabAttendanceComponent } from './tab-attendance/tab-attendance.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    TrainingDetailsComponent,
    TabTrainingDetailsComponent,
    TabSubTopicsComponent,
    TabAttendanceComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule,
    MatButtonToggleModule,
    MatTabsModule,
    FooterModule
  ]
})
export class TrainingDetailsModule { }
