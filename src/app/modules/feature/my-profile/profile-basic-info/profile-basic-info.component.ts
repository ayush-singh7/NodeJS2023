import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GENDER_DATA, MARITAL_STATUS_DATA, MAX_DATE, MIN_DATE, MONTHS_DATA, YEARS_DATA } from 'src/app/constants/common-info';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-profile-basic-info',
  templateUrl: './profile-basic-info.component.html',
  styleUrls: ['./profile-basic-info.component.scss']
})
export class ProfileBasicInfoComponent implements OnInit {

  constructor( private _formBuilder:FormBuilder,private _utility:UtilityService, private _formControlGetter:FormControlGetterService) { }

  // genderData = GENDER_DATA;
  // maritalStatus = MARITAL_STATUS_DATA;
  profileBasicForm!:FormGroup;
  ngOnInit(): void {
    this.createProfileBasicForm();
  }
  minDate = MIN_DATE;
  maxDate = MAX_DATE;

  dobDate = {
    label:'Date Of Birth',
    placeholder:'Date Of Birth',
    minDate:MIN_DATE,
    maxDate:MAX_DATE
  }
  genderData = {
    label:'Gender',
    placeholder:'Select Gender',
    list:GENDER_DATA
  }
  maritalStatus ={
    label:'Marital Status',
    placeholder:'Marital Status',
    list:MARITAL_STATUS_DATA
  }


  createProfileBasicForm(){
    this.profileBasicForm = this._formBuilder.group({
      dob: this._formControlGetter.getControl('mandatory'),
      first_name: this._formControlGetter.getControl('name'),
      last_name:this._formControlGetter.getControl('name'),
      gender:this._formControlGetter.getControl('mandatory'),
      marital_status:this._formControlGetter.getControl('mandatory'),
      contact_number:this._formControlGetter.getControl('phone_number'),
      total_exp_years:this._formControlGetter.getControl('single_digit'),
      total_exp_months:this._formControlGetter.getControl('single_digit'),
      relevant_exp_years:this._formControlGetter.getControl('single_digit'),
      relevant_exp_months:this._formControlGetter.getControl('single_digit'),
      address:this._formControlGetter.getControl('address')
    })
  }
  
  saveChanges(){
    console.log(this.profileBasicForm,"123");
        if(this.profileBasicForm.valid){
          this._utility.showSuccess("Succesfully Submitted Form Data","")
      
        }else{
          this.profileBasicForm.markAllAsTouched()
          this._utility.showError("Please Fill All Fields Correctly","")
        }
  }

  exp_years = {
    label:'Years',
    placeholder:'years',
    list:YEARS_DATA
  }

  exp_months = {
    label:'Months',
    placeholder:'months',
    list:MONTHS_DATA
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }


}
