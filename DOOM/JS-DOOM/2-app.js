//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
document.body.appendChild(div);


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const p = document.createElement("p");
document.body.appendChild(p);
div.appendChild(p);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div1 = document.createElement("div");

for (let i = 0; i < 6; i++){
const ps = document.createElement("p");
div1.appendChild(ps);
}
document.body.appendChild(div1);


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pContent = document.createTextNode('soy dinámico');
console.log(pContent);
p.appendChild(pContent);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const myH2 = document.querySelector("h2.fn-insert-here");
myH2.innerHTML += `Wubba Lubba dub dub`;

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const div2 = document.createElement("ul");
for (const iterator of apps) {

    const lis = document.createElement ("li");
    div2.appendChild(lis);
    const text = document.createTextNode(iterator);
    lis.appendChild(text);
}
    
document.body.appendChild(div2);

    
//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const class1 = document.querySelectorAll(".fn-remove-me");

for (const iterator of class1) {
    iterator.remove();
}
//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.  Recuerda que no solo puedes insertar elementos con .appendChild.

const pDiv = document.querySelector("div")
pDiv.insertAdjacentHTML(
    "afterend", `<p>'Voy en medio!'</p>`
);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-he

 const pDos = document.querySelectorAll("div.fn-insert-here");
for (let index = 0; index < pDos.length; index++) {
  pDos[index].innerHTML += `<p>Voy dentro!</p>`
    
}
