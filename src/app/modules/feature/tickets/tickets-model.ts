import { Config } from "../../shared/common-table/table-listing/listing-type";
import { Table } from "../../shared/common-table/table-types";
export const TICKETS_LIST_CONFIG: Config = {
    label: "Tickets",
    options: {
      search: true,
      pagination: true,
      searchPlaceholder: "Search by name",
      addButton: true,
      ButtonDetails: {
        icon: 'download',
        buttonName: 'Download Report'
      },
      
    }
    ,
    total: 100,
  };
export class UserTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      
      {
        title: "Ticket Code",
        id: "ticket_code",
        sorting: false,
        templateBy: "ticket_code",
      },
      {
        title: "Priority",
        id: "priority",
        sorting: false,
        templateBy: "priority",
      },
      {
        title: "Employee",
        id: "employee_name",
        sorting: false,
        templateBy: "employee_name"
      },
      {
        title: "Subject",
        id: "subject",
        sorting: false,
        templateBy: "subject"
      },
      {
        title: "Status",
        id: "status",
        sorting: false,
        templateBy: "status"
      },
      {
        title: "Date",
        id: "date",
        sorting: false,
        templateBy: "date",
      }
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }