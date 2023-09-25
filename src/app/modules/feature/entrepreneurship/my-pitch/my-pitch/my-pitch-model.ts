import { Table } from "src/app/modules/shared/common-table/table-types";
import { Config } from "../../../../shared/common-table/table-listing/listing-type";

export const PITCH_CONFIG: Config = {
    label: "My Pitch",
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
      showApplyButton:false
    }
    ,
    total: 100,
  };
  


export class UserTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      
      {
        title: "#",
        id: "sr_no",
        sorting: false,
        templateBy: "sr_no",
      },
      {
        title: "Title",
        id: "title",
        sorting: false,
        templateBy: "title"
      },
      {
        title: "Industry",
        id: "industry",
        sorting: false,
        templateBy: "industry"
      },
      {
        title: "Technical/ Non Technical",
        id: "type",
        sorting: false,
        templateBy: "type",
      },
      {
        title: "Submitted On",
        id: "submitted_on",
        sorting: false,
        templateBy: "submitted_on"
      },
      {
        title: "Action",
        id: "action",
        sorting: false,
        templateBy: "action"
      }   
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  