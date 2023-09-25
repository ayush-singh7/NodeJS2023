import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocsRoutingModule } from './policy-docs-routing.module';
import { PolicyDocsComponent } from './policy-docs.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/modules/shared/footer/footer.module';


@NgModule({
  declarations: [
    PolicyDocsComponent
  ],
  imports: [
    CommonModule,
    PolicyDocsRoutingModule,
    MatIconModule,
    FooterModule
  ]
})
export class PolicyDocsModule { }
