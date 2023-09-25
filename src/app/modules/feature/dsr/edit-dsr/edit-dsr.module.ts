import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDsrRoutingModule } from './edit-dsr-routing.module';
import { EditDsrComponent } from './edit-dsr.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EditDsrComponent
  ],
  imports: [
    CommonModule,
    EditDsrRoutingModule,
    MatIconModule
  ]
})
export class EditDsrModule { }
