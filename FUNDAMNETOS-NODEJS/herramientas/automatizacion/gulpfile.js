
const { task } = require('gulp');
task('build', () => {
    console.log('soy una tarea')
});
const build = task('build');
console.log(build)