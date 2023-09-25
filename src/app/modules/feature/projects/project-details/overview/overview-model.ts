import { Table } from "src/app/modules/shared/common-table/table-types";

export const OVERVIEW_LIST_CONFIG: any = {
  label: "Users Management",
  options: {
    search: true,
    pagination: true,
    // filter: UserListFilterComponent,
    searchPlaceholder: "Search by name, email",
    addButton: true,
    ButtonDetails: {
      icon: 'download',
      buttonName: 'Download Report'
    }
  },
  total: 10,
};
export class OverviewTableDataSource implements Table.Source<any> {
  columns: Table.Column<any>[] = [
    {
      title: "Milestones",
      id: "milestone",
      sorting: false,
      templateBy: "milestone",
    },
    {
      title: "Release",
      id: "release",
      sorting: false,
      templateBy: "release",
    },
    {
      title: "Description",
      id: "description",
      sorting: false,
      templateBy: "description",
    },
    {
      title: "	Into QA Date",
      id: "qa_date",
      sorting: false,
      templateBy: "qa_date",
    },
    {
      title: "	Internal Demo Date",
      id: "demo_date",
      sorting: false,
      templateBy: "demo_date",
    },
    {
      title: "		Release Date",
      id: "release_date",
      sorting: false,
      templateBy: "release_date",
    },
    {
      title: "Delivery Status",
      id: "delivery_status",
      sorting: false,
      templateBy: "delivery_status",
    },
    {
      title: "	SignOff Status",
      id: "sign_off",
      sorting: false,
      templateBy: "sign_off",
    },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) { }
}
