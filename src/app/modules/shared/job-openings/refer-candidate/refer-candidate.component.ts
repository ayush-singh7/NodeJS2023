import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { getReferFriendDataAction } from 'src/app/store/actions';

@Component({
  selector: 'app-refer-candidate',
  templateUrl: './refer-candidate.component.html',
  styleUrls: ['./refer-candidate.component.scss']
})
export class ReferCandidateComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder:FormBuilder,
    private _formControlGetter:FormControlGetterService,
    private _store:Store,
    private _utility:UtilityService,
    private dialogRef: MatDialogRef<ReferCandidateComponent>
  ) { }
  // constructor(){ }

    referCandidateForm!:FormGroup
  ngOnInit(): void {
    this.createReferCandidateForm(); 
    // console.log(this.referCandidateForm.value,"DARA");
    this.setOldValues()
  }
  setOldValues(){
    this.referCandidateForm.get('department')?.setValue(this.data.department);
    // this.referCandidateForm.get('department')?.disable();

    this.referCandidateForm.get('job_location')?.setValue(this.data.location);
    // this.referCandidateForm.get('job_location')?.disable();

    this.referCandidateForm.get('experience_required')?.setValue(this.data.job_experience_required);
    // this.referCandidateForm.get('experience_required')?.disable()

    this.referCandidateForm.get('job_title')?.setValue(this.data.job_title);
    // this.referCandidateForm.get('job_title')?.disable()
    // this.referCandidateForm.get('job_code')?.disable()
  }

  createReferCandidateForm(){
    this.referCandidateForm = this._formBuilder.group({
      department:['',],
      job_code:['AI101'],
      job_location:[''],
      location:this._formControlGetter.getControl('mandatory'),
      experience_required:[''],
      experience:this._formControlGetter.getControl('single_digit'),
      job_title:this._formControlGetter.getControl('name'),
      candidate_name: this._formControlGetter.getControl('name'),
      skillset:this._formControlGetter.getControl('skillset'),
      email:this._formControlGetter.getControl('email'),
      phone_number: this._formControlGetter.getControl('phone_number')
    })
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }
  
  submitReferCandidate(){
    console.log(this.referCandidateForm.value,this.referCandidateForm.controls.location,"RC_ormValue");
    if(this.referCandidateForm.valid){
      this._utility.showSuccess("Succesfully Applied","")
      this._store.dispatch(getReferFriendDataAction(this.referCandidateForm.value))
      this.dialogRef.close()
    }else{
      this.referCandidateForm.markAllAsTouched();
      this._utility.showError("Something Went Wrong","")
    }
  }

}
