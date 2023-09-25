import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HRMS';

  user:any;
  loggedIn:any;
  constructor() { }
  ngOnInit(): void {
    // this.popup()
  }


  

}
