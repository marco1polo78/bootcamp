import { Component, Input } from '@angular/core';
import { Like } from 'src/app/shared/interfaces/like';
import { ListBlogsService } from '../../services/list-blogs.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})

export class LikeComponent {
  @Input()
  like!: Like;
  constructor(private listBlogsService: ListBlogsService) { }

  public onClick() {
    this.listBlogsService.updatePost('id')
  }
}
