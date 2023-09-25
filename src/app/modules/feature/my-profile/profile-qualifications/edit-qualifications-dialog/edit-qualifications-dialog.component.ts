import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EDUCATION_LEVEL, LANGUAGES, MAX_DATE, MIN_DATE, TODAY } from 'src/app/constants/common-info';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';

@Component({
  selector: 'app-edit-qualifications-dialog',
  templateUrl: './edit-qualifications-dialog.component.html',
  styleUrls: ['./edit-qualifications-dialog.component.scss']
})
export class EditQualificationsDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder:FormBuilder,
    private _formControlGetter:FormControlGetterService,
    private dialogRef: MatDialogRef<EditQualificationsDialogComponent>

  ) { }
  qualificationsForm!:FormGroup;

  educationLevel = {
    label:'Education Level',
    placeholder:'Education level',
    list:EDUCATION_LEVEL
  }

  languageList = {
    label:"Language",
    placeholder:'language',
    list:LANGUAGES
  }

  fromData = {
    label:'From Date',
    placeholder:'From Date',
    minDate:MIN_DATE,
    maxDate:TODAY
  }

  toData = {
    label:'To Date',
    placeholder:'To Date',
    minDate:MIN_DATE,
    maxDate:TODAY
  }


  

  x = new FormControl('');
  ngOnInit(): void {
    this.createQualificationsForm()
    console.log(this.data,"DialgoDDATA------------");
    this.qualificationsForm.patchValue(this.data);
  
  
    
  }

  createQualificationsForm(){
    this.qualificationsForm = this._formBuilder.group({
      institute: this._formControlGetter.getControl('name'),
      education_level: this._formControlGetter.getControl('mandatory'),
      date_from:this._formControlGetter.getControl('mandatory'),
      date_to:this._formControlGetter.getControl('mandatory'),
      language: this._formControlGetter.getControl('mandatory'),
      prof_course: this._formControlGetter.getControl('name'),
      description: this._formControlGetter.getControl('name')
    })
  }


  updateQualifications(){
    if(this.qualificationsForm.valid){
      this.qualificationsForm.value['id']=this.data.id
      this.dialogRef.close(this.qualificationsForm.value);

    }else{
      this.qualificationsForm.markAllAsTouched()
    }

  }
  setDate(e:any,dateType:string){
    const d = new Date(e.value)
    let newDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
    this.qualificationsForm.get(dateType)?.setValue(newDate.slice(0,10))
  }

  setDateValidations(data:any){
    if(data.label == 'From Date'){
      this.toData.minDate = data.value
    }
    if(data.label == 'To Date'){
      this.toData.maxDate = data.value
    }
    
  }

}
