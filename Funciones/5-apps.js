//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const averageWord = (param) => {
    let suma = 0;
  
    for (const item of param) {
      if (typeof item == "number") {
        suma += item;
      } else {
        suma += item.length;
      }
    }
    return suma;
  };