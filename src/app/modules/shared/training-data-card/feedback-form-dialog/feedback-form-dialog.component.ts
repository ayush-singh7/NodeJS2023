import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';

@Component({
  selector: 'app-feedback-form-dialog',
  templateUrl: './feedback-form-dialog.component.html',
  styleUrls: ['./feedback-form-dialog.component.scss']
})
export class FeedbackFormDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder:FormBuilder, private _formControl:FormControlGetterService){
    }

  feedbackForm!:FormGroup
  ngOnInit(): void {
    console.log(this.data);
    this.createForm();
  }

  createForm(){
    this.feedbackForm = this._formBuilder.group({
      objective:this._formControl.getControl('mandatory'),
      relevance:this._formControl.getControl('mandatory'),
      training:this._formControl.getControl('mandatory'),
      satisfaction: this._formControl.getControl('mandatory'),
      feedback: this._formControl.getControl('mandatory')
    })
  }

  valuesStatus = [
    {
      value:1,
      viewValue:1
    },
    {
      value:2,
      viewValue:2
    },
    {
      value:3,
      viewValue:3
    },
    {
      value:4,
      viewValue:4
    },
    {
      value:5,
      viewValue:5
    },
  ]

}
