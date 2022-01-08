import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './new-article.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [NewArticleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [NewArticleComponent]
})
export class NewArticleModule { }
