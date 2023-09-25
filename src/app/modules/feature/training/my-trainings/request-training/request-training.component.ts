import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DEPARTMENT_LIST } from 'src/app/constants/common-info';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { getRequestedTrainingDataAction } from 'src/app/store/actions';

@Component({
  selector: 'app-request-training',
  templateUrl: './request-training.component.html',
  styleUrls: ['./request-training.component.scss']
})
export class RequestTrainingComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder, private _utility:UtilityService,
    private _formControl:FormControlGetterService, private _store:Store,
    private dialogRef:MatDialogRef<RequestTrainingComponent>) { }

  ngOnInit(): void {
    this.createForm()
  }
  requestTrainingForm!:FormGroup
  createForm(){
    this.requestTrainingForm = this._formBuilder.group({
      team_name: this._formControl.getControl('mandatory'),
      training_name: this._formControl.getControl('mandatory'),
      request_reason: this._formControl.getControl('long_text'),
      request_reason_more: this._formControl.getControl('long_text'),
      give_training: this._formControl.getControl('mandatory'),
      timeline:this._formControl.getControl('mandatory')
    })
  }

  teamNameData = {
    label:'Team Name',
    placeholder:'Select Team',
    list:[
      {
        value:'microfrontend',
        viewValue:'Micro Front End'
      }
    ]
  }

  trainingNameData = {
    label:'Training Name',
    placeholder:'Select Name',
    list:DEPARTMENT_LIST
  }

  submitForm(){
    console.log(this.requestTrainingForm.value,'valuesFORM')
    
    if(this.requestTrainingForm.valid){
      this._store.dispatch(getRequestedTrainingDataAction(this.requestTrainingForm.value))
      this._utility.showSuccess("Successfully Registered","")
      this.dialogRef.close()
    }else{
      this.requestTrainingForm.markAllAsTouched()
      this._utility.showError("Something Went Wrong","")
      
    }

  }


}
