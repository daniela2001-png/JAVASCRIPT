var contador = 0

// funcion que dice si llueve con un p = 25 % === 0.25 del 100

const llueve = () => Math.random() < 0.25

do {
  contador += 1;
} while (!llueve)

if (contador === 1)
  console.log(`Fui a ver si llovia ${contador} ves`);
else {
  console.log(`Fui a ver si llovia ${contador} veces`);
}
