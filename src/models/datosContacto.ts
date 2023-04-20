export class datosContacto{
  pais:string;
  provincia:string;
  ciudad:string;
  calle:string;
  piso:string;
  numero:string;
  constructor(
    pais: string,
    provincia: string,
    ciudad: string,
    calle: string,
    piso: string,
    numero: string
) {
    this.pais = pais
    this.provincia = provincia
    this.ciudad = ciudad
    this.calle = calle
    this.piso = piso
    this.numero = numero
  }
}
