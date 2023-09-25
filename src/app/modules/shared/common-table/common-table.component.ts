import { AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ForDirective } from './for-directive/for.directive';
import { Table } from "./table-types";


@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input() tableSource!: Table.Source<any>;

  @ContentChildren(ForDirective) templates!: QueryList<ForDirective>;

  get dataSource(): MatTableDataSource<any> {
    
    return new MatTableDataSource(this.tableSource.data);
  }

  get displayedColumns(): string[] {
    const columns = this.tableSource.columns.map(column => column.id);
    // console.log(columns,"C");
    return this.tableSource.options && this.tableSource.options.selection
      ? ["selection", ...columns]
      : columns;
  }



  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    // console.log(this.tableSource,'TS_CT');    
  }

  templateOutlet(column: Table.Column<any>) {
    // console.log(column,"*((*(*(**(")
    if (this.templates) {
      const template = this.templates.find(
        query => query.name === column.templateBy
      );
      return template ? template.ref : null;
    }
    return null;
  }
}
