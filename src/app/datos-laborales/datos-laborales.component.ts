import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-datos-laborales',
  templateUrl: './datos-laborales.component.html',
  styleUrls: ['./datos-laborales.component.css']
})
export class DatosLaboralesComponent {
  isSubmitted :boolean = false;
  datosLaboralesForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
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
      const dialogRef = this.dialog.open(ModalComponent, {
        data: this.datosLaboralesForm
      });
    }
  }
}
