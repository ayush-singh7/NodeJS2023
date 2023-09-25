import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesComponent } from './leaves.component';

const routes: Routes = [
  {
    path:'',
    component:LeavesComponent
  },
  {
    path:'floating-leave',
    loadChildren: ()=> import('./floating-leaves/floating-leaves.module').then((m)=>m.FloatingLeavesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
