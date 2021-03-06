import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsFeedComponent } from './home/components/blogs-feed/blogs-feed.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'home',
    component: BlogsFeedComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'newArticle',
    component: NewArticleComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
