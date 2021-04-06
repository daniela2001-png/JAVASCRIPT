const bcrypt = require('bcrypt')

let password = 'Icangetallmydreams'
const hashPassword = (password) => {
    let promesa = new Promise((reject, resolve) => {
        bcrypt.hash(password, 10, (error, hash) => {
            error ? reject(error) : resolve(hash)
            bcrypt.compare(password, hash, (error, response) => {
                // retorna un bool de si las contraseñas coinciden o no :3
                try {
                    console.log(response ? 'Las contraseñas coinciden!' : 'Las contraseñas NO coinciden!')
                } catch (error) {
                    console.log('Ha ocurrido un error: ', error)
                }
            })
        })
    })
    return promesa
}

hashPassword(password).then(contraseña => console.log(contraseña)).catch(error => console.log(error))
