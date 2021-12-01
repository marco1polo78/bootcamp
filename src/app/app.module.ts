import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsFeadComponent } from './newsFead/newsFead.component';
import { PostComponent } from './post/post.component';
import { NavTagBarComponent } from './nav-tag-bar/nav-tag-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeadComponent,
    PostComponent,
    NavTagBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
