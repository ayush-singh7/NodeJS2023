import { HOURS_STATUS } from "src/app/constants/common-info";
import { Table } from "src/app/modules/shared/common-table/table-types";
import { Config } from "../../shared/common-table/table-listing/listing-type";

export const DSR_LIST_CONFIG: Config = {
    label: "DSR",
    heading:'List All Worksheets',
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
        title: "Emp Name",
        id: "emp_name",
        sorting: false,
        templateBy: "emp_name",
      },
      {
        title: "EmpId",
        id: "emp_id",
        sorting: false,
        templateBy: "emp_id",
      },
      {
        title: "Email",
        id: "email",
        sorting: false,
        templateBy: "email"
      },
      {
        title: "Employment Type",
        id: "employment_type",
        sorting: false,
        templateBy: "employment_type"
      },
      {
        title: "Date",
        id: "date",
        sorting: false,
        templateBy: "date",
      },
      {
        title: "Total(Logged Hr)",
        id: "logged_hr",
        sorting: false,
        templateBy: "logged_hr"
      },
      {
        title: "Final Approval",
        id: "approval_status",
        sorting: false,
        templateBy: "approval_status"
      },
  
      
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  