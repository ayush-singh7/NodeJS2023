import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MAX_DATE, MIN_DATE } from 'src/app/constants/common-info';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {

  constructor(private fb:FormBuilder, private formControlGetter:FormControlGetterService) { }
  dinnerForm!:FormGroup;
  showDinnnerForm:boolean = true;
  
  
  dateData = {
    placeholder:'Date',
    label:'Date',
    minDate:MIN_DATE,
    maxDate:MAX_DATE
  }
  config: AngularEditorConfig = {
    height: '18rem',
    minHeight: '5rem',
    editable:true
  }
  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.dinnerForm = this.fb.group({
      date: [''],
      project_name:[''],
      reason:['']
    })
  }

  requestDinner(){

  }
}
