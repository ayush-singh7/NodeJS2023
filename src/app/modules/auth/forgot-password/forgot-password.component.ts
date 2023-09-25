import { trigger } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { enterTransition } from 'src/animations/animations';
import { RouteIdentifiers } from 'src/app/routes/route-identifiers';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
const fadeIn = trigger('fadeIn', [enterTransition]);

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations:[fadeIn]
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _route:Router,
    private _formBuilder:FormBuilder,
    private _formControlGetter:FormControlGetterService,
    private _utility:UtilityService
    ) { }
  recoverPasswordForm!:FormGroup
  ngOnInit(): void {
    this.createForgotPasswordForm()
  }

  createForgotPasswordForm(){
    this.recoverPasswordForm = this._formBuilder.group({
      email: this._formControlGetter.getControl('email')
    })
  }

  toLogin(){
    this._route.navigate([RouteIdentifiers.AUTH+ '/' + RouteIdentifiers.LOGIN])
  }  


  recoverPassword(){
    if(this.recoverPasswordForm.valid){
      this._utility.openSnackbar("Succesfully Sent Email",3000,"green-snackbar")
    }else{
      this._utility.openSnackbar("Something Went Wrong",3000,"red-snackbar")

    }
  }

}
