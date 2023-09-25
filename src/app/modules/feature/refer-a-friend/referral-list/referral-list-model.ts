import {Table} from "../../../shared/common-table/table-types"
import {Config} from "../../../shared/common-table/table-listing/listing-type" 
export const REFERRAL_LIST_CONFIG: Config = {
    label: "Referral List",
    options: {
      search: true,
      pagination: true,
      searchPlaceholder: "Search by name",
      addButton: true,
      ButtonDetails: {
        icon: 'download',
        buttonName: 'Download Report'
      },
      
    },
    total: 100,
  };
export class UserTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      
      {
        title: "Candidate Name",
        id: "candidate_name",
        sorting: false,
        templateBy: "candidate_name",
      },
      {
        title: "Candidate Status",
        id: "candidate_status",
        sorting: false,
        templateBy: "candidate_status",
      },
      {
        title: "Department",
        id: "department",
        sorting: false,
        templateBy: "department"
      },
      {
        title: "Experience",
        id: "experience",
        sorting: false,
        templateBy: "experience"
      },
      {
        title: "Position",
        id: "position",
        sorting: false,
        templateBy: "position"
      },
      
      
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }