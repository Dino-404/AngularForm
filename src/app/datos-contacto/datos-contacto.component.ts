import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent {
  isSubmitted: boolean =false;
  datosContactoForm: FormGroup;
  user!:Usuario

  constructor(private fb: FormBuilder, private usuarioService : UsuarioService) {
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
      const formulario = this.datosContactoForm.value;
      const user = this.user;
      user.pais = formulario.pais;
      user.provincia = formulario.provincia;
      user.ciudad = formulario.ciudad;
      user.calle = formulario.calle;
      user.piso = formulario.piso;
      user.numero = formulario.numero;
      this.usuarioService.actualizarUsuario(user);
    }
  }

  ngOnInit(){
    if(this.usuarioService.comprobarSession()){
      this.user = this.usuarioService.obtenerUsuario();
      const user = this.user;
      this.datosContactoForm.setValue({
        // Asigna los valores del usuario al datosContactoForm utilizando el método setValue
        pais: user.pais || '',
        provincia: user.provincia || '',
        ciudad : user.ciudad || '',
        calle: user.calle || '',
        piso: user.piso || '',
        numero: user.numero || ''
      });
    }
  }
}
