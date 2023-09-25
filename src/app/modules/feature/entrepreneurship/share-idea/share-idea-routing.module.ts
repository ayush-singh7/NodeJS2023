import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareIdeaComponent } from './share-idea.component';

const routes: Routes = [
  {
    path:'',
    component:ShareIdeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareIdeaRoutingModule { }
