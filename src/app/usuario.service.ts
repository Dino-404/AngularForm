import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private localStorageKey = 'usuarios';
  private userLogged = 'sesion';

  constructor() { }

  guardarUsuarioLocal(usuario: Usuario): void {
    const usuariosStr = localStorage.getItem(this.localStorageKey);
    let usuarios: Usuario[] = [];
    if (usuariosStr) {
      usuarios = JSON.parse(usuariosStr);
    }
    usuarios.push(usuario);

    localStorage.setItem(this.localStorageKey, JSON.stringify(usuarios));
  }


  // Método para comprobar si el DNI ya está registrado
  comprobarDniRegistrado(dni: string): boolean {
    let usuarios: Usuario[] = [];
    const usuariosStr = localStorage.getItem(this.localStorageKey); // Obtener la lista de usuarios desde localStorage
    if (usuariosStr) {
      usuarios = JSON.parse(usuariosStr) as Usuario[];
      console.log(usuarios.some(usuario => usuario.dni === dni)); // Convertir el JSON a un array de objetos Usuario
      return usuarios.some(usuario => usuario.dni === dni); // Devolver true si el DNI coincide con alguno de los usuarios
    }
    return false;
  }

  //Metodo para logear al usuario usando el localStorage
  comprobarUsuario(dni: string, password:string): boolean {
    let usuarios: Usuario[] = [];
    const usuariosStr = localStorage.getItem(this.localStorageKey); // Obtener la lista de usuarios desde localStorage
    if (usuariosStr) {
      usuarios = JSON.parse(usuariosStr) as Usuario[];
      console.log(usuarios.some(usuario => usuario.dni === dni && usuario.password === password)); // Convertir el JSON a un array de objetos Usuario
      return usuarios.some(usuario => usuario.dni === dni && usuario.password === password); // Devolver true si el DNI coincide con alguno de los usuarios
    }
    return false;
  }
  guardarSesion(dni: string): void {
    localStorage.setItem(this.userLogged, dni);
  }
  cerrarSession():void{
    localStorage.setItem(this.userLogged, "");
  }
  comprobarSession(): boolean{
    if(localStorage.getItem(this.userLogged) == ''){
      return false;
    }else{
      return true;
    }
  }
}

