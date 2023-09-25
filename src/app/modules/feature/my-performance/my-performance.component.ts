import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BREADCRUMB_PERFORMANCE } from 'src/app/constants/breadcrumb';
import {  MONTHLY_RATINGS_2022, MONTHLY_RATINGS_2023, RATING_DATA } from 'src/app/constants/feature/my-performance-data';
import { PerformanceBreakdownComponent } from './performance-breakdown/performance-breakdown.component';
@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {

  constructor( private _dialog:MatDialog, private route:Router ) { }

  ngOnInit(): void {
    
  }

  get breadCrumb(){
    let ans = [];
    ans.push([...BREADCRUMB_PERFORMANCE.breadcrumb])
    return ans[0];
  }
  ratingYear:any = 2022;
  ratingData = RATING_DATA;

  monthlyRatings = MONTHLY_RATINGS_2022;
  monthlyRatings2023 = MONTHLY_RATINGS_2023;
  openDialogRating(){
    console.log(this.ratingYear,"123");
    let dialogConfig:MatDialogConfig = {
      data:this.ratingData
    }
    const subs = this._dialog.open(PerformanceBreakdownComponent,dialogConfig).afterClosed().subscribe(()=>{
      subs.unsubscribe()
    })
  }

  chooseYear(e:any){
    if(e.value == 2022){
      this.monthlyRatings = MONTHLY_RATINGS_2022
    }else if(e.value == 2023){
      this.monthlyRatings = MONTHLY_RATINGS_2023
    }
  }

  

}
