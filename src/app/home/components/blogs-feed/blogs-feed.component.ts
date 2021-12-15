import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../../shared/interfaces/post';
import { ListBlogsService } from '../../services/list-blogs.service';


@Component({
  selector: 'app-blogs-feed',
  templateUrl: './blogs-feed.component.html',
  styleUrls: ['./blogs-feed.component.scss']
})
export class BlogsFeedComponent implements OnInit{
  streamPostsSubscription!: Subscription;
  posts: Post[] = [];
  listTags: string[] = [];

  constructor(private listBlogsService: ListBlogsService) { }

  ngOnInit(): void {
    this.streamPostsSubscription = this.listBlogsService
      .getPostData()
      .subscribe((data: Post[]) => {
        this.posts = data;
      })
  }
}
