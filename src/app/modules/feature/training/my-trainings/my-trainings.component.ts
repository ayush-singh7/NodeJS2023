import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestTrainingComponent } from './request-training/request-training.component';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {

  constructor(private _route:Router, private _dialog:MatDialog) { }

  ngOnInit(): void {
  }

  upcomingTrainings(){
    this._route.navigate(['admin/upcoming-trainings'])
  }

  requestTrainings(){
    let dialogConfig = {
      maxWidth:'35rem',
      panelClass:'app-full-bleed-dialog',
      autoFocus:false,
      height:'95%'
    }
    this._dialog.open(RequestTrainingComponent,dialogConfig);
  }

}
