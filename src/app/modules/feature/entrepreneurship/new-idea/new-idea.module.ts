import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewIdeaRoutingModule } from './new-idea-routing.module';
import { NewIdeaComponent } from './new-idea.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { ForDirectiveModule } from 'src/app/modules/shared/common-table/for-directive/for-directive.module';
import { TableListingModule } from 'src/app/modules/shared/common-table/table-listing/table-listing.module';


@NgModule({
  declarations: [
    NewIdeaComponent
  ],
  imports: [
    CommonModule,
    NewIdeaRoutingModule,
    CommonTableModule,
    ForDirectiveModule,
    TableListingModule,
    
  ]
})
export class NewIdeaModule { }
