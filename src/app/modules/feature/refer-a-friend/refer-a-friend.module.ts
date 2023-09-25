import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferAFriendRoutingModule } from './refer-a-friend-routing.module';
import { ReferAFriendComponent } from './refer-a-friend.component';


@NgModule({
  declarations: [
    ReferAFriendComponent
  ],
  imports: [
    CommonModule,
    ReferAFriendRoutingModule
  ]
})
export class ReferAFriendModule { }
