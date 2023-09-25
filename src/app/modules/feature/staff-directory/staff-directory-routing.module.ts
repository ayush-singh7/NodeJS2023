import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffDirectoryComponent } from './staff-directory.component';

const routes: Routes = [
  {
    path:'',
    component:StaffDirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffDirectoryRoutingModule { }
