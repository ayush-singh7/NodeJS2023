import {Table} from "../../../shared/common-table/table-types"
import {Config} from "../../../shared/common-table/table-listing/listing-type" 
export const NEW_IDEA_CONFIG: Config = {
    label: "New Ideas",
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
        title: "Industry",
        id: "industry",
        sorting: false,
        templateBy: "industry",
      },
      {
        title: "Title",
        id: "title",
        sorting: false,
        templateBy: "title",
      },
      {
        title: "Category",
        id: "category",
        sorting: false,
        templateBy: "category"
      },
      {
        title: "submitted_on",
        id: "submitted_on",
        sorting: false,
        templateBy: "submitted_on"
      }
      
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }