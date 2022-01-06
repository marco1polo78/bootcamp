import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart 
} from '@angular/router';
import { of } from "rxjs";
import { delay, concatMap,  tap } from "rxjs/operators";

const menu = [
  {
    route: 'home',
    title: 'Home'
  },
  {
    route: 'newArticle',
    title: 'New Article'
  },
  {
    route: 'profile',
    title: 'User Name'
  }
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  menu: Array<any> = menu;
  loading: boolean = false;

  constructor(public dialog: MatDialog, private router: Router) {
    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart)
        this.loading = true;
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
        this.loading = false;
    });
  }

  public navigate(route: string) {
    this.router.navigate([route]);
  }
}
