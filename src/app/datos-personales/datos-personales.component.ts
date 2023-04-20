import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      apellido2:['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.maxLength(9), Validators.required, Validators.pattern('^(?:(?:([XYZ])\\d{7,8})|(\\d{8})([A-HJ-NP-TV-Z]))$')]],
      extranjero:[false],
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      alert(JSON.stringify(this.formulario.value));
    }
  }



}

