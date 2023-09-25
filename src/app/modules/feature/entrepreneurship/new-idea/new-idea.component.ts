import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { getPitchDataSelector } from 'src/app/store/selector';
import { DSR_LIST_CONFIG } from '../../dsr/dsr-table-model';
import { NEW_IDEA_CONFIG, UserTableDataSource } from './new-idea-model';
import {Table} from "../../../shared/common-table/table-types"

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.scss']
})
export class NewIdeaComponent implements OnInit,  AfterViewInit  {

  
  constructor(private _store:Store) { 
    
    this._store.select(getPitchDataSelector).subscribe((data:any)=>{

      console.log('data recieved>>>',data);
      this.allIdeasTableData = data;
      // this.dataSource = new MatTableDataSource<any>(data);

    })
  }

  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = NEW_IDEA_CONFIG;
  
  allIdeasTableData:any = [] ;
  pageOptions = { ...PAGE_OPTIONS };
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.populateTable(this.pageOptions)

  }

  populateTable(pageOptions:any){
    this.listingConfig.total = this.allIdeasTableData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allIdeasTableData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
    
  }

}



// Action
// : 
// ""
// Submitted_On
// : 
// Thu May 18 2023 18:37:04 GMT+0530 (India Standard Time) {}
// Technical_Non_Technical
// : 
// "Technical"
// industry
// : 
// undefined
// s_no
// : 
// 5
// title
// : 
// undefined