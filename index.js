import http from 'node:http'

function procesarPeticion(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (req.url === '/prueba') {
        res.end('<p>Has pasado la prueba</p>')
    }
}

http.createServer(procesarPeticion).listen(8080)

console.log("test")
console.log("prueba")