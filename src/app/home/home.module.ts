import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './components/post/post.component';
import { BlogsFeedComponent } from './components/blogs-feed/blogs-feed.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LikeComponent } from './components/like/like.component';

@NgModule({
  declarations: [
    PostComponent,
    BlogsFeedComponent,
    LikeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [BlogsFeedComponent]
})
export class HomeModule { }
