// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const myButton = document.querySelector(".showme");
console.log(myButton);


//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const myPs = document.querySelector("p");
console.log(myPs);


//1.3 Usa querySelector para mostrar por consola todos los p
const myH1 = document.querySelector("#pillado");
console.log(myH1);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const myH4 = document.querySelectorAll(".pokemon");
console.log(myH4);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/
const dFSpan = document.querySelectorAll("span", ["data-function"]);
console.log(dFSpan);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/
console.log(dFSpan [2]);
