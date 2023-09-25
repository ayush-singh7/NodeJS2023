import { AfterViewInit, Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }
  @Input() buttonsExist!: boolean;
  @Input() parentData!: any;
  @Input() imageList!: any;
  @Input() comp!:any
  @ContentChild('great') great!: TemplateRef<any>

  st:any
  ngOnInit(): void {

    // this.st =setInterval(()=>{
    //   this.changeSlide(true)
    // },2500)
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
    
    clearInterval(this.st)
  }

  current = 0;
  delay = 3000; //ms
  prevPress() {
    this.changeSlide(true); //back
    // this.restart();
  }
  nextPress() {
    this.changeSlide(false); //forward
    // this.restart();
  }
  changeSlide(next: boolean) {

    const slides = document.querySelector(".slides") as HTMLElement
    let slidesCount = slides.childElementCount;
    // slidesCount/=2; divide by no of slides required at once 
    const maxLeft = (slidesCount - 1) * 100 * -1;

    if (next) {
      let temp = this.current > maxLeft ? -100 : this.current * -1;
      this.current += temp;
    } else {
      this.current = this.current < 0 ? this.current + 100 : maxLeft;
    }

    slides.style.left = this.current + "%";
  }
  restart() {

  }


}
