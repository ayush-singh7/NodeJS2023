import { Component, OnInit } from '@angular/core';
import { JOB_OPENINGS } from 'src/app/constants/feature/job-opening';
@Component({
  selector: 'app-openings-list',
  templateUrl: './openings-list.component.html',
  styleUrls: ['./openings-list.component.scss']
})
export class OpeningsListComponent implements OnInit {

  constructor() { }

  allJobOpenings = JOB_OPENINGS;

  ngOnInit(): void {
  }

  

}
