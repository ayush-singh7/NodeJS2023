import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance.component';

const routes: Routes = [
  {
    path:'',
    component:AttendanceComponent,
    children:[
      {
         path:'',
         redirectTo:'',
         pathMatch:'full'
      },
      {
        path:'my-attendance',
        loadChildren: ()=> import('./my-attendance/my-attendance.module').then((m)=>m.MyAttendanceModule)
      },
      {
        path:'punch-log',
        loadChildren: ()=> import('./punch-log/punch-log.module').then((m)=>m.PunchLogModule)
      },
      {
        path:'manual-punch',
        loadChildren: ()=> import('./manual-punch/manual-punch.module').then((m)=>m.ManualPunchModule)
      } 
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
