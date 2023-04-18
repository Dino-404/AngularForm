import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      fechaNacimiento: ['', Validators.required]
    })}

  enviarFormulario() {
    if (this.formulario.valid) {
      alert(JSON.stringify(this.formulario.value));
    }
  }

  agregarEventoFecha(evento: any) {
    const fechaSeleccionada = evento.value;
    console.log(fechaSeleccionada);
  }

}
