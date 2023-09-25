import { Table } from "src/app/modules/shared/common-table/table-types";

export class UserTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      
        
      {
        title: "Date Of Joining",
        id: "joining_date",
        sorting: false,
        templateBy: "joining_date",
      },
      {
        title: "Office Shift",
        id: "office_shift",
        sorting: false,
        templateBy: "office_shift"
      },
     
      
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  