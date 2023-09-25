import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CommmonComponentsComponent } from './common-components/commmon-components/commmon-components.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationBoxComponent } from './common-components/confirmation-box/confirmation-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { CustomPaginator } from './models/CustomPaginatorConfiguration';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    CommmonComponentsComponent,
    ConfirmationBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 1900, // 19 seconds
      progressBar: true,
      positionClass: 'toast-top-center'
    }),
    StoreModule.forRoot({ count: counterReducer })

  ],

  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


