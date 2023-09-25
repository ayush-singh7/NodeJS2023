import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationBoxComponent } from 'src/app/common-components/confirmation-box/confirmation-box.component';
import { BREADCRUMB_TRAINING_DETAILS } from 'src/app/constants/breadcrumb';

@Component({
  selector: 'app-training-details-trainee',
  templateUrl: './training-details-trainee.component.html',
  styleUrls: ['./training-details-trainee.component.scss']
})
export class TrainingDetailsTraineeComponent implements OnInit {

  constructor(private _dialog:MatDialog) { }

  ngOnInit(): void {
  }
  get breadCrumb(){
    let ans = [];
    ans.push([...BREADCRUMB_TRAINING_DETAILS.breadcrumb])
    return ans[0];
  }
  obj = {
    description:'Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in. A team is cross functional and develops its features end-to-end, from database to user interface.',
    support_details:'This is online training, so no support required.'
  }

  enrollTraining(){
    let config = {
      data : {
        heading:'Microfront End Angular',
        data:'Are You Sure You Want To Enroll This Training?',
        NO:'Cancel',
        YES:'Yes'
      } 
    }

    this._dialog.open(ConfirmationBoxComponent,config);
  }

}
