const { task, src, dest } = require('gulp');
const server = require('gulp-server-livereload');

// task #1
task('build', function (cb) {
    console.log('soy una tarea')
    setTimeout(cb, 2000);
})

// task #2
task('copy', function (cb) {
    src('a-copiar.txt').pipe(dest('directorio-a-pegar')) // va a insertar el txt file y loc ipoara en el folder (directorioa-pegar) cada que vez que ejecutemos el npm run copiar-file
    cb();
})

// ahora crearemos una tarea que inicie un server con gulp!
task('init-server', function (cb) {
    console.log('Iniciando servidor en el puerto 5000')
    src('www').pipe(server({
        "livereload": true,
        "port": 5000,
        "livereload.clientConsole": true,
        "defaultFile": "daniela.html",
        "log": "debug"
    }))
    cb();
})
