import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-appraisal',
  templateUrl: './profile-appraisal.component.html',
  styleUrls: ['./profile-appraisal.component.scss']
})
export class ProfileAppraisalComponent implements OnInit {

  constructor() { }
  isChecked:boolean = false;
  ngOnInit(): void {
  }

  onChange(e:any){
    
  }
}
