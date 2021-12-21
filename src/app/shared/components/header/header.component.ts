import { Component } from '@angular/core';
import { AppModalComponent } from '../app-modal/app-modal.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppModalComponent, {
      width: '500px',
      height: '500px',
      autoFocus: false
    });

    dialogRef.afterClosed();
  }
}
