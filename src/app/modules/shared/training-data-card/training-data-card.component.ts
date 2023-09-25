import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { FeedbackFormDialogComponent } from './feedback-form-dialog/feedback-form-dialog.component';

@Component({
  selector: 'app-training-data-card',
  templateUrl: './training-data-card.component.html',
  styleUrls: ['./training-data-card.component.scss']
})
export class TrainingDataCardComponent implements OnInit {

  constructor(private _router:Router, private _dialog:MatDialog) { }

  @Input() trainingCardData:any;
  ngOnInit(): void {
  }
  viewDetails(id:number){
    
    this._router.navigate([`admin/freshers/training-details/${id}`])
    
  }

  openFeedbackDialog(){
    let config:MatDialogConfig = {
      data:this.trainingCardData,
      panelClass:'app-full-bleed-dialog',
      width:'35rem',
      minWidth:'25rem',
      autoFocus:false,
      height:'80%'
    }
    this._dialog.open(FeedbackFormDialogComponent,config);
  }

}
