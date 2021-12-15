import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { AppModalModule } from '../app-modal/app-modal.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppModalModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
