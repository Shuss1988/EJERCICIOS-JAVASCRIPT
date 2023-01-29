/***Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.
Sugerencia de array:*/
const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
  }
  const futbolistas = ['Messi', 'Cristiano Ronaldo', 'Fernando Murillo', 'Ronalguinho'];
  console.log(swap(futbolistas, 0, 3)); 

  
