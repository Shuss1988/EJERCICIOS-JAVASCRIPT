//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1.splice(0, 1, "IROMAN");
console.log(avengers1);

/*1.3 console numero de elementos en el array usando la propiedad correcta de Array.*/
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers2.length);

/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array*/
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 3]);



//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1, 1);
console.log(rickAndMortyCharacters3);



const name = "Jesús";
const surname = "Roman";
const age = 34;
const quore = `hola, me ${name} ${surname} y tengo ${age} años`;
console.log(quore);

