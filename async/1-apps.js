/*1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js.*/

const json = async() => {
    const data = await fetch('https://api.agify.io?name=michael'
    );
    const json = await data.json();
   console.log(json);
}
json();

/*1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/
const baseUrl = 'https://api.nationalize.io';

const myInput = document.querySelector('input');
const myButton = document.querySelector('#button');

const json2 = async() => {
    const data = await fetch(`${baseUrl}?name=${myInput.value}`);
    const json = await data.json();
    console.log(json);
}
    myButton.addEventListener("click", () => {
    myInput.addEventListener("input", () =>{
    })
    json2(myInput.value);
})

//1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.






//1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.
