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
      this.user.fechaInicio = this.datosLaboralesForm.value.fechaInicio;
      this.user.fechaFin = this.datosLaboralesForm.value.fechaFin;
      this.user.empresaActual = this.datosLaboralesForm.value.empresaActual;
      this.user.pagas = this.datosLaboralesForm.value.numPagas;
      this.user.anyosTrabajado = this.datosLaboralesForm.value.anosTrabajados;
      this.usuarioService.actualizarUsuario(this.user);
    }
  }

  ngOnInit(){
    if(this.usuarioService.comprobarSession()){
      this.user = this.usuarioService.obtenerUsuario();
      this.datosLaboralesForm.setValue({ // Asigna los valores del usuario al datosLaboralesForm utilizando el método setValue
        fechaInicio: this.user.fechaInicio || '',
        fechaFin: this.user.fechaFin || '',
        numPagas : this.user.pagas || '',
        empresaActual: this.user.empresaActual || '',
        anosTrabajados: this.user.anyosTrabajado || '',
      });
    }
  }
}
