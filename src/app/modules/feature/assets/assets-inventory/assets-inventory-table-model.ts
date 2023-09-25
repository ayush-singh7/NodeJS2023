import { Config } from "src/app/modules/shared/common-table/table-listing/listing-type";
import { Table } from "src/app/modules/shared/common-table/table-types";

export const ASSETS_INVENTORY_CONFIG: Config = {
    label: "Assets Inventory ",
    options: {
      search: true,
      pagination: true,
      searchPlaceholder: "Search by Asset Name",
      addButton: true,
      ButtonDetails: {
        icon: 'download',
        buttonName: 'Download Report'
      },
      hoursFilter:true,
    //   filterData:HOURS_STATUS,
      showApplyButton:false
    }
    ,
    total: 100,
  };
  
export class UserTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
       
        {
            title: "Asset Name",
            id: "asset_name",
            sorting: false,
            templateBy: "asset_name",
        },
        {
            title: "Assets Category",
            id: "asset_category",
            sorting: false,
            templateBy: "asset_category"
        },
        {
            title: "Company Asset Code",
            id: "asset_code",
            sorting: false,
            templateBy: "asset_code"
        },
        {
            title: "Brand",
            id: "brand",
            sorting: false,
            templateBy: "brand"
        },
        {
            title: "Serial No.",
            id: "serial_no",
            sorting: false,
            templateBy: "serial_no"
        },
        {
            title: "Model",
            id: "model",
            sorting: false,
            templateBy: "model"
        },
        {
            title: "Is Working?",
            id: "is_working",
            sorting: false,
            templateBy: "is_working"
        },
        {
            title: "Company",
            id: "company",
            sorting: false,
            templateBy: "company"
        }
        
        
        
    ];
    options: Table.Options = {
        selection: false,
    };
    constructor(public data: any[]) { }
}
