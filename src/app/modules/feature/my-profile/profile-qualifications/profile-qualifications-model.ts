import { Config } from "src/app/modules/shared/common-table/table-listing/listing-type";
import { Table } from "src/app/modules/shared/common-table/table-types";

export const QUALIFICATIONS_CONFIG: Config = {
  label: "Qualifications",
  options: {
    search: true,
    pagination: true,
    searchPlaceholder: "Search by Institute Name",
  },
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
        title: "School/University Name",
        id: "institute",
        sorting: false,
        templateBy: "institute",
      },
      {
        title: "Time Period",
        id: "time_period",
        sorting: false,
        templateBy: "time_period"
      },
      {
        title: "Education Level",
        id: "education_level",
        sorting: false,
        templateBy: "education_level"
      },
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
  