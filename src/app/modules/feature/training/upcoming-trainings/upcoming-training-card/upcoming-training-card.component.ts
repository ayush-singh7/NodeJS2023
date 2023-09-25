import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationBoxComponent } from 'src/app/common-components/confirmation-box/confirmation-box.component';

@Component({
  selector: 'app-upcoming-training-card',
  templateUrl: './upcoming-training-card.component.html',
  styleUrls: ['./upcoming-training-card.component.scss']
})
export class UpcomingTrainingCardComponent implements OnInit {

  constructor(private _dialog:MatDialog, private _route:Router) { }
  trainingState:any;
 
  
  ngOnInit(): void {
    console.log(this.trainingState,"k10");
    
  }

  enrollTraining(){

    let data = {
      heading:'Microfront End Angular',
      data:'Are You Sure You Want To Enroll This Training?',
      NO:'Cancel',
      YES:'Yes'
    }
    this._dialog.open(ConfirmationBoxComponent,{data}).afterClosed().subscribe((res:any)=>{
      if(res == true){
        localStorage.setItem('upcoming','true')
      }
    });

  }
  cancelTraining(){

    let data = {
      heading:'Microfront End Angular',
      data:'Are You Sure You Want To Cancel This Training?',
      NO:'Cancel',
      YES:'Yes'
    }
    this._dialog.open(ConfirmationBoxComponent,{data}).afterClosed().subscribe((res:any)=>{
      if(res == true){
        localStorage.setItem('upcoming','false')

      }
    });

  }

  viewDetails(){
    let id = 10;
    this._route.navigate([ `admin/training-details-trainee/${id}`])
  }

}
