import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-profile-change-password',
  templateUrl: './profile-change-password.component.html',
  styleUrls: ['./profile-change-password.component.scss']
})
export class ProfileChangePasswordComponent implements OnInit {

  constructor(private _fb:FormBuilder, private _utility:UtilityService, private _formControlGetter:FormControlGetterService) { }
  changePasswordForm!:FormGroup;

  ngOnInit(): void {
    this.createChangePasswordForm()
  }

  createChangePasswordForm(){
    this.changePasswordForm = this._fb.group({
      current_password: this._formControlGetter.getControl('password'),
      new_password: this._formControlGetter.getControl('password'),
      confirm_password: this._formControlGetter.getControl('password')
     })
  }

  resetPassword(){
    if(this.changePasswordForm.valid){
      if(this.changePasswordForm.value.new_password != this.changePasswordForm.value.confirm_password){
          this._utility.showError('Passwords Do Not Match','')
      }else{
        this._utility.showSuccess('Successfully changed password','')
      }
      
    }else{
      this._utility.showError('Please fill all the fields','')
      this.changePasswordForm.markAllAsTouched()
    }
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

}
