import { Component, OnInit } from '@angular/core';
import { DEPARTMENT_LIST } from 'src/app/constants/common-info';

@Component({
  selector: 'app-dsr-reports',
  templateUrl: './dsr-reports.component.html',
  styleUrls: ['./dsr-reports.component.scss']
})
export class DsrReportsComponent implements OnInit {

  constructor() { }
  statusData = {
    label: 'Department',
    placeholder: 'All',
    list:DEPARTMENT_LIST
  };
  projectResource = {
    label: 'Project Resource',
    placeholder: 'Project Resource',
    list:[
      {
        viewValue:'',
        value:''
      }
    ]
  };

  submissionStatus = {
    label: 'Submission Status',
    placeholder: 'All',
    list:[
      {
        value:'Pending',
        viewValue:'Pending'
      },
      {
        value:'Approved',
        viewValue:'Approved'
      }
    ]
  };

  pmStatus = {
    label: 'PM Approval  Status',
    placeholder: 'All',
    list:[
      {
        value:'Pending',
        viewValue:'Pending'
      },
      {
        value:'Approved',
        viewValue:'Approved'
      }
    ]
  };
  amStatus = {
    label: 'AM Approval  Status',
    placeholder: 'All',
    list:[
      {
        value:'Pending',
        viewValue:'Pending'
      },
      {
        value:'Approved',
        viewValue:'Approved'
      }
    ]

  };
  rmStatus = {
    label: 'RM Approval  Status',
    placeholder: 'All',
    list:[
      {
        value:'Pending',
        viewValue:'Pending'
      },
      {
        value:'Approved',
        viewValue:'Approved'
      }
    ]

  };
  finalStatus = {
    label: 'Final Approval  Status',
    placeholder: 'All',
    list:[
      {
        value:'Pending',
        viewValue:'Pending'
      }
    ]

  };
  hours = {
    label: 'Hours',
    placeholder: 'All',
    list: [
     {
       viewValue:'Less than 5 hours',
       value:'less than 5'
     } 
    ],
  };
  ngOnInit(): void {}
  listItems = [
    { Title: 'Total DSR Submitted' },
    { Title: 'Total DSR DUE' },
    { Title: 'Total DSR Pending Apporval' },
    { Title: 'Total DSR Approved' },
    { Title: 'Total DSR Rejected' },
    { Title: 'Pending AM Approval' },
    { Title: 'Pending PM Approvals' },
    { Title: 'Pending RM Approvals' },
  ];

}
