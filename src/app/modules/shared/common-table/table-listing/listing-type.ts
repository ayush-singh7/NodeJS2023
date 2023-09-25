export interface Options {
    search?: boolean;
    filter?: any;
    pagination?: boolean;
    searchPlaceholder?: string;
    isTogglePresent?: boolean;
    toggleData?: any
    addButton?: boolean;
    actionButton?: boolean;
    tableTabs?: tabsDetails;
    ButtonDetails?: AddButtonDetails,
    hoursFilter?:boolean
    ActionButtonDetails?: AddButtonDetails,
    filterData?:Array<any>
    showApplyButton?:boolean

  }
  export interface Config {
    heading?:string,
    label?: string;
    options?: Options;
    total: number;
    noRecord?: boolean;
    sessionsTotal?: number;
    isSessionsTotalPresent?: boolean;
  }
  
  export interface AddButtonDetails {
    route?: string;
    icon?: string;
    buttonName: string
    isAddbuttonContainsQuery?: boolean
  }
  
  export interface tabsDetails {
    isTableTabsPresent?: boolean,
    tabArray?: string[]
  }
  