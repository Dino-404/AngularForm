export class DatosLaborales {
  fechaInicio: Date;
  fechaFin: Date;
  empresaActual: string;
  pagas: number;
  anyosTrabajado: number;

  constructor(
    fechaInicio: Date,
    fechaFin: Date,
    empresaActual: string,
    pagas: number,
    anyosTrabajado: number
) {
    this.fechaInicio = fechaInicio
    this.fechaFin = fechaFin
    this.empresaActual = empresaActual
    this.pagas = pagas
    this.anyosTrabajado = anyosTrabajado
  }
}
