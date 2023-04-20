import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent {
  isSubmitted: boolean =false;
  datosContactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.datosContactoForm = this.fb.group({
      pais: ['', Validators.required],
      provincia: ['', Validators.required],
      ciudad: ['', Validators.required],
      calle: ['', Validators.required],
      piso: ['', Validators.required],
      numero: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.datosContactoForm.valid) {
      alert(JSON.stringify(this.datosContactoForm.value));
    }
  }

}
