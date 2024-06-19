import fs from 'node:fs'
import pdf from 'pdf-parse'


function base64toPdf(base64) {
    //El archivo como base64 incluye una cabecera inicial que hay que eliminar
    var matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    //Cambiar por async
    fs.writeFileSync('archivo.pdf', matches[2], 'base64')

}



//Funcion que procesa el contenido de un pdf y extrae el marco de competencias
//Acepta el contenido del pdf como base64 tal y como se recibe en la petición
export function pdfToMarco(body) {
    console.log("Hemos entrado a procesar el marco")
    base64toPdf(JSON.parse(body))
    let dataBuffer = fs.readFileSync('archivo.pdf')
    pdf(dataBuffer).then(function (data) {
        console.log("Numero de páginas: ", data.numpages)
        console.log(data.text)
    }).catch(function (err) {
        console.log("Se ha producido un error procesando el archivo pdf: ", err, err.msg)
    })
}