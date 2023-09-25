import { Component, OnInit } from '@angular/core';
import { ASSET_DECLARATION, PAGE_OPTIONS } from 'src/app/constants/common-info';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import {  ASSETS_DECLARATION_CONFIG, UserTableDataSource } from './assets-declaration-model';

@Component({
  selector: 'app-assets-declaration',
  templateUrl: './assets-declaration.component.html',
  styleUrls: ['./assets-declaration.component.scss']
})
export class AssetsDeclarationComponent implements OnInit {

  constructor() { }
  listingConfig = ASSETS_DECLARATION_CONFIG;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  allAssetsDeclaration = ASSET_DECLARATION
  pageOptions = { ...PAGE_OPTIONS };

  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }

  populateTable(pageOptions:any){

      
    if(pageOptions.hasOwnProperty('search')){
      this.allAssetsDeclaration = this.allAssetsDeclaration.filter((item:any)=>{
        if(
          (item.asset_code.toLowerCase()).includes(pageOptions.search.toLowerCase()) 
        ){  //for custom search on individual fields
          return item;
        }
      })
    }
    



    this.listingConfig.total = this.allAssetsDeclaration.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allAssetsDeclaration[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
  }

  addNewDeclaration(data:any){
    
    
    this.allAssetsDeclaration.push(data);
    this.populateTable(this.pageOptions);
  }

  onTableEventChange(data:any){
    this.pageOptions = data;
    this.allAssetsDeclaration = ASSET_DECLARATION
    this.populateTable(data); 
  }
}
