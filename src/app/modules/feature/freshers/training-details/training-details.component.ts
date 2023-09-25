import { Component, OnInit } from '@angular/core';
import { BREADCRUMB_TRAINING_DETAILS } from 'src/app/constants/breadcrumb';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  // breadCrumb  = BREADCRUMB_TRAINING_DETAILS
  constructor() { }
  get breadCrumb(){
    let ans = [];
    ans.push([...BREADCRUMB_TRAINING_DETAILS.breadcrumb])
    return ans[0];
  }
  ngOnInit(): void {
  }

}
