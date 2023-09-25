import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  awardsGridConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 2, all: 0 },
    gridBreakpoints:{sm: 650, md: 800, lg: 1300, xl: 1900},
    load: 3,
    interval: {timing: 35000, initialDelay: 10000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  arr = [
    {
      member_name:'Cersei Lannister',
      image_name:'profile_2.jpg',
      member_designation:'Angular Software Engineer'
    },
    {
      member_name:'Jamie Lanister',
      image_name:'profile_5.png',
      member_designation:'React JS Software Engineeer'
    },
    {
      member_name:'Tywin Lanister',
      image_name:'profile_3.jpeg',
      member_designation:'Marketing Team'
    },
    {
      member_name:'Petr Baelish',
      image_name:'profile_4.jpeg',
      member_designation:'Minister of Houses'
    }
    
  ]


  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  newOpeningsData = {
    showButtons:false
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
