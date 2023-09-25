import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerformanceBreakdownComponent } from './performance-breakdown/performance-breakdown.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterModule } from '../../shared/footer/footer.module';
import { DropdownSearchModule } from '../../shared/dropdown-search/dropdown-search.module';


@NgModule({
  declarations: [
    MyPerformanceComponent,
    PerformanceBreakdownComponent
  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule ,
    MatDialogModule,
    FooterModule,
    ReactiveFormsModule,
    DropdownSearchModule
  ]
})
export class MyPerformanceModule { }
