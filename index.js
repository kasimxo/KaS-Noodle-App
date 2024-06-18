import http from 'node:http'

http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    console.log('Ha llegado una petición')
    res.end(); //end the response
}).listen(8080)

console.log("test")
console.log("prueba")