import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { MANUAL_PUNCH_CONFIG, UserTableDataSource } from './manual-punch-model';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {

  constructor(private _route:Router, private _formBuilder:FormBuilder) { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = MANUAL_PUNCH_CONFIG;
  allDsrTableData = [] ;
  pageOptions = { ...PAGE_OPTIONS };
  manualPunch!:FormGroup;
  ngOnInit(): void {
    this.populateTable(this.pageOptions);
    this.createForm();
  }
  createForm(){
    this.manualPunch = this._formBuilder.group({
      date:[''],
      company:[''],
      employee_name:['']
    })
  }
  populateTable(pageOptions:any){
    
  }
  companyData = {
    label:'Company',
    placeholder:'Company',
    list:[
      {viewValue:'Appinventiv Tech.',value:'appinventiv'}
    ]
  }
  datePickerData = {
    label:'Date',
    placeholder:'Date'
  }
}
