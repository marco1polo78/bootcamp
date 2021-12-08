import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppModalComponent } from './app-modal/app-modal.component'

const posts: Post[] = [
  {
      userName: 'John Dow',
      datePost: new Date('2021-11-07T11:55:36.244Z'),
      title: 'NATURAL LANGUAGE INTERFACE ACCESSIBILITY',
      description: 'Spoken interaction with mobile devices and consumer'
  },
  {
      userName: 'John Dow',
      datePost: new Date('2021-11-07T11:55:36.244Z'),
      title: 'Accessibility of Remote Meeting',
      description: 'The impactvof COVID-19 has seen a substantial increase'
  }
];

export interface Post {
  userName: string,
  datePost: string | Date,
  title: string,
  description: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  posts: Post[] = posts;
  listTags: string[] = [];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppModalComponent, {
      width: '500px',
      height: '500px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.posts.unshift({
              'userName': 'John Dow',
              'datePost': new Date(),
              'title': result.title,
              'description': result.description
            });
    });
  }
}
