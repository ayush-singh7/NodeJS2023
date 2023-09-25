import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningsListComponent } from './openings-list.component';

const routes: Routes = [
  {
    path:'',
    component:OpeningsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpeningsListRoutingModule { }
