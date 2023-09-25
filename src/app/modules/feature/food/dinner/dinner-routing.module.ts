import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinnerComponent } from './dinner.component';

const routes: Routes = [
  {
    path:'',
    component:DinnerComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinnerRoutingModule { }
