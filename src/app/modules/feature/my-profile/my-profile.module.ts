import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { CarouselModule } from '../../shared/carousel/carousel.module';
import { JobOpeningsModule } from '../../shared/job-openings/job-openings.module';
import { ProfileTopComponent } from './profile-top/profile-top.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfileBasicInfoComponent } from './profile-basic-info/profile-basic-info.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileQualificationsComponent } from './profile-qualifications/profile-qualifications.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProfileChangePasswordComponent } from './profile-change-password/profile-change-password.component';
import { ProfileAppraisalComponent } from './profile-appraisal/profile-appraisal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { CommonTableModule } from '../../shared/common-table/common-table.module';
import { ForDirectiveModule } from '../../shared/common-table/for-directive/for-directive.module';
import { EditQualificationsDialogComponent } from './profile-qualifications/edit-qualifications-dialog/edit-qualifications-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EducationLevelPipeModule } from 'src/app/pipes/education-level-pipe/education-level-pipe.module';
import { ProfileShiftComponent } from './profile-shift/profile-shift.component';
import { FooterModule } from '../../shared/footer/footer.module';
import { DateFilterModule } from '../../shared/date-filter/date-filter.module';
import { DropdownSearchModule } from '../../shared/dropdown-search/dropdown-search.module';
import { InputDateModule } from '../../shared/input-date/input-date.module';
import { TableListingModule } from '../../shared/common-table/table-listing/table-listing.module';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { NoSpecialCharModule } from 'src/app/directives/no-special-char/no-special-char.module';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    MyProfileComponent,
    ProfileTopComponent,
    ProfileBasicInfoComponent,
    ProfilePictureComponent,
    ProfileQualificationsComponent,
    ProfileChangePasswordComponent,
    ProfileAppraisalComponent,
    EditQualificationsDialogComponent,
    ProfileShiftComponent,
    
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    CarouselModule,
    JobOpeningsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ShowErrorModule,
    CommonTableModule,
    ForDirectiveModule,
    ShowErrorModule,
    MatDialogModule,
    EducationLevelPipeModule,
    FooterModule,
    DateFilterModule,
    DropdownSearchModule,
    InputDateModule,
    TableListingModule,
    NoSpecialCharModule,
    ImageCropperModule
  ],
  providers:[
    UtilityService
  ]
})
export class MyProfileModule { }
