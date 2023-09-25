import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { ProjectsTableDataSource, PROJECTS_LIST_CONFIG } from './project-listing-model';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent implements OnInit {

  tableSource: Table.Source<any> = new ProjectsTableDataSource([]);
  listingConfig = PROJECTS_LIST_CONFIG
  pageOptions = PAGE_OPTIONS;
  constructor(private _route:Router) { }

  ngOnInit(): void {
    this.populateTable(this.pageOptions);
  }

  details(){
    this._route.navigate(['admin/projects/project-details'])
  }

  
  
  data: Array<any> = [
    {
      project_name:'Trainee project angular',
      billing_type:'',
      resources:'3',
      hrs:'392385',
      total_milestone:'1',
      delivered:'0',
      pending:'1',
      complete:'0%'

    },
  ];

  populateTable(pageOptions: any) {
    this.listingConfig.total = this.data.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit;
    let displayRow = [];
    for (let i = beg; i < end && i < this.listingConfig.total; i++) {
      displayRow.push(this.data[i]);
    }

    this.tableSource = new ProjectsTableDataSource(
      displayRow.map((item: any, index: number) => ({
        ...item,
        sn: beg + index + 1,
      }))
    );
      
    console.log(this.tableSource,"TS");
    
  }

}
