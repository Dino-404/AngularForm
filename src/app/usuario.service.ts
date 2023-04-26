import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { ModalComponent } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private localStorageKey = 'usuarios';
  private _userLogged = 'sesion';
  public get userLogged() {
    return this._userLogged;
  }

  constructor(private dialog: MatDialog) { }

  /**
   * Metodo para guardar el usuario, solo sirve para registro
   * @param usuario
   */
  guardarUsuarioLocal(usuario: Usuario): void {
    const usuariosStr = localStorage.getItem(this.localStorageKey);
    let usuarios: Usuario[] = [];
    if (usuariosStr) {
      usuarios = JSON.parse(usuariosStr);
    }
    usuarios.push(usuario);

    localStorage.setItem(this.localStorageKey, JSON.stringify(usuarios));
  }


  /**
   * Metodo para comprobar si el DNI ya esta registrado
   * @param dni
   * @returns
   */
  comprobarDniRegistrado(dni: string): boolean {
    let usuarios: Usuario[] = [];
    const usuariosStr = localStorage.getItem(this.localStorageKey);
    if (usuariosStr) {
      usuarios = JSON.parse(usuariosStr) as Usuario[];
      // Devolver true si el DNI coincide con alguno de los usuarios
      return usuarios.some(usuario => usuario.dni === dni);
    }
    return false;
  }

  /**
   * Metodo para comprobar dni y password para logeo en usuario
   * @param dni
   * @param password
   * @returns
   */
  comprobarUsuario(dni: string, password: string): boolean {
    let usuarios: Usuario[] = [];
    const usuariosStr = localStorage.getItem(this.localStorageKey);
    if (usuariosStr) {
      usuarios = JSON.parse(usuariosStr) as Usuario[];
      return usuarios.some(usuario => usuario.dni === dni && usuario.password === password);
    }
    return false;
  }
  /**
   * Metodo para guardar sesion, lo que hace es guardar el DNI en el almacenamiento local
   * @param dni
   */
  guardarSesion(dni: string): void {
    localStorage.setItem(this.userLogged, dni);
  }
  cerrarSession(): void {
    localStorage.setItem(this.userLogged, "");
  }
  /**
   * Comprueba si existe un DNI en el almacenamiento local
   * @returns
   */
  comprobarSession(): boolean {
    if (localStorage.getItem(this.userLogged) == '') {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Metodo para obtener los datos del usuario
   * @returns
   */
  obtenerUsuario(): Usuario {
    const usuariosStr = localStorage.getItem(this.localStorageKey);
    if (usuariosStr) {
      const usuarios = JSON.parse(usuariosStr) as Usuario[];
      const dniUsuario = localStorage.getItem(this._userLogged);
      const usuario = usuarios.find(usuario => usuario.dni === dniUsuario);
      console.log(usuario);
      if (usuario) {
        return usuario;
      }
    }
    this.dialog.open(ModalComponent, {
      data: {
        title: 'Error',
        message: 'No esta iniciado sesion'
      }
    });
    throw new Error(`El usuario no esta registrado`);
  }
  /**
   * Metodo para actualizar los datos del usuario
   * @param usuarioActualizado
   */
  actualizarUsuario(usuarioActualizado: Usuario): void {
    const usuariosStr = localStorage.getItem(this.localStorageKey);
    if (usuariosStr) {
      const usuarios = JSON.parse(usuariosStr) as Usuario[];
      // Encontrar el indice del usuario que queremos actualizar
      const usuarioIndex = usuarios.findIndex(usuario => usuario.dni === usuarioActualizado.dni);
      // Actualizar los datos del usuario
      usuarios[usuarioIndex] = usuarioActualizado;
      // Guardar los datos actualizados en el localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  }
}

