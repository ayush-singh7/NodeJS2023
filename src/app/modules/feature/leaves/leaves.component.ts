import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LEAVE_DATA, LEAVE_TYPE, PAGE_OPTIONS } from 'src/app/constants/common-info';
import { LEAVES_DATA, REMAINING_LEAVES } from 'src/app/constants/feature/table-data/leaves-data';
import { Table } from '../../shared/common-table/table-types';
import { LeaveRollbackDialogComponent } from './leave-rollback-dialog/leave-rollback-dialog.component';
import { LEAVES_CONFIG, UserTableDataSource } from './leaves-table-model';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent implements OnInit {

  constructor(private _route:Router, private _dialog:MatDialog) { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = LEAVES_CONFIG;
  allLeaveData:any = LEAVES_DATA
  remainingLeaves = REMAINING_LEAVES

  pageOptions = { ...PAGE_OPTIONS };


  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions:any){

    this.listingConfig.total = this.allLeaveData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow:any = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allLeaveData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
    
  }



  addLeave(data:any){
    console.log(data,"leaveDagta");
    data['applied_on']=Date().toString()
    this.allLeaveData.push(data);
    this.populateTable(this.pageOptions);
  }

  leaveDetails(row:any){
    // 2022-02-03
    let route = row.applied_on.replaceAll('-','')
    console.log(row,"ROW123");
    this._route.navigate([`admin/leave-details/${route}`])
    
  }
  onTableEventChange(event:any){
    this.pageOptions = event;
    this.allLeaveData = LEAVES_DATA;
    // console.log(this.allDsrTableData,'-----',this.pageOptions);
    this.populateTable(this.pageOptions)
    // this.fetchData()
  }

  leaveRollback(){
    let config = {
      panelClass:'app-full-bleed-dialog',
      minWidth:'20rem'
    }
    this._dialog.open(LeaveRollbackDialogComponent,config);
  }

}
