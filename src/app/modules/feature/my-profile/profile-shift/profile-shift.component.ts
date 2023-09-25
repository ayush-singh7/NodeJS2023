import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { UserTableDataSource } from './profile-shift-model';

@Component({
  selector: 'app-profile-shift',
  templateUrl: './profile-shift.component.html',
  styleUrls: ['./profile-shift.component.scss']
})
export class ProfileShiftComponent implements OnInit {

  constructor() { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  
  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    const intialIndex = 1;
    const shiftData = [
      {
        joining_date:'7-02-2022',
        office_shift:'Morning'
      },
      {
        joining_date:'7-12-2022',
        office_shift:'Night'
      }
    ]
    this.tableSource = new UserTableDataSource(
      shiftData.map((item: any, index:number) => ({ ...item, sn: intialIndex + index }))
    );
      console.log(this.tableSource,"tt");
      
  }



}
