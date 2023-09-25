import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsInventoryComponent } from './assets-inventory.component';

const routes: Routes = [
  {
    path:'',
    component:AssetsInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsInventoryRoutingModule { }
