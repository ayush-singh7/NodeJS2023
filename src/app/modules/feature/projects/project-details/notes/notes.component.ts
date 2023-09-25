import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesDialogComponent } from './notes-dialog.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  ngOnInit(): void {
    
  }
  constructor(private dialog:MatDialog){

  }

  leftList = [
    {
      letter: 'R',
      Info: 'Roadmap',
    },
    {
      letter: 'P',
      Info: 'Project Plan',
    },
    {
      letter: 'U',
      Info: 'User Stories',
    },
    {
      letter: 'D',
      Info: 'Designs',
    },
  ];

  rightList = [
    {
      letter: 'S',
      Info: 'Scope of Work',
    },
    {
      letter: 'W',
      Info: 'Wireframe',
    },
    {
      letter: 'O',
      Info: 'Other',
    },
    {
      letter: 'P',
      Info: 'Project App Links',
    },
  ];


  openDialog(){
    const dialogRef = this.dialog.open(NotesDialogComponent,{
      // disableClose:true,
      // height:'90%',
      width:'30%'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
