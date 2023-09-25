import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreshersComponent } from './freshers.component';

const routes: Routes = [
  {
    path:'',
    component:FreshersComponent,
    children:[
      {
        path:'',
        redirectTo:'my-trainings',
        pathMatch:'full'
      },
      {
        path:'my-trainings',
        loadChildren:()=> import('./my-trainings/my-trainings.module').then((m)=>m.MyTrainingsModule)
      },
      {
        path:'training-details/:id',
        loadChildren:()=> import('./training-details/training-details.module').then((m)=>m.TrainingDetailsModule)
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreshersRoutingModule { }
// children:[
//   {
//     path:'',
//     redirectTo:RouteIdentifiers.DASHBOARD,
//     pathMatch:'full'
//   },