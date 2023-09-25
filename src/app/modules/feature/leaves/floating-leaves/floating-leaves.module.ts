import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeavesRoutingModule } from './floating-leaves-routing.module';
import { FloatingLeavesComponent } from './floating-leaves.component';


@NgModule({
  declarations: [
    FloatingLeavesComponent
  ],
  imports: [
    CommonModule,
    FloatingLeavesRoutingModule
  ]
})
export class FloatingLeavesModule { }
