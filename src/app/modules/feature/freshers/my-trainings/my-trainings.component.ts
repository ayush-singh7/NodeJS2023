import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {

  constructor() { }
  trainingCardsData = [
    {
      trainingName:'Angular Training Feb 2022',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'101'
    },
    {
      trainingName:'UI/UX Training Feb 2022',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'102'
    },
    {
      trainingName:'JavaScript Training Feb 2022',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'103'
    },
    {
      trainingName:'Angular Training Feb 2022',
      trainingStatus:'Completed',
      startDate:'20-03-2022',
      endDate:'20-05-2023',
      mode:'Online',
      id:'104'
    }
  ]
  ngOnInit(): void {
  }

}
