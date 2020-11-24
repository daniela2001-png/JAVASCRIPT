/*
ES6: Use la asignación de desestructuración para asignar variables de objetos anidados
Puede utilizar los mismos principios de las dos lecciones anteriores para desestructurar valores de objetos anidados.

Usando un objeto similar a los ejemplos anteriores:

const user = {
    johnDoe: {
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
}
};
A continuación, se explica cómo extraer los valores de las propiedades del objeto y asignarlos a variables con el mismo nombre:
const { johnDoe: { age, email }} = user;
Y así es como puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:

const { johnDoe: { age: userAge, email: userEmail }} = user;
*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  // Only change code above this line
