import { Component, OnInit } from '@angular/core';
import { filter, Subject } from 'rxjs';
import { TagsService } from 'src/app/shared/services/tags.service';
import { Post } from '../../../shared/interfaces/post';
import { ListBlogsService } from '../../services/list-blogs.service';

@Component({
  selector: 'app-blogs-feed',
  templateUrl: './blogs-feed.component.html',
  styleUrls: ['./blogs-feed.component.scss'],
})
export class BlogsFeedComponent implements OnInit {
  posts: Subject<Post[]> = this.listBlogsService.posts;
  listTags: Subject<string[]> = this.tagsService.tags;
  filterTags: string[] = this.listBlogsService.filterTags;

  constructor(
    private listBlogsService: ListBlogsService,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.listBlogsService.getPosts();
    this.tagsService.getList();
  }

  onClick(tag: string) {
    const index = this.filterTags.indexOf(tag);
    if (index < 0)
      this.filterTags.push(tag);
    this.listBlogsService.getPosts();
  }

  removeTagFromFilter(tag: string) {
    const index = this.filterTags.indexOf(tag);
    this.filterTags.splice(index, 1);
    this.listBlogsService.getPosts();
  }
}
