import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const posts = [
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

export class AppComponent implements OnInit{
  posts: Post[] = posts;
  listTags: string[] = [];

  form!: FormGroup;

  showFormForNewPost:boolean = true;

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      description: new FormControl('', [ Validators.required, Validators.minLength(3) ])
    });
  }

  submit() {
    this.posts.unshift({
      'userName': 'John Dow',
      'datePost': new Date(),
      'title': this.form.value.title,
      'description': this.form.value.description
    });
    this.form.reset();
    this.showFormForNewPost = false;
  }

  get title(): any {
    return this.form.get('title');
  }

  get description(): any {
    return this.form.get('description');
  }
}
