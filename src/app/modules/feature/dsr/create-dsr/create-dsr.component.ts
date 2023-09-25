import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { DropDownAnimation2 } from 'src/animations/animations';

@Component({
  selector: 'app-create-dsr',
  templateUrl: './create-dsr.component.html',
  styleUrls: ['./create-dsr.component.scss'],
  animations:[DropDownAnimation2]
})
export class CreateDsrComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder, 
    private _formControlGetter:FormControlGetterService,
    private _utility: UtilityService) { }
  createDSR!:FormGroup;
  checked:boolean = false;
  showCreateDSR:boolean = true
  @Output() dsrValue = new EventEmitter<any>();

  dsrDateData={
    label:' Date',
    placeholder:'Date'
  }
  projectData={
    label:'Project',
    placeholder:'Project',
    list:[
      {
        value:'1',
        viewValue:'React JS Training'
      },
      {
        value:'2',
        viewValue:'Angular Training'
      }
    ]
  }

  config: AngularEditorConfig = {
    height: '18rem',
    minHeight: '5rem',
    editable:true
  }

  
  

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.createDSR = this._formBuilder.group({
      projectName: this._formControlGetter.getControl('mandatory'),
      date:this._formControlGetter.getControl('mandatory'),
      est_hr:this._formControlGetter.getControl('mandatory'),
      description:this._formControlGetter.getControl('mandatory')
    })
  }

  saveDSR(){
    console.log(this.createDSR.value,"jillMMMMMM");
    
    this.dsrValue.emit(this.createDSR.value);
    if(this.createDSR.valid){
      this.createDSR.value['date'] = this._utility.parseDateToTimeStamp(this.createDSR.value.date)
    }else{
      this.createDSR.markAllAsTouched()
    }
  }

  noWork(event:any){
    
    if(event.checked == true){
      let str = "No work has been done today"
      this.createDSR.get('est_hr')?.setValue('0:00');
      this.createDSR.get('description')?.setValue(str)
    }else if(event.checked == false){
      this.createDSR.get('est_hr')?.setValue('');
      this.createDSR.get('description')?.setValue('')
      
    }

  }

}
