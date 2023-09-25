import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareIdeaRoutingModule } from './share-idea-routing.module';
import { ShareIdeaComponent } from './share-idea.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ShareIdeaComponent
  ],
  imports: [
    CommonModule,
    ShareIdeaRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    ShowErrorModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    AngularEditorModule,
    // StoreModule.forFeature(allSelectorData.GET_PITCH_IDEA,allReducers.getPitchIdeaReducer),

  ]
})
export class ShareIdeaModule { }
