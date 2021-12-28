import { Component } from '@angular/core';
import { AppModalComponent } from '../app-modal/app-modal.component'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
export class HeaderComponent {
  menu = menu;
  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppModalComponent, {
      width: '500px',
      height: '500px',
      autoFocus: false
    });

    dialogRef.afterClosed();
  }

  public onClick(route: string) {
    void this.router.navigate([route]);
  }
}
