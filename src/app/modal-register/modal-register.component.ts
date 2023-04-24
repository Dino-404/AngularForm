import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent{
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalRegisterComponent>
  ) {
    this.registerForm = this.formBuilder.group({
      dni: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.mustMatch('password')]],
      phone: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
   }

   mustMatch(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.parent?.get(controlName);
      if (password && control.value !== password.value) {
        return { mustMatch: true };
      } else {
        return null;
      }
    };
  }



  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    // TODO: Handle form submission
    console.log(this.registerForm.value);

    this.dialogRef.close();
  }

}

