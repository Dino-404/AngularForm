import { datosContacto } from "./datosContacto";
import { DatosLaborales } from "./datosLaborales";
import { DatosPersonales } from "./datosPersonales";

export class Usuario implements datosContacto, DatosLaborales, DatosPersonales {
  pais!: string;
  provincia!: string;
  ciudad!: string;
  calle!: string;
  piso!: string;
  numero!: string;
  fechaInicio!: Date;
  fechaFin!: Date;
  empresaActual!: string;
  pagas!: number;
  anyosTrabajado!: number;
  nombre!: string;
  apellido1!: string;
  apellido2!: string;
  dni: string;
  mail!: string;
  extranjero!: boolean;
  password: string;
  telefono? :string;

  constructor(dni: string, password: string, telefono?:string) {
    this.dni = dni;
    this.password = password;
    this.telefono = telefono;
  }
}
