/*

ES6: Utilice la asignación de desestructuración para asignar variables de objetos
La desestructuración le permite asignar un nuevo nombre de variable al extraer valores. Puede hacer esto poniendo el nuevo nombre después de dos puntos al asignar el valor.

Usando el mismo objeto del último ejemplo:

const user = { name: 'John Doe', age: 34 };
A continuación, le mostramos cómo puede dar nuevos nombres de variable en la asignación:

const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
Puede leerlo como "obtener el valor de user.namey asignarlo a una nueva variable llamada userName" y así sucesivamente.

*/

// Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Aún debe asignar las variables highTodayy highTomorrowlos valores de todayy tomorrowdesde el HIGH_TEMPERATURESobjeto.
// solucion

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
    
// Only change code below this line
        
//const highToday = HIGH_TEMPERATURES.today;
//const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
    
// Only change code above this line
// aqui expando o desestructuro y asigno nuevos nombres a las properties
const {today:highToday , tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(HIGH_TEMPERATURES);