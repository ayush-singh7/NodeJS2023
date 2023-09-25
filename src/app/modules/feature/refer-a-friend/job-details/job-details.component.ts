import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BREADCRUMB_JOB_DETAILS, BREADCRUMB_TRAINING_DETAILS } from 'src/app/constants/breadcrumb';
import { JOB_OPENINGS } from 'src/app/constants/feature/job-opening';
import { I_JOB_OPENINGS } from 'src/app/models/interfaces/interfaces';
import { Table } from 'src/app/modules/shared/common-table/table-types';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  allJobData:Array<I_JOB_OPENINGS> = JOB_OPENINGS 
  singleJobData:any

    constructor(private route: ActivatedRoute) { }  
  
    routeSub: any;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']) //log the value of id
     
      
      for(let i=0; i<this.allJobData.length; i++){
        if(params['id'] == this.allJobData[i].job_id){
          this.singleJobData=this.allJobData[i]

        }
      }
      // console.log(this.singleJobData,"SJD2");
      
    });
    // console.log(this.singleJobData,"SJD1");
  }

  get breadCrumb(){
    let ans = [];
    ans.push([...BREADCRUMB_JOB_DETAILS.breadcrumb])
    return ans[0];
  }


  jobDescription = [
    'At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
    'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    'Expertise in structured and unstructured database design and optimization (MYSQL, MariaDB, MSSQL Server, MongoDB, Cassandra, etc.)',
    'Hands-on experience on optimization techniques and related tools & frameworks like caching, queueing and logging like Reddis, MemCached, RabbitMQ, Kafka, etc',
    'At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
    'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    'Expertise in structured and unstructured database design and optimization (MYSQL, MariaDB, MSSQL Server, MongoDB, Cassandra, etc.)',
    'Hands-on experience on optimization techniques and related tools & frameworks like caching, queueing and logging like Reddis, MemCached, RabbitMQ, Kafka, etc',
    'At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
    'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    'Expertise in structured and unstructured database design and optimization (MYSQL, MariaDB, MSSQL Server, MongoDB, Cassandra, etc.)',
    'Hands-on experience on optimization techniques and related tools & frameworks like caching, queueing and logging like Reddis, MemCached, RabbitMQ, Kafka, etc',
    'Hands-on experience on optimization techniques and related tools & frameworks like caching, queueing and logging like Reddis, MemCached, RabbitMQ, Kafka, etc', 
  ]

  shouldHaves = [
    'Knowledge of the latest technology trends in Databases, Web services, and Big data',
    'Awareness of business solutions and their domain-specific compliance like HL7, HIPPA for health, PCI for the financial app, etc',
    'Knowledge of the latest technology trends in Databases, Web services, and Big data',
    'Awareness of business solutions and their domain-specific compliance like HL7, HIPPA for health, PCI for the financial app, etc'
  ]

  ngOnDestroy() {
    delete this.singleJobData;
    console.log(this.singleJobData,"SJD3");
    
    this.routeSub.unsubscribe();
  }
}
