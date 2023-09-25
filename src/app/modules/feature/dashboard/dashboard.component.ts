import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DASHBOARD_MESSAGES_REFERRAL } from 'src/app/constants/feature/dashboardMessages';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private _router:Router) { }
  clear_interval:any;
  dragging:boolean = false;
  mouseLocation:any;
  galleryLocation:any

  ngOnInit(): void {
    // this.clear_interval = setInterval(()=>{
    //   this.changeSlide(true)
    // },2500)
  }
  referralMessages = DASHBOARD_MESSAGES_REFERRAL

  newJoinings=['aakritiSingh.png','amanGaur.png','chitransh.png','saurabh.png']
  dashboardData = {
    heading:'New Family Members',
    multipleSlides:true
  }
  current = 0;


  ngOnDestroy(){
    clearInterval(this.clear_interval);
  }

  toJobOpenings(){
    this._router.navigate(['admin/refer-candidate/job-openings'])
  }
  

}
