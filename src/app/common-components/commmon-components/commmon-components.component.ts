import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-commmon-components',
  templateUrl: './commmon-components.component.html',
  styleUrls: ['./commmon-components.component.scss']
})
export class CommmonComponentsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data,"inputData");
    
  }



}
