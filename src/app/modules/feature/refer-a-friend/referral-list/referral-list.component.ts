import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getReferFriendDataSelector } from 'src/app/store/selector';
import {  REFERRAL_LIST_CONFIG, UserTableDataSource } from './referral-list-model';
import {Table} from "../../../shared/common-table/table-types"
import { PAGE_OPTIONS } from 'src/app/constants/common-info';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.scss']
})
export class ReferralListComponent implements OnInit {

  
  constructor(private _route:Router, private _store:Store ) {
    this._store.select(getReferFriendDataSelector).subscribe((data:any)=>{

      console.log('data recieved>>>',data);
      this.allReferralList = data;
      // this.dataSource = new MatTableDataSource<any>(data);

    })
   }
   listingConfig= REFERRAL_LIST_CONFIG
   tableSource: Table.Source<any> = new UserTableDataSource([]);
   allReferralList:any = [] ;
   pageOptions = { ...PAGE_OPTIONS };

  ngOnInit(): void {
    this.populateTable(this.pageOptions)
    
  }

  toJobOpenings(){
    this._route.navigate(['admin/refer-candidate/job-openings'])
  }

  populateTable(pageOptions:any){
    this.listingConfig.total = this.allReferralList.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allReferralList[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
    
  }


}

// candidate_name
// : 
// undefined
// candidate_status
// : 
// "Pending"
// date_of_referal
// : 
// Fri May 19 2023 16:30:52 GMT+0530 (India Standard Time) {}
// department
// : 
// ""
// experience
// : 
// undefineds
// position
// : 
// ""