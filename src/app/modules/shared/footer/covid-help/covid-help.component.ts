import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-covid-help',
  templateUrl: './covid-help.component.html',
  styleUrls: ['./covid-help.component.scss']
})
export class CovidHelpComponent implements OnInit {
  

  constructor(private fb:FormBuilder, private formControlGetter:FormControlGetterService,
    private _utility:UtilityService) { }
  covidHelpForm!:FormGroup
  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.covidHelpForm = this.fb.group({
      title:this.formControlGetter.getControl('name'),
      mobile:this.formControlGetter.getControl('phone_number'),
      address: this.formControlGetter.getControl('address'),
      description:this.formControlGetter.getControl('long_text')
    })
  }

  onSubmit(){
    if(this.covidHelpForm.valid){
      
    }else{
      this.covidHelpForm.markAllAsTouched()
      this._utility.showError('','')
    }
  }

}
