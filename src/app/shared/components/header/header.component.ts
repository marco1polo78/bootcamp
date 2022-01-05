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


import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
  menu = menu;
  loading = false;
  constructor(public dialog: MatDialog, private router: Router) {
    this.router.events.subscribe(async (event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  public onClick(route: string) {
    this.router.navigate([route]);
  }
}
