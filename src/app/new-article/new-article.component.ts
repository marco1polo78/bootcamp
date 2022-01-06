import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListBlogsService } from '../home/services/list-blogs.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})

export class NewArticleComponent {
  form!: FormGroup;

  constructor(
    private listBlogsService: ListBlogsService,
    private router: Router) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      textarea:  new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  submit() {
    if (this.form.valid) {
      this.listBlogsService.createPosts({
        title: this.form.value.title,
        description: this.form.value.description,
        textarea: this.form.value.textarea,
        userName: 'John Dow',
        datePost: new Date(),
        countLikes: 0
      })
      this.form.reset();
      this.router.navigate(['home']);
      Object.values(this.form.controls).forEach(value => {
        value.setErrors(null);
      })
    }
  }

  close() {
    this.router.navigate(['home']);
    this.form.reset();
  }

  isFormStatus(formControl: string) {
    return this.form.get(formControl)?.status === 'INVALID';
  }

}
