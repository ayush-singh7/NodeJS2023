import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { PITCH_CONFIG, UserTableDataSource } from './my-pitch-model';

@Component({
  selector: 'app-my-pitch',
  templateUrl: './my-pitch.component.html',
  styleUrls: ['./my-pitch.component.scss']
})
export class MyPitchComponent implements OnInit {

  constructor() { }

  pageOptions = PAGE_OPTIONS;
  listingConfig = PITCH_CONFIG;
  allPitchData = [];
  tableSource: Table.Source<any> = new UserTableDataSource([]);

  ngOnInit(): void {
    this.populateTable(this.pageOptions);

  }

  populateTable(pageOptions:any){

    this.listingConfig.total = this.allPitchData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow:any = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allPitchData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
    
  }


  



}
