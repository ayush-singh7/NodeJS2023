import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPitchComponent } from './my-pitch/my-pitch.component';

const routes: Routes = [
  {
    path:'',
    component:MyPitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPitchRoutingModule { }
