import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  TemplateRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { PAGE_SIZE_OPTIONS } from "src/app/constants/common-info";
import { Pagination } from "src/app/models/paginator-model/pagination";

@Component({
  selector: 'app-table-listing',
  templateUrl: './table-listing.component.html',
  styleUrls: ['./table-listing.component.scss']
})
export class TableListingComponent extends Pagination implements OnInit,AfterViewInit  {
  @ViewChild('paginator', { static: true }) paginator!:MatPaginator;
  // itemsPerPageLabel = 'custome_label_name';//customize item per page label
  @Input() config: any;
  @Output() changeListEvent: EventEmitter<any> = new EventEmitter();

  TOTAL_PAGE_SIZE_OPTIONS = PAGE_SIZE_OPTIONS;
  fitlerComponent!:Component
  constructor() {
    super()    
   }

  get label(): string {
    return this.config.label;
  }

  get totalList(): number {
    return this.config.total;
  }
  get hasSearch(): boolean {
    return this.config ? this.config.options.search : false;
  }



  ngOnInit(): void {
    // console.log(this.config,"CONFIG");
    this.fitlerComponent = this.config.options.filter; 
  }

  ngAfterViewInit(){

  }


  get size() {
    
    return this.limit;
  }
  private _emitEvent() {
    
    this.changeListEvent.emit({ ...this.validPageOptions });
  }


  onPageHandler(data:any){
    this.pageOptionsOnChange = data;

    this._emitEvent();
  }

  setIndex(index:number){
    
    this.page = 1
    this._emitEvent();
    // setSearch
  }

  filterData(data:any){
    console.log(data,"12");
    
    this.filterOptions = {...data}; // appending data of fitler inside the queryparamas
    this.page = 1;   
     console.log(this.filterOptions,"FO2");
     
    this._emitEvent()
  }

  searchData(e:string){
    if (this.search !== e) {
      this.search = e;
      this.page = 1;
      console.log(e,'search');
      
      this._emitEvent();
    }
  }


}
