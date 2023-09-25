import { Pipe, PipeTransform } from '@angular/core';
import { DEPARTMENT_LIST } from 'src/app/constants/common-info';

@Pipe({
  name: 'departmentName'
})
export class DepartmentNamePipe implements PipeTransform {

  transform(value:any):any  {
    let ans = "";
    let interviewStatus = DEPARTMENT_LIST;

    for(let i=0; i<interviewStatus.length; i++){
      if(value == interviewStatus[i].value){
        return interviewStatus[i].viewValue
      }
    }
   
    
  }

}
