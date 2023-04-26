import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  formulario: FormGroup;
  user!: Usuario;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      apellido2:['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.maxLength(9), Validators.required, Validators.pattern('^(?:(?:([XYZ])\\d{7,8})|(\\d{8})([A-HJ-NP-TV-Z]))$')]],
      extranjero:[false],
    });
  }
  ngOnInit(){
    if(this.usuarioService.comprobarSession()){
      this.user = this.usuarioService.obtenerUsuario();
      this.formulario.setValue({ // Asigna los valores del usuario al formulario utilizando el método setValue
        nombre: this.user.nombre || '',
        apellido: this.user.apellido1 || '',
        apellido2: this.user.apellido2 || '',
        dni: this.user.dni || '',
        correo: this.user.mail || '',
        extranjero: this.user.extranjero || false
      });
    }
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      this.user.nombre = this.formulario.value.nombre;
      this.user.apellido1 = this.formulario.value.apellido;
      this.user.apellido2 = this.formulario.value.apellido2;
      this.user.dni = this.formulario.value.dni;
      this.user.mail = this.formulario.value.correo;
      this.user.extranjero = this.formulario.value.extranjero;
      this.usuarioService.actualizarUsuario(this.user);
    }
  }



}

