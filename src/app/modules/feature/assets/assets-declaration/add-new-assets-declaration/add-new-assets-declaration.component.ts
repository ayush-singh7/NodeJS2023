import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropDownAnimation2 } from 'src/animations/animations';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';

@Component({
  selector: 'app-add-new-assets-declaration',
  templateUrl: './add-new-assets-declaration.component.html',
  styleUrls: ['./add-new-assets-declaration.component.scss'],
  animations:[DropDownAnimation2]
})
export class AddNewAssetsDeclarationComponent implements OnInit {

  @Output() assetsDeclarationData = new EventEmitter<any>();
  
  constructor(private _formControl:FormControlGetterService, private _formBuilder:FormBuilder) { }
  assetsDeclarationForm!:FormGroup;
  showAssetsForm:boolean = false;
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.assetsDeclarationForm = this._formBuilder.group({
      employee_id:['AI1553'],
      asset_code:this._formControl.getControl('code'),
      serial_number:this._formControl.getControl('code'),
      model_number:this._formControl.getControl('code'),
      os:this._formControl.getControl('name'),
      os_version: this._formControl.getControl('mandatory'),
      brand:this._formControl.getControl('name'),
      colour:this._formControl.getControl('name'),
      working_condition: this._formControl.getControl('mandatory')
    })
  }
  
  osData={
    label:'OS',
    placeholder:'OS',
    list:[
      {
        value:'android',
        viewValue:'Android'
      },
      {
        value:'ios',
        viewValue:'IOS',
      }
    ]
  }
  workingConditionData = {
    label:'Working Condition',
    placeholder:'working condition',
    list:[
      {
        value:false,
        viewValue:'False'
      },
      {
        value:true,
        viewValue:'True'
      }
    ]
  }

  submit(){
    if(this.assetsDeclarationForm.valid){
      this.assetsDeclarationData.emit(this.assetsDeclarationForm.value);
    }
  }
}
