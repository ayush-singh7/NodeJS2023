import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { Store } from "@ngrx/store";
import { getPitchIdeaAction } from 'src/app/store/actions';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-share-idea',
  templateUrl: './share-idea.component.html',
  styleUrls: ['./share-idea.component.scss']
})
export class ShareIdeaComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, 
    private formConrolGetter:FormControlGetterService,
    private _store:Store, private _utility:UtilityService) { }
  pitchForm!:FormGroup;
  config: AngularEditorConfig = {
    height: '18rem',
    minHeight: '5rem',
    editable:true
  }
  
  ngOnInit(): void {
    this.createForm()
    this.setValues()
  }
  setValues(){
    let obj = {
      name:'Ayush Singh',
      empId:'AI 1553',
      dob:'21-03-2000'
    }
    this.pitchForm.patchValue(obj);
    this.pitchForm.get('name')?.disable()
    this.pitchForm.get('empId')?.disable()
    this.pitchForm.get('dob')?.disable()

  }


  createForm(){
    this.pitchForm =  this.fb.group({
      name: this.formConrolGetter.getControl('name'),
      empId: this.formConrolGetter.getControl('name'),
      dob: this.formConrolGetter.getControl('mandatory'),
      pitchName: this.formConrolGetter.getControl('name'),
      professional: this.formConrolGetter.getControl('mandatory'),
      empTitle:this.formConrolGetter.getControl('mandatory')
    })
  }
  submit(){
    if(this.pitchForm.valid){
      this._store.dispatch(getPitchIdeaAction(this.pitchForm.value))
      this._utility.showSuccess("Succesfully added request","")
    }else{
      this._utility.showError("Something went wrong","")
      this.pitchForm.markAllAsTouched()
    }
  }

  cancelPitch(){
    this.router.navigate(['admin/idea'])
  }

}

