import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.scss']
})
export class StaffMemberComponent implements OnInit {

  constructor() { }
  @Input() employeeData:any;

  ngOnInit(): void {
  }

}
