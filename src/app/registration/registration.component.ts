import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FromSignUppService } from './services/from-sign-upp.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private fromSignUppService: FromSignUppService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      login: [''],
      emailAddress: [''],
      password: ['']
    })
  }

  public signup() {
    this.fromSignUppService.signup(this.form.value);
  }

}
