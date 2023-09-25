import { Table } from "src/app/modules/shared/common-table/table-types";
import { Config } from "../../shared/common-table/table-listing/listing-type";

export const LEAVES_CONFIG: Config = {
    label: "Leaves",
    options: {
      search: true,
      pagination: true,
      searchPlaceholder: "Search by name, email",
      addButton: true,
      ButtonDetails: {
        icon: 'download',
        buttonName: 'Download Report'
      },
      hoursFilter:true,
    //   filterData:HOURS_STATUS,
      showApplyButton:false
    }
    ,
    total: 100,
  };
  


export class UserTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      
      {
        title: "Actions",
        id: "actions",
        sorting: false,
        templateBy: "actions",
     },
      {
        title: "Leave Type",
        id: "leave_type",
        sorting: false,
        templateBy: "leave_type",
      },
      {
        title: "Request From",
        id: "start_date",
        sorting: false,
        templateBy: "start_date"
      },
      {
        title: "Request To",
        id: "end_date",
        sorting: false,
        templateBy: "end_date"
      },
      {
        title: "Applied On",
        id: "applied_on",
        sorting: false,
        templateBy: "applied_on",
      },
      {
        title: "Status",
        id: "status",
        sorting: false,
        templateBy: "status"
      },
      {
        title: "Level 1",
        id: "level_1",
        sorting: false,
        templateBy: "level_1"
      },
      {
        title: "Level 2",
        id: "level_2",
        sorting: false,
        templateBy: "level_2"
      }          
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  