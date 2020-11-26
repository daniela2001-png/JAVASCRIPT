/*

En algunos casos, puede desestructurar el objeto en un argumento de función.

Considere el siguiente código:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
Esto efectivamente destruye el objeto enviado a la función. Esto también se puede hacer en el lugar:

const profileUpdate = ({ name, age, nationality, location }) => {

Cuando profileDatase pasa a la función anterior, los valores se desestructuran del parámetro de función para su uso dentro de la función.

Utilice la asignación de desestructuración dentro del argumento de la función halfpara enviar solo maxy mindentro de la función.

*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const s = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: 75,
  average: 35.85
};

const half = ({ max, min }) => ((max + min) / 2.0);
console.log(half(s));