import { Pipe, PipeTransform } from '@angular/core';
import { EDUCATION_LEVEL } from 'src/app/constants/common-info';
@Pipe({
  name: 'educationLevelPipe',
  pure:false
})
export class EducationLevelPipePipe implements PipeTransform {
  
  educationLevel = EDUCATION_LEVEL

  transform(value: any): any {
    let ans;
   
    
    for(let i=0; i<this.educationLevel.length; i++){
      if(this.educationLevel[i].value == value){
        ans=this.educationLevel[i].viewValue
      }
    }
    return ans;

    
    
  }

}
