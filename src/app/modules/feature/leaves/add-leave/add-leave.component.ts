import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DropDownAnimation2 } from 'src/animations/animations';
import { LEAVE_TYPE, TODAY } from 'src/app/constants/common-info';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.scss'],
  animations:[DropDownAnimation2]
})
export class AddLeaveComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,
    private _utility:UtilityService ,
    private _formControl:FormControlGetterService) { }
  addLeaveForm!:FormGroup;
  showLeave:boolean = true;
  @Output() leaveData = new EventEmitter<any>()

  shortLeaveDuration = false;
  config: AngularEditorConfig = {
    height: '18rem',
    minHeight: '5rem',
    editable:true
  }


  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.addLeaveForm = this._formBuilder.group({
      leave_type: this._formControl.getControl('mandatory'),
      start_date: this._formControl.getControl('mandatory'),
      end_date: this._formControl.getControl('mandatory'),
      remarks: this._formControl.getControl('name'),
      reason: this._formControl.getControl('mandatory'),
      shortLeaveStart: [''],
      shortLeaveEnd: [''],
    })
  }
  showLeaveForm:boolean = true;
  leavesData={
    label:'Marital Status',
    placeholder:'',
    list:LEAVE_TYPE
  }
  shortLeaveStart = {
    label:'Start Time',
    placeholder:'Start Time',
    list: [
      {
        value:'10:00',
        viewValue:'10:00 AM'
      },
      {
        value:"5:00",
        viewValue:"5:00 AM"
      }
    ]
  }
  shortLeavesEnd = {
    label:'End Time',
    placeholder:'End Time',
    list:[
      {
        value:'12:00',
        viewValue:'12:00 PM'
      },
      {
        value:"7:00",
        viewValue:"7:00 PM"
      }
    ]
  }
  startDateData = {
    placeholder:'Sart Date',
    label:'Start Date',
    minDate:TODAY,
    maxDate:''
  }
  endDateData = {
    placeholder:'End Date',
    label:'End Date',
    minDate:'',
    maxDate:''
  }

  save(){
    console.log(this.addLeaveForm.value,'vxi');
    
    if(this.addLeaveForm.valid){
      this.leaveData.emit(this.addLeaveForm.value);
      this._utility.showSuccess("Leave Added Succesfully","")
    }else{
      this._utility.showError("Please Fill All Fields Correctly","")
    }
  }
  showHalfDay:boolean = false;
  halfDay(e:any){
    this.showHalfDay =  e.checked;
  }


  setDateValidations(data:any){
    // console.log(data,'12leaves');
    if(data.label == 'Start Date'){
      this.endDateData.minDate = data.value
    }
    if(data.label == 'End Date'){
      this.startDateData.maxDate = data.value
    }
  }

  leaveType(data:any,type?:string){
    console.log(data,'k10');
    
    if(type == 'short_leave'){
      if(data == 4){
        this.shortLeaveDuration = true;
      }else{
        this.shortLeaveDuration = false;
      }
    }
    if(type == 'set_short_leave'){
      if(data == '10:00'){
        
        this.addLeaveForm.get('shortLeaveEnd')?.setValue('12:00')
      }else if(data == '5:00'){
        this.addLeaveForm.get('shortLeaveEnd')?.setValue('7:00')
        
      }
    }
    console.log(this.addLeaveForm.value,'k10');
    
  }

 
}
