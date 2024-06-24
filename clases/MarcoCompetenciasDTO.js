export class MarcoCompetenciasDTO {

    //Variables
    denominacion; //Desarrollo de Aplicaciones Multiplataforma
    siglas; //DAM
    nivel; // B M S (Básico, Medio, Superior) 
    /// <summary>
    /// Identifica si este marco ha sido compartido contigo o lo has creado tu
    /// Default: false
    esCompartido = false;
    idPadreCSV;
    idCSV;
    nombreCortoCSV;
    descripcionCSV;
    descripcionFormatoCSV;
    valoresEscalaCSV;
    configuracionEscalaCSV;
    tipoReglaCSV;
    resultadoReglaCSV;
    configuracionReglaCSV;
    idReferenciasCruzadasCompetenciasCSV;
    idExportacionCSV;
    esMarcoCompetenciasCSV;
    taxonomiaCSV;

    competencias = {};

    denominacionToSiglas(denominacion) {
        let siglas = "";
        denominacion.split(" ").forEach((palabra) => {
            if (palabra.Length > 1 && char.IsUpper(palabra[0])) {
                siglas += palabra[0];
            }
        })
        console.log("Denominación: ", denominacion)
        console.log("Siglas: ", siglas)
        return siglas;
    }

    categoria() {
        if (this.nivel == null) { return ""; }
        switch (this.nivel) {
            case "B":
                return "GB";
            case "M":
                return "GM";
            case "S":
                return "GS";
            default:
                return "";
        }
    }

    generarNombreCorto() {
        var cat = this.categoria()
        return "CFP" + cat + " " + this.siglas;
    }



    ID() {
        var cat = this.categoria()
        if (cat != null && this.siglas != null) {
            return "mc_" + categoria().toLowerCase() + "_" + this.siglas.toLowerCase();
        }
        else {
            return "";
        }
    }
}