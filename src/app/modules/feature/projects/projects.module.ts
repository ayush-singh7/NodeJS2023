import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CommonTableModule } from '../../shared/common-table/common-table.module';
import { ForDirectiveModule } from '../../shared/common-table/for-directive/for-directive.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProjectsComponent,
    AllProjectsComponent,
    ProjectListingComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatExpansionModule,
    CommonTableModule,
    ForDirectiveModule,
    MatButtonToggleModule,
    MatIconModule,
    ForDirectiveModule,
    MatButtonModule
  ]
})
export class ProjectsModule { }
