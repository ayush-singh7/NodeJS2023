import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FooterModule } from '../shared/footer/footer.module';
import { StoreModule } from '@ngrx/store';
import * as allReducers from "../../store/reducer"
import * as allSelectorData from "../../store/selector";

const materialModules = [
  MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule
]

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FooterModule,
    StoreModule.forFeature(allSelectorData.GET_PITCH_IDEA,allReducers.getPitchIdeaReducer),
    StoreModule.forFeature(allSelectorData.GET_REFER_FRIEND,allReducers.getReferFriendDataReducer),
    StoreModule.forFeature(allSelectorData.ADD_REQUESTED_TRAINING_DATA,allReducers.getRequestedTrainingDataReducer),
    
    ...materialModules
  ]
})
export class FeatureModule { }
