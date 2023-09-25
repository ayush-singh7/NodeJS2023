import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConfirmationBoxComponent } from 'src/app/common-components/confirmation-box/confirmation-box.component';
import { CONFIRMATION_BOX, PAGE_OPTIONS } from 'src/app/constants/common-info';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { addRequestedTrainingDataSelector } from 'src/app/store/selector';
import { REQUESTED_TRAINING_CONFIG, UserTableDataSource } from './requested-training-model';

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.scss']
})
export class RequestedTrainingsComponent implements OnInit {

  constructor(private _route:Router, private _dialog:MatDialog, private _store:Store ) { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = REQUESTED_TRAINING_CONFIG;
  allTableData:any = [] ;
  pageOptions = { ...PAGE_OPTIONS };
  ngOnInit(): void {
    this._store.select(addRequestedTrainingDataSelector).subscribe((data:any)=>{

      console.log('data recieved>>>',data);
      this.allTableData = data;
      // this.dataSource = new MatTableDataSource<any>(data);

    })



    this.populateTable(this.pageOptions)
  }

  populateTable(pageOptions:any){
  this.listingConfig.total = this.allTableData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allTableData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 
  }
  onTableEventChange(data:any){
    
  }

  action(){
    let message = CONFIRMATION_BOX;

    let config:MatDialogConfig={
      data:message,
      minWidth:'25rem',
      minHeight:'14rem'
    }
    let deleteRowDialog = this._dialog.open(ConfirmationBoxComponent,config);

    // this._dialog.open(ConfirmationBoxComponent)
  }

}
