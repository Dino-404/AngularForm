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
      this.user.pais = this.datosContactoForm.value.pais;
      this.user.provincia = this.datosContactoForm.value.provincia;
      this.user.ciudad = this.datosContactoForm.value.ciudad;
      this.user.calle = this.datosContactoForm.value.calle;
      this.user.piso = this.datosContactoForm.value.piso;
      this.user.numero = this.datosContactoForm.value.numero;
      this.usuarioService.actualizarUsuario(this.user);
    }
  }

  ngOnInit(){
    if(this.usuarioService.comprobarSession()){
      this.user = this.usuarioService.obtenerUsuario();
      this.datosContactoForm.setValue({ // Asigna los valores del usuario al datosContactoForm utilizando el método setValue
        pais: this.user.pais || '',
        provincia: this.user.provincia || '',
        ciudad : this.user.ciudad || '',
        calle: this.user.calle || '',
        piso: this.user.piso || '',
        numero: this.user.numero || ''
      });
    }
  }
}
