import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JOB_DETAILS, JOB_OPENINGS, REFERRAL_LIST, RouteIdentifiers } from 'src/app/routes/route-identifiers';
import { ReferAFriendComponent } from './refer-a-friend.component';

const routes: Routes = [
  {
    path:'',
    component:ReferAFriendComponent
  },
  {

    path:JOB_OPENINGS.path,
    loadChildren: ()=> import('./../refer-a-friend/openings-list/openings-list.module').then((m)=>m.OpeningsListModule)
  },
  {
    path:JOB_DETAILS.path,
    loadChildren: ()=> import('./job-details/job-details.module').then((m=>m.JobDetailsModule))
  },
  {
    path:REFERRAL_LIST.path,
    loadChildren: ()=>import('./referral-list/referral-list.module').then((m)=>m.ReferralListModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferAFriendRoutingModule { }
