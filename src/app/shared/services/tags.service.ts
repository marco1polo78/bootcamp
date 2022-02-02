import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  tags: Subject<string[]> = new Subject();

  constructor(private http: HttpClient) { }

  public getList() {
    this.http.get<any>('http://localhost:8080/api/tags/list').subscribe({
      next: (data: any) => {
        this.tags.next(data.tags);
      }
    })
  }
}
