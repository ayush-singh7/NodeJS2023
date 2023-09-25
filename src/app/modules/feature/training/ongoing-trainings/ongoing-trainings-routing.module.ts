import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngoingTrainingsComponent } from './ongoing-trainings.component';

const routes: Routes = [
  {
    path:'',
    component:OngoingTrainingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngoingTrainingsRoutingModule { }
