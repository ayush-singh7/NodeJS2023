import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDetailsTraineeComponent } from './training-details-trainee.component';

const routes: Routes = [
  {
    path:'',
    component:TrainingDetailsTraineeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingDetailsTraineeRoutingModule { }
