import { HOURS_STATUS } from "src/app/constants/common-info";
import { Config } from "src/app/modules/shared/common-table/table-listing/listing-type";
import { Table } from "src/app/modules/shared/common-table/table-types";

export const MANUAL_PUNCH_CONFIG: Config = {
    label: "Manual Punch",
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
      filterData:HOURS_STATUS,
      showApplyButton:false
    }
    ,
    total: 100,
  };
  


export class UserTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      
        
      {
        title: "Name",
        id: "name",
        sorting: false,
        templateBy: "name",
      },
      {
        title: "Punch Time",
        id: "punch_time",
        sorting: false,
        templateBy: "punch_time",
      },
      {
        title: "Direction",
        id: "direction",
        sorting: false,
        templateBy: "direction",
      }
      
      
      
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  