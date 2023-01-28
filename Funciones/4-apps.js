

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {

    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
       sumNumbers += numbers[i];
    }

    return sumNumbers/numbers.length;
   }
      
   //console.log(numbers.length);
   const totalsuma = average(numbers)
   console.log(totalsuma); 
   
   

