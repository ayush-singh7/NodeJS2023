import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-training-details',
  templateUrl: './tab-training-details.component.html',
  styleUrls: ['./tab-training-details.component.scss']
})
export class TabTrainingDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  trainingDataObj = {
    title:'Angular Training Feb 2022',
    startDate:'28-02-2022',
    endDate:'04-02-2022',
    trainingMode:'Online',
    batch:'Online',
    description:'Angular Training Feb- 2022 - Uploaded from sheet'
  }

  topicsHeading = [
    'S. No.', 'Topic', 'Topic Trainer', 'Trainer Email', 'Start Date', 'End Date', 'Resource URL'
  ]
  topicData = [
    {
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    },
    {
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    },
    {
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    },
    {
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    },{
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    }
  ]

}
