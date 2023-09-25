import { Config } from "src/app/modules/shared/common-table/table-listing/listing-type";
import { Table } from "src/app/modules/shared/common-table/table-types";

export const ASSETS_DECLARATION_CONFIG: Config = {
    label: "Assets Decalaration",
    options: {
        search: true,
        pagination: true,
        searchPlaceholder: "Search By Asset Code",
        addButton: true,
        ButtonDetails: {
            icon: 'download',
            buttonName: 'Download Report'
        },
        hoursFilter: true,
        //   filterData:HOURS_STATUS,
        showApplyButton: false
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
            title: "Employee ID",
            id: "employee_id",
            sorting: false,
            templateBy: "employee_id",
        },
        {
            title: "Unique Asset Code",
            id: "asset_code",
            sorting: false,
            templateBy: "asset_code"
        },
        {
            title: "Serial Number",
            id: "serial_number",
            sorting: false,
            templateBy: "serial_number"
        },
        {
            title: "Model Number",
            id: "model_number",
            sorting: false,
            templateBy: "model_number"
        },
        {
            title: "OS",
            id: "os",
            sorting: false,
            templateBy: "os"
        },
        {
            title: "OS Version",
            id: "os_version",
            sorting: false,
            templateBy: "os_version"
        },

        {
            title: "Brand",
            id: "brand",
            sorting: false,
            templateBy: "brand"
        },
        {
            title: "Colour",
            id: "colour",
            sorting: false,
            templateBy: "colour"
        },
        {
            title: "Images",
            id: "images",
            sorting: false,
            templateBy: "images"
        },
        {
            title: "Is Working?",
            id: "working_condition",
            sorting: false,
            templateBy: "working_condition"
        },
        {
            title: "Added",
            id: "added",
            sorting: false,
            templateBy: "added"
        }



    ];
    options: Table.Options = {
        selection: false,
    };
    constructor(public data: any[]) { }
}
