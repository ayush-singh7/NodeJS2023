import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatingLeavesComponent } from './floating-leaves.component';

const routes: Routes = [
  {
    path:'',
    component:FloatingLeavesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingLeavesRoutingModule { }
