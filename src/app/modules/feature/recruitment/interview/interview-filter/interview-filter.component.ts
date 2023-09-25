import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DEPARTMENT_LIST, INTERVIEW_STATUS } from 'src/app/constants/common-info';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-interview-filter',
  templateUrl: './interview-filter.component.html',
  styleUrls: ['./interview-filter.component.scss']
})
export class InterviewFilterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private utilityService:UtilityService) { }
  interviewFilterObject: any = null;
  interviewFilterForm!: FormGroup;


  @Input() buttonConfig:any
  @Output() filterValues = new EventEmitter<string>();

  
  


  _emitChagnes(value: any) {
    this.filterValues.emit(value);
  }
  
  dropDownChange(e:any){
    this.onApplyHandler()
  }
  ngOnInit(): void {
    
    this.interviewFilterForm = this.getFilterForm()
    this.interviewFilterObject = this.createFilterObject(this.interviewFilterForm);    
    
  }


  getFilterForm() {
    return this.formBuilder.group(
      {
        department_name:[],
        interview_status: []
      }
    )
  }


  createFilterObject(form: FormGroup) {
    
    return {
        departmentName: {
        label: 'Department Name',
        list: DEPARTMENT_LIST,
        control: form.controls.department_name
      },
      interviewStatus:{
        label: 'Interview Status',
        list: INTERVIEW_STATUS,
        control: form.controls.interview_status
      },
    }
  }
  
  resetFilter(){
    this.interviewFilterForm.reset()
    this._emitChagnes(this.interviewFilterForm.value);
  }
  onApplyHandler() {
    
    if (this.interviewFilterForm.valid && this.interviewFilterForm.dirty) {
      let filterData = { ...this.interviewFilterForm.value };
      

      

      this._emitChagnes(filterData)
    }
  }




}
