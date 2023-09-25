import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss']
})
export class LeaveDetailsComponent implements OnInit {

  constructor() { }

   leaveData = {
    leave_type:'Planned Leave',
    start_date:'2022-02-03',
    end_date:'2022-05-05',
    applied_on:'2022-04-05',
    level_1:'Suyash Saxena',
    level_2:'HR (Human Resource)',
  }

  
   obj =   {
      emp_name:'Ayush Singh(AI 1553)',
      leave_type:'Emergency Leave (CL)',
      leave_duration:'Full Day',
      applied_on:'2022-02-02',
      start_date: '2022-02-02',
      end_date:'2022-02-03',
      reason:"In need of urgent hospitalisation due to bad headlth ",
      remarks:'To hostital'
    }


  

  ngOnInit(): void {

  }



}
