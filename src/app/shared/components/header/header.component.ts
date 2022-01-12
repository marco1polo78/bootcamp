import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from 'src/app/login-form/login-form.component';

import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loading: boolean = false;
  logged!: string | null;

  constructor(private dialog: MatDialog, private router: Router) {
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

  ngOnInit(): void {
    this.logged = localStorage.getItem('id_token');
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
    localStorage.removeItem('id_token');
    this.logged = localStorage.getItem('id_token');
  }
}
