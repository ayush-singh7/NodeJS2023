import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PATTERN, Regex } from 'src/app/constants/regex';

@Pipe({
  name: 'showError',
  pure:false
})
export class ShowErrorPipe implements PipeTransform {

  transform(form: FormGroup | FormControl, control: string, label: string): string {
    
    


    if (form.get(control)?.touched || form.get(control)?.invalid || form.constructor.name == 'FormControl' ) {
      
      const errors = form.get(control)?.errors;
      // console.log(errors,"12");
      
      if (errors?.hasOwnProperty("required")) {
        return `${label} is required`;
      }
      else if (errors?.hasOwnProperty("minlength")) {
        return `Minimum ${errors.minlength.requiredLength} characters required`;
      }
      else if (errors?.hasOwnProperty("maxlength")) {
        return `Maximum ${errors.maxlength.requiredLength} characters required`;
      }
      else if (errors?.hasOwnProperty("min")) {
        return `${label} should be greater than ${errors.min.min}`
      }
      else if (errors?.hasOwnProperty("max")) {
        return `${label} should be less than ${errors.max.max}`
      }
      else if (errors?.hasOwnProperty("pattern")) {
        
        if (
          control === "password" ||
          control === "confirmPassword" ||
          control === "oldPassword" ||
          control.includes('password')
        ) {
          
          return `${label} must contain Minimum eight characters, at least one letter (upper/lower case) and one number and one special char
          `;
        }
        else {
          let pattern = errors.pattern.requiredPattern;
          // console.log(pattern,"PATTERN");
          
          return this.PATTERN_ERRORS(pattern, label);
        }
        // return `${label} should have a valid pattern`
      } else if (errors?.hasOwnProperty("passwordNotMatch")) {
        return `Your passwords do not match, please check.`;
      }
    }
    return '';
  }

  PATTERN_ERRORS(pattern: any, key: string):any {
    
    let comment: string
    if (pattern == Regex.email) {
      comment = `${key} is invalid or not in correct format`;
      return comment;

    }
    else if (pattern == Regex.password) {
      comment = `${key} can not contain blank spaces`
      return comment;

    }
    else if (pattern == PATTERN.name) {
      comment = `No digits/special characters empty spaces`
      return comment;
      
    }
    else if (pattern == Regex.phone) {
      comment = `${key} can contain only digits`
      return comment;
    }
  }
}
