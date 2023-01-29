/***Iteración #4: Métodos findArrayIndex**

Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
Sugerencia de función:*/

let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const findArrayIndex = (array, text) => {
    return array.indexOf(text);
}
console.log(findArrayIndex(animals, 'Mosquito'));   //  1
console.log(findArrayIndex(animals, 'Salamandra')); //  2
console.log(findArrayIndex(animals, 'Ajolote'));    //  3
console.log(findArrayIndex(animals, 'Lagarto'));    // -1