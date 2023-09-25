import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovidHelpComponent } from './covid-help/covid-help.component';
import { ShowErrorModule } from 'src/app/pipes/show-error/show-error.module';



@NgModule({
  declarations: [
    FooterComponent,
    CovidHelpComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ShowErrorModule,
    
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
