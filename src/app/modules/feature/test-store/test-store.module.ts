import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestStoreRoutingModule } from './test-store-routing.module';
import { TestStoreComponent } from './test-store.component';


@NgModule({
  declarations: [
    TestStoreComponent
  ],
  imports: [
    CommonModule,
    TestStoreRoutingModule
  ]
})
export class TestStoreModule { }
