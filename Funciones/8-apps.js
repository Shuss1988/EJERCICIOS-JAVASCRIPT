//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  let duplicados = [];
  const tempArray = [...counterWords].sort();
  for (let index = 0; index < tempArray.length; index++) {
    if(tempArray[index + 1] === tempArray[index]){
      duplicados.push(tempArray[index]);
    }
  }
  console.log(duplicados);
  

   
