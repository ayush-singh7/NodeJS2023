import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { IDate } from 'src/app/models/interfaces/interfaces';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {


  
  
  minDate!: Date;
  @Input() dateObject!: IDate;
  @Output() onDateSelect: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
    if (!("maxFromDate" in this.dateObject)) {
      this.dateObject.maxFromDate = new Date();
    }
    if (!("maxToDate" in this.dateObject)) {
      this.dateObject.maxToDate = new Date();
    }
  }

  dateChange(event: any) {
    let dateValue = event.value ;
    let minFromDate = new Date(dateValue);
    this.minDate = new Date(
      minFromDate.getFullYear(),
      minFromDate.getMonth(),
      minFromDate.getDate()
    );
    this.onDateSelect.emit(event.value);
    this.dateObject.to_date.setValue("");

  }

  setToDate(event:any) {
    if (this.dateObject.to_date.value) {
      let to = new Date(this.dateObject.to_date.value);
      to.setHours(23);
      to.setMinutes(59);
      to.setSeconds(59);
      this.dateObject.to_date.setValue(to);
      this.onDateSelect.emit(event.value);
    }
  }
  // this.onDropDownSelect.emit(event);


}
