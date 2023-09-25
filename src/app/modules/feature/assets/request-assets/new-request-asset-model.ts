import { Config } from "src/app/modules/shared/common-table/table-listing/listing-type";
import { Table } from "src/app/modules/shared/common-table/table-types";

export const ADD_NEW_ASSET_CONFIG: Config = {
    label: "ADD_NEW_ASSET",
    options: {
      search: true,
      pagination: true,
      searchPlaceholder: "Search ",
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
        title: "S.No.",
        id: "sn",
        resolve: (row: any) => row["sn"],
      },
      
      {
        title: "Request Reason",
        id: "request_reason",
        sorting: false,
        templateBy: "request_reason"
      },
      {
        title: "Priority",
        id: "priority",
        sorting: false,
        templateBy: "priority"
      },
      {
        title: "Quantity",
        id: "quantity",
        sorting: false,
        templateBy: "quantity",
      },
      {
        title: "Asset Category",
        id: "asset_category",
        sorting: false,
        templateBy: "asset_category",
      },
      {
        title: "Allocation Type",
        id: "allocation_type",
        sorting: false,
        templateBy: "allocation_type"
      },
      {
        title: "Required Date",
        id: "required_date",
        sorting: false,
        templateBy: "required_date"
      }
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  