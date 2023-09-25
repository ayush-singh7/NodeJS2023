import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { enterTransition } from 'src/animations/animations';
import { GOOGLE_SIGNIN, PAGE_BUTTON_OPTIONS } from 'src/app/constants/authModulePageData/loginData';
import { Regex } from 'src/app/constants/regex';
import { RouteIdentifiers } from 'src/app/routes/route-identifiers';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
// animation trigger code
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const fadeIn = trigger('fadeIn', [enterTransition]);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeIn]
})

export class LoginComponent implements OnInit {

  constructor(
    private _route: Router,
    private _formControlGetter:FormControlGetterService,
    private _formBuilder:FormBuilder,
    private _utility:UtilityService
  ) { }
  loginWithGoogle: boolean = true
  GOOGLE_SIGNIN = GOOGLE_SIGNIN
  loginForm!:FormGroup
  hide:boolean = true
  ngOnInit(): void {
    this.createLoginForm(); 
  }

  forgotPassword() {
    
    this._route.navigate([RouteIdentifiers.AUTH + '/' + RouteIdentifiers.FORGOT_PASSWORD])
    
  }

  createLoginForm(){
    this.loginForm = this._formBuilder.group({
      // email: ['', [Validators.required,
      //   Validators.pattern(Regex.email), Validators.maxLength(25)]],

      email:  this._formControlGetter.getControl('email'),
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    })
  }

  toDashboard(){
    if(this.loginForm.valid){
      this._utility.showSuccess("Succesfully Login","");
      localStorage.setItem('isLoggedIn','true')
      this._route.navigate(['admin/dashboard'])
    }else{
      this._utility.showError("Something Went Wrong","");

    }
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

  googleLoginPopup(){   
    const auth = getAuth(); 
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user,'908908');
        this._utility.showSuccess("Succesfully Login","");
        localStorage.setItem('isLoggedIn','true')
        this._route.navigate(['admin/dashboard'])
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        console.log(error,'jacl');
        this._utility.showError("Something Went Wrong","");
        
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });    
  }  

  popup(){

  }


}
