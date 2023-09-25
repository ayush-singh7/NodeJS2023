import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsrComponent } from './dsr.component';

const routes: Routes = [
  {
    path:'',
    component:DsrComponent
  },
  {
    path:'emp-dsr-details/:dsr_date',
    // loadChildren: ()=> import('./edit-dsr/edit-dsr.module').then((m)=>m.EditDsrModule)
    loadChildren: ()=> import('./edit-dsr/edit-dsr.module').then((m)=>m.EditDsrModule)
  },
  {
    path:'edit/:id',
    loadChildren: ()=> import ('./edit-dsr-2/edit-dsr-2.module').then((m)=>m.EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsrRoutingModule { }
