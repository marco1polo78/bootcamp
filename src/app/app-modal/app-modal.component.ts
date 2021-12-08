import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AppModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = new FormGroup({
        title: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
        description: new FormControl('', [ Validators.required, Validators.minLength(3) ])
      });
    }
  
  submit() {
    console.log(this.title.touched);
    this.form.reset();
    Object.values(this.form.controls).forEach(value => {
      value.setErrors(null) ;
    })
    // this.dialogRef.close({
    //   title: this.form.value.title,
    //   description: this.form.value.description
    // });
  }

  get title(): any {
    return this.form.get('title');
  }

  get description(): any {
    return this.form.get('description');
  }

}
