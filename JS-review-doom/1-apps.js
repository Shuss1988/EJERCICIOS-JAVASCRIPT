/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/

const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const  mybody = document.querySelector("body");
const createUl = document.createElement("ul");
mybody.appendChild(createUl)
for (const country of countries1) {
    const li = document.createElement("li");
    let createCountry = document.createTextNode(country);
    createUl.appendChild(li);
    li.appendChild(createCountry);  
}
/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/
let deteleP = document.querySelector(".fn-remove-me");
deteleP.remove();

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const  myDiv = document.querySelector("div");
const dFDiv = document.querySelector("div[data-function]");
const createUls = document.createElement("ul");
myDiv.appendChild(createUls);
 for (const car of cars) {
    const li = document.createElement("li");
    let createCar = document.createTextNode(car);
    createUls.appendChild(li);
    li.appendChild(createCar);
}

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const  mybody2 = document.querySelector("body");
const createDiv = document.createElement("div");
mybody2.appendChild(createDiv);
for (const country of countries) {
    const createH4 = document.createElement("h4");
    let createCountry2 = document.createTextNode(country);
    createDiv.appendChild(createH4);
    h4.appendChild(createCountry2);
    const myH4 = document.querySelector("h4");
    myH4.insertAdjacentHTML(`afterbegin`,
    `<h4>Random title</h4>`  
    )
}
/*
const myDiv2 = document.querySelector("div");
const createMyImg = document.createElement("imgUrl");
myDiv2.appendChild(createMyImg);
for (let index = 0; index < imgUrl.length; index++) {
    const createImg = document.createElement("imgUrl");
    let img = document.createTextNode(i);
    createMyImg.appendChild(createImg);
    imgUrl.appendChild(img);*/
 

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/