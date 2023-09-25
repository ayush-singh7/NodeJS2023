import { FormControl } from "@angular/forms";

export interface NavbarItem {
    name:string,
    link?:string,
    icon?:string,
    subMenu?:Array<NavbarItem>,
    subMenuClicked?:boolean,
    chakra?:boolean
}

export declare const Breakpoints: {
    XSmall: string;
    Small: string;
    Medium: string;
    Large: string;
    XLarge: string;
    Handset: string;
    Tablet: string;
    Web: string;
    HandsetPortrait: string;
    TabletPortrait: string;
    WebPortrait: string;
    HandsetLandscape: string;
    TabletLandscape: string;
    WebLandscape: string;
};
export interface I_JOB_OPENINGS {
    job_title?:string,
    department?:string,
    job_description?:string,
    openings_count: number,
    job_experience_required?:string,
    location:string,
    date?:string,
    job_img:string,
    job_id:number
}

export interface IDate {
    label?: string;
    from_date: FormControl;
    to_date: FormControl;
    maxFromDate?: Date;
    maxToDate?: Date;
    label_from?:string,
    label_to?:string
}

export interface Iroute {
    path?:string;
    fullurl?:any;
}

export interface GalleryModel {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface I_JOB_CANDIDATE {
    department: string;
    job_code:string;
    job_location:string;
    location?:string;
    experience_required:string;
    experience?:string;
    job_title:string;
    candidate_name?:string;
    skillset?:string;
    email?:string;
    phone_number?:string;
}