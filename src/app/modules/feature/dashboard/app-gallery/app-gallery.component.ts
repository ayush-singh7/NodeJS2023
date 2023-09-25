import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GALLERY_DATA } from 'src/app/constants/feature/dashboard-gallery';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-app-gallery',
  templateUrl: './app-gallery.component.html',
  styleUrls: ['./app-gallery.component.scss']
})
export class AppGalleryComponent implements OnInit {

  constructor(
    private _dialog:MatDialog 
  ) { }

  ngOnInit(): void {
  }

  app_gallery_gridConfig:any={
    grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
    gridBreakpoints:{sm: 650, md: 1200, lg: 1600, xl: 2000},
    load: 3,
    interval: {timing: 20000, initialDelay: 10000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  gallery_array = GALLERY_DATA;


  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  galleryData = {
    showButtons:true,
    heading:'Appinventiv Gallery'
  }

  ngAfterViewInit(){
    // console.log("viewchildre>>>>>>>>>>>",this.listToShow);
    
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })    
    setTimeout(()=>{
      this.render_child = true;
    },10)
  }

  openGallery(id:number){
    let dialogConfig:MatDialogConfig = {
      // maxHeight:"36rem",
      maxWidth:"40rem",
      data:id
    }

     const subs = this._dialog.open(GalleryDialogComponent,dialogConfig).afterClosed().subscribe(()=> {
       subs.unsubscribe();
     });

  }
  

}
