import { NgModule } from '@angular/core';
import { RouterModule, ROUTER_CONFIGURATION, Routes } from '@angular/router';
import { DASHBOARD, ENTREPRENEURSHIP, HOLIDAY_LIST, POLICY_DOCUMENTS, PROFILE, REFER_CANDIDATE, MONTHLY_REVIEW, STAFF_DIRECTORY, STARTUP, INTERVIEW,LEAVE_DETAILS ,DSR, FRESHERS, TICKETS, ASSETS, LEAVES, UPCOMING_TRAININGS, FLOATING_LEAVES, MY_PITCH, PROJECTS, ATTENDANCE, FOOD, DINNER, ONGOING_TRAININGS, MY_TRAININGS, REQUESTED_TRAININGS, TRAINING_DETAILS_TRAINEE, NEW_IDEA } from 'src/app/routes/route-identifiers';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path:'',
    component:FeatureComponent,
    children:[
      {
        path:'',
        redirectTo:DASHBOARD.path,
        pathMatch:'full'
      },
      {
        path:DASHBOARD.path,
        loadChildren: ()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
      },
      {
        path:PROFILE.path,
        loadChildren: ()=> import('./my-profile/my-profile.module').then((m)=>m.MyProfileModule)
      },
      {
        path:STAFF_DIRECTORY.path,
        loadChildren: ()=> import('./staff-directory/staff-directory.module').then((m)=>m.StaffDirectoryModule)
      },
      {
        path:ENTREPRENEURSHIP.path,
        loadChildren: ()=>import('./entrepreneurship/entrepreneurship.module').then((m)=>m.EntrepreneurshipModule)
      },
      {
        path: STARTUP.path,
        loadChildren: ()=> import('./entrepreneurship/share-idea/share-idea.module').then((m)=>m.ShareIdeaModule)
      },
      
      {       
        path:REFER_CANDIDATE.path,
        loadChildren: ()=> import('./refer-a-friend/refer-a-friend.module').then((m)=>m.ReferAFriendModule)
      },
      {
        path:REFER_CANDIDATE.path,
        loadChildren: ()=> import('./refer/refer.module').then((m)=>m.ReferModule)
      },
      {
        path:POLICY_DOCUMENTS.path,
        loadChildren: () => import('./my-links/policy-docs/policy-docs.module').then((m)=>m.PolicyDocsModule)
      },
      {
        path:HOLIDAY_LIST.path,
        loadChildren: () => import('./my-links/holiday/holiday.module').then((m)=>m.HolidayModule)
      },
      {
        path: MONTHLY_REVIEW.path,
        loadChildren: ()=> import('./my-performance/my-performance.module').then((m)=>m.MyPerformanceModule)
      },
      {
        path:INTERVIEW.path,
        loadChildren: ()=> import('./recruitment/interview/interview.module').then((m)=>m.InterviewModule)
      },
      {
        path:DSR.path,
        loadChildren: ()=> import('./dsr/dsr.module').then((m)=>m.DsrModule)
      },
      {
        path:FRESHERS.path,
        loadChildren: ()=> import('./freshers/freshers.module').then((m)=>m.FreshersModule)
      },
      {
        path:TICKETS.path,
        loadChildren: ()=> import('./tickets/tickets.module').then((m)=>m.TicketsModule)
      },
      {
        path:ASSETS.path,
        loadChildren: ()=> import('./assets/assets.module').then((m)=>m.AssetsModule)
      },
      {
        path:LEAVES.path,
        loadChildren: ()=> import('./leaves/leaves.module').then((m)=>m.LeavesModule)
      },
      {
        path:LEAVE_DETAILS.path,
        loadChildren: ()=> import('./leaves/leave-details/leave-details.module').then((m)=>m.LeaveDetailsModule)
      },
      {
        path:UPCOMING_TRAININGS.path,
        loadChildren: ()=> import('./training/upcoming-trainings/upcoming-trainings.module').then((m)=>m.UpcomingTrainingsModule)
      },
      {
        path:TRAINING_DETAILS_TRAINEE.path,
        loadChildren: ()=> import('./training/training-details-trainee/training-details-trainee.module').then((m)=>m.TrainingDetailsTraineeModule)
      },
      {
        path:ONGOING_TRAININGS.path,
        loadChildren: ()=> import('./training/ongoing-trainings/ongoing-trainings.module').then((m)=>m.OngoingTrainingsModule)
      },
      {
        path:MY_TRAININGS.path,
        loadChildren: ()=> import ('./training/my-trainings/my-trainings.module').then((m)=>m.MyTrainingsModule)
      },
      {
        path:REQUESTED_TRAININGS.path,
        loadChildren: ()=> import ('./training/requested-trainings/requested-trainings.module').then((m)=> m.RequestedTrainingsModule)
      },
      {
        path:ATTENDANCE.path,
        loadChildren: ()=> import('./attendance/attendance.module').then((m)=>m.AttendanceModule)
      },
      {
        path:FOOD.path,
        loadChildren: ()=> import('./food/food.module').then((m)=>m.FoodModule)
      },
      {
        path:DINNER.path,
        loadChildren: ()=>import('./food/dinner/dinner.module').then((m)=>m.DinnerModule)
      },
      {
        path:PROJECTS.path,
        loadChildren: ()=> import('./projects/projects.module').then((m)=>m.ProjectsModule)
      },
      {
        path:FLOATING_LEAVES.path,
        loadChildren: ()=> import ('./leaves/floating-leaves/floating-leaves.module').then((m)=>m.FloatingLeavesModule)
      },
      {
        path:MY_PITCH.path,
        loadChildren: ()=> import('./entrepreneurship/my-pitch/my-pitch.module').then((m)=>m.MyPitchModule)
      },
      {
        path:NEW_IDEA.path,
        loadChildren: ()=> import('./entrepreneurship/new-idea/new-idea.module').then((m)=>m.NewIdeaModule)
      },
      {
        path:'counter',
        loadChildren: ()=> import('./counter/counter.module').then((m)=>m.CounterModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
