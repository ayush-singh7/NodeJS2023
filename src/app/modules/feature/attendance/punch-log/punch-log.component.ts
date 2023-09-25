import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { PUNCH_LOG_CONFIG, UserTableDataSource } from './punch-log-model';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss']
})
export class PunchLogComponent implements OnInit {
  constructor(private _route:Router) { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = PUNCH_LOG_CONFIG;
  allDsrTableData = [] ;
  pageOptions = { ...PAGE_OPTIONS };
  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions:any){
    
  }

}
