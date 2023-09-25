import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { ASSETS_INVENTORY } from 'src/app/constants/feature/table-data/assets-inventory-data';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { ASSETS_INVENTORY_CONFIG, UserTableDataSource } from './assets-inventory-table-model';

@Component({
  selector: 'app-assets-inventory',
  templateUrl: './assets-inventory.component.html',
  styleUrls: ['./assets-inventory.component.scss']
})
export class AssetsInventoryComponent implements OnInit {

  constructor() { }
  listingConfig = ASSETS_INVENTORY_CONFIG;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  allAssetsInventoryData:any= ASSETS_INVENTORY;
  pageOptions = { ...PAGE_OPTIONS };

  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions:any){
    if(pageOptions.hasOwnProperty('search')){
      this.allAssetsInventoryData = this.allAssetsInventoryData.filter((item:any)=>{
        if(
          (item.asset_name.toLowerCase()).includes(pageOptions.search.toLowerCase())
        ){  //for custom search on individual fields
          return item;
        }
      })
    }
    



    this.listingConfig.total = this.allAssetsInventoryData.length
    let displayRow = [];
    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allAssetsInventoryData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
    
  }

  onTableEventChange(data:any){
    this.pageOptions = data;
    this.allAssetsInventoryData = ASSETS_INVENTORY;

    this.populateTable(this.pageOptions)
  }

}
