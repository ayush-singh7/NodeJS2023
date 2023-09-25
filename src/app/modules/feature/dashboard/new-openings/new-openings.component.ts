import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { JOB_OPENINGS } from 'src/app/constants/feature/job-opening';
import { I_JOB_OPENINGS } from 'src/app/models/interfaces/interfaces';
@Component({
  selector: 'app-new-openings',
  templateUrl: './new-openings.component.html',
  styleUrls: ['./new-openings.component.scss']
})
export class NewOpeningsComponent implements OnInit {

  constructor() { }
  jobOpeningsData:Array<I_JOB_OPENINGS> = JOB_OPENINGS
  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  newOpeningsData = {
    showButtons:false
  }

  gridConfigNewOpenings = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 3,
    interval: {timing: 3500, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    
    setTimeout(()=>{
      this.render_child = true;
    },10)

  }


}
