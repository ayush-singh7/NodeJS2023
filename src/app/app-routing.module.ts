import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADMIN, AUTH, RouteIdentifiers } from './routes/route-identifiers';
import { LoginGuardGuard } from './guards/login-guard.guard';
const routes: Routes = [
  {
    path:'', redirectTo:RouteIdentifiers.ADMIN, pathMatch:'full'
  },
  {
    path:ADMIN.path, loadChildren: ()=> import('./modules/feature/feature.module').then((m)=>m.FeatureModule),
    canActivate: [LoginGuardGuard]
  },
  {
    path:AUTH.path, loadChildren: ()=> import('./modules/auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:'**',
    loadChildren: ()=> import('./modules/not-found/not-found.module').then((m)=>m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
