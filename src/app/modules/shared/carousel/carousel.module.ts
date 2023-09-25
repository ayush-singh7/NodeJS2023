import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { NguCarousel, NguCarouselModule } from '@ngu/carousel';



@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NguCarouselModule
  ],
  exports:[
    CarouselComponent,

  ]

})
export class CarouselModule { }
