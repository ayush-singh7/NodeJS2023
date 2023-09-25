import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffDirectoryRoutingModule } from './staff-directory-routing.module';
import { StaffDirectoryComponent } from './staff-directory.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../../shared/footer/footer.module';


@NgModule({
  declarations: [
    StaffDirectoryComponent,
    StaffMemberComponent
  ],
  imports: [
    CommonModule,
    StaffDirectoryRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    FooterModule
  ]
})
export class StaffDirectoryModule { }
