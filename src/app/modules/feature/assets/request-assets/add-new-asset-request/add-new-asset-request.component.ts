import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropDownAnimation2 } from 'src/animations/animations';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-add-new-asset-request',
  templateUrl: './add-new-asset-request.component.html',
  styleUrls: ['./add-new-asset-request.component.scss'],
  animations:[DropDownAnimation2]
})
export class AddNewAssetRequestComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder, private _utiltiy:UtilityService,
    private _formControl:FormControlGetterService, private _utility:UtilityService ) { }
  assetRequestForm!:FormGroup
  @Output() newAssetsData = new EventEmitter<any>();
  showAssetRequestForm:boolean = false;
  ngOnInit(): void {
    this.createAssetRequestForm()
  }

  createAssetRequestForm(){
    this.assetRequestForm = this._formBuilder.group({
      asset_category: this._formControl.getControl('mandatory'),
      quantity:this._formControl.getControl('mandatory'),
      priority:this._formControl.getControl('mandatory'),
      required_date: this._formControl.getControl('mandatory'),
      allocation_type:this._formControl.getControl('mandatory'),
      request_reason:this._formControl.getControl('mandatory')
    })
  }

  assetCategoryData = {
    label:'Assets Category',
    placeholder:'Assets Category',
    list: [
      { 
        value:'laptop',
        viewValue:'Laptop'
      },
      {
        value:'Mobile',
        viewValue:'mobile'
      },
      {
        value:'tablet',
        viewValue:'Tablet'
      }
    ]
  }

  quantityData = {
    label:'Quantity',
    placeholder:'quantity',
    list:[
      {
        value:'1',
        viewValue:'1'
      },
      {
        value:'2',
        viewValue:'2'
      },
      {
        value:'3',
        viewValue:'3'
      }
    ]
  }

  priorityData = {
    label:'Priority',
    placeholder:'priority',
    list:[
      {
        value:'medium',
        viewValue:'Medium'
      },
      {
        value:'low',
        viewValue:'Low'
      },
      {
        value:'high',
        viewValue:'High'
      }
    ]
  }


  requiredDateData = {
    label:'Required By Date',
    placeholder:'required date',
    minDate: new Date(),
  }
  
  allocationTypeData = {
    label:'Allocation Type',
    placeholder:'allocation Type',
    list:[
      {
        value:'Permanent',
        viewValue:'permanent'
      },
      {
        value:'temporary',
        viewValue:'Temporary'
      }
    ]
  }

  addNewAsset(){
    console.log("asdfa",this.assetRequestForm.value);
    if(this.assetRequestForm.valid){
      this._utility.showSuccess("Successfully Added Asset Request","")
      this.assetRequestForm.reset();
      this.newAssetsData.emit(this.assetRequestForm.value)
    }else{
      this._utility.showError("Please Fill All required Fields","")
      this.assetRequestForm.markAllAsTouched()
    }
  }
  





}
