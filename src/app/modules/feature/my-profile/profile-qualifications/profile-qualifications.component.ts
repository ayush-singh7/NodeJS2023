import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationBoxComponent } from 'src/app/common-components/confirmation-box/confirmation-box.component';
import { CONFIRMATION_BOX, DEGREE_LIST, EDUCATION_LEVEL, LANGUAGES, MAX_DATE, MIN_DATE, PAGE_OPTIONS } from 'src/app/constants/common-info';
import { Table } from 'src/app/modules/shared/common-table/table-types';
import { FormControlGetterService } from 'src/app/services/form-control-getter.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { EditQualificationsDialogComponent } from './edit-qualifications-dialog/edit-qualifications-dialog.component';
import { QUALIFICATIONS_CONFIG, UserTableDataSource } from './profile-qualifications-model';

@Component({
  selector: 'app-profile-qualifications',
  templateUrl: './profile-qualifications.component.html',
  styleUrls: ['./profile-qualifications.component.scss']
})
export class ProfileQualificationsComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,
     private _formControlGetter:FormControlGetterService,
     private _dialog:MatDialog,
     private _utility:UtilityService) { }
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  maxDate:Date=MAX_DATE;
  minDate:Date=MIN_DATE;
  pageOptions = PAGE_OPTIONS;
  allDegreeList = DEGREE_LIST;
  degreeList = DEGREE_LIST
  fromData={
    label:'From Date',
    placeholder:'From Date',
    minDate:MIN_DATE,
    maxDate:MAX_DATE
  }
  toData={
    label:'To Date',
    placeholder:'To Date',
    minDate:MIN_DATE,
    maxDate:MAX_DATE
  }
  languageData={
    label:'Language',
    placeholder:'language',
    list:LANGUAGES
  }
  educationData={
    label:'Education',
    placeholder:"Education",
    list:EDUCATION_LEVEL
  }



  qualificationsForm!:FormGroup
  listingConfig = QUALIFICATIONS_CONFIG;
  ngOnInit(): void {
    
    this.fetchData(this.pageOptions) 
    this.createQualificationsForm()

  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

  createQualificationsForm(){
    this.qualificationsForm = this._formBuilder.group({
      institute: this._formControlGetter.getControl('name'),
      education_level: this._formControlGetter.getControl('mandatory'),
      date_from:this._formControlGetter.getControl('mandatory'),
      date_to:this._formControlGetter.getControl('mandatory'),
      language: this._formControlGetter.getControl('mandatory'),
      prof_course: this._formControlGetter.getControl('name'),
      description: this._formControlGetter.getControl('name')
    })
  }

  // x = new FormControl({value:'', disabled:''})
  // this.form.get('institute').disable();

  fetchData(pageOptions:any){
    const intialIndex =  1; // normal will use from api response

    // const degreeList = this.degreeList  //normal will be fetched from api
  
    if(pageOptions.hasOwnProperty('search')){
      this.degreeList = this.degreeList.filter((item:any)=>{
        if(
          (item.institute.toLowerCase()).includes(pageOptions.search.toLowerCase()) 
        ){  //for custom search on individual fields
          return item;
        }
      })
    }
    


    
    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit 

    let displayRow = [];
    for(let i=beg; i<end && i<this.listingConfig.total ; i++){
       displayRow.push(this.allDegreeList[i]);
    }
    

    
    
    this.tableSource = new UserTableDataSource(
      this.degreeList.map((item: any, index:number) => ({ ...item, sn: intialIndex + index }))
      );
    this.listingConfig.total = this.tableSource.data.length;
    
    console.log(this.tableSource.data,"123",this.degreeList);
    
  }

  save(){
    if(this.qualificationsForm.valid){

      this.qualificationsForm.value['id'] = Math.floor(Math.random() * 1000)
      // console.log(this.tableSource.data,"finalData");
      this._utility.showSuccess("Succesfully Added Qualification Data","")
      this.degreeList.push(this.qualificationsForm.value);
      this.qualificationsForm.reset()
      this.fetchData(this.pageOptions);
    }else{
      this._utility.showError("Please fill all the fields Correctly","")
      this.qualificationsForm.markAllAsTouched()
    }

  }

  editRow(rowData:any){
    
    const config:MatDialogConfig = {
      data:rowData,
      autoFocus:false,
      maxHeight:'90vh'
    }
    let dialog = this._dialog.open(EditQualificationsDialogComponent,config).afterClosed().subscribe((res:any)=>{
      for(let i=0; i<this.tableSource.data.length; i++){
        if(this.degreeList[i].id == res.id){
          this.degreeList[i] = res
          this._utility.showSuccess("Successfully Editted Data",'')
        }
      }
      dialog.unsubscribe()
      this.fetchData(this.pageOptions)
    })
  }

  deleteRow(id:any){
    let message = CONFIRMATION_BOX;

    let config:MatDialogConfig={
      data:message,
      minWidth:'25rem',
      minHeight:'14rem'
    }
    let deleteRowDialog = this._dialog.open(ConfirmationBoxComponent,config);
    deleteRowDialog.afterClosed().subscribe((res:any)=>{
      if(res == true){
        this._utility.showSuccess("Successfully Removed Data",'')
        this.allDegreeList = this.allDegreeList.filter((item:any)=> item.id != id) 
        console.log(this.degreeList,this.allDegreeList,'allDList');
        this.degreeList = this.allDegreeList;
        this.fetchData(this.pageOptions);
      }
    })
  }

  setDate(e:any,dateType:string){
    const d = new Date(e.value)
    let newDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
    this.qualificationsForm.get(dateType)?.setValue(newDate.slice(0,10))
  }


  changeList(data:any){
    this.pageOptions = data;
    // console.log(data,"ota");
    this.degreeList = this.allDegreeList;
    this.fetchData(this.pageOptions)    
  }

  setDateValidations(data:any){
    console.log(data,'12');
    if(data.label == 'From Date'){
      this.toData.minDate = data.value
    }
    if(data.label == 'To Date'){
      this.toData.maxDate = data.value
    }
    
  }


}
