import { Component, Input } from '@angular/core';
import { Post } from '../../../shared/interfaces/post';
import { ListBlogsService } from '../../services/list-blogs.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input()
  post!: Post;

  constructor(private listBlogsService: ListBlogsService) { }

  delete() {
    this.listBlogsService.deletePost(this.post);
  }

}
