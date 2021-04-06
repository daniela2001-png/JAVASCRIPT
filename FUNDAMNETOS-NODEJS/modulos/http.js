/*

TIPO DE MODULOS HTTP EN NODE CONECTARSE A UN SERVER O CREAR UNO

*/

const http = require("http")
http.createServer((req, resp) => {
    console.log("start server")
    console.log(req.headers)
    switch (req.url) {
        case '/blog':
            resp.write("BIENVENIDO A MI BLOG")
            resp.end()
            break;
        default:
            resp.write("UUPPS ESTA PAGINA NO EXISTE ERROR 404")
            resp.end()
            break;
    }
    // creamos nuestro header en el response
    // resp.writeHead(201, { 'Content-Type': 'text/plain' })
    // resp.write("HOLA ESTOY APRENDIENDO HTTP MODULO NODE")
    // resp.end()
}).listen(8080)
console.log("ESCUCHANDO EN EL PUERTO 8080")
