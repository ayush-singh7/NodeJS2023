import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-regular',
  templateUrl: './table-regular.component.html',
  styleUrls: ['./table-regular.component.scss']
})
export class TableRegularComponent implements OnInit {

  constructor() { }

  @Input() tableData:any;
  ngOnInit(): void {
    
  }

}
