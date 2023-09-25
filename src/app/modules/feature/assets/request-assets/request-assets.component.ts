import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { ADD_NEW_ASSET_CONFIG, UserTableDataSource } from './new-request-asset-model';

@Component({
  selector: 'app-request-assets',
  templateUrl: './request-assets.component.html',
  styleUrls: ['./request-assets.component.scss']
})
export class RequestAssetsComponent implements OnInit {

  constructor() { }
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = ADD_NEW_ASSET_CONFIG

  allInventoryData:any =[
    {
      asset_category:'Laptop',
      quantity:'2',
      priority:'high',
      required_date:'2023-02-22',
      allocation_type:'temporary',
      request_reason:'web dev'
    }
  ] 
  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions:any){
    this.listingConfig.total = this.allInventoryData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allInventoryData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
  }

  addNewAsset(data:any){
    this.allInventoryData.push(data);
    this.populateTable(this.pageOptions);
  }


}
