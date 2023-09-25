import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DropDown } from 'src/app/models/common-models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-dsr-2.component.html',
  styleUrls: ['./edit-dsr-2.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private _formbuilder:FormBuilder) { }
  editForm!:FormGroup

  projectData = {
    list:[
      { 
        value:'React Js',
        viewValue:'reactJs'
      }
    ],
    label:'Project Name',
    placeholder:'Project name'
  }

  dateData = {
   
    label:'Date',
    placeholder:'Date'
  }


  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editForm = this._formbuilder.group({
      project:[''],
      date:[''],
      est_hr:[''],
      description:['']
    })
  }

 
  config: AngularEditorConfig = {
    height: '18rem',
    minHeight: '5rem',
    editable:true
  }
  
  updateDSR(){
    if(this.editForm.valid){
      
    }else{
      this.editForm.markAllAsTouched()

    }
  }

}
