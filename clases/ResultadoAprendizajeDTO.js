export class ResultadoAprendizajeDTO {

    criterios
    nombre
    pag

    idPadreCSV
    idCSV
    nombreCortoCSV
    descripcionCSV
    descripcionFormatoCSV
    valoresEscalaCSV
    configuracionEscalaCSV
    tipoReglaCSV
    resultadoReglaCSV
    configuracionReglaCSV
    idReferenciasCruzadasCompetenciasCSV
    idExportacionCSV
    esMarcoCompetenciasCSV
    taxonomiaCSV

    constructor(nombre, index) {
        this.nombre = nombre
        this.descripcionCSV = nombre
        this.pag = index
        this.criterios = {}
    }
}