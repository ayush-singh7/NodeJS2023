import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ENT_DATA } from 'src/app/constants/feature/entrepreneurship-data';

@Component({
  selector: 'app-entrepreneurship',
  templateUrl: './entrepreneurship.component.html',
  styleUrls: ['./entrepreneurship.component.scss']
})
export class EntrepreneurshipComponent implements OnInit {

  constructor(private _route:Router) { }
  entData = ENT_DATA
  ngOnInit(): void {
  }

  shareIdea(){
    this._route.navigate(['admin/startup/add-pitch'])
  }

}
