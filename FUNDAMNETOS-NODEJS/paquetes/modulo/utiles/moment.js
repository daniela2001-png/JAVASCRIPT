const momento = require('moment')
let moment = momento()

// Para formatear una fecha
console.log(moment.format("M/DD/YYYY HH:MM A"))

// Para validad una fecha
console.log(momento('2020-04-11').isValid()) // Nos dara **true** o **false** dependiendo de si la fecha es valida o no

// Para encontrar cuanto tiempo ha pasado hasta hoy
console.log(momento('2018-04-06').fromNow()); // Hace 3 años

// Para agregar o eliminar años, días o meses
console.log(momento('2020-04-11').add(1, 'years').toString()) // 2021-04-11
console.log(momento('2020-04-11').subtract(1, 'years').toString()) // 2019-04-11
