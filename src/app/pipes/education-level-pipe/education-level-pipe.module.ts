import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationLevelPipePipe } from './education-level-pipe.pipe';



@NgModule({
  declarations: [
    EducationLevelPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EducationLevelPipePipe
  ]
})
export class EducationLevelPipeModule { }
