import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
