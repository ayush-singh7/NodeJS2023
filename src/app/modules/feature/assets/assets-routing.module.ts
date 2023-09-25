import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets.component';

const routes: Routes = [
  {
    path:'',
    component:AssetsComponent,
    children:[
      {
        path:'',
        redirectTo:'assets',
        pathMatch:'full'
      },
      {
        path:'assets',
        loadChildren: ()=> import('./assets-inventory/assets-inventory.module').then((m)=>m.AssetsInventoryModule)
      },
      {
        path:'assets-declaration',
        loadChildren:()=> import('./assets-declaration/assets-declaration.module').then((m)=>m.AssetsDeclarationModule)
      },
      {
        path:'request-assets',
        loadChildren: ()=> import('./request-assets/request-assets.module').then((m)=>m.RequestAssetsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
