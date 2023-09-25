import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsControl } from '@ngu/carousel/lib/ngu-carousel/ngu-carousel';
import { Observable } from 'rxjs';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { DSR_TABLEDATA } from 'src/app/constants/feature/table-data/dsr-data';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Table } from '../../shared/common-table/table-types';
import { DSR_LIST_CONFIG, UserTableDataSource } from './dsr-table-model';
import { Store,StoreModule, select } from '@ngrx/store';
import { increment,decrement, reset } from './store-dsr/dsr-actions';
@Component({
  selector: 'app-dsr',
  templateUrl: './dsr.component.html',
  styleUrls: ['./dsr.component.scss']
})
export class DsrComponent implements OnInit {

  // constructor() { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = DSR_LIST_CONFIG;
  allDsrTableData = DSR_TABLEDATA ;
  pageOptions = { ...PAGE_OPTIONS };
  ngOnInit(): void {
    this.fetchData()
  }

  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>, private _route:Router, private _utility:UtilityService) {
    this.count$ = store.pipe(select('count'));
  }



  populateTable(pageOptions:any){ // this function is emulating the api request for query params

    if(pageOptions.hasOwnProperty('loggedHours')){ // filtering loggedHours
      this.allDsrTableData = this.filterHours(pageOptions);
    }
    
    if(pageOptions.hasOwnProperty('dsrStatus')){
      this.allDsrTableData = this.allDsrTableData.filter((item:any)=>item.approval_status == pageOptions.dsrStatus) 
    }

    if(pageOptions.hasOwnProperty('fromDate')){
      this.allDsrTableData = this.allDsrTableData.filter((item:any)=>{    
        let itemDate = new Date(item.date).getTime();
        let pageOptionDate = new Date(pageOptions.fromDate).getTime()
        if(itemDate >= pageOptionDate){
          return item;
        }
      })
    }
    if(pageOptions.hasOwnProperty('toDate')){
      this.allDsrTableData = this.allDsrTableData.filter((item:any)=>{
        let itemDate = new Date(item.date).getTime();
        let pageOptionDate = new Date(pageOptions.toDate).getTime()
        if(itemDate <= pageOptionDate){
          return item;
        }
      })

    }
 
    if(pageOptions.hasOwnProperty('search')){
      this.allDsrTableData = this.allDsrTableData.filter((item:any)=>{
        if(
          (item.emp_name.toLowerCase()).includes(pageOptions.search.toLowerCase()) ||
          (item.email.toLowerCase()).includes(pageOptions.search.toLowerCase())
        ){  //for custom search on individual fields
          return item;
        }
      })
    }
    


    this.listingConfig.total = this.allDsrTableData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allDsrTableData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
    
    
  }

  fetchData(){
    const intialIndex =  1; // normal will use from api response
    //normal will be fetched from api
    this.populateTable(this.pageOptions); 
  }
 
  onTableEventChange(event:any){
    
    this.pageOptions = event;
    this.allDsrTableData = DSR_TABLEDATA;
    console.log(this.allDsrTableData,'--AYUSH---',this.pageOptions);
    
    this.fetchData()
  }

  filterHours(pageOptions:any){  // loggedHours backend replicate code
    let hours = pageOptions['loggedHours']
    let dr1 = []
    if(hours == 1){
      dr1 = this.allDsrTableData.filter((item:any)=>{
        if(item.logged_hr <=5){
          return item;
        }
      }) 
    return dr1;

    }else if(hours == 2){
      dr1 = this.allDsrTableData.filter((item:any)=>{
        if(item.logged_hr >5 && item.logged_hr <= 8){
          return item;
        }
      })    
      return dr1;

    }else if(hours == 3){
      dr1 = this.allDsrTableData.filter((item:any)=>{
        if(item.logged_hr > 8 && item.logged_hr <=10 ){
          return item;
        }
      })    
      return dr1;

    }else {
      dr1 = this.allDsrTableData.filter((item:any)=>{
        if(item.logged_hr > 10){
          return item;
        }
      })    
      return dr1;
    }     
  }

  newDSR(data:any){
    console.log(data,"123");
    data['emp_name']='Ayush Singh';
    data['emp_id']='1553';
    data['employment_type']='Permanent';
    data['logged_hr']=data.est_hr;
    data['approval_status']=2;
    data['email']='ayush@gamil.com'
    // this.tableSource.data.push(data);
    console.log(data,'89989')
    this.allDsrTableData.push(data);
    this._utility.showSuccess("Successfully addesd","");
    this.populateTable(this.pageOptions);
  }
  editDSR(row:any){
    console.log(row,"ROW");
    this._route.navigate([`admin/dsr/emp-dsr-details/${row.date}`])
  }




}