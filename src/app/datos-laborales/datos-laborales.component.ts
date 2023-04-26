import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-datos-laborales',
  templateUrl: './datos-laborales.component.html',
  styleUrls: ['./datos-laborales.component.css']
})
export class DatosLaboralesComponent {
  isSubmitted :boolean = false;
  datosLaboralesForm: FormGroup;
  user! : Usuario;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private usuarioService : UsuarioService) {
    this.datosLaboralesForm = this.fb.group({
      fechaInicio: ['', [Validators.required]],
      fechaFin: [''],
      empresaActual: ['', [Validators.required, Validators.minLength(2)]],
      numPagas: ['', [Validators.required, Validators.min(1)]],
      anosTrabajados: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.datosLaboralesForm.valid) {
      const user = this.user;
      const formulario = this.datosLaboralesForm.value;
      user.fechaInicio = formulario.fechaInicio;
      user.fechaFin = formulario.fechaFin;
      user.empresaActual = formulario.empresaActual;
      user.pagas = formulario.numPagas;
      user.anyosTrabajado = formulario.anosTrabajados;
      this.usuarioService.actualizarUsuario(user);
    }
  }

  ngOnInit(){
    if(this.usuarioService.comprobarSession()){
      this.user = this.usuarioService.obtenerUsuario();
      const user = this.user;
      this.datosLaboralesForm.setValue({ // Asigna los valores del usuario al datosLaboralesForm utilizando el método setValue
        fechaInicio: user.fechaInicio || '',
        fechaFin: user.fechaFin || '',
        numPagas : user.pagas || '',
        empresaActual: user.empresaActual || '',
        anosTrabajados: user.anyosTrabajado || '',
      });
    }
  }
}
