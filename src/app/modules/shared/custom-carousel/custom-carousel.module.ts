import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './custom-carousel.component';
import { NguCarouselModule } from '@ngu/carousel';



@NgModule({
  declarations: [
    CustomCarouselComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule
  ],
  exports:[
    CustomCarouselComponent
  ]
})
export class CustomCarouselModule { }
