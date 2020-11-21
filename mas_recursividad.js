/*

Continuando con el desafío anterior, le brindamos otra oportunidad para crear una función recursiva para resolver un problema.

Hemos definido una función nombrada rangeOfNumberscon dos parámetros. La función debe devolver una matriz de enteros que comienza con un número representado por el startNumparámetro y termina con un número representado por el endNumparámetro. El número inicial siempre será menor o igual que el número final. Tu función debe usar la recursividad llamándose a sí misma y no usar bucles de ningún tipo. También debería funcionar para casos en los que ambos startNumy endNumson iguales.
*/

// solucion

function rangeOfNumbers(startNum, endNum) {
  if (endNum === startNum)
    return [startNum];
  var my_function = rangeOfNumbers(startNum, endNum -1);
  my_function.push(endNum);
  return my_function
};

console.log(rangeOfNumbers(1, 5));
