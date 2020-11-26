/*

ES6: use captadores y definidores para controlar el acceso a un objeto
Puede obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

Estos se denominan clásicamente getters y setters .

Las funciones de obtención están destinadas a simplemente devolver (obtener) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones de establecimiento están destinadas a modificar (establecer) el valor de la variable privada de un objeto en función del valor pasado a la función de establecimiento. Este cambio podría implicar cálculos o incluso sobrescribir completamente el valor anterior.


class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor
Observe la sintaxis utilizada para invocar al getter y al setter.
Ni siquiera parecen funciones. Los captadores y definidores son importantes porque ocultan los detalles de implementación internos.
Nota: Es una convención preceder el nombre de una variable privada con un guión bajo ( _).
Sin embargo, la práctica en sí no convierte una variable en privada.

*/

/*


*/

// Only change code below this line
class Thermostat {
    constructor(temperature_F) {
        // es el init de la clase
        this.temperature_F = temperature_F;
    }
    // creamos el getter del objeto
    get temperature() {
        // convertimos los grados F a C
        this.temperature_F = 5 / 9 * (this.temperature_F - 32)
        return this.temperature_F;
    }
    // setter
    set temperature(update) {
        // convierto los grados de C a F
        // update es el nuevo valor para convertir bgrados celsius
        this.temperature_F = update * 9.0 / 5 + 32
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26; // aqui entrara al set()
temp = thermos.temperature; // 26 in Celsius aqui al get()
console.log(temp);