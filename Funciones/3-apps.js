//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(param) {
   let sumNumbers = 0;
 for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
 }
 return sumNumbers
}

const totalsuma = sumAll(numbers)
console.log(totalsuma);