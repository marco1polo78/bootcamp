import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post';
import { ListBlogsService } from '../../services/list-blogs.service';


@Component({
  selector: 'app-blogs-feed',
  templateUrl: './blogs-feed.component.html',
  styleUrls: ['./blogs-feed.component.scss']
})
export class BlogsFeedComponent implements OnInit{
  posts!: Post[];
  listTags: string[] = [];

  constructor(private listBlogsService: ListBlogsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public getPosts(): void {
    this.listBlogsService.getPosts().subscribe(
      {
        next: data => { this.posts = data },
        error: err => { console.log(err) }
      }
    );
  }
}
