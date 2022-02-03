import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListBlogsService } from '../home/services/list-blogs.service';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent {
  form!: FormGroup;
  tags: string[] = [];

  constructor(
    private listBlogsService: ListBlogsService,
    private router: Router
  ) {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      textarea: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      tags: new FormControl([], [])
    });
  }

  submit() {
    if (this.form.valid) {
      this.listBlogsService.createPosts({
        title: this.form.value.title,
        description: this.form.value.description,
        textarea: this.form.value.textarea,
        datePost: new Date(),
        countLikes: 0,
        tags: this.tags
      });
      this.form.reset();
      this.router.navigate(['home']);
      Object.values(this.form.controls).forEach((value) => {
        value.setErrors(null);
      });
    }
  }

  close() {
    this.router.navigate(['home']);
    this.form.reset();
  }

  isFormStatus(formControl: string) {
    return this.form.get(formControl)?.status === 'INVALID';
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
