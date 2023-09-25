import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { JobOpeningsModule } from '../../shared/job-openings/job-openings.module';
import { CustomCarouselModule } from '../../shared/custom-carousel/custom-carousel.module';
import { NewJoinComponent } from './new-join/new-join.component';
import { NewOpeningsComponent } from './new-openings/new-openings.component';
import { NguCarouselModule } from '@ngu/carousel';
import { AppLatestComponent } from './app-latest/app-latest.component';
import { AppreciateComponent } from './app-latest/appreciate/appreciate.component';
import { AwardsComponent } from './app-latest/awards/awards.component';
import { BirthdaysComponent } from './app-latest/birthdays/birthdays.component';
import { WorkAnniversaryComponent } from './app-latest/work-anniversary/work-anniversary.component';
import { AppGalleryComponent } from './app-gallery/app-gallery.component';
import { GalleryDialogComponent } from './app-gallery/gallery-dialog/gallery-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { NoSpecialCharModule } from 'src/app/directives/no-special-char/no-special-char.module';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { AppreciateMessageDialogComponent } from './app-latest/appreciate/appreciate-message-dialog/appreciate-message-dialog.component';
import { FooterModule } from '../../shared/footer/footer.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NewJoinComponent,
    NewOpeningsComponent,
    AppLatestComponent,
    AppreciateComponent,
    AwardsComponent,
    BirthdaysComponent,
    WorkAnniversaryComponent,
    AppGalleryComponent,
    GalleryDialogComponent,
    AppreciateMessageDialogComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    JobOpeningsModule,
    CustomCarouselModule,
    NguCarouselModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    NoSpecialCharModule,
    ShowErrorModule,
    MatSelectModule,
    FooterModule
    
  ]
})
export class DashboardModule { }
