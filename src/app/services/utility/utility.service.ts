import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import {ToastrService} from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _snackbar:MatSnackBar, private toastrService:ToastrService ) { }

  openSnackbar(message:string,duration:number, panelClass:any){
    let config = new MatSnackBarConfig();
    config = {
      duration:duration,
      panelClass:[panelClass],
    }
    this._snackbar.open(message,"Close",config);
    
  }

  parseDateToTimeStamp(obj: any) {
      
    const d = new Date(obj)
    console.log(obj,"jimMoro");
    
    let newDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
    
    return newDate.slice(0,10)
    
    // return newDate;     
  }


  public showSuccess(message:string,title:string): void {
    this.toastrService.success(message,title);
  }

  public showInfo(message:string,title:string): void {
    this.toastrService.info(message,title);
  }

  public showWarning(message:string,title:string): void {
    this.toastrService.warning(message,title);
  }

  public showError(message:string,title:string): void {
    this.toastrService.error(message,title);
  }






  // let config = new MatSnackBarConfig();
  // config.duration = 5000;
  // config.panelClass = ['red-snackbar']
  // this.snackBar.open("This is a message!", "ACTION", config);
}
