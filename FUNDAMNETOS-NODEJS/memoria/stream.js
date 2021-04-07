const stream = require('stream')
const { Readable } = stream
const zlib = require('zlib')
const http = require('http');
const fs = require('fs');
const rs = new Readable()


// stream por stodut (ficheros) pero creando mi objeto stream :3
rs.setEncoding('UTF8')
rs.push('estare ');
rs.push('en la salida!\n');
rs.push(null);

rs.pipe(process.stdout);


// stream por stdout
let readbleStream = fs.createReadStream(__dirname + '/input.txt')
readbleStream.on('data', (chunk) => {
    console.log(chunk.toString())
})


// stream por request
const server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/input.txt');
    stream.pipe(res);
});
server.listen(8000);


// streams duplex leemos un fichero lo comprimimos y guardarlo en un nuevo fichero con la nueva extensión de la compresión
fs.createReadStream(__dirname.concat('/input.txt'))
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))
