import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent {
  registerForm!: FormGroup;
  dniDuplicate: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalRegisterComponent>,
    private usuarioService: UsuarioService
  ) {
    this.registerForm = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}[a-zA-Z]$/)]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', [Validators.required, this.mustMatch('password')]],
      phone: [''],
      terms: [false, Validators.requiredTrue]
    });
  }

  disableDniDuplicate() {
    this.dniDuplicate = false;
  }

  /**
   * Metodo para comprobar que las contraseñas son iguales
   * @param controlName
   * @returns
   */
  mustMatch(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.parent?.get(controlName);
      if (password && control.value !== password.value) {
        return { mustMatch: true };
      } else {
        return null;
      }
    };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const dni = this.registerForm.value.dni;

    if (this.usuarioService.comprobarDniRegistrado(dni)) {
      // El DNI ya está registrado
      this.dniDuplicate = true;
      return;
    }
    //Se guarda el usuario en local y se cierra el dialog
    this.usuarioService.guardarUsuarioLocal(new Usuario(this.registerForm.value.dni, this.registerForm.value.password, this.registerForm.value.phone));
    this.dialogRef.close();
  }

}

