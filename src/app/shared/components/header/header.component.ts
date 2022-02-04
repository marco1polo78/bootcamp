import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from 'src/app/login-form/login-form.component';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';
import { LocalStorageRefService } from '../../services/local-storage-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  loading: boolean = false;
  loggin: Observable<string|null> = this.localStorageRefService.loggin;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private localStorageRefService: LocalStorageRefService
  ) {
    this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart) this.loading = true;
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      )
        this.loading = false;
    });
  }

  public navigate(route: string) {
    this.router.navigate([route]);
  }

  login() {
    this.dialog.open(LoginFormComponent, {
      height: '400px',
      width: '600px',
    });
  }

  signOut() {
    this.localStorageRefService.cleanInfo();
  }
}
