import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post';

const posts: Post[] = [
  {
      userName: 'John Dow',
      datePost: new Date('2021-11-07T11:55:36.244Z'),
      title: 'NATURAL LANGUAGE INTERFACE ACCESSIBILITY',
      description: 'Spoken interaction with mobile devices and consumer',
      textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem suscipit velit! Dolor dolorum, eaque voluptate voluptas vero possimus quaerat.'
  },
  {
      userName: 'John Dow',
      datePost: new Date('2021-11-07T11:55:36.244Z'),
      title: 'Accessibility of Remote Meeting',
      description: 'The impactvof COVID-19 has seen a substantial increase',
      textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem suscipit velit! Dolor dolorum, eaque voluptate voluptas vero possimus quaerat.'
  }
];

@Injectable({
  providedIn: 'root'
})

export class ListBlogsService {
  private subject = new BehaviorSubject<Post[]>(posts);

  public getPostData(): Observable<Post[]> {
    return this.subject.asObservable();
  }

  public updatePostData(post: Post): void {
    this.subject.next([post, ...this.subject.getValue()]);
  }
}
