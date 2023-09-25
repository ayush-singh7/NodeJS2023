import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyDocsComponent } from './policy-docs.component';

const routes: Routes = [
  {
    path:'',
    component:PolicyDocsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyDocsRoutingModule { }
