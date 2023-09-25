import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit,AfterViewInit {
  
  constructor(private cd:ChangeDetectorRef){
    
  }

  
  ngAfterViewInit(): void {
    
      this.cd.detectChanges()
  }
  
  ngOnInit(): void { 
    // console.log(this.carouselConfigData,"carouselConfigData");
    if(this.gridConfig){
      this.carouselConfig1 = this.gridConfig
    }
  }

  @Input() gridConfig:any;
  @Input() listToShow!:any
  @Input() carouselConfigData:any
  @Input() carouselPointNumbers:any
  @ViewChild('myCarousel1') myCarousel1!: NguCarousel<any>;
  withAnim = true;

  carouselConfig1!: NguCarouselConfig;
  carouselItems1 = [1,2,3];
  

  moveTo(slide:number) {
    this.myCarousel1.moveTo(slide, !this.withAnim);
  }


  
}
