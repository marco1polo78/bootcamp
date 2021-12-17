import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/shared/interfaces/post';
@Injectable({
  providedIn: 'root'
})

export class ListBlogsService {
  static getPostsListFromServer(): Post[] {
    throw new Error('Method not implemented.');
  }
  private subject = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  public getPostsListFromServer(): Observable<Post[]> {
    return this.http.get<any>('http://localhost:8080/api/posts');
  }

  public getPostData(): Observable<Post[]> {
    return this.subject.asObservable();
  }

  public updatePostData(post: Post): void {
    this.subject.next([post, ...this.subject.getValue()]);
  }
}
