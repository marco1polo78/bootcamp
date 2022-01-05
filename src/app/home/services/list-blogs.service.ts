import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/shared/interfaces/post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ListBlogsService {
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<any>('http://localhost:8080/api/posts');
  }

  public createPosts(post: Post): void {
    this.http.post('http://localhost:8080/api/posts', JSON.stringify(post), httpOptions).subscribe({
      error: err => { console.log(err) }
    });
  }
}
