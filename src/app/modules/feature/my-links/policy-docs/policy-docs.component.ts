import { Component, OnInit } from '@angular/core';
import { POLICY_DOCS } from 'src/app/constants/feature/policy-docs';

@Component({
  selector: 'app-policy-docs',
  templateUrl: './policy-docs.component.html',
  styleUrls: ['./policy-docs.component.scss']
})
export class PolicyDocsComponent implements OnInit {

  constructor() { }
  policyDocsData = POLICY_DOCS;

  ngOnInit(): void {
    console.log(";pader");
    
  }

}
