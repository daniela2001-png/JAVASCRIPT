/*

AHORA MANEJAREMOS EL MODULO DEL SISTEMA OPERATIVO

*/
const os = require('os')

// Architecture
console.log('Architecture:')
console.log(os.arch())
console.log('')

// Platform
console.log('Platform:')
console.log(os.platform())
console.log('')

// cpus
console.log('cpus')
console.table(os.cpus())
console.log('')

// Errores y señales del sistema
console.log('Erros and signals of the system')
console.log(os.constants)
console.log('')





// Function to convert from bytes to kbytes, mbytes and gbytes
const SIZE = 1024

kb = bytes => { return bytes / SIZE }
mb = bytes => { return kb(bytes) / SIZE }
gb = bytes => { return mb(bytes) / SIZE }

// Total Ram Memory
console.log('Total Ram Memory:')
console.log(`${os.totalmem()} bytes`)
console.log(`${kb(os.totalmem)} kb`)
console.log(`${mb(os.totalmem)} mb`)
console.log(`${gb(os.totalmem)} gb`)
console.log('')

// Free memory we have in bytes units
console.log('Free memory we have in kbytes units')
console.log(`free Ram memory: ${os.freemem()} bytes`)
console.log(`free Ram memory: ${kb(os.freemem())} kb`)
console.log(`free Ram memory: ${mb(os.freemem())} mb`)
console.log(`free Ram memory: ${gb(os.freemem())} mb`)
console.log('')

console.log(os.homedir())
console.log(os.hostname())
console.log(os.networkInterfaces())