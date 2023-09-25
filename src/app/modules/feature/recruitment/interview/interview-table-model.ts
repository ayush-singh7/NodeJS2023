import { HOURS_STATUS } from "src/app/constants/common-info";
import { Config } from "src/app/modules/shared/common-table/table-listing/listing-type";
import { Table } from "src/app/modules/shared/common-table/table-types";

export const INTERVIEW_CONFIG: Config = {
    label: "Interview",
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
        title: "S.No.",
        id: "sn",
        resolve: (row: any) => row["sn"],
      },
      {
        title: "Department",
        id: "department",
        sorting: false,
        templateBy: "department",
      },
      {
        title: "Name",
        id: "name",
        sorting: false,
        templateBy: "name",
      },
      {
        title: "Email",
        id: "email",
        sorting: false,
        templateBy: "email"
      },
      {
        title: "Mobile Number",
        id: "mobile_number",
        sorting: false,
        templateBy: "mobile_number"
      },
      {
        title: "Round Type",
        id: "round_type",
        sorting: false,
        templateBy: "round_type",
      },
      {
        title: "Interview Date",
        id: "interview_date",
        sorting: false,
        templateBy: "interview_date"
      },
      {
        title: "Interview Time",
        id: "interview_time",
        sorting: false,
        templateBy: "interview_time"
      },
      {
        title: "Final Status",
        id: "final_status",
        sorting: false,
        templateBy: "final_status"
      },
  
      
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  