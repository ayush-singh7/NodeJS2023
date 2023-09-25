import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { I_JOB_OPENINGS } from 'src/app/models/interfaces/interfaces';
import { ReferCandidateComponent } from './refer-candidate/refer-candidate.component';
@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss']
})
export class JobOpeningsComponent implements OnInit {

  @Input() singleJobData:any;

  constructor(private _route:Router,
    private _dialog:MatDialog
    ) { 

    }
  jobData!:I_JOB_OPENINGS

  ngOnInit(): void {
    this.jobData = this.singleJobData
  }

  
  toViewDetails(jobData:I_JOB_OPENINGS){
    // console.log(jobData.job_id,"JD");

    this._route.navigate([`admin/refer-candidate/job-details/${jobData.job_id}`])
  }  

  referCandidate(jobData:I_JOB_OPENINGS){
    
    let options:MatDialogConfig = {
      panelClass: 'app-full-bleed-dialog',
      data:jobData,
      autoFocus: false,
      maxHeight: '90vh',
      disableClose:true
    }

    console.log(options,"OPTIONS");
    
    // const subscription =  this._dialog.open(ReferCandidateComponent,options).afterClosed().subscribe((res:any)=>{
      // subscription.unsubscribe()
    // }
    
    // )
    this._dialog.open(ReferCandidateComponent,options);
  }

}
