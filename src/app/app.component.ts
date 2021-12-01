import { Component } from '@angular/core';

export interface Post {
  userName: string,
  datePost: string | Date,
  title: string,
  dubTitle: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcamp';
}
