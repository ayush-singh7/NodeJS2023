import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss']
})
export class InputTimeComponent implements OnInit {

  constructor() { }
  @Input() myControl:any;
  
  ngOnInit(): void {
    console.log('123',this.myControl.value);
    
  }

  mf(e:any){
    
    // console.log(this.myControl.value,"()()()");
    
    
  }
}
