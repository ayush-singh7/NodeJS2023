import { Pipe, PipeTransform } from '@angular/core';
import { INTERVIEW_STATUS } from 'src/app/constants/common-info';

@Pipe({
  name: 'interviewStatus'
})
export class InterviewStatusPipe implements PipeTransform {

  transform(value: any): any {
    let ans = "";
    let interviewStatus = INTERVIEW_STATUS

    for(let i=0; i<interviewStatus.length; i++){
      if(value == interviewStatus[i].value){
        return interviewStatus[i].viewValue
      }
    }
    
  }

}
