import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-dsr',
  templateUrl: './edit-dsr.component.html',
  styleUrls: ['./edit-dsr.component.scss']
})
export class EditDsrComponent implements OnInit {

  constructor(private _route:Router) { }
  obj = {
    project_name:'Training Project React JS',
    date:'05-02-2022',
    time:'10:30',
    status:'Submitted',
    pm_approval:'Pending',
    am_approval:'Pending',
    rm_approval:'N/A',
    final_approval:'Pending',
    logged_hours:'8:00',
    dsr_data:'I have done a lot of tasks today and attended too many sessions'
  }
  ngOnInit(): void {
  }

  editDSR(){
    let id = 100;
    let route = 'admin/dsr/edit/'  + id;
    this._route.navigate([`${route}`])
  }

}
