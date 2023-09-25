import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { FoodCalendarDataService } from './services/food-calendar-data.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CouponsHistoryComponent } from './coupons-history/coupons-history.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor( private _foodCalendarService:FoodCalendarDataService, private _dialog:MatDialog,
     private _router:Router ) { }

  showTable = false;
  myCalendar = [];
  options = {
    edit:false,
    cancel:true
  }
  ngOnInit(): void {

    
    if(this._foodCalendarService.myCalendar.length == 0){
      console.log("new Formation");
      this._foodCalendarService.createCalendarData()
      this.myCalendar = this._foodCalendarService.myCalendar
    }else{
      this.myCalendar = this._foodCalendarService.myCalendar
      console.log('usingOld');
    }
    
    console.log(this._foodCalendarService.myCalendar,"9999");
  }

  purchaseCoupons(){
    this._router.navigate(['admin/food/purchase-coupons'])
  }
  updateCalendarData(data:any){

    console.log(data,"JUMPKAR2");
    this.myCalendar = data;
    this._foodCalendarService.myCalendar = data
    
  }

  viewDetails(){
    let config = {
      minWidth:'29rem',
      data:'',
      minHeight:'50vh',
      panelClass:'app-full-bleed-dialog'
    }
    this._dialog.open(CouponsHistoryComponent,config);
  }

  getMonthName(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    return monthNames[d.getMonth()]

  }

  
  daysInMonth(){
    let d = new Date();
    return new Date(d.getFullYear(), d.getMonth()+ 1, 0).getDate()
  }

 

}
