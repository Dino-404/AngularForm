import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisterComponent } from '../modal-register/modal-register.component';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private usuarioService: UsuarioService) {
    this.loginForm = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.pattern('^(?:(?:([XYZ])\\d{7,8})|(\\d{8})([A-HJ-NP-TV-Z]))$')]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const dni = this.loginForm.value.dni;
    const password = this.loginForm.value.password;
    if (this.usuarioService.comprobarUsuario(dni, password)) {
      alert("Usuario logeado");
      this.usuarioService.guardarSesion(dni);
    } else {
      alert("Error");
    }
  }

  register() {
    const dialogRef = this.dialog.open(ModalRegisterComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
