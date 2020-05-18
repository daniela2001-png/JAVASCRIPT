// Write your code below

let bobsFollowers = ['daniela', 'juan', 'alex', 'dana'];
let tinasFollowers = ['daniela', 'dana', 'alejo'];
let mutualFollowers = [];
//primero valida cuando es daniela osea son iguales
//en la 1ra iteracion y como solo esta daniela retirna 1 push
//luego hasta que (j) es igual al index de dana el ultimo amigo en comun push retorna 2 y se sale del nested loop//
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
      if (tinasFollowers[j] === bobsFollowers[i]){
        console.log(mutualFollowers.push(bobsFollowers[i]));
      }
     }
 console.log(bobsFollowers)
 console.log(tinasFollowers)
 console.log(mutualFollowers)
}
