import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private listBlogsService: ListBlogsService, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
