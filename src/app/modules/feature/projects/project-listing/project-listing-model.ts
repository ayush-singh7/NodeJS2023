// import { Table } from "src/app/shared/common-table/table-types";
import {Table} from "src/app/modules/shared/common-table/table-types";

export const PROJECTS_LIST_CONFIG: any = {
  label: "Project List",
  options: {
    search: true,
    pagination: true,
    searchPlaceholder: "Search by name, email",
   
  },
  total: 10,
};
export class ProjectsTableDataSource implements Table.Source<any> {
  columns: Table.Column<any>[] = [
    {
      title: "Project Name",
      id: "project_name",
      sorting: false,
      templateBy: "project_name",
    },
    {
      title: "Billing Type",
      id: "billing_type",
      sorting: false,
      templateBy: "billing_type",
    },
    {
      title: "Resources",
      id: "resources",
      sorting: false,
      templateBy: "resources",
    },
    {
      title: " Hrs",
      id: "hrs",
      sorting: false,
      templateBy: "hrs",
    },
    {
      title: "Total Milestone",
      id: "total_milestone",
      sorting: false,
      templateBy: "total_milestone",
    },
    {
      title: " Delivered",
      id: "delivered",
      sorting: false,
      templateBy: "delivered",
    },
    {
      title: "Pending",
      id: "pending",
      sorting: false,
      templateBy: "pending",
    },
    {
      title: "Complete",
      id: "complete",
      sorting: false,
      templateBy: "complete",
    },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) { }
}
