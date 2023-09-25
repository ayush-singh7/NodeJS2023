import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningsListRoutingModule } from './openings-list-routing.module';
import { OpeningsListComponent } from './openings-list.component';
import { JobOpeningsModule } from 'src/app/modules/shared/job-openings/job-openings.module';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    OpeningsListComponent
  ],
  imports: [
    CommonModule,
    OpeningsListRoutingModule,
    JobOpeningsModule,
    FooterModule
  ]
})
export class OpeningsListModule { }
