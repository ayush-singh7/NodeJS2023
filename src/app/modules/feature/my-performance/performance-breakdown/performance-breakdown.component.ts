import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-performance-breakdown',
  templateUrl: './performance-breakdown.component.html',
  styleUrls: ['./performance-breakdown.component.scss']
})
export class PerformanceBreakdownComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public ratingData: any,

  ) { }

  ngOnInit(): void {
  }

}
