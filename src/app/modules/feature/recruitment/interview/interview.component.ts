import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { INTERVIEW_DATA } from 'src/app/constants/feature/table-data/interview-data';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { INTERVIEW_CONFIG, UserTableDataSource } from './interview-table-model';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  constructor() { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = INTERVIEW_CONFIG;
  allInterviewTableData = INTERVIEW_DATA ;
  pageOptions = { ...PAGE_OPTIONS };
  
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.populateTable(this.pageOptions);
  };

  populateTable(pageOptions:any){
    // department_name: 2, interview_status: 2
    if(pageOptions.hasOwnProperty('department_name')){
      this.allInterviewTableData = this.allInterviewTableData.filter((item:any)=> item.department == pageOptions.department_name)
    }
    
    if(pageOptions.hasOwnProperty('interview_status')){
      this.allInterviewTableData = this.allInterviewTableData.filter((item:any)=> item.final_status == pageOptions.interview_status)
    }
    
    if(pageOptions.hasOwnProperty('search')){
      this.allInterviewTableData = this.allInterviewTableData.filter((item:any)=>{
        if(
          (item.name.toLowerCase()).includes(pageOptions.search.toLowerCase()) ||
          (item.email.toLowerCase()).includes(pageOptions.search.toLowerCase())
        ){  //for custom search on individual fields
          return item;
        }
      })
    }
    
    
    this.listingConfig.total = this.allInterviewTableData.length;


    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allInterviewTableData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
  }

  onTableEventChange(event:any){
    
    this.pageOptions = event;
    this.allInterviewTableData = INTERVIEW_DATA;
    console.log(this.allInterviewTableData,this.pageOptions,"1");
    this.fetchData()
  }


}
