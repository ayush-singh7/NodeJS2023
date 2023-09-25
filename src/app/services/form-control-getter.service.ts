import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { PATTERN, Regex } from '../constants/regex';

@Injectable({
  providedIn: 'root'
})
export class FormControlGetterService {

  constructor() { }
    VALIDATION = {
    email: [
      Validators.pattern(Regex.email),
      Validators.email,
      Validators.maxLength(40),
    ],
    password: [Validators.minLength(3), Validators.maxLength(20), Validators.pattern(PATTERN.password_N)],
    name: [Validators.minLength(3), Validators.maxLength(20), Validators.pattern(PATTERN.name)],
    phone_number:[Validators.minLength(6), Validators.maxLength(10), Validators.pattern(Regex.phone)],
    single_digit:[Validators.minLength(1), Validators.maxLength(2),Validators.pattern(Regex.phone) ],
    skillset:[Validators.minLength(3), Validators.maxLength(200), Validators.pattern(PATTERN.name)],
    mandatory:[],
    address:[Validators.minLength(3), Validators.maxLength(200), Validators.pattern(PATTERN.name)],
    code:[Validators.minLength(1),Validators.maxLength(3)],
    long_text:[Validators.minLength(3), Validators.maxLength(200), Validators.pattern(PATTERN.name)],

  };

  getControl(name: string, required = true) {
    //@ts-ignore: unreachable code error

    let compose = [...this.VALIDATION[name]];
    if (required) {
      if (name === 'checkbox') {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return [null, compose];
  }
}

// import { Injectable } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { LIMIT } from 'src/app/constants/limit';
// import { PATTERN } from 'src/app/constants/pattern';

// @Injectable({
//   providedIn: 'root',
// })
// export class FormServiceService {
//   constructor() {}


// }

