export class DatosPersonales {
  nombre: string;
  apellido1: string;
  apellido2: string;
  dni: string;
  mail: string;
  extranjero: boolean;

  constructor(nombre: string, apellido1: string, apellido2: string, dni: string, mail: string, extranjero: boolean) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.dni = dni;
    this.mail = mail;
    this.extranjero = extranjero;
  }
}
