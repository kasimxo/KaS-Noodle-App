import express from 'express'
import { pdfToMarco } from './clases/pdfToMarco.js'
import path from 'node:path'

const app = express()
app.disable('x-powered-by')

app.listen(8080)

app.get('/', function (req, res) {
    //console.log('Se ha detectado una petición', req)
    res.sendFile(path.join('index.html'), { root: 'public' })
})

app.get('/prueba', function (req, res) {
    //res.setHeader('Content-Type', 'text/html; charset=utf-8')
    console.log('Petición de prueba')
    res.sendFile(path.join('404.html'), { root: 'public' })
})

app.post('/procesadormarco', function (req, res) {
    console.log('Se va a procesar un archivo')
    let body = '';
    //Leemos el base64 enviado como pdf a trozos y lo almacenamos en variable
    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', () => {
        let marcoJSON = pdfToMarco(body)
        console.log("We are donete")
        res.end("Donete")
    })
})


console.log("Servidor iniciado")