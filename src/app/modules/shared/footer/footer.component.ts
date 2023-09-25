import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CovidHelpComponent } from './covid-help/covid-help.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public _dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    let options:MatDialogConfig ={
      height:'75vh',
      width:'70vw'
    }
    this._dialog.open(CovidHelpComponent,options)
  }


}
