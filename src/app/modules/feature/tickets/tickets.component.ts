import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DropDownAnimation2 } from 'src/animations/animations';
import { PAGE_OPTIONS } from 'src/app/constants/common-info';
import { TICKETS_DATA } from 'src/app/constants/feature/table-data/tickets-data';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Table } from '../../shared/common-table/table-types';
import { TICKETS_LIST_CONFIG, UserTableDataSource } from './tickets-model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  animations:[DropDownAnimation2]
})
export class TicketsComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,private _utility:UtilityService, private _formControlGetter: FormControlGetterService) { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  listingConfig = TICKETS_LIST_CONFIG;
  allTicketsData = TICKETS_DATA ;
  pageOptions = { ...PAGE_OPTIONS };
  newTicketForm!:FormGroup;
  createTicket:boolean = false;

  departmentsData={
    label:'Department',
    placeholder:'Department',
    list:[
      { 
        value:'cat1',
        viewValue:'Admin'
      },
      {
        value:'cat2',
        viewValue:'IT'
      }
    ]
  }
  ticketCategoryData={
    label:'Ticket Category',
    description:'Ticket Category',
    list:[
      {
        value:'courier',
        viewValue:'Courier'
      },
      {
        value:'network',
        viewValue:'Network'
      },
      {
        value:'sim',
        viewValue:'Sim Management'
      }
    ]
  }
  priorityData={
    label:'Priority',
    description:'Priority',
    list:[
      {
        value:'Low',
        viewValue:'Low'
      },
      {
        value:'Medium',
        viewValue:'Medium'
      },
      {
        value:'High',
        viewValue:'High'
      }
    ]
  }


  config: AngularEditorConfig = {
    height: '18rem',
    minHeight: '5rem',
    editable:true
  }

  ngOnInit(): void {
    this.populateTable(this.pageOptions)
    this.createNewTicketForm();
  }

  createNewTicketForm(){
    this.newTicketForm = this._formBuilder.group({
      subject: this._formControlGetter.getControl('name'),
      department:this._formControlGetter.getControl('mandatory'),
      ticket_category:this._formControlGetter.getControl('mandatory'),
      priority:this._formControlGetter.getControl('mandatory'),
      ticket_description:this._formControlGetter.getControl('mandatory'),
      ticket_code:['999']
    })
  }

  populateTable(pageOptions:any){ // this function is emulating the api request query params

    
    if(pageOptions.hasOwnProperty('search')){
      this.allTicketsData = this.allTicketsData.filter((item:any)=>{
        if(
          (item.employee_name.toLowerCase()).includes(pageOptions.search.toLowerCase()) 
          ){  //for custom search on individual fields
          return item;
        }
      })
    }  

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 
    this.listingConfig.total = this.allTicketsData.length

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allTicketsData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index:number) => ({ ...item, sn: beg + index + 1 }))
    ); 

  }

  raiseTicket(){
    
    if(this.newTicketForm.valid){
      this.newTicketForm.value['employee_name'] = 'Suge Knight'
      this.newTicketForm.value['date'] = '02-03-2019'
      this.newTicketForm.value['status'] = 'Pending'
      
      console.log(this.newTicketForm.value,"NFV");
      this._utility.showSuccess('Ticket Raised Succesfully','')

      this.allTicketsData.push(this.newTicketForm.value)
      this.populateTable(this.pageOptions);

    }else{
      this._utility.showError('Please Fill All Fields Correclty','')
      this.newTicketForm.markAllAsTouched()
    }
  }

  onTableEventChange(data:any){
    this.pageOptions = data;
    this.allTicketsData = TICKETS_DATA;
    console.log(this.allTicketsData,this.pageOptions,"1");
    this.populateTable(this.pageOptions)
  }
}
