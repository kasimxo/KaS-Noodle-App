export class CompetenciaDTO {

    ras
    nombre
    pag
    siglas
    nivel   //basico medio superior

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
        this.nombre = nombre.trim();
        this.pag = index;
        this.ras = {}
        this.nombreCortoCSV = nombre.trim();
    }
}