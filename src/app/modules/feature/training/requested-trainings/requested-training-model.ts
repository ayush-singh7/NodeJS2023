import { HOURS_STATUS } from "src/app/constants/common-info";
import { Table } from "src/app/modules/shared/common-table/table-types";
// import { Config } from "../../shared/common-table/table-listing/listing-type";
import {Config} from "../../../shared/common-table/table-listing/listing-type"
export const REQUESTED_TRAINING_CONFIG: Config = {
    label: "Requested Trainings",
    options: {
      search: false,
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
        title: "S.No.",
        id: "sn",
        resolve: (row: any) => row["sn"],
      },
      {
        title: "Training Name",
        id: "training_name",
        sorting: false,
        templateBy: "training_name",
      },
      {
        title: "Timeline To Conduct",
        id: "timeline",
        sorting: false,
        templateBy: "timeline",
      },
      {
        title: "Requested Date",
        id: "requested_date",
        sorting: false,
        templateBy: "requested_date"
      },
      {
        title: "Status",
        id: "status",
        sorting: false,
        templateBy: "status"
      },
      {
        title: "Action",
        id: "action",
        sorting: false,
        templateBy: "action",
      },
      
      
      
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  