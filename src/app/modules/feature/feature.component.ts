import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DropDownAnimation, fadeInAnimation, fadeInOut } from 'src/animations/animations';
import { navBarData } from 'src/app/constants/NavBarData/navBarData';
import { NavbarItem } from 'src/app/models/interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommmonComponentsComponent } from 'src/app/common-components/commmon-components/commmon-components.component';
import { ConfirmationBoxComponent } from 'src/app/common-components/confirmation-box/confirmation-box.component';
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '250px',
        opacity: 1,
      })),
      state('closed', style({
        width: '70px',
        opacity: 1,
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
    fadeInAnimation,
    fadeInOut
  ]
})
export class FeatureComponent implements OnInit, AfterViewInit {

  constructor(
    private _dialog:MatDialog,
    private _router:Router,
  ) { }
  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  localNavBarData: Array<NavbarItem> = navBarData;
  isExpanded: boolean = true;
  showSubmenu: boolean = false;
  // isShowing = false;
  showSubSubMenu: boolean = false;


  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
    this.collapseSubMenu();
    let marginLeftError = document.getElementById("marginLeft-error") as HTMLElement || null
    if (this.isExpanded) { // set margin 200 ms late to sync it with animation effect
      setTimeout(() => {
        marginLeftError.style.marginLeft = "250px"
      }, 200)
    } else {
      setTimeout(() => {
        marginLeftError.style.marginLeft = "70px"
      }, 210)
    }
  }
  collapseSubMenu() {
    this.localNavBarData.map((navBarItem: NavbarItem) => {
      navBarItem.subMenuClicked = false;
    })
  }

  // @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth,"windowResize");
    
    if(window.innerWidth >= 1000){
      let sideNavID = document.getElementById("side-nav-id") as HTMLElement || null
      sideNavID.style.display = "block" 
    } 
    if(window.innerWidth <= 1000){
      let sideNavID = document.getElementById("side-nav-id") as HTMLElement || null
      sideNavID.style.display = "none" 
    }
  }

  ngOnInit(): void {   
  }

  ngAfterViewInit() {
  }


  mouseenter() {
    // if (!this.isExpanded) {
    //   this.isShowing = true;
    // }
  }

  mouseleave() {
    // if (!this.isExpanded) {
    //   this.isShowing = false;
    // }
  }

  openSubMenu(navBarItem: NavbarItem) {
    this.isExpanded = true
    this.localNavBarData.map((item:NavbarItem)=>{
      if(item.name != navBarItem.name){

        item.subMenuClicked = false;
      }
    })
    navBarItem.subMenuClicked = !navBarItem.subMenuClicked 
  }
  
  toggleSideNavSmallPhone(){
    this.isExpanded = true; // open the entire sidenav by default
    let sideNavID = document.getElementById("side-nav-id") as HTMLElement || null

    if(sideNavID.style.display == "" || sideNavID.style.display == "none" ){
      sideNavID.style.display = "block" 
    }else if(sideNavID.style.display == "block" ){
      sideNavID.style.display = "none"       
    }
  }

  signout(){
    let obj = {
      heading:"Logout ",
      data:'Are you sure you want to logout?',
      NO:"Close",
      YES:"Confirm"
    }
    let dialog = this._dialog.open(ConfirmationBoxComponent,{data:obj})
    dialog.afterClosed().subscribe((res:any)=>{
      if(res == true){
        localStorage.clear();
        this._router.navigate(['auth'])

      }
    })
  }
  changePassword(){
    this._router.navigate(['admin/profile'])

  }
  myProfile(){
    this._router.navigate(['admin/profile'])
  }

  openHelpDialog(){
    let data = {
      icon:'error_outline',
      message:'Plz contact support Plz contact support Plz contact support Plz contact support Plz contact support Plz contact support Plz contact support Plz contact support',
      email:'hr@appin.com'
    }
    let options:MatDialogConfig ={
      data:data
    }
    this._dialog.open(CommmonComponentsComponent,options)
  }
  
  parentChecker(navBarItem:NavbarItem):boolean{
    let checker = (this._router.url.slice(7))
    let found:boolean = false;
    navBarItem.subMenu?.map((subMenuItem:any)=> {
      // console.log(subMenuItem,'----',checker)
      if(subMenuItem.link == checker){
        found = true
      }
    })
    return found;
  }
}
