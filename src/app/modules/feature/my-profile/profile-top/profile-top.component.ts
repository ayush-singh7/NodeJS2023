import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.scss']
})
export class ProfileTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userData:any = {
    name:'Ayush Singh',
    emailID:'ayush.singh@appinventiv.com',
    employeeID:'AI1553',
    designation:'Software Engineer',
    lastLogin:'23 Feb 2023 '
  }

}
