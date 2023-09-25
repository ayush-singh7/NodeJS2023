import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAX_DATE, MIN_DATE } from 'src/app/constants/common-info';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
  minDate = MIN_DATE;
  maxDate = MAX_DATE;
  constructor() { }
  initialDate = new FormControl();
  @Input() date:any
  @Input() label:any;
  @Input() datePickerData:any;
  @Output() dateData = new EventEmitter<any>()

  ngOnInit(): void {
  }

  get MINDATE(){
    return this.datePickerData.minDate
  }

  get MAXDATE(){
    return this.datePickerData.maxDate
  }

  dateChange(data:any){
    console.log(data,"POLL123");
    let obj = {
      label:this.datePickerData.label,
      value:data.value
    }
    this.dateData.emit(obj);
    console.log(obj);
    
  }



}