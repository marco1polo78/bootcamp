import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/shared/interfaces/post';
import { TagsService } from 'src/app/shared/services/tags.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ListBlogsService {
  posts: Subject<Post[]> = new Subject();
  filterTags: string[] = [];

  constructor(private http: HttpClient, private tagsService: TagsService) {}

  public getPosts() {
    let query = '';
    if (this.filterTags.length)
      query = '?tags=' + JSON.stringify(this.filterTags);
    return this.http
      .get<any>(`${environment.apiUrl}/api/posts${query}`)
      .subscribe({
        next: (data: Post[]) => {
          this.posts.next(data);
          this.tagsService.getList();
        },
      });
  }

  public createPosts(post: Post) {
    return this.http
      .post(
        environment.apiUrl + '/api/posts',
        JSON.stringify(post),
        httpOptions
      )
      .subscribe({
        next: () => {
          this.getPosts();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  public updatePost(id: string) {
    return this.http.patch(
      `${environment.apiUrl}/api/posts/${id}`,
      {},
      httpOptions
    );
  }

  public deletePost(post: Post) {
    return this.http
      .delete(`${environment.apiUrl}/api/posts/${post._id}`, {})
      .subscribe({
        next: () => {
          this.getPosts();
        },
      });
  }
}
