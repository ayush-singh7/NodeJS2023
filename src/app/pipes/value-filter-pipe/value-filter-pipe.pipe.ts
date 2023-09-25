import { Pipe, PipeTransform } from '@angular/core';
import { DSR_STATUS } from 'src/app/constants/common-info';

@Pipe({
  name: 'valueFilterPipe'
})
export class ValueFilterPipePipe implements PipeTransform {
  
  dsrStatus = DSR_STATUS
  transform(value: number, kind:string): any {
    if(kind == 'DSR_STATUS'){
      let ans = "NA"
      this.dsrStatus.map((item:any)=>{
        if(item.value == value){
          ans =  item.viewValue;
        }
      })
      return ans;

    }
    
  }

}
