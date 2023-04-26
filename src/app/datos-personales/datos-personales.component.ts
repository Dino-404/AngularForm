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
      phone: ['', Validators.required],
      extranjero:[false],
    });
  }
  ngOnInit(){
    if(this.usuarioService.comprobarSession()){
      this.user = this.usuarioService.obtenerUsuario();
      const user = this.user;
      this.formulario.setValue({
        // Asigna los valores del usuario al formulario utilizando el método setValue
        nombre: user.nombre || '',
        apellido: user.apellido1 || '',
        apellido2: user.apellido2 || '',
        dni: user.dni || '',
        correo: user.mail || '',
        phone: user.telefono || '',
        extranjero: user.extranjero || false
      });
    }
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const user = this.user;
      const formulario = this.formulario.value;
      user.nombre = formulario.nombre;
      user.apellido1 = formulario.apellido;
      user.apellido2 = formulario.apellido2;
      user.dni = formulario.dni;
      user.mail = formulario.correo;
      user.telefono = formulario.phone;
      user.extranjero = formulario.extranjero;
      this.usuarioService.actualizarUsuario(user);
    }
  }



}

