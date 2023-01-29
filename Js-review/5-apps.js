/***Iteración #5: Función rollDice**

Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();***/

function rollDice(numFaces) {
    // Utilizamos Math.random() para generar un número aleatorio entre 0 y 1
    let randomNumber = Math.random();
    // Multiplicamos el número aleatorio por el número de caras del dado
    let result = Math.floor((randomNumber * numFaces) + 1);
    // Retornamos el resultado
    return result;
};
let sixSidedDice = rollDice(6);
console.log(sixSidedDice); 



