import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DEPARTMENT_NAMES, STAFF_DIRECTORY_DATA } from 'src/app/constants/feature/staff-directory-data';

@Component({
  selector: 'app-staff-directory',
  templateUrl: './staff-directory.component.html',
  styleUrls: ['./staff-directory.component.scss']
})
export class StaffDirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedDepartment:any;
  selectedName!:string;
  staffDirectory = STAFF_DIRECTORY_DATA
  departmentData = DEPARTMENT_NAMES;
  queryParams:any = {}

  departmentSelection(e:any){
    if(e == 0){
      this.selectedName = ""
      this.queryParams = {};
      this.populateData()
    }else{
      this.queryParams['department_code'] = e;
      console.log(this.queryParams,"QP");
      this.populateData();    
    }
    
  }

  searchStaff(){
    this.queryParams['name'] = this.selectedName;
    this.populateData();
  }

  populateData(){
    this.staffDirectory = STAFF_DIRECTORY_DATA;
    console.log(this.queryParams,'QP123');
    
    if(this.queryParams.hasOwnProperty('department_code')){
      this.staffDirectory = this.staffDirectory.filter((item:any)=>{
        if(item.department_code == this.queryParams.department_code){
          return item;
        }
      })
    }

    if(this.queryParams.hasOwnProperty('name')){
      this.staffDirectory = this.staffDirectory.filter((item:any)=> {
        if(item.name.toLowerCase().includes(this.queryParams.name.toLowerCase())){
          return item;
        }
      })
    }
  
  }


  typingName(){
    if(this.selectedName == "" ){
      this.selectedDepartment = ""
      this.staffDirectory= STAFF_DIRECTORY_DATA;
    }

  }

  reset(){
    this.queryParams = {}
    this.selectedDepartment = 0;
    this.selectedName = ""
    this.populateData()
  }
  
}



