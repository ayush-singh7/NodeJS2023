import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DSR_STATUS, HOURS_STATUS, PROJECT_LIST, SUBMISSION_STATUS } from 'src/app/constants/common-info';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-dsr-filter',
  templateUrl: './dsr-filter-component.html',
  styleUrls: ['./dsr-filter.scss']
})
export class SearchFilterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private utilityService:UtilityService) { }
  dsrFilterObject: any = null;
  dsrFilterForm!: FormGroup;


  @Input() buttonConfig:any
  @Output() filterValues = new EventEmitter<string>();

  _emitChagnes(value: any) {
    this.filterValues.emit(value);
  }
  
  ngOnInit(): void {
    
    this.dsrFilterForm = this.getFilterForm()
    this.dsrFilterObject = this.createFilterObject(this.dsrFilterForm);    
  }

  getFilterForm() {
    return this.formBuilder.group(
      {
        loggedHours: [],
        dsrStatus:[],
        fromDate:[],
        toDate:[],
        submissionStatus:[],
        projectName:[]
      }
    )
  }


  onApplyHandler() {
    
    if (this.dsrFilterForm.valid && this.dsrFilterForm.dirty) {
      let filterData = { ...this.dsrFilterForm.value };
      
      if(filterData.fromDate){
        
      filterData.fromDate = this.utilityService.parseDateToTimeStamp(filterData.fromDate);
      }

      if(filterData.toDate){
        filterData.toDate = this.utilityService.parseDateToTimeStamp(filterData.toDate);
      }


      this._emitChagnes(filterData)
    }
  }

  resetFilter() {
    
    if (this.dsrFilterForm.value) {
      this.dsrFilterForm.reset();
      this._emitChagnes({...this.dsrFilterForm.value})
    }
  }

  createFilterObject(form: FormGroup) {
    
    return {
        loggedHours: {
        label: 'Logged Hours',
        list: HOURS_STATUS,
        control: form.controls.loggedHours
      },
      dsrStatus:{
        label: 'DSR Approval STATUS',
        list: DSR_STATUS,
        control: form.controls.dsrStatus
      },
      date:{
        label_from: 'Start Date',
        label_to:'End Date',
        from_date: form.controls.fromDate,
        to_date: form.controls.toDate
      },
      submissionStatus:{
        label:'Submission Status',
        list:SUBMISSION_STATUS,
        control:form.controls.submissionStatus
      },
      project:{
        label:'Project',
        list:PROJECT_LIST,
        control:form.controls.projectName
      }
    }
  }

  dropDownChange(event:any){
    console.log(event,"ace2");
    this.onApplyHandler()
    
  }
  
}

